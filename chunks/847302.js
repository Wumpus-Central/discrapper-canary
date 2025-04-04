n.d(t, {
    Gg: () => v,
    KH: () => E,
    ZP: () => g
}),
    n(47120),
    n(978209),
    n(301563),
    n(653041);
var r = n(512722),
    i = n.n(r),
    o = n(911969),
    a = n(998698),
    s = n(465343),
    l = n(53529),
    c = n(341702),
    u = n(925994),
    d = n(436660),
    f = n(887490);
let _ = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    p = new Set(['emoji', 'customEmoji', 'textMention', 'userMention', 'roleMention', 'channelMention', 'staticRouteLink', 'soundboard', 'timestamp']),
    h = new Set(['line', 'blockQuote']),
    m = new Set(['applicationCommandOption']);
function g(e, t, n) {
    let { isInline: r, isVoid: i, onChange: o } = e;
    (e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!p.has(e.type) || r(e));
    let a = null,
        s = !0;
    return (
        (e.onChange = () => {
            let r = f.bN.richValue(e);
            (r !== a || e.previewMarkdown !== s) &&
                (l.T.withMergedEntry(e, () => {
                    f.bN.withoutNormalizing(e, () => E(e, t, n));
                }),
                (a = r),
                (s = e.previewMarkdown)),
                o();
        }),
        e
    );
}
function E(e, t, n) {
    let r = f.bN.areStylesDisabled(e);
    for (let i of f.bN.blocks(e))
        if (h.has(i[0].type)) r ? y(e, i, !0, null) : b(e, i, t, n);
        else {
            let [o, a] = i;
            for (let i = o.children.length - 1; i >= 0; i--) {
                let s = o.children[i];
                if (m.has(s.type)) {
                    let o = [s, f.C0.child(a, i)];
                    r ? y(e, o, !0, null) : b(e, o, t, n);
                }
            }
        }
}
function b(e, t, n, r) {
    var i;
    let o = 'line' === t[0].type && (null == (i = t[0].codeBlockState) ? void 0 : i.isInCodeBlock) === !0,
        a = f.q.markdown(t[0], n);
    y(e, t, o, a) && ((t = f.q.updateElement(e, t)), (a = f.q.markdown(t[0], n))), o || (v(e, t, r, a) && ((t = f.q.updateElement(e, t)), (a = f.q.markdown(t[0], n))), O(e, t, n, r, a));
}
function y(e, t, n, r) {
    let [i, o] = t,
        a = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let s = i.children[t],
            l = t < i.children.length - 1 ? i.children[t + 1] : null;
        if (f.LC.isText(s) && !n) {
            if (null == l || !e.isVoid(l)) continue;
            let n = !1,
                r = 0;
            for (;;) {
                let e = s.text.indexOf('\\', r);
                if (-1 === e) break;
                if (e === s.text.length - 1) {
                    n = !0;
                    break;
                }
                r = e + 2;
            }
            if (n) {
                let n = f.C0.child(o, t + 1);
                d.Q.voidToText(
                    e,
                    (0, u.sg)(l, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    n
                ),
                    (a = !0);
            }
        } else if (e.isVoid(s)) {
            let i = f.C0.child(o, t),
                l = {
                    path: f.C0.child(i, 0),
                    offset: 0
                };
            (n || (null != r && S(e, o, l, r))) &&
                (d.Q.voidToText(
                    e,
                    (0, u.sg)(s, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    i
                ),
                (a = !0));
        }
    }
    return a;
}
function v(e, t, n, r) {
    let i = t[1],
        o = !1,
        a = [...r.entries].reverse();
    for (let s = 0; s < a.length; s++) {
        let l,
            u = a[s],
            f = a[s + 1];
        if (null != f && f.text.endsWith('\\') && u.start === f.start + f.text.length) continue;
        switch (u.attributes[0]) {
            case 'emoji':
                l = {
                    type: 'emoji',
                    emoji: {
                        name: u.data.name,
                        src: u.data.src,
                        surrogate: u.data.surrogate,
                        jumboable: !0 === u.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'customEmoji':
                l = {
                    type: 'customEmoji',
                    emoji: {
                        emojiId: u.data.emojiId,
                        name: u.data.name,
                        animated: u.data.animated,
                        jumboable: !0 === u.data.jumboable
                    },
                    children: [{ text: '' }]
                };
                break;
            case 'textMention':
                l = {
                    type: 'textMention',
                    name: u.data.text,
                    children: [{ text: '' }]
                };
                break;
            case 'mention':
                l = {
                    type: 'userMention',
                    userId: u.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'roleMention':
                l = {
                    type: 'roleMention',
                    roleId: u.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'channelMention':
                l = {
                    type: 'channelMention',
                    channelId: u.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'staticRouteLink':
                l = {
                    type: 'staticRouteLink',
                    id: u.data.id,
                    itemId: u.data.itemId,
                    children: [{ text: '' }]
                };
                break;
            case 'soundboard':
                l = {
                    type: 'soundboard',
                    guildId: u.data.guildId,
                    soundId: u.data.soundId,
                    children: [{ text: '' }]
                };
                break;
            case 'timestamp':
                l = {
                    type: 'timestamp',
                    parsed: u.data,
                    children: [{ text: '' }]
                };
                break;
            default:
                continue;
        }
        if (!T(n, t[0], l)) continue;
        let _ = (0, c.t)(e, i, r.serializedChildren, u.start),
            p = (0, c.t)(e, i, r.serializedChildren, u.start + u.text.length);
        d.Q.textToVoid(e, l, {
            anchor: _,
            focus: p
        }),
            (o = !0);
    }
    return o;
}
function O(e, t, n, r, i) {
    let [o, a] = t,
        l = !1;
    for (let c = o.children.length - 1; c >= 0; c--) {
        let u,
            d = o.children[c];
        if (!f.LC.isText(d)) continue;
        let p = f.C0.child(a, c),
            h = [];
        for (_.lastIndex = 0; null != (u = _.exec(d.text)); ) {
            if (0 !== u.index && null == d.text.charAt(u.index - 1).match(/(\t|\s)/)) {
                _.lastIndex = u.index + 1;
                continue;
            }
            if (
                S(
                    e,
                    a,
                    {
                        path: p,
                        offset: u.index
                    },
                    i
                )
            )
                continue;
            let o = (0, s.i)(u[0], n, r);
            null != o && T(r, t[0], o)
                ? h.push({
                      index: u.index,
                      length: u[0].length,
                      node: o
                  })
                : (_.lastIndex = u.index + 1);
        }
        for (let t of h.reverse()) I(e, [d, f.C0.child(a, c)], t.index, t.length, t.node), (l = !0);
    }
    return l;
}
function I(e, t, n, r, o) {
    let [a, s] = t,
        l = {
            path: s,
            offset: n
        },
        c = {
            path: s,
            offset: n + r
        };
    i()(l.offset >= 0 && l.offset <= a.text.length, 'Failed to find valid start position for raw mention replace'),
        i()(c.offset >= 0 && c.offset <= a.text.length, 'Failed to find valid end position for raw mention replace'),
        d.Q.textToVoid(e, o, {
            anchor: l,
            focus: c
        });
}
function S(e, t, n, r) {
    let i = 0;
    for (let [r, o] of f.bN.nodes(e, {
        at: {
            anchor: f.bN.start(e, t),
            focus: n
        },
        mode: 'lowest'
    }))
        f.LC.isText(r) ? (f.C0.equals(o, n.path) ? (i += n.offset) : (i += r.text.length)) : (i += 1);
    for (let e of r.entries) {
        if (!e.attributes.includes('codeBlockText') && !e.attributes.includes('inlineCode')) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}
function T(e, t, n) {
    if ('applicationCommandOption' !== t.type) return !0;
    switch (t.optionType) {
        case o.jw.CHANNEL:
            return 'channelMention' === n.type;
        case o.jw.ROLE:
            return 'roleMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case o.jw.USER:
            return 'userMention' === n.type;
        case o.jw.MENTIONABLE:
            return 'roleMention' === n.type || 'userMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case o.jw.STRING: {
            let n = null != e ? a.Z.getOption(e, t.optionName) : null;
            return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
