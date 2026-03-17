"use strict";
n.d(t, { Ay: () => L, qH: () => R, t9: () => y });
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
    g = n(840065),
    x = n(260509),
    h = n(576705),
    _ = n(351906),
    p = n(287809),
    A = n(975571),
    f = n(809505),
    j = n(997509),
    N = n(555337),
    E = n(512122),
    b = n(111771),
    T = n(294363),
    C = n(652215),
    I = n(985018),
    v = n(841541);
function S(e) {
    let { guild: t } = e,
        n = (0, o.bG)([h.A], () => null != t && h.A.can(C.xBc.MANAGE_GUILD, t), [t]),
        l = s.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await j.A.saveGuild(t.id, { verificationLevel: n }), j.A.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(I.intl.string(I.t["46Rs3v"]), d.ToastType.FAILURE));
                }
            },
            [t],
        ),
        r = s.useMemo(() => {
            let e = (0, f.vd)(t?.features.has(C.GuildFeatures.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: "left",
            }));
            return (0, f.w3)(e);
        }, [t]),
        a = s.useMemo(() => r.find((e) => e.value === t?.verificationLevel), [t, r]);
    return (0, i.jsxs)("div", {
        className: v.hu,
        children: [
            (0, i.jsxs)("div", {
                className: v.aZ,
                children: [
                    (0, i.jsx)(d.Text, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        children: I.intl.string(I.t.DpRdYK),
                    }),
                    (0, i.jsx)(d.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: I.intl.format(I.t.iuRk2j, {}),
                    }),
                ],
            }),
            (0, i.jsx)(b.A, {
                changeTitle: I.intl.string(I.t.TxESJG),
                value: a?.value,
                options: r,
                disabled: !n,
                onChange: l,
            }),
        ],
    });
}
function y(e) {
    let { guild: t, className: n, withDivider: l = !0 } = e,
        a = (0, o.bG)([h.A], () => null != t && h.A.can(C.xBc.MANAGE_GUILD, t), [t]),
        c = s.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await j.A.saveGuild(t.id, { explicitContentFilter: n }),
                        j.A.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, d.showToast)((0, d.createToast)(I.intl.string(I.t["46Rs3v"]), d.ToastType.FAILURE));
                }
            },
            [t.id],
        ),
        u = s.useMemo(() => {
            let e = (0, f.QL)(t?.features.has(C.GuildFeatures.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: "left",
            }));
            return (0, f.w3)(e);
        }, [t]),
        m = s.useMemo(() => u.find((e) => e.value === t?.explicitContentFilter), [t, u]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l && (0, i.jsx)(d.cGx, { className: v.yF }),
            (0, i.jsxs)("div", {
                className: r()(v.hu, n),
                children: [
                    (0, i.jsxs)("div", {
                        className: v.aZ,
                        children: [
                            (0, i.jsx)(d.Text, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                children: I.intl.string(I.t.bPgfJz),
                            }),
                            (0, i.jsx)(d.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                children: I.intl.format(I.t.BI4ukC, {
                                    helpdeskArticle: A.A.getArticleURL(C.MVz.SAFE_DIRECT_MESSAGING),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(b.A, {
                        changeTitle: I.intl.string(I.t["eBd+Uv"]),
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
async function R(e, t) {
    if (e.features.has(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (
        t
            ? n.add(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            : n.delete(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        await j.A.saveGuild(e.id, { features: n })
    );
}
function O(e) {
    let { guild: t } = e,
        n = (0, o.bG)([h.A], () => null != t && h.A.can(C.xBc.MANAGE_GUILD, t), [t]),
        l = t.features.has(C.GuildFeatures.COMMUNITY),
        r = (0, u.fw)(t.id),
        [a, c] = s.useState(t.features.has(C.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        m = s.useCallback(
            async (e) => {
                c(e), await R(t, e);
            },
            [t],
        );
    return l || !r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: v.hu,
                      children: [
                          (0, i.jsx)(d.dOG, {
                              label: I.intl.string(I.t.jDarmy),
                              description: I.intl.string(I.t["/ee7yK"]),
                              badge: "beta",
                              checked: a,
                              onChange: m,
                              disabled: !n,
                          }),
                          (0, i.jsx)(d.po8, {
                              messageType: d.YCn.INFO,
                              textVariant: "text-xs/normal",
                              children: I.intl.string(I.t.JxO63z),
                          }),
                      ],
                  }),
                  (0, i.jsx)(d.cGx, { className: v.yF }),
              ],
          });
}
function G(e) {
    let { guild: t, mfaLevel: n } = e,
        l = (0, o.bG)([h.A], () => null != t && h.A.can(C.xBc.MANAGE_GUILD, t), [t]),
        r = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        { isGuildOwnerWithMFA: c, showMFAUserTooltip: u } = s.useMemo(
            () =>
                null == r
                    ? { canChangeMFALevel: !1, showMFAUserTooltip: !1 }
                    : { isGuildOwnerWithMFA: (0, x.ok)(t, r), showMFAUserTooltip: !r.mfaEnabled && (0, x.bM)(t, r) },
            [r, t],
        ),
        _ = n === C.EkJ.ELEVATED,
        A = (0, a.throttle)(async (e) => {
            !c || u || (await j.A.updateMFALevel({ guildId: t.id, level: e ? C.EkJ.ELEVATED : C.EkJ.NONE }));
        }, 1e3);
    return l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.cGx, { className: v.yF }),
                  (0, i.jsxs)("div", {
                      className: v.hu,
                      children: [
                          (0, i.jsx)(d.dOG, {
                              label: I.intl.string(I.t.lbBfEQ),
                              description: I.intl.string(I.t.REr5AI),
                              checked: _,
                              onChange: A,
                              disabled: !c,
                          }),
                          u &&
                              (0, i.jsx)(d.po8, {
                                  messageType: d.YCn.INFO,
                                  textVariant: "text-xs/normal",
                                  children: I.intl.format(I.t.Xz1O0W, {
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
function L() {
    let { guild: e, mfaLevel: t } = (0, o.cf)([N.A], () => N.A.getProps(), []),
        n = (0, o.bG)([_.A], () => _.A.enabled, []);
    return null == e
        ? null
        : n
          ? (0, i.jsx)(c.A, {})
          : (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(d.Heading, {
                        className: v.N1,
                        variant: "heading-lg/semibold",
                        children: I.intl.string(I.t["suhY+Y"]),
                    }),
                    (0, i.jsx)(E.p, { guild: e }),
                    (0, i.jsx)(O, { guild: e }),
                    (0, i.jsx)(S, { guild: e }),
                    (0, i.jsx)(G, { guild: e, mfaLevel: t }),
                    (0, i.jsx)(y, { guild: e }),
                    (0, i.jsx)(d.cGx, { className: v.yF }),
                    (0, i.jsx)("div", { className: v.hu, children: (0, i.jsx)(T.b, { guild: e }) }),
                ],
            });
}
