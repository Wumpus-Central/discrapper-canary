n.d(t, { o: () => h });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(702841),
    o = n(939249),
    c = n(150934),
    d = n(289873),
    u = n(323082),
    p = n(176095),
    _ = n(580630),
    m = n(327105),
    b = n(985018),
    f = n(677665);
let g = (e) => e.stopPropagation(),
    h = (e) => {
        let { giftCardWallet: t, checked: n, onChange: l, className: h, disabled: x = !1 } = e,
            v = (0, s.bG)([p.A], () => p.A.getBalance(t.id), [t.id]),
            A = (0, s.bG)([p.A], () => p.A.getIsFetching(t.id), [t.id]);
        r.useEffect(() => {
            (0, u.YP)(t.id);
        }, [t.id]);
        let y = null == v && !A,
            I = r.useMemo(() => {
                if (null == v) return null;
                let e = (0, _.$g)(v.amount, v.currency);
                return b.intl.format(m.default["9Nb9Bz"], { amount: e });
            }, [v]);
        r.useEffect(() => {
            y && n && l(!1);
        }, [y, n, l]);
        let j = x || A || y,
            E = r.useCallback(() => {
                j || l(!n);
            }, [l, n, j]);
        return y
            ? null
            : (0, a.jsxs)(o.D, {
                  className: i()(f.k, h),
                  onClick: E,
                  role: "checkbox",
                  "aria-checked": n,
                  "aria-disabled": j,
                  tabIndex: 0,
                  children: [
                      (0, a.jsx)(o.D, {
                          onClick: g,
                          children: (0, a.jsx)(c.S, {
                              checked: n && !y,
                              onChange: E,
                              disabled: j,
                              label: b.intl.string(m.default["febr+T"]),
                              description: A ? void 0 : (I ?? void 0),
                          }),
                      }),
                      A && (0, a.jsx)(d.y, { type: d.y.Type.PULSING_ELLIPSIS }),
                  ],
              });
    };
