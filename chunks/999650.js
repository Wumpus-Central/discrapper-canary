r.d(n, {
    Pe: function () {
        return en;
    },
    Pr: function () {
        return K;
    },
    Qe: function () {
        return i;
    },
    nB: function () {
        return er;
    }
});
var i,
    a = r(47120);
var s = r(757143);
var o = r(733860);
var l = r(658722),
    u = r.n(l),
    c = r(392711),
    d = r.n(c),
    f = r(913527),
    _ = r.n(f),
    h = r(346610),
    p = r(984933),
    m = r(699516),
    g = r(768119),
    E = r(944486),
    v = r(914010),
    I = r(246946),
    T = r(594174),
    b = r(483360),
    y = r(226951),
    S = r(51144),
    A = r(981631),
    N = r(388032);
function C() {
    return new Set(
        _()
            .months()
            .map((e) => e.toLowerCase())
    );
}
function R() {
    return new Set(
        _()
            .weekdays()
            .map((e) => e.toLowerCase())
    );
}
function O() {
    let e = new Date().getFullYear();
    return new Set(
        d()
            .range(2015, e + 1)
            .map((e) => e.toString())
    );
}
function D(e, n) {
    return [e, e.clone().add(1, n)];
}
function L(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return D(_()().startOf(e).add(n, e), e);
}
function x(e, n, r) {
    return D(_()(e, n).local(), r);
}
function w() {
    return {
        [N.intl.string(N.t.HYiVER)]: () => L('day'),
        [N.intl.string(N.t.cu86KC)]: () => L('day', -1),
        [N.intl.string(N.t['FvBj//'])]: () => L('week'),
        [N.intl.string(N.t['20uWCw'])]: () => L('month'),
        [N.intl.string(N.t['dXC/ho'])]: () => L('year')
    };
}
let P = '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})',
    M = '\\d{4}',
    k = '([0-9]{4})-([0-9]{1,2})',
    U = '([^\\d\\s]+)',
    B = RegExp('(?:\\s*('.concat(P, '|').concat(k, '|').concat(M, '|').concat(U, '))'), 'i'),
    G = RegExp('\\s*(true|false)', 'i');
