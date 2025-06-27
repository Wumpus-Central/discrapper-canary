n.d(t, { Z: () => B }), n(583741), n(539854), n(388685), n(290780);
var r,
    l,
    s,
    i = n(392711),
    a = n.n(i),
    o = n(149765),
    E = n(442837),
    c = n(570140),
    u = n(387667),
    _ = n(131704),
    d = n(271383),
    A = n(485386),
    T = n(430824),
    I = n(981631);
let O = [I.Plq.KICK_MEMBERS, I.Plq.BAN_MEMBERS, I.Plq.ADMINISTRATOR, I.Plq.MANAGE_CHANNELS, I.Plq.MANAGE_GUILD, I.Plq.MANAGE_MESSAGES, I.Plq.MANAGE_NICKNAMES, I.Plq.MANAGE_ROLES, I.Plq.MANAGE_WEBHOOKS, I.Plq.MANAGE_GUILD_EXPRESSIONS, I.Plq.MOVE_MEMBERS, I.Plq.MUTE_MEMBERS, I.Plq.DEAFEN_MEMBERS],
    N = null,
    R = [],
    g = [],
    f = [],
    S = [],
    h = [],
    p = [],
    U = [],
    L = [],
    D = !0,
    C = !1,
    M = !1,
    m = !0,
    v = !1,
    b = null,
    P = I.rsA.ALL,
    x = null,
    j = {},
    y = 0;
function G(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, s;
            let i = [],
                o = null,
                E = null,
                c = null;
            if ((null != e.reason && i.push(new u.ms(I.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new u.ms(t.key, t.old_value, t.new_value);
                    i.push(e), e.key === I.zUn.NAME ? (o = e) : e.key === I.zUn.TYPE ? (c = e) : e.key === I.zUn.TITLE && (E = e);
                }
            if (e.action_type === I.rsA.MEMBER_PRUNE) {
                let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    n = new u.ms(I.zUn.PRUNE_DELETE_DAYS, null, t);
                i.push(n);
            }
            e.action_type === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null && i.push(new u.ms(I.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === I.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? void 0 : r.status) != null && i.push(new u.ms(I.zUn.STATUS, null, e.options.status));
            let d = new u.ZP({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: i,
                    options: e.options
                }),
                A = t[0];
            if (
                (function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && a().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, 'minutes') < r && n < l && t.targetType !== I.KFR.INVITE && t.action !== I.rsA.MESSAGE_DELETE && t.action !== I.rsA.MESSAGE_BULK_DELETE && t.action !== I.rsA.MESSAGE_PIN && t.action !== I.rsA.MESSAGE_UNPIN && t.action !== I.rsA.MEMBER_MOVE && t.action !== I.rsA.MEMBER_DISCONNECT && t.action !== I.rsA.BOT_ADD && t.action !== I.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== I.rsA.MEMBER_PRUNE;
                })(A, d, n)
            ) {
                (t[0] = A.merge({
                    changes: [...A.changes, ...d.changes],
                    timestampEnd: d.timestampStart
                })),
                    n++;
                return;
            }
            if (d.actionType === I.vB8.DELETE && (null != o || null != E)) {
                let e = null != (s = null == o ? void 0 : o.oldValue) ? s : null == E ? void 0 : E.oldValue;
                (d.targetType === I.KFR.CHANNEL || d.targetType === I.KFR.CHANNEL_OVERWRITE) && null !== c && (0, _.r8)(c.oldValue) && (e = '#'.concat(e)), null == j[d.targetType] ? (j[d.targetType] = { [d.targetId]: e }) : (j[d.targetType][d.targetId] = e);
            }
            (n = 0), t.unshift(d);
        }),
        t
    );
}
function F(e) {
    let { section: t } = e;
    if (t !== I.pNK.AUDIT_LOG) return !1;
    let n = d.ZP.getMembers(N),
        r = T.Z.getGuild(N),
        l = null != N ? A.Z.getRoles(N) : void 0;
    f = a()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && O.some((e) => o.e$(n.permissions, e));
                }
            })
        )
        .map((e) => e.userId)
        .value();
}
class z extends (r = E.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, A.Z, d.ZP);
    }
    get logs() {
        return R;
    }
    get integrations() {
        return g;
    }
    get webhooks() {
        return S;
    }
    get guildScheduledEvents() {
        return h;
    }
    get automodRules() {
        return p;
    }
    get threads() {
        return U;
    }
    get applicationCommands() {
        return L;
    }
    get isInitialLoading() {
        return D;
    }
    get isLoading() {
        return C;
    }
    get isLoadingNextPage() {
        return M;
    }
    get hasOlderLogs() {
        return m;
    }
    get hasError() {
        return v;
    }
    get userIds() {
        return f;
    }
    get userIdFilter() {
        return b;
    }
    get targetIdFilter() {
        return x;
    }
    get actionFilter() {
        return P;
    }
    get deletedTargets() {
        return j;
    }
    get groupedFetchCount() {
        return y;
    }
}
(s = 'GuildSettingsAuditLogStore'),
    (l = 'displayName') in z
        ? Object.defineProperty(z, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (z[l] = s);
let B = new z(c.Z, {
    AUDIT_LOG_FETCH_START: function () {
        C = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        (y = 0), (D = !1), (C = !1), (m = !0), (v = !1), (R = G(e.logs)), (g = e.integrations), (S = e.webhooks), (h = e.guildScheduledEvents), (p = null != (t = e.automodRules) ? t : []), (U = e.threads), (L = e.applicationCommands), e.logs.length < I.Rg9 && (m = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (C = !1), (v = !0), (R = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (M = !0), t && y++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let { logs: t, integrations: n, webhooks: r, guildScheduledEvents: l, automodRules: s, threads: i, applicationCommands: a } = e;
        if (((M = !1), (g = n), (S = r), (h = l), (p = s), (U = i), (L = a), (0 === t.length || t.length < I.Rg9) && (m = !1), t.length > 0)) {
            let e = G(t);
            R = [...R, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        M = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        P = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        b = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        x = t;
    },
    GUILD_SETTINGS_SET_SECTION: F,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (N = t), (x = null), F({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (R = []), (f = []), (P = I.rsA.ALL), (b = null), (x = null), (j = {}), (y = 0), (D = !0), (g = []), (S = []), (h = []), (p = []), (U = []);
    }
});
