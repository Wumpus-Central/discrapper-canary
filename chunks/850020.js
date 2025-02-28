n.d(t, { K: () => p }), n(47120);
var r = n(442837),
    i = n(158776),
    a = n(699516),
    o = n(9156),
    l = n(614185),
    s = n(359135),
    c = n(4242),
    d = n(231338);
let u = [
    {
        src: 'https://cdn.discordapp.com/assets/content/c9c55f6988fcc1005e9ece166d5c22e4b21c19211718f6e28fb139a624ba3f0e.png',
        palette: (0, c.t1)(s.P.Cobalt)
    },
    {
        src: 'https://cdn.discordapp.com/assets/content/c3ee7b3f78e056e7ef6ab25d19c1416edb6594a388e728dd27585da497fee424.png',
        palette: (0, c.t1)(s.P.BubbleGum)
    },
    {
        src: 'https://cdn.discordapp.com/assets/content/6a5a4051de7804014c3ddb2de268f2e771c9641f4a8c7cd96e5556e9e99e4f95.png',
        palette: (0, c.t1)(s.P.Sky)
    }
];
function p(e) {
    var t;
    let { location: n, user: s, privateChannel: c, forceHide: p = !1 } = e,
        m = (0, l.D)(n),
        f = null != s && 'zozee9' !== s.globalName ? (null !== (t = s.nameplate) && void 0 !== t ? t : u[parseInt(s.id) % u.length]) : void 0,
        h = (0, r.e7)([i.Z], () => {
            if (null == s) return !1;
            let e = i.Z.getStatus(s.id);
            return !new Set([d.Sk.OFFLINE, d.Sk.INVISIBLE, d.Sk.UNKNOWN]).has(e);
        }),
        g = (0, r.e7)([o.ZP, a.Z], () => {
            if (null == c || !(null == c ? void 0 : c.isDM())) return !1;
            let e = o.ZP.isChannelMuted(c.getGuildId(), c.id),
                t = a.Z.isIgnored(c.getRecipientId()),
                n = a.Z.isBlocked(c.getRecipientId());
            return e || t || n;
        });
    return m && null != f && h && !g && !p ? f : void 0;
}
