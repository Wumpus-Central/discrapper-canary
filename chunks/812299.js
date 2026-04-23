"use strict";
n.d(t, { k: () => o, y: () => c });
var l = n(627968);
n(64700);
var a = n(709066),
    s = n(455207),
    i = n(943667),
    r = n(334211);
function o(e) {
    let t,
        { message: n, channel: l, user: r, isRepliedMessage: o } = e;
    return (
        n?.isSystemDM()
            ? (t = a.A.Types.SYSTEM_DM)
            : null != n && (0, i.A)(n)
              ? (t = (0, s.MZ)(n) ? a.A.Types.OFFICIAL : a.A.Types.SERVER)
              : r?.bot
                ? (t = a.A.Types.BOT)
                : null != l && l.isForumPost() && l.ownerId === r?.id && !o && (t = a.A.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: s, compact: i, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        m = o({ message: t, channel: n, user: s, compact: i, isRepliedMessage: c, hideIcon: u, children: d });
    return null == m
        ? null
        : (0, l.jsx)(a.A, {
              className: i ? r.jW : r.RQ,
              type: m,
              verified: s?.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d,
          });
}
