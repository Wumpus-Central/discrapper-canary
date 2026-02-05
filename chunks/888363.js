n.d(e, { default: () => S });
var l = n(627968),
    r = n(64700),
    s = n(397927),
    a = n(830215),
    i = n(631670),
    o = n(235986),
    c = n(894778),
    u = n(954571),
    d = n(53505),
    _ = n(652215),
    m = n(315290),
    p = n(985018),
    g = n(978147);
function f(t) {
    let { email: e, setEmail: n, claimRequired: u, onSuccess: d, onClose: _ } = t,
        [f, N] = r.useState(),
        [S, A] = r.useState(""),
        [C, w] = r.useState(""),
        [T, h] = r.useState(!1);
    r.useEffect(() => c.A.flowStep(m.do.ANY, m.hc.CLAIM_ACCOUNT), []);
    let x = async (t) => {
        t.preventDefault(), h(!0), N(""), w("");
        try {
            await (0, i.gt)({ email: e, password: S }), h(!1), d();
        } catch (t) {
            t?.body?.email && N(t.body.email), t?.body?.password && w(t.body.password), h(!1);
        }
    };
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(s.rQ0, {
                className: g._5,
                direction: o.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, l.jsx)("div", { className: g.gD }),
                    (0, l.jsx)(s.Heading, {
                        className: g.Hc,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["uQShv/"]),
                    }),
                    (0, l.jsx)(s.Text, {
                        className: g.bQ,
                        variant: "text-md/normal",
                        color: "text-default",
                        children: u ? p.intl.string(p.t.sW28gZ) : p.intl.string(p.t["gP/vPe"]),
                    }),
                    (0, l.jsx)(s.s_y, { className: g.b, onClick: _ }),
                ],
            }),
            (0, l.jsx)(s.$mQ, {
                children: (0, l.jsx)("form", {
                    className: g.oB,
                    onSubmit: x,
                    children: (0, l.jsxs)(s.BJc, {
                        gap: 16,
                        children: [
                            (0, l.jsx)(s.ksK, {
                                label: p.intl.string(p.t.dI4d4S),
                                value: e,
                                error: f,
                                onChange: (t) => n(t),
                                autoFocus: !0,
                            }),
                            (0, l.jsx)(s.ksK, {
                                label: p.intl.string(p.t["CIGa+7"]),
                                type: "password",
                                value: S,
                                error: C,
                                onChange: (t) => A(t),
                            }),
                            (0, l.jsx)(s.Button, {
                                text: p.intl.string(p.t.fiNVin),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: T,
                                disabled: 0 === e.length || 0 === S.length,
                            }),
                            u &&
                                (0, l.jsx)("div", {
                                    className: g.pV,
                                    children: (0, l.jsx)(s.QWc, {
                                        text: p.intl.string(p.t["2jxGer"]),
                                        onClick: () => {
                                            a.A.logout("claim_account_modal"), _();
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
function N(t) {
    let { email: e, claimRequired: n, onClose: a } = t,
        i = n ? p.t.D7trIB : p.t.JNWX7G;
    return (
        r.useEffect(() => c.A.flowStep(m.do.ANY, m.hc.CLAIM_ACCOUNT_SUCCESS), []),
        (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)(s.$mQ, {
                    className: g.Zc,
                    children: [
                        !n && (0, l.jsx)(s.s_y, { className: g.b, onClick: a }),
                        (0, l.jsx)("div", { className: g.hW }),
                        (0, l.jsx)(s.Text, {
                            className: g.QK,
                            variant: "text-lg/semibold",
                            children: p.intl.format(i, { email: e }),
                        }),
                        (0, l.jsx)(s.Text, {
                            className: g.pQ,
                            variant: "text-md/normal",
                            children: p.intl.string(p.t.eXqM2d),
                        }),
                    ],
                }),
                n
                    ? (0, l.jsx)(s.jlY, {
                          direction: o.A.Direction.VERTICAL,
                          children: (0, l.jsx)(s.Button, {
                              text: p.intl.string(p.t.BddRzS),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: a,
                          }),
                      })
                    : (0, l.jsx)(s.jlY, {
                          direction: o.A.Direction.VERTICAL,
                          children: (0, l.jsx)(s.Button, {
                              text: p.intl.string(p.t.ygArIV),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  window.open((0, d.SU)(), "_blank"),
                                      u.default.track(_.HAw.DOWNLOAD_APP, {
                                          platform: (0, d.Vf)(),
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
function S(t) {
    let { onClose: e, transitionState: n, claimRequired: a = !1 } = t,
        [i, o] = r.useState(""),
        [c, u] = r.useState(!1);
    return c
        ? (0, l.jsx)(s.EOs, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, l.jsx)(N, { email: i, claimRequired: a, onClose: e }),
          })
        : (0, l.jsx)(s.EOs, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, l.jsx)(f, { email: i, setEmail: o, claimRequired: a, onSuccess: () => u(!0), onClose: e }),
          });
}
