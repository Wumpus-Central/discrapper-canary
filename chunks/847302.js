n.d(t, {
    Gg: () => O,
    KH: () => E,
    ZP: () => g
}),
    n(388685),
    n(583741),
    n(35282),
    n(539854);
var r = n(512722),
    i = n.n(r),
    a = n(911969),
    o = n(998698),
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
    let { isInline: r, isVoid: i, onChange: a } = e;
    (e.isVoid = (e) => !!p.has(e.type) || i(e)), (e.isInline = (e) => !!p.has(e.type) || r(e));
    let o = null,
        s = !0;
    return (
        (e.onChange = () => {
            let r = f.bN.richValue(e);
            (r !== o || e.previewMarkdown !== s) &&
                (l.T.withMergedEntry(e, () => {
                    f.bN.withoutNormalizing(e, () => E(e, t, n));
                }),
                (o = r),
                (s = e.previewMarkdown)),
                a();
        }),
        e
    );
}
function E(e, t, n) {
    let r = f.bN.areStylesDisabled(e);
    for (let i of f.bN.blocks(e))
        if (h.has(i[0].type)) r ? y(e, i, !0, null) : b(e, i, t, n);
        else {
            let [a, o] = i;
            for (let i = a.children.length - 1; i >= 0; i--) {
                let s = a.children[i];
                if (m.has(s.type)) {
                    let a = [s, f.C0.child(o, i)];
                    r ? y(e, a, !0, null) : b(e, a, t, n);
                }
            }
        }
}
function b(e, t, n, r) {
    var i;
    let a = 'line' === t[0].type && (null == (i = t[0].codeBlockState) ? void 0 : i.isInCodeBlock) === !0,
        o = f.q.markdown(t[0], n);
    y(e, t, a, o) && ((t = f.q.updateElement(e, t)), (o = f.q.markdown(t[0], n))), a || (O(e, t, r, o) && ((t = f.q.updateElement(e, t)), (o = f.q.markdown(t[0], n))), v(e, t, n, r, o));
}
function y(e, t, n, r) {
    let [i, a] = t,
        o = !1;
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
                let n = f.C0.child(a, t + 1);
                d.Q.voidToText(
                    e,
                    (0, u.sg)(l, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    n
                ),
                    (o = !0);
            }
        } else if (e.isVoid(s)) {
            let i = f.C0.child(a, t),
                l = {
                    path: f.C0.child(i, 0),
                    offset: 0
                };
            (n || (null != r && S(e, a, l, r))) &&
                (d.Q.voidToText(
                    e,
                    (0, u.sg)(s, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    i
                ),
                (o = !0));
        }
    }
    return o;
}
function O(e, t, n, r) {
    let i = t[1],
        a = !1,
        o = [...r.entries].reverse();
    for (let s = 0; s < o.length; s++) {
        let l,
            u = o[s],
            f = o[s + 1];
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
            (a = !0);
    }
    return a;
}
function v(e, t, n, r, i) {
    let [a, o] = t,
        l = !1;
    for (let c = a.children.length - 1; c >= 0; c--) {
        let u,
            d = a.children[c];
        if (!f.LC.isText(d)) continue;
        let p = f.C0.child(o, c),
            h = [];
        for (_.lastIndex = 0; null != (u = _.exec(d.text)); ) {
            if (0 !== u.index && null == d.text.charAt(u.index - 1).match(/(\t|\s)/)) {
                _.lastIndex = u.index + 1;
                continue;
            }
            if (
                S(
                    e,
                    o,
                    {
                        path: p,
                        offset: u.index
                    },
                    i
                )
            )
                continue;
            let a = (0, s.i)(u[0], n, r);
            null != a && T(r, t[0], a)
                ? h.push({
                      index: u.index,
                      length: u[0].length,
                      node: a
                  })
                : (_.lastIndex = u.index + 1);
        }
        for (let t of h.reverse()) I(e, [d, f.C0.child(o, c)], t.index, t.length, t.node), (l = !0);
    }
    return l;
}
function I(e, t, n, r, a) {
    let [o, s] = t,
        l = {
            path: s,
            offset: n
        },
        c = {
            path: s,
            offset: n + r
        };
    i()(l.offset >= 0 && l.offset <= o.text.length, 'Failed to find valid start position for raw mention replace'),
        i()(c.offset >= 0 && c.offset <= o.text.length, 'Failed to find valid end position for raw mention replace'),
        d.Q.textToVoid(e, a, {
            anchor: l,
            focus: c
        });
}
function S(e, t, n, r) {
    let i = 0;
    for (let [r, a] of f.bN.nodes(e, {
        at: {
            anchor: f.bN.start(e, t),
            focus: n
        },
        mode: 'lowest'
    }))
        f.LC.isText(r) ? (f.C0.equals(a, n.path) ? (i += n.offset) : (i += r.text.length)) : (i += 1);
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
        case a.jw.CHANNEL:
            return 'channelMention' === n.type;
        case a.jw.ROLE:
            return 'roleMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case a.jw.USER:
            return 'userMention' === n.type;
        case a.jw.MENTIONABLE:
            return 'roleMention' === n.type || 'userMention' === n.type || ('textMention' === n.type && '@everyone' === n.name);
        case a.jw.STRING: {
            let n = null != e ? o.Z.getOption(e, t.optionName) : null;
            return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
