n.d(t, { l: () => A }), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(17928),
    r = n(834730),
    a = n(573435),
    o = n(71393),
    d = n(967198),
    c = n(743790),
    u = n(340879);
function h(e) {
    let { children: t, iconSize: n } = e;
    return (0, i.jsx)(a.Ay, { className: u.Iu, mask: a.Ay.Masks.SQUIRCLE, width: n + 5, height: n + 5, children: t });
}
function A(e) {
    let { guildIds: t, iconSize: n = 20, prioritizeSelectedGuild: a = !1 } = e,
        A = (0, s.bG)([d.A], () => (a ? d.A.getGuildId() : null), [a]),
        _ = (0, s.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        g = (0, l.useMemo)(() => _.filter((e) => null != e), [_]),
        { visibleGuilds: m, numTruncated: p } = (0, l.useMemo)(() => {
            let e = [...g];
            if (null != A) {
                let t = e.findIndex((e) => e.id === A);
                t > 0 && (e.splice(t, 1), e.unshift(g[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [g, A]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [
            m.map((e) => (0, i.jsx)(h, { iconSize: n, children: (0, i.jsx)(c.K, { guild: e, size: n }) }, e.id)),
            p > 0 &&
                (0, i.jsx)(h, {
                    iconSize: n,
                    children: (0, i.jsxs)(r.E, {
                        className: u.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", p],
                    }),
                }),
        ],
    });
}
