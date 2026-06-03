"use strict";
n.d(t, { Dg: () => h, Jo: () => E, V6: () => A, YG: () => f, _k: () => g, n5: () => p });
var i = n(64700),
    r = n(17928),
    s = n(627363),
    a = n(473503),
    o = n(569926),
    l = n(734057),
    u = n(71393),
    c = n(290863);
let d = { "1509696536903417891": "1432419613165228174" },
    _ = {},
    h = "No Mic";
function f(e) {
    return (0, r.bG)(
        [l.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (l.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function p(e, t) {
    return (0, a.OA)(e, { enabled: t, allowArchived: !0 });
}
function E(e) {
    let t = (0, r.bG)([u.A], () => (null == e ? null : (u.A.getGuild(e)?.gameApplicationIds?.[0] ?? null)), [e]),
        n = null != e ? d[e] : null,
        s = (0, o.I)(n ?? t);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = s;
        return { game: e, ...t };
    }, [s]);
}
function m(e) {
    return null != e && null != _[e.id] ? _[e.id] : e?.getOfficialApplicationId();
}
function g(e) {
    let { game: t } = E(e),
        n = m(t),
        r = (0, s.YY)(n);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = r;
        return { application: e, ...t };
    }, [r]);
}
function A(e, t) {
    let { game: n } = E(e);
    return (0, r.bG)([c.A], () => {
        if (null == t || null == n) return null;
        let e = m(n);
        return null == e ? null : (c.A.findActivity(t, (t) => t.application_id === e, null, !0) ?? null);
    }, [t, n]);
}
