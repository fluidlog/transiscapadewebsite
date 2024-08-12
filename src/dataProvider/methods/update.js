import handleFiles from '../utils/handleFiles';

const updateMethod = (config) => async (resourceId, params) => {
  const { httpClient, jsonContext } = config;

  // Upload files, if there are any
  const { updatedRecord, filesToDelete } = await handleFiles.upload(params.data, config);
  params.data = updatedRecord;

  await httpClient(`${params.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      '@context': jsonContext,
      ...params.data
    })
  });

  // Delete files only if update is successful
  await handleFiles.delete(filesToDelete, config);

  return { data: params.data };
};

export default updateMethod;
