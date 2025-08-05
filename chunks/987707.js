(n.d(t, { Z: () => z }), n(583741), n(539854), n(388685), n(290780));
var r,
    l,
    i,
    s = n(392711),
    a = n.n(s),
    o = n(149765),
    u = n(442837),
    c = n(570140),
    E = n(387667),
    d = n(131704),
    _ = n(345162),
    A = n(271383),
    T = n(485386),
    I = n(430824),
    g = n(981631);
let m = o.$e(g.Plq.KICK_MEMBERS, g.Plq.BAN_MEMBERS, g.Plq.ADMINISTRATOR, g.Plq.MANAGE_CHANNELS, g.Plq.MANAGE_GUILD, g.Plq.MANAGE_MESSAGES, g.Plq.MANAGE_NICKNAMES, g.Plq.MANAGE_ROLES, g.Plq.MANAGE_WEBHOOKS, g.Plq.MANAGE_GUILD_EXPRESSIONS, g.Plq.MOVE_MEMBERS, g.Plq.MUTE_MEMBERS, g.Plq.DEAFEN_MEMBERS),
    N = null,
    O = [],
    f = [],
    R = [],
    S = [],
    C = [],
    h = [],
    p = [],
    D = [],
    U = !0,
    L = !1,
    v = !1,
    b = !0,
    M = !1,
    x = null,
    P = g.rsA.ALL,
    j = null,
    y = {},
    G = 0;
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
            if ((null != e.reason && s.push(new E.ms(g.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new E.ms(t.key, t.old_value, t.new_value);
                    (s.push(e), e.key === g.zUn.NAME ? (o = e) : e.key === g.zUn.TYPE ? (c = e) : e.key === g.zUn.TITLE && (u = e));
                }
            if (e.action_type === g.rsA.MEMBER_PRUNE) {
                let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    n = new E.ms(g.zUn.PRUNE_DELETE_DAYS, null, t);
                s.push(n);
            }
            (e.action_type === g.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null && s.push(new E.ms(g.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === g.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? void 0 : r.status) != null && s.push(new E.ms(g.zUn.STATUS, null, e.options.status)));
            let _ = new E.ZP({
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
                    return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && a().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, 'minutes') < r && n < l && t.targetType !== g.KFR.INVITE && t.action !== g.rsA.MESSAGE_DELETE && t.action !== g.rsA.MESSAGE_BULK_DELETE && t.action !== g.rsA.MESSAGE_PIN && t.action !== g.rsA.MESSAGE_UNPIN && t.action !== g.rsA.MEMBER_MOVE && t.action !== g.rsA.MEMBER_DISCONNECT && t.action !== g.rsA.BOT_ADD && t.action !== g.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== g.rsA.MEMBER_PRUNE;
                })(A, _, n)
            ) {
                ((t[0] = A.merge({
                    changes: [...A.changes, ..._.changes],
                    timestampEnd: _.timestampStart
                })),
                    n++);
                return;
            }
            if (_.actionType === g.vB8.DELETE && (null != o || null != u)) {
                let e = null != (i = null == o ? void 0 : o.oldValue) ? i : null == u ? void 0 : u.oldValue;
                ((_.targetType === g.KFR.CHANNEL || _.targetType === g.KFR.CHANNEL_OVERWRITE) && null !== c && (0, d.r8)(c.oldValue) && (e = '#'.concat(e)), null == y[_.targetType] ? (y[_.targetType] = { [_.targetId]: e }) : (y[_.targetType][_.targetId] = e));
            }
            ((n = 0), t.unshift(_));
        }),
        t
    );
}
function F(e) {
    let { section: t } = e;
    if (t !== g.pNK.AUDIT_LOG) return !1;
    let n = A.ZP.getMembers(N),
        r = I.Z.getGuild(N),
        l = null != N ? T.Z.getUnsafeMutableRoles(N) : void 0;
    R = a()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && (0, _._N)(n, m);
                }
            })
        )
        .map((e) => e.userId)
        .value();
}
class B extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, T.Z, A.ZP);
    }
    get logs() {
        return O;
    }
    get integrations() {
        return f;
    }
    get webhooks() {
        return S;
    }
    get guildScheduledEvents() {
        return C;
    }
    get automodRules() {
        return h;
    }
    get threads() {
        return p;
    }
    get applicationCommands() {
        return D;
    }
    get isInitialLoading() {
        return U;
    }
    get isLoading() {
        return L;
    }
    get isLoadingNextPage() {
        return v;
    }
    get hasOlderLogs() {
        return b;
    }
    get hasError() {
        return M;
    }
    get userIds() {
        return R;
    }
    get userIdFilter() {
        return x;
    }
    get targetIdFilter() {
        return j;
    }
    get actionFilter() {
        return P;
    }
    get deletedTargets() {
        return y;
    }
    get groupedFetchCount() {
        return G;
    }
}
((i = 'GuildSettingsAuditLogStore'),
    (l = 'displayName') in B
        ? Object.defineProperty(B, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (B[l] = i));
let z = new B(c.Z, {
    AUDIT_LOG_FETCH_START: function () {
        L = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        ((G = 0), (U = !1), (L = !1), (b = !0), (M = !1), (O = w(e.logs)), (f = e.integrations), (S = e.webhooks), (C = e.guildScheduledEvents), (h = null != (t = e.automodRules) ? t : []), (p = e.threads), (D = e.applicationCommands), e.logs.length < g.Rg9 && (b = !1));
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        ((L = !1), (M = !0), (O = []));
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        ((v = !0), t && G++);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let { logs: t, integrations: n, webhooks: r, guildScheduledEvents: l, automodRules: i, threads: s, applicationCommands: a } = e;
        if (((v = !1), (f = n), (S = r), (C = l), (h = i), (p = s), (D = a), (0 === t.length || t.length < g.Rg9) && (b = !1), t.length > 0)) {
            let e = w(t);
            O = [...O, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        v = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        P = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        x = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        j = t;
    },
    GUILD_SETTINGS_SET_SECTION: F,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return ((N = t), (j = null), F({ section: n }));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((O = []), (R = []), (P = g.rsA.ALL), (x = null), (j = null), (y = {}), (G = 0), (U = !0), (f = []), (S = []), (C = []), (h = []), (p = []));
    }
});
