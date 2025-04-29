n.d(t, {
    T: () => f,
    z: () => _
});
var r = n(493683),
    i = n(529103),
    o = n(292556),
    a = n(100527),
    s = n(703656),
    l = n(768581),
    c = n(981631),
    u = n(388032);
function d(e, t, n) {
    o.default.showNotification(
        l.ZP.getUserAvatarURL(e),
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
function f(e) {
    d(e, u.intl.string(u.t['t3+Af3']), () => {
        {
            let { openUserProfileModal: t } = n(892001);
            t({
                userId: e.id,
                sourceAnalyticsLocations: [a.Z.FRIEND_REQUEST_NOTIFICATION]
            });
        }
        (0, s.uL)(c.Z5c.FRIENDS), i.Z.setSection(c.pJs.PENDING);
    });
}
function _(e) {
    d(e, u.intl.string(u.t.MYr3KS), () => {
        r.Z.openPrivateChannel({ recipientIds: e.id });
    });
}
