n.d(t, { A: () => C });
var l = n(477900);
n(582128);
var o = n(503698),
    r = n.n(o),
    i = n(661531),
    a = n(788026),
    u = n(17928),
    s = n(236285),
    c = n(35275),
    d = n(655756);
function C(e) {
    let { guildId: t, emojiId: n, emojiName: o, className: C } = e,
        h = (0, u.bG)(
            [s.Ay],
            () => {
                if (null == n) return null;
                let e = s.Ay.getDisambiguatedEmojiContext(t);
                return e.getById(n) ?? e.getByName(n);
            },
            [t, n],
        );
    return null != h || null != o
        ? (0, l.jsx)(a.A, {
              emojiId: h?.id,
              emojiName: o ?? h?.name,
              animated: h?.animated ?? !1,
              className: r()(d.m, C),
          })
        : (0, l.jsx)(c.A, { className: r()(d.m, C), color: i.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
