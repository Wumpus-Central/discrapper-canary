r.d(n, {
    T: function () {
        return f;
    },
    z: function () {
        return p;
    }
});
var i = r(493683),
    a = r(529103),
    o = r(292556),
    s = r(703656),
    l = r(768581),
    u = r(981631),
    c = r(388032);
function d(e, n, r) {
    o.default.showNotification(
        l.ZP.getUserAvatarURL(e),
        e.username,
        n,
        {},
        {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: r
        }
    );
}
function f(e) {
    d(e, c.intl.string(c.t['t3+Af3']), () => {
        {
            let { openUserProfileModal: n } = r(171368);
            n({ userId: e.id });
        }
        (0, s.uL)(u.Z5c.FRIENDS), a.Z.setSection(u.pJs.PENDING);
    });
}
function p(e) {
    d(e, c.intl.string(c.t.MYr3KS), () => {
        i.Z.openPrivateChannel(e.id);
    });
}
