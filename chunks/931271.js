n.d(t, { h: () => u });
var r = n(358085),
    i = n(150248),
    o = n(691731),
    a = n(984211);
n(620662);
var s = n(120021),
    l = n(994339),
    c = n(233487);
function u(e) {
    let {
        presenceActivity: t,
        currentUserPresenceActivity: n,
        currentUserId: u,
        message: d,
        application: f,
        isEmbeddedApplication: _,
        isFrameApplication: p,
        isGameLaunchable: h,
    } = e;
    if (d.author.id === u || !(0, l.Z)(t, d, f.id)) return !1;
    let m = (0, a._)(t);
    return (
        !(!(0, s.n)(m) || (0, c.y)(m) || (0, o.g)(n, t) || (0, i.H)(d)) &&
        ((!!_ && !!p) || (!!r.isPlatformEmbedded && !!h))
    );
}
n(981631);
