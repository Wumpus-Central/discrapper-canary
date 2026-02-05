"use strict";
n.d(t, { C7: () => c, YN: () => l, Yb: () => u });
var r = n(353640),
    i = n(121894),
    a = n(203982),
    s = n(652215);
let o = Object.freeze({ hasUnsubmittedChanges: !1, shouldShowWarning: !1 }),
    l = (0, r.v)((e) => o),
    u = (e) => {
        (0, i.r)(() => l.setState({ hasUnsubmittedChanges: e }));
    },
    c = (e) => {
        (0, i.r)(() => l.setState({ shouldShowWarning: e })), e && a._.dispatch(s.jej.EMPHASIZE_NOTICE);
    };
