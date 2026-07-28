"use strict";
n.d(t, { l: () => c }), n(667532);
var i = n(627968),
    r = n(64700),
    a = n(17928),
    s = n(692617),
    l = n(548118),
    o = n(71393),
    d = n(967198);
function c(e) {
    let { guildIds: t, iconSize: n = 20, prioritizeSelectedGuild: c = !1, className: u } = e,
        _ = (0, a.bG)([d.A], () => (c ? d.A.getGuildId() : null), [c]),
        E = (0, a.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        A = (0, r.useMemo)(() => E.filter((e) => null != e), [E]),
        h = (0, r.useMemo)(() => {
            let e = [...A];
            if (null != _) {
                let t = e.findIndex((e) => e.id === _);
                t > 0 && (e.splice(t, 1), e.unshift(A[t]));
            }
            return e;
        }, [A, _]);
    return (0, i.jsx)(s.A, {
        className: u,
        guilds: h,
        maxGuilds: 3,
        size: (function (e) {
            switch (e) {
                case 16:
                    return l.Ay.Sizes.SMOL;
                case 24:
                    return l.Ay.Sizes.SMALLER;
                default:
                    return l.Ay.Sizes.MINI;
            }
        })(n),
        disableGuildNameTooltip: !0,
    });
}
