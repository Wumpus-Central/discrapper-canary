n.d(t, {
    Ay: () => G,
    qH: () => w,
    t9: () => P,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(735438),
    c = n(311907),
    o = n(397927),
    d = n(974544),
    u = n(134413),
    f = n(780964),
    g = n(840065),
    b = n(260509),
    m = n(576705),
    p = n(351906),
    x = n(287809),
    h = n(975571),
    j = n(809505),
    O = n(997509),
    y = n(555337),
    v = n(512122),
    A = n(111771),
    E = n(294363),
    N = n(652215),
    _ = n(985018),
    S = n(841541);

function T(e) {
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

function I(e, t) {
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

function C(e) {
    let { guild: t } = e,
        n = (0, c.bG)([m.A], () => null != t && m.A.can(N.xBc.MANAGE_GUILD, t), [t]),
        l = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await O.A.saveGuild(t.id, {
                        verificationLevel: n,
                    }),
                        O.A.updateGuild({
                            verificationLevel: n,
                        });
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(_.intl.string(_.t["46Rs3v"]), o.ToastType.FAILURE));
                }
            },
            [t],
        ),
        s = i.useMemo(() => {
            let e = (0, j.vd)(null == t ? void 0 : t.features.has(N.GuildFeatures.COMMUNITY)).map((e) =>
                I(T({}, e), {
                    tooltipPosition: "left",
                }),
            );
            return (0, j.w3)(e);
        }, [t]),
        a = i.useMemo(() => s.find((e) => e.value === (null == t ? void 0 : t.verificationLevel)), [t, s]);
    return (0, r.jsxs)("div", {
        className: S.hu,
        children: [
            (0, r.jsxs)("div", {
                className: S.aZ,
                children: [
                    (0, r.jsx)(o.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        children: _.intl.string(_.t.DpRdYK),
                    }),
                    (0, r.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: _.intl.format(_.t.iuRk2j, {}),
                    }),
                ],
            }),
            (0, r.jsx)(A.A, {
                changeTitle: _.intl.string(_.t.TxESJG),
                value: null == a ? void 0 : a.value,
                options: s,
                disabled: !n,
                onChange: l,
            }),
        ],
    });
}

