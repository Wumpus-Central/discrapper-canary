n.d(t, { default: () => _ }), n(801541), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(889137),
    l = n(158954),
    u = n(311907),
    d = n(397927),
    g = n(631670),
    c = n(963334),
    m = n(781436),
    E = n(752319),
    h = n(287809),
    f = n(927578),
    S = n(652215),
    v = n(985018),
    O = n(197266);
function _(e) {
    var t, n;
    let { transitionState: s, onClose: _ } = e,
        y = (0, u.bG)([h.default], () => {
            let e = h.default.getCurrentUser();
            return a()(null != e, "ChangeUsernameModal: currentUser cannot be undefined"), e;
        }),
        T = i.useMemo(() => f.Ay.canEditDiscriminator(y) && !y.hasUniqueUsername(), [y]),
        [p, A] = i.useState(y.username),
        [R, L] = i.useState(y.discriminator),
        [b, P] = i.useState(""),
        [M, C] = i.useState(!1),
        U = (0, u.bG)([E.A], () => E.A.getErrors()),
        w = y.hasUniqueUsername(),
        k = (0, m.i)(p, w, !1, y.username),
        I = i.useRef(null),
        N = i.useMemo(() => {
            var e, t, n;
            return null != (e = null == U || null == (t = U.username) ? void 0 : t[0])
                ? e
                : null == U || null == (n = U.discriminator)
                  ? void 0
                  : n[0];
        }, [U]);
    i.useEffect(() => {
        if (s === d.ip4.ENTERED) {
            var e;
            null == (e = I.current) || e.focus();
        }
    }, [s]);
    let G = R !== y.discriminator;
    async function x(e) {
        e.preventDefault(), C(!0);
        let t = await (0, g.yu)({
            username: p,
            discriminator: T ? R : void 0,
            password: b,
        });
        C(!1), (null == t ? void 0 : t.ok) && _();
    }
    return (0, r.jsx)("form", {
        onSubmit: x,
        children: (0, r.jsx)(l.Modal, {
            onClose: _,
            transitionState: s,
            title: v.intl.string(v.t.m5or54),
            subtitle: v.intl.string(v.t.SLJvy0),
            actions: [
                {
                    variant: "secondary",
                    text: v.intl.string(v.t["ETE/oC"]),
                    onClick: _,
                },
                {
                    variant: "primary",
                    text: v.intl.string(v.t.i4jeWR),
                    type: "submit",
                    loading: M,
                },
            ],
            children: (0, r.jsxs)(d.BJc, {
                gap: 16,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)(d.BJc, {
                                direction: "horizontal",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(
                                        d.ksK,
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                label: v.intl.string(v.t.TWzdWj),
                                                error: N,
                                                name: "username",
                                                value: p,
                                                maxLength: S.d0r,
                                                onChange: A,
                                                inputRef: I,
                                                fullWidth: !0,
                                            },
                                            ((n = y.hasUniqueUsername()),
                                            (0, o.YW)(k)
                                                .with(
                                                    {
                                                        type: c.q.ERROR,
                                                        message: o.P.select(),
                                                    },
                                                    (e) => ({ error: e }),
                                                )
                                                .with(
                                                    {
                                                        type: c.q.AVAILABLE,
                                                        message: o.P.select(),
                                                    },
                                                    (e) => ({ successMessage: e }),
                                                )
                                                .otherwise(() => (n ? { helperText: v.intl.string(v.t.z7c4bP) } : {}))),
                                        ),
                                    ),
                                    !y.hasUniqueUsername() &&
                                        (0, r.jsx)(d.ksK, {
                                            name: "discriminator",
                                            "aria-label": v.intl.string(v.t.ozumaN),
                                            maxLength: 4,
                                            value: R,
                                            onChange: L,
                                            disabled: !T,
                                            leading: "#",
                                        }),
                                ],
                            }),
                            G
                                ? (0, r.jsx)(d.Text, {
                                      variant: "text-xs/normal",
                                      color: "text-default",
                                      className: O.Z,
                                      children: v.intl.string(v.t.mConUX),
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(d.ksK, {
                        label: v.intl.string(v.t.TmdnJ3),
                        error: null == U || null == (t = U.password) ? void 0 : t[0],
                        type: "password",
                        value: b,
                        onChange: P,
                    }),
                ],
            }),
        }),
    });
}
