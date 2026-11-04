var i = n(196765),
    r = n(121894),
    a = n(188567),
    s = n(652215);
let l = Object.freeze({ hasUnsubmittedChanges: !1, shouldShowWarning: !1 }),
    o = (0, i.v)((e) => l);
n.d(
    t,
    {},
    {
        C7: function (e) {
            ((0, r.r)(() => o.setState({ shouldShowWarning: e })), e && a._.dispatch(s.jej.EMPHASIZE_NOTICE));
        },
        YN: o,
        Yb: function (e) {
            (0, r.r)(() => o.setState({ hasUnsubmittedChanges: e }));
        },
    },
);
