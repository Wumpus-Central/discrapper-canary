s.d(t, { o: () => L });
var n = s(477900),
    r = s(582128),
    a = s(503698),
    l = s.n(a),
    i = s(702841),
    c = s(661531),
    u = s(289873),
    o = s(150934),
    d = s(834730),
    p = s(885574),
    v = s(939249),
    I = s(866665),
    m = s(277984),
    E = s(176095),
    g = s(580630),
    x = s(986485),
    A = s(375708),
    _ = s(7822);
function f(e) {
    return e.stopPropagation();
}
function L(e) {
    let {
            giftCardWallet: t,
            checked: s,
            onChange: a,
            className: L,
            disabled: N = !1,
            loading: h = !1,
            disabledTooltip: P,
            locked: S = !1,
            showDisabledInfoIcon: b = !0,
        } = e,
        T = (0, i.bG)([E.A], () => E.A.getBalance(t.id), [t.id]),
        R = (0, i.bG)([E.A], () => E.A.getIsFetching(t.id), [t.id]);
    r.useEffect(() => {
        (0, m.YP)(t.id);
    }, [t.id]);
    let C = null == T && !R,
        y = r.useMemo(() => {
            if (null == T) return null;
            let e = (0, g.$g)(T.amount, T.currency);
            return A.intl.format(x.default["9Nb9Bz"], { amount: e });
        }, [T]);
    r.useEffect(() => {
        !S && C && s && a(!1);
    }, [S, C, s, a]);
    let M = N || h || R || (!S && C),
        j = M || S,
        U = r.useCallback(() => {
            j || a(!s);
        }, [a, s, j]);
    if (C && !S) return null;
    let w = M && null != P && b,
        O = j && null != P,
        k = l()(_.kL, L),
        G = h
            ? (0, n.jsx)("div", {
                  className: _.tv,
                  children: (0, n.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE_SIMPLE, className: _.u1 }),
              })
            : (0, n.jsx)(o.S, { checked: s && (S || !C), onChange: U, disabled: j, label: "" }),
        B = (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(d.E, {
                    variant: "text-md/normal",
                    color: "text-strong",
                    children: A.intl.string(x.default["febr+T"]),
                }),
                !R &&
                    null != y &&
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        style: { marginTop: 4 },
                        children: y,
                    }),
            ],
        }),
        D = j
            ? (0, n.jsxs)("div", {
                  className: k,
                  role: "checkbox",
                  "aria-checked": !h && s,
                  "aria-busy": h || void 0,
                  "aria-disabled": M || void 0,
                  children: [
                      (0, n.jsx)("div", { children: G }),
                      B,
                      w &&
                          (0, n.jsx)(p.CircleInformationIcon, {
                              className: _.G,
                              size: "xs",
                              color: c.A.colors.TEXT_MUTED,
                          }),
                      R && (0, n.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
                  ],
              })
            : (0, n.jsxs)(v.D, {
                  className: k,
                  onClick: U,
                  role: "checkbox",
                  "aria-checked": s,
                  tabIndex: 0,
                  children: [(0, n.jsx)(v.D, { onClick: f, children: G }), B],
              });
    return O ? (0, n.jsx)(I.m, { text: P, asContainer: !0, position: "top", align: "center", children: D }) : D;
}
