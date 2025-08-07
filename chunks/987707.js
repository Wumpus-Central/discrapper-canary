n.d(t, { Z: () => z }), n(583741), n(539854), n(388685), n(290780);
var r,
    l,
    s,
    i = n(392711),
    a = n.n(i),
    o = n(149765),
    u = n(442837),
    c = n(570140),
    d = n(387667),
    E = n(131704),
    _ = n(345162),
    A = n(271383),
    T = n(485386),
    m = n(430824),
    I = n(981631);
let g = o.$e(
        I.Plq.KICK_MEMBERS,
        I.Plq.BAN_MEMBERS,
        I.Plq.ADMINISTRATOR,
        I.Plq.MANAGE_CHANNELS,
        I.Plq.MANAGE_GUILD,
        I.Plq.MANAGE_MESSAGES,
        I.Plq.MANAGE_NICKNAMES,
        I.Plq.MANAGE_ROLES,
        I.Plq.MANAGE_WEBHOOKS,
        I.Plq.MANAGE_GUILD_EXPRESSIONS,
        I.Plq.MOVE_MEMBERS,
        I.Plq.MUTE_MEMBERS,
        I.Plq.DEAFEN_MEMBERS,
    ),
    f = null,
    N = [],
    h = [],
    O = [],
    p = [],
    R = [],
    S = [],
    C = [],
    v = [],
    D = !0,
    b = !1,
    L = !1,
    x = !0,
    U = !1,
    M = null,
    P = I.rsA.ALL,
    j = null,
    y = {},
    w = 0;
function G(e) {
    let t = [],
        n = 0;
    return (
        e.reverse().forEach((e) => {
            var r, l, s;
            let i = [],
                o = null,
                u = null,
                c = null;
            if ((null != e.reason && i.push(new d.ms(I.zUn.REASON, null, e.reason)), null != e.changes))
                for (let t of e.changes) {
                    let e = new d.ms(t.key, t.old_value, t.new_value);
                    i.push(e),
                        e.key === I.zUn.NAME
                            ? (o = e)
                            : e.key === I.zUn.TYPE
                              ? (c = e)
                              : e.key === I.zUn.TITLE && (u = e);
                }
            if (e.action_type === I.rsA.MEMBER_PRUNE) {
                let t =
                        null != e && null != e.options && null != e.options.delete_member_days
                            ? e.options.delete_member_days
                            : 1,
                    n = new d.ms(I.zUn.PRUNE_DELETE_DAYS, null, t);
                i.push(n);
            }
            e.action_type === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE &&
                (null == (l = e.options) ? void 0 : l.auto_moderation_rule_name) != null &&
                i.push(new d.ms(I.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME, null, e.options.auto_moderation_rule_name)),
                e.action_type === I.rsA.VOICE_CHANNEL_STATUS_CREATE &&
                    (null == (r = e.options) ? void 0 : r.status) != null &&
                    i.push(new d.ms(I.zUn.STATUS, null, e.options.status));
            let _ = new d.ZP({
                    id: e.id,
                    action: e.action_type,
                    targetId: e.target_id,
                    userId: e.user_id,
                    changes: i,
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
                        a().isEqual(e.options, t.options) &&
                        t.timestampStart.diff(e.timestampStart, "minutes") < r &&
                        n < l &&
                        t.targetType !== I.KFR.INVITE &&
                        t.action !== I.rsA.MESSAGE_DELETE &&
                        t.action !== I.rsA.MESSAGE_BULK_DELETE &&
                        t.action !== I.rsA.MESSAGE_PIN &&
                        t.action !== I.rsA.MESSAGE_UNPIN &&
                        t.action !== I.rsA.MEMBER_MOVE &&
                        t.action !== I.rsA.MEMBER_DISCONNECT &&
                        t.action !== I.rsA.BOT_ADD &&
                        t.action !== I.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE &&
                        t.action !== I.rsA.MEMBER_PRUNE
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
            if (_.actionType === I.vB8.DELETE && (null != o || null != u)) {
                let e = null != (s = null == o ? void 0 : o.oldValue) ? s : null == u ? void 0 : u.oldValue;
                (_.targetType === I.KFR.CHANNEL || _.targetType === I.KFR.CHANNEL_OVERWRITE) &&
                    null !== c &&
                    (0, E.r8)(c.oldValue) &&
                    (e = "#".concat(e)),
                    null == y[_.targetType]
                        ? (y[_.targetType] = { [_.targetId]: e })
                        : (y[_.targetType][_.targetId] = e);
            }
            (n = 0), t.unshift(_);
        }),
        t
    );
}
function k(e) {
    let { section: t } = e;
    if (t !== I.pNK.AUDIT_LOG) return !1;
    let n = A.ZP.getMembers(f),
        r = m.Z.getGuild(f),
        l = null != f ? T.Z.getUnsafeMutableRoles(f) : void 0;
    O = a()(n)
        .filter((e) =>
            e.roles.some((t) => {
                if (null != r) {
                    if (e.userId === r.ownerId) return !0;
                    let n = null == l ? void 0 : l[t];
                    return null != n && (0, _._N)(n, g);
                }
            }),
        )
        .map((e) => e.userId)
        .value();
}
class F extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(m.Z, T.Z, A.ZP);
    }
    get logs() {
        return N;
    }
    get integrations() {
        return h;
    }
    get webhooks() {
        return p;
    }
    get guildScheduledEvents() {
        return R;
    }
    get automodRules() {
        return S;
    }
    get threads() {
        return C;
    }
    get applicationCommands() {
        return v;
    }
    get isInitialLoading() {
        return D;
    }
    get isLoading() {
        return b;
    }
    get isLoadingNextPage() {
        return L;
    }
    get hasOlderLogs() {
        return x;
    }
    get hasError() {
        return U;
    }
    get userIds() {
        return O;
    }
    get userIdFilter() {
        return M;
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
        return w;
    }
}
(s = "GuildSettingsAuditLogStore"),
    (l = "displayName") in F
        ? Object.defineProperty(F, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
          })
        : (F[l] = s);
