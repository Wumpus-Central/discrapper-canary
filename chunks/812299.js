s.d(t, { k: () => A, y: () => d });
var n = s(627968);
s(64700);
var r = s(709066),
    u = s(455207),
    i = s(943667),
    l = s(334211);
function A(e) {
    let t,
        { message: s, channel: n, user: l, isRepliedMessage: A } = e;
    return (
        s?.isSystemDM()
            ? (t = r.A.Types.SYSTEM_DM)
            : null != s && (0, i.A)(s)
              ? (t = (0, u.MZ)(s) ? r.A.Types.OFFICIAL : r.A.Types.SERVER)
              : l?.bot
                ? (t = r.A.Types.BOT)
                : null != n && n.isForumPost() && n.ownerId === l?.id && !A && (t = r.A.Types.ORIGINAL_POSTER),
        t
    );
}
function d(e) {
    let { message: t, channel: s, user: u, compact: i, isRepliedMessage: d, hideIcon: o = !1, children: c } = e,
        p = A({ message: t, channel: s, user: u, compact: i, isRepliedMessage: d, hideIcon: o, children: c });
    return null == p
        ? null
        : (0, n.jsx)(r.A, {
              className: i ? l.jW : l.RQ,
              type: p,
              verified: u?.isVerifiedBot(),
              hideIcon: o,
              useRemSizes: !0,
              children: c,
          });
}
