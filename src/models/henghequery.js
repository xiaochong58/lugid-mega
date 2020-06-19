import lugiax from '@lugia/lugiax';
import { fromJS } from 'immutable';
const __LUGIAX_MODEL_DEFINE__ = 'henghequery';
const state = {
  current: 1,
  pageSize: 10,
  total: 1000,
  form: {},
  table: [
    { name: 'Jack', age: 28, address: 'some where', key: '1' },
    { name: 'Rose', age: 36, address: 'some where', key: '2' },
    { name: 'Rook', age: 22, address: 'some where', key: '3' },
    { name: 'Lise', age: 33, address: 'some where', key: '4' },
    { name: 'Lise', age: 33, address: 'some where', key: '5' },
    { name: 'Lise', age: 33, address: 'some where', key: '6' },
    { name: 'Lise', age: 33, address: 'some where', key: '7' },
    { name: 'Lise', age: 33, address: 'some where', key: '8' },
    { name: 'Lise', age: 33, address: 'some where', key: '9' },
    { name: 'Lise', age: 33, address: 'some where', key: '10' },
  ],
  selected: [],
};

export default lugiax.register({
  model: __LUGIAX_MODEL_DEFINE__,
  state,
  mutations: {
    sync: {
      unMount(state) {
        console.info('unMount');
        return state;
      },
      didMount(state) {
        console.info('didMount');
        return state;
      },

      onSelected(state, param) {
        console.log(param.events);
        const { events = [] } = param;
        state.getIn(['form', 'name']);

        const [seleckKeys = []] = events;
        return state.set('selected', seleckKeys);
      },
    },
    async: {
      async deleteSelected(state) {
        const selected = state.get('selected').toJS();
        console.info('删除', selected);
        return state;
      },

      async deleteRecord(state, param) {
        const { events = [] } = param;
        const [text, record] = events;
        const { key } = record;
        console.info('删除', key);
        return state;
      },

      async getRecord(state, param) {
        const { id } = param;
        return state;
      },

      addRecord(state) {
        console.log('add');
        return state;
      },

      async editRecord(state, param) {
        const { events = [] } = param;
        const [text, record] = events;
        const { key } = record;
        console.info('编辑', key);
        return state;
      },

      async query(state) {
        const newTotal = 100;
        state = state.set('total', newTotal);
        return state;
      },

      async onChangePage(state, param) {
        const { events } = param;
        const [event] = events;
        const { current, pageSize, total } = event;
        state = state.set('current', current);
        state = state.set('totalText', '共计' + state.get('total') + '条记录');
        state = state.set('pageSize', pageSize);
        state = state.set('selected', fromJS([]));
        return state;
      },
    },
  },
});
