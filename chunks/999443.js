"use strict";
n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(791332),
    o = n(939249),
    c = n(933832),
    u = n(624479),
    d = n(140735),
    h = n(73153),
    m = n(9578),
    p = n(268218),
    f = n(508675),
    g = n(232042),
    _ = n(906754),
    x = n(332173),
    A = n(37632),
    C = n(253174),
    E = n(490040),
    I = n(930101),
    v = n(976860),
    y = n(302031),
    S = n(157941),
    b = n(696451),
    N = n(317525),
    T = n(71393),
    j = n(957565),
    R = n(365526),
    w = n(678473),
    L = n(997954),
    M = n(556300),
    k = n(990474),
    O = n(620700),
    P = n(49005),
    D = n(652215),
    U = n(746080),
    V = n(992595),
    G = n(429128);
function F(e) {
    let { text: t } = e,
        [n, s] = l.useState(!1);
    return (0, i.jsx)(o.D, {
        onClick: () => {
            (0, j.C)(
                t,
                () => s(!0),
                () => s(!1),
            );
        },
        children: n
            ? (0, i.jsx)(c.A, { size: "xs", color: "currentColor" })
            : (0, i.jsx)(u.T, { size: "xs", color: "currentColor" }),
    });
}
let B = {
    blockQuote: {
        react: (e, t, n) =>
            (0, i.jsxs)(
                "div",
                {
                    className: V.h,
                    children: [
                        (0, i.jsx)("div", { className: V.r }),
                        (0, i.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, i.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: { react: (e, t, n) => (0, i.jsx)("span", { className: "highlight", children: e.content }, n.key) },
    paragraph: { react: (e, t, n) => (0, i.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: { react: (e, t, n) => (0, i.jsx)("code", { className: "inline", children: (0, R.t)(e, t, n) }, n.key) },
    codeBlock: {
        react(e, t, l) {
            let s = () => (0, i.jsx)("code", { className: r()(G.kw, "hljs"), children: (0, R.t)(e, t, l) });
            return (0, i.jsx)(
                "pre",
                {
                    children: (0, i.jsxs)("div", {
                        className: V.Hy,
                        children: [
                            j.p5
                                ? (0, i.jsx)("div", { className: V.lB, children: (0, i.jsx)(F, { text: e.content }) })
                                : null,
                            (0, i.jsx)(S.l, {
                                location: "MarkupReactRules",
                                code: e.content,
                                lang: e.lang,
                                className: r()(G.kw, "hljs"),
                                children: (0, i.jsx)(p.c2, {
                                    createPromise: () =>
                                        Promise.all([n.e("57036"), n.e("75134")]).then(n.bind(n, 752238)),
                                    webpackId: 752238,
                                    renderFallback: s,
                                    render: (t) => {
                                        if (!(e.lang && t.hasLanguage(e.lang))) return s();
                                        {
                                            let n = t.highlight(e.lang, e.content, !0);
                                            return null == n
                                                ? s()
                                                : (0, i.jsx)("code", {
                                                      className: r()(G.kw, "hljs", n.language),
                                                      dangerouslySetInnerHTML: { __html: n.value },
                                                  });
                                        }
                                    },
                                }),
                            }),
                        ],
                    }),
                },
                l.key,
            );
        },
    },
    text: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, i.jsx)("span", { children: e.content }, n.key)
                : (0, i.jsx)("span", { children: t(e.content, n) }, n.key),
    },
    spoiler: {
        react: (e, t, n) =>
            (0, i.jsx)(
                y.Ay,
                {
                    type: y.Ay.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== m.A || t ? e : l.cloneElement(e, { tabIndex: -1 }),
                    children: () => t(e.content, n),
                },
                n.key,
            ),
    },
    soundboard: {
        react: (e, t, n) =>
            (0, i.jsx)(E.Ay, {
                channelId: e.channelId,
                messageId: e.messageId,
                soundId: e.soundId,
                jumbo: e.jumboable,
                messageSounds: n.soundboardSounds,
            }),
    },
    staticRouteLink: {
        react: (e, t, n) =>
            (0, R.d)(e.id)
                ? (0, i.jsxs)(
                      x.A,
                      {
                          role: "link",
                          onClick: () => {
                              !(function (e, t, n) {
                                  let i = T.A.getGuild(e);
                                  if (null == e || null == i) return;
                                  let l = (t) => {
                                      i.features.has(D.GuildFeatures.COMMUNITY) && (0, v.pX)(D.BVt.CHANNEL(e, t));
                                  };
                                  switch (t) {
                                      case "home":
                                      case "guide":
                                          l(U.VV.GUILD_HOME);
                                          break;
                                      case "browse":
                                          l(U.VV.CHANNEL_BROWSER);
                                          break;
                                      case "customize":
                                          l(U.VV.CUSTOMIZE_COMMUNITY);
                                          break;
                                      case "linked-roles":
                                          if (null != n) {
                                              let t = b.Ay.getSelfMember(e);
                                              if (null == t) return;
                                              let i = N.A.getRole(e, n);
                                              null == i || t.roles.includes(i.id)
                                                  ? h.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                    })
                                                  : h.h.dispatch({
                                                        type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                                                        guildId: e,
                                                        role: i,
                                                    });
                                          } else
                                              h.h.dispatch({ type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW", guildId: e });
                                  }
                              })(e.guildId, e.id, e.itemId);
                          },
                          className: "channelMention",
                          iconType: e.id,
                          children: [
                              t(e.mainContent, n),
                              null != e.itemContent ? (0, i.jsx)(A.A, {}) : null,
                              null != e.itemContent ? t(e.itemContent, n) : null,
                          ],
                      },
                      n.key,
                  )
                : null,
    },
    timestamp: { react: (e, t, n) => (0, i.jsx)(w.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let l = e.ordered ? "ol" : "ul",
                s = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, a.reactElement)(l, `${n.key}`, {
                start: e.start,
                className: n.formatInline ? V.tZ : null,
                style: { "--totalCharacters": s },
                children: e.items.map((e, l) => {
                    let s = (0, a.reactElement)("span", `${n.key}-${l}-innerSpan`, { children: t(e, n) });
                    return (0, a.reactElement)("li", `${n.key}-${l}` + l, {
                        children: [s, (0, i.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let l = (0, a.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, a.reactElement)("h" + e.level, n?.key != null ? `${n.key}` : null, {
                children: [l, (0, i.jsx)(d.A, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? V.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let l = T.A.getGuild(e.guildId);
            return (0, i.jsx)(_.A, { guild: l, children: (0, R.t)(e, t, n) }, n.key);
        },
    },
    channel: { react: (e, t, n) => (0, i.jsx)(g.A, { iconType: e.iconType, children: (0, R.t)(e, t, n) }, n.key) },
    message: { react: (e, t, n) => (0, i.jsx)(C.A, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let i = (0, a.reactElement)("span", `${n.key}-innerSpan`, { children: t(e.content, n) });
            return (0, a.reactElement)("small", n?.key != null ? `${n.key}` : null, {
                children: i,
                className: n.formatInline ? V.tZ : null,
            });
        },
    },
    silentPrefix: {
        react: (e, t, n) =>
            "string" == typeof e.content
                ? (0, i.jsx)("span", { children: e.content }, n.key)
                : (0, i.jsx)("span", { children: t(e.content, n) }, n.key),
    },
};
function H(e) {
    return {
        ...B,
        link: (0, P.A)(e),
        devLink: (0, O.A)(e),
        emoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, l, s) {
                    let { key: r, channelId: a, messageId: o } = s;
                    return e.src
                        ? (0, i.jsx)(
                              I.H,
                              { node: e, tooltipPosition: t, enableClick: n, channelId: a, messageId: o },
                              r,
                          )
                        : (0, i.jsx)("span", { children: e.surrogate }, r);
                },
            };
        })(e),
        customEmoji: (function (e) {
            let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
            return {
                react(e, l, s) {
                    let { key: r, guildId: a, channelId: o, messageId: c } = s,
                        u = f.Ay.getDisambiguatedEmojiContext(a).getById(e.emojiId);
                    if (null != u) {
                        let t = u.require_colons;
                        e = { ...e, name: t ? `:${u.name}:` : u.name };
                    }
                    return (0, i.jsx)(
                        I.X,
                        { node: e, tooltipPosition: t, enableClick: n, channelId: o, messageId: c },
                        r,
                    );
                },
            };
        })(e),
        channelMention: (0, M.A)(e),
        commandMention: (0, k.Ay)(e),
        attachmentLink: (0, L.A)(e),
    };
}
