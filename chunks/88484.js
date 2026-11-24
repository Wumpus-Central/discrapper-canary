n.d(t, { Ay: () => k, Wz: () => b, $J: () => v, p3: () => x });
var r = n(477900),
    i = n(582128),
    o = n(855986),
    l = n(146849),
    s = n(647660),
    c = n(959698),
    a = n(540999),
    u = n(129230),
    d = n(903369),
    m = n(448767),
    h = n(354777),
    f = n(78377),
    p = n(886737),
    A = n(594808),
    E = n(652215),
    C = n(792996),
    g = n(910379);
function x(e) {
    let {
            hideSimpleEmbedContent: t = !0,
            formatInline: n = !1,
            noStyleAndInteraction: r = !1,
            allowHeading: l = !1,
            allowList: s = !1,
            allowLinks: u = !1,
            previewLinkTarget: d = !1,
            viewingChannelId: m,
        } = e,
        h = (0, c.U)(),
        f = (0, o.bG)([a.A], () => a.A.isDeveloper);
    return i.useMemo(
        () => ({
            hideSimpleEmbedContent: t,
            formatInline: n,
            noStyleAndInteraction: r,
            allowHeading: l,
            allowList: s,
            allowLinks: u,
            allowDevLinks: f,
            previewLinkTarget: d,
            viewingChannelId: m,
            restrictedPreview: h,
        }),
        [t, n, r, l, s, u, f, d, m, h],
    );
}
function b(e, t) {
    let { restrictedPreview: n, ...r } = t;
    return (0, h.Ay)(e, { ...r, allowGameMentions: !0, postProcessor: n ? p.A : void 0 });
}
function v(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: C.intl.string(C.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(E.pr7.LOADING))
        return { content: (0, r.jsx)(A.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === E.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: t } = n(550997);
        return t(e, g, {
            track: (e, t) => {
                u.default.track(e, t);
            },
        });
    }
    return null;
}
function k(e) {
    let { message: t, options: n, parsed: o } = e,
        c = (0, l.I2)({ location: "MessageRenderedContent" }).enabled,
        a = t.id,
        u = t.channel_id,
        h = (0, d.U)(t),
        p = t.author?.id,
        { viewingChannelId: A, formatInline: C, noStyleAndInteraction: g } = n,
        x = i.useMemo(
            () => ({
                messageId: a,
                channelId: u,
                viewingChannelId: A,
                guildId: h,
                authorId: p,
                formatInline: C,
                noStyleAndInteraction: g,
            }),
            [a, u, A, h, p, C, g],
        );
    return i.useMemo(() => {
        let e = v(t);
        return null != e
            ? e.content
            : c
              ? (0, r.jsx)(i.Suspense, {
                    children: (0, r.jsx)(f.O.Provider, {
                        value: x,
                        children: (0, r.jsx)(s.A, {
                            content: t.content,
                            parsed: o,
                            allowJumboEmoji: !C && t.type !== E.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: n.hideSimpleEmbedContent && (0, m.k5)(t.embeds),
                            redactRestrictedContent: n.restrictedPreview,
                        }),
                    }),
                })
              : b(t, n).content;
    }, [t.content, t.customRenderedContent, t.embeds, t.interaction, t.state, t.type, n, c, o, x]);
}
