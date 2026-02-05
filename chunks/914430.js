n.d(t, { Al: () => r, Gv: () => l, fh: () => s, rZ: () => a });
var i = n(73153);
function l(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE", id: e });
}
function s(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND", id: e });
}
function a(e) {
    i.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: e });
}
function r(e) {
    i.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: e });
}
