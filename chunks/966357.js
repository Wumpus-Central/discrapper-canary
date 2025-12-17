n.d(t, { Z: () => f });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(796027),
    s = n(699553),
    o = n(314852),
    c = n(434404),
    d = n(999382),
    u = n(551199),
    g = n(388032);
function f() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = null == e ? void 0 : e.id,
        n = (0, l.e7)([d.Z], () => d.Z.getProfileError()),
        f = (0, l.e7)([d.Z], () => d.Z.getGuildProfile()),
        m = (0, l.e7)([o.Z], () => o.Z.getIsUpdating(t)),
        b = i.useMemo(
            () =>
                (null == n ? void 0 : n.status) === 429
                    ? g.intl.string(u.default["bFRS/s"])
                    : null == n
                      ? void 0
                      : n.getAnyErrorMessage(),
            [n],
        ),
        p = i.useCallback(() => {
            if (null == e || null == f) return;
            let t = {
                tag: f.tag,
                badge: f.badge,
                badgeColorPrimary: f.badgeColorPrimary,
                badgeColorSecondary: f.badgeColorSecondary,
            };
            (0, s.pV)(e.id, t);
        }, [e, f]),
        h = i.useCallback(() => {
            null != t && c.Z.init(t);
        }, [t]);
    return (0, r.jsx)(a.Z, {
        submitting: m,
        errorMessage: b,
        onSave: p,
        onReset: h,
    });
}
