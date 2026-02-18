n.d(t, { k: () => o, y: () => c });
var i = n(627968);
n(64700);
var l = n(709066),
    r = n(455207),
    a = n(943667),
    s = n(679740);
function o(e) {
    let t,
        { message: n, channel: i, user: s, isRepliedMessage: o } = e;
    return (
        n?.isSystemDM()
            ? (t = l.A.Types.SYSTEM_DM)
            : null != n && (0, a.A)(n)
              ? (t = (0, r.MZ)(n) ? l.A.Types.OFFICIAL : l.A.Types.SERVER)
              : s?.bot
                ? (t = l.A.Types.BOT)
                : null != i && i.isForumPost() && i.ownerId === s?.id && !o && (t = l.A.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: r, compact: a, isRepliedMessage: c, hideIcon: _ = !1, children: E } = e,
        d = o({ message: t, channel: n, user: r, compact: a, isRepliedMessage: c, hideIcon: _, children: E });
    return null == d
        ? null
        : (0, i.jsx)(l.A, {
              className: a ? s.jW : s.RQ,
              type: d,
              verified: r?.isVerifiedBot(),
              hideIcon: _,
              useRemSizes: !0,
              children: E,
          });
}
