n(653041), n(47120), n(733860);
var r,
    l,
    i,
    s,
    a = n(392711),
    o = n.n(a),
    E = n(149765),
    u = n(442837),
    c = n(570140),
    d = n(387667),
    _ = n(131704),
    A = n(271383),
    T = n(430824),
    I = n(981631);
let N = [I.Plq.KICK_MEMBERS, I.Plq.BAN_MEMBERS, I.Plq.ADMINISTRATOR, I.Plq.MANAGE_CHANNELS, I.Plq.MANAGE_GUILD, I.Plq.MANAGE_MESSAGES, I.Plq.MANAGE_NICKNAMES, I.Plq.MANAGE_ROLES, I.Plq.MANAGE_WEBHOOKS, I.Plq.MANAGE_GUILD_EXPRESSIONS, I.Plq.MOVE_MEMBERS, I.Plq.MUTE_MEMBERS, I.Plq.DEAFEN_MEMBERS],
    f = null,
    g = [],
    O = [],
    R = [],
    S = [],
    D = [],
    h = [],
    p = [],
    U = [],
    C = !0,
    L = !1,
    M = !1,
    m = !0,
    v = !1,
    b = null,
    P = I.rsA.ALL,
    x = null,
    G = {},
    F = 0;
function y(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, i;
            let s = [],
                a = null,
                E = null,
                u = null;
            if ((null != e.reason && s.push(new d.ms(I.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new d.ms(t.key, t.old_value, t.new_value);
                    s.push(e), e.key === I.zUn.NAME ? (a = e) : e.key === I.zUn.TYPE ? (u = e) : e.key === I.zUn.TITLE && (E = e);
                }
            if (e.action_type === I.rsA.MEMBER_PRUNE) {
                let t = null != e && null != e.options && null != e.options.delete_member_days ? e.options.delete_member_days : 1,
                    n = new d.ms(I.zUn.PRUNE_DELETE_DAYS, null, t);
                s.push(n);
            }
            e.action_type === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE && (null === (l = e.options) || void 0 === l ? void 0 : l.auto_moderation_rule_name) != null && s.push(new d.ms(I.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)), e.action_type === I.rsA.VOICE_CHANNEL_STATUS_CREATE && (null === (r = e.options) || void 0 === r ? void 0 : r.status) != null && s.push(new d.ms(I.zUn.STATUS, null, e.options.status));
            let c = new d.ZP({
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
                    return null != e && e.action === t.action && e.targetId === t.targetId && e.userId === t.userId && o().isEqual(e.options, t.options) && t.timestampStart.diff(e.timestampStart, 'minutes') < r && n < l && t.targetType !== I.KFR.INVITE && t.action !== I.rsA.MESSAGE_DELETE && t.action !== I.rsA.MESSAGE_BULK_DELETE && t.action !== I.rsA.MESSAGE_PIN && t.action !== I.rsA.MESSAGE_UNPIN && t.action !== I.rsA.MEMBER_MOVE && t.action !== I.rsA.MEMBER_DISCONNECT && t.action !== I.rsA.BOT_ADD && t.action !== I.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE && t.action !== I.rsA.MEMBER_PRUNE;
                })(A, c, n)
            ) {
                (t[0] = A.merge({
                    changes: [...A.changes, ...c.changes],
                    timestampEnd: c.timestampStart
                })),
                    n++;
                return;
            }
            if (c.actionType === I.vB8.DELETE && (null != a || null != E)) {
                let e = null !== (i = null == a ? void 0 : a.oldValue) && void 0 !== i ? i : null == E ? void 0 : E.oldValue;
                (c.targetType === I.KFR.CHANNEL || c.targetType === I.KFR.CHANNEL_OVERWRITE) && null !== u && (0, _.r8)(u.oldValue) && (e = '#'.concat(e)), null == G[c.targetType] ? (G[c.targetType] = { [c.targetId]: e }) : (G[c.targetType][c.targetId] = e);
            }
            (n = 0), t.unshift(c);
        }),
        t
    );
}
function j(e) {
    let { section: t } = e;
    if (t !== I.pNK.AUDIT_LOG) return !1;
    let n = A.ZP.getMembers(f),
        r = T.Z.getGuild(f),
        l = null != f ? T.Z.getRoles(f) : void 0;
    R = o()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && N.some((e) => E.e$(n.permissions, e));
                }
            })
        )
        .map((e) => e.userId)
        .value();
}
class V extends (r = u.ZP.Store) {
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
        return D;
    }
    get automodRules() {
        return h;
    }
    get threads() {
        return p;
    }
    get applicationCommands() {
        return U;
    }
    get isInitialLoading() {
        return C;
    }
    get isLoading() {
        return L;
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
        return R;
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
        return G;
    }
    get groupedFetchCount() {
        return F;
    }
}
(s = 'GuildSettingsAuditLogStore'),
    (i = 'displayName') in (l = V)
        ? Object.defineProperty(l, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[i] = s),
    (t.Z = new V(c.Z, {
        AUDIT_LOG_FETCH_START: function () {
            L = !0;
        },
        AUDIT_LOG_FETCH_SUCCESS: function (e) {
            var t;
            (F = 0), (C = !1), (L = !1), (m = !0), (v = !1), (g = y(e.logs)), (O = e.integrations), (S = e.webhooks), (D = e.guildScheduledEvents), (h = null !== (t = e.automodRules) && void 0 !== t ? t : []), (p = e.threads), (U = e.applicationCommands), e.logs.length < I.Rg9 && (m = !1);
        },
        AUDIT_LOG_FETCH_FAIL: function () {
            (L = !1), (v = !0), (g = []);
        },
        AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
            let { isGroupedFetch: t } = e;
            (M = !0), t && F++;
        },
        AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
            let { logs: t, integrations: n, webhooks: r, guildScheduledEvents: l, automodRules: i, threads: s, applicationCommands: a } = e;
            if (((M = !1), (O = n), (S = r), (D = l), (h = i), (p = s), (U = a), (0 === t.length || t.length < I.Rg9) && (m = !1), t.length > 0)) {
                let e = y(t);
                g = [...g, ...e];
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
        GUILD_SETTINGS_SET_SECTION: j,
        GUILD_SETTINGS_INIT: function (e) {
            let { guildId: t, section: n } = e;
            return (f = t), (x = null), j({ section: n });
        },
        GUILD_SETTINGS_CLOSE: function () {
            (g = []), (R = []), (P = I.rsA.ALL), (b = null), (x = null), (G = {}), (F = 0), (C = !0), (O = []), (S = []), (D = []), (h = []), (p = []);
        }
    }));
