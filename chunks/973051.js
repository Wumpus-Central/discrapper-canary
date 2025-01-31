n.d(t, { Z: () => f }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(399606),
    o = n(481060),
    s = n(367907),
    a = n(863249),
    d = n(944163),
    c = n(768762),
    u = n(454585),
    m = n(626135),
    x = n(981631),
    h = n(388032),
    p = n(925741);
function f(e) {
    var t;
    let { guild: n, prompts: f, completeOnboarding: g, setCurrentStep: v, disableTracking: _, previousPromptIndex: j } = e,
        C = r.useRef(null),
        N = (0, i.e7)([d.Z], () => d.Z.getRulesPrompt(n.id)),
        [b, k] = r.useState(null !== (t = null == N ? void 0 : N.response) && void 0 !== t && t),
        Z = (0, i.e7)([d.Z], () => d.Z.get(n.id)),
        I = r.useRef(null),
        E = r.useRef(null),
        D = r.useCallback(async () => {
            if (null != Z && null != N) {
                try {
                    await a.ZP.submitVerificationForm(n.id, {
                        ...Z,
                        formFields: [
                            {
                                ...N,
                                response: b
                            }
                        ]
                    });
                } catch {}
                g();
            }
        }, [n.id, Z, N, b, g]);
    function T(e) {
        let [t] = e;
        t.isIntersecting && k(!0);
    }
    return (r.useEffect(() => {
        let e = new IntersectionObserver(T, {
                root: I.current,
                rootMargin: '0px',
                threshold: 0
            }),
            t = E.current;
        return (
            null != t && null != t.lastElementChild && e.observe(t.lastElementChild),
            () => {
                null != t && null != t.lastElementChild && e.unobserve(t.lastElementChild);
            }
        );
    }, [E, I]),
    null == N)
        ? null
        : (0, l.jsx)('div', {
              className: p.prompt,
              children: (0, l.jsxs)('div', {
                  className: p.promptContent,
                  ref: I,
                  children: [
                      (0, l.jsxs)(o.h21, {
                          className: p.scrollerContent,
                          ref: C,
                          children: [
                              (0, l.jsx)(o.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'text-muted',
                                  children: h.intl.string(h.t['b1JC+v'])
                              }),
                              (0, l.jsx)(o.X6q, {
                                  variant: 'heading-xl/semibold',
                                  children: h.intl.string(h.t.prJqwc)
                              }),
                              (0, l.jsx)('div', {
                                  className: p.termsFieldBody,
                                  ref: E,
                                  children: N.values.map((e, t) =>
                                      (0, l.jsxs)(
                                          'div',
                                          {
                                              className: p.termsRow,
                                              children: [
                                                  (0, l.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: ''.concat(t + 1, '.')
                                                  }),
                                                  (0, l.jsx)(o.Text, {
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
                      (0, l.jsx)('div', { className: p.overlay }),
                      (0, l.jsxs)('div', {
                          className: p.navButtons,
                          children: [
                              (0, l.jsx)('div', {
                                  className: p.leftButtons,
                                  children:
                                      -1 !== j &&
                                      (0, l.jsxs)(o.zxk, {
                                          innerClassName: p.buttonInner,
                                          onClick: () => {
                                              !_ &&
                                                  (m.default.track(x.rMx.GUILD_ONBOARDING_STEP_COMPLETED, {
                                                      ...(0, s.hH)(n.id),
                                                      step: -1,
                                                      skipped: !1,
                                                      back: !0,
                                                      options_selected: 0,
                                                      in_onboarding: !0,
                                                      is_final_step: !1
                                                  }),
                                                  j >= 0 &&
                                                      m.default.track(x.rMx.GUILD_ONBOARDING_STEP_VIEWED, {
                                                          ...(0, s.hH)(n.id),
                                                          step: j,
                                                          required: f[j].required
                                                      })),
                                                  v(j);
                                          },
                                          size: o.zxk.Sizes.MEDIUM,
                                          look: o.zxk.Looks.OUTLINED,
                                          grow: !1,
                                          color: o.zxk.Colors.PRIMARY,
                                          children: [
                                              (0, l.jsx)(c.Z, {
                                                  className: p.arrow,
                                                  direction: c.Z.Directions.LEFT
                                              }),
                                              h.intl.string(h.t['13/7kZ'])
                                          ]
                                      })
                              }),
                              (0, l.jsxs)('div', {
                                  className: p.rightButtons,
                                  children: [
                                      (0, l.jsx)(o.Text, {
                                          className: p.helpText,
                                          variant: 'text-xs/normal',
                                          color: 'text-muted',
                                          children: b ? h.intl.string(h.t.arAe3N) : h.intl.string(h.t.D0CVAQ)
                                      }),
                                      (0, l.jsxs)(o.zxk, {
                                          innerClassName: p.buttonInner,
                                          onClick: D,
                                          disabled: !b,
                                          size: o.zxk.Sizes.MEDIUM,
                                          look: o.zxk.Looks.FILLED,
                                          grow: !1,
                                          color: o.zxk.Colors.BRAND,
                                          children: [
                                              h.intl.string(h.t['8SuVoK']),
                                              (0, l.jsx)('span', {
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
