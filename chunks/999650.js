(n.d(t, {
    Pr: () => et,
    Qe: () => ed,
    WK: () => ep,
    ZP: () => eE,
    _m: () => eh,
    co: () => eg,
    nB: () => em
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282),
    n(781311),
    n(804061),
    n(704826),
    n(539854),
    n(290780),
    n(642613));
var r = n(658722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(212819),
    u = n(933557),
    d = n(861262),
    f = n(85034),
    _ = n(778877),
    p = n(592125),
    h = n(984933),
    m = n(699516),
    g = n(768119),
    E = n(944486),
    b = n(914010),
    y = n(246946),
    O = n(594174),
    v = n(483360),
    I = n(226951),
    T = n(405656),
    S = n(51144),
    A = n(473938),
    N = n(981631),
    C = n(388032);
function R(e, t, n) {
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
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            }));
    }
    return e;
}
function w(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function x() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function M() {
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
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return k(l()().startOf(e).add(t, e), e);
}
function U(e, t, n) {
    return k(l()(e, t).local(), n);
}
function G() {
    return {
        [C.intl.string(C.t.HYiVER)]: () => j('day'),
        [C.intl.string(C.t.cu86KC)]: () => j('day', -1),
        [C.intl.string(C.t['FvBj//'])]: () => j('week'),
        [C.intl.string(C.t['20uWCw'])]: () => j('month'),
        [C.intl.string(C.t['dXC/ho'])]: () => j('year')
    };
}
let B = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    V = '\\d{4}',
    F = '([0-9]{4})-([0-9]{1,2})',
    Z = '([^\\d\\s]+)',
    H = RegExp('(?:\\s*('.concat(B, '|').concat(F, '|').concat(V, '|').concat(Z, '))'), 'i'),
    Y = RegExp('\\s*(true|false)', 'i');
function W(e) {
    return ''.concat(e, ':');
}
function K(e) {
    return RegExp(W(e), 'i');
}
function z(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (t = N.Xyh.test(n) ? n : r(n === N.ME ? O.default.getCurrentUser() : null != e.getMatch(4) ? O.default.findByTag(e.getMatch(4)) : O.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', t), !0);
}
function q(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = G()[i];
    return (null != a ? ([n, r] = a()) : L().has(i) ? ([n, r] = U(i, 'MMMM', 'month')) : x().has(i) ? ([n, r] = U(i, 'dddd', 'day')) : M().has(i) ? ([n, r] = U(i, 'YYYY', 'year')) : ([n, r] = U(i, N.b2L, 'day')), !!(n.isValid() && r.isValid()) && ('before' === t ? ((r = n), (n = null)) : 'after' === t && ((n = r), (r = null)), e.setData('start', n), e.setData('end', r), !0));
}
function X(e, t, n) {
    let r = h.ZP.getChannels(n)[h.sH].concat(h.ZP.getChannels(n)[h.Zb]),
        i = h.ZP.getTextChannelNameDisambiguations(n),
        a = f.Z.getCurrentConfig({ location: 'guildChannelValidator' }).enabled,
        s = o()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(a && null != n ? p.Z.getAllThreadsForGuild(n) : [])
            .filter((e) => {
                var n, r;
                return t === (null != (r = null == (n = i[e.id]) ? void 0 : n.name) ? r : e.name);
            })
            .value();
    return (null == s ? void 0 : s.length) > 0 && (e.setData('channels', s), !0);
}
function Q(e, t) {
    let n = Object.values(p.Z.getMutablePrivateChannels()).filter((e) => {
        if (t === (0, u.F6)(e, O.default, m.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = O.default.getUser(n);
            return null != r && t === S.ZP.getUserTag(r);
        }
    });
    return (null == n ? void 0 : n.length) > 0 && (e.setData('channels', n), !0);
}
function J(e) {
    let t = e.getMatch(1);
    t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t));
    let n = b.Z.getGuildId(),
        r = g.Z.getCurrentSearchId(),
        i = (0, d.g)(r);
    if (i === N.aib.GUILD) return X(e, t, n);
    let a = (0, _.a)({ location: 'channelValidator' });
    return i === N.aib.DMS && !!a && Q(e, t);
}
function $(e) {
    let t = {
        [C.intl.string(C.t.ZNR2fn)]: 'link',
        [C.intl.string(C.t['20uQR0'])]: 'embed',
        [C.intl.string(C.t.L4lxyM)]: 'poll',
        [C.intl.string(C.t.nrpA5O)]: 'snapshot',
        [C.intl.string(C.t['AV/v6u'])]: 'file',
        [C.intl.string(C.t.XM9XGB)]: 'video',
        [C.intl.string(C.t.TNLcp6)]: 'image',
        [C.intl.string(C.t.F8Wf0d)]: 'sound',
        [C.intl.string(C.t.PJgX2t)]: 'sticker'
    }[e.getMatch(1)];
    return null != t && '' !== t && (e.setData('has', t), !0);
}
function ee() {
    return [...Array.from(L()), ...Array.from(x()), ...Array.from(M()), ...Object.keys(G())];
}
function et() {
    return o().sample(ee());
}
function en(e, t, n) {
    return er(e, t, ee()).map((e) =>
        D(P({}, e), {
            group: n,
            key: ''.concat(n, '-').concat(e.text)
        })
    );
}
function er(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function ei(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [];
    e.forEach((e) => {
        let t = e.getData('channel');
        null != t && n.push(t.id);
    });
    let r = (e) => {
            null == e || t.has(e.id) || (i.push(e), t.add(e.id));
        },
        i = [];
    return (
        n.forEach((e) => {
            let t = p.Z.getChannel(e);
            if (null != t)
                if (t.isDM()) {
                    let e = t.getRecipientId();
                    r(O.default.getUser(e));
                } else
                    t.isGroupDM() &&
                        t.recipients.forEach((e) => {
                            r(O.default.getUser(e));
                        });
        }),
        i
    );
}
function ea(e) {
    let t,
        { query: n, searchId: r, maxResults: i = 10, tokens: a } = e,
        o = (0, d.g)(r),
        s = {
            query: (n = n.split('#')[0]),
            limit: i,
            request: !1
        };
    switch (o) {
        case N.aib.GUILD:
            t = v.ZP.queryGuildUsers(D(P({}, s), { guildId: r }));
            break;
        case N.aib.CHANNEL:
            t = v.ZP.queryChannelUsers(D(P({}, s), { channelId: r }));
            break;
        case N.aib.DMS:
            let l = ei(null != a ? a : []);
            if (null != l && l.length > 0) {
                let e = O.default.getCurrentUser();
                (null != e && l.push(e),
                    (t = v.ZP.queryUsers(
                        D(P({}, s), {
                            users: l,
                            boosters: (0, v.Cq)(c.h8.USER)
                        })
                    )));
            } else t = v.ZP.queryAllUsers(D(P({}, s), { boosters: (0, v.Cq)(c.h8.USER) }));
            break;
        default:
            return [];
    }
    let u = O.default.getCurrentUser(),
        f = n.toLowerCase().replace(/^@/, ''),
        _ = null != u && n.length > 0 && (C.intl.string(C.t.Qf3ptr).startsWith(f) || N.ME.substr(1).startsWith(f)),
        p = t
            .filter((e) => {
                let { record: t } = e;
                return !m.Z.isBlockedOrIgnored(t.id) && (!_ || t.id !== (null == u ? void 0 : u.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: S.ZP.getUserTag(t),
                    user: t
                };
            });
    return (
        _ &&
            p.unshift({
                text: N.ME,
                user: u
            }),
        p
    );
}
function eo() {
    return !y.Z.hidePersonalInformation;
}
function es(e, t) {
    let n = v.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            boosters: (0, v.Cq)(c.h8.GROUP_DM)
        }),
        r = v.ZP.queryDMChannels({
            query: e,
            limit: t,
            boosters: (0, v.Cq)(c.h8.USER)
        }),
        i = o()(n.concat(r))
            .sort(c.qU)
            .map((e) => {
                let { record: t, comparator: n } = e;
                return {
                    text: n,
                    channel: t,
                    key: null == t ? void 0 : t.id
                };
            })
            .filter((e) => null != e.text && null != e.channel && null != e.key)
            .value();
    if ('' === e.trim()) {
        let e = E.Z.getChannelId(),
            t = p.Z.getChannel(e);
        if (null != t && t.isPrivate()) {
            let n = i.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = i[n];
                (i.splice(n, 1), i.unshift(e));
            } else if (t.isGroupDM()) {
                let e = (0, u.F6)(t, O.default, m.Z);
                i.unshift({
                    text: e,
                    channel: t,
                    key: t.id
                });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = O.default.getUser(e);
                if (null != n) {
                    let e = S.ZP.getUserTag(n);
                    i.unshift({
                        text: e,
                        channel: t,
                        key: t.id
                    });
                }
            }
        }
    }
    return i.slice(0, t);
}
function el(e, t, n) {
    let r = f.Z.getCurrentConfig({ location: 'getInFilterAutocompletionsForGuild' }).enabled,
        i = v.ZP.queryChannels({
            query: e,
            type: h.sH,
            guildId: t,
            limit: 1 / 0,
            allowEmptyQueries: !0,
            includeAllThreads: r
        })
            .concat(
                v.ZP.queryChannels({
                    query: e,
                    type: h.Zb,
                    guildId: t,
                    limit: 1 / 0,
                    allowEmptyQueries: !0
                })
            )
            .map((e) => {
                let { record: t } = e;
                return t;
            });
    if ((r || (i = i.filter((e) => !e.isThread())), '' === e.trim())) {
        let e = E.Z.getChannelId(t),
            n = i.find((t) => t.id === e);
        null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
    }
    let a = h.ZP.getTextChannelNameDisambiguations(t);
    return o()(i)
        .take(n)
        .map((e) => {
            var t, n;
            return {
                text: ''.concat(null != (n = null == (t = a[e.id]) ? void 0 : t.name) ? n : e.name),
                channel: e,
                key: e.id
            };
        })
        .value();
}
function ec(e, t, n) {
    (e.startsWith('"') && e.endsWith('"') ? (e = e.substring(1, e.length - 1).replaceAll(/\\(.)/g, (e, t) => t)) : e.startsWith('"') && (e = e.substring(1).replaceAll(/\\(.)/g, (e, t) => t)), '#' === e[0] && (e = e.substring(1)));
    let r = (0, d.g)(t);
    if (r === N.aib.GUILD) return el(e, t, n);
    let i = (0, _.a)({ location: 'getInFilterAutocompletions' });
    return r === N.aib.DMS && i ? es(e, n) : [];
}
let eu = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ed = (function (e) {
    return ((e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER'), e);
})({});
function ef() {
    let e = [C.intl.string(C.t.ZNR2fn), C.intl.string(C.t['20uQR0']), C.intl.string(C.t.L4lxyM), C.intl.string(C.t['AV/v6u']), C.intl.string(C.t.XM9XGB), C.intl.string(C.t.TNLcp6), C.intl.string(C.t.F8Wf0d), C.intl.string(C.t.PJgX2t), C.intl.string(C.t.nrpA5O)];
    return {
        [N.dCx.FILTER_FROM]: {
            regex: K(C.intl.string(C.t['1TUdFh'])),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t['1TUdFh'])),
            plainText: C.intl.string(C.t['1TUdFh']),
            validator: eo,
            getAutocompletions: ea
        },
        [N.dCx.ANSWER_USERNAME_FROM]: {
            follows: [N.dCx.FILTER_FROM],
            regex: eu,
            validator: z,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [N.dCx.FILTER_MENTIONS]: {
            regex: K(C.intl.string(C.t.i96lOz)),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t.i96lOz)),
            plainText: C.intl.string(C.t.i96lOz),
            validator: eo,
            getAutocompletions: ea
        },
        [N.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [N.dCx.FILTER_MENTIONS],
            regex: eu,
            validator: z,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [N.dCx.FILTER_HAS]: {
            regex: K(C.intl.string(C.t.CqCvio)),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t.CqCvio)),
            plainText: C.intl.string(C.t.CqCvio),
            getAutocompletions(t) {
                let { query: n, maxResults: r } = t;
                return er(n, r, e);
            }
        },
        [N.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(e.map((e) => I.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [N.dCx.FILTER_HAS],
            validator: $,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [N.dCx.FILTER_FILE_TYPE]: {
            regex: K(C.intl.string(C.t.TMNjFh)),
            key: W(C.intl.string(C.t.TMNjFh)),
            plainText: C.intl.string(C.t.TMNjFh),
            componentType: 'FILTER'
        },
        [N.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [N.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_extensions'
        },
        [N.dCx.FILTER_FILE_NAME]: {
            regex: K(C.intl.string(C.t['5xtLRE'])),
            key: W(C.intl.string(C.t['5xtLRE'])),
            plainText: C.intl.string(C.t['5xtLRE']),
            componentType: 'FILTER'
        },
        [N.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [N.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'attachment_filename'
        },
        [N.dCx.FILTER_BEFORE]: {
            regex: K(C.intl.string(C.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t['qZ+7BA'])),
            plainText: C.intl.string(C.t['qZ+7BA']),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, N.dCx.FILTER_BEFORE);
            }
        },
        [N.dCx.FILTER_ON]: {
            regex: K('('.concat(C.intl.string(C.t.tIxkOj), '|').concat(C.intl.string(C.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t.h2NzSU)),
            plainText: C.intl.string(C.t.h2NzSU),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, N.dCx.FILTER_ON);
            }
        },
        [N.dCx.FILTER_AFTER]: {
            regex: K(C.intl.string(C.t.KSDx7O)),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t.KSDx7O)),
            plainText: C.intl.string(C.t.KSDx7O),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, N.dCx.FILTER_AFTER);
            }
        },
        [N.dCx.ANSWER_BEFORE]: {
            regex: H,
            follows: [N.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => q(e, 'before')
        },
        [N.dCx.ANSWER_ON]: {
            regex: H,
            follows: [N.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => q(e, 'on')
        },
        [N.dCx.ANSWER_AFTER]: {
            regex: H,
            follows: [N.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => q(e, 'after')
        },
        [N.dCx.FILTER_IN]: {
            regex: K(C.intl.string(C.t.WNpFHR)),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t.WNpFHR)),
            plainText: C.intl.string(C.t.WNpFHR),
            validator: () => {
                let e = g.Z.getCurrentSearchId(),
                    t = (0, d.g)(e);
                return (0, T.R6)(t);
            },
            getAutocompletions(e) {
                let { query: t, searchId: n, maxResults: r } = e;
                return ec(t, n, r);
            }
        },
        [N.dCx.ANSWER_IN]: {
            regex: A.e,
            mutable: !0,
            follows: [N.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: J,
            queryKey: 'channel_id'
        },
        [N.dCx.FILTER_PINNED]: {
            regex: K(C.intl.string(C.t['0B74eX'])),
            componentType: 'FILTER',
            key: W(C.intl.string(C.t['0B74eX'])),
            plainText: C.intl.string(C.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [N.dCx.ANSWER_PINNED]: {
            regex: Y,
            componentType: 'ANSWER',
            follows: [N.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let t = e.getMatch(1);
                return 'true' === t ? (e.setData('pinned', !0), !0) : 'false' === t && (e.setData('pinned', !1), !0);
            }
        }
    };
}
let e_ = {};
function ep() {
    Object.assign(e_, ef());
}
function eh(e) {
    return N.TNx.test(e);
}
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(e_).length,
        n = [];
    for (let r of Object.keys(e_)) {
        if (n.length >= t) break;
        let a = e_[r].key;
        eh(r) &&
            null != a &&
            i()(e.toLowerCase(), a) &&
            n.push({
                token: r,
                text: a
            });
    }
    return n;
}
function eg(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, '');
    return C.intl.string(C.t.Qf3ptr).startsWith(t) || N.ME.substring(1).startsWith(t);
}
let eE = e_;
