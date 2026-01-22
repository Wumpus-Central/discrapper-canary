n.d(t, {
    A: () => d,
    b: () => u,
}),
    n(896048);
var r = n(311907),
    i = n(260509),
    a = n(71393),
    s = n(576705),
    o = n(287809),
    l = n(488926),
    c = n(652215);
function u(e, t) {
    let [n, r, u] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, a.A, s.A],
        d = r.getGuild(e),
        f = n.getUser(t);
    return (
        !(
            null == d ||
            null == f ||
            f.isNonUserBot() ||
            (0, i.bM)(d, f) ||
            l.$3({
                permission: c.xBc.ADMINISTRATOR,
                user: f,
                context: d,
            })
        ) && u.canManageUser(c.xBc.MODERATE_MEMBERS, f, d)
    );
}
function d(e, t) {
    return (0, r.bG)([o.default, a.A, s.A], () => u(e, t, [o.default, a.A, s.A]), [e, t]);
}
