n.d(t, {
    CR: () => a,
    eM: () => l,
    m3: () => o,
});
var i = n(570140),
    r = n(449224);
function l(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || l(e) !== l(t)) && o(t, n(t));
}
function o(e, t) {
    var n, a;
    let o = l(e),
        s = r.Z.getGame();
    i.Z.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: null != (n = null == s ? void 0 : s.name) ? n : null,
        gameId: null != (a = null == s ? void 0 : s.id) ? a : null,
        widgetType: e.widget,
        visible: o && t,
        locked: e.locked,
        pinned: e.pinned,
    });
}
