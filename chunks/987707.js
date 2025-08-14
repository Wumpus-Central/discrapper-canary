n.d(t, { Z: () => F }), n(583741), n(539854), n(388685), n(290780);
var r,
    l,
    i = n(392711),
    s = n.n(i),
    a = n(149765),
    o = n(442837),
    u = n(570140),
    c = n(387667),
    E = n(131704),
    d = n(345162),
    _ = n(271383),
    A = n(485386),
    T = n(430824),
    m = n(981631);
let I = a.$e(
        m.Plq.KICK_MEMBERS,
        m.Plq.BAN_MEMBERS,
        m.Plq.ADMINISTRATOR,
        m.Plq.MANAGE_CHANNELS,
        m.Plq.MANAGE_GUILD,
        m.Plq.MANAGE_MESSAGES,
        m.Plq.MANAGE_NICKNAMES,
        m.Plq.MANAGE_ROLES,
        m.Plq.MANAGE_WEBHOOKS,
        m.Plq.MANAGE_GUILD_EXPRESSIONS,
        m.Plq.MOVE_MEMBERS,
        m.Plq.MUTE_MEMBERS,
        m.Plq.DEAFEN_MEMBERS,
    ),
    g = null,
    N = [],
    h = [],
    f = [],
    O = [],
    p = [],
    R = [],
    S = [],
    C = [],
    D = !0,
    L = !1,
    U = !1,
    M = !0,
    v = !1,
    b = null,
    x = m.rsA.ALL,
    P = null,
    j = {},
    y = 0;
function w(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, i;
            let a = [],
                o = null,
                u = null,
                d = null;
            if ((null != e.reason && a.push(new c.ms(m.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new c.ms(t.key, t.old_value, t.new_value);
                    a.push(e),
                        e.key === m.zUn.NAME
                            ? (o = e)
                            : e.key === m.zUn.TYPE
                              ? (d = e)
                              : e.key === m.zUn.TITLE && (u = e);
                }
            if (e.action_type === m.rsA.MEMBER_PRUNE) {
                let t =
                        null != e && null != e.options && null != e.options.delete_member_days
                            ? e.options.delete_member_days
                            : 1,
                    n = new c.ms(m.zUn.PRUNE_DELETE_DAYS, null, t);
                a.push(n);
            }
            e.action_type === m.rsA.AUTO_MODERATION_BLOCK_MESSAGE &&
                (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null &&
                a.push(new c.ms(m.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)),
                e.action_type === m.rsA.VOICE_CHANNEL_STATUS_CREATE &&
                    (null == (r = e.options) ? void 0 : r.status) != null &&
                    a.push(new c.ms(m.zUn.STATUS, null, e.options.status));
            let _ = new c.ZP({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: a,
                    options: e.options,
                }),
                A = t[0];
            if (
                (function (e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return (
                        null != e &&
                        e.action === t.action &&
                        e.targetId === t.targetId &&
                        e.userId === t.userId &&
                        s().isEqual(e.options, t.options) &&
                        t.timestampStart.diff(e.timestampStart, "minutes") < r &&
                        n < l &&
                        t.targetType !== m.KFR.INVITE &&
                        t.action !== m.rsA.MESSAGE_DELETE &&
                        t.action !== m.rsA.MESSAGE_BULK_DELETE &&
                        t.action !== m.rsA.MESSAGE_PIN &&
                        t.action !== m.rsA.MESSAGE_UNPIN &&
                        t.action !== m.rsA.MEMBER_MOVE &&
                        t.action !== m.rsA.MEMBER_DISCONNECT &&
                        t.action !== m.rsA.BOT_ADD &&
                        t.action !== m.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE &&
                        t.action !== m.rsA.MEMBER_PRUNE
                    );
                })(A, _, n)
            ) {
                (t[0] = A.merge({
                    changes: [...A.changes, ..._.changes],
                    timestampEnd: _.timestampStart,
                })),
                    n++;
                return;
            }
            if (_.actionType === m.vB8.DELETE && (null != o || null != u)) {
                let e = null != (i = null == o ? void 0 : o.oldValue) ? i : null == u ? void 0 : u.oldValue;
                (_.targetType === m.KFR.CHANNEL || _.targetType === m.KFR.CHANNEL_OVERWRITE) &&
                    null !== d &&
                    (0, E.r8)(d.oldValue) &&
                    (e = "#".concat(e)),
                    null == j[_.targetType]
                        ? (j[_.targetType] = { [_.targetId]: e })
                        : (j[_.targetType][_.targetId] = e);
            }
            (n = 0), t.unshift(_);
        }),
        t
    );
}
function G(e) {
    let { section: t } = e;
    if (t !== m.pNK.AUDIT_LOG) return !1;
    let n = _.ZP.getMembers(g),
        r = T.Z.getGuild(g),
        l = null != g ? A.Z.getUnsafeMutableRoles(g) : void 0;
    f = s()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && (0, d._N)(n, I);
                }
            }),
        )
        .map((e) => e.userId)
        .value();
}
class k extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, A.Z, _.ZP);
    }
    get logs() {
        return N;
    }
    get integrations() {
        return h;
    }
    get webhooks() {
        return O;
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
        return D;
    }
    get isLoading() {
        return L;
    }
    get isLoadingNextPage() {
        return U;
    }
    get hasOlderLogs() {
        return M;
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
        return P;
    }
    get actionFilter() {
        return x;
    }
    get deletedTargets() {
        return j;
    }
    get groupedFetchCount() {
        return y;
    }
}
(l = "displayName") in k
    ? Object.defineProperty(k, l, {
          value: "GuildSettingsAuditLogStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (k[l] = "GuildSettingsAuditLogStore");
let F = new k(u.Z, {
    AUDIT_LOG_FETCH_START: function () {
        L = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        (y = 0),
            (D = !1),
            (L = !1),
            (M = !0),
            (v = !1),
            (N = w(e.logs)),
            (h = e.integrations),
            (O = e.webhooks),
            (p = e.guildScheduledEvents),
            (R = null != (t = e.automodRules) ? t : []),
            (S = e.threads),
            (C = e.applicationCommands),
            e.logs.length < m.Rg9 && (M = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (L = !1), (v = !0), (N = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (U = !0), t && y++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let {
            logs: t,
            integrations: n,
            webhooks: r,
            guildScheduledEvents: l,
            automodRules: i,
            threads: s,
            applicationCommands: a,
        } = e;
        if (
            ((U = !1),
            (h = n),
            (O = r),
            (p = l),
            (R = i),
            (S = s),
            (C = a),
            (0 === t.length || t.length < m.Rg9) && (M = !1),
            t.length > 0)
        ) {
            let e = w(t);
            N = [...N, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        U = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        x = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        b = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        P = t;
    },
    GUILD_SETTINGS_SET_SECTION: G,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (g = t), (P = null), G({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (N = []),
            (f = []),
            (x = m.rsA.ALL),
            (b = null),
            (P = null),
            (j = {}),
            (y = 0),
            (D = !0),
            (h = []),
            (O = []),
            (p = []),
            (R = []),
            (S = []);
    },
});
