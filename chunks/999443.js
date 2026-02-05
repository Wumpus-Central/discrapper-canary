"use strict";
n.d(t, { A: () => H });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(253174),
    E = n(490040),
    A = n(930101),
    I = n(976860),
    T = n(302031),
    y = n(696451),
    S = n(317525),
    v = n(71393),
    C = n(957565),
    b = n(365526),
    N = n(678473),
    R = n(997954),
    O = n(556300),
    D = n(990474),
    L = n(620700),
    w = n(783833),
    x = n(49005),
    P = n(652215),
    M = n(746080),
    k = n(206314),
    U = n(829681);
function G(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, a) {
            let { key: s, channelId: o, messageId: l } = a;
            return e.src
                ? (0, r.jsx)(A.H, { node: e, tooltipPosition: t, enableClick: n, channelId: o, messageId: l }, s)
                : (0, r.jsx)("span", { children: e.surrogate }, s);
        },
    };
}
function V(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, a) {
            let { key: s, guildId: o, channelId: l, messageId: u, isInteracting: c } = a,
                d = _.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
            if (null != d) {
                let t = d.require_colons;
                e = { ...e, name: t ? `:${d.name}:` : d.name };
            }
            return (0, r.jsx)(
                A.X,
                { isInteracting: c, node: e, tooltipPosition: t, enableClick: n, channelId: l, messageId: u },
                s,
            );
        },
    };
}
function F(e, t, n) {
    let r = v.A.getGuild(e);
    if (null == e || null == r) return;
    let i = (t) => {
        r.features.has(P.GuildFeatures.COMMUNITY) && (0, I.pX)(P.BVt.CHANNEL(e, t));
    };
    switch (t) {
        case "home":
        case "guide":
            i(M.VV.GUILD_HOME);
            break;
        case "browse":
            i(M.VV.CHANNEL_BROWSER);
            break;
        case "customize":
            i(M.VV.CUSTOMIZE_COMMUNITY);
            break;
        case "linked-roles":
            if (null != n) {
                let t = y.Ay.getSelfMember(e);
                if (null == t) return null;
                let r = S.A.getRole(e, n);
                null == r || t.roles.includes(r.id)
                    ? u.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e })
                    : u.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e, role: r });
            } else u.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
    }
}
function B(e) {
    let { text: t } = e,
        [n, a] = i.useState(!1),
        s = () => {
            (0, C.C)(
                t,
                () => a(!0),
                () => a(!1),
            );
        };
    return (0, r.jsx)(l.DUT, {
        onClick: s,
        children: n
            ? (0, r.jsx)(l.A9s, { size: "xs", color: "currentColor" })
            : (0, r.jsx)(l.TdU, { size: "xs", color: "currentColor" }),
    });
}
let j = {
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
    inlineCode: { react: (e, t, n) => (0, r.jsx)("code", { className: "inline", children: (0, b.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, i) {
            let a = () => (0, r.jsx)("code", { className: s()(U.kw, "hljs"), children: (0, b.t)(e, t, i) });
            return (0, r.jsx)(
                "pre",
                {
                    children: (0, r.jsxs)("div", {
                        className: k.Hy,
                        children: [
                            C.p5
                                ? (0, r.jsx)("div", { className: k.lB, children: (0, r.jsx)(B, { text: e.content }) })
                                : null,
                            (0, r.jsx)(d.c2, {
                                createPromise: () => Promise.resolve().then(n.bind(n, 752238)),
                                webpackId: 752238,
                                renderFallback: a,
                                render: (t) => {
                                    if (!(e.lang && t.hasLanguage(e.lang))) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n
                                            ? a()
                                            : (0, r.jsx)("code", {
                                                  className: s()(U.kw, "hljs", n.language),
                                                  dangerouslySetInnerHTML: { __html: n.value },
                                              });
                                    }
                                },
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
            (0, r.jsx)(E.Ay, {
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
                F(e.guildId, e.id, e.itemId);
            };
            return (0, b.d)(e.id)
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
    timestamp: { react: (e, t, n) => (0, r.jsx)(N.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(i, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? k.tZ : null,
                style: { "--totalCharacters": a },
                children: e.items.map((e, i) => {
                    let a = (0, o.reactElement)("span", `${n.key}-${i}-innerSpan`, { children: t(e, n) });
                    return (0, o.reactElement)("li", `${n.key}-${i}` + i, {
                        children: [a, (0, r.jsx)(l.AC4, { children: "," }, "screen-reader-pause")],
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
            let i = v.A.getGuild(e.guildId);
            return (0, r.jsx)(p.A, { guild: i, children: (0, b.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, r.jsx)(f.A, { iconType: e.iconType, children: (0, b.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, r.jsx)(g.A, {}, n.key) },
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
function H(e) {
    return {
        ...j,
        link: (0, x.A)(e),
        devLink: (0, L.A)(e),
        emoji: G(e),
        customEmoji: V(e),
        channelMention: (0, O.A)(e),
        commandMention: (0, D.Ay)(e),
        attachmentLink: (0, R.A)(e),
        gameMention: w.A,
    };
}
