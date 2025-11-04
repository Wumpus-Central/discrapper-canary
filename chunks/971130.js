let I;
n.d(t, {
    Qq: () => c,
    Sz: () => D,
    Vg: () => A,
    ZP: () => R,
    an: () => g,
    bm: () => f,
    rh: () => p,
}),
    n(539854),
    n(388685);
var i,
    l = n(317381),
    r = n(592125),
    _ = n(271383),
    u = n(306680),
    O = n(699516),
    T = n(594174),
    a = n(55589),
    N = n(483360),
    s = n(981631),
    S = n(245335),
    o = n(388032);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            I = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (I = I.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            I.forEach(function (t) {
                var I;
                (I = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: I,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = I);
            });
    }
    return e;
}
function E(e, t) {
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
var f = (((i = {}).GROUP_DM = "GROUP_DM"), (i.DM = "DM"), (i.FRIEND = "FRIEND"), (i.CHANNEL = "CHANNEL"), i);
let d = (e, t) => null != e && _.ZP.isMember(e, t),
    m = (e) => {
        let {
                omitUserIds: t,
                maxRowsWithoutQuery: n,
                omitGuildId: I,
                shownUserIds: i,
                rows: l,
                counts: _,
                includeGroupDms: O,
                limit: N,
            } = e,
            S = 0;
        for (let e of a.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && l.length >= n) || (null != N && S >= N)) break;
            let a = r.Z.getChannel(e);
            if (null == a || !a.isPrivate()) continue;
            if (O && a.type === s.d4z.GROUP_DM) {
                l.push({
                    type: "GROUP_DM",
                    item: a,
                    isSuggested: !1,
                }),
                    _.numGroupDms++,
                    S++;
                continue;
            }
            if (null == u.ZP.lastMessageId(a.id)) continue;
            let o = a.getRecipientId();
            if (null != o && !t.has(o) && !i.has(o)) {
                let e = T.default.getUser(o);
                if (null == e || e.bot || d(I, e.id)) continue;
                i.add(e.id),
                    l.push({
                        type: "DM",
                        item: e,
                        isSuggested: !1,
                    }),
                    _.numDms++,
                    S++;
            }
        }
    };
