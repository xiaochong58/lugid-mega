# 操作
  1. 新增的时候弹出新增表单，保存触发新增的操作。
  2. 编辑的时候弹出新增表单，获取本行的数据，保存的时候触发编辑操作。
  3. 删除，弹出删除提示。确定：执行删除操作， 对话框，取消的关闭对话框。
  4. 查询输入条件，回车触发查询操作。 ok
  5. 分页变化，触发分页查询操作。
  6. 表单校验功能，不同页面触发不同的校验规则。
# 组件列表
   导航 Router  
   新增对话框标题 AddDialogTitle
   新增按钮  AddButton
   表格 Table
   查询输入框 (QueryInput)
   分页  Page
   编辑对话框 AddDialog
   编辑取消按钮 CancelButton
   编辑确定按钮 OkButton 
   删除对话框 DeleteDialog
   删除取消按钮  CancelDelete
   删除确定按钮  OkDelete
# 绑定处理
   交互模型
     状态
       showDialog: boolean （新增对话框）
       showDeleteDialog: boolean  （删除对话框）
       formType: 'edit' | 'add'  x
       title: string 当前页面  x
     事件
       QueryInput.onKeyUp -> onQuery
       OkButton.onClick -> [onHideDialog, onAddOrEdit]
       OkDelete.onClick -> onHideDeleteDialog
       CancelDelete.onClck -> onHideDeleteDialog
       [widgetId].onChange -> validate
        ...
     脚本
       validate.js [scope]
         xxxx
       onQuery.js
          mutation.asyncQuery()
       onHideDialog [global]
          showDialog = false;
       onShowDialog [global]
          showDialog = true;
       onAddOrEdit	
           formType === 'edit'
               mutations.asyncEditRecord({})
           formType === 'add'
               mutations.asyncAddRecord({})
             
# 业务模型 
   	 状态绑定
   	    QueryInput.value <-> model.query
   	    [input{fieldName}].value  <->  model.form.[fieldName]
   	    Table.data  ->  model.table
   	    Page.value ->  model.current
   	    Page.pageSize -> model.PageSize
   	    [Label].prefix
   	 事件绑定
   	    OkDelete.onClick -> mutations.deleteRecord

