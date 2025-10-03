n.d(t, {
    X: () => A,
    Z: () => G,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(345074),
    o = n(442837),
    c = n(544891),
    d = n(433517),
    u = n(28664),
    m = n(755721),
    g = n(481060),
    p = n(852860),
    f = n(493773),
    h = n(933557),
    x = n(769654),
    b = n(984933),
    j = n(650774),
    _ = n(430824),
    v = n(496675),
    C = n(699516),
    O = n(594174),
    y = n(434404),
    N = n(999382),
    E = n(906512),
    I = n(929834),
    S = n(981631),
    T = n(388032),
    P = n(560818),
    w = n(922905);
function R(e) {
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
function Z(e, t) {
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
let D = "dismissedCommunityFeaturesUpsell",
    A = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i,
            } = (0, o.cj)([N.Z], () => ({
                submitting: N.Z.isSubmitting(),
                guild: N.Z.getGuild(),
                errors: N.Z.getErrors(),
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = "rules_channel_id" === s ? T.intl.string(T.t["7IrBYm"]) : null != s ? i[s] : void 0),
            (0, r.jsx)(p.Z, {
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
    L = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [s, a] = i.useState(!0 === d.K.get(D)),
            u = (0, o.e7)([j.Z], () => {
                var e;
                return null != (e = j.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [p, h] = i.useState(!1);
        (0, f.ZP)(() => {
            c.tn
                .get({
                    url: S.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0,
                })
                .then((e) => {
                    h(e.body.eligible_for_admin_server);
                })
                .catch(() => h(!1));
        });
        let b = (0, o.e7)([_.Z], () => _.Z.getGuild("942897714956472401")),
            v = l.features.has(S.oNc.COMMUNITY) && u >= 1000 && p && null == b;
        if (t && n && !v) return null;
        let C = async () => {
            try {
                let e = await c.tn.post({
                    url: S.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                y.Z.close(), (0, x.X)(e.body.id);
            } catch (e) {}
        };
        return s && !v
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
                                      (0, r.jsx)(g.X6q, {
                                          variant: "heading-md/semibold",
                                          className: P.upsellHeader,
                                          children: T.intl.string(T.t["pR/BgY"]),
                                      }),
                                      (0, r.jsx)(g.Text, {
                                          variant: "text-sm/normal",
                                          children: T.intl.string(T.t["V+Yo1t"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(m.zx, {
                          "aria-label": T.intl.string(T.t.cpT0Cg),
                          look: m.zx.Looks.BLANK,
                          size: m.zx.Sizes.NONE,
                          className: P.upsellClose,
                          onClick: () => {
                              d.K.set(D, !0), a(!0);
                          },
                          children: (0, r.jsx)(g.Dio, {
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
                                      children: (0, r.jsx)(g.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: T.intl.string(T.t.iF1Asr),
                                          onClick: C,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: P.upsellButton,
                                        children: (0, r.jsx)(g.zxk, {
                                            variant: "primary",
                                            size: "sm",
                                            text: T.intl.string(T.t["S/DfiY"]),
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
                                        children: (0, r.jsx)(g.zxk, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: T.intl.string(T.t["0kmJd3"]),
                                            onClick: () => {
                                                y.Z.setSection(S.pNK.ACCESS, S.KsC.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: P.upsellButton,
                                  children: (0, r.jsx)(g.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(T.t.BQIYTU),
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
    k = () => {
        let e = (0, o.e7)([N.Z], () => N.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, o.cj)([v.Z], () => ({
                canManageGuild: v.Z.can(S.Plq.MANAGE_GUILD, e),
                isGuildAdmin: v.Z.can(S.Plq.ADMINISTRATOR, e),
            })),
            l = (0, o.e7)([b.ZP], () => (null != e ? b.ZP.getChannels(e.id) : null)),
            c = i.useMemo(I.jb, []),
            m = !0 !== d.K.get(D);
        if (null == e) return null;
        let p = [];
        null != l &&
            l[b.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === S.d4z.GUILD_TEXT &&
                    p.push({
                        value: t.id,
                        label: (0, h.F6)(t, O.default, C.Z, !0),
                    });
            });
        let f = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(S.oNc.COMMUNITY),
                    t.delete(S.oNc.DISCOVERABLE),
                    t.delete(S.oNc.PREVIEW_ENABLED),
                    y.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            x = (e) => {
                y.Z.updateGuild({ description: e });
            };
        return (0, r.jsxs)(g.hjN, {
            title: T.intl.string(T.t.nRtNqq),
            tag: g.RB0.H1,
            children: [
                m
                    ? (0, r.jsx)(L, {
                          discoveryEnabled: e.features.has(S.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(S.oNc.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsxs)(g.hjN, {
                    className: s()(P.twoColumnFormSection, P.firstSection),
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.descriptionColumn,
                            children: [
                                (0, r.jsx)(g.vwX, {
                                    className: P.formTitle,
                                    children: T.intl.string(T.t.otcXPz),
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    children: T.intl.string(T.t.BtwmYG),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.selectColumn,
                            children: (0, r.jsx)(g.VcW, {
                                value: e.rulesChannelId,
                                options: p,
                                onChange: (e) => {
                                    y.Z.updateGuild({ rulesChannelId: e });
                                },
                                isDisabled: !t,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(g.izJ, { className: P.divider }),
                (0, r.jsxs)(g.hjN, {
                    className: s()(P.twoColumnFormSection, P.firstSection),
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.descriptionColumn,
                            children: [
                                (0, r.jsx)(g.vwX, {
                                    className: P.formTitle,
                                    children: T.intl.string(T.t.vAyDGR),
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: P.__invalid_formDescription,
                                    children: T.intl.string(T.t.ZFeonp),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.selectColumn,
                            children: (0, r.jsx)(g.VcW, {
                                value: e.publicUpdatesChannelId,
                                options: p,
                                onChange: (e) => {
                                    y.Z.updateGuild({ publicUpdatesChannelId: e });
                                },
                                isDisabled: !n,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(g.izJ, { className: P.divider }),
                (0, r.jsxs)(g.hjN, {
                    className: s()(P.twoColumnFormSection, P.firstSection),
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.descriptionColumn,
                            children: [
                                (0, r.jsx)(g.vwX, {
                                    className: P.formTitle,
                                    children: T.intl.string(T.t.sMkYEx),
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: P.__invalid_formDescription,
                                    children: T.intl.string(T.t.htioQk),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.selectColumn,
                            children: (0, r.jsx)(g.VcW, {
                                value: e.safetyAlertsChannelId,
                                options: p,
                                onChange: (e) => {
                                    y.Z.updateGuild({ safetyAlertsChannelId: e });
                                },
                                isDisabled: !t,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(g.izJ, { className: P.divider }),
                (0, r.jsxs)(g.hjN, {
                    className: P.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.descriptionColumn,
                            children: [
                                (0, r.jsx)(g.vwX, {
                                    className: P.formTitle,
                                    children: T.intl.string(T.t.pO60f3),
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: P.__invalid_formDescription,
                                    children: T.intl.string(T.t.aIR73d),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: P.selectColumn,
                            children: (0, r.jsx)(g.VcW, {
                                value: e.preferredLocale,
                                options: c,
                                onChange: (e) => {
                                    y.Z.updateGuild({ preferredLocale: e });
                                },
                                isDisabled: !t,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(g.izJ, { className: P.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsxs)(g.hjN, {
                            children: [
                                (0, r.jsx)(g.vwX, {
                                    className: P.formTitle,
                                    children: T.intl.string(T.t["RSfm+v"]),
                                }),
                                (0, r.jsx)(g.R94, {
                                    className: P.description,
                                    type: g.geA.DESCRIPTION,
                                    children: T.intl.string(T.t["/B6PR0"]),
                                }),
                                (0, r.jsx)(g.Kx8, {
                                    value: null != (n = e.description) ? n : "",
                                    placeholder: T.intl.string(T.t.Nvfows),
                                    onChange: x,
                                    maxLength: a.Us,
                                    disabled: !t,
                                }),
                            ],
                        });
                })(),
                (0, r.jsx)(g.izJ, { className: P.divider }),
                (0, r.jsxs)(g.hjN, {
                    className: P.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)("div", {
                            className: P.descriptionColumn,
                            children: [
                                (0, r.jsx)(g.vwX, {
                                    className: P.formTitle,
                                    children: T.intl.string(T.t.c1BmbG),
                                }),
                                (0, r.jsx)(g.R94, {
                                    type: g.geA.DESCRIPTION,
                                    className: P.__invalid_formDescription,
                                    children: T.intl.string(T.t.aQzVFx),
                                }),
                            ],
                        }),
                        (0, r.jsx)(u.u, {
                            text: n ? null : T.intl.string(T.t["pjG+T0"]),
                            "aria-label": n ? void 0 : T.intl.string(T.t["pjG+T0"]),
                            children: (0, r.jsx)(g.zxk, {
                                variant: "critical-primary",
                                size: "sm",
                                text: T.intl.string(T.t.c1BmbG),
                                onClick: () => {
                                    e.features.has(S.oNc.DISCOVERABLE) && e.features.has(S.oNc.PARTNERED)
                                        ? (0, g.h7j)((e) =>
                                              (0, r.jsx)(
                                                  g.ConfirmModal,
                                                  Z(R({}, e), {
                                                      header: T.intl.string(T.t.iBnVHR),
                                                      confirmText: T.intl.string(T.t["cY+Ooa"]),
                                                      cancelText: T.intl.string(T.t.oEAioK),
                                                      onConfirm: f,
                                                      children: (0, r.jsx)(g.Text, {
                                                          variant: "text-sm/normal",
                                                          children: T.intl.string(T.t["P+Sh8f"]),
                                                      }),
                                                  }),
                                              ),
                                          )
                                        : e.features.has(S.oNc.DISCOVERABLE)
                                          ? (0, g.h7j)((e) =>
                                                (0, r.jsx)(
                                                    g.ConfirmModal,
                                                    Z(R({}, e), {
                                                        header: T.intl.string(T.t.iBnVHR),
                                                        confirmText: T.intl.string(T.t["cY+Ooa"]),
                                                        cancelText: T.intl.string(T.t.oEAioK),
                                                        onConfirm: f,
                                                        children: (0, r.jsx)(g.Text, {
                                                            variant: "text-sm/normal",
                                                            children: T.intl.string(T.t["eMx/ub"]),
                                                        }),
                                                    }),
                                                ),
                                            )
                                          : e.features.has(S.oNc.PARTNERED)
                                            ? (0, g.h7j)((e) =>
                                                  (0, r.jsx)(
                                                      g.ConfirmModal,
                                                      Z(R({}, e), {
                                                          header: T.intl.string(T.t.iBnVHR),
                                                          confirmText: T.intl.string(T.t["cY+Ooa"]),
                                                          cancelText: T.intl.string(T.t.oEAioK),
                                                          onConfirm: f,
                                                          children: (0, r.jsx)(g.Text, {
                                                              variant: "text-sm/normal",
                                                              children: T.intl.string(T.t.l1wLeX),
                                                          }),
                                                      }),
                                                  ),
                                              )
                                            : f();
                                },
                                disabled: !n,
                            }),
                        }),
                    ],
                }),
            ],
        });
    },
    G = () => {
        let e = (0, o.e7)([N.Z], () => N.Z.getGuild());
        return null == e ? null : e.features.has(S.oNc.COMMUNITY) ? (0, r.jsx)(k, {}) : (0, r.jsx)(E.Z, { guild: e });
    };
