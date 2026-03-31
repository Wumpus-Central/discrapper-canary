a.d(t, { Al: () => o, Gv: () => i, fh: () => r, rZ: () => l });
var n = a(73153);
function i(e) {
    n.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function r(e) {
    n.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function l(e) {
    n.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function o(e) {
    n.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
