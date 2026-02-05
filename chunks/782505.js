n.d(t, { IA: () => v, jB: () => T, qv: () => y, zf: () => E });
var i = n(627968),
    l = n(64700),
    a = n(735438),
    r = n(397927),
    s = n(308528),
    o = n(736653),
    d = n(573648),
    c = n(780964),
    u = n(840065),
    g = n(562153),
    m = n(993401),
    x = n(652215),
    f = n(985018),
    h = n(308497);
let p = [
        () => f.intl.string(f.t.madJdE),
        () => f.intl.string(f.t.NYmfoP),
        () => f.intl.string(f.t.R2PaCg),
        () => f.intl.string(f.t.laSR8h),
        () => f.intl.string(f.t.DnsJE8),
    ],
    _ = [
        () => f.intl.string(f.t.nFSbeE),
        () => f.intl.string(f.t.gTcxOz),
        () => f.intl.string(f.t["8T0wYj"]),
        () => f.intl.string(f.t.BIHl1g),
        () => f.intl.string(f.t["jhBm0+"]),
    ],
    A = [
        () => f.intl.string(f.t.AyMGXA),
        () => f.intl.string(f.t.aAFW7V),
        (e) => f.intl.formatToPlainString(f.t.h2g0cM, { name: e }),
        () => f.intl.string(f.t.rrYh58),
        () => f.intl.string(f.t["HX3K+F"]),
        () => f.intl.string(f.t["/yW3aY"]),
        () => f.intl.string(f.t["PmL/v0"]),
        () => f.intl.string(f.t.IALa3h),
        () => f.intl.string(f.t.HRcTFL),
        () => f.intl.string(f.t.NuCqPt),
        () => f.intl.string(f.t["M1tw+4"]),
        () => f.intl.string(f.t.UBm1y2),
        () => f.intl.string(f.t.Cu95PQ),
        () => f.intl.string(f.t["R/wFuh"]),
        () => f.intl.string(f.t.HQPAVT),
        () => f.intl.string(f.t.YolGh4),
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
        className: h.Ie,
        children: [
            (0, i.jsxs)("div", {
                className: h.FS,
                children: [
                    (0, i.jsx)(r.Heading, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, i.jsx)(r.Text, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            }),
            l,
        ],
    });
}
function v() {
    let e = f.intl.string(f.t.RnD2yZ),
        [t] = l.useState(() => ((0, a.sample)(p) ?? p[0])());
    return (0, i.jsx)(j, { heading: e, bodyText: t });
}
function T() {
    let e = f.intl.string(f.t.bFgqYJ),
        [t] = l.useState(() => ((0, a.sample)(_) ?? _[0])());
    return (0, i.jsx)(j, { heading: e, bodyText: t });
}
function E(e) {
    let { user: t, guildId: n, channelId: o, onClose: d } = e,
        c = g.Ay.getName(n, o, t),
        u = f.intl.formatToPlainString(f.t.sjSitP, { name: c }),
        [x] = l.useState(() => ((0, a.sample)(A) ?? A[0])(c)),
        p = l.useCallback(() => {
            s.A.openPrivateChannel({ recipientIds: t.id }), d?.();
        }, [t.id, d]);
    return (0, i.jsx)(j, {
        heading: u,
        bodyText: x,
        children: (0, i.jsx)("div", {
            className: h.v0,
            children: (0, i.jsx)(m.FD, { icon: r.oyn, text: f.intl.string(f.t["g33r/P"]), onClick: p }),
        }),
    });
}
function b() {
    let e = (0, o.Ay)();
    return (0, i.jsx)("div", {
        className: h.HU,
        children: I.map((t, n) => {
            let l = d.A.get(t);
            if (null == l) return null;
            let a = (0, r.Mwr)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, i.jsx)("img", { src: a, alt: l.name, className: h.gj }, n);
        }),
    });
}
function y(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            t?.(), (0, u.openUserSettings)(c.X.CONNECTIONS_PANEL, { section: x.nc_.CONNECTIONS });
        }, [t]),
        a = l.useCallback(() => {
            t?.(),
                (0, u.openUserSettings)(c.X.CONTENT_AND_SOCIAL_PANEL, {
                    section: x.nc_.CONTENT_AND_SOCIAL,
                    subsection: "CONNECTED_GAMES",
                });
        }, [t]);
    return (0, i.jsxs)(j, {
        heading: f.intl.string(f.t.VB6LWY),
        bodyText: f.intl.string(f.t.KpjsU9),
        children: [
            (0, i.jsx)(b, {}),
            (0, i.jsxs)("div", {
                className: h.v0,
                children: [
                    (0, i.jsx)(m.FD, { text: f.intl.string(f.t["/Hl24U"]), onClick: n }),
                    (0, i.jsx)(m.FD, { text: f.intl.string(f.t.GTCx0p), onClick: a }),
                ],
            }),
        ],
    });
}
