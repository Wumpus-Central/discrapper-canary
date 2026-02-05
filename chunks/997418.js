"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(250527),
    o = n(837011),
    d = n(997509),
    c = n(555337),
    u = n(583970),
    m = n(985018);
function g() {
    let e = (0, l.bG)([c.A], () => c.A.getGuild()),
        t = e?.id,
        n = (0, l.bG)([c.A], () => c.A.getProfileError()),
        g = (0, l.bG)([c.A], () => c.A.getGuildProfile()),
        x = (0, l.bG)([o.A], () => o.A.getIsUpdating(t)),
        h = s.useMemo(() => (n?.status === 429 ? m.intl.string(u.default["bFRS/s"]) : n?.getAnyErrorMessage()), [n]),
        _ = s.useCallback(() => {
            if (null == e || null == g) return;
            let t = {
                tag: g.tag,
                badge: g.badge,
                badgeColorPrimary: g.badgeColorPrimary,
                badgeColorSecondary: g.badgeColorSecondary,
            };
            (0, a._C)(e.id, t);
        }, [e, g]),
        A = s.useCallback(() => {
            null != t && d.A.init(t);
        }, [t]);
    return (0, i.jsx)(r.A, { submitting: x, errorMessage: h, onSave: _, onReset: A });
}
