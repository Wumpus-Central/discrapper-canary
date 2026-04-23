"use strict";
n.d(t, { AE: () => l, Mw: () => a, j_: () => r });
var i = n(73153),
    s = n(157257);
function l(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || l(e) !== l(t)) && r(t, n(t));
}
function r(e, t) {
    let n = l(e),
        a = s.A.getGame();
    i.h.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: a?.name ?? null,
        gameId: a?.id ?? null,
        widgetType: e.widget,
        visible: n && t,
        locked: e.locked,
        pinned: e.pinned,
    });
}
