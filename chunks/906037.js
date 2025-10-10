n.d(t, {
    CR: () => o,
    eM: () => l,
    m3: () => a,
});
var i = n(570140),
    r = n(449224);
function l(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function o(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || l(e) !== l(t)) && a(t, n(t));
}
function a(e, t) {
    var n, o;
    let a = l(e),
        s = r.Z.getGame();
    i.Z.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: null != (n = null == s ? void 0 : s.name) ? n : null,
        gameId: null != (o = null == s ? void 0 : s.id) ? o : null,
        widgetType: e.widget,
        visible: a && t,
        locked: e.locked,
        pinned: e.pinned,
    });
}
