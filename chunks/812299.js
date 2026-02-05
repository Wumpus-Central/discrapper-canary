"use strict";
n.d(t, { k: () => l, y: () => u });
var r = n(627968);
n(64700);
var i = n(709066),
    a = n(455207),
    s = n(943667),
    o = n(679740);
function l(e) {
    let t,
        { message: n, channel: r, user: o, isRepliedMessage: l } = e;
    return (
        n?.isSystemDM()
            ? (t = i.A.Types.SYSTEM_DM)
            : null != n && (0, s.A)(n)
              ? (t = (0, a.MZ)(n) ? i.A.Types.OFFICIAL : i.A.Types.SERVER)
              : o?.bot
                ? (t = i.A.Types.BOT)
                : null != r && r.isForumPost() && r.ownerId === o?.id && !l && (t = i.A.Types.ORIGINAL_POSTER),
        t
    );
}
function u(e) {
    let { message: t, channel: n, user: a, compact: s, isRepliedMessage: u, hideIcon: c = !1, children: d } = e,
        _ = l({ message: t, channel: n, user: a, compact: s, isRepliedMessage: u, hideIcon: c, children: d });
    return null == _
        ? null
        : (0, r.jsx)(i.A, {
              className: s ? o.jW : o.RQ,
              type: _,
              verified: a?.isVerifiedBot(),
              hideIcon: c,
              useRemSizes: !0,
              children: d,
          });
}
