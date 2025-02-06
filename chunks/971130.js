let i;
n.d(t, {
    Sz: () => D,
    Vg: () => U,
    ZP: () => v,
    an: () => M,
    bm: () => N,
    rh: () => R
}),
    n(653041),
    n(47120);
var r,
    a = n(317381),
    _ = n(592125),
    l = n(271383),
    o = n(306680),
    I = n(699516),
    s = n(594174),
    u = n(55589),
    T = n(483360),
    d = n(981631),
    S = n(245335),
    O = n(388032);
i = n(603617);
var N = (((r = {}).GROUP_DM = 'GROUP_DM'), (r.DM = 'DM'), (r.FRIEND = 'FRIEND'), (r.CHANNEL = 'CHANNEL'), r);
let E = (e, t) => null != e && l.ZP.isMember(e, t),
    m = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: i, omitGuildId: r, shownUserIds: a, rows: _, counts: l } = e;
        if (null != n)
            for (let e of n) {
                if (null != i && i > 0 && _.length >= i) break;
                if (t.has(e) || a.has(e)) continue;
                let n = s.default.getUser(e);
                !(null == n || E(r, n.id)) &&
                    (a.add(n.id),
                    _.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    l.numFriends++);
            }
    },
    P = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: i, counts: r } = e;
        if (null != t)
            for (let e of t) {
                if (null != n && n > 0 && i.length >= n) break;
                let t = _.Z.getChannel(e);
                null != t &&
                    (i.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    r.numChannels++);
            }
    },
    g = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: i, shownUserIds: r, rows: a, counts: l, includeGroupDms: I, limit: T } = e,
            S = 0;
        for (let e of u.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && a.length >= n) || (null != T && S >= T)) break;
            let u = _.Z.getChannel(e);
            if (null == u || !u.isPrivate()) continue;
            if (I && u.type === d.d4z.GROUP_DM) {
                a.push({
                    type: 'GROUP_DM',
                    item: u,
                    isSuggested: !1
                }),
                    l.numGroupDms++,
                    S++;
                continue;
            }
            if (null == o.ZP.lastMessageId(u.id)) continue;
            let O = u.getRecipientId();
            if (null != O && !t.has(O) && !r.has(O)) {
                let e = s.default.getUser(O);
                if (null == e || e.bot || E(i, e.id)) continue;
                r.add(e.id),
                    a.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    l.numDms++,
                    S++;
            }
        }
    },
    h = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: i, shownUserIds: r, rows: a, counts: _ } = e;
        for (let e of I.Z.getFriendIDs()) {
            if (null != n && n > 0 && a.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let l = s.default.getUser(e);
            !(null == l || E(i, l.id)) &&
                (a.push({
                    type: 'FRIEND',
                    item: l,
                    isSuggested: !1
                }),
                _.numFriends++);
        }
    },
    c = (e) => {
        let { query: t, rows: n, counts: i, inviteTargetType: r } = e;
        r === S.Iq.EMBEDDED_APPLICATION &&
            T.ZP.queryChannels({
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
                    i.numChannels++;
            });
    },
    f = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: i, rows: r, counts: a } = e;
        T.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let l = _.Z.getDMFromUserId(t.id);
            null != l &&
                null != o.ZP.lastMessageId(l) &&
                (i.add(t.id),
                r.push({
                    type: 'DM',
                    item: t,
                    isSuggested: !1
                }),
                a.numDms++);
        });
    },
    p = (e) => {
        let { query: t, rows: n, counts: i } = e;
        T.ZP.queryGroupDMs({
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
                i.numGroupDms++;
        });
    },
    b = (e) => {
        let { query: t, rows: n, counts: i, omitUserIds: r, shownUserIds: a } = e;
        T.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            !(r.has(t.id) || a.has(t.id)) &&
                (a.add(t.id),
                n.push({
                    type: 'FRIEND',
                    item: t,
                    isSuggested: !1
                }),
                i.numFriends++);
        });
    };
function M(e) {
    let { query: t, inviteTargetType: n, omitUserIds: i, suggestedUserIds: r, suggestedChannelIds: a, maxRowsWithoutQuery: _, omitGuildId: l } = e,
        o = new Set(),
        I = [],
        s = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === t) {
        let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: _,
            omitGuildId: l,
            shownUserIds: o,
            rows: I,
            counts: s
        };
        n === S.Iq.EMBEDDED_APPLICATION &&
            (g({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            P({
                ...e,
                suggestedChannelIds: a
            })),
            m({
                ...e,
                suggestedUserIds: r
            }),
            g({
                ...e,
                includeGroupDms: !0
            }),
            h(e);
    } else {
        let e = {
            query: t,
            rows: I,
            counts: s
        };
        n === S.Iq.EMBEDDED_APPLICATION &&
            c({
                ...e,
                inviteTargetType: n
            }),
            f({
                ...e,
                omitUserIds: i,
                shownUserIds: o
            }),
            p(e),
            b({
                ...e,
                omitUserIds: i,
                shownUserIds: o
            });
    }
    return {
        rows: I,
        counts: s
    };
}
function R(e, t) {
    for (let n of u.Z.getPrivateChannelIds()) {
        let i = _.Z.getChannel(n);
        if (null == i || !i.isDM() || null == o.ZP.lastMessageId(i.id)) continue;
        let r = i.getRecipientId();
        if (null != r && !e.has(r)) {
            let e = s.default.getUser(r);
            if (null == e || e.bot || E(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function D(e) {
    let { channel: t, inviteTargetType: n, applicationId: i } = e;
    if (n === S.Iq.EMBEDDED_APPLICATION && null != t) {
        for (let e of a.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === i) return new Set(e.userIds);
    }
    return new Set();
}
let V = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    C = {
        [i.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: V.MINUTES
        },
        [i.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: V.HOURS
        },
        [i.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: V.HOURS
        },
        [i.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: V.HOURS
        },
        [i.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: V.DAYS
        },
        [i.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: V.DAYS
        },
        [i.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: V.NEVER
        }
    };
function U(e, t) {
    let n = parseInt(t, 10),
        i = 0 === n,
        r = C[e].value;
    switch (C[e].type) {
        case V.MINUTES:
            if (i) return O.intl.string(O.t['/WbTXF']);
            return O.intl.formatToPlainString(O.t.eDRWJC, { numUses: n });
        case V.HOURS:
            if (i) return O.intl.formatToPlainString(O.t.ZVdJMz, { numHours: r });
            return O.intl.formatToPlainString(O.t.NgZgAA, {
                numHours: r,
                numUses: n
            });
        case V.DAYS:
            if (i) return O.intl.formatToPlainString(O.t.T96qsr, { numDays: r });
            return O.intl.formatToPlainString(O.t.TfuB9P, {
                numDays: r,
                numUses: n
            });
        case V.NEVER:
            if (i) return O.intl.string(O.t.QrHBnJ);
            return O.intl.formatToPlainString(O.t.yJnTxM, { numUses: n });
        default:
            return '';
    }
}
let v = {
    getMaxAgeOptions: i.MAX_AGE_OPTIONS,
    getMaxUsesOptions: i.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: i.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: i.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: i.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: i.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: i.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_1_HOUR: i.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: i.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: i.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: i.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: i.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: i.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: i.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: i.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: i.INVITE_OPTIONS_100_TIMES
};
