i.d(t, { Al: () => r, Gv: () => l, fh: () => s, rZ: () => a });
var n = i(73153);
function l(e) {
    n.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function s(e) {
    n.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function a(e) {
    n.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function r(e) {
    n.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
