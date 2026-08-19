n.d(l, { k: () => u, y: () => o });
var s = n(477900);
n(582128);
var t = n(709066),
    r = n(455207),
    a = n(943667),
    i = n(281867);
function u(e) {
    let l,
        { message: n, channel: s, user: i, isRepliedMessage: u } = e;
    return (
        n?.isSystemDM()
            ? (l = t.A.Types.SYSTEM_DM)
            : null != n && (0, a.A)(n)
              ? (l = (0, r.MZ)(n) ? t.A.Types.OFFICIAL : t.A.Types.SERVER)
              : i?.bot
                ? (l = t.A.Types.BOT)
                : null != s && s.isForumPost() && s.ownerId === i?.id && !u && (l = t.A.Types.ORIGINAL_POSTER),
        l
    );
}
function o(e) {
    let { message: l, channel: n, user: r, compact: a, isRepliedMessage: o, hideIcon: d = !1, children: c } = e,
        A = u({ message: l, channel: n, user: r, compact: a, isRepliedMessage: o, hideIcon: d, children: c });
    return null == A
        ? null
        : (0, s.jsx)(t.A, {
              className: a ? i.jW : i.RQ,
              type: A,
              verified: r?.isVerifiedBot(),
              hideIcon: d,
              useRemSizes: !0,
              children: c,
          });
}
