export const getFormKey = (ogKey: string, entity: string) => {
  return ogKey.replace(entity + '-', '');
};
