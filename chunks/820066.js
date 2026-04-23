"use strict";
n.d(t, {
    AS: () => W,
    Ot: () => X,
    cv: () => Y,
    PW: () => z,
    l5: () => K,
    e0: () => ee,
    ZF: () => q,
    VW: () => j,
    Kh: () => $,
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
    f = n(927813),
    g = n(981776);
let p = /^[a-z0-9_+\-.#]+$/i,
    A = new u.A("MarkdownToSlate"),
    I = {
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
    T = new Set(["*", "_", "\\"]),
    S = {},
    N = {};
for (let e in E.A.RULES) {
    if (!(e in I))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = I[e];
    "skip" !== t.type && (S[e] = C(E.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (N[e] = C("text" === e ? h.Ay : E.A.RULES[e]));
}
function C(e) {
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
function R(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let O = {
        url: {
            parse: (e) =>
                null == (0, c.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, c.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : R(e)),
        },
        mailto: { parse: R },
        tel: { parse: R },
        codeBlockSyntax: {
            order: d.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && g.default.isKnownLanguage(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    y = /(-# +)/,
    v = (0, m.A)([S, O]),
    D = (0, m.A)([N, O]),
    L = _.X(v),
    b = _.X(D),
    w = { max: 1 / 0, maxAge: +f.A.Millis.MINUTE, updateAgeOnGet: !0 },
    P = new (l())(w),
    k = new (l())(w);
function M(e, t, n, i, s) {
    let { content: a, type: o, originalMatch: l } = n;
    switch ((r()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), o)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return U(e, t, a || "", i, s);
        case "emoji":
        case "customEmoji": {
            let r = t.substring(i);
            if ((r.startsWith(l[0]) || ((i = B(e, t, i, t.length)), (r = t.substring(i))), r.startsWith(l[0])))
                return G({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
            throw Error(`Slate: Unable to find emoji: ${l[0]} in ${t} at ${i}`);
        }
        case "soundboard":
            return G({
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
                    G({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: i,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return G({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: { id: a } });
        }
        case "staticRouteLink":
            let { id: d, itemId: _ } = n;
            return G({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { id: d, itemId: _ },
            });
        case "timestamp":
        case "timestampMentionInput":
            return G({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
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
            i = V(t, i);
            let { before: n, after: r } = (function (e, t, n, i) {
                if ("inlineCode" === t) return { before: i[1], after: i[1] };
                if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                if ("subtext" === t) return { before: y.exec(i.input)[1], after: "" };
                let r = I["link" === t ? "url" : t];
                if ("inlineStyle" === r.type) return r;
                throw Error("Slate: rule must be an inlineStyle");
            })(t, o, i, l);
            return (
                (i = x(e, t, n, i, "syntaxBefore")),
                s.push(o),
                (i = U(e, t, a ?? "", i, s)),
                s.pop(),
                (i = x(e, t, r, i, "syntaxAfter")),
                V(t, i)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${o}`);
    }
}
function U(e, t, n, i, r) {
    return (
        "string" == typeof n
            ? (i = G({ result: e, sourceText: t, text: n, originalStart: i, attributes: r, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  i = M(e, t, n, i, r);
              })),
        V(t, i)
    );
}
function x(e, t, n, i, r) {
    if (n.length > 0) {
        let s = t.indexOf(n, i);
        if (-1 === s) return F(`Slate: Unable to find syntax characters "${n}" at position ${i}`, n, i);
        let a = t.substring(i, s + n.length);
        e.push({ text: a, attributes: [r], start: i, data: null }), (i = s + n.length);
    }
    return i;
}
function G(e) {
    let { result: t, sourceText: n, text: i, originalStart: r, attributes: s, data: a } = e,
        o = V(n, r);
    for (; "\n" === i.charAt(0) || " " === i.charAt(0); ) i = i.substring(1);
    let l = n.indexOf(i, o);
    if ((l !== o ? (o = r = B(t, n, o, l)) : "\\" === i && "\\" === n.charAt(l + 1) && (l++, (r = ++o)), l !== o))
        return F(`Slate: Unable to find content in source text at start position ${o} for text position ${l}`, i, r);
    let d = o + i.length,
        _ = n.substring(r, d);
    return t.push({ text: _, attributes: s.slice(), start: r, data: a }), d;
}
function V(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function F(e, t, n) {
    if (t.split("").some((e) => T.has(e))) return A.error(e), n;
    throw Error(e);
}
function B(e, t, n, i) {
    for (; n < i; )
        if (T.has(t[n])) (n = x(e, t, t[n], n, "syntaxBefore")), (n = V(t, n));
        else break;
    return n;
}
var H = n(551483);
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
        n = $.isPoint(a)
            ? l
                ? { anchor: a, focus: j.start(t, []) }
                : { anchor: a, focus: j.end(t, []) }
            : j.range(t, a);
        let [_, u] = q.edges(n),
            c = j.blocks(t),
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
                    f = z.isAncestor(h, _.path),
                    g = z.isAncestor(h, u.path),
                    A = f ? _.path[m] : 0,
                    I = g ? u.path[m] : c.children.length - 1,
                    T = l ? I : A,
                    S = l ? A : I;
                for (let a = T; !p && (!l ? a <= S : a >= S); a += E) {
                    let E = c.children[a],
                        m = z.child(h, a);
                    if (Y.isElement(E)) {
                        let e = l ? u.path : _.path;
                        if (!(z.equals(m, e) || z.isAncestor(m, e))) {
                            let e = t.isVoid(E);
                            if ("line" === o && Y.isElement(E) && !e) {
                                null != i && (yield i, (i = void 0)), (p = !0);
                                return;
                            }
                            if (!d && e) continue;
                        }
                        for (let e of n([E, m])) yield e;
                    } else if (K.isText(E))
                        if ("line" === o) i = { path: m, offset: l ? 0 : E.text.length };
                        else if (0 === E.text.length) yield { path: m, offset: 0 };
                        else {
                            let n = s.KE.range(t, m);
                            for (let i of (z.equals(m, _.path) && (n.anchor = _),
                            z.equals(m, u.path) && (n.focus = u),
                            e(t, { ...r, at: n })))
                                yield i;
                        }
                }
                "line" === o && Y.isElement(c) && !t.isVoid(c) && (null != i && (yield i, (i = void 0)), (p = !0));
            })(c[n]))
                yield a;
    };
    let t = a.rL.findDocumentOrShadowRoot;
    (a.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (s.KE._addedDiscordOverrides = !0);
}
let j = {
        ...s.KE,
        ...a.rL,
        richValue: (e) => e.children,
        blocks: (e) => j.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => Y.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => Y.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => Y.isElement(t) && s.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = j.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && Y.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = j.node(e, H.fP);
            return K.isText(t[0]) ? t[0] : null;
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
            let t = null != e.selection ? q.toPoint(e.selection) : null;
            return null == t ? null : j.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            j.above(e, { at: t, match: (t) => Y.isElement(t) && j.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => j.above(e, { at: t, match: (e) => Y.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => j.above(e, { at: t, match: (t) => j.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => j.above(e, { at: t, match: (t) => j.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            j.above(e, { at: t, match: (e) => Y.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = q.toPoint(e.selection);
            return null == n ? null : j.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            j.nodes(e, { at: H.Dl, match: (e) => Y.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (q.isExpanded(e.selection)) {
                let [n, i] = q.edges(e.selection),
                    r = j.after(e, n, { unit: "offset" }),
                    s = j.before(e, i, { unit: "offset" });
                if (null == r || null == s || !$.equals(r, s)) return null;
                t = r;
            } else t = e.selection.anchor;
            return null == t ? null : j.getParentVoid(e, t);
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
            let [n, i] = q.edges(t),
                r = j.nodes(e, { at: t, mode: "lowest", match: (e) => K.isText(e) }),
                s = "";
            for (let [e, t] of r) {
                let r = z.equals(t, n.path) ? n.offset : 0,
                    a = z.equals(t, i.path) ? i.offset : 0;
                s += e.text.substring(r, a);
            }
            return s;
        },
        withoutNormalizing(e, t) {
            let n = j.isNormalizing(e);
            j.setNormalizing(e, !1);
            try {
                t();
            } finally {
                j.setNormalizing(e, n);
            }
            !1 !== n && j.normalize(e);
        },
        areStylesDisabled(e) {
            if (!e.previewMarkdown) return !0;
            let t = j.richValue(e),
                n = t[0],
                i = n?.type === "line" ? n.children[0] : null;
            if (null == i || !K.isText(i)) return !1;
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
            if (z.isPath(t)) {
                let n = j.range(e, t),
                    [i] = j.node(e, t);
                if (Y.isElement(i)) {
                    let i = j.before(e, t),
                        r = j.after(e, t);
                    t = { anchor: i ?? n.anchor, focus: r ?? n.focus };
                } else t = n;
            }
            let [n, i] = q.edges(t),
                r = null,
                s = null;
            return (
                $.equals(e.selection.anchor, n)
                    ? (r = "start")
                    : $.equals(e.selection.anchor, i)
                      ? (r = "end")
                      : q.includes(t, e.selection.anchor) && (r = "inside"),
                $.equals(e.selection.focus, n)
                    ? (s = "start")
                    : $.equals(e.selection.focus, i)
                      ? (s = "end")
                      : q.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: r, focus: s }
            );
        },
    },
    W = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    Y = {
        ...s.Hg,
        updateElement(e, t) {
            let n = j.node(e, t[1]);
            return (
                r()(!j.isEditor(t[0]), "Element is the root node"),
                r()(null != n, "Failed to find element"),
                r()(Y.isElement(n[0]), "Node at this path is no longer an element"),
                r()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let i = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                r = e.children.map((e) => (K.isText(e) ? e.text : "?"));
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
                            n += 3 + (null != a.match(p) ? a : "").length;
                            let l = e.substring(s, n);
                            "" !== l &&
                                (function (e, t, n) {
                                    let i = [],
                                        r = n ? k : P,
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
                                            content: (n ? b : L)(a, !0, {
                                                returnMentionIds: !0,
                                                disableAutoBlockNewlines: !0,
                                                guildId: t,
                                                isSlate: !0,
                                                allowTimeMentionInput: !0,
                                            }),
                                        };
                                    M(i, a, o, 0, []);
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
            return K.isText(t) && 0 === t.text.length;
        },
    },
    K = { ...s.EY },
    z = {
        ...s.wA,
        isFirstEditorBlock: (e) => z.equals(e, H.Xg),
        isFirstEditorText: (e) => z.equals(e, H.fP),
        isFirstChild: (e, t) => z.equals(t, z.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    $ = {
        ...s.bR,
        start(e) {
            let [, t] = e;
            return { path: z.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return { path: z.child(n, t.children.length - 1), offset: K.isText(i) ? i.text.length : 0 };
        },
        isAtStart(e, t) {
            return $.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return $.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, i] = q.edges(t);
            return $.isBefore(e, n) && (e = n), $.isAfter(e, i) && (e = i), e;
        },
    },
    q = {
        ...s.Q6,
        toPoint: (e) => (null == e || q.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return {
                anchor: { path: z.child(n, 0), offset: 0 },
                focus: { path: z.child(n, t.children.length - 1), offset: K.isText(i) ? i.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, i] = q.edges(e),
                [r, s] = q.edges(t);
            return ($.isBefore(n, r) && (n = r), $.isAfter(i, s) && (i = s), q.isForward(e))
                ? { anchor: n, focus: i }
                : { anchor: i, focus: n };
        },
    },
    X = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && q.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: i } = t;
            if (!j.hasPath(e, n.path) || !j.hasPath(e, i.path)) return !1;
            let [r] = j.node(e, n.path),
                [s] = j.node(e, i.path);
            return K.isText(r) && K.isText(s) && n.offset <= r.text.length && i.offset <= s.text.length;
        },
    },
    Z = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    Q = (e, t, n) => {
        let i = j.toDOMRange(e, t).getBoundingClientRect(),
            r = j.toDOMRange(e, n).getBoundingClientRect();
        return Z(i, r) && Z(r, i);
    },
    J = (e, t, n, i) => {
        let r = { anchor: t, focus: t },
            s = 0,
            a = n.length,
            o = Math.floor((s + a) / 2);
        for (; o !== s; )
            if (
                (Q(e, { anchor: n[o], focus: n[o] }, r) ? (i ? (a = o) : (s = o)) : i ? (s = o) : (a = o),
                (o = Math.floor((s + a) / 2)),
                !i && o === n.length - 2 && a === n.length - 1)
            ) {
                let t = n[n.length - 1];
                Q(e, { anchor: t, focus: t }, r) && (o = a);
            }
        return n[o];
    },
    ee = {
        getLineStart(e, t, n) {
            let i = j.getParentElement(e, t);
            if (null == i) return null;
            let r = j.start(e, i[1]),
                s = Array.from(j.positions(e, { at: { anchor: r, focus: t } })),
                a = J(e, t, s, !0);
            if (n && $.equals(t, a) && !$.isAtEnd(t, i)) {
                let n = j.after(e, t);
                if (null == n) return a;
                a = J(e, n, s, !0);
            }
            return a;
        },
        getLineEnd(e, t, n) {
            let i = j.getParentElement(e, t);
            if (null == i) return null;
            let r = j.end(e, i[1]),
                s = Array.from(j.positions(e, { at: { anchor: t, focus: r } })),
                a = J(e, t, s, !1);
            if (n && $.equals(t, a) && !$.isAtEnd(t, i)) {
                let n = j.after(e, t);
                if (null == n) return a;
                a = J(e, n, s, !1);
            }
            return a;
        },
    };
