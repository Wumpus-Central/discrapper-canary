n.d(t, { A: () => p });
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
    h = n(375708),
    E = n(479381),
    S = n(221851);
let x = /^\d+$|^$/;
function p(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: p,
            authorizationError: T,
            authorizing: f,
        } = (0, l.cf)([A.A], () => ({
            authorizedApplicationId: A.A.testModeApplicationId,
            authorizationError: A.A.error,
            authorizing: A.A.isFetchingAuthorization,
        })),
        [I, _] = s.useState(p ?? ""),
        [N, C] = s.useState("8080"),
        [b, y] = s.useState("localhost"),
        v = x.test(I);
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
        })(b, N, I);
        null != (await c.q1(I, e)) && t();
    }
    s.useEffect(() => () => d.h.wait(() => c.SH()), []);
    let O = null != p && p === I,
        L = O
            ? function () {
                  (c.cL(), _(""), y(null));
              }
            : j,
        R = s.useMemo(
            () => [
                {
                    loading: f,
                    disabled: !v || 0 === I.length || ("localhost" === b && 0 === N.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? h.intl.string(h.t.d6TR3I) : h.intl.string(h.t.qwuK5I),
                    onClick: L,
                },
            ],
            [I.length, f, O, v, N.length, L, b],
        );
    return (0, i.jsxs)(r.a, {
        title: h.intl.string(h.t.f8fzky),
        subtitle: h.intl.string(h.t.a6Vill),
        actions: R,
        onClose: t,
        transitionState: n,
        children: [
            null == T
                ? null
                : (0, i.jsx)("div", { className: S.SX, children: (0, i.jsx)(a.w, { type: "critical", children: T }) }),
            (0, i.jsxs)(m.A, {
                direction: m.A.Direction.VERTICAL,
                align: m.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: E.I,
                        children: (0, i.jsx)(o.k, {
                            label: h.intl.string(h.t.P6TzgI),
                            required: !0,
                            value: I,
                            maxLength: 19,
                            error: v ? null : h.intl.string(h.t.gPNgKO),
                            onChange: function (e) {
                                _(e);
                            },
                            disabled: f,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: E.I,
                        children: (0, i.jsx)(u.l, {
                            selectionMode: "single",
                            label: h.intl.string(h.t["/GTqXG"]),
                            disabled: !v || "" === I,
                            value: b,
                            options: [
                                { value: "localhost", label: h.intl.string(h.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: h.intl.string(h.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                y(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== b
                        ? null
                        : (0, i.jsx)("div", {
                              className: E.I,
                              children: (0, i.jsx)(o.k, {
                                  required: !0,
                                  label: h.intl.string(h.t.fF4zxq),
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
