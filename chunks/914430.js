"use strict";
n.d(t, { Al: () => o, Gv: () => i, fh: () => r, rZ: () => c });
var a = n(73153);
function i(e) {
    a.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function r(e) {
    a.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function c(e) {
    a.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function o(e) {
    a.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
