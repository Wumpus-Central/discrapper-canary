"use strict";
n.d(t, { A: () => d, b: () => c });
var r = n(311907),
    i = n(260509),
    s = n(71393),
    a = n(576705),
    o = n(287809),
    l = n(488926),
    u = n(652215);
function c(e, t) {
    let [n, r, c] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, s.A, a.A],
        d = r.getGuild(e),
        _ = n.getUser(t);
    return (
        !(
            null == d ||
            null == _ ||
            _.isNonUserBot() ||
            (0, i.bM)(d, _) ||
            l.$3({ permission: u.xBc.ADMINISTRATOR, user: _, context: d })
        ) && c.canManageUser(u.xBc.MODERATE_MEMBERS, _, d)
    );
}
function d(e, t) {
    return (0, r.bG)([o.default, s.A, a.A], () => c(e, t, [o.default, s.A, a.A]), [e, t]);
}
