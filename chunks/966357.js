n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(796027),
    s = n(699553),
    o = n(314852),
    c = n(434404),
    d = n(999382),
    u = n(766310),
    g = n(388032);
function m() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([d.Z], () => d.Z.getProfileError()),
        m = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
        p = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        f = i.useMemo(
            () =>
                (null == n ? void 0 : n.status) === 429
                    ? g.intl.string(u.default["bFRS/s"])
                    : null == n
                      ? void 0
                      : n.getAnyErrorMessage(),
            [n],
        ),
        h = i.useCallback(() => {
            if (null == e || null == m) return;
            let t = {
                tag: m.tag,
                badge: m.badge,
                badgeColorPrimary: m.badgeColorPrimary,
                badgeColorSecondary: m.badgeColorSecondary,
            };
            (0, s.pV)(e.id, t);
        }, [e, m]),
        b = i.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, r.jsx)(a.Z, {
        submitting: p,
        errorMessage: f,
        onSave: h,
        onReset: b,
    });
}
