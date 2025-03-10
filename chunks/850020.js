n.d(t, { K: () => d }), n(47120);
var r = n(192379),
    i = n(442837),
    a = n(158776),
    o = n(699516),
    l = n(9156),
    s = n(614185),
    c = n(231338);
function d(e) {
    let { location: t, user: n, privateChannel: d, forceHide: u = !1 } = e,
        p = (0, s.D)(t),
        m = null == n ? void 0 : n.nameplate,
        [f, h] = (0, r.useState)(void 0),
        [g, _] = (0, r.useState)(null),
        b = (0, i.e7)([a.Z], () => {
            if (null == n) return !1;
            let e = a.Z.getStatus(n.id);
            return !new Set([c.Sk.OFFLINE, c.Sk.INVISIBLE, c.Sk.UNKNOWN]).has(e);
        }),
        v = (0, i.e7)([l.ZP, o.Z], () => {
            if (null == d || !(null == d ? void 0 : d.isDM())) return !1;
            let e = l.ZP.isChannelMuted(d.getGuildId(), d.id),
                t = o.Z.isIgnored(d.getRecipientId()),
                n = o.Z.isBlocked(d.getRecipientId());
            return e || t || n;
        }),
        y = p && null != m && b && !v && !u ? m : void 0;
    return (
        (0, r.useEffect)(() => {
            if (null === g) {
                h(y), _(b);
                return;
            }
            let e = setTimeout(
                () => {
                    h(y), _(b);
                },
                b ? 100 : 1000
            );
            return () => clearTimeout(e);
        }, [y, b, g]),
        f
    );
}