function Z(e) {
    return ''.concat(e, ':');
}
function F(e) {
    return RegExp(Z(e), 'i');
}
function V(e) {
    let n;
    let r = e.getMatch(1),
        i = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return null != (n = A.Xyh.test(r) ? r : r === A.ME ? i(T.default.getCurrentUser()) : null != e.getMatch(4) ? i(T.default.findByTag(e.getMatch(4))) : i(T.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData('userId', n), !0);
}
function j(e, n) {
    let r, i;
    let a = e.getFullMatch().trim().toLowerCase(),
        s = w()[a];
    return null != s ? ([r, i] = s()) : C().has(a) ? ([r, i] = x(a, 'MMMM', 'month')) : R().has(a) ? ([r, i] = x(a, 'dddd', 'day')) : O().has(a) ? ([r, i] = x(a, 'YYYY', 'year')) : ([r, i] = x(a, A.b2L, 'day')), !!(r.isValid() && i.isValid()) && ('before' === n ? ((i = r), (r = null)) : 'after' === n && ((r = i), (i = null)), e.setData('start', r), e.setData('end', i), !0);
}
function H(e) {
    let n = e.getMatch(1),
        r = v.Z.getGuildId(),
        i = p.ZP.getChannels(r)[p.sH].concat(p.ZP.getChannels(r)[p.Zb]),
        a = p.ZP.getTextChannelNameDisambiguations(r),
        s = d()
            .chain(i)
            .map((e) => {
                let { channel: n } = e;
                return n;
            })
            .find((e) => {
                var r, i;
                return n === (null !== (i = null === (r = a[e.id]) || void 0 === r ? void 0 : r.name) && void 0 !== i ? i : e.name);
            })
            .value();
    return null != s && (e.setData('channel', s), !0);
}
function Y(e) {
    let n = {
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
    return null != n && '' !== n && (e.setData('has', n), !0);
}
function W() {
    return [...Array.from(C()), ...Array.from(R()), ...Array.from(O()), ...Object.keys(w())];
}
function K() {
    return d().sample(W());
}
function z(e, n, r) {
    return q(e, n, W()).map((e) => ({
        ...e,
        group: r,
        key: ''.concat(r, '-').concat(e.text)
    }));
}
function q(e, n, r) {
    let i = e.toLocaleLowerCase();
    return d()(r)
        .filter((e) => u()(i, e.toLocaleLowerCase()))
        .take(n)
        .map((e) => ({ text: e }))
        .value();
}
function Q(e, n) {
    let r,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = g.Z.getSearchType(n),
        o = {
            query: (e = e.split('#')[0]),
            limit: i,
            request: a
        };
    switch (s) {
        case A.aib.GUILD:
            r = b.ZP.queryGuildUsers({
                ...o,
                guildId: n
            });
            break;
        case A.aib.CHANNEL:
            r = b.ZP.queryChannelUsers({
                ...o,
                channelId: n
            });
            break;
        case A.aib.DMS:
            r = b.ZP.queryUsers(e, i, !0, a, () => !0);
            break;
        default:
            return [];
    }
    let l = T.default.getCurrentUser(),
        u = e.toLowerCase().replace(/^@/, ''),
        c = null != l && e.length > 0 && (N.intl.string(N.t.Qf3ptr).startsWith(u) || A.ME.substr(1).startsWith(u)),
        d = r
            .filter((e) => {
                let { record: n } = e;
                return !m.Z.isBlockedOrIgnored(n.id) && (!c || n.id !== (null == l ? void 0 : l.id));
            })
            .map((e) => {
                let { record: n } = e;
                return {
                    text: S.ZP.getUserTag(n),
                    user: n
                };
            });
    return (
        c &&
            d.unshift({
                text: A.ME,
                user: l
            }),
        d
    );
}
function X() {
    return g.Z.getSearchType() === A.aib.GUILD;
}
function J() {
    return !I.Z.hidePersonalInformation;
}
let $ = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
function ee() {
    let { canForwardMessages: e } = (0, h.WT)({ location: 'SearchTokens' }, { autoTrackExposure: !1 }),
        n = e ? [N.intl.string(N.t.nrpA5O)] : [],
        r = [N.intl.string(N.t.ZNR2fn), N.intl.string(N.t['20uQR0']), N.intl.string(N.t.L4lxyM), N.intl.string(N.t['AV/v6u']), N.intl.string(N.t.XM9XGB), N.intl.string(N.t.TNLcp6), N.intl.string(N.t.F8Wf0d), N.intl.string(N.t.PJgX2t), ...n];
    return {
        [A.dCx.FILTER_FROM]: {
            regex: F(N.intl.string(N.t['1TUdFh'])),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t['1TUdFh'])),
            plainText: N.intl.string(N.t['1TUdFh']),
            validator: J,
            getAutocompletions: Q
        },
        [A.dCx.ANSWER_USERNAME_FROM]: {
            follows: [A.dCx.FILTER_FROM],
            regex: $,
            validator: V,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'author_id'
        },
        [A.dCx.FILTER_MENTIONS]: {
            regex: F(N.intl.string(N.t.i96lOz)),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t.i96lOz)),
            plainText: N.intl.string(N.t.i96lOz),
            validator: J,
            getAutocompletions: Q
        },
        [A.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [A.dCx.FILTER_MENTIONS],
            regex: $,
            validator: V,
            mutable: !0,
            componentType: 'ANSWER',
            queryKey: 'mentions'
        },
        [A.dCx.FILTER_HAS]: {
            regex: F(N.intl.string(N.t.CqCvio)),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t.CqCvio)),
            plainText: N.intl.string(N.t.CqCvio),
            getAutocompletions: (e, n, i) => q(e, i, r)
        },
        [A.dCx.ANSWER_HAS]: {
            regex: RegExp('(?:\\s*-?('.concat(r.map((e) => y.Z.escape(e)).join('|'), '))'), 'i'),
            follows: [A.dCx.FILTER_HAS],
            validator: Y,
            componentType: 'ANSWER',
            queryKey: 'has'
        },
        [A.dCx.FILTER_FILE_TYPE]: {
            regex: F(N.intl.string(N.t.TMNjFh)),
            key: Z(N.intl.string(N.t.TMNjFh)),
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
            regex: F(N.intl.string(N.t['5xtLRE'])),
            key: Z(N.intl.string(N.t['5xtLRE'])),
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
            regex: F(N.intl.string(N.t['qZ+7BA'])),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t['qZ+7BA'])),
            plainText: N.intl.string(N.t['qZ+7BA']),
            getAutocompletions: (e, n, r) => z(e, r, A.dCx.FILTER_BEFORE)
        },
        [A.dCx.FILTER_ON]: {
            regex: F('('.concat(N.intl.string(N.t.tIxkOj), '|').concat(N.intl.string(N.t.h2NzSU), ')')),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t.h2NzSU)),
            plainText: N.intl.string(N.t.h2NzSU),
            getAutocompletions: (e, n, r) => z(e, r, A.dCx.FILTER_ON)
        },
        [A.dCx.FILTER_AFTER]: {
            regex: F(N.intl.string(N.t.KSDx7O)),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t.KSDx7O)),
            plainText: N.intl.string(N.t.KSDx7O),
            getAutocompletions: (e, n, r) => z(e, r, A.dCx.FILTER_AFTER)
        },
        [A.dCx.ANSWER_BEFORE]: {
            regex: B,
            follows: [A.dCx.FILTER_BEFORE],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => j(e, 'before')
        },
        [A.dCx.ANSWER_ON]: {
            regex: B,
            follows: [A.dCx.FILTER_ON],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => j(e, 'on')
        },
        [A.dCx.ANSWER_AFTER]: {
            regex: B,
            follows: [A.dCx.FILTER_AFTER],
            componentType: 'ANSWER',
            mutable: !0,
            validator: (e) => j(e, 'after')
        },
        [A.dCx.FILTER_IN]: {
            regex: F(N.intl.string(N.t.WNpFHR)),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t.WNpFHR)),
            plainText: N.intl.string(N.t.WNpFHR),
            validator: X,
            getAutocompletions(e, n, r) {
                '#' === e[0] && (e = e.substring(1));
                let i = b.ZP.queryChannels({
                    query: e,
                    type: p.sH,
                    guildId: n,
                    limit: 1 / 0
                })
                    .concat(
                        b.ZP.queryChannels({
                            query: e,
                            type: p.Zb,
                            guildId: n,
                            limit: 1 / 0
                        })
                    )
                    .map((e) => {
                        let { record: n } = e;
                        return n;
                    })
                    .filter((e) => !e.isThread());
                if ('' === e.trim()) {
                    let e = E.Z.getChannelId(n),
                        r = i.find((n) => n.id === e);
                    null != r && (i.splice(i.indexOf(r), 1), i.unshift(r));
                }
                let a = p.ZP.getTextChannelNameDisambiguations(n);
                return d()(i)
                    .take(r)
                    .map((e) => {
                        var n, r;
                        return {
                            text: ''.concat(null !== (r = null === (n = a[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : e.name),
                            channel: e
                        };
                    })
                    .value();
            }
        },
        [A.dCx.ANSWER_IN]: {
            regex: /(?:\s*#?([^ ]+))/i,
            mutable: !0,
            follows: [A.dCx.FILTER_IN],
            componentType: 'ANSWER',
            validator: H,
            queryKey: 'channel_id'
        },
        [A.dCx.FILTER_PINNED]: {
            regex: F(N.intl.string(N.t['0B74eX'])),
            componentType: 'FILTER',
            key: Z(N.intl.string(N.t['0B74eX'])),
            plainText: N.intl.string(N.t['0B74eX']),
            getAutocompletions: () => [{ text: 'true' }, { text: 'false' }]
        },
        [A.dCx.ANSWER_PINNED]: {
            regex: G,
            componentType: 'ANSWER',
            follows: [A.dCx.FILTER_PINNED],
            queryKey: 'pinned',
            validator: (e) => {
                let n = e.getMatch(1);
                return 'true' === n ? (e.setData('pinned', !0), !0) : 'false' === n && (e.setData('pinned', !1), !0);
            }
        }
    };
}
!(function (e) {
    (e.FILTER = 'FILTER'), (e.ANSWER = 'ANSWER');
})(i || (i = {}));
let et = {};
function en() {
    Object.assign(et, ee());
}
function er(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(et).length;
    return d()(et)
        .keys()
        .filter((e) => A.TNx.test(e))
        .filter((e) => null != et[e].key)
        .map((e) => ({
            token: e,
            text: et[e].key
        }))
        .filter((n) => {
            let { text: r } = n;
            return u()(e.toLowerCase(), r);
        })
        .take(n)
        .value();
}
n.ZP = et;
