(t.d(e, { Z: () => G }), t(583741), t(539854), t(388685), t(290780));
var n,
    r,
    l,
    i = t(392711),
    s = t.n(i),
    a = t(149765),
    o = t(442837),
    g = t(570140),
    f = t(387667),
    v = t(131704),
    c = t(345162),
    h = t(271383),
    E = t(485386),
    u = t(430824),
    d = t(981631);
let C = a.$e(d.Plq.KICK_MEMBERS, d.Plq.BAN_MEMBERS, d.Plq.ADMINISTRATOR, d.Plq.MANAGE_CHANNELS, d.Plq.MANAGE_GUILD, d.Plq.MANAGE_MESSAGES, d.Plq.MANAGE_NICKNAMES, d.Plq.MANAGE_ROLES, d.Plq.MANAGE_WEBHOOKS, d.Plq.MANAGE_GUILD_EXPRESSIONS, d.Plq.MOVE_MEMBERS, d.Plq.MUTE_MEMBERS, d.Plq.DEAFEN_MEMBERS),
    B = null,
    w = [],
    D = [],
    M = [],
    I = [],
    p = [],
    H = [],
    b = [],
    Q = [],
    O = !0,
    P = !1,
    V = !1,
    j = !0,
    T = !1,
    y = null,
    m = d.rsA.ALL,
    L = null,
    x = {},
    Z = 0;
function N(A) {
    let e = [],
        t = 0;
    return (
        A.reverse().forEach((A) => {
            var n, r, l;
            let i = [],
                a = null,
                o = null,
                g = null;
            if ((null != A.reason && i.push(new f.ms(d.zUn.REASON, null, A.reason)), null != A.changes))
                for (let e of A.changes) {
                    let A = new f.ms(e.key, e.old_value, e.new_value);
                    (i.push(A), A.key === d.zUn.NAME ? (a = A) : A.key === d.zUn.TYPE ? (g = A) : A.key === d.zUn.TITLE && (o = A));
                }
            if (A.action_type === d.rsA.MEMBER_PRUNE) {
                let e = null != A && null != A.options && null != A.options.delete_member_days ? A.options.delete_member_days : 1,
                    t = new f.ms(d.zUn.PRUNE_DELETE_DAYS, null, e);
                i.push(t);
            }
            (A.action_type === d.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null == (r = A.options) ? void 0 : r.auto_moderation_rule_name) != null && i.push(new f.ms(d.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, A.options.auto_moderation_rule_name)), A.action_type === d.rsA.VOICE_CHANNEL_STATUS_CREATE && (null == (n = A.options) ? void 0 : n.status) != null && i.push(new f.ms(d.zUn.STATUS, null, A.options.status)));
            let c = new f.ZP({
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
                    return null != A && A.action === e.action && A.targetId === e.targetId && A.userId === e.userId && s().isEqual(A.options, e.options) && e.timestampStart.diff(A.timestampStart, 'minutes') < n && t < r && e.targetType !== d.KFR.INVITE && e.action !== d.rsA.MESSAGE_DELETE && e.action !== d.rsA.MESSAGE_BULK_DELETE && e.action !== d.rsA.MESSAGE_PIN && e.action !== d.rsA.MESSAGE_UNPIN && e.action !== d.rsA.MEMBER_MOVE && e.action !== d.rsA.MEMBER_DISCONNECT && e.action !== d.rsA.BOT_ADD && e.action !== d.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && e.action !== d.rsA.MEMBER_PRUNE;
                })(h, c, t)
            ) {
                ((e[0] = h.merge({
                    changes: [...h.changes, ...c.changes],
                    timestampEnd: c.timestampStart
                })),
                    t++);
                return;
            }
            if (c.actionType === d.vB8.DELETE && (null != a || null != o)) {
                let A = null != (l = null == a ? void 0 : a.oldValue) ? l : null == o ? void 0 : o.oldValue;
                ((c.targetType === d.KFR.CHANNEL || c.targetType === d.KFR.CHANNEL_OVERWRITE) && null !== g && (0, v.r8)(g.oldValue) && (A = '#'.concat(A)), null == x[c.targetType] ? (x[c.targetType] = { [c.targetId]: A }) : (x[c.targetType][c.targetId] = A));
            }
            ((t = 0), e.unshift(c));
        }),
        e
    );
}
function S(A) {
    let { section: e } = A;
    if (e !== d.pNK.AUDIT_LOG) return !1;
    let t = h.ZP.getMembers(B),
        n = u.Z.getGuild(B),
        r = null != B ? E.Z.getUnsafeMutableRoles(B) : void 0;
    M = s()(t)
        .filter((A) =>
            A.roles.some((e) => {
                if (null != n) {
                    if (A.userId === n.ownerId) return !0;
                    let t = null == r ? void 0 : r[e];
                    return null != t && (0, c._N)(t, C);
                }
            })
        )
        .map((A) => A.userId)
        .value();
}
class R extends (n = o.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, E.Z, h.ZP);
    }
    get logs() {
        return w;
    }
    get integrations() {
        return D;
    }
    get webhooks() {
        return I;
    }
    get guildScheduledEvents() {
        return p;
    }
    get automodRules() {
        return H;
    }
    get threads() {
        return b;
    }
    get applicationCommands() {
        return Q;
    }
    get isInitialLoading() {
        return O;
    }
    get isLoading() {
        return P;
    }
    get isLoadingNextPage() {
        return V;
    }
    get hasOlderLogs() {
        return j;
    }
    get hasError() {
        return T;
    }
    get userIds() {
        return M;
    }
    get userIdFilter() {
        return y;
    }
    get targetIdFilter() {
        return L;
    }
    get actionFilter() {
        return m;
    }
    get deletedTargets() {
        return x;
    }
    get groupedFetchCount() {
        return Z;
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
let G = new R(g.Z, {
    AUDIT_LOG_FETCH_START: function () {
        P = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (A) {
        var e;
        ((Z = 0), (O = !1), (P = !1), (j = !0), (T = !1), (w = N(A.logs)), (D = A.integrations), (I = A.webhooks), (p = A.guildScheduledEvents), (H = null != (e = A.automodRules) ? e : []), (b = A.threads), (Q = A.applicationCommands), A.logs.length < d.Rg9 && (j = !1));
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        ((P = !1), (T = !0), (w = []));
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (A) {
        let { isGroupedFetch: e } = A;
        ((V = !0), e && Z++);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (A) {
        let { logs: e, integrations: t, webhooks: n, guildScheduledEvents: r, automodRules: l, threads: i, applicationCommands: s } = A;
        if (((V = !1), (D = t), (I = n), (p = r), (H = l), (b = i), (Q = s), (0 === e.length || e.length < d.Rg9) && (j = !1), e.length > 0)) {
            let A = N(e);
            w = [...w, ...A];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        V = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (A) {
        let { action: e } = A;
        m = e;
    },
    AUDIT_LOG_FILTER_BY_USER: function (A) {
        let { userId: e } = A;
        y = e;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (A) {
        let { targetId: e } = A;
        L = e;
    },
    GUILD_SETTINGS_SET_SECTION: S,
    GUILD_SETTINGS_INIT: function (A) {
        let { guildId: e, section: t } = A;
        return ((B = e), (L = null), S({ section: t }));
    },
    GUILD_SETTINGS_CLOSE: function () {
        ((w = []), (M = []), (m = d.rsA.ALL), (y = null), (L = null), (x = {}), (Z = 0), (O = !0), (D = []), (I = []), (p = []), (H = []), (b = []));
    }
});
