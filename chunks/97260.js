"use strict";
n.d(t, { A: () => r });
var i = n(228366);
let r = {
    addKeybind: (e) => i.h.dispatch({ type: "KEYBINDS_ADD_KEYBIND", keybind: e }),
    setKeybind: (e) => i.h.dispatch({ type: "KEYBINDS_SET_KEYBIND", keybind: e }),
    deleteKeybind: (e) => i.h.dispatch({ type: "KEYBINDS_DELETE_KEYBIND", id: e }),
    enableAll: (e) => i.h.dispatch({ type: "KEYBINDS_ENABLE_ALL_KEYBINDS", enable: e }),
};
