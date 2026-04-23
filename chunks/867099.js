n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(189213),
    a = n(311907),
    r = n(683071),
    o = n(292666),
    d = n(691885),
    u = n(73153),
    c = n(271866),
    g = n(956518),
    m = n(235986),
    _ = n(147964),
    A = n(985018),
    h = n(291630),
    p = n(818050);
let x = /^\d+$|^$/;
function E(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: E,
            authorizationError: T,
            authorizing: S,
        } = (0, a.cf)([_.A], () => ({
            authorizedApplicationId: _.A.testModeApplicationId,
            authorizationError: _.A.error,
            authorizing: _.A.isFetchingAuthorization,
        })),
        [f, b] = s.useState(E ?? ""),
        [C, v] = s.useState("8080"),
        [N, I] = s.useState("localhost"),
        y = x.test(f);
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
        })(N, C, f);
        null != (await c.q1(f, e)) && t();
    }
    s.useEffect(() => () => u.h.wait(() => c.SH()), []);
    let O = null != E && E === f,
        R = O
            ? function () {
                  c.cL(), b(""), I(null);
              }
            : j,
        L = s.useMemo(
            () => [
                {
                    loading: S,
                    disabled: !y || 0 === f.length || ("localhost" === N && 0 === C.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? A.intl.string(A.t.d6TR3I) : A.intl.string(A.t.qwuK5I),
                    onClick: R,
                },
            ],
            [f.length, S, O, y, C.length, R, N],
        );
    return (0, i.jsxs)(l.Modal, {
        title: A.intl.string(A.t.f8fzky),
        subtitle: A.intl.string(A.t.a6Vill),
        actions: L,
        onClose: t,
        transitionState: n,
        children: [
            null == T
                ? null
                : (0, i.jsx)("div", { className: p.SX, children: (0, i.jsx)(r.w, { type: "critical", children: T }) }),
            (0, i.jsxs)(m.A, {
                direction: m.A.Direction.VERTICAL,
                align: m.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: h.I,
                        children: (0, i.jsx)(o.k, {
                            label: A.intl.string(A.t.P6TzgI),
                            required: !0,
                            value: f,
                            maxLength: 19,
                            error: y ? null : A.intl.string(A.t.gPNgKO),
                            onChange: function (e) {
                                b(e);
                            },
                            disabled: S,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: h.I,
                        children: (0, i.jsx)(d.l, {
                            selectionMode: "single",
                            label: A.intl.string(A.t["/GTqXG"]),
                            disabled: !y || "" === f,
                            value: N,
                            options: [
                                { value: "localhost", label: A.intl.string(A.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: A.intl.string(A.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                I(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== N
                        ? null
                        : (0, i.jsx)("div", {
                              className: h.I,
                              children: (0, i.jsx)(o.k, {
                                  required: !0,
                                  label: A.intl.string(A.t.fF4zxq),
                                  value: C,
                                  maxLength: 5,
                                  onChange: (e) => v(e),
                                  disabled: S,
                              }),
                          }),
                ],
            }),
        ],
    });
}
