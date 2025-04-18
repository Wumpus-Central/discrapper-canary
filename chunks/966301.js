n.d(t, {
    ZP: () => O,
    Zm: () => y
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(852860),
    o = n(471445),
    c = n(45966),
    d = n(637853),
    u = n(999382),
    m = n(889369),
    g = n(983135),
    p = n(570961),
    h = n(208665),
    f = n(974513),
    x = n(716130),
    b = n(981631),
    j = n(290511),
    N = n(388032),
    _ = n(812046);
function v(e) {
    let { guildId: t, prompts: n } = e,
        a = (0, s.e7)([m.Z], () => m.Z.editedDefaultChannelIds),
        [c, u] = (0, d.dF)(t, n, [...a]),
        g = c.length,
        p = c.length + u.length,
        h = (g / p) * 100,
        f = Math.max(Math.ceil((85 * p) / 100) - g, 0),
        [x, b] = i.useState(!1),
        j = x ? l.CJ0 : l.u04;
    return (0, r.jsxs)('div', {
        className: _.channelCoverage,
        children: [
            (0, r.jsxs)(l.P3F, {
                className: _.coverageHeader,
                onClick: () => b(!x),
                children: [
                    (0, r.jsxs)('div', {
                        className: _.warningTextContainer,
                        children: [
                            h <= 85 &&
                                (0, r.jsx)(l.P4T, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: _.warning
                                }),
                            (0, r.jsx)(l.Text, {
                                className: _.coverageTitle,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: N.NW.format(N.t.nMVKCQ, { numChannelsMissing: p - g })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: _.progressContainer,
                        children: [
                            (0, r.jsx)(l.Exd, {
                                className: _.coverageProgress,
                                foregroundColor: h > 85 ? 'var(--status-positive)' : 'var(--status-warning)',
                                percent: h
                            }),
                            (0, r.jsx)(j, {
                                size: 'md',
                                color: 'currentColor',
                                className: _.caret
                            })
                        ]
                    })
                ]
            }),
            x
                ? (0, r.jsxs)('div', {
                      className: _.channelCoverageDetails,
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              children: N.NW.string(N.t['0FM4i4'])
                          }),
                          (0, r.jsx)('div', {
                              className: _.channels,
                              children: u.map((e) => {
                                  var t;
                                  let n = null != (t = (0, o.KS)(e)) ? t : l.VL1;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: _.channelPill,
                                          children: (0, r.jsxs)(l.Text, {
                                              className: _.channel,
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
                              className: _.channelCoverageHint,
                              children:
                                  f > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(l.P4T, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                }),
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: N.NW.format(N.t['sX889/'], { numChannels: f })
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(l.Text, {
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
        : (0, r.jsx)(C, {
              guild: n,
              saveOnClose: t
          });
}
function C(e) {
    let { guild: t, saveOnClose: n } = e,
        a = (0, s.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, s.e7)([h.Z], () => h.Z.editedOnboardingPrompts),
        d = (0, s.e7)([h.Z], () => h.Z.advancedMode),
        u = i.useRef(!1);
    i.useEffect(() => {
        a || u.current || 0 !== o.length || ((u.current = !0), d || (0, p.tS)(t, [(0, j.ae)()], !1));
    });
    let m = i.useRef(t);
    if (
        (i.useEffect(() => {
            m.current = t;
        }),
        i.useEffect(() => {
            if (n)
                return () => {
                    (0, p.rS)(m.current, { ignoreDefaultPrompt: !0 }).catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let O = async () => {
        try {
            await (0, p.rS)(t), await (0, g.di)(t.id);
        } catch (e) {}
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.X6q, {
                className: _.header,
                variant: 'heading-lg/extrabold',
                children: d ? N.NW.string(N.t.AGjtFh) : N.NW.string(N.t.dqCzoa)
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: N.NW.string(N.t['q/6MLC'])
            }),
            (0, r.jsxs)('div', {
                className: _.links,
                children: [
                    (0, r.jsx)(l.eee, {
                        target: '_blank',
                        href: b.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.NW.string(N.t.Ok55Ki)
                        })
                    }),
                    (0, r.jsx)('div', { className: _.dot }),
                    (0, r.jsx)(l.eee, {
                        onClick: O,
                        children: (0, r.jsx)(l.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: N.NW.string(N.t['6gsjdH'])
                        })
                    }),
                    (0, r.jsx)('div', { className: _.dot }),
                    (0, r.jsx)(f.Wu, { guildId: t.id })
                ]
            }),
            (0, r.jsx)(v, {
                guildId: t.id,
                prompts: o
            }),
            (0, r.jsx)('div', {
                className: _.prompts,
                children: a
                    ? (0, r.jsx)(l.$jN, {})
                    : (0, r.jsx)(x.Z, {
                          postjoinOnly: d,
                          guildId: t.id
                      })
            })
        ]
    });
}
function y() {
    let e = (0, s.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, s.e7)([h.Z], () => h.Z.submitting);
    return null == e
        ? null
        : (0, r.jsx)(a.Z, {
              onSave: () => {
                  try {
                      (0, p.rS)(e);
                  } catch (e) {}
              },
              onReset: p.NB,
              submitting: t,
              onSaveText: N.NW.string(N.t.R3BPHx)
          });
}
