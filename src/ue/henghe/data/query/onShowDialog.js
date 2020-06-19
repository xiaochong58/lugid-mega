/**
 *
 * create by ligx
 *
 */

export default param => {
  const { pageData } = param;
  pageData.showDialog = true;
  pageData.formType = 'add';
  pageData.addDialogTitle = '添加' + pageData.title;
};
