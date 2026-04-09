"use strict";
n.d(t, { C: () => s });
var r = n(245853),
    i = n(287809);
let s = (e) => {
    let t = i.default.getCurrentUser();
    return !(null != t && t.isStaff()) && !r.r4.getConfig({ location: e.location }).enabled;
};
