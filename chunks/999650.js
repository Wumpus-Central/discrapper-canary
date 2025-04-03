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
    _ = n(944486),
    p = n(914010),
    h = n(246946),
    m = n(594174),
    g = n(483360),
    E = n(226951),
    b = n(51144),
    y = n(981631),
    v = n(388032);
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
            : S(Object(t)).forEach(function (n) {
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
        [v.NW.string(v.t.HYiVER)]: () => P('day'),
        [v.NW.string(v.t.cu86KC)]: () => P('day', -1),
        [v.NW.string(v.t['FvBj//'])]: () => P('week'),
        [v.NW.string(v.t['20uWCw'])]: () => P('month'),
        [v.NW.string(v.t['dXC/ho'])]: () => P('year')
    };
}
let L = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    x = '\\d{4}',
    M = '([0-9]{4})-([0-9]{1,2})',
    k = '([^\\d\\s]+)',
    j = RegExp('(?:\\s*('.concat(L, '|').concat(M, '|').concat(x, '|').concat(k, '))'), 'i'),
    U = RegExp('\\s*(true|false)', 'i');
function G(e) {
    return ''.concat(e, ':');
}
function B(e) {
    return RegExp(G(e), 'i');
}
function F(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = y.Xyh.test(n) ? n : r(n === y.ME ? m.default.getCurrentUser() : null != e.getMatch(4) ? m.default.findByTag(e.getMatch(4)) : m.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function V(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        o = D()[i];
    return null != o ? ([n, r] = o()) : N().has(i) ? ([n, r] = w(i, 'MMMM', 'month')) : A().has(i) ? ([n, r] = w(i, 'dddd', 'day')) : C().has(i) ? ([n, r] = w(i, 'YYYY', 'year')) : ([n, r] = w(i, y.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function Z(e) {
    let t = e.getMatch(1),
        n = p.Z.getGuildId(),
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
                return t === (null != (r = null == (n = i[e.id]) ? void 0 : n.name) ? r : e.name);
            })
            .value();
    return null != o && (e.setData('channel', o), !0);
}
function H(e) {
    let t = {
        [v.NW.string(v.t.ZNR2fn)]: 'link',
        [v.NW.string(v.t['20uQR0'])]: 'embed',
        [v.NW.string(v.t.L4lxyM)]: 'poll',
        [v.NW.string(v.t.nrpA5O)]: 'snapshot',
        [v.NW.string(v.t['AV/v6u'])]: 'file',
        [v.NW.string(v.t.XM9XGB)]: 'video',
        [v.NW.string(v.t.TNLcp6)]: 'image',
        [v.NW.string(v.t.F8Wf0d)]: 'sound',
        [v.NW.string(v.t.PJgX2t)]: 'sticker'
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
        T(I({}, e), {
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
        case y.aib.GUILD:
            n = g.ZP.queryGuildUsers(T(I({}, a), { guildId: t }));
            break;
        case y.aib.CHANNEL:
            n = g.ZP.queryChannelUsers(T(I({}, a), { channelId: t }));
            break;
        case y.aib.DMS:
            n = g.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    let s = m.default.getCurrentUser(),
        l = e.toLowerCase().replace(/^@/, ''),
        c = null != s && e.length > 0 && (v.NW.string(v.t.Qf3ptr).startsWith(l) || y.ME.substr(1).startsWith(l)),
        u = n
            .filter((e) => {
                let { record: t } = e;
                return !d.Z.isBlockedOrIgnored(t.id) && (!c || t.id !== (null == s ? void 0 : s.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: b.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        c &&
            u.unshift({
                text: y.ME,
                user: s
            }),
        u
    );
}
function Q() {
    return f.Z.getSearchType() === y.aib.GUILD;
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
        t = e ? [v.NW.string(v.t.nrpA5O)] : [],
        n = [v.NW.string(v.t.ZNR2fn), v.NW.string(v.t['20uQR0']), v.NW.string(v.t.L4lxyM), v.NW.string(v.t['AV/v6u']), v.NW.string(v.t.XM9XGB), v.NW.string(v.t.TNLcp6), v.NW.string(v.t.F8Wf0d), v.NW.string(v.t.PJgX2t), ...t];
    return {
        [y.dCx.FILTER_FROM]: {
            regex: B(v.NW.string(v.t['1TUdFh'])),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t['1TUdFh'])),
            plainText: v.NW.string(v.t['1TUdFh']),
            validator: X,
            getAutocompletions: q
        },
        [y.dCx.ANSWER_USERNAME_FROM]: {
            follows: [y.dCx.FILTER_FROM],
            regex: J,
            validator: F,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [y.dCx.FILTER_MENTIONS]: {
            regex: B(v.NW.string(v.t.i96lOz)),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t.i96lOz)),
            plainText: v.NW.string(v.t.i96lOz),
            validator: X,
            getAutocompletions: q
        },
        [y.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [y.dCx.FILTER_MENTIONS],
            regex: J,
            validator: F,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [y.dCx.FILTER_HAS]: {
            regex: B(v.NW.string(v.t.CqCvio)),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t.CqCvio)),
            plainText: v.NW.string(v.t.CqCvio),
            getAutocompletions: (e, t, r) => z(e, r, n)
        },
        [y.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(n.map((e) => E.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [y.dCx.FILTER_HAS],
            validator: H,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [y.dCx.FILTER_FILE_TYPE]: {
            regex: B(v.NW.string(v.t.TMNjFh)),
            key: G(v.NW.string(v.t.TMNjFh)),
            plainText: v.NW.string(v.t.TMNjFh),
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
            regex: B(v.NW.string(v.t['5xtLRE'])),
            key: G(v.NW.string(v.t['5xtLRE'])),
            plainText: v.NW.string(v.t['5xtLRE']),
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
            regex: B(v.NW.string(v.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t['qZ+7BA'])),
            plainText: v.NW.string(v.t['qZ+7BA']),
            getAutocompletions: (e, t, n) => K(e, n, y.dCx.FILTER_BEFORE)
        },
        [y.dCx.FILTER_ON]: {
            regex: B('('.concat(v.NW.string(v.t.tIxkOj), '|').concat(v.NW.string(v.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t.h2NzSU)),
            plainText: v.NW.string(v.t.h2NzSU),
            getAutocompletions: (e, t, n) => K(e, n, y.dCx.FILTER_ON)
        },
        [y.dCx.FILTER_AFTER]: {
            regex: B(v.NW.string(v.t.KSDx7O)),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t.KSDx7O)),
            plainText: v.NW.string(v.t.KSDx7O),
            getAutocompletions: (e, t, n) => K(e, n, y.dCx.FILTER_AFTER)
        },
        [y.dCx.ANSWER_BEFORE]: {
            regex: j,
            follows: [y.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'before')
        },
        [y.dCx.ANSWER_ON]: {
            regex: j,
            follows: [y.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'on')
        },
        [y.dCx.ANSWER_AFTER]: {
            regex: j,
            follows: [y.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'after')
        },
        [y.dCx.FILTER_IN]: {
            regex: B(v.NW.string(v.t.WNpFHR)),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t.WNpFHR)),
            plainText: v.NW.string(v.t.WNpFHR),
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
                    let e = _.Z.getChannelId(t),
                        n = r.find((t) => t.id === e);
                    null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
                }
                let i = u.ZP.getTextChannelNameDisambiguations(t);
                return a()(r)
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
            regex: /(?:\s*#?([^ ]+))/i,
            mutable: !0,
            follows: [y.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: Z,
            queryKey: 'channel_id'
        },
        [y.dCx.FILTER_PINNED]: {
            regex: B(v.NW.string(v.t['0B74eX'])),
            componentType: 'FILTER',
            key: G(v.NW.string(v.t['0B74eX'])),
            plainText: v.NW.string(v.t['0B74eX']),
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
    return a()(et)
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
let ei = et;
