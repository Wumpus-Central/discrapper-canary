n.d(t, {
    Pe: () => et,
    Pr: () => W,
    Qe: () => J,
    ZP: () => er,
    nB: () => en
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
    o = n(392711),
    a = n.n(o),
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
    b = n(981631),
    y = n(388032);
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
function O(e) {
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
function S(e, t) {
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
function T() {
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
function A() {
    let e = new Date().getFullYear();
    return new Set(
        a()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function C(e, t) {
    return [e, e.clone().add(1, t)];
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return C(l()().startOf(e).add(t, e), e);
}
function P(e, t, n) {
    return C(l()(e, t).local(), n);
}
function w() {
    return {
        [y.NW.string(y.t.HYiVER)]: () => R('day'),
        [y.NW.string(y.t.cu86KC)]: () => R('day', -1),
        [y.NW.string(y.t['FvBj//'])]: () => R('week'),
        [y.NW.string(y.t['20uWCw'])]: () => R('month'),
        [y.NW.string(y.t['dXC/ho'])]: () => R('year')
    };
}
let D = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    L = '\\d{4}',
    x = '([0-9]{4})-([0-9]{1,2})',
    M = '([^\\d\\s]+)',
    k = RegExp('(?:\\s*('.concat(D, '|').concat(x, '|').concat(L, '|').concat(M, '))'), 'i'),
    j = RegExp('\\s*(true|false)', 'i');
function U(e) {
    return ''.concat(e, ':');
}
function G(e) {
    return RegExp(U(e), 'i');
}
function B(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = b.Xyh.test(n) ? n : r(n === b.ME ? h.default.getCurrentUser() : null != e.getMatch(4) ? h.default.findByTag(e.getMatch(4)) : h.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function V(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        o = w()[i];
    return null != o ? ([n, r] = o()) : T().has(i) ? ([n, r] = P(i, 'MMMM', 'month')) : N().has(i) ? ([n, r] = P(i, 'dddd', 'day')) : A().has(i) ? ([n, r] = P(i, 'YYYY', 'year')) : ([n, r] = P(i, b.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0);
}
function F(e) {
    let t = e.getMatch(1),
        n = _.Z.getGuildId(),
        r = c.ZP.getChannels(n)[c.sH].concat(c.ZP.getChannels(n)[c.Zb]),
        i = c.ZP.getTextChannelNameDisambiguations(n),
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
function Z(e) {
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
function H() {
    return [...Array.from(T()), ...Array.from(N()), ...Array.from(A()), ...Object.keys(w())];
}
function W() {
    return a().sample(H());
}
function Y(e, t, n) {
    return K(e, t, H()).map((e) =>
        S(O({}, e), {
            group: n,
            key: ''.concat(n, '-').concat(e.text)
        })
    );
}
function K(e, t, n) {
    let r = e.toLocaleLowerCase();
    return a()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function z(e, t) {
    let n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = d.Z.getSearchType(t),
        a = {
            query: (e = e.split('#')[0]),
            limit: r,
            request: i
        };
    switch (o) {
        case b.aib.GUILD:
            n = m.ZP.queryGuildUsers(S(O({}, a), { guildId: t }));
            break;
        case b.aib.CHANNEL:
            n = m.ZP.queryChannelUsers(S(O({}, a), { channelId: t }));
            break;
        case b.aib.DMS:
            n = m.ZP.queryUsers(e, r, !0, i, () => !0);
            break;
        default:
            return [];
    }
    let s = h.default.getCurrentUser(),
        l = e.toLowerCase().replace(/^@/, ''),
        c = null != s && e.length > 0 && (y.NW.string(y.t.Qf3ptr).startsWith(l) || b.ME.substr(1).startsWith(l)),
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
                text: b.ME,
                user: s
            }),
        f
    );
}
function q() {
    return d.Z.getSearchType() === b.aib.GUILD;
}
function Q() {
    return !p.Z.hidePersonalInformation;
}
let X = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var J = (function (e) {
    return (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e;
})({});
function $() {
    let e = [y.NW.string(y.t.ZNR2fn), y.NW.string(y.t['20uQR0']), y.NW.string(y.t.L4lxyM), y.NW.string(y.t['AV/v6u']), y.NW.string(y.t.XM9XGB), y.NW.string(y.t.TNLcp6), y.NW.string(y.t.F8Wf0d), y.NW.string(y.t.PJgX2t), y.NW.string(y.t.nrpA5O)];
    return {
        [b.dCx.FILTER_FROM]: {
            regex: G(y.NW.string(y.t['1TUdFh'])),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t['1TUdFh'])),
            plainText: y.NW.string(y.t['1TUdFh']),
            validator: Q,
            getAutocompletions: z
        },
        [b.dCx.ANSWER_USERNAME_FROM]: {
            follows: [b.dCx.FILTER_FROM],
            regex: X,
            validator: B,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [b.dCx.FILTER_MENTIONS]: {
            regex: G(y.NW.string(y.t.i96lOz)),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t.i96lOz)),
            plainText: y.NW.string(y.t.i96lOz),
            validator: Q,
            getAutocompletions: z
        },
        [b.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [b.dCx.FILTER_MENTIONS],
            regex: X,
            validator: B,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [b.dCx.FILTER_HAS]: {
            regex: G(y.NW.string(y.t.CqCvio)),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t.CqCvio)),
            plainText: y.NW.string(y.t.CqCvio),
            getAutocompletions: (t, n, r) => K(t, r, e)
        },
        [b.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(e.map((e) => g.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [b.dCx.FILTER_HAS],
            validator: Z,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [b.dCx.FILTER_FILE_TYPE]: {
            regex: G(y.NW.string(y.t.TMNjFh)),
            key: U(y.NW.string(y.t.TMNjFh)),
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
            regex: G(y.NW.string(y.t['5xtLRE'])),
            key: U(y.NW.string(y.t['5xtLRE'])),
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
            regex: G(y.NW.string(y.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t['qZ+7BA'])),
            plainText: y.NW.string(y.t['qZ+7BA']),
            getAutocompletions: (e, t, n) => Y(e, n, b.dCx.FILTER_BEFORE)
        },
        [b.dCx.FILTER_ON]: {
            regex: G('('.concat(y.NW.string(y.t.tIxkOj), '|').concat(y.NW.string(y.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t.h2NzSU)),
            plainText: y.NW.string(y.t.h2NzSU),
            getAutocompletions: (e, t, n) => Y(e, n, b.dCx.FILTER_ON)
        },
        [b.dCx.FILTER_AFTER]: {
            regex: G(y.NW.string(y.t.KSDx7O)),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t.KSDx7O)),
            plainText: y.NW.string(y.t.KSDx7O),
            getAutocompletions: (e, t, n) => Y(e, n, b.dCx.FILTER_AFTER)
        },
        [b.dCx.ANSWER_BEFORE]: {
            regex: k,
            follows: [b.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'before')
        },
        [b.dCx.ANSWER_ON]: {
            regex: k,
            follows: [b.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'on')
        },
        [b.dCx.ANSWER_AFTER]: {
            regex: k,
            follows: [b.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => V(e, 'after')
        },
        [b.dCx.FILTER_IN]: {
            regex: G(y.NW.string(y.t.WNpFHR)),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t.WNpFHR)),
            plainText: y.NW.string(y.t.WNpFHR),
            validator: q,
            getAutocompletions(e, t, n) {
                '#' === e[0] && (e = e.substring(1));
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
        [b.dCx.ANSWER_IN]: {
            regex: /(?:\s*#?([^ ]+))/i,
            mutable: !0,
            follows: [b.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: F,
            queryKey: 'channel_id'
        },
        [b.dCx.FILTER_PINNED]: {
            regex: G(y.NW.string(y.t['0B74eX'])),
            componentType: 'FILTER',
            key: U(y.NW.string(y.t['0B74eX'])),
            plainText: y.NW.string(y.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [b.dCx.ANSWER_PINNED]: {
            regex: j,
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
let ee = {};
function et() {
    Object.assign(ee, $());
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(ee).length;
    return a()(ee)
        .keys()
        .filter((e) => b.TNx.test(e))
        .filter((e) => null != ee[e].key)
        .map((e) => ({
            token: e,
            text: ee[e].key
        }))
        .filter((t) => {
            let { text: n } = t;
            return i()(e.toLowerCase(), n);
        })
        .take(t)
        .value();
}
let er = ee;
