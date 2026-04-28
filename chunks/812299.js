n.d(l, { k: () => i, y: () => o });
var r = n(627968);
n(64700);
var u = n(709066),
    t = n(455207),
    s = n(943667),
    a = n(334211);
function i(e) {
    let l,
        { message: n, channel: r, user: a, isRepliedMessage: i } = e;
    return (
        n?.isSystemDM()
            ? (l = u.A.Types.SYSTEM_DM)
            : null != n && (0, s.A)(n)
              ? (l = (0, t.MZ)(n) ? u.A.Types.OFFICIAL : u.A.Types.SERVER)
              : a?.bot
                ? (l = u.A.Types.BOT)
                : null != r && r.isForumPost() && r.ownerId === a?.id && !i && (l = u.A.Types.ORIGINAL_POSTER),
        l
    );
}
function o(e) {
    let { message: l, channel: n, user: t, compact: s, isRepliedMessage: o, hideIcon: d = !1, children: c } = e,
        A = i({ message: l, channel: n, user: t, compact: s, isRepliedMessage: o, hideIcon: d, children: c });
    return null == A
        ? null
        : (0, r.jsx)(u.A, {
              className: s ? a.jW : a.RQ,
              type: A,
              verified: t?.isVerifiedBot(),
              hideIcon: d,
              useRemSizes: !0,
              children: c,
          });
}
