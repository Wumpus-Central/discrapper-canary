a.d(t, { ie: () => f, nr: () => m, p_: () => p });
var n = a(64700),
    l = a(136722),
    r = a(17928),
    i = a(576705),
    s = a(287809),
    o = a(860689),
    c = a(219935),
    d = a(818348);
let u = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1,
    },
    h = (e, t, a, n) =>
        null != e &&
        (!!a ||
            ("creator_id" in e
                ? n && null != t && e.creator_id === t.id
                : "userId" in e
                  ? n && null != t && e.userId === t.id
                  : "user" in e && n && null != t && e.user?.id === t.id)),
    p = (e) => {
        if (null == e) return [d.xB.CREATE_EVENTS, d.xB.MANAGE_EVENTS];
        let t = c.d5;
        return (
            e.isGuildStageVoice() ? (t = c.Ou) : e.isGuildVoice() && (t = c.EN),
            [l.kg(t, d.xB.CREATE_EVENTS), l.kg(t, d.xB.MANAGE_EVENTS)]
        );
    },
    m = (e) => {
        let [t, a] = (0, o.fh)(e) ? [d.xB.CREATE_EVENTS, d.xB.MANAGE_EVENTS] : p(e),
            [l, c, m, f] = (0, r.yK)([i.A], () => [
                i.A.can(d.xB.CREATE_GUILD_EXPRESSIONS, e),
                i.A.can(d.xB.MANAGE_GUILD_EXPRESSIONS, e),
                i.A.can(t, e),
                i.A.can(a, e),
            ]),
            _ = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
            b = n.useCallback((e) => h(e, _, c, l), [l, c, _]),
            g = n.useCallback((e) => h(e, _, f, m), [f, m, _]);
        return null == e
            ? u
            : {
                  canCreateExpressions: l,
                  canCreateGuildEvent: m,
                  canManageAllExpressions: c,
                  canManageAllEvents: f,
                  canManageGuildExpression: b,
                  canManageGuildEvent: g,
              };
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.A,
            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
            [n, l] = (0, o.fh)(e) ? [d.xB.CREATE_EVENTS, d.xB.MANAGE_EVENTS] : p(e),
            r = t.can(d.xB.CREATE_GUILD_EXPRESSIONS, e),
            c = t.can(d.xB.MANAGE_GUILD_EXPRESSIONS, e),
            m = t.can(n, e),
            f = t.can(l, e),
            _ = a.getCurrentUser();
        return null == e
            ? u
            : {
                  canCreateExpressions: r,
                  canCreateGuildEvent: m,
                  canManageAllExpressions: c,
                  canManageAllEvents: f,
                  canManageGuildExpression: (e) => h(e, _, c, r),
                  canManageGuildEvent: (e) => h(e, _, f, m),
              };
    };
