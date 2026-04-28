"use strict";
n.d(t, { ie: () => m, nr: () => f, p_: () => p });
var r = n(64700),
    a = n(136722),
    i = n(17928),
    l = n(576705),
    s = n(287809),
    o = n(860689),
    c = n(219935),
    d = n(818348);
let u = {
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
    p = (e) => {
        if (null == e) return [d.xB.CREATE_EVENTS, d.xB.MANAGE_EVENTS];
        let t = c.d5;
        return (
            e.isGuildStageVoice() ? (t = c.Ou) : e.isGuildVoice() && (t = c.EN),
            [a.kg(t, d.xB.CREATE_EVENTS), a.kg(t, d.xB.MANAGE_EVENTS)]
        );
    },
    f = (e) => {
        let [t, n] = (0, o.fh)(e) ? [d.xB.CREATE_EVENTS, d.xB.MANAGE_EVENTS] : p(e),
            [a, c, f, m] = (0, i.yK)([l.A], () => [
                l.A.can(d.xB.CREATE_GUILD_EXPRESSIONS, e),
                l.A.can(d.xB.MANAGE_GUILD_EXPRESSIONS, e),
                l.A.can(t, e),
                l.A.can(n, e),
            ]),
            h = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
            g = r.useCallback((e) => _(e, h, c, a), [a, c, h]),
            b = r.useCallback((e) => _(e, h, m, f), [m, f, h]);
        return null == e
            ? u
            : {
                  canCreateExpressions: a,
                  canCreateGuildEvent: f,
                  canManageAllExpressions: c,
                  canManageAllEvents: m,
                  canManageGuildExpression: g,
                  canManageGuildEvent: b,
              };
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
            [r, a] = (0, o.fh)(e) ? [d.xB.CREATE_EVENTS, d.xB.MANAGE_EVENTS] : p(e),
            i = t.can(d.xB.CREATE_GUILD_EXPRESSIONS, e),
            c = t.can(d.xB.MANAGE_GUILD_EXPRESSIONS, e),
            f = t.can(r, e),
            m = t.can(a, e),
            h = n.getCurrentUser();
        return null == e
            ? u
            : {
                  canCreateExpressions: i,
                  canCreateGuildEvent: f,
                  canManageAllExpressions: c,
                  canManageAllEvents: m,
                  canManageGuildExpression: (e) => _(e, h, c, i),
                  canManageGuildEvent: (e) => _(e, h, m, f),
              };
    };
