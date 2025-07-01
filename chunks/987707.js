(n.d(t, { Z: () => F }), n(583741), n(539854), n(388685), n(290780));
var r,
    l,
    i,
    s = n(392711),
    a = n.n(s),
    o = n(149765),
    u = n(442837),
    c = n(570140),
    d = n(387667),
    E = n(131704),
    _ = n(271383),
    A = n(485386),
    m = n(430824),
    T = n(981631);
let f = [T.Plq.KICK_MEMBERS, T.Plq.BAN_MEMBERS, T.Plq.ADMINISTRATOR, T.Plq.MANAGE_CHANNELS, T.Plq.MANAGE_GUILD, T.Plq.MANAGE_MESSAGES, T.Plq.MANAGE_NICKNAMES, T.Plq.MANAGE_ROLES, T.Plq.MANAGE_WEBHOOKS, T.Plq.MANAGE_GUILD_EXPRESSIONS, T.Plq.MOVE_MEMBERS, T.Plq.MUTE_MEMBERS, T.Plq.DEAFEN_MEMBERS],
    g = null,
    I = [],
    h = [],
    O = [],
    N = [],
    p = [],
    R = [],
    S = [],
    C = [],
    b = !0,
    v = !1,
    D = !1,
    x = !0,
    M = !1,
    L = null,
    U = T.rsA.ALL,
    P = null,
    j = {},
    y = 0;
function w(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, i;
            let s = [],
                o = null,
                u = null,
                c = null;
            if ((null != e.reason && s.push(new d.ms(T.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new d.ms(t.key, t.old_value, t.new_value);
                    (s.push(e), e.key === T.zUn.NAME ? (o = e) : e.key === T.zUn.TYPE ? (c = e) : e.key === T.zUn.TITLE && (u = e));
                }
            if (e.action_type === T.rsA.MEMBER_PRUNE) {
                let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    n = new d.ms(T.zUn.PRUNE_DELETE_DAYS, null, t);
                s.push(n);
            }
            (e.action_type === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null && s.push(new d.ms(T.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? void 0 : r.status) != null && s.push(new d.ms(T.zUn.STATUS, null, e.options.status)));
            let _ = new d.ZP({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: s,
                    options: e.options
                }),
                A = t[0];
            if (
                (function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && a().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, 'minutes') < r && n < l && t.targetType !== T.KFR.INVITE && t.action !== T.rsA.MESSAGE_DELETE && t.action !== T.rsA.MESSAGE_BULK_DELETE && t.action !== T.rsA.MESSAGE_PIN && t.action !== T.rsA.MESSAGE_UNPIN && t.action !== T.rsA.MEMBER_MOVE && t.action !== T.rsA.MEMBER_DISCONNECT && t.action !== T.rsA.BOT_ADD && t.action !== T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.rsA.MEMBER_PRUNE;
                })(A, _, n)
            ) {
                ((t[0] = A.merge({
                    changes: [...A.changes, ..._.changes],
                    timestampEnd: _.timestampStart
                })),
                    n++);
                return;
            }
            if (_.actionType === T.vB8.DELETE && (null != o || null != u)) {
                let e = null != (i = null == o ? void 0 : o.oldValue) ? i : null == u ? void 0 : u.oldValue;
                ((_.targetType === T.KFR.CHANNEL || _.targetType === T.KFR.CHANNEL_OVERWRITE) && null !== c && (0, E.r8)(c.oldValue) && (e = '#'.concat(e)), null == j[_.targetType] ? (j[_.targetType] = { [_.targetId]: e }) : (j[_.targetType][_.targetId] = e));
            }
            ((n = 0), t.unshift(_));
        }),
        t
    );
}
function G(e) {
    let { section: t } = e;
    if (t !== T.pNK.AUDIT_LOG) return !1;
    let n = _.ZP.getMembers(g),
        r = m.Z.getGuild(g),
        l = null != g ? A.Z.getRoles(g) : void 0;
    O = a()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && f.some((e) => o.e$(n.permissions, e));
                }
            })
        )
        .map((e) => e.userId)
        .value();
}
class k extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, A.Z, _.ZP);
    }
    get logs() {
        return I;
    }
    get integrations() {
        return h;
    }
    get webhooks() {
        return N;
    }
    get guildScheduledEvents() {
        return p;
    }
    get automodRules() {
        return R;
    }
    get threads() {
        return S;
    }
    get applicationCommands() {
        return C;
    }
    get isInitialLoading() {
        return b;
    }
    get isLoading() {
        return v;
    }
    get isLoadingNextPage() {
        return D;
    }
    get hasOlderLogs() {
        return x;
    }
    get hasError() {
        return M;
    }
    get userIds() {
        return O;
    }
    get userIdFilter() {
        return L;
    }
    get targetIdFilter() {
        return P;
    }
    get actionFilter() {
        return U;
    }
    get deletedTargets() {
        return j;
    }
    get groupedFetchCount() {
        return y;
    }
}
((i = 'GuildSettingsAuditLogStore'),
    (l = 'displayName') in k
        ? Object.defineProperty(k, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (k[l] = i));
let F = new k(c.Z, {
    AUDIT_LOG_FETCH_START: function () {
        v = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        ((y = 0), (b = !1), (v = !1), (x = !0), (M = !1), (I = w(e.logs)), (h = e.integrations), (N = e.webhooks), (p = e.guildScheduledEvents), (R = null != (t = e.automodRules) ? t : []), (S = e.threads), (C = e.applicationCommands), e.logs.length < T.Rg9 && (x = !1));
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        ((v = !1), (M = !0), (I = []));
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        ((D = !0), t && y++);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let { logs: t, integrations: n, webhooks: r, guildScheduledEvents: l, automodRules: i, threads: s, applicationCommands: a } = e;
        if (((D = !1), (h = n), (N = r), (p = l), (R = i), (S = s), (C = a), (0 === t.length || t.length < T.Rg9) && (x = !1), t.length > 0)) {
            let e = w(t);
            I = [...I, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        D = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        U = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        L = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        P = t;
    },
    GUILD_SETTINGS_SET_SECTION: G,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return ((g = t), (P = null), G({ section: n }));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((I = []), (O = []), (U = T.rsA.ALL), (L = null), (P = null), (j = {}), (y = 0), (b = !0), (h = []), (N = []), (p = []), (R = []), (S = []));
    }
});
