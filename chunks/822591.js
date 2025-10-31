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
    v = n(699516),
    _ = n(594174),
    C = n(434404),
    O = n(999382),
    y = n(906512),
    E = n(929834),
    N = n(981631),
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
            (e = "rules_channel_id" === s ? I.intl.string(I.t["7IrBYt"]) : null != s ? i[s] : void 0),
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
                    url: N.ANM.GUILD_ADMIN_SERVER_ELIGIBILITY(l.id),
                    rejectWithError: !0,
                })
                .then((e) => {
                    j(e.body.eligible_for_admin_server);
                })
                .catch(() => j(!1));
        });
        let v = (0, a.e7)([x.Z], () => x.Z.getGuild("942897714956472401")),
            _ = l.features.has(N.GuildFeatures.COMMUNITY) && p >= 1000 && h && null == v;
        if (t && n && !_) return null;
        let O = async () => {
            try {
                let e = await s.tn.post({
                    url: N.ANM.JOIN_ADMIN_SERVER(l.id),
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
                              _ &&
                                  (0, r.jsx)("div", {
                                      "data-button-hoisted-classname-wrapper": !0,
                                      className: S.upsellButton,
                                      children: (0, r.jsx)(g.Button, {
                                          variant: "primary",
                                          size: "sm",
                                          text: I.intl.string(I.t.iF1Asi),
                                          onClick: O,
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
                                                C.Z.setSection(N.pNK.ONBOARDING);
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
                                                C.Z.setSection(N.pNK.ACCESS, N.KsC.ACCESS_DISCOVERABLE);
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
                                          C.Z.setSection(N.pNK.ANALYTICS);
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
                canManageGuild: j.Z.can(N.Plq.MANAGE_GUILD, e),
                isGuildAdmin: j.Z.can(N.Plq.ADMINISTRATOR, e),
            })),
            s = (0, a.e7)([h.ZP], () => (null != e ? h.ZP.getChannels(e.id) : null)),
            c = i.useMemo(E.jb, []),
            u = !0 !== o.K.get(Z);
        if (null == e) return null;
        let m = [];
        null != s &&
            s[h.sH].forEach((e) => {
                let { channel: t } = e;
                t.type === N.d4z.GUILD_TEXT &&
                    m.push({
                        value: t.id,
                        label: (0, p.F6)(t, _.default, v.Z, !0),
                    });
            });
        let f = () => {
                if (null == e) return;
                let t = new Set(e.features);
                t.delete(N.GuildFeatures.COMMUNITY),
                    t.delete(N.GuildFeatures.DISCOVERABLE),
                    t.delete(N.GuildFeatures.PREVIEW_ENABLED),
                    C.Z.updateGuild({
                        features: t,
                        rulesChannelId: null,
                        publicUpdatesChannelId: null,
                    });
            },
            b = (e) => {
                C.Z.updateGuild({ description: e });
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
                          discoveryEnabled: e.features.has(N.GuildFeatures.DISCOVERABLE),
                          onboardingEnabled: e.features.has(N.GuildFeatures.GUILD_ONBOARDING),
                          guild: e,
                      })
                    : null,
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t["otcXP/"]),
                    description: I.intl.string(I.t.BtwmYB),
                    value: e.rulesChannelId,
                    options: m,
                    onChange: (e) => {
                        C.Z.updateGuild({ rulesChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t.vAyDGU),
                    description: I.intl.string(I.t.ZFeonu),
                    value: e.publicUpdatesChannelId,
                    options: m,
                    onChange: (e) => {
                        C.Z.updateGuild({ publicUpdatesChannelId: e });
                    },
                    isDisabled: !n,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t.sMkYE8),
                    description: I.intl.string(I.t.htioQo),
                    value: e.safetyAlertsChannelId,
                    options: m,
                    onChange: (e) => {
                        C.Z.updateGuild({ safetyAlertsChannelId: e });
                    },
                    isDisabled: !t,
                }),
                (0, r.jsx)(g.izJ, {}),
                (0, r.jsx)(g.VcW, {
                    layout: "horizontal",
                    label: I.intl.string(I.t.pO60fy),
                    description: I.intl.string(I.t.aIR73T),
                    value: e.preferredLocale,
                    options: c,
                    onChange: (e) => {
                        C.Z.updateGuild({ preferredLocale: e });
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
                                e.features.has(N.GuildFeatures.DISCOVERABLE) &&
                                e.features.has(N.GuildFeatures.PARTNERED)
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
                                    : e.features.has(N.GuildFeatures.DISCOVERABLE)
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
                                      : e.features.has(N.GuildFeatures.PARTNERED)
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
        let e = (0, a.e7)([O.Z], () => O.Z.getGuild());
        return null == e
            ? null
            : e.features.has(N.GuildFeatures.COMMUNITY)
              ? (0, r.jsx)(A, {})
              : (0, r.jsx)(y.Z, { guild: e });
    };
