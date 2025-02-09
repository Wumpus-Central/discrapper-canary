n.d(t, {
    Gg: () => I,
    KH: () => E,
    ZP: () => g
}),
    n(47120),
    n(653041);
var i = n(512722),
    r = n.n(i),
    a = n(911969),
    s = n(998698),
    o = n(465343),
    l = n(53529),
    u = n(341702),
    c = n(925994),
    d = n(436660),
    f = n(887490);
let _ = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    p = new Set(['emoji', 'customEmoji', 'textMention', 'userMention', 'roleMention', 'channelMention', 'staticRouteLink', 'soundboard', 'timestamp']),
    h = new Set(['line', 'blockQuote']),
    m = new Set(['applicationCommandOption']);
function g(e, t, n) {
    let { isInline: i, isVoid: r, onChange: a } = e;
    (e.isVoid = (e) => !!p.has(e.type) || r(e)), (e.isInline = (e) => !!p.has(e.type) || i(e));
    let s = null,
        o = !0;
    return (
        (e.onChange = () => {
            let i = f.bN.richValue(e);
            (i !== s || e.previewMarkdown !== o) &&
                (l.T.withMergedEntry(e, () => {
                    f.bN.withoutNormalizing(e, () => E(e, t, n));
                }),
                (s = i),
                (o = e.previewMarkdown)),
                a();
        }),
        e
    );
}
function E(e, t, n) {
    let i = f.bN.areStylesDisabled(e);
    for (let r of f.bN.blocks(e))
        if (h.has(r[0].type)) i ? y(e, r, !0, null) : v(e, r, t, n);
        else {
            let [a, s] = r;
            for (let r = a.children.length - 1; r >= 0; r--) {
                let o = a.children[r];
                if (m.has(o.type)) {
                    let a = [o, f.C0.child(s, r)];
                    i ? y(e, a, !0, null) : v(e, a, t, n);
                }
            }
        }
}
function v(e, t, n, i) {
    var r;
    let a = 'line' === t[0].type && (null === (r = t[0].codeBlockState) || void 0 === r ? void 0 : r.isInCodeBlock) === !0,
        s = f.q.markdown(t[0], n);
    y(e, t, a, s) && ((t = f.q.updateElement(e, t)), (s = f.q.markdown(t[0], n))), a || (I(e, t, i, s) && ((t = f.q.updateElement(e, t)), (s = f.q.markdown(t[0], n))), T(e, t, n, i, s));
}
function y(e, t, n, i) {
    let [r, a] = t,
        s = !1;
    for (let t = r.children.length - 1; t >= 0; t--) {
        let o = r.children[t],
            l = t < r.children.length - 1 ? r.children[t + 1] : null;
        if (f.LC.isText(o) && !n) {
            if (null == l || !e.isVoid(l)) continue;
            let n = !1,
                i = 0;
            for (;;) {
                let e = o.text.indexOf('\\', i);
                if (-1 === e) break;
                if (e === o.text.length - 1) {
                    n = !0;
                    break;
                }
                i = e + 2;
            }
            if (n) {
                let n = f.C0.child(a, t + 1);
                d.Q.voidToText(
                    e,
                    (0, c.sg)(l, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    n
                ),
                    (s = !0);
            }
        } else if (e.isVoid(o)) {
            let r = f.C0.child(a, t),
                l = {
                    path: f.C0.child(r, 0),
                    offset: 0
                };
            (n || (null != i && S(e, a, l, i))) &&
                (d.Q.voidToText(
                    e,
                    (0, c.sg)(o, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    r
                ),
                (s = !0));
        }
    }
    return s;
}
function I(e, t, n, i) {
    let r = t[1],
        a = !1,
        s = [...i.entries].reverse();
    for (let o = 0; o < s.length; o++) {
        let l;
        let c = s[o],
            f = s[o + 1];
        if (null != f && f.text.endsWith('\\') && c.start === f.start + f.text.length) continue;
        switch (c.attributes[0]) {
            case 'emoji':
                l = {
                    type: 'emoji',
                    emoji: {
                        name: c.data.name,
                        src: c.data.src,
                        surrogate: c.data.surrogate,
                        jumboable: !0 === c.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'customEmoji':
                l = {
                    type: 'customEmoji',
                    emoji: {
                        emojiId: c.data.emojiId,
                        name: c.data.name,
                        animated: c.data.animated,
                        jumboable: !0 === c.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'textMention':
                l = {
                    type: 'textMention',
                    name: c.data.text,
                    children: [{ text: '' }]
                };
                break;
            case 'mention':
                l = {
                    type: 'userMention',
                    userId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'roleMention':
                l = {
                    type: 'roleMention',
                    roleId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'channelMention':
                l = {
                    type: 'channelMention',
                    channelId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'staticRouteLink':
                l = {
                    type: 'staticRouteLink',
                    id: c.data.id,
                    itemId: c.data.itemId,
                    children: [{ text: '' }]
                };
                break;
            case 'soundboard':
                l = {
                    type: 'soundboard',
                    guildId: c.data.guildId,
                    soundId: c.data.soundId,
                    children: [{ text: '' }]
                };
                break;
            case 'timestamp':
                l = {
                    type: 'timestamp',
                    parsed: c.data,
                    children: [{ text: '' }]
                };
                break;
            default:
                continue;
        }
        if (!A(n, t[0], l)) continue;
        let _ = (0, u.t)(e, r, i.serializedChildren, c.start),
            p = (0, u.t)(e, r, i.serializedChildren, c.start + c.text.length);
        d.Q.textToVoid(e, l, {
            anchor: _,
            focus: p
        }),
            (a = !0);
    }
    return a;
}
function T(e, t, n, i, r) {
    let [a, s] = t,
        l = !1;
    for (let u = a.children.length - 1; u >= 0; u--) {
        let c;
        let d = a.children[u];
        if (!f.LC.isText(d)) continue;
        let p = f.C0.child(s, u),
            h = [];
        for (_.lastIndex = 0; null != (c = _.exec(d.text)); ) {
            if (0 !== c.index && null == d.text.charAt(c.index - 1).match(/(\t|\s)/)) {
                _.lastIndex = c.index + 1;
                continue;
            }
            if (
                S(
                    e,
                    s,
                    {
                        path: p,
                        offset: c.index
                    },
                    r
                )
            )
                continue;
            let a = (0, o.i)(c[0], n, i);
            null != a && A(i, t[0], a)
                ? h.push({
                      index: c.index,
                      length: c[0].length,
                      node: a
                  })
                : (_.lastIndex = c.index + 1);
        }
        for (let t of h.reverse()) b(e, [d, f.C0.child(s, u)], t.index, t.length, t.node), (l = !0);
    }
    return l;
}
function b(e, t, n, i, a) {
    let [s, o] = t,
        l = {
            path: o,
            offset: n
        },
        u = {
            path: o,
            offset: n + i
        };
    r()(l.offset >= 0 && l.offset <= s.text.length, 'Failed to find valid start position for raw mention replace'),
        r()(u.offset >= 0 && u.offset <= s.text.length, 'Failed to find valid end position for raw mention replace'),
        d.Q.textToVoid(e, a, {
            anchor: l,
            focus: u
        });
}
function S(e, t, n, i) {
    let r = 0;
    for (let [i, a] of f.bN.nodes(e, {
        at: {
            anchor: f.bN.start(e, t),
            focus: n
        },
        mode: 'lowest'
    }))
        f.LC.isText(i) ? (f.C0.equals(a, n.path) ? (r += n.offset) : (r += i.text.length)) : (r += 1);
    for (let e of i.entries) {
        if (!e.attributes.includes('codeBlockText') && !e.attributes.includes('inlineCode')) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= r && n >= r) return !0;
    }
    return !1;
}
function A(e, t, n) {
    if ('applicationCommandOption' !== t.type) return !0;
    switch (t.optionType) {
        case a.jw.CHANNEL:
            return 'channelMention' === n.type;
        case a.jw.ROLE:
            return 'roleMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case a.jw.USER:
            return 'userMention' === n.type;
        case a.jw.MENTIONABLE:
            return 'roleMention' === n.type || 'userMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case a.jw.STRING: {
            let n = null != e ? s.Z.getOption(e, t.optionName) : null;
            return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
