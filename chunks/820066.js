"use strict";
n.d(t, {
    AS: () => Y,
    Ot: () => ee,
    cv: () => q,
    PW: () => $,
    l5: () => J,
    e0: () => ei,
    ZF: () => Q,
    VW: () => Z,
    Kh: () => X,
}),
    n(134528),
    n(947204);
var l = n(284009),
    i = n.n(l),
    s = n(719442),
    r = n(530795);
n(321073);
var a = n(635377),
    o = n.n(a),
    u = n(478676),
    c = n(807081),
    d = n(626584),
    h = n(694403),
    m = n(29814),
    f = n(704726),
    p = n(551965),
    g = n(927813);
let x = /^[a-z0-9_+\-.#]+$/i,
    A = new d.A("MarkdownToSlate"),
    E = {
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
    C = new Set(["start", "end"]),
    I = new Map([
        ["inlineCode", C],
        ["spoiler", C],
        ["s", C],
        ["subtext", new Set(["start"])],
        ["u", C],
    ]),
    y = new Set(["*", "_", "~", "|", "\\"]),
    S = {},
    N = {};
for (let e in m.Ay.RULES) {
    if (!(e in E))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = E[e];
    "skip" !== t.type && (S[e] = v(m.Ay.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (N[e] = v("text" === e ? f.Ay : m.Ay.RULES[e]));
}
function v(e) {
    i()(null != e.parse, "Slate: rule must have a parse function");
    let t = e.parse;
    return {
        ...e,
        parse(e, n, l) {
            let i = t.call(this, e, n, l);
            return i instanceof Array || (i.originalMatch = e), i;
        },
    };
}
function _(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let j = {
        url: {
            parse: (e) =>
                null == (0, h.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, h.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : _(e)),
        },
        mailto: { parse: _ },
        tel: { parse: _ },
        codeBlockSyntax: {
            order: u.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && x.test(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    T = /(-# +)/,
    b = (0, p.A)([S, j]),
    R = (0, p.A)([N, j]),
    O = c.X(b),
    M = c.X(R),
    L = { max: 1 / 0, maxAge: +g.A.Millis.MINUTE, updateAgeOnGet: !0 },
    k = new (o())(L),
    w = new (o())(L);
function P(e, t, n, l, s) {
    let { content: r, type: a, originalMatch: o } = n;
    switch ((i()(null != o, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), a)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return V(e, t, r || "", l, s);
        case "emoji":
        case "customEmoji":
            if ((t.startsWith(o[0], l) || (l = K(e, t, l, t.length)), t.startsWith(o[0], l)))
                return H({ result: e, sourceText: t, text: o[0], originalStart: l, attributes: [a], data: n });
            throw Error(`Slate: Unable to find emoji: ${o[0]} in ${t} at ${l}`);
        case "soundboard":
            return H({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: l,
                attributes: [a],
                data: { guildId: n.guildId, soundId: n.soundId },
            });
        case "mention":
        case "roleMention":
        case "channelMention":
        case "commandMention":
        case "silentPrefix":
        case "channel": {
            let { text: s, id: r } = n;
            if (null != s)
                return (
                    i()(s === o[0], "Slate: text mentions must exactly match the regex match"),
                    H({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: l,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return H({ result: e, sourceText: t, text: o[0], originalStart: l, attributes: [a], data: { id: r } });
        }
        case "staticRouteLink":
            let { id: u, itemId: c } = n;
            return H({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: l,
                attributes: [a],
                data: { id: u, itemId: c },
            });
        case "gameMention":
            return H({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: l,
                attributes: [a],
                data: { id: n.gameId },
            });
        case "timestamp":
        case "timestampMentionInput":
            return H({ result: e, sourceText: t, text: o[0], originalStart: l, attributes: [a], data: n });
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
            l = B(t, l);
            let { before: n, after: i } = (function (e, t, n, l) {
                    if ("inlineCode" === t) return { before: l[1], after: l[1] };
                    if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                    if ("subtext" === t) return { before: T.exec(l.input)[1], after: "" };
                    let i = E["link" === t ? "url" : t];
                    if ("inlineStyle" === i.type) return i;
                    throw Error("Slate: rule must be an inlineStyle");
                })(t, a, l, o),
                u = D({
                    attribute: "syntaxBefore",
                    content: r,
                    currentAttributes: s,
                    sourceTextLength: t.length,
                    type: a,
                }),
                c = D({
                    attribute: "syntaxAfter",
                    content: r,
                    currentAttributes: s,
                    sourceTextLength: t.length,
                    type: a,
                });
            return (
                (l = F({ result: e, sourceText: t, syntaxCharacters: n, pos: l, attributes: u })),
                s.push(a),
                (l = V(e, t, r ?? "", l, s)),
                s.pop(),
                (l = F({ result: e, sourceText: t, syntaxCharacters: i, pos: l, attributes: c })),
                B(t, l)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${a}`);
    }
}
function D(e) {
    let { attribute: t, content: n, currentAttributes: l, sourceTextLength: i, type: s } = e,
        r = "syntaxBefore" === t ? "before" : "after";
    return !(function (e) {
        let { boundary: t, content: n, sourceTextLength: l, type: i } = e;
        return (
            U(i, t) ||
            (function (e) {
                let { boundary: t, content: n, sourceTextLength: l } = e,
                    i = n;
                for (let e = 0; e < l && null != i && "string" != typeof i; e++) {
                    let e = (function (e, t) {
                        if ("start" === t) {
                            for (let t = 0; t < e.length; t++) if (!G(e[t])) return e[t];
                        } else for (let t = e.length - 1; t >= 0; t--) if (!G(e[t])) return e[t];
                    })(i instanceof Array ? i : [i], t);
                    if (null == e) break;
                    if (U(e.type, t)) return !0;
                    i = e.content;
                }
                return !1;
            })({ boundary: t, content: n, sourceTextLength: l })
        );
    })({ boundary: "syntaxBefore" === t ? "start" : "end", content: n, sourceTextLength: i, type: s })
        ? [t]
        : [t, ...[...l, s].map((e) => `${r}_${e}`)];
}
function U(e, t) {
    return I.get(e)?.has(t) ?? !1;
}
function G(e) {
    return "text" === e.type && "string" == typeof e.content && "" === e.content.trim();
}
function V(e, t, n, l, i) {
    return (
        "string" == typeof n
            ? (l = H({ result: e, sourceText: t, text: n, originalStart: l, attributes: i, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  l = P(e, t, n, l, i);
              })),
        B(t, l)
    );
}
function F(e) {
    let { result: t, sourceText: n, syntaxCharacters: l, pos: i, attributes: s } = e;
    if (l.length > 0) {
        let e = n.indexOf(l, i);
        if (-1 === e) return W(`Slate: Unable to find syntax characters "${l}" at position ${i}`, l, i);
        let r = n.substring(i, e + l.length);
        t.push({ text: r, attributes: [...s], start: i, data: null }), (i = e + l.length);
    }
    return i;
}
function H(e) {
    let { result: t, sourceText: n, text: l, originalStart: i, attributes: s, data: r } = e,
        a = B(n, i);
    for (; "\n" === l.charAt(0) || " " === l.charAt(0); ) l = l.substring(1);
    let o = n.indexOf(l, a);
    if ((o !== a ? (a = i = K(t, n, a, o)) : "\\" === l && "\\" === n.charAt(o + 1) && (o++, (i = ++a)), o !== a))
        return W(`Slate: Unable to find content in source text at start position ${a} for text position ${o}`, l, i);
    let u = a + l.length,
        c = n.substring(i, u);
    return t.push({ text: c, attributes: s.slice(), start: i, data: r }), u;
}
function B(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function W(e, t, n) {
    if (t.split("").some((e) => y.has(e))) return A.error(e), n;
    throw Error(e);
}
function K(e, t, n, l) {
    for (; n < l; )
        if (y.has(t[n]))
            (n = F({ result: e, sourceText: t, syntaxCharacters: t[n], pos: n, attributes: ["syntaxBefore"] })),
                (n = B(t, n));
        else break;
    return n;
}
var z = n(551483);
if ((n(654821), !s.KE._addedDiscordOverrides)) {
    let e = s.KE.positions;
    s.KE.positions = function* (t) {
        let n,
            l,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: r = t.selection, unit: a = "offset", reverse: o = !1, voids: u = !1 } = i ?? {};
        if (null == r) return;
        if (("block" === a && (a = "line"), "offset" === a)) {
            for (let n of e(t, i)) yield n;
            return;
        }
        n = X.isPoint(r)
            ? o
                ? { anchor: r, focus: Z.start(t, []) }
                : { anchor: r, focus: Z.end(t, []) }
            : Z.range(t, r);
        let [c, d] = Q.edges(n),
            h = Z.blocks(t),
            m = o ? -1 : 1,
            f = c.path[0] ?? 0,
            p = d.path[0] ?? h.length - 1,
            g = o ? p : f,
            x = o ? f : p,
            A = !1;
        "line" === a && (yield o ? d : c);
        for (let n = g; !A && (!o ? n <= x : n >= x); n += m)
            for (let r of (function* n(r) {
                let [h, f] = r,
                    p = f.length,
                    g = $.isAncestor(f, c.path),
                    x = $.isAncestor(f, d.path),
                    E = g ? c.path[p] : 0,
                    C = x ? d.path[p] : h.children.length - 1,
                    I = o ? C : E,
                    y = o ? E : C;
                for (let r = I; !A && (!o ? r <= y : r >= y); r += m) {
                    let m = h.children[r],
                        p = $.child(f, r);
                    if (q.isElement(m)) {
                        let e = o ? d.path : c.path;
                        if (!($.equals(p, e) || $.isAncestor(p, e))) {
                            let e = t.isVoid(m);
                            if ("line" === a && q.isElement(m) && !e) {
                                null != l && (yield l, (l = void 0)), (A = !0);
                                return;
                            }
                            if (!u && e) continue;
                        }
                        for (let e of n([m, p])) yield e;
                    } else if (J.isText(m))
                        if ("line" === a) l = { path: p, offset: o ? 0 : m.text.length };
                        else if (0 === m.text.length) yield { path: p, offset: 0 };
                        else {
                            let n = s.KE.range(t, p);
                            for (let l of ($.equals(p, c.path) && (n.anchor = c),
                            $.equals(p, d.path) && (n.focus = d),
                            e(t, { ...i, at: n })))
                                yield l;
                        }
                }
                "line" === a && q.isElement(h) && !t.isVoid(h) && (null != l && (yield l, (l = void 0)), (A = !0));
            })(h[n]))
                yield r;
    };
    let t = r.rL.findDocumentOrShadowRoot;
    (r.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (s.KE._addedDiscordOverrides = !0);
}
let Z = {
        ...s.KE,
        ...r.rL,
        richValue: (e) => e.children,
        blocks: (e) => Z.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => q.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => q.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => q.isElement(t) && s.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = Z.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && q.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = Z.node(e, z.fP);
            return J.isText(t[0]) ? t[0] : null;
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
            let t = null != e.selection ? Q.toPoint(e.selection) : null;
            return null == t ? null : Z.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            Z.above(e, { at: t, match: (t) => q.isElement(t) && Z.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => Z.above(e, { at: t, match: (e) => q.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => Z.above(e, { at: t, match: (t) => Z.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => Z.above(e, { at: t, match: (t) => Z.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            Z.above(e, { at: t, match: (e) => q.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = Q.toPoint(e.selection);
            return null == n ? null : Z.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            Z.nodes(e, { at: z.Dl, match: (e) => q.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (Q.isExpanded(e.selection)) {
                let [n, l] = Q.edges(e.selection),
                    i = Z.after(e, n, { unit: "offset" }),
                    s = Z.before(e, l, { unit: "offset" });
                if (null == i || null == s || !X.equals(i, s)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : Z.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = r.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let l = t.getRangeAt(0);
                    null != l && (n = r.rL.toSlateRange(e, l, { exactMatch: !0, suppressThrow: !0 }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, l] = Q.edges(t),
                i = Z.nodes(e, { at: t, mode: "lowest", match: (e) => J.isText(e) }),
                s = "";
            for (let [e, t] of i) {
                let i = $.equals(t, n.path) ? n.offset : 0,
                    r = $.equals(t, l.path) ? l.offset : 0;
                s += e.text.substring(i, r);
            }
            return s;
        },
        withoutNormalizing(e, t) {
            let n = Z.isNormalizing(e);
            Z.setNormalizing(e, !1);
            try {
                t();
            } finally {
                Z.setNormalizing(e, n);
            }
            !1 !== n && Z.normalize(e);
        },
        areStylesDisabled(e) {
            if (!e.previewMarkdown) return !0;
            let t = Z.richValue(e),
                n = t[0],
                l = n?.type === "line" ? n.children[0] : null;
            if (null == l || !J.isText(l)) return !1;
            let i = e.chatInputType,
                s = l.text;
            return (
                1 === t.length &&
                1 === n.children.length &&
                ((!0 === i.sedReplace && s.startsWith("s/")) || (i.autocomplete?.reactions === !0 && s.startsWith("+")))
            );
        },
        focus(e) {
            r.rL.isFocused(e) || (r.rL.focus(e), r.rL.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection) return { anchor: null, focus: null };
            if ($.isPath(t)) {
                let n = Z.range(e, t),
                    [l] = Z.node(e, t);
                if (q.isElement(l)) {
                    let l = Z.before(e, t),
                        i = Z.after(e, t);
                    t = { anchor: l ?? n.anchor, focus: i ?? n.focus };
                } else t = n;
            }
            let [n, l] = Q.edges(t),
                i = null,
                s = null;
            return (
                X.equals(e.selection.anchor, n)
                    ? (i = "start")
                    : X.equals(e.selection.anchor, l)
                      ? (i = "end")
                      : Q.includes(t, e.selection.anchor) && (i = "inside"),
                X.equals(e.selection.focus, n)
                    ? (s = "start")
                    : X.equals(e.selection.focus, l)
                      ? (s = "end")
                      : Q.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: i, focus: s }
            );
        },
    },
    Y = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    q = {
        ...s.Hg,
        updateElement(e, t) {
            let n = Z.node(e, t[1]);
            return (
                i()(!Z.isEditor(t[0]), "Element is the root node"),
                i()(null != n, "Failed to find element"),
                i()(q.isElement(n[0]), "Node at this path is no longer an element"),
                i()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let l = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                i = e.children.map((e) => (J.isText(e) ? e.text : "?"));
            return {
                entries: (function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = (function (e) {
                            let t,
                                n = [],
                                l = /\\|```/g;
                            for (; null != (t = l.exec(e)); ) {
                                if ("\\" === t[0]) {
                                    l.lastIndex += 1;
                                    continue;
                                }
                                n.push(t.index);
                            }
                            return n;
                        })(e);
                    if ((i.push(e.length), 1 === i.length && n)) return [];
                    let s = 0,
                        r = n,
                        a = [];
                    for (let n of i) {
                        if (r)
                            a.push({ text: e.substring(s, n), start: s, attributes: ["codeBlockText"], data: void 0 });
                        else {
                            let r = n === i[i.length - 2] ? e.substring(n + 3) : "";
                            n += 3 + (null != r.match(x) ? r : "").length;
                            let o = e.substring(s, n);
                            "" !== o &&
                                (function (e, t, n) {
                                    let l = [],
                                        i = n ? w : k,
                                        s = i.get(e);
                                    if (null != s) return s;
                                    let r =
                                            e
                                                .replace(/\r\n/g, " \n")
                                                .replace(/[\r\f]/g, " ")
                                                .replace(/\t/g, " ") + "\n\n",
                                        a = {
                                            originalMatch: { index: 0, 0: "" },
                                            type: "paragraph",
                                            content: (n ? M : O)(r, !0, {
                                                returnMentionIds: !0,
                                                disableAutoBlockNewlines: !0,
                                                guildId: t,
                                                isSlate: !0,
                                                allowGameMentions: !0,
                                                allowTimeMentionInput: !0,
                                            }),
                                        };
                                    P(l, r, a, 0, []);
                                    let o = (function (e) {
                                        if (0 === (e = e.filter((e) => e.text.length > 0)).length) return e;
                                        let t = [e[0]];
                                        for (let n = 1; n < e.length; n++) {
                                            let l = t[t.length - 1],
                                                i = l.start + l.text.length,
                                                s = e[n];
                                            s.start === i &&
                                            null == l.data &&
                                            null == s.data &&
                                            l.attributes.join("-") === s.attributes.join("-")
                                                ? (l.text += s.text)
                                                : t.push(s);
                                        }
                                        return t;
                                    })(l);
                                    return i.set(e, o), o;
                                })(o, t, l).forEach((e) => {
                                    a.push({ ...e, start: e.start + s });
                                });
                        }
                        (r = !r), (s = n);
                    }
                    return a;
                })(i.join(""), t ?? null, l, n),
                serializedChildren: i,
            };
        },
        isEmpty(e) {
            if (e.children.length > 1) return !1;
            if (0 === e.children.length) return !0;
            let t = e.children[0];
            return J.isText(t) && 0 === t.text.length;
        },
    },
    J = { ...s.EY },
    $ = {
        ...s.wA,
        isFirstEditorBlock: (e) => $.equals(e, z.Xg),
        isFirstEditorText: (e) => $.equals(e, z.fP),
        isFirstChild: (e, t) => $.equals(t, $.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    X = {
        ...s.bR,
        start(e) {
            let [, t] = e;
            return { path: $.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                l = t.children[t.children.length - 1];
            return { path: $.child(n, t.children.length - 1), offset: J.isText(l) ? l.text.length : 0 };
        },
        isAtStart(e, t) {
            return X.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return X.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, l] = Q.edges(t);
            return X.isBefore(e, n) && (e = n), X.isAfter(e, l) && (e = l), e;
        },
    },
    Q = {
        ...s.Q6,
        toPoint: (e) => (null == e || Q.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                l = t.children[t.children.length - 1];
            return {
                anchor: { path: $.child(n, 0), offset: 0 },
                focus: { path: $.child(n, t.children.length - 1), offset: J.isText(l) ? l.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, l] = Q.edges(e),
                [i, s] = Q.edges(t);
            return (X.isBefore(n, i) && (n = i), X.isAfter(l, s) && (l = s), Q.isForward(e))
                ? { anchor: n, focus: l }
                : { anchor: l, focus: n };
        },
    },
    ee = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && Q.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: l } = t;
            if (!Z.hasPath(e, n.path) || !Z.hasPath(e, l.path)) return !1;
            let [i] = Z.node(e, n.path),
                [s] = Z.node(e, l.path);
            return J.isText(i) && J.isText(s) && n.offset <= i.text.length && l.offset <= s.text.length;
        },
    };
function et(e, t) {
    let n = (t.top + t.bottom) / 2;
    return e.top <= n && e.bottom >= n;
}
function en(e, t, n) {
    let l = Z.toDOMRange(e, t).getBoundingClientRect(),
        i = Z.toDOMRange(e, n).getBoundingClientRect();
    return et(l, i) && et(i, l);
}
function el(e, t, n, l) {
    let i = { anchor: t, focus: t },
        s = 0,
        r = n.length,
        a = Math.floor((s + r) / 2);
    for (; a !== s; )
        if (
            (en(e, { anchor: n[a], focus: n[a] }, i) ? (l ? (r = a) : (s = a)) : l ? (s = a) : (r = a),
            (a = Math.floor((s + r) / 2)),
            !l && a === n.length - 2 && r === n.length - 1)
        ) {
            let t = n[n.length - 1];
            en(e, { anchor: t, focus: t }, i) && (a = r);
        }
    return n[a];
}
let ei = {
    getLineStart(e, t, n) {
        let l = Z.getParentElement(e, t);
        if (null == l) return null;
        let i = Z.start(e, l[1]),
            s = Array.from(Z.positions(e, { at: { anchor: i, focus: t } })),
            r = el(e, t, s, !0);
        if (n && X.equals(t, r) && !X.isAtEnd(t, l)) {
            let n = Z.after(e, t);
            if (null == n) return r;
            r = el(e, n, s, !0);
        }
        return r;
    },
    getLineEnd(e, t, n) {
        let l = Z.getParentElement(e, t);
        if (null == l) return null;
        let i = Z.end(e, l[1]),
            s = Array.from(Z.positions(e, { at: { anchor: t, focus: i } })),
            r = el(e, t, s, !1);
        if (n && X.equals(t, r) && !X.isAtEnd(t, l)) {
            let n = Z.after(e, t);
            if (null == n) return r;
            r = el(e, n, s, !1);
        }
        return r;
    },
};