function g(e) {
    let {
            query: t,
            inviteTargetType: n,
            omitUserIds: I,
            suggestedUserIds: i,
            suggestedChannelIds: l,
            maxRowsWithoutQuery: _,
            omitGuildId: a,
        } = e,
        s = new Set(),
        o = [],
        f = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0,
        };
    if ("" === t) {
        let e = {
            omitUserIds: I,
            maxRowsWithoutQuery: _,
            omitGuildId: a,
            shownUserIds: s,
            rows: o,
            counts: f,
        };
        n === S.Iq.EMBEDDED_APPLICATION &&
            (m(
                E(P({}, e), {
                    includeGroupDms: !1,
                    limit: 1,
                }),
            ),
            ((e) => {
                let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: I, counts: i } = e;
                if (null != t)
                    for (let e of t) {
                        if (null != n && n > 0 && I.length >= n) break;
                        let t = r.Z.getChannel(e);
                        null != t &&
                            (I.push({
                                type: "CHANNEL",
                                item: t,
                                isSuggested: !0,
                            }),
                            i.numChannels++);
                    }
            })(E(P({}, e), { suggestedChannelIds: l }))),
            ((e) => {
                let {
                    omitUserIds: t,
                    suggestedUserIds: n,
                    maxRowsWithoutQuery: I,
                    omitGuildId: i,
                    shownUserIds: l,
                    rows: r,
                    counts: _,
                } = e;
                if (null != n)
                    for (let e of n) {
                        if (null != I && I > 0 && r.length >= I) break;
                        if (t.has(e) || l.has(e)) continue;
                        let n = T.default.getUser(e);
                        !(null == n || d(i, n.id)) &&
                            (l.add(n.id),
                            r.push({
                                type: "FRIEND",
                                item: n,
                                isSuggested: !0,
                            }),
                            _.numFriends++);
                    }
            })(E(P({}, e), { suggestedUserIds: i })),
            m(E(P({}, e), { includeGroupDms: !0 })),
            ((e) => {
                let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: I, shownUserIds: i, rows: l, counts: r } = e;
                for (let e of O.Z.getFriendIDs()) {
                    if (null != n && n > 0 && l.length >= n) break;
                    if (t.has(e) || i.has(e)) continue;
                    let _ = T.default.getUser(e);
                    !(null == _ || d(I, _.id)) &&
                        (l.push({
                            type: "FRIEND",
                            item: _,
                            isSuggested: !1,
                        }),
                        r.numFriends++);
                }
            })(e);
    } else {
        let e = {
            query: t,
            rows: o,
            counts: f,
        };
        n === S.Iq.EMBEDDED_APPLICATION &&
            ((e) => {
                let { query: t, rows: n, counts: I, inviteTargetType: i } = e;
                i === S.Iq.EMBEDDED_APPLICATION &&
                    N.ZP.queryChannels({
                        query: t,
                        limit: 3,
                        guildId: void 0,
                    }).forEach((e) => {
                        let { record: t, score: i } = e;
                        n.push({
                            type: "CHANNEL",
                            item: t,
                            isSuggested: !1,
                            score: i,
                        }),
                            I.numChannels++;
                    });
            })(E(P({}, e), { inviteTargetType: n })),
            ((e) => {
                let { query: t, rows: n, counts: I, omitUserIds: i, shownUserIds: l, suggestedUserIds: r } = e;
                if (null == r) return;
                let _ = [];
                for (let e of r) {
                    if (i.has(e) || l.has(e)) continue;
                    let t = T.default.getUser(e);
                    null != t && _.push(t);
                }
                N.ZP.queryMemberList({
                    query: t,
                    members: _,
                    limit: 10,
                }).forEach((e) => {
                    let { record: t, score: i } = e;
                    l.add(t.id),
                        n.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !0,
                            score: i,
                        }),
                        I.numFriends++;
                });
            })(
                E(P({}, e), {
                    omitUserIds: I,
                    shownUserIds: s,
                    suggestedUserIds: i,
                }),
            ),
            ((e) => {
                let { query: t, omitUserIds: n, shownUserIds: I, rows: i, counts: l } = e;
                N.ZP.queryDMUsers({
                    query: t,
                    limit: 50,
                }).forEach((e) => {
                    let { record: t, score: _ } = e;
                    if (n.has(t.id) || I.has(t.id)) return;
                    let O = r.Z.getDMFromUserId(t.id);
                    null != O &&
                        null != u.ZP.lastMessageId(O) &&
                        (I.add(t.id),
                        i.push({
                            type: "DM",
                            item: t,
                            isSuggested: !1,
                            score: _,
                        }),
                        l.numDms++);
                });
            })(
                E(P({}, e), {
                    omitUserIds: I,
                    shownUserIds: s,
                }),
            ),
            ((e) => {
                let { query: t, rows: n, counts: I } = e;
                N.ZP.queryGroupDMs({
                    query: t,
                    limit: 50,
                    fuzzy: !1,
                }).forEach((e) => {
                    let { record: t, score: i } = e;
                    n.push({
                        type: "GROUP_DM",
                        item: t,
                        isSuggested: !1,
                        score: i,
                    }),
                        I.numGroupDms++;
                });
            })(e),
            ((e) => {
                let { query: t, rows: n, counts: I, omitUserIds: i, shownUserIds: l } = e;
                N.ZP.queryFriends({
                    query: t,
                    limit: 500,
                    _fuzzy: !1,
                }).forEach((e) => {
                    let { record: t, score: r } = e;
                    !i.has(t.id) &&
                        !l.has(t.id) &&
                        (l.add(t.id),
                        n.push({
                            type: "FRIEND",
                            item: t,
                            isSuggested: !1,
                            score: r,
                        }),
                        I.numFriends++);
                });
            })(
                E(P({}, e), {
                    omitUserIds: I,
                    shownUserIds: s,
                }),
            );
    }
    return {
        rows: o,
        counts: f,
    };
}
function c(e, t) {
    let [n, I] = [[], []];
    for (let i of e)
        switch (i.type) {
            case "FRIEND":
            case "DM":
                d(t, i.item.id) ? n.push(i) : I.push(i);
                break;
            case "CHANNEL":
            case "GROUP_DM":
                I.push(i);
        }
    return [n, I];
}
function p(e, t) {
    for (let n of a.Z.getPrivateChannelIds()) {
        let I = r.Z.getChannel(n);
        if (null == I || !I.isDM() || null == u.ZP.lastMessageId(I.id)) continue;
        let i = I.getRecipientId();
        if (null != i && !e.has(i)) {
            let e = T.default.getUser(i);
            if (null == e || e.bot || d(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function D(e) {
    let { channel: t, inviteTargetType: n, applicationId: I } = e;
    if (n === S.Iq.EMBEDDED_APPLICATION && null != t) {
        for (let e of l.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === I) return new Set(e.userIds);
    }
    return new Set();
}
let V = "minutes",
    h = "hours",
    y = "days",
    M = "never",
    U = {
        [I.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: V,
        },
        [I.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: h,
        },
        [I.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: h,
        },
        [I.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: h,
        },
        [I.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: y,
        },
        [I.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: y,
        },
        [I.INVITE_OPTIONS_14_DAYS.value]: {
            value: 14,
            type: y,
        },
        [I.INVITE_OPTIONS_30_DAYS.value]: {
            value: 30,
            type: y,
        },
        [I.INVITE_OPTIONS_60_DAYS.value]: {
            value: 60,
            type: y,
        },
        [I.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: M,
        },
    };
function A(e, t) {
    let n = parseInt(t, 10),
        I = 0 === n,
        i = U[e].value;
    switch (U[e].type) {
        case V:
            if (I) return o.intl.string(o.t["/WbTXD"]);
            return o.intl.formatToPlainString(o.t.eDRWJK, { numUses: n });
        case h:
            if (I) return o.intl.formatToPlainString(o.t.ZVdJMy, { numHours: i });
            return o.intl.formatToPlainString(o.t.NgZgAB, {
                numHours: i,
                numUses: n,
            });
        case y:
            if (I) return o.intl.formatToPlainString(o.t.T96qss, { numDays: i });
            return o.intl.formatToPlainString(o.t.TfuB9B, {
                numDays: i,
                numUses: n,
            });
        case M:
            if (I) return o.intl.string(o.t.QrHBnC);
            return o.intl.formatToPlainString(o.t.yJnTxI, { numUses: n });
        default:
            return "";
    }
}
let v = [I.INVITE_OPTIONS_14_DAYS, I.INVITE_OPTIONS_30_DAYS, I.INVITE_OPTIONS_60_DAYS],
    R = {
        getMaxAgeOptionByValue: function (e) {
            return [...I.MAX_AGE_OPTIONS, ...v].find((t) => t.value === e) || null;
        },
        getMaxAgeOptions: function (e) {
            return I.MAX_AGE_OPTIONS.filter((t) => {
                var n, I;
                return (
                    !v.includes(t) ||
                    (null == e || null == (I = e.includeExperimentalValues) || null == (n = I.includes)
                        ? void 0
                        : n.call(I, t.value))
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
