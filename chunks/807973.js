l.d(n, { A: () => m });
var t = l(477900);
l(582128);
var r = l(503698),
    i = l.n(r),
    a = l(661531),
    s = l(565645),
    u = l(17928),
    c = l(236285),
    o = l(35275),
    d = l(655756);
function m(e) {
    let { guildId: n, emojiId: l, emojiName: r, className: m } = e,
        h = (0, u.bG)(
            [c.Ay],
            () => {
                if (null == l) return null;
                let e = c.Ay.getDisambiguatedEmojiContext(n);
                return e.getById(l) ?? e.getByName(l);
            },
            [n, l],
        );
    return null != h || null != r
        ? (0, t.jsx)(s.A, {
              emojiId: h?.id,
              emojiName: r ?? h?.name,
              animated: h?.animated ?? !1,
              className: i()(d.m, m),
          })
        : (0, t.jsx)(o.A, { className: i()(d.m, m), color: a.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
