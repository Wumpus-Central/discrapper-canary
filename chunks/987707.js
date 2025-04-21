n.d(t, { Z: () => z }), n(583741), n(539854), n(388685), n(290780);
var r,
    l,
    s,
    i = n(392711),
    a = n.n(i),
    o = n(149765),
    E = n(442837),
    u = n(570140),
    c = n(387667),
    _ = n(131704),
    d = n(271383),
    A = n(430824),
    T = n(981631);
let I = [T.Plq.KICK_MEMBERS, T.Plq.BAN_MEMBERS, T.Plq.ADMINISTRATOR, T.Plq.MANAGE_CHANNELS, T.Plq.MANAGE_GUILD, T.Plq.MANAGE_MESSAGES, T.Plq.MANAGE_NICKNAMES, T.Plq.MANAGE_ROLES, T.Plq.MANAGE_WEBHOOKS, T.Plq.MANAGE_GUILD_EXPRESSIONS, T.Plq.MOVE_MEMBERS, T.Plq.MUTE_MEMBERS, T.Plq.DEAFEN_MEMBERS],
    O = null,
    N = [],
    R = [],
    g = [],
    f = [],
    S = [],
    U = [],
    h = [],
    L = [],
    p = !0,
    D = !1,
    C = !1,
    M = !0,
    m = !1,
    v = null,
    b = T.rsA.ALL,
    P = null,
    x = {},
    j = 0;
function y(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, s;
            let i = [],
                o = null,
                E = null,
                u = null;
            if ((null != e.reason && i.push(new c.ms(T.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new c.ms(t.key, t.old_value, t.new_value);
                    i.push(e), e.key === T.zUn.NAME ? (o = e) : e.key === T.zUn.TYPE ? (u = e) : e.key === T.zUn.TITLE && (E = e);
                }
            if (e.action_type === T.rsA.MEMBER_PRUNE) {
                let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    n = new c.ms(T.zUn.PRUNE_DELETE_DAYS, null, t);
                i.push(n);
            }
            e.action_type === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null && i.push(new c.ms(T.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? void 0 : r.status) != null && i.push(new c.ms(T.zUn.STATUS, null, e.options.status));
            let d = new c.ZP({
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
                    return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && a().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, 'minutes') < r && n < l && t.targetType !== T.KFR.INVITE && t.action !== T.rsA.MESSAGE_DELETE && t.action !== T.rsA.MESSAGE_BULK_DELETE && t.action !== T.rsA.MESSAGE_PIN && t.action !== T.rsA.MESSAGE_UNPIN && t.action !== T.rsA.MEMBER_MOVE && t.action !== T.rsA.MEMBER_DISCONNECT && t.action !== T.rsA.BOT_ADD && t.action !== T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.rsA.MEMBER_PRUNE;
                })(A, d, n)
            ) {
                (t[0] = A.merge({
                    changes: [...A.changes, ...d.changes],
                    timestampEnd: d.timestampStart
                })),
                    n++;
                return;
            }
            if (d.actionType === T.vB8.DELETE && (null != o || null != E)) {
                let e = null != (s = null == o ? void 0 : o.oldValue) ? s : null == E ? void 0 : E.oldValue;
                (d.targetType === T.KFR.CHANNEL || d.targetType === T.KFR.CHANNEL_OVERWRITE) && null !== u && (0, _.r8)(u.oldValue) && (e = '#'.concat(e)), null == x[d.targetType] ? (x[d.targetType] = { [d.targetId]: e }) : (x[d.targetType][d.targetId] = e);
            }
            (n = 0), t.unshift(d);
        }),
        t
    );
}
function G(e) {
    let { section: t } = e;
    if (t !== T.pNK.AUDIT_LOG) return !1;
    let n = d.ZP.getMembers(O),
        r = A.Z.getGuild(O),
        l = null != O ? A.Z.getRoles(O) : void 0;
    g = a()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && I.some((e) => o.e$(n.permissions, e));
                }
            })
        )
        .map((e) => e.userId)
        .value();
}
class F extends (r = E.ZP.Store) {
    get logs() {
        return N;
    }
    get integrations() {
        return R;
    }
    get webhooks() {
        return f;
    }
    get guildScheduledEvents() {
        return S;
    }
    get automodRules() {
        return U;
    }
    get threads() {
        return h;
    }
    get applicationCommands() {
        return L;
    }
    get isInitialLoading() {
        return p;
    }
    get isLoading() {
        return D;
    }
    get isLoadingNextPage() {
        return C;
    }
    get hasOlderLogs() {
        return M;
    }
    get hasError() {
        return m;
    }
    get userIds() {
        return g;
    }
    get userIdFilter() {
        return v;
    }
    get targetIdFilter() {
        return P;
    }
    get actionFilter() {
        return b;
    }
    get deletedTargets() {
        return x;
    }
    get groupedFetchCount() {
        return j;
    }
}
(s = 'GuildSettingsAuditLogStore'),
    (l = 'displayName') in F
        ? Object.defineProperty(F, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (F[l] = s);
let z = new F(u.Z, {
    AUDIT_LOG_FETCH_START: function () {
        D = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        (j = 0), (p = !1), (D = !1), (M = !0), (m = !1), (N = y(e.logs)), (R = e.integrations), (f = e.webhooks), (S = e.guildScheduledEvents), (U = null != (t = e.automodRules) ? t : []), (h = e.threads), (L = e.applicationCommands), e.logs.length < T.Rg9 && (M = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (D = !1), (m = !0), (N = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (C = !0), t && j++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let { logs: t, integrations: n, webhooks: r, guildScheduledEvents: l, automodRules: s, threads: i, applicationCommands: a } = e;
        if (((C = !1), (R = n), (f = r), (S = l), (U = s), (h = i), (L = a), (0 === t.length || t.length < T.Rg9) && (M = !1), t.length > 0)) {
            let e = y(t);
            N = [...N, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        C = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        b = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        v = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        P = t;
    },
    GUILD_SETTINGS_SET_SECTION: G,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (O = t), (P = null), G({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (N = []), (g = []), (b = T.rsA.ALL), (v = null), (P = null), (x = {}), (j = 0), (p = !0), (R = []), (f = []), (S = []), (U = []), (h = []);
    }
});