let z = new F(c.Z, {
    AUDIT_LOG_FETCH_START: function () {
        b = !0;
    },
    AUDIT_LOG_FETCH_SUCCESS: function (e) {
        var t;
        (w = 0),
            (D = !1),
            (b = !1),
            (x = !0),
            (U = !1),
            (N = G(e.logs)),
            (h = e.integrations),
            (p = e.webhooks),
            (R = e.guildScheduledEvents),
            (S = null != (t = e.automodRules) ? t : []),
            (C = e.threads),
            (v = e.applicationCommands),
            e.logs.length < I.Rg9 && (x = !1);
    },
    AUDIT_LOG_FETCH_FAIL: function () {
        (b = !1), (U = !0), (N = []);
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_START: function (e) {
        let { isGroupedFetch: t } = e;
        (L = !0), t && w++;
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: function (e) {
        let {
            logs: t,
            integrations: n,
            webhooks: r,
            guildScheduledEvents: l,
            automodRules: s,
            threads: i,
            applicationCommands: a,
        } = e;
        if (
            ((L = !1),
            (h = n),
            (p = r),
            (R = l),
            (S = s),
            (C = i),
            (v = a),
            (0 === t.length || t.length < I.Rg9) && (x = !1),
            t.length > 0)
        ) {
            let e = G(t);
            N = [...N, ...e];
        }
    },
    AUDIT_LOG_FETCH_NEXT_PAGE_FAIL: function () {
        L = !1;
    },
    AUDIT_LOG_FILTER_BY_ACTION: function (e) {
        let { action: t } = e;
        P = t;
    },
    AUDIT_LOG_FILTER_BY_USER: function (e) {
        let { userId: t } = e;
        M = t;
    },
    AUDIT_LOG_FILTER_BY_TARGET: function (e) {
        let { targetId: t } = e;
        j = t;
    },
    GUILD_SETTINGS_SET_SECTION: k,
    GUILD_SETTINGS_INIT: function (e) {
        let { guildId: t, section: n } = e;
        return (f = t), (j = null), k({ section: n });
    },
    GUILD_SETTINGS_CLOSE: function () {
        (N = []),
            (O = []),
            (P = I.rsA.ALL),
            (M = null),
            (j = null),
            (y = {}),
            (w = 0),
            (D = !0),
            (h = []),
            (p = []),
            (R = []),
            (S = []),
            (C = []);
    },
});
