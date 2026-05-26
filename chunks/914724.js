n.d(t, { default: () => A });
var l = n(627968),
    a = n(64700),
    s = n(562708),
    i = n(189213),
    r = n(834730),
    o = n(452027),
    d = n(331322),
    u = n(13008),
    h = n(503698),
    c = n.n(h),
    p = n(96337),
    b = n(783878),
    g = n(292666),
    C = n(423764),
    m = n(375708),
    f = n(444619);
let y = function (e) {
    let { className: t, submitting: n, errorMessage: s, onChange: i } = e,
        r = a.useRef(null),
        { countriesMap: d, countryCodeOptions: u } = a.useMemo(() => {
            let e = new Map(
                    p.A.flatMap((e) => {
                        let { alpha2: t, phoneCountryCodes: n } = e,
                            l = (0, C.Gw)(t);
                        return n.map((e) => [`${t}-${e}`, { code: e, alpha2: t, name: l }]);
                    }),
                ),
                t = Array.from(e.entries()).map((e) => {
                    let [t, { name: n, alpha2: l }] = e;
                    return { value: t, label: n, alpha2: l };
                });
            return { countriesMap: e, countryCodeOptions: t };
        }, []),
        [h, y] = a.useState(() => {
            let e = p.A.find((e) => "United States" === e.name);
            return `${e.alpha2}-${e.phoneCountryCode}`;
        }),
        [x, v] = a.useState(() => {
            let [e, t] = p.A.find((e) => "United States" === e.name).phoneCountryCode.split(" ");
            return t ?? "";
        }),
        A = a.useCallback(
            (e, t) => {
                let n = d.get(e)?.code;
                i?.(`${n}${t}`);
            },
            [d, i],
        ),
        S = a.useCallback(
            (e) => {
                y(e), r.current?.focus(), A(e, x);
            },
            [x, A],
        ),
        k = a.useCallback(
            (e) => {
                v(e), A(h, e);
            },
            [h, A],
        ),
        j = d.get(h);
    return (0, l.jsx)("fieldset", {
        children: (0, l.jsxs)("div", {
            className: c()(f.B, t),
            children: [
                (0, l.jsx)(o.D, {
                    label: m.intl.string(m.t["k+bvrB"]),
                    children: (0, l.jsx)(b.Z, {
                        selectionMode: "single",
                        value: h ?? void 0,
                        onSelectionChange: S,
                        options: u,
                        formatOption: (e) => {
                            let { value: t, label: n, alpha2: l } = e;
                            return {
                                id: t,
                                value: t,
                                label: n,
                                leading: String.fromCodePoint(
                                    ...(l ?? "")
                                        .toUpperCase()
                                        .split("")
                                        .map((e) => 127397 + e.charCodeAt(0)),
                                ),
                            };
                        },
                        disabled: n,
                    }),
                }),
                (0, l.jsx)(g.k, {
                    label: m.intl.string(m.t["64bX0M"]),
                    error: s,
                    leading: j?.code,
                    type: "tel",
                    onChange: k,
                    autoFocus: !0,
                    inputRef: r,
                    disabled: n,
                    value: x,
                }),
            ],
        }),
    });
};
var x = n(20147);
class v extends a.PureComponent {
    constructor(e) {
        super(e), (this.state = { phone: "" });
    }
    handlePhoneChange = (e) => {
        this.setState({ phone: e });
    };
    render() {
        let e,
            t,
            n,
            a,
            { error: h, working: c, transitionState: p, validPhone: b, layerContext: g } = this.props,
            { phone: C } = this.state,
            f = [];
        return (
            b
                ? (e = m.intl.string(m.t["4qMI6A"]))
                : ((e = m.intl.string(m.t.Vp9je2)),
                  (t = (0, l.jsx)(r.E, { variant: "text-sm/normal", children: m.intl.format(m.t["3BTmqX"], {}) }))),
            b
                ? ((n = (0, l.jsx)(o.D, {
                      label: m.intl.string(m.t.Xclkxp),
                      hideLabel: !0,
                      errorMessage: h ?? void 0,
                      children: (0, l.jsx)(u.A, { onSubmit: this.handleVerifyPhone }),
                  })),
                  (f = [
                      {
                          variant: "secondary",
                          text: m.intl.string(m.t["5b60gi"]),
                          onClick: this.handleResendCode,
                          loading: c,
                      },
                  ]))
                : ((n = (0, l.jsx)(y, {
                      label: m.intl.string(m.t["64bX0M"]),
                      errorMessage: h ?? void 0,
                      className: x.ZZ,
                      onChange: this.handlePhoneChange,
                      submitting: c,
                      layerContext: g,
                  })),
                  (f = [
                      { text: m.intl.string(m.t.TXNS7S), disabled: "" === C, loading: c, onClick: this.handleAddPhone },
                  ])),
            (a = b ? m.intl.string(m.t.hDKkuo) : m.intl.string(m.t.hY8QTR)),
            (0, l.jsx)(i.Modal, {
                size: b ? "sm" : "md",
                title: a,
                subtitle: e,
                actions: f,
                onClose: this.props.onClose,
                trackingProps: { impression: { impressionName: s.ImpressionNames.USER_VERIFY_PHONE } },
                transitionState: p,
                children: (0, l.jsxs)(d.B, { gap: 8, children: [n, t] }),
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
let A = v;
