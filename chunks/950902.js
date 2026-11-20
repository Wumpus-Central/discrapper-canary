var n = l(582128),
    a = l(435558),
    r = l(855986);
(l(47167), l(808728));
var i = l(71393);
(l(994500), l(351906), l(287809), l(562153), l(644968));
var s = l(260498),
    u = l(951178),
    o = l(246338),
    d = l(191850),
    c = l(792996);
function f(e) {
    return Array.isArray(e) ? e : "string" == typeof e && "" !== e ? [e] : [];
}
function m(e, t) {
    return (0, r.bG)([s.Ay], () => (0, o.Ux)(s.Ay.getProject(e), t), [t, e]);
}
let g = [];
l.d(
    t,
    {},
    {
        Sj: function (e, t, l) {
            let n = f(t);
            return 0 === n.length
                ? [...e]
                : [...n.map((t) => e.find((e) => e.id === t) ?? l(t)), ...e.filter((e) => !n.includes(e.id))];
        },
        TN: f,
        Tj: m,
        U5: function (e, t) {
            return t.length < 25 ? [...e] : e.map((e) => (t.includes(e.id) ? e : { ...e, disabled: !0 }));
        },
        v4: function (e, t) {
            let l = (0, r.bG)(
                    [s.Ay, i.A],
                    () => {
                        let t = s.Ay.getProject(e);
                        return null == t
                            ? g
                            : (0, u.Jr)(t).map((e) => ({
                                  guildId: e,
                                  name: i.A.getGuild(e)?.name ?? c.intl.string(d.default["6bhivN"]),
                              }));
                    },
                    [e],
                    a.isEqual,
                ),
                o = m(e, t),
                [f, p] = n.useState(null),
                v = [f, o].find((e) => null != e && l.some((t) => t.guildId === e));
            return { servers: l, serverId: v ?? l[0]?.guildId ?? null, setServerId: p };
        },
    },
);
