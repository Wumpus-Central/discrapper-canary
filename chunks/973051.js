n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var r = n(200651),
    l = n(192379),
    o = n(399606),
    s = n(780384),
    i = n(481060),
    a = n(410030),
    d = n(367907),
    c = n(863249),
    u = n(944163),
    m = n(768762),
    p = n(454585),
    h = n(626135),
    x = n(981631),
    g = n(388032),
    f = n(925741);
function b(e) {
    var t;
    let { guild: n, prompts: b, completeOnboarding: _, setCurrentStep: v, disableTracking: C, previousPromptIndex: N } = e,
        j = l.useRef(null),
        I = (0, o.e7)([u.Z], () => u.Z.getRulesPrompt(n.id)),
        [E, B] = l.useState(null !== (t = null == I ? void 0 : I.response) && void 0 !== t && t),
        Z = (0, o.e7)([u.Z], () => u.Z.get(n.id)),
        T = (0, a.ZP)(),
        k = l.useRef(null),
        D = l.useRef(null),
        P = (0, s.wj)(T) ? 'linear-gradient(to top, rgba(54, 57, 63, 1), rgba(54, 57, 63, 0))' : 'linear-gradient(to top, rgba(242, 243, 245, 1), rgba(242, 243, 245, 0))',
        O = l.useCallback(async () => {
            if (null != Z && null != I) {
                try {
                    await c.ZP.submitVerificationForm(n.id, {
                        ...Z,
                        formFields: [
                            {
                                ...I,
                                response: E
                            }
                        ]
                    });
                } catch {}
                _();
            }
        }, [n.id, Z, I, E, _]);
    function w(e) {
        let [t] = e;
        t.isIntersecting && B(!0);
    }
    return (l.useEffect(() => {
        let e = new IntersectionObserver(w, {
                root: k.current,
                rootMargin: '0px',
                threshold: 0
            }),
            t = D.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [D, k]),
    null == I)
        ? null
        : (0, r.jsx)('div', {
              className: f.prompt,
              children: (0, r.jsxs)('div', {
                  className: f.promptContent,
                  ref: k,
                  children: [
                      (0, r.jsxs)(i.AdvancedScrollerThin, {
                          className: f.scrollerContent,
                          ref: j,
                          children: [
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: g.intl.string(g.t['b1JC+v'])
                              }),
                              (0, r.jsx)(i.Heading, {
                                  variant: 'heading-xl/semibold',
                                  children: g.intl.string(g.t.prJqwc)
                              }),
                              (0, r.jsx)('div', {
                                  className: f.termsFieldBody,
                                  ref: D,
                                  children: I.values.map((e, t) =>
                                      (0, r.jsxs)(
                                          'div',
                                          {
                                              className: f.termsRow,
                                              children: [
                                                  (0, r.jsx)(i.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: ''.concat(t + 1, '.')
                                                  }),
                                                  (0, r.jsx)(i.Text, {
                                                      variant: 'text-sm/normal',
                                                      className: f.termsRowContent,
                                                      children: p.Z.parseGuildVerificationFormRule(e, !0, { channelId: n.rulesChannelId })
                                                  })
                                              ]
                                          },
                                          'term-'.concat(t)
                                      )
                                  )
                              })
                          ]
                      }),
                      (0, r.jsx)('div', {
                          className: f.overlay,
                          style: { background: P }
                      }),
                      (0, r.jsxs)('div', {
                          className: f.navButtons,
                          children: [
                              (0, r.jsx)('div', {
                                  className: f.leftButtons,
                                  children:
                                      -1 !== N &&
                                      (0, r.jsxs)(i.Button, {
                                          innerClassName: f.buttonInner,
                                          onClick: () => {
                                              !C &&
                                                  (h.default.track(x.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, d.hH)(n.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1
                                                  }),
                                                  N >= 0 &&
                                                      h.default.track(x.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, d.hH)(n.id),
                                                          step: N,
                                                          required: b[N].required
                                                      })),
                                                  v(N);
                                          },
                                          size: i.Button.Sizes.MEDIUM,
                                          look: i.Button.Looks.OUTLINED,
                                          grow: !1,
                                          color: i.Button.Colors.PRIMARY,
                                          children: [
                                              (0, r.jsx)(m.Z, {
                                                  className: f.arrow,
                                                  direction: m.Z.Directions.LEFT
                                              }),
                                              g.intl.string(g.t['13/7kZ'])
                                          ]
                                      })
                              }),
                              (0, r.jsxs)('div', {
                                  className: f.rightButtons,
                                  children: [
                                      (0, r.jsx)(i.Text, {
                                          className: f.helpText,
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children: E ? g.intl.string(g.t.arAe3N) : g.intl.string(g.t.D0CVAQ)
                                      }),
                                      (0, r.jsxs)(i.Button, {
                                          innerClassName: f.buttonInner,
                                          onClick: O,
                                          disabled: !E,
                                          size: i.Button.Sizes.MEDIUM,
                                          look: i.Button.Looks.FILLED,
                                          grow: !1,
                                          color: i.Button.Colors.BRAND,
                                          children: [
                                              g.intl.string(g.t['8SuVoK']),
                                              (0, r.jsx)('span', {
                                                  className: f.finishEmoji,
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
