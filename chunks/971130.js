let a;
n.d(t, {
    Sz: () => v,
    Vg: () => x,
    ZP: () => R,
    an: () => U,
    bm: () => f,
    rh: () => D
}),
    n(653041),
    n(47120);
var i,
    o = n(317381),
    r = n(592125),
    _ = n(271383),
    l = n(306680),
    I = n(699516),
    d = n(594174),
    s = n(55589),
    u = n(483360),
    c = n(981631),
    T = n(245335),
    S = n(388032);
a = n(603617);
var f = (((i = {}).GROUP_DM = 'GROUP_DM'), (i.DM = 'DM'), (i.FRIEND = 'FRIEND'), (i.CHANNEL = 'CHANNEL'), i);
let O = (e, t) => null != e && _.ZP.isMember(e, t),
    m = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: a, omitGuildId: i, shownUserIds: o, rows: r, counts: _ } = e;
        if (null != n)
            for (let e of n) {
                if (null != a && a > 0 && r.length >= a) break;
                if (t.has(e) || o.has(e)) continue;
                let n = d.default.getUser(e);
                !(null == n || O(i, n.id)) &&
                    (o.add(n.id),
                    r.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    _.numFriends++);
            }
    },
    N = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: a, counts: i } = e;
        if (null != t)
            for (let e of t) {
                if (null != n && n > 0 && a.length >= n) break;
                let t = r.Z.getChannel(e);
                null != t &&
                    (a.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    i.numChannels++);
            }
    },
    p = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: a, shownUserIds: i, rows: o, counts: _, includeGroupDms: I, limit: u } = e,
            T = 0;
        for (let e of s.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && o.length >= n) || (null != u && T >= u)) break;
            let s = r.Z.getChannel(e);
            if (null == s || !s.isPrivate()) continue;
            if (I && s.type === c.d4z.GROUP_DM) {
                o.push({
                    type: 'GROUP_DM',
                    item: s,
                    isSuggested: !1
                }),
                    _.numGroupDms++,
                    T++;
                continue;
            }
            if (null == l.ZP.lastMessageId(s.id)) continue;
            let S = s.getRecipientId();
            if (null != S && !t.has(S) && !i.has(S)) {
                let e = d.default.getUser(S);
                if (null == e || e.bot || O(a, e.id)) continue;
                i.add(e.id),
                    o.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    _.numDms++,
                    T++;
            }
        }
    },
    E = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: a, shownUserIds: i, rows: o, counts: r } = e;
        for (let e of I.Z.getFriendIDs()) {
            if (null != n && n > 0 && o.length >= n) break;
            if (t.has(e) || i.has(e)) continue;
            let _ = d.default.getUser(e);
            !(null == _ || O(a, _.id)) &&
                (o.push({
                    type: 'FRIEND',
                    item: _,
                    isSuggested: !1
                }),
                r.numFriends++);
        }
    },
    b = (e) => {
        let { query: t, rows: n, counts: a, inviteTargetType: i } = e;
        i === T.Iq.EMBEDDED_APPLICATION &&
            u.ZP.queryChannels({
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
                    a.numChannels++;
            });
    },
    g = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: a, rows: i, counts: o } = e;
        u.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let _ = r.Z.getDMFromUserId(t.id);
            null != _ &&
                null != l.ZP.lastMessageId(_) &&
                (a.add(t.id),
                i.push({
                    type: 'DM',
                    item: t,
                    isSuggested: !1
                }),
                o.numDms++);
        });
    },
    P = (e) => {
        let { query: t, rows: n, counts: a } = e;
        u.ZP.queryGroupDMs({
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
                a.numGroupDms++;
        });
    },
    h = (e) => {
        let { query: t, rows: n, counts: a, omitUserIds: i, shownUserIds: o } = e;
        u.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            !(i.has(t.id) || o.has(t.id)) &&
                (o.add(t.id),
                n.push({
                    type: 'FRIEND',
                    item: t,
                    isSuggested: !1
                }),
                a.numFriends++);
        });
    };
function U(e) {
    let { query: t, inviteTargetType: n, omitUserIds: a, suggestedUserIds: i, suggestedChannelIds: o, maxRowsWithoutQuery: r, omitGuildId: _ } = e,
        l = new Set(),
        I = [],
        d = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === t) {
        let e = {
            omitUserIds: a,
            maxRowsWithoutQuery: r,
            omitGuildId: _,
            shownUserIds: l,
            rows: I,
            counts: d
        };
        n === T.Iq.EMBEDDED_APPLICATION &&
            (p({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            N({
                ...e,
                suggestedChannelIds: o
            })),
            m({
                ...e,
                suggestedUserIds: i
            }),
            p({
                ...e,
                includeGroupDms: !0
            }),
            E(e);
    } else {
        let e = {
            query: t,
            rows: I,
            counts: d
        };
        n === T.Iq.EMBEDDED_APPLICATION &&
            b({
                ...e,
                inviteTargetType: n
            }),
            g({
                ...e,
                omitUserIds: a,
                shownUserIds: l
            }),
            P(e),
            h({
                ...e,
                omitUserIds: a,
                shownUserIds: l
            });
    }
    return {
        rows: I,
        counts: d
    };
}
function D(e, t) {
    for (let n of s.Z.getPrivateChannelIds()) {
        let a = r.Z.getChannel(n);
        if (null == a || !a.isDM() || null == l.ZP.lastMessageId(a.id)) continue;
        let i = a.getRecipientId();
        if (null != i && !e.has(i)) {
            let e = d.default.getUser(i);
            if (null == e || e.bot || O(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function v(e) {
    let { channel: t, inviteTargetType: n, applicationId: a } = e;
    if (n === T.Iq.EMBEDDED_APPLICATION && null != t) {
        for (let e of o.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === a) return new Set(e.userIds);
    }
    return new Set();
}
let M = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    C = {
        [a.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: M.MINUTES
        },
        [a.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: M.HOURS
        },
        [a.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: M.HOURS
        },
        [a.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: M.HOURS
        },
        [a.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: M.DAYS
        },
        [a.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: M.DAYS
        },
        [a.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: M.NEVER
        }
    };
function x(e, t) {
    let n = parseInt(t, 10),
        a = 0 === n,
        i = C[e].value;
    switch (C[e].type) {
        case M.MINUTES:
            if (a) return S.intl.string(S.t['/WbTXF']);
            return S.intl.formatToPlainString(S.t.eDRWJC, { numUses: n });
        case M.HOURS:
            if (a) return S.intl.formatToPlainString(S.t.ZVdJMz, { numHours: i });
            return S.intl.formatToPlainString(S.t.NgZgAA, {
                numHours: i,
                numUses: n
            });
        case M.DAYS:
            if (a) return S.intl.formatToPlainString(S.t.T96qsr, { numDays: i });
            return S.intl.formatToPlainString(S.t.TfuB9P, {
                numDays: i,
                numUses: n
            });
        case M.NEVER:
            if (a) return S.intl.string(S.t.QrHBnJ);
            return S.intl.formatToPlainString(S.t.yJnTxM, { numUses: n });
        default:
            return '';
    }
}
let R = {
    getMaxAgeOptions: a.MAX_AGE_OPTIONS,
    getMaxUsesOptions: a.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: a.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: a.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: a.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: a.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: a.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_1_HOUR: a.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: a.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: a.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: a.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: a.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: a.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: a.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: a.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: a.INVITE_OPTIONS_100_TIMES
};
