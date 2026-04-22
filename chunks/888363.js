n.d(e, { default: () => R });
var l = n(627968),
    a = n(64700),
    r = n(935462),
    i = n(534514),
    s = n(834730),
    o = n(331322),
    _ = n(292666),
    c = n(821609),
    u = n(123292),
    d = n(830215),
    E = n(631670),
    S = n(235986),
    p = n(894778),
    T = n(954571),
    m = n(53505),
    A = n(652215),
    h = n(315290),
    N = n(985018),
    I = n(541028);
function f(t) {
    let { email: e, setEmail: n, claimRequired: T, onSuccess: m, onClose: A } = t,
        [f, C] = a.useState(),
        [R, y] = a.useState(""),
        [g, U] = a.useState(""),
        [w, v] = a.useState(!1);
    a.useEffect(() => p.A.flowStep(h.do.ANY, h.hc.CLAIM_ACCOUNT), []);
    let D = async (t) => {
        t.preventDefault(), v(!0), C(""), U("");
        try {
            await (0, E.KD)({ email: e, password: R }), v(!1), m();
        } catch (t) {
            t?.body?.email && C(t.body.email), t?.body?.password && U(t.body.password), v(!1);
        }
    };
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(r.rQ, {
                className: I._5,
                direction: S.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, l.jsx)("div", { className: I.gD }),
                    (0, l.jsx)(i.D, {
                        className: I.Hc,
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t["uQShv/"]),
                    }),
                    (0, l.jsx)(s.E, {
                        className: I.bQ,
                        variant: "text-md/normal",
                        color: "text-default",
                        children: T ? N.intl.string(N.t.sW28gZ) : N.intl.string(N.t["gP/vPe"]),
                    }),
                    (0, l.jsx)(r.s_, { className: I.b, onClick: A }),
                ],
            }),
            (0, l.jsx)(r.$m, {
                children: (0, l.jsx)("form", {
                    className: I.oB,
                    onSubmit: D,
                    children: (0, l.jsxs)(o.B, {
                        gap: 16,
                        children: [
                            (0, l.jsx)(_.k, {
                                label: N.intl.string(N.t.dI4d4S),
                                value: e,
                                error: f,
                                onChange: (t) => n(t),
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(_.k, {
                                label: N.intl.string(N.t["CIGa+7"]),
                                type: "password",
                                value: R,
                                error: g,
                                onChange: (t) => y(t),
                            }),
                            (0, l.jsx)(c.$, {
                                text: N.intl.string(N.t.fiNVin),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: w,
                                disabled: 0 === e.length || 0 === R.length,
                            }),
                            T &&
                                (0, l.jsx)("div", {
                                    className: I.pV,
                                    children: (0, l.jsx)(u.Q, {
                                        text: N.intl.string(N.t["2jxGer"]),
                                        onClick: () => {
                                            d.A.logout("claim_account_modal"), A();
                                        },
                                    }),
                                }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function C(t) {
    let { email: e, claimRequired: n, onClose: i } = t,
        o = n ? N.t.D7trIB : N.t.JNWX7G;
    return (
        a.useEffect(() => p.A.flowStep(h.do.ANY, h.hc.CLAIM_ACCOUNT_SUCCESS), []),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(r.$m, {
                    className: I.Zc,
                    children: [
                        !n && (0, l.jsx)(r.s_, { className: I.b, onClick: i }),
                        (0, l.jsx)("div", { className: I.hW }),
                        (0, l.jsx)(s.E, {
                            className: I.QK,
                            variant: "text-lg/semibold",
                            children: N.intl.format(o, { email: e }),
                        }),
                        (0, l.jsx)(s.E, {
                            className: I.pQ,
                            variant: "text-md/normal",
                            children: N.intl.string(N.t.eXqM2d),
                        }),
                    ],
                }),
                n
                    ? (0, l.jsx)(r.jl, {
                          direction: S.A.Direction.VERTICAL,
                          children: (0, l.jsx)(c.$, {
                              text: N.intl.string(N.t.BddRzS),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: i,
                          }),
                      })
                    : (0, l.jsx)(r.jl, {
                          direction: S.A.Direction.VERTICAL,
                          children: (0, l.jsx)(c.$, {
                              text: N.intl.string(N.t.ygArIV),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  window.open((0, m.SU)(), "_blank"),
                                      T.default.track(A.HAw.DOWNLOAD_APP, {
                                          platform: (0, m.Vf)(),
                                          ptb: !1,
                                          released: !0,
                                          has_e_mail: !0,
                                          referring_location: "Claim Modal",
                                          qr_code: !1,
                                      });
                              },
                          }),
                      }),
            ],
        })
    );
}
function R(t) {
    let { onClose: e, transitionState: n, claimRequired: i = !1 } = t,
        [s, o] = a.useState(""),
        [_, c] = a.useState(!1);
    return _
        ? (0, l.jsx)(r.EO, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, l.jsx)(C, { email: s, claimRequired: i, onClose: e }),
          })
        : (0, l.jsx)(r.EO, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, l.jsx)(f, { email: s, setEmail: o, claimRequired: i, onSuccess: () => c(!0), onClose: e }),
          });
}
