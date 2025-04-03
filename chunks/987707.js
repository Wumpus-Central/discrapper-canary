n.d(t, { Z: () => W }), n(978209), n(653041), n(47120), n(733860);
var r,
    l,
    a,
    s = n(392711),
    i = n.n(s),
    o = n(149765),
    E = n(442837),
    c = n(570140),
    u = n(387667),
    _ = n(131704),
    d = n(271383),
    A = n(430824),
    T = n(981631);
let N = [T.Plq.KICK_MEMBERS, T.Plq.BAN_MEMBERS, T.Plq.ADMINISTRATOR, T.Plq.MANAGE_CHANNELS, T.Plq.MANAGE_GUILD, T.Plq.MANAGE_MESSAGES, T.Plq.MANAGE_NICKNAMES, T.Plq.MANAGE_ROLES, T.Plq.MANAGE_WEBHOOKS, T.Plq.MANAGE_GUILD_EXPRESSIONS, T.Plq.MOVE_MEMBERS, T.Plq.MUTE_MEMBERS, T.Plq.DEAFEN_MEMBERS],
    I = null,
    O = [],
    g = [],
    f = [],
    R = [],
    p = [],
    S = [],
    h = [],
    U = [],
    D = !0,
    L = !1,
    C = !1,
    m = !0,
    M = !1,
    b = null,
    v = T.rsA.ALL,
    P = null,
    y = {},
    x = 0;
function j(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, a;
            let s = [],
                o = null,
                E = null,
                c = null;
            if ((null != e.reason && s.push(new u.ms(T.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new u.ms(t.key, t.old_value, t.new_value);
                    s.push(e), e.key === T.zUn.NAME ? (o = e) : e.key === T.zUn.TYPE ? (c = e) : e.key === T.zUn.TITLE && (E = e);
                }
            if (e.action_type === T.rsA.MEMBER_PRUNE) {
                let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    n = new u.ms(T.zUn.PRUNE_DELETE_DAYS, null, t);
                s.push(n);
            }
            e.action_type === T.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null && s.push(new u.ms(T.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === T.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (r = e.options) ? void 0 : r.status) != null && s.push(new u.ms(T.zUn.STATUS, null, e.options.status));
            let d = new u.ZP({
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
                    return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && i().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, 'minutes') < r && n < l && t.targetType !== T.KFR.INVITE && t.action !== T.rsA.MESSAGE_DELETE && t.action !== T.rsA.MESSAGE_BULK_DELETE && t.action !== T.rsA.MESSAGE_PIN && t.action !== T.rsA.MESSAGE_UNPIN && t.action !== T.rsA.MEMBER_MOVE && t.action !== T.rsA.MEMBER_DISCONNECT && t.action !== T.rsA.BOT_ADD && t.action !== T.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== T.rsA.MEMBER_PRUNE;
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
                let e = null != (a = null == o ? void 0 : o.oldValue) ? a : null == E ? void 0 : E.oldValue;
                (d.targetType === T.KFR.CHANNEL || d.targetType === T.KFR.CHANNEL_OVERWRITE) && null !== c && (0, _.r8)(c.oldValue) && (e = '#'.concat(e)), null == y[d.targetType] ? (y[d.targetType] = { [d.targetId]: e }) : (y[d.targetType][d.targetId] = e);
            }
            (n = 0), t.unshift(d);
        }),
        t
    );
}
function G(e) {
    let { section: t } = e;
    if (t !== T.pNK.AUDIT_LOG) return !1;
    let n = d.ZP.getMembers(I),
        r = A.Z.getGuild(I),
        l = null != I ? A.Z.getRoles(I) : void 0;
    f = i()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && N.some((e) => o.e$(n.permissions, e));
                }
            })
        )
        .map((e) => e.userId)
        .value();
}
class F extends (r = E.ZP.Store) {
    get logs() {
        return O;
    }
    get integrations() {
        return g;
    }
    get webhooks() {
        return R;
    }
    get guildScheduledEvents() {
        return p;
    }
    get automodRules() {
        return S;
    }
    get threads() {
        return h;
    }
    get applicationCommands() {
        return U;
    }
    get isInitialLoading() {
        return D;
    }
    get isLoading() {
        return L;
    }
    get isLoadingNextPage() {
        return C;
    }
    get hasOlderLogs() {
        return m;
    }
    get hasError() {
        return M;
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
        return v;
    }
    get deletedTargets() {
        return y;
    }
    get groupedFetchCount() {
        return x;
    }
}
(a = 'GuildSettingsAuditLogStore'),
    (l = 'displayName') in F
        ? Object.defineProperty(F, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (F[l] = a);
let W = new F(c.Z, {
    AUDIT_LOG_FETCH_START: function () {
        L = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        (x = 0), (D = !1), (L = !1), (m = !0), (M = !1), (O = j(e.logs)), (g = e.integrations), (R = e.webhooks), (p = e.guildScheduledEvents), (S = null != (t = e.automodRules) ? t : []), (h = e.threads), (U = e.applicationCommands), e.logs.length < T.Rg9 && (m = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (L = !1), (M = !0), (O = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (C = !0), t && x++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let { logs: t, integrations: n, webhooks: r, guildScheduledEvents: l, automodRules: a, threads: s, applicationCommands: i } = e;
        if (((C = !1), (g = n), (R = r), (p = l), (S = a), (h = s), (U = i), (0 === t.length || t.length < T.Rg9) && (m = !1), t.length > 0)) {
            let e = j(t);
            O = [...O, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        C = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        v = t;
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
        return (I = t), (P = null), G({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (O = []), (f = []), (v = T.rsA.ALL), (b = null), (P = null), (y = {}), (x = 0), (D = !0), (g = []), (R = []), (p = []), (S = []), (h = []);
    }
});
