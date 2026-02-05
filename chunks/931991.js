"use strict";
n.d(t, { ie: () => h, nr: () => p, p_: () => f });
var r = n(64700),
    i = n(136722),
    a = n(311907),
    s = n(576705),
    o = n(287809),
    l = n(860689),
    u = n(219935),
    c = n(818348);
let d = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1,
    },
    _ = (e, t, n, r) =>
        null != e &&
        (!!n ||
            ("creator_id" in e
                ? r && null != t && e.creator_id === t.id
                : "userId" in e
                  ? r && null != t && e.userId === t.id
                  : "user" in e && r && null != t && e.user?.id === t.id)),
    f = (e) => {
        if (null == e) return [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS];
        let t = u.d5;
        return (
            e.isGuildStageVoice() ? (t = u.Ou) : e.isGuildVoice() && (t = u.EN),
            [i.kg(t, c.xB.CREATE_EVENTS), i.kg(t, c.xB.MANAGE_EVENTS)]
        );
    },
    p = (e) => {
        let [t, n] = (0, l.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : f(e),
            [i, u, p, h] = (0, a.yK)([s.A], () => [
                s.A.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
                s.A.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
                s.A.can(t, e),
                s.A.can(n, e),
            ]),
            m = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
            g = r.useCallback((e) => _(e, m, u, i), [i, u, m]),
            E = r.useCallback((e) => _(e, m, h, p), [h, p, m]);
        return null == e
            ? d
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: u,
                  canManageAllEvents: h,
                  canManageGuildExpression: g,
                  canManageGuildEvent: E,
              };
    },
    h = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
            [r, i] = (0, l.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : f(e),
            a = t.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
            p = t.can(r, e),
            h = t.can(i, e),
            m = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: a,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: u,
                  canManageAllEvents: h,
                  canManageGuildExpression: (e) => _(e, m, u, a),
                  canManageGuildEvent: (e) => _(e, m, h, p),
              };
    };
