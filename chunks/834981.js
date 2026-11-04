var r = n(582128),
    l = n(164636),
    u = n(287809),
    i = n(695515),
    a = n(923531),
    o = n(438732),
    s = n(500470),
    f = n(191627);
function d(t) {
    let e = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
    return r.useMemo(
        () =>
            Object.values(e)
                .filter((e) => null != e && e.link_status === t)
                .sort((t, e) => new Date(t.updated_at).getTime() - new Date(e.updated_at).getTime())
                .map((t) => t.user_id)
                .filter((t) => null != t),
        [e, t],
    );
}
function c(t) {
    let e = d(t);
    return (0, l.yK)([u.default], () => e.map((t) => u.default.getUser(t))).filter((t) => null != t);
}
function y() {
    return d(f.Ef.ACTIVE);
}
n.d(
    e,
    {},
    {
        Du: function () {
            let t = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
            return r.useMemo(
                () =>
                    Object.values(t).some(
                        (t) => null != t && t.link_status === f.Ef.ACTIVE && t.link_type === f.QM.PARENT,
                    ),
                [t],
            );
        },
        GR: function () {
            return c(f.Ef.ACTIVE);
        },
        Ld: function (t) {
            let e = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
            return null != t && (e[t]?.teen_requires_parental_consent ?? !1);
        },
        Li: function () {
            return y().length > 0;
        },
        VE: function () {
            let t = (0, l.bG)([i.A], () => i.A.getLinkCode()),
                e = (0, l.bG)([u.default], () => u.default.getCurrentUser());
            return null == t || null == e ? null : (0, f.jZ)(e.id, t);
        },
        VT: function () {
            let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
                e = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
            return null == t
                ? 0
                : Object.values(e).filter((e) => null != e && e.link_status === f.Ef.PENDING && t.id !== e.requestor_id)
                      .length;
        },
        W1: function () {
            return y().length;
        },
        XC: function (t, e) {
            let n = (0, l.bG)([i.A], () => i.A.getLinkTimestamp(t));
            return null != n ? (0, a.mV)(Date.parse(n), e === f.Ef.PENDING ? f.lu : f.dI) : null;
        },
        v4: function (t) {
            let e = (0, s.k)(),
                n = (0, l.bG)([i.A], () => (null == e ? null : i.A.getRangeStartTimestamp()));
            return null == n ? null : (0, a.i6)(new Date(n).getTime(), () => t, 7);
        },
        vx: y,
        xk: c,
        xr: function () {
            let t = (0, o.A)();
            return y().length >= (t ? 8 : 3);
        },
    },
);
