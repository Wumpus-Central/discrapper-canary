n.d(t, { A: () => m });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(661531),
    o = n(565645),
    s = n(17928),
    u = n(159273),
    c = n(35275),
    d = n(606481);
function m(e) {
    let { guildId: t, emojiId: n, emojiName: r, className: m } = e,
        E = (0, s.bG)([u.Ay], () => {
            if (null == n) return null;
            let e = u.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != E || null != r
        ? (0, l.jsx)(o.A, {
              emojiId: E?.id,
              emojiName: r ?? E?.name,
              animated: E?.animated ?? !1,
              className: i()(d.m, m),
          })
        : (0, l.jsx)(c.A, { className: i()(d.m, m), color: a.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
