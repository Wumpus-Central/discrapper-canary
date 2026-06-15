"use strict";
n.d(t, { Al: () => o, Gv: () => r, fh: () => s, rZ: () => a });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function s(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function a(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function o(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
