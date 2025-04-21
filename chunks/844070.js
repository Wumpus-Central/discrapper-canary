n.d(t, {
    T: () => d,
    z: () => f
});
var r = n(493683),
    i = n(529103),
    a = n(292556),
    o = n(703656),
    s = n(768581),
    l = n(981631),
    c = n(388032);
function u(e, t, n) {
    a.default.showNotification(
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
    u(e, c.intl.string(c.t['t3+Af3']), () => {
        {
            let { openUserProfileModal: t } = n(171368);
            t({ userId: e.id });
        }
        (0, o.uL)(l.Z5c.FRIENDS), i.Z.setSection(l.pJs.PENDING);
    });
}
function f(e) {
    u(e, c.intl.string(c.t.MYr3KS), () => {
        r.Z.openPrivateChannel({ recipientIds: e.id });
    });
}
