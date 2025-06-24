n.d(t, {
    Pe: () => en,
    Pr: () => W,
    Qe: () => $,
    ZP: () => ea,
    co: () => ei,
    nB: () => er
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282),
    n(781311),
    n(704826),
    n(290780);
var r = n(658722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(984933),
    u = n(699516),
    d = n(768119),
    f = n(944486),
    _ = n(914010),
    p = n(246946),
    h = n(594174),
    m = n(483360),
    g = n(226951),
    E = n(51144),
    b = n(473938),
    y = n(981631),
    O = n(388032);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function N() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function C() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function R(e, t) {
    return [e, e.clone().add(1, t)];
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return R(l()().startOf(e).add(t, e), e);
}
function w(e, t, n) {
    return R(l()(e, t).local(), n);
}
function D() {
    return {
        [O.intl.string(O.t.HYiVER)]: () => P('day'),
        [O.intl.string(O.t.cu86KC)]: () => P('day', -1),
        [O.intl.string(O.t['FvBj//'])]: () => P('week'),
        [O.intl.string(O.t['20uWCw'])]: () => P('month'),
        [O.intl.string(O.t['dXC/ho'])]: () => P('year')
    };
}
let L = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    x = '\\d{4}',
    k = '([0-9]{4})-([0-9]{1,2})',
    M = '([^\\d\\s]+)',
    j = RegExp('(?:\\s*('.concat(L, '|').concat(k, '|').concat(x, '|').concat(M, '))'), 'i'),
    U = RegExp('\\s*(true|false)', 'i');
function G(e) {
    return ''.concat(e, ':');
}
function B(e) {
    return RegExp(G(e), 'i');
}
function V(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = y.Xyh.test(n) ? n : r(n === y.ME ? h.default.getCurrentUser() : null != e.getMatch(4) ? h.default.findByTag(e.getMatch(4)) : h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function F(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = D()[i];
    return null != a ? ([n, r] = a()) : A().has(i) ? ([n, r] = w(i, 'MMMM', 'month')) : N().has(i) ? ([n, r] = w(i, 'dddd', 'day')) : C().has(i) ? ([n, r] = w(i, 'YYYY', 'year')) : ([n, r] = w(i, y.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function Z(e) {
    let t = e.getMatch(1);
    t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1));
    let n = _.Z.getGuildId(),
        r = c.ZP.getChannels(n)[c.sH].concat(c.ZP.getChannels(n)[c.Zb]),
        i = c.ZP.getTextChannelNameDisambiguations(n),
        a = o()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .find((e) => {
                var n, r;
                return t === (null != (r = null == (n = i[e.id]) ? void 0 : n.name) ? r : e.name);
            })
            .value();
    return null != a && (e.setData('channel', a), !0);
}
function H(e) {
    let t = {
        [O.intl.string(O.t.ZNR2fn)]: 'link',
        [O.intl.string(O.t['20uQR0'])]: 'embed',
        [O.intl.string(O.t.L4lxyM)]: 'poll',
        [O.intl.string(O.t.nrpA5O)]: 'snapshot',
        [O.intl.string(O.t['AV/v6u'])]: 'file',
        [O.intl.string(O.t.XM9XGB)]: 'video',
        [O.intl.string(O.t.TNLcp6)]: 'image',
        [O.intl.string(O.t.F8Wf0d)]: 'sound',
        [O.intl.string(O.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function Y() {
    return [...Array.from(A()), ...Array.from(N()), ...Array.from(C()), ...Object.keys(D())];
}
function W() {
    return o().sample(Y());
}
function K(e, t, n) {
    return z(e, t, Y()).map((e) =>
        S(I({}, e), {
            group: n,
            key: ''.concat(n, '-').concat(e.text)
        })
    );
}
function z(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function q(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = d.Z.getSearchType(t),
        o = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (a) {
        case y.aib.GUILD:
            n = m.ZP.queryGuildUsers(S(I({}, o), { guildId: t }));
            break;
        case y.aib.CHANNEL:
            n = m.ZP.queryChannelUsers(S(I({}, o), { channelId: t }));
            break;
        case y.aib.DMS:
            n = m.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    let s = h.default.getCurrentUser(),
        l = e.toLowerCase().replace(/^@/, ''),
        c = null != s && e.length > 0 && (O.intl.string(O.t.Qf3ptr).startsWith(l) || y.ME.substr(1).startsWith(l)),
        f = n
            .filter((e) => {
                let { record: t } = e;
                return !u.Z.isBlockedOrIgnored(t.id) && (!c || t.id !== (null == s ? void 0 : s.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: E.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        c &&
            f.unshift({
                text: y.ME,
                user: s
            }),
        f
    );
}
function X() {
    return d.Z.getSearchType() === y.aib.GUILD;
}
function Q() {
    return !p.Z.hidePersonalInformation;
}
let J = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var $ = (function (e) {
    return (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e;
})({});
function ee() {
    let e = [O.intl.string(O.t.ZNR2fn), O.intl.string(O.t['20uQR0']), O.intl.string(O.t.L4lxyM), O.intl.string(O.t['AV/v6u']), O.intl.string(O.t.XM9XGB), O.intl.string(O.t.TNLcp6), O.intl.string(O.t.F8Wf0d), O.intl.string(O.t.PJgX2t), O.intl.string(O.t.nrpA5O)];
    return {
        [y.dCx.FILTER_FROM]: {
            regex: B(O.intl.string(O.t['1TUdFh'])),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t['1TUdFh'])),
            plainText: O.intl.string(O.t['1TUdFh']),
            validator: Q,
            getAutocompletions: q
        },
        [y.dCx.ANSWER_USERNAME_FROM]: {
            follows: [y.dCx.FILTER_FROM],
            regex: J,
            validator: V,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [y.dCx.FILTER_MENTIONS]: {
            regex: B(O.intl.string(O.t.i96lOz)),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t.i96lOz)),
            plainText: O.intl.string(O.t.i96lOz),
            validator: Q,
            getAutocompletions: q
        },
        [y.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [y.dCx.FILTER_MENTIONS],
            regex: J,
            validator: V,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [y.dCx.FILTER_HAS]: {
            regex: B(O.intl.string(O.t.CqCvio)),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t.CqCvio)),
            plainText: O.intl.string(O.t.CqCvio),
            getAutocompletions: (t, n, r) => z(t, r, e)
        },
        [y.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(e.map((e) => g.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [y.dCx.FILTER_HAS],
            validator: H,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [y.dCx.FILTER_FILE_TYPE]: {
            regex: B(O.intl.string(O.t.TMNjFh)),
            key: G(O.intl.string(O.t.TMNjFh)),
            plainText: O.intl.string(O.t.TMNjFh),
            componentType: 'FILTER'
        },
        [y.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [y.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [y.dCx.FILTER_FILE_NAME]: {
            regex: B(O.intl.string(O.t['5xtLRE'])),
            key: G(O.intl.string(O.t['5xtLRE'])),
            plainText: O.intl.string(O.t['5xtLRE']),
            componentType: 'FILTER'
        },
        [y.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [y.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [y.dCx.FILTER_BEFORE]: {
            regex: B(O.intl.string(O.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t['qZ+7BA'])),
            plainText: O.intl.string(O.t['qZ+7BA']),
            getAutocompletions: (e, t, n) => K(e, n, y.dCx.FILTER_BEFORE)
        },
        [y.dCx.FILTER_ON]: {
            regex: B('('.concat(O.intl.string(O.t.tIxkOj), '|').concat(O.intl.string(O.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t.h2NzSU)),
            plainText: O.intl.string(O.t.h2NzSU),
            getAutocompletions: (e, t, n) => K(e, n, y.dCx.FILTER_ON)
        },
        [y.dCx.FILTER_AFTER]: {
            regex: B(O.intl.string(O.t.KSDx7O)),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t.KSDx7O)),
            plainText: O.intl.string(O.t.KSDx7O),
            getAutocompletions: (e, t, n) => K(e, n, y.dCx.FILTER_AFTER)
        },
        [y.dCx.ANSWER_BEFORE]: {
            regex: j,
            follows: [y.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => F(e, 'before')
        },
        [y.dCx.ANSWER_ON]: {
            regex: j,
            follows: [y.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => F(e, 'on')
        },
        [y.dCx.ANSWER_AFTER]: {
            regex: j,
            follows: [y.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => F(e, 'after')
        },
        [y.dCx.FILTER_IN]: {
            regex: B(O.intl.string(O.t.WNpFHR)),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t.WNpFHR)),
            plainText: O.intl.string(O.t.WNpFHR),
            validator: X,
            getAutocompletions(e, t, n) {
                e.startsWith('"') && e.endsWith('"') ? (e = e.substring(1, e.length - 1)) : e.startsWith('"') && (e = e.substring(1)), '#' === e[0] && (e = e.substring(1));
                let r = m.ZP.queryChannels({
                    query: e,
                    type: c.sH,
                    guildId: t,
                    limit: 1 / 0
                })
                    .concat(
                        m.ZP.queryChannels({
                            query: e,
                            type: c.Zb,
                            guildId: t,
                            limit: 1 / 0
                        })
                    )
                    .map((e) => {
                        let { record: t } = e;
                        return t;
                    })
                    .filter((e) => !e.isThread());
                if ('' === e.trim()) {
                    let e = f.Z.getChannelId(t),
                        n = r.find((t) => t.id === e);
                    null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
                }
                let i = c.ZP.getTextChannelNameDisambiguations(t);
                return o()(r)
                    .take(n)
                    .map((e) => {
                        var t, n;
                        return {
                            text: ''.concat(null != (n = null == (t = i[e.id]) ? void 0 : t.name) ? n : e.name),
                            channel: e
                        };
                    })
                    .value();
            }
        },
        [y.dCx.ANSWER_IN]: {
            regex: b.e,
            mutable: !0,
            follows: [y.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: Z,
            queryKey: 'channel_id'
        },
        [y.dCx.FILTER_PINNED]: {
            regex: B(O.intl.string(O.t['0B74eX'])),
            componentType: 'FILTER',
            key: G(O.intl.string(O.t['0B74eX'])),
            plainText: O.intl.string(O.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [y.dCx.ANSWER_PINNED]: {
            regex: U,
            componentType: 'ANSWER',
            follows: [y.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let t = e.getMatch(1);
                return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
            }
        }
    };
}
let et = {};
function en() {
    Object.assign(et, ee());
}
function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(et).length;
    return o()(et)
        .keys()
        .filter((e) => y.TNx.test(e))
        .filter((e) => null != et[e].key)
        .map((e) => ({
            token: e,
            text: et[e].key
        }))
        .filter((t) => {
            let { text: n } = t;
            return i()(e.toLowerCase(), n);
        })
        .take(t)
        .value();
}
function ei(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, '');
    return O.intl.string(O.t.Qf3ptr).startsWith(t) || y.ME.substring(1).startsWith(t);
}
let ea = et;
