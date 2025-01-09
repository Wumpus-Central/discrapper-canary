n.d(t, {
    O4: function () {
        return x;
    },
    OA: function () {
        return g;
    },
    Wu: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(399606),
    s = n(481060),
    a = n(312913),
    o = n(45966),
    c = n(637853),
    d = n(983135),
    u = n(208665),
    m = n(290511),
    h = n(388032);
function g(e, t) {
    let n = (0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts));
    return [(0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts, c.V7)), n];
}
function x(e) {
    let t = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
        [n, i] = (function (e) {
            let t = (0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e)));
            return [(0, l.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), c.V7)), t];
        })(e);
    return !!t && i.length >= m.md && n.length >= m.X;
}
function p(e) {
    let { guildId: t, className: n } = e,
        c = (0, a.UQ)(t).advancedModeAllowed,
        u = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)),
        g = r.useCallback(() => {
            let e = u ? m.Un.ONBOARDING_DEFAULT : m.Un.ONBOARDING_ADVANCED;
            u
                ? (0, s.openModal)((n) =>
                      (0, i.jsx)(s.ConfirmModal, {
                          header: h.intl.string(h.t['49+ONj']),
                          confirmText: h.intl.string(h.t.R9GHyc),
                          cancelText: h.intl.string(h.t['ETE/oK']),
                          confirmButtonColor: s.Button.Colors.BRAND,
                          onConfirm: () => (0, d.Ts)(t, e),
                          ...n,
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              children: h.intl.string(h.t.TLkoOj)
                          })
                      })
                  )
                : (0, s.openModal)((n) =>
                      (0, i.jsx)(s.ConfirmModal, {
                          header: h.intl.string(h.t.YB9xUF),
                          confirmText: h.intl.string(h.t.ts6u6u),
                          cancelText: h.intl.string(h.t['ETE/oK']),
                          confirmButtonColor: s.Button.Colors.BRAND,
                          onConfirm: () => (0, d.Ts)(t, e),
                          ...n,
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              children: h.intl.string(h.t.BcGGVl)
                          })
                      })
                  );
        }, [t, u]);
    return c
        ? (0, i.jsx)('div', {
              className: n,
              children: (0, i.jsx)(s.Anchor, {
                  onClick: g,
                  children: (0, i.jsx)(s.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-link',
                      children: u ? h.intl.string(h.t.OmpxW1) : h.intl.string(h.t.ozsQBA)
                  })
              })
          })
        : null;
}
