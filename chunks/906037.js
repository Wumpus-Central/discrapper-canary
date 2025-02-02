n.d(t, {
    CR: () => o,
    eM: () => a,
    m3: () => s
});
var i = n(570140),
    r = n(449224);
function a(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function o(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || a(e) !== a(t)) && s(t, n(t));
}
function s(e, t) {
    var n, o;
    let s = a(e),
        d = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == d ? void 0 : d.name) && void 0 !== n ? n : null,
        gameId: null !== (o = null == d ? void 0 : d.id) && void 0 !== o ? o : null,
        widgetType: e.widget,
        visible: s && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
