let i;
n.d(t, {
    Sz: function () {
        return D;
    },
    Vg: function () {
        return y;
    },
    an: function () {
        return C;
    },
    bm: function () {
        return r;
    },
    rh: function () {
        return R;
    }
}),
    n(653041),
    n(47120);
var r,
    o,
    a = n(317381),
    u = n(592125),
    I = n(271383),
    l = n(306680),
    s = n(699516),
    _ = n(594174),
    f = n(55589),
    T = n(483360),
    d = n(981631),
    S = n(245335),
    c = n(388032);
(i = n(603617)), ((o = r || (r = {})).GROUP_DM = 'GROUP_DM'), (o.DM = 'DM'), (o.FRIEND = 'FRIEND'), (o.CHANNEL = 'CHANNEL');
let O = (e, t) => null != e && I.ZP.isMember(e, t),
    N = (e) => {
        let { omitUserIds: t, suggestedUserIds: n, maxRowsWithoutQuery: i, omitGuildId: r, shownUserIds: o, rows: a, counts: u } = e;
        if (null != n)
            for (let e of n) {
                if (null != i && i > 0 && a.length >= i) break;
                if (t.has(e) || o.has(e)) continue;
                let n = _.default.getUser(e);
                !(null == n || O(r, n.id)) &&
                    (o.add(n.id),
                    a.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !0
                    }),
                    u.numFriends++);
            }
    },
    E = (e) => {
        let { suggestedChannelIds: t, maxRowsWithoutQuery: n, rows: i, counts: r } = e;
        if (null != t)
            for (let e of t) {
                if (null != n && n > 0 && i.length >= n) break;
                let t = u.Z.getChannel(e);
                null != t &&
                    (i.push({
                        type: 'CHANNEL',
                        item: t,
                        isSuggested: !0
                    }),
                    r.numChannels++);
            }
    },
    m = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: i, shownUserIds: r, rows: o, counts: a, includeGroupDms: I, limit: s } = e,
            T = 0;
        for (let e of f.Z.getPrivateChannelIds()) {
            if ((null != n && n > 0 && o.length >= n) || (null != s && T >= s)) break;
            let f = u.Z.getChannel(e);
            if (null == f || !f.isPrivate()) continue;
            if (I && f.type === d.d4z.GROUP_DM) {
                o.push({
                    type: 'GROUP_DM',
                    item: f,
                    isSuggested: !1
                }),
                    a.numGroupDms++,
                    T++;
                continue;
            }
            if (null == l.ZP.lastMessageId(f.id)) continue;
            let S = f.getRecipientId();
            if (null != S && !t.has(S) && !r.has(S)) {
                let e = _.default.getUser(S);
                if (null == e || e.bot || O(i, e.id)) continue;
                r.add(e.id),
                    o.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    a.numDms++,
                    T++;
            }
        }
    },
    P = (e) => {
        let { omitUserIds: t, maxRowsWithoutQuery: n, omitGuildId: i, shownUserIds: r, rows: o, counts: a } = e;
        for (let e of s.Z.getFriendIDs()) {
            if (null != n && n > 0 && o.length >= n) break;
            if (t.has(e) || r.has(e)) continue;
            let u = _.default.getUser(e);
            !(null == u || O(i, u.id)) &&
                (o.push({
                    type: 'FRIEND',
                    item: u,
                    isSuggested: !1
                }),
                a.numFriends++);
        }
    },
    g = (e) => {
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
    h = (e) => {
        let { query: t, omitUserIds: n, shownUserIds: i, rows: r, counts: o } = e;
        T.ZP.queryDMUsers({
            query: t,
            limit: 50
        }).forEach((e) => {
            let { record: t } = e;
            if (n.has(t.id)) return;
            let a = u.Z.getDMFromUserId(t.id);
            if (null != a && null != l.ZP.lastMessageId(a))
                i.add(t.id),
                    r.push({
                        type: 'DM',
                        item: t,
                        isSuggested: !1
                    }),
                    o.numDms++;
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
    M = (e) => {
        let { query: t, rows: n, counts: i, omitUserIds: r, shownUserIds: o } = e;
        T.ZP.queryFriends({
            query: t,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: t } = e;
            if (!(r.has(t.id) || o.has(t.id)))
                o.add(t.id),
                    n.push({
                        type: 'FRIEND',
                        item: t,
                        isSuggested: !1
                    }),
                    i.numFriends++;
        });
    };
function C(e) {
    let { query: t, inviteTargetType: n, omitUserIds: i, suggestedUserIds: r, suggestedChannelIds: o, maxRowsWithoutQuery: a, omitGuildId: u } = e,
        I = new Set(),
        l = [],
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
            maxRowsWithoutQuery: a,
            omitGuildId: u,
            shownUserIds: I,
            rows: l,
            counts: s
        };
        n === S.Iq.EMBEDDED_APPLICATION &&
            (m({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            E({
                ...e,
                suggestedChannelIds: o
            })),
            N({
                ...e,
                suggestedUserIds: r
            }),
            m({
                ...e,
                includeGroupDms: !0
            }),
            P(e);
    } else {
        let e = {
            query: t,
            rows: l,
            counts: s
        };
        n === S.Iq.EMBEDDED_APPLICATION &&
            g({
                ...e,
                inviteTargetType: n
            }),
            h({
                ...e,
                omitUserIds: i,
                shownUserIds: I
            }),
            p(e),
            M({
                ...e,
                omitUserIds: i,
                shownUserIds: I
            });
    }
    return {
        rows: l,
        counts: s
    };
}
function R(e, t) {
    for (let n of f.Z.getPrivateChannelIds()) {
        let i = u.Z.getChannel(n);
        if (null == i || !i.isDM() || null == l.ZP.lastMessageId(i.id)) continue;
        let r = i.getRecipientId();
        if (null != r && !e.has(r)) {
            let e = _.default.getUser(r);
            if (null == e || e.bot || O(t, e.id)) continue;
            return e;
        }
    }
    return null;
}
function D(e) {
    let { channel: t, inviteTargetType: n, applicationId: i } = e;
    if (n === S.Iq.EMBEDDED_APPLICATION) {
        if (null != t) {
            for (let e of a.ZP.getEmbeddedActivitiesForChannel(t.id)) if (e.applicationId === i) return new Set(e.userIds);
        }
    }
    return new Set();
}
let V = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    U = {
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
function y(e, t) {
    let n = parseInt(t, 10),
        i = 0 === n,
        r = U[e].value;
    switch (U[e].type) {
        case V.MINUTES:
            if (i) return c.intl.string(c.t['/WbTXF']);
            return c.intl.formatToPlainString(c.t.eDRWJC, { numUses: n });
        case V.HOURS:
            if (i) return c.intl.formatToPlainString(c.t.ZVdJMz, { numHours: r });
            return c.intl.formatToPlainString(c.t.NgZgAA, {
                numHours: r,
                numUses: n
            });
        case V.DAYS:
            if (i) return c.intl.formatToPlainString(c.t.T96qsr, { numDays: r });
            return c.intl.formatToPlainString(c.t.TfuB9P, {
                numDays: r,
                numUses: n
            });
        case V.NEVER:
            if (i) return c.intl.string(c.t.QrHBnJ);
            return c.intl.formatToPlainString(c.t.yJnTxM, { numUses: n });
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
