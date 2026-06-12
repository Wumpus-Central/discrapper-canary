i.d(t, { A: () => x });
var n = i(627968),
    s = i(64700),
    l = i(189213),
    r = i(17928),
    a = i(683071),
    o = i(292666),
    u = i(691885),
    d = i(228366),
    c = i(271866),
    g = i(956518),
    m = i(235986),
    A = i(147964),
    h = i(375708),
    E = i(815762),
    S = i(818050);
let T = /^\d+$|^$/;
function x(e) {
    let { onClose: t, transitionState: i } = e,
        {
            authorizedApplicationId: x,
            authorizationError: p,
            authorizing: f,
        } = (0, r.cf)([A.A], () => ({
            authorizedApplicationId: A.A.testModeApplicationId,
            authorizationError: A.A.error,
            authorizing: A.A.isFetchingAuthorization,
        })),
        [N, _] = s.useState(x ?? ""),
        [I, C] = s.useState("8080"),
        [b, y] = s.useState("localhost"),
        v = T.test(N);
    async function j() {
        c.SH();
        let e = (function (e, t, i) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return `https://localhost:${t}`;
                case "proxy":
                    return (0, g.Ay)(i);
            }
        })(b, I, N);
        null != (await c.q1(N, e)) && t();
    }
    s.useEffect(() => () => d.h.wait(() => c.SH()), []);
    let O = null != x && x === N,
        R = O
            ? function () {
                  c.cL(), _(""), y(null);
              }
            : j,
        D = s.useMemo(
            () => [
                {
                    loading: f,
                    disabled: !v || 0 === N.length || ("localhost" === b && 0 === I.length),
                    variant: O ? "critical-primary" : "active",
                    text: O ? h.intl.string(h.t.d6TR3I) : h.intl.string(h.t.qwuK5I),
                    onClick: R,
                },
            ],
            [N.length, f, O, v, I.length, R, b],
        );
    return (0, n.jsxs)(l.Modal, {
        title: h.intl.string(h.t.f8fzky),
        subtitle: h.intl.string(h.t.a6Vill),
        actions: D,
        onClose: t,
        transitionState: i,
        children: [
            null == p
                ? null
                : (0, n.jsx)("div", { className: S.SX, children: (0, n.jsx)(a.w, { type: "critical", children: p }) }),
            (0, n.jsxs)(m.A, {
                direction: m.A.Direction.VERTICAL,
                align: m.A.Align.START,
                children: [
                    (0, n.jsx)("div", {
                        className: E.I,
                        children: (0, n.jsx)(o.k, {
                            label: h.intl.string(h.t.P6TzgI),
                            required: !0,
                            value: N,
                            maxLength: 19,
                            error: v ? null : h.intl.string(h.t.gPNgKO),
                            onChange: function (e) {
                                _(e);
                            },
                            disabled: f,
                        }),
                    }),
                    (0, n.jsx)("div", {
                        className: E.I,
                        children: (0, n.jsx)(u.l, {
                            selectionMode: "single",
                            label: h.intl.string(h.t["/GTqXG"]),
                            disabled: !v || "" === N,
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
                        : (0, n.jsx)("div", {
                              className: E.I,
                              children: (0, n.jsx)(o.k, {
                                  required: !0,
                                  label: h.intl.string(h.t.fF4zxq),
                                  value: I,
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
