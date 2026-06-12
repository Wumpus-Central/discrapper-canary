i.d(t, { A: () => f });
var n = i(627968);
i(64700);
var l = i(503698),
    s = i.n(l),
    r = i(661531),
    a = i(565645),
    u = i(17928),
    o = i(159273),
    c = i(35275),
    d = i(606481);
function f(e) {
    let { guildId: t, emojiId: i, emojiName: l, className: f } = e,
        A = (0, u.bG)([o.Ay], () => {
            if (null == i) return null;
            let e = o.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(i) ?? e.getByName(i);
        }, [t, i]);
    return null != A || null != l
        ? (0, n.jsx)(a.A, {
              emojiId: A?.id,
              emojiName: l ?? A?.name,
              animated: A?.animated ?? !1,
              className: s()(d.m, f),
          })
        : (0, n.jsx)(c.A, { className: s()(d.m, f), color: r.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
