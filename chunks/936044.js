"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    s = n(763754),
    a = n(491182),
    o = n(291812),
    c = n(643204),
    u = n(818855);
function d(e) {
    let {
            message: t,
            channel: n,
            content: r,
            className: d,
            compact: _,
            popoutProps: E,
            hideTimestamp: A = !1,
            withFooter: m = !1,
            ...I
        } = e,
        T = (0, s.Ay)(t);
    return (0, i.jsx)("div", {
        className: l()({ [u.Ym]: m }, u.gD, { [u.oE]: _ }, d),
        children: (0, i.jsx)(a.A, {
            ...I,
            className: l()(u.zC, { [u.oE]: _ }),
            childrenMessageContent: (0, i.jsx)(o.Ay, {
                className: l()(u.__invalid_messageContent, { [u.oE]: _ }),
                message: t,
                content: r,
                compact: _ ?? !1,
            }),
            childrenHeader: (0, i.jsx)(c.Ay, {
                message: t,
                channel: n,
                author: T,
                guildId: n?.guild_id,
                compact: _,
                hideTimestamp: A,
                className: l()(u.wx, { [u.oE]: _ }),
                ...(E ?? {}),
            }),
            compact: _,
            author: T,
        }),
    });
}
