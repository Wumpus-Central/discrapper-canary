n.d(t, {
    X: () => R,
    Z: () => L,
}),
    n(953529),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    l = n(345074),
    a = n(442837),
    s = n(544891),
    o = n(433517),
    c = n(28664),
    d = n(755721),
    u = n(481060),
    g = n(852860),
    m = n(493773),
    p = n(933557),
    f = n(769654),
    h = n(984933),
    x = n(650774),
    b = n(430824),
    j = n(496675),
    v = n(699516),
    _ = n(594174),
    C = n(434404),
    O = n(999382),
    y = n(906512),
    N = n(929834),
    E = n(981631),
    I = n(388032),
    S = n(560818),
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
            } = (0, a.cj)([O.Z], () => ({
                submitting: O.Z.isSubmitting(),
                guild: O.Z.getGuild(),
                errors: O.Z.getErrors(),
            })),
            l = Object.keys(i),
            s = l.length > 0 ? l[0] : null;
        return (
            (e = "rules_channel_id" === s ? I.intl.string(I.t["7IrBYm"]) : null != s ? i[s] : void 0),
            (0, r.jsx)(g.Z, {
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
    D = (e) => {
        let { discoveryEnabled: t, onboardingEnabled: n, guild: l } = e,
            [c, g] = i.useState(!0 === o.K.get(Z)),
            p = (0, a.e7)([x.Z], () => {
                var e;
                return null != (e = x.Z.getMemberCount(l.id)) ? e : 0;
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
        let v = (0, a.e7)([b.Z], () => b.Z.getGuild("942897714956472401")),
            _ = l.features.has(E.oNc.COMMUNITY) && p >= 1000 && h && null == v;
        if (t && n && !_) return null;
        let O = async () => {
            try {
                let e = await s.tn.post({
                    url: E.ANM.JOIN_ADMIN_SERVER(l.id),
                    oldFormErrors: !0,
                    rejectWithError: !0,
                });
                C.Z.close(), (0, f.X)(e.body.id);
            } catch (e) {}
        };
        return c && !_
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
                                      (0, r.jsx)(u.X6q, {
                                          variant: "heading-md/semibold",
                                          className: S.upsellHeader,
                                          children: I.intl.string(I.t["pR/BgY"]),
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-sm/normal",
                                          children: I.intl.string(I.t["V+Yo1t"]),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsx)(d.zx, {
                          "aria-label": I.intl.string(I.t.cpT0Cg),
                          look: d.zx.Looks.BLANK,
                          size: d.zx.Sizes.NONE,
                          className: S.upsellClose,
                          onClick: () => {
                              o.K.set(Z, !0), g(!0);
                          },
                          children: (0, r.jsx)(u.Dio, {
                              size: "md",
                              color: "currentColor",
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: S.upsellFooter,
                          children: [
                              _ &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: S.upsellButton,
                                      children: (0, r.jsx)(u.zxk, {
                                          variant: "primary",
                                          size: "sm",
                                          text: I.intl.string(I.t.iF1Asr),
                                          onClick: O,
                                      }),
                                  }),
                              n
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.upsellButton,
                                        children: (0, r.jsx)(u.zxk, {
                                            variant: "primary",
                                            size: "sm",
                                            text: I.intl.string(I.t["S/DfiY"]),
                                            onClick: () => {
                                                C.Z.setSection(E.pNK.ONBOARDING);
                                            },
                                        }),
                                    }),
                              t
                                  ? null
                                  : (0, r.jsx)("div", {
                                        "data-button-hoisted-classname-wrapper": !0,
                                        className: S.upsellButton,
                                        children: (0, r.jsx)(u.zxk, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: I.intl.string(I.t["0kmJd3"]),
                                            onClick: () => {
                                                C.Z.setSection(E.pNK.ACCESS, E.KsC.ACCESS_DISCOVERABLE);
                                            },
                                        }),
                                    }),
                              (0, r.jsx)("div", {
                                  "data-button-hoisted-classname-wrapper": !0,
                                  className: S.upsellButton,
                                  children: (0, r.jsx)(u.zxk, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: I.intl.string(I.t.BQIYTU),
                                      onClick: () => {
                                          C.Z.setSection(E.pNK.ANALYTICS);
                                      },
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    },
    A = () => {
        let e = (0, a.e7)([O.Z], () => O.Z.getGuild()),
            { canManageGuild: t, isGuildAdmin: n } = (0, a.cj)([j.Z], () => ({
                canManageGuild: j.Z.can(E.Plq.MANAGE_GUILD, e),
                isGuildAdmin: j.Z.can(E.Plq.ADMINISTRATOR, e),
            })),
            s = (0, a.e7)([h.ZP], () => (null != e ? h.ZP.getChannels(e.id) : null)),
            d = i.useMemo(N.jb, []),
            g = !0 !== o.K.get(Z);
        if (null == e) return null;
        let m = [];
        null != s &&
            s[h.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === E.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, p.F6)(t, _.default, v.Z, !0),
                    });
            });
        let f = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(E.oNc.COMMUNITY),
                    t.delete(E.oNc.DISCOVERABLE),
                    t.delete(E.oNc.PREVIEW_ENABLED),
                    C.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            x = (e) => {
                C.Z.updateGuild({ description: e });
            };
        return (0, r.jsxs)(u.Kqy, {
            gap: 24,
            children: [
                (0, r.jsx)(u.X6q, {
                    variant: "heading-lg/semibold",
                    children: I.intl.string(I.t.nRtNqq),
                }),
                g
                    ? (0, r.jsx)(D, {
                          discoveryEnabled: e.features.has(E.oNc.DISCOVERABLE),
                          onboardingEnabled: e.features.has(E.oNc.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsx)(u.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t.otcXPz),
                    description: I.intl.string(I.t.BtwmYG),
                    value: e.rulesChannelId,
                    options: m,
                    onChange: (e) => {
                        C.Z.updateGuild({ rulesChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(u.izJ, {}),
                (0, r.jsx)(u.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t.vAyDGR),
                    description: I.intl.string(I.t.ZFeonp),
                    value: e.publicUpdatesChannelId,
                    options: m,
                    onChange: (e) => {
                        C.Z.updateGuild({ publicUpdatesChannelId: e });
                    },
                    isDisabled: !n,
                }),
                (0, r.jsx)(u.izJ, {}),
                (0, r.jsx)(u.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t.sMkYEx),
                    description: I.intl.string(I.t.htioQk),
                    value: e.safetyAlertsChannelId,
                    options: m,
                    onChange: (e) => {
                        C.Z.updateGuild({ safetyAlertsChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(u.izJ, {}),
                (0, r.jsx)(u.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t.pO60f3),
                    description: I.intl.string(I.t.aIR73d),
                    value: e.preferredLocale,
                    options: d,
                    onChange: (e) => {
                        C.Z.updateGuild({ preferredLocale: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(u.izJ, {}),
                (() => {
                    var n;
                    if (null != e)
                        return (0, r.jsx)(u.Kx8, {
                            label: I.intl.string(I.t["RSfm+v"]),
                            description: I.intl.string(I.t["/B6PR0"]),
                            value: null != (n = e.description) ? n : "",
                            placeholder: I.intl.string(I.t.Nvfows),
                            onChange: x,
                            maxLength: l.Us,
                            disabled: !t,
                        });
                })(),
                (0, r.jsx)(u.izJ, {}),
                (0, r.jsx)(u.gNt, {
                    label: I.intl.string(I.t.c1BmbG),
                    description: I.intl.string(I.t.aQzVFx),
                    layout: "horizontal",
                    children: (0, r.jsx)(c.u, {
                        text: n ? null : I.intl.string(I.t["pjG+T0"]),
                        "aria-label": n ? void 0 : I.intl.string(I.t["pjG+T0"]),
                        children: (0, r.jsx)(u.zxk, {
                            variant: "critical-primary",
                            size: "sm",
                            text: I.intl.string(I.t.c1BmbG),
                            onClick: () => {
                                e.features.has(E.oNc.DISCOVERABLE) && e.features.has(E.oNc.PARTNERED)
                                    ? (0, u.h7j)((e) =>
                                          (0, r.jsx)(
                                              u.ConfirmModal,
                                              w(P({}, e), {
                                                  header: I.intl.string(I.t.iBnVHR),
                                                  confirmText: I.intl.string(I.t["cY+Ooa"]),
                                                  cancelText: I.intl.string(I.t.oEAioK),
                                                  onConfirm: f,
                                                  children: (0, r.jsx)(u.Text, {
                                                      variant: "text-sm/normal",
                                                      children: I.intl.string(I.t["P+Sh8f"]),
                                                  }),
                                              }),
                                          ),
                                      )
                                    : e.features.has(E.oNc.DISCOVERABLE)
                                      ? (0, u.h7j)((e) =>
                                            (0, r.jsx)(
                                                u.ConfirmModal,
                                                w(P({}, e), {
                                                    header: I.intl.string(I.t.iBnVHR),
                                                    confirmText: I.intl.string(I.t["cY+Ooa"]),
                                                    cancelText: I.intl.string(I.t.oEAioK),
                                                    onConfirm: f,
                                                    children: (0, r.jsx)(u.Text, {
                                                        variant: "text-sm/normal",
                                                        children: I.intl.string(I.t["eMx/ub"]),
                                                    }),
                                                }),
                                            ),
                                        )
                                      : e.features.has(E.oNc.PARTNERED)
                                        ? (0, u.h7j)((e) =>
                                              (0, r.jsx)(
                                                  u.ConfirmModal,
                                                  w(P({}, e), {
                                                      header: I.intl.string(I.t.iBnVHR),
                                                      confirmText: I.intl.string(I.t["cY+Ooa"]),
                                                      cancelText: I.intl.string(I.t.oEAioK),
                                                      onConfirm: f,
                                                      children: (0, r.jsx)(u.Text, {
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
        let e = (0, a.e7)([O.Z], () => O.Z.getGuild());
        return null == e ? null : e.features.has(E.oNc.COMMUNITY) ? (0, r.jsx)(A, {}) : (0, r.jsx)(y.Z, { guild: e });
    };
