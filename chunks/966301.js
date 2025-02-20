n.d(t, {
    ZP: () => O,
    Zm: () => C
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(852860),
    o = n(471445),
    c = n(45966),
    d = n(637853),
    u = n(999382),
    m = n(889369),
    p = n(983135),
    g = n(570961),
    h = n(208665),
    f = n(974513),
    b = n(716130),
    x = n(981631),
    j = n(290511),
    N = n(388032),
    v = n(474581);
function _(e) {
    let { guildId: t, prompts: n } = e,
        l = (0, s.e7)([m.Z], () => m.Z.editedDefaultChannelIds),
        [c, u] = (0, d.dF)(t, n, [...l]),
        p = c.length,
        g = c.length + u.length,
        h = (p / g) * 100,
        f = Math.max(Math.ceil((85 * g) / 100) - p, 0),
        [b, x] = i.useState(!1),
        j = b ? a.CJ0 : a.u04;
    return (0, r.jsxs)('div', {
        className: v.channelCoverage,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: v.coverageHeader,
                onClick: () => x(!b),
                children: [
                    (0, r.jsxs)('div', {
                        className: v.warningTextContainer,
                        children: [
                            h <= 85 &&
                                (0, r.jsx)(a.P4T, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: v.warning
                                }),
                            (0, r.jsx)(a.Text, {
                                className: v.coverageTitle,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: N.NW.format(N.t.nMVKCQ, { numChannelsMissing: g - p })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: v.progressContainer,
                        children: [
                            (0, r.jsx)(a.Exd, {
                                className: v.coverageProgress,
                                foregroundColor: h > 85 ? 'var(--status-positive)' : 'var(--status-warning)',
                                percent: h
                            }),
                            (0, r.jsx)(j, {
                                size: 'md',
                                color: 'currentColor',
                                className: v.caret
                            })
                        ]
                    })
                ]
            }),
            b
                ? (0, r.jsxs)('div', {
                      className: v.channelCoverageDetails,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              children: N.NW.string(N.t['0FM4i4'])
                          }),
                          (0, r.jsx)('div', {
                              className: v.channels,
                              children: u.map((e) => {
                                  var t;
                                  let n = null !== (t = (0, o.KS)(e)) && void 0 !== t ? t : a.VL1;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: v.channelPill,
                                          children: (0, r.jsxs)(a.Text, {
                                              className: v.channel,
                                              variant: 'text-xs/normal',
                                              color: 'interactive-active',
                                              children: [
                                                  (0, r.jsx)(n, {
                                                      size: 'xxs',
                                                      color: 'currentColor'
                                                  }),
                                                  e.name
                                              ]
                                          })
                                      },
                                      e.id
                                  );
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: v.channelCoverageHint,
                              children:
                                  f > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(a.P4T, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: N.NW.format(N.t['sX889/'], { numChannels: f })
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(a.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: N.NW.string(N.t.o4s29v)
                                        })
                          })
                      ]
                  })
                : null
        ]
    });
}
function O(e) {
    let { saveOnClose: t } = e,
        n = (0, s.e7)([u.Z], () => u.Z.getGuild());
    return null == n
        ? null
        : (0, r.jsx)(y, {
              guild: n,
              saveOnClose: t
          });
}
function y(e) {
    let { guild: t, saveOnClose: n } = e,
        l = (0, s.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, s.e7)([h.Z], () => h.Z.editedOnboardingPrompts),
        d = (0, s.e7)([h.Z], () => h.Z.advancedMode),
        u = i.useRef(!1);
    i.useEffect(() => {
        l || u.current || 0 !== o.length || ((u.current = !0), d || (0, g.tS)(t, [(0, j.ae)()], !1));
    });
    let m = i.useRef(t);
    if (
        (i.useEffect(() => {
            m.current = t;
        }),
        i.useEffect(() => {
            if (n)
                return () => {
                    (0, g.rS)(m.current, { ignoreDefaultPrompt: !0 }).catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let O = async () => {
        try {
            await (0, g.rS)(t), await (0, p.di)(t.id);
        } catch (e) {}
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                className: v.header,
                variant: 'heading-lg/extrabold',
                children: d ? N.NW.string(N.t.AGjtFh) : N.NW.string(N.t.dqCzoa)
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: N.NW.string(N.t['q/6MLC'])
            }),
            (0, r.jsxs)('div', {
                className: v.links,
                children: [
                    (0, r.jsx)(a.eee, {
                        target: '_blank',
                        href: x.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.NW.string(N.t.Ok55Ki)
                        })
                    }),
                    (0, r.jsx)('div', { className: v.dot }),
                    (0, r.jsx)(a.eee, {
                        onClick: O,
                        children: (0, r.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.NW.string(N.t['6gsjdH'])
                        })
                    }),
                    (0, r.jsx)('div', { className: v.dot }),
                    (0, r.jsx)(f.Wu, { guildId: t.id })
                ]
            }),
            (0, r.jsx)(_, {
                guildId: t.id,
                prompts: o
            }),
            (0, r.jsx)('div', {
                className: v.prompts,
                children: l
                    ? (0, r.jsx)(a.$jN, {})
                    : (0, r.jsx)(b.Z, {
                          postjoinOnly: d,
                          guildId: t.id
                      })
            })
        ]
    });
}
function C() {
    let e = (0, s.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, s.e7)([h.Z], () => h.Z.submitting);
    return null == e
        ? null
        : (0, r.jsx)(l.Z, {
              onSave: () => {
                  try {
                      (0, g.rS)(e);
                  } catch (e) {}
              },
              onReset: g.NB,
              submitting: t,
              onSaveText: N.NW.string(N.t.R3BPHx)
          });
}
