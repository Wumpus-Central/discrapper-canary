i.d(n, { Al: () => a, Gv: () => r, fh: () => c, rZ: () => u });
var e = i(228366);
function r(t) {
    e.h.dispatch({ type: "CATEGORY_COLLAPSE", id: t });
}
function c(t) {
    e.h.dispatch({ type: "CATEGORY_EXPAND", id: t });
}
function u(t) {
    e.h.dispatch({ type: "CATEGORY_COLLAPSE_ALL", guildId: t });
}
function a(t) {
    e.h.dispatch({ type: "CATEGORY_EXPAND_ALL", guildId: t });
}
