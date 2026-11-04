l(667532);
var i = l(477900),
    t = l(582128),
    n = l(855986),
    d = l(692617),
    a = l(682163),
    u = l(71393),
    r = l(967198);
l.d(
    s,
    {},
    {
        l: function (e) {
            let { guildIds: s, iconSize: l = 20, prioritizeSelectedGuild: c = !1, className: o } = e,
                m = (0, n.bG)([r.A], () => (c ? r.A.getGuildId() : null), [c]),
                h = (0, n.yK)([u.A], () => s.map((e) => u.A.getGuild(e)), [s]),
                x = (0, t.useMemo)(() => h.filter((e) => null != e), [h]),
                A = (0, t.useMemo)(() => {
                    let e = [...x];
                    if (null != m) {
                        let s = e.findIndex((e) => e.id === m);
                        s > 0 && (e.splice(s, 1), e.unshift(x[s]));
                    }
                    return e;
                }, [x, m]);
            return (0, i.jsx)(d.A, {
                className: o,
                guilds: A,
                maxGuilds: 3,
                size: (function (e) {
                    switch (e) {
                        case 16:
                            return a.Ay.Sizes.SMOL;
                        case 24:
                            return a.Ay.Sizes.SMALLER;
                        default:
                            return a.Ay.Sizes.MINI;
                    }
                })(l),
                disableGuildNameTooltip: !0,
            });
        },
    },
);
