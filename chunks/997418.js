n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(36525),
    a = n(250527),
    o = n(837011),
    d = n(997509),
    c = n(555337),
    u = n(661023),
    m = n(985018);
function g() {
    let e = (0, s.bG)([c.A], () => c.A.getGuild()),
        t = e?.id,
        n = (0, s.bG)([c.A], () => c.A.getProfileError()),
        g = (0, s.bG)([c.A], () => c.A.getGuildProfile()),
        h = (0, s.bG)([o.A], () => o.A.getIsUpdating(t)),
        x = l.useMemo(() => (n?.status === 429 ? m.intl.string(u.default["bFRS/s"]) : n?.getAnyErrorMessage()), [n]),
        _ = l.useCallback(() => {
            if (null == e || null == g) return;
            let t = {
                tag: g.tag,
                badge: g.badge,
                badgeColorPrimary: g.badgeColorPrimary,
                badgeColorSecondary: g.badgeColorSecondary,
            };
            (0, a._C)(e.id, t);
        }, [e, g]),
        p = l.useCallback(() => {
            null != t && d.A.init(t);
        }, [t]);
    return (0, i.jsx)(r.A, { submitting: h, errorMessage: x, onSave: _, onReset: p });
}
