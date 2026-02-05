n.d(t, { A: () => w });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    o = n(158954),
    a = n(827734),
    u = n(397927),
    d = n(210273),
    c = n(998418),
    p = n(890942),
    m = n(722523),
    A = n(634925),
    _ = n(744201),
    g = n(867060),
    f = n(568065),
    x = n(652215),
    h = n(508155),
    v = n(333354),
    j = n(985018),
    b = n(876380),
    E = n(206188);
function I(e) {
    let t,
        { active: n, nextActive: l, position: i } = e;
    return (
        (t = n && !1 !== l ? f.z0.FULL : n && !1 === l ? f.z0.HALF : f.z0.NONE),
        (0, r.jsxs)("div", {
            className: E.progressContainer,
            children: [
                (0, r.jsx)("div", { className: s()(E.progress, E[i], E[t]) }),
                (0, r.jsx)("div", {
                    className: s()(E.boostContainer, b.JD, { [E.boostContainerActive]: n, [b.vu]: n }),
                    children: (0, r.jsx)(u._Jp, { size: "sm", color: a.A.colors.ICON_STRONG }),
                }),
            ],
        })
    );
}
function S(e) {
    let { isActive: t, index: n } = e,
        { textColor: i, iconColor: s } = (0, _.A)(t),
        a = l.useMemo(() => {
            let e = h.t[n];
            if (null == e) return [];
            let t = e.tier === x.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return t?.map((e, t) => {
                let l = (0, d.X)(e.perkIcon);
                return (0, r.jsxs)(
                    "div",
                    {
                        className: E.perkRow,
                        children: [
                            (0, r.jsx)(l, { color: s, size: "sm" }),
                            (0, r.jsx)(o.EYj, {
                                className: E.perkText,
                                color: i,
                                variant: "text-sm/medium",
                                children: e.getCopy(),
                            }),
                        ],
                    },
                    `perk-${n}-${t}`,
                );
            });
        }, [n, s, i]);
    return (0, r.jsxs)("div", {
        className: E.perkRowContainer,
        children: [
            a,
            (0, r.jsx)("div", {
                className: E.perkRow,
                children: (0, r.jsx)(o.EYj, {
                    color: i,
                    variant: "text-sm/medium",
                    children: j.intl.string(v.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function w(e) {
    let t,
        { guildId: n, index: i, powerup: s, nextPowerup: o } = e,
        a = (0, c.Ay)(n, s),
        u = (0, c.Ay)(n, o),
        d = a.type !== f.b_.INACTIVE,
        x = u.type !== f.b_.INACTIVE,
        h = a.type === f.b_.TIER_OVERRIDE_ACTIVATED,
        [v, j] = l.useState(void 0);
    (0, g.A)(v), (t = 0 === i ? f.At.START : null == o ? f.At.END : f.At.MIDDLE);
    let { textColor: b } = (0, _.A)(d);
    return (0, r.jsxs)(A.h, {
        guildId: n,
        powerup: s,
        className: E.card,
        children: [
            (0, r.jsx)(I, { position: t, active: d, nextActive: null != o ? x : void 0 }),
            (0, r.jsx)(p.Ft, {
                title: s.title,
                textColor: b,
                footer: !h && (0, r.jsx)(A.A, { className: E.footer, guildId: n, powerup: s }),
                children: (0, r.jsx)(S, { isActive: d, index: i }),
            }),
            !h && (0, r.jsx)(p.kd, { children: (0, r.jsx)(m.Ay, { guildId: n, powerup: s, onError: j }) }),
        ],
    });
}
