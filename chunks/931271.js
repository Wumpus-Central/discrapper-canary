n.d(t, { h: () => u });
var r = n(358085),
    i = n(150248),
    l = n(691731),
    a = n(984211);
n(620662);
var o = n(120021),
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
        isGameLaunchable: _,
    } = e;
    if (d.author.id === u || !(0, s.Z)(t, d, p.id)) return !1;
    let g = (0, a._)(t);
    return (
        !(!(0, o.n)(g) || (0, c.y)(g) || (0, l.g)(n, t) || (0, i.H)(d)) &&
        ((!!m && !!f) || (!!r.isPlatformEmbedded && !!_))
    );
}
n(981631);
