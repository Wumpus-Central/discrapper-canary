n.d(t, {
    CR: () => l,
    eM: () => o,
    m3: () => a
});
var i = n(570140),
    r = n(449224);
function o(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function l(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && a(t, n(t));
}
function a(e, t) {
    var n, l;
    let a = o(e),
        s = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null != (n = null == s ? void 0 : s.name) ? n : null,
        gameId: null != (l = null == s ? void 0 : s.id) ? l : null,
        widgetType: e.widget,
        visible: a && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
