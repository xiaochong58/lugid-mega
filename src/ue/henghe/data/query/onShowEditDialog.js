export default param => {
  const { pageData } = param;
  pageData.showDialog = true;
  pageData.formType = 'edit';
  pageData.addDialogTitle = '编辑' + pageData.title;
  console.log('AddDialogTitle', pageData.addDialogTitle);
};
