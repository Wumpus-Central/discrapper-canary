n.d(t, {
    CR: () => r,
    eM: () => o,
    m3: () => s
});
var i = n(570140),
    a = n(449224);
function o(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function r(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && s(t, n(t));
}
function s(e, t) {
    var n, r;
    let s = o(e),
        l = a.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == l ? void 0 : l.name) && void 0 !== n ? n : null,
        gameId: null !== (r = null == l ? void 0 : l.id) && void 0 !== r ? r : null,
        widgetType: e.widget,
        visible: s && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
