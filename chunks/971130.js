let I;
n.d(e, {
    Qq: () => c,
    Sz: () => D,
    Vg: () => U,
    ZP: () => R,
    an: () => m,
    bm: () => f,
    rh: () => p,
}),
    n(539854),
    n(388685);
var i,
    l = n(317381),
    r = n(592125),
    _ = n(271383),
    O = n(306680),
    u = n(699516),
    T = n(594174),
    N = n(55589),
    a = n(483360),
    S = n(981631),
    s = n(245335),
    o = n(388032);
function E(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            I = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (I = I.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            I.forEach(function (e) {
                var I;
                (I = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: I,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = I);
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
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var I = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, I);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
I = n(603617);
var f = (((i = {}).GROUP_DM = "GROUP_DM"), (i.DM = "DM"), (i.FRIEND = "FRIEND"), (i.CHANNEL = "CHANNEL"), i);
let d = (t, e) => null != t && _.ZP.isMember(t, e),
    g = (t) => {
        let {
                omitUserIds: e,
                maxRowsWithoutQuery: n,
                omitGuildId: I,
                shownUserIds: i,
                rows: l,
                counts: _,
                includeGroupDms: u,
                limit: a,
            } = t,
            s = 0;
        for (let t of N.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && l.length >= n) || (null != a && s >= a)) break;
            let N = r.Z.getChannel(t);
            if (null == N || !N.isPrivate()) continue;
            if (u && N.type === S.d4z.GROUP_DM) {
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
                let t = T.default.getUser(o);
                if (null == t || t.bot || d(I, t.id)) continue;
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
            inviteTargetType: n,
            omitUserIds: I,
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
            omitUserIds: I,
            maxRowsWithoutQuery: _,
            omitGuildId: N,
            shownUserIds: S,
            rows: o,
            counts: f,
        };
        n === s.Iq.EMBEDDED_APPLICATION &&
            (g(
                P(E({}, t), {
                    includeGroupDms: !1,
                    limit: 1,
                }),
            ),
            ((t) => {
                let { suggestedChannelIds: e, maxRowsWithoutQuery: n, rows: I, counts: i } = t;
                if (null != e)
                    for (let t of e) {
                        if (null != n && n > 0 && I.length >= n) break;
                        let e = r.Z.getChannel(t);
                        null != e &&
                            (I.push({
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
                    suggestedUserIds: n,
                    maxRowsWithoutQuery: I,
                    omitGuildId: i,
                    shownUserIds: l,
                    rows: r,
                    counts: _,
                } = t;
                if (null != n)
                    for (let t of n) {
                        if (null != I && I > 0 && r.length >= I) break;
                        if (e.has(t) || l.has(t)) continue;
                        let n = T.default.getUser(t);
                        !(null == n || d(i, n.id)) &&
                            (l.add(n.id),
                            r.push({
                                type: "FRIEND",
                                item: n,
                                isSuggested: !0,
                            }),
                            _.numFriends++);
                    }
            })(P(E({}, t), { suggestedUserIds: i })),
            g(P(E({}, t), { includeGroupDms: !0 })),
            ((t) => {
                let { omitUserIds: e, maxRowsWithoutQuery: n, omitGuildId: I, shownUserIds: i, rows: l, counts: r } = t;
                for (let t of u.Z.getFriendIDs()) {
                    if (null != n && n > 0 && l.length >= n) break;
                    if (e.has(t) || i.has(t)) continue;
                    let _ = T.default.getUser(t);
                    !(null == _ || d(I, _.id)) &&
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
        n === s.Iq.EMBEDDED_APPLICATION &&
            ((t) => {
                let { query: e, rows: n, counts: I, inviteTargetType: i } = t;
                i === s.Iq.EMBEDDED_APPLICATION &&
                    a.ZP.queryChannels({
                        query: e,
                        limit: 3,
                        guildId: void 0,
                    }).forEach((t) => {
                        let { record: e, score: i } = t;
                        n.push({
                            type: "CHANNEL",
                            item: e,
                            isSuggested: !1,
                            score: i,
                        }),
                            I.numChannels++;
                    });
            })(P(E({}, t), { inviteTargetType: n })),
            ((t) => {
                let { query: e, omitUserIds: n, shownUserIds: I, rows: i, counts: l } = t;
                a.ZP.queryDMUsers({
                    query: e,
                    limit: 50,
                }).forEach((t) => {
                    let { record: e, score: _ } = t;
                    if (n.has(e.id)) return;
                    let u = r.Z.getDMFromUserId(e.id);
                    null != u &&
                        null != O.ZP.lastMessageId(u) &&
                        (I.add(e.id),
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
                    omitUserIds: I,
                    shownUserIds: S,
                }),
            ),
            ((t) => {
                let { query: e, rows: n, counts: I } = t;
                a.ZP.queryGroupDMs({
                    query: e,
                    limit: 50,
                    fuzzy: !1,
                }).forEach((t) => {
                    let { record: e, score: i } = t;
                    n.push({
                        type: "GROUP_DM",
                        item: e,
                        isSuggested: !1,
                        score: i,
                    }),
                        I.numGroupDms++;
                });
            })(t),
            ((t) => {
                let { query: e, rows: n, counts: I, omitUserIds: i, shownUserIds: l } = t;
                a.ZP.queryFriends({
                    query: e,
                    limit: 500,
                    _fuzzy: !1,
                }).forEach((t) => {
                    let { record: e, score: r } = t;
                    !(i.has(e.id) || l.has(e.id)) &&
                        (l.add(e.id),
                        n.push({
                            type: "FRIEND",
                            item: e,
                            isSuggested: !1,
                            score: r,
                        }),
                        I.numFriends++);
                });
            })(
                P(E({}, t), {
                    omitUserIds: I,
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
    let [n, I] = [[], []];
    for (let i of t)
        switch (i.type) {
            case "FRIEND":
            case "DM":
                d(e, i.item.id) ? n.push(i) : I.push(i);
                break;
            case "CHANNEL":
            case "GROUP_DM":
                I.push(i);
        }
    return [n, I];
}
function p(t, e) {
    for (let n of N.Z.getPrivateChannelIds()) {
        let I = r.Z.getChannel(n);
        if (null == I || !I.isDM() || null == O.ZP.lastMessageId(I.id)) continue;
        let i = I.getRecipientId();
        if (null != i && !t.has(i)) {
            let t = T.default.getUser(i);
            if (null == t || t.bot || d(e, t.id)) continue;
            return t;
        }
    }
    return null;
}
function D(t) {
    let { channel: e, inviteTargetType: n, applicationId: I } = t;
    if (n === s.Iq.EMBEDDED_APPLICATION && null != e) {
        for (let t of l.ZP.getEmbeddedActivitiesForChannel(e.id)) if (t.applicationId === I) return new Set(t.userIds);
    }
    return new Set();
}
let V = "minutes",
    M = "hours",
    h = "days",
    y = "never",
    A = {
        [I.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: V,
        },
        [I.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: M,
        },
        [I.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: M,
        },
        [I.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: M,
        },
        [I.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: h,
        },
        [I.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: h,
        },
        [I.INVITE_OPTIONS_14_DAYS.value]: {
            value: 14,
            type: h,
        },
        [I.INVITE_OPTIONS_30_DAYS.value]: {
            value: 30,
            type: h,
        },
        [I.INVITE_OPTIONS_60_DAYS.value]: {
            value: 60,
            type: h,
        },
        [I.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: y,
        },
    };
function U(t, e) {
    let n = parseInt(e, 10),
        I = 0 === n,
        i = A[t].value;
    switch (A[t].type) {
        case V:
            if (I) return o.intl.string(o.t["/WbTXF"]);
            return o.intl.formatToPlainString(o.t.eDRWJC, { numUses: n });
        case M:
            if (I) return o.intl.formatToPlainString(o.t.ZVdJMz, { numHours: i });
            return o.intl.formatToPlainString(o.t.NgZgAA, {
                numHours: i,
                numUses: n,
            });
        case h:
            if (I) return o.intl.formatToPlainString(o.t.T96qsr, { numDays: i });
            return o.intl.formatToPlainString(o.t.TfuB9P, {
                numDays: i,
                numUses: n,
            });
        case y:
            if (I) return o.intl.string(o.t.QrHBnJ);
            return o.intl.formatToPlainString(o.t.yJnTxM, { numUses: n });
        default:
            return "";
    }
}
let v = [I.INVITE_OPTIONS_14_DAYS, I.INVITE_OPTIONS_30_DAYS, I.INVITE_OPTIONS_60_DAYS],
    R = {
        getMaxAgeOptionByValue: function (t) {
            return [...I.MAX_AGE_OPTIONS, ...v].find((e) => e.value === t) || null;
        },
        getMaxAgeOptions: function (t) {
            return I.MAX_AGE_OPTIONS.filter((e) => {
                var n, I;
                return (
                    !v.includes(e) ||
                    (null == t || null == (I = t.includeExperimentalValues) || null == (n = I.includes)
                        ? void 0
                        : n.call(I, e.value))
                );
            });
        },
        getMaxUsesOptions: I.MAX_USES_OPTIONS,
        INVITE_OPTIONS_FOREVER: I.INVITE_OPTIONS_FOREVER,
        INVITE_OPTIONS_1_DAY: I.INVITE_OPTIONS_1_DAY,
        INVITE_OPTIONS_7_DAYS: I.INVITE_OPTIONS_7_DAYS,
        INVITE_OPTIONS_14_DAYS: I.INVITE_OPTIONS_14_DAYS,
        INVITE_OPTIONS_30_DAYS: I.INVITE_OPTIONS_30_DAYS,
        INVITE_OPTIONS_60_DAYS: I.INVITE_OPTIONS_60_DAYS,
        INVITE_OPTIONS_12_HOURS: I.INVITE_OPTIONS_12_HOURS,
        INVITE_OPTIONS_6_HOURS: I.INVITE_OPTIONS_6_HOURS,
        INVITE_OPTIONS_8_HOURS: I.INVITE_OPTIONS_8_HOURS,
        INVITE_OPTIONS_1_HOUR: I.INVITE_OPTIONS_1_HOUR,
        INVITE_OPTIONS_30_MINUTES: I.INVITE_OPTIONS_30_MINUTES,
        INVITE_OPTIONS_UNLIMITED: I.INVITE_OPTIONS_UNLIMITED,
        INVITE_OPTIONS_ONCE: I.INVITE_OPTIONS_ONCE,
        INVITE_OPTIONS_5_TIMES: I.INVITE_OPTIONS_5_TIMES,
        INVITE_OPTIONS_10_TIMES: I.INVITE_OPTIONS_10_TIMES,
        INVITE_OPTIONS_25_TIMES: I.INVITE_OPTIONS_25_TIMES,
        INVITE_OPTIONS_50_TIMES: I.INVITE_OPTIONS_50_TIMES,
        INVITE_OPTIONS_100_TIMES: I.INVITE_OPTIONS_100_TIMES,
    };
