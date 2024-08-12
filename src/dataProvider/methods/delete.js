import handleFiles from '../utils/handleFiles';

const deleteMethod = (config) => async (resourceId, params) => {
  const { httpClient } = config;

  await httpClient(`${params.id}`, {
    method: 'DELETE'
  });

  if (params.meta?.filesToDelete) {
    await handleFiles.delete(params.meta.filesToDelete, config);
  }

  return { data: { id: params.id } };
};

export default deleteMethod;
