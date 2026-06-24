"use strict";
n.d(t, { o: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(702841),
    l = n(661531),
    u = n(990078),
    c = n(150934),
    d = n(834730),
    _ = n(885574),
    h = n(289873),
    f = n(939249),
    p = n(753390),
    E = n(176095),
    m = n(580630),
    g = n(776409),
    A = n(375708),
    I = n(677665);
function T(e) {
    return e.stopPropagation();
}
function S(e) {
    let {
            giftCardWallet: t,
            checked: n,
            onChange: s,
            className: S,
            disabled: y = !1,
            disabledTooltip: C,
            locked: N = !1,
            showDisabledInfoIcon: v = !0,
        } = e,
        R = (0, o.bG)([E.A], () => E.A.getBalance(t.id), [t.id]),
        O = (0, o.bG)([E.A], () => E.A.getIsFetching(t.id), [t.id]);
    r.useEffect(() => {
        (0, p.YP)(t.id);
    }, [t.id]);
    let b = null == R && !O,
        D = r.useMemo(() => {
            if (null == R) return null;
            let e = (0, m.$g)(R.amount, R.currency);
            return A.intl.format(g.default["9Nb9Bz"], { amount: e });
        }, [R]);
    r.useEffect(() => {
        !N && b && n && s(!1);
    }, [N, b, n, s]);
    let L = y || O || (!N && b),
        w = L || N,
        M = r.useCallback(() => {
            w || s(!n);
        }, [s, n, w]);
    if (b && !N) return null;
    let P = L && null != C && v,
        x = w && null != C,
        k = a()(I.k, S),
        U = (0, i.jsx)(c.S, { checked: n && (N || !b), onChange: M, disabled: w, label: "" }),
        G = (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: A.intl.string(g.default["febr+T"]),
                }),
                !O &&
                    null != D &&
                    (0, i.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: D,
                    }),
            ],
        }),
        F = w
            ? (0, i.jsxs)("div", {
                  className: k,
                  role: "checkbox",
                  "aria-checked": n,
                  "aria-disabled": L || void 0,
                  children: [
                      (0, i.jsx)("div", { children: U }),
                      G,
                      P && (0, i.jsx)(_.m, { className: I.G, size: "xs", color: l.A.colors.TEXT_MUTED }),
                      O && (0, i.jsx)(h.y, { type: h.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, i.jsxs)(f.D, {
                  className: k,
                  onClick: M,
                  role: "checkbox",
                  "aria-checked": n,
                  tabIndex: 0,
                  children: [(0, i.jsx)(f.D, { onClick: T, children: U }), G],
              });
    return x ? (0, i.jsx)(u.m, { text: C, asContainer: !0, position: "top", align: "center", children: F }) : F;
}
