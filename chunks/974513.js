n.d(t, {
    O4: () => f,
    OA: () => p,
    Wu: () => h,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(399606),
    a = n(248514),
    s = n(481060),
    o = n(45966),
    c = n(637853),
    d = n(983135),
    u = n(208665),
    g = n(290511),
    m = n(388032);
function p(e, t) {
    let n = (0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts));
    return [(0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts, c.V7)), n];
}
function f(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
        [n, r] = (function (e) {
            let t = (0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e)));
            return [
                (0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), c.V7)),
                t,
            ];
        })(e);
    return !!t && r.length >= g.md && n.length >= g.X;
}
function h(e) {
    let { guildId: t, className: n } = e,
        c = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)),
        u = i.useCallback(() => {
            let e = c ? g.Un.ONBOARDING_DEFAULT : g.Un.ONBOARDING_ADVANCED;
            c
                ? (0, a.Z)({
                      title: m.intl.string(m.t["49+ONj"]),
                      subtitle: m.intl.string(m.t.TLkoOt),
                      variant: "primary",
                      confirmText: m.intl.string(m.t.R9GHya),
                      onConfirm: () => (0, d.Ts)(t, e),
                  })
                : (0, a.Z)({
                      title: m.intl.string(m.t.YB9xUF),
                      subtitle: m.intl.string(m.t.BcGGVn),
                      variant: "primary",
                      confirmText: m.intl.string(m.t.ts6u6r),
                      onConfirm: () => (0, d.Ts)(t, e),
                  });
        }, [t, c]);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(s.Anchor, {
            onClick: u,
            children: (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: c ? m.intl.string(m.t.OmpxWy) : m.intl.string(m.t.ozsQBC),
            }),
        }),
    });
}
