n.d(t, {
    CR: () => o,
    eM: () => r,
    m3: () => a
});
var i = n(570140),
    l = n(449224);
function r(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function o(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || r(e) !== r(t)) && a(t, n(t));
}
function a(e, t) {
    var n, o;
    let a = r(e),
        s = l.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == s ? void 0 : s.name) && void 0 !== n ? n : null,
        gameId: null !== (o = null == s ? void 0 : s.id) && void 0 !== o ? o : null,
        widgetType: e.widget,
        visible: a && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
