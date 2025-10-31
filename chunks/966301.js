n.d(t, {
    ZP: () => O,
    Zm: () => E,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(796027),
    s = n(481060),
    o = n(471445),
    c = n(45966),
    d = n(637853),
    u = n(999382),
    g = n(889369),
    m = n(983135),
    p = n(570961),
    f = n(208665),
    h = n(974513),
    b = n(716130),
    x = n(981631),
    j = n(290511),
    v = n(388032),
    _ = n(314160);
function C(e) {
    let { guildId: t, prompts: n } = e,
        a = (0, l.e7)([g.Z], () => g.Z.editedDefaultChannelIds),
        [c, u] = (0, d.dF)(t, n, [...a]),
        m = c.length,
        p = c.length + u.length,
        f = (m / p) * 100,
        h = Math.max(Math.ceil((85 * p) / 100) - m, 0),
        [b, x] = i.useState(!1),
        j = b ? s.CJ0 : s.u04;
    return (0, r.jsxs)("div", {
        className: _.channelCoverage,
        children: [
            (0, r.jsxs)(s.P3F, {
                className: _.coverageHeader,
                onClick: () => x(!b),
                children: [
                    (0, r.jsxs)("div", {
                        className: _.warningTextContainer,
                        children: [
                            f <= 85 &&
                                (0, r.jsx)(s.Mgn, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: _.warning,
                                }),
                            (0, r.jsx)(s.Text, {
                                className: _.coverageTitle,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: v.intl.format(v.t.nMVKCX, { numChannelsMissing: p - m }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: _.progressContainer,
                        children: [
                            (0, r.jsx)(s.Exd, {
                                className: _.coverageProgress,
                                foregroundColor: f > 85 ? "var(--status-positive)" : "var(--status-warning)",
                                percent: f,
                            }),
                            (0, r.jsx)(j, {
                                size: "md",
                                color: "currentColor",
                                className: _.caret,
                            }),
                        ],
                    }),
                ],
            }),
            b
                ? (0, r.jsxs)("div", {
                      className: _.channelCoverageDetails,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: v.intl.string(v.t["0FM4i+"]),
                          }),
                          (0, r.jsx)("div", {
                              className: _.channels,
                              children: u.map((e) => {
                                  var t;
                                  let n = null != (t = (0, o.KS)(e)) ? t : s.VL1;
                                  return (0, r.jsx)(
                                      "div",
                                      {
                                          className: _.channelPill,
                                          children: (0, r.jsxs)(s.Text, {
                                              className: _.channel,
                                              variant: "text-xs/normal",
                                              color: "interactive-active",
                                              children: [
                                                  (0, r.jsx)(n, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                  }),
                                                  e.name,
                                              ],
                                          }),
                                      },
                                      e.id,
                                  );
                              }),
                          }),
                          (0, r.jsx)("div", {
                              className: _.channelCoverageHint,
                              children:
                                  h > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(s.Mgn, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: v.intl.format(v.t.sX8890, { numChannels: h }),
                                                }),
                                            ],
                                        })
                                      : (0, r.jsx)(s.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: v.intl.string(v.t.o4s29v),
                                        }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function O(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getGuild());
    return null == n
        ? null
        : (0, r.jsx)(y, {
              guild: n,
              saveOnClose: t,
          });
}
function y(e) {
    let { guild: t, saveOnClose: n } = e,
        a = (0, l.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, l.e7)([f.Z], () => f.Z.editedOnboardingPrompts),
        d = (0, l.e7)([f.Z], () => f.Z.advancedMode),
        u = i.useRef(!1);
    i.useEffect(() => {
        a || u.current || ((u.current = !0), d || 0 !== o.length || (0, p.tS)(t, [(0, j.ae)()], !1));
    });
    let g = i.useRef(t);
    if (
        (i.useEffect(() => {
            g.current = t;
        }),
        i.useEffect(() => {
            if (n)
                return () => {
                    (0, p.rS)(g.current, { ignoreDefaultPrompt: !0 }).catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let O = async () => {
        try {
            await (0, p.rS)(t), await (0, m.di)(t.id);
        } catch (e) {}
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Heading, {
                className: _.header,
                variant: "heading-lg/extrabold",
                children: d ? v.intl.string(v.t.AGjtFv) : v.intl.string(v.t.dqCzoT),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: v.intl.string(v.t["q/6MLL"]),
            }),
            (0, r.jsxs)("div", {
                className: _.links,
                children: [
                    (0, r.jsx)(s.Anchor, {
                        target: "_blank",
                        href: x.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: v.intl.string(v.t.Ok55Kh),
                        }),
                    }),
                    (0, r.jsx)("div", { className: _.dot }),
                    (0, r.jsx)(s.Anchor, {
                        onClick: O,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: v.intl.string(v.t["6gsjdM"]),
                        }),
                    }),
                    (0, r.jsx)("div", { className: _.dot }),
                    (0, r.jsx)(h.Wu, { guildId: t.id }),
                ],
            }),
            (0, r.jsx)(C, {
                guildId: t.id,
                prompts: o,
            }),
            (0, r.jsx)("div", {
                className: _.prompts,
                children: a
                    ? (0, r.jsx)(s.$jN, {})
                    : (0, r.jsx)(b.Z, {
                          postjoinOnly: d,
                          guildId: t.id,
                      }),
            }),
        ],
    });
}
function E() {
    let e = (0, l.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, l.e7)([f.Z], () => f.Z.submitting);
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
              onSaveText: v.intl.string(v.t["R3BPH+"]),
          });
}
