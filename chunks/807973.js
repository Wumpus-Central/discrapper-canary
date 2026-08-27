n.d(t, { A: () => C });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    o = n(661531),
    u = n(565645),
    s = n(17928),
    a = n(236285),
    c = n(35275),
    d = n(655756);
function C(e) {
    let { guildId: t, emojiId: n, emojiName: r, className: C } = e,
        E = (0, s.bG)([a.Ay], () => {
            if (null == n) return null;
            let e = a.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != E || null != r
        ? (0, l.jsx)(u.A, {
              emojiId: E?.id,
              emojiName: r ?? E?.name,
              animated: E?.animated ?? !1,
              className: i()(d.m, C),
          })
        : (0, l.jsx)(c.A, { className: i()(d.m, C), color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
