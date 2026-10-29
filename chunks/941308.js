t.d(n, { A: () => ni });
var l = t(477900),
    r = t(582128),
    a = t(903369),
    i = t(146849),
    s = t(733004),
    u = t(917310),
    o = t(292442),
    c = t(834730);
let d = r.createContext(null);
function h() {
    return r.useContext(d);
}
var m = t(791606),
    x = t(38405),
    f = t(997141),
    v = t(954403),
    p = t(503698),
    g = t.n(p),
    j = t(939249),
    I = t(933832),
    y = t(624479),
    A = t(143145),
    k = t(441136),
    C = t(957565),
    b = t(165648),
    S = t(969490);
function w(e) {
    let { text: n } = e,
        [t, a] = r.useState(!1);
    return (0, l.jsx)(j.D, {
        onClick: function () {
            (0, C.C)(
                n,
                () => a(!0),
                () => a(!1),
            );
        },
        children: t
            ? (0, l.jsx)(I.CheckmarkLargeIcon, { size: "xs", color: "currentColor" })
            : (0, l.jsx)(y.CopyIcon, { size: "xs", color: "currentColor" }),
    });
}
var M = t(17928),
    N = t(236285),
    E = t(7584),
    P = t(930101),
    L = t(690521),
    _ = t(307731);
let z = r.createContext(!1);
function G(e) {
    let { value: n, jumboable: t } = e,
        r = L.Ay.getURL(n),
        a = E.Ay.convertSurrogateToName(n),
        i = h();
    return (0, l.jsx)(P.H, {
        node: { name: a, src: r, jumboable: t },
        channelId: i?.channelId,
        messageId: i?.messageId,
    });
}
function $(e) {
    let { value: n, jumboable: t } = e,
        r = h(),
        a = r?.guildId,
        i = (0, M.bG)([N.Ay], () => N.Ay.getDisambiguatedEmojiContext(a).getById(String(n.id)), [a, n.id]),
        s = i?.name ?? n.name;
    return (
        null != i && i.require_colons && (s = `:${i.name}:`),
        (0, l.jsx)(P.X, {
            node: { name: s, animated: n.animated, emojiId: String(n.id), jumboable: t },
            channelId: r?.channelId,
            messageId: r?.messageId,
        })
    );
}
function R() {
    return h()?.formatInline === !0 ? b.tZ : void 0;
}
var T = t(588975),
    H = t(442433),
    U = t(9578),
    F = t(975807),
    J = t(380610),
    B = t(235393),
    q = t(258072),
    D = t(332173),
    O = t(679164),
    K = t(734057),
    Q = t(123917),
    W = t(376943);
function X(e) {
    let n = W.En.exec(e);
    if (null != n) {
        let [, e, t, l, r] = n;
        return { guildId: e, channelId: l, messageId: r, parentChannelId: t, conversationId: void 0 };
    }
    let t = W.BM.exec(e);
    if (null == t) return null;
    let [, l, r, a, i] = t;
    return null == r || /\D/.test(r) || (null != a && /\D/.test(a))
        ? null
        : { guildId: l, channelId: r, messageId: a, parentChannelId: void 0, conversationId: (0, W.te)(i) };
}
var Z = t(333421),
    Y = t(100392),
    V = t(836156);
let ee = /^dev:\/\//i,
    en = r.lazy(() => Promise.resolve().then(t.bind(t, 435954))),
    et = r.lazy(async () => {
        let { ExperimentEmbed: e } = await Promise.resolve().then(t.bind(t, 950980));
        return { default: e };
    }),
    el = r.lazy(async () => {
        let { PlaygroundEmbed: e } = await Promise.all([
            t.e("503634"),
            t.e("761764"),
            t.e("60800"),
            t.e("218126"),
            t.e("467696"),
        ]).then(t.bind(t, 881267));
        return { default: e };
    }),
    er = r.lazy(async () => {
        let { DevToolsLinkEmbed: e } = await Promise.all([t.e("378100"), t.e("886456"), t.e("278078")]).then(
            t.bind(t, 909261),
        );
        return { default: e };
    });
