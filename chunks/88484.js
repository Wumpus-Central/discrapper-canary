t.d(n, { Ay: () => y, Wz: () => j, $J: () => I, p3: () => x, ld: () => v });
var l = t(477900),
    r = t(582128),
    i = t(146849),
    a = t(647660),
    u = t(129230),
    s = t(903369),
    o = t(448767),
    c = t(354777),
    d = t(78377),
    h = t(886737),
    m = t(594808),
    f = t(652215),
    p = t(792996),
    g = t(910379);
function x(e) {
    let {
        hideSimpleEmbedContent: n = !0,
        formatInline: t = !1,
        noStyleAndInteraction: l = !1,
        allowHeading: i = !1,
        allowList: a = !1,
        allowLinks: u = !1,
        allowDevLinks: s = !1,
        previewLinkTarget: o = !1,
        viewingChannelId: c,
        postProcessor: d,
        restrictedPreview: h = !1,
    } = e;
    return r.useMemo(
        () => ({
            hideSimpleEmbedContent: n,
            formatInline: t,
            noStyleAndInteraction: l,
            allowHeading: i,
            allowList: a,
            allowLinks: u,
            allowDevLinks: s,
            previewLinkTarget: o,
            viewingChannelId: c,
            allowGameMentions: !0,
            postProcessor: d,
            restrictedPreview: h,
        }),
        [n, t, l, i, a, u, s, o, c, d, h],
    );
}
function v(e, n) {
    return (0, i.I2)({ location: n }).enabled && null == e.postProcessor;
}
function j(e, n) {
    let { restrictedPreview: t, postProcessor: l, ...r } = n;
    return (0, c.Ay)(e, { ...r, postProcessor: t ? (e, n) => (0, h.A)(l?.(e, n) ?? e) : l });
}
function I(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: p.intl.string(p.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(f.pr7.LOADING))
        return { content: (0, l.jsx)(m.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === f.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: n } = t(550997);
        return n(e, g, {
            track: (e, n) => {
                u.default.track(e, n);
            },
        });
    }
    return null;
}
function y(e) {
    let { message: n, options: t, parsed: i } = e,
        u = x(t),
        c = v(u, "MessageRenderedContent"),
        h = n.id,
        m = n.channel_id,
        p = (0, s.U)(n),
        g = n.author?.id,
        { viewingChannelId: y, formatInline: A, noStyleAndInteraction: C } = u,
        k = r.useMemo(
            () => ({
                messageId: h,
                channelId: m,
                viewingChannelId: y,
                guildId: p,
                authorId: g,
                formatInline: A,
                noStyleAndInteraction: C,
            }),
            [h, m, y, p, g, A, C],
        );
    return r.useMemo(() => {
        let e = I(n);
        return null != e
            ? e.content
            : c
              ? (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(d.O.Provider, {
                        value: k,
                        children: (0, l.jsx)(a.A, {
                            content: n.content,
                            parsed: i,
                            allowJumboEmoji: !A && n.type !== f.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: u.hideSimpleEmbedContent && (0, o.k5)(n.embeds),
                            redactRestrictedContent: u.restrictedPreview,
                        }),
                    }),
                })
              : j(n, u).content;
    }, [n.content, n.customRenderedContent, n.embeds, n.interaction, n.state, n.type, u, c, i, k]);
}
