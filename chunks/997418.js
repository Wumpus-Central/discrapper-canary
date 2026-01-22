n.d(t, { A: () => g });
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(250527),
    c = n(837011),
    o = n(997509),
    d = n(555337),
    u = n(583970),
    f = n(985018);
function g() {
    let e = (0, l.bG)([d.A], () => d.A.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.bG)([d.A], () => d.A.getProfileError()),
        g = (0, l.bG)([d.A], () => d.A.getGuildProfile()),
        b = (0, l.bG)([c.A], () => c.A.getIsUpdating(t)),
        m = i.useMemo(
            () =>
                (null == n ? void 0 : n.status) === 429
                    ? f.intl.string(u.default["bFRS/s"])
                    : null == n
                      ? void 0
                      : n.getAnyErrorMessage(),
            [n],
        ),
        p = i.useCallback(() => {
            if (null == e || null == g) return;
            let t = {
                tag: g.tag,
                badge: g.badge,
                badgeColorPrimary: g.badgeColorPrimary,
                badgeColorSecondary: g.badgeColorSecondary,
            };
            (0, a._C)(e.id, t);
        }, [e, g]),
        x = i.useCallback(() => {
            null != t && o.A.init(t);
        }, [t]);
    return (0, r.jsx)(s.A, {
        submitting: b,
        errorMessage: m,
        onSave: p,
        onReset: x,
    });
}
