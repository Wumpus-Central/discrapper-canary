n.d(t, { ie: () => p, nr: () => f, p_: () => m });
var l = n(582128),
    i = n(136722),
    s = n(17928),
    r = n(576705),
    a = n(287809),
    o = n(149790),
    u = n(219935),
    c = n(818348);
let d = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1,
};
function h(e, t, n, l) {
    return (
        null != e &&
        (!!n ||
            ("creator_id" in e
                ? l && null != t && e.creator_id === t.id
                : "userId" in e
                  ? l && null != t && e.userId === t.id
                  : "user" in e && l && null != t && e.user?.id === t.id))
    );
}
function m(e) {
    if (null == e) return [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS];
    let t = u.d5;
    return (
        e.isGuildStageVoice() ? (t = u.Ou) : e.isGuildVoice() && (t = u.EN),
        [i.kg(t, c.xB.CREATE_EVENTS), i.kg(t, c.xB.MANAGE_EVENTS)]
    );
}
function f(e) {
    let [t, n] = (0, o.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : m(e),
        [i, u, f, p] = (0, s.yK)([r.A], () => [
            r.A.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
            r.A.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
            r.A.can(t, e),
            r.A.can(n, e),
        ]),
        g = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        x = l.useCallback((e) => h(e, g, u, i), [i, u, g]),
        A = l.useCallback((e) => h(e, g, p, f), [p, f, g]);
    return null == e
        ? d
        : {
              canCreateExpressions: i,
              canCreateGuildEvent: f,
              canManageAllExpressions: u,
              canManageAllEvents: p,
              canManageGuildExpression: x,
              canManageGuildEvent: A,
          };
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.default,
        [l, i] = (0, o.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : m(e),
        s = t.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
        u = t.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
        f = t.can(l, e),
        p = t.can(i, e),
        g = n.getCurrentUser();
    return null == e
        ? d
        : {
              canCreateExpressions: s,
              canCreateGuildEvent: f,
              canManageAllExpressions: u,
              canManageAllEvents: p,
              canManageGuildExpression: (e) => h(e, g, u, s),
              canManageGuildEvent: (e) => h(e, g, p, f),
          };
}
