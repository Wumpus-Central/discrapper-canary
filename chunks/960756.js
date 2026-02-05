"use strict";
n.d(t, { $i: () => E, aV: () => T, bW: () => b, gE: () => N, n5: () => j });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(591552),
    o = n(961973),
    d = n(374084),
    c = n(352821),
    u = n(199940),
    m = n(132514),
    g = n(949034),
    x = n(259866),
    h = n(539916),
    _ = n(985018),
    A = n(818110);
function p(e) {
    let t,
        { title: n, description: s, icon: l, hasStarted: a, status: o, onEdit: d, extra: c } = e;
    switch (o) {
        case "good":
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.A9s, { size: "xs", color: "currentColor", className: A.AI }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-xs/semibold",
                        color: "status-positive",
                        className: A.qS,
                        children: _.intl.string(_.t.rPnzRf),
                    }),
                ],
            });
            break;
        case "warning":
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.EpV, { size: "xs", color: "currentColor", className: A.$e }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-xs/semibold",
                        color: "status-warning",
                        className: A.qS,
                        children: _.intl.string(_.t["yTa+di"]),
                    }),
                ],
            });
            break;
        case "required":
            t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(r.EpV, { size: "xs", color: "currentColor", className: A.OR }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-xs/semibold",
                        color: "text-feedback-critical",
                        className: A.qS,
                        children: _.intl.string(_.t.EkokLy),
                    }),
                ],
            });
    }
    return (0, i.jsxs)("div", {
        className: A.jB,
        children: [
            (0, i.jsxs)("div", {
                className: A.jA,
                children: [
                    (0, i.jsx)("div", { className: A.zc, children: l }),
                    (0, i.jsxs)("div", {
                        className: A.FE,
                        children: [
                            (0, i.jsx)(r.Heading, { variant: "heading-md/semibold", children: n }),
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                color: a && "required" === o ? "text-feedback-critical" : "text-default",
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: A.Ib,
                children: [
                    t,
                    c,
                    (0, i.jsx)("div", {
                        className: A.lO,
                        children: a
                            ? (0, i.jsx)(r.Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: d,
                                  text: _.intl.string(_.t.bt75uw),
                              })
                            : (0, i.jsx)(r.Button, {
                                  icon: r.EdP,
                                  iconPosition: "end",
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: d,
                                  text: _.intl.string(_.t["0GWElc"]),
                              }),
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let t = (0, l.bG)([a.A], () => a.A.getDefaultChannelIds(e)),
        n = s.useMemo(() => new Set(t), [t]),
        [i] = (0, o.tb)(e, n);
    return i.length >= h.Kd;
}
function j(e) {
    let t = f(e),
        n = (0, x.Mj)(e);
    return t || n;
}
function N(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: d } = e,
        c = (0, l.yK)([a.A], () => a.A.getDefaultChannelIds(t)),
        u = (0, l.bG)([a.A], () => (0, o.G4)(t, a.A.getDefaultChannelIds(t), a.A.getOnboardingPrompts(t)).length),
        m = s.useMemo(() => new Set(c), [c]),
        [, g] = (0, o.tb)(t, m),
        j = g.length,
        N = f(t),
        E = (0, x.Mj)(t),
        b = (0, l.bG)([a.A], () => a.A.isAdvancedMode(t)),
        T = b
            ? _.intl.formatToPlainString(_.t.nHwnLK, { numDefaultChannels: j, numFromQuestions: u - j })
            : N
              ? _.intl.formatToPlainString(_.t.HxEwSv, { numDefaultChannels: j })
              : _.intl.formatToPlainString(_.t.vPwmA0, { numChattableChannels: h.Kd });
    return (0, i.jsx)(p, {
        title: b ? _.intl.string(_.t.YZookV) : _.intl.string(_.t["4GSygh"]),
        description: T,
        icon: (0, i.jsx)(r.N$i, { size: "md", color: "currentColor", className: A.p }),
        hasStarted: j > 0 || b,
        status: N || E ? (d ? "none" : "good") : "required",
        onEdit: n,
    });
}
function E(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: s } = e,
        d = (0, l.yK)([a.A], () => a.A.getDefaultChannelIds(t)),
        c = (0, l.yK)([a.A], () => a.A.getOnboardingPrompts(t)),
        u = c.length,
        [m, g] = (0, o.Lx)(t, c, d),
        x = m.length,
        h = m.length + g.length,
        f = (x / h) * 100,
        j = (0, l.bG)([a.A], () => a.A.isAdvancedMode(t)),
        N = u > 0,
        E = "none";
    return (
        N && (f >= 85 && !s ? (E = "good") : f < 85 && (E = "warning")),
        (0, i.jsx)(p, {
            title: j ? _.intl.string(_.t.AGjtFv) : _.intl.string(_.t.dqCzoT),
            description: _.intl.format(_.t.iuNisr, {
                numChannels: x,
                numTotalChannels: h,
                channelsHook: (e, t) =>
                    (0, i.jsx)(
                        "span",
                        { style: { color: f > 85 ? "var(--text-strong)" : "var(--status-warning)" }, children: e },
                        t,
                    ),
            }),
            icon: (0, i.jsx)(r.$yI, { size: "md", color: "currentColor", className: A.p }),
            hasStarted: N,
            status: E,
            onEdit: n,
        })
    );
}
function b(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        c = (0, l.bG)([m.A], () => m.A.getSettings()),
        g = (0, l.bG)([a.A], () => a.A.getEnabled(t)),
        x = (0, d.Ic)(c),
        h = c.enabled,
        f = s.useCallback(() => {
            (0, u.UP)(t, !h);
        }, [t, h]),
        j = !(0, d.jJ)(c),
        N = "none";
    j && (x && !o ? (N = "good") : x || (N = "required"));
    let E = _.intl.string(_.t.GMOwOD);
    x ? j || (E = _.intl.string(_.t.wHOoyE)) : (E = _.intl.string(_.t.wXFbgZ));
    let b = null;
    return (
        j &&
            g &&
            (b = (0, i.jsx)("div", {
                className: A.WW,
                children: (0, i.jsx)(r.dOG, { checked: h, onChange: f, disabled: !x }),
            })),
        (0, i.jsx)(p, {
            title: _.intl.string(_.t.mRHqsj),
            description: E,
            icon: (0, i.jsx)(r.Zf8, { size: "md", color: "currentColor", className: A.p }),
            hasStarted: j,
            status: N,
            onEdit: n,
            extra: b,
        })
    );
}
function T(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: s } = e,
        { enabled: a } = g.A.useExperiment({ guildId: t, location: "guild_settings" }, { autoTrackExposure: !0 }),
        o = (0, l.yK)([c.A], () => c.A.getEditedConnections());
    if (!a) return null;
    let d = o.length > 0,
        u = "none";
    d && !s && (u = "good");
    let m = d ? _.intl.format(_.t["9swnQZ"], { count: o.length }) : _.intl.string(_.t["3d3Cd5"]);
    return (0, i.jsx)(p, {
        title: _.intl.string(_.t.oL60eW),
        description: m,
        icon: (0, i.jsx)(r.qYV, { size: "md", color: "currentColor", className: A.p }),
        hasStarted: d,
        status: u,
        onEdit: n,
    });
}
