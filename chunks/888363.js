n.d(e, {
    default: () => y,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    o = n(397927),
    i = n(830215),
    a = n(631670),
    c = n(235986),
    s = n(894778),
    u = n(954571),
    d = n(53505),
    p = n(652215),
    f = n(315290),
    m = n(985018),
    g = n(978147);

function _(t) {
    let { email: e, setEmail: n, claimRequired: u, onSuccess: d, onClose: p } = t,
        [_, b] = l.useState(),
        [y, S] = l.useState(""),
        [w, O] = l.useState(""),
        [j, N] = l.useState(!1);
    l.useEffect(() => s.A.flowStep(f.do.ANY, f.hc.CLAIM_ACCOUNT), []);
    let v = async (t) => {
        t.preventDefault(), N(!0), b(""), O("");
        try {
            await (0, a.gt)({
                email: e,
                password: y,
            }),
                N(!1),
                d();
        } catch (t) {
            var n, r;
            (null == t || null == (n = t.body) ? void 0 : n.email) && b(t.body.email),
                (null == t || null == (r = t.body) ? void 0 : r.password) && O(t.body.password),
                N(!1);
        }
    };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(o.rQ0, {
                className: g._5,
                direction: c.A.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)("div", {
                        className: g.gD,
                    }),
                    (0, r.jsx)(o.Heading, {
                        className: g.Hc,
                        variant: "heading-xl/semibold",
                        children: m.intl.string(m.t["uQShv/"]),
                    }),
                    (0, r.jsx)(o.Text, {
                        className: g.bQ,
                        variant: "text-md/normal",
                        color: "text-default",
                        children: u ? m.intl.string(m.t.sW28gZ) : m.intl.string(m.t["gP/vPe"]),
                    }),
                    (0, r.jsx)(o.s_y, {
                        className: g.b,
                        onClick: p,
                    }),
                ],
            }),
            (0, r.jsx)(o.$mQ, {
                children: (0, r.jsx)("form", {
                    className: g.oB,
                    onSubmit: v,
                    children: (0, r.jsxs)(o.BJc, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(o.ksK, {
                                label: m.intl.string(m.t.dI4d4S),
                                value: e,
                                error: _,
                                onChange: (t) => n(t),
                                autoFocus: !0,
                            }),
                            (0, r.jsx)(o.ksK, {
                                label: m.intl.string(m.t["CIGa+7"]),
                                type: "password",
                                value: y,
                                error: w,
                                onChange: (t) => S(t),
                            }),
                            (0, r.jsx)(o.Button, {
                                text: m.intl.string(m.t.fiNVin),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: j,
                                disabled: 0 === e.length || 0 === y.length,
                            }),
                            u &&
                                (0, r.jsx)("div", {
                                    className: g.pV,
                                    children: (0, r.jsx)(o.QWc, {
                                        text: m.intl.string(m.t["2jxGer"]),
                                        onClick: () => {
                                            i.A.logout("claim_account_modal"), p();
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

function b(t) {
    let { email: e, claimRequired: n, onClose: i } = t,
        a = n ? m.t.D7trIB : m.t.JNWX7G;
    return (
        l.useEffect(() => s.A.flowStep(f.do.ANY, f.hc.CLAIM_ACCOUNT_SUCCESS), []),
        (0, r.jsxs)("div", {
            children: [
                (0, r.jsxs)(o.$mQ, {
                    className: g.Zc,
                    children: [
                        !n &&
                            (0, r.jsx)(o.s_y, {
                                className: g.b,
                                onClick: i,
                            }),
                        (0, r.jsx)("div", {
                            className: g.hW,
                        }),
                        (0, r.jsx)(o.Text, {
                            className: g.QK,
                            variant: "text-lg/semibold",
                            children: m.intl.format(a, {
                                email: e,
                            }),
                        }),
                        (0, r.jsx)(o.Text, {
                            className: g.pQ,
                            variant: "text-md/normal",
                            children: m.intl.string(m.t.eXqM2d),
                        }),
                    ],
                }),
                n
                    ? (0, r.jsx)(o.jlY, {
                          direction: c.A.Direction.VERTICAL,
                          children: (0, r.jsx)(o.Button, {
                              text: m.intl.string(m.t.BddRzS),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: i,
                          }),
                      })
                    : (0, r.jsx)(o.jlY, {
                          direction: c.A.Direction.VERTICAL,
                          children: (0, r.jsx)(o.Button, {
                              text: m.intl.string(m.t.ygArIV),
                              variant: "primary",
                              fullWidth: !0,
                              onClick: function () {
                                  window.open((0, d.SU)(), "_blank"),
                                      u.default.track(p.HAw.DOWNLOAD_APP, {
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

function y(t) {
    let { onClose: e, transitionState: n, claimRequired: i = !1 } = t,
        [a, c] = l.useState(""),
        [s, u] = l.useState(!1);
    return s
        ? (0, r.jsx)(o.EOs, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(b, {
                  email: a,
                  claimRequired: i,
                  onClose: e,
              }),
          })
        : (0, r.jsx)(o.EOs, {
              transitionState: n,
              parentComponent: "ClaimAccountModal",
              children: (0, r.jsx)(_, {
                  email: a,
                  setEmail: c,
                  claimRequired: i,
                  onSuccess: () => u(!0),
                  onClose: e,
              }),
          });
}
