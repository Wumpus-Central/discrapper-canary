t.d(n, {
    nu: function () {
        return m;
    },
    qF: function () {
        return _;
    },
    rf: function () {
        return p;
    },
    zZ: function () {
        return u;
    }
}),
    t(315314),
    t(610138),
    t(216116),
    t(78328),
    t(815648),
    t(47120);
var a = t(860911),
    i = t(442837),
    r = t(703656),
    l = t(314897),
    o = t(594174),
    s = t(626135),
    c = t(258971),
    d = t(981631);
function u(e, n) {
    var t;
    let a = c.z8.getField('sessionId'),
        i = c.z8.getField('guildId'),
        r = null === (t = c.z8.getField('entrypoint')) || void 0 === t ? void 0 : t.name,
        l = o.default.getCurrentUser();
    return s.default.track(e, {
        ...n,
        guild_id: i,
        directory_session_id: a,
        source: r,
        user_id: null == l ? void 0 : l.id
    });
}
function m() {
    return (0, i.e7)([l.default], () => l.default.isAuthenticated());
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = new URL(location.href);
    for (let t in e) {
        let a = e[t];
        n.searchParams.set(t, a);
    }
    let t = n.pathname + n.search,
        i = (0, a.Ui)(t, !1);
    (0, r.uL)(i);
}
function _() {
    let e = new URL(location.href),
        n = '?redirect_to='.concat(encodeURIComponent(e.pathname + e.search));
    (0, r.uL)(d.Z5c.REGISTER + n);
}
