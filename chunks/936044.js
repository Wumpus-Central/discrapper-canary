n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    r = n(763754),
    s = n(491182),
    o = n(291812),
    d = n(643204),
    c = n(759522);
function u(e) {
    let {
            message: t,
            channel: n,
            content: l,
            className: u,
            compact: m,
            popoutProps: _,
            hideTimestamp: h = !1,
            withFooter: p = !1,
            ...g
        } = e,
        A = (0, r.Ay)(t);
    return (0, i.jsx)("div", {
        className: a()({ [c.Ym]: p }, c.gD, { [c.oE]: m }, u),
        children: (0, i.jsx)(s.A, {
            ...g,
            className: a()(c.zC, { [c.oE]: m }),
            childrenMessageContent: (0, i.jsx)(o.Ay, {
                className: a()(c.__invalid_messageContent, { [c.oE]: m }),
                message: t,
                content: l,
                compact: m ?? !1,
            }),
            childrenHeader: (0, i.jsx)(d.Ay, {
                message: t,
                channel: n,
                author: A,
                guildId: n?.guild_id,
                compact: m,
                hideTimestamp: h,
                className: a()(c.wx, { [c.oE]: m }),
                ...(_ ?? {}),
            }),
            compact: m,
            author: A,
        }),
    });
}
