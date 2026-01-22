n.d(t, {
    IA: () => v,
    jB: () => A,
    qv: () => P,
    zf: () => w,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    a = n(397927),
    s = n(308528),
    o = n(736653),
    c = n(573648),
    u = n(780964),
    d = n(840065),
    f = n(562153),
    p = n(993401),
    b = n(652215),
    g = n(985018),
    m = n(308497);
let y = [
        () => g.intl.string(g.t.madJdE),
        () => g.intl.string(g.t.NYmfoP),
        () => g.intl.string(g.t.R2PaCg),
        () => g.intl.string(g.t.laSR8h),
        () => g.intl.string(g.t.DnsJE8),
    ],
    O = [
        () => g.intl.string(g.t.nFSbeE),
        () => g.intl.string(g.t.gTcxOz),
        () => g.intl.string(g.t["8T0wYj"]),
        () => g.intl.string(g.t.BIHl1g),
        () => g.intl.string(g.t["jhBm0+"]),
    ],
    j = [
        () => g.intl.string(g.t.AyMGXA),
        () => g.intl.string(g.t.aAFW7V),
        (e) => g.intl.formatToPlainString(g.t.h2g0cM, { name: e }),
        () => g.intl.string(g.t.rrYh58),
        () => g.intl.string(g.t["HX3K+F"]),
        () => g.intl.string(g.t["/yW3aY"]),
        () => g.intl.string(g.t["PmL/v0"]),
        () => g.intl.string(g.t.IALa3h),
        () => g.intl.string(g.t.HRcTFL),
        () => g.intl.string(g.t.NuCqPt),
        () => g.intl.string(g.t["M1tw+4"]),
        () => g.intl.string(g.t.UBm1y2),
        () => g.intl.string(g.t.Cu95PQ),
        () => g.intl.string(g.t["R/wFuh"]),
        () => g.intl.string(g.t.HQPAVT),
        () => g.intl.string(g.t.YolGh4),
    ],
    x = [
        b.fg2.STEAM,
        b.fg2.PLAYSTATION,
        b.fg2.XBOX,
        b.fg2.TWITCH,
        b.fg2.BATTLENET,
        b.fg2.LEAGUE_OF_LEGENDS,
        b.fg2.EPIC_GAMES,
        b.fg2.RIOT_GAMES,
        b.fg2.ROBLOX,
        b.fg2.SPOTIFY,
        b.fg2.YOUTUBE,
        b.fg2.CRUNCHYROLL,
        b.fg2.BUNGIE,
    ];
function h(e) {
    let { heading: t, bodyText: n, children: l } = e;
    return (0, r.jsxs)("div", {
        className: m.Ie,
        children: [
            (0, r.jsxs)("div", {
                className: m.FS,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/medium",
                        color: "text-strong",
                        children: t,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: n,
                    }),
                ],
            }),
            l,
        ],
    });
}
function v() {
    let e = g.intl.string(g.t.RnD2yZ),
        [t] = l.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(y)) ? e : y[0])();
        });
    return (0, r.jsx)(h, {
        heading: e,
        bodyText: t,
    });
}
function A() {
    let e = g.intl.string(g.t.bFgqYJ),
        [t] = l.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(O)) ? e : O[0])();
        });
    return (0, r.jsx)(h, {
        heading: e,
        bodyText: t,
    });
}
function w(e) {
    let { user: t, guildId: n, channelId: o, onClose: c } = e,
        u = f.Ay.getName(n, o, t),
        d = g.intl.formatToPlainString(g.t.sjSitP, { name: u }),
        [b] = l.useState(() => {
            var e;
            return (null != (e = (0, i.sample)(j)) ? e : j[0])(u);
        }),
        y = l.useCallback(() => {
            s.A.openPrivateChannel({ recipientIds: t.id }), null == c || c();
        }, [t.id, c]);
    return (0, r.jsx)(h, {
        heading: d,
        bodyText: b,
        children: (0, r.jsx)("div", {
            className: m.v0,
            children: (0, r.jsx)(p.FD, {
                icon: a.oyn,
                text: g.intl.string(g.t["g33r/P"]),
                onClick: y,
            }),
        }),
    });
}
function I() {
    let e = (0, o.Ay)();
    return (0, r.jsx)("div", {
        className: m.HU,
        children: x.map((t, n) => {
            let l = c.A.get(t);
            if (null == l) return null;
            let i = (0, a.Mwr)(e) ? l.icon.darkPNG : l.icon.lightPNG;
            return (0, r.jsx)(
                "img",
                {
                    src: i,
                    alt: l.name,
                    className: m.gj,
                },
                n,
            );
        }),
    });
}
function P(e) {
    let { onClose: t } = e,
        n = l.useCallback(() => {
            null == t || t(), (0, d.openUserSettings)(u.X.CONNECTIONS_PANEL, { section: b.nc_.CONNECTIONS });
        }, [t]),
        i = l.useCallback(() => {
            null == t || t(),
                (0, d.openUserSettings)(u.X.CONTENT_AND_SOCIAL_PANEL, {
                    section: b.nc_.CONTENT_AND_SOCIAL,
                    subsection: "CONNECTED_GAMES",
                });
        }, [t]);
    return (0, r.jsxs)(h, {
        heading: g.intl.string(g.t.VB6LWY),
        bodyText: g.intl.string(g.t.KpjsU9),
        children: [
            (0, r.jsx)(I, {}),
            (0, r.jsxs)("div", {
                className: m.v0,
                children: [
                    (0, r.jsx)(p.FD, {
                        text: g.intl.string(g.t["/Hl24U"]),
                        onClick: n,
                    }),
                    (0, r.jsx)(p.FD, {
                        text: g.intl.string(g.t.GTCx0p),
                        onClick: i,
                    }),
                ],
            }),
        ],
    });
}
