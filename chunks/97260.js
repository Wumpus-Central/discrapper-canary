"use strict";
n.d(t, { A: () => i });
var r = n(73153);
let i = {
    addKeybind: (e) => r.h.dispatch({ type: "KEYBINDS_ADD_KEYBIND", keybind: e }),
    setKeybind: (e) => r.h.dispatch({ type: "KEYBINDS_SET_KEYBIND", keybind: e }),
    deleteKeybind: (e) => r.h.dispatch({ type: "KEYBINDS_DELETE_KEYBIND", id: e }),
    enableAll: (e) => r.h.dispatch({ type: "KEYBINDS_ENABLE_ALL_KEYBINDS", enable: e }),
};
