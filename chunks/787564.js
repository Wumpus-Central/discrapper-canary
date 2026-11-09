n.d(t, { A: () => eb });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(235599),
    o = n(442433),
    u = n(267102),
    c = n(676279),
    d = n(723702),
    h = n(856383),
    m = n(334604),
    f = n(253400),
    p = n(408018),
    g = n(186306),
    x = n(654821),
    E = n(35277),
    S = n(339200),
    y = n(632760),
    C = n(855986),
    A = n(866665),
    b = n(778712),
    I = n(545442),
    v = n(265872),
    N = n(565645),
    T = n(730134),
    k = n(775602),
    j = n(47167),
    _ = n(442247),
    R = n(454908),
    w = n(545868),
    O = n(376943),
    M = n(465365),
    L = n(78390),
    P = n(678473),
    D = n(654255),
    U = n(332173),
    V = n(37632),
    W = n(593284),
    B = n(967144);
n(209932);
var F = n(342296),
    G = n(734057),
    K = n(317525),
    H = n(994500),
    z = n(351906),
    q = n(287809),
    $ = n(147036),
    Q = n(562153),
    Z = n(427262),
    X = n(650583),
    Y = n(792996),
    J = n(307126);
function ee(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(A.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(N.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function et(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(A.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(N.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function en(e) {
    let { text: t } = e;
    return (0, l.jsx)(U.A, { children: t });
}
function el(e) {
    (e.key === X.dh.ENTER || e.key === X.dh.SPACE) && e.stopPropagation();
}
function ei(e) {
    let { id: t, name: n, targetRef: i, popoutProps: r } = e;
    return (0, l.jsx)(U.A, {
        ref: i,
        ...r,
        onKeyDown: (e) => {
            (r?.onKeyDown(e), el(e));
        },
        children: null == n ? `<@${t}>` : `@${n}`,
    });
}
function er(e) {
    let { id: t, guildId: n, channelId: r } = e,
        s = (0, C.bG)([q.default], () => q.default.getUser(t)),
        a = (0, C.bG)([z.A], () => z.A.hidePersonalInformation),
        o = i.useRef(null),
        u = Q.Ay.useName(n, r, s),
        c = i.useCallback((e) => (0, l.jsx)(ei, { id: t, name: u, targetRef: o, popoutProps: e }), [t, u]);
    if (null != s) {
        let e = a || s.hasUniqueUsername() ? null : `#${s.discriminator}`;
        return (0, l.jsx)(A.m, {
            __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                className: J.fX,
                children: [
                    (0, l.jsx)(T.A, { user: s, animate: !0, size: b._3.SIZE_16, className: J.my }),
                    Z.Ay.getUserTag(s, { mode: "username", identifiable: a ? "never" : "always" }),
                    (0, l.jsx)("span", { className: J.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": Z.Ay.getUserTag(s, { decoration: "never" }),
            asContainer: !0,
            children: (0, l.jsx)(F.A, {
                targetElementRef: o,
                user: s,
                guildId: n,
                channelId: r,
                position: "top",
                clickTrap: !0,
                children: c,
            }),
        });
    }
    return (0, l.jsx)(ei, { id: t, name: u, targetRef: o });
}
function es(e) {
    let { id: t, guildId: n, channelId: r } = e,
        s = (0, C.bG)([K.A], () => (null != n ? K.A.getRole(n, t) : void 0)),
        a = (0, C.bG)([k.Ay], () => k.Ay.roleStyle),
        o = (0, B.X_)(n, s, s?.colorStrings),
        u = i.useRef(null);
    if (null == s) return (0, l.jsxs)("span", { children: ["@", Y.intl.string(Y.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        d = "dot" === a,
        h = "username" === a && c;
    function m(e) {
        return null == s
            ? null
            : (0, l.jsxs)(U.A, {
                  ref: u,
                  color: h ? s.color : null,
                  roleColors: h ? o : null,
                  ...e,
                  children: [
                      d && (0, l.jsx)(I.W, { color: s.colorString, colors: o, background: !1, tooltip: !1 }),
                      "@",
                      s.name,
                  ],
              });
    }
    return null == n || null == r
        ? m()
        : (0, l.jsx)(v.Y, {
              targetElementRef: u,
              preload: async () => {
                  await (0, w.a)(n, t);
              },
              renderPopout: (e) => (0, l.jsx)(W.Y, { guildId: n, channelId: r, roleId: t, popoutProps: e }),
              position: "top",
              children: m,
          });
}
function ea(e) {
    let { id: t } = e,
        n = (0, C.bG)([G.A], () => G.A.getChannel(t)),
        i = Y.intl.string(Y.t.zLZPmk).toLowerCase(),
        r = "text",
        s = !0;
    return (null != n &&
        ((i = (0, O.nc)(n) ? (0, j.m1)(n, q.default, H.A) : Y.intl.string(Y.t["/YzI63"])),
        (r = (0, O.nc)(n) ? ((0, $.QG)(n) ?? "text") : "locked"),
        (s = (0, M.Y)(n.type))),
    s)
        ? (0, l.jsx)(U.A, { iconType: r, children: i })
        : (0, l.jsx)("span", { children: "#" + i });
}
function eo(e) {
    let { id: t, itemId: n, guildId: i } = e,
        r = (0, L.Q)(t),
        s = (0, C.bG)([K.A], () => (0, L.f)(K.A, t, n, i), [t, n, i]);
    return (0, l.jsxs)(U.A, { iconType: t, children: [r, null != s && (0, l.jsx)(V.A, {}), s] });
}
function eu(e) {
    let { text: t, id: n } = e;
    return (0, l.jsxs)(U.A, { children: [t, "(", n, ")"] });
}
function ec(e) {
    let { timestamp: t } = e;
    return (0, l.jsx)(P.A, { node: t, className: "R" === t.format ? J.gS : null });
}
function ed(e) {
    let { id: t } = e,
        n = (0, _.K)(t);
    return ((0, R.I)(null != n ? void 0 : t), (0, l.jsx)(D.A, { gameId: t, onKeyDown: el }));
}
var eh = n(891031),
    em = n(106972),
    ef = n(881013);
let ep = {
        strong: eh.bold,
        em: eh.italics,
        u: eh.underline,
        s: eh.strikethrough,
        inlineCode: eh.inlineCode,
        link: eh.fakeLink,
        url: eh.fakeLink,
        autolink: eh.fakeLink,
        silentPrefix: eh.silentPrefix,
        spoiler: s()(ef.ur, ef.F0, ef.kx, eh.spoiler),
        staticRouteLink: eh.fakeLink,
        syntaxBefore: eh.syntaxBefore,
        syntaxAfter: eh.syntaxAfter,
        codeBlockText: eh.codeBlockText,
        codeBlockSyntax: eh.codeBlockSyntax,
        codeBlockLang: eh.codeBlockLang,
        subtext: eh.subtext,
    },
    eg = new Set(["link", "url", "autolink"]);
var ex = n(165648);
function eE(e) {
    (e.preventDefault(), e.stopPropagation());
}
function eS(e) {
    let { className: t, attributes: n, children: i, preventSelection: r } = e,
        a = s()(em.S0, em.Cj, t);
    return (0, l.jsx)("span", {
        ...n,
        className: a,
        contentEditable: !1,
        onMouseDown: r ? eE : void 0,
        onClick: r ? eE : void 0,
        children: i,
    });
}
var ey = n(652215),
    eC = n(809067);
class eA extends i.PureComponent {
    containerRef = i.createRef();
    state;
    constructor(e) {
        (super(e),
            (this.renderElement = this.renderElement.bind(this)),
            (this.renderLeaf = this.renderLeaf.bind(this)),
            (this.handleOnChange = this.handleOnChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleKeyUp = this.handleKeyUp.bind(this)),
            (this.handleBeforeInput = this.handleBeforeInput.bind(this)),
            (this.handleCompositionStart = this.handleCompositionStart.bind(this)),
            (this.handleCompositionEnd = this.handleCompositionEnd.bind(this)),
            (this.handleFocusCapture = this.handleFocusCapture.bind(this)),
            (this.handleBlurCapture = this.handleBlurCapture.bind(this)),
            (this.handleContextMenu = this.handleContextMenu.bind(this)),
            (this.handlePasteCapture = this.handlePasteCapture.bind(this)),
            S.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, p.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: S.VW.richValue(e.editor), showPlaceholder: !1 }));
    }
    componentDidMount() {
        this.props.editor.events.addListener("onChange", this.handleOnChange);
    }
    componentDidUpdate(e, t, n) {
        e.editor !== this.props.editor &&
            (e.editor.events.removeListener("onChange", this.handleOnChange),
            this.props.editor.events.addListener("onChange", this.handleOnChange));
    }
    componentWillUnmount() {
        this.props.editor.events.removeListener("onChange", this.handleOnChange);
    }
    componentDidCatch(e, t) {
        (h.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] }));
    }
    renderElement(e) {
        let { guildId: t, channelId: n, renderExtraElement: i, spellCheck: r } = this.props,
            { attributes: a, children: o } = e;
        "rtl" === a.dir && (a.style = { ...a.style, textAlign: "right" });
        let u =
            i?.(e) ??
            (function (e, t, n, i) {
                let { attributes: r, children: a, element: o, decorations: u } = e,
                    c = Object.entries(u?.[0] ?? {})
                        .filter((e) => {
                            let [t] = e;
                            return "anchor" !== t && "focus" !== t;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return !0 === n && t in ep ? ep[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (o.type) {
                    case "line":
                        if (o.codeBlockState?.isInCodeBlock)
                            return (0, l.jsx)("div", {
                                className: eh.codeLine,
                                spellCheck: !1 !== i && (null == o.codeBlockState || null == o.codeBlockState.lang),
                                ...r,
                                children: a,
                            });
                        return (0, l.jsx)("div", { ...r, children: a });
                    case "blockQuote": {
                        let e = s()(ex.h, ex.MN);
                        return (0, l.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, l.jsx)("span", { contentEditable: !1, className: ex.r }),
                                (0, l.jsx)("blockquote", { children: a }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ee, { emoji: o.emoji }), a],
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(et, { emoji: o.emoji }), a],
                        });
                    case "textMention":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(en, { text: o.name }), a],
                        });
                    case "userMention":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            preventSelection: !0,
                            children: [(0, l.jsx)(er, { id: o.userId, channelId: n, guildId: t }), a],
                        });
                    case "roleMention":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            preventSelection: !0,
                            children: [(0, l.jsx)(es, { id: o.roleId, guildId: t, channelId: n }), a],
                        });
                    case "channelMention":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ea, { id: o.channelId }), a],
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(eo, { id: o.id, itemId: o.itemId, guildId: t }), a],
                        });
                    case "soundboard":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(y.LF, { soundId: o.soundId }), a],
                        });
                    case "commandMention":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(eu, { text: o.commandName, id: o.commandId }), a],
                        });
                    case "timestamp":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ec, { timestamp: o.parsed }), a],
                        });
                    case "gameMention":
                        return (0, l.jsxs)(eS, {
                            attributes: r,
                            className: c,
                            preventSelection: !0,
                            children: [(0, l.jsx)(ed, { id: o.gameId }), a],
                        });
                    default:
                        return null;
                }
            })(e, t, n, r);
        return null != u ? u : (0, l.jsx)("div", { ...a, children: o });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: i, children: r } = e,
            a =
                n?.(e) ??
                (function (e, t) {
                    let n,
                        i,
                        { attributes: r, children: a, leaf: o, text: u } = t,
                        c = e.chatInputType.markdown?.disableLinks === !0,
                        d = !1,
                        [h] = S.VW.node(e, S.PW.parent(S.VW.findPath(e, u)));
                    switch (S.VW.isEditor(h) ? "editor" : h.type) {
                        case "line":
                        case "blockQuote": {
                            d = void 0;
                            let e = Object.entries(o)
                                .filter((e) => {
                                    let [t] = e;
                                    return "text" !== t;
                                })
                                .flatMap((e) => {
                                    let [t, n] = e;
                                    if ("hljsTypes" === t) return n;
                                    if ("ansiStyle" === t) return [];
                                    if (!0 === n) {
                                        if (
                                            (("codeBlockLang" === t || "codeBlockSyntax" === t) && (d = !1),
                                            t.startsWith("before_") || t.startsWith("after_"))
                                        )
                                            return [eh[t]];
                                        if (c && eg.has(t)) return [];
                                        if (t in ep) return [ep[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            ((i = o.ansiStyle),
                                (n = s()(e, { [eh.syntaxOverride]: "||" === o.text || "\\" === o.text })));
                        }
                    }
                    return (
                        (n = s()(n, { [em.BI]: "" === u.text })),
                        (0, l.jsx)("span", { ...r, className: n, style: i, spellCheck: d, children: a })
                    );
                })(t, e);
        return null != a ? a : (0, l.jsx)("span", { ...i, children: r });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = S.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(S.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = a.rL.findDocumentOrShadowRoot(e).getSelection();
            null != t && this.isSelectionPartiallyInside(t) && t?.removeAllRanges();
        }
    }
    handleKeyDown(e) {
        if (null != this.props.editor.composition) {
            (e.preventDefault(), e.stopPropagation());
            return;
        }
        this.props.onKeyDown?.(e);
    }
    handleKeyUp(e) {
        if (null != this.props.editor.composition) {
            (e.preventDefault(), e.stopPropagation());
            return;
        }
        this.props.onKeyUp?.(e);
    }
    handleBeforeInput(e) {
        let { editor: t } = this.props,
            n = a.rL.findDocumentOrShadowRoot(t).getSelection(),
            l = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            i = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                (0, c.gm)() &&
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == i && (i = l), null != i)
            ) {
                let n = S.VW.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (S.ZF.isExpanded(n)
                        ? g.o.withSingleEntry(t, () => {
                              ((t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault());
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != l && !l.collapsed) {
                let n = S.VW.toSlateRange(t, l, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    S.ZF.isExpanded(n) &&
                    ((t.selection = n),
                    t.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"),
                    e.preventDefault());
            }
        }
    }
    handleCompositionStart() {
        let { editor: e } = this.props,
            t = { insertedPrefix: !1, startedInsideInline: !1 };
        this.state.showPlaceholder && this.setState({ showPlaceholder: !1 });
        let n = null != e.selection && S.ZF.isCollapsed(e.selection) ? S.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && S.ZF.isCollapsed(e.selection)
                    ? S.VW.above(e, { at: n[1], match: (t) => S.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            S.VW.isEditorEmpty(e))
        ) {
            (E.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t));
            return;
        }
        let l = a.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            i = (l?.rangeCount ?? 0) > 0 ? l?.getRangeAt(0) : null;
        if (null == (null != i ? S.VW.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }) : null) && null != i) {
            let t = S.VW.toSlateRange(e, i, { exactMatch: !1, suppressThrow: !0 });
            ((e.selection = null), null != t ? E.b.select(e, t) : E.b.select(e, S.VW.end(e, [])));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && S.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = S.AS.leaf(t, e);
            S.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                (E.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), S.VW.insertText(t, e));
            });
        }
        t.composition = null;
    }
    handleFocusCapture(e) {
        let { onFocus: t } = this.props;
        t?.(e);
    }
    handleBlurCapture(e) {
        let { editor: t, onBlur: n } = this.props,
            l = e.relatedTarget,
            i = a.rL.findDocumentOrShadowRoot(this.props.editor),
            r = i.getElementById("textarea-context"),
            s = i.getElementById("slate-toolbar");
        if (null != l && !(0, x.hasDomParent)(l, r) && !(0, x.hasDomParent)(l, s)) {
            let e = a.rL.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        n?.(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let l = e.getRangeAt(n),
                    i = l.startContainer,
                    r = l.endContainer,
                    s = l.startOffset,
                    a = l.endOffset;
                if ((0, x.hasDomParent)(i, t) || (!(0, x.isDOMRangeCollapsed)(i, s, r, a) && (0, x.hasDomParent)(r, t)))
                    return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            l = !1;
        if (null != e && null != t)
            for (let i = e.rangeCount - 1; i >= 0; i--) {
                let r = e.getRangeAt(i),
                    s = r.startContainer,
                    a = r.endContainer,
                    o = r.startOffset,
                    u = r.endOffset;
                if ((0, x.hasDomParent)(s, t)) {
                    if (l) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    l = !0;
                }
                if (!(0, x.isDOMRangeCollapsed)(s, o, a, u))
                    if ((0, x.hasDomParent)(s, t)) {
                        if (l) return !0;
                        n = !0;
                    } else {
                        if (n) return !0;
                        l = !0;
                    }
            }
        return !1;
    }
    handleContextMenu(e) {
        let { editor: t } = this.props,
            i = e.pageY,
            r = window.innerHeight;
        if (d.isPlatformEmbedded) {
            let s = (0, u.zd)();
            (0, o.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                            n.e(300867),
                            n.e(458273),
                            n.e(414591),
                            n.e(896804),
                            n.e(752516),
                            n.e(431917),
                            n.e(556025),
                        ]).then(n.bind(n, 194400)),
                        i = f.Ay.clipboardHasMixedContent();
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            editor: t,
                            text: S.VW.getSelectedText(t, !0),
                            clipboardHasMixedContent: i,
                        });
                },
                {
                    align: null != i && null != r && i < r / 2 ? "top" : "bottom",
                    enableSpellCheck: s === ey.BRT.APP || (0, m.GG)(),
                    repositionOnContentChange: !0,
                },
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: l } = this.props;
        (n?.(e),
            e.isDefaultPrevented() ||
                e.isPropagationStopped() ||
                l ||
                (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation()));
    }
    render() {
        let {
            editor: e,
            className: t,
            containerClassName: n,
            canFocus: i,
            autoFocus: r,
            placeholder: o,
            decorate: u,
            "aria-multiline": c = !0,
            channelId: d,
            guildId: h,
            onChange: m,
            onFocus: f,
            onBlur: p,
            onKeyDown: g,
            onKeyUp: x,
            renderExtraElement: E,
            renderExtraLeaf: S,
            ...y
        } = this.props;
        return (0, l.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, l.jsx)("div", {
                          className: s()(eC.q, t),
                          "aria-hidden": !0,
                          "data-slate-placeholder": "true",
                          children: o,
                      })
                    : null,
                (0, l.jsx)(a.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, l.jsx)(a.Fo, {
                        ...y,
                        className: s()(ex.PT, eC.E, t),
                        decorate: u,
                        renderElement: this.renderElement,
                        renderLeaf: this.renderLeaf,
                        onFocusCapture: this.handleFocusCapture,
                        onBlurCapture: this.handleBlurCapture,
                        onContextMenu: this.handleContextMenu,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onDOMBeforeInput: this.handleBeforeInput,
                        onCompositionStart: this.handleCompositionStart,
                        onCompositionEnd: this.handleCompositionEnd,
                        onPasteCapture: this.handlePasteCapture,
                        autoFocus: r && !1 !== i,
                        autoComplete: "off",
                        autoCorrect: "off",
                        "data-can-focus": !1 !== i,
                        "aria-label": o,
                        "aria-multiline": c,
                    }),
                }),
            ],
        });
    }
}
let eb = eA;
