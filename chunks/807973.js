n.d(t, { A: () => C });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    o = n(661531),
    a = n(565645),
    s = n(17928),
    u = n(236285),
    c = n(35275),
    d = n(655756);
function C(e) {
    let { guildId: t, emojiId: n, emojiName: l, className: C } = e,
        h = (0, s.bG)([u.Ay], () => {
            if (null == n) return null;
            let e = u.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != h || null != l
        ? (0, r.jsx)(a.A, {
              emojiId: h?.id,
              emojiName: l ?? h?.name,
              animated: h?.animated ?? !1,
              className: i()(d.m, C),
          })
        : (0, r.jsx)(c.A, { className: i()(d.m, C), color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
