(t.d(e, { Z: () => S }), t(583741), t(539854), t(388685), t(290780));
var n,
    r,
    l,
    i = t(392711),
    s = t.n(i),
    a = t(149765),
    o = t(442837),
    g = t(570140),
    f = t(387667),
    c = t(131704),
    v = t(271383),
    h = t(485386),
    u = t(430824),
    E = t(981631);
let d = [E.Plq.KICK_MEMBERS, E.Plq.BAN_MEMBERS, E.Plq.ADMINISTRATOR, E.Plq.MANAGE_CHANNELS, E.Plq.MANAGE_GUILD, E.Plq.MANAGE_MESSAGES, E.Plq.MANAGE_NICKNAMES, E.Plq.MANAGE_ROLES, E.Plq.MANAGE_WEBHOOKS, E.Plq.MANAGE_GUILD_EXPRESSIONS, E.Plq.MOVE_MEMBERS, E.Plq.MUTE_MEMBERS, E.Plq.DEAFEN_MEMBERS],
    C = null,
    B = [],
    w = [],
    D = [],
    M = [],
    I = [],
    p = [],
    H = [],
    b = [],
    Q = !0,
    O = !1,
    P = !1,
    V = !0,
    j = !1,
    T = null,
    y = E.rsA.ALL,
    m = null,
    L = {},
    x = 0;
