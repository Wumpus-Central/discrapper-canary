"use strict";
n.d(t, { C7: () => c, YN: () => l, Yb: () => u });
var i = n(353640),
    r = n(121894),
    s = n(625494),
    a = n(652215);
let o = Object.freeze({ hasUnsubmittedChanges: !1, shouldShowWarning: !1 }),
    l = (0, i.v)((e) => o);
function u(e) {
    (0, r.r)(() => l.setState({ hasUnsubmittedChanges: e }));
}
function c(e) {
    (0, r.r)(() => l.setState({ shouldShowWarning: e })), e && s._.dispatch(a.jej.EMPHASIZE_NOTICE);
}
