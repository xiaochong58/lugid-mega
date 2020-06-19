console.info(eval(`"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lugiax = _interopRequireDefault(require("@lugia/lugiax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const __LUGIAX_MODEL_DEFINE__ = "k1";
const state = {
  current: 1,
  pageSize: 10,
  total: 1000,
  table: [],
  totalText: "共计0条记录",
  selected: []
};

var _default = _lugiax.default.register({
  model: __LUGIAX_MODEL_DEFINE__,
  state,
  mutations: {
    sync: {
      resetQuery(state) {
        return state;
      },

      add(state) {
        console.log("add");
        return state;
      },

      onSelected(state, param) {
        console.log(param.events);
        const _param$events = param.events,
          events = _param$events === void 0 ? [] : _param$events;

        const _events = _slicedToArray(events, 1),
          _events$ = _events[0],
          seleckKeys = _events$ === void 0 ? [] : _events$;

        return state.set("selected", seleckKeys);
      }

    },
    async: {
      async deleteSelected(state) {
        const selected = state.get("selected").toJS();
        console.info("删除", selected);
        return state;
      },

      async onDelete(state, param) {
        const _param$events2 = param.events,
          events = _param$events2 === void 0 ? [] : _param$events2;

        const _events2 = _slicedToArray(events, 2),
          text = _events2[0],
          record = _events2[1];

        const key = record.key;
        console.info("删除", key);
        return state;
      },

      async onEdit(state, param) {
        const _param$events3 = param.events,
          events = _param$events3 === void 0 ? [] : _param$events3;

        const _events3 = _slicedToArray(events, 2),
          text = _events3[0],
          record = _events3[1];

        const key = record.key;
        console.info("编辑", key);
        return state;
      },

      async onView(state, param) {
        const _param$events4 = param.events,
          events = _param$events4 === void 0 ? [] : _param$events4;

        const _events4 = _slicedToArray(events, 2),
          text = _events4[0],
          record = _events4[1];

        const key = record.key;
        console.info("查看", key);
        return state;
      },

      async query(state) {
        const newTotal = 100;
        state = state.set("total", newTotal);
        return state;
      },

      async onChangePage(state, param) {
        const events = param.events;

        const _events5 = _slicedToArray(events, 1),
          event = _events5[0];

        const current = event.current,
          pageSize = event.pageSize,
          total = event.total;
        state = state.set("current", current);
        state = state.set("pageSize", pageSize);
        state = state.set("selected", fromJS([]));
        return state;
      }

    }
  }
});

exports.default = _default;`));
