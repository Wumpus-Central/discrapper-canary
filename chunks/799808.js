n.d(t, {
    AE: () => l,
    Mw: () => a,
    j_: () => o,
});
var i = n(73153),
    r = n(157257);

function l(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}

function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || l(e) !== l(t)) && o(t, n(t));
}

function o(e, t) {
    var n, a;
    let o = l(e),
        s = r.A.getGame();
    i.h.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: null != (n = null == s ? void 0 : s.name) ? n : null,
        gameId: null != (a = null == s ? void 0 : s.id) ? a : null,
        widgetType: e.widget,
        visible: o && t,
        locked: e.locked,
        pinned: e.pinned,
    });
}
