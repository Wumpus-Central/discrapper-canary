n.d(t, { h: () => f });
var r = n(358085),
    i = n(150248),
    a = n(691731),
    o = n(984211);
n(620662);
var s = n(120021),
    l = n(742889),
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
            isRemoteJoin: !1,
        };
    let b = (0, o._)(n);
    return !(0, s.n)(b) || (0, u.y)(b) || (0, a.g)(f, n) || (0, i.H)(p)
        ? {
              canJoin: !1,
              isRemoteJoin: !1,
          }
        : m && g
          ? {
                canJoin: !0,
                isRemoteJoin: !1,
            }
          : (null == (t = p.activity) ? void 0 : t.type) === d.mFx.JOIN && null != n && (0, l.K)(n)
            ? {
                  canJoin: !0,
                  isRemoteJoin: !0,
              }
            : r.isPlatformEmbedded && E
              ? {
                    canJoin: !0,
                    isRemoteJoin: !1,
                }
              : {
                    canJoin: !1,
                    isRemoteJoin: !1,
                };
}
