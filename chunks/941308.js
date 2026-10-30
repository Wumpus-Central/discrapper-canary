t.d(n, { A: () => no });
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
    x = t.n(p),
    g = t(939249),
    v = t(933832),
    j = t(624479),
    I = t(143145),
    y = t(441136),
    A = t(957565),
    k = t(165648),
    C = t(969490);
function b(e) {
    let { text: n } = e,
        [t, i] = r.useState(!1);
    return (0, l.jsx)(g.D, {
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
    R = t(442433),
    T = t(9578),
    F = t(975807),
    B = t(380610),
    J = t(235393),
    U = t(258072),
    H = t(332173),
    q = t(679164),
    D = t(734057),
    O = t(123917),
    W = t(376943);
function K(e) {
    let n = W.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = W.BM.exec(e);
    if (null == t) return null;
    let [, l, r, i, a] = t;
    return null == r || /\D/.test(r) || (null != i && /\D/.test(i))
        ? null
        : { guildId: l, channelId: r, messageId: i, parentChannelId: void 0, conversationId: (0, W.te)(a) };
}
var Q = t(333421),
    X = t(100392),
    Z = t(836156);
let Y = /^dev:\/\//i,
    V = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    ee = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    en = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    et = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function el(e) {
    let { url: n } = e,
        t =
            (0, B.vS)(n) || (0, B.h4)(n)
                ? (0, l.jsx)(V, { url: n })
                : (0, X.W0)(n)
                  ? (0, l.jsx)(ee, { url: n })
                  : (0, Z.i)(n)
                    ? (0, l.jsx)(en, { url: n })
                    : (0, Q.my)(n)
                      ? (0, l.jsx)(et, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var er = t(192308),
    ei = t(47167),
    ea = t(499211),
    eu = t(706083),
    es = t(78390),
    eo = t(392605),
    ec = t(990474),
    ed = t(232042),
    eh = t(266645),
    em = t(906754),
    ef = t(37632),
    ep = t(593284),
    ex = t(288539),
    eg = t(317525),
    ev = t(71393),
    ej = t(994500),
    eI = t(287809),
    ey = t(147036),
    eA = t(403362);
let ek = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eC = t(73510),
    eb = t(105292);
function eS(e) {
    let { channelId: n, guildId: r, messageId: i, conversationId: a } = e,
        u = (0, ea.A)(n),
        {
            name: s,
            iconType: o,
            isForumPost: c,
            hasAccess: d,
        } = (0, S.cf)(
            [D.A, eI.default, ej.A],
            () => {
                let e = D.A.getChannel(n);
                return {
                    name: null != e ? (0, ei.m1)(e, eI.default, ej.A) : void 0,
                    iconType: (0, ey.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, W.nc)(e),
                };
            },
            [n],
        ),
        h = m(),
        f = h?.noStyleAndInteraction !== !0;
    if (null == o) return;
    let p = r === h?.guildId || null == r,
        x =
            d || u.isSubscriptionGated
                ? p || null == s
                    ? (0, l.jsx)(ed.A, {
                          iconType: o,
                          children: s ?? (0, l.jsx)("em", { children: eb.intl.string(eb.t.J90oLW) }),
                      })
                    : (0, l.jsx)(ew, { guildId: r, children: s })
                : (0, l.jsx)(ed.A, { iconType: "locked", children: eb.intl.string(eb.t["/YzI63"]) }),
        g = null;
    return (
        null != i &&
            (g = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ef.A, {}), (0, l.jsx)(ed.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(H.A, {
            role: "link",
            onClick: f
                ? function (e) {
                      (e?.stopPropagation(), (0, eu.o)(r, n, i, a), (0, er.closeAllModals)());
                  }
                : void 0,
            onContextMenu: f
                ? function (e) {
                      let r = D.A.getChannel(n);
                      (0, R.L3)(e, async () => {
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
            children: [x, g],
        })
    );
}
function ew(e) {
    let { guildId: n, children: t } = e,
        r = (0, S.bG)([ev.A], () => ev.A.getGuild(n), [n]);
    return (0, l.jsxs)(em.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ef.A, {}) : null, t] });
}
function eM(e) {
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
function eN(e) {
    let { id: n } = e,
        t = m(),
        r = t?.guildId,
        i = (0, S.bG)([eg.A], () => (null != r ? eg.A.getRole(r, n)?.name : null) ?? eb.intl.string(eb.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ep.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${i}`,
    });
}
function eE(e) {
    let { id: n } = e,
        t = m();
    return (0, l.jsx)(eh.A, { gameId: n, authorId: t?.authorId });
}
function eP(e) {
    let { roleName: n } = e,
        t = m();
    return (0, l.jsx)(ep.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function eL(e) {
    let { route: n, itemId: t } = e,
        r = m(),
        i = r?.guildId,
        a = (0, es.Q)(n),
        u = (0, S.bG)([eg.A], () => (0, es.f)(eg.A, n, t, i), [n, t, i]);
    return null == a
        ? null
        : (0, l.jsxs)(H.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, eo.i)(i, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [a, null != u ? (0, l.jsx)(ef.A, {}) : null, u],
          });
}
function e$(e) {
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
    return (0, l.jsx)(ec.gn, { node: u, children: t });
}
var e_ = t(147190);
function ez(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: i, conversationId: a } = e,
        u = (0, S.bG)([D.A], () => (null != i && null == D.A.getChannel(t) ? i : t), [t, i]);
    return (0, l.jsx)(eS, { channelId: u, guildId: n, messageId: r, conversationId: a });
}
function eG(e) {
    let { url: n, name: i, interactive: a } = e,
        u = r.useCallback(async () => {
            let e = await q.AN(n);
            (J.A.trackLinkClicked(e), (0, F.A)(e));
        }, [n]),
        s = r.useCallback(
            (e) => {
                (0, R.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: i });
                });
            },
            [i, n],
        );
    return (0, l.jsxs)(H.A, {
        role: "link",
        href: n,
        onClick: a ? u : void 0,
        onContextMenu: a ? s : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(G.P, { size: "xs", className: e_.Kk, color: "currentColor" }), i],
    });
}
var eR = t(196765),
    eT = t(976245),
    eF = t(302031);
function eB() {
    return (0, eT.y)()((e) => ({
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
let eJ = (0, eT.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eU = r.createContext(eJ);
function eH(e) {
    let { children: n } = e,
        [t] = r.useState(eB);
    return (0, l.jsx)(eU.Provider, { value: t, children: n });
}
function eq(e) {
    return "link" === e.type;
}
var eD = t(785562),
    eO = t(379418),
    eW = t(152959);
t(321073);
var eK = t(448767),
    eQ = t(886737);
function eX(e) {
    return "link" === e.type;
}
function eZ(e) {
    switch (e.type) {
        case "paragraph":
            return { ...e, value: eY(e.value) };
        case "heading":
            return { ...e, value: { ...e.value, content: eY(e.value.content) } };
        case "small":
            return { ...e, value: { content: eY(e.value.content) } };
        case "quote":
            return { ...e, value: e.value.map(eZ) };
        case "list":
            return { ...e, value: { ...e.value, items: e.value.items.map((e) => ({ content: e.content.map(eZ) })) } };
        default:
            return e;
    }
}
function eY(e) {
    return e.map(eV);
}
function eV(e) {
    switch (e.type) {
        case "link":
            if ((null == e.value.text || 0 === e.value.text.length) && null != K(e.value.url)) return e;
            return { type: "code", value: e.value.url };
        case "emoji":
            return "custom" === e.value.type ? { type: "text", value: (0, eQ.u)(e.value.value.name) } : e;
        case "bold":
        case "italic":
        case "underline":
        case "strikethrough":
            return { ...e, value: eY(e.value) };
        case "spoiler":
            return { ...e, value: { ...e.value, content: eY(e.value.content) } };
        default:
            return e;
    }
}
var e0 = t(254221);
let e1 = [],
    e3 = {
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
                a = m()?.noStyleAndInteraction === !0,
                u = null == n || 0 === n.length;
            if (u) {
                let e = K(t);
                if (null != e) return (0, l.jsx)(ez, { ...e });
                let n = (0, U.h)(t);
                if (null != n) return (0, l.jsx)(eG, { url: t, name: n.name, interactive: !a });
            }
            if ((0, B.vS)(t)) return (0, l.jsx)(el, { url: t });
            let s = u ? (0, l.jsx)(f.z, { text: t }) : i;
            if (Y.test(t))
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("span", { children: s }), (0, l.jsx)(el, { url: t })],
                });
            let o = r;
            return (u ||
                (o =
                    null != r && r.length > 0
                        ? `${r}

(${t})`
                        : t),
            a)
                ? (0, l.jsx)("span", { title: o ?? t, children: s })
                : (0, l.jsx)(T.A, {
                      title: o,
                      href: t,
                      trusted: u ? () => (0, O.m)(t, t) : void 0,
                      children: (0, l.jsx)("span", { children: s }),
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
                        A.p5 ? (0, l.jsx)("div", { className: k.lB, children: (0, l.jsx)(b, { text: t }) }) : null,
                        (0, l.jsx)(y.E, { code: t, lang: n, className: x()(C.kw, "hljs") }),
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
                    return (0, l.jsx)(eS, { channelId: String(t) });
                case "user":
                    return (0, l.jsx)(eM, { id: String(t) });
                case "role":
                    return (0, l.jsx)(eN, { id: String(t) });
                case "everyone":
                    return (0, l.jsx)(eP, { roleName: "@everyone" });
                case "here":
                    return (0, l.jsx)(eP, { roleName: "@here" });
                case "game":
                    return (0, l.jsx)(eE, { id: String(t) });
                case "command":
                    return (0, l.jsx)(e$, { id: String(t.id), name: t.name });
                case "static":
                    return (0, l.jsx)(eL, {
                        route: ek[t.type],
                        itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                    });
            }
            (0, eA.xb)(n);
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
                i = r.useContext(eU),
                a = (0, eR.P)(i, (e) => e.revealedIds.has(t)),
                u = (0, eR.P)(i, (e) => e.hoveredId === t),
                s = r.useCallback(() => i.getState().reveal(t), [i, t]),
                o = r.useCallback(() => i.getState().setHovered(t, !0), [i, t]),
                c = r.useCallback(() => i.getState().setHovered(t, !1), [i, t]);
            return (0, l.jsx)(eF.Ay, {
                type: eF.Ay.Types.TEXT,
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
                r = (0, eO.EH)(String(n), t);
            return null == r ? null : (0, l.jsx)(eD.A, { node: r });
        },
    };
function e9(e) {
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
            return (0, l.jsx)(e4, { content: n, error: t });
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
    if (((0, eW.bf)(null == t), null != t && "error" in t)) throw t.error;
    let c = t?.ast ?? e1,
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
                            return 1 !== e.length || "paragraph" !== n.type ? eK.tq : (0, eK.dn)(n.value, eX);
                        })(e);
                    if (t && (0, eK.iz)(r)) return [];
                    let i = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eX(e) ? e.value.url : null;
                                return null == t || !(0, eK.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? i.map(eZ) : i;
                })(c, { hideSingleLinkContent: s, redactRestrictedContent: o }),
            [c, s, o],
        );
    return (0, l.jsx)(L.Provider, {
        value: d,
        children: (0, l.jsx)(eH, { children: (0, l.jsx)(i.$, { nodes: h, renderers: e3 }) }, n),
    });
}
function e4(e) {
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
                    className: e0.g,
                    children: [(0, l.jsx)(o.A, { width: 16, height: 16 }), eb.intl.string(eb.t.dpFK4M)],
                }),
            ],
        })
    );
}
var e2 = t(903369),
    e6 = t(146849),
    e5 = t(174459),
    e8 = t(521981),
    ne = t(594808),
    nn = t(652215),
    nt = t(910379);
function nl(e) {
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
function nr(e, n) {
    return (0, e6.I2)({ location: n }).enabled && null == e.postProcessor;
}
function ni(e, n) {
    let { restrictedPreview: t, postProcessor: l, ...r } = n;
    return (0, e8.Ay)(e, { ...r, postProcessor: t ? (e, n) => (0, eQ.A)(l?.(e, n) ?? e) : l });
}
function na(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: eb.intl.string(eb.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(nn.pr7.LOADING))
        return { content: (0, l.jsx)(ne.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === nn.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: n } = t(550997);
        return n(e, nt, {
            track: (e, n) => {
                e5.default.track(e, n);
            },
        });
    }
    return null;
}
function nu(e) {
    let { message: n, options: t, parsed: i } = e,
        a = nl(t),
        u = nr(a, "MessageRenderedContent"),
        s = n.id,
        o = n.channel_id,
        c = (0, e2.U)(n),
        d = n.author?.id,
        { viewingChannelId: m, formatInline: f, noStyleAndInteraction: p } = a,
        x = r.useMemo(
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
        let e = na(n);
        return null != e
            ? e.content
            : u
              ? (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(h.Provider, {
                        value: x,
                        children: (0, l.jsx)(e9, {
                            content: n.content,
                            parsed: i,
                            allowJumboEmoji: !f && n.type !== nn.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: a.hideSimpleEmbedContent && (0, eK.k5)(n.embeds),
                            redactRestrictedContent: a.restrictedPreview,
                        }),
                    }),
                })
              : ni(n, a).content;
    }, [n.content, n.customRenderedContent, n.embeds, n.interaction, n.state, n.type, a, u, i, x]);
}
let ns = { content: null, hasSpoilerEmbeds: !1, hasBailedAst: !1 };
function no(e, n) {
    let t = nl(n),
        i = nr(t, "useMessageRenderedContent"),
        u = e?.content ?? null,
        s = (function (e, n) {
            let { enabled: t, formatInline: l } = n,
                i = (0, eW.n9)(t),
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
                          if ("spoiler" === n.type && Array.from((0, a.tJ)(n.value.content)).some(eq)) return !0;
                      return !1;
                  })(s.ast)
                : (u?.includes("||") ?? !1),
        c = e?.id,
        h = e?.channel_id,
        m = null != e ? (0, e2.U)(e) : void 0,
        f = e?.author?.id;
    return r.useMemo(() => {
        if (null == e) return ns;
        let n = na(e);
        return null != n
            ? n
            : i
              ? {
                    content: (0, l.jsx)(nu, { message: e, options: t, parsed: s }),
                    hasSpoilerEmbeds: o,
                    hasBailedAst: !1,
                }
              : ni(e, t);
    }, [e?.content, e?.customRenderedContent, e?.embeds, e?.interaction, e?.state, e?.type, t, i, s, o, c, h, m, f]);
}
