"use strict";
n.d(t, { A: () => s });
var i = n(17928),
    r = n(212455),
    a = n(71393);
function s() {
    return (0, i.yK)([r.A, a.A], () =>
        (function () {
            let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A, a.A],
                n = e.computeGuildIds(),
                i = t.getGuilds();
            return n.filter((e) => null == i[e]);
        })([r.A, a.A]),
    );
}
