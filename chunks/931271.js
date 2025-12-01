n.d(t, {
    h: () => p,
    p: () => _,
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
function p(e) {
    var t;
    let {
        presenceActivity: n,
        currentUserPresenceActivity: l,
        currentUserId: p,
        message: _,
        application: m,
        isEmbeddedApplication: h,
        isFrameApplication: g,
        isGameLaunchable: E,
    } = e;
    if (_.author.id === p || !(0, u.Z)(n, _, m.id))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    let b = (0, o._)(n);
    if (!(0, c.n)(b) || (0, d.y)(b) || (0, a.g)(l, n) || (0, i.H)(_))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    if (h && g)
        return {
            canJoin: !0,
            remoteJoinPlatform: null,
        };
    if ((null == (t = _.activity) ? void 0 : t.type) === f.mFx.JOIN && null != n) {
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
function _(e, t, n, i) {
    return !(null == e || !(0, u.Z)(e, n, i.id) || !(0, l.Z)(e, f.xjy.SYNC) || !r.isPlatformEmbedded || (0, a.g)(t, e));
}
