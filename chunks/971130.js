let i;
t.d(n, {
    Sz: () => C,
    Vg: () => M,
    ZP: () => R,
    an: () => P,
    bm: () => N,
    rh: () => x
}),
    t(653041),
    t(47120);
var a,
    r = t(317381),
    l = t(592125),
    o = t(271383),
    _ = t(306680),
    s = t(699516),
    d = t(594174),
    c = t(55589),
    u = t(483360),
    I = t(981631),
    T = t(245335),
    f = t(388032);
i = t(603617);
var N = (((a = {}).GROUP_DM = 'GROUP_DM'), (a.DM = 'DM'), (a.FRIEND = 'FRIEND'), (a.CHANNEL = 'CHANNEL'), a);
let m = (e, n) => null != e && o.ZP.isMember(e, n),
    g = (e) => {
        let { omitUserIds: n, suggestedUserIds: t, maxRowsWithoutQuery: i, omitGuildId: a, shownUserIds: r, rows: l, counts: o } = e;
        if (null != t)
            for (let e of t) {
                if (null != i && i > 0 && l.length >= i) break;
                if (n.has(e) || r.has(e)) continue;
                let t = d.default.getUser(e);
                !(null == t || m(a, t.id)) &&
                    (r.add(t.id),
                    l.push({
                        type: 'FRIEND',
                        item: t,
                        isSuggested: !0
                    }),
                    o.numFriends++);
            }
    },
    E = (e) => {
        let { suggestedChannelIds: n, maxRowsWithoutQuery: t, rows: i, counts: a } = e;
        if (null != n)
            for (let e of n) {
                if (null != t && t > 0 && i.length >= t) break;
                let n = l.Z.getChannel(e);
                null != n &&
                    (i.push({
                        type: 'CHANNEL',
                        item: n,
                        isSuggested: !0
                    }),
                    a.numChannels++);
            }
    },
    h = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: i, shownUserIds: a, rows: r, counts: o, includeGroupDms: s, limit: u } = e,
            T = 0;
        for (let e of c.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && r.length >= t) || (null != u && T >= u)) break;
            let c = l.Z.getChannel(e);
            if (null == c || !c.isPrivate()) continue;
            if (s && c.type === I.d4z.GROUP_DM) {
                r.push({
                    type: 'GROUP_DM',
                    item: c,
                    isSuggested: !1
                }),
                    o.numGroupDms++,
                    T++;
                continue;
            }
            if (null == _.ZP.lastMessageId(c.id)) continue;
            let f = c.getRecipientId();
            if (null != f && !n.has(f) && !a.has(f)) {
                let e = d.default.getUser(f);
                if (null == e || e.bot || m(i, e.id)) continue;
                a.add(e.id),
                    r.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    o.numDms++,
                    T++;
            }
        }
    },
    S = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: i, shownUserIds: a, rows: r, counts: l } = e;
        for (let e of s.Z.getFriendIDs()) {
            if (null != t && t > 0 && r.length >= t) break;
            if (n.has(e) || a.has(e)) continue;
            let o = d.default.getUser(e);
            !(null == o || m(i, o.id)) &&
                (r.push({
                    type: 'FRIEND',
                    item: o,
                    isSuggested: !1
                }),
                l.numFriends++);
        }
    },
    p = (e) => {
        let { query: n, rows: t, counts: i, inviteTargetType: a } = e;
        a === T.Iq.EMBEDDED_APPLICATION &&
            u.ZP.queryChannels({
                query: n,
                limit: 3,
                guildId: void 0
            }).forEach((e) => {
                let { record: n } = e;
                t.push({
                    type: 'CHANNEL',
                    item: n,
                    isSuggested: !1
                }),
                    i.numChannels++;
            });
    },
    O = (e) => {
        let { query: n, omitUserIds: t, shownUserIds: i, rows: a, counts: r } = e;
        u.ZP.queryDMUsers({
            query: n,
            limit: 50
        }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = l.Z.getDMFromUserId(n.id);
            null != o &&
                null != _.ZP.lastMessageId(o) &&
                (i.add(n.id),
                a.push({
                    type: 'DM',
                    item: n,
                    isSuggested: !1
                }),
                r.numDms++);
        });
    },
    b = (e) => {
        let { query: n, rows: t, counts: i } = e;
        u.ZP.queryGroupDMs({
            query: n,
            limit: 50,
            fuzzy: !1
        }).forEach((e) => {
            let { record: n } = e;
            t.push({
                type: 'GROUP_DM',
                item: n,
                isSuggested: !1
            }),
                i.numGroupDms++;
        });
    },
    v = (e) => {
        let { query: n, rows: t, counts: i, omitUserIds: a, shownUserIds: r } = e;
        u.ZP.queryFriends({
            query: n,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: n } = e;
            !(a.has(n.id) || r.has(n.id)) &&
                (r.add(n.id),
                t.push({
                    type: 'FRIEND',
                    item: n,
                    isSuggested: !1
                }),
                i.numFriends++);
        });
    };
