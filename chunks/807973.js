l.d(n, { A: () => m });
var t = l(477900);
l(582128);
var r = l(503698),
    i = l.n(r),
    u = l(661531),
    s = l(565645),
    a = l(17928),
    o = l(236285),
    c = l(35275),
    d = l(655756);
function m(e) {
    let { guildId: n, emojiId: l, emojiName: r, className: m } = e,
        E = (0, a.bG)(
            [o.Ay],
            () => {
                if (null == l) return null;
                let e = o.Ay.getDisambiguatedEmojiContext(n);
                return e.getById(l) ?? e.getByName(l);
            },
            [n, l],
        );
    return null != E || null != r
        ? (0, t.jsx)(s.A, {
              emojiId: E?.id,
              emojiName: r ?? E?.name,
              animated: E?.animated ?? !1,
              className: i()(d.m, m),
          })
        : (0, t.jsx)(c.A, { className: i()(d.m, m), color: u.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
