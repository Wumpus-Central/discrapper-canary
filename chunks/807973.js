t.d(n, { A: () => h });
var r = t(477900);
t(582128);
var l = t(503698),
    i = t.n(l),
    s = t(661531),
    o = t(565645),
    a = t(17928),
    u = t(236285),
    c = t(35275),
    d = t(655756);
function h(e) {
    let { guildId: n, emojiId: t, emojiName: l, className: h } = e,
        E = (0, a.bG)(
            [u.Ay],
            () => {
                if (null == t) return null;
                let e = u.Ay.getDisambiguatedEmojiContext(n);
                return e.getById(t) ?? e.getByName(t);
            },
            [n, t],
        );
    return null != E || null != l
        ? (0, r.jsx)(o.A, {
              emojiId: E?.id,
              emojiName: l ?? E?.name,
              animated: E?.animated ?? !1,
              className: i()(d.m, h),
          })
        : (0, r.jsx)(c.A, { className: i()(d.m, h), color: s.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
