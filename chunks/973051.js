(n.d(t, { Z: () => j }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(399606),
    i = n(481060),
    s = n(367907),
    a = n(863249),
    c = n(944163),
    u = n(768762),
    d = n(454585),
    m = n(626135),
    f = n(981631),
    h = n(388032),
    p = n(903864);
function x(e) {
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
function g(e, t) {
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
function j(e) {
    var t;
    let { guild: n, prompts: j, completeOnboarding: v, setCurrentStep: _, disableTracking: b, previousPromptIndex: N } = e,
        C = l.useRef(null),
        E = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)),
        [O, I] = l.useState(null != (t = null == E ? void 0 : E.response) && t),
        k = (0, o.e7)([c.Z], () => c.Z.get(n.id)),
        Z = l.useRef(null),
        y = l.useRef(null),
        P = l.useCallback(async () => {
            if (null != k && null != E) {
                try {
                    await a.ZP.submitVerificationForm(n.id, g(x({}, k), { formFields: [g(x({}, E), { response: O })] }));
                } catch (e) {}
                v();
            }
        }, [n.id, k, E, O, v]);
    function w(e) {
        let [t] = e;
        t.isIntersecting && I(!0);
    }
    return (l.useEffect(() => {
        let e = new IntersectionObserver(w, {
                root: Z.current,
                rootMargin: '0px',
                threshold: 0
            }),
            t = y.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [y, Z]),
    null == E)
        ? null
        : (0, r.jsx)('div', {
              className: p.prompt,
              children: (0, r.jsxs)('div', {
                  className: p.promptContent,
                  ref: Z,
                  children: [
                      (0, r.jsxs)(i.h21, {
                          className: p.scrollerContent,
                          ref: C,
                          children: [
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: h.intl.string(h.t['b1JC+v'])
                              }),
                              (0, r.jsx)(i.X6q, {
                                  variant: 'heading-xl/semibold',
                                  children: h.intl.string(h.t.prJqwc)
                              }),
                              (0, r.jsx)('div', {
                                  className: p.termsFieldBody,
                                  ref: y,
                                  children: E.values.map((e, t) =>
                                      (0, r.jsxs)(
                                          'div',
                                          {
                                              className: p.termsRow,
                                              children: [
                                                  (0, r.jsx)(i.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: ''.concat(t + 1, '.')
                                                  }),
                                                  (0, r.jsx)(i.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: p.termsRowContent,
                                                      children: d.Z.parseGuildVerificationFormRule(e, !0, { channelId: n.rulesChannelId })
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
                                      -1 !== N &&
                                      (0, r.jsxs)(i.zxk, {
                                          innerClassName: p.buttonInner,
                                          onClick: () => {
                                              (!b &&
                                                  (m.default.track(
                                                      f.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                                                      g(x({}, (0, s.hH)(n.id)), {
                                                          step: -1,
                                                          skipped: !1,
                                                          back: !0,
                                                          options_selected: 0,
                                                          in_onboarding: !0,
                                                          is_final_step: !1
                                                      })
                                                  ),
                                                  N >= 0 &&
                                                      m.default.track(
                                                          f.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                                          g(x({}, (0, s.hH)(n.id)), {
                                                              step: N,
                                                              required: j[N].required
                                                          })
                                                      )),
                                                  _(N));
                                          },
                                          size: i.zxk.Sizes.MEDIUM,
                                          look: i.zxk.Looks.OUTLINED,
                                          grow: !1,
                                          color: i.zxk.Colors.PRIMARY,
                                          children: [
                                              (0, r.jsx)(u.Z, {
                                                  className: p.arrow,
                                                  direction: u.Z.Directions.LEFT
                                              }),
                                              h.intl.string(h.t['13/7kZ'])
                                          ]
                                      })
                              }),
                              (0, r.jsxs)('div', {
                                  className: p.rightButtons,
                                  children: [
                                      (0, r.jsx)(i.Text, {
                                          className: p.helpText,
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children: O ? h.intl.string(h.t.arAe3N) : h.intl.string(h.t.D0CVAQ)
                                      }),
                                      (0, r.jsxs)(i.zxk, {
                                          innerClassName: p.buttonInner,
                                          onClick: P,
                                          disabled: !O,
                                          size: i.zxk.Sizes.MEDIUM,
                                          look: i.zxk.Looks.FILLED,
                                          grow: !1,
                                          color: i.zxk.Colors.BRAND,
                                          children: [
                                              h.intl.string(h.t['8SuVoK']),
                                              (0, r.jsx)('span', {
                                                  className: p.finishEmoji,
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
