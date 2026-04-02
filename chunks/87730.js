"use strict";
n.d(t, { o: () => m });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(417597),
    l = n(397927),
    u = n(384904),
    c = n(176095),
    d = n(580630),
    _ = n(523376),
    f = n(985018),
    p = n(1434);
let h = (e) => e.stopPropagation(),
    m = (e) => {
        let { giftCardWallet: t, checked: n, onChange: s, itemAmount: m, className: E, disabled: g = !1 } = e,
            A = (0, o.bG)([c.A], () => c.A.getBalance(t.id), [t.id]),
            I = (0, o.bG)([c.A], () => c.A.getIsFetching(t.id), [t.id]);
        i.useEffect(() => {
            (0, u.YP)(t.id);
        }, [t.id]);
        let T = null == A && !I,
            S = i.useMemo(() => {
                if (null == A) return null;
                let e = (0, d.$g)(A.amount, A.currency);
                return f.intl.format(_.default["9Nb9Bz"], { amount: e });
            }, [A]),
            y = null != m && null != A && A.amount < m;
        i.useEffect(() => {
            (y || T) && n && s(!1);
        }, [y, T, n, s]);
        let v = g || y || T,
            N = i.useCallback(() => {
                v || s(!n);
            }, [s, n, v]);
        return I || T
            ? null
            : (0, r.jsx)(l.DUT, {
                  className: a()(p.k, E),
                  onClick: N,
                  role: "checkbox",
                  "aria-checked": n,
                  "aria-disabled": v,
                  tabIndex: 0,
                  children: (0, r.jsx)(l.DUT, {
                      onClick: h,
                      children: (0, r.jsx)(l.Checkbox, {
                          checked: n && !y && !T,
                          onChange: N,
                          disabled: v,
                          label: f.intl.string(_.default["febr+T"]),
                          description: S ?? void 0,
                      }),
                  }),
              });
    };
