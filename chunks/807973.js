n.d(t, { A: () => E });
var r = n(477900);
n(582128);
var l = n(503698),
    i = n.n(l),
    o = n(661531),
    u = n(565645),
    s = n(17928),
    a = n(159273),
    c = n(35275),
    d = n(983209);
function E(e) {
    let { guildId: t, emojiId: n, emojiName: l, className: E } = e,
        C = (0, s.bG)([a.Ay], () => {
            if (null == n) return null;
            let e = a.Ay.getDisambiguatedEmojiContext(t);
            return e.getById(n) ?? e.getByName(n);
        }, [t, n]);
    return null != C || null != l
        ? (0, r.jsx)(u.A, {
              emojiId: C?.id,
              emojiName: l ?? C?.name,
              animated: C?.animated ?? !1,
              className: i()(d.m, E),
          })
        : (0, r.jsx)(c.A, { className: i()(d.m, E), color: o.A.colors.CREATOR_REVENUE_LOCKED_CHANNEL_ICON.css });
}
