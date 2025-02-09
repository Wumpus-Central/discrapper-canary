n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(739566),
    s = n(492593),
    o = n(930282),
    c = n(464891),
    d = n(272695);
function u(e) {
    let { message: t, channel: n, content: l, className: u, compact: m, popoutProps: _, hideTimestamp: h = !1, withFooter: p = !1, ...g } = e,
        f = (0, r.ZP)(t);
    return (0, i.jsx)('div', {
        className: a()({ [d.withFooter]: p }, d.embedCard, { [d.compact]: m }, u),
        children: (0, i.jsx)(s.Z, {
            ...g,
            className: a()(d.messageContainer, { [d.compact]: m }),
            childrenMessageContent: (0, i.jsx)(o.ZP, {
                className: a()(d.__invalid_messageContent, { [d.compact]: m }),
                message: t,
                content: l
            }),
            childrenHeader: (0, i.jsx)(c.ZP, {
                message: t,
                channel: n,
                author: f,
                guildId: null == n ? void 0 : n.guild_id,
                compact: m,
                hideTimestamp: h,
                className: a()(d.header, { [d.compact]: m }),
                ...(null != _ ? _ : {})
            }),
            compact: m
        })
    });
}
