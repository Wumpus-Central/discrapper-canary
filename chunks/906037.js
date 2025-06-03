n.d(t, {
    CR: () => s,
    eM: () => o,
    m3: () => l
});
var i = n(570140),
    r = n(449224);
function o(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function s(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || o(e) !== o(t)) && l(t, n(t));
}
function l(e, t) {
    var n, s;
    let l = o(e),
        a = r.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null != (n = null == a ? void 0 : a.name) ? n : null,
        gameId: null != (s = null == a ? void 0 : a.id) ? s : null,
        widgetType: e.widget,
        visible: l && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
