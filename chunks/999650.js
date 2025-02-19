n.d(t, {
    Pe: () => en,
    Pr: () => Y,
    Qe: () => $,
    ZP: () => ei,
    nB: () => er
}),
    n(47120),
    n(474991),
    n(398202),
    n(301563),
    n(566702),
    n(757143),
    n(733860);
var r = n(658722),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(913527),
    l = n.n(s),
    c = n(346610),
    u = n(984933),
    d = n(699516),
    f = n(768119),
    p = n(944486),
    _ = n(914010),
    h = n(246946),
    m = n(594174),
    g = n(483360),
    E = n(226951),
    v = n(51144),
    b = n(981631),
    y = n(388032);
function O(e, t, n) {
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
function S(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function A() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function C() {
    let e = new Date().getFullYear();
    return new Set(
        a()
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
        [y.NW.string(y.t.HYiVER)]: () => P('day'),
        [y.NW.string(y.t.cu86KC)]: () => P('day', -1),
        [y.NW.string(y.t['FvBj//'])]: () => P('week'),
        [y.NW.string(y.t['20uWCw'])]: () => P('month'),
        [y.NW.string(y.t['dXC/ho'])]: () => P('year')
    };
}
let x = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    L = '\\d{4}',
    M = '([0-9]{4})-([0-9]{1,2})',
    k = '([^\\d\\s]+)',
    j = RegExp('(?:\\s*('.concat(x, '|').concat(M, '|').concat(L, '|').concat(k, '))'), 'i'),
    U = RegExp('\\s*(true|false)', 'i');
function G(e) {
    return ''.concat(e, ':');
}
function B(e) {
    return RegExp(G(e), 'i');
}
function Z(e) {
    let t;
    let n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = b.Xyh.test(n) ? n : r(n === b.ME ? m.default.getCurrentUser() : null != e.getMatch(4) ? m.default.findByTag(e.getMatch(4)) : m.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function F(e, t) {
    let n, r;
    let i = e.getFullMatch().trim().toLowerCase(),
        o = D()[i];
    return null != o ? ([n, r] = o()) : N().has(i) ? ([n, r] = w(i, 'MMMM', 'month')) : A().has(i) ? ([n, r] = w(i, 'dddd', 'day')) : C().has(i) ? ([n, r] = w(i, 'YYYY', 'year')) : ([n, r] = w(i, b.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function V(e) {
    let t = e.getMatch(1),
        n = _.Z.getGuildId(),
        r = u.ZP.getChannels(n)[u.sH].concat(u.ZP.getChannels(n)[u.Zb]),
        i = u.ZP.getTextChannelNameDisambiguations(n),
        o = a()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .find((e) => {
                var n, r;
                return t === (null !== (r = null === (n = i[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : e.name);
            })
            .value();
    return null != o && (e.setData('channel', o), !0);
}
function H(e) {
    let t = {
        [y.NW.string(y.t.ZNR2fn)]: 'link',
        [y.NW.string(y.t['20uQR0'])]: 'embed',
        [y.NW.string(y.t.L4lxyM)]: 'poll',
        [y.NW.string(y.t.nrpA5O)]: 'snapshot',
        [y.NW.string(y.t['AV/v6u'])]: 'file',
        [y.NW.string(y.t.XM9XGB)]: 'video',
        [y.NW.string(y.t.TNLcp6)]: 'image',
        [y.NW.string(y.t.F8Wf0d)]: 'sound',
        [y.NW.string(y.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function W() {
    return [...Array.from(N()), ...Array.from(A()), ...Array.from(C()), ...Object.keys(D())];
}
function Y() {
    return a().sample(W());
}
function K(e, t, n) {
    return z(e, t, W()).map((e) =>
        T(S({}, e), {
            group: n,
            key: ''.concat(n, '-').concat(e.text)
        })
    );
}
function z(e, t, n) {
    let r = e.toLocaleLowerCase();
    return a()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function q(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = f.Z.getSearchType(t),
        a = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (o) {
        case b.aib.GUILD:
            n = g.ZP.queryGuildUsers(T(S({}, a), { guildId: t }));
            break;
        case b.aib.CHANNEL:
            n = g.ZP.queryChannelUsers(T(S({}, a), { channelId: t }));
            break;
        case b.aib.DMS:
            n = g.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    let s = m.default.getCurrentUser(),
        l = e.toLowerCase().replace(/^@/, ''),
        c = null != s && e.length > 0 && (y.NW.string(y.t.Qf3ptr).startsWith(l) || b.ME.substr(1).startsWith(l)),
        u = n
            .filter((e) => {
                let { record: t } = e;
                return !d.Z.isBlockedOrIgnored(t.id) && (!c || t.id !== (null == s ? void 0 : s.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: v.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        c &&
            u.unshift({
                text: b.ME,
                user: s
            }),
        u
    );
}
function Q() {
    return f.Z.getSearchType() === b.aib.GUILD;
}
function X() {
    return !h.Z.hidePersonalInformation;
}
let J = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var $ = (function (e) {
    return (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e;
})({});
function ee() {
    let { canForwardMessages: e } = (0, c.WT)({ location: 'SearchTokens' }, { autoTrackExposure: !1 }),
        t = e ? [y.NW.string(y.t.nrpA5O)] : [],
        n = [y.NW.string(y.t.ZNR2fn), y.NW.string(y.t['20uQR0']), y.NW.string(y.t.L4lxyM), y.NW.string(y.t['AV/v6u']), y.NW.string(y.t.XM9XGB), y.NW.string(y.t.TNLcp6), y.NW.string(y.t.F8Wf0d), y.NW.string(y.t.PJgX2t), ...t];
    return {
        [b.dCx.FILTER_FROM]: {
            regex: B(y.NW.string(y.t['1TUdFh'])),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t['1TUdFh'])),
            plainText: y.NW.string(y.t['1TUdFh']),
            validator: X,
            getAutocompletions: q
        },
        [b.dCx.ANSWER_USERNAME_FROM]: {
            follows: [b.dCx.FILTER_FROM],
            regex: J,
            validator: Z,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [b.dCx.FILTER_MENTIONS]: {
            regex: B(y.NW.string(y.t.i96lOz)),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t.i96lOz)),
            plainText: y.NW.string(y.t.i96lOz),
            validator: X,
            getAutocompletions: q
        },
        [b.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [b.dCx.FILTER_MENTIONS],
            regex: J,
            validator: Z,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [b.dCx.FILTER_HAS]: {
            regex: B(y.NW.string(y.t.CqCvio)),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t.CqCvio)),
            plainText: y.NW.string(y.t.CqCvio),
            getAutocompletions: (e, t, r) => z(e, r, n)
        },
        [b.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(n.map((e) => E.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [b.dCx.FILTER_HAS],
            validator: H,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [b.dCx.FILTER_FILE_TYPE]: {
            regex: B(y.NW.string(y.t.TMNjFh)),
            key: G(y.NW.string(y.t.TMNjFh)),
            plainText: y.NW.string(y.t.TMNjFh),
            componentType: 'FILTER'
        },
        [b.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [b.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [b.dCx.FILTER_FILE_NAME]: {
            regex: B(y.NW.string(y.t['5xtLRE'])),
            key: G(y.NW.string(y.t['5xtLRE'])),
            plainText: y.NW.string(y.t['5xtLRE']),
            componentType: 'FILTER'
        },
        [b.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [b.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [b.dCx.FILTER_BEFORE]: {
            regex: B(y.NW.string(y.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t['qZ+7BA'])),
            plainText: y.NW.string(y.t['qZ+7BA']),
            getAutocompletions: (e, t, n) => K(e, n, b.dCx.FILTER_BEFORE)
        },
        [b.dCx.FILTER_ON]: {
            regex: B('('.concat(y.NW.string(y.t.tIxkOj), '|').concat(y.NW.string(y.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t.h2NzSU)),
            plainText: y.NW.string(y.t.h2NzSU),
            getAutocompletions: (e, t, n) => K(e, n, b.dCx.FILTER_ON)
        },
        [b.dCx.FILTER_AFTER]: {
            regex: B(y.NW.string(y.t.KSDx7O)),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t.KSDx7O)),
            plainText: y.NW.string(y.t.KSDx7O),
            getAutocompletions: (e, t, n) => K(e, n, b.dCx.FILTER_AFTER)
        },
        [b.dCx.ANSWER_BEFORE]: {
            regex: j,
            follows: [b.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => F(e, 'before')
        },
        [b.dCx.ANSWER_ON]: {
            regex: j,
            follows: [b.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => F(e, 'on')
        },
        [b.dCx.ANSWER_AFTER]: {
            regex: j,
            follows: [b.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => F(e, 'after')
        },
        [b.dCx.FILTER_IN]: {
            regex: B(y.NW.string(y.t.WNpFHR)),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t.WNpFHR)),
            plainText: y.NW.string(y.t.WNpFHR),
            validator: Q,
            getAutocompletions(e, t, n) {
                '#' === e[0] && (e = e.substring(1));
                let r = g.ZP.queryChannels({
                    query: e,
                    type: u.sH,
                    guildId: t,
                    limit: 1 / 0
                })
                    .concat(
                        g.ZP.queryChannels({
                            query: e,
                            type: u.Zb,
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
                    let e = p.Z.getChannelId(t),
                        n = r.find((t) => t.id === e);
                    null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
                }
                let i = u.ZP.getTextChannelNameDisambiguations(t);
                return a()(r)
                    .take(n)
                    .map((e) => {
                        var t, n;
                        return {
                            text: ''.concat(null !== (n = null === (t = i[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                            channel: e
                        };
                    })
                    .value();
            }
        },
        [b.dCx.ANSWER_IN]: {
            regex: /(?:\s*#?([^ ]+))/i,
            mutable: !0,
            follows: [b.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: V,
            queryKey: 'channel_id'
        },
        [b.dCx.FILTER_PINNED]: {
            regex: B(y.NW.string(y.t['0B74eX'])),
            componentType: 'FILTER',
            key: G(y.NW.string(y.t['0B74eX'])),
            plainText: y.NW.string(y.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [b.dCx.ANSWER_PINNED]: {
            regex: U,
            componentType: 'ANSWER',
            follows: [b.dCx.FILTER_PINNED],
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
    return a()(et)
        .keys()
        .filter((e) => b.TNx.test(e))
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
let ei = et;
