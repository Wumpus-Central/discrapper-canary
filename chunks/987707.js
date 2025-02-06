n.d(t, { Z: () => B }), n(653041), n(47120), n(733860);
var r,
    l,
    i,
    a = n(392711),
    s = n.n(a),
    o = n(149765),
    E = n(442837),
    u = n(570140),
    c = n(387667),
    _ = n(131704),
    d = n(271383),
    A = n(430824),
    T = n(981631);
let I = [T.Plq.KICK_MEMBERS, T.Plq.BAN_MEMBERS, T.Plq.ADMINISTRATOR, T.Plq.MANAGE_CHANNELS, T.Plq.MANAGE_GUILD, T.Plq.MANAGE_MESSAGES, T.Plq.MANAGE_NICKNAMES, T.Plq.MANAGE_ROLES, T.Plq.MANAGE_WEBHOOKS, T.Plq.MANAGE_GUILD_EXPRESSIONS, T.Plq.MOVE_MEMBERS, T.Plq.MUTE_MEMBERS, T.Plq.DEAFEN_MEMBERS],
    N = null,
    g = [],
    O = [],
    R = [],
    S = [],
    U = [],
    f = [],
    D = [],
    C = [],
    L = !0,
    M = !1,
    h = !1,
    p = !0,
    m = !1,
    v = null,
    P = T.rsA.ALL,
    b = null,
    x = {},
    G = 0;
function F(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, i;
            let a = [],
                o = null,
                E = null,
                u = null;
            if ((null != e.reason && a.push(new c.ms(T.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new c.ms(t.key, t.old_value, t.new_value);
                    a.push(e), e.key === T.zUn.NAME ? (o = e) : e.key === T.zUn.TYPE ? (u = e) : e.key === T.zUn.TITLE && (E = e);
                }
            if (e.action_type === T.rsA.MEMBER_PRUNE) {
                let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    n = new c.ms(T.zUn.PRUNE_DELETE_DAYS, null, t);
                a.push(n);
            }
            e.action_type === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (l = e.options) || void 0 === l ? void 0 : l.auto_moderation_rule_name) != null && a.push(new c.ms(T.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (r = e.options) || void 0 === r ? void 0 : r.status) != null && a.push(new c.ms(T.zUn.STATUS, null, e.options.status));
            let d = new c.ZP({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: a,
                    options: e.options
                }),
                A = t[0];
            if (
                (function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && s().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, 'minutes') < r && n < l && t.targetType !== T.KFR.INVITE && t.action !== T.rsA.MESSAGE_DELETE && t.action !== T.rsA.MESSAGE_BULK_DELETE && t.action !== T.rsA.MESSAGE_PIN && t.action !== T.rsA.MESSAGE_UNPIN && t.action !== T.rsA.MEMBER_MOVE && t.action !== T.rsA.MEMBER_DISCONNECT && t.action !== T.rsA.BOT_ADD && t.action !== T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.rsA.MEMBER_PRUNE;
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
                let e = null !== (i = null == o ? void 0 : o.oldValue) && void 0 !== i ? i : null == E ? void 0 : E.oldValue;
                (d.targetType === T.KFR.CHANNEL || d.targetType === T.KFR.CHANNEL_OVERWRITE) && null !== u && (0, _.r8)(u.oldValue) && (e = '#'.concat(e)), null == x[d.targetType] ? (x[d.targetType] = { [d.targetId]: e }) : (x[d.targetType][d.targetId] = e);
            }
            (n = 0), t.unshift(d);
        }),
        t
    );
}
function V(e) {
    let { section: t } = e;
    if (t !== T.pNK.AUDIT_LOG) return !1;
    let n = d.ZP.getMembers(N),
        r = A.Z.getGuild(N),
        l = null != N ? A.Z.getRoles(N) : void 0;
    R = s()(n)
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
class y extends (r = E.ZP.Store) {
    get logs() {
        return g;
    }
    get integrations() {
        return O;
    }
    get webhooks() {
        return S;
    }
    get guildScheduledEvents() {
        return U;
    }
    get automodRules() {
        return f;
    }
    get threads() {
        return D;
    }
    get applicationCommands() {
        return C;
    }
    get isInitialLoading() {
        return L;
    }
    get isLoading() {
        return M;
    }
    get isLoadingNextPage() {
        return h;
    }
    get hasOlderLogs() {
        return p;
    }
    get hasError() {
        return m;
    }
    get userIds() {
        return R;
    }
    get userIdFilter() {
        return v;
    }
    get targetIdFilter() {
        return b;
    }
    get actionFilter() {
        return P;
    }
    get deletedTargets() {
        return x;
    }
    get groupedFetchCount() {
        return G;
    }
}
(i = 'GuildSettingsAuditLogStore'),
    (l = 'displayName') in y
        ? Object.defineProperty(y, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[l] = i);
let B = new y(u.Z, {
    AUDIT_LOG_FETCH_START: function () {
        M = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        (G = 0), (L = !1), (M = !1), (p = !0), (m = !1), (g = F(e.logs)), (O = e.integrations), (S = e.webhooks), (U = e.guildScheduledEvents), (f = null !== (t = e.automodRules) && void 0 !== t ? t : []), (D = e.threads), (C = e.applicationCommands), e.logs.length < T.Rg9 && (p = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (M = !1), (m = !0), (g = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (h = !0), t && G++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let { logs: t, integrations: n, webhooks: r, guildScheduledEvents: l, automodRules: i, threads: a, applicationCommands: s } = e;
        if (((h = !1), (O = n), (S = r), (U = l), (f = i), (D = a), (C = s), (0 === t.length || t.length < T.Rg9) && (p = !1), t.length > 0)) {
            let e = F(t);
            g = [...g, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        h = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        P = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        v = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        b = t;
    },
    GUILD_SETTINGS_SET_SECTION: V,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (N = t), (b = null), V({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (g = []), (R = []), (P = T.rsA.ALL), (v = null), (b = null), (x = {}), (G = 0), (L = !0), (O = []), (S = []), (U = []), (f = []), (D = []);
    }
});
