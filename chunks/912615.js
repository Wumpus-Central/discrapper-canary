n.d(t, {
    A: () => f,
}),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(73153),
    c = n(271866),
    d = n(956518),
    u = n(235986),
    _ = n(147964),
    p = n(985018),
    m = n(361151),
    g = n(473169);
let A = /^\d+$|^$/;

function f(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: f,
            authorizationError: h,
            authorizing: b,
        } = (0, s.cf)([_.A], () => ({
            authorizedApplicationId: _.A.testModeApplicationId,
            authorizationError: _.A.error,
            authorizing: _.A.isFetchingAuthorization,
        })),
        [E, x] = i.useState(null != f ? f : ""),
        [O, C] = i.useState("8080"),
        [I, T] = i.useState("localhost"),
        S = A.test(E);
    async function j() {
        c.SH();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return "https://localhost:".concat(t);
                case "proxy":
                    return (0, d.Ay)(n);
            }
        })(I, O, E);
        null != (await c.q1(E, e)) && t();
    }
    i.useEffect(() => () => o.h.wait(() => c.SH()), []);
    let v = null != f && f === E,
        N = v
            ? function () {
                  c.cL(), x(""), T(null);
              }
            : j,
        y = i.useMemo(
            () => [
                {
                    loading: b,
                    disabled: !S || 0 === E.length || ("localhost" === I && 0 === O.length),
                    variant: v ? "critical-primary" : "active",
                    text: v ? p.intl.string(p.t.d6TR3I) : p.intl.string(p.t.qwuK5I),
                    onClick: N,
                },
            ],
            [E.length, b, v, S, O.length, N, I],
        );
    return (0, r.jsxs)(l.Modal, {
        title: p.intl.string(p.t.f8fzky),
        subtitle: p.intl.string(p.t.a6Vill),
        actions: y,
        onClose: t,
        transitionState: n,
        children: [
            null == h
                ? null
                : (0, r.jsx)("div", {
                      className: g.SX,
                      children: (0, r.jsx)(a.wx6, {
                          type: "critical",
                          children: h,
                      }),
                  }),
            (0, r.jsxs)(u.A, {
                direction: u.A.Direction.VERTICAL,
                align: u.A.Align.START,
                children: [
                    (0, r.jsx)("div", {
                        className: m.I,
                        children: (0, r.jsx)(a.ksK, {
                            label: p.intl.string(p.t.P6TzgI),
                            required: !0,
                            value: E,
                            maxLength: 19,
                            error: S ? null : p.intl.string(p.t.gPNgKO),
                            onChange: function (e) {
                                x(e);
                            },
                            disabled: b,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: m.I,
                        children: (0, r.jsx)(a.l6P, {
                            selectionMode: "single",
                            label: p.intl.string(p.t["/GTqXG"]),
                            disabled: !S || "" === E,
                            value: I,
                            options: [
                                {
                                    value: "localhost",
                                    label: p.intl.string(p.t["+Y9Y6r"]),
                                    id: "localhost",
                                },
                                {
                                    value: "proxy",
                                    label: p.intl.string(p.t.uaksyW),
                                    id: "proxy",
                                },
                            ],
                            onSelectionChange: function (e) {
                                T(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== I
                        ? null
                        : (0, r.jsx)("div", {
                              className: m.I,
                              children: (0, r.jsx)(a.ksK, {
                                  required: !0,
                                  label: p.intl.string(p.t.fF4zxq),
                                  value: O,
                                  maxLength: 5,
                                  onChange: (e) => C(e),
                                  disabled: b,
                              }),
                          }),
                ],
            }),
        ],
    });
}
