n.d(t, { IA: () => v, jB: () => E, qv: () => N, zf: () => T });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    s = n(397927),
    r = n(308528),
    o = n(736653),
    d = n(573648),
    c = n(780964),
    u = n(840065),
    g = n(562153),
    m = n(993401),
    x = n(652215),
    p = n(985018),
    f = n(308497);
let h = [
        () => p.intl.string(p.t.madJdE),
        () => p.intl.string(p.t.NYmfoP),
        () => p.intl.string(p.t.R2PaCg),
        () => p.intl.string(p.t.laSR8h),
        () => p.intl.string(p.t.DnsJE8),
    ],
    _ = [
        () => p.intl.string(p.t.nFSbeE),
        () => p.intl.string(p.t.gTcxOz),
        () => p.intl.string(p.t["8T0wYj"]),
        () => p.intl.string(p.t.BIHl1g),
        () => p.intl.string(p.t["jhBm0+"]),
    ],
    A = [
        () => p.intl.string(p.t.AyMGXA),
        () => p.intl.string(p.t.aAFW7V),
        (e) => p.intl.formatToPlainString(p.t.h2g0cM, { name: e }),
        () => p.intl.string(p.t.rrYh58),
        () => p.intl.string(p.t["HX3K+F"]),
        () => p.intl.string(p.t["/yW3aY"]),
        () => p.intl.string(p.t["PmL/v0"]),
        () => p.intl.string(p.t.IALa3h),
        () => p.intl.string(p.t.HRcTFL),
        () => p.intl.string(p.t.NuCqPt),
        () => p.intl.string(p.t["M1tw+4"]),
        () => p.intl.string(p.t.UBm1y2),
        () => p.intl.string(p.t.Cu95PQ),
        () => p.intl.string(p.t["R/wFuh"]),
        () => p.intl.string(p.t.HQPAVT),
        () => p.intl.string(p.t.YolGh4),
    ],
    I = [
        x.fg2.STEAM,
        x.fg2.PLAYSTATION,
        x.fg2.XBOX,
        x.fg2.TWITCH,
        x.fg2.BATTLENET,
        x.fg2.LEAGUE_OF_LEGENDS,
        x.fg2.EPIC_GAMES,
        x.fg2.RIOT_GAMES,
        x.fg2.ROBLOX,
        x.fg2.SPOTIFY,
        x.fg2.YOUTUBE,
        x.fg2.CRUNCHYROLL,
        x.fg2.BUNGIE,
    ];
function j(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, i.jsxs)("div", {
        className: f.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: f.FS,
                children: [
                    (0, i.jsx)(s.Heading, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(s.Text, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function v() {
    let e = p.intl.string(p.t.RnD2yZ),
        [t] = l.useState(() => ((0, a.sample)(h) ?? h[0])());
    return (0, i.jsx)(j, { heading: e, bodyText: t });
}
function E() {
    let e = p.intl.string(p.t.bFgqYJ),
        [t] = l.useState(() => ((0, a.sample)(_) ?? _[0])());
    return (0, i.jsx)(j, { heading: e, bodyText: t });
}
function T(e) {
    let { user: t, guildId: n, channelId: o, onClose: d } = e,
        c = g.Ay.getName(n, o, t),
        u = p.intl.formatToPlainString(p.t.sjSitP, { name: c }),
        [x] = l.useState(() => ((0, a.sample)(A) ?? A[0])(c)),
        h = l.useCallback(() => {
            r.A.openPrivateChannel({ recipientIds: t.id }), d?.();
        }, [t.id, d]);
    return (0, i.jsx)(j, {
        heading: u,
        bodyText: x,
        children: (0, i.jsx)("div", {
            className: f.v0,
            children: (0, i.jsx)(m.FD, { icon: s.oyn, text: p.intl.string(p.t["g33r/P"]), onClick: h }),
        }),
    });
}
function b() {
    let e = (0, o.Ay)();
    return (0, i.jsx)("div", {
        className: f.HU,
        children: I.map((t, n) => {
            let l = d.A.get(t);
            if (null == l) return null;
            let a = (0, s.Mwr)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: a, alt: l.name, className: f.gj }, n);
        }),
    });
}
function N(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            t?.(), (0, u.openUserSettings)(c.X.CONNECTIONS_PANEL);
        }, [t]),
        a = l.useCallback(() => {
            t?.(), (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB);
        }, [t]);
    return (0, i.jsxs)(j, {
        heading: p.intl.string(p.t.VB6LWY),
        bodyText: p.intl.string(p.t.KpjsU9),
        children: [
            (0, i.jsx)(b, {}),
            (0, i.jsxs)("div", {
                className: f.v0,
                children: [
                    (0, i.jsx)(m.FD, { text: p.intl.string(p.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(m.FD, { text: p.intl.string(p.t.GTCx0p), onClick: a }),
                ],
            }),
        ],
    });
}
