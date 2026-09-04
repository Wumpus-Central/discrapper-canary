n.d(t, { A: () => h });
var r = n(477900);
n(582128);
var l = n(503698),
    o = n.n(l),
    i = n(661531),
    a = n(565645),
    s = n(17928),
    u = n(236285),
    c = n(35275),
    d = n(655756);
function h(e) {
    let { guildId: t, emojiId: n, emojiName: l, className: h } = e,
        C = (0, s.bG)([u.Ay], () => {
            if (null == n) return null;
            let e = u.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != C || null != l
        ? (0, r.jsx)(a.A, {
              emojiId: C?.id,
              emojiName: l ?? C?.name,
              animated: C?.animated ?? !1,
              className: o()(d.m, h),
          })
        : (0, r.jsx)(c.A, { className: o()(d.m, h), color: i.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
