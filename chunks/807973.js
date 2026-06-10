n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(661531),
    s = n(565645),
    u = n(17928),
    o = n(159273),
    c = n(35275),
    d = n(606481);
function E(e) {
    let { guildId: t, emojiId: n, emojiName: i, className: E } = e,
        f = (0, u.bG)([o.Ay], () => {
            if (null == n) return null;
            let e = o.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != f || null != i
        ? (0, l.jsx)(s.A, {
              emojiId: f?.id,
              emojiName: i ?? f?.name,
              animated: f?.animated ?? !1,
              className: r()(d.m, E),
          })
        : (0, l.jsx)(c.A, { className: r()(d.m, E), color: a.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
