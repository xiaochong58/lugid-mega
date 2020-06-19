/**
 *
 * create by ligx
 *
 */
import React from 'react';
import { Modal, Message } from '@lugia/lugia-web';
import ShowInfo from '../../../components/ShowInfo/showInfo';
function confirmDelete(content, cb) {
  Modal.confirm({
    title: '确认是否删除',
    content,
    onOk: () => {
      cb && cb();
    },
    okButtonProps: {
      type: 'danger',
    },
  });
}
export default async param => {
  const { props } = param;
  const { columns } = props;
  const { models } = param;
  const [model] = models;
  if (Array.isArray(columns)) {
    const { events } = param;
    const [record] = events;

    confirmDelete(<ShowInfo column={columns} data={record}></ShowInfo>, () => {
      const {
        mutations: { asyncDeleteRecord },
      } = model;
      asyncDeleteRecord({ events });
    });
    return;
  }

  const { getState } = model;
  const stateSelectKeys = getState().get('selected');
  const selectedKeys = stateSelectKeys.toJS ? stateSelectKeys.toJS() : stateSelectKeys;
  console.info(selectedKeys);
  const length = selectedKeys.length;
  if (length < 1) {
    Message.info('请先选择要删除的记录');
    return;
  }
  confirmDelete(`您将删除${length}条记录，是否确认？`, () => {
    const {
      mutations: { asyncDeleteSelected },
    } = model;
    asyncDeleteSelected();
  });
};
