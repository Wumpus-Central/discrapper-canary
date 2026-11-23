n.d(t, { A: () => Z });
var s = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    l = n(573725),
    o = n(452027),
    c = n(915089),
    d = n(628387),
    u = n(156150),
    h = n(717421),
    p = n(265872),
    m = n(939249),
    N = n(557722),
    E = n(91871),
    f = n.n(E),
    g = n(435558),
    A = n.n(g),
    y = n(96337),
    I = n(404778),
    w = n(683438),
    x = n(305866),
    C = n(317097),
    S = n(559106),
    b = n(933832),
    v = n(646514),
    _ = n(235986),
    j = n(650583),
    T = n(858918),
    k = n(221851);
let P = A().memoize((e) => {
    let t = !1;
    if (null != e && (0, C.qt)(e)) {
        let n = (0, C.LX)(e);
        null != n && (t = 0.2 > (0, C.OK)(n));
    }
    return t ? v.A.unsafe_rawColors.BLACK.css : v.A.unsafe_rawColors.WHITE.css;
});
class L extends r.PureComponent {
    state = { color: P(this.props.color) };
    render() {
        let e,
            { selected: t, color: n, className: r, children: a } = this.props,
            l = P(n);
        return (
            t
                ? (e = { color: l, background: n ?? v.A.unsafe_rawColors.BRAND_500.css })
                : null != n && (e = { color: n }),
            (0, s.jsx)(S.vN, {
                offset: { left: 4 },
                children: (0, s.jsxs)(_.A, {
                    className: i()(T.OR, r, { [T.wH]: t }),
                    onClick: this.handleClick,
                    onKeyUp: this.handleKeyUp,
                    align: _.A.Align.CENTER,
                    style: { ...e, ...this.props.style },
                    role: "button",
                    tabIndex: 0,
                    children: [
                        (0, s.jsx)(_.A, { align: _.A.Align.CENTER, className: T.Ix, shrink: 1, children: a }),
                        t &&
                            (0, s.jsx)(_.A, {
                                wrap: _.A.Wrap.WRAP,
                                className: k.Gf,
                                grow: 0,
                                shrink: 0,
                                children: (0, s.jsx)(b.CheckmarkLargeIcon, { size: "md", color: l }),
                            }),
                    ],
                }),
            })
        );
    }
    handleKeyUp = (e) => {
        if (e.key === j.dh.ENTER || e.key === j.dh.SPACE) {
            let { onClick: e, ...t } = this.props;
            e(t);
        }
    };
    handleClick = () => {
        let { onClick: e, ...t } = this.props;
        e(t);
    };
}
var R = n(968788);
function O() {
    return (0, s.jsx)(I.c, { className: R.yF });
}
function G(e) {
    let { children: t } = e;
    return (0, s.jsx)("div", { className: R.Fm, children: t });
}
class D extends r.PureComponent {
    static defaultProps = { autoFocus: !0 };
    render() {
        return (0, s.jsx)(w.I, { ...this.props, size: "sm" });
    }
}
class F extends r.PureComponent {
    static SearchBar = D;
    static Item = L;
    static Divider = O;
    static Empty = G;
    render() {
        let { className: e, children: t } = this.props;
        return (0, s.jsx)(x.l, { className: i()(R.qE, e), "aria-label": this.props["aria-label"], children: t });
    }
}
var M = n(95362),
    K = n(956956),
    W = n(792996),
    B = n(352412),
    U = n(969426);
