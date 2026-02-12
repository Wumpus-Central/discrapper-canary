"use strict";
n.d(t, { A: () => _, J: () => d });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(734057),
    o = n(576705),
    l = n(661191),
    u = n(181079),
    c = n(818348);
function d(e, t, n) {
    let r = e.getFavoriteChannels();
    if (i().isEmpty(r)) return !1;
    let a = l.default.keys(r).filter((e) => {
        let r = t.getChannel(e);
        return null != r && (!!r.isPrivate() || n.can(c.xB.VIEW_CHANNEL, r));
    });
    return !i().isEmpty(a);
}
function _() {
    return (0, a.bG)([u.A, s.A, o.A], () => d(u.A, s.A, o.A));
}