function ea(e) {
    let { url: n } = e,
        t =
            (0, J.vS)(n) || (0, J.h4)(n)
                ? (0, l.jsx)(en, { url: n })
                : (0, Y.W0)(n)
                  ? (0, l.jsx)(et, { url: n })
                  : (0, V.i)(n)
                    ? (0, l.jsx)(el, { url: n })
                    : (0, Z.my)(n)
                      ? (0, l.jsx)(er, { url: n })
                      : null;
    return null == t ? null : (0, l.jsx)(r.Suspense, { fallback: null, children: t });
}
var ei = t(192308),
    es = t(47167),
    eu = t(499211),
    eo = t(706083),
    ec = t(78390),
    ed = t(392605),
    eh = t(990474),
    em = t(232042),
    ex = t(266645),
    ef = t(906754),
    ev = t(37632),
    ep = t(593284),
    eg = t(288539),
    ej = t(317525),
    eI = t(71393),
    ey = t(994500),
    eA = t(287809),
    ek = t(147036),
    eC = t(403362);
let eb = { home: "home", browse: "browse", customize: "customize", guide: "guide", linked_roles: "linked-roles" };
var eS = t(73510),
    ew = t(105292);
function eM(e) {
    let { channelId: n, guildId: r, messageId: a, conversationId: i } = e,
        s = (0, eu.A)(n),
        {
            name: u,
            iconType: o,
            isForumPost: c,
            hasAccess: d,
        } = (0, M.cf)(
            [K.A, eA.default, ey.A],
            () => {
                let e = K.A.getChannel(n);
                return {
                    name: null != e ? (0, es.m1)(e, eA.default, ey.A) : void 0,
                    iconType: (0, ek.QG)(e),
                    isForumPost: e?.isForumPost(),
                    hasAccess: null == e || (0, W.nc)(e),
                };
            },
            [n],
        ),
        m = h(),
        x = m?.noStyleAndInteraction !== !0;
    if (null == o) return;
    let f = r === m?.guildId || null == r,
        v =
            d || s.isSubscriptionGated
                ? f || null == u
                    ? (0, l.jsx)(em.A, {
                          iconType: o,
                          children: u ?? (0, l.jsx)("em", { children: ew.intl.string(ew.t.J90oLW) }),
                      })
                    : (0, l.jsx)(eN, { guildId: r, children: u })
                : (0, l.jsx)(em.A, { iconType: "locked", children: ew.intl.string(ew.t["/YzI63"]) }),
        p = null;
    return (
        null != a &&
            (p = (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(ev.A, {}), (0, l.jsx)(em.A, { iconType: c ? "post" : "message" })],
            })),
        (0, l.jsxs)(D.A, {
            role: "link",
            onClick: x
                ? function (e) {
                      (e?.stopPropagation(), (0, eo.o)(r, n, a, i), (0, ei.closeAllModals)());
                  }
                : void 0,
            onContextMenu: x
                ? function (e) {
                      let r = K.A.getChannel(n);
                      (0, H.L3)(e, async () => {
                          let { default: e } = await Promise.all([t.e("638221"), t.e("343266"), t.e("404391")]).then(
                              t.bind(t, 254106),
                          );
                          return (t) =>
                              (0, l.jsx)(e, {
                                  ...t,
                                  channel: r,
                                  channelId: r?.id ?? n,
                                  originalLink: null,
                                  messageId: a,
                              });
                      });
                  }
                : void 0,
            className: "channelMention",
            children: [v, p],
        })
    );
}
function eN(e) {
    let { guildId: n, children: t } = e,
        r = (0, M.bG)([eI.A], () => eI.A.getGuild(n), [n]);
    return (0, l.jsxs)(ef.A, { guild: r, children: [r?.name, null != r ? (0, l.jsx)(ev.A, {}) : null, t] });
}
function eE(e) {
    let { id: n } = e,
        t = h();
    return (0, l.jsx)(eg.A, {
        className: "mention",
        userId: n,
        channelId: t?.channelId,
        viewingChannelId: t?.viewingChannelId,
        parsedUserId: n,
        content: `<@${n}>`,
        inlinePreview: t?.noStyleAndInteraction,
    });
}
function eP(e) {
    let { id: n } = e,
        t = h(),
        r = t?.guildId,
        a = (0, M.bG)([ej.A], () => (null != r ? ej.A.getRole(r, n)?.name : null) ?? ew.intl.string(ew.t.sKdZ6U), [
            r,
            n,
        ]);
    return (0, l.jsx)(ep.A, {
        roleId: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: `@${a}`,
    });
}
function eL(e) {
    let { id: n } = e,
        t = h();
    return (0, l.jsx)(ex.A, { gameId: n, authorId: t?.authorId });
}
function e_(e) {
    let { roleName: n } = e,
        t = h();
    return (0, l.jsx)(ep.A, {
        roleName: n,
        channelId: t?.channelId,
        guildId: t?.guildId,
        inlinePreview: t?.noStyleAndInteraction,
        children: n,
    });
}
function ez(e) {
    let { route: n, itemId: t } = e,
        r = h(),
        a = r?.guildId,
        i = (0, ec.Q)(n),
        s = (0, M.bG)([ej.A], () => (0, ec.f)(ej.A, n, t, a), [n, t, a]);
    return null == i
        ? null
        : (0, l.jsxs)(D.A, {
              role: "link",
              onClick:
                  r?.noStyleAndInteraction === !0
                      ? void 0
                      : function (e) {
                            (e?.stopPropagation(), (0, ed.i)(a, n, t));
                        },
              className: "channelMention",
              iconType: n,
              children: [i, null != s ? (0, l.jsx)(ev.A, {}) : null, s],
          });
}
function eG(e) {
    let { id: n, name: t } = e,
        a = h(),
        i = r.useMemo(() => {
            let [, ...e] = t.split(" ");
            return `${n}${[...e].map((e) => `${eS.v4}${e}`).join("")}`;
        }, [n, t]),
        s = r.useMemo(
            () => ({ type: "commandMention", channelId: a?.channelId, commandId: n, commandName: t, commandKey: i }),
            [a?.channelId, i, n, t],
        );
    return (0, l.jsx)(eh.gn, { node: s, children: t });
}
var e$ = t(147190);
function eR(e) {
    let { guildId: n, channelId: t, messageId: r, parentChannelId: a, conversationId: i } = e,
        s = (0, M.bG)([K.A], () => (null != a && null == K.A.getChannel(t) ? a : t), [t, a]);
    return (0, l.jsx)(eM, { channelId: s, guildId: n, messageId: r, conversationId: i });
}
function eT(e) {
    let { url: n, name: a, interactive: i } = e,
        s = r.useCallback(async () => {
            let e = await O.AN(n);
            (B.A.trackLinkClicked(e), (0, F.A)(e));
        }, [n]),
        u = r.useCallback(
            (e) => {
                (0, H.L3)(e, async () => {
                    let { default: e } = await t.e("762529").then(t.bind(t, 740024));
                    return (t) => (0, l.jsx)(e, { ...t, attachmentUrl: n, attachmentName: a });
                });
            },
            [a, n],
        );
    return (0, l.jsxs)(D.A, {
        role: "link",
        href: n,
        onClick: i ? s : void 0,
        onContextMenu: i ? u : void 0,
        className: "attachmentLink",
        children: [(0, l.jsx)(T.P, { size: "xs", className: e$.Kk, color: "currentColor" }), a],
    });
}
var eH = t(196765),
    eU = t(976245),
    eF = t(302031);
