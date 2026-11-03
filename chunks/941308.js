t.d(n, { A: () => nc });
var l = t(477900),
    r = t(582128),
    i = t(733004),
    a = t(917310),
    u = t(292442),
    s = t(834730),
    o = t(791606),
    c = t(38405),
    d = t(997141);
let h = r.createContext(null);
function m() {
    return r.useContext(h);
}
var f = t(954403),
    p = t(503698),
    g = t.n(p),
    x = t(939249),
    v = t(933832),
    j = t(624479),
    I = t(143145),
    y = t(441136),
    A = t(957565),
    k = t(165648),
    b = t(969490);
function C(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(x.D, {
        onClick: function () {
            (0, A.C)(
                n,
                () => i(!0),
                () => i(!1),
            );
        },
        children: t
            ? (0, l.jsx)(v.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(j.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var S = t(17928),
    w = t(236285),
    M = t(7584),
    N = t(930101),
    E = t(690521),
    P = t(307731);
let L = r.createContext(!1);
function $(e) {
    let { value: n, jumboable: t } = e,
        r = E.Ay.getURL(n),
        i = M.Ay.convertSurrogateToName(n),
        a = m();
    return (0, l.jsx)(N.H, {
        node: { name: i, src: r, jumboable: t },
        channelId: a?.channelId,
        messageId: a?.messageId,
    });
}
function _(e) {
    let { value: n, jumboable: t } = e,
        r = m(),
        i = r?.guildId,
        a = (0, S.bG)([w.Ay], () => w.Ay.getDisambiguatedEmojiContext(i).getById(String(n.id)), [i, n.id]),
        u = a?.name ?? n.name;
    return (
        null != a && a.require_colons && (u = `:${a.name}:`),
        (0, l.jsx)(N.X, {
            node: { name: u, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function z() {
    return m()?.formatInline === !0 ? k.tZ : void 0;
}
var G = t(588975),
    T = t(442433),
    R = t(9578),
    F = t(975807),
    B = t(380610),
    J = t(235393),
    U = t(258072),
    H = t(694403),
    q = t(332173),
    D = t(679164),
    O = t(734057),
    W = t(123917),
    K = t(376943);
function Q(e) {
    let n = K.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = K.BM.exec(e);
    if (null == t) return null;
    let [, l, r, i, a] = t;
    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
        ? null
        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0, conversationId: (0, K.te)(a) };
}
var X = t(333421),
    Z = t(100392),
    Y = t(836156);
let V = /^dev:\/\//i,
    ee = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    en = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    et = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    el = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function er(e) {
    let { url: n } = e,
        t =
            (0, B.vS)(n) || (0, B.h4)(n)
                ? (0, l.jsx)(ee, { url: n })
                : (0, Z.W0)(n)
                  ? (0, l.jsx)(en, { url: n })
                  : (0, Y.i)(n)
                    ? (0, l.jsx)(et, { url: n })
                    : (0, X.my)(n)
                      ? (0, l.jsx)(el, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var ei = t(192308),
    ea = t(47167),
    eu = t(499211),
    es = t(706083),
    eo = t(78390),
    ec = t(392605),
    ed = t(990474),
    eh = t(232042),
    em = t(266645),
    ef = t(906754),
    ep = t(37632),
    eg = t(593284),
    ex = t(288539),
    ev = t(317525),
    ej = t(71393),
    eI = t(994500),
    ey = t(287809),
    eA = t(147036),
    ek = t(403362);
let eb = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eC = t(73510),
    eS = t(105292);
function ew(e) {
    let { channelId: n, guildId: r, messageId: i, conversationId: a } = e,
        u = (0, eu.A)(n),
        {
            name: s,
            iconType: o,
            isForumPost: c,
            hasAccess: d,
        } = (0, S.cf)(
            [O.A, ey.default, eI.A],
            () => {
                let e = O.A.getChannel(n);
                return {
                    name: null != e ? (0, ea.m1)(e, ey.default, eI.A) : void 0,
                    iconType: (0, eA.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, K.nc)(e),
                };
            },
            [n],
        ),
        h = m(),
        f = h?.noStyleAndInteraction !== !0;
    if (null == o) return;
    let p = r === h?.guildId || null == r,
        g =
            d || u.isSubscriptionGated
                ? p || null == s
                    ? (0, l.jsx)(eh.A, {
                          iconType: o,
                          children: s ?? (0, l.jsx)("em", { children: eS.intl.string(eS.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eM, { guildId: r, children: s })
                : (0, l.jsx)(eh.A, { iconType: "locked", children: eS.intl.string(eS.t["/YzI63"]) }),
        x = null;
    return (
        null != i &&
            (x = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ep.A, {}), (0, l.jsx)(eh.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(q.A, {
            role: "link",
            onClick: f
                ? function (e) {
                      (e?.stopPropagation(), (0, es.o)(r, n, i, a), (0, ei.closeAllModals)());
                  }
                : void 0,
            onContextMenu: f
                ? function (e) {
                      let r = O.A.getChannel(n);
                      (0, T.L3)(e, async () => {
                          let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                              t.bind(t, 254106),
                          );
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  channelId: r?.id ?? n,
                                  originalLink: null,
                                  messageId: i,
                              });
                      });
                  }
                : void 0,
            className: "channelMention",
            children: [g, x],
        })
    );
}
function eM(e) {
    let { guildId: n, children: t } = e,
        r = (0, S.bG)([ej.A], () => ej.A.getGuild(n), [n]);
    return (0, l.jsxs)(ef.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ep.A, {}) : null, t] });
}
function eN(e) {
    let { id: n } = e,
        t = m();
    return (0, l.jsx)(ex.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
        inlinePreview: t?.noStyleAndInteraction,
    });
}
function eE(e) {
    let { id: n } = e,
        t = m(),
        r = t?.guildId,
        i = (0, S.bG)([ev.A], () => (null != r ? ev.A.getRole(r, n)?.name : null) ?? eS.intl.string(eS.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(eg.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${i}`,
    });
}
function eP(e) {
    let { id: n } = e,
        t = m();
    return (0, l.jsx)(em.A, { gameId: n, authorId: t?.authorId });
}
function eL(e) {
    let { roleName: n } = e,
        t = m();
    return (0, l.jsx)(eg.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function e$(e) {
    let { route: n, itemId: t } = e,
        r = m(),
        i = r?.guildId,
        a = (0, eo.Q)(n),
        u = (0, S.bG)([ev.A], () => (0, eo.f)(ev.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(q.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, ec.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != u ? (0, l.jsx)(ep.A, {}) : null, u],
          });
}
function e_(e) {
    let { id: n, name: t } = e,
        i = m(),
        a = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eC.v4}${e}`).join("")}`;
        }, [n, t]),
        u = r.useMemo(
            () => ({ type: "commandMention", channelId: i?.channelId, commandId: n, commandName: t, commandKey: a }),
            [i?.channelId, a, n, t],
        );
    return (0, l.jsx)(ed.gn, { node: u, children: t });
}
var ez = t(147190);
function eG(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: a } = e,
        u = (0, S.bG)([O.A], () => (null != i && null == O.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(ew, { channelId: u, guildId: n, messageId: r, conversationId: a });
}
function eT(e) {
    let { url: n, name: i, interactive: a } = e,
        u = r.useCallback(async () => {
            let e = await D.AN(n);
            (J.A.trackLinkClicked(e), (0, F.A)(e));
        }, [n]),
        s = r.useCallback(
            (e) => {
                (0, T.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(q.A, {
        role: "link",
        href: n,
        onClick: a ? u : void 0,
        onContextMenu: a ? s : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(G.P, { size: "xs", className: ez.Kk, color: "currentColor" }), i],
    });
}
var eR = t(196765),
    eF = t(976245),
    eB = t(302031);
function eJ() {
    return (0, eF.y)()((e) => ({
        revealedIds: new Set(),
        hoveredId: null,
        reveal(n) {
            e((e) => (e.revealedIds.has(n) ? e : { revealedIds: new Set(e.revealedIds).add(n) }));
        },
        setHovered(n, t) {
            e((e) => (t ? { hoveredId: n } : e.hoveredId === n ? { hoveredId: null } : e));
        },
    }));
}
let eU = (0, eF.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eH = r.createContext(eU);
function eq(e) {
    let { children: n } = e,
        [t] = r.useState(eJ);
    return (0, l.jsx)(eH.Provider, { value: t, children: n });
}
function eD(e) {
    return "link" === e.type;
}
var eO = t(785562),
    eW = t(379418),
    eK = t(152959);
t(321073);
var eQ = t(448767),
    eX = t(886737);
function eZ(e) {
    return "link" === e.type;
}
function eY(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eV(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eV(e.value.content) } };
        case "small":
            return { ...e, value: { content: eV(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eY) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eY) })) } };
        default:
            return e;
    }
}
function eV(e) {
    return e.map(e0);
}
function e0(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != Q(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, eX.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eV(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eV(e.value.content) } };
        default:
            return e;
    }
}
var e1 = t(254221);
let e3 = [],
    e9 = {
        text: function (e) {
            let { node: n } = e;
            return (0, l.jsx)(f.z, { text: n.value });
        },
        paragraph: function (e) {
            let { siblings: n, index: t, children: r } = e,
                i = m()?.formatInline === !0,
                a = t === n.length - 1;
            return i
                ? (0, l.jsxs)(l.Fragment, { children: [r, a ? null : " "] })
                : (0, l.jsxs)("span", { children: [r, a ? null : (0, l.jsx)("br", {})] });
        },
        empty: function () {
            return m()?.formatInline === !0 ? " " : "\n";
        },
        emoji: function (e) {
            let { value: n, type: t } = e,
                i = r.useContext(L);
            switch (t) {
                case "unicode":
                    return (0, l.jsx)($, { value: n, jumboable: i });
                case "custom":
                    return (0, l.jsx)(_, { value: n, jumboable: i });
            }
        },
        link: function (e) {
            let { text: n, url: t, title: r, children: i } = e,
                a = m(),
                u = a?.noStyleAndInteraction === !0,
                s = null == n || 0 === n.length;
            if (s) {
                let e = Q(t);
                if (null != e) return (0, l.jsx)(eG, { ...e });
                let n = (0, U.h)(t);
                if (null != n) return (0, l.jsx)(eT, { url: t, name: n.name, interactive: !u });
            }
            if ((0, B.vS)(t)) return (0, l.jsx)(er, { url: t });
            let o = (0, H.W1)(t),
                c = s
                    ? (o?.displayTarget ?? t)
                    : (function e(n) {
                          return n
                              .map((n) => {
                                  switch (n.type) {
                                      case "text":
                                      case "code":
                                          return n.value;
                                      case "bold":
                                      case "italic":
                                      case "underline":
                                      case "strikethrough":
                                          return e(n.value);
                                      case "spoiler":
                                          return e(n.value.content);
                                      default:
                                          return "";
                                  }
                              })
                              .join("");
                      })(n),
                d = s ? (0, l.jsx)(f.z, { text: c }) : i;
            if (V.test(t))
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("span", { children: d }), (0, l.jsx)(er, { url: t })],
                });
            let h = r;
            return (s ||
                (h =
                    null != r && r.length > 0
                        ? `${r}

(${t})`
                        : t),
            u)
                ? (0, l.jsx)("span", { title: h ?? t, children: d })
                : (0, l.jsx)(R.A, {
                      title: h,
                      href: t,
                      trusted: () => (0, W.m)(o?.target ?? t, null != r && r.length > 0 ? r : c),
                      messageId: a?.messageId,
                      channelId: a?.channelId,
                      children: (0, l.jsx)("span", { children: d }),
                  });
        },
        list: function (e) {
            let { type: n, children: t, value: r, items: i } = e,
                a = m()?.formatInline === !0 ? k.tZ : void 0;
            switch (n) {
                case "ordered":
                    let u = (r + i.length - 1).toString().length;
                    return (0, l.jsx)("ol", {
                        start: r,
                        className: a,
                        style: { "--totalCharacters": u, "--olCounterStart": r - 1 },
                        children: t,
                    });
                case "unordered":
                    return (0, l.jsx)("ul", { className: a, children: t });
            }
        },
        listItem: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("li", { children: n });
        },
        code: function (e) {
            let { node: n } = e;
            return (0, l.jsx)("code", { className: "inline", children: (0, l.jsx)(f.z, { text: n.value }) });
        },
        code_block: function (e) {
            let { language: n, content: t } = e;
            if (m()?.formatInline === !0) {
                let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
                return (
                    n?.toLowerCase() === "ansi" && (e = e.replaceAll(I.Q0, "")),
                    (0, l.jsx)("code", { className: "inline", children: e })
                );
            }
            return (0, l.jsx)("pre", {
                children: (0, l.jsxs)("div", {
                    className: k.Hy,
                    children: [
                        A.p5 ? (0, l.jsx)("div", { className: k.lB, children: (0, l.jsx)(C, { text: t }) }) : null,
                        (0, l.jsx)(y.E, { code: t, lang: n, className: g()(b.kw, "hljs") }),
                    ],
                }),
            });
        },
        quote: function (e) {
            let { children: n } = e;
            return (0, l.jsxs)("div", {
                className: k.h,
                children: [(0, l.jsx)("div", { className: k.r }), (0, l.jsx)("blockquote", { children: n })],
            });
        },
        bold: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("strong", { children: n });
        },
        italic: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("em", { children: n });
        },
        underline: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("u", { children: n });
        },
        strikethrough: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("s", { children: n });
        },
        mention: function (e) {
            let { type: n, value: t } = e;
            switch (n) {
                case "channel":
                    return (0, l.jsx)(ew, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eN, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eE, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eL, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eL, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eP, { id: String(t) });
                case "command":
                    return (0, l.jsx)(e_, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(e$, {
                        route: eb[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, ek.xb)(n);
        },
        heading: function (e) {
            let { level: n, children: t } = e,
                r = `h${n}`;
            return (0, l.jsx)(r, { className: z(), children: t });
        },
        small: function (e) {
            let { children: n } = e;
            return (0, l.jsx)("small", { className: z(), children: n });
        },
        spoiler: function (e) {
            let { children: n, id: t } = e,
                i = r.useContext(eH),
                a = (0, eR.P)(i, (e) => e.revealedIds.has(t)),
                u = (0, eR.P)(i, (e) => e.hoveredId === t),
                s = r.useCallback(() => i.getState().reveal(t), [i, t]),
                o = r.useCallback(() => i.getState().setHovered(t, !0), [i, t]),
                c = r.useCallback(() => i.getState().setHovered(t, !1), [i, t]);
            return (0, l.jsx)(eB.Ay, {
                type: eB.Ay.Types.TEXT,
                obscured: !a,
                hovered: u,
                onReveal: s,
                onMouseEnter: o,
                onMouseLeave: c,
                children: () => n,
            });
        },
        timestamp: function (e) {
            let { value: n, style: t } = e,
                r = (0, eW.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eO.A, { node: r });
        },
    };
function e4(e) {
    let {
        content: n,
        parsed: t,
        allowJumboEmoji: r = !0,
        hideSingleLinkContent: i = !1,
        redactRestrictedContent: a = !1,
    } = e;
    return (0, l.jsx)(u.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(e2, { content: n, error: t });
        },
        children: (0, l.jsx)(e7, {
            content: n,
            parsed: t,
            allowJumboEmoji: r,
            hideSingleLinkContent: i,
            redactRestrictedContent: a,
        }),
    });
}
function e7(e) {
    let { content: n, parsed: t, allowJumboEmoji: u, hideSingleLinkContent: s, redactRestrictedContent: o } = e;
    if (((0, eK.bf)(null == t), null != t && "error" in t)) throw t.error;
    let c = t?.ast ?? e3,
        d = r.useMemo(
            () =>
                u &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, a.tJ)(e))
                        switch (t.type) {
                            case "emoji":
                                n += 1;
                                break;
                            case "paragraph":
                            case "empty":
                                break;
                            case "text":
                                if ("" !== t.value.trim()) return !1;
                                break;
                            default:
                                return !1;
                        }
                    return n <= P.MAX_EMOJI_TO_BE_JUMBO;
                })(c),
            [u, c],
        ),
        h = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t, redactRestrictedContent: l = !1 } = n,
                        r = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eQ.tq : (0, eQ.dn)(n.value, eZ);
                        })(e);
                    if (t && (0, eQ.iz)(r)) return [];
                    let i = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eZ(e) ? e.value.url : null;
                                return null == t || !(0, eQ.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? i.map(eY) : i;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, l.jsx)(L.Provider, {
        value: d,
        children: (0, l.jsx)(eq, { children: (0, l.jsx)(i.$, { nodes: h, renderers: e9 }) }, n),
    });
}
function e2(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            c.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(s.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: e1.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), eS.intl.string(eS.t.dpFK4M)],
                }),
            ],
        })
    );
}
var e6 = t(903369),
    e5 = t(146849),
    e8 = t(174459),
    ne = t(521981),
    nn = t(594808),
    nt = t(652215),
    nl = t(910379);
function nr(e) {
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
function ni(e, n) {
    return (0, e5.I2)({ location: n }).enabled && null == e.postProcessor;
}
function na(e, n) {
    let { restrictedPreview: t, postProcessor: l, ...r } = n;
    return (0, ne.Ay)(e, { ...r, postProcessor: t ? (e, n) => (0, eX.A)(l?.(e, n) ?? e) : l });
}
function nu(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: eS.intl.string(eS.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(nt.pr7.LOADING))
        return { content: (0, l.jsx)(nn.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === nt.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: n } = t(550997);
        return n(e, nl, {
            track: (e, n) => {
                e8.default.track(e, n);
            },
        });
    }
    return null;
}
function ns(e) {
    let { message: n, options: t, parsed: i } = e,
        a = nr(t),
        u = ni(a, "MessageRenderedContent"),
        s = n.id,
        o = n.channel_id,
        c = (0, e6.U)(n),
        d = n.author?.id,
        { viewingChannelId: m, formatInline: f, noStyleAndInteraction: p } = a,
        g = r.useMemo(
            () => ({
                messageId: s,
                channelId: o,
                viewingChannelId: m,
                guildId: c,
                authorId: d,
                formatInline: f,
                noStyleAndInteraction: p,
            }),
            [s, o, m, c, d, f, p],
        );
    return r.useMemo(() => {
        let e = nu(n);
        return null != e
            ? e.content
            : u
              ? (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(h.Provider, {
                        value: g,
                        children: (0, l.jsx)(e4, {
                            content: n.content,
                            parsed: i,
                            allowJumboEmoji: !f && n.type !== nt.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: a.hideSimpleEmbedContent && (0, eQ.k5)(n.embeds),
                            redactRestrictedContent: a.restrictedPreview,
                        }),
                    }),
                })
              : na(n, a).content;
    }, [n.content, n.customRenderedContent, n.embeds, n.interaction, n.state, n.type, a, u, i, g]);
}
let no = { content: null, hasSpoilerEmbeds: !1, hasBailedAst: !1 };
function nc(e, n) {
    let t = nr(n),
        i = ni(t, "useMessageRenderedContent"),
        u = e?.content ?? null,
        s = (function (e, n) {
            let { enabled: t, formatInline: l } = n,
                i = (0, eK.n9)(t),
                u = (0, d.j)({ formatInline: l });
            return r.useMemo(() => {
                if (!t || !i || null == e) return null;
                try {
                    return { ast: (0, a.qg)(e, u) };
                } catch (e) {
                    return { error: e };
                }
            }, [t, i, e, u]);
        })(u, { enabled: i, formatInline: t.formatInline }),
        o =
            null != s && "ast" in s
                ? (function (e) {
                      for (let n of (0, a.tJ)(e))
                          if ("spoiler" === n.type && Array.from((0, a.tJ)(n.value.content)).some(eD)) return !0;
                      return !1;
                  })(s.ast)
                : (u?.includes("||") ?? !1),
        c = e?.id,
        h = e?.channel_id,
        m = null != e ? (0, e6.U)(e) : void 0,
        f = e?.author?.id;
    return r.useMemo(() => {
        if (null == e) return no;
        let n = nu(e);
        return null != n
            ? n
            : i
              ? {
                    content: (0, l.jsx)(ns, { message: e, options: t, parsed: s }),
                    hasSpoilerEmbeds: o,
                    hasBailedAst: !1,
                }
              : na(e, t);
    }, [e?.content, e?.customRenderedContent, e?.embeds, e?.interaction, e?.state, e?.type, t, i, s, o, c, h, m, f]);
}
