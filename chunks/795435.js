var s = t(538355),
    l = t(256265);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { firstMessage: n, formatInline: t = !0, noStyleAndInteraction: a = !0 } = e,
                i = n?.content != null && "" !== n.content,
                { hasSpoilerEmbeds: r, content: c } = (0, s.A)(i ? n : null, {
                    formatInline: t,
                    noStyleAndInteraction: a,
                    allowHeading: !0,
                    allowList: !0,
                }),
                d = (0, l.Ky)(n, r),
                o = (0, l.L_)(n, r);
            return { hasSpoilerEmbeds: r, content: c, firstMedia: d, firstMediaIsEmbed: o };
        },
    },
);
