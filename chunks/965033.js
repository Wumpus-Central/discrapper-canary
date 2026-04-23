n.d(t, { Ay: () => F, qH: () => w, t9: () => U });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n(311907),
    d = n(691540),
    c = n(857250),
    u = n(97483),
    m = n(834730),
    g = n(404778),
    h = n(243721),
    x = n(512950),
    _ = n(534514),
    p = n(974544),
    A = n(134413),
    E = n(780964),
    f = n(858897),
    j = n(260509),
    N = n(576705),
    I = n(351906),
    C = n(287809),
    b = n(975571),
    v = n(809505),
    S = n(997509),
    T = n(555337),
    y = n(512122),
    R = n(939662),
    L = n(111771),
    D = n(294363),
    O = n(652215),
    G = n(985018),
    M = n(312042);
function k(e) {
    let { guild: t } = e,
        n = (0, o.bG)([N.A], () => null != t && N.A.can(O.xBc.MANAGE_GUILD, t), [t]),
        s = l.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await S.A.saveGuild(t.id, { verificationLevel: n }), S.A.updateGuild({ verificationLevel: n });
                } catch (e) {
                    (0, d.P0)((0, c.o)(G.intl.string(G.t["46Rs3v"]), u.Ck.FAILURE));
                }
            },
            [t],
        ),
        r = l.useMemo(() => {
            let e = (0, v.vd)(t?.features.has(O.GuildFeatures.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: "left",
            }));
            return (0, v.w3)(e);
        }, [t]),
        a = l.useMemo(() => r.find((e) => e.value === t?.verificationLevel), [t, r]);
    return (0, i.jsxs)("div", {
        className: M.hu,
        children: [
            (0, i.jsxs)("div", {
                className: M.aZ,
                children: [
                    (0, i.jsx)(m.E, {
                        color: "text-strong",
                        variant: "text-md/semibold",
                        children: G.intl.string(G.t.DpRdYK),
                    }),
                    (0, i.jsx)(m.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: G.intl.format(G.t.iuRk2j, {}),
                    }),
                ],
            }),
            (0, i.jsx)(L.A, {
                changeTitle: G.intl.string(G.t.TxESJG),
                value: a?.value,
                options: r,
                disabled: !n,
                onChange: s,
            }),
        ],
    });
}
function U(e) {
    let { guild: t, className: n, withDivider: s = !0 } = e,
        a = (0, o.bG)([N.A], () => null != t && N.A.can(O.xBc.MANAGE_GUILD, t), [t]),
        h = l.useCallback(
            async (e) => {
                let { value: n } = e;
                try {
                    await S.A.saveGuild(t.id, { explicitContentFilter: n }),
                        S.A.updateGuild({ explicitContentFilter: n });
                } catch (e) {
                    (0, d.P0)((0, c.o)(G.intl.string(G.t["46Rs3v"]), u.Ck.FAILURE));
                }
            },
            [t.id],
        ),
        x = l.useMemo(() => {
            let e = (0, v.QL)(t?.features.has(O.GuildFeatures.COMMUNITY)).map((e) => ({
                ...e,
                tooltipPosition: "left",
            }));
            return (0, v.w3)(e);
        }, [t]),
        _ = l.useMemo(() => x.find((e) => e.value === t?.explicitContentFilter), [t, x]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            s && (0, i.jsx)(g.c, { className: M.yF }),
            (0, i.jsxs)("div", {
                className: r()(M.hu, n),
                children: [
                    (0, i.jsxs)("div", {
                        className: M.aZ,
                        children: [
                            (0, i.jsx)(m.E, {
                                color: "text-strong",
                                variant: "text-md/semibold",
                                children: G.intl.string(G.t.bPgfJz),
                            }),
                            (0, i.jsx)(m.E, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                children: G.intl.format(G.t.BI4ukC, {
                                    helpdeskArticle: b.A.getArticleURL(O.MVz.SAFE_DIRECT_MESSAGING),
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(L.A, {
                        changeTitle: G.intl.string(G.t["eBd+Uv"]),
                        value: _?.value,
                        options: x,
                        disabled: !a,
                        onChange: h,
                    }),
                ],
            }),
        ],
    });
}
async function w(e, t) {
    if (e.features.has(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY) === t) return;
    let n = e.features;
    return (
        t
            ? n.add(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)
            : n.delete(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        await S.A.saveGuild(e.id, { features: n })
    );
}
function P(e) {
    let { guild: t } = e,
        n = (0, o.bG)([N.A], () => null != t && N.A.can(O.xBc.MANAGE_GUILD, t), [t]),
        s = t.features.has(O.GuildFeatures.COMMUNITY),
        r = (0, A.fw)(t.id),
        [a, d] = l.useState(t.features.has(O.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)),
        c = l.useCallback(
            async (e) => {
                d(e), await w(t, e);
            },
            [t],
        );
    return s || !r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: M.hu,
                      children: [
                          (0, i.jsx)(h.d, {
                              label: G.intl.string(G.t.jDarmy),
                              description: G.intl.string(G.t["/ee7yK"]),
                              badge: "beta",
                              checked: a,
                              onChange: c,
                              disabled: !n,
                          }),
                          (0, i.jsx)(x.p, {
                              messageType: x.Y.INFO,
                              textVariant: "text-xs/normal",
                              children: G.intl.string(G.t.JxO63z),
                          }),
                      ],
                  }),
                  (0, i.jsx)(g.c, { className: M.yF }),
              ],
          });
}
function B(e) {
    let { guild: t, mfaLevel: n } = e,
        s = (0, o.bG)([N.A], () => null != t && N.A.can(O.xBc.MANAGE_GUILD, t), [t]),
        r = (0, o.bG)([C.default], () => C.default.getCurrentUser()),
        { isGuildOwnerWithMFA: d, showMFAUserTooltip: c } = l.useMemo(
            () =>
                null == r
                    ? { canChangeMFALevel: !1, showMFAUserTooltip: !1 }
                    : { isGuildOwnerWithMFA: (0, j.ok)(t, r), showMFAUserTooltip: !r.mfaEnabled && (0, j.bM)(t, r) },
            [r, t],
        ),
        u = n === O.EkJ.ELEVATED,
        m = (0, a.throttle)(async (e) => {
            !d || c || (await S.A.updateMFALevel({ guildId: t.id, level: e ? O.EkJ.ELEVATED : O.EkJ.NONE }));
        }, 1e3);
    return s
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.c, { className: M.yF }),
                  (0, i.jsxs)("div", {
                      className: M.hu,
                      children: [
                          (0, i.jsx)(h.d, {
                              label: G.intl.string(G.t.lbBfEQ),
                              description: G.intl.string(G.t.REr5AI),
                              checked: u,
                              onChange: m,
                              disabled: !d,
                          }),
                          c &&
                              (0, i.jsx)(x.p, {
                                  messageType: x.Y.INFO,
                                  textVariant: "text-xs/normal",
                                  children: G.intl.format(G.t.Xz1O0W, {
                                      onClick: function () {
                                          (0, f.openUserSettings)(E.X.ACCOUNT_PANEL);
                                      },
                                  }),
                              }),
                      ],
                  }),
              ],
          })
        : null;
}
function F() {
    let { guild: e, mfaLevel: t } = (0, o.cf)([T.A], () => T.A.getProps(), []),
        n = (0, o.bG)([I.A], () => I.A.enabled, []);
    return null == e
        ? null
        : n
          ? (0, i.jsx)(p.A, {})
          : (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(_.D, {
                        className: M.N1,
                        variant: "heading-lg/semibold",
                        children: G.intl.string(G.t["suhY+Y"]),
                    }),
                    (0, i.jsx)(y.p, { guild: e }),
                    (0, i.jsx)(P, { guild: e }),
                    (0, i.jsx)(k, { guild: e }),
                    (0, i.jsx)(B, { guild: e, mfaLevel: t }),
                    (0, i.jsx)(U, { guild: e }),
                    (0, i.jsx)(R.A, { guild: e, location: "guild_settings_safety_setup" }),
                    (0, i.jsx)(g.c, { className: M.yF }),
                    (0, i.jsx)("div", { className: M.hu, children: (0, i.jsx)(D.b, { guild: e }) }),
                ],
            });
}
