n.d(t, { Z: () => j }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(399606),
    s = n(481060),
    a = n(367907),
    i = n(863249),
    c = n(944163),
    u = n(768762),
    d = n(454585),
    m = n(626135),
    h = n(981631),
    x = n(388032),
    p = n(903864);
function f(e) {
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
    let { guild: n, prompts: j, completeOnboarding: N, setCurrentStep: v, disableTracking: _, previousPromptIndex: b } = e,
        C = l.useRef(null),
        O = (0, o.e7)([c.Z], () => c.Z.getRulesPrompt(n.id)),
        [E, I] = l.useState(null != (t = null == O ? void 0 : O.response) && t),
        k = (0, o.e7)([c.Z], () => c.Z.get(n.id)),
        Z = l.useRef(null),
        y = l.useRef(null),
        P = l.useCallback(async () => {
            if (null != k && null != O) {
                try {
                    await i.ZP.submitVerificationForm(n.id, g(f({}, k), { formFields: [g(f({}, O), { response: E })] }));
                } catch (e) {}
                N();
            }
        }, [n.id, k, O, E, N]);
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
    null == O)
        ? null
        : (0, r.jsx)('div', {
              className: p.prompt,
              children: (0, r.jsxs)('div', {
                  className: p.promptContent,
                  ref: Z,
                  children: [
                      (0, r.jsxs)(s.h21, {
                          className: p.scrollerContent,
                          ref: C,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: x.NW.string(x.t['b1JC+v'])
                              }),
                              (0, r.jsx)(s.X6q, {
                                  variant: 'heading-xl/semibold',
                                  children: x.NW.string(x.t.prJqwc)
                              }),
                              (0, r.jsx)('div', {
                                  className: p.termsFieldBody,
                                  ref: y,
                                  children: O.values.map((e, t) =>
                                      (0, r.jsxs)(
                                          'div',
                                          {
                                              className: p.termsRow,
                                              children: [
                                                  (0, r.jsx)(s.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: ''.concat(t + 1, '.')
                                                  }),
                                                  (0, r.jsx)(s.Text, {
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
                                      -1 !== b &&
                                      (0, r.jsxs)(s.zxk, {
                                          innerClassName: p.buttonInner,
                                          onClick: () => {
                                              !_ &&
                                                  (m.default.track(
                                                      h.rMx.GUILD_ONBOARDING_STEP_COMPLETED,
                                                      g(f({}, (0, a.hH)(n.id)), {
                                                          step: -1,
                                                          skipped: !1,
                                                          back: !0,
                                                          options_selected: 0,
                                                          in_onboarding: !0,
                                                          is_final_step: !1
                                                      })
                                                  ),
                                                  b >= 0 &&
                                                      m.default.track(
                                                          h.rMx.GUILD_ONBOARDING_STEP_VIEWED,
                                                          g(f({}, (0, a.hH)(n.id)), {
                                                              step: b,
                                                              required: j[b].required
                                                          })
                                                      )),
                                                  v(b);
                                          },
                                          size: s.zxk.Sizes.MEDIUM,
                                          look: s.zxk.Looks.OUTLINED,
                                          grow: !1,
                                          color: s.zxk.Colors.PRIMARY,
                                          children: [
                                              (0, r.jsx)(u.Z, {
                                                  className: p.arrow,
                                                  direction: u.Z.Directions.LEFT
                                              }),
                                              x.NW.string(x.t['13/7kZ'])
                                          ]
                                      })
                              }),
                              (0, r.jsxs)('div', {
                                  className: p.rightButtons,
                                  children: [
                                      (0, r.jsx)(s.Text, {
                                          className: p.helpText,
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children: E ? x.NW.string(x.t.arAe3N) : x.NW.string(x.t.D0CVAQ)
                                      }),
                                      (0, r.jsxs)(s.zxk, {
                                          innerClassName: p.buttonInner,
                                          onClick: P,
                                          disabled: !E,
                                          size: s.zxk.Sizes.MEDIUM,
                                          look: s.zxk.Looks.FILLED,
                                          grow: !1,
                                          color: s.zxk.Colors.BRAND,
                                          children: [
                                              x.NW.string(x.t['8SuVoK']),
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
