var i = n(477900),
    l = n(582128),
    s = n(855986),
    r = n(189213),
    a = n(683071),
    o = n(95477),
    u = n(691885),
    d = n(271866),
    c = n(956518),
    g = n(235986),
    m = n(147964),
    A = n(792996),
    E = n(479381),
    h = n(221851);
let S = /^\d+$|^$/;
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onClose: t, transitionState: n } = e,
                {
                    authorizedApplicationId: T,
                    authorizationError: f,
                    authorizing: p,
                } = (0, s.cf)([m.A], () => ({
                    authorizedApplicationId: m.A.testModeApplicationId,
                    authorizationError: m.A.error,
                    authorizing: m.A.isFetchingAuthorization,
                })),
                [x, I] = l.useState(T ?? ""),
                [_, b] = l.useState("8080"),
                [N, C] = l.useState("localhost"),
                y = S.test(x);
            l.useEffect(() => d.SH, []);
            let v = null != T && T === x,
                j = v
                    ? function () {
                          (d.cL(), I(""), C(null));
                      }
                    : async function () {
                          d.SH();
                          let e = (function (e, t, n) {
                              if (null == e) return null;
                              switch (e) {
                                  case "localhost":
                                      return `https://localhost:${t}`;
                                  case "proxy":
                                      return (0, c.Ay)(n);
                              }
                          })(N, _, x);
                          null != (await d.q1(x, e)) && t();
                      },
                O = l.useMemo(
                    () => [
                        {
                            loading: p,
                            disabled: !y || 0 === x.length || ("localhost" === N && 0 === _.length),
                            variant: v ? "critical-primary" : "active",
                            text: v ? A.intl.string(A.t.d6TR3I) : A.intl.string(A.t.qwuK5I),
                            onClick: j,
                        },
                    ],
                    [x.length, p, v, y, _.length, j, N],
                );
            return (0, i.jsxs)(r.a, {
                title: A.intl.string(A.t.f8fzky),
                subtitle: A.intl.string(A.t.a6Vill),
                actions: O,
                onClose: t,
                transitionState: n,
                children: [
                    null == f
                        ? null
                        : (0, i.jsx)("div", {
                              className: h.SX,
                              children: (0, i.jsx)(a.w, { type: "critical", message: f, role: "alert" }),
                          }),
                    (0, i.jsxs)(g.A, {
                        direction: g.A.Direction.VERTICAL,
                        align: g.A.Align.START,
                        children: [
                            (0, i.jsx)("div", {
                                className: E.I,
                                children: (0, i.jsx)(o.k, {
                                    label: A.intl.string(A.t.P6TzgI),
                                    required: !0,
                                    value: x,
                                    maxLength: 19,
                                    error: y ? null : A.intl.string(A.t.gPNgKO),
                                    onChange: function (e) {
                                        I(e);
                                    },
                                    disabled: p,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: E.I,
                                children: (0, i.jsx)(u.l, {
                                    selectionMode: "single",
                                    label: A.intl.string(A.t["/GTqXG"]),
                                    disabled: !y || "" === x,
                                    value: N,
                                    options: [
                                        { value: "localhost", label: A.intl.string(A.t["+Y9Y6r"]), id: "localhost" },
                                        { value: "proxy", label: A.intl.string(A.t.uaksyW), id: "proxy" },
                                    ],
                                    onSelectionChange: function (e) {
                                        C(e);
                                    },
                                    placeholder: "URL Origin Type",
                                }),
                            }),
                            "localhost" !== N
                                ? null
                                : (0, i.jsx)("div", {
                                      className: E.I,
                                      children: (0, i.jsx)(o.k, {
                                          required: !0,
                                          label: A.intl.string(A.t.fF4zxq),
                                          value: _,
                                          maxLength: 5,
                                          onChange: (e) => b(e),
                                          disabled: p,
                                      }),
                                  }),
                        ],
                    }),
                ],
            });
        },
    },
);
