n.d(t, { K: () => d }), n(47120);
var r = n(192379),
    i = n(442837),
    a = n(158776),
    o = n(699516),
    l = n(9156),
    s = n(598062),
    c = n(231338);
function d(e) {
    let { location: t, user: n, privateChannel: d, forceHide: u = !1 } = e,
        _ = (0, s.DW)(t),
        m = (0, r.useMemo)(() => (null == n || null == n.nameplate ? null : n.nameplate), [n]),
        f = (0, i.e7)([a.Z], () => {
            if (null == n) return !1;
            let e = a.Z.getStatus(n.id);
            return !new Set([c.Sk.OFFLINE, c.Sk.INVISIBLE, c.Sk.UNKNOWN]).has(e);
        }),
        p = (0, i.e7)([l.ZP, o.Z], () => {
            if (null == d || !(null == d ? void 0 : d.isDM())) return !1;
            let e = l.ZP.isChannelMuted(d.getGuildId(), d.id),
                t = o.Z.isIgnored(d.getRecipientId()),
                n = o.Z.isBlocked(d.getRecipientId());
            return e || t || n;
        }),
        g = _ && null != m && f && !p && !u ? m : void 0,
        [v, h] = (0, r.useState)(g);
    return (
        (0, r.useEffect)(() => {
            let e = setTimeout(
                () => {
                    h(g);
                },
                f ? 100 : 1000
            );
            return () => clearTimeout(e);
        }, [g, f]),
        v
    );
}
