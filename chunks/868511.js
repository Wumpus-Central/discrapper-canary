n.d(t, { A: () => T });
var i = n(477900),
    l = n(582128),
    s = n(17928),
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
let S = /^\d+$|^$/;
function T(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: T,
            authorizationError: p,
            authorizing: f,
        } = (0, s.cf)([m.A], () => ({
            authorizedApplicationId: m.A.testModeApplicationId,
            authorizationError: m.A.error,
            authorizing: m.A.isFetchingAuthorization,
        })),
        [x, _] = l.useState(T ?? ""),
        [I, N] = l.useState("8080"),
        [b, C] = l.useState("localhost"),
        y = S.test(x);
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
        })(b, I, x);
        null != (await d.q1(x, e)) && t();
    }
    l.useEffect(() => d.SH, []);
    let j = null != T && T === x,
        O = j
            ? function () {
                  (d.cL(), _(""), C(null));
              }
            : v,
        L = l.useMemo(
            () => [
                {
                    loading: f,
                    disabled: !y || 0 === x.length || ("localhost" === b && 0 === I.length),
                    variant: j ? "critical-primary" : "active",
                    text: j ? A.intl.string(A.t.d6TR3I) : A.intl.string(A.t.qwuK5I),
                    onClick: O,
                },
            ],
            [x.length, f, j, y, I.length, O, b],
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
                            value: x,
                            maxLength: 19,
                            error: y ? null : A.intl.string(A.t.gPNgKO),
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
                            label: A.intl.string(A.t["/GTqXG"]),
                            disabled: !y || "" === x,
                            value: b,
                            options: [
                                { value: "localhost", label: A.intl.string(A.t["+Y9Y6r"]), id: "localhost" },
                                { value: "proxy", label: A.intl.string(A.t.uaksyW), id: "proxy" },
                            ],
                            onSelectionChange: function (e) {
                                C(e);
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
                                  label: A.intl.string(A.t.fF4zxq),
                                  value: I,
                                  maxLength: 5,
                                  onChange: (e) => N(e),
                                  disabled: f,
                              }),
                          }),
                ],
            }),
        ],
    });
}
