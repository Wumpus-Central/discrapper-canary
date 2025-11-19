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
    d = n(28664),
    u = n(755721),
    g = n(481060),
    m = n(493773),
    p = n(933557),
    f = n(769654),
    h = n(984933),
    b = n(650774),
    x = n(430824),
    j = n(496675),
    _ = n(699516),
    v = n(594174),
    O = n(434404),
    C = n(999382),
    y = n(906512),
    N = n(929834),
    E = n(981631),
    I = n(388032),
    S = n(291284),
    T = n(922905);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = "dismissedCommunityFeaturesUpsell",
    R = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i,
            } = (0, a.cj)([C.Z], () => ({
                submitting: C.Z.isSubmitting(),
                guild: C.Z.getGuild(),
                errors: C.Z.getErrors(),
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = "rules_channel_id" === s ? I.intl.string(I.t["7IrBYt"]) : null != s ? i[s] : void 0),
            (0, r.jsx)(c.Z, {
                submitting: n,
                onReset: () => {
                    null != t && O.Z.init(t.id);
                },
                onSave: () => {
                    null != t &&
                        O.Z.saveGuild(t.id, {
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
            p = (0, a.e7)([b.Z], () => {
                var e;
                return null != (e = b.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [h, j] = i.useState(!1);
        (0, m.ZP)(() => {
            s.tn
                .get({
                    url: E.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0,
                })
                .then((e) => {
                    j(e.body.eligible_for_admin_server);
                })
                .catch(() => j(!1));
        });
        let _ = (0, a.e7)([x.Z], () => x.Z.getGuild("942897714956472401")),
            v = l.features.has(E.GuildFeatures.COMMUNITY) && p >= 1000 && h && null == _;
        if (t && n && !v) return null;
        let C = async () => {
            try {
                let e = await s.tn.post({
                    url: E.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                O.Z.close(), (0, f.X)(e.body.id);
            } catch (e) {}
        };
        return c && !v
            ? null
            : (0, r.jsxs)("div", {
                  className: S.upsellContainer,
                  children: [
                      (0, r.jsxs)("div", {
                          className: S.upsellContent,
                          children: [
                              (0, r.jsx)("img", {
                                  src: T,
                                  alt: "",
                                  width: 60,
                                  className: S.upsellImage,
                              }),
                              (0, r.jsxs)("div", {
                                  children: [
                                      (0, r.jsx)(g.Heading, {
                                          variant: "heading-md/semibold",
                                          className: S.upsellHeader,
                                          children: I.intl.string(I.t["pR/Bge"]),
                                      }),
                                      (0, r.jsx)(g.Text, {
                                          variant: "text-sm/normal",
                                          children: I.intl.string(I.t["V+Yo1l"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(u.zx, {
                          "aria-label": I.intl.string(I.t.cpT0Cq),
                          look: u.zx.Looks.BLANK,
                          size: u.zx.Sizes.NONE,
                          className: S.upsellClose,
                          onClick: () => {
                              o.K.set(Z, !0), d(!0);
                          },
                          children: (0, r.jsx)(g.Dio, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: S.upsellFooter,
                          children: [
                              v &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: S.upsellButton,
                                      children: (0, r.jsx)(g.Button, {
                                          variant: "primary",
                                          size: "sm",
                                          text: I.intl.string(I.t.iF1Asi),
                                          onClick: C,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.upsellButton,
                                        children: (0, r.jsx)(g.Button, {
                                            variant: "primary",
                                            size: "sm",
                                            text: I.intl.string(I.t["S/Dfid"]),
                                            onClick: () => {
                                                O.Z.setSection(E.pNK.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.upsellButton,
                                        children: (0, r.jsx)(g.Button, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: I.intl.string(I.t["0kmJdw"]),
                                            onClick: () => {
                                                O.Z.setSection(E.pNK.ACCESS, E.KsC.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: S.upsellButton,
                                  children: (0, r.jsx)(g.Button, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: I.intl.string(I.t.BQIYTb),
                                      onClick: () => {
                                          O.Z.setSection(E.pNK.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    A = () => {
        let e = (0, a.e7)([C.Z], () => C.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([j.Z], () => ({
                canManageGuild: j.Z.can(E.Plq.MANAGE_GUILD, e),
                isGuildAdmin: j.Z.can(E.Plq.ADMINISTRATOR, e),
            })),
            s = (0, a.e7)([h.ZP], () => (null != e ? h.ZP.getChannels(e.id) : null)),
            c = i.useMemo(N.jb, []),
            u = !0 !== o.K.get(Z);
        if (null == e) return null;
        let m = [];
        null != s &&
            s[h.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === E.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, p.F6)(t, v.default, _.Z, !0),
                    });
            });
        let f = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(E.GuildFeatures.COMMUNITY),
                    t.delete(E.GuildFeatures.DISCOVERABLE),
                    t.delete(E.GuildFeatures.PREVIEW_ENABLED),
                    O.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            b = (e) => {
                O.Z.updateGuild({ description: e });
            };
        return (0, r.jsxs)(g.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(g.Heading, {
                    variant: "heading-lg/semibold",
                    children: I.intl.string(I.t.nRtNqn),
                }),
                u
                    ? (0, r.jsx)(D, {
                          discoveryEnabled: e.features.has(E.GuildFeatures.DISCOVERABLE),
                          onboardingEnabled: e.features.has(E.GuildFeatures.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal-responsive",
                    label: I.intl.string(I.t["otcXP/"]),
                    description: I.intl.string(I.t.BtwmYB),
                    value: e.rulesChannelId,
                    options: m,
                    onChange: (e) => {
                        O.Z.updateGuild({ rulesChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal-responsive",
                    label: I.intl.string(I.t.vAyDGU),
                    description: I.intl.string(I.t.ZFeonu),
                    value: e.publicUpdatesChannelId,
                    options: m,
                    onChange: (e) => {
                        O.Z.updateGuild({ publicUpdatesChannelId: e });
                    },
                    isDisabled: !n,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal-responsive",
                    label: I.intl.string(I.t.sMkYE8),
                    description: I.intl.string(I.t.htioQo),
                    value: e.safetyAlertsChannelId,
                    options: m,
                    onChange: (e) => {
                        O.Z.updateGuild({ safetyAlertsChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal-responsive",
                    label: I.intl.string(I.t.pO60fy),
                    description: I.intl.string(I.t.aIR73T),
                    value: e.preferredLocale,
                    options: c,
                    onChange: (e) => {
                        O.Z.updateGuild({ preferredLocale: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(g.izJ, {}),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsx)(g.Kx8, {
                            label: I.intl.string(I.t["RSfm+i"]),
                            description: I.intl.string(I.t["/B6PRw"]),
                            value: null != (n = e.description) ? n : "",
                            placeholder: I.intl.string(I.t.Nvfowl),
                            onChange: b,
                            maxLength: l.Us,
                            disabled: !t,
                        });
                })(),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.gNt, {
                    label: I.intl.string(I.t.c1BmbC),
                    description: I.intl.string(I.t.aQzVF8),
                    layout: "horizontal",
                    children: (0, r.jsx)(d.u, {
                        text: n ? null : I.intl.string(I.t["pjG+T3"]),
                        "aria-label": n ? void 0 : I.intl.string(I.t["pjG+T3"]),
                        children: (0, r.jsx)(g.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: I.intl.string(I.t.c1BmbC),
                            onClick: () => {
                                e.features.has(E.GuildFeatures.DISCOVERABLE) &&
                                e.features.has(E.GuildFeatures.PARTNERED)
                                    ? (0, g.h7j)((e) =>
                                          (0, r.jsx)(
                                              g.ConfirmModal,
                                              w(P({}, e), {
                                                  header: I.intl.string(I.t.iBnVHc),
                                                  confirmText: I.intl.string(I.t["cY+Oob"]),
                                                  cancelText: I.intl.string(I.t.oEAioF),
                                                  onConfirm: f,
                                                  children: (0, r.jsx)(g.Text, {
                                                      variant: "text-sm/normal",
                                                      children: I.intl.string(I.t["P+Sh8V"]),
                                                  }),
                                              }),
                                          ),
                                      )
                                    : e.features.has(E.GuildFeatures.DISCOVERABLE)
                                      ? (0, g.h7j)((e) =>
                                            (0, r.jsx)(
                                                g.ConfirmModal,
                                                w(P({}, e), {
                                                    header: I.intl.string(I.t.iBnVHc),
                                                    confirmText: I.intl.string(I.t["cY+Oob"]),
                                                    cancelText: I.intl.string(I.t.oEAioF),
                                                    onConfirm: f,
                                                    children: (0, r.jsx)(g.Text, {
                                                        variant: "text-sm/normal",
                                                        children: I.intl.string(I.t["eMx/uZ"]),
                                                    }),
                                                }),
                                            ),
                                        )
                                      : e.features.has(E.GuildFeatures.PARTNERED)
                                        ? (0, g.h7j)((e) =>
                                              (0, r.jsx)(
                                                  g.ConfirmModal,
                                                  w(P({}, e), {
                                                      header: I.intl.string(I.t.iBnVHc),
                                                      confirmText: I.intl.string(I.t["cY+Oob"]),
                                                      cancelText: I.intl.string(I.t.oEAioF),
                                                      onConfirm: f,
                                                      children: (0, r.jsx)(g.Text, {
                                                          variant: "text-sm/normal",
                                                          children: I.intl.string(I.t.l1wLeX),
                                                      }),
                                                  }),
                                              ),
                                          )
                                        : f();
                            },
                            disabled: !n,
                        }),
                    }),
                }),
            ],
        });
    },
    L = () => {
        let e = (0, a.e7)([C.Z], () => C.Z.getGuild());
        return null == e
            ? null
            : e.features.has(E.GuildFeatures.COMMUNITY)
              ? (0, r.jsx)(A, {})
              : (0, r.jsx)(y.Z, { guild: e });
    };
