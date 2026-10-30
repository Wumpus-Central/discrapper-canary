n.d(t, { A: () => i });
var s = n(941308),
    l = n(256265);
function i(e) {
    let { firstMessage: t, formatInline: n = !0, noStyleAndInteraction: i = !0 } = e,
        a = t?.content != null && "" !== t.content,
        { hasSpoilerEmbeds: r, content: c } = (0, s.A)(a ? t : null, {
            formatInline: n,
            noStyleAndInteraction: i,
            allowHeading: !0,
            allowList: !0,
        }),
        d = (0, l.Ky)(t, r),
        o = (0, l.L_)(t, r);
    return { hasSpoilerEmbeds: r, content: c, firstMedia: d, firstMediaIsEmbed: o };
}
