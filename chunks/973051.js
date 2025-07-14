(n.d(t, { Z: () => g }), n(388685));
var r = n(255367),
    l = n(73800),
    i = n(399606),
    o = n(481060),
    a = n(367907),
    s = n(863249),
    c = n(944163),
    u = n(454585),
    d = n(626135),
    m = n(981631),
    f = n(388032),
    p = n(903864);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function x(e, t) {
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
function g(e) {
    var t;
    let { guild: n, prompts: g, completeOnboarding: v, setCurrentStep: j, disableTracking: _, previousPromptIndex: b } = e,
        O = l.useRef(null),
        C = (0, i.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)),
        [y, N] = l.useState(null != (t = null == C ? void 0 : C.response) && t),
        E = (0, i.e7)([c.Z], () => c.Z.get(n.id)),
        P = l.useRef(null),
        Z = l.useRef(null),
        I = l.useCallback(async () => {
            if (null != E && null != C) {
                try {
                    await s.ZP.submitVerificationForm(n.id, x(h({}, E), { formFields: [x(h({}, C), { response: y })] }));
                } catch (e) {}
                v();
            }
        }, [n.id, E, C, y, v]);
    function T(e) {
        let [t] = e;
        t.isIntersecting && N(!0);
    }
    return (l.useEffect(() => {
        let e = new IntersectionObserver(T, {
                root: P.current,
                rootMargin: '0px',
                threshold: 0
            }),
            t = Z.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [Z, P]),
    null == C)
        ? null
        : (0, r.jsx)('div', {
              className: p.prompt,
              children: (0, r.jsxs)('div', {
                  className: p.promptContent,
                  ref: P,
                  children: [
                      (0, r.jsxs)(o.h21, {
                          className: p.scrollerContent,
                          ref: O,
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: f.intl.string(f.t['b1JC+v'])
                              }),
                              (0, r.jsx)(o.X6q, {
                                  variant: 'heading-xl/semibold',
                                  children: f.intl.string(f.t.prJqwc)
                              }),
                              (0, r.jsx)('div', {
                                  className: p.termsFieldBody,
                                  ref: Z,
                                  children: C.values.map((e, t) =>
                                      (0, r.jsxs)(
                                          'div',
                                          {
                                              className: p.termsRow,
                                              children: [
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: ''.concat(t + 1, '.')
                                                  }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: p.termsRowContent,
                                                      children: u.Z.parseGuildVerificationFormRule(e, !0, { channelId: n.rulesChannelId })
                                                  })
                                              ]
                                          },
                                          'term-'.concat(t)
                                      )
                                  )
                              })
                          ]
                      }),
                      (0, r.jsx)('div', { className: p.overlay }),
                      (0, r.jsxs)('div', {
                          className: p.navButtons,
                          children: [
                              (0, r.jsx)('div', {
                                  className: p.leftButtons,
                                  children:
                                      -1 !== b &&
                                      (0, r.jsx)(o.zxk, {
                                          variant: 'secondary',
                                          size: 'md',
                                          text: f.intl.string(f.t['13/7kZ']),
                                          onClick: () => {
                                              (!_ &&
                                                  (d.default.track(
                                                      m.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                                                      x(h({}, (0, a.hH)(n.id)), {
                                                          step: -1,
                                                          skipped: !1,
                                                          back: !0,
                                                          options_selected: 0,
                                                          in_onboarding: !0,
                                                          is_final_step: !1
                                                      })
                                                  ),
                                                  b >= 0 &&
                                                      d.default.track(
                                                          m.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                                          x(h({}, (0, a.hH)(n.id)), {
                                                              step: b,
                                                              required: g[b].required
                                                          })
                                                      )),
                                                  j(b));
                                          },
                                          icon: o.j9r,
                                          iconPosition: 'start'
                                      })
                              }),
                              (0, r.jsxs)('div', {
                                  className: p.rightButtons,
                                  children: [
                                      (0, r.jsx)(o.Text, {
                                          className: p.helpText,
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children: y ? f.intl.string(f.t.arAe3N) : f.intl.string(f.t.D0CVAQ)
                                      }),
                                      (0, r.jsx)(o.zxk, {
                                          variant: 'primary',
                                          size: 'md',
                                          text: ''.concat(f.intl.string(f.t['8SuVoK']), ' \uD83C\uDF89'),
                                          onClick: I,
                                          disabled: !y
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          });
}
