n.d(t, { GH: () => g, Lj: () => m, XT: () => O, j1: () => S, li: () => R, nm: () => L, vX: () => y });
var i = n(17928),
    r = n(956518),
    a = n(55730),
    s = n(627363),
    l = n(587895),
    o = n(429913),
    d = n(878014),
    c = n(378570),
    u = n(734057),
    _ = n(696451),
    E = n(71393),
    A = n(576705),
    h = n(290863),
    I = n(967198),
    f = n(683180),
    p = n(652215);
let T = [l.A, u.A, E.A, _.Ay, A.A, I.A];
function m(e) {
    return l.A.getApplication(e)?.vibegrationsProjectId != null;
}
function g(e) {
    let t = e?.application_id;
    return null != t && (0, a.A)(e, p.jUm.EMBEDDED) && m(t) ? t : null;
}
function S(e, t, n) {
    let i = l.A.getApplication(e);
    if (i?.vibegrationsProjectId == null || !(0, d.D)(i) || null == (0, r.Ay)(e)) return null;
    let a = I.A.getGuildId(),
        s = null,
        o = -1;
    for (let i of null != n ? [n] : E.A.getGuildIds())
        for (let n of Object.values(u.A.getMutableGuildChannelsForGuild(i))) {
            if ((0, f.vv)(n) !== e || !A.A.can(p.xBc.VIEW_CHANNEL, n) || !(0, f.kg)(n, "ConjuredAppActivity")) continue;
            let r = 2 * !!_.Ay.isMember(i, t) + +(i === a);
            r > o && ((s = n), (o = r));
        }
    return s;
}
function N(e, t) {
    let n = g(e);
    if (null != n) return S(n, t)?.id ?? null;
}
function C(e) {
    return (0, a.A)(e, p.jUm.EMBEDDED) ? (e?.application_id ?? void 0) : void 0;
}
function O(e, t) {
    (0, o.A)([C(e)]);
    let n = (0, i.bG)(T, () => N(e, t), [e, t]);
    return { isConjuredApp: void 0 !== n, channelId: n ?? null };
}
function R(e, t) {
    return ((0, o.A)(e.map(C)), (0, i.yK)(T, () => e.map((e) => N(e, t)), [e, t]));
}
function L(e) {
    (0, c.iN)(e);
}
async function y(e, t, n) {
    if (!0 !== n && !(0, a.A)(h.A.getApplicationActivity(t, e), p.jUm.EMBEDDED)) return null;
    if (!l.A.isHydrated(e))
        try {
            await (0, s.TA)(e);
        } catch {
            return !1;
        }
    if (!m(e)) return null;
    let i = S(e, t);
    return null != i && (L(i.id), !0);
}
