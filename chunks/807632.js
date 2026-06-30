"use strict";
n.d(t, { Dg: () => m, IO: () => A, Ij: () => v, V6: () => N, YG: () => g, _k: () => y, n5: () => I, yk: () => C }),
    n(321073);
var i = n(64700),
    r = n(17928),
    s = n(80682),
    a = n(55730),
    o = n(627363),
    l = n(473503),
    u = n(691060),
    c = n(569926),
    d = n(734057),
    _ = n(71393),
    h = n(290863),
    f = n(652215);
let p = { "1509696536903417891": "1432419613165228174" },
    E = {},
    m = "No Mic";
function g(e) {
    return (0, r.bG)(
        [d.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (d.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function A(e) {
    let t = (0, u.kt)(e);
    return !!g(e) && !t.some((e) => e.name === m);
}
function I(e, t) {
    return (0, l.OA)(e, { enabled: t, allowArchived: !0 });
}
function T(e) {
    let t = (0, r.bG)([_.A], () => (null == e ? null : (_.A.getGuild(e)?.gameApplicationIds?.[0] ?? null)), [e]),
        n = null != e ? p[e] : null,
        s = (0, c.I)(n ?? t);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = s;
        return { game: e, ...t };
    }, [s]);
}
function S(e) {
    return null != e && null != E[e.id] ? E[e.id] : e?.getOfficialApplicationId();
}
function y(e) {
    let { game: t } = T(e),
        n = S(t),
        r = (0, o.YY)(n);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = r;
        return { application: e, ...t };
    }, [r]);
}
function C(e, t) {
    let n = e.isGameInvitesChannel(),
        a = (0, r.yK)([d.A], () => {
            if (!n) return [];
            let e = new Set(),
                i = [];
            for (let n of t) {
                let t = d.A.getChannel(n)?.ownerId;
                null == t || e.has(t) || (e.add(t), i.push(t));
            }
            return i;
        }, [n, t]),
        o = (0, i.useMemo)(() => (n ? { [e.guild_id]: a } : {}), [a, e.guild_id, n]);
    (0, s.Eq)(o, "GameInvitesChannelPostAuthors");
}
function N(e, t) {
    let { game: n } = T(e);
    return (0, r.bG)([h.A], () => {
        if (null == t || null == n) return null;
        let e = S(n);
        return null == e ? null : (h.A.findActivity(t, (t) => t.application_id === e, null, !0) ?? null);
    }, [t, n]);
}
function v(e) {
    return e.type === f.$pd.PLAYING && (0, a.A)(e, f.jUm.JOIN);
}
