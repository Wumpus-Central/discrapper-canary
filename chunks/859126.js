"use strict";
n.d(t, { H: () => i }), n(321073);
var r = n(168186);
function i(e) {
    let t = e.split(",").map((e) => e.trim()),
        n = [],
        i = [];
    return (
        t.forEach((e) => {
            (0, r.hT)(e) ? n.push(e) : i.push(e);
        }),
        [i, n]
    );
}
