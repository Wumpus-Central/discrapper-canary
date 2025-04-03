let n;
I.d(t, {
    Sz: () => R,
    Vg: () => v,
    ZP: () => C,
    an: () => U,
    bm: () => f,
    rh: () => y
}),
    I(653041),
    I(47120);
var r,
    i = I(317381),
    O = I(592125),
    l = I(271383),
    u = I(306680),
    N = I(699516),
    _ = I(594174),
    T = I(55589),
    a = I(483360),
    s = I(981631),
    S = I(245335),
    E = I(388032);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var I = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(I);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(I).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(I, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = I[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var I = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      I.push.apply(I, n);
                  }
                  return I;
              })(Object(t)).forEach(function (I) {
                  Object.defineProperty(e, I, Object.getOwnPropertyDescriptor(t, I));
              }),
        e
    );
}
n = I(603617);
var f = (((r = {}).GROUP_DM = 'GROUP_DM'), (r.DM = 'DM'), (r.FRIEND = 'FRIEND'), (r.CHANNEL = 'CHANNEL'), r);
let g = (e, t) => null != e && l.ZP.isMember(e, t),
    m = (e) => {
        let { omitUserIds: t, suggestedUserIds: I, maxRowsWithoutQuery: n, omitGuildId: r, shownUserIds: i, rows: O, counts: l } = e;
        if (null != I)
            for (let e of I) {
                if (null != n && n > 0 && O.length >= n) break;
                if (t.has(e) || i.has(e)) continue;
                let I = _.default.getUser(e);
                !(null == I || g(r, I.id)) &&
                    (i.add(I.id),
                    O.push({
                        type: 'FRIEND',
                        item: I,
                        isSuggested: !0
                    }),
                    l.numFriends++);
            }
    },
    d = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: I, rows: n, counts: r } = e;
        if (null != t)
            for (let e of t) {
                if (null != I && I > 0 && n.length >= I) break;
                let t = O.Z.getChannel(e);
                null != t &&
                    (n.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    r.numChannels++);
            }
    },
    c = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: I, omitGuildId: n, shownUserIds: r, rows: i, counts: l, includeGroupDms: N, limit: a } = e,
            S = 0;
        for (let e of T.Z.getPrivateChannelIds()) {
            if ((null != I && I > 0 && i.length >= I) || (null != a && S >= a)) break;
            let T = O.Z.getChannel(e);
            if (null == T || !T.isPrivate()) continue;
            if (N && T.type === s.d4z.GROUP_DM) {
                i.push({
                    type: 'GROUP_DM',
                    item: T,
                    isSuggested: !1
                }),
                    l.numGroupDms++,
                    S++;
                continue;
            }
            if (null == u.ZP.lastMessageId(T.id)) continue;
            let E = T.getRecipientId();
            if (null != E && !t.has(E) && !r.has(E)) {
                let e = _.default.getUser(E);
                if (null == e || e.bot || g(n, e.id)) continue;
                r.add(e.id),
                    i.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    l.numDms++,
                    S++;
            }
        }
    },
    p = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: I, omitGuildId: n, shownUserIds: r, rows: i, counts: O } = e;
        for (let e of N.Z.getFriendIDs()) {
            if (null != I && I > 0 && i.length >= I) break;
            if (t.has(e) || r.has(e)) continue;
            let l = _.default.getUser(e);
            !(null == l || g(n, l.id)) &&
                (i.push({
                    type: 'FRIEND',
                    item: l,
                    isSuggested: !1
                }),
                O.numFriends++);
        }
    },
    D = (e) => {
        let { query: t, rows: I, counts: n, inviteTargetType: r } = e;
        r === S.Iq.EMBEDDED_APPLICATION &&
            a.ZP.queryChannels({
                query: t,
                limit: 3,
                guildId: void 0
            }).forEach((e) => {
                let { record: t } = e;
                I.push({
                    type: 'CHANNEL',
                    item: t,
                    isSuggested: !1
                }),
                    n.numChannels++;
            });
    },
    V = (e) => {
        let { query: t, omitUserIds: I, shownUserIds: n, rows: r, counts: i } = e;
        a.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (I.has(t.id)) return;
            let l = O.Z.getDMFromUserId(t.id);
            null != l &&
                null != u.ZP.lastMessageId(l) &&
                (n.add(t.id),
                r.push({
                    type: 'DM',
                    item: t,
                    isSuggested: !1
                }),
                i.numDms++);
        });
    },
    M = (e) => {
        let { query: t, rows: I, counts: n } = e;
        a.ZP.queryGroupDMs({
            query: t,
            limit: 50,
            fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            I.push({
                type: 'GROUP_DM',
                item: t,
                isSuggested: !1
            }),
                n.numGroupDms++;
        });
    },
    h = (e) => {
        let { query: t, rows: I, counts: n, omitUserIds: r, shownUserIds: i } = e;
        a.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            !(r.has(t.id) || i.has(t.id)) &&
                (i.add(t.id),
                I.push({
                    type: 'FRIEND',
                    item: t,
                    isSuggested: !1
                }),
                n.numFriends++);
        });
    };
