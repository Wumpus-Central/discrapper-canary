n.d(t, {
    O4: () => h,
    OA: () => f,
    Wu: () => x
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(399606),
    s = n(481060),
    a = n(45966),
    o = n(637853),
    c = n(983135),
    u = n(208665),
    d = n(290511),
    m = n(388032);
function g(e) {
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
function p(e, t) {
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
    let n = (0, l.Wu)([u.Z], () => (0, o.kl)(e, t, u.Z.editedOnboardingPrompts));
    return [(0, l.Wu)([u.Z], () => (0, o.kl)(e, t, u.Z.editedOnboardingPrompts, o.V7)), n];
}
function h(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(e)),
        [n, r] = (function (e) {
            let t = (0, l.Wu)([a.Z], () => (0, o.kl)(e, a.Z.getDefaultChannelIds(e), a.Z.getOnboardingPrompts(e)));
            return [(0, l.Wu)([a.Z], () => (0, o.kl)(e, a.Z.getDefaultChannelIds(e), a.Z.getOnboardingPrompts(e), o.V7)), t];
        })(e);
    return !!t && r.length >= d.md && n.length >= d.X;
}
function x(e) {
    let { guildId: t, className: n } = e,
        o = (0, l.e7)([a.Z], () => a.Z.isAdvancedMode(t)),
        u = i.useCallback(() => {
            let e = o ? d.Un.ONBOARDING_DEFAULT : d.Un.ONBOARDING_ADVANCED;
            o
                ? (0, s.h7j)((n) =>
                      (0, r.jsx)(
                          s.ConfirmModal,
                          p(
                              g(
                                  {
                                      header: m.intl.string(m.t['49+ONj']),
                                      confirmText: m.intl.string(m.t.R9GHyc),
                                      cancelText: m.intl.string(m.t['ETE/oK']),
                                      confirmButtonColor: s.zxk.Colors.BRAND,
                                      onConfirm: () => (0, c.Ts)(t, e)
                                  },
                                  n
                              ),
                              {
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: m.intl.string(m.t.TLkoOj)
                                  })
                              }
                          )
                      )
                  )
                : (0, s.h7j)((n) =>
                      (0, r.jsx)(
                          s.ConfirmModal,
                          p(
                              g(
                                  {
                                      header: m.intl.string(m.t.YB9xUF),
                                      confirmText: m.intl.string(m.t.ts6u6u),
                                      cancelText: m.intl.string(m.t['ETE/oK']),
                                      confirmButtonColor: s.zxk.Colors.BRAND,
                                      onConfirm: () => (0, c.Ts)(t, e)
                                  },
                                  n
                              ),
                              {
                                  children: (0, r.jsx)(s.Text, {
                                      variant: 'text-md/normal',
                                      children: m.intl.string(m.t.BcGGVl)
                                  })
                              }
                          )
                      )
                  );
        }, [t, o]);
    return (0, r.jsx)('div', {
        className: n,
        children: (0, r.jsx)(s.eee, {
            onClick: u,
            children: (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'text-link',
                children: o ? m.intl.string(m.t.OmpxW1) : m.intl.string(m.t.ozsQBA)
            })
        })
    });
}
