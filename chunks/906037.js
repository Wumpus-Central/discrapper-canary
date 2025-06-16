n.d(t, {
    CR: () => l,
    eM: () => o,
    m3: () => s
});
var i = n(570140),
    r = n(449224);
function o(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function l(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && s(t, n(t));
}
function s(e, t) {
    var n, l;
    let s = o(e),
        a = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null != (n = null == a ? void 0 : a.name) ? n : null,
        gameId: null != (l = null == a ? void 0 : a.id) ? l : null,
        widgetType: e.widget,
        visible: s && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
