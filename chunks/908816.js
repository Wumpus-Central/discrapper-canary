"use strict";
n.d(t, { A: () => I });
var i = n(765178),
    r = n(439372),
    a = n(308528),
    s = n(711950),
    l = n(264686),
    o = n(793574),
    d = n(486020),
    c = n(652215),
    u = n(375708);
function _(e, t, n) {
    l.default.showNotification(
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
    if (t.type === c.eA$.PENDING_INCOMING && !r) {
        var a;
        i.O.announce(u.intl.formatToPlainString(u.t.zH0kC7, { username: t.user.username })),
            _((a = t.user), u.intl.string(u.t["t3+Af3"]), () => {
                {
                    let { openUserProfileModal: e } = n(975732);
                    e({ userId: a.id, sourceAnalyticsLocations: [o.A.FRIEND_REQUEST_NOTIFICATION] });
                }
                s.A.transitionToSection(c.m3P.PENDING, { explicit: !0 });
            });
    }
}
function A(e) {
    let { user: t } = e;
    i.O.announce(u.intl.formatToPlainString(u.t["/+7xky"], { username: t.username })),
        _(t, u.intl.string(u.t.MYr3Ka), () => {
            a.A.openPrivateChannel({ recipientIds: t.id });
        });
}
class h extends r.A {
    actions = { RELATIONSHIP_ADD: E, FRIEND_REQUEST_ACCEPTED: A };
}
let I = new h();
