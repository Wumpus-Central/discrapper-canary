i(667532);
var l = i(477900),
    t = i(582128),
    n = i(855986),
    d = i(692617),
    a = i(682163),
    r = i(71393),
    u = i(967198);
i.d(
    s,
    {},
    {
        l: function (e) {
            let { guildIds: s, iconSize: i = 20, prioritizeSelectedGuild: c = !1, className: o } = e,
                m = (0, n.bG)([u.A], () => (c ? u.A.getGuildId() : null), [c]),
                h = (0, n.yK)([r.A], () => s.map((e) => r.A.getGuild(e)), [s]),
                x = (0, t.useMemo)(() => h.filter((e) => null != e), [h]),
                A = (0, t.useMemo)(() => {
                    let e = [...x];
                    if (null != m) {
                        let s = e.findIndex((e) => e.id === m);
                        s > 0 && (e.splice(s, 1), e.unshift(x[s]));
                    }
                    return e;
                }, [x, m]);
            return (0, l.jsx)(d.A, {
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
                })(i),
                disableGuildNameTooltip: !0,
            });
        },
    },
);
