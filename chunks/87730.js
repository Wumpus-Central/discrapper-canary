n.d(t, { o: () => v });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(417597),
    o = n(939249),
    u = n(150934),
    c = n(289873),
    d = n(323082),
    m = n(176095),
    p = n(580630),
    _ = n(327105),
    f = n(985018),
    g = n(677665);
let b = (e) => e.stopPropagation(),
    v = (e) => {
        let { giftCardWallet: t, checked: n, onChange: l, itemAmount: v, className: x, disabled: h = !1 } = e,
            I = (0, s.bG)([m.A], () => m.A.getBalance(t.id), [t.id]),
            A = (0, s.bG)([m.A], () => m.A.getIsFetching(t.id), [t.id]);
        r.useEffect(() => {
            (0, d.YP)(t.id);
        }, [t.id]);
        let y = null == I && !A,
            T = r.useMemo(() => {
                if (null == I) return null;
                let e = (0, p.$g)(I.amount, I.currency);
                return f.intl.format(_.default["9Nb9Bz"], { amount: e });
            }, [I]),
            E = null != v && null != I && I.amount < v;
        r.useEffect(() => {
            (E || y) && n && l(!1);
        }, [E, y, n, l]);
        let C = h || A || E || y,
            P = r.useCallback(() => {
                C || l(!n);
            }, [l, n, C]);
        return y
            ? null
            : (0, a.jsxs)(o.D, {
                  className: i()(g.k, x),
                  onClick: P,
                  role: "checkbox",
                  "aria-checked": n,
                  "aria-disabled": C,
                  tabIndex: 0,
                  children: [
                      (0, a.jsx)(o.D, {
                          onClick: b,
                          children: (0, a.jsx)(u.S, {
                              checked: n && !E && !y,
                              onChange: P,
                              disabled: C,
                              label: f.intl.string(_.default["febr+T"]),
                              description: A ? void 0 : (T ?? void 0),
                          }),
                      }),
                      A && (0, a.jsx)(c.y, { type: c.y.Type.PULSING_ELLIPSIS }),
                  ],
              });
    };
