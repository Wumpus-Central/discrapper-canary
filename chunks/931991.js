"use strict";
n.d(t, { ie: () => p, nr: () => h, p_: () => f });
var i = n(64700),
    r = n(136722),
    s = n(17928),
    a = n(576705),
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
    _ = (e, t, n, i) =>
        null != e &&
        (!!n ||
            ("creator_id" in e
                ? i && null != t && e.creator_id === t.id
                : "userId" in e
                  ? i && null != t && e.userId === t.id
                  : "user" in e && i && null != t && e.user?.id === t.id)),
    f = (e) => {
        if (null == e) return [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS];
        let t = u.d5;
        return (
            e.isGuildStageVoice() ? (t = u.Ou) : e.isGuildVoice() && (t = u.EN),
            [r.kg(t, c.xB.CREATE_EVENTS), r.kg(t, c.xB.MANAGE_EVENTS)]
        );
    },
    h = (e) => {
        let [t, n] = (0, l.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : f(e),
            [r, u, h, p] = (0, s.yK)([a.A], () => [
                a.A.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
                a.A.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
                a.A.can(t, e),
                a.A.can(n, e),
            ]),
            E = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            m = i.useCallback((e) => _(e, E, u, r), [r, u, E]),
            g = i.useCallback((e) => _(e, E, p, h), [p, h, E]);
        return null == e
            ? d
            : {
                  canCreateExpressions: r,
                  canCreateGuildEvent: h,
                  canManageAllExpressions: u,
                  canManageAllEvents: p,
                  canManageGuildExpression: m,
                  canManageGuildEvent: g,
              };
    },
    p = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
            [i, r] = (0, l.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : f(e),
            s = t.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
            u = t.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
            h = t.can(i, e),
            p = t.can(r, e),
            E = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: s,
                  canCreateGuildEvent: h,
                  canManageAllExpressions: u,
                  canManageAllEvents: p,
                  canManageGuildExpression: (e) => _(e, E, u, s),
                  canManageGuildEvent: (e) => _(e, E, p, h),
              };
    };
