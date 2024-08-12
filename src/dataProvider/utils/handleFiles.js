import urlJoin from 'url-join';

const isFile = (o) => o?.rawFile && o.rawFile instanceof File;
const isFileToDelete = (o) => o?.fileToDelete !== undefined && o?.fileToDelete !== null;

const getUploadsContainerUri = (config) => {
  const serverKey = Object.keys(config.dataServers).find(key => config.dataServers[key].uploadsContainer);
  if (serverKey && config.dataServers[serverKey].uploadsContainer) {
    return urlJoin(config.dataServers[serverKey].baseUrl, config.dataServers[serverKey].uploadsContainer);
  }
  return null;
};

const uploadFile = async (rawFile, config) => {
  const uploadsContainerUri = getUploadsContainerUri(config);
  if (!uploadsContainerUri) throw new Error("You must define an uploadsContainer in one of the server's configuration");

  const response = await config.httpClient(uploadsContainerUri, {
    method: 'POST',
    body: rawFile,
    headers: new Headers({
      'Content-Type': rawFile.type
    })
  });

  if (response.status === 201) {
    return response.headers.get('Location');
  }
  return null;
};

const deleteFiles = async (filesToDelete, config) => {
  return Promise.all(
    filesToDelete.map(file =>
      config.httpClient(file, {
        method: 'DELETE'
      })
    )
  );
};

/*
 * Look for raw files in the record data.
 * If there are any, upload them and replace the file by its URL.
 */
const uploadAllFiles = async (record, config) => {
  const filesToDelete = [];
  const updatedRecord = { ...record };

  for (const property of Object.keys(record)) {
    const value = record[property];
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const itemValue = value[i];
        if (isFile(itemValue)) {
          if (isFileToDelete(itemValue)) {
            filesToDelete.push(itemValue.fileToDelete);
          }
          updatedRecord[property][i] = await uploadFile(itemValue.rawFile, config);
        } else if (isFileToDelete(itemValue)) {
          filesToDelete.push(itemValue.fileToDelete);
          updatedRecord[property][i] = null;
        }
      }
    } else if (isFile(value)) {
      if (isFileToDelete(value)) {
        filesToDelete.push(value.fileToDelete);
      }
      updatedRecord[property] = await uploadFile(value.rawFile, config);
    } else if (isFileToDelete(value)) {
      filesToDelete.push(value.fileToDelete);
      updatedRecord[property] = null;
    }
  }

  return {
    updatedRecord,
    filesToDelete
  };
};

export default {
  upload: uploadAllFiles,
  delete: deleteFiles
};
