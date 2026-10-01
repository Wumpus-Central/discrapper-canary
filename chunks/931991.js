E.d(e, { ie: () => C, nr: () => _, p_: () => N });
var a = E(582128),
    r = E(136722),
    t = E(17928),
    u = E(576705),
    i = E(287809),
    l = E(149790),
    c = E(219935),
    s = E(818348);
let d = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1,
};
function A(n, e, E, a) {
    return (
        null != n &&
        (!!E ||
            ("creator_id" in n
                ? a && null != e && n.creator_id === e.id
                : "userId" in n
                  ? a && null != e && n.userId === e.id
                  : "user" in n && a && null != e && n.user?.id === e.id))
    );
}
function N(n) {
    if (null == n) return [s.xB.CREATE_EVENTS, s.xB.MANAGE_EVENTS];
    let e = c.d5;
    return (
        n.isGuildStageVoice() ? (e = c.Ou) : n.isGuildVoice() && (e = c.EN),
        [r.kg(e, s.xB.CREATE_EVENTS), r.kg(e, s.xB.MANAGE_EVENTS)]
    );
}
function _(n) {
    let [e, E] = (0, l.fh)(n) ? [s.xB.CREATE_EVENTS, s.xB.MANAGE_EVENTS] : N(n),
        [r, c, _, C] = (0, t.yK)([u.A], () => [
            u.A.can(s.xB.CREATE_GUILD_EXPRESSIONS, n),
            u.A.can(s.xB.MANAGE_GUILD_EXPRESSIONS, n),
            u.A.can(e, n),
            u.A.can(E, n),
        ]),
        S = (0, t.bG)([i.default], () => i.default.getCurrentUser()),
        x = a.useCallback((n) => A(n, S, c, r), [r, c, S]),
        G = a.useCallback((n) => A(n, S, C, _), [C, _, S]);
    return null == n
        ? d
        : {
              canCreateExpressions: r,
              canCreateGuildEvent: _,
              canManageAllExpressions: c,
              canManageAllEvents: C,
              canManageGuildExpression: x,
              canManageGuildEvent: G,
          };
}
function C(n) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.A,
        E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
        [a, r] = (0, l.fh)(n) ? [s.xB.CREATE_EVENTS, s.xB.MANAGE_EVENTS] : N(n),
        t = e.can(s.xB.CREATE_GUILD_EXPRESSIONS, n),
        c = e.can(s.xB.MANAGE_GUILD_EXPRESSIONS, n),
        _ = e.can(a, n),
        C = e.can(r, n),
        S = E.getCurrentUser();
    return null == n
        ? d
        : {
              canCreateExpressions: t,
              canCreateGuildEvent: _,
              canManageAllExpressions: c,
              canManageAllEvents: C,
              canManageGuildExpression: (n) => A(n, S, c, t),
              canManageGuildEvent: (n) => A(n, S, C, _),
          };
}
