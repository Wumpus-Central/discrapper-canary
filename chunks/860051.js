n.r(t), n.d(t, { default: () => p });
var l = n(627968),
    i = n(311907),
    a = n(627363),
    r = n(91242),
    o = n(127938),
    s = n(923917),
    c = n(620148),
    d = n(33445),
    u = n(985018);
function p(e) {
    let { windowKey: t } = e,
        n = (0, c.A)(),
        p = (0, i.bG)([r.A], () => r.A.getConnectedFrame()),
        { data: A } = (0, a.YY)(p?.applicationId),
        m = n?.name ?? A?.name ?? u.intl.string(u.t.IC5Ann);
    return (0, l.jsx)(s.A, {
        withTitleBar: !0,
        windowKey: t,
        title: m,
        children: null != n ? (0, l.jsx)(d.A, {}) : (0, l.jsx)(o.A, {}),
    });
}
