n.d(t, {
    T: () => d,
    z: () => f
});
var r = n(493683),
    i = n(529103),
    o = n(292556),
    a = n(100527),
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
    u(e, c.intl.string(c.t['t3+Af3']), () => {
        {
            let { openUserProfileModal: t } = n(892001);
            t({
                userId: e.id,
                sourceAnalyticsLocations: [a.Z.FRIEND_REQUEST_NOTIFICATION]
            });
        }
        i.Z.transitionToSection(l.pJs.PENDING, { explicit: !0 });
    });
}
function f(e) {
    u(e, c.intl.string(c.t.MYr3KS), () => {
        r.Z.openPrivateChannel({ recipientIds: e.id });
    });
}
