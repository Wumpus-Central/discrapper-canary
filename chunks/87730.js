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
    _ = n(756366),
    f = n(985018),
    p = n(472913);
let h = (e) => e.stopPropagation(),
    m = (e) => {
        let { tdsWalletSource: t, checked: n, onChange: s, fieldLabel: m, itemAmount: E, className: g } = e,
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
            y = null != E && null != A && A.amount < E;
        i.useEffect(() => {
            (y || T) && n && s(!1);
        }, [y, T, n, s]);
        let v = i.useCallback(() => {
            y || T || s(!n);
        }, [s, n, y, T]);
        return null == A && I
            ? (0, r.jsx)(l.D0$, {
                  label: m,
                  children: (0, r.jsx)("div", {
                      className: p.k,
                      children: (0, r.jsx)(l.y$y, { type: l.y$y.Type.SPINNING_CIRCLE }),
                  }),
              })
            : T
              ? null
              : (0, r.jsx)(l.D0$, {
                    label: m,
                    children: (0, r.jsx)(l.DUT, {
                        className: a()(p.k, g),
                        onClick: v,
                        role: "checkbox",
                        "aria-checked": n,
                        "aria-disabled": y,
                        tabIndex: 0,
                        children: (0, r.jsx)(l.DUT, {
                            onClick: h,
                            children: (0, r.jsx)(l.Checkbox, {
                                checked: n && !y,
                                onChange: v,
                                disabled: y,
                                label: f.intl.string(_.default["febr+T"]),
                                description: S ?? void 0,
                            }),
                        }),
                    }),
                });
    };