class $ extends r.PureComponent {
    constructor(e) {
        (super(e), (this.state = { query: "" }));
    }
    renderItems() {
        let { query: e } = this.state,
            t = y.A.flatMap((e, t) => {
                let { alpha2: n, phoneCountryCodes: r, name: a } = e,
                    i = (0, K.Gw)(n);
                return r.map((e) => ({
                    key: `${t}-${e}`,
                    name: a,
                    translatedName: i,
                    countryData: { name: a, alpha2: n, code: e },
                    children: (0, s.jsxs)(_.A, {
                        className: B.kw,
                        justify: _.A.Justify.CENTER,
                        align: _.A.Align.CENTER,
                        children: [
                            (0, s.jsx)(_.A.Child, { className: B.GL, children: i }),
                            (0, s.jsx)(_.A.Child, { className: B.kf, grow: 0, shrink: 0, children: e }),
                        ],
                    }),
                }));
            }),
            n = A()(t)
                .filter(
                    (t) =>
                        0 === e.length ||
                        f()(e.toLowerCase(), t.name.toLowerCase()) ||
                        f()(e.toLowerCase(), t.translatedName.toLowerCase()),
                )
                .map((e) =>
                    (0, r.createElement)(F.Item, { ...e, key: e.key, onClick: () => this.onClick(e.countryData) }),
                )
                .value();
        return 0 === n.length
            ? (0, s.jsx)(F.Empty, { children: W.intl.string(W.t.PoWNfe) })
            : (0, s.jsx)(M.Ar, { className: B.Dm, children: n });
    }
    render() {
        let { className: e } = this.props;
        return (0, s.jsxs)(F, {
            className: i()(B.eQ, U.Cw, e),
            children: [
                (0, s.jsx)(F.SearchBar, {
                    query: this.state.query,
                    placeholder: W.intl.string(W.t.hGOODh),
                    onChange: this.onChangeQuery,
                    onClear: this.onClearQuery,
                    autoComplete: "off",
                }),
                (0, s.jsx)(F.Divider, {}),
                this.renderItems(),
            ],
        });
    }
    onChangeQuery = (e) => {
        this.setState({ query: e });
    };
    onClearQuery = () => {
        this.setState({ query: "" });
    };
    onClick = (e) => {
        this.props.onClick?.(e);
    };
}
var H = n(931952);
function z(e) {
    let { show: t, alpha2: n, countryCode: a } = e,
        l = r.useRef(null),
        o = r.useRef(null),
        [c, d] = r.useState(0),
        [E, f] = r.useState(!1);
    r.useEffect(() => {
        function e() {
            d(t ? (o.current?.getBoundingClientRect().width ?? 0) : 0);
        }
        return (e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e));
    }, [t, n, a]);
    let g = (0, h.z)({
        width: `${c}px`,
        onStart: () => {
            f(!0);
        },
        onRest: () => {
            f(!1);
        },
    });
    return (0, s.jsx)(p.Y, {
        targetElementRef: l,
        position: "top",
        renderPopout: (e) =>
            (0, s.jsx)($, {
                className: H.SW,
                onClick: (t) => {
                    (N.A.setCountryCode(t), e.closePopout());
                },
            }),
        children: (e) =>
            (0, s.jsx)("div", {
                className: i()(H.nw, { [H.R]: !(t || E) }),
                ref: l,
                children: (0, s.jsx)(u.animated.div, {
                    className: H.kL,
                    style: g,
                    children: (0, s.jsxs)("div", {
                        className: H.WH,
                        ref: o,
                        children: [
                            (0, s.jsxs)(m.D, { ...e, className: H.kf, children: [n, " ", a] }),
                            (0, s.jsx)("div", { className: H.me }),
                        ],
                    }),
                }),
            }),
    });
}
var V = n(315073),
    q = n(151167);
function Z(e) {
    let {
            alpha2: t,
            countryCode: n,
            forceMode: a,
            label: u,
            error: h,
            className: p,
            required: m,
            value: N,
            setRef: E,
            placeholder: f,
            autoFocus: g,
            maxLength: A,
            spellCheck: y,
            autoComplete: I,
            autoCapitalize: w,
            autoCorrect: x,
            onChange: C,
            inputClassName: S,
        } = e,
        b = (0, c.GV)(),
        [v, _] = r.useState(!1),
        j = (0, d.Vl)(a, N);
    return (0, s.jsx)("div", {
        className: p ?? void 0,
        children: (0, s.jsx)(o.D, {
            label: u,
            errorMessage: h,
            required: m,
            id: b,
            children: (0, s.jsxs)("div", {
                className: i()(q.hF, V.hF, S, { [q.z3]: null != h, [q.in]: v }),
                children: [
                    (0, s.jsx)(z, { show: j, alpha2: t, countryCode: n }),
                    (0, s.jsx)(l.p, {
                        id: b,
                        name: "email",
                        type: a === d.Pd.EMAIL ? "email" : "text",
                        value: N,
                        inputRef: E,
                        placeholder: f,
                        "aria-label": u,
                        required: m,
                        onChange: function (e) {
                            let t = (0, d.Vl)(a, e) ? n : "";
                            C(e, t);
                        },
                        autoComplete: I,
                        autoCapitalize: w,
                        autoCorrect: x,
                        autoFocus: g,
                        maxLength: A,
                        spellCheck: y,
                        className: V.I6,
                        inputClassName: V.LF,
                        onFocus: () => _(!0),
                        onBlur: () => _(!1),
                    }),
                ],
            }),
        }),
    });
}
