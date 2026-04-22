"use strict";
n.d(t, { k: () => o, y: () => c });
var i = n(627968);
n(64700);
var a = n(709066),
    r = n(455207),
    l = n(943667),
    s = n(334211);
function o(e) {
    let t,
        { message: n, channel: i, user: s, isRepliedMessage: o } = e;
    return (
        n?.isSystemDM()
            ? (t = a.A.Types.SYSTEM_DM)
            : null != n && (0, l.A)(n)
              ? (t = (0, r.MZ)(n) ? a.A.Types.OFFICIAL : a.A.Types.SERVER)
              : s?.bot
                ? (t = a.A.Types.BOT)
                : null != i && i.isForumPost() && i.ownerId === s?.id && !o && (t = a.A.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: r, compact: l, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        _ = o({ message: t, channel: n, user: r, compact: l, isRepliedMessage: c, hideIcon: u, children: d });
    return null == _
        ? null
        : (0, i.jsx)(a.A, {
              className: l ? s.jW : s.RQ,
              type: _,
              verified: r?.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d,
          });
}
