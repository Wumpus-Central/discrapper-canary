"use strict";
n.d(t, {
    AS: () => H,
    Ot: () => J,
    cv: () => W,
    PW: () => z,
    l5: () => K,
    e0: () => Q,
    ZF: () => q,
    VW: () => B,
    Kh: () => Z,
}),
    n(134528),
    n(947204);
var l = n(284009),
    i = n.n(l),
    s = n(154283),
    a = n(670482);
n(321073);
var r = n(635377),
    o = n.n(r),
    c = n(791332),
    u = n(436857),
    d = n(626584),
    h = n(527214),
    m = n(29814),
    p = n(704726),
    f = n(551965),
    g = n(927813);
let _ = /^[a-z0-9_+\-.#]+$/i,
    x = new d.A("MarkdownToSlate"),
    C = {
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
    A = new Set(["*", "_", "\\"]),
    E = {},
    I = {};
for (let e in m.A.RULES) {
    if (!(e in C))
        throw Error(
            `Slate: Unknown markdown rule: ${e}.  If you have just added a new markdown rule then you probably need to add it to this file so that the rich chat box understands it.`,
        );
    let t = C[e];
    "skip" !== t.type && (E[e] = v(m.A.RULES[e])),
        "skip" !== t.type && "inlineObject" !== t.type && (I[e] = v("text" === e ? p.Ay : m.A.RULES[e]));
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
function y(e) {
    return { type: "autolink", content: e[1], originalMatch: e };
}
let b = {
        url: {
            parse: (e) =>
                null == (0, h.W1)(e[1])
                    ? { type: "text", content: e[0], originalMatch: e }
                    : { type: "link", content: e[1], originalMatch: e },
        },
        autolink: {
            parse: (e) => (null == (0, h.W1)(e[1]) ? { type: "text", content: e[0], originalMatch: e } : y(e)),
        },
        mailto: { parse: y },
        tel: { parse: y },
        codeBlockSyntax: {
            order: c.defaultRules.inlineCode.order - 0.1,
            match: (e) => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
            parse: (e) =>
                null != e[2] && "" !== e[2] && _.test(e[2])
                    ? [
                          { type: "codeBlockSyntax", content: e[1], originalMatch: e },
                          { type: "codeBlockLang", content: e[2], originalMatch: e },
                      ]
                    : { type: "codeBlockSyntax", content: e[0], originalMatch: e },
        },
    },
    S = /(-# +)/,
    N = (0, f.A)([E, b]),
    j = (0, f.A)([I, b]),
    T = u.X(N),
    w = u.X(j),
    R = { max: 1 / 0, maxAge: +g.A.Millis.MINUTE, updateAgeOnGet: !0 },
    L = new (o())(R),
    k = new (o())(R);
function O(e, t, n, l, s) {
    let { content: a, type: r, originalMatch: o } = n;
    switch ((i()(null != o, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), r)) {
        case "newline":
        case "br":
        case "paragraph":
        case "text":
        case "emoticon":
            return M(e, t, a || "", l, s);
        case "emoji":
        case "customEmoji": {
            let i = t.substring(l);
            if ((i.startsWith(o[0]) || ((l = G(e, t, l, t.length)), (i = t.substring(l))), i.startsWith(o[0])))
                return D({ result: e, sourceText: t, text: o[0], originalStart: l, attributes: [r], data: n });
            throw Error(`Slate: Unable to find emoji: ${o[0]} in ${t} at ${l}`);
        }
        case "soundboard":
            return D({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: l,
                attributes: [r],
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
                    i()(s === o[0], "Slate: text mentions must exactly match the regex match"),
                    D({
                        result: e,
                        sourceText: t,
                        text: s,
                        originalStart: l,
                        attributes: ["textMention"],
                        data: { text: s },
                    })
                );
            return D({ result: e, sourceText: t, text: o[0], originalStart: l, attributes: [r], data: { id: a } });
        }
        case "staticRouteLink":
            let { id: c, itemId: u } = n;
            return D({
                result: e,
                sourceText: t,
                text: o[0],
                originalStart: l,
                attributes: [r],
                data: { id: c, itemId: u },
            });
        case "timestamp":
        case "timestampMentionInput":
            return D({ result: e, sourceText: t, text: o[0], originalStart: l, attributes: [r], data: n });
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
            l = U(t, l);
            let { before: n, after: i } = (function (e, t, n, l) {
                if ("inlineCode" === t) return { before: l[1], after: l[1] };
                if ("em" === t && "_" === e.substring(n, n + 1)) return { before: "_", after: "_" };
                if ("subtext" === t) return { before: S.exec(l.input)[1], after: "" };
                let i = C["link" === t ? "url" : t];
                if ("inlineStyle" === i.type) return i;
                throw Error("Slate: rule must be an inlineStyle");
            })(t, r, l, o);
            return (
                (l = P(e, t, n, l, "syntaxBefore")),
                s.push(r),
                (l = M(e, t, a ?? "", l, s)),
                s.pop(),
                (l = P(e, t, i, l, "syntaxAfter")),
                U(t, l)
            );
        }
        default:
            throw Error(`Slate: Unknown rule type: ${r}`);
    }
}
function M(e, t, n, l, i) {
    return (
        "string" == typeof n
            ? (l = D({ result: e, sourceText: t, text: n, originalStart: l, attributes: i, data: null }))
            : (n instanceof Array || (n = [n]),
              n.forEach((n) => {
                  l = O(e, t, n, l, i);
              })),
        U(t, l)
    );
}
function P(e, t, n, l, i) {
    if (n.length > 0) {
        let s = t.indexOf(n, l);
        if (-1 === s) return V(`Slate: Unable to find syntax characters "${n}" at position ${l}`, n, l);
        let a = t.substring(l, s + n.length);
        e.push({ text: a, attributes: [i], start: l, data: null }), (l = s + n.length);
    }
    return l;
}
function D(e) {
    let { result: t, sourceText: n, text: l, originalStart: i, attributes: s, data: a } = e,
        r = U(n, i);
    for (; "\n" === l.charAt(0) || " " === l.charAt(0); ) l = l.substring(1);
    let o = n.indexOf(l, r);
    if ((o !== r ? (r = i = G(t, n, r, o)) : "\\" === l && "\\" === n.charAt(o + 1) && (o++, (i = ++r)), o !== r))
        return V(`Slate: Unable to find content in source text at start position ${r} for text position ${o}`, l, i);
    let c = r + l.length,
        u = n.substring(i, c);
    return t.push({ text: u, attributes: s.slice(), start: i, data: a }), c;
}
function U(e, t) {
    for (; "\n" === e.charAt(t) || " " === e.charAt(t); ) t++;
    return t;
}
function V(e, t, n) {
    if (t.split("").some((e) => A.has(e))) return x.error(e), n;
    throw Error(e);
}
function G(e, t, n, l) {
    for (; n < l; )
        if (A.has(t[n])) (n = P(e, t, t[n], n, "syntaxBefore")), (n = U(t, n));
        else break;
    return n;
}
var F = n(551483);
if ((n(654821), !s.KE._addedDiscordOverrides)) {
    let e = s.KE.positions;
    s.KE.positions = function* (t) {
        let n,
            l,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { at: a = t.selection, unit: r = "offset", reverse: o = !1, voids: c = !1 } = i ?? {};
        if (null == a) return;
        if (("block" === r && (r = "line"), "offset" === r)) {
            for (let n of e(t, i)) yield n;
            return;
        }
        n = Z.isPoint(a)
            ? o
                ? { anchor: a, focus: B.start(t, []) }
                : { anchor: a, focus: B.end(t, []) }
            : B.range(t, a);
        let [u, d] = q.edges(n),
            h = B.blocks(t),
            m = o ? -1 : 1,
            p = u.path[0] ?? 0,
            f = d.path[0] ?? h.length - 1,
            g = o ? f : p,
            _ = o ? p : f,
            x = !1;
        "line" === r && (yield o ? d : u);
        for (let n = g; !x && (!o ? n <= _ : n >= _); n += m)
            for (let a of (function* n(a) {
                let [h, p] = a,
                    f = p.length,
                    g = z.isAncestor(p, u.path),
                    _ = z.isAncestor(p, d.path),
                    C = g ? u.path[f] : 0,
                    A = _ ? d.path[f] : h.children.length - 1,
                    E = o ? A : C,
                    I = o ? C : A;
                for (let a = E; !x && (!o ? a <= I : a >= I); a += m) {
                    let m = h.children[a],
                        f = z.child(p, a);
                    if (W.isElement(m)) {
                        let e = o ? d.path : u.path;
                        if (!(z.equals(f, e) || z.isAncestor(f, e))) {
                            let e = t.isVoid(m);
                            if ("line" === r && W.isElement(m) && !e) {
                                null != l && (yield l, (l = void 0)), (x = !0);
                                return;
                            }
                            if (!c && e) continue;
                        }
                        for (let e of n([m, f])) yield e;
                    } else if (K.isText(m))
                        if ("line" === r) l = { path: f, offset: o ? 0 : m.text.length };
                        else if (0 === m.text.length) yield { path: f, offset: 0 };
                        else {
                            let n = s.KE.range(t, f);
                            for (let l of (z.equals(f, u.path) && (n.anchor = u),
                            z.equals(f, d.path) && (n.focus = d),
                            e(t, { ...i, at: n })))
                                yield l;
                        }
                }
                "line" === r && W.isElement(h) && !t.isVoid(h) && (null != l && (yield l, (l = void 0)), (x = !0));
            })(h[n]))
                yield a;
    };
    let t = a.rL.findDocumentOrShadowRoot;
    (a.rL.findDocumentOrShadowRoot = (e) => e.windowContext?.renderWindow.document ?? t(e)),
        (s.KE._addedDiscordOverrides = !0);
}
let B = {
        ...s.KE,
        ...a.rL,
        richValue: (e) => e.children,
        blocks: (e) => B.richValue(e).map((e, t) => [e, [t]]),
        isBlock: (e, t) => W.isElement(t) && s.KE.isBlock(e, t),
        isInline: (e, t) => W.isElement(t) && s.KE.isInline(e, t),
        isVoid: (e, t) => W.isElement(t) && s.KE.isVoid(e, t),
        isEditorEmpty(e) {
            let t = B.richValue(e);
            return !(t.length > 1) && (0 === t.length || ("line" === t[0].type && W.isEmpty(t[0])));
        },
        getFirstText(e) {
            let t = B.node(e, F.fP);
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
            return null == t ? null : B.node(e, t.path);
        },
        getParentBlock: (e, t) =>
            B.above(e, { at: t, match: (t) => W.isElement(t) && B.isBlock(e, t), mode: "lowest" }) ?? null,
        getParentElement: (e, t) => B.above(e, { at: t, match: (e) => W.isElement(e), mode: "lowest" }) ?? null,
        getParentInline: (e, t) => B.above(e, { at: t, match: (t) => B.isInline(e, t), mode: "lowest" }) ?? null,
        getParentVoid: (e, t) => B.above(e, { at: t, match: (t) => B.isVoid(e, t), mode: "lowest" }) ?? null,
        getParentOfType: (e, t, n) =>
            B.above(e, { at: t, match: (e) => W.isElement(e) && n.includes(e.type), mode: "lowest" }) ?? null,
        getSelectedParentOfType(e, t) {
            if (null == e.selection) return null;
            let n = q.toPoint(e.selection);
            return null == n ? null : B.getParentOfType(e, n, t);
        },
        getNodesOfType: (e, t) =>
            B.nodes(e, { at: F.Dl, match: (e) => W.isElement(e) && t.includes(e.type), mode: "highest" }),
        getSelectedVoid(e) {
            let t;
            if (null == e.selection) return null;
            if (q.isExpanded(e.selection)) {
                let [n, l] = q.edges(e.selection),
                    i = B.after(e, n, { unit: "offset" }),
                    s = B.before(e, l, { unit: "offset" });
                if (null == i || null == s || !Z.equals(i, s)) return null;
                t = i;
            } else t = e.selection.anchor;
            return null == t ? null : B.getParentVoid(e, t);
        },
        getSelectedText(e, t) {
            let n = null;
            if (t) {
                let t = a.rL.findDocumentOrShadowRoot(e).getSelection();
                if (null != t && t.rangeCount > 0) {
                    let l = t.getRangeAt(0);
                    null != l && (n = a.rL.toSlateRange(e, l, { exactMatch: !0, suppressThrow: !0 }));
                }
            } else n = e.selection;
            return null == n ? "" : this.getTextFromRange(e, n);
        },
        getTextFromRange(e, t) {
            let [n, l] = q.edges(t),
                i = B.nodes(e, { at: t, mode: "lowest", match: (e) => K.isText(e) }),
                s = "";
            for (let [e, t] of i) {
                let i = z.equals(t, n.path) ? n.offset : 0,
                    a = z.equals(t, l.path) ? l.offset : 0;
                s += e.text.substring(i, a);
            }
            return s;
        },
        withoutNormalizing(e, t) {
            let n = B.isNormalizing(e);
            B.setNormalizing(e, !1);
            try {
                t();
            } finally {
                B.setNormalizing(e, n);
            }
            !1 !== n && B.normalize(e);
        },
        areStylesDisabled(e) {
            if (!e.previewMarkdown) return !0;
            let t = B.richValue(e),
                n = t[0],
                l = n?.type === "line" ? n.children[0] : null;
            if (null == l || !K.isText(l)) return !1;
            let i = e.chatInputType,
                s = l.text;
            return (
                1 === t.length &&
                1 === n.children.length &&
                ((!0 === i.sedReplace && s.startsWith("s/")) || (i.autocomplete?.reactions === !0 && s.startsWith("+")))
            );
        },
        focus(e) {
            a.rL.isFocused(e) || (a.rL.focus(e), a.rL.deselect(e));
        },
        getSelectionOverlap(e, t) {
            if (null == e.selection) return { anchor: null, focus: null };
            if (z.isPath(t)) {
                let n = B.range(e, t),
                    [l] = B.node(e, t);
                if (W.isElement(l)) {
                    let l = B.before(e, t),
                        i = B.after(e, t);
                    t = { anchor: l ?? n.anchor, focus: i ?? n.focus };
                } else t = n;
            }
            let [n, l] = q.edges(t),
                i = null,
                s = null;
            return (
                Z.equals(e.selection.anchor, n)
                    ? (i = "start")
                    : Z.equals(e.selection.anchor, l)
                      ? (i = "end")
                      : q.includes(t, e.selection.anchor) && (i = "inside"),
                Z.equals(e.selection.focus, n)
                    ? (s = "start")
                    : Z.equals(e.selection.focus, l)
                      ? (s = "end")
                      : q.includes(t, e.selection.focus) && (s = "inside"),
                { anchor: i, focus: s }
            );
        },
    },
    H = {
        ...s.bP,
        isType: (e, t) => s.Hg.isElement(e) && e.type === t,
        isInTypes: (e, t) => s.Hg.isElement(e) && t.has(e.type),
    },
    W = {
        ...s.Hg,
        updateElement(e, t) {
            let n = B.node(e, t[1]);
            return (
                i()(!B.isEditor(t[0]), "Element is the root node"),
                i()(null != n, "Failed to find element"),
                i()(W.isElement(n[0]), "Node at this path is no longer an element"),
                i()(n[0].type === t[0].type, "Node at this path is a different type"),
                n
            );
        },
        markdown(e, t, n) {
            let l = "line" === e.type && e.codeBlockState?.wasInCodeBlock === !0,
                i = e.children.map((e) => (K.isText(e) ? e.text : "?"));
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
                        a = n,
                        r = [];
                    for (let n of i) {
                        if (a)
                            r.push({ text: e.substring(s, n), start: s, attributes: ["codeBlockText"], data: void 0 });
                        else {
                            let a = n === i[i.length - 2] ? e.substring(n + 3) : "";
                            n += 3 + (null != a.match(_) ? a : "").length;
                            let o = e.substring(s, n);
                            "" !== o &&
                                (function (e, t, n) {
                                    let l = [],
                                        i = n ? k : L,
                                        s = i.get(e);
                                    if (null != s) return s;
                                    let a =
                                            e
                                                .replace(/\r\n/g, " \n")
                                                .replace(/[\r\f]/g, " ")
                                                .replace(/\t/g, " ") + "\n\n",
                                        r = {
                                            originalMatch: { index: 0, 0: "" },
                                            type: "paragraph",
                                            content: (n ? w : T)(a, !0, {
                                                returnMentionIds: !0,
                                                disableAutoBlockNewlines: !0,
                                                guildId: t,
                                                isSlate: !0,
                                                allowTimeMentionInput: !0,
                                            }),
                                        };
                                    O(l, a, r, 0, []);
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
                                    r.push({ ...e, start: e.start + s });
                                });
                        }
                        (a = !a), (s = n);
                    }
                    return r;
                })(i.join(""), t ?? null, l, n),
                serializedChildren: i,
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
        isFirstEditorBlock: (e) => z.equals(e, F.Xg),
        isFirstEditorText: (e) => z.equals(e, F.fP),
        isFirstChild: (e, t) => z.equals(t, z.child(e, 0)),
        child: (e, t) => [...e, t],
    },
    Z = {
        ...s.bR,
        start(e) {
            let [, t] = e;
            return { path: z.child(t, 0), offset: 0 };
        },
        end(e) {
            let [t, n] = e,
                l = t.children[t.children.length - 1];
            return { path: z.child(n, t.children.length - 1), offset: K.isText(l) ? l.text.length : 0 };
        },
        isAtStart(e, t) {
            return Z.equals(e, this.start(t));
        },
        isAtEnd(e, t) {
            return Z.equals(e, this.end(t));
        },
        clamp(e, t) {
            let [n, l] = q.edges(t);
            return Z.isBefore(e, n) && (e = n), Z.isAfter(e, l) && (e = l), e;
        },
    },
    q = {
        ...s.Q6,
        toPoint: (e) => (null == e || q.isExpanded(e) ? null : e.anchor),
        children(e) {
            let [t, n] = e,
                l = t.children[t.children.length - 1];
            return {
                anchor: { path: z.child(n, 0), offset: 0 },
                focus: { path: z.child(n, t.children.length - 1), offset: K.isText(l) ? l.text.length : 0 },
            };
        },
        clamp(e, t) {
            let [n, l] = q.edges(e),
                [i, s] = q.edges(t);
            return (Z.isBefore(n, i) && (n = i), Z.isAfter(l, s) && (l = s), q.isForward(e))
                ? { anchor: n, focus: l }
                : { anchor: l, focus: n };
        },
    },
    J = {
        equals: (e, t) => (null == e && null == t) || (null != e && null != t && q.equals(e, t)),
        isValid(e, t) {
            if (null == t) return !1;
            let { anchor: n, focus: l } = t;
            if (!B.hasPath(e, n.path) || !B.hasPath(e, l.path)) return !1;
            let [i] = B.node(e, n.path),
                [s] = B.node(e, l.path);
            return K.isText(i) && K.isText(s) && n.offset <= i.text.length && l.offset <= s.text.length;
        },
    },
    Y = (e, t) => {
        let n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    $ = (e, t, n) => {
        let l = B.toDOMRange(e, t).getBoundingClientRect(),
            i = B.toDOMRange(e, n).getBoundingClientRect();
        return Y(l, i) && Y(i, l);
    },
    X = (e, t, n, l) => {
        let i = { anchor: t, focus: t },
            s = 0,
            a = n.length,
            r = Math.floor((s + a) / 2);
        for (; r !== s; )
            if (
                ($(e, { anchor: n[r], focus: n[r] }, i) ? (l ? (a = r) : (s = r)) : l ? (s = r) : (a = r),
                (r = Math.floor((s + a) / 2)),
                !l && r === n.length - 2 && a === n.length - 1)
            ) {
                let t = n[n.length - 1];
                $(e, { anchor: t, focus: t }, i) && (r = a);
            }
        return n[r];
    },
    Q = {
        getLineStart(e, t, n) {
            let l = B.getParentElement(e, t);
            if (null == l) return null;
            let i = B.start(e, l[1]),
                s = Array.from(B.positions(e, { at: { anchor: i, focus: t } })),
                a = X(e, t, s, !0);
            if (n && Z.equals(t, a) && !Z.isAtEnd(t, l)) {
                let n = B.after(e, t);
                if (null == n) return a;
                a = X(e, n, s, !0);
            }
            return a;
        },
        getLineEnd(e, t, n) {
            let l = B.getParentElement(e, t);
            if (null == l) return null;
            let i = B.end(e, l[1]),
                s = Array.from(B.positions(e, { at: { anchor: t, focus: i } })),
                a = X(e, t, s, !1);
            if (n && Z.equals(t, a) && !Z.isAtEnd(t, l)) {
                let n = B.after(e, t);
                if (null == n) return a;
                a = X(e, n, s, !1);
            }
            return a;
        },
    };
