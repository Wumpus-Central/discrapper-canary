let i;
n.d(t, {
    Sz: function () {
        return A;
    },
    Vg: function () {
        return x;
    },
    an: function () {
        return C;
    },
    bm: function () {
        return r;
    },
    rh: function () {
        return v;
    }
}),
    n(653041),
    n(47120);
var r,
    a,
    l = n(317381),
    s = n(592125),
    o = n(271383),
    u = n(306680),
    I = n(699516),
    c = n(594174),
    d = n(55589),
    _ = n(483360),
    T = n(981631),
    N = n(245335),
    m = n(388032);
(i = n(603617)), ((a = r || (r = {})).GROUP_DM = 'GROUP_DM'), (a.DM = 'DM'), (a.FRIEND = 'FRIEND'), (a.CHANNEL = 'CHANNEL');
let S = (e, t) => null != e && o.ZP.isMember(e, t),
    f = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: i, omitGuildId: r, shownUserIds: a, rows: l, counts: s } = e;
        if (null != n)
            for (let e of n) {
                if (null != i && i > 0 && l.length >= i) break;
                if (t.has(e) || a.has(e)) continue;
                let n = c.default.getUser(e);
                !(null == n || S(r, n.id)) &&
                    (a.add(n.id),
                    l.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    s.numFriends++);
            }
    },
    O = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: i, counts: r } = e;
        if (null != t)
            for (let e of t) {
                if (null != n && n > 0 && i.length >= n) break;
                let t = s.Z.getChannel(e);
                null != t &&
                    (i.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    r.numChannels++);
            }
    },
    E = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: i, shownUserIds: r, rows: a, counts: l, includeGroupDms: o, limit: I } = e,
            _ = 0;
        for (let e of d.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && a.length >= n) || (null != I && _ >= I)) break;
            let d = s.Z.getChannel(e);
            if (null == d || !d.isPrivate()) continue;
            if (o && d.type === T.d4z.GROUP_DM) {
                a.push({
                    type: 'GROUP_DM',
                    item: d,
                    isSuggested: !1
                }),
                    l.numGroupDms++,
                    _++;
                continue;
            }
            if (null == u.ZP.lastMessageId(d.id)) continue;
            let N = d.getRecipientId();
            if (null != N && !t.has(N) && !r.has(N)) {
                let e = c.default.getUser(N);
                if (null == e || e.bot || S(i, e.id)) continue;
                r.add(e.id),
                    a.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    l.numDms++,
                    _++;
            }
        }
    },
    g = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: i, shownUserIds: r, rows: a, counts: l } = e;
        for (let e of I.Z.getFriendIDs()) {
            if (null != n && n > 0 && a.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let s = c.default.getUser(e);
            !(null == s || S(i, s.id)) &&
                (a.push({
                    type: 'FRIEND',
                    item: s,
                    isSuggested: !1
                }),
                l.numFriends++);
        }
    },
    p = (e) => {
        let { query: t, rows: n, counts: i, inviteTargetType: r } = e;
        r === N.Iq.EMBEDDED_APPLICATION &&
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
                    i.numChannels++;
            });
    },
    P = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: i, rows: r, counts: a } = e;
        _.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let l = s.Z.getDMFromUserId(t.id);
            if (null != l && null != u.ZP.lastMessageId(l))
                i.add(t.id),
                    r.push({
                        type: 'DM',
                        item: t,
                        isSuggested: !1
                    }),
                    a.numDms++;
        });
    },
    h = (e) => {
        let { query: t, rows: n, counts: i } = e;
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
                i.numGroupDms++;
        });
    },
    D = (e) => {
        let { query: t, rows: n, counts: i, omitUserIds: r, shownUserIds: a } = e;
        _.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            if (!(r.has(t.id) || a.has(t.id)))
                a.add(t.id),
                    n.push({
                        type: 'FRIEND',
                        item: t,
                        isSuggested: !1
                    }),
                    i.numFriends++;
        });
    };
function C(e) {
    let { query: t, inviteTargetType: n, omitUserIds: i, suggestedUserIds: r, suggestedChannelIds: a, maxRowsWithoutQuery: l, omitGuildId: s } = e,
        o = new Set(),
        u = [],
        I = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === t) {
        let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: l,
            omitGuildId: s,
            shownUserIds: o,
            rows: u,
            counts: I
        };
        n === N.Iq.EMBEDDED_APPLICATION &&
            (E({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            O({
                ...e,
                suggestedChannelIds: a
            })),
            f({
                ...e,
                suggestedUserIds: r
            }),
            E({
                ...e,
                includeGroupDms: !0
            }),
            g(e);
    } else {
        let e = {
            query: t,
            rows: u,
            counts: I
        };
        n === N.Iq.EMBEDDED_APPLICATION &&
            p({
                ...e,
                inviteTargetType: n
            }),
            P({
                ...e,
                omitUserIds: i,
                shownUserIds: o
            }),
            h(e),
            D({
                ...e,
                omitUserIds: i,
                shownUserIds: o
            });
    }
    return {
        rows: u,
        counts: I
    };
}
function v(e, t) {
    for (let n of d.Z.getPrivateChannelIds()) {
        let i = s.Z.getChannel(n);
        if (null == i || !i.isDM() || null == u.ZP.lastMessageId(i.id)) continue;
        let r = i.getRecipientId();
        if (null != r && !e.has(r)) {
            let e = c.default.getUser(r);
            if (null == e || e.bot || S(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function A(e) {
    let { channel: t, inviteTargetType: n, applicationId: i } = e;
    if (n === N.Iq.EMBEDDED_APPLICATION) {
        if (null != t) {
            for (let e of l.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === i) return new Set(e.userIds);
        }
    }
    return new Set();
}
let M = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    y = {
        [i.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: M.MINUTES
        },
        [i.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: M.HOURS
        },
        [i.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: M.HOURS
        },
        [i.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: M.HOURS
        },
        [i.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: M.DAYS
        },
        [i.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: M.DAYS
        },
        [i.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: M.NEVER
        }
    };
function x(e, t) {
    let n = parseInt(t, 10),
        i = 0 === n,
        r = y[e].value;
    switch (y[e].type) {
        case M.MINUTES:
            if (i) return m.intl.string(m.t['/WbTXF']);
            return m.intl.formatToPlainString(m.t.eDRWJC, { numUses: n });
        case M.HOURS:
            if (i) return m.intl.formatToPlainString(m.t.ZVdJMz, { numHours: r });
            return m.intl.formatToPlainString(m.t.NgZgAA, {
                numHours: r,
                numUses: n
            });
        case M.DAYS:
            if (i) return m.intl.formatToPlainString(m.t.T96qsr, { numDays: r });
            return m.intl.formatToPlainString(m.t.TfuB9P, {
                numDays: r,
                numUses: n
            });
        case M.NEVER:
            if (i) return m.intl.string(m.t.QrHBnJ);
            return m.intl.formatToPlainString(m.t.yJnTxM, { numUses: n });
        default:
            return '';
    }
}
t.ZP = {
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
