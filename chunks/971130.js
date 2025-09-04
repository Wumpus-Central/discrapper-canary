let n;
I.d(e, {
    Sz: () => V,
    Vg: () => A,
    ZP: () => v,
    an: () => m,
    bm: () => f,
    rh: () => c,
}),
    I(539854),
    I(388685);
var i,
    l = I(317381),
    r = I(592125),
    _ = I(271383),
    O = I(306680),
    T = I(699516),
    u = I(594174),
    N = I(55589),
    a = I(483360),
    S = I(981631),
    s = I(245335),
    o = I(388032);
function E(t) {
    for (var e = 1; e < arguments.length; e++) {
        var I = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(I);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(I).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(I, t).enumerable;
                }),
            )),
            n.forEach(function (e) {
                var n;
                (n = I[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = n);
            });
    }
    return t;
}
function P(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var I = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      I.push.apply(I, n);
                  }
                  return I;
              })(Object(e)).forEach(function (I) {
                  Object.defineProperty(t, I, Object.getOwnPropertyDescriptor(e, I));
              }),
        t
    );
}
n = I(603617);
var f = (((i = {}).GROUP_DM = "GROUP_DM"), (i.DM = "DM"), (i.FRIEND = "FRIEND"), (i.CHANNEL = "CHANNEL"), i);
let g = (t, e) => null != t && _.ZP.isMember(t, e),
    d = (t) => {
        let {
                omitUserIds: e,
                maxRowsWithoutQuery: I,
                omitGuildId: n,
                shownUserIds: i,
                rows: l,
                counts: _,
                includeGroupDms: T,
                limit: a,
            } = t,
            s = 0;
        for (let t of N.Z.getPrivateChannelIds()) {
            if ((null != I && I > 0 && l.length >= I) || (null != a && s >= a)) break;
            let N = r.Z.getChannel(t);
            if (null == N || !N.isPrivate()) continue;
            if (T && N.type === S.d4z.GROUP_DM) {
                l.push({
                    type: "GROUP_DM",
                    item: N,
                    isSuggested: !1,
                }),
                    _.numGroupDms++,
                    s++;
                continue;
            }
            if (null == O.ZP.lastMessageId(N.id)) continue;
            let o = N.getRecipientId();
            if (null != o && !e.has(o) && !i.has(o)) {
                let t = u.default.getUser(o);
                if (null == t || t.bot || g(n, t.id)) continue;
                i.add(t.id),
                    l.push({
                        type: "DM",
                        item: t,
                        isSuggested: !1,
                    }),
                    _.numDms++,
                    s++;
            }
        }
    };
