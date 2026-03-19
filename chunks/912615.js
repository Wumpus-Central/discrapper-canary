n.d(t, { A: () => h });
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
    m = n(985018),
    g = n(76985),
    A = n(522759);
let x = /^\d+$|^$/;
function h(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: h,
            authorizationError: p,
            authorizing: T,
        } = (0, a.cf)([_.A], () => ({
            authorizedApplicationId: _.A.testModeApplicationId,
            authorizationError: _.A.error,
            authorizing: _.A.isFetchingAuthorization,
        })),
        [E, S] = s.useState(h ?? ""),
        [C, f] = s.useState("8080"),
        [b, N] = s.useState("localhost"),
        I = x.test(E);
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
        })(b, C, E);
        null != (await d.q1(E, e)) && t();
    }
    s.useEffect(() => () => o.h.wait(() => d.SH()), []);
    let j = null != h && h === E,
        y = j
            ? function () {
                  d.cL(), S(""), N(null);
              }
            : v,
        R = s.useMemo(
            () => [
                {
                    loading: T,
                    disabled: !I || 0 === E.length || ("localhost" === b && 0 === C.length),
                    variant: j ? "critical-primary" : "active",
                    text: j ? m.intl.string(m.t.d6TR3I) : m.intl.string(m.t.qwuK5I),
                    onClick: y,
                },
            ],
            [E.length, T, j, I, C.length, y, b],
        );
    return (0, i.jsxs)(l.Modal, {
        title: m.intl.string(m.t.f8fzky),
        subtitle: m.intl.string(m.t.a6Vill),
        actions: R,
        onClose: t,
        transitionState: n,
        children: [
            null == p
                ? null
                : (0, i.jsx)("div", {
                      className: A.SX,
                      children: (0, i.jsx)(r.wx6, { type: "critical", children: p }),
                  }),
            (0, i.jsxs)(u.A, {
                direction: u.A.Direction.VERTICAL,
                align: u.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: g.I,
                        children: (0, i.jsx)(r.ksK, {
                            label: m.intl.string(m.t.P6TzgI),
                            required: !0,
                            value: E,
                            maxLength: 19,
                            error: I ? null : m.intl.string(m.t.gPNgKO),
                            onChange: function (e) {
                                S(e);
                            },
                            disabled: T,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: g.I,
                        children: (0, i.jsx)(r.l6P, {
                            selectionMode: "single",
                            label: m.intl.string(m.t["/GTqXG"]),
                            disabled: !I || "" === E,
                            value: b,
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
                    "localhost" !== b
                        ? null
                        : (0, i.jsx)("div", {
                              className: g.I,
                              children: (0, i.jsx)(r.ksK, {
                                  required: !0,
                                  label: m.intl.string(m.t.fF4zxq),
                                  value: C,
                                  maxLength: 5,
                                  onChange: (e) => f(e),
                                  disabled: T,
                              }),
                          }),
                ],
            }),
        ],
    });
}
