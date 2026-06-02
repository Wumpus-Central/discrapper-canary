"use strict";
n.d(t, {
    AS: () => j,
    Ot: () => q,
    cv: () => Y,
    PW: () => K,
    l5: () => W,
    e0: () => J,
    ZF: () => z,
    VW: () => H,
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
    I = new Set(["*", "_", "\\"]),
    T = {},
    S = {};
for (let e in h.A.RULES) {
    if (!(e in A))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = A[e];
    "skip" !== t.type && (T[e] = y(h.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (S[e] = y("text" === e ? f.Ay : h.A.RULES[e]));
}
function y(e) {
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
function N(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let v = {
        url: {
            parse: (e) =>
                null == (0, _.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, _.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : N(e)),
        },
        mailto: { parse: N },
        tel: { parse: N },
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
    C = /(-# +)/,
    R = (0, p.A)([T, v]),
    O = (0, p.A)([S, v]),
    b = c.X(R),
    D = c.X(O),
    L = { max: 1 / 0, maxAge: +E.A.Millis.MINUTE, updateAgeOnGet: !0 },
    w = new (l())(L),
    M = new (l())(L);
function P(e, t, n, i, s) {
    let { content: a, type: o, originalMatch: l } = n;
    switch ((r()(null != l, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), o)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return x(e, t, a || "", i, s);
        case "emoji":
        case "customEmoji": {
            let r = t.substring(i);
            if ((r.startsWith(l[0]) || ((i = V(e, t, i, t.length)), (r = t.substring(i))), r.startsWith(l[0])))
                return U({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
            throw Error(`Slate: Unable to find emoji: ${l[0]} in ${t} at ${i}`);
        }
        case "soundboard":
            return U({
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
                    U({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: i,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return U({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: { id: a } });
        }
        case "staticRouteLink":
            let { id: u, itemId: c } = n;
            return U({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { id: u, itemId: c },
            });
        case "gameMention":
            return U({
                result: e,
                sourceText: t,
                text: l[0],
                originalStart: i,
                attributes: [o],
                data: { id: n.gameId },
            });
        case "timestamp":
        case "timestampMentionInput":
            return U({ result: e, sourceText: t, text: l[0], originalStart: i, attributes: [o], data: n });
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
                if ("subtext" === t) return { before: C.exec(i.input)[1], after: "" };
                let r = A["link" === t ? "url" : t];
                if ("inlineStyle" === r.type) return r;
                throw Error("Slate: rule must be an inlineStyle");
            })(t, o, i, l);
            return (
                (i = k(e, t, n, i, "syntaxBefore")),
                s.push(o),
                (i = x(e, t, a ?? "", i, s)),
                s.pop(),
                (i = k(e, t, r, i, "syntaxAfter")),
                G(t, i)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${o}`);
    }
}
function x(e, t, n, i, r) {
    return (
        "string" == typeof n
            ? (i = U({ result: e, sourceText: t, text: n, originalStart: i, attributes: r, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  i = P(e, t, n, i, r);
              })),
        G(t, i)
    );
}
function k(e, t, n, i, r) {
    if (n.length > 0) {
        let s = t.indexOf(n, i);
        if (-1 === s) return F(`Slate: Unable to find syntax characters "${n}" at position ${i}`, n, i);
        let a = t.substring(i, s + n.length);
        e.push({ text: a, attributes: [r], start: i, data: null }), (i = s + n.length);
    }
    return i;
}
function U(e) {
    let { result: t, sourceText: n, text: i, originalStart: r, attributes: s, data: a } = e,
        o = G(n, r);
    for (; "\n" === i.charAt(0) || " " === i.charAt(0); ) i = i.substring(1);
    let l = n.indexOf(i, o);
    if ((l !== o ? (o = r = V(t, n, o, l)) : "\\" === i && "\\" === n.charAt(l + 1) && (l++, (r = ++o)), l !== o))
        return F(`Slate: Unable to find content in source text at start position ${o} for text position ${l}`, i, r);
    let u = o + i.length,
        c = n.substring(r, u);
    return t.push({ text: c, attributes: s.slice(), start: r, data: a }), u;
}
function G(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function F(e, t, n) {
    if (t.split("").some((e) => I.has(e))) return g.error(e), n;
    throw Error(e);
}
function V(e, t, n, i) {
    for (; n < i; )
        if (I.has(t[n])) (n = k(e, t, t[n], n, "syntaxBefore")), (n = G(t, n));
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
            { at: a = t.selection, unit: o = "offset", reverse: l = !1, voids: u = !1 } = r ?? {};
        if (null == a) return;
        if (("block" === o && (o = "line"), "offset" === o)) {
            for (let n of e(t, r)) yield n;
            return;
        }
        n = $.isPoint(a)
            ? l
                ? { anchor: a, focus: H.start(t, []) }
                : { anchor: a, focus: H.end(t, []) }
            : H.range(t, a);
        let [c, d] = z.edges(n),
            _ = H.blocks(t),
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
                    E = K.isAncestor(f, c.path),
                    m = K.isAncestor(f, d.path),
                    A = E ? c.path[p] : 0,
                    I = m ? d.path[p] : _.children.length - 1,
                    T = l ? I : A,
                    S = l ? A : I;
                for (let a = T; !g && (!l ? a <= S : a >= S); a += h) {
                    let h = _.children[a],
                        p = K.child(f, a);
                    if (Y.isElement(h)) {
                        let e = l ? d.path : c.path;
                        if (!(K.equals(p, e) || K.isAncestor(p, e))) {
                            let e = t.isVoid(h);
                            if ("line" === o && Y.isElement(h) && !e) {
                                null != i && (yield i, (i = void 0)), (g = !0);
                                return;
                            }
                            if (!u && e) continue;
                        }
                        for (let e of n([h, p])) yield e;
                    } else if (W.isText(h))
                        if ("line" === o) i = { path: p, offset: l ? 0 : h.text.length };
                        else if (0 === h.text.length) yield { path: p, offset: 0 };
                        else {
                            let n = s.KE.range(t, p);
                            for (let i of (K.equals(p, c.path) && (n.anchor = c),
                            K.equals(p, d.path) && (n.focus = d),
                            e(t, { ...r, at: n })))
                                yield i;
                        }
                }
                "line" === o && Y.isElement(_) && !t.isVoid(_) && (null != i && (yield i, (i = void 0)), (g = !0));
            })(_[n]))
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
        isBlock: (e, t) => Y.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => Y.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => Y.isElement(t) && s.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = H.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && Y.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = H.node(e, B.fP);
            return W.isText(t[0]) ? t[0] : null;
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
            let t = null != e.selection ? z.toPoint(e.selection) : null;
            return null == t ? null : H.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            H.above(e, { at: t, match: (t) => Y.isElement(t) && H.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => H.above(e, { at: t, match: (e) => Y.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => H.above(e, { at: t, match: (t) => H.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => H.above(e, { at: t, match: (t) => H.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            H.above(e, { at: t, match: (e) => Y.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = z.toPoint(e.selection);
            return null == n ? null : H.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            H.nodes(e, { at: B.Dl, match: (e) => Y.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (z.isExpanded(e.selection)) {
                let [n, i] = z.edges(e.selection),
                    r = H.after(e, n, { unit: "offset" }),
                    s = H.before(e, i, { unit: "offset" });
                if (null == r || null == s || !$.equals(r, s)) return null;
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
            let [n, i] = z.edges(t),
                r = H.nodes(e, { at: t, mode: "lowest", match: (e) => W.isText(e) }),
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
            if (null == i || !W.isText(i)) return !1;
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
                if (Y.isElement(i)) {
                    let i = H.before(e, t),
                        r = H.after(e, t);
                    t = { anchor: i ?? n.anchor, focus: r ?? n.focus };
                } else t = n;
            }
            let [n, i] = z.edges(t),
                r = null,
                s = null;
            return (
                $.equals(e.selection.anchor, n)
                    ? (r = "start")
                    : $.equals(e.selection.anchor, i)
                      ? (r = "end")
                      : z.includes(t, e.selection.anchor) && (r = "inside"),
                $.equals(e.selection.focus, n)
                    ? (s = "start")
                    : $.equals(e.selection.focus, i)
                      ? (s = "end")
                      : z.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: r, focus: s }
            );
        },
    },
    j = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    Y = {
        ...s.Hg,
        updateElement(e, t) {
            let n = H.node(e, t[1]);
            return (
                r()(!H.isEditor(t[0]), "Element is the root node"),
                r()(null != n, "Failed to find element"),
                r()(Y.isElement(n[0]), "Node at this path is no longer an element"),
                r()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let i = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                r = e.children.map((e) => (W.isText(e) ? e.text : "?"));
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
                                        r = n ? M : w,
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
                                            content: (n ? D : b)(a, !0, {
                                                returnMentionIds: !0,
                                                disableAutoBlockNewlines: !0,
                                                guildId: t,
                                                isSlate: !0,
                                                allowGameMentions: !0,
                                                allowTimeMentionInput: !0,
                                            }),
                                        };
                                    P(i, a, o, 0, []);
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
            return W.isText(t) && 0 === t.text.length;
        },
    },
    W = { ...s.EY },
    K = {
        ...s.wA,
        isFirstEditorBlock: (e) => K.equals(e, B.Xg),
        isFirstEditorText: (e) => K.equals(e, B.fP),
        isFirstChild: (e, t) => K.equals(t, K.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    $ = {
        ...s.bR,
        start(e) {
            let [, t] = e;
            return { path: K.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return { path: K.child(n, t.children.length - 1), offset: W.isText(i) ? i.text.length : 0 };
        },
        isAtStart(e, t) {
            return $.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return $.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, i] = z.edges(t);
            return $.isBefore(e, n) && (e = n), $.isAfter(e, i) && (e = i), e;
        },
    },
    z = {
        ...s.Q6,
        toPoint: (e) => (null == e || z.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                i = t.children[t.children.length - 1];
            return {
                anchor: { path: K.child(n, 0), offset: 0 },
                focus: { path: K.child(n, t.children.length - 1), offset: W.isText(i) ? i.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, i] = z.edges(e),
                [r, s] = z.edges(t);
            return ($.isBefore(n, r) && (n = r), $.isAfter(i, s) && (i = s), z.isForward(e))
                ? { anchor: n, focus: i }
                : { anchor: i, focus: n };
        },
    },
    q = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && z.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: i } = t;
            if (!H.hasPath(e, n.path) || !H.hasPath(e, i.path)) return !1;
            let [r] = H.node(e, n.path),
                [s] = H.node(e, i.path);
            return W.isText(r) && W.isText(s) && n.offset <= r.text.length && i.offset <= s.text.length;
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
            if (n && $.equals(t, a) && !$.isAtEnd(t, i)) {
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
            if (n && $.equals(t, a) && !$.isAtEnd(t, i)) {
                let n = H.after(e, t);
                if (null == n) return a;
                a = Q(e, n, s, !1);
            }
            return a;
        },
    };
