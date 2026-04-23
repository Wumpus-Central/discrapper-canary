"use strict";
n.d(t, { A: () => f });
var i = n(765178),
    r = n(439372),
    s = n(308528),
    a = n(711950),
    o = n(264686),
    l = n(793574),
    d = n(486020),
    _ = n(652215),
    u = n(985018);
function c(e, t, n) {
    o.default.showNotification(
        d.Ay.getUserAvatarURL(e),
        e.username,
        t,
        {},
        { omitViewTracking: !0, omitClickTracking: !0, tag: e.id, onClick: n, isUserAvatar: !0 },
    );
}
function E(e) {
    let { relationship: t } = e,
        r = t.userIgnored;
    if (t.type === _.eA$.PENDING_INCOMING && !r) {
        var s;
        i.O.announce(u.intl.formatToPlainString(u.t.zH0kC7, { username: t.user.username })),
            c((s = t.user), u.intl.string(u.t["t3+Af3"]), () => {
                {
                    let { openUserProfileModal: e } = n(975732);
                    e({ userId: s.id, sourceAnalyticsLocations: [l.A.FRIEND_REQUEST_NOTIFICATION] });
                }
                a.A.transitionToSection(_.m3P.PENDING, { explicit: !0 });
            });
    }
}
function h(e) {
    let { user: t } = e;
    i.O.announce(u.intl.formatToPlainString(u.t["/+7xky"], { username: t.username })),
        c(t, u.intl.string(u.t.MYr3Ka), () => {
            s.A.openPrivateChannel({ recipientIds: t.id });
        });
}
class m extends r.A {
    actions = { RELATIONSHIP_ADD: E, FRIEND_REQUEST_ACCEPTED: h };
}
let f = new m();
