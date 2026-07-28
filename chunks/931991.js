"use strict";
n.d(t, { ie: () => h, nr: () => A, p_: () => E });
var i = n(582128),
    r = n(136722),
    a = n(17928),
    s = n(576705),
    l = n(287809),
    o = n(860689),
    d = n(219935),
    c = n(818348);
let u = {
    canCreateExpressions: !1,
    canCreateGuildEvent: !1,
    canManageAllExpressions: !1,
    canManageAllEvents: !1,
    canManageGuildExpression: () => !1,
    canManageGuildEvent: () => !1,
};
function _(e, t, n, i) {
    return (
        null != e &&
        (!!n ||
            ("creator_id" in e
                ? i && null != t && e.creator_id === t.id
                : "userId" in e
                  ? i && null != t && e.userId === t.id
                  : "user" in e && i && null != t && e.user?.id === t.id))
    );
}
function E(e) {
    if (null == e) return [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS];
    let t = d.d5;
    return (
        e.isGuildStageVoice() ? (t = d.Ou) : e.isGuildVoice() && (t = d.EN),
        [r.kg(t, c.xB.CREATE_EVENTS), r.kg(t, c.xB.MANAGE_EVENTS)]
    );
}
function A(e) {
    let [t, n] = (0, o.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : E(e),
        [r, d, A, h] = (0, a.yK)([s.A], () => [
            s.A.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
            s.A.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
            s.A.can(t, e),
            s.A.can(n, e),
        ]),
        I = (0, a.bG)([l.default], () => l.default.getCurrentUser()),
        f = i.useCallback((e) => _(e, I, d, r), [r, d, I]),
        p = i.useCallback((e) => _(e, I, h, A), [h, A, I]);
    return null == e
        ? u
        : {
              canCreateExpressions: r,
              canCreateGuildEvent: A,
              canManageAllExpressions: d,
              canManageAllEvents: h,
              canManageGuildExpression: f,
              canManageGuildEvent: p,
          };
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.default,
        [i, r] = (0, o.fh)(e) ? [c.xB.CREATE_EVENTS, c.xB.MANAGE_EVENTS] : E(e),
        a = t.can(c.xB.CREATE_GUILD_EXPRESSIONS, e),
        d = t.can(c.xB.MANAGE_GUILD_EXPRESSIONS, e),
        A = t.can(i, e),
        h = t.can(r, e),
        I = n.getCurrentUser();
    return null == e
        ? u
        : {
              canCreateExpressions: a,
              canCreateGuildEvent: A,
              canManageAllExpressions: d,
              canManageAllEvents: h,
              canManageGuildExpression: (e) => _(e, I, d, a),
              canManageGuildEvent: (e) => _(e, I, h, A),
          };
}
