n.d(t, { A: () => z }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(280230),
    l = n(397927),
    c = n(73153),
    u = n(9578),
    d = n(268218),
    f = n(508675),
    p = n(232042),
    _ = n(906754),
    h = n(332173),
    m = n(37632),
    g = n(253174),
    E = n(490040),
    b = n(930101),
    y = n(976860),
    O = n(302031),
    A = n(696451),
    v = n(317525),
    S = n(71393),
    I = n(957565),
    T = n(365526),
    C = n(678473),
    N = n(997954),
    R = n(556300),
    w = n(990474),
    P = n(620700),
    D = n(783833),
    x = n(49005),
    L = n(652215),
    j = n(746080),
    M = n(206314),
    k = n(829681);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, a) {
            let { key: s, channelId: o, messageId: l } = a;
            return e.src
                ? (0, r.jsx)(
                      b.H,
                      {
                          node: e,
                          tooltipPosition: t,
                          enableClick: n,
                          channelId: o,
                          messageId: l,
                      },
                      s,
                  )
                : (0, r.jsx)("span", { children: e.surrogate }, s);
        },
    };
}
function H(e) {
    let { emojiTooltipPosition: t = "top", enableEmojiClick: n = !0 } = e;
    return {
        react(e, i, a) {
            let { key: s, guildId: o, channelId: l, messageId: c, isInteracting: u } = a,
                d = f.Ay.getDisambiguatedEmojiContext(o).getById(e.emojiId);
            if (null != d) {
                let t = d.require_colons;
                e = F(G({}, e), { name: t ? ":".concat(d.name, ":") : d.name });
            }
            return (0, r.jsx)(
                b.X,
                {
                    isInteracting: u,
                    node: e,
                    tooltipPosition: t,
                    enableClick: n,
                    channelId: l,
                    messageId: c,
                },
                s,
            );
        },
    };
}
function Y(e, t, n) {
    let r = S.A.getGuild(e);
    if (null == e || null == r) return;
    let i = (t) => {
        r.features.has(L.GuildFeatures.COMMUNITY) && (0, y.pX)(L.BVt.CHANNEL(e, t));
    };
    switch (t) {
        case "home":
        case "guide":
            i(j.VV.GUILD_HOME);
            break;
        case "browse":
            i(j.VV.CHANNEL_BROWSER);
            break;
        case "customize":
            i(j.VV.CUSTOMIZE_COMMUNITY);
            break;
        case "linked-roles":
            if (null != n) {
                let t = A.Ay.getSelfMember(e);
                if (null == t) return null;
                let r = v.A.getRole(e, n);
                null == r || t.roles.includes(r.id)
                    ? c.h.dispatch({
                          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                          guildId: e,
                      })
                    : c.h.dispatch({
                          type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                          guildId: e,
                          role: r,
                      });
            } else
                c.h.dispatch({
                    type: "GUILD_ROLE_CONNECTIONS_MODAL_SHOW",
                    guildId: e,
                });
    }
}
function W(e) {
    let { text: t } = e,
        [n, a] = i.useState(!1),
        s = () => {
            (0, I.C)(
                t,
                () => a(!0),
                () => a(!1),
            );
        };
    return (0, r.jsx)(l.DUT, {
        onClick: s,
        children: n
            ? (0, r.jsx)(l.A9s, {
                  size: "xs",
                  color: "currentColor",
              })
            : (0, r.jsx)(l.TdU, {
                  size: "xs",
                  color: "currentColor",
              }),
    });
}
let K = {
    blockQuote: {
        react: (e, t, n) =>
            (0, r.jsxs)(
                "div",
                {
                    className: M.h,
                    children: [
                        (0, r.jsx)("div", { className: M.r }),
                        (0, r.jsx)("blockquote", { children: t(e.content, n) }),
                    ],
                },
                n.key,
            ),
    },
    s: { react: (e, t, n) => (0, r.jsx)("s", { children: t(e.content, n) }, n.key) },
    highlight: {
        react: (e, t, n) =>
            (0, r.jsx)(
                "span",
                {
                    className: "highlight",
                    children: e.content,
                },
                n.key,
            ),
    },
    paragraph: { react: (e, t, n) => (0, r.jsx)("p", { children: t(e.content, n) }, n.key) },
    inlineCode: {
        react: (e, t, n) =>
            (0, r.jsx)(
                "code",
                {
                    className: "inline",
                    children: (0, T.t)(e, t, n),
                },
                n.key,
            ),
    },
    codeBlock: {
        react(e, t, i) {
            let a = () =>
                (0, r.jsx)("code", {
                    className: s()(k.kw, "hljs"),
                    children: (0, T.t)(e, t, i),
                });
            return (0, r.jsx)(
                "pre",
                {
                    children: (0, r.jsxs)("div", {
                        className: M.Hy,
                        children: [
                            I.p5
                                ? (0, r.jsx)("div", {
                                      className: M.lB,
                                      children: (0, r.jsx)(W, { text: e.content }),
                                  })
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
                                                  className: s()(k.kw, "hljs", n.language),
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
                O.Ay,
                {
                    type: O.Ay.Types.TEXT,
                    inline: n.formatInline,
                    renderTextElement: (e, t) =>
                        null == e || e.type !== u.A || t ? e : i.cloneElement(e, { tabIndex: -1 }),
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
                Y(e.guildId, e.id, e.itemId);
            };
            return (0, T.d)(e.id)
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
    timestamp: { react: (e, t, n) => (0, r.jsx)(C.A, { node: e }, n.key) },
    list: {
        react: (e, t, n) => {
            let i = e.ordered ? "ol" : "ul",
                a = null == e.start ? void 0 : (e.start + (e.items.length - 1)).toString().length;
            return (0, o.reactElement)(i, "".concat(n.key), {
                start: e.start,
                className: n.formatInline ? M.tZ : null,
                style: { "--totalCharacters": a },
                children: e.items.map((e, i) => {
                    let a = (0, o.reactElement)("span", "".concat(n.key, "-").concat(i, "-innerSpan"), {
                        children: t(e, n),
                    });
                    return (0, o.reactElement)("li", "".concat(n.key, "-").concat(i) + i, {
                        children: [a, (0, r.jsx)(l.AC4, { children: "," }, "screen-reader-pause")],
                    });
                }),
            });
        },
    },
    heading: {
        react: (e, t, n) => {
            let i = (0, o.reactElement)("span", "".concat(n.key, "-innerSpan"), { children: t(e.content, n) });
            return (0, o.reactElement)("h" + e.level, (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                children: [i, (0, r.jsx)(l.AC4, { children: "," }, "screen-reader-pause")],
                className: n.formatInline ? M.tZ : null,
            });
        },
    },
    guild: {
        react: (e, t, n) => {
            let i = S.A.getGuild(e.guildId);
            return (0, r.jsx)(
                _.A,
                {
                    guild: i,
                    children: (0, T.t)(e, t, n),
                },
                n.key,
            );
        },
    },
    channel: {
        react: (e, t, n) =>
            (0, r.jsx)(
                p.A,
                {
                    iconType: e.iconType,
                    children: (0, T.t)(e, t, n),
                },
                n.key,
            ),
    },
    message: { react: (e, t, n) => (0, r.jsx)(g.A, {}, n.key) },
    subtext: {
        react: (e, t, n) => {
            let r = (0, o.reactElement)("span", "".concat(n.key, "-innerSpan"), { children: t(e.content, n) });
            return (0, o.reactElement)("small", (null == n ? void 0 : n.key) != null ? "".concat(n.key) : null, {
                children: r,
                className: n.formatInline ? M.tZ : null,
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
function z(e) {
    return F(G({}, K), {
        link: (0, x.A)(e),
        devLink: (0, P.A)(e),
        emoji: B(e),
        customEmoji: H(e),
        channelMention: (0, R.A)(e),
        commandMention: (0, w.Ay)(e),
        attachmentLink: (0, N.A)(e),
        gameMention: D.A,
    });
}