function eJ() {
    return (0, eU.y)()((e) => ({
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
let eB = (0, eU.y)()(() => ({ revealedIds: new Set(), hoveredId: null, reveal() {}, setHovered() {} })),
    eq = r.createContext(eB);
function eD(e) {
    let { children: n } = e,
        [t] = r.useState(eJ);
    return (0, l.jsx)(eq.Provider, { value: t, children: n });
}
var eO = t(785562),
    eK = t(379418),
    eQ = t(152959);
t(321073);
var eW = t(448767),
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
            if ((null == e.value.text || 0 === e.value.text.length) && null != X(e.value.url)) return e;
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
let e3 = {
    text: function (e) {
        let { node: n } = e;
        return (0, l.jsx)(v.z, { text: n.value });
    },
    paragraph: function (e) {
        let { siblings: n, index: t, children: r } = e,
            a = h()?.formatInline === !0,
            i = t === n.length - 1;
        return a
            ? (0, l.jsxs)(l.Fragment, { children: [r, i ? null : " "] })
            : (0, l.jsxs)("span", { children: [r, i ? null : (0, l.jsx)("br", {})] });
    },
    empty: function () {
        return h()?.formatInline === !0 ? " " : "\n";
    },
    emoji: function (e) {
        let { value: n, type: t } = e,
            a = r.useContext(z);
        switch (t) {
            case "unicode":
                return (0, l.jsx)(G, { value: n, jumboable: a });
            case "custom":
                return (0, l.jsx)($, { value: n, jumboable: a });
        }
    },
    link: function (e) {
        let { text: n, url: t, title: r, children: a } = e,
            i = h()?.noStyleAndInteraction === !0,
            s = null == n || 0 === n.length;
        if (s) {
            let e = X(t);
            if (null != e) return (0, l.jsx)(eR, { ...e });
            let n = (0, q.h)(t);
            if (null != n) return (0, l.jsx)(eT, { url: t, name: n.name, interactive: !i });
        }
        if ((0, J.vS)(t)) return (0, l.jsx)(ea, { url: t });
        let u = s ? (0, l.jsx)(v.z, { text: t }) : a;
        if (ee.test(t))
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("span", { children: u }), (0, l.jsx)(ea, { url: t })],
            });
        let o = r;
        return (s ||
            (o =
                null != r && r.length > 0
                    ? `${r}

(${t})`
                    : t),
        i)
            ? (0, l.jsx)("span", { title: o ?? t, children: u })
            : (0, l.jsx)(U.A, {
                  title: o,
                  href: t,
                  trusted: s ? () => (0, Q.m)(t, t) : void 0,
                  children: (0, l.jsx)("span", { children: u }),
              });
    },
    list: function (e) {
        let { type: n, children: t, value: r, items: a } = e,
            i = h()?.formatInline === !0 ? b.tZ : void 0;
        switch (n) {
            case "ordered":
                let s = (r + a.length - 1).toString().length;
                return (0, l.jsx)("ol", {
                    start: r,
                    className: i,
                    style: { "--totalCharacters": s, "--olCounterStart": r - 1 },
                    children: t,
                });
            case "unordered":
                return (0, l.jsx)("ul", { className: i, children: t });
        }
    },
    listItem: function (e) {
        let { children: n } = e;
        return (0, l.jsx)("li", { children: n });
    },
    code: function (e) {
        let { node: n } = e;
        return (0, l.jsx)("code", { className: "inline", children: (0, l.jsx)(v.z, { text: n.value }) });
    },
    code_block: function (e) {
        let { language: n, content: t } = e;
        if (h()?.formatInline === !0) {
            let e = t.replace(/^\n+|\n+$/g, "").replaceAll("\n", " ");
            return (
                n?.toLowerCase() === "ansi" && (e = e.replaceAll(A.Q0, "")),
                (0, l.jsx)("code", { className: "inline", children: e })
            );
        }
        return (0, l.jsx)("pre", {
            children: (0, l.jsxs)("div", {
                className: b.Hy,
                children: [
                    C.p5 ? (0, l.jsx)("div", { className: b.lB, children: (0, l.jsx)(w, { text: t }) }) : null,
                    (0, l.jsx)(k.E, { code: t, lang: n, className: g()(S.kw, "hljs") }),
                ],
            }),
        });
    },
    quote: function (e) {
        let { children: n } = e;
        return (0, l.jsxs)("div", {
            className: b.h,
            children: [(0, l.jsx)("div", { className: b.r }), (0, l.jsx)("blockquote", { children: n })],
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
                return (0, l.jsx)(eM, { channelId: String(t) });
            case "user":
                return (0, l.jsx)(eE, { id: String(t) });
            case "role":
                return (0, l.jsx)(eP, { id: String(t) });
            case "everyone":
                return (0, l.jsx)(e_, { roleName: "@everyone" });
            case "here":
                return (0, l.jsx)(e_, { roleName: "@here" });
            case "game":
                return (0, l.jsx)(eL, { id: String(t) });
            case "command":
                return (0, l.jsx)(eG, { id: String(t.id), name: t.name });
            case "static":
                return (0, l.jsx)(ez, {
                    route: eb[t.type],
                    itemId: "linked_roles" === t.type && null != t.value ? String(t.value) : void 0,
                });
        }
        (0, eC.xb)(n);
    },
    heading: function (e) {
        let { level: n, children: t } = e,
            r = `h${n}`;
        return (0, l.jsx)(r, { className: R(), children: t });
    },
    small: function (e) {
        let { children: n } = e;
        return (0, l.jsx)("small", { className: R(), children: n });
    },
    spoiler: function (e) {
        let { children: n, node: t, id: a } = e,
            i = r.useMemo(() => Array.from((0, u.tJ)([t])).some((e) => "link" === e.type), [t]),
            s = h(),
            o = r.useContext(eq),
            c = (0, eH.P)(o, (e) => e.revealedIds.has(a)),
            d = (0, eH.P)(o, (e) => e.hoveredId === a),
            m = r.useCallback(() => o.getState().reveal(a), [o, a]),
            x = r.useCallback(() => o.getState().setHovered(a, !0), [o, a]),
            f = r.useCallback(() => o.getState().setHovered(a, !1), [o, a]);
        return (
            r.useEffect(() => {
                s?.setHasSpoilerEmbeds?.(i);
            }, [s, i]),
            (0, l.jsx)(eF.Ay, {
                type: eF.Ay.Types.TEXT,
                obscured: !c,
                hovered: d,
                onReveal: m,
                onMouseEnter: x,
                onMouseLeave: f,
                children: () => n,
            })
        );
    },
    timestamp: function (e) {
        let { value: n, style: t } = e,
            r = (0, eK.EH)(String(n), t);
        return null == r ? null : (0, l.jsx)(eO.A, { node: r });
    },
};
function e9(e) {
    let { content: n, allowJumboEmoji: t = !0, hideSingleLinkContent: r = !1, redactRestrictedContent: a = !1 } = e;
    return (0, l.jsx)(o.tH, {
        fallbackRender: (e) => {
            let { error: t } = e;
            return (0, l.jsx)(e4, { content: n, error: t });
        },
        children: (0, l.jsx)(e7, {
            content: n,
            allowJumboEmoji: t,
            hideSingleLinkContent: r,
            redactRestrictedContent: a,
        }),
    });
}
function e7(e) {
    let { content: n, allowJumboEmoji: t, hideSingleLinkContent: a, redactRestrictedContent: i } = e;
    (0, eQ.b)(!0);
    let o = h()?.formatInline === !0,
        c = (0, f.j)({ formatInline: o }),
        d = r.useMemo(() => (0, u.qg)(n, c), [n, c]),
        m = r.useMemo(
            () =>
                t &&
                (function (e) {
                    let n = 0;
                    for (let t of (0, u.tJ)(e))
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
                    return n <= _.MAX_EMOJI_TO_BE_JUMBO;
                })(d),
            [t, d],
        ),
        x = r.useMemo(
            () =>
                (function (e, n) {
                    let { hideSingleLinkContent: t, redactRestrictedContent: l = !1 } = n,
                        r = (function (e) {
                            let [n] = e;
                            return 1 !== e.length || "paragraph" !== n.type ? eW.tq : (0, eW.dn)(n.value, eZ);
                        })(e);
                    if (t && (0, eW.iz)(r)) return [];
                    let a = (function (e, n) {
                        let t = [],
                            l = !1;
                        for (let r of e) {
                            if ("paragraph" !== r.type) {
                                t.push(r);
                                continue;
                            }
                            let e = r.value.filter((e) => {
                                let t = eZ(e) ? e.value.url : null;
                                return null == t || !(0, eW.c_)(t, n);
                            });
                            if (e.length === r.value.length) {
                                t.push(r);
                                continue;
                            }
                            ((l = !0), e.length > 0 && t.push({ type: "paragraph", value: e }));
                        }
                        return l ? t : e;
                    })(e, { onlyLinkContent: r.onlyLinks, stripGameServerShareLinks: !0 });
                    return l ? a.map(eY) : a;
                })(d, { hideSingleLinkContent: a, redactRestrictedContent: i }),
            [d, a, i],
        );
    return (0, l.jsx)(z.Provider, {
        value: m,
        children: (0, l.jsx)(eD, { children: (0, l.jsx)(s.$, { nodes: x, renderers: e3 }) }, n),
    });
}
function e4(e) {
    let { content: n, error: t } = e;
    return (
        r.useEffect(() => {
            x.A.captureException(t);
        }, [t]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("span", { children: n }),
                (0, l.jsxs)(c.E, {
                    variant: "text-md/normal",
                    color: "text-feedback-critical",
                    className: e1.g,
                    children: [(0, l.jsx)(m.A, { width: 16, height: 16 }), ew.intl.string(ew.t.dpFK4M)],
                }),
            ],
        })
    );
}
var e2 = t(174459),
    e6 = t(521981),
    e5 = t(594808),
    e8 = t(652215),
    ne = t(910379);
