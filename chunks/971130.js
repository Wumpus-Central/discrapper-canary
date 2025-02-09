let a;
n.d(t, {
    Sz: () => v,
    Vg: () => x,
    ZP: () => R,
    an: () => U,
    bm: () => S,
    rh: () => D
}),
    n(653041),
    n(47120);
var i,
    _ = n(317381),
    r = n(592125),
    o = n(271383),
    l = n(306680),
    I = n(699516),
    d = n(594174),
    u = n(55589),
    s = n(483360),
    c = n(981631),
    T = n(245335),
    f = n(388032);
a = n(603617);
var S = (((i = {}).GROUP_DM = 'GROUP_DM'), (i.DM = 'DM'), (i.FRIEND = 'FRIEND'), (i.CHANNEL = 'CHANNEL'), i);
let N = (e, t) => null != e && o.ZP.isMember(e, t),
    O = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: a, omitGuildId: i, shownUserIds: _, rows: r, counts: o } = e;
        if (null != n)
            for (let e of n) {
                if (null != a && a > 0 && r.length >= a) break;
                if (t.has(e) || _.has(e)) continue;
                let n = d.default.getUser(e);
                !(null == n || N(i, n.id)) &&
                    (_.add(n.id),
                    r.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    o.numFriends++);
            }
    },
    m = (e) => {
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
    b = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: a, shownUserIds: i, rows: _, counts: o, includeGroupDms: I, limit: s } = e,
            T = 0;
        for (let e of u.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && _.length >= n) || (null != s && T >= s)) break;
            let u = r.Z.getChannel(e);
            if (null == u || !u.isPrivate()) continue;
            if (I && u.type === c.d4z.GROUP_DM) {
                _.push({
                    type: 'GROUP_DM',
                    item: u,
                    isSuggested: !1
                }),
                    o.numGroupDms++,
                    T++;
                continue;
            }
            if (null == l.ZP.lastMessageId(u.id)) continue;
            let f = u.getRecipientId();
            if (null != f && !t.has(f) && !i.has(f)) {
                let e = d.default.getUser(f);
                if (null == e || e.bot || N(a, e.id)) continue;
                i.add(e.id),
                    _.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    o.numDms++,
                    T++;
            }
        }
    },
    E = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: a, shownUserIds: i, rows: _, counts: r } = e;
        for (let e of I.Z.getFriendIDs()) {
            if (null != n && n > 0 && _.length >= n) break;
            if (t.has(e) || i.has(e)) continue;
            let o = d.default.getUser(e);
            !(null == o || N(a, o.id)) &&
                (_.push({
                    type: 'FRIEND',
                    item: o,
                    isSuggested: !1
                }),
                r.numFriends++);
        }
    },
    p = (e) => {
        let { query: t, rows: n, counts: a, inviteTargetType: i } = e;
        i === T.Iq.EMBEDDED_APPLICATION &&
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
                    a.numChannels++;
            });
    },
    g = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: a, rows: i, counts: _ } = e;
        s.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let o = r.Z.getDMFromUserId(t.id);
            null != o &&
                null != l.ZP.lastMessageId(o) &&
                (a.add(t.id),
                i.push({
                    type: 'DM',
                    item: t,
                    isSuggested: !1
                }),
                _.numDms++);
        });
    },
    P = (e) => {
        let { query: t, rows: n, counts: a } = e;
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
                a.numGroupDms++;
        });
    },
    h = (e) => {
        let { query: t, rows: n, counts: a, omitUserIds: i, shownUserIds: _ } = e;
        s.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            !(i.has(t.id) || _.has(t.id)) &&
                (_.add(t.id),
                n.push({
                    type: 'FRIEND',
                    item: t,
                    isSuggested: !1
                }),
                a.numFriends++);
        });
    };
function U(e) {
    let { query: t, inviteTargetType: n, omitUserIds: a, suggestedUserIds: i, suggestedChannelIds: _, maxRowsWithoutQuery: r, omitGuildId: o } = e,
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
            omitGuildId: o,
            shownUserIds: l,
            rows: I,
            counts: d
        };
        n === T.Iq.EMBEDDED_APPLICATION &&
            (b({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            m({
                ...e,
                suggestedChannelIds: _
            })),
            O({
                ...e,
                suggestedUserIds: i
            }),
            b({
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
            p({
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
    for (let n of u.Z.getPrivateChannelIds()) {
        let a = r.Z.getChannel(n);
        if (null == a || !a.isDM() || null == l.ZP.lastMessageId(a.id)) continue;
        let i = a.getRecipientId();
        if (null != i && !e.has(i)) {
            let e = d.default.getUser(i);
            if (null == e || e.bot || N(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function v(e) {
    let { channel: t, inviteTargetType: n, applicationId: a } = e;
    if (n === T.Iq.EMBEDDED_APPLICATION && null != t) {
        for (let e of _.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === a) return new Set(e.userIds);
    }
    return new Set();
}
let M = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    V = {
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
        i = V[e].value;
    switch (V[e].type) {
        case M.MINUTES:
            if (a) return f.intl.string(f.t['/WbTXF']);
            return f.intl.formatToPlainString(f.t.eDRWJC, { numUses: n });
        case M.HOURS:
            if (a) return f.intl.formatToPlainString(f.t.ZVdJMz, { numHours: i });
            return f.intl.formatToPlainString(f.t.NgZgAA, {
                numHours: i,
                numUses: n
            });
        case M.DAYS:
            if (a) return f.intl.formatToPlainString(f.t.T96qsr, { numDays: i });
            return f.intl.formatToPlainString(f.t.TfuB9P, {
                numDays: i,
                numUses: n
            });
        case M.NEVER:
            if (a) return f.intl.string(f.t.QrHBnJ);
            return f.intl.formatToPlainString(f.t.yJnTxM, { numUses: n });
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
