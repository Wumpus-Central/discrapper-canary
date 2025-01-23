n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    o = n(399606),
    s = n(481060),
    i = n(367907),
    a = n(863249),
    d = n(944163),
    c = n(768762),
    u = n(454585),
    m = n(626135),
    p = n(981631),
    h = n(388032),
    x = n(925741);
function g(e) {
    var t;
    let { guild: n, prompts: g, completeOnboarding: f, setCurrentStep: _, disableTracking: b, previousPromptIndex: v } = e,
        C = l.useRef(null),
        N = (0, o.e7)([d.Z], () => d.Z.getRulesPrompt(n.id)),
        [j, I] = l.useState(null !== (t = null == N ? void 0 : N.response) && void 0 !== t && t),
        E = (0, o.e7)([d.Z], () => d.Z.get(n.id)),
        B = l.useRef(null),
        T = l.useRef(null),
        Z = l.useCallback(async () => {
            if (null != E && null != N) {
                try {
                    await a.ZP.submitVerificationForm(n.id, {
                        ...E,
                        formFields: [
                            {
                                ...N,
                                response: j
                            }
                        ]
                    });
                } catch {}
                f();
            }
        }, [n.id, E, N, j, f]);
    function k(e) {
        let [t] = e;
        t.isIntersecting && I(!0);
    }
    return (l.useEffect(() => {
        let e = new IntersectionObserver(k, {
                root: B.current,
                rootMargin: '0px',
                threshold: 0
            }),
            t = T.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [T, B]),
    null == N)
        ? null
        : (0, r.jsx)('div', {
              className: x.prompt,
              children: (0, r.jsxs)('div', {
                  className: x.promptContent,
                  ref: B,
                  children: [
                      (0, r.jsxs)(s.AdvancedScrollerThin, {
                          className: x.scrollerContent,
                          ref: C,
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: h.intl.string(h.t['b1JC+v'])
                              }),
                              (0, r.jsx)(s.Heading, {
                                  variant: 'heading-xl/semibold',
                                  children: h.intl.string(h.t.prJqwc)
                              }),
                              (0, r.jsx)('div', {
                                  className: x.termsFieldBody,
                                  ref: T,
                                  children: N.values.map((e, t) =>
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
                      (0, r.jsx)('div', { className: x.overlay }),
                      (0, r.jsxs)('div', {
                          className: x.navButtons,
                          children: [
                              (0, r.jsx)('div', {
                                  className: x.leftButtons,
                                  children:
                                      -1 !== v &&
                                      (0, r.jsxs)(s.Button, {
                                          innerClassName: x.buttonInner,
                                          onClick: () => {
                                              !b &&
                                                  (m.default.track(p.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, i.hH)(n.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1
                                                  }),
                                                  v >= 0 &&
                                                      m.default.track(p.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, i.hH)(n.id),
                                                          step: v,
                                                          required: g[v].required
                                                      })),
                                                  _(v);
                                          },
                                          size: s.Button.Sizes.MEDIUM,
                                          look: s.Button.Looks.OUTLINED,
                                          grow: !1,
                                          color: s.Button.Colors.PRIMARY,
                                          children: [
                                              (0, r.jsx)(c.Z, {
                                                  className: x.arrow,
                                                  direction: c.Z.Directions.LEFT
                                              }),
                                              h.intl.string(h.t['13/7kZ'])
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
                                          children: j ? h.intl.string(h.t.arAe3N) : h.intl.string(h.t.D0CVAQ)
                                      }),
                                      (0, r.jsxs)(s.Button, {
                                          innerClassName: x.buttonInner,
                                          onClick: Z,
                                          disabled: !j,
                                          size: s.Button.Sizes.MEDIUM,
                                          look: s.Button.Looks.FILLED,
                                          grow: !1,
                                          color: s.Button.Colors.BRAND,
                                          children: [
                                              h.intl.string(h.t['8SuVoK']),
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
