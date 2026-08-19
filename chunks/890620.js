"use strict";
n.d(t, { C7: () => c, YN: () => o, Yb: () => d });
var i = n(196765),
    r = n(121894),
    a = n(625494),
    s = n(652215);
let l = Object.freeze({ hasUnsubmittedChanges: !1, shouldShowWarning: !1 }),
    o = (0, i.v)((e) => l);
function d(e) {
    (0, r.r)(() => o.setState({ hasUnsubmittedChanges: e }));
}
function c(e) {
    (0, r.r)(() => o.setState({ shouldShowWarning: e })), e && a._.dispatch(s.jej.EMPHASIZE_NOTICE);
}
