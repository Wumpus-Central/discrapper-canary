n.d(t, { w: () => u });
var i = n(200921),
    s = n(754333),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(358776),
    d = n(4887),
    c = n(985018);
let u = (0, l.eA)(r.X.ACCOUNT_SESSIONS_NESTED_PANEL, {
    buildLayout: () => [d.C],
    usePredicate: () => (0, o._A)("AccountSessionsNestedPanel"),
    initialize: () => (
        (0, i.GY)(),
        () => {
            (0, i.ZQ)();
        }
    ),
    useTrailingDecoration: () => ({
        type: a.sw.TEXT,
        useText: () => {
            let { currentSession: e, otherSessions: t } = (0, s.r)(),
                n = t.length + +(null != e);
            return n > 0 ? c.intl.formatToPlainString(c.t.G7zwOk, { count: n }) : null;
        },
    }),
});
