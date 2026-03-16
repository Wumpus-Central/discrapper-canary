n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(158954),
    r = n(311907),
    a = n(397927),
    o = n(73153),
    d = n(271866),
    c = n(956518),
    u = n(235986),
    _ = n(147964),
    m = n(985018),
    g = n(361151),
    A = n(473169);
let h = /^\d+$|^$/;
function x(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: x,
            authorizationError: p,
            authorizing: T,
        } = (0, r.cf)([_.A], () => ({
            authorizedApplicationId: _.A.testModeApplicationId,
            authorizationError: _.A.error,
            authorizing: _.A.isFetchingAuthorization,
        })),
        [E, C] = s.useState(x ?? ""),
        [S, f] = s.useState("8080"),
        [N, b] = s.useState("localhost"),
        I = h.test(E);
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
        })(N, S, E);
        null != (await d.q1(E, e)) && t();
    }
    s.useEffect(() => () => o.h.wait(() => d.SH()), []);
    let j = null != x && x === E,
        O = j
            ? function () {
                  d.cL(), C(""), b(null);
              }
            : v,
        y = s.useMemo(
            () => [
                {
                    loading: T,
                    disabled: !I || 0 === E.length || ("localhost" === N && 0 === S.length),
                    variant: j ? "critical-primary" : "active",
                    text: j ? m.intl.string(m.t.d6TR3I) : m.intl.string(m.t.qwuK5I),
                    onClick: O,
                },
            ],
            [E.length, T, j, I, S.length, O, N],
        );
    return (0, i.jsxs)(l.Modal, {
        title: m.intl.string(m.t.f8fzky),
        subtitle: m.intl.string(m.t.a6Vill),
        actions: y,
        onClose: t,
        transitionState: n,
        children: [
            null == p
                ? null
                : (0, i.jsx)("div", {
                      className: A.SX,
                      children: (0, i.jsx)(a.wx6, { type: "critical", children: p }),
                  }),
            (0, i.jsxs)(u.A, {
                direction: u.A.Direction.VERTICAL,
                align: u.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: g.I,
                        children: (0, i.jsx)(a.ksK, {
                            label: m.intl.string(m.t.P6TzgI),
                            required: !0,
                            value: E,
                            maxLength: 19,
                            error: I ? null : m.intl.string(m.t.gPNgKO),
                            onChange: function (e) {
                                C(e);
                            },
                            disabled: T,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: g.I,
                        children: (0, i.jsx)(a.l6P, {
                            selectionMode: "single",
                            label: m.intl.string(m.t["/GTqXG"]),
                            disabled: !I || "" === E,
                            value: N,
                            options: [
                                { value: "localhost", label: m.intl.string(m.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: m.intl.string(m.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                b(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== N
                        ? null
                        : (0, i.jsx)("div", {
                              className: g.I,
                              children: (0, i.jsx)(a.ksK, {
                                  required: !0,
                                  label: m.intl.string(m.t.fF4zxq),
                                  value: S,
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
