n.d(t, {
    Pe: () => ef,
    Pr: () => ee,
    Qe: () => ec,
    ZP: () => eh,
    co: () => ep,
    nB: () => e_
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282),
    n(781311),
    n(704826),
    n(290780),
    n(642613);
var r = n(658722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(212819),
    u = n(933557),
    d = n(861262),
    f = n(778877),
    _ = n(592125),
    p = n(984933),
    h = n(699516),
    m = n(768119),
    g = n(944486),
    E = n(914010),
    b = n(246946),
    y = n(594174),
    O = n(483360),
    v = n(226951),
    I = n(405656),
    T = n(51144),
    S = n(473938),
    A = n(981631),
    N = n(388032);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function L() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function x() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function k(e, t) {
    return [e, e.clone().add(1, t)];
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return k(l()().startOf(e).add(t, e), e);
}
function j(e, t, n) {
    return k(l()(e, t).local(), n);
}
function U() {
    return {
        [N.intl.string(N.t.HYiVER)]: () => M('day'),
        [N.intl.string(N.t.cu86KC)]: () => M('day', -1),
        [N.intl.string(N.t['FvBj//'])]: () => M('week'),
        [N.intl.string(N.t['20uWCw'])]: () => M('month'),
        [N.intl.string(N.t['dXC/ho'])]: () => M('year')
    };
}
let G = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    B = '\\d{4}',
    V = '([0-9]{4})-([0-9]{1,2})',
    F = '([^\\d\\s]+)',
    Z = RegExp('(?:\\s*('.concat(G, '|').concat(V, '|').concat(B, '|').concat(F, '))'), 'i'),
    H = RegExp('\\s*(true|false)', 'i');
function Y(e) {
    return ''.concat(e, ':');
}
function W(e) {
    return RegExp(Y(e), 'i');
}
function K(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = A.Xyh.test(n) ? n : r(n === A.ME ? y.default.getCurrentUser() : null != e.getMatch(4) ? y.default.findByTag(e.getMatch(4)) : y.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function z(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = U()[i];
    return null != a ? ([n, r] = a()) : D().has(i) ? ([n, r] = j(i, 'MMMM', 'month')) : L().has(i) ? ([n, r] = j(i, 'dddd', 'day')) : x().has(i) ? ([n, r] = j(i, 'YYYY', 'year')) : ([n, r] = j(i, A.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function q(e, t, n) {
    let r = p.ZP.getChannels(n)[p.sH].concat(p.ZP.getChannels(n)[p.Zb]),
        i = p.ZP.getTextChannelNameDisambiguations(n),
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
function X(e, t) {
    let n = Object.values(_.Z.getMutablePrivateChannels()).find((e) => {
        if (t === (0, u.F6)(e, y.default, h.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = y.default.getUser(n);
            return null != r && t === T.ZP.getUserTag(r);
        }
    });
    return null != n && (e.setData('channel', n), !0);
}
function Q(e) {
    let t = e.getMatch(1);
    t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1));
    let n = E.Z.getGuildId(),
        r = m.Z.getCurrentSearchId(),
        i = (0, d.g)(r);
    if (i === A.aib.GUILD) return q(e, t, n);
    let a = (0, f.a)({ location: 'channelValidator' });
    return i === A.aib.DMS && !!a && X(e, t);
}
function J(e) {
    let t = {
        [N.intl.string(N.t.ZNR2fn)]: 'link',
        [N.intl.string(N.t['20uQR0'])]: 'embed',
        [N.intl.string(N.t.L4lxyM)]: 'poll',
        [N.intl.string(N.t.nrpA5O)]: 'snapshot',
        [N.intl.string(N.t['AV/v6u'])]: 'file',
        [N.intl.string(N.t.XM9XGB)]: 'video',
        [N.intl.string(N.t.TNLcp6)]: 'image',
        [N.intl.string(N.t.F8Wf0d)]: 'sound',
        [N.intl.string(N.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function $() {
    return [...Array.from(D()), ...Array.from(L()), ...Array.from(x()), ...Object.keys(U())];
}
function ee() {
    return o().sample($());
}
function et(e, t, n) {
    return en(e, t, $()).map((e) =>
        w(R({}, e), {
            group: n,
            key: ''.concat(n, '-').concat(e.text)
        })
    );
}
function en(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function er(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = (0, d.g)(t),
        o = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (a) {
        case A.aib.GUILD:
            n = O.ZP.queryGuildUsers(w(R({}, o), { guildId: t }));
            break;
        case A.aib.CHANNEL:
            n = O.ZP.queryChannelUsers(w(R({}, o), { channelId: t }));
            break;
        case A.aib.DMS:
            n = O.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    let s = y.default.getCurrentUser(),
        l = e.toLowerCase().replace(/^@/, ''),
        c = null != s && e.length > 0 && (N.intl.string(N.t.Qf3ptr).startsWith(l) || A.ME.substr(1).startsWith(l)),
        u = n
            .filter((e) => {
                let { record: t } = e;
                return !h.Z.isBlockedOrIgnored(t.id) && (!c || t.id !== (null == s ? void 0 : s.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: T.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        c &&
            u.unshift({
                text: A.ME,
                user: s
            }),
        u
    );
}
function ei() {
    return !b.Z.hidePersonalInformation;
}
function ea(e, t, n) {
    let r = O.ZP.queryGroupDMs({
            query: e,
            limit: n,
            fuzzy: !0,
            boosters: (0, O.Cq)(c.h8.GROUP_DM)
        }),
        i = O.ZP.queryDMChannels({
            query: e,
            limit: n,
            boosters: (0, O.Cq)(c.h8.USER)
        });
    return o()(r.concat(i))
        .sort(c.qU)
        .map((e) => {
            let { record: t, comparator: n } = e;
            return {
                text: n,
                channel: t
            };
        })
        .take(n)
        .value();
}
function eo(e, t, n) {
    let r = O.ZP.queryChannels({
        query: e,
        type: p.sH,
        guildId: t,
        limit: 1 / 0
    })
        .concat(
            O.ZP.queryChannels({
                query: e,
                type: p.Zb,
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
        let e = g.Z.getChannelId(t),
            n = r.find((t) => t.id === e);
        null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
    }
    let i = p.ZP.getTextChannelNameDisambiguations(t);
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
function es(e, t, n) {
    e.startsWith('"') && e.endsWith('"') ? (e = e.substring(1, e.length - 1)) : e.startsWith('"') && (e = e.substring(1)), '#' === e[0] && (e = e.substring(1));
    let r = (0, d.g)(t);
    if (r === A.aib.GUILD) return eo(e, t, n);
    let i = (0, f.a)({ location: 'getInFilterAutocompletions' });
    return r === A.aib.DMS && i ? ea(e, t, n) : [];
}
let el = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ec = (function (e) {
    return (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e;
})({});
function eu() {
    let e = [N.intl.string(N.t.ZNR2fn), N.intl.string(N.t['20uQR0']), N.intl.string(N.t.L4lxyM), N.intl.string(N.t['AV/v6u']), N.intl.string(N.t.XM9XGB), N.intl.string(N.t.TNLcp6), N.intl.string(N.t.F8Wf0d), N.intl.string(N.t.PJgX2t), N.intl.string(N.t.nrpA5O)];
    return {
        [A.dCx.FILTER_FROM]: {
            regex: W(N.intl.string(N.t['1TUdFh'])),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t['1TUdFh'])),
            plainText: N.intl.string(N.t['1TUdFh']),
            validator: ei,
            getAutocompletions: er
        },
        [A.dCx.ANSWER_USERNAME_FROM]: {
            follows: [A.dCx.FILTER_FROM],
            regex: el,
            validator: K,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [A.dCx.FILTER_MENTIONS]: {
            regex: W(N.intl.string(N.t.i96lOz)),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t.i96lOz)),
            plainText: N.intl.string(N.t.i96lOz),
            validator: ei,
            getAutocompletions: er
        },
        [A.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [A.dCx.FILTER_MENTIONS],
            regex: el,
            validator: K,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [A.dCx.FILTER_HAS]: {
            regex: W(N.intl.string(N.t.CqCvio)),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t.CqCvio)),
            plainText: N.intl.string(N.t.CqCvio),
            getAutocompletions: (t, n, r) => en(t, r, e)
        },
        [A.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(e.map((e) => v.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [A.dCx.FILTER_HAS],
            validator: J,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [A.dCx.FILTER_FILE_TYPE]: {
            regex: W(N.intl.string(N.t.TMNjFh)),
            key: Y(N.intl.string(N.t.TMNjFh)),
            plainText: N.intl.string(N.t.TMNjFh),
            componentType: 'FILTER'
        },
        [A.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [A.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [A.dCx.FILTER_FILE_NAME]: {
            regex: W(N.intl.string(N.t['5xtLRE'])),
            key: Y(N.intl.string(N.t['5xtLRE'])),
            plainText: N.intl.string(N.t['5xtLRE']),
            componentType: 'FILTER'
        },
        [A.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [A.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [A.dCx.FILTER_BEFORE]: {
            regex: W(N.intl.string(N.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t['qZ+7BA'])),
            plainText: N.intl.string(N.t['qZ+7BA']),
            getAutocompletions: (e, t, n) => et(e, n, A.dCx.FILTER_BEFORE)
        },
        [A.dCx.FILTER_ON]: {
            regex: W('('.concat(N.intl.string(N.t.tIxkOj), '|').concat(N.intl.string(N.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t.h2NzSU)),
            plainText: N.intl.string(N.t.h2NzSU),
            getAutocompletions: (e, t, n) => et(e, n, A.dCx.FILTER_ON)
        },
        [A.dCx.FILTER_AFTER]: {
            regex: W(N.intl.string(N.t.KSDx7O)),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t.KSDx7O)),
            plainText: N.intl.string(N.t.KSDx7O),
            getAutocompletions: (e, t, n) => et(e, n, A.dCx.FILTER_AFTER)
        },
        [A.dCx.ANSWER_BEFORE]: {
            regex: Z,
            follows: [A.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => z(e, 'before')
        },
        [A.dCx.ANSWER_ON]: {
            regex: Z,
            follows: [A.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => z(e, 'on')
        },
        [A.dCx.ANSWER_AFTER]: {
            regex: Z,
            follows: [A.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => z(e, 'after')
        },
        [A.dCx.FILTER_IN]: {
            regex: W(N.intl.string(N.t.WNpFHR)),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t.WNpFHR)),
            plainText: N.intl.string(N.t.WNpFHR),
            validator: () => {
                let e = m.Z.getCurrentSearchId(),
                    t = (0, d.g)(e);
                return (0, I.R6)(t);
            },
            getAutocompletions: (e, t, n) => es(e, t, n)
        },
        [A.dCx.ANSWER_IN]: {
            regex: S.e,
            mutable: !0,
            follows: [A.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: Q,
            queryKey: 'channel_id'
        },
        [A.dCx.FILTER_PINNED]: {
            regex: W(N.intl.string(N.t['0B74eX'])),
            componentType: 'FILTER',
            key: Y(N.intl.string(N.t['0B74eX'])),
            plainText: N.intl.string(N.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [A.dCx.ANSWER_PINNED]: {
            regex: H,
            componentType: 'ANSWER',
            follows: [A.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let t = e.getMatch(1);
                return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
            }
        }
    };
}
let ed = {};
function ef() {
    Object.assign(ed, eu());
}
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(ed).length;
    return o()(ed)
        .keys()
        .filter((e) => A.TNx.test(e))
        .filter((e) => null != ed[e].key)
        .map((e) => ({
            token: e,
            text: ed[e].key
        }))
        .filter((t) => {
            let { text: n } = t;
            return i()(e.toLowerCase(), n);
        })
        .take(t)
        .value();
}
function ep(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, '');
    return N.intl.string(N.t.Qf3ptr).startsWith(t) || A.ME.substring(1).startsWith(t);
}
let eh = ed;
