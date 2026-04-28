"use strict";
n.d(t, { ie: () => f, nr: () => p, p_: () => m });
var l = n(64700),
    i = n(136722),
    s = n(17928),
    a = n(576705),
    r = n(287809),
    o = n(860689),
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
    h = (e, t, n, l) =>
        null != e &&
        (!!n ||
            ("creator_id" in e
                ? l && null != t && e.creator_id === t.id
                : "userId" in e
                  ? l && null != t && e.userId === t.id
                  : "user" in e && l && null != t && e.user?.id === t.id)),
    m = (e) => {
        if (null == e) return [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS];
        let t = c.d5;
        return (
            e.isGuildStageVoice() ? (t = c.Ou) : e.isGuildVoice() && (t = c.EN),
            [i.kg(t, u.xB.CREATE_EVENTS), i.kg(t, u.xB.MANAGE_EVENTS)]
        );
    },
    p = (e) => {
        let [t, n] = (0, o.fh)(e) ? [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS] : m(e),
            [i, c, p, f] = (0, s.yK)([a.A], () => [
                a.A.can(u.xB.CREATE_GUILD_EXPRESSIONS, e),
                a.A.can(u.xB.MANAGE_GUILD_EXPRESSIONS, e),
                a.A.can(t, e),
                a.A.can(n, e),
            ]),
            g = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
            _ = l.useCallback((e) => h(e, g, c, i), [i, c, g]),
            x = l.useCallback((e) => h(e, g, f, p), [f, p, g]);
        return null == e
            ? d
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: c,
                  canManageAllEvents: f,
                  canManageGuildExpression: _,
                  canManageGuildEvent: x,
              };
    },
    f = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
            [l, i] = (0, o.fh)(e) ? [u.xB.CREATE_EVENTS, u.xB.MANAGE_EVENTS] : m(e),
            s = t.can(u.xB.CREATE_GUILD_EXPRESSIONS, e),
            c = t.can(u.xB.MANAGE_GUILD_EXPRESSIONS, e),
            p = t.can(l, e),
            f = t.can(i, e),
            g = n.getCurrentUser();
        return null == e
            ? d
            : {
                  canCreateExpressions: s,
                  canCreateGuildEvent: p,
                  canManageAllExpressions: c,
                  canManageAllEvents: f,
                  canManageGuildExpression: (e) => h(e, g, c, s),
                  canManageGuildEvent: (e) => h(e, g, f, p),
              };
    };
