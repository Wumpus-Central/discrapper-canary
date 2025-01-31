n.d(t, {
    sg: () => g,
    sk: () => h
}),
    n(47120),
    n(653041),
    n(757143);
var i = n(512722),
    r = n.n(i),
    a = n(933557),
    s = n(660199),
    o = n(763296),
    l = n(592125),
    u = n(430824),
    c = n(699516),
    d = n(914010),
    f = n(594174),
    _ = n(51144),
    p = n(887490);
function h(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: i, preventEmojiSurrogates: r } = null != t ? t : {},
        [a, s] = (null == t ? void 0 : t.range) != null ? p.M8.edges(t.range) : [void 0, void 0];
    return m(e, {
        mode: n,
        start: a,
        end: s,
        ignoreTrailingEmptyNodes: i,
        preventEmojiSurrogates: r
    });
}
function m(e, t) {
    var n, i;
    let { mode: r, start: a, end: s, separator: o, ignoreEmptyNodes: l, ignoreTrailingEmptyNodes: u, preventEmojiSurrogates: c } = null != t ? t : {},
        d = e.length > 0 && !p.LC.isText(e[0]);
    null == o && (o = d ? '\n' : '');
    let f = null !== (n = null == a ? void 0 : a.path[0]) && void 0 !== n ? n : 0,
        _ = null !== (i = null == s ? void 0 : s.path[0]) && void 0 !== i ? i : e.length - 1;
    if (u)
        for (let t = _; t >= f; t--) {
            let n = e[t];
            if (p.LC.isText(n)) {
                if (n.text.length > 0) {
                    _ = t;
                    break;
                }
            } else if (!p.q.isEmpty(n)) {
                _ = t;
                break;
            }
            if (t === f) return '';
        }
    let h = f > 0 && p.aj.isType(e[f - 1], 'blockQuote'),
        m = p.aj.isType(e[f], 'blockQuote'),
        E = p.aj.isType(e[_], 'blockQuote'),
        v = [];
    for (let t = f; t <= _; t++) {
        let n = e[t];
        if (l && p.LC.isText(n) && 0 === n.text.length) continue;
        let i =
                null != a && t === f
                    ? {
                          path: a.path.slice(1),
                          offset: a.offset
                      }
                    : void 0,
            o = g(n, {
                mode: r,
                start: i,
                end:
                    null != s && t === _
                        ? {
                              path: s.path.slice(1),
                              offset: s.offset
                          }
                        : void 0,
                allowBlockQuotePrefix: null == a || null == s || (!h && (!m || E)),
                preventEmojiSurrogates: c
            });
        (!l || o.length > 0) && v.push(o);
    }
    return v.join(o);
}
function g(e, t) {
    let { mode: n, start: i, allowBlockQuotePrefix: r = !1, preventEmojiSurrogates: h = !1 } = null != t ? t : {};
    if (p.LC.isText(e)) return E(e.text, t);
    switch (e.type) {
        case 'line':
        case 'testInline':
            return m(e.children, t);
        case 'testInlineVoid':
            return '';
        case 'blockQuote': {
            let n = m(e.children, t),
                a = null != i && 1 === i.path.length && 0 === i.path[0] && 0 === i.offset;
            if (r && (null == i || a)) return '> '.concat(n);
            return n;
        }
        case 'emoji': {
            let t = e.emoji;
            if (!h && null != t.surrogate) return t.surrogate;
            return t.name;
        }
        case 'customEmoji': {
            let t = e.emoji;
            if ('raw' === n) {
                let e = t.animated ? 'a' : '',
                    n = t.name.replace(/:/g, '').split('~')[0];
                return '<'.concat(e, ':').concat(n, ':').concat(t.emojiId, '>');
            }
            return t.name;
        }
        case 'textMention':
            return e.name;
        case 'channelMention': {
            let t = '<#'.concat(e.channelId, '>');
            if ('raw' === n) return t;
            let i = l.Z.getChannel(e.channelId);
            if (null == i) return t;
            return (0, a.F6)(i, f.default, c.Z, !0, !0);
        }
        case 'soundboard': {
            let t = '<sound:'.concat(e.guildId, ':').concat(e.soundId, '>');
            if ('raw' === n) return t;
            let i = o.Z.getSoundById(e.soundId);
            if (null == i) return t;
            return i.name;
        }
        case 'staticRouteLink':
            return null != e.itemId ? '<id:'.concat(e.id, ':').concat(e.itemId, '>') : '<id:'.concat(e.id, '>');
        case 'roleMention': {
            let t = '<@&'.concat(e.roleId, '>');
            if ('raw' === n) return t;
            let i = d.Z.getGuildId(),
                r = null != i ? u.Z.getRole(i, e.roleId) : void 0;
            if (null == r) return t;
            return '@'.concat(r.name);
        }
        case 'userMention': {
            let t = '<@'.concat(e.userId, '>');
            if ('raw' === n) return t;
            let i = f.default.getUser(e.userId);
            if (null == i) return t;
            return '@'.concat(_.ZP.getUserTag(i, { decoration: 'never' }));
        }
        case 'commandMention':
            return '</'.concat(e.commandName, ':').concat(e.commandId, '>');
        case 'timestamp':
            return (0, s.He)(e.parsed.timestamp, e.parsed.format);
        case 'applicationCommand':
            return m(e.children, {
                ...t,
                separator: ' ',
                ignoreEmptyNodes: !0
            });
        case 'applicationCommandOption': {
            let n = m(e.children, t);
            if (null == i) return ''.concat(e.optionDisplayName, ':').concat(n);
            return n;
        }
    }
}
function E(e, t) {
    var n, i;
    let { start: a, end: s } = null != t ? t : {};
    return r()(null == a || 0 === a.path.length, 'Invalid start provided to serializeText'), r()(null == s || 0 === s.path.length, 'Invalid end provided to serializeText'), e.substring(null !== (n = null == a ? void 0 : a.offset) && void 0 !== n ? n : 0, null !== (i = null == s ? void 0 : s.offset) && void 0 !== i ? i : e.length);
}
