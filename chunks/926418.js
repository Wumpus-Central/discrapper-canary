t.d(s, { l: () => c }), t(667532);
var l = t(477900),
    i = t(582128),
    n = t(17928),
    a = t(692617),
    d = t(548118),
    u = t(71393),
    r = t(967198);
function c(e) {
    let { guildIds: s, iconSize: t = 20, prioritizeSelectedGuild: c = !1, className: m } = e,
        o = (0, n.bG)([r.A], () => (c ? r.A.getGuildId() : null), [c]),
        x = (0, n.yK)([u.A], () => s.map((e) => u.A.getGuild(e)), [s]),
        h = (0, i.useMemo)(() => x.filter((e) => null != e), [x]),
        A = (0, i.useMemo)(() => {
            let e = [...h];
            if (null != o) {
                let s = e.findIndex((e) => e.id === o);
                s > 0 && (e.splice(s, 1), e.unshift(h[s]));
            }
            return e;
        }, [h, o]);
    return (0, l.jsx)(a.A, {
        className: m,
        guilds: A,
        maxGuilds: 3,
        size: (function (e) {
            switch (e) {
                case 16:
                    return d.Ay.Sizes.SMOL;
                case 24:
                    return d.Ay.Sizes.SMALLER;
                default:
                    return d.Ay.Sizes.MINI;
            }
        })(t),
        disableGuildNameTooltip: !0,
    });
}
