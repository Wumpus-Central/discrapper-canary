"use strict";
n.d(t, { l: () => r });
var i = n(989349),
    s = n.n(i),
    l = n(661191);
let r = (e) => {
    let t = l.default.extractTimestamp(e);
    return !s()().isBefore(s()(t).add(s().duration(15, "days")));
};
