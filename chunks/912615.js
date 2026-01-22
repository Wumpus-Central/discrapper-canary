n.d(t, {
    A: () => E,
}),
    n(896048),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(73153),
    c = n(271866),
    u = n(956518),
    d = n(235986),
    f = n(147964),
    p = n(985018),
    _ = n(361151),
    h = n(473169);
let m = /^\d+$|^$/;

function g(e, t, n) {
    if (null == e) return null;
    switch (e) {
        case "localhost":
            return "https://localhost:".concat(t);
        case "proxy":
            return (0, u.Ay)(n);
    }
}

function E(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: u,
            authorizationError: E,
            authorizing: b,
        } = (0, s.cf)([f.A], () => ({
            authorizedApplicationId: f.A.testModeApplicationId,
            authorizationError: f.A.error,
            authorizing: f.A.isFetchingAuthorization,
        })),
        [y, O] = i.useState(null != u ? u : ""),
        [A, v] = i.useState("8080"),
        [S, I] = i.useState("localhost"),
        T = m.test(y);
    async function C() {
        c.SH();
        let e = g(S, A, y);
        null != (await c.q1(y, e)) && t();
    }

    function N() {
        c.cL(), O(""), I(null);
    }

    function R(e) {
        O(e);
    }

    function w(e) {
        I(e);
    }

    function P() {
        return null == E
            ? null
            : (0, r.jsx)("div", {
                  className: h.SX,
                  children: (0, r.jsx)(o.wx6, {
                      type: "critical",
                      children: E,
                  }),
              });
    }

    function D() {
        return "localhost" !== S
            ? null
            : (0, r.jsx)("div", {
                  className: _.I,
                  children: (0, r.jsx)(o.ksK, {
                      required: !0,
                      label: p.intl.string(p.t.fF4zxq),
                      value: A,
                      maxLength: 5,
                      onChange: (e) => v(e),
                      disabled: b,
                  }),
              });
    }
    i.useEffect(() => () => l.h.wait(() => c.SH()), []);
    let x = null != u && u === y,
        L = x ? N : C,
        j = i.useMemo(
            () => [
                {
                    loading: b,
                    disabled: !T || 0 === y.length || ("localhost" === S && 0 === A.length),
                    variant: x ? "critical-primary" : "active",
                    text: x ? p.intl.string(p.t.d6TR3I) : p.intl.string(p.t.qwuK5I),
                    onClick: L,
                },
            ],
            [y.length, b, x, T, A.length, L, S],
        );
    return (0, r.jsxs)(a.Modal, {
        title: p.intl.string(p.t.f8fzky),
        subtitle: p.intl.string(p.t.a6Vill),
        actions: j,
        onClose: t,
        transitionState: n,
        children: [
            P(),
            (0, r.jsxs)(d.A, {
                direction: d.A.Direction.VERTICAL,
                align: d.A.Align.START,
                children: [
                    (0, r.jsx)("div", {
                        className: _.I,
                        children: (0, r.jsx)(o.ksK, {
                            label: p.intl.string(p.t.P6TzgI),
                            required: !0,
                            value: y,
                            maxLength: 19,
                            error: T ? null : p.intl.string(p.t.gPNgKO),
                            onChange: R,
                            disabled: b,
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: _.I,
                        children: (0, r.jsx)(o.l6P, {
                            selectionMode: "single",
                            label: p.intl.string(p.t["/GTqXG"]),
                            disabled: !T || "" === y,
                            value: S,
                            options: [
                                {
                                    value: "localhost",
                                    label: p.intl.string(p.t["+Y9Y6r"]),
                                    id: "localhost",
                                },
                                {
                                    value: "proxy",
                                    label: p.intl.string(p.t.uaksyW),
                                    id: "proxy",
                                },
                            ],
                            onSelectionChange: w,
                            placeholder: "URL Origin Type",
                        }),
                    }),
                    D(),
                ],
            }),
        ],
    });
}
