n.d(t, { A: () => E });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    s = n(661531),
    u = n(565645),
    o = n(17928),
    a = n(236285),
    c = n(35275),
    d = n(655756);
function E(e) {
    let { guildId: t, emojiId: n, emojiName: l, className: E } = e,
        h = (0, o.bG)([a.Ay], () => {
            if (null == n) return null;
            let e = a.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != h || null != l
        ? (0, r.jsx)(u.A, {
              emojiId: h?.id,
              emojiName: l ?? h?.name,
              animated: h?.animated ?? !1,
              className: i()(d.m, E),
          })
        : (0, r.jsx)(c.A, { className: i()(d.m, E), color: s.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