function Z(A) {
    let e = [],
        t = 0;
    return (
        A.reverse().forEach((A) => {
            var n, r, l;
            let i = [],
                a = null,
                o = null,
                g = null;
            if ((null != A.reason && i.push(new f.ms(E.zUn.REASON, null, A.reason)), null != A.changes))
                for (let e of A.changes) {
                    let A = new f.ms(e.key, e.old_value, e.new_value);
                    (i.push(A), A.key === E.zUn.NAME ? (a = A) : A.key === E.zUn.TYPE ? (g = A) : A.key === E.zUn.TITLE && (o = A));
                }
            if (A.action_type === E.rsA.MEMBER_PRUNE) {
                let e = null != A && null != A.options && null != A.options.delete_member_days ? A.options.delete_member_days : 1,
                    t = new f.ms(E.zUn.PRUNE_DELETE_DAYS, null, e);
                i.push(t);
            }
            (A.action_type === E.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (r = A.options) ? void 0 : r.auto_moderation_rule_name) != null && i.push(new f.ms(E.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, A.options.auto_moderation_rule_name)), A.action_type === E.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (n = A.options) ? void 0 : n.status) != null && i.push(new f.ms(E.zUn.STATUS, null, A.options.status)));
            let v = new f.ZP({
                    id: A.id,
                    action: A.action_type,
                    targetId: A.target_id,
                    userId: A.user_id,
                    changes: i,
                    options: A.options
                }),
                h = e[0];
            if (
                (function (A, e, t) {
                    let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 50;
                    return null != A && A.action === e.action && A.targetId === e.targetId && A.userId === e.userId && s().isEqual(A.options, e.options) && e.timestampStart.diff(A.timestampStart, 'minutes') < n && t < r && e.targetType !== E.KFR.INVITE && e.action !== E.rsA.MESSAGE_DELETE && e.action !== E.rsA.MESSAGE_BULK_DELETE && e.action !== E.rsA.MESSAGE_PIN && e.action !== E.rsA.MESSAGE_UNPIN && e.action !== E.rsA.MEMBER_MOVE && e.action !== E.rsA.MEMBER_DISCONNECT && e.action !== E.rsA.BOT_ADD && e.action !== E.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && e.action !== E.rsA.MEMBER_PRUNE;
                })(h, v, t)
            ) {
                ((e[0] = h.merge({
                    changes: [...h.changes, ...v.changes],
                    timestampEnd: v.timestampStart
                })),
                    t++);
                return;
            }
            if (v.actionType === E.vB8.DELETE && (null != a || null != o)) {
                let A = null != (l = null == a ? void 0 : a.oldValue) ? l : null == o ? void 0 : o.oldValue;
                ((v.targetType === E.KFR.CHANNEL || v.targetType === E.KFR.CHANNEL_OVERWRITE) && null !== g && (0, c.r8)(g.oldValue) && (A = '#'.concat(A)), null == L[v.targetType] ? (L[v.targetType] = { [v.targetId]: A }) : (L[v.targetType][v.targetId] = A));
            }
            ((t = 0), e.unshift(v));
        }),
        e
    );
}
function N(A) {
    let { section: e } = A;
    if (e !== E.pNK.AUDIT_LOG) return !1;
    let t = v.ZP.getMembers(C),
        n = u.Z.getGuild(C),
        r = null != C ? h.Z.getRoles(C) : void 0;
    D = s()(t)
        .filter((A) =>
            A.roles.some((e) => {
                if (null != n) {
                    if (A.userId === n.ownerId) return !0;
                    let t = null == r ? void 0 : r[e];
                    return null != t && d.some((A) => a.e$(t.permissions, A));
                }
            })
        )
        .map((A) => A.userId)
        .value();
}
class R extends (n = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, h.Z, v.ZP);
    }
    get logs() {
        return B;
    }
    get integrations() {
        return w;
    }
    get webhooks() {
        return M;
    }
    get guildScheduledEvents() {
        return I;
    }
    get automodRules() {
        return p;
    }
    get threads() {
        return H;
    }
    get applicationCommands() {
        return b;
    }
    get isInitialLoading() {
        return Q;
    }
    get isLoading() {
        return O;
    }
    get isLoadingNextPage() {
        return P;
    }
    get hasOlderLogs() {
        return V;
    }
    get hasError() {
        return j;
    }
    get userIds() {
        return D;
    }
    get userIdFilter() {
        return T;
    }
    get targetIdFilter() {
        return m;
    }
    get actionFilter() {
        return y;
    }
    get deletedTargets() {
        return L;
    }
    get groupedFetchCount() {
        return x;
    }
}
((l = 'GuildSettingsAuditLogStore'),
    (r = 'displayName') in R
        ? Object.defineProperty(R, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (R[r] = l));
let S = new R(g.Z, {
    AUDIT_LOG_FETCH_START: function () {
        O = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (A) {
        var e;
        ((x = 0), (Q = !1), (O = !1), (V = !0), (j = !1), (B = Z(A.logs)), (w = A.integrations), (M = A.webhooks), (I = A.guildScheduledEvents), (p = null != (e = A.automodRules) ? e : []), (H = A.threads), (b = A.applicationCommands), A.logs.length < E.Rg9 && (V = !1));
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        ((O = !1), (j = !0), (B = []));
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (A) {
        let { isGroupedFetch: e } = A;
        ((P = !0), e && x++);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (A) {
        let { logs: e, integrations: t, webhooks: n, guildScheduledEvents: r, automodRules: l, threads: i, applicationCommands: s } = A;
        if (((P = !1), (w = t), (M = n), (I = r), (p = l), (H = i), (b = s), (0 === e.length || e.length < E.Rg9) && (V = !1), e.length > 0)) {
            let A = Z(e);
            B = [...B, ...A];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        P = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (A) {
        let { action: e } = A;
        y = e;
    },
    AUDIT_LOG_FILTER_BY_USER: function (A) {
        let { userId: e } = A;
        T = e;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (A) {
        let { targetId: e } = A;
        m = e;
    },
    GUILD_SETTINGS_SET_SECTION: N,
    GUILD_SETTINGS_INIT: function (A) {
        let { guildId: e, section: t } = A;
        return ((C = e), (m = null), N({ section: t }));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((B = []), (D = []), (y = E.rsA.ALL), (T = null), (m = null), (L = {}), (x = 0), (Q = !0), (w = []), (M = []), (I = []), (p = []), (H = []));
    }
});
