n.d(t, {
    OR: () => s,
    _c: () => a,
    bb: () => u,
    iD: () => o
});
var i = n(442837),
    r = n(581883),
    l = n(871465);
function s(e) {
    return c(
        e,
        void 0,
        (0, i.e7)([r.Z], () => {
            var e;
            return null == (e = r.Z.settings.guilds) ? void 0 : e.guilds;
        })
    );
}
function o(e) {
    var t, n;
    return c(e, void 0, null != (n = null == (t = r.Z.settings.guilds) ? void 0 : t.guilds) ? n : {});
}
function a(e, t) {
    let n = (0, i.e7)([r.Z], () => {
        var e;
        return null == (e = r.Z.settings.guilds) ? void 0 : e.guilds;
    });
    return null != t ? c(e, t, n) : void 0;
}
function u(e, t) {
    var n, i;
    let l = null != (i = null == (n = r.Z.settings.guilds) ? void 0 : n.guilds) ? i : {};
    return null != t ? c(e, t, l) : void 0;
}
function c(e, t, n) {
    var i, r, s;
    if (null == n) return;
    let o = null != t ? (null == (i = n[e]) ? void 0 : i.channels[t]) : n[e],
        a = null == o ? void 0 : o.customNotificationSoundConfig;
    return null != a && null != (s = null == a || null == (r = a.notificationSoundPackId) ? void 0 : r.value) ? Object.values(l.YC).find((e) => e === s) : void 0;
}
