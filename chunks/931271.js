n.d(t, { h: () => f });
var r = n(358085),
    i = n(150248),
    a = n(691731),
    o = n(984211),
    s = n(687131);
n(620662);
var l = n(120021),
    c = n(994339),
    u = n(233487),
    d = n(981631);
function f(e) {
    var t;
    let {
        presenceActivity: n,
        currentUserPresenceActivity: f,
        currentUserId: _,
        message: p,
        application: h,
        isEmbeddedApplication: m,
        isFrameApplication: g,
        isGameLaunchable: E,
    } = e;
    if (p.author.id === _ || !(0, c.Z)(n, p, h.id))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    let b = (0, o._)(n);
    if (!(0, l.n)(b) || (0, u.y)(b) || (0, a.g)(f, n) || (0, i.H)(p))
        return {
            canJoin: !1,
            remoteJoinPlatform: null,
        };
    if (m && g)
        return {
            canJoin: !0,
            remoteJoinPlatform: null,
        };
    if ((null == (t = p.activity) ? void 0 : t.type) === d.mFx.JOIN && null != n) {
        let e = (0, s.z)(n);
        if (null != e)
            return {
                canJoin: !0,
                remoteJoinPlatform: e,
            };
    }
    return r.isPlatformEmbedded && E
        ? {
              canJoin: !0,
              remoteJoinPlatform: null,
          }
        : {
              canJoin: !1,
              remoteJoinPlatform: null,
          };
}
