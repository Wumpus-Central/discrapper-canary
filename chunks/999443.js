"use strict";
n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(791332),
    l = n(939249),
    u = n(933832),
    c = n(624479),
    d = n(140735),
    _ = n(73153),
    f = n(9578),
    p = n(268218),
    h = n(508675),
    E = n(232042),
    m = n(906754),
    g = n(332173),
    A = n(37632),
    I = n(253174),
    T = n(490040),
    S = n(930101),
    y = n(976860),
    N = n(302031),
    v = n(157941),
    C = n(696451),
    O = n(317525),
    R = n(71393),
    b = n(957565),
    D = n(365526),
    L = n(678473),
    w = n(997954),
    M = n(556300),
    P = n(990474),
    x = n(620700),
    k = n(49005),
    U = n(652215),
    G = n(746080),
    F = n(992595),
    V = n(429128);
function B(e) {
    let { text: t } = e,
        [n, s] = i.useState(!1);
    return (0, r.jsx)(l.D, {
        onClick: () => {
            (0, b.C)(
                t,
                () => s(!0),
                () => s(!1),
            );
        },
        children: n
            ? (0, r.jsx)(u.A, { size: "xs", color: "currentColor" })
            : (0, r.jsx)(c.T, { size: "xs", color: "currentColor" }),
    });
}
let H = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                "div",
                {
                    className: F.h,
                    children: [
                        (0, r.jsx)("div", { className: F.r }),
                        (0, r.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, r.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: { react: (e, t, n) => (0, r.jsx)("span", { className: "highlight", children: e.content }, n.key) },
    paragraph: { react: (e, t, n) => (0, r.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: { react: (e, t, n) => (0, r.jsx)("code", { className: "inline", children: (0, D.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, i) {
            let s = () => (0, r.jsx)("code", { className: a()(V.kw, "hljs"), children: (0, D.t)(e, t, i) });
            return (0, r.jsx)(
                "pre",
                {
                    children: (0, r.jsxs)("div", {
                        className: F.Hy,
                        children: [
                            b.p5
                                ? (0, r.jsx)("div", { className: F.lB, children: (0, r.jsx)(B, { text: e.content }) })
                                : null,
                            (0, r.jsx)(v.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: a()(V.kw, "hljs"),
                                children: (0, r.jsx)(p.c2, {
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
                                                      className: a()(V.kw, "hljs", n.language),
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
                N.Ay,
                {
                    type: N.Ay.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== f.A || t ? e : i.cloneElement(e, { tabIndex: -1 }),
                    children: () => t(e.content, n),
                },
                n.key,
            ),
    },
    soundboard: {
        react: (e, t, n) =>
            (0, r.jsx)(T.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, t, n) =>
            (0, D.d)(e.id)
                ? (0, r.jsxs)(
                      g.A,
                      {
                          role: "link",
                          onClick: () => {
                              !(function (e, t, n) {
                                  let r = R.A.getGuild(e);
                                  if (null == e || null == r) return;
                                  let i = (t) => {
                                      r.features.has(U.GuildFeatures.COMMUNITY) && (0, y.pX)(U.BVt.CHANNEL(e, t));
                                  };
                                  switch (t) {
                                      case "home":
                                      case "guide":
                                          i(G.VV.GUILD_HOME);
                                          break;
                                      case "browse":
                                          i(G.VV.CHANNEL_BROWSER);
                                          break;
                                      case "customize":
                                          i(G.VV.CUSTOMIZE_COMMUNITY);
                                          break;
                                      case "linked-roles":
                                          if (null != n) {
                                              let t = C.Ay.getSelfMember(e);
                                              if (null == t) return;
                                              let r = O.A.getRole(e, n);
                                              null == r || t.roles.includes(r.id)
                                                  ? _.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                    })
                                                  : _.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                        role: r,
                                                    });
                                          } else
                                              _.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
                                  }
                              })(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, r.jsx)(A.A, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null,
    },
    timestamp: { react: (e, t, n) => (0, r.jsx)(L.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                s = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(i, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? F.tZ : null,
                style: { "--totalCharacters": s },
                children: e.items.map((e, i) => {
                    let s = (0, o.reactElement)("span", `${n.key}-${i}-innerSpan`, { children: t(e, n) });
                    return (0, o.reactElement)("li", `${n.key}-${i}` + i, {
                        children: [s, (0, r.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let i = (0, o.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, o.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
                children: [i, (0, r.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? F.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let i = R.A.getGuild(e.guildId);
            return (0, r.jsx)(m.A, { guild: i, children: (0, D.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, r.jsx)(E.A, { iconType: e.iconType, children: (0, D.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, r.jsx)(I.A, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, o.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: r,
                className: n.formatInline ? F.tZ : null,
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
        link: (0, k.A)(e),
        devLink: (0, x.A)(e),
        emoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, s) {
                    let { key: a, channelId: o, messageId: l } = s;
                    return e.src
                        ? (0, r.jsx)(
                              S.H,
                              { node: e, tooltipPosition: t, enableClick: n, channelId: o, messageId: l },
                              a,
                          )
                        : (0, r.jsx)("span", { children: e.surrogate }, a);
                },
            };
        })(e),
        customEmoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, i, s) {
                    let { key: a, guildId: o, channelId: l, messageId: u } = s,
                        c = h.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
                    if (null != c) {
                        let t = c.require_colons;
                        e = { ...e, name: t ? `:${c.name}:` : c.name };
                    }
                    return (0, r.jsx)(
                        S.X,
                        { node: e, tooltipPosition: t, enableClick: n, channelId: l, messageId: u },
                        a,
                    );
                },
            };
        })(e),
        channelMention: (0, M.A)(e),
        commandMention: (0, P.Ay)(e),
        attachmentLink: (0, w.A)(e),
    };
}
