n.d(t, { A: () => C });
var l = n(477900);
n(582128);
var o = n(503698),
    i = n.n(o),
    r = n(661531),
    a = n(788026),
    s = n(17928),
    u = n(236285),
    c = n(35275),
    d = n(655756);
function C(e) {
    let { guildId: t, emojiId: n, emojiName: o, className: C } = e,
        p = (0, s.bG)(
            [u.Ay],
            () => {
                if (null == n) return null;
                let e = u.Ay.getDisambiguatedEmojiContext(t);
                return e.getById(n) ?? e.getByName(n);
            },
            [t, n],
        );
    return null != p || null != o
        ? (0, l.jsx)(a.A, {
              emojiId: p?.id,
              emojiName: o ?? p?.name,
              animated: p?.animated ?? !1,
              className: i()(d.m, C),
          })
        : (0, l.jsx)(c.A, { className: i()(d.m, C), color: r.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
