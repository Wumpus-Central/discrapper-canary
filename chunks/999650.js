n.d(t, {
    Pe: () => ec,
    Pr: () => Q,
    Qe: () => eo,
    ZP: () => ef,
    co: () => ed,
    nB: () => eu
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
    d = n(778877),
    f = n(592125),
    _ = n(984933),
    p = n(699516),
    h = n(768119),
    m = n(944486),
    g = n(914010),
    E = n(246946),
    b = n(594174),
    y = n(483360),
    O = n(226951),
    v = n(405656),
    I = n(51144),
    T = n(473938),
    S = n(981631),
    A = n(388032);
function N(e, t, n) {
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
function C(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function D() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function L() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function x(e, t) {
    return [e, e.clone().add(1, t)];
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return x(l()().startOf(e).add(t, e), e);
}
function M(e, t, n) {
    return x(l()(e, t).local(), n);
}
function j() {
    return {
        [A.intl.string(A.t.HYiVER)]: () => k('day'),
        [A.intl.string(A.t.cu86KC)]: () => k('day', -1),
        [A.intl.string(A.t['FvBj//'])]: () => k('week'),
        [A.intl.string(A.t['20uWCw'])]: () => k('month'),
        [A.intl.string(A.t['dXC/ho'])]: () => k('year')
    };
}
let U = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    G = '\\d{4}',
    B = '([0-9]{4})-([0-9]{1,2})',
    V = '([^\\d\\s]+)',
    F = RegExp('(?:\\s*('.concat(U, '|').concat(B, '|').concat(G, '|').concat(V, '))'), 'i'),
    Z = RegExp('\\s*(true|false)', 'i');
function H(e) {
    return ''.concat(e, ':');
}
function Y(e) {
    return RegExp(H(e), 'i');
}
function W(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = S.Xyh.test(n) ? n : r(n === S.ME ? b.default.getCurrentUser() : null != e.getMatch(4) ? b.default.findByTag(e.getMatch(4)) : b.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function K(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = j()[i];
    return null != a ? ([n, r] = a()) : w().has(i) ? ([n, r] = M(i, 'MMMM', 'month')) : D().has(i) ? ([n, r] = M(i, 'dddd', 'day')) : L().has(i) ? ([n, r] = M(i, 'YYYY', 'year')) : ([n, r] = M(i, S.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function z(e) {
    let t = e.getMatch(1);
    t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1));
    let n = g.Z.getGuildId(),
        r = h.Z.getSearchType(),
        i = (0, d.a)({ location: 'channelValidator' });
    if (r === S.aib.DMS && i) {
        let n = Object.values(f.Z.getMutablePrivateChannels()).find((e) => {
            let n = (0, u.F6)(e, b.default, p.Z);
            if (t === n) return !0;
            if (e.isDM()) {
                let n = e.getRecipientId(),
                    r = b.default.getUser(n);
                if (null == r) return !1;
                let i = I.ZP.getUserTag(r);
                return t === i;
            }
        });
        if (null != n) return e.setData('channel', n), !0;
    }
    let a = _.ZP.getChannels(n)[_.sH].concat(_.ZP.getChannels(n)[_.Zb]),
        s = _.ZP.getTextChannelNameDisambiguations(n),
        l = o()
            .chain(a)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .find((e) => {
                var n, r;
                return t === (null != (r = null == (n = s[e.id]) ? void 0 : n.name) ? r : e.name);
            })
            .value();
    return null != l && (e.setData('channel', l), !0);
}
function q(e) {
    let t = {
        [A.intl.string(A.t.ZNR2fn)]: 'link',
        [A.intl.string(A.t['20uQR0'])]: 'embed',
        [A.intl.string(A.t.L4lxyM)]: 'poll',
        [A.intl.string(A.t.nrpA5O)]: 'snapshot',
        [A.intl.string(A.t['AV/v6u'])]: 'file',
        [A.intl.string(A.t.XM9XGB)]: 'video',
        [A.intl.string(A.t.TNLcp6)]: 'image',
        [A.intl.string(A.t.F8Wf0d)]: 'sound',
        [A.intl.string(A.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function X() {
    return [...Array.from(w()), ...Array.from(D()), ...Array.from(L()), ...Object.keys(j())];
}
function Q() {
    return o().sample(X());
}
function J(e, t, n) {
    return $(e, t, X()).map((e) =>
        P(C({}, e), {
            group: n,
            key: ''.concat(n, '-').concat(e.text)
        })
    );
}
function $(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function ee(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = h.Z.getSearchType(t),
        o = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (a) {
        case S.aib.GUILD:
            n = y.ZP.queryGuildUsers(P(C({}, o), { guildId: t }));
            break;
        case S.aib.CHANNEL:
            n = y.ZP.queryChannelUsers(P(C({}, o), { channelId: t }));
            break;
        case S.aib.DMS:
            n = y.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    let s = b.default.getCurrentUser(),
        l = e.toLowerCase().replace(/^@/, ''),
        c = null != s && e.length > 0 && (A.intl.string(A.t.Qf3ptr).startsWith(l) || S.ME.substr(1).startsWith(l)),
        u = n
            .filter((e) => {
                let { record: t } = e;
                return !p.Z.isBlockedOrIgnored(t.id) && (!c || t.id !== (null == s ? void 0 : s.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: I.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        c &&
            u.unshift({
                text: S.ME,
                user: s
            }),
        u
    );
}
function et() {
    return !E.Z.hidePersonalInformation;
}
function en(e, t, n) {
    let r = y.ZP.queryGroupDMs({
            query: e,
            limit: n,
            fuzzy: !0,
            boosters: (0, y.Cq)(c.h8.GROUP_DM)
        }),
        i = y.ZP.queryDMChannels({
            query: e,
            limit: n,
            boosters: (0, y.Cq)(c.h8.USER)
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
function er(e, t, n) {
    let r = y.ZP.queryChannels({
        query: e,
        type: _.sH,
        guildId: t,
        limit: 1 / 0
    })
        .concat(
            y.ZP.queryChannels({
                query: e,
                type: _.Zb,
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
        let e = m.Z.getChannelId(t),
            n = r.find((t) => t.id === e);
        null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
    }
    let i = _.ZP.getTextChannelNameDisambiguations(t);
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
function ei(e, t, n) {
    e.startsWith('"') && e.endsWith('"') ? (e = e.substring(1, e.length - 1)) : e.startsWith('"') && (e = e.substring(1)), '#' === e[0] && (e = e.substring(1));
    let r = (0, d.a)({ location: 'getAutocompletions' });
    return h.Z.getSearchType(t) === S.aib.DMS && r ? en(e, t, n) : er(e, t, n);
}
let ea = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var eo = (function (e) {
    return (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e;
})({});
function es() {
    let e = [A.intl.string(A.t.ZNR2fn), A.intl.string(A.t['20uQR0']), A.intl.string(A.t.L4lxyM), A.intl.string(A.t['AV/v6u']), A.intl.string(A.t.XM9XGB), A.intl.string(A.t.TNLcp6), A.intl.string(A.t.F8Wf0d), A.intl.string(A.t.PJgX2t), A.intl.string(A.t.nrpA5O)];
    return {
        [S.dCx.FILTER_FROM]: {
            regex: Y(A.intl.string(A.t['1TUdFh'])),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t['1TUdFh'])),
            plainText: A.intl.string(A.t['1TUdFh']),
            validator: et,
            getAutocompletions: ee
        },
        [S.dCx.ANSWER_USERNAME_FROM]: {
            follows: [S.dCx.FILTER_FROM],
            regex: ea,
            validator: W,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [S.dCx.FILTER_MENTIONS]: {
            regex: Y(A.intl.string(A.t.i96lOz)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.i96lOz)),
            plainText: A.intl.string(A.t.i96lOz),
            validator: et,
            getAutocompletions: ee
        },
        [S.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [S.dCx.FILTER_MENTIONS],
            regex: ea,
            validator: W,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [S.dCx.FILTER_HAS]: {
            regex: Y(A.intl.string(A.t.CqCvio)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.CqCvio)),
            plainText: A.intl.string(A.t.CqCvio),
            getAutocompletions: (t, n, r) => $(t, r, e)
        },
        [S.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(e.map((e) => O.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [S.dCx.FILTER_HAS],
            validator: q,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [S.dCx.FILTER_FILE_TYPE]: {
            regex: Y(A.intl.string(A.t.TMNjFh)),
            key: H(A.intl.string(A.t.TMNjFh)),
            plainText: A.intl.string(A.t.TMNjFh),
            componentType: 'FILTER'
        },
        [S.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [S.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [S.dCx.FILTER_FILE_NAME]: {
            regex: Y(A.intl.string(A.t['5xtLRE'])),
            key: H(A.intl.string(A.t['5xtLRE'])),
            plainText: A.intl.string(A.t['5xtLRE']),
            componentType: 'FILTER'
        },
        [S.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [S.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [S.dCx.FILTER_BEFORE]: {
            regex: Y(A.intl.string(A.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t['qZ+7BA'])),
            plainText: A.intl.string(A.t['qZ+7BA']),
            getAutocompletions: (e, t, n) => J(e, n, S.dCx.FILTER_BEFORE)
        },
        [S.dCx.FILTER_ON]: {
            regex: Y('('.concat(A.intl.string(A.t.tIxkOj), '|').concat(A.intl.string(A.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.h2NzSU)),
            plainText: A.intl.string(A.t.h2NzSU),
            getAutocompletions: (e, t, n) => J(e, n, S.dCx.FILTER_ON)
        },
        [S.dCx.FILTER_AFTER]: {
            regex: Y(A.intl.string(A.t.KSDx7O)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.KSDx7O)),
            plainText: A.intl.string(A.t.KSDx7O),
            getAutocompletions: (e, t, n) => J(e, n, S.dCx.FILTER_AFTER)
        },
        [S.dCx.ANSWER_BEFORE]: {
            regex: F,
            follows: [S.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => K(e, 'before')
        },
        [S.dCx.ANSWER_ON]: {
            regex: F,
            follows: [S.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => K(e, 'on')
        },
        [S.dCx.ANSWER_AFTER]: {
            regex: F,
            follows: [S.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => K(e, 'after')
        },
        [S.dCx.FILTER_IN]: {
            regex: Y(A.intl.string(A.t.WNpFHR)),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t.WNpFHR)),
            plainText: A.intl.string(A.t.WNpFHR),
            validator: () => (0, v.R6)(h.Z.getSearchType()),
            getAutocompletions: (e, t, n) => ei(e, t, n)
        },
        [S.dCx.ANSWER_IN]: {
            regex: T.e,
            mutable: !0,
            follows: [S.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: z,
            queryKey: 'channel_id'
        },
        [S.dCx.FILTER_PINNED]: {
            regex: Y(A.intl.string(A.t['0B74eX'])),
            componentType: 'FILTER',
            key: H(A.intl.string(A.t['0B74eX'])),
            plainText: A.intl.string(A.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [S.dCx.ANSWER_PINNED]: {
            regex: Z,
            componentType: 'ANSWER',
            follows: [S.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let t = e.getMatch(1);
                return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
            }
        }
    };
}
let el = {};
function ec() {
    Object.assign(el, es());
}
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(el).length;
    return o()(el)
        .keys()
        .filter((e) => S.TNx.test(e))
        .filter((e) => null != el[e].key)
        .map((e) => ({
            token: e,
            text: el[e].key
        }))
        .filter((t) => {
            let { text: n } = t;
            return i()(e.toLowerCase(), n);
        })
        .take(t)
        .value();
}
function ed(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, '');
    return A.intl.string(A.t.Qf3ptr).startsWith(t) || S.ME.substring(1).startsWith(t);
}
let ef = el;
