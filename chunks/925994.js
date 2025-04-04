n.d(t, {
    sg: () => v,
    sk: () => b
}),
    n(47120),
    n(653041),
    n(757143),
    n(301563);
var r = n(512722),
    i = n.n(r),
    o = n(933557),
    a = n(660199),
    s = n(763296),
    l = n(592125),
    c = n(430824),
    u = n(699516),
    d = n(914010),
    f = n(594174),
    _ = n(51144),
    p = n(887490);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    let { mode: n, ignoreTrailingEmptyNodes: r, preventEmojiSurrogates: i } = null != t ? t : {},
        [o, a] = (null == t ? void 0 : t.range) != null ? p.M8.edges(t.range) : [void 0, void 0];
    return y(e, {
        mode: n,
        start: o,
        end: a,
        ignoreTrailingEmptyNodes: r,
        preventEmojiSurrogates: i
    });
}
function y(e, t) {
    var n, r;
    let { mode: i, start: o, end: a, separator: s, ignoreEmptyNodes: l, ignoreTrailingEmptyNodes: c, preventEmojiSurrogates: u } = null != t ? t : {},
        d = e.length > 0 && !p.LC.isText(e[0]);
    null == s && (s = d ? '\n' : '');
    let f = null != (n = null == o ? void 0 : o.path[0]) ? n : 0,
        _ = null != (r = null == a ? void 0 : a.path[0]) ? r : e.length - 1;
    if (c)
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
        g = p.aj.isType(e[_], 'blockQuote'),
        E = [];
    for (let t = f; t <= _; t++) {
        let n = e[t];
        if (l && p.LC.isText(n) && 0 === n.text.length) continue;
        let r =
                null != o && t === f
                    ? {
                          path: o.path.slice(1),
                          offset: o.offset
                      }
                    : void 0,
            s = v(n, {
                mode: i,
                start: r,
                end:
                    null != a && t === _
                        ? {
                              path: a.path.slice(1),
                              offset: a.offset
                          }
                        : void 0,
                allowBlockQuotePrefix: null == o || null == a || (!h && (!m || g)),
                preventEmojiSurrogates: u
            });
        (!l || s.length > 0) && E.push(s);
    }
    return E.join(s);
}
function v(e, t) {
    let { mode: n, start: r, allowBlockQuotePrefix: i = !1, preventEmojiSurrogates: h = !1 } = null != t ? t : {};
    if (p.LC.isText(e)) return O(e.text, t);
    switch (e.type) {
        case 'line':
        case 'testInline':
            return y(e.children, t);
        case 'testInlineVoid':
            return '';
        case 'blockQuote': {
            let n = y(e.children, t),
                o = null != r && 1 === r.path.length && 0 === r.path[0] && 0 === r.offset;
            if (i && (null == r || o)) return '> '.concat(n);
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
            let r = l.Z.getChannel(e.channelId);
            if (null == r) return t;
            return (0, o.F6)(r, f.default, u.Z, !0, !0);
        }
        case 'soundboard': {
            let t = '<sound:'.concat(e.guildId, ':').concat(e.soundId, '>');
            if ('raw' === n) return t;
            let r = s.Z.getSoundById(e.soundId);
            if (null == r) return t;
            return r.name;
        }
        case 'staticRouteLink':
            return null != e.itemId ? '<id:'.concat(e.id, ':').concat(e.itemId, '>') : '<id:'.concat(e.id, '>');
        case 'roleMention': {
            let t = '<@&'.concat(e.roleId, '>');
            if ('raw' === n) return t;
            let r = d.Z.getGuildId(),
                i = null != r ? c.Z.getRole(r, e.roleId) : void 0;
            if (null == i) return t;
            return '@'.concat(i.name);
        }
        case 'userMention': {
            let t = '<@'.concat(e.userId, '>');
            if ('raw' === n) return t;
            let r = f.default.getUser(e.userId);
            if (null == r) return t;
            return '@'.concat(_.ZP.getUserTag(r, { decoration: 'never' }));
        }
        case 'commandMention':
            return '</'.concat(e.commandName, ':').concat(e.commandId, '>');
        case 'timestamp':
            return (0, a.He)(e.parsed.timestamp, e.parsed.format);
        case 'applicationCommand':
            return y(
                e.children,
                E(m({}, t), {
                    separator: ' ',
                    ignoreEmptyNodes: !0
                })
            );
        case 'applicationCommandOption': {
            let n = y(e.children, t);
            if (null == r) return ''.concat(e.optionDisplayName, ':').concat(n);
            return n;
        }
    }
}
function O(e, t) {
    var n, r;
    let { start: o, end: a } = null != t ? t : {};
    return i()(null == o || 0 === o.path.length, 'Invalid start provided to serializeText'), i()(null == a || 0 === a.path.length, 'Invalid end provided to serializeText'), e.substring(null != (n = null == o ? void 0 : o.offset) ? n : 0, null != (r = null == a ? void 0 : a.offset) ? r : e.length);
}
