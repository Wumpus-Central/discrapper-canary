"use strict";
n.d(t, { ie: () => m, nr: () => h, p_: () => E });
var i = n(64700),
    r = n(136722),
    s = n(17928),
    a = n(576705),
    o = n(287809),
    l = n(860689),
    d = n(219935),
    _ = n(818348);
let u = {
        canCreateExpressions: !1,
        canCreateGuildEvent: !1,
        canManageAllExpressions: !1,
        canManageAllEvents: !1,
        canManageGuildExpression: () => !1,
        canManageGuildEvent: () => !1,
    },
    c = (e, t, n, i) =>
        null != e &&
        (!!n ||
            ("creator_id" in e
                ? i && null != t && e.creator_id === t.id
                : "userId" in e
                  ? i && null != t && e.userId === t.id
                  : "user" in e && i && null != t && e.user?.id === t.id)),
    E = (e) => {
        if (null == e) return [_.xB.CREATE_EVENTS, _.xB.MANAGE_EVENTS];
        let t = d.d5;
        return (
            e.isGuildStageVoice() ? (t = d.Ou) : e.isGuildVoice() && (t = d.EN),
            [r.kg(t, _.xB.CREATE_EVENTS), r.kg(t, _.xB.MANAGE_EVENTS)]
        );
    },
    h = (e) => {
        let [t, n] = (0, l.fh)(e) ? [_.xB.CREATE_EVENTS, _.xB.MANAGE_EVENTS] : E(e),
            [r, d, h, m] = (0, s.yK)([a.A], () => [
                a.A.can(_.xB.CREATE_GUILD_EXPRESSIONS, e),
                a.A.can(_.xB.MANAGE_GUILD_EXPRESSIONS, e),
                a.A.can(t, e),
                a.A.can(n, e),
            ]),
            f = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
            g = i.useCallback((e) => c(e, f, d, r), [r, d, f]),
            p = i.useCallback((e) => c(e, f, m, h), [m, h, f]);
        return null == e
            ? u
            : {
                  canCreateExpressions: r,
                  canCreateGuildEvent: h,
                  canManageAllExpressions: d,
                  canManageAllEvents: m,
                  canManageGuildExpression: g,
                  canManageGuildEvent: p,
              };
    },
    m = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.A,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
            [i, r] = (0, l.fh)(e) ? [_.xB.CREATE_EVENTS, _.xB.MANAGE_EVENTS] : E(e),
            s = t.can(_.xB.CREATE_GUILD_EXPRESSIONS, e),
            d = t.can(_.xB.MANAGE_GUILD_EXPRESSIONS, e),
            h = t.can(i, e),
            m = t.can(r, e),
            f = n.getCurrentUser();
        return null == e
            ? u
            : {
                  canCreateExpressions: s,
                  canCreateGuildEvent: h,
                  canManageAllExpressions: d,
                  canManageAllEvents: m,
                  canManageGuildExpression: (e) => c(e, f, d, s),
                  canManageGuildEvent: (e) => c(e, f, m, h),
              };
    };
