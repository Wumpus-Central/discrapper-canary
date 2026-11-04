n(667532);
var l = n(582128),
    i = n(164636),
    r = n(576705),
    s = n(711014),
    a = n(287809),
    o = n(879610);
n(652215);
var u = n(818348);
n.d(
    t,
    {},
    {
        Y: function (e, t) {
            let n = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
                c = e?.guild_id ?? "",
                d = (0, i.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
                h = (0, i.bG)([r.A], () => null == e || null == e.guild_id || r.A.can(u.xB.USE_EXTERNAL_SOUNDS, e));
            return l.useMemo(() => {
                if ((o.Ay.canUseSoundboardEverywhere(n) || !t) && h) {
                    let e = "" !== c,
                        t = e ? d.filter((e) => e !== c) : d;
                    return (e && t.unshift(c), t);
                }
                return [c];
            }, [n, t, c, d, h]);
        },
    },
);
