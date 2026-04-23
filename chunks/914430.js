"use strict";
n.d(t, { Al: () => s, Gv: () => r, fh: () => a, rZ: () => l });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function a(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function l(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function s(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
