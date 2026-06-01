"use strict";
n.d(t, { Dg: () => p, Jo: () => g, V6: () => I, YG: () => E, _k: () => A, n5: () => m });
var i = n(64700),
    r = n(17928),
    s = n(627363),
    a = n(587895),
    o = n(473503),
    l = n(311043),
    u = n(569926),
    c = n(985253),
    d = n(734057),
    _ = n(71393),
    h = n(290863);
let f = { "1509696536903417891": "1432419613165228174" },
    p = "No Mic";
function E(e) {
    return (0, r.bG)(
        [d.A],
        () =>
            null != e &&
            !!e.isForumPost() &&
            null != e.parent_id &&
            (d.A.getChannel(e.parent_id)?.isGameInvitesChannel() ?? !1),
    );
}
function m(e, t) {
    return (0, o.OA)(e, { enabled: t, allowArchived: !0 });
}
function g(e) {
    let t = (0, r.bG)([_.A], () => (null == e ? null : (_.A.getGuild(e)?.gameApplicationIds?.[0] ?? null)), [e]),
        n = null != e ? f[e] : null,
        s = (0, u.I)(n ?? t);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = s;
        return { game: e, ...t };
    }, [s]);
}
function A(e) {
    let { game: t } = g(e),
        n = t?.getOfficialApplicationId(),
        r = (0, s.YY)(n);
    return (0, i.useMemo)(() => {
        let { data: e, ...t } = r;
        return { application: e, ...t };
    }, [r]);
}
function I(e, t) {
    let { game: n } = g(e);
    return (0, r.bG)([h.A, l.A, a.A], () => {
        if (null == t || null == n) return null;
        let e = (0, c.A)(n.id, l.A, a.A);
        return 0 === e.size
            ? null
            : (h.A.findActivity(t, (t) => null != t.application_id && e.has(t.application_id), null, !0) ?? null);
    }, [t, n]);
}
