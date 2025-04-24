n.d(t, {
    OR: () => o,
    _c: () => a,
    bb: () => u,
    iD: () => s
});
var i = n(442837),
    l = n(581883),
    r = n(871465);
function o(e) {
    return c(
        e,
        void 0,
        (0, i.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.settings.guilds) ? void 0 : e.guilds;
        })
    );
}
function s(e) {
    var t, n;
    return c(e, void 0, null != (n = null == (t = l.Z.settings.guilds) ? void 0 : t.guilds) ? n : {});
}
function a(e, t) {
    let n = (0, i.e7)([l.Z], () => {
        var e;
        return null == (e = l.Z.settings.guilds) ? void 0 : e.guilds;
    });
    return null != t ? c(e, t, n) : void 0;
}
function u(e, t) {
    var n, i;
    let r = null != (i = null == (n = l.Z.settings.guilds) ? void 0 : n.guilds) ? i : {};
    return null != t ? c(e, t, r) : void 0;
}
function c(e, t, n) {
    var i, l, o;
    if (null == n) return;
    let s = null != t ? (null == (i = n[e]) ? void 0 : i.channels[t]) : n[e],
        a = null == s ? void 0 : s.customNotificationSoundConfig;
    return null != a && null != (o = null == a || null == (l = a.notificationSoundPackId) ? void 0 : l.value) ? Object.values(r.YC).find((e) => e === o) : void 0;
}
