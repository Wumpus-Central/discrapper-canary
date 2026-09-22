r.d(n, { A: () => h });
var t = r(477900);
r(582128);
var l = r(503698),
    i = r.n(l),
    s = r(661531),
    o = r(565645),
    a = r(17928),
    c = r(236285),
    u = r(35275),
    d = r(655756);
function h(e) {
    let { guildId: n, emojiId: r, emojiName: l, className: h } = e,
        m = (0, a.bG)(
            [c.Ay],
            () => {
                if (null == r) return null;
                let e = c.Ay.getDisambiguatedEmojiContext(n);
                return e.getById(r) ?? e.getByName(r);
            },
            [n, r],
        );
    return null != m || null != l
        ? (0, t.jsx)(o.A, {
              emojiId: m?.id,
              emojiName: l ?? m?.name,
              animated: m?.animated ?? !1,
              className: i()(d.m, h),
          })
        : (0, t.jsx)(u.A, { className: i()(d.m, h), color: s.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
