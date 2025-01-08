n.d(t, {
    ZP: function () {
        return T;
    },
    Zm: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(852860),
    o = n(471445),
    c = n(45966),
    d = n(637853),
    u = n(999382),
    m = n(889369),
    h = n(983135),
    g = n(570961),
    x = n(208665),
    p = n(974513),
    f = n(716130),
    C = n(981631),
    v = n(290511),
    _ = n(388032),
    N = n(554205);
function I(e) {
    let { guildId: t, prompts: n } = e,
        s = (0, l.e7)([m.Z], () => m.Z.editedDefaultChannelIds),
        [c, u] = (0, d.dF)(t, n, [...s]),
        h = c.length,
        g = c.length + u.length,
        x = (h / g) * 100,
        p = Math.max(Math.ceil((85 * g) / 100) - h, 0),
        [f, C] = r.useState(!1),
        v = f ? a.ChevronSmallDownIcon : a.ChevronSmallUpIcon;
    return (0, i.jsxs)('div', {
        className: N.channelCoverage,
        children: [
            (0, i.jsxs)(a.Clickable, {
                className: N.coverageHeader,
                onClick: () => C(!f),
                children: [
                    (0, i.jsxs)('div', {
                        className: N.warningTextContainer,
                        children: [
                            x <= 85 &&
                                (0, i.jsx)(a.CircleWarningIcon, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: N.warning
                                }),
                            (0, i.jsx)(a.Text, {
                                className: N.coverageTitle,
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                children: _.intl.format(_.t.nMVKCQ, { numChannelsMissing: g - h })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: N.progressContainer,
                        children: [
                            (0, i.jsx)(a.Progress, {
                                className: N.coverageProgress,
                                foregroundColor: x > 85 ? 'var(--status-positive)' : 'var(--status-warning)',
                                percent: x
                            }),
                            (0, i.jsx)(v, {
                                size: 'md',
                                color: 'currentColor',
                                className: N.caret
                            })
                        ]
                    })
                ]
            }),
            f
                ? (0, i.jsxs)('div', {
                      className: N.channelCoverageDetails,
                      children: [
                          (0, i.jsx)(a.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-muted',
                              children: _.intl.string(_.t['0FM4i4'])
                          }),
                          (0, i.jsx)('div', {
                              className: N.channels,
                              children: u.map((e) => {
                                  var t;
                                  let n = null !== (t = (0, o.KS)(e)) && void 0 !== t ? t : a.TextIcon;
                                  return (0, i.jsx)(
                                      'div',
                                      {
                                          className: N.channelPill,
                                          children: (0, i.jsxs)(a.Text, {
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
                                                (0, i.jsx)(a.CircleWarningIcon, {
                                                    size: 'xs',
                                                    color: 'currentColor'
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'text-muted',
                                                    children: _.intl.format(_.t['sX889/'], { numChannels: p })
                                                })
                                            ]
                                        })
                                      : (0, i.jsx)(a.Text, {
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
function T(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getGuild());
    return null == n
        ? null
        : (0, i.jsx)(j, {
              guild: n,
              saveOnClose: t
          });
}
function j(e) {
    let { guild: t, saveOnClose: n } = e,
        s = (0, l.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, l.e7)([x.Z], () => x.Z.editedOnboardingPrompts),
        d = (0, l.e7)([x.Z], () => x.Z.advancedMode),
        u = r.useRef(!1);
    r.useEffect(() => {
        !s && !u.current && 0 === o.length && ((u.current = !0), !d && (0, g.tS)(t, [(0, v.ae)()], !1));
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
    let T = async () => {
        try {
            await (0, g.rS)(t), await (0, h.di)(t.id);
        } catch {}
    };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Heading, {
                className: N.header,
                variant: 'heading-lg/extrabold',
                children: d ? _.intl.string(_.t.AGjtFh) : _.intl.string(_.t.dqCzoa)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: _.intl.string(_.t['q/6MLC'])
            }),
            (0, i.jsxs)('div', {
                className: N.links,
                children: [
                    (0, i.jsx)(a.Anchor, {
                        target: '_blank',
                        href: C.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.intl.string(_.t.Ok55Ki)
                        })
                    }),
                    (0, i.jsx)('div', { className: N.dot }),
                    (0, i.jsx)(a.Anchor, {
                        onClick: T,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/medium',
                            color: 'text-link',
                            children: _.intl.string(_.t['6gsjdH'])
                        })
                    }),
                    (0, i.jsx)('div', { className: N.dot }),
                    (0, i.jsx)(p.Wu, { guildId: t.id })
                ]
            }),
            (0, i.jsx)(I, {
                guildId: t.id,
                prompts: o
            }),
            (0, i.jsx)('div', {
                className: N.prompts,
                children: s
                    ? (0, i.jsx)(a.Spinner, {})
                    : (0, i.jsx)(f.Z, {
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
        : (0, i.jsx)(s.Z, {
              onSave: () => {
                  try {
                      (0, g.rS)(e);
                  } catch {}
              },
              onReset: g.NB,
              submitting: t,
              onSaveText: _.intl.string(_.t.R3BPHx)
          });
}
