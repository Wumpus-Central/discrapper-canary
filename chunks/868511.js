n.d(t, { A: () => p });
var i = n(477900),
    l = n(582128),
    s = n(189213),
    r = n(17928),
    a = n(683071),
    o = n(95477),
    u = n(691885),
    d = n(228366),
    c = n(271866),
    g = n(956518),
    m = n(235986),
    A = n(147964),
    E = n(375708),
    h = n(479381),
    S = n(221851);
let T = /^\d+$|^$/;
function p(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: p,
            authorizationError: x,
            authorizing: f,
        } = (0, r.cf)([A.A], () => ({
            authorizedApplicationId: A.A.testModeApplicationId,
            authorizationError: A.A.error,
            authorizing: A.A.isFetchingAuthorization,
        })),
        [I, _] = l.useState(p ?? ""),
        [N, C] = l.useState("8080"),
        [b, y] = l.useState("localhost"),
        v = T.test(I);
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
    l.useEffect(() => () => d.h.wait(() => c.SH()), []);
    let O = null != p && p === I,
        L = O
            ? function () {
                  c.cL(), _(""), y(null);
              }
            : j,
        R = l.useMemo(
            () => [
                {
                    loading: f,
                    disabled: !v || 0 === I.length || ("localhost" === b && 0 === N.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? E.intl.string(E.t.d6TR3I) : E.intl.string(E.t.qwuK5I),
                    onClick: L,
                },
            ],
            [I.length, f, O, v, N.length, L, b],
        );
    return (0, i.jsxs)(s.Modal, {
        title: E.intl.string(E.t.f8fzky),
        subtitle: E.intl.string(E.t.a6Vill),
        actions: R,
        onClose: t,
        transitionState: n,
        children: [
            null == x
                ? null
                : (0, i.jsx)("div", { className: S.SX, children: (0, i.jsx)(a.w, { type: "critical", children: x }) }),
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
                            value: b,
                            options: [
                                { value: "localhost", label: E.intl.string(E.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: E.intl.string(E.t.uaksyW), id: "proxy" },
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
