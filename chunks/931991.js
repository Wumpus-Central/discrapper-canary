n.d(t, {
    ie: () => h,
    nr: () => _,
    p_: () => p,
}),
    n(896048);
var r = n(64700),
    i = n(136722),
    a = n(311907),
    s = n(576705),
    o = n(287809),
    l = n(860689),
    c = n(219935),
    u = n(818348);
let d = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1,
    },
    f = (e, t, n, r) => {
        if (null == e) return !1;
        if (n) return !0;
        if ("creator_id" in e) return r && null != t && e.creator_id === t.id;
        if ("userId" in e) return r && null != t && e.userId === t.id;
        if ("user" in e) {
            var i;
            return r && null != t && (null == (i = e.user) ? void 0 : i.id) === t.id;
        }
        return !1;
    },
    p = (e) => {
        if (null == e) return [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS];
        let t = c.d5;
        return (
            e.isGuildStageVoice() ? (t = c.Ou) : e.isGuildVoice() && (t = c.EN),
            [i.kg(t, u.xB.CREATE_EVENTS), i.kg(t, u.xB.MANAGE_EVENTS)]
        );
    },
    _ = (e) => {
        let [t, n] = (0, l.fh)(e) ? [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS] : p(e),
            [i, c, _, h] = (0, a.yK)([s.A], () => [
                s.A.can(u.xB.CREATE_GUILD_EXPRESSIONS, e),
                s.A.can(u.xB.MANAGE_GUILD_EXPRESSIONS, e),
                s.A.can(t, e),
                s.A.can(n, e),
            ]),
            m = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
            g = r.useCallback((e) => f(e, m, c, i), [i, c, m]),
            E = r.useCallback((e) => f(e, m, h, _), [h, _, m]);
        return null == e
            ? d
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: _,
                  canManageAllExpressions: c,
                  canManageAllEvents: h,
                  canManageGuildExpression: g,
                  canManageGuildEvent: E,
              };
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
            [r, i] = (0, l.fh)(e) ? [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS] : p(e),
            a = t.can(u.xB.CREATE_GUILD_EXPRESSIONS, e),
            c = t.can(u.xB.MANAGE_GUILD_EXPRESSIONS, e),
            _ = t.can(r, e),
            h = t.can(i, e),
            m = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: a,
                  canCreateGuildEvent: _,
                  canManageAllExpressions: c,
                  canManageAllEvents: h,
                  canManageGuildExpression: (e) => f(e, m, c, a),
                  canManageGuildEvent: (e) => f(e, m, h, _),
              };
    };
