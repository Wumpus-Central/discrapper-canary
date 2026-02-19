"use strict";
n.d(t, { Al: () => a, Gv: () => s, fh: () => l, rZ: () => r });
var i = n(73153);
function s(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function l(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function r(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function a(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
