i.d(e, { Z: () => o });
var n = i(419954),
    l = i(780964),
    s = i(115980),
    r = i(985018);
let u = (0, n.E2)(l.X.BILLING_TRANSACTION_HISTORY, {
        Component: s.ac,
        useSearchTerms: () => [r.intl.string(r.t.obLrcK)],
    }),
    a = (0, n.E2)(l.X.BILLING_REDEMPTION_REDIRECT, {
        Component: s.OH,
        useSearchTerms: () => [r.intl.string(r.t.obLrcK)],
    }),
    o = (0, n.zZ)(l.X.BILLING_TRANSACTION_HISTORY_CATEGORY, {
        useTitle: () => r.intl.string(r.t.obLrcK),
        buildLayout: () => [u, a],
    });
