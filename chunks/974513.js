n.d(t, {
    O4: () => b,
    OA: () => m,
    Wu: () => p,
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
    f = n(388032);
function m(e, t) {
    let n = (0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts));
    return [(0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts, c.V7)), n];
}
function b(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
        [n] = [(0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), c.V7))];
    return !!t && n.length >= g.X;
}
function p(e) {
    let { guildId: t, className: n } = e,
        c = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)),
        u = i.useCallback(() => {
            let e = c ? g.Un.ONBOARDING_DEFAULT : g.Un.ONBOARDING_ADVANCED;
            c
                ? (0, a.Z)({
                      title: f.intl.string(f.t["49+ONj"]),
                      subtitle: f.intl.string(f.t.TLkoOt),
                      variant: "primary",
                      confirmText: f.intl.string(f.t.R9GHya),
                      onConfirm: () => (0, d.Ts)(t, e),
                  })
                : (0, a.Z)({
                      title: f.intl.string(f.t.YB9xUF),
                      subtitle: f.intl.string(f.t.BcGGVn),
                      variant: "primary",
                      confirmText: f.intl.string(f.t.ts6u6r),
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
                children: c ? f.intl.string(f.t.OmpxWy) : f.intl.string(f.t.ozsQBC),
            }),
        }),
    });
}
