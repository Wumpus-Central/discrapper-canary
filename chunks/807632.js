"use strict";
n.d(t, { Dg: () => f, Jo: () => m, V6: () => T, YG: () => p, _k: () => A, n5: () => E, yk: () => I }), n(321073);
var i = n(64700),
    r = n(17928),
    s = n(80682),
    a = n(627363),
    o = n(473503),
    l = n(569926),
    u = n(734057),
    c = n(71393),
    d = n(290863);
let _ = { "1509696536903417891": "1432419613165228174" },
    h = {},
    f = "No Mic";
function p(e) {
    return (0, r.bG)(
        [u.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (u.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function E(e, t) {
    return (0, o.OA)(e, { enabled: t, allowArchived: !0 });
}
function m(e) {
    let t = (0, r.bG)([c.A], () => (null == e ? null : (c.A.getGuild(e)?.gameApplicationIds?.[0] ?? null)), [e]),
        n = null != e ? _[e] : null,
        s = (0, l.I)(n ?? t);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = s;
        return { game: e, ...t };
    }, [s]);
}
function g(e) {
    return null != e && null != h[e.id] ? h[e.id] : e?.getOfficialApplicationId();
}
function A(e) {
    let { game: t } = m(e),
        n = g(t),
        r = (0, a.YY)(n);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = r;
        return { application: e, ...t };
    }, [r]);
}
function I(e, t) {
    let n = e.isGameInvitesChannel(),
        a = (0, r.yK)([u.A], () => {
            if (!n) return [];
            let e = new Set(),
                i = [];
            for (let n of t) {
                let t = u.A.getChannel(n)?.ownerId;
                null == t || e.has(t) || (e.add(t), i.push(t));
            }
            return i;
        }, [n, t]),
        o = (0, i.useMemo)(() => (n ? { [e.guild_id]: a } : {}), [a, e.guild_id, n]);
    (0, s.Eq)(o, "GameInvitesChannelPostAuthors");
}
function T(e, t) {
    let { game: n } = m(e);
    return (0, r.bG)([d.A], () => {
        if (null == t || null == n) return null;
        let e = g(n);
        return null == e ? null : (d.A.findActivity(t, (t) => t.application_id === e, null, !0) ?? null);
    }, [t, n]);
}