function P(e) {
    let { query: n, inviteTargetType: t, omitUserIds: i, suggestedUserIds: a, suggestedChannelIds: r, maxRowsWithoutQuery: l, omitGuildId: o } = e,
        _ = new Set(),
        s = [],
        d = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === n) {
        let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: l,
            omitGuildId: o,
            shownUserIds: _,
            rows: s,
            counts: d
        };
        t === T.Iq.EMBEDDED_APPLICATION &&
            (h({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            E({
                ...e,
                suggestedChannelIds: r
            })),
            g({
                ...e,
                suggestedUserIds: a
            }),
            h({
                ...e,
                includeGroupDms: !0
            }),
            S(e);
    } else {
        let e = {
            query: n,
            rows: s,
            counts: d
        };
        t === T.Iq.EMBEDDED_APPLICATION &&
            p({
                ...e,
                inviteTargetType: t
            }),
            O({
                ...e,
                omitUserIds: i,
                shownUserIds: _
            }),
            b(e),
            v({
                ...e,
                omitUserIds: i,
                shownUserIds: _
            });
    }
    return {
        rows: s,
        counts: d
    };
}
function x(e, n) {
    for (let t of c.Z.getPrivateChannelIds()) {
        let i = l.Z.getChannel(t);
        if (null == i || !i.isDM() || null == _.ZP.lastMessageId(i.id)) continue;
        let a = i.getRecipientId();
        if (null != a && !e.has(a)) {
            let e = d.default.getUser(a);
            if (null == e || e.bot || m(n, e.id)) continue;
            return e;
        }
    }
    return null;
}
function C(e) {
    let { channel: n, inviteTargetType: t, applicationId: i } = e;
    if (t === T.Iq.EMBEDDED_APPLICATION && null != n) {
        for (let e of r.ZP.getEmbeddedActivitiesForChannel(n.id)) if (e.applicationId === i) return new Set(e.userIds);
    }
    return new Set();
}
let U = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    D = {
        [i.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: U.MINUTES
        },
        [i.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: U.HOURS
        },
        [i.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: U.HOURS
        },
        [i.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: U.HOURS
        },
        [i.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: U.DAYS
        },
        [i.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: U.DAYS
        },
        [i.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: U.NEVER
        }
    };
function M(e, n) {
    let t = parseInt(n, 10),
        i = 0 === t,
        a = D[e].value;
    switch (D[e].type) {
        case U.MINUTES:
            if (i) return f.intl.string(f.t['/WbTXF']);
            return f.intl.formatToPlainString(f.t.eDRWJC, { numUses: t });
        case U.HOURS:
            if (i) return f.intl.formatToPlainString(f.t.ZVdJMz, { numHours: a });
            return f.intl.formatToPlainString(f.t.NgZgAA, {
                numHours: a,
                numUses: t
            });
        case U.DAYS:
            if (i) return f.intl.formatToPlainString(f.t.T96qsr, { numDays: a });
            return f.intl.formatToPlainString(f.t.TfuB9P, {
                numDays: a,
                numUses: t
            });
        case U.NEVER:
            if (i) return f.intl.string(f.t.QrHBnJ);
            return f.intl.formatToPlainString(f.t.yJnTxM, { numUses: t });
        default:
            return '';
    }
}
let R = {
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
