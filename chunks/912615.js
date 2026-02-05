n.d(t, { A: () => h });
var i = n(627968),
    s = n(64700),
    r = n(158954),
    a = n(311907),
    l = n(397927),
    o = n(73153),
    c = n(271866),
    d = n(956518),
    u = n(235986),
    _ = n(147964),
    m = n(985018),
    A = n(361151),
    g = n(473169);
let E = /^\d+$|^$/;
function h(e) {
    let { onClose: t, transitionState: n } = e,
        {
            authorizedApplicationId: h,
            authorizationError: p,
            authorizing: C,
        } = (0, a.cf)([_.A], () => ({
            authorizedApplicationId: _.A.testModeApplicationId,
            authorizationError: _.A.error,
            authorizing: _.A.isFetchingAuthorization,
        })),
        [x, T] = s.useState(h ?? ""),
        [I, S] = s.useState("8080"),
        [f, N] = s.useState("localhost"),
        b = E.test(x);
    async function R() {
        c.SH();
        let e = (function (e, t, n) {
            if (null == e) return null;
            switch (e) {
                case "localhost":
                    return `https://localhost:${t}`;
                case "proxy":
                    return (0, d.Ay)(n);
            }
        })(f, I, x);
        null != (await c.q1(x, e)) && t();
    }
    s.useEffect(() => () => o.h.wait(() => c.SH()), []);
    let v = null != h && h === x,
        O = v
            ? function () {
                  c.cL(), T(""), N(null);
              }
            : R,
        j = s.useMemo(
            () => [
                {
                    loading: C,
                    disabled: !b || 0 === x.length || ("localhost" === f && 0 === I.length),
                    variant: v ? "critical-primary" : "active",
                    text: v ? m.intl.string(m.t.d6TR3I) : m.intl.string(m.t.qwuK5I),
                    onClick: O,
                },
            ],
            [x.length, C, v, b, I.length, O, f],
        );
    return (0, i.jsxs)(r.Modal, {
        title: m.intl.string(m.t.f8fzky),
        subtitle: m.intl.string(m.t.a6Vill),
        actions: j,
        onClose: t,
        transitionState: n,
        children: [
            null == p
                ? null
                : (0, i.jsx)("div", {
                      className: g.SX,
                      children: (0, i.jsx)(l.wx6, { type: "critical", children: p }),
                  }),
            (0, i.jsxs)(u.A, {
                direction: u.A.Direction.VERTICAL,
                align: u.A.Align.START,
                children: [
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(l.ksK, {
                            label: m.intl.string(m.t.P6TzgI),
                            required: !0,
                            value: x,
                            maxLength: 19,
                            error: b ? null : m.intl.string(m.t.gPNgKO),
                            onChange: function (e) {
                                T(e);
                            },
                            disabled: C,
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: A.I,
                        children: (0, i.jsx)(l.l6P, {
                            selectionMode: "single",
                            label: m.intl.string(m.t["/GTqXG"]),
                            disabled: !b || "" === x,
                            value: f,
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
                    "localhost" !== f
                        ? null
                        : (0, i.jsx)("div", {
                              className: A.I,
                              children: (0, i.jsx)(l.ksK, {
                                  required: !0,
                                  label: m.intl.string(m.t.fF4zxq),
                                  value: I,
                                  maxLength: 5,
                                  onChange: (e) => S(e),
                                  disabled: C,
                              }),
                          }),
                ],
            }),
        ],
    });
}
