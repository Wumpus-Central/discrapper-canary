"use strict";
n.d(t, { Al: () => s, Gv: () => a, fh: () => r, rZ: () => _ });
var i = n(73153);
function a(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function r(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function _(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function s(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