function nn(e) {
    let {
        hideSimpleEmbedContent: n = !0,
        formatInline: t = !1,
        noStyleAndInteraction: l = !1,
        allowHeading: a = !1,
        allowList: i = !1,
        allowLinks: s = !1,
        allowDevLinks: u = !1,
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
            allowHeading: a,
            allowList: i,
            allowLinks: s,
            allowDevLinks: u,
            previewLinkTarget: o,
            viewingChannelId: c,
            allowGameMentions: !0,
            postProcessor: d,
            restrictedPreview: h,
        }),
        [n, t, l, a, i, s, u, o, c, d, h],
    );
}
function nt(e, n) {
    return (0, i.I2)({ location: n }).enabled && null == e.postProcessor;
}
function nl(e, n) {
    let { restrictedPreview: t, postProcessor: l, ...r } = n;
    return (0, e6.Ay)(e, { ...r, postProcessor: t ? (e, n) => (0, eX.A)(l?.(e, n) ?? e) : l });
}
function nr(e) {
    if (null != e.customRenderedContent) return e.customRenderedContent;
    if (e.isUnsupported) return { content: ew.intl.string(ew.t.sWi5EU), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if ((e.isCommandType() && 0 === e.content.length) || e.hasFlag(e8.pr7.LOADING))
        return { content: (0, l.jsx)(e5.Ay, { message: e }), hasSpoilerEmbeds: !1, hasBailedAst: !1 };
    if (e.type === e8.lAJ.CHANGELOG) {
        let { renderChangelogMessageMarkup: n } = t(550997);
        return n(e, ne, {
            track: (e, n) => {
                e2.default.track(e, n);
            },
        });
    }
    return null;
}
function na(e) {
    let { message: n, options: t, setHasSpoilerEmbeds: i } = e,
        s = nn(t),
        u = nt(s, "MessageRenderedContent"),
        o = n.id,
        c = n.channel_id,
        h = (0, a.U)(n),
        m = n.author?.id,
        { viewingChannelId: x, formatInline: f, noStyleAndInteraction: v } = s,
        p = r.useMemo(
            () => ({
                messageId: o,
                channelId: c,
                viewingChannelId: x,
                guildId: h,
                authorId: m,
                setHasSpoilerEmbeds: i,
                formatInline: f,
                noStyleAndInteraction: v,
            }),
            [o, c, x, h, m, i, f, v],
        );
    return r.useMemo(() => {
        let e = nr(n);
        return null != e
            ? e.content
            : u
              ? (0, l.jsx)(r.Suspense, {
                    children: (0, l.jsx)(d.Provider, {
                        value: p,
                        children: (0, l.jsx)(e9, {
                            content: n.content,
                            allowJumboEmoji: !f && n.type !== e8.lAJ.MEDIA_MENTION_MESSAGE,
                            hideSingleLinkContent: s.hideSimpleEmbedContent && (0, eW.k5)(n.embeds),
                            redactRestrictedContent: s.restrictedPreview,
                        }),
                    }),
                })
              : nl(n, s).content;
    }, [n.content, n.customRenderedContent, n.embeds, n.interaction, n.state, n.type, s, u, p]);
}
function ni(e, n) {
    let t = nn(n),
        i = nt(t, "useMessageRenderedContent"),
        [s, u] = r.useState(!1),
        o = r.useCallback((e) => {
            e && u(!0);
        }, []);
    r.useEffect(() => {
        u(!1);
    }, [e.content]);
    let c = e.id,
        d = e.channel_id,
        h = (0, a.U)(e),
        m = e.author?.id;
    return r.useMemo(() => {
        let n = nr(e);
        return null != n
            ? n
            : i
              ? {
                    content: (0, l.jsx)(na, { message: e, options: t, setHasSpoilerEmbeds: o }),
                    hasSpoilerEmbeds: s,
                    hasBailedAst: !1,
                }
              : nl(e, t);
    }, [e.content, e.customRenderedContent, e.embeds, e.interaction, e.state, e.type, t, i, o, s, c, d, h, m]);
}