function U(e) {
    let { query: t, inviteTargetType: I, omitUserIds: n, suggestedUserIds: r, suggestedChannelIds: i, maxRowsWithoutQuery: O, omitGuildId: l } = e,
        u = new Set(),
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
            omitUserIds: n,
            maxRowsWithoutQuery: O,
            omitGuildId: l,
            shownUserIds: u,
            rows: N,
            counts: _
        };
        I === S.Iq.EMBEDDED_APPLICATION &&
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
        I === S.Iq.EMBEDDED_APPLICATION && D(P(o({}, e), { inviteTargetType: I })),
            V(
                P(o({}, e), {
                    omitUserIds: n,
                    shownUserIds: u
                })
            ),
            M(e),
            h(
                P(o({}, e), {
                    omitUserIds: n,
                    shownUserIds: u
                })
            );
    }
    return {
        rows: N,
        counts: _
    };
}
function y(e, t) {
    for (let I of T.Z.getPrivateChannelIds()) {
        let n = O.Z.getChannel(I);
        if (null == n || !n.isDM() || null == u.ZP.lastMessageId(n.id)) continue;
        let r = n.getRecipientId();
        if (null != r && !e.has(r)) {
            let e = _.default.getUser(r);
            if (null == e || e.bot || g(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function R(e) {
    let { channel: t, inviteTargetType: I, applicationId: n } = e;
    if (I === S.Iq.EMBEDDED_APPLICATION && null != t) {
        for (let e of i.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === n) return new Set(e.userIds);
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
        [n.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: b.MINUTES
        },
        [n.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: b.HOURS
        },
        [n.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: b.HOURS
        },
        [n.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: b.HOURS
        },
        [n.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: b.DAYS
        },
        [n.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: b.DAYS
        },
        [n.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: b.NEVER
        }
    };
function v(e, t) {
    let I = parseInt(t, 10),
        n = 0 === I,
        r = A[e].value;
    switch (A[e].type) {
        case b.MINUTES:
            if (n) return E.NW.string(E.t['/WbTXF']);
            return E.NW.formatToPlainString(E.t.eDRWJC, { numUses: I });
        case b.HOURS:
            if (n) return E.NW.formatToPlainString(E.t.ZVdJMz, { numHours: r });
            return E.NW.formatToPlainString(E.t.NgZgAA, {
                numHours: r,
                numUses: I
            });
        case b.DAYS:
            if (n) return E.NW.formatToPlainString(E.t.T96qsr, { numDays: r });
            return E.NW.formatToPlainString(E.t.TfuB9P, {
                numDays: r,
                numUses: I
            });
        case b.NEVER:
            if (n) return E.NW.string(E.t.QrHBnJ);
            return E.NW.formatToPlainString(E.t.yJnTxM, { numUses: I });
        default:
            return '';
    }
}
let C = {
    getMaxAgeOptions: n.MAX_AGE_OPTIONS,
    getMaxUsesOptions: n.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_8_HOURS: n.INVITE_OPTIONS_8_HOURS,
    INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES
};
