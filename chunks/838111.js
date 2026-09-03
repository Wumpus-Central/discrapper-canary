n.d(t, { A: () => u, b: () => c });
var i = n(17928),
    r = n(260509),
    a = n(71393),
    s = n(576705),
    l = n(287809),
    o = n(488926),
    d = n(652215);
function c(e, t) {
    let [n, i, c] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.default, a.A, s.A],
        u = i.getGuild(e),
        _ = n.getUser(t);
    return (
        !(
            null == u ||
            null == _ ||
            _.isNonUserBot() ||
            (0, r.bM)(u, _) ||
            o.$3({ permission: d.xBc.ADMINISTRATOR, user: _, context: u })
        ) && c.canManageUser(d.xBc.MODERATE_MEMBERS, _, u)
    );
}
function u(e, t) {
    return (0, i.bG)([l.default, a.A, s.A], () => c(e, t, [l.default, a.A, s.A]), [e, t]);
}
