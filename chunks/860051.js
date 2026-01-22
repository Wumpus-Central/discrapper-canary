a.r(t),
    a.d(t, {
        default: () => s,
    });
var c = a(627968),
    n = a(311907),
    l = a(627363),
    d = a(91242),
    r = a(127938),
    o = a(923917),
    i = a(620148),
    f = a(33445),
    b = a(985018);

function s(e) {
    var t, a;
    let { windowKey: s } = e,
        u = (0, i.A)(),
        p = (0, n.bG)([d.A], () => d.A.getConnectedFrame()),
        { data: _ } = (0, l.YY)(null == p ? void 0 : p.applicationId),
        m =
            null != (t = null != (a = null == u ? void 0 : u.name) ? a : null == _ ? void 0 : _.name)
                ? t
                : b.intl.string(b.t.IC5Ann);
    return (0, c.jsx)(o.A, {
        withTitleBar: !0,
        windowKey: s,
        title: m,
        children: null != u ? (0, c.jsx)(f.A, {}) : (0, c.jsx)(r.A, {}),
    });
}
