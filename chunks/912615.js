n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    a = n(158954),
    l = n(311907),
    r = n(397927),
    o = n(73153),
    c = n(271866),
    d = n(956518),
    u = n(235986),
    _ = n(147964),
    m = n(985018),
    A = n(361151),
    g = n(473169);
let h = /^\d+$|^$/;
function x(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: x,
            authorizationError: p,
            authorizing: E,
        } = (0, l.cf)([_.A], () => ({
            authorizedApplicationId: _.A.testModeApplicationId,
            authorizationError: _.A.error,
            authorizing: _.A.isFetchingAuthorization,
        })),
        [C, T] = s.useState(x ?? ""),
        [S, I] = s.useState("8080"),
        [f, N] = s.useState("localhost"),
        b = h.test(C);
    async function j() {
        c.SH();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return `https://localhost:${t}`;
                case "proxy":
                    return (0, d.Ay)(n);
            }
        })(f, S, C);
        null != (await c.q1(C, e)) && t();
    }
    s.useEffect(() => () => o.h.wait(() => c.SH()), []);
    let v = null != x && x === C,
        O = v
            ? function () {
                  c.cL(), T(""), N(null);
              }
            : j,
        R = s.useMemo(
            () => [
                {
                    loading: E,
                    disabled: !b || 0 === C.length || ("localhost" === f && 0 === S.length),
                    variant: v ? "critical-primary" : "active",
                    text: v ? m.intl.string(m.t.d6TR3I) : m.intl.string(m.t.qwuK5I),
                    onClick: O,
                },
            ],
            [C.length, E, v, b, S.length, O, f],
        );
    return (0, i.jsxs)(a.Modal, {
        title: m.intl.string(m.t.f8fzky),
        subtitle: m.intl.string(m.t.a6Vill),
        actions: R,
        onClose: t,
        transitionState: n,
        children: [
            null == p
                ? null
                : (0, i.jsx)("div", {
                      className: g.SX,
                      children: (0, i.jsx)(r.wx6, { type: "critical", children: p }),
                  }),
            (0, i.jsxs)(u.A, {
                direction: u.A.Direction.VERTICAL,
                align: u.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(r.ksK, {
                            label: m.intl.string(m.t.P6TzgI),
                            required: !0,
                            value: C,
                            maxLength: 19,
                            error: b ? null : m.intl.string(m.t.gPNgKO),
                            onChange: function (e) {
                                T(e);
                            },
                            disabled: E,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(r.l6P, {
                            selectionMode: "single",
                            label: m.intl.string(m.t["/GTqXG"]),
                            disabled: !b || "" === C,
                            value: f,
                            options: [
                                { value: "localhost", label: m.intl.string(m.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: m.intl.string(m.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                N(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== f
                        ? null
                        : (0, i.jsx)("div", {
                              className: A.I,
                              children: (0, i.jsx)(r.ksK, {
                                  required: !0,
                                  label: m.intl.string(m.t.fF4zxq),
                                  value: S,
                                  maxLength: 5,
                                  onChange: (e) => I(e),
                                  disabled: E,
                              }),
                          }),
                ],
            }),
        ],
    });
}
