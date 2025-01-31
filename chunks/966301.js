n.d(t, {
    ZP: () => I,
    Zm: () => b
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(471445),
    c = n(45966),
    d = n(637853),
    u = n(999382),
    m = n(889369),
    h = n(983135),
    g = n(570961),
    x = n(208665),
    p = n(974513),
    _ = n(716130),
    C = n(981631),
    f = n(290511),
    v = n(388032),
    N = n(554205);
function j(e) {
    let { guildId: t, prompts: n } = e,
        a = (0, l.e7)([m.Z], () => m.Z.editedDefaultChannelIds),
        [c, u] = (0, d.dF)(t, n, [...a]),
        h = c.length,
        g = c.length + u.length,
        x = (h / g) * 100,
        p = Math.max(Math.ceil((85 * g) / 100) - h, 0),
        [_, C] = r.useState(!1),
        f = _ ? s.CJ0 : s.u04;
    return (0, i.jsxs)('div', {
        className: N.channelCoverage,
        children: [
            (0, i.jsxs)(s.P3F, {
                className: N.coverageHeader,
                onClick: () => C(!_),
                children: [
                    (0, i.jsxs)('div', {
                        className: N.warningTextContainer,
                        children: [
                            x <= 85 &&
                                (0, i.jsx)(s.P4T, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: N.warning
                                }),
                            (0, i.jsx)(s.Text, {
                                className: N.coverageTitle,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: v.intl.format(v.t.nMVKCQ, { numChannelsMissing: g - h })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: N.progressContainer,
                        children: [
                            (0, i.jsx)(s.Exd, {
                                className: N.coverageProgress,
                                foregroundColor: x > 85 ? 'var(--status-positive)' : 'var(--status-warning)',
                                percent: x
                            }),
                            (0, i.jsx)(f, {
                                size: 'md',
                                color: 'currentColor',
                                className: N.caret
                            })
                        ]
                    })
                ]
            }),
            _
                ? (0, i.jsxs)('div', {
                      className: N.channelCoverageDetails,
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              children: v.intl.string(v.t['0FM4i4'])
                          }),
                          (0, i.jsx)('div', {
                              className: N.channels,
                              children: u.map((e) => {
                                  var t;
                                  let n = null !== (t = (0, o.KS)(e)) && void 0 !== t ? t : s.VL1;
                                  return (0, i.jsx)(
                                      'div',
                                      {
                                          className: N.channelPill,
                                          children: (0, i.jsxs)(s.Text, {
                                              className: N.channel,
                                              variant: 'text-xs/normal',
                                              color: 'interactive-active',
                                              children: [
                                                  (0, i.jsx)(n, {
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
                          (0, i.jsx)('div', {
                              className: N.channelCoverageHint,
                              children:
                                  p > 0
                                      ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                                (0, i.jsx)(s.P4T, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: v.intl.format(v.t['sX889/'], { numChannels: p })
                                                })
                                            ]
                                        })
                                      : (0, i.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: v.intl.string(v.t.o4s29v)
                                        })
                          })
                      ]
                  })
                : null
        ]
    });
}
function I(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getGuild());
    return null == n
        ? null
        : (0, i.jsx)(E, {
              guild: n,
              saveOnClose: t
          });
}
function E(e) {
    let { guild: t, saveOnClose: n } = e,
        a = (0, l.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, l.e7)([x.Z], () => x.Z.editedOnboardingPrompts),
        d = (0, l.e7)([x.Z], () => x.Z.advancedMode),
        u = r.useRef(!1);
    r.useEffect(() => {
        a || u.current || 0 !== o.length || ((u.current = !0), d || (0, g.tS)(t, [(0, f.ae)()], !1));
    });
    let m = r.useRef(t);
    if (
        (r.useEffect(() => {
            m.current = t;
        }),
        r.useEffect(() => {
            if (n)
                return () => {
                    (0, g.rS)(m.current, { ignoreDefaultPrompt: !0 }).catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let I = async () => {
        try {
            await (0, g.rS)(t), await (0, h.di)(t.id);
        } catch {}
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.X6q, {
                className: N.header,
                variant: 'heading-lg/extrabold',
                children: d ? v.intl.string(v.t.AGjtFh) : v.intl.string(v.t.dqCzoa)
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: v.intl.string(v.t['q/6MLC'])
            }),
            (0, i.jsxs)('div', {
                className: N.links,
                children: [
                    (0, i.jsx)(s.eee, {
                        target: '_blank',
                        href: C.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: v.intl.string(v.t.Ok55Ki)
                        })
                    }),
                    (0, i.jsx)('div', { className: N.dot }),
                    (0, i.jsx)(s.eee, {
                        onClick: I,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: v.intl.string(v.t['6gsjdH'])
                        })
                    }),
                    (0, i.jsx)('div', { className: N.dot }),
                    (0, i.jsx)(p.Wu, { guildId: t.id })
                ]
            }),
            (0, i.jsx)(j, {
                guildId: t.id,
                prompts: o
            }),
            (0, i.jsx)('div', {
                className: N.prompts,
                children: a
                    ? (0, i.jsx)(s.$jN, {})
                    : (0, i.jsx)(_.Z, {
                          postjoinOnly: d,
                          guildId: t.id
                      })
            })
        ]
    });
}
function b() {
    let e = (0, l.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, l.e7)([x.Z], () => x.Z.submitting);
    return null == e
        ? null
        : (0, i.jsx)(a.Z, {
              onSave: () => {
                  try {
                      (0, g.rS)(e);
                  } catch {}
              },
              onReset: g.NB,
              submitting: t,
              onSaveText: v.intl.string(v.t.R3BPHx)
          });
}
