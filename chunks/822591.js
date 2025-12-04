n.d(t, {
    X: () => R,
    Z: () => L,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(54381),
    i = n(473749),
    l = n(345074),
    a = n(442837),
    s = n(544891),
    o = n(433517),
    c = n(796027),
    d = n(668339),
    u = n(248514),
    g = n(28664),
    m = n(755721),
    p = n(481060),
    f = n(493773),
    h = n(933557),
    b = n(769654),
    x = n(984933),
    j = n(650774),
    _ = n(430824),
    v = n(496675),
    O = n(699516),
    C = n(594174),
    y = n(434404),
    N = n(999382),
    E = n(906512),
    I = n(929834),
    S = n(981631),
    T = n(388032),
    P = n(560818),
    w = n(922905);
let Z = "dismissedCommunityFeaturesUpsell",
    R = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i,
            } = (0, a.cj)([N.Z], () => ({
                submitting: N.Z.isSubmitting(),
                guild: N.Z.getGuild(),
                errors: N.Z.getErrors(),
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = "rules_channel_id" === s ? T.intl.string(T.t["7IrBYt"]) : null != s ? i[s] : void 0),
            (0, r.jsx)(c.Z, {
                submitting: n,
                onReset: () => {
                    null != t && y.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        y.Z.saveGuild(t.id, {
                            rulesChannelId: t.rulesChannelId,
                            preferredLocale: t.preferredLocale,
                            safetyAlertsChannelId: t.safetyAlertsChannelId,
                            publicUpdatesChannelId: t.publicUpdatesChannelId,
                            description: t.description,
                            features: t.features,
                        });
                },
                errorMessage: e,
            })
        );
    },
    D = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [c, d] = i.useState(!0 === o.K.get(Z)),
            u = (0, a.e7)([j.Z], () => {
                var e;
                return null != (e = j.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [g, h] = i.useState(!1);
        (0, f.ZP)(() => {
            s.tn
                .get({
                    url: S.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0,
                })
                .then((e) => {
                    h(e.body.eligible_for_admin_server);
                })
                .catch(() => h(!1));
        });
        let x = (0, a.e7)([_.Z], () => _.Z.getGuild("942897714956472401")),
            v = l.features.has(S.GuildFeatures.COMMUNITY) && u >= 1000 && g && null == x;
        if (t && n && !v) return null;
        let O = async () => {
            try {
                let e = await s.tn.post({
                    url: S.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                y.Z.close(), (0, b.X)(e.body.id);
            } catch (e) {}
        };
        return c && !v
            ? null
            : (0, r.jsxs)("div", {
                  className: P.upsellContainer,
                  children: [
                      (0, r.jsxs)("div", {
                          className: P.upsellContent,
                          children: [
                              (0, r.jsx)("img", {
                                  src: w,
                                  alt: "",
                                  width: 60,
                                  className: P.upsellImage,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(p.Heading, {
                                          variant: "heading-md/semibold",
                                          className: P.upsellHeader,
                                          children: T.intl.string(T.t["pR/Bge"]),
                                      }),
                                      (0, r.jsx)(p.Text, {
                                          variant: "text-sm/normal",
                                          children: T.intl.string(T.t["V+Yo1l"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(m.zx, {
                          "aria-label": T.intl.string(T.t.cpT0Cq),
                          look: m.zx.Looks.BLANK,
                          size: m.zx.Sizes.NONE,
                          className: P.upsellClose,
                          onClick: () => {
                              o.K.set(Z, !0), d(!0);
                          },
                          children: (0, r.jsx)(p.Dio, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: P.upsellFooter,
                          children: [
                              v &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: P.upsellButton,
                                      children: (0, r.jsx)(p.Button, {
                                          variant: "primary",
                                          size: "sm",
                                          text: T.intl.string(T.t.iF1Asi),
                                          onClick: O,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: P.upsellButton,
                                        children: (0, r.jsx)(p.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: T.intl.string(T.t["S/Dfid"]),
                                            onClick: () => {
                                                y.Z.setSection(S.pNK.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: P.upsellButton,
                                        children: (0, r.jsx)(p.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: T.intl.string(T.t["0kmJdw"]),
                                            onClick: () => {
                                                y.Z.setSection(S.pNK.ACCESS, S.KsC.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: P.upsellButton,
                                  children: (0, r.jsx)(p.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(T.t.BQIYTb),
                                      onClick: () => {
                                          y.Z.setSection(S.pNK.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    A = () => {
        let e = (0, a.e7)([N.Z], () => N.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([v.Z], () => ({
                canManageGuild: v.Z.can(S.Plq.MANAGE_GUILD, e),
                isGuildAdmin: v.Z.can(S.Plq.ADMINISTRATOR, e),
            })),
            s = (0, a.e7)([x.ZP], () => (null != e ? x.ZP.getChannels(e.id) : null)),
            c = i.useMemo(I.jb, []),
            m = !0 !== o.K.get(Z);
        if (null == e) return null;
        let f = [];
        null != s &&
            s[x.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === S.d4z.GUILD_TEXT &&
                    f.push({
                        value: t.id,
                        label: (0, h.F6)(t, C.default, O.Z, !0),
                    });
            });
        let b = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(S.GuildFeatures.COMMUNITY),
                    t.delete(S.GuildFeatures.DISCOVERABLE),
                    t.delete(S.GuildFeatures.PREVIEW_ENABLED),
                    y.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            j = (e) => {
                y.Z.updateGuild({ description: e });
            };
        return (0, r.jsxs)(p.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(p.Heading, {
                    variant: "heading-lg/semibold",
                    children: T.intl.string(T.t.nRtNqn),
                }),
                m
                    ? (0, r.jsx)(D, {
                          discoveryEnabled: e.features.has(S.GuildFeatures.DISCOVERABLE),
                          onboardingEnabled: e.features.has(S.GuildFeatures.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t["otcXP/"]),
                    description: T.intl.string(T.t.BtwmYB),
                    value: e.rulesChannelId,
                    options: f,
                    onChange: (e) => {
                        y.Z.updateGuild({ rulesChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(p.izJ, {}),
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t.vAyDGU),
                    description: T.intl.string(T.t.ZFeonu),
                    value: e.publicUpdatesChannelId,
                    options: f,
                    onChange: (e) => {
                        y.Z.updateGuild({ publicUpdatesChannelId: e });
                    },
                    isDisabled: !n,
                }),
                (0, r.jsx)(p.izJ, {}),
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t.sMkYE8),
                    description: T.intl.string(T.t.htioQo),
                    value: e.safetyAlertsChannelId,
                    options: f,
                    onChange: (e) => {
                        y.Z.updateGuild({ safetyAlertsChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(p.izJ, {}),
                (0, r.jsx)(d.d, {
                    layout: "horizontal-responsive",
                    label: T.intl.string(T.t.pO60fy),
                    description: T.intl.string(T.t.aIR73T),
                    value: e.preferredLocale,
                    options: c,
                    onChange: (e) => {
                        y.Z.updateGuild({ preferredLocale: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(p.izJ, {}),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsx)(p.Kx8, {
                            label: T.intl.string(T.t["RSfm+i"]),
                            description: T.intl.string(T.t["/B6PRw"]),
                            value: null != (n = e.description) ? n : "",
                            placeholder: T.intl.string(T.t.Nvfowl),
                            onChange: j,
                            maxLength: l.Us,
                            disabled: !t,
                        });
                })(),
                (0, r.jsx)(p.izJ, {}),
                (0, r.jsx)(p.gNt, {
                    label: T.intl.string(T.t.c1BmbC),
                    description: T.intl.string(T.t.aQzVF8),
                    layout: "horizontal",
                    children: (0, r.jsx)(g.u, {
                        text: n ? null : T.intl.string(T.t["pjG+T3"]),
                        "aria-label": n ? void 0 : T.intl.string(T.t["pjG+T3"]),
                        children: (0, r.jsx)(p.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: T.intl.string(T.t.c1BmbC),
                            onClick: () => {
                                e.features.has(S.GuildFeatures.DISCOVERABLE) &&
                                e.features.has(S.GuildFeatures.PARTNERED)
                                    ? (0, u.Z)({
                                          title: T.intl.string(T.t.iBnVHc),
                                          subtitle: T.intl.string(T.t["P+Sh8V"]),
                                          confirmText: T.intl.string(T.t["cY+Oob"]),
                                          cancelText: T.intl.string(T.t.oEAioF),
                                          onConfirm: b,
                                      })
                                    : e.features.has(S.GuildFeatures.DISCOVERABLE)
                                      ? (0, u.Z)({
                                            title: T.intl.string(T.t.iBnVHc),
                                            subtitle: T.intl.string(T.t["eMx/uZ"]),
                                            confirmText: T.intl.string(T.t["cY+Oob"]),
                                            cancelText: T.intl.string(T.t.oEAioF),
                                            onConfirm: b,
                                        })
                                      : e.features.has(S.GuildFeatures.PARTNERED)
                                        ? (0, u.Z)({
                                              title: T.intl.string(T.t.iBnVHc),
                                              subtitle: T.intl.string(T.t.l1wLeX),
                                              confirmText: T.intl.string(T.t["cY+Oob"]),
                                              cancelText: T.intl.string(T.t.oEAioF),
                                              onConfirm: b,
                                          })
                                        : b();
                            },
                            disabled: !n,
                        }),
                    }),
                }),
            ],
        });
    },
    L = () => {
        let e = (0, a.e7)([N.Z], () => N.Z.getGuild());
        return null == e
            ? null
            : e.features.has(S.GuildFeatures.COMMUNITY)
              ? (0, r.jsx)(A, {})
              : (0, r.jsx)(E.Z, { guild: e });
    };
