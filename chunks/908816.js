"use strict";
n.d(t, { A: () => E });
var i = n(765178),
    r = n(439372),
    s = n(308528),
    a = n(711950),
    o = n(264686),
    l = n(793574),
    u = n(486020),
    c = n(652215),
    d = n(375708);
function _(e, t, n) {
    o.default.showNotification(
        u.Ay.getUserAvatarURL(e),
        e.username,
        t,
        {},
        { omitViewTracking: !0, omitClickTracking: !0, tag: e.id, onClick: n, isUserAvatar: !0 },
    );
}
function h(e) {
    let { relationship: t } = e,
        r = t.userIgnored;
    if (t.type === c.eA$.PENDING_INCOMING && !r) {
        var s;
        i.O.announce(d.intl.formatToPlainString(d.t.zH0kC7, { username: t.user.username })),
            _((s = t.user), d.intl.string(d.t["t3+Af3"]), () => {
                {
                    let { openUserProfileModal: e } = n(975732);
                    e({ userId: s.id, sourceAnalyticsLocations: [l.A.FRIEND_REQUEST_NOTIFICATION] });
                }
                a.A.transitionToSection(c.m3P.PENDING, { explicit: !0 });
            });
    }
}
function f(e) {
    let { user: t } = e;
    i.O.announce(d.intl.formatToPlainString(d.t["/+7xky"], { username: t.username })),
        _(t, d.intl.string(d.t.MYr3Ka), () => {
            s.A.openPrivateChannel({ recipientIds: t.id });
        });
}
class p extends r.A {
    actions = { RELATIONSHIP_ADD: h, FRIEND_REQUEST_ACCEPTED: f };
}
let E = new p();
