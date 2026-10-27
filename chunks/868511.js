n.d(t, { A: () => S });
var i = n(477900),
    s = n(582128),
    l = n(17928),
    r = n(189213),
    a = n(683071),
    o = n(95477),
    u = n(691885),
    d = n(271866),
    c = n(956518),
    g = n(235986),
    m = n(147964),
    A = n(105292),
    E = n(479381),
    h = n(221851);
let x = /^\d+$|^$/;
function S(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: S,
            authorizationError: p,
            authorizing: T,
        } = (0, l.cf)([m.A], () => ({
            authorizedApplicationId: m.A.testModeApplicationId,
            authorizationError: m.A.error,
            authorizing: m.A.isFetchingAuthorization,
        })),
        [f, _] = s.useState(S ?? ""),
        [I, N] = s.useState("8080"),
        [C, y] = s.useState("localhost"),
        b = x.test(f);
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
        })(C, I, f);
        null != (await d.q1(f, e)) && t();
    }
    s.useEffect(() => d.SH, []);
    let j = null != S && S === f,
        O = j
            ? function () {
                  (d.cL(), _(""), y(null));
              }
            : v,
        L = s.useMemo(
            () => [
                {
                    loading: T,
                    disabled: !b || 0 === f.length || ("localhost" === C && 0 === I.length),
                    variant: j ? "critical-primary" : "active",
                    text: j ? A.intl.string(A.t.d6TR3I) : A.intl.string(A.t.qwuK5I),
                    onClick: O,
                },
            ],
            [f.length, T, j, b, I.length, O, C],
        );
    return (0, i.jsxs)(r.a, {
        title: A.intl.string(A.t.f8fzky),
        subtitle: A.intl.string(A.t.a6Vill),
        actions: L,
        onClose: t,
        transitionState: n,
        children: [
            null == p
                ? null
                : (0, i.jsx)("div", {
                      className: h.SX,
                      children: (0, i.jsx)(a.w, { type: "critical", message: p, role: "alert" }),
                  }),
            (0, i.jsxs)(g.A, {
                direction: g.A.Direction.VERTICAL,
                align: g.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: E.I,
                        children: (0, i.jsx)(o.k, {
                            label: A.intl.string(A.t.P6TzgI),
                            required: !0,
                            value: f,
                            maxLength: 19,
                            error: b ? null : A.intl.string(A.t.gPNgKO),
                            onChange: function (e) {
                                _(e);
                            },
                            disabled: T,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: E.I,
                        children: (0, i.jsx)(u.l, {
                            selectionMode: "single",
                            label: A.intl.string(A.t["/GTqXG"]),
                            disabled: !b || "" === f,
                            value: C,
                            options: [
                                { value: "localhost", label: A.intl.string(A.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: A.intl.string(A.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                y(e);
                            },
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    "localhost" !== C
                        ? null
                        : (0, i.jsx)("div", {
                              className: E.I,
                              children: (0, i.jsx)(o.k, {
                                  required: !0,
                                  label: A.intl.string(A.t.fF4zxq),
                                  value: I,
                                  maxLength: 5,
                                  onChange: (e) => N(e),
                                  disabled: T,
                              }),
                          }),
                ],
            }),
        ],
    });
}
