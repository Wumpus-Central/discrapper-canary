"use strict";
n.d(t, {
    AS: () => z,
    Ot: () => ee,
    cv: () => q,
    PW: () => X,
    l5: () => Z,
    e0: () => er,
    ZF: () => J,
    VW: () => $,
    Kh: () => Q,
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
    u = n(791332),
    c = n(807081),
    d = n(626584),
    _ = n(527214),
    h = n(29814),
    f = n(704726),
    p = n(551965),
    E = n(927813);
let m = /^[a-z0-9_+\-.#]+$/i,
    g = new d.A("MarkdownToSlate"),
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
        gameMention: { type: "inlineObject" },
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
    I = new Set(["start", "end"]),
    T = new Map([
        ["inlineCode", I],
        ["spoiler", I],
        ["s", I],
        ["subtext", new Set(["start"])],
        ["u", I],
    ]),
    S = new Set(["*", "_", "\\"]),
    y = {},
    C = {};
for (let e in h.A.RULES) {
    if (!(e in A))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = A[e];
    "skip" !== t.type && (y[e] = N(h.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (C[e] = N("text" === e ? f.Ay : h.A.RULES[e]));
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
function v(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let R = {
        url: {
            parse: (e) =>
                null == (0, _.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, _.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : v(e)),
        },
        mailto: { parse: v },
        tel: { parse: v },
        codeBlockSyntax: {
            order: u.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && m.test(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    O = /(-# +)/,
    b = (0, p.A)([y, R]),
    D = (0, p.A)([C, R]),
    L = c.X(b),
    w = c.X(D),
    M = { max: 1 / 0, maxAge: +E.A.Millis.MINUTE, updateAgeOnGet: !0 },
    P = new (l())(M),
    x = new (l())(M);
function k(e, t, n, i, s) {
    let { content: a, type: o, originalMatch: l } = n;
    switch ((r()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), o)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return V(e, t, a || "", i, s);
        case "emoji":
        case "customEmoji": {
            let r = t.substring(i);
            if ((r.startsWith(l[0]) || ((i = W(e, t, i, t.length)), (r = t.substring(i))), r.startsWith(l[0])))
                return j({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
            throw Error(`Slate: Unable to find emoji: ${l[0]} in ${t} at ${i}`);
        }
        case "soundboard":
            return j({
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
                    j({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: i,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return j({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: { id: a } });
        }
        case "staticRouteLink":
            let { id: u, itemId: c } = n;
            return j({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { id: u, itemId: c },
            });
        case "gameMention":
            return j({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { id: n.gameId },
            });
        case "timestamp":
        case "timestampMentionInput":
            return j({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
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
            i = H(t, i);
            let { before: n, after: r } = (function (e, t, n, i) {
                    if ("inlineCode" === t) return { before: i[1], after: i[1] };
                    if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                    if ("subtext" === t) return { before: O.exec(i.input)[1], after: "" };
                    let r = A["link" === t ? "url" : t];
                    if ("inlineStyle" === r.type) return r;
                    throw Error("Slate: rule must be an inlineStyle");
                })(t, o, i, l),
                u = U({
                    attribute: "syntaxBefore",
                    content: a,
                    currentAttributes: s,
                    sourceTextLength: t.length,
                    type: o,
                }),
                c = U({
                    attribute: "syntaxAfter",
                    content: a,
                    currentAttributes: s,
                    sourceTextLength: t.length,
                    type: o,
                });
            return (
                (i = B({ result: e, sourceText: t, syntaxCharacters: n, pos: i, attributes: u })),
                s.push(o),
                (i = V(e, t, a ?? "", i, s)),
                s.pop(),
                (i = B({ result: e, sourceText: t, syntaxCharacters: r, pos: i, attributes: c })),
                H(t, i)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${o}`);
    }
}
function U(e) {
    let { attribute: t, content: n, currentAttributes: i, sourceTextLength: r, type: s } = e,
        a = "syntaxBefore" === t ? "before" : "after";
    return !(function (e) {
        let { boundary: t, content: n, sourceTextLength: i, type: r } = e;
        return (
            G(r, t) ||
            (function (e) {
                let { boundary: t, content: n, sourceTextLength: i } = e,
                    r = n;
                for (let e = 0; e < i && null != r && "string" != typeof r; e++) {
                    let e = (function (e, t) {
                        if ("start" === t) {
                            for (let t = 0; t < e.length; t++) if (!F(e[t])) return e[t];
                        } else for (let t = e.length - 1; t >= 0; t--) if (!F(e[t])) return e[t];
                    })(r instanceof Array ? r : [r], t);
                    if (null == e) break;
                    if (G(e.type, t)) return !0;
                    r = e.content;
                }
                return !1;
            })({ boundary: t, content: n, sourceTextLength: i })
        );
    })({ boundary: "syntaxBefore" === t ? "start" : "end", content: n, sourceTextLength: r, type: s })
        ? [t]
        : [t, ...[...i, s].map((e) => `${a}_${e}`)];
}
function G(e, t) {
    return T.get(e)?.has(t) ?? !1;
}
function F(e) {
    return "text" === e.type && "string" == typeof e.content && "" === e.content.trim();
}
function V(e, t, n, i, r) {
    return (
        "string" == typeof n
            ? (i = j({ result: e, sourceText: t, text: n, originalStart: i, attributes: r, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  i = k(e, t, n, i, r);
              })),
        H(t, i)
    );
}
function B(e) {
    let { result: t, sourceText: n, syntaxCharacters: i, pos: r, attributes: s } = e;
    if (i.length > 0) {
        let e = n.indexOf(i, r);
        if (-1 === e) return Y(`Slate: Unable to find syntax characters "${i}" at position ${r}`, i, r);
        let a = n.substring(r, e + i.length);
        t.push({ text: a, attributes: [...s], start: r, data: null }), (r = e + i.length);
    }
    return r;
}
function j(e) {
    let { result: t, sourceText: n, text: i, originalStart: r, attributes: s, data: a } = e,
        o = H(n, r);
    for (; "\n" === i.charAt(0) || " " === i.charAt(0); ) i = i.substring(1);
    let l = n.indexOf(i, o);
    if ((l !== o ? (o = r = W(t, n, o, l)) : "\\" === i && "\\" === n.charAt(l + 1) && (l++, (r = ++o)), l !== o))
        return Y(`Slate: Unable to find content in source text at start position ${o} for text position ${l}`, i, r);
    let u = o + i.length,
        c = n.substring(r, u);
    return t.push({ text: c, attributes: s.slice(), start: r, data: a }), u;
}
function H(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function Y(e, t, n) {
    if (t.split("").some((e) => S.has(e))) return g.error(e), n;
    throw Error(e);
}
function W(e, t, n, i) {
    for (; n < i; )
        if (S.has(t[n]))
            (n = B({ result: e, sourceText: t, syntaxCharacters: t[n], pos: n, attributes: ["syntaxBefore"] })),
                (n = H(t, n));
        else break;
    return n;
}
var K = n(551483);
if ((n(654821), !s.KE._addedDiscordOverrides)) {
    let e = s.KE.positions;
    s.KE.positions = function* (t) {
        let n,
            i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: a = t.selection, unit: o = "offset", reverse: l = !1, voids: u = !1 } = r ?? {};
        if (null == a) return;
        if (("block" === o && (o = "line"), "offset" === o)) {
            for (let n of e(t, r)) yield n;
            return;
        }
        n = Q.isPoint(a)
            ? l
                ? { anchor: a, focus: $.start(t, []) }
                : { anchor: a, focus: $.end(t, []) }
            : $.range(t, a);
        let [c, d] = J.edges(n),
            _ = $.blocks(t),
            h = l ? -1 : 1,
            f = c.path[0] ?? 0,
            p = d.path[0] ?? _.length - 1,
            E = l ? p : f,
            m = l ? f : p,
            g = !1;
        "line" === o && (yield l ? d : c);
        for (let n = E; !g && (!l ? n <= m : n >= m); n += h)
            for (let a of (function* n(a) {
                let [_, f] = a,
                    p = f.length,
                    E = X.isAncestor(f, c.path),
                    m = X.isAncestor(f, d.path),
                    A = E ? c.path[p] : 0,
                    I = m ? d.path[p] : _.children.length - 1,
                    T = l ? I : A,
                    S = l ? A : I;
                for (let a = T; !g && (!l ? a <= S : a >= S); a += h) {
                    let h = _.children[a],
                        p = X.child(f, a);
                    if (q.isElement(h)) {
                        let e = l ? d.path : c.path;
                        if (!(X.equals(p, e) || X.isAncestor(p, e))) {
                            let e = t.isVoid(h);
                            if ("line" === o && q.isElement(h) && !e) {
                                null != i && (yield i, (i = void 0)), (g = !0);
                                return;
                            }
                            if (!u && e) continue;
                        }
                        for (let e of n([h, p])) yield e;
                    } else if (Z.isText(h))
                        if ("line" === o) i = { path: p, offset: l ? 0 : h.text.length };
                        else if (0 === h.text.length) yield { path: p, offset: 0 };
                        else {
                            let n = s.KE.range(t, p);
                            for (let i of (X.equals(p, c.path) && (n.anchor = c),
                            X.equals(p, d.path) && (n.focus = d),
                            e(t, { ...r, at: n })))
                                yield i;
                        }
                }
                "line" === o && q.isElement(_) && !t.isVoid(_) && (null != i && (yield i, (i = void 0)), (g = !0));
            })(_[n]))
                yield a;
    };
    let t = a.rL.findDocumentOrShadowRoot;
    (a.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (s.KE._addedDiscordOverrides = !0);
}
let $ = {
        ...s.KE,
        ...a.rL,
        richValue: (e) => e.children,
        blocks: (e) => $.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => q.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => q.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => q.isElement(t) && s.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = $.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && q.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = $.node(e, K.fP);
            return Z.isText(t[0]) ? t[0] : null;
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
            let t = null != e.selection ? J.toPoint(e.selection) : null;
            return null == t ? null : $.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            $.above(e, { at: t, match: (t) => q.isElement(t) && $.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => $.above(e, { at: t, match: (e) => q.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => $.above(e, { at: t, match: (t) => $.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => $.above(e, { at: t, match: (t) => $.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            $.above(e, { at: t, match: (e) => q.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = J.toPoint(e.selection);
            return null == n ? null : $.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            $.nodes(e, { at: K.Dl, match: (e) => q.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (J.isExpanded(e.selection)) {
                let [n, i] = J.edges(e.selection),
                    r = $.after(e, n, { unit: "offset" }),
                    s = $.before(e, i, { unit: "offset" });
                if (null == r || null == s || !Q.equals(r, s)) return null;
                t = r;
            } else t = e.selection.anchor;
            return null == t ? null : $.getParentVoid(e, t);
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
            let [n, i] = J.edges(t),
                r = $.nodes(e, { at: t, mode: "lowest", match: (e) => Z.isText(e) }),
                s = "";
            for (let [e, t] of r) {
                let r = X.equals(t, n.path) ? n.offset : 0,
                    a = X.equals(t, i.path) ? i.offset : 0;
                s += e.text.substring(r, a);
            }
            return s;
        },
        withoutNormalizing(e, t) {
            let n = $.isNormalizing(e);
            $.setNormalizing(e, !1);
            try {
                t();
            } finally {
                $.setNormalizing(e, n);
            }
            !1 !== n && $.normalize(e);
        },
        areStylesDisabled(e) {
            if (!e.previewMarkdown) return !0;
            let t = $.richValue(e),
                n = t[0],
                i = n?.type === "line" ? n.children[0] : null;
            if (null == i || !Z.isText(i)) return !1;
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
            if (X.isPath(t)) {
                let n = $.range(e, t),
                    [i] = $.node(e, t);
                if (q.isElement(i)) {
                    let i = $.before(e, t),
                        r = $.after(e, t);
                    t = { anchor: i ?? n.anchor, focus: r ?? n.focus };
                } else t = n;
            }
            let [n, i] = J.edges(t),
                r = null,
                s = null;
            return (
                Q.equals(e.selection.anchor, n)
                    ? (r = "start")
                    : Q.equals(e.selection.anchor, i)
                      ? (r = "end")
                      : J.includes(t, e.selection.anchor) && (r = "inside"),
                Q.equals(e.selection.focus, n)
                    ? (s = "start")
                    : Q.equals(e.selection.focus, i)
                      ? (s = "end")
                      : J.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: r, focus: s }
            );
        },
    },
    z = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    q = {
        ...s.Hg,
        updateElement(e, t) {
            let n = $.node(e, t[1]);
            return (
                r()(!$.isEditor(t[0]), "Element is the root node"),
                r()(null != n, "Failed to find element"),
                r()(q.isElement(n[0]), "Node at this path is no longer an element"),
                r()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let i = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                r = e.children.map((e) => (Z.isText(e) ? e.text : "?"));
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
                            n += 3 + (null != a.match(m) ? a : "").length;
                            let l = e.substring(s, n);
                            "" !== l &&
                                (function (e, t, n) {
                                    let i = [],
                                        r = n ? x : P,
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
                                            content: (n ? w : L)(a, !0, {
                                                returnMentionIds: !0,
                                                disableAutoBlockNewlines: !0,
                                                guildId: t,
                                                isSlate: !0,
                                                allowGameMentions: !0,
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
            return Z.isText(t) && 0 === t.text.length;
        },
    },
    Z = { ...s.EY },
    X = {
        ...s.wA,
        isFirstEditorBlock: (e) => X.equals(e, K.Xg),
        isFirstEditorText: (e) => X.equals(e, K.fP),
        isFirstChild: (e, t) => X.equals(t, X.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    Q = {
        ...s.bR,
        start(e) {
            let [, t] = e;
            return { path: X.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return { path: X.child(n, t.children.length - 1), offset: Z.isText(i) ? i.text.length : 0 };
        },
        isAtStart(e, t) {
            return Q.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return Q.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, i] = J.edges(t);
            return Q.isBefore(e, n) && (e = n), Q.isAfter(e, i) && (e = i), e;
        },
    },
    J = {
        ...s.Q6,
        toPoint: (e) => (null == e || J.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return {
                anchor: { path: X.child(n, 0), offset: 0 },
                focus: { path: X.child(n, t.children.length - 1), offset: Z.isText(i) ? i.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, i] = J.edges(e),
                [r, s] = J.edges(t);
            return (Q.isBefore(n, r) && (n = r), Q.isAfter(i, s) && (i = s), J.isForward(e))
                ? { anchor: n, focus: i }
                : { anchor: i, focus: n };
        },
    },
    ee = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && J.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: i } = t;
            if (!$.hasPath(e, n.path) || !$.hasPath(e, i.path)) return !1;
            let [r] = $.node(e, n.path),
                [s] = $.node(e, i.path);
            return Z.isText(r) && Z.isText(s) && n.offset <= r.text.length && i.offset <= s.text.length;
        },
    },
    et = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    en = (e, t, n) => {
        let i = $.toDOMRange(e, t).getBoundingClientRect(),
            r = $.toDOMRange(e, n).getBoundingClientRect();
        return et(i, r) && et(r, i);
    },
    ei = (e, t, n, i) => {
        let r = { anchor: t, focus: t },
            s = 0,
            a = n.length,
            o = Math.floor((s + a) / 2);
        for (; o !== s; )
            if (
                (en(e, { anchor: n[o], focus: n[o] }, r) ? (i ? (a = o) : (s = o)) : i ? (s = o) : (a = o),
                (o = Math.floor((s + a) / 2)),
                !i && o === n.length - 2 && a === n.length - 1)
            ) {
                let t = n[n.length - 1];
                en(e, { anchor: t, focus: t }, r) && (o = a);
            }
        return n[o];
    },
    er = {
        getLineStart(e, t, n) {
            let i = $.getParentElement(e, t);
            if (null == i) return null;
            let r = $.start(e, i[1]),
                s = Array.from($.positions(e, { at: { anchor: r, focus: t } })),
                a = ei(e, t, s, !0);
            if (n && Q.equals(t, a) && !Q.isAtEnd(t, i)) {
                let n = $.after(e, t);
                if (null == n) return a;
                a = ei(e, n, s, !0);
            }
            return a;
        },
        getLineEnd(e, t, n) {
            let i = $.getParentElement(e, t);
            if (null == i) return null;
            let r = $.end(e, i[1]),
                s = Array.from($.positions(e, { at: { anchor: t, focus: r } })),
                a = ei(e, t, s, !1);
            if (n && Q.equals(t, a) && !Q.isAtEnd(t, i)) {
                let n = $.after(e, t);
                if (null == n) return a;
                a = ei(e, n, s, !1);
            }
            return a;
        },
    };
