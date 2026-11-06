t.d(n, { Ay: () => I, Wz: () => v, $J: () => j, p3: () => g });
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
    x = t(910379);
function g(e) {
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
        restrictedPreview: d = !1,
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
            restrictedPreview: d,
        }),
        [n, t, l, i, a, u, s, o, c, d],
    );
}
function v(e, n) {
    let { restrictedPreview: t, ...l } = n;
    return (0, c.Ay)(e, { ...l, allowGameMentions: !0, postProcessor: t ? h.A : void 0 });
}
function j(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: p.intl.string(p.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(f.pr7.LOADING))
        return { content: (0, l.jsx)(m.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === f.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: n } = t(550997);
        return n(e, x, {
            track: (e, n) => {
                u.default.track(e, n);
            },
        });
    }
    return null;
}
function I(e) {
    let { message: n, options: t, parsed: u } = e,
        c = g(t),
        h = (0, i.I2)({ location: "MessageRenderedContent" }).enabled,
        m = n.id,
        p = n.channel_id,
        x = (0, s.U)(n),
        I = n.author?.id,
        { viewingChannelId: y, formatInline: A, noStyleAndInteraction: C } = c,
        k = r.useMemo(
            () => ({
                messageId: m,
                channelId: p,
                viewingChannelId: y,
                guildId: x,
                authorId: I,
                formatInline: A,
                noStyleAndInteraction: C,
            }),
            [m, p, y, x, I, A, C],
        );
    return r.useMemo(() => {
        let e = j(n);
        return null != e
            ? e.content
            : h
              ? (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(d.O.Provider, {
                        value: k,
                        children: (0, l.jsx)(a.A, {
                            content: n.content,
                            parsed: u,
                            allowJumboEmoji: !A && n.type !== f.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: c.hideSimpleEmbedContent && (0, o.k5)(n.embeds),
                            redactRestrictedContent: c.restrictedPreview,
                        }),
                    }),
                })
              : v(n, c).content;
    }, [n.content, n.customRenderedContent, n.embeds, n.interaction, n.state, n.type, c, h, u, k]);
}
