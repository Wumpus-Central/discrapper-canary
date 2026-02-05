n.d(t, { AE: () => a, Mw: () => s, j_: () => r });
var i = n(73153),
    l = n(157257);
function a(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function s(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || a(e) !== a(t)) && r(t, n(t));
}
function r(e, t) {
    let n = a(e),
        s = l.A.getGame();
    i.h.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: s?.name ?? null,
        gameId: s?.id ?? null,
        widgetType: e.widget,
        visible: n && t,
        locked: e.locked,
        pinned: e.pinned,
    });
}
