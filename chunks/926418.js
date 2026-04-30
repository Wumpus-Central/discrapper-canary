"use strict";
n.d(t, { l: () => f }), n(667532);
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(834730),
    o = n(573435),
    l = n(71393),
    u = n(967198),
    c = n(743790),
    d = n(340879);
function _(e) {
    let { children: t, iconSize: n } = e;
    return (0, i.jsx)(o.Ay, { className: d.Iu, mask: o.Ay.Masks.SQUIRCLE, width: n + 5, height: n + 5, children: t });
}
function f(e) {
    let { guildIds: t, iconSize: n = 20, prioritizeSelectedGuild: o = !1 } = e,
        f = (0, s.bG)([u.A], () => (o ? u.A.getGuildId() : null), [o]),
        h = (0, s.yK)([l.A], () => t.map((e) => l.A.getGuild(e)), [t]),
        p = (0, r.useMemo)(() => h.filter((e) => null != e), [h]),
        { visibleGuilds: E, numTruncated: m } = (0, r.useMemo)(() => {
            let e = [...p];
            if (null != f) {
                let t = e.findIndex((e) => e.id === f);
                t > 0 && (e.splice(t, 1), e.unshift(p[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [p, f]);
    return (0, i.jsxs)("div", {
        className: d.WM,
        children: [
            E.map((e) => (0, i.jsx)(_, { iconSize: n, children: (0, i.jsx)(c.K, { guild: e, size: n }) }, e.id)),
            m > 0 &&
                (0, i.jsx)(_, {
                    iconSize: n,
                    children: (0, i.jsxs)(a.E, {
                        className: d.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", m],
                    }),
                }),
        ],
    });
}
