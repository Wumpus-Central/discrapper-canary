i.d(t, { IA: () => b, jB: () => w, qv: () => C, zf: () => N });
var n = i(627968),
    l = i(64700),
    s = i(735438),
    a = i(534514),
    r = i(834730),
    d = i(534890),
    o = i(366010),
    c = i(308528),
    u = i(736653),
    g = i(573648),
    m = i(780964),
    h = i(858897),
    x = i(562153),
    p = i(993401),
    A = i(652215),
    j = i(985018),
    f = i(732306);
let I = [
        () => j.intl.string(j.t.madJdE),
        () => j.intl.string(j.t.NYmfoP),
        () => j.intl.string(j.t.R2PaCg),
        () => j.intl.string(j.t.laSR8h),
        () => j.intl.string(j.t.DnsJE8),
    ],
    v = [
        () => j.intl.string(j.t.nFSbeE),
        () => j.intl.string(j.t.gTcxOz),
        () => j.intl.string(j.t["8T0wYj"]),
        () => j.intl.string(j.t.BIHl1g),
        () => j.intl.string(j.t["jhBm0+"]),
    ],
    S = [
        () => j.intl.string(j.t.AyMGXA),
        () => j.intl.string(j.t.aAFW7V),
        (e) => j.intl.formatToPlainString(j.t.h2g0cM, { name: e }),
        () => j.intl.string(j.t.rrYh58),
        () => j.intl.string(j.t["HX3K+F"]),
        () => j.intl.string(j.t["/yW3aY"]),
        () => j.intl.string(j.t["PmL/v0"]),
        () => j.intl.string(j.t.IALa3h),
        () => j.intl.string(j.t.HRcTFL),
        () => j.intl.string(j.t.NuCqPt),
        () => j.intl.string(j.t["M1tw+4"]),
        () => j.intl.string(j.t.UBm1y2),
        () => j.intl.string(j.t.Cu95PQ),
        () => j.intl.string(j.t["R/wFuh"]),
        () => j.intl.string(j.t.HQPAVT),
        () => j.intl.string(j.t.YolGh4),
    ],
    E = [
        A.fg2.STEAM,
        A.fg2.PLAYSTATION,
        A.fg2.XBOX,
        A.fg2.TWITCH,
        A.fg2.BATTLENET,
        A.fg2.LEAGUE_OF_LEGENDS,
        A.fg2.EPIC_GAMES,
        A.fg2.RIOT_GAMES,
        A.fg2.ROBLOX,
        A.fg2.SPOTIFY,
        A.fg2.YOUTUBE,
        A.fg2.CRUNCHYROLL,
        A.fg2.BUNGIE,
    ];
function y(e) {
    let { heading: t, bodyText: i, children: l } = e;
    return (0, n.jsxs)("div", {
        className: f.Ie,
        children: [
            (0, n.jsxs)("div", {
                className: f.FS,
                children: [
                    (0, n.jsx)(a.D, { variant: "heading-md/medium", color: "text-strong", children: t }),
                    (0, n.jsx)(r.E, { variant: "text-sm/normal", color: "text-default", children: i }),
                ],
            }),
            l,
        ],
    });
}
function b() {
    let e = j.intl.string(j.t.RnD2yZ),
        [t] = l.useState(() => ((0, s.sample)(I) ?? I[0])());
    return (0, n.jsx)(y, { heading: e, bodyText: t });
}
function w() {
    let e = j.intl.string(j.t.bFgqYJ),
        [t] = l.useState(() => ((0, s.sample)(v) ?? v[0])());
    return (0, n.jsx)(y, { heading: e, bodyText: t });
}
function N(e) {
    let { user: t, guildId: i, channelId: a, onClose: r } = e,
        o = x.Ay.getName(i, a, t),
        u = j.intl.formatToPlainString(j.t.sjSitP, { name: o }),
        [g] = l.useState(() => ((0, s.sample)(S) ?? S[0])(o)),
        m = l.useCallback(() => {
            c.A.openPrivateChannel({ recipientIds: t.id }), r?.();
        }, [t.id, r]);
    return (0, n.jsx)(y, {
        heading: u,
        bodyText: g,
        children: (0, n.jsx)("div", {
            className: f.v0,
            children: (0, n.jsx)(p.FD, { icon: d.o, text: j.intl.string(j.t["g33r/P"]), onClick: m }),
        }),
    });
}
function T() {
    let e = (0, u.Ay)();
    return (0, n.jsx)("div", {
        className: f.HU,
        children: E.map((t, i) => {
            let l = g.A.get(t);
            if (null == l) return null;
            let s = (0, o.M)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, n.jsx)("img", { src: s, alt: l.name, className: f.gj }, i);
        }),
    });
}
function C(e) {
    let { onClose: t } = e,
        i = l.useCallback(() => {
            t?.(), (0, h.openUserSettings)(m.X.CONNECTIONS_PANEL);
        }, [t]),
        s = l.useCallback(() => {
            t?.(), (0, h.openUserSettings)(m.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_TAB);
        }, [t]);
    return (0, n.jsxs)(y, {
        heading: j.intl.string(j.t.VB6LWY),
        bodyText: j.intl.string(j.t.KpjsU9),
        children: [
            (0, n.jsx)(T, {}),
            (0, n.jsxs)("div", {
                className: f.v0,
                children: [
                    (0, n.jsx)(p.FD, { text: j.intl.string(j.t["/Hl24U"]), onClick: i }),
                    (0, n.jsx)(p.FD, { text: j.intl.string(j.t.GTCx0p), onClick: s }),
                ],
            }),
        ],
    });
}
