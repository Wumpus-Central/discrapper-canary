n.d(t, {
    O4: () => b,
    OA: () => f,
    Wu: () => x
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(399606),
    a = n(481060),
    l = n(312913),
    o = n(45966),
    c = n(637853),
    d = n(983135),
    u = n(208665),
    m = n(290511),
    g = n(388032);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    let n = (0, s.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts));
    return [(0, s.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts, c.V7)), n];
}
function b(e) {
    let t = (0, s.e7)([o.Z], () => o.Z.isAdvancedMode(e)),
        [n, r] = (function (e) {
            let t = (0, s.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e)));
            return [(0, s.Wu)([o.Z], () => (0, c.kl)(e, o.Z.getDefaultChannelIds(e), o.Z.getOnboardingPrompts(e), c.V7)), t];
        })(e);
    return !!t && r.length >= m.md && n.length >= m.X;
}
function x(e) {
    let { guildId: t, className: n } = e,
        c = (0, l.UQ)(t).advancedModeAllowed,
        u = (0, s.e7)([o.Z], () => o.Z.isAdvancedMode(t)),
        f = i.useCallback(() => {
            let e = u ? m.Un.ONBOARDING_DEFAULT : m.Un.ONBOARDING_ADVANCED;
            u
                ? (0, a.h7j)((n) =>
                      (0, r.jsx)(
                          a.ConfirmModal,
                          h(
                              p(
                                  {
                                      header: g.NW.string(g.t['49+ONj']),
                                      confirmText: g.NW.string(g.t.R9GHyc),
                                      cancelText: g.NW.string(g.t['ETE/oK']),
                                      confirmButtonColor: a.zxk.Colors.BRAND,
                                      onConfirm: () => (0, d.Ts)(t, e)
                                  },
                                  n
                              ),
                              {
                                  children: (0, r.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: g.NW.string(g.t.TLkoOj)
                                  })
                              }
                          )
                      )
                  )
                : (0, a.h7j)((n) =>
                      (0, r.jsx)(
                          a.ConfirmModal,
                          h(
                              p(
                                  {
                                      header: g.NW.string(g.t.YB9xUF),
                                      confirmText: g.NW.string(g.t.ts6u6u),
                                      cancelText: g.NW.string(g.t['ETE/oK']),
                                      confirmButtonColor: a.zxk.Colors.BRAND,
                                      onConfirm: () => (0, d.Ts)(t, e)
                                  },
                                  n
                              ),
                              {
                                  children: (0, r.jsx)(a.Text, {
                                      variant: 'text-md/normal',
                                      children: g.NW.string(g.t.BcGGVl)
                                  })
                              }
                          )
                      )
                  );
        }, [t, u]);
    return c
        ? (0, r.jsx)('div', {
              className: n,
              children: (0, r.jsx)(a.eee, {
                  onClick: f,
                  children: (0, r.jsx)(a.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-link',
                      children: u ? g.NW.string(g.t.OmpxW1) : g.NW.string(g.t.ozsQBA)
                  })
              })
          })
        : null;
}
