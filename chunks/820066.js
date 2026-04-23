"use strict";
n.d(t, {
    AS: () => j,
    Ot: () => q,
    cv: () => W,
    PW: () => K,
    l5: () => Y,
    e0: () => J,
    ZF: () => $,
    VW: () => H,
    Kh: () => z,
}),
    n(134528),
    n(947204);
var i = n(284009),
    r = n.n(i),
    s = n(154283),
    a = n(670482);
n(321073);
var o = n(635377),
    l = n.n(o),
    d = n(791332),
    _ = n(436857),
    u = n(626584),
    c = n(527214),
    E = n(29814),
    h = n(704726),
    m = n(551965),
    f = n(927813);
let g = /^[a-z0-9_+\-.#]+$/i,
    p = new u.A("MarkdownToSlate"),
    A = {
        link: { type: "skip" },
        highlight: { type: "skip" },
        blockQuote: { type: "skip" },
        codeBlock: { type: "skip" },
        list: { type: "skip" },
        heading: { type: "skip" },
        channelOrMessageUrl: { type: "skip" },
        mediaPostLink: { type: "skip" },
        attachmentLink: { type: "skip" },
        newline: { type: "verbatim" },
        br: { type: "verbatim" },
        paragraph: { type: "verbatim" },
        text: { type: "verbatim" },
        emoticon: { type: "verbatim" },
        mention: { type: "inlineObject" },
        roleMention: { type: "inlineObject" },
        commandMention: { type: "inlineObject" },
        channelMention: { type: "inlineObject" },
        silentPrefix: { type: "inlineStyle", before: "@silent", after: " " },
        emoji: { type: "inlineObject" },
        customEmoji: { type: "inlineObject" },
        looseEm: { type: "inlineStyle", before: "*", after: " *" },
        autolink: { type: "inlineStyle", before: "<", after: ">" },
        mailto: { type: "inlineStyle", before: "<", after: ">" },
        tel: { type: "inlineStyle", before: "<", after: ">" },
        strong: { type: "inlineStyle", before: "**", after: "**" },
        u: { type: "inlineStyle", before: "__", after: "__" },
        s: { type: "inlineStyle", before: "~~", after: "~~" },
        escape: { type: "inlineStyle", before: "\\", after: "" },
        staticRouteLink: { type: "inlineStyle", before: "<id:", after: ">" },
        soundboard: { type: "inlineStyle", before: "<sound:", after: ">" },
        spoiler: { type: "inlineStyle", before: "||", after: "||" },
        url: { type: "inlineStyle", before: "", after: "" },
        codeBlockText: { type: "inlineStyle", before: "", after: "" },
        codeBlockSyntax: { type: "inlineStyle", before: "", after: "" },
        codeBlockLang: { type: "inlineStyle", before: "", after: "" },
        timestamp: { type: "inlineObject" },
        timestampMentionInput: { type: "inlineObject" },
        em: { type: "inlineStyle", before: "*", after: "*" },
        inlineCode: { type: "inlineStyle", before: "`", after: "`" },
        subtext: { type: "inlineStyle", before: "-# ", after: "" },
    },
    I = new Set(["*", "_", "\\"]),
    T = {},
    S = {};
for (let e in E.A.RULES) {
    if (!(e in A))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = A[e];
    "skip" !== t.type && (T[e] = N(E.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (S[e] = N("text" === e ? h.Ay : E.A.RULES[e]));
}
function N(e) {
    r()(null != e.parse, "Slate: rule must have a parse function");
    let t = e.parse;
    return {
        ...e,
        parse(e, n, i) {
            let r = t.call(this, e, n, i);
            return r instanceof Array || (r.originalMatch = e), r;
        },
    };
}
function C(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let R = {
        url: {
            parse: (e) =>
                null == (0, c.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, c.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : C(e)),
        },
        mailto: { parse: C },
        tel: { parse: C },
        codeBlockSyntax: {
            order: d.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && g.test(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    O = /(-# +)/,
    y = (0, m.A)([T, R]),
    v = (0, m.A)([S, R]),
    D = _.X(y),
    L = _.X(v),
    b = { max: 1 / 0, maxAge: +f.A.Millis.MINUTE, updateAgeOnGet: !0 },
    w = new (l())(b),
    P = new (l())(b);
function k(e, t, n, i, s) {
    let { content: a, type: o, originalMatch: l } = n;
    switch ((r()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), o)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return M(e, t, a || "", i, s);
        case "emoji":
        case "customEmoji": {
            let r = t.substring(i);
            if ((r.startsWith(l[0]) || ((i = F(e, t, i, t.length)), (r = t.substring(i))), r.startsWith(l[0])))
                return x({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
            throw Error(`Slate: Unable to find emoji: ${l[0]} in ${t} at ${i}`);
        }
        case "soundboard":
            return x({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { guildId: n.guildId, soundId: n.soundId },
            });
        case "mention":
        case "roleMention":
        case "channelMention":
        case "commandMention":
        case "silentPrefix":
        case "channel": {
            let { text: s, id: a } = n;
            if (null != s)
                return (
                    r()(s === l[0], "Slate: text mentions must exactly match the regex match"),
                    x({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: i,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return x({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: { id: a } });
        }
        case "staticRouteLink":
            let { id: d, itemId: _ } = n;
            return x({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { id: d, itemId: _ },
            });
        case "timestamp":
        case "timestampMentionInput":
            return x({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
        case "em":
        case "autolink":
        case "mailto":
        case "tel":
        case "strong":
        case "u":
        case "s":
        case "escape":
        case "inlineCode":
        case "codeBlockSyntax":
        case "codeBlockLang":
        case "spoiler":
        case "url":
        case "link":
        case "subtext": {
            i = G(t, i);
            let { before: n, after: r } = (function (e, t, n, i) {
                if ("inlineCode" === t) return { before: i[1], after: i[1] };
                if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                if ("subtext" === t) return { before: O.exec(i.input)[1], after: "" };
                let r = A["link" === t ? "url" : t];
                if ("inlineStyle" === r.type) return r;
                throw Error("Slate: rule must be an inlineStyle");
            })(t, o, i, l);
            return (
                (i = U(e, t, n, i, "syntaxBefore")),
                s.push(o),
                (i = M(e, t, a ?? "", i, s)),
                s.pop(),
                (i = U(e, t, r, i, "syntaxAfter")),
                G(t, i)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${o}`);
    }
}
function M(e, t, n, i, r) {
    return (
        "string" == typeof n
            ? (i = x({ result: e, sourceText: t, text: n, originalStart: i, attributes: r, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  i = k(e, t, n, i, r);
              })),
        G(t, i)
    );
}
function U(e, t, n, i, r) {
    if (n.length > 0) {
        let s = t.indexOf(n, i);
        if (-1 === s) return V(`Slate: Unable to find syntax characters "${n}" at position ${i}`, n, i);
        let a = t.substring(i, s + n.length);
        e.push({ text: a, attributes: [r], start: i, data: null }), (i = s + n.length);
    }
    return i;
}
function x(e) {
    let { result: t, sourceText: n, text: i, originalStart: r, attributes: s, data: a } = e,
        o = G(n, r);
    for (; "\n" === i.charAt(0) || " " === i.charAt(0); ) i = i.substring(1);
    let l = n.indexOf(i, o);
    if ((l !== o ? (o = r = F(t, n, o, l)) : "\\" === i && "\\" === n.charAt(l + 1) && (l++, (r = ++o)), l !== o))
        return V(`Slate: Unable to find content in source text at start position ${o} for text position ${l}`, i, r);
    let d = o + i.length,
        _ = n.substring(r, d);
    return t.push({ text: _, attributes: s.slice(), start: r, data: a }), d;
}
function G(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function V(e, t, n) {
    if (t.split("").some((e) => I.has(e))) return p.error(e), n;
    throw Error(e);
}
function F(e, t, n, i) {
    for (; n < i; )
        if (I.has(t[n])) (n = U(e, t, t[n], n, "syntaxBefore")), (n = G(t, n));
        else break;
    return n;
}
var B = n(551483);
if ((n(654821), !s.KE._addedDiscordOverrides)) {
    let e = s.KE.positions;
    s.KE.positions = function* (t) {
        let n,
            i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: a = t.selection, unit: o = "offset", reverse: l = !1, voids: d = !1 } = r ?? {};
        if (null == a) return;
        if (("block" === o && (o = "line"), "offset" === o)) {
            for (let n of e(t, r)) yield n;
            return;
        }
        n = z.isPoint(a)
            ? l
                ? { anchor: a, focus: H.start(t, []) }
                : { anchor: a, focus: H.end(t, []) }
            : H.range(t, a);
        let [_, u] = $.edges(n),
            c = H.blocks(t),
            E = l ? -1 : 1,
            h = _.path[0] ?? 0,
            m = u.path[0] ?? c.length - 1,
            f = l ? m : h,
            g = l ? h : m,
            p = !1;
        "line" === o && (yield l ? u : _);
        for (let n = f; !p && (!l ? n <= g : n >= g); n += E)
            for (let a of (function* n(a) {
                let [c, h] = a,
                    m = h.length,
                    f = K.isAncestor(h, _.path),
                    g = K.isAncestor(h, u.path),
                    A = f ? _.path[m] : 0,
                    I = g ? u.path[m] : c.children.length - 1,
                    T = l ? I : A,
                    S = l ? A : I;
                for (let a = T; !p && (!l ? a <= S : a >= S); a += E) {
                    let E = c.children[a],
                        m = K.child(h, a);
                    if (W.isElement(E)) {
                        let e = l ? u.path : _.path;
                        if (!(K.equals(m, e) || K.isAncestor(m, e))) {
                            let e = t.isVoid(E);
                            if ("line" === o && W.isElement(E) && !e) {
                                null != i && (yield i, (i = void 0)), (p = !0);
                                return;
                            }
                            if (!d && e) continue;
                        }
                        for (let e of n([E, m])) yield e;
                    } else if (Y.isText(E))
                        if ("line" === o) i = { path: m, offset: l ? 0 : E.text.length };
                        else if (0 === E.text.length) yield { path: m, offset: 0 };
                        else {
                            let n = s.KE.range(t, m);
                            for (let i of (K.equals(m, _.path) && (n.anchor = _),
                            K.equals(m, u.path) && (n.focus = u),
                            e(t, { ...r, at: n })))
                                yield i;
                        }
                }
                "line" === o && W.isElement(c) && !t.isVoid(c) && (null != i && (yield i, (i = void 0)), (p = !0));
            })(c[n]))
                yield a;
    };
    let t = a.rL.findDocumentOrShadowRoot;
    (a.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (s.KE._addedDiscordOverrides = !0);
}
let H = {
        ...s.KE,
        ...a.rL,
        richValue: (e) => e.children,
        blocks: (e) => H.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => W.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => W.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => W.isElement(t) && s.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = H.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && W.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = H.node(e, B.fP);
            return Y.isText(t[0]) ? t[0] : null;
        },
        getCurrentBlock(e) {
            return null == e.selection ? null : this.getParentBlock(e, e.selection);
        },
        getCurrentElement(e) {
            return null == e.selection ? null : this.getParentElement(e, e.selection);
        },
        getCurrentInline(e) {
            return null == e.selection ? null : this.getParentInline(e, e.selection);
        },
        getCurrentVoid(e) {
            return null == e.selection ? null : this.getParentVoid(e, e.selection);
        },
        getCurrentText(e) {
            let t = null != e.selection ? $.toPoint(e.selection) : null;
            return null == t ? null : H.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            H.above(e, { at: t, match: (t) => W.isElement(t) && H.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => H.above(e, { at: t, match: (e) => W.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => H.above(e, { at: t, match: (t) => H.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => H.above(e, { at: t, match: (t) => H.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            H.above(e, { at: t, match: (e) => W.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = $.toPoint(e.selection);
            return null == n ? null : H.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            H.nodes(e, { at: B.Dl, match: (e) => W.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if ($.isExpanded(e.selection)) {
                let [n, i] = $.edges(e.selection),
                    r = H.after(e, n, { unit: "offset" }),
                    s = H.before(e, i, { unit: "offset" });
                if (null == r || null == s || !z.equals(r, s)) return null;
                t = r;
            } else t = e.selection.anchor;
            return null == t ? null : H.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = a.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let i = t.getRangeAt(0);
                    null != i && (n = a.rL.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, i] = $.edges(t),
                r = H.nodes(e, { at: t, mode: "lowest", match: (e) => Y.isText(e) }),
                s = "";
            for (let [e, t] of r) {
                let r = K.equals(t, n.path) ? n.offset : 0,
                    a = K.equals(t, i.path) ? i.offset : 0;
                s += e.text.substring(r, a);
            }
            return s;
        },
        withoutNormalizing(e, t) {
            let n = H.isNormalizing(e);
            H.setNormalizing(e, !1);
            try {
                t();
            } finally {
                H.setNormalizing(e, n);
            }
            !1 !== n && H.normalize(e);
        },
        areStylesDisabled(e) {
            if (!e.previewMarkdown) return !0;
            let t = H.richValue(e),
                n = t[0],
                i = n?.type === "line" ? n.children[0] : null;
            if (null == i || !Y.isText(i)) return !1;
            let r = e.chatInputType,
                s = i.text;
            return (
                1 === t.length &&
                1 === n.children.length &&
                ((!0 === r.sedReplace && s.startsWith("s/")) || (r.autocomplete?.reactions === !0 && s.startsWith("+")))
            );
        },
        focus(e) {
            a.rL.isFocused(e) || (a.rL.focus(e), a.rL.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection) return { anchor: null, focus: null };
            if (K.isPath(t)) {
                let n = H.range(e, t),
                    [i] = H.node(e, t);
                if (W.isElement(i)) {
                    let i = H.before(e, t),
                        r = H.after(e, t);
                    t = { anchor: i ?? n.anchor, focus: r ?? n.focus };
                } else t = n;
            }
            let [n, i] = $.edges(t),
                r = null,
                s = null;
            return (
                z.equals(e.selection.anchor, n)
                    ? (r = "start")
                    : z.equals(e.selection.anchor, i)
                      ? (r = "end")
                      : $.includes(t, e.selection.anchor) && (r = "inside"),
                z.equals(e.selection.focus, n)
                    ? (s = "start")
                    : z.equals(e.selection.focus, i)
                      ? (s = "end")
                      : $.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: r, focus: s }
            );
        },
    },
    j = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    W = {
        ...s.Hg,
        updateElement(e, t) {
            let n = H.node(e, t[1]);
            return (
                r()(!H.isEditor(t[0]), "Element is the root node"),
                r()(null != n, "Failed to find element"),
                r()(W.isElement(n[0]), "Node at this path is no longer an element"),
                r()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let i = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                r = e.children.map((e) => (Y.isText(e) ? e.text : "?"));
            return {
                entries: (function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = (function (e) {
                            let t,
                                n = [],
                                i = /\\|```/g;
                            for (; null != (t = i.exec(e)); ) {
                                if ("\\" === t[0]) {
                                    i.lastIndex += 1;
                                    continue;
                                }
                                n.push(t.index);
                            }
                            return n;
                        })(e);
                    if ((r.push(e.length), 1 === r.length && n)) return [];
                    let s = 0,
                        a = n,
                        o = [];
                    for (let n of r) {
                        if (a)
                            o.push({ text: e.substring(s, n), start: s, attributes: ["codeBlockText"], data: void 0 });
                        else {
                            let a = n === r[r.length - 2] ? e.substring(n + 3) : "";
                            n += 3 + (null != a.match(g) ? a : "").length;
                            let l = e.substring(s, n);
                            "" !== l &&
                                (function (e, t, n) {
                                    let i = [],
                                        r = n ? P : w,
                                        s = r.get(e);
                                    if (null != s) return s;
                                    let a =
                                            e
                                                .replace(/\r\n/g, " \n")
                                                .replace(/[\r\f]/g, " ")
                                                .replace(/\t/g, " ") + "\n\n",
                                        o = {
                                            originalMatch: { index: 0, 0: "" },
                                            type: "paragraph",
                                            content: (n ? L : D)(a, !0, {
                                                returnMentionIds: !0,
                                                disableAutoBlockNewlines: !0,
                                                guildId: t,
                                                isSlate: !0,
                                                allowTimeMentionInput: !0,
                                            }),
                                        };
                                    k(i, a, o, 0, []);
                                    let l = (function (e) {
                                        if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
                                        let t = [e[0]];
                                        for (let n = 1; n < e.length; n++) {
                                            let i = t[t.length - 1],
                                                r = i.start + i.text.length,
                                                s = e[n];
                                            s.start === r &&
                                            null == i.data &&
                                            null == s.data &&
                                            i.attributes.join("-") === s.attributes.join("-")
                                                ? (i.text += s.text)
                                                : t.push(s);
                                        }
                                        return t;
                                    })(i);
                                    return r.set(e, l), l;
                                })(l, t, i).forEach((e) => {
                                    o.push({ ...e, start: e.start + s });
                                });
                        }
                        (a = !a), (s = n);
                    }
                    return o;
                })(r.join(""), t ?? null, i, n),
                serializedChildren: r,
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return Y.isText(t) && 0 === t.text.length;
        },
    },
    Y = { ...s.EY },
    K = {
        ...s.wA,
        isFirstEditorBlock: (e) => K.equals(e, B.Xg),
        isFirstEditorText: (e) => K.equals(e, B.fP),
        isFirstChild: (e, t) => K.equals(t, K.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    z = {
        ...s.bR,
        start(e) {
            let [, t] = e;
            return { path: K.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return { path: K.child(n, t.children.length - 1), offset: Y.isText(i) ? i.text.length : 0 };
        },
        isAtStart(e, t) {
            return z.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return z.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, i] = $.edges(t);
            return z.isBefore(e, n) && (e = n), z.isAfter(e, i) && (e = i), e;
        },
    },
    $ = {
        ...s.Q6,
        toPoint: (e) => (null == e || $.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return {
                anchor: { path: K.child(n, 0), offset: 0 },
                focus: { path: K.child(n, t.children.length - 1), offset: Y.isText(i) ? i.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, i] = $.edges(e),
                [r, s] = $.edges(t);
            return (z.isBefore(n, r) && (n = r), z.isAfter(i, s) && (i = s), $.isForward(e))
                ? { anchor: n, focus: i }
                : { anchor: i, focus: n };
        },
    },
    q = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && $.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: i } = t;
            if (!H.hasPath(e, n.path) || !H.hasPath(e, i.path)) return !1;
            let [r] = H.node(e, n.path),
                [s] = H.node(e, i.path);
            return Y.isText(r) && Y.isText(s) && n.offset <= r.text.length && i.offset <= s.text.length;
        },
    },
    X = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    Z = (e, t, n) => {
        let i = H.toDOMRange(e, t).getBoundingClientRect(),
            r = H.toDOMRange(e, n).getBoundingClientRect();
        return X(i, r) && X(r, i);
    },
    Q = (e, t, n, i) => {
        let r = { anchor: t, focus: t },
            s = 0,
            a = n.length,
            o = Math.floor((s + a) / 2);
        for (; o !== s; )
            if (
                (Z(e, { anchor: n[o], focus: n[o] }, r) ? (i ? (a = o) : (s = o)) : i ? (s = o) : (a = o),
                (o = Math.floor((s + a) / 2)),
                !i && o === n.length - 2 && a === n.length - 1)
            ) {
                let t = n[n.length - 1];
                Z(e, { anchor: t, focus: t }, r) && (o = a);
            }
        return n[o];
    },
    J = {
        getLineStart(e, t, n) {
            let i = H.getParentElement(e, t);
            if (null == i) return null;
            let r = H.start(e, i[1]),
                s = Array.from(H.positions(e, { at: { anchor: r, focus: t } })),
                a = Q(e, t, s, !0);
            if (n && z.equals(t, a) && !z.isAtEnd(t, i)) {
                let n = H.after(e, t);
                if (null == n) return a;
                a = Q(e, n, s, !0);
            }
            return a;
        },
        getLineEnd(e, t, n) {
            let i = H.getParentElement(e, t);
            if (null == i) return null;
            let r = H.end(e, i[1]),
                s = Array.from(H.positions(e, { at: { anchor: t, focus: r } })),
                a = Q(e, t, s, !1);
            if (n && z.equals(t, a) && !z.isAtEnd(t, i)) {
                let n = H.after(e, t);
                if (null == n) return a;
                a = Q(e, n, s, !1);
            }
            return a;
        },
    };
