"use strict";
n.d(t, { l: () => a }), n(311907);
var r = n(696451),
    i = n(71393),
    s = n(488926);
let a = function (e, t) {
    let [n, a] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [i.A, r.Ay];
    if (null == e || null == t) return null;
    let o = n.getGuild(e);
    if (null == o) return null;
    let l = a.getMember(o.id, t);
    return null == l ? null : s.li(o, l);
};
