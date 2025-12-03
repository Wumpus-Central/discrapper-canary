n.d(t, {
    X: () => Z,
    Z: () => A,
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
    d = n(248514),
    u = n(28664),
    g = n(755721),
    m = n(481060),
    p = n(493773),
    f = n(933557),
    h = n(769654),
    b = n(984933),
    x = n(650774),
    j = n(430824),
    _ = n(496675),
    v = n(699516),
    O = n(594174),
    C = n(434404),
    y = n(999382),
    N = n(906512),
    E = n(929834),
    I = n(981631),
    S = n(388032),
    T = n(560818),
    P = n(922905);
let w = "dismissedCommunityFeaturesUpsell",
    Z = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i,
            } = (0, a.cj)([y.Z], () => ({
                submitting: y.Z.isSubmitting(),
                guild: y.Z.getGuild(),
                errors: y.Z.getErrors(),
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = "rules_channel_id" === s ? S.intl.string(S.t["7IrBYt"]) : null != s ? i[s] : void 0),
            (0, r.jsx)(c.Z, {
                submitting: n,
                onReset: () => {
                    null != t && C.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        C.Z.saveGuild(t.id, {
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
    R = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [c, d] = i.useState(!0 === o.K.get(w)),
            u = (0, a.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [f, b] = i.useState(!1);
        (0, p.ZP)(() => {
            s.tn
                .get({
                    url: I.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0,
                })
                .then((e) => {
                    b(e.body.eligible_for_admin_server);
                })
                .catch(() => b(!1));
        });
        let _ = (0, a.e7)([j.Z], () => j.Z.getGuild("942897714956472401")),
            v = l.features.has(I.GuildFeatures.COMMUNITY) && u >= 1000 && f && null == _;
        if (t && n && !v) return null;
        let O = async () => {
            try {
                let e = await s.tn.post({
                    url: I.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                C.Z.close(), (0, h.X)(e.body.id);
            } catch (e) {}
        };
        return c && !v
            ? null
            : (0, r.jsxs)("div", {
                  className: T.upsellContainer,
                  children: [
                      (0, r.jsxs)("div", {
                          className: T.upsellContent,
                          children: [
                              (0, r.jsx)("img", {
                                  src: P,
                                  alt: "",
                                  width: 60,
                                  className: T.upsellImage,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(m.Heading, {
                                          variant: "heading-md/semibold",
                                          className: T.upsellHeader,
                                          children: S.intl.string(S.t["pR/Bge"]),
                                      }),
                                      (0, r.jsx)(m.Text, {
                                          variant: "text-sm/normal",
                                          children: S.intl.string(S.t["V+Yo1l"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(g.zx, {
                          "aria-label": S.intl.string(S.t.cpT0Cq),
                          look: g.zx.Looks.BLANK,
                          size: g.zx.Sizes.NONE,
                          className: T.upsellClose,
                          onClick: () => {
                              o.K.set(w, !0), d(!0);
                          },
                          children: (0, r.jsx)(m.Dio, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: T.upsellFooter,
                          children: [
                              v &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: T.upsellButton,
                                      children: (0, r.jsx)(m.Button, {
                                          variant: "primary",
                                          size: "sm",
                                          text: S.intl.string(S.t.iF1Asi),
                                          onClick: O,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.upsellButton,
                                        children: (0, r.jsx)(m.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: S.intl.string(S.t["S/Dfid"]),
                                            onClick: () => {
                                                C.Z.setSection(I.pNK.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.upsellButton,
                                        children: (0, r.jsx)(m.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: S.intl.string(S.t["0kmJdw"]),
                                            onClick: () => {
                                                C.Z.setSection(I.pNK.ACCESS, I.KsC.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: T.upsellButton,
                                  children: (0, r.jsx)(m.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(S.t.BQIYTb),
                                      onClick: () => {
                                          C.Z.setSection(I.pNK.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    D = () => {
        let e = (0, a.e7)([y.Z], () => y.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([_.Z], () => ({
                canManageGuild: _.Z.can(I.Plq.MANAGE_GUILD, e),
                isGuildAdmin: _.Z.can(I.Plq.ADMINISTRATOR, e),
            })),
            s = (0, a.e7)([b.ZP], () => (null != e ? b.ZP.getChannels(e.id) : null)),
            c = i.useMemo(E.jb, []),
            g = !0 !== o.K.get(w);
        if (null == e) return null;
        let p = [];
        null != s &&
            s[b.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === I.d4z.GUILD_TEXT &&
                    p.push({
                        value: t.id,
                        label: (0, f.F6)(t, O.default, v.Z, !0),
                    });
            });
        let h = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(I.GuildFeatures.COMMUNITY),
                    t.delete(I.GuildFeatures.DISCOVERABLE),
                    t.delete(I.GuildFeatures.PREVIEW_ENABLED),
                    C.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            x = (e) => {
                C.Z.updateGuild({ description: e });
            };
        return (0, r.jsxs)(m.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(m.Heading, {
                    variant: "heading-lg/semibold",
                    children: S.intl.string(S.t.nRtNqn),
                }),
                g
                    ? (0, r.jsx)(R, {
                          discoveryEnabled: e.features.has(I.GuildFeatures.DISCOVERABLE),
                          onboardingEnabled: e.features.has(I.GuildFeatures.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsx)(m.VcW, {
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t["otcXP/"]),
                    description: S.intl.string(S.t.BtwmYB),
                    value: e.rulesChannelId,
                    options: p,
                    onChange: (e) => {
                        C.Z.updateGuild({ rulesChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(m.VcW, {
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t.vAyDGU),
                    description: S.intl.string(S.t.ZFeonu),
                    value: e.publicUpdatesChannelId,
                    options: p,
                    onChange: (e) => {
                        C.Z.updateGuild({ publicUpdatesChannelId: e });
                    },
                    isDisabled: !n,
                }),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(m.VcW, {
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t.sMkYE8),
                    description: S.intl.string(S.t.htioQo),
                    value: e.safetyAlertsChannelId,
                    options: p,
                    onChange: (e) => {
                        C.Z.updateGuild({ safetyAlertsChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(m.VcW, {
                    layout: "horizontal-responsive",
                    label: S.intl.string(S.t.pO60fy),
                    description: S.intl.string(S.t.aIR73T),
                    value: e.preferredLocale,
                    options: c,
                    onChange: (e) => {
                        C.Z.updateGuild({ preferredLocale: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(m.izJ, {}),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsx)(m.Kx8, {
                            label: S.intl.string(S.t["RSfm+i"]),
                            description: S.intl.string(S.t["/B6PRw"]),
                            value: null != (n = e.description) ? n : "",
                            placeholder: S.intl.string(S.t.Nvfowl),
                            onChange: x,
                            maxLength: l.Us,
                            disabled: !t,
                        });
                })(),
                (0, r.jsx)(m.izJ, {}),
                (0, r.jsx)(m.gNt, {
                    label: S.intl.string(S.t.c1BmbC),
                    description: S.intl.string(S.t.aQzVF8),
                    layout: "horizontal",
                    children: (0, r.jsx)(u.u, {
                        text: n ? null : S.intl.string(S.t["pjG+T3"]),
                        "aria-label": n ? void 0 : S.intl.string(S.t["pjG+T3"]),
                        children: (0, r.jsx)(m.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: S.intl.string(S.t.c1BmbC),
                            onClick: () => {
                                e.features.has(I.GuildFeatures.DISCOVERABLE) &&
                                e.features.has(I.GuildFeatures.PARTNERED)
                                    ? (0, d.Z)({
                                          title: S.intl.string(S.t.iBnVHc),
                                          subtitle: S.intl.string(S.t["P+Sh8V"]),
                                          confirmText: S.intl.string(S.t["cY+Oob"]),
                                          cancelText: S.intl.string(S.t.oEAioF),
                                          onConfirm: h,
                                      })
                                    : e.features.has(I.GuildFeatures.DISCOVERABLE)
                                      ? (0, d.Z)({
                                            title: S.intl.string(S.t.iBnVHc),
                                            subtitle: S.intl.string(S.t["eMx/uZ"]),
                                            confirmText: S.intl.string(S.t["cY+Oob"]),
                                            cancelText: S.intl.string(S.t.oEAioF),
                                            onConfirm: h,
                                        })
                                      : e.features.has(I.GuildFeatures.PARTNERED)
                                        ? (0, d.Z)({
                                              title: S.intl.string(S.t.iBnVHc),
                                              subtitle: S.intl.string(S.t.l1wLeX),
                                              confirmText: S.intl.string(S.t["cY+Oob"]),
                                              cancelText: S.intl.string(S.t.oEAioF),
                                              onConfirm: h,
                                          })
                                        : h();
                            },
                            disabled: !n,
                        }),
                    }),
                }),
            ],
        });
    },
    A = () => {
        let e = (0, a.e7)([y.Z], () => y.Z.getGuild());
        return null == e
            ? null
            : e.features.has(I.GuildFeatures.COMMUNITY)
              ? (0, r.jsx)(D, {})
              : (0, r.jsx)(N.Z, { guild: e });
    };
