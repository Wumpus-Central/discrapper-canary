"use strict";
n.d(t, { l: () => E }), n(667532);
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(834730),
    l = n(573435),
    o = n(71393),
    d = n(967198),
    c = n(743790),
    u = n(340879);
function _(e) {
    let { children: t, iconSize: n } = e;
    return (0, i.jsx)(l.Ay, { className: u.Iu, mask: l.Ay.Masks.SQUIRCLE, width: n + 5, height: n + 5, children: t });
}
function E(e) {
    let { guildIds: t, iconSize: n = 20, prioritizeSelectedGuild: l = !1 } = e,
        E = (0, a.bG)([d.A], () => (l ? d.A.getGuildId() : null), [l]),
        A = (0, a.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        h = (0, r.useMemo)(() => A.filter((e) => null != e), [A]),
        { visibleGuilds: I, numTruncated: f } = (0, r.useMemo)(() => {
            let e = [...h];
            if (null != E) {
                let t = e.findIndex((e) => e.id === E);
                t > 0 && (e.splice(t, 1), e.unshift(h[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [h, E]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [
            I.map((e) => (0, i.jsx)(_, { iconSize: n, children: (0, i.jsx)(c.K, { guild: e, size: n }) }, e.id)),
            f > 0 &&
                (0, i.jsx)(_, {
                    iconSize: n,
                    children: (0, i.jsxs)(s.E, {
                        className: u.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", f],
                    }),
                }),
        ],
    });
}
