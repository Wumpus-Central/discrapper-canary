n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(73153),
    d = n(271866),
    c = n(956518),
    u = n(235986),
    _ = n(147964),
    g = n(985018),
    A = n(76985),
    m = n(522759);
let h = /^\d+$|^$/;
function p(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: p,
            authorizationError: x,
            authorizing: E,
        } = (0, a.cf)([_.A], () => ({
            authorizedApplicationId: _.A.testModeApplicationId,
            authorizationError: _.A.error,
            authorizing: _.A.isFetchingAuthorization,
        })),
        [T, S] = s.useState(p ?? ""),
        [C, I] = s.useState("8080"),
        [f, N] = s.useState("localhost"),
        b = h.test(T);
    async function v() {
        d.SH();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return `https://localhost:${t}`;
                case "proxy":
                    return (0, c.Ay)(n);
            }
        })(f, C, T);
        null != (await d.q1(T, e)) && t();
    }
    s.useEffect(() => () => o.h.wait(() => d.SH()), []);
    let O = null != p && p === T,
        j = O
            ? function () {
                  d.cL(), S(""), N(null);
              }
            : v,
        R = s.useMemo(
            () => [
                {
                    loading: E,
                    disabled: !b || 0 === T.length || ("localhost" === f && 0 === C.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? g.intl.string(g.t.d6TR3I) : g.intl.string(g.t.qwuK5I),
                    onClick: j,
                },
            ],
            [T.length, E, O, b, C.length, j, f],
        );
    return (0, i.jsxs)(l.Modal, {
        title: g.intl.string(g.t.f8fzky),
        subtitle: g.intl.string(g.t.a6Vill),
        actions: R,
        onClose: t,
        transitionState: n,
        children: [
            null == x
                ? null
                : (0, i.jsx)("div", {
                      className: m.SX,
                      children: (0, i.jsx)(r.wx6, { type: "critical", children: x }),
                  }),
            (0, i.jsxs)(u.A, {
                direction: u.A.Direction.VERTICAL,
                align: u.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(r.ksK, {
                            label: g.intl.string(g.t.P6TzgI),
                            required: !0,
                            value: T,
                            maxLength: 19,
                            error: b ? null : g.intl.string(g.t.gPNgKO),
                            onChange: function (e) {
                                S(e);
                            },
                            disabled: E,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(r.l6P, {
                            selectionMode: "single",
                            label: g.intl.string(g.t["/GTqXG"]),
                            disabled: !b || "" === T,
                            value: f,
                            options: [
                                { value: "localhost", label: g.intl.string(g.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: g.intl.string(g.t.uaksyW), id: "proxy" },
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
                                  label: g.intl.string(g.t.fF4zxq),
                                  value: C,
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
