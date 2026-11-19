var i = n(477900),
    l = n(582128),
    s = n(855986),
    r = n(189213),
    a = n(683071),
    o = n(95477),
    u = n(691885),
    c = n(271866),
    d = n(956518),
    m = n(235986),
    g = n(147964),
    A = n(792996),
    E = n(479381),
    h = n(221851);
let f = /^\d+$|^$/;
n.d(
    t,
    {},
    {
        A: function (e) {
            let { onClose: t, transitionState: n } = e,
                {
                    authorizedApplicationId: p,
                    authorizationError: S,
                    authorizing: T,
                } = (0, s.cf)([g.A], () => ({
                    authorizedApplicationId: g.A.testModeApplicationId,
                    authorizationError: g.A.error,
                    authorizing: g.A.isFetchingAuthorization,
                })),
                [x, I] = l.useState(p ?? ""),
                [_, b] = l.useState("8080"),
                [C, y] = l.useState("localhost"),
                N = f.test(x);
            l.useEffect(() => c.SH, []);
            let v = null != p && p === x,
                j = v
                    ? function () {
                          (c.cL(), I(""), y(null));
                      }
                    : async function () {
                          c.SH();
                          let e = (function (e, t, n) {
                              if (null == e) return null;
                              switch (e) {
                                  case "localhost":
                                      return `https://localhost:${t}`;
                                  case "proxy":
                                      return (0, d.Ay)(n);
                              }
                          })(C, _, x);
                          null != (await c.q1(x, e)) && t();
                      },
                O = l.useMemo(
                    () => [
                        {
                            loading: T,
                            disabled: !N || 0 === x.length || ("localhost" === C && 0 === _.length),
                            variant: v ? "critical-primary" : "active",
                            text: v ? A.intl.string(A.t.d6TR3I) : A.intl.string(A.t.qwuK5I),
                            onClick: j,
                        },
                    ],
                    [x.length, T, v, N, _.length, j, C],
                );
            return (0, i.jsxs)(r.a, {
                title: A.intl.string(A.t.f8fzky),
                subtitle: A.intl.string(A.t.a6Vill),
                actions: O,
                onClose: t,
                transitionState: n,
                children: [
                    null == S
                        ? null
                        : (0, i.jsx)("div", {
                              className: h.SX,
                              children: (0, i.jsx)(a.w, { type: "critical", message: S, role: "alert" }),
                          }),
                    (0, i.jsxs)(m.A, {
                        direction: m.A.Direction.VERTICAL,
                        align: m.A.Align.START,
                        children: [
                            (0, i.jsx)("div", {
                                className: E.I,
                                children: (0, i.jsx)(o.k, {
                                    label: A.intl.string(A.t.P6TzgI),
                                    required: !0,
                                    value: x,
                                    maxLength: 19,
                                    error: N ? null : A.intl.string(A.t.gPNgKO),
                                    onChange: function (e) {
                                        I(e);
                                    },
                                    disabled: T,
                                }),
                            }),
                            (0, i.jsx)("div", {
                                className: E.I,
                                children: (0, i.jsx)(u.l, {
                                    selectionMode: "single",
                                    label: A.intl.string(A.t["/GTqXG"]),
                                    disabled: !N || "" === x,
                                    value: C,
                                    options: [
                                        { value: "localhost", label: A.intl.string(A.t["+Y9Y6r"]), id: "localhost" },
                                        { value: "proxy", label: A.intl.string(A.t.uaksyW), id: "proxy" },
                                    ],
                                    onSelectionChange: function (e) {
                                        y(e);
                                    },
                                    placeholder: "URL Origin Type",
                                }),
                            }),
                            "localhost" !== C
                                ? null
                                : (0, i.jsx)("div", {
                                      className: E.I,
                                      children: (0, i.jsx)(o.k, {
                                          required: !0,
                                          label: A.intl.string(A.t.fF4zxq),
                                          value: _,
                                          maxLength: 5,
                                          onChange: (e) => b(e),
                                          disabled: T,
                                      }),
                                  }),
                        ],
                    }),
                ],
            });
        },
    },
);
