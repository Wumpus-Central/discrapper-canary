i.d(s, { l: () => h }), i(667532);
var l = i(627968),
    t = i(64700),
    n = i(17928),
    d = i(834730),
    c = i(573435),
    a = i(71393),
    r = i(967198),
    u = i(743790),
    m = i(340879);
function o(e) {
    let { children: s, iconSize: i } = e;
    return (0, l.jsx)(c.Ay, { className: m.Iu, mask: c.Ay.Masks.SQUIRCLE, width: i + 5, height: i + 5, children: s });
}
function h(e) {
    let { guildIds: s, iconSize: i = 20, prioritizeSelectedGuild: c = !1 } = e,
        h = (0, n.bG)([r.A], () => (c ? r.A.getGuildId() : null), [c]),
        x = (0, n.yK)([a.A], () => s.map((e) => a.A.getGuild(e)), [s]),
        j = (0, t.useMemo)(() => x.filter((e) => null != e), [x]),
        { visibleGuilds: v, numTruncated: N } = (0, t.useMemo)(() => {
            let e = [...j];
            if (null != h) {
                let s = e.findIndex((e) => e.id === h);
                s > 0 && (e.splice(s, 1), e.unshift(j[s]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [j, h]);
    return (0, l.jsxs)("div", {
        className: m.WM,
        children: [
            v.map((e) => (0, l.jsx)(o, { iconSize: i, children: (0, l.jsx)(u.K, { guild: e, size: i }) }, e.id)),
            N > 0 &&
                (0, l.jsx)(o, {
                    iconSize: i,
                    children: (0, l.jsxs)(d.E, {
                        className: m.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", N],
                    }),
                }),
        ],
    });
}
