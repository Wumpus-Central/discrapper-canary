n.d(t, {
    Pe: () => J,
    Pr: () => V,
    Qe: () => q,
    ZP: () => ee,
    nB: () => $
}),
    n(47120),
    n(757143),
    n(733860);
var i = n(658722),
    r = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(913527),
    l = n.n(o),
    u = n(346610),
    c = n(984933),
    d = n(699516),
    f = n(768119),
    _ = n(944486),
    p = n(914010),
    h = n(246946),
    m = n(594174),
    g = n(483360),
    E = n(226951),
    v = n(51144),
    y = n(981631),
    I = n(388032);
function T() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function b() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function S() {
    let e = new Date().getFullYear();
    return new Set(
        s()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function A(e, t) {
    return [e, e.clone().add(1, t)];
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return A(l()().startOf(e).add(t, e), e);
}
function C(e, t, n) {
    return A(l()(e, t).local(), n);
}
function R() {
    return {
        [I.intl.string(I.t.HYiVER)]: () => N('day'),
        [I.intl.string(I.t.cu86KC)]: () => N('day', -1),
        [I.intl.string(I.t['FvBj//'])]: () => N('week'),
        [I.intl.string(I.t['20uWCw'])]: () => N('month'),
        [I.intl.string(I.t['dXC/ho'])]: () => N('year')
    };
}
let O = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    D = '\\d{4}',
    L = '([0-9]{4})-([0-9]{1,2})',
    x = '([^\\d\\s]+)',
    w = RegExp('(?:\\s*('.concat(O, '|').concat(L, '|').concat(D, '|').concat(x, '))'), 'i'),
    P = RegExp('\\s*(true|false)', 'i');
function M(e) {
    return ''.concat(e, ':');
}
function k(e) {
    return RegExp(M(e), 'i');
}
function U(e) {
    let t;
    let n = e.getMatch(1),
        i = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = y.Xyh.test(n) ? n : i(n === y.ME ? m.default.getCurrentUser() : null != e.getMatch(4) ? m.default.findByTag(e.getMatch(4)) : m.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function G(e, t) {
    let n, i;
    let r = e.getFullMatch().trim().toLowerCase(),
        a = R()[r];
    return null != a ? ([n, i] = a()) : T().has(r) ? ([n, i] = C(r, 'MMMM', 'month')) : b().has(r) ? ([n, i] = C(r, 'dddd', 'day')) : S().has(r) ? ([n, i] = C(r, 'YYYY', 'year')) : ([n, i] = C(r, y.b2L, 'day')), !!(n.isValid() && i.isValid()) && ('before' === t ? ((i = n), (n = null)) : 'after' === t && ((n = i), (i = null)), e.setData('start', n), e.setData('end', i), !0);
}
function B(e) {
    let t = e.getMatch(1),
        n = p.Z.getGuildId(),
        i = c.ZP.getChannels(n)[c.sH].concat(c.ZP.getChannels(n)[c.Zb]),
        r = c.ZP.getTextChannelNameDisambiguations(n),
        a = s()
            .chain(i)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .find((e) => {
                var n, i;
                return t === (null !== (i = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== i ? i : e.name);
            })
            .value();
    return null != a && (e.setData('channel', a), !0);
}
function Z(e) {
    let t = {
        [I.intl.string(I.t.ZNR2fn)]: 'link',
        [I.intl.string(I.t['20uQR0'])]: 'embed',
        [I.intl.string(I.t.L4lxyM)]: 'poll',
        [I.intl.string(I.t.nrpA5O)]: 'snapshot',
        [I.intl.string(I.t['AV/v6u'])]: 'file',
        [I.intl.string(I.t.XM9XGB)]: 'video',
        [I.intl.string(I.t.TNLcp6)]: 'image',
        [I.intl.string(I.t.F8Wf0d)]: 'sound',
        [I.intl.string(I.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function F() {
    return [...Array.from(T()), ...Array.from(b()), ...Array.from(S()), ...Object.keys(R())];
}
function V() {
    return s().sample(F());
}
function j(e, t, n) {
    return H(e, t, F()).map((e) => ({
        ...e,
        group: n,
        key: ''.concat(n, '-').concat(e.text)
    }));
}
function H(e, t, n) {
    let i = e.toLocaleLowerCase();
    return s()(n)
        .filter((e) => r()(i, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function Y(e, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = f.Z.getSearchType(t),
        s = {
            query: (e = e.split('#')[0]),
            limit: i,
            request: r
        };
    switch (a) {
        case y.aib.GUILD:
            n = g.ZP.queryGuildUsers({
                ...s,
                guildId: t
            });
            break;
        case y.aib.CHANNEL:
            n = g.ZP.queryChannelUsers({
                ...s,
                channelId: t
            });
            break;
        case y.aib.DMS:
            n = g.ZP.queryUsers(e, i, !0, r, () => !0);
            break;
        default:
            return [];
    }
    let o = m.default.getCurrentUser(),
        l = e.toLowerCase().replace(/^@/, ''),
        u = null != o && e.length > 0 && (I.intl.string(I.t.Qf3ptr).startsWith(l) || y.ME.substr(1).startsWith(l)),
        c = n
            .filter((e) => {
                let { record: t } = e;
                return !d.Z.isBlockedOrIgnored(t.id) && (!u || t.id !== (null == o ? void 0 : o.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: v.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        u &&
            c.unshift({
                text: y.ME,
                user: o
            }),
        c
    );
}
function W() {
    return f.Z.getSearchType() === y.aib.GUILD;
}
function K() {
    return !h.Z.hidePersonalInformation;
}
let z = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var q = (function (e) {
    return (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e;
})({});
function Q() {
    let { canForwardMessages: e } = (0, u.WT)({ location: 'SearchTokens' }, { autoTrackExposure: !1 }),
        t = e ? [I.intl.string(I.t.nrpA5O)] : [],
        n = [I.intl.string(I.t.ZNR2fn), I.intl.string(I.t['20uQR0']), I.intl.string(I.t.L4lxyM), I.intl.string(I.t['AV/v6u']), I.intl.string(I.t.XM9XGB), I.intl.string(I.t.TNLcp6), I.intl.string(I.t.F8Wf0d), I.intl.string(I.t.PJgX2t), ...t];
    return {
        [y.dCx.FILTER_FROM]: {
            regex: k(I.intl.string(I.t['1TUdFh'])),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t['1TUdFh'])),
            plainText: I.intl.string(I.t['1TUdFh']),
            validator: K,
            getAutocompletions: Y
        },
        [y.dCx.ANSWER_USERNAME_FROM]: {
            follows: [y.dCx.FILTER_FROM],
            regex: z,
            validator: U,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [y.dCx.FILTER_MENTIONS]: {
            regex: k(I.intl.string(I.t.i96lOz)),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t.i96lOz)),
            plainText: I.intl.string(I.t.i96lOz),
            validator: K,
            getAutocompletions: Y
        },
        [y.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [y.dCx.FILTER_MENTIONS],
            regex: z,
            validator: U,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [y.dCx.FILTER_HAS]: {
            regex: k(I.intl.string(I.t.CqCvio)),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t.CqCvio)),
            plainText: I.intl.string(I.t.CqCvio),
            getAutocompletions: (e, t, i) => H(e, i, n)
        },
        [y.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(n.map((e) => E.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [y.dCx.FILTER_HAS],
            validator: Z,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [y.dCx.FILTER_FILE_TYPE]: {
            regex: k(I.intl.string(I.t.TMNjFh)),
            key: M(I.intl.string(I.t.TMNjFh)),
            plainText: I.intl.string(I.t.TMNjFh),
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
            regex: k(I.intl.string(I.t['5xtLRE'])),
            key: M(I.intl.string(I.t['5xtLRE'])),
            plainText: I.intl.string(I.t['5xtLRE']),
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
            regex: k(I.intl.string(I.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t['qZ+7BA'])),
            plainText: I.intl.string(I.t['qZ+7BA']),
            getAutocompletions: (e, t, n) => j(e, n, y.dCx.FILTER_BEFORE)
        },
        [y.dCx.FILTER_ON]: {
            regex: k('('.concat(I.intl.string(I.t.tIxkOj), '|').concat(I.intl.string(I.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t.h2NzSU)),
            plainText: I.intl.string(I.t.h2NzSU),
            getAutocompletions: (e, t, n) => j(e, n, y.dCx.FILTER_ON)
        },
        [y.dCx.FILTER_AFTER]: {
            regex: k(I.intl.string(I.t.KSDx7O)),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t.KSDx7O)),
            plainText: I.intl.string(I.t.KSDx7O),
            getAutocompletions: (e, t, n) => j(e, n, y.dCx.FILTER_AFTER)
        },
        [y.dCx.ANSWER_BEFORE]: {
            regex: w,
            follows: [y.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => G(e, 'before')
        },
        [y.dCx.ANSWER_ON]: {
            regex: w,
            follows: [y.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => G(e, 'on')
        },
        [y.dCx.ANSWER_AFTER]: {
            regex: w,
            follows: [y.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => G(e, 'after')
        },
        [y.dCx.FILTER_IN]: {
            regex: k(I.intl.string(I.t.WNpFHR)),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t.WNpFHR)),
            plainText: I.intl.string(I.t.WNpFHR),
            validator: W,
            getAutocompletions(e, t, n) {
                '#' === e[0] && (e = e.substring(1));
                let i = g.ZP.queryChannels({
                    query: e,
                    type: c.sH,
                    guildId: t,
                    limit: 1 / 0
                })
                    .concat(
                        g.ZP.queryChannels({
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
                    let e = _.Z.getChannelId(t),
                        n = i.find((t) => t.id === e);
                    null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
                }
                let r = c.ZP.getTextChannelNameDisambiguations(t);
                return s()(i)
                    .take(n)
                    .map((e) => {
                        var t, n;
                        return {
                            text: ''.concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
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
            validator: B,
            queryKey: 'channel_id'
        },
        [y.dCx.FILTER_PINNED]: {
            regex: k(I.intl.string(I.t['0B74eX'])),
            componentType: 'FILTER',
            key: M(I.intl.string(I.t['0B74eX'])),
            plainText: I.intl.string(I.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [y.dCx.ANSWER_PINNED]: {
            regex: P,
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
let X = {};
function J() {
    Object.assign(X, Q());
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(X).length;
    return s()(X)
        .keys()
        .filter((e) => y.TNx.test(e))
        .filter((e) => null != X[e].key)
        .map((e) => ({
            token: e,
            text: X[e].key
        }))
        .filter((t) => {
            let { text: n } = t;
            return r()(e.toLowerCase(), n);
        })
        .take(t)
        .value();
}
let ee = X;
