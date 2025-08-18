n.d(t, { h: () => u });
var r = n(358085),
    i = n(150248),
    l = n(691731),
    o = n(984211);
n(620662);
var a = n(120021),
    s = n(994339),
    c = n(233487);
function u(e) {
    let {
        presenceActivity: t,
        currentUserPresenceActivity: n,
        currentUserId: u,
        message: d,
        application: p,
        isEmbeddedApplication: m,
        isFrameApplication: f,
        isGameLaunchable: g,
    } = e;
    if (d.author.id === u || !(0, s.Z)(t, d, p.id)) return !1;
    let _ = (0, o._)(t);
    return (
        !(!(0, a.n)(_) || (0, c.y)(_) || (0, l.g)(n, t) || (0, i.H)(d)) &&
        ((!!m && !!f) || (!!r.isPlatformEmbedded && !!g))
    );
}
n(981631);
