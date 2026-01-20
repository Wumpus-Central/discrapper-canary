n.d(t, {
    ZP: () => I,
    Zm: () => _,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(796027),
    s = n(481060),
    o = n(471445),
    c = n(45966),
    d = n(637853),
    u = n(999382),
    g = n(889369),
    f = n(983135),
    m = n(190007),
    b = n(926958),
    p = n(570961),
    h = n(208665),
    x = n(974513),
    j = n(38703),
    v = n(716130),
    O = n(981631),
    y = n(290511),
    C = n(388032),
    N = n(23550);
function E(e) {
    let { guildId: t, prompts: n } = e,
        a = (0, l.e7)([g.Z], () => g.Z.editedDefaultChannelIds),
        [c, u] = (0, d.dF)(t, n, [...a]),
        f = c.length,
        m = c.length + u.length,
        b = (f / m) * 100,
        p = Math.max(Math.ceil((85 * m) / 100) - f, 0),
        [h, x] = i.useState(!1),
        j = h ? s.CJ0 : s.u04;
    return (0, r.jsxs)("div", {
        className: N.channelCoverage,
        children: [
            (0, r.jsxs)(s.P3F, {
                className: N.coverageHeader,
                onClick: () => x(!h),
                children: [
                    (0, r.jsxs)("div", {
                        className: N.warningTextContainer,
                        children: [
                            b <= 85 &&
                                (0, r.jsx)(s.Mgn, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: N.warning,
                                }),
                            (0, r.jsx)(s.Text, {
                                className: N.coverageTitle,
                                variant: "text-xs/medium",
                                color: "text-muted",
                                children: C.intl.format(C.t.nMVKCX, { numChannelsMissing: m - f }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: N.progressContainer,
                        children: [
                            (0, r.jsx)(s.Exd, {
                                className: N.coverageProgress,
                                foregroundColor: b > 85 ? "var(--status-positive)" : "var(--status-warning)",
                                percent: b,
                            }),
                            (0, r.jsx)(j, {
                                size: "md",
                                color: "currentColor",
                                className: N.caret,
                            }),
                        ],
                    }),
                ],
            }),
            h
                ? (0, r.jsxs)("div", {
                      className: N.channelCoverageDetails,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              children: C.intl.string(C.t["0FM4i+"]),
                          }),
                          (0, r.jsx)("div", {
                              className: N.channels,
                              children: u.map((e) => {
                                  var t;
                                  let n = null != (t = (0, o.KS)(e)) ? t : s.VL1;
                                  return (0, r.jsx)(
                                      "div",
                                      {
                                          className: N.channelPill,
                                          children: (0, r.jsxs)(s.Text, {
                                              className: N.channel,
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
                              className: N.channelCoverageHint,
                              children:
                                  p > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(s.Mgn, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: C.intl.format(C.t.sX8890, { numChannels: p }),
                                                }),
                                            ],
                                        })
                                      : (0, r.jsx)(s.Text, {
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
function I(e) {
    let { saveOnClose: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.getGuild());
    return null == n
        ? null
        : (0, r.jsx)(S, {
              guild: n,
              saveOnClose: t,
          });
}
function S(e) {
    let { guild: t, saveOnClose: n } = e,
        a = (0, l.e7)([c.Z], () => c.Z.isLoading()),
        o = (0, l.e7)([h.Z], () => h.Z.editedOnboardingPrompts),
        d = (0, l.e7)([h.Z], () => h.Z.advancedMode),
        u = i.useRef(!1);
    i.useEffect(() => {
        a || u.current || ((u.current = !0), d || 0 !== o.length || (0, p.tS)(t, [(0, y.ae)()], !1));
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
                        (0, p.rS)(e, { ignoreDefaultPrompt: !0 })
                            .then(() => (0, m.ss)(e.id))
                            .catch(() => {});
                };
        }, [n]),
        null == t)
    )
        return null;
    let b = async () => {
        try {
            await (0, p.rS)(t), await (0, f.di)(t.id);
        } catch (e) {}
    };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Heading, {
                className: N.header,
                variant: "heading-lg/extrabold",
                children: d ? C.intl.string(C.t.AGjtFv) : C.intl.string(C.t.dqCzoT),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: C.intl.string(C.t["q/6MLL"]),
            }),
            (0, r.jsxs)("div", {
                className: N.links,
                children: [
                    (0, r.jsx)(s.eee, {
                        target: "_blank",
                        href: O.EYA.GUILD_ONBOARDING_EXAMPLES,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: C.intl.string(C.t.Ok55Kh),
                        }),
                    }),
                    (0, r.jsx)("div", { className: N.dot }),
                    (0, r.jsx)(s.eee, {
                        onClick: b,
                        children: (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: C.intl.string(C.t["6gsjdM"]),
                        }),
                    }),
                    (0, r.jsx)("div", { className: N.dot }),
                    (0, r.jsx)(x.Wu, { guildId: t.id }),
                ],
            }),
            (0, r.jsx)(E, {
                guildId: t.id,
                prompts: o,
            }),
            n && (0, r.jsx)(j.Z, { guildId: t.id }),
            (0, r.jsx)("div", {
                className: N.prompts,
                children: a
                    ? (0, r.jsx)(s.$jN, {})
                    : (0, r.jsx)(v.Z, {
                          postjoinOnly: d,
                          guildId: t.id,
                      }),
            }),
        ],
    });
}
function _() {
    let e = (0, l.e7)([u.Z], () => u.Z.getGuild()),
        t = (0, l.e7)([h.Z], () => h.Z.submitting),
        n = (0, l.e7)([b.Z], () => b.Z.isSubmitting()),
        i = (0, l.e7)([b.Z], () => b.Z.hasChanges());
    return null == e
        ? null
        : (0, r.jsx)(a.Z, {
              onSave: async () => {
                  try {
                      await (0, p.rS)(e), i && (await (0, m.e$)(e.id));
                  } catch (e) {}
              },
              onReset: () => {
                  (0, p.NB)(), i && (0, m.Pk)();
              },
              submitting: t || (i && n),
              onSaveText: C.intl.string(C.t["R3BPH+"]),
          });
}
