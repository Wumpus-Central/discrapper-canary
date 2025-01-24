n.d(t, {
    CR: function () {
        return a;
    },
    eM: function () {
        return r;
    },
    m3: function () {
        return l;
    }
});
var i = n(570140),
    o = n(449224);
function r(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || r(e) !== r(t)) && l(t, n(t));
}
function l(e, t) {
    var n, a;
    let l = r(e),
        s = o.Z.getGame();
    i.Z.dispatch({
        type: 'OVERLAY_WIDGET_CHANGED',
        gameName: null !== (n = null == s ? void 0 : s.name) && void 0 !== n ? n : null,
        gameId: null !== (a = null == s ? void 0 : s.id) && void 0 !== a ? a : null,
        widgetType: e.widget,
        visible: l && t,
        locked: e.locked,
        pinned: e.pinned
    });
}
