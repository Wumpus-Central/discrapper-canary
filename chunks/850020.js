n.d(t, { K: () => u }), n(388685);
var r = n(192379),
    l = n(442837),
    i = n(158776),
    o = n(699516),
    a = n(9156),
    s = n(598062),
    c = n(231338);
function u(e) {
    let { location: t, user: n, privateChannel: u, forceHide: d = !1 } = e,
        p = (0, s.XD)(t),
        f = (0, s.PW)(t),
        m = (0, r.useMemo)(() => (null == n || null == n.nameplate ? null : n.nameplate), [n]),
        g = (0, l.e7)([i.Z], () => {
            if (null == n) return !1;
            let e = i.Z.getStatus(n.id);
            return !new Set([c.Sk.OFFLINE, c.Sk.INVISIBLE, c.Sk.UNKNOWN]).has(e);
        }),
        b = (0, l.e7)([a.ZP, o.Z], () => {
            if (null == u || !(null == u ? void 0 : u.isDM())) return !1;
            let e = a.ZP.isChannelMuted(u.getGuildId(), u.id),
                t = o.Z.isIgnored(u.getRecipientId()),
                n = o.Z.isBlocked(u.getRecipientId());
            return e || t || n;
        }),
        O = p && null != m && (f || (g && !b)) && !d ? m : void 0,
        [h, y] = (0, r.useState)(O);
    return (
        (0, r.useEffect)(() => {
            if (f) return;
            let e = setTimeout(
                () => {
                    y(O);
                },
                g ? 100 : 1000
            );
            return () => clearTimeout(e);
        }, [O, g, f]),
        f ? O : h
    );
}
