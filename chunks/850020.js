n.d(t, { K: () => u }), n(47120);
var r = n(192379),
    l = n(442837),
    i = n(158776),
    o = n(699516),
    a = n(9156),
    s = n(598062),
    c = n(231338);
function u(e) {
    let { location: t, user: n, privateChannel: u, forceHide: d = !1 } = e,
        p = (0, s.DW)(t),
        f = (0, r.useMemo)(() => (null == n || null == n.nameplate ? null : n.nameplate), [n]),
        m = (0, l.e7)([i.Z], () => {
            if (null == n) return !1;
            let e = i.Z.getStatus(n.id);
            return !new Set([c.Sk.OFFLINE, c.Sk.INVISIBLE, c.Sk.UNKNOWN]).has(e);
        }),
        g = (0, l.e7)([a.ZP, o.Z], () => {
            if (null == u || !(null == u ? void 0 : u.isDM())) return !1;
            let e = a.ZP.isChannelMuted(u.getGuildId(), u.id),
                t = o.Z.isIgnored(u.getRecipientId()),
                n = o.Z.isBlocked(u.getRecipientId());
            return e || t || n;
        }),
        b = p && null != f && m && !g && !d ? f : void 0,
        [O, y] = (0, r.useState)(b);
    return (
        (0, r.useEffect)(() => {
            let e = setTimeout(
                () => {
                    y(b);
                },
                m ? 100 : 1000
            );
            return () => clearTimeout(e);
        }, [b, m]),
        O
    );
}
