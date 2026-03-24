"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(791332),
    l = n(397927),
    u = n(73153),
    c = n(9578),
    d = n(268218),
    _ = n(508675),
    f = n(232042),
    p = n(906754),
    h = n(332173),
    m = n(37632),
    E = n(253174),
    g = n(490040),
    A = n(930101),
    I = n(976860),
    T = n(302031),
    S = n(157941),
    y = n(696451),
    v = n(317525),
    N = n(71393),
    C = n(957565),
    R = n(365526),
    O = n(678473),
    b = n(997954),
    D = n(556300),
    L = n(990474),
    w = n(620700),
    M = n(49005),
    x = n(652215),
    P = n(746080),
    k = n(206314),
    U = n(829681);
function G(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, s) {
            let { key: a, channelId: o, messageId: l } = s;
            return e.src
                ? (0, r.jsx)(A.H, { node: e, tooltipPosition: t, enableClick: n, channelId: o, messageId: l }, a)
                : (0, r.jsx)("span", { children: e.surrogate }, a);
        },
    };
}
function F(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, s) {
            let { key: a, guildId: o, channelId: l, messageId: u, isInteracting: c } = s,
                d = _.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
            if (null != d) {
                let t = d.require_colons;
                e = { ...e, name: t ? `:${d.name}:` : d.name };
            }
            return (0, r.jsx)(
                A.X,
                { isInteracting: c, node: e, tooltipPosition: t, enableClick: n, channelId: l, messageId: u },
                a,
            );
        },
    };
}
function V(e, t, n) {
    let r = N.A.getGuild(e);
    if (null == e || null == r) return;
    let i = (t) => {
        r.features.has(x.GuildFeatures.COMMUNITY) && (0, I.pX)(x.BVt.CHANNEL(e, t));
    };
    switch (t) {
        case "home":
        case "guide":
            i(P.VV.GUILD_HOME);
            break;
        case "browse":
            i(P.VV.CHANNEL_BROWSER);
            break;
        case "customize":
            i(P.VV.CUSTOMIZE_COMMUNITY);
            break;
        case "linked-roles":
            if (null != n) {
                let t = y.Ay.getSelfMember(e);
                if (null == t) return null;
                let r = v.A.getRole(e, n);
                null == r || t.roles.includes(r.id)
                    ? u.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e })
                    : u.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e, role: r });
            } else u.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
    }
}
function B(e) {
    let { text: t } = e,
        [n, s] = i.useState(!1),
        a = () => {
            (0, C.C)(
                t,
                () => s(!0),
                () => s(!1),
            );
        };
    return (0, r.jsx)(l.DUT, {
        onClick: a,
        children: n
            ? (0, r.jsx)(l.A9s, { size: "xs", color: "currentColor" })
            : (0, r.jsx)(l.TdU, { size: "xs", color: "currentColor" }),
    });
}
let H = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                "div",
                {
                    className: k.h,
                    children: [
                        (0, r.jsx)("div", { className: k.r }),
                        (0, r.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, r.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: { react: (e, t, n) => (0, r.jsx)("span", { className: "highlight", children: e.content }, n.key) },
    paragraph: { react: (e, t, n) => (0, r.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: { react: (e, t, n) => (0, r.jsx)("code", { className: "inline", children: (0, R.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, i) {
            let s = () => (0, r.jsx)("code", { className: a()(U.kw, "hljs"), children: (0, R.t)(e, t, i) });
            return (0, r.jsx)(
                "pre",
                {
                    children: (0, r.jsxs)("div", {
                        className: k.Hy,
                        children: [
                            C.p5
                                ? (0, r.jsx)("div", { className: k.lB, children: (0, r.jsx)(B, { text: e.content }) })
                                : null,
                            (0, r.jsx)(S.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: a()(U.kw, "hljs"),
                                children: (0, r.jsx)(d.c2, {
                                    createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
                                    webpackId: 752238,
                                    renderFallback: s,
                                    render: (t) => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n
                                                ? s()
                                                : (0, r.jsx)("code", {
                                                      className: a()(U.kw, "hljs", n.language),
                                                      dangerouslySetInnerHTML: { __html: n.value },
                                                  });
                                        }
                                    },
                                }),
                            }),
                        ],
                    }),
                },
                i.key,
            );
        },
    },
    text: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, r.jsx)("span", { children: e.content }, n.key)
                : (0, r.jsx)("span", { children: t(e.content, n) }, n.key),
    },
    spoiler: {
        react: (e, t, n) =>
            (0, r.jsx)(
                T.Ay,
                {
                    type: T.Ay.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== c.A || t ? e : i.cloneElement(e, { tabIndex: -1 }),
                    children: () => t(e.content, n),
                },
                n.key,
            ),
    },
    soundboard: {
        react: (e, t, n) =>
            (0, r.jsx)(g.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react(e, t, n) {
            let i = () => {
                V(e.guildId, e.id, e.itemId);
            };
            return (0, R.d)(e.id)
                ? (0, r.jsxs)(
                      h.A,
                      {
                          role: "link",
                          onClick: i,
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, r.jsx)(m.A, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null;
        },
    },
    timestamp: { react: (e, t, n) => (0, r.jsx)(O.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                s = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(i, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? k.tZ : null,
                style: { "--totalCharacters": s },
                children: e.items.map((e, i) => {
                    let s = (0, o.reactElement)("span", `${n.key}-${i}-innerSpan`, { children: t(e, n) });
                    return (0, o.reactElement)("li", `${n.key}-${i}` + i, {
                        children: [s, (0, r.jsx)(l.AC4, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let i = (0, o.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, o.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
                children: [i, (0, r.jsx)(l.AC4, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? k.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let i = N.A.getGuild(e.guildId);
            return (0, r.jsx)(p.A, { guild: i, children: (0, R.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, r.jsx)(f.A, { iconType: e.iconType, children: (0, R.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, r.jsx)(E.A, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, o.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: r,
                className: n.formatInline ? k.tZ : null,
            });
        },
    },
    silentPrefix: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, r.jsx)("span", { children: e.content }, n.key)
                : (0, r.jsx)("span", { children: t(e.content, n) }, n.key),
    },
};
function j(e) {
    return {
        ...H,
        link: (0, M.A)(e),
        devLink: (0, w.A)(e),
        emoji: G(e),
        customEmoji: F(e),
        channelMention: (0, D.A)(e),
        commandMention: (0, L.Ay)(e),
        attachmentLink: (0, b.A)(e),
    };
}
