n.d(t, { l: () => u }), n(667532);
var i = n(627968),
    a = n(64700),
    r = n(17928),
    s = n(834730),
    l = n(573435),
    o = n(71393),
    d = n(967198),
    c = n(743790),
    _ = n(340879);
function E(e) {
    let { children: t, iconSize: n } = e;
    return (0, i.jsx)(l.Ay, { className: _.Iu, mask: l.Ay.Masks.SQUIRCLE, width: n + 5, height: n + 5, children: t });
}
function u(e) {
    let { guildIds: t, iconSize: n = 20, prioritizeSelectedGuild: l = !1 } = e,
        u = (0, r.bG)([d.A], () => (l ? d.A.getGuildId() : null), [l]),
        A = (0, r.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        I = (0, a.useMemo)(() => A.filter((e) => null != e), [A]),
        { visibleGuilds: T, numTruncated: h } = (0, a.useMemo)(() => {
            let e = [...I];
            if (null != u) {
                let t = e.findIndex((e) => e.id === u);
                t > 0 && (e.splice(t, 1), e.unshift(I[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [I, u]);
    return (0, i.jsxs)("div", {
        className: _.WM,
        children: [
            T.map((e) => (0, i.jsx)(E, { iconSize: n, children: (0, i.jsx)(c.K, { guild: e, size: n }) }, e.id)),
            h > 0 &&
                (0, i.jsx)(E, {
                    iconSize: n,
                    children: (0, i.jsxs)(s.E, {
                        className: _.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", h],
                    }),
                }),
        ],
    });
}
