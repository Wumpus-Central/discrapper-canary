n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(189213),
    a = n(17928),
    r = n(683071),
    o = n(292666),
    d = n(691885),
    u = n(228366),
    c = n(271866),
    g = n(956518),
    _ = n(235986),
    m = n(147964),
    h = n(985018),
    A = n(291630),
    p = n(818050);
let E = /^\d+$|^$/;
function T(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: T,
            authorizationError: S,
            authorizing: x,
        } = (0, a.cf)([m.A], () => ({
            authorizedApplicationId: m.A.testModeApplicationId,
            authorizationError: m.A.error,
            authorizing: m.A.isFetchingAuthorization,
        })),
        [f, b] = l.useState(T ?? ""),
        [N, C] = l.useState("8080"),
        [I, v] = l.useState("localhost"),
        y = E.test(f);
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
        })(I, N, f);
        null != (await c.q1(f, e)) && t();
    }
    l.useEffect(() => () => u.h.wait(() => c.SH()), []);
    let O = null != T && T === f,
        R = O
            ? function () {
                  c.cL(), b(""), v(null);
              }
            : j,
        L = l.useMemo(
            () => [
                {
                    loading: x,
                    disabled: !y || 0 === f.length || ("localhost" === I && 0 === N.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? h.intl.string(h.t.d6TR3I) : h.intl.string(h.t.qwuK5I),
                    onClick: R,
                },
            ],
            [f.length, x, O, y, N.length, R, I],
        );
    return (0, i.jsxs)(s.Modal, {
        title: h.intl.string(h.t.f8fzky),
        subtitle: h.intl.string(h.t.a6Vill),
        actions: L,
        onClose: t,
        transitionState: n,
        children: [
            null == S
                ? null
                : (0, i.jsx)("div", { className: p.SX, children: (0, i.jsx)(r.w, { type: "critical", children: S }) }),
            (0, i.jsxs)(_.A, {
                direction: _.A.Direction.VERTICAL,
                align: _.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(o.k, {
                            label: h.intl.string(h.t.P6TzgI),
                            required: !0,
                            value: f,
                            maxLength: 19,
                            error: y ? null : h.intl.string(h.t.gPNgKO),
                            onChange: function (e) {
                                b(e);
                            },
                            disabled: x,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(d.l, {
                            selectionMode: "single",
                            label: h.intl.string(h.t["/GTqXG"]),
                            disabled: !y || "" === f,
                            value: I,
                            options: [
                                { value: "localhost", label: h.intl.string(h.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: h.intl.string(h.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                v(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== I
                        ? null
                        : (0, i.jsx)("div", {
                              className: A.I,
                              children: (0, i.jsx)(o.k, {
                                  required: !0,
                                  label: h.intl.string(h.t.fF4zxq),
                                  value: N,
                                  maxLength: 5,
                                  onChange: (e) => C(e),
                                  disabled: x,
                              }),
                          }),
                ],
            }),
        ],
    });
}
