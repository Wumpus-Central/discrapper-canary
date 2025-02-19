let I;
n.d(t, {
    Sz: () => R,
    Vg: () => v,
    ZP: () => C,
    an: () => U,
    bm: () => f,
    rh: () => y
}),
    n(653041),
    n(47120);
var r,
    i = n(317381),
    l = n(592125),
    u = n(271383),
    O = n(306680),
    N = n(699516),
    _ = n(594174),
    T = n(55589),
    s = n(483360),
    a = n(981631),
    S = n(245335),
    E = n(388032);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            I = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (I = I.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            I.forEach(function (t) {
                var I;
                (I = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: I,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = I);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var I = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, I);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
I = n(603617);
var f = (((r = {}).GROUP_DM = 'GROUP_DM'), (r.DM = 'DM'), (r.FRIEND = 'FRIEND'), (r.CHANNEL = 'CHANNEL'), r);
let g = (e, t) => null != e && u.ZP.isMember(e, t),
    m = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: I, omitGuildId: r, shownUserIds: i, rows: l, counts: u } = e;
        if (null != n)
            for (let e of n) {
                if (null != I && I > 0 && l.length >= I) break;
                if (t.has(e) || i.has(e)) continue;
                let n = _.default.getUser(e);
                !(null == n || g(r, n.id)) &&
                    (i.add(n.id),
                    l.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    u.numFriends++);
            }
    },
    d = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: I, counts: r } = e;
        if (null != t)
            for (let e of t) {
                if (null != n && n > 0 && I.length >= n) break;
                let t = l.Z.getChannel(e);
                null != t &&
                    (I.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    r.numChannels++);
            }
    },
    c = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: I, shownUserIds: r, rows: i, counts: u, includeGroupDms: N, limit: s } = e,
            S = 0;
        for (let e of T.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && i.length >= n) || (null != s && S >= s)) break;
            let T = l.Z.getChannel(e);
            if (null == T || !T.isPrivate()) continue;
            if (N && T.type === a.d4z.GROUP_DM) {
                i.push({
                    type: 'GROUP_DM',
                    item: T,
                    isSuggested: !1
                }),
                    u.numGroupDms++,
                    S++;
                continue;
            }
            if (null == O.ZP.lastMessageId(T.id)) continue;
            let E = T.getRecipientId();
            if (null != E && !t.has(E) && !r.has(E)) {
                let e = _.default.getUser(E);
                if (null == e || e.bot || g(I, e.id)) continue;
                r.add(e.id),
                    i.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    u.numDms++,
                    S++;
            }
        }
    },
    p = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: I, shownUserIds: r, rows: i, counts: l } = e;
        for (let e of N.Z.getFriendIDs()) {
            if (null != n && n > 0 && i.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let u = _.default.getUser(e);
            !(null == u || g(I, u.id)) &&
                (i.push({
                    type: 'FRIEND',
                    item: u,
                    isSuggested: !1
                }),
                l.numFriends++);
        }
    },
    D = (e) => {
        let { query: t, rows: n, counts: I, inviteTargetType: r } = e;
        r === S.Iq.EMBEDDED_APPLICATION &&
            s.ZP.queryChannels({
                query: t,
                limit: 3,
                guildId: void 0
            }).forEach((e) => {
                let { record: t } = e;
                n.push({
                    type: 'CHANNEL',
                    item: t,
                    isSuggested: !1
                }),
                    I.numChannels++;
            });
    },
    M = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: I, rows: r, counts: i } = e;
        s.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let u = l.Z.getDMFromUserId(t.id);
            null != u &&
                null != O.ZP.lastMessageId(u) &&
                (I.add(t.id),
                r.push({
                    type: 'DM',
                    item: t,
                    isSuggested: !1
                }),
                i.numDms++);
        });
    },
    V = (e) => {
        let { query: t, rows: n, counts: I } = e;
        s.ZP.queryGroupDMs({
            query: t,
            limit: 50,
            fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            n.push({
                type: 'GROUP_DM',
                item: t,
                isSuggested: !1
            }),
                I.numGroupDms++;
        });
    },
    h = (e) => {
        let { query: t, rows: n, counts: I, omitUserIds: r, shownUserIds: i } = e;
        s.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            !(r.has(t.id) || i.has(t.id)) &&
                (i.add(t.id),
                n.push({
                    type: 'FRIEND',
                    item: t,
                    isSuggested: !1
                }),
                I.numFriends++);
        });
    };
