n.d(t, {
    ZP: () => C,
    Zm: () => N
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(471445),
    c = n(45966),
    u = n(637853),
    d = n(999382),
    m = n(889369),
    g = n(983135),
    p = n(570961),
    h = n(208665),
    f = n(974513),
    x = n(716130),
    b = n(981631),
    j = n(290511),
    _ = n(388032),
    v = n(795808);
function O(e) {
    let { guildId: t, prompts: n } = e,
        a = (0, l.e7)([m.Z], () => m.Z.editedDefaultChannelIds),
        [c, d] = (0, u.dF)(t, n, [...a]),
        g = c.length,
        p = c.length + d.length,
        h = (g / p) * 100,
        f = Math.max(Math.ceil((85 * p) / 100) - g, 0),
        [x, b] = i.useState(!1),
        j = x ? s.CJ0 : s.u04;
    return (0, r.jsxs)('div', {
        className: v.channelCoverage,
        children: [
            (0, r.jsxs)(s.P3F, {
                className: v.coverageHeader,
                onClick: () => b(!x),
                children: [
                    (0, r.jsxs)('div', {
                        className: v.warningTextContainer,
                        children: [
                            h <= 85 &&
                                (0, r.jsx)(s.P4T, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: v.warning
                                }),
                            (0, r.jsx)(s.Text, {
                                className: v.coverageTitle,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: _.intl.format(_.t.nMVKCQ, { numChannelsMissing: p - g })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: v.progressContainer,
                        children: [
                            (0, r.jsx)(s.Exd, {
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
            x
                ? (0, r.jsxs)('div', {
                      className: v.channelCoverageDetails,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              children: _.intl.string(_.t['0FM4i4'])
                          }),
                          (0, r.jsx)('div', {
                              className: v.channels,
                              children: d.map((e) => {
                                  var t;
                                  let n = null != (t = (0, o.KS)(e)) ? t : s.VL1;
                                  return (0, r.jsx)(
                                      'div',
                                      {
                                          className: v.channelPill,
                                          children: (0, r.jsxs)(s.Text, {
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
                                                (0, r.jsx)(s.P4T, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: _.intl.format(_.t['sX889/'], { numChannels: f })
                                                })
                                            ]
                                        })
                                      : (0, r.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-muted',
                                            children: _.intl.string(_.t.o4s29v)
                                        })
                          })
                      ]
                  })
                : null
        ]
    });
}
function C(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([d.Z], () => d.Z.getGuild());
    return null == n
        ? null
        : (0, r.jsx)(y, {
              guild: n,
              saveOnClose: t
          });
}
function y(e) {
    let { guild: t, saveOnClose: n } = e,
        a = (0, l.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, l.e7)([h.Z], () => h.Z.editedOnboardingPrompts),
        u = (0, l.e7)([h.Z], () => h.Z.advancedMode),
        d = i.useRef(!1);
    i.useEffect(() => {
        a || d.current || 0 !== o.length || ((d.current = !0), u || (0, p.tS)(t, [(0, j.ae)()], !1));
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
    let C = async () => {
        try {
            await (0, p.rS)(t), await (0, g.di)(t.id);
        } catch (e) {}
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.X6q, {
                className: v.header,
                variant: 'heading-lg/extrabold',
                children: u ? _.intl.string(_.t.AGjtFh) : _.intl.string(_.t.dqCzoa)
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: _.intl.string(_.t['q/6MLC'])
            }),
            (0, r.jsxs)('div', {
                className: v.links,
                children: [
                    (0, r.jsx)(s.eee, {
                        target: '_blank',
                        href: b.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.intl.string(_.t.Ok55Ki)
                        })
                    }),
                    (0, r.jsx)('div', { className: v.dot }),
                    (0, r.jsx)(s.eee, {
                        onClick: C,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.intl.string(_.t['6gsjdH'])
                        })
                    }),
                    (0, r.jsx)('div', { className: v.dot }),
                    (0, r.jsx)(f.Wu, { guildId: t.id })
                ]
            }),
            (0, r.jsx)(O, {
                guildId: t.id,
                prompts: o
            }),
            (0, r.jsx)('div', {
                className: v.prompts,
                children: a
                    ? (0, r.jsx)(s.$jN, {})
                    : (0, r.jsx)(x.Z, {
                          postjoinOnly: u,
                          guildId: t.id
                      })
            })
        ]
    });
}
function N() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = (0, l.e7)([h.Z], () => h.Z.submitting);
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
              onSaveText: _.intl.string(_.t.R3BPHx)
          });
}
