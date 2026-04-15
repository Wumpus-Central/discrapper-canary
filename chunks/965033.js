"use strict";
n.d(t, { Ay: () => D, qH: () => O, t9: () => R });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n(311907),
    d = n(397927),
    c = n(974544),
    u = n(134413),
    m = n(780964),
    g = n(858897),
    x = n(260509),
    h = n(576705),
    _ = n(351906),
    A = n(287809),
    p = n(975571),
    f = n(809505),
    j = n(997509),
    N = n(555337),
    E = n(512122),
    C = n(939662),
    T = n(111771),
    I = n(294363),
    b = n(652215),
    v = n(985018),
    S = n(204282);
function y(e) {
    let { guild: t } = e,
        n = (0, o.bG)([h.A], () => null != t && h.A.can(b.xBc.MANAGE_GUILD, t), [t]),
        l = s.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await j.A.saveGuild(t.id, { verificationLevel: n }), j.A.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(v.intl.string(v.t["46Rs3v"]), d.ToastType.FAILURE));
                }
            },
            [t],
        ),
        r = s.useMemo(() => {
            let e = (0, f.vd)(t?.features.has(b.GuildFeatures.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: "left",
            }));
            return (0, f.w3)(e);
        }, [t]),
        a = s.useMemo(() => r.find((e) => e.value === t?.verificationLevel), [t, r]);
    return (0, i.jsxs)("div", {
        className: S.hu,
        children: [
            (0, i.jsxs)("div", {
                className: S.aZ,
                children: [
                    (0, i.jsx)(d.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        children: v.intl.string(v.t.DpRdYK),
                    }),
                    (0, i.jsx)(d.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: v.intl.format(v.t.iuRk2j, {}),
                    }),
                ],
            }),
            (0, i.jsx)(T.A, {
                changeTitle: v.intl.string(v.t.TxESJG),
                value: a?.value,
                options: r,
                disabled: !n,
                onChange: l,
            }),
        ],
    });
}
function R(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, o.bG)([h.A], () => null != t && h.A.can(b.xBc.MANAGE_GUILD, t), [t]),
        c = s.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await j.A.saveGuild(t.id, { explicitContentFilter: n }),
                        j.A.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(v.intl.string(v.t["46Rs3v"]), d.ToastType.FAILURE));
                }
            },
            [t.id],
        ),
        u = s.useMemo(() => {
            let e = (0, f.QL)(t?.features.has(b.GuildFeatures.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: "left",
            }));
            return (0, f.w3)(e);
        }, [t]),
        m = s.useMemo(() => u.find((e) => e.value === t?.explicitContentFilter), [t, u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l && (0, i.jsx)(d.cGx, { className: S.yF }),
            (0, i.jsxs)("div", {
                className: r()(S.hu, n),
                children: [
                    (0, i.jsxs)("div", {
                        className: S.aZ,
                        children: [
                            (0, i.jsx)(d.Text, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                children: v.intl.string(v.t.bPgfJz),
                            }),
                            (0, i.jsx)(d.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                children: v.intl.format(v.t.BI4ukC, {
                                    helpdeskArticle: p.A.getArticleURL(b.MVz.SAFE_DIRECT_MESSAGING),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(T.A, {
                        changeTitle: v.intl.string(v.t["eBd+Uv"]),
                        value: m?.value,
                        options: u,
                        disabled: !a,
                        onChange: c,
                    }),
                ],
            }),
        ],
    });
}
async function O(e, t) {
    if (e.features.has(b.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (
        t
            ? n.add(b.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            : n.delete(b.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        await j.A.saveGuild(e.id, { features: n })
    );
}
function G(e) {
    let { guild: t } = e,
        n = (0, o.bG)([h.A], () => null != t && h.A.can(b.xBc.MANAGE_GUILD, t), [t]),
        l = t.features.has(b.GuildFeatures.COMMUNITY),
        r = (0, u.fw)(t.id),
        [a, c] = s.useState(t.features.has(b.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        m = s.useCallback(
            async (e) => {
                c(e), await O(t, e);
            },
            [t],
        );
    return l || !r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: S.hu,
                      children: [
                          (0, i.jsx)(d.dOG, {
                              label: v.intl.string(v.t.jDarmy),
                              description: v.intl.string(v.t["/ee7yK"]),
                              badge: "beta",
                              checked: a,
                              onChange: m,
                              disabled: !n,
                          }),
                          (0, i.jsx)(d.po8, {
                              messageType: d.YCn.INFO,
                              textVariant: "text-xs/normal",
                              children: v.intl.string(v.t.JxO63z),
                          }),
                      ],
                  }),
                  (0, i.jsx)(d.cGx, { className: S.yF }),
              ],
          });
}
function L(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.bG)([h.A], () => null != t && h.A.can(b.xBc.MANAGE_GUILD, t), [t]),
        r = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        { isGuildOwnerWithMFA: c, showMFAUserTooltip: u } = s.useMemo(
            () =>
                null == r
                    ? { canChangeMFALevel: !1, showMFAUserTooltip: !1 }
                    : { isGuildOwnerWithMFA: (0, x.ok)(t, r), showMFAUserTooltip: !r.mfaEnabled && (0, x.bM)(t, r) },
            [r, t],
        ),
        _ = n === b.EkJ.ELEVATED,
        p = (0, a.throttle)(async (e) => {
            !c || u || (await j.A.updateMFALevel({ guildId: t.id, level: e ? b.EkJ.ELEVATED : b.EkJ.NONE }));
        }, 1e3);
    return l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.cGx, { className: S.yF }),
                  (0, i.jsxs)("div", {
                      className: S.hu,
                      children: [
                          (0, i.jsx)(d.dOG, {
                              label: v.intl.string(v.t.lbBfEQ),
                              description: v.intl.string(v.t.REr5AI),
                              checked: _,
                              onChange: p,
                              disabled: !c,
                          }),
                          u &&
                              (0, i.jsx)(d.po8, {
                                  messageType: d.YCn.INFO,
                                  textVariant: "text-xs/normal",
                                  children: v.intl.format(v.t.Xz1O0W, {
                                      onClick: function () {
                                          (0, g.openUserSettings)(m.X.ACCOUNT_PANEL);
                                      },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
function D() {
    let { guild: e, mfaLevel: t } = (0, o.cf)([N.A], () => N.A.getProps(), []),
        n = (0, o.bG)([_.A], () => _.A.enabled, []);
    return null == e
        ? null
        : n
          ? (0, i.jsx)(c.A, {})
          : (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: S.N1,
                        variant: "heading-lg/semibold",
                        children: v.intl.string(v.t["suhY+Y"]),
                    }),
                    (0, i.jsx)(E.p, { guild: e }),
                    (0, i.jsx)(G, { guild: e }),
                    (0, i.jsx)(y, { guild: e }),
                    (0, i.jsx)(L, { guild: e, mfaLevel: t }),
                    (0, i.jsx)(R, { guild: e }),
                    (0, i.jsx)(C.A, { guild: e, location: "guild_settings_safety_setup" }),
                    (0, i.jsx)(d.cGx, { className: S.yF }),
                    (0, i.jsx)("div", { className: S.hu, children: (0, i.jsx)(I.b, { guild: e }) }),
                ],
            });
}
