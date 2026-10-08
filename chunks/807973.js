t.d(n, { A: () => m });
var l = t(477900);
t(582128);
var r = t(503698),
    i = t.n(r),
    a = t(661531),
    s = t(565645),
    u = t(17928),
    c = t(236285),
    o = t(35275),
    d = t(655756);
function m(e) {
    let { guildId: n, emojiId: t, emojiName: r, className: m } = e,
        h = (0, u.bG)(
            [c.Ay],
            () => {
                if (null == t) return null;
                let e = c.Ay.getDisambiguatedEmojiContext(n);
                return e.getById(t) ?? e.getByName(t);
            },
            [n, t],
        );
    return null != h || null != r
        ? (0, l.jsx)(s.A, {
              emojiId: h?.id,
              emojiName: r ?? h?.name,
              animated: h?.animated ?? !1,
              className: i()(d.m, m),
          })
        : (0, l.jsx)(o.A, { className: i()(d.m, m), color: a.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
