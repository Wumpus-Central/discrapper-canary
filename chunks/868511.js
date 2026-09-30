n.d(t, { A: () => p });
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(189213),
    a = n(683071),
    o = n(95477),
    u = n(691885),
    d = n(228366),
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
        [_, I] = s.useState(p ?? ""),
        [N, C] = s.useState("8080"),
        [b, y] = s.useState("localhost"),
        v = x.test(_);
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
        })(b, N, _);
        null != (await c.q1(_, e)) && t();
    }
    s.useEffect(() => () => d.h.wait(() => c.SH()), []);
    let O = null != p && p === _,
        L = O
            ? function () {
                  (c.cL(), I(""), y(null));
              }
            : j,
        R = s.useMemo(
            () => [
                {
                    loading: f,
                    disabled: !v || 0 === _.length || ("localhost" === b && 0 === N.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? h.intl.string(h.t.d6TR3I) : h.intl.string(h.t.qwuK5I),
                    onClick: L,
                },
            ],
            [_.length, f, O, v, N.length, L, b],
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
                            value: _,
                            maxLength: 19,
                            error: v ? null : h.intl.string(h.t.gPNgKO),
                            onChange: function (e) {
                                I(e);
                            },
                            disabled: f,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: E.I,
                        children: (0, i.jsx)(u.l, {
                            selectionMode: "single",
                            label: h.intl.string(h.t["/GTqXG"]),
                            disabled: !v || "" === _,
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
