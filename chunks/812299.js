n.d(t, {
    k: () => l,
    y: () => c,
});
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
        (null == n ? void 0 : n.isSystemDM())
            ? (t = i.A.Types.SYSTEM_DM)
            : null != n && (0, s.A)(n)
              ? (t = (0, a.MZ)(n) ? i.A.Types.OFFICIAL : i.A.Types.SERVER)
              : (null == o ? void 0 : o.bot)
                ? (t = i.A.Types.BOT)
                : null != r &&
                  r.isForumPost() &&
                  r.ownerId === (null == o ? void 0 : o.id) &&
                  !l &&
                  (t = i.A.Types.ORIGINAL_POSTER),
        t
    );
}
function c(e) {
    let { message: t, channel: n, user: a, compact: s, isRepliedMessage: c, hideIcon: u = !1, children: d } = e,
        f = l({
            message: t,
            channel: n,
            user: a,
            compact: s,
            isRepliedMessage: c,
            hideIcon: u,
            children: d,
        });
    return null == f
        ? null
        : (0, r.jsx)(i.A, {
              className: s ? o.jW : o.RQ,
              type: f,
              verified: null == a ? void 0 : a.isVerifiedBot(),
              hideIcon: u,
              useRemSizes: !0,
              children: d,
          });
}
