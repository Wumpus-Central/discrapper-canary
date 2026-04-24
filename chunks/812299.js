"use strict";
n.d(t, { k: () => o, y: () => c });
var a = n(627968);
n(64700);
var r = n(709066),
    i = n(455207),
    l = n(943667),
    s = n(334211);
function o(e) {
    let t,
        { message: n, channel: a, user: s, isRepliedMessage: o } = e;
    return (
        n?.isSystemDM()
            ? (t = r.A.Types.SYSTEM_DM)
            : null != n && (0, l.A)(n)
              ? (t = (0, i.MZ)(n) ? r.A.Types.OFFICIAL : r.A.Types.SERVER)
              : s?.bot
                ? (t = r.A.Types.BOT)
                : null != a && a.isForumPost() && a.ownerId === s?.id && !o && (t = r.A.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: i, compact: l, isRepliedMessage: c, hideIcon: d = !1, children: u } = e,
        _ = o({ message: t, channel: n, user: i, compact: l, isRepliedMessage: c, hideIcon: d, children: u });
    return null == _
        ? null
        : (0, a.jsx)(r.A, {
              className: l ? s.jW : s.RQ,
              type: _,
              verified: i?.isVerifiedBot(),
              hideIcon: d,
              useRemSizes: !0,
              children: u,
          });
}
