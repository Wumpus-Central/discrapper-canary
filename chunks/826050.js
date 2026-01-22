n.d(t, { A: () => A }), n(896048);
var r,
    l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(615300),
    c = n(451988),
    u = n(397927),
    d = n(203982),
    f = n(652215),
    p = n(985018),
    h = n(792728);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let g = {
    friction: 15,
    tension: 100,
};
class m extends (r = i.PureComponent) {
    componentDidMount() {
        this.setState({ shown: !0 }), d._.subscribe(f.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d._.unsubscribe(f.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        e || this.springTo(0);
    }
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled &&
            o.A.spring(
                this.state.translateY,
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
                                b(e, t, n[t]);
                            });
                    }
                    return e;
                })({ toValue: Math.min(e, 250) }, g),
            ).start();
    }
    renderArrowGroup(e) {
        return (0, l.jsxs)("div", {
            className: s()(h.XN, e),
            children: [
                (0, l.jsx)(o.A.div, {
                    className: s()(h.Hf, h.xM),
                    style: this.getStyle(),
                    children: (0, l.jsx)("img", {
                        alt: "",
                        src: n(824829),
                        className: h.D6,
                    }),
                }),
                (0, l.jsx)("div", {
                    className: s()(h.Hf, h.JM),
                    children: (0, l.jsx)("img", {
                        alt: "",
                        src: n(162206),
                        className: h.D6,
                    }),
                }),
                (0, l.jsx)("div", {
                    className: s()(h.Hf, h.QJ),
                    children: (0, l.jsx)("img", {
                        alt: "",
                        src: n(298607),
                        className: h.D6,
                    }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, l.jsxs)("div", {
            className: h.fi,
            children: [
                (0, l.jsx)("div", {
                    className: h.Iv,
                    children: p.intl.string(p.t.Mp0IGK),
                }),
                (0, l.jsx)("div", {
                    className: h.kp,
                    children: p.intl.string(p.t["3CbpwH"]),
                }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, l.jsxs)("div", {
            ref: this.rootRef,
            className: s()(h.d$, {
                [h.SP]: t,
                [h.tG]: e,
            }),
            children: [this.renderContent(), this.renderArrowGroup(h.__invalid_left), this.renderArrowGroup(h.pG)],
        });
    }
    getStyle() {
        let { reducedMotion: e } = this.context;
        return !0 === e.enabled
            ? {}
            : {
                  opacity: 1,
                  transform: [
                      {
                          translateY: this.state.translateY.interpolate({
                              inputRange: [0, 250],
                              outputRange: ["0px", "".concat(250, "px")],
                          }),
                      },
                      { translateZ: 0 },
                  ],
              };
    }
    constructor(...e) {
        super(...e),
            b(this, "state", {
                shown: !1,
                translateY: new o.A.Value(0),
            }),
            b(this, "rootRef", i.createRef()),
            b(this, "focusTimeout", new c.Ep()),
            b(this, "handleResultFocus", (e) => {
                let { node: t } = e;
                this.focusTimeout.start(1, () => {
                    if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                        let { top: e } = this.rootRef.current.getBoundingClientRect(),
                            { top: n } = t.getBoundingClientRect(),
                            r = Math.abs(e - n);
                        this.springTo(r - 118 + 9);
                    } else this.springTo(0);
                });
            });
    }
}
b(m, "contextType", u.CZY);
let A = m;
