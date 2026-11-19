n.d(t, { Ay: () => x, Wz: () => C, $J: () => g, p3: () => E });
var r = n(477900),
    i = n(582128),
    o = n(146849),
    l = n(647660),
    s = n(129230),
    c = n(903369),
    a = n(448767),
    u = n(354777),
    d = n(78377),
    m = n(886737),
    h = n(594808),
    p = n(652215),
    f = n(792996),
    A = n(910379);
function E(e) {
    let {
        hideSimpleEmbedContent: t = !0,
        formatInline: n = !1,
        noStyleAndInteraction: r = !1,
        allowHeading: o = !1,
        allowList: l = !1,
        allowLinks: s = !1,
        allowDevLinks: c = !1,
        previewLinkTarget: a = !1,
        viewingChannelId: u,
        restrictedPreview: d = !1,
    } = e;
    return i.useMemo(
        () => ({
            hideSimpleEmbedContent: t,
            formatInline: n,
            noStyleAndInteraction: r,
            allowHeading: o,
            allowList: l,
            allowLinks: s,
            allowDevLinks: c,
            previewLinkTarget: a,
            viewingChannelId: u,
            restrictedPreview: d,
        }),
        [t, n, r, o, l, s, c, a, u, d],
    );
}
function C(e, t) {
    let { restrictedPreview: n, ...r } = t;
    return (0, u.Ay)(e, { ...r, allowGameMentions: !0, postProcessor: n ? m.A : void 0 });
}
function g(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: f.intl.string(f.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(p.pr7.LOADING))
        return { content: (0, r.jsx)(h.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === p.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: t } = n(550997);
        return t(e, A, {
            track: (e, t) => {
                s.default.track(e, t);
            },
        });
    }
    return null;
}
function x(e) {
    let { message: t, options: n, parsed: s } = e,
        u = E(n),
        m = (0, o.I2)({ location: "MessageRenderedContent" }).enabled,
        h = t.id,
        f = t.channel_id,
        A = (0, c.U)(t),
        x = t.author?.id,
        { viewingChannelId: b, formatInline: k, noStyleAndInteraction: N } = u,
        S = i.useMemo(
            () => ({
                messageId: h,
                channelId: f,
                viewingChannelId: b,
                guildId: A,
                authorId: x,
                formatInline: k,
                noStyleAndInteraction: N,
            }),
            [h, f, b, A, x, k, N],
        );
    return i.useMemo(() => {
        let e = g(t);
        return null != e
            ? e.content
            : m
              ? (0, r.jsx)(i.Suspense, {
                    children: (0, r.jsx)(d.O.Provider, {
                        value: S,
                        children: (0, r.jsx)(l.A, {
                            content: t.content,
                            parsed: s,
                            allowJumboEmoji: !k && t.type !== p.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: u.hideSimpleEmbedContent && (0, a.k5)(t.embeds),
                            redactRestrictedContent: u.restrictedPreview,
                        }),
                    }),
                })
              : C(t, u).content;
    }, [t.content, t.customRenderedContent, t.embeds, t.interaction, t.state, t.type, u, m, s, S]);
}
