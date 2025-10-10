n.d(t, {
    O4: () => x,
    OA: () => h,
    Wu: () => b,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(399606),
    s = n(755721),
    a = n(481060),
    o = n(45966),
    c = n(637853),
    d = n(983135),
    u = n(208665),
    g = n(290511),
    m = n(388032);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
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
function h(e, t) {
    let n = (0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts));
    return [(0, l.Wu)([u.Z], () => (0, c.kl)(e, t, u.Z.editedOnboardingPrompts, c.V7)), n];
}
function x(e) {
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
function b(e) {
    let { guildId: t, className: n } = e,
        c = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)),
        u = i.useCallback(() => {
            let e = c ? g.Un.ONBOARDING_DEFAULT : g.Un.ONBOARDING_ADVANCED;
            c
                ? (0, a.h7j)((n) =>
                      (0, r.jsx)(
                          a.ConfirmModal,
                          f(
                              p(
                                  {
                                      header: m.intl.string(m.t["49+ONj"]),
                                      confirmText: m.intl.string(m.t.R9GHyc),
                                      cancelText: m.intl.string(m.t["ETE/oK"]),
                                      confirmButtonColor: s.zx.Colors.BRAND,
                                      onConfirm: () => (0, d.Ts)(t, e),
                                  },
                                  n,
                              ),
                              {
                                  children: (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      children: m.intl.string(m.t.TLkoOj),
                                  }),
                              },
                          ),
                      ),
                  )
                : (0, a.h7j)((n) =>
                      (0, r.jsx)(
                          a.ConfirmModal,
                          f(
                              p(
                                  {
                                      header: m.intl.string(m.t.YB9xUF),
                                      confirmText: m.intl.string(m.t.ts6u6u),
                                      cancelText: m.intl.string(m.t["ETE/oK"]),
                                      confirmButtonColor: s.zx.Colors.BRAND,
                                      onConfirm: () => (0, d.Ts)(t, e),
                                  },
                                  n,
                              ),
                              {
                                  children: (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      children: m.intl.string(m.t.BcGGVl),
                                  }),
                              },
                          ),
                      ),
                  );
        }, [t, c]);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(a.eee, {
            onClick: u,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: c ? m.intl.string(m.t.OmpxW1) : m.intl.string(m.t.ozsQBA),
            }),
        }),
    });
}
