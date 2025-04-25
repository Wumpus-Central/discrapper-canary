n.d(t, {
    CR: () => o,
    eM: () => s,
    m3: () => l
});
var i = n(570140),
    r = n(449224);
function s(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function o(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && l(t, n(t));
}
function l(e, t) {
    var n, o;
    let l = s(e),
        a = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null != (n = null == a ? void 0 : a.name) ? n : null,
        gameId: null != (o = null == a ? void 0 : a.id) ? o : null,
        widgetType: e.widget,
        visible: l && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