function U(e) {
    let { query: t, inviteTargetType: n, omitUserIds: I, suggestedUserIds: r, suggestedChannelIds: i, maxRowsWithoutQuery: l, omitGuildId: u } = e,
        O = new Set(),
        N = [],
        _ = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === t) {
        let e = {
            omitUserIds: I,
            maxRowsWithoutQuery: l,
            omitGuildId: u,
            shownUserIds: O,
            rows: N,
            counts: _
        };
        n === S.Iq.EMBEDDED_APPLICATION &&
            (c(
                P(o({}, e), {
                    includeGroupDms: !1,
                    limit: 1
                })
            ),
            d(P(o({}, e), { suggestedChannelIds: i }))),
            m(P(o({}, e), { suggestedUserIds: r })),
            c(P(o({}, e), { includeGroupDms: !0 })),
            p(e);
    } else {
        let e = {
            query: t,
            rows: N,
            counts: _
        };
        n === S.Iq.EMBEDDED_APPLICATION && D(P(o({}, e), { inviteTargetType: n })),
            M(
                P(o({}, e), {
                    omitUserIds: I,
                    shownUserIds: O
                })
            ),
            V(e),
            h(
                P(o({}, e), {
                    omitUserIds: I,
                    shownUserIds: O
                })
            );
    }
    return {
        rows: N,
        counts: _
    };
}
function y(e, t) {
    for (let n of T.Z.getPrivateChannelIds()) {
        let I = l.Z.getChannel(n);
        if (null == I || !I.isDM() || null == O.ZP.lastMessageId(I.id)) continue;
        let r = I.getRecipientId();
        if (null != r && !e.has(r)) {
            let e = _.default.getUser(r);
            if (null == e || e.bot || g(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function R(e) {
    let { channel: t, inviteTargetType: n, applicationId: I } = e;
    if (n === S.Iq.EMBEDDED_APPLICATION && null != t) {
        for (let e of i.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === I) return new Set(e.userIds);
    }
    return new Set();
}
let b = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    A = {
        [I.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: b.MINUTES
        },
        [I.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: b.HOURS
        },
        [I.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: b.HOURS
        },
        [I.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: b.HOURS
        },
        [I.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: b.DAYS
        },
        [I.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: b.DAYS
        },
        [I.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: b.NEVER
        }
    };
function v(e, t) {
    let n = parseInt(t, 10),
        I = 0 === n,
        r = A[e].value;
    switch (A[e].type) {
        case b.MINUTES:
            if (I) return E.NW.string(E.t['/WbTXF']);
            return E.NW.formatToPlainString(E.t.eDRWJC, { numUses: n });
        case b.HOURS:
            if (I) return E.NW.formatToPlainString(E.t.ZVdJMz, { numHours: r });
            return E.NW.formatToPlainString(E.t.NgZgAA, {
                numHours: r,
                numUses: n
            });
        case b.DAYS:
            if (I) return E.NW.formatToPlainString(E.t.T96qsr, { numDays: r });
            return E.NW.formatToPlainString(E.t.TfuB9P, {
                numDays: r,
                numUses: n
            });
        case b.NEVER:
            if (I) return E.NW.string(E.t.QrHBnJ);
            return E.NW.formatToPlainString(E.t.yJnTxM, { numUses: n });
        default:
            return '';
    }
}
let C = {
    getMaxAgeOptions: I.MAX_AGE_OPTIONS,
    getMaxUsesOptions: I.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: I.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: I.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: I.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: I.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: I.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_1_HOUR: I.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: I.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: I.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: I.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: I.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: I.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: I.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: I.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: I.INVITE_OPTIONS_100_TIMES
};
