n.d(t, {
    ZP: () => E,
    Zm: () => S,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    s = n(796027),
    a = n(481060),
    o = n(471445),
    c = n(45966),
    u = n(637853),
    d = n(999382),
    g = n(889369),
    m = n(983135),
    p = n(190007),
    f = n(926958),
    h = n(570961),
    x = n(208665),
    b = n(974513),
    j = n(38703),
    _ = n(716130),
    v = n(981631),
    O = n(290511),
    C = n(388032),
    y = n(314160);
function N(e) {
    let { guildId: t, prompts: n } = e,
        s = (0, l.e7)([g.Z], () => g.Z.editedDefaultChannelIds),
        [c, d] = (0, u.dF)(t, n, [...s]),
        m = c.length,
        p = c.length + d.length,
        f = (m / p) * 100,
        h = Math.max(Math.ceil((85 * p) / 100) - m, 0),
        [x, b] = i.useState(!1),
        j = x ? a.CJ0 : a.u04;
    return (0, r.jsxs)("div", {
        className: y.channelCoverage,
        children: [
            (0, r.jsxs)(a.P3F, {
                className: y.coverageHeader,
                onClick: () => b(!x),
                children: [
                    (0, r.jsxs)("div", {
                        className: y.warningTextContainer,
                        children: [
                            f <= 85 &&
                                (0, r.jsx)(a.Mgn, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: y.warning,
                                }),
                            (0, r.jsx)(a.Text, {
                                className: y.coverageTitle,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: C.intl.format(C.t.nMVKCX, { numChannelsMissing: p - m }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: y.progressContainer,
                        children: [
                            (0, r.jsx)(a.Exd, {
                                className: y.coverageProgress,
                                foregroundColor: f > 85 ? "var(--status-positive)" : "var(--status-warning)",
                                percent: f,
                            }),
                            (0, r.jsx)(j, {
                                size: "md",
                                color: "currentColor",
                                className: y.caret,
                            }),
                        ],
                    }),
                ],
            }),
            x
                ? (0, r.jsxs)("div", {
                      className: y.channelCoverageDetails,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: C.intl.string(C.t["0FM4i+"]),
                          }),
                          (0, r.jsx)("div", {
                              className: y.channels,
                              children: d.map((e) => {
                                  var t;
                                  let n = null != (t = (0, o.KS)(e)) ? t : a.VL1;
                                  return (0, r.jsx)(
                                      "div",
                                      {
                                          className: y.channelPill,
                                          children: (0, r.jsxs)(a.Text, {
                                              className: y.channel,
                                              variant: "text-xs/normal",
                                              color: "interactive-text-active",
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
                              className: y.channelCoverageHint,
                              children:
                                  h > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(a.Mgn, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: C.intl.format(C.t.sX8890, { numChannels: h }),
                                                }),
                                            ],
                                        })
                                      : (0, r.jsx)(a.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: C.intl.string(C.t.o4s29v),
                                        }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function E(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([d.Z], () => d.Z.getGuild());
    return null == n
        ? null
        : (0, r.jsx)(I, {
              guild: n,
              saveOnClose: t,
          });
}
function I(e) {
    let { guild: t, saveOnClose: n } = e,
        s = (0, l.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, l.e7)([x.Z], () => x.Z.editedOnboardingPrompts),
        u = (0, l.e7)([x.Z], () => x.Z.advancedMode),
        d = i.useRef(!1);
    i.useEffect(() => {
        s || d.current || ((d.current = !0), u || 0 !== o.length || (0, h.tS)(t, [(0, O.ae)()], !1));
    });
    let g = i.useRef(t);
    if (
        (i.useEffect(() => {
            g.current = t;
        }),
        i.useEffect(() => {
            if (n)
                return () => {
                    let e = g.current;
                    null != e &&
                        (0, h.rS)(e, { ignoreDefaultPrompt: !0 })
                            .then(() => (0, p.ss)(e.id))
                            .catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let f = async () => {
        try {
            await (0, h.rS)(t), await (0, m.di)(t.id);
        } catch (e) {}
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Heading, {
                className: y.header,
                variant: "heading-lg/extrabold",
                children: u ? C.intl.string(C.t.AGjtFv) : C.intl.string(C.t.dqCzoT),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: C.intl.string(C.t["q/6MLL"]),
            }),
            (0, r.jsxs)("div", {
                className: y.links,
                children: [
                    (0, r.jsx)(a.Anchor, {
                        target: "_blank",
                        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: C.intl.string(C.t.Ok55Kh),
                        }),
                    }),
                    (0, r.jsx)("div", { className: y.dot }),
                    (0, r.jsx)(a.Anchor, {
                        onClick: f,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: C.intl.string(C.t["6gsjdM"]),
                        }),
                    }),
                    (0, r.jsx)("div", { className: y.dot }),
                    (0, r.jsx)(b.Wu, { guildId: t.id }),
                ],
            }),
            (0, r.jsx)(N, {
                guildId: t.id,
                prompts: o,
            }),
            n && (0, r.jsx)(j.Z, {}),
            (0, r.jsx)("div", {
                className: y.prompts,
                children: s
                    ? (0, r.jsx)(a.$jN, {})
                    : (0, r.jsx)(_.Z, {
                          postjoinOnly: u,
                          guildId: t.id,
                      }),
            }),
        ],
    });
}
function S() {
    let e = (0, l.e7)([d.Z], () => d.Z.getGuild()),
        t = (0, l.e7)([x.Z], () => x.Z.submitting),
        n = (0, l.e7)([f.Z], () => f.Z.isSubmitting()),
        i = (0, l.e7)([f.Z], () => f.Z.hasChanges());
    return null == e
        ? null
        : (0, r.jsx)(s.Z, {
              onSave: async () => {
                  try {
                      await (0, h.rS)(e), i && (await (0, p.e$)(e.id));
                  } catch (e) {}
              },
              onReset: () => {
                  (0, h.NB)(), i && (0, p.Pk)();
              },
              submitting: t || (i && n),
              onSaveText: C.intl.string(C.t["R3BPH+"]),
          });
}
