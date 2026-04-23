"use strict";
n.d(t, { o: () => g });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(417597),
    l = n(939249),
    u = n(150934),
    c = n(289873),
    d = n(323082),
    _ = n(176095),
    f = n(580630),
    p = n(327105),
    h = n(985018),
    E = n(677665);
let m = (e) => e.stopPropagation(),
    g = (e) => {
        let { giftCardWallet: t, checked: n, onChange: s, itemAmount: g, className: A, disabled: I = !1 } = e,
            T = (0, o.bG)([_.A], () => _.A.getBalance(t.id), [t.id]),
            S = (0, o.bG)([_.A], () => _.A.getIsFetching(t.id), [t.id]);
        i.useEffect(() => {
            (0, d.YP)(t.id);
        }, [t.id]);
        let y = null == T && !S,
            N = i.useMemo(() => {
                if (null == T) return null;
                let e = (0, f.$g)(T.amount, T.currency);
                return h.intl.format(p.default["9Nb9Bz"], { amount: e });
            }, [T]),
            v = null != g && null != T && T.amount < g;
        i.useEffect(() => {
            (v || y) && n && s(!1);
        }, [v, y, n, s]);
        let C = I || S || v || y,
            O = i.useCallback(() => {
                C || s(!n);
            }, [s, n, C]);
        return y
            ? null
            : (0, r.jsxs)(l.D, {
                  className: a()(E.k, A),
                  onClick: O,
                  role: "checkbox",
                  "aria-checked": n,
                  "aria-disabled": C,
                  tabIndex: 0,
                  children: [
                      (0, r.jsx)(l.D, {
                          onClick: m,
                          children: (0, r.jsx)(u.S, {
                              checked: n && !v && !y,
                              onChange: O,
                              disabled: C,
                              label: h.intl.string(p.default["febr+T"]),
                              description: S ? void 0 : (N ?? void 0),
                          }),
                      }),
                      S && (0, r.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS }),
                  ],
              });
    };
