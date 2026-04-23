n.d(t, { w: () => c });
var i = n(200921),
    s = n(754333),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(358776),
    d = n(4887),
    u = n(985018);
let c = (0, l.t0)(r.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
    buildLayout: () => [d.C],
    usePredicate: () => (0, o._A)("AccountSessionsNestedPanel"),
    initialize: () => {
        (0, i.GY)();
    },
    useTrailingDecoration: () => ({
        type: a.xn.TEXT,
        useText: () => {
            let { currentSession: e, otherSessions: t } = (0, s.r)(),
                n = t.length + +(null != e);
            return n > 0 ? u.intl.formatToPlainString(u.t.G7zwOk, { count: n }) : u.intl.string(u.t.MKDeyL);
        },
    }),
});
