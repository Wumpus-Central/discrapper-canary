let r;
n.d(t, {
    Sz: () => M,
    Vg: () => v,
    ZP: () => P,
    an: () => L,
    bm: () => I,
    rh: () => h
}),
    n(653041),
    n(47120);
var l,
    i = n(317381),
    a = n(592125),
    s = n(271383),
    o = n(306680),
    E = n(699516),
    u = n(594174),
    c = n(55589),
    _ = n(483360),
    d = n(981631),
    A = n(245335),
    T = n(388032);
r = n(603617);
var I = (((l = {}).GROUP_DM = 'GROUP_DM'), (l.DM = 'DM'), (l.FRIEND = 'FRIEND'), (l.CHANNEL = 'CHANNEL'), l);
let N = (e, t) => null != e && s.ZP.isMember(e, t),
    g = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: r, omitGuildId: l, shownUserIds: i, rows: a, counts: s } = e;
        if (null != n)
            for (let e of n) {
                if (null != r && r > 0 && a.length >= r) break;
                if (t.has(e) || i.has(e)) continue;
                let n = u.default.getUser(e);
                !(null == n || N(l, n.id)) &&
                    (i.add(n.id),
                    a.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    s.numFriends++);
            }
    },
    O = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: r, counts: l } = e;
        if (null != t)
            for (let e of t) {
                if (null != n && n > 0 && r.length >= n) break;
                let t = a.Z.getChannel(e);
                null != t &&
                    (r.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    l.numChannels++);
            }
    },
    S = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: r, shownUserIds: l, rows: i, counts: s, includeGroupDms: E, limit: _ } = e,
            A = 0;
        for (let e of c.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && i.length >= n) || (null != _ && A >= _)) break;
            let c = a.Z.getChannel(e);
            if (null == c || !c.isPrivate()) continue;
            if (E && c.type === d.d4z.GROUP_DM) {
                i.push({
                    type: 'GROUP_DM',
                    item: c,
                    isSuggested: !1
                }),
                    s.numGroupDms++,
                    A++;
                continue;
            }
            if (null == o.ZP.lastMessageId(c.id)) continue;
            let T = c.getRecipientId();
            if (null != T && !t.has(T) && !l.has(T)) {
                let e = u.default.getUser(T);
                if (null == e || e.bot || N(r, e.id)) continue;
                l.add(e.id),
                    i.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    s.numDms++,
                    A++;
            }
        }
    },
    R = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: r, shownUserIds: l, rows: i, counts: a } = e;
        for (let e of E.Z.getFriendIDs()) {
            if (null != n && n > 0 && i.length >= n) break;
            if (t.has(e) || l.has(e)) continue;
            let s = u.default.getUser(e);
            !(null == s || N(r, s.id)) &&
                (i.push({
                    type: 'FRIEND',
                    item: s,
                    isSuggested: !1
                }),
                a.numFriends++);
        }
    },
    f = (e) => {
        let { query: t, rows: n, counts: r, inviteTargetType: l } = e;
        l === A.Iq.EMBEDDED_APPLICATION &&
            _.ZP.queryChannels({
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
                    r.numChannels++;
            });
    },
    U = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: r, rows: l, counts: i } = e;
        _.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let s = a.Z.getDMFromUserId(t.id);
            null != s &&
                null != o.ZP.lastMessageId(s) &&
                (r.add(t.id),
                l.push({
                    type: 'DM',
                    item: t,
                    isSuggested: !1
                }),
                i.numDms++);
        });
    },
    D = (e) => {
        let { query: t, rows: n, counts: r } = e;
        _.ZP.queryGroupDMs({
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
                r.numGroupDms++;
        });
    },
    C = (e) => {
        let { query: t, rows: n, counts: r, omitUserIds: l, shownUserIds: i } = e;
        _.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            !(l.has(t.id) || i.has(t.id)) &&
                (i.add(t.id),
                n.push({
                    type: 'FRIEND',
                    item: t,
                    isSuggested: !1
                }),
                r.numFriends++);
        });
    };
function L(e) {
    let { query: t, inviteTargetType: n, omitUserIds: r, suggestedUserIds: l, suggestedChannelIds: i, maxRowsWithoutQuery: a, omitGuildId: s } = e,
        o = new Set(),
        E = [],
        u = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === t) {
        let e = {
            omitUserIds: r,
            maxRowsWithoutQuery: a,
            omitGuildId: s,
            shownUserIds: o,
            rows: E,
            counts: u
        };
        n === A.Iq.EMBEDDED_APPLICATION &&
            (S({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            O({
                ...e,
                suggestedChannelIds: i
            })),
            g({
                ...e,
                suggestedUserIds: l
            }),
            S({
                ...e,
                includeGroupDms: !0
            }),
            R(e);
    } else {
        let e = {
            query: t,
            rows: E,
            counts: u
        };
        n === A.Iq.EMBEDDED_APPLICATION &&
            f({
                ...e,
                inviteTargetType: n
            }),
            U({
                ...e,
                omitUserIds: r,
                shownUserIds: o
            }),
            D(e),
            C({
                ...e,
                omitUserIds: r,
                shownUserIds: o
            });
    }
    return {
        rows: E,
        counts: u
    };
}
function h(e, t) {
    for (let n of c.Z.getPrivateChannelIds()) {
        let r = a.Z.getChannel(n);
        if (null == r || !r.isDM() || null == o.ZP.lastMessageId(r.id)) continue;
        let l = r.getRecipientId();
        if (null != l && !e.has(l)) {
            let e = u.default.getUser(l);
            if (null == e || e.bot || N(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function M(e) {
    let { channel: t, inviteTargetType: n, applicationId: r } = e;
    if (n === A.Iq.EMBEDDED_APPLICATION && null != t) {
        for (let e of i.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === r) return new Set(e.userIds);
    }
    return new Set();
}
let p = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    m = {
        [r.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: p.MINUTES
        },
        [r.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: p.HOURS
        },
        [r.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: p.HOURS
        },
        [r.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: p.HOURS
        },
        [r.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: p.DAYS
        },
        [r.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: p.DAYS
        },
        [r.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: p.NEVER
        }
    };
function v(e, t) {
    let n = parseInt(t, 10),
        r = 0 === n,
        l = m[e].value;
    switch (m[e].type) {
        case p.MINUTES:
            if (r) return T.intl.string(T.t['/WbTXF']);
            return T.intl.formatToPlainString(T.t.eDRWJC, { numUses: n });
        case p.HOURS:
            if (r) return T.intl.formatToPlainString(T.t.ZVdJMz, { numHours: l });
            return T.intl.formatToPlainString(T.t.NgZgAA, {
                numHours: l,
                numUses: n
            });
        case p.DAYS:
            if (r) return T.intl.formatToPlainString(T.t.T96qsr, { numDays: l });
            return T.intl.formatToPlainString(T.t.TfuB9P, {
                numDays: l,
                numUses: n
            });
        case p.NEVER:
            if (r) return T.intl.string(T.t.QrHBnJ);
            return T.intl.formatToPlainString(T.t.yJnTxM, { numUses: n });
        default:
            return '';
    }
}
let P = {
    getMaxAgeOptions: r.MAX_AGE_OPTIONS,
    getMaxUsesOptions: r.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: r.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: r.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: r.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: r.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: r.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_1_HOUR: r.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: r.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: r.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: r.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: r.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: r.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: r.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: r.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: r.INVITE_OPTIONS_100_TIMES
};
