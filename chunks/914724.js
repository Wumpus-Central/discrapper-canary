s.d(t, { default: () => A });
var n = s(627968),
    l = s(64700),
    a = s(110259),
    o = s(189213),
    i = s(834730),
    r = s(452027),
    d = s(331322),
    h = s(13008),
    u = s(503698),
    c = s.n(u),
    p = s(96337),
    f = s(783878),
    C = s(292666),
    g = s(518977),
    m = s(985018),
    y = s(348043);
let b = function (e) {
    let { className: t, submitting: s, errorMessage: a, onChange: o } = e,
        i = l.useRef(null),
        { countriesMap: d, countryCodeOptions: h } = l.useMemo(() => {
            let e = new Map(
                    p.A.flatMap((e) => {
                        let { alpha2: t, phoneCountryCodes: s } = e,
                            n = (0, g.Gw)(t);
                        return s.map((e) => [`${t}-${e}`, { code: e, alpha2: t, name: n }]);
                    }),
                ),
                t = Array.from(e.entries()).map((e) => {
                    let [t, { name: s, alpha2: n }] = e;
                    return { value: t, label: s, alpha2: n };
                });
            return { countriesMap: e, countryCodeOptions: t };
        }, []),
        [u, b] = l.useState(() => {
            let e = p.A.find((e) => "United States" === e.name);
            return `${e.alpha2}-${e.phoneCountryCode}`;
        }),
        [x, k] = l.useState(() => {
            let [e, t] = p.A.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return t ?? "";
        }),
        A = l.useCallback(
            (e, t) => {
                let s = d.get(e)?.code;
                o?.(`${s}${t}`);
            },
            [d, o],
        ),
        v = l.useCallback(
            (e) => {
                b(e), i.current?.focus(), A(e, x);
            },
            [x, A],
        ),
        R = l.useCallback(
            (e) => {
                k(e), A(u, e);
            },
            [u, A],
        ),
        S = d.get(u);
    return (0, n.jsx)("fieldset", {
        children: (0, n.jsxs)("div", {
            className: c()(y.B, t),
            children: [
                (0, n.jsx)(r.D, {
                    label: m.intl.string(m.t["k+bvrB"]),
                    children: (0, n.jsx)(f.Z, {
                        selectionMode: "single",
                        value: u ?? void 0,
                        onSelectionChange: v,
                        options: h,
                        formatOption: (e) => {
                            let { value: t, label: s, alpha2: n } = e;
                            return {
                                id: t,
                                value: t,
                                label: s,
                                leading: String.fromCodePoint(
                                    ...(n ?? "")
                                        .toUpperCase()
                                        .split("")
                                        .map((e) => 127397 + e.charCodeAt(0)),
                                ),
                            };
                        },
                        disabled: s,
                    }),
                }),
                (0, n.jsx)(C.k, {
                    label: m.intl.string(m.t["64bX0M"]),
                    error: a,
                    leading: S?.code,
                    type: "tel",
                    onChange: R,
                    autoFocus: !0,
                    inputRef: i,
                    disabled: s,
                    value: x,
                }),
            ],
        }),
    });
};
var x = s(762995);
class k extends l.PureComponent {
    constructor(e) {
        super(e), (this.state = { phone: "" });
    }
    handlePhoneChange = (e) => {
        this.setState({ phone: e });
    };
    render() {
        let e,
            t,
            s,
            l,
            { error: u, working: c, transitionState: p, validPhone: f, layerContext: C } = this.props,
            { phone: g } = this.state,
            y = [];
        return (
            f
                ? (e = m.intl.string(m.t["4qMI6A"]))
                : ((e = m.intl.string(m.t.Vp9je2)),
                  (t = (0, n.jsx)(i.E, { variant: "text-sm/normal", children: m.intl.format(m.t["3BTmqX"], {}) }))),
            f
                ? ((s = (0, n.jsx)(r.D, {
                      label: m.intl.string(m.t.Xclkxp),
                      hideLabel: !0,
                      errorMessage: u ?? void 0,
                      children: (0, n.jsx)(h.A, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (y = [
                      {
                          variant: "secondary",
                          text: m.intl.string(m.t["5b60gi"]),
                          onClick: this.handleResendCode,
                          loading: c,
                      },
                  ]))
                : ((s = (0, n.jsx)(b, {
                      label: m.intl.string(m.t["64bX0M"]),
                      errorMessage: u ?? void 0,
                      className: x.ZZ,
                      onChange: this.handlePhoneChange,
                      submitting: c,
                      layerContext: C,
                  })),
                  (y = [
                      { text: m.intl.string(m.t.TXNS7S), disabled: "" === g, loading: c, onClick: this.handleAddPhone },
                  ])),
            (l = f ? m.intl.string(m.t.xDBSN9) : m.intl.string(m.t.hY8QTR)),
            (0, n.jsx)(o.Modal, {
                size: f ? "sm" : "md",
                title: l,
                subtitle: e,
                actions: y,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: a.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: p,
                children: (0, n.jsxs)(d.B, { gap: 8, children: [s, t] }),
            })
        );
    }
    handleAddPhone = () => {
        let { phone: e } = this.state,
            { onAddPhone: t } = this.props;
        t?.(e);
    };
    handleVerifyPhone = (e) => {
        let { onVerifyPhone: t } = this.props;
        t?.(e);
    };
    handleResendCode = () => {
        let { onAddPhone: e } = this.props;
        e?.(this.state.phone);
    };
}
let A = k;
