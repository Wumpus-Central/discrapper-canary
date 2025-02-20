n.d(t, {
    CR: () => a,
    eM: () => o,
    m3: () => s
});
var i = n(570140),
    r = n(449224);
function o(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && s(t, n(t));
}
function s(e, t) {
    var n, a;
    let s = o(e),
        c = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == c ? void 0 : c.name) && void 0 !== n ? n : null,
        gameId: null !== (a = null == c ? void 0 : c.id) && void 0 !== a ? a : null,
        widgetType: e.widget,
        visible: s && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
