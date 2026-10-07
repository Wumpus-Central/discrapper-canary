n.d(t, { A: () => S });
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(189213),
    a = n(683071),
    o = n(95477),
    u = n(691885),
    d = n(73153),
    c = n(271866),
    g = n(956518),
    m = n(235986),
    A = n(147964),
    E = n(660183),
    h = n(479381),
    x = n(221851);
let p = /^\d+$|^$/;
function S(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: S,
            authorizationError: T,
            authorizing: f,
        } = (0, l.cf)([A.A], () => ({
            authorizedApplicationId: A.A.testModeApplicationId,
            authorizationError: A.A.error,
            authorizing: A.A.isFetchingAuthorization,
        })),
        [I, _] = s.useState(S ?? ""),
        [N, C] = s.useState("8080"),
        [y, b] = s.useState("localhost"),
        v = p.test(I);
    async function j() {
        c.SH();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return `https://localhost:${t}`;
                case "proxy":
                    return (0, g.Ay)(n);
            }
        })(y, N, I);
        null != (await c.q1(I, e)) && t();
    }
    s.useEffect(() => () => d.h.wait(() => c.SH()), []);
    let O = null != S && S === I,
        L = O
            ? function () {
                  (c.cL(), _(""), b(null));
              }
            : j,
        R = s.useMemo(
            () => [
                {
                    loading: f,
                    disabled: !v || 0 === I.length || ("localhost" === y && 0 === N.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? E.intl.string(E.t.d6TR3I) : E.intl.string(E.t.qwuK5I),
                    onClick: L,
                },
            ],
            [I.length, f, O, v, N.length, L, y],
        );
    return (0, i.jsxs)(r.a, {
        title: E.intl.string(E.t.f8fzky),
        subtitle: E.intl.string(E.t.a6Vill),
        actions: R,
        onClose: t,
        transitionState: n,
        children: [
            null == T
                ? null
                : (0, i.jsx)("div", {
                      className: x.SX,
                      children: (0, i.jsx)(a.w, { type: "critical", message: T, role: "alert" }),
                  }),
            (0, i.jsxs)(m.A, {
                direction: m.A.Direction.VERTICAL,
                align: m.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: h.I,
                        children: (0, i.jsx)(o.k, {
                            label: E.intl.string(E.t.P6TzgI),
                            required: !0,
                            value: I,
                            maxLength: 19,
                            error: v ? null : E.intl.string(E.t.gPNgKO),
                            onChange: function (e) {
                                _(e);
                            },
                            disabled: f,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: h.I,
                        children: (0, i.jsx)(u.l, {
                            selectionMode: "single",
                            label: E.intl.string(E.t["/GTqXG"]),
                            disabled: !v || "" === I,
                            value: y,
                            options: [
                                { value: "localhost", label: E.intl.string(E.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: E.intl.string(E.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                b(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== y
                        ? null
                        : (0, i.jsx)("div", {
                              className: h.I,
                              children: (0, i.jsx)(o.k, {
                                  required: !0,
                                  label: E.intl.string(E.t.fF4zxq),
                                  value: N,
                                  maxLength: 5,
                                  onChange: (e) => C(e),
                                  disabled: f,
                              }),
                          }),
                ],
            }),
        ],
    });
}
