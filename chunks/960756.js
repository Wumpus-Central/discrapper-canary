n.d(t, { $i: () => D, aV: () => G, bW: () => O, gE: () => L, n5: () => R });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(933832),
    a = n(834730),
    o = n(695366),
    d = n(534514),
    c = n(821609),
    u = n(935286),
    m = n(276293),
    g = n(214947),
    h = n(243721),
    x = n(855473),
    _ = n(173936),
    p = n(591552),
    A = n(961973),
    E = n(374084),
    f = n(352821),
    j = n(199940),
    N = n(132514),
    I = n(949034),
    C = n(259866),
    b = n(539916),
    v = n(985018),
    S = n(808039);
function T(e) {
    let t,
        { title: n, description: l, icon: s, hasStarted: m, status: g, onEdit: h, extra: x } = e;
    switch (g) {
        case "good":
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.A, { size: "xs", color: "currentColor", className: S.AI }),
                    (0, i.jsx)(a.E, {
                        variant: "text-xs/semibold",
                        color: "status-positive",
                        className: S.qS,
                        children: v.intl.string(v.t.rPnzRf),
                    }),
                ],
            });
            break;
        case "warning":
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.E, { size: "xs", color: "currentColor", className: S.$e }),
                    (0, i.jsx)(a.E, {
                        variant: "text-xs/semibold",
                        color: "status-warning",
                        className: S.qS,
                        children: v.intl.string(v.t["yTa+di"]),
                    }),
                ],
            });
            break;
        case "required":
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(o.E, { size: "xs", color: "currentColor", className: S.OR }),
                    (0, i.jsx)(a.E, {
                        variant: "text-xs/semibold",
                        color: "text-feedback-critical",
                        className: S.qS,
                        children: v.intl.string(v.t.EkokLy),
                    }),
                ],
            });
    }
    return (0, i.jsxs)("div", {
        className: S.jB,
        children: [
            (0, i.jsxs)("div", {
                className: S.jA,
                children: [
                    (0, i.jsx)("div", { className: S.zc, children: s }),
                    (0, i.jsxs)("div", {
                        className: S.FE,
                        children: [
                            (0, i.jsx)(d.D, { variant: "heading-md/semibold", children: n }),
                            (0, i.jsx)(a.E, {
                                variant: "text-xs/normal",
                                color: m && "required" === g ? "text-feedback-critical" : "text-default",
                                children: l,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: S.Ib,
                children: [
                    t,
                    x,
                    (0, i.jsx)("div", {
                        className: S.lO,
                        children: m
                            ? (0, i.jsx)(c.$, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: h,
                                  text: v.intl.string(v.t.bt75uw),
                              })
                            : (0, i.jsx)(c.$, {
                                  icon: u.E,
                                  iconPosition: "end",
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: h,
                                  text: v.intl.string(v.t["0GWElc"]),
                              }),
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let t = (0, s.bG)([p.A], () => p.A.getDefaultChannelIds(e)),
        n = l.useMemo(() => new Set(t), [t]),
        [i] = (0, A.tb)(e, n);
    return i.length >= b.Kd;
}
function R(e) {
    let t = y(e),
        n = (0, C.Mj)(e);
    return t || n;
}
function L(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: r } = e,
        a = (0, s.yK)([p.A], () => p.A.getDefaultChannelIds(t)),
        o = (0, s.bG)([p.A], () => (0, A.G4)(t, p.A.getDefaultChannelIds(t), p.A.getOnboardingPrompts(t)).length),
        d = l.useMemo(() => new Set(a), [a]),
        [, c] = (0, A.tb)(t, d),
        u = c.length,
        g = y(t),
        h = (0, C.Mj)(t),
        x = (0, s.bG)([p.A], () => p.A.isAdvancedMode(t)),
        _ = x
            ? v.intl.formatToPlainString(v.t.nHwnLK, { numDefaultChannels: u, numFromQuestions: o - u })
            : g
              ? v.intl.formatToPlainString(v.t.HxEwSv, { numDefaultChannels: u })
              : v.intl.formatToPlainString(v.t.vPwmA0, { numChattableChannels: b.Kd });
    return (0, i.jsx)(T, {
        title: x ? v.intl.string(v.t.YZookV) : v.intl.string(v.t["4GSygh"]),
        description: _,
        icon: (0, i.jsx)(m.N, { size: "md", color: "currentColor", className: S.p }),
        hasStarted: u > 0 || x,
        status: g || h ? (r ? "none" : "good") : "required",
        onEdit: n,
    });
}
function D(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: l } = e,
        r = (0, s.yK)([p.A], () => p.A.getDefaultChannelIds(t)),
        a = (0, s.yK)([p.A], () => p.A.getOnboardingPrompts(t)),
        o = a.length,
        [d, c] = (0, A.Lx)(t, a, r),
        u = d.length,
        m = d.length + c.length,
        h = (u / m) * 100,
        x = (0, s.bG)([p.A], () => p.A.isAdvancedMode(t)),
        _ = o > 0,
        E = "none";
    return (
        _ && (h >= 85 && !l ? (E = "good") : h < 85 && (E = "warning")),
        (0, i.jsx)(T, {
            title: x ? v.intl.string(v.t.AGjtFv) : v.intl.string(v.t.dqCzoT),
            description: v.intl.format(v.t.iuNisr, {
                numChannels: u,
                numTotalChannels: m,
                channelsHook: (e, t) =>
                    (0, i.jsx)(
                        "span",
                        { style: { color: h > 85 ? "var(--text-strong)" : "var(--status-warning)" }, children: e },
                        t,
                    ),
            }),
            icon: (0, i.jsx)(g.$, { size: "md", color: "currentColor", className: S.p }),
            hasStarted: _,
            status: E,
            onEdit: n,
        })
    );
}
function O(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: r } = e,
        a = (0, s.bG)([N.A], () => N.A.getSettings()),
        o = (0, s.bG)([p.A], () => p.A.getEnabled(t)),
        d = (0, E.Ic)(a),
        c = a.enabled,
        u = l.useCallback(() => {
            (0, j.UP)(t, !c);
        }, [t, c]),
        m = !(0, E.jJ)(a),
        g = "none";
    m && (d && !r ? (g = "good") : d || (g = "required"));
    let _ = v.intl.string(v.t.GMOwOD);
    d ? m || (_ = v.intl.string(v.t.wHOoyE)) : (_ = v.intl.string(v.t.wXFbgZ));
    let A = null;
    return (
        m &&
            o &&
            (A = (0, i.jsx)("div", {
                className: S.WW,
                children: (0, i.jsx)(h.d, { checked: c, onChange: u, disabled: !d }),
            })),
        (0, i.jsx)(T, {
            title: v.intl.string(v.t.mRHqsj),
            description: _,
            icon: (0, i.jsx)(x.Z, { size: "md", color: "currentColor", className: S.p }),
            hasStarted: m,
            status: g,
            onEdit: n,
            extra: A,
        })
    );
}
function G(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: l } = e,
        { enabled: r } = I.A.useExperiment({ guildId: t, location: "guild_settings" }, { autoTrackExposure: !0 }),
        a = (0, s.yK)([f.A], () => f.A.getEditedConnections());
    if (!r) return null;
    let o = a.length > 0,
        d = "none";
    o && !l && (d = "good");
    let c = o ? v.intl.format(v.t["9swnQZ"], { count: a.length }) : v.intl.string(v.t["3d3Cd5"]);
    return (0, i.jsx)(T, {
        title: v.intl.string(v.t.oL60eW),
        description: c,
        icon: (0, i.jsx)(_.q, { size: "md", color: "currentColor", className: S.p }),
        hasStarted: o,
        status: d,
        onEdit: n,
    });
}
