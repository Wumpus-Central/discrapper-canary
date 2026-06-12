"use strict";
n.d(t, { A: () => s });
var i = n(735438),
    r = n.n(i);
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
    return r()(e)
        .map((e) => ("null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]))
        .flattenDeep()
        .filter(n)
        .value();
}
