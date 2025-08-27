n.d(t, {
    X: () => D,
    Z: () => k,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(345074),
    o = n(442837),
    c = n(544891),
    d = n(433517),
    u = n(755721),
    m = n(481060),
    g = n(852860),
    p = n(493773),
    h = n(933557),
    f = n(769654),
    b = n(984933),
    x = n(650774),
    j = n(430824),
    v = n(496675),
    _ = n(699516),
    O = n(594174),
    y = n(434404),
    C = n(999382),
    N = n(54842),
    E = n(929834),
    I = n(981631),
    S = n(388032),
    T = n(353343),
    P = n(922905);
function w(e) {
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
function R(e, t) {
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
    D = () => {
        let e,
            {
                guild: t,
                submitting: n,
                errors: i,
            } = (0, o.cj)([C.Z], () => ({
                submitting: C.Z.isSubmitting(),
                guild: C.Z.getGuild(),
                errors: C.Z.getErrors(),
            })),
            l = Object.keys(i),
            a = l.length > 0 ? l[0] : null;
        return (
            (e = "rules_channel_id" === a ? S.intl.string(S.t["7IrBYm"]) : null != a ? i[a] : void 0),
            (0, r.jsx)(g.Z, {
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
    A = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [a, s] = i.useState(!0 === d.K.get(Z)),
            g = (0, o.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getMemberCount(l.id)) ? e : 0;
            }),
            [h, b] = i.useState(!1);
        (0, p.ZP)(() => {
            c.tn
                .get({
                    url: I.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0,
                })
                .then((e) => {
                    b(e.body.eligible_for_admin_server);
                })
                .catch(() => b(!1));
        });
        let v = (0, o.e7)([j.Z], () => j.Z.getGuild("942897714956472401")),
            _ = l.features.has(I.oNc.COMMUNITY) && g >= 1000 && h && null == v;
        if (t && n && !_) return null;
        let O = async () => {
            try {
                let e = await c.tn.post({
                    url: I.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                y.Z.close(), (0, f.X)(e.body.id);
            } catch (e) {}
        };
        return a && !_
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
                                      (0, r.jsx)(m.X6q, {
                                          variant: "heading-md/semibold",
                                          className: T.upsellHeader,
                                          children: S.intl.string(S.t["pR/BgY"]),
                                      }),
                                      (0, r.jsx)(m.Text, {
                                          variant: "text-sm/normal",
                                          children: S.intl.string(S.t["V+Yo1t"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(u.zx, {
                          "aria-label": S.intl.string(S.t.cpT0Cg),
                          look: u.zx.Looks.BLANK,
                          size: u.zx.Sizes.NONE,
                          className: T.upsellClose,
                          onClick: () => {
                              d.K.set(Z, !0), s(!0);
                          },
                          children: (0, r.jsx)(m.Dio, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: T.upsellFooter,
                          children: [
                              _ &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: T.upsellButton,
                                      children: (0, r.jsx)(m.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: S.intl.string(S.t.iF1Asr),
                                          onClick: O,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.upsellButton,
                                        children: (0, r.jsx)(m.zxk, {
                                            variant: "primary",
                                            size: "sm",
                                            text: S.intl.string(S.t["S/DfiY"]),
                                            onClick: () => {
                                                y.Z.setSection(I.pNK.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: T.upsellButton,
                                        children: (0, r.jsx)(m.zxk, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: S.intl.string(S.t["0kmJd3"]),
                                            onClick: () => {
                                                y.Z.setSection(I.pNK.ACCESS, I.KsC.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: T.upsellButton,
                                  children: (0, r.jsx)(m.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: S.intl.string(S.t.BQIYTU),
                                      onClick: () => {
                                          y.Z.setSection(I.pNK.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    L = () => {
        let e = (0, o.e7)([C.Z], () => C.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, o.cj)([v.Z], () => ({
                canManageGuild: v.Z.can(I.Plq.MANAGE_GUILD, e),
                isGuildAdmin: v.Z.can(I.Plq.ADMINISTRATOR, e),
            })),
            l = (0, o.e7)([b.ZP], () => (null != e ? b.ZP.getChannels(e.id) : null)),
            c = i.useMemo(E.jb, []),
            u = !0 !== d.K.get(Z);
        if (null == e) return null;
        let g = [];
        null != l &&
            l[b.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === I.d4z.GUILD_TEXT &&
                    g.push({
                        value: t.id,
                        label: (0, h.F6)(t, O.default, _.Z, !0),
                    });
            });
        let p = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(I.oNc.COMMUNITY),
                    t.delete(I.oNc.DISCOVERABLE),
                    t.delete(I.oNc.PREVIEW_ENABLED),
                    y.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            f = (e) => {
                y.Z.updateGuild({ description: e });
            },
            x = () => {
                e.features.has(I.oNc.DISCOVERABLE) && e.features.has(I.oNc.PARTNERED)
                    ? (0, m.h7j)((e) =>
                          (0, r.jsx)(
                              m.ConfirmModal,
                              R(w({}, e), {
                                  header: S.intl.string(S.t.iBnVHR),
                                  confirmText: S.intl.string(S.t["cY+Ooa"]),
                                  cancelText: S.intl.string(S.t.oEAioK),
                                  onConfirm: p,
                                  children: (0, r.jsx)(m.Text, {
                                      variant: "text-sm/normal",
                                      children: S.intl.string(S.t["P+Sh8f"]),
                                  }),
                              }),
                          ),
                      )
                    : e.features.has(I.oNc.DISCOVERABLE)
                      ? (0, m.h7j)((e) =>
                            (0, r.jsx)(
                                m.ConfirmModal,
                                R(w({}, e), {
                                    header: S.intl.string(S.t.iBnVHR),
                                    confirmText: S.intl.string(S.t["cY+Ooa"]),
                                    cancelText: S.intl.string(S.t.oEAioK),
                                    onConfirm: p,
                                    children: (0, r.jsx)(m.Text, {
                                        variant: "text-sm/normal",
                                        children: S.intl.string(S.t["eMx/ub"]),
                                    }),
                                }),
                            ),
                        )
                      : e.features.has(I.oNc.PARTNERED)
                        ? (0, m.h7j)((e) =>
                              (0, r.jsx)(
                                  m.ConfirmModal,
                                  R(w({}, e), {
                                      header: S.intl.string(S.t.iBnVHR),
                                      confirmText: S.intl.string(S.t["cY+Ooa"]),
                                      cancelText: S.intl.string(S.t.oEAioK),
                                      onConfirm: p,
                                      children: (0, r.jsx)(m.Text, {
                                          variant: "text-sm/normal",
                                          children: S.intl.string(S.t.l1wLeX),
                                      }),
                                  }),
                              ),
                          )
                        : p();
            };
        return (0, r.jsxs)(m.hjN, {
            title: S.intl.string(S.t.nRtNqq),
            tag: m.RB0.H1,
            children: [
                u
                    ? (0, r.jsx)(A, {
                          discoveryEnabled: e.features.has(I.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(I.oNc.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsxs)(m.hjN, {
                    className: a()(T.twoColumnFormSection, T.firstSection),
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.descriptionColumn,
                            children: [
                                (0, r.jsx)(m.vwX, {
                                    className: T.formTitle,
                                    children: S.intl.string(S.t.otcXPz),
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    children: S.intl.string(S.t.BtwmYG),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: T.selectColumn,
                            children: (0, r.jsx)(m.VcW, {
                                value: e.rulesChannelId,
                                options: g,
                                onChange: (e) => {
                                    y.Z.updateGuild({ rulesChannelId: e });
                                },
                                isDisabled: !t,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.$i$, { className: T.divider }),
                (0, r.jsxs)(m.hjN, {
                    className: a()(T.twoColumnFormSection, T.firstSection),
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.descriptionColumn,
                            children: [
                                (0, r.jsx)(m.vwX, {
                                    className: T.formTitle,
                                    children: S.intl.string(S.t.vAyDGR),
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: T.__invalid_formDescription,
                                    children: S.intl.string(S.t.ZFeonp),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: T.selectColumn,
                            children: (0, r.jsx)(m.VcW, {
                                value: e.publicUpdatesChannelId,
                                options: g,
                                onChange: (e) => {
                                    y.Z.updateGuild({ publicUpdatesChannelId: e });
                                },
                                isDisabled: !n,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.$i$, { className: T.divider }),
                (0, r.jsxs)(m.hjN, {
                    className: a()(T.twoColumnFormSection, T.firstSection),
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.descriptionColumn,
                            children: [
                                (0, r.jsx)(m.vwX, {
                                    className: T.formTitle,
                                    children: S.intl.string(S.t.sMkYEx),
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: T.__invalid_formDescription,
                                    children: S.intl.string(S.t.htioQk),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: T.selectColumn,
                            children: (0, r.jsx)(m.VcW, {
                                value: e.safetyAlertsChannelId,
                                options: g,
                                onChange: (e) => {
                                    y.Z.updateGuild({ safetyAlertsChannelId: e });
                                },
                                isDisabled: !t,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.$i$, { className: T.divider }),
                (0, r.jsxs)(m.hjN, {
                    className: T.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.descriptionColumn,
                            children: [
                                (0, r.jsx)(m.vwX, {
                                    className: T.formTitle,
                                    children: S.intl.string(S.t.pO60f3),
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: T.__invalid_formDescription,
                                    children: S.intl.string(S.t.aIR73d),
                                }),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: T.selectColumn,
                            children: (0, r.jsx)(m.VcW, {
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
                (0, r.jsx)(m.$i$, { className: T.divider }),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsxs)(m.hjN, {
                            children: [
                                (0, r.jsx)(m.vwX, {
                                    className: T.formTitle,
                                    children: S.intl.string(S.t["RSfm+v"]),
                                }),
                                (0, r.jsx)(m.R94, {
                                    className: T.description,
                                    type: m.geA.DESCRIPTION,
                                    children: S.intl.string(S.t["/B6PR0"]),
                                }),
                                (0, r.jsx)(m.Kx8, {
                                    value: null != (n = e.description) ? n : "",
                                    placeholder: S.intl.string(S.t.Nvfows),
                                    onChange: f,
                                    maxLength: s.Us,
                                    disabled: !t,
                                }),
                            ],
                        });
                })(),
                (0, r.jsx)(m.$i$, { className: T.divider }),
                (0, r.jsxs)(m.hjN, {
                    className: T.twoColumnFormSection,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.descriptionColumn,
                            children: [
                                (0, r.jsx)(m.vwX, {
                                    className: T.formTitle,
                                    children: S.intl.string(S.t.c1BmbG),
                                }),
                                (0, r.jsx)(m.R94, {
                                    type: m.geA.DESCRIPTION,
                                    className: T.__invalid_formDescription,
                                    children: S.intl.string(S.t.aQzVFx),
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.ua7, {
                            text: n ? null : S.intl.string(S.t["pjG+T0"]),
                            "aria-label": n ? void 0 : S.intl.string(S.t["pjG+T0"]),
                            children: (e) =>
                                (0, r.jsx)(
                                    m.zxk,
                                    w(
                                        {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: S.intl.string(S.t.c1BmbG),
                                            onClick: x,
                                            disabled: !n,
                                        },
                                        e,
                                    ),
                                ),
                        }),
                    ],
                }),
            ],
        });
    },
    k = () => {
        let e = (0, o.e7)([C.Z], () => C.Z.getGuild());
        return null == e ? null : e.features.has(I.oNc.COMMUNITY) ? (0, r.jsx)(L, {}) : (0, r.jsx)(N.Z, { guild: e });
    };
