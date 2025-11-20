n.d(t, {
    h: () => _,
    p: () => p,
});
var r = n(358085),
    i = n(150248),
    a = n(691731),
    o = n(984211),
    s = n(687131),
    l = n(620662),
    c = n(120021),
    u = n(994339),
    d = n(233487),
    f = n(981631);
function _(e) {
    var t;
    let {
        presenceActivity: n,
        currentUserPresenceActivity: l,
        currentUserId: _,
        message: p,
        application: h,
        isEmbeddedApplication: m,
        isFrameApplication: g,
        isGameLaunchable: E,
    } = e;
    if (p.author.id === _ || !(0, u.Z)(n, p, h.id))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    let b = (0, o._)(n);
    if (!(0, c.n)(b) || (0, d.y)(b) || (0, a.g)(l, n) || (0, i.H)(p))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    if (m && g)
        return {
            canJoin: !0,
            remoteJoinPlatform: null,
        };
    if ((null == (t = p.activity) ? void 0 : t.type) === f.mFx.JOIN && null != n) {
        let e = (0, s.z)(n);
        if (null != e)
            return {
                canJoin: !0,
                remoteJoinPlatform: e,
            };
    }
    return (0, r.platformSupportsActivityJoin)() && E
        ? {
              canJoin: !0,
              remoteJoinPlatform: null,
          }
        : {
              canJoin: !1,
              remoteJoinPlatform: null,
          };
}
function p(e, t, n, i) {
    return !(null == e || !(0, u.Z)(e, n, i.id) || !(0, l.Z)(e, f.xjy.SYNC) || !r.isPlatformEmbedded || (0, a.g)(t, e));
}
