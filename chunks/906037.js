n.d(t, {
    CR: () => l,
    eM: () => a,
    m3: () => o,
});
var i = n(570140),
    r = n(449224);
function a(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function l(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || a(e) !== a(t)) && o(t, n(t));
}
function o(e, t) {
    var n, l;
    let o = a(e),
        s = r.Z.getGame();
    i.Z.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: null != (n = null == s ? void 0 : s.name) ? n : null,
        gameId: null != (l = null == s ? void 0 : s.id) ? l : null,
        widgetType: e.widget,
        visible: o && t,
        locked: e.locked,
        pinned: e.pinned,
    });
}
