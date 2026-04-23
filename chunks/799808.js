n.d(t, { AE: () => r, Mw: () => l, j_: () => s });
var i = n(228366),
    a = n(157257);
function r(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function l(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || r(e) !== r(t)) && s(t, n(t));
}
function s(e, t) {
    let n = r(e),
        l = a.A.getGame();
    i.h.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: l?.name ?? null,
        gameId: l?.id ?? null,
        widgetType: e.widget,
        visible: n && t,
        locked: e.locked,
        pinned: e.pinned,
    });
}