function m(t) {
    let {
            query: e,
            inviteTargetType: I,
            omitUserIds: n,
            suggestedUserIds: i,
            suggestedChannelIds: l,
            maxRowsWithoutQuery: _,
            omitGuildId: N,
        } = t,
        S = new Set(),
        o = [],
        f = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
        };
    if ("" === e) {
        let t = {
            omitUserIds: n,
            maxRowsWithoutQuery: _,
            omitGuildId: N,
            shownUserIds: S,
            rows: o,
            counts: f,
        };
        I === s.Iq.EMBEDDED_APPLICATION &&
            (d(
                P(E({}, t), {
                    includeGroupDms: !1,
                    limit: 1,
                }),
            ),
            ((t) => {
                let { suggestedChannelIds: e, maxRowsWithoutQuery: I, rows: n, counts: i } = t;
                if (null != e)
                    for (let t of e) {
                        if (null != I && I > 0 && n.length >= I) break;
                        let e = r.Z.getChannel(t);
                        null != e &&
                            (n.push({
                                type: "CHANNEL",
                                item: e,
                                isSuggested: !0,
                            }),
                            i.numChannels++);
                    }
            })(P(E({}, t), { suggestedChannelIds: l }))),
            ((t) => {
                let {
                    omitUserIds: e,
                    suggestedUserIds: I,
                    maxRowsWithoutQuery: n,
                    omitGuildId: i,
                    shownUserIds: l,
                    rows: r,
                    counts: _,
                } = t;
                if (null != I)
                    for (let t of I) {
                        if (null != n && n > 0 && r.length >= n) break;
                        if (e.has(t) || l.has(t)) continue;
                        let I = u.default.getUser(t);
                        !(null == I || g(i, I.id)) &&
                            (l.add(I.id),
                            r.push({
                                type: "FRIEND",
                                item: I,
                                isSuggested: !0,
                            }),
                            _.numFriends++);
                    }
            })(P(E({}, t), { suggestedUserIds: i })),
            d(P(E({}, t), { includeGroupDms: !0 })),
            ((t) => {
                let { omitUserIds: e, maxRowsWithoutQuery: I, omitGuildId: n, shownUserIds: i, rows: l, counts: r } = t;
                for (let t of T.Z.getFriendIDs()) {
                    if (null != I && I > 0 && l.length >= I) break;
                    if (e.has(t) || i.has(t)) continue;
                    let _ = u.default.getUser(t);
                    !(null == _ || g(n, _.id)) &&
                        (l.push({
                            type: "FRIEND",
                            item: _,
                            isSuggested: !1,
                        }),
                        r.numFriends++);
                }
            })(t);
    } else {
        let t = {
            query: e,
            rows: o,
            counts: f,
        };
        I === s.Iq.EMBEDDED_APPLICATION &&
            ((t) => {
                let { query: e, rows: I, counts: n, inviteTargetType: i } = t;
                i === s.Iq.EMBEDDED_APPLICATION &&
                    a.ZP.queryChannels({
                        query: e,
                        limit: 3,
                        guildId: void 0,
                    }).forEach((t) => {
                        let { record: e, score: i } = t;
                        I.push({
                            type: "CHANNEL",
                            item: e,
                            isSuggested: !1,
                            score: i,
                        }),
                            n.numChannels++;
                    });
            })(P(E({}, t), { inviteTargetType: I })),
            ((t) => {
                let { query: e, omitUserIds: I, shownUserIds: n, rows: i, counts: l } = t;
                a.ZP.queryDMUsers({
                    query: e,
                    limit: 50,
                }).forEach((t) => {
                    let { record: e, score: _ } = t;
                    if (I.has(e.id)) return;
                    let T = r.Z.getDMFromUserId(e.id);
                    null != T &&
                        null != O.ZP.lastMessageId(T) &&
                        (n.add(e.id),
                        i.push({
                            type: "DM",
                            item: e,
                            isSuggested: !1,
                            score: _,
                        }),
                        l.numDms++);
                });
            })(
                P(E({}, t), {
                    omitUserIds: n,
                    shownUserIds: S,
                }),
            ),
            ((t) => {
                let { query: e, rows: I, counts: n } = t;
                a.ZP.queryGroupDMs({
                    query: e,
                    limit: 50,
                    fuzzy: !1,
                }).forEach((t) => {
                    let { record: e, score: i } = t;
                    I.push({
                        type: "GROUP_DM",
                        item: e,
                        isSuggested: !1,
                        score: i,
                    }),
                        n.numGroupDms++;
                });
            })(t),
            ((t) => {
                let { query: e, rows: I, counts: n, omitUserIds: i, shownUserIds: l } = t;
                a.ZP.queryFriends({
                    query: e,
                    limit: 500,
                    _fuzzy: !1,
                }).forEach((t) => {
                    let { record: e, score: r } = t;
                    !(i.has(e.id) || l.has(e.id)) &&
                        (l.add(e.id),
                        I.push({
                            type: "FRIEND",
                            item: e,
                            isSuggested: !1,
                            score: r,
                        }),
                        n.numFriends++);
                });
            })(
                P(E({}, t), {
                    omitUserIds: n,
                    shownUserIds: S,
                }),
            );
    }
    return {
        rows: o,
        counts: f,
    };
}
function c(t, e) {
    for (let I of N.Z.getPrivateChannelIds()) {
        let n = r.Z.getChannel(I);
        if (null == n || !n.isDM() || null == O.ZP.lastMessageId(n.id)) continue;
        let i = n.getRecipientId();
        if (null != i && !t.has(i)) {
            let t = u.default.getUser(i);
            if (null == t || t.bot || g(e, t.id)) continue;
            return t;
        }
    }
    return null;
}
function V(t) {
    let { channel: e, inviteTargetType: I, applicationId: n } = t;
    if (I === s.Iq.EMBEDDED_APPLICATION && null != e) {
        for (let t of l.ZP.getEmbeddedActivitiesForChannel(e.id)) if (t.applicationId === n) return new Set(t.userIds);
    }
    return new Set();
}
let D = "minutes",
    p = "hours",
    M = "days",
    y = "never",
    h = {
        [n.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: D,
        },
        [n.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: p,
        },
        [n.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: p,
        },
        [n.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: p,
        },
        [n.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: M,
        },
        [n.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: M,
        },
        [n.INVITE_OPTIONS_14_DAYS.value]: {
            value: 14,
            type: M,
        },
        [n.INVITE_OPTIONS_30_DAYS.value]: {
            value: 30,
            type: M,
        },
        [n.INVITE_OPTIONS_60_DAYS.value]: {
            value: 60,
            type: M,
        },
        [n.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: y,
        },
    };
function A(t, e) {
    let I = parseInt(e, 10),
        n = 0 === I,
        i = h[t].value;
    switch (h[t].type) {
        case D:
            if (n) return o.intl.string(o.t["/WbTXF"]);
            return o.intl.formatToPlainString(o.t.eDRWJC, { numUses: I });
        case p:
            if (n) return o.intl.formatToPlainString(o.t.ZVdJMz, { numHours: i });
            return o.intl.formatToPlainString(o.t.NgZgAA, {
                numHours: i,
                numUses: I,
            });
        case M:
            if (n) return o.intl.formatToPlainString(o.t.T96qsr, { numDays: i });
            return o.intl.formatToPlainString(o.t.TfuB9P, {
                numDays: i,
                numUses: I,
            });
        case y:
            if (n) return o.intl.string(o.t.QrHBnJ);
            return o.intl.formatToPlainString(o.t.yJnTxM, { numUses: I });
        default:
            return "";
    }
}
let U = [n.INVITE_OPTIONS_14_DAYS, n.INVITE_OPTIONS_30_DAYS, n.INVITE_OPTIONS_60_DAYS],
    v = {
        getMaxAgeOptionByValue: function (t) {
            return [...n.MAX_AGE_OPTIONS, ...U].find((e) => e.value === t) || null;
        },
        getMaxAgeOptions: function (t) {
            return n.MAX_AGE_OPTIONS.filter((e) => {
                var I, n;
                return (
                    !U.includes(e) ||
                    (null == t || null == (n = t.includeExperimentalValues) || null == (I = n.includes)
                        ? void 0
                        : I.call(n, e.value))
                );
            });
        },
        getMaxUsesOptions: n.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_14_DAYS: n.INVITE_OPTIONS_14_DAYS,
        INVITE_OPTIONS_30_DAYS: n.INVITE_OPTIONS_30_DAYS,
        INVITE_OPTIONS_60_DAYS: n.INVITE_OPTIONS_60_DAYS,
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
        INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES,
    };
