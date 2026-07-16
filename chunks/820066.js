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
    a = n(719442),
    s = n(253018);
n(321073);
var l = n(635377),
    o = n.n(l),
    d = n(791332),
    c = n(807081),
    u = n(626584),
    _ = n(694403),
    E = n(29814),
    A = n(704726),
    h = n(551965),
    I = n(927813);
let f = /^[a-z0-9_+\-.#]+$/i,
    p = new u.A("MarkdownToSlate"),
    T = {
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
    m = new Set(["start", "end"]),
    g = new Map([
        ["inlineCode", m],
        ["spoiler", m],
        ["s", m],
        ["subtext", new Set(["start"])],
        ["u", m],
    ]),
    S = new Set(["*", "_", "~", "|", "\\"]),
    N = {},
    C = {};
for (let e in E.Ay.RULES) {
    if (!(e in T))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = T[e];
    "skip" !== t.type && (N[e] = R(E.Ay.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (C[e] = R("text" === e ? A.Ay : E.Ay.RULES[e]));
}
function R(e) {
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
function O(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let L = {
        url: {
            parse: (e) =>
                null == (0, _.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, _.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : O(e)),
        },
        mailto: { parse: O },
        tel: { parse: O },
        codeBlockSyntax: {
            order: d.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && f.test(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    D = /(-# +)/,
    y = (0, h.A)([N, L]),
    v = (0, h.A)([C, L]),
    b = c.X(y),
    M = c.X(v),
    P = { max: 1 / 0, maxAge: +I.A.Millis.MINUTE, updateAgeOnGet: !0 },
    U = new (o())(P),
    w = new (o())(P);
function G(e, t, n, i, a) {
    let { content: s, type: l, originalMatch: o } = n;
    switch ((r()(null != o, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), l)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return V(e, t, s || "", i, a);
        case "emoji":
        case "customEmoji":
            if ((t.startsWith(o[0], i) || (i = Y(e, t, i, t.length)), t.startsWith(o[0], i)))
                return H({ result: e, sourceText: t, text: o[0], originalStart: i, attributes: [l], data: n });
            throw Error(`Slate: Unable to find emoji: ${o[0]} in ${t} at ${i}`);
        case "soundboard":
            return H({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: i,
                attributes: [l],
                data: { guildId: n.guildId, soundId: n.soundId },
            });
        case "mention":
        case "roleMention":
        case "channelMention":
        case "commandMention":
        case "silentPrefix":
        case "channel": {
            let { text: a, id: s } = n;
            if (null != a)
                return (
                    r()(a === o[0], "Slate: text mentions must exactly match the regex match"),
                    H({
                        result: e,
                        sourceText: t,
                        text: a,
                        originalStart: i,
                        attributes: ["textMention"],
                        data: { text: a },
                    })
                );
            return H({ result: e, sourceText: t, text: o[0], originalStart: i, attributes: [l], data: { id: s } });
        }
        case "staticRouteLink":
            let { id: d, itemId: c } = n;
            return H({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: i,
                attributes: [l],
                data: { id: d, itemId: c },
            });
        case "gameMention":
            return H({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: i,
                attributes: [l],
                data: { id: n.gameId },
            });
        case "timestamp":
        case "timestampMentionInput":
            return H({ result: e, sourceText: t, text: o[0], originalStart: i, attributes: [l], data: n });
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
            i = j(t, i);
            let { before: n, after: r } = (function (e, t, n, i) {
                    if ("inlineCode" === t) return { before: i[1], after: i[1] };
                    if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                    if ("subtext" === t) return { before: D.exec(i.input)[1], after: "" };
                    let r = T["link" === t ? "url" : t];
                    if ("inlineStyle" === r.type) return r;
                    throw Error("Slate: rule must be an inlineStyle");
                })(t, l, i, o),
                d = x({
                    attribute: "syntaxBefore",
                    content: s,
                    currentAttributes: a,
                    sourceTextLength: t.length,
                    type: l,
                }),
                c = x({
                    attribute: "syntaxAfter",
                    content: s,
                    currentAttributes: a,
                    sourceTextLength: t.length,
                    type: l,
                });
            return (
                (i = B({ result: e, sourceText: t, syntaxCharacters: n, pos: i, attributes: d })),
                a.push(l),
                (i = V(e, t, s ?? "", i, a)),
                a.pop(),
                (i = B({ result: e, sourceText: t, syntaxCharacters: r, pos: i, attributes: c })),
                j(t, i)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${l}`);
    }
}
function x(e) {
    let { attribute: t, content: n, currentAttributes: i, sourceTextLength: r, type: a } = e,
        s = "syntaxBefore" === t ? "before" : "after";
    return !(function (e) {
        let { boundary: t, content: n, sourceTextLength: i, type: r } = e;
        return (
            k(r, t) ||
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
                    if (k(e.type, t)) return !0;
                    r = e.content;
                }
                return !1;
            })({ boundary: t, content: n, sourceTextLength: i })
        );
    })({ boundary: "syntaxBefore" === t ? "start" : "end", content: n, sourceTextLength: r, type: a })
        ? [t]
        : [t, ...[...i, a].map((e) => `${s}_${e}`)];
}
function k(e, t) {
    return g.get(e)?.has(t) ?? !1;
}
function F(e) {
    return "text" === e.type && "string" == typeof e.content && "" === e.content.trim();
}
function V(e, t, n, i, r) {
    return (
        "string" == typeof n
            ? (i = H({ result: e, sourceText: t, text: n, originalStart: i, attributes: r, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  i = G(e, t, n, i, r);
              })),
        j(t, i)
    );
}
function B(e) {
    let { result: t, sourceText: n, syntaxCharacters: i, pos: r, attributes: a } = e;
    if (i.length > 0) {
        let e = n.indexOf(i, r);
        if (-1 === e) return W(`Slate: Unable to find syntax characters "${i}" at position ${r}`, i, r);
        let s = n.substring(r, e + i.length);
        t.push({ text: s, attributes: [...a], start: r, data: null }), (r = e + i.length);
    }
    return r;
}
function H(e) {
    let { result: t, sourceText: n, text: i, originalStart: r, attributes: a, data: s } = e,
        l = j(n, r);
    for (; "\n" === i.charAt(0) || " " === i.charAt(0); ) i = i.substring(1);
    let o = n.indexOf(i, l);
    if ((o !== l ? (l = r = Y(t, n, l, o)) : "\\" === i && "\\" === n.charAt(o + 1) && (o++, (r = ++l)), o !== l))
        return W(`Slate: Unable to find content in source text at start position ${l} for text position ${o}`, i, r);
    let d = l + i.length,
        c = n.substring(r, d);
    return t.push({ text: c, attributes: a.slice(), start: r, data: s }), d;
}
function j(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function W(e, t, n) {
    if (t.split("").some((e) => S.has(e))) return p.error(e), n;
    throw Error(e);
}
function Y(e, t, n, i) {
    for (; n < i; )
        if (S.has(t[n]))
            (n = B({ result: e, sourceText: t, syntaxCharacters: t[n], pos: n, attributes: ["syntaxBefore"] })),
                (n = j(t, n));
        else break;
    return n;
}
var K = n(551483);
if ((n(654821), !a.KE._addedDiscordOverrides)) {
    let e = a.KE.positions;
    a.KE.positions = function* (t) {
        let n,
            i,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: s = t.selection, unit: l = "offset", reverse: o = !1, voids: d = !1 } = r ?? {};
        if (null == s) return;
        if (("block" === l && (l = "line"), "offset" === l)) {
            for (let n of e(t, r)) yield n;
            return;
        }
        n = Q.isPoint(s)
            ? o
                ? { anchor: s, focus: $.start(t, []) }
                : { anchor: s, focus: $.end(t, []) }
            : $.range(t, s);
        let [c, u] = J.edges(n),
            _ = $.blocks(t),
            E = o ? -1 : 1,
            A = c.path[0] ?? 0,
            h = u.path[0] ?? _.length - 1,
            I = o ? h : A,
            f = o ? A : h,
            p = !1;
        "line" === l && (yield o ? u : c);
        for (let n = I; !p && (!o ? n <= f : n >= f); n += E)
            for (let s of (function* n(s) {
                let [_, A] = s,
                    h = A.length,
                    I = X.isAncestor(A, c.path),
                    f = X.isAncestor(A, u.path),
                    T = I ? c.path[h] : 0,
                    m = f ? u.path[h] : _.children.length - 1,
                    g = o ? m : T,
                    S = o ? T : m;
                for (let s = g; !p && (!o ? s <= S : s >= S); s += E) {
                    let E = _.children[s],
                        h = X.child(A, s);
                    if (q.isElement(E)) {
                        let e = o ? u.path : c.path;
                        if (!(X.equals(h, e) || X.isAncestor(h, e))) {
                            let e = t.isVoid(E);
                            if ("line" === l && q.isElement(E) && !e) {
                                null != i && (yield i, (i = void 0)), (p = !0);
                                return;
                            }
                            if (!d && e) continue;
                        }
                        for (let e of n([E, h])) yield e;
                    } else if (Z.isText(E))
                        if ("line" === l) i = { path: h, offset: o ? 0 : E.text.length };
                        else if (0 === E.text.length) yield { path: h, offset: 0 };
                        else {
                            let n = a.KE.range(t, h);
                            for (let i of (X.equals(h, c.path) && (n.anchor = c),
                            X.equals(h, u.path) && (n.focus = u),
                            e(t, { ...r, at: n })))
                                yield i;
                        }
                }
                "line" === l && q.isElement(_) && !t.isVoid(_) && (null != i && (yield i, (i = void 0)), (p = !0));
            })(_[n]))
                yield s;
    };
    let t = s.rL.findDocumentOrShadowRoot;
    (s.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (a.KE._addedDiscordOverrides = !0);
}
let $ = {
        ...a.KE,
        ...s.rL,
        richValue: (e) => e.children,
        blocks: (e) => $.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => q.isElement(t) && a.KE.isBlock(e, t),
        isInline: (e, t) => q.isElement(t) && a.KE.isInline(e, t),
        isVoid: (e, t) => q.isElement(t) && a.KE.isVoid(e, t),
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
                    a = $.before(e, i, { unit: "offset" });
                if (null == r || null == a || !Q.equals(r, a)) return null;
                t = r;
            } else t = e.selection.anchor;
            return null == t ? null : $.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = s.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let i = t.getRangeAt(0);
                    null != i && (n = s.rL.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, i] = J.edges(t),
                r = $.nodes(e, { at: t, mode: "lowest", match: (e) => Z.isText(e) }),
                a = "";
            for (let [e, t] of r) {
                let r = X.equals(t, n.path) ? n.offset : 0,
                    s = X.equals(t, i.path) ? i.offset : 0;
                a += e.text.substring(r, s);
            }
            return a;
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
                a = i.text;
            return (
                1 === t.length &&
                1 === n.children.length &&
                ((!0 === r.sedReplace && a.startsWith("s/")) || (r.autocomplete?.reactions === !0 && a.startsWith("+")))
            );
        },
        focus(e) {
            s.rL.isFocused(e) || (s.rL.focus(e), s.rL.deselect(e));
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
                a = null;
            return (
                Q.equals(e.selection.anchor, n)
                    ? (r = "start")
                    : Q.equals(e.selection.anchor, i)
                      ? (r = "end")
                      : J.includes(t, e.selection.anchor) && (r = "inside"),
                Q.equals(e.selection.focus, n)
                    ? (a = "start")
                    : Q.equals(e.selection.focus, i)
                      ? (a = "end")
                      : J.includes(t, e.selection.focus) && (a = "inside"),
                { anchor: r, focus: a }
            );
        },
    },
    z = {
        ...a.bP,
        isType: (e, t) => a.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => a.Hg.isElement(e) && t.has(e.type),
    },
    q = {
        ...a.Hg,
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
                    let a = 0,
                        s = n,
                        l = [];
                    for (let n of r) {
                        if (s)
                            l.push({ text: e.substring(a, n), start: a, attributes: ["codeBlockText"], data: void 0 });
                        else {
                            let s = n === r[r.length - 2] ? e.substring(n + 3) : "";
                            n += 3 + (null != s.match(f) ? s : "").length;
                            let o = e.substring(a, n);
                            "" !== o &&
                                (function (e, t, n) {
                                    let i = [],
                                        r = n ? w : U,
                                        a = r.get(e);
                                    if (null != a) return a;
                                    let s =
                                            e
                                                .replace(/\r\n/g, " \n")
                                                .replace(/[\r\f]/g, " ")
                                                .replace(/\t/g, " ") + "\n\n",
                                        l = {
                                            originalMatch: { index: 0, 0: "" },
                                            type: "paragraph",
                                            content: (n ? M : b)(s, !0, {
                                                returnMentionIds: !0,
                                                disableAutoBlockNewlines: !0,
                                                guildId: t,
                                                isSlate: !0,
                                                allowGameMentions: !0,
                                                allowTimeMentionInput: !0,
                                            }),
                                        };
                                    G(i, s, l, 0, []);
                                    let o = (function (e) {
                                        if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
                                        let t = [e[0]];
                                        for (let n = 1; n < e.length; n++) {
                                            let i = t[t.length - 1],
                                                r = i.start + i.text.length,
                                                a = e[n];
                                            a.start === r &&
                                            null == i.data &&
                                            null == a.data &&
                                            i.attributes.join("-") === a.attributes.join("-")
                                                ? (i.text += a.text)
                                                : t.push(a);
                                        }
                                        return t;
                                    })(i);
                                    return r.set(e, o), o;
                                })(o, t, i).forEach((e) => {
                                    l.push({ ...e, start: e.start + a });
                                });
                        }
                        (s = !s), (a = n);
                    }
                    return l;
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
    Z = { ...a.EY },
    X = {
        ...a.wA,
        isFirstEditorBlock: (e) => X.equals(e, K.Xg),
        isFirstEditorText: (e) => X.equals(e, K.fP),
        isFirstChild: (e, t) => X.equals(t, X.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    Q = {
        ...a.bR,
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
        ...a.Q6,
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
                [r, a] = J.edges(t);
            return (Q.isBefore(n, r) && (n = r), Q.isAfter(i, a) && (i = a), J.isForward(e))
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
                [a] = $.node(e, i.path);
            return Z.isText(r) && Z.isText(a) && n.offset <= r.text.length && i.offset <= a.text.length;
        },
    };
function et(e, t) {
    let n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n;
}
function en(e, t, n) {
    let i = $.toDOMRange(e, t).getBoundingClientRect(),
        r = $.toDOMRange(e, n).getBoundingClientRect();
    return et(i, r) && et(r, i);
}
function ei(e, t, n, i) {
    let r = { anchor: t, focus: t },
        a = 0,
        s = n.length,
        l = Math.floor((a + s) / 2);
    for (; l !== a; )
        if (
            (en(e, { anchor: n[l], focus: n[l] }, r) ? (i ? (s = l) : (a = l)) : i ? (a = l) : (s = l),
            (l = Math.floor((a + s) / 2)),
            !i && l === n.length - 2 && s === n.length - 1)
        ) {
            let t = n[n.length - 1];
            en(e, { anchor: t, focus: t }, r) && (l = s);
        }
    return n[l];
}
let er = {
    getLineStart(e, t, n) {
        let i = $.getParentElement(e, t);
        if (null == i) return null;
        let r = $.start(e, i[1]),
            a = Array.from($.positions(e, { at: { anchor: r, focus: t } })),
            s = ei(e, t, a, !0);
        if (n && Q.equals(t, s) && !Q.isAtEnd(t, i)) {
            let n = $.after(e, t);
            if (null == n) return s;
            s = ei(e, n, a, !0);
        }
        return s;
    },
    getLineEnd(e, t, n) {
        let i = $.getParentElement(e, t);
        if (null == i) return null;
        let r = $.end(e, i[1]),
            a = Array.from($.positions(e, { at: { anchor: t, focus: r } })),
            s = ei(e, t, a, !1);
        if (n && Q.equals(t, s) && !Q.isAtEnd(t, i)) {
            let n = $.after(e, t);
            if (null == n) return s;
            s = ei(e, n, a, !1);
        }
        return s;
    },
};
