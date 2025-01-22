r.d(n, {
    Gg: function () {
        return S;
    },
    KH: function () {
        return b;
    },
    ZP: function () {
        return y;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(512722),
    s = r.n(o),
    l = r(911969),
    u = r(998698),
    c = r(465343),
    d = r(53529),
    f = r(341702),
    p = r(925994),
    h = r(436660),
    _ = r(887490);
let m = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    g = new Set(['emoji', 'customEmoji', 'textMention', 'userMention', 'roleMention', 'channelMention', 'staticRouteLink', 'soundboard', 'timestamp']),
    E = new Set(['line', 'blockQuote']),
    v = new Set(['applicationCommandOption']);
function y(e, n, r) {
    let { isInline: i, isVoid: a, onChange: o } = e;
    (e.isVoid = (e) => !!g.has(e.type) || a(e)), (e.isInline = (e) => !!g.has(e.type) || i(e));
    let s = null,
        l = !0;
    return (
        (e.onChange = () => {
            let i = _.bN.richValue(e);
            (i !== s || e.previewMarkdown !== l) &&
                (d.T.withMergedEntry(e, () => {
                    _.bN.withoutNormalizing(e, () => b(e, n, r));
                }),
                (s = i),
                (l = e.previewMarkdown)),
                o();
        }),
        e
    );
}
function b(e, n, r) {
    let i = _.bN.areStylesDisabled(e);
    for (let a of _.bN.blocks(e))
        if (E.has(a[0].type)) i ? T(e, a, !0, null) : I(e, a, n, r);
        else {
            let [o, s] = a;
            for (let a = o.children.length - 1; a >= 0; a--) {
                let l = o.children[a];
                if (v.has(l.type)) {
                    let o = [l, _.C0.child(s, a)];
                    i ? T(e, o, !0, null) : I(e, o, n, r);
                }
            }
        }
}
function I(e, n, r, i) {
    var a;
    let o = 'line' === n[0].type && (null === (a = n[0].codeBlockState) || void 0 === a ? void 0 : a.isInCodeBlock) === !0,
        s = _.q.markdown(n[0], r);
    T(e, n, o, s) && ((n = _.q.updateElement(e, n)), (s = _.q.markdown(n[0], r))), !o && (S(e, n, i, s) && ((n = _.q.updateElement(e, n)), (s = _.q.markdown(n[0], r))), A(e, n, r, i, s));
}
function T(e, n, r, i) {
    let [a, o] = n,
        s = !1;
    for (let n = a.children.length - 1; n >= 0; n--) {
        let l = a.children[n],
            u = n < a.children.length - 1 ? a.children[n + 1] : null;
        if (_.LC.isText(l) && !r) {
            if (null == u || !e.isVoid(u)) continue;
            let r = !1,
                i = 0;
            for (;;) {
                let e = l.text.indexOf('\\', i);
                if (-1 === e) break;
                if (e === l.text.length - 1) {
                    r = !0;
                    break;
                }
                i = e + 2;
            }
            if (r) {
                let r = _.C0.child(o, n + 1);
                h.Q.voidToText(
                    e,
                    (0, p.sg)(u, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    r
                ),
                    (s = !0);
            }
        } else if (e.isVoid(l)) {
            let a = _.C0.child(o, n),
                u = {
                    path: _.C0.child(a, 0),
                    offset: 0
                };
            (r || (null != i && N(e, o, u, i))) &&
                (h.Q.voidToText(
                    e,
                    (0, p.sg)(l, {
                        mode: 'plain',
                        preventEmojiSurrogates: !0
                    }),
                    a
                ),
                (s = !0));
        }
    }
    return s;
}
function S(e, n, r, i) {
    let a = n[1],
        o = !1,
        s = [...i.entries].reverse();
    for (let l = 0; l < s.length; l++) {
        let u;
        let c = s[l],
            d = s[l + 1];
        if (null != d && d.text.endsWith('\\') && c.start === d.start + d.text.length) continue;
        switch (c.attributes[0]) {
            case 'emoji':
                u = {
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
                u = {
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
                u = {
                    type: 'textMention',
                    name: c.data.text,
                    children: [{ text: '' }]
                };
                break;
            case 'mention':
                u = {
                    type: 'userMention',
                    userId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'roleMention':
                u = {
                    type: 'roleMention',
                    roleId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'channelMention':
                u = {
                    type: 'channelMention',
                    channelId: c.data.id,
                    children: [{ text: '' }]
                };
                break;
            case 'staticRouteLink':
                u = {
                    type: 'staticRouteLink',
                    id: c.data.id,
                    itemId: c.data.itemId,
                    children: [{ text: '' }]
                };
                break;
            case 'soundboard':
                u = {
                    type: 'soundboard',
                    guildId: c.data.guildId,
                    soundId: c.data.soundId,
                    children: [{ text: '' }]
                };
                break;
            case 'timestamp':
                u = {
                    type: 'timestamp',
                    parsed: c.data,
                    children: [{ text: '' }]
                };
                break;
            default:
                continue;
        }
        if (!R(r, n[0], u)) continue;
        let p = (0, f.t)(e, a, i.serializedChildren, c.start),
            _ = (0, f.t)(e, a, i.serializedChildren, c.start + c.text.length);
        h.Q.textToVoid(e, u, {
            anchor: p,
            focus: _
        }),
            (o = !0);
    }
    return o;
}
function A(e, n, r, i, a) {
    let [o, s] = n,
        l = !1;
    for (let u = o.children.length - 1; u >= 0; u--) {
        let d;
        let f = o.children[u];
        if (!_.LC.isText(f)) continue;
        let p = _.C0.child(s, u),
            h = [];
        for (m.lastIndex = 0; null != (d = m.exec(f.text)); ) {
            if (0 !== d.index && null == f.text.charAt(d.index - 1).match(/(\t|\s)/)) {
                m.lastIndex = d.index + 1;
                continue;
            }
            if (
                N(
                    e,
                    s,
                    {
                        path: p,
                        offset: d.index
                    },
                    a
                )
            )
                continue;
            let o = (0, c.i)(d[0], r, i);
            null != o && R(i, n[0], o)
                ? h.push({
                      index: d.index,
                      length: d[0].length,
                      node: o
                  })
                : (m.lastIndex = d.index + 1);
        }
        for (let n of h.reverse()) C(e, [f, _.C0.child(s, u)], n.index, n.length, n.node), (l = !0);
    }
    return l;
}
function C(e, n, r, i, a) {
    let [o, l] = n,
        u = {
            path: l,
            offset: r
        },
        c = {
            path: l,
            offset: r + i
        };
    s()(u.offset >= 0 && u.offset <= o.text.length, 'Failed to find valid start position for raw mention replace'),
        s()(c.offset >= 0 && c.offset <= o.text.length, 'Failed to find valid end position for raw mention replace'),
        h.Q.textToVoid(e, a, {
            anchor: u,
            focus: c
        });
}
function N(e, n, r, i) {
    let a = 0;
    for (let [i, o] of _.bN.nodes(e, {
        at: {
            anchor: _.bN.start(e, n),
            focus: r
        },
        mode: 'lowest'
    }))
        _.LC.isText(i) ? (_.C0.equals(o, r.path) ? (a += r.offset) : (a += i.text.length)) : (a += 1);
    for (let e of i.entries) {
        if (!e.attributes.includes('codeBlockText') && !e.attributes.includes('inlineCode')) continue;
        let n = e.start,
            r = e.start + e.text.length;
        if (n <= a && r >= a) return !0;
    }
    return !1;
}
function R(e, n, r) {
    if ('applicationCommandOption' !== n.type) return !0;
    switch (n.optionType) {
        case l.jw.CHANNEL:
            return 'channelMention' === r.type;
        case l.jw.ROLE:
            return 'roleMention' === r.type || ('textMention' === r.type && '@everyone' === r.name);
        case l.jw.USER:
            return 'userMention' === r.type;
        case l.jw.MENTIONABLE:
            return 'roleMention' === r.type || 'userMention' === r.type || ('textMention' === r.type && '@everyone' === r.name);
        case l.jw.STRING: {
            let r = null != e ? u.Z.getOption(e, n.optionName) : null;
            return (null == r ? void 0 : r.choices) == null && (null == r ? void 0 : r.autocomplete) !== !0;
        }
        default:
            return !1;
    }
}