function P(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, c.bG)([m.A], () => null != t && m.A.can(N.xBc.MANAGE_GUILD, t), [t]),
        d = i.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await O.A.saveGuild(t.id, {
                        explicitContentFilter: n,
                    }),
                        O.A.updateGuild({
                            explicitContentFilter: n,
                        });
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(_.intl.string(_.t["46Rs3v"]), o.ToastType.FAILURE));
                }
            },
            [t.id],
        ),
        u = i.useMemo(() => {
            let e = (0, j.QL)(null == t ? void 0 : t.features.has(N.GuildFeatures.COMMUNITY)).map((e) =>
                I(T({}, e), {
                    tooltipPosition: "left",
                }),
            );
            return (0, j.w3)(e);
        }, [t]),
        f = i.useMemo(() => u.find((e) => e.value === (null == t ? void 0 : t.explicitContentFilter)), [t, u]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            l &&
                (0, r.jsx)(o.cGx, {
                    className: S.yF,
                }),
            (0, r.jsxs)("div", {
                className: s()(S.hu, n),
                children: [
                    (0, r.jsxs)("div", {
                        className: S.aZ,
                        children: [
                            (0, r.jsx)(o.Text, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                children: _.intl.string(_.t.bPgfJz),
                            }),
                            (0, r.jsx)(o.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                children: _.intl.format(_.t.BI4ukC, {
                                    helpdeskArticle: h.A.getArticleURL(N.MVz.SAFE_DIRECT_MESSAGING),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(A.A, {
                        changeTitle: _.intl.string(_.t["eBd+Uv"]),
                        value: null == f ? void 0 : f.value,
                        options: u,
                        disabled: !a,
                        onChange: d,
                    }),
                ],
            }),
        ],
    });
}
async function w(e, t) {
    if (e.features.has(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (
        t
            ? n.add(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            : n.delete(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        await O.A.saveGuild(e.id, {
            features: n,
        })
    );
}

function R(e) {
    let { guild: t } = e,
        n = (0, c.bG)([m.A], () => null != t && m.A.can(N.xBc.MANAGE_GUILD, t), [t]),
        l = t.features.has(N.GuildFeatures.COMMUNITY),
        s = (0, u.fw)(t.id),
        [a, d] = i.useState(t.features.has(N.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        f = i.useCallback(
            async (e) => {
                d(e), await w(t, e);
            },
            [t],
        );
    return l || !s
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: S.hu,
                      children: [
                          (0, r.jsx)(o.dOG, {
                              label: _.intl.string(_.t.jDarmy),
                              description: _.intl.string(_.t["/ee7yK"]),
                              badge: "beta",
                              checked: a,
                              onChange: f,
                              disabled: !n,
                          }),
                          (0, r.jsx)(o.po8, {
                              messageType: o.YCn.INFO,
                              textVariant: "text-xs/normal",
                              children: _.intl.string(_.t.JxO63z),
                          }),
                      ],
                  }),
                  (0, r.jsx)(o.cGx, {
                      className: S.yF,
                  }),
              ],
          });
}

function D(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, c.bG)([m.A], () => null != t && m.A.can(N.xBc.MANAGE_GUILD, t), [t]),
        s = (0, c.bG)([x.default], () => x.default.getCurrentUser()),
        { isGuildOwnerWithMFA: d, showMFAUserTooltip: u } = i.useMemo(
            () =>
                null == s
                    ? {
                          canChangeMFALevel: !1,
                          showMFAUserTooltip: !1,
                      }
                    : {
                          isGuildOwnerWithMFA: (0, b.ok)(t, s),
                          showMFAUserTooltip: !s.mfaEnabled && (0, b.bM)(t, s),
                      },
            [s, t],
        ),
        p = n === N.EkJ.ELEVATED,
        h = (0, a.throttle)(async (e) => {
            !d ||
                u ||
                (await O.A.updateMFALevel({
                    guildId: t.id,
                    level: e ? N.EkJ.ELEVATED : N.EkJ.NONE,
                }));
        }, 1e3);
    return l
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(o.cGx, {
                      className: S.yF,
                  }),
                  (0, r.jsxs)("div", {
                      className: S.hu,
                      children: [
                          (0, r.jsx)(o.dOG, {
                              label: _.intl.string(_.t.lbBfEQ),
                              description: _.intl.string(_.t.REr5AI),
                              checked: p,
                              onChange: h,
                              disabled: !d,
                          }),
                          u &&
                              (0, r.jsx)(o.po8, {
                                  messageType: o.YCn.INFO,
                                  textVariant: "text-xs/normal",
                                  children: _.intl.format(_.t.Xz1O0W, {
                                      onClick: function () {
                                          (0, g.openUserSettings)(f.X.ACCOUNT_PANEL, {
                                              section: N.nc_.ACCOUNT,
                                          });
                                      },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}

function G() {
    let { guild: e, mfaLevel: t } = (0, c.cf)([y.A], () => y.A.getProps(), []),
        n = (0, c.bG)([p.A], () => p.A.enabled, []);
    return null == e
        ? null
        : n
          ? (0, r.jsx)(d.A, {})
          : (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(o.Heading, {
                        className: S.N1,
                        variant: "heading-lg/semibold",
                        children: _.intl.string(_.t["suhY+Y"]),
                    }),
                    (0, r.jsx)(v.p, {
                        guild: e,
                    }),
                    (0, r.jsx)(R, {
                        guild: e,
                    }),
                    (0, r.jsx)(C, {
                        guild: e,
                    }),
                    (0, r.jsx)(D, {
                        guild: e,
                        mfaLevel: t,
                    }),
                    (0, r.jsx)(P, {
                        guild: e,
                    }),
                    (0, r.jsx)(o.cGx, {
                        className: S.yF,
                    }),
                    (0, r.jsx)("div", {
                        className: S.hu,
                        children: (0, r.jsx)(E.b, {
                            guild: e,
                        }),
                    }),
                ],
            });
}
