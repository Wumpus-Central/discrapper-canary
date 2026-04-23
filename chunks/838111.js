"use strict";
n.d(t, { A: () => u, b: () => _ });
var i = n(17928),
    r = n(260509),
    s = n(71393),
    a = n(576705),
    o = n(287809),
    l = n(488926),
    d = n(652215);
function _(e, t) {
    let [n, i, _] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, s.A, a.A],
        u = i.getGuild(e),
        c = n.getUser(t);
    return (
        !(
            null == u ||
            null == c ||
            c.isNonUserBot() ||
            (0, r.bM)(u, c) ||
            l.$3({ permission: d.xBc.ADMINISTRATOR, user: c, context: u })
        ) && _.canManageUser(d.xBc.MODERATE_MEMBERS, c, u)
    );
}
function u(e, t) {
    return (0, i.bG)([o.default, s.A, a.A], () => _(e, t, [o.default, s.A, a.A]), [e, t]);
}
