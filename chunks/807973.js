n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    o = n(661531),
    a = n(565645),
    s = n(17928),
    u = n(159273),
    c = n(35275),
    d = n(606481);
function m(e) {
    let { guildId: t, emojiId: n, emojiName: l, className: m } = e,
        f = (0, s.bG)([u.Ay], () => {
            if (null == n) return null;
            let e = u.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != f || null != l
        ? (0, i.jsx)(a.A, {
              emojiId: f?.id,
              emojiName: l ?? f?.name,
              animated: f?.animated ?? !1,
              className: r()(d.m, m),
          })
        : (0, i.jsx)(c.A, { className: r()(d.m, m), color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
