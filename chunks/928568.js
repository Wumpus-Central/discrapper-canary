"use strict";
n.d(t, { A: () => a });
var i = n(17928),
    r = n(212455),
    s = n(71393);
function a() {
    return (0, i.yK)([r.A, s.A], () =>
        (function () {
            let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A, s.A],
                n = e.computeGuildIds(),
                i = t.getGuilds();
            return n.filter((e) => null == i[e]);
        })([r.A, s.A]),
    );
}
