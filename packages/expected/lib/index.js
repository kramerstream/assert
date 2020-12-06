"use strict";

var _core = require("@dogmalang/core");

const ValueWrapper = _core.dogma.use(require("./ValueWrapper"));

function should(value) {
  let wrapper;
  {
    if (_core.dogma.isNot(value, _core.promise)) {
      wrapper = ValueWrapper({
        'value': value
      });
    } else {
      wrapper = (0, _core.promise)(async (rslv, rej) => {
        /* istanbul ignore next */
        _core.dogma.expect("rslv", rslv);
        /* istanbul ignore next */


        _core.dogma.expect("rej", rej);

        {
          {
            const [ok, returned] = await _core.dogma.pawait(() => value);

            if (ok) {
              rslv(ValueWrapper({
                'value': returned,
                'fulfilled': true
              }));
            } else {
              rslv(ValueWrapper({
                'value': returned,
                'fulfilled': false
              }));
            }
          }
        }
      });
    }
  }
  return wrapper;
}

module.exports = exports = should;
const plugins = {};

should.plugin = plugin => {
  /* istanbul ignore next */
  _core.dogma.expect("plugin", plugin, [_core.text, _core.map]);

  {
    if (_core.dogma.is(plugin, _core.text)) {
      plugin = _core.dogma.use(require(plugin));
    }

    if (!_core.dogma.getItem(plugins, plugin.name)) {
      _core.dogma.setItem("=", plugins, plugin.name, plugin);

      for (const [key, val] of Object.entries(plugin.members)) {
        {
          if (key != "plugin") {
            _core.dogma.setItem("=", should, key, val);
          }
        }
      }
    }

    return should;
  }
};