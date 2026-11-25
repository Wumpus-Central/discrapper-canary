var l = n(477900);
n(582128);
var i = n(855986),
    a = n(714114),
    r = n(323073),
    s = n(597306),
    o = n(10862),
    u = n(734057),
    c = n(576705),
    d = n(84804),
    m = n(874026),
    A = n(652215),
    p = n(396975);
function h(e) {
    let { channel: t, children: n, childWrapperClassName: i } = e;
    return (0, l.jsx)(d.A, {
        renderPopout: () => (0, l.jsx)(m.A, { channel: t }),
        childWrapperClassName: i,
        children: n,
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { guild: t, message: n } = e,
                { voiceState: d, voiceChannel: m } = (0, a.Ay)({ userId: n.author.id, guildId: t.id }),
                f = (0, i.bG)([u.A], () => u.A.getChannel(n.channel_id)?.isVocal()),
                g = (0, i.bG)([c.A], () => {
                    if (null == m) return !1;
                    let e = (0, s.r)() && (0, r.UK)(m.id);
                    return (m.isPrivate() || (c.A.can(A.xBc.VIEW_CHANNEL, m) && c.A.can(A.xBc.CONNECT, m))) && !e;
                });
            return null != d && null != m && m.isGuildVocal() && g && !f
                ? (0, l.jsx)(h, {
                      channel: m,
                      childWrapperClassName: p.y,
                      children: (0, l.jsx)(o.A, {
                          className: p.B,
                          size: "custom",
                          color: "currentColor",
                          width: 20,
                          height: 20,
                          channel: m,
                      }),
                  })
                : null;
        },
        T: h,
    },
);
