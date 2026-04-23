"use strict";
n.d(t, { o: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(702841),
    l = n(939249),
    d = n(150934),
    _ = n(289873),
    u = n(323082),
    c = n(176095),
    E = n(580630),
    h = n(327105),
    m = n(985018),
    f = n(677665);
let g = (e) => e.stopPropagation(),
    p = (e) => {
        let { giftCardWallet: t, checked: n, onChange: s, className: p, disabled: A = !1 } = e,
            I = (0, o.bG)([c.A], () => c.A.getBalance(t.id), [t.id]),
            T = (0, o.bG)([c.A], () => c.A.getIsFetching(t.id), [t.id]);
        r.useEffect(() => {
            (0, u.YP)(t.id);
        }, [t.id]);
        let S = null == I && !T,
            N = r.useMemo(() => {
                if (null == I) return null;
                let e = (0, E.$g)(I.amount, I.currency);
                return m.intl.format(h.default["9Nb9Bz"], { amount: e });
            }, [I]);
        r.useEffect(() => {
            S && n && s(!1);
        }, [S, n, s]);
        let C = A || T || S,
            R = r.useCallback(() => {
                C || s(!n);
            }, [s, n, C]);
        return S
            ? null
            : (0, i.jsxs)(l.D, {
                  className: a()(f.k, p),
                  onClick: R,
                  role: "checkbox",
                  "aria-checked": n,
                  "aria-disabled": C,
                  tabIndex: 0,
                  children: [
                      (0, i.jsx)(l.D, {
                          onClick: g,
                          children: (0, i.jsx)(d.S, {
                              checked: n && !S,
                              onChange: R,
                              disabled: C,
                              label: m.intl.string(h.default["febr+T"]),
                              description: T ? void 0 : (N ?? void 0),
                          }),
                      }),
                      T && (0, i.jsx)(_.y, { type: _.y.Type.PULSING_ELLIPSIS }),
                  ],
              });
    };
