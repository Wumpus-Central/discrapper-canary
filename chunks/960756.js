n.d(t, {
    $i: () => v,
    aV: () => E,
    bW: () => A,
    gE: () => y,
    n5: () => O,
}),
    n(228524),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(591552),
    c = n(961973),
    o = n(374084),
    d = n(352821),
    u = n(199940),
    f = n(132514),
    g = n(949034),
    b = n(259866),
    m = n(539916),
    p = n(985018),
    x = n(818110);

function h(e) {
    let t,
        { title: n, description: i, icon: l, hasStarted: a, status: c, onEdit: o, extra: d } = e;
    switch (c) {
        case "good":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.A9s, {
                        size: "xs",
                        color: "currentColor",
                        className: x.AI,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "status-positive",
                        className: x.qS,
                        children: p.intl.string(p.t.rPnzRf),
                    }),
                ],
            });
            break;
        case "warning":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.EpV, {
                        size: "xs",
                        color: "currentColor",
                        className: x.$e,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "status-warning",
                        className: x.qS,
                        children: p.intl.string(p.t["yTa+di"]),
                    }),
                ],
            });
            break;
        case "required":
            t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(s.EpV, {
                        size: "xs",
                        color: "currentColor",
                        className: x.OR,
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: "text-xs/semibold",
                        color: "text-feedback-critical",
                        className: x.qS,
                        children: p.intl.string(p.t.EkokLy),
                    }),
                ],
            });
    }
    return (0, r.jsxs)("div", {
        className: x.jB,
        children: [
            (0, r.jsxs)("div", {
                className: x.jA,
                children: [
                    (0, r.jsx)("div", {
                        className: x.zc,
                        children: l,
                    }),
                    (0, r.jsxs)("div", {
                        className: x.FE,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-md/semibold",
                                children: n,
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: a && "required" === c ? "text-feedback-critical" : "text-default",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: x.Ib,
                children: [
                    t,
                    d,
                    (0, r.jsx)("div", {
                        className: x.lO,
                        children: a
                            ? (0, r.jsx)(s.Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: o,
                                  text: p.intl.string(p.t.bt75uw),
                              })
                            : (0, r.jsx)(s.Button, {
                                  icon: s.EdP,
                                  iconPosition: "end",
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: o,
                                  text: p.intl.string(p.t["0GWElc"]),
                              }),
                    }),
                ],
            }),
        ],
    });
}

function j(e) {
    let t = (0, l.bG)([a.A], () => a.A.getDefaultChannelIds(e)),
        n = i.useMemo(() => new Set(t), [t]),
        [r] = (0, c.tb)(e, n);
    return r.length >= m.Kd;
}

function O(e) {
    let t = j(e),
        n = (0, b.Mj)(e);
    return t || n;
}

function y(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: o } = e,
        d = (0, l.yK)([a.A], () => a.A.getDefaultChannelIds(t)),
        u = (0, l.bG)([a.A], () => (0, c.G4)(t, a.A.getDefaultChannelIds(t), a.A.getOnboardingPrompts(t)).length),
        f = i.useMemo(() => new Set(d), [d]),
        [, g] = (0, c.tb)(t, f),
        O = g.length,
        y = j(t),
        v = (0, b.Mj)(t),
        A = (0, l.bG)([a.A], () => a.A.isAdvancedMode(t)),
        E = A
            ? p.intl.formatToPlainString(p.t.nHwnLK, {
                  numDefaultChannels: O,
                  numFromQuestions: u - O,
              })
            : y
              ? p.intl.formatToPlainString(p.t.HxEwSv, {
                    numDefaultChannels: O,
                })
              : p.intl.formatToPlainString(p.t.vPwmA0, {
                    numChattableChannels: m.Kd,
                });
    return (0, r.jsx)(h, {
        title: A ? p.intl.string(p.t.YZookV) : p.intl.string(p.t["4GSygh"]),
        description: E,
        icon: (0, r.jsx)(s.N$i, {
            size: "md",
            color: "currentColor",
            className: x.p,
        }),
        hasStarted: O > 0 || A,
        status: y || v ? (o ? "none" : "good") : "required",
        onEdit: n,
    });
}

function v(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        o = (0, l.yK)([a.A], () => a.A.getDefaultChannelIds(t)),
        d = (0, l.yK)([a.A], () => a.A.getOnboardingPrompts(t)),
        u = d.length,
        [f, g] = (0, c.Lx)(t, d, o),
        b = f.length,
        m = f.length + g.length,
        j = (b / m) * 100,
        O = (0, l.bG)([a.A], () => a.A.isAdvancedMode(t)),
        y = u > 0,
        v = "none";
    return (
        y && (j >= 85 && !i ? (v = "good") : j < 85 && (v = "warning")),
        (0, r.jsx)(h, {
            title: O ? p.intl.string(p.t.AGjtFv) : p.intl.string(p.t.dqCzoT),
            description: p.intl.format(p.t.iuNisr, {
                numChannels: b,
                numTotalChannels: m,
                channelsHook: (e, t) =>
                    (0, r.jsx)(
                        "span",
                        {
                            style: {
                                color: j > 85 ? "var(--text-strong)" : "var(--status-warning)",
                            },
                            children: e,
                        },
                        t,
                    ),
            }),
            icon: (0, r.jsx)(s.$yI, {
                size: "md",
                color: "currentColor",
                className: x.p,
            }),
            hasStarted: y,
            status: v,
            onEdit: n,
        })
    );
}

function A(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: c } = e,
        d = (0, l.bG)([f.A], () => f.A.getSettings()),
        g = (0, l.bG)([a.A], () => a.A.getEnabled(t)),
        b = (0, o.Ic)(d),
        m = d.enabled,
        j = i.useCallback(() => {
            (0, u.UP)(t, !m);
        }, [t, m]),
        O = !(0, o.jJ)(d),
        y = "none";
    O && (b && !c ? (y = "good") : b || (y = "required"));
    let v = p.intl.string(p.t.GMOwOD);
    b ? O || (v = p.intl.string(p.t.wHOoyE)) : (v = p.intl.string(p.t.wXFbgZ));
    let A = null;
    return (
        O &&
            g &&
            (A = (0, r.jsx)("div", {
                className: x.WW,
                children: (0, r.jsx)(s.dOG, {
                    checked: m,
                    onChange: j,
                    disabled: !b,
                }),
            })),
        (0, r.jsx)(h, {
            title: p.intl.string(p.t.mRHqsj),
            description: v,
            icon: (0, r.jsx)(s.Zf8, {
                size: "md",
                color: "currentColor",
                className: x.p,
            }),
            hasStarted: O,
            status: y,
            onEdit: n,
            extra: A,
        })
    );
}

function E(e) {
    let { guildId: t, onEdit: n, disableGoodStatus: i } = e,
        { enabled: a } = g.A.useExperiment(
            {
                guildId: t,
                location: "guild_settings",
            },
            {
                autoTrackExposure: !0,
            },
        ),
        c = (0, l.yK)([d.A], () => d.A.getEditedConnections());
    if (!a) return null;
    let o = c.length > 0,
        u = "none";
    o && !i && (u = "good");
    let f = o
        ? p.intl.format(p.t["9swnQZ"], {
              count: c.length,
          })
        : p.intl.string(p.t["3d3Cd5"]);
    return (0, r.jsx)(h, {
        title: p.intl.string(p.t.oL60eW),
        description: f,
        icon: (0, r.jsx)(s.qYV, {
            size: "md",
            color: "currentColor",
            className: x.p,
        }),
        hasStarted: o,
        status: u,
        onEdit: n,
    });
}
