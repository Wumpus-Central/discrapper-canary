n.d(t, {
    T: () => d,
    z: () => f
});
var r = n(493683),
    i = n(529103),
    o = n(292556),
    a = n(703656),
    s = n(768581),
    l = n(981631),
    c = n(388032);
function u(e, t, n) {
    o.default.showNotification(
        s.ZP.getUserAvatarURL(e),
        e.username,
        t,
        {},
        {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: n,
            isUserAvatar: !0
        }
    );
}
function d(e) {
    u(e, c.NW.string(c.t['t3+Af3']), () => {
        {
            let { openUserProfileModal: t } = n(171368);
            t({ userId: e.id });
        }
        (0, a.uL)(l.Z5c.FRIENDS), i.Z.setSection(l.pJs.PENDING);
    });
}
function f(e) {
    u(e, c.NW.string(c.t.MYr3KS), () => {
        r.Z.openPrivateChannel(e.id);
    });
}
