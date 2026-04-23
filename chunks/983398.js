n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(834730),
    o = n(827734),
    d = n(104510),
    u = n(210273),
    c = n(998418),
    _ = n(890942),
    m = n(722523),
    p = n(634925),
    A = n(744201),
    x = n(867060),
    g = n(568065),
    f = n(652215),
    h = n(508155),
    v = n(853513),
    E = n(985018),
    S = n(989177),
    I = n(31823);
function b(e) {
    let t,
        { active: n, nextActive: i, position: l } = e;
    return (
        (t = n && !1 !== i ? g.z0.FULL : n && !1 === i ? g.z0.HALF : g.z0.NONE),
        (0, r.jsxs)("div", {
            className: I.progressContainer,
            children: [
                (0, r.jsx)("div", { className: s()(I.progress, I[l], I[t]) }),
                (0, r.jsx)("div", {
                    className: s()(I.boostContainer, S.JD, { [I.boostContainerActive]: n, [S.vu]: n }),
                    children: (0, r.jsx)(d._, { size: "sm", color: o.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function j(e) {
    let { isActive: t, index: n } = e,
        { textColor: l, iconColor: s } = (0, A.A)(t),
        o = i.useMemo(() => {
            let e = h.t[n];
            if (null == e) return [];
            let t = e.tier === f.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let i = (0, u.X)(e.perkIcon);
                return (0, r.jsxs)(
                    "div",
                    {
                        className: I.perkRow,
                        children: [
                            (0, r.jsx)(i, { color: s, size: "sm" }),
                            (0, r.jsx)(a.E, {
                                className: I.perkText,
                                color: l,
                                variant: "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${n}-${t}`,
                );
            });
        }, [n, s, l]);
    return (0, r.jsxs)("div", {
        className: I.perkRowContainer,
        children: [
            o,
            (0, r.jsx)("div", {
                className: I.perkRow,
                children: (0, r.jsx)(a.E, {
                    color: l,
                    variant: "text-sm/medium",
                    children: E.intl.string(v.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function C(e) {
    let t,
        { guildId: n, index: l, powerup: s, nextPowerup: a } = e,
        o = (0, c.Ay)(n, s),
        d = (0, c.Ay)(n, a),
        u = o.type !== g.b_.INACTIVE,
        f = d.type !== g.b_.INACTIVE,
        h = o.type === g.b_.TIER_OVERRIDE_ACTIVATED,
        [v, E] = i.useState(void 0);
    (0, x.A)(v), (t = 0 === l ? g.At.START : null == a ? g.At.END : g.At.MIDDLE);
    let { textColor: S } = (0, A.A)(u);
    return (0, r.jsxs)(p.h, {
        guildId: n,
        powerup: s,
        className: I.card,
        children: [
            (0, r.jsx)(b, { position: t, active: u, nextActive: null != a ? f : void 0 }),
            (0, r.jsx)(_.Ft, {
                title: s.title,
                textColor: S,
                footer: !h && (0, r.jsx)(p.A, { className: I.footer, guildId: n, powerup: s }),
                children: (0, r.jsx)(j, { isActive: u, index: l }),
            }),
            !h && (0, r.jsx)(_.kd, { children: (0, r.jsx)(m.Ay, { guildId: n, powerup: s, onError: E }) }),
        ],
    });
}
