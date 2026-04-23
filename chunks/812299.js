n.d(t, { k: () => o, y: () => c });
var a = n(627968);
n(64700);
var i = n(709066),
    l = n(715138),
    r = n(943667),
    s = n(334211);
function o(e) {
    let t,
        { message: n, channel: a, user: s, isRepliedMessage: o } = e;
    return (
        n?.isSystemDM()
            ? (t = i.A.Types.SYSTEM_DM)
            : null != n && (0, r.A)(n)
              ? (t = (0, l.MZ)(n) ? i.A.Types.OFFICIAL : i.A.Types.SERVER)
              : s?.bot
                ? (t = i.A.Types.BOT)
                : null != a && a.isForumPost() && a.ownerId === s?.id && !o && (t = i.A.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: l, compact: r, isRepliedMessage: c, hideIcon: d = !1, children: u } = e,
        m = o({ message: t, channel: n, user: l, compact: r, isRepliedMessage: c, hideIcon: d, children: u });
    return null == m
        ? null
        : (0, a.jsx)(i.A, {
              className: r ? s.jW : s.RQ,
              type: m,
              verified: l?.isVerifiedBot(),
              hideIcon: d,
              useRemSizes: !0,
              children: u,
          });
}
