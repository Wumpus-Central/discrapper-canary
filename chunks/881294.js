n.d(t, {
    nu: () => m,
    qF: () => p,
    rf: () => h,
    zZ: () => u
}),
    n(315314),
    n(309749),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(860911),
    a = n(442837),
    r = n(703656),
    l = n(314897),
    s = n(594174),
    o = n(626135),
    c = n(258971),
    d = n(981631);
function u(e, t) {
    var n;
    let i = c.z8.getField('sessionId'),
        a = c.z8.getField('guildId'),
        r = null === (n = c.z8.getField('entrypoint')) || void 0 === n ? void 0 : n.name,
        l = s.default.getCurrentUser();
    return o.default.track(e, {
        ...t,
        guild_id: a,
        directory_session_id: i,
        source: r,
        user_id: null == l ? void 0 : l.id
    });
}
function m() {
    return (0, a.e7)([l.default], () => l.default.isAuthenticated());
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = new URL(location.href);
    for (let n in e) {
        let i = e[n];
        t.searchParams.set(n, i);
    }
    let n = t.pathname + t.search,
        a = (0, i.Ui)(n, !1);
    (0, r.uL)(a);
}
function p() {
    let e = new URL(location.href),
        t = '?redirect_to='.concat(encodeURIComponent(e.pathname + e.search));
    (0, r.uL)(d.Z5c.REGISTER + t);
}
