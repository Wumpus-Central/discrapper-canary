"use strict";
n.d(t, { AE: () => a, Mw: () => l, j_: () => r });
var i = n(73153),
    s = n(157257);
function a(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function l(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || a(e) !== a(t)) && r(t, n(t));
}
function r(e, t) {
    let n = a(e),
        l = s.A.getGame();
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
