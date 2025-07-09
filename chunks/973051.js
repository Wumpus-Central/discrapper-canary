(n.d(t, { Z: () => v }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(399606),
    i = n(755721),
    s = n(481060),
    a = n(367907),
    c = n(863249),
    u = n(944163),
    d = n(768762),
    m = n(454585),
    f = n(626135),
    h = n(981631),
    p = n(388032),
    x = n(903864);
function g(e) {
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
function j(e, t) {
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
function v(e) {
    var t;
    let { guild: n, prompts: v, completeOnboarding: _, setCurrentStep: b, disableTracking: N, previousPromptIndex: C } = e,
        E = l.useRef(null),
        O = (0, o.e7)([u.Z], () => u.Z.getRulesPrompt(n.id)),
        [I, Z] = l.useState(null != (t = null == O ? void 0 : O.response) && t),
        y = (0, o.e7)([u.Z], () => u.Z.get(n.id)),
        P = l.useRef(null),
        w = l.useRef(null),
        D = l.useCallback(async () => {
            if (null != y && null != O) {
                try {
                    await c.ZP.submitVerificationForm(n.id, j(g({}, y), { formFields: [j(g({}, O), { response: I })] }));
                } catch (e) {}
                _();
            }
        }, [n.id, y, O, I, _]);
    function T(e) {
        let [t] = e;
        t.isIntersecting && Z(!0);
    }
    return (l.useEffect(() => {
        let e = new IntersectionObserver(T, {
                root: P.current,
                rootMargin: '0px',
                threshold: 0
            }),
            t = w.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [w, P]),
    null == O)
        ? null
        : (0, r.jsx)('div', {
              className: x.prompt,
              children: (0, r.jsxs)('div', {
                  className: x.promptContent,
                  ref: P,
                  children: [
                      (0, r.jsxs)(s.h21, {
                          className: x.scrollerContent,
                          ref: E,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: p.intl.string(p.t['b1JC+v'])
                              }),
                              (0, r.jsx)(s.X6q, {
                                  variant: 'heading-xl/semibold',
                                  children: p.intl.string(p.t.prJqwc)
                              }),
                              (0, r.jsx)('div', {
                                  className: x.termsFieldBody,
                                  ref: w,
                                  children: O.values.map((e, t) =>
                                      (0, r.jsxs)(
                                          'div',
                                          {
                                              className: x.termsRow,
                                              children: [
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: ''.concat(t + 1, '.')
                                                  }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: x.termsRowContent,
                                                      children: m.Z.parseGuildVerificationFormRule(e, !0, { channelId: n.rulesChannelId })
                                                  })
                                              ]
                                          },
                                          'term-'.concat(t)
                                      )
                                  )
                              })
                          ]
                      }),
                      (0, r.jsx)('div', { className: x.overlay }),
                      (0, r.jsxs)('div', {
                          className: x.navButtons,
                          children: [
                              (0, r.jsx)('div', {
                                  className: x.leftButtons,
                                  children:
                                      -1 !== C &&
                                      (0, r.jsxs)(i.zx, {
                                          innerClassName: x.buttonInner,
                                          onClick: () => {
                                              (!N &&
                                                  (f.default.track(
                                                      h.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                                                      j(g({}, (0, a.hH)(n.id)), {
                                                          step: -1,
                                                          skipped: !1,
                                                          back: !0,
                                                          options_selected: 0,
                                                          in_onboarding: !0,
                                                          is_final_step: !1
                                                      })
                                                  ),
                                                  C >= 0 &&
                                                      f.default.track(
                                                          h.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                                          j(g({}, (0, a.hH)(n.id)), {
                                                              step: C,
                                                              required: v[C].required
                                                          })
                                                      )),
                                                  b(C));
                                          },
                                          size: i.zx.Sizes.MEDIUM,
                                          look: i.zx.Looks.OUTLINED,
                                          grow: !1,
                                          color: i.zx.Colors.PRIMARY,
                                          children: [
                                              (0, r.jsx)(d.Z, {
                                                  className: x.arrow,
                                                  direction: d.Z.Directions.LEFT
                                              }),
                                              p.intl.string(p.t['13/7kZ'])
                                          ]
                                      })
                              }),
                              (0, r.jsxs)('div', {
                                  className: x.rightButtons,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          className: x.helpText,
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children: I ? p.intl.string(p.t.arAe3N) : p.intl.string(p.t.D0CVAQ)
                                      }),
                                      (0, r.jsxs)(i.zx, {
                                          innerClassName: x.buttonInner,
                                          onClick: D,
                                          disabled: !I,
                                          size: i.zx.Sizes.MEDIUM,
                                          look: i.zx.Looks.FILLED,
                                          grow: !1,
                                          color: i.zx.Colors.BRAND,
                                          children: [
                                              p.intl.string(p.t['8SuVoK']),
                                              (0, r.jsx)('span', {
                                                  className: x.finishEmoji,
                                                  role: 'img',
                                                  'aria-hidden': !0,
                                                  children: '\uD83C\uDF89'
                                              })
                                          ]
                                      })
                                  ]
                              })
                          ]
                      })
                  ]
              })
          });
}
