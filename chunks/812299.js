n.d(t, { k: () => A, y: () => o });
var s = n(477900);
n(582128);
var u = n(709066),
    r = n(455207),
    i = n(943667),
    l = n(318626);
function A(e) {
    let t,
        { message: n, channel: s, user: l, isRepliedMessage: A } = e;
    return (
        n?.isSystemDM()
            ? (t = u.A.Types.SYSTEM_DM)
            : null != n && (0, i.A)(n)
              ? (t = (0, r.MZ)(n) ? u.A.Types.OFFICIAL : u.A.Types.SERVER)
              : l?.bot
                ? (t = u.A.Types.BOT)
                : null != s && s.isForumPost() && s.ownerId === l?.id && !A && (t = u.A.Types.ORIGINAL_POSTER),
        t
    );
}
function o(e) {
    let { message: t, channel: n, user: r, compact: i, isRepliedMessage: o, hideIcon: c = !1, children: d } = e,
        p = A({ message: t, channel: n, user: r, compact: i, isRepliedMessage: o, hideIcon: c, children: d });
    return null == p
        ? null
        : (0, s.jsx)(u.A, {
              className: i ? l.jW : l.RQ,
              type: p,
              verified: r?.isVerifiedBot(),
              hideIcon: c,
              useRemSizes: !0,
              children: d,
          });
}
