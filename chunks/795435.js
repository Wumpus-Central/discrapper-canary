var s = t(538355),
    l = t(256265);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { firstMessage: n, formatInline: t = !0, noStyleAndInteraction: i = !0 } = e,
                a = n?.content != null && "" !== n.content,
                { hasSpoilerEmbeds: r, content: c } = (0, s.A)(a ? n : null, {
                    formatInline: t,
                    noStyleAndInteraction: i,
                    allowHeading: !0,
                    allowList: !0,
                }),
                d = (0, l.Ky)(n, r),
                o = (0, l.L_)(n, r);
            return { hasSpoilerEmbeds: r, content: c, firstMedia: d, firstMediaIsEmbed: o };
        },
    },
);
