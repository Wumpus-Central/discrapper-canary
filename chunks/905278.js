"use strict";
n.d(t, { l: () => s }), n(311907);
var r = n(696451),
    i = n(71393),
    a = n(488926);
let s = function (e, t) {
    let [n, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.A, r.Ay];
    if (null == e || null == t) return null;
    let o = n.getGuild(e);
    if (null == o) return null;
    let l = s.getMember(o.id, t);
    return null == l ? null : a.li(o, l);
};
