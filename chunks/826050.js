"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(615300),
    o = n(451988),
    c = n(397927),
    d = n(203982),
    u = n(652215),
    h = n(985018),
    A = n(792728);
let p = { friction: 15, tension: 100 };
class g extends s.PureComponent {
    state = { shown: !1, translateY: new a.A.Value(0) };
    static contextType = c.CZY;
    rootRef = s.createRef();
    focusTimeout = new o.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), d._.subscribe(u.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), d._.unsubscribe(u.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentDidUpdate() {
        let { hasQuery: e } = this.props;
        e || this.springTo(0);
    }
    handleResultFocus = (e) => {
        let { node: t } = e;
        this.focusTimeout.start(1, () => {
            if (this.props.hasQuery && null != t && null != this.rootRef.current) {
                let { top: e } = this.rootRef.current.getBoundingClientRect(),
                    { top: n } = t.getBoundingClientRect(),
                    i = Math.abs(e - n);
                this.springTo(i - 118 + 9);
            } else this.springTo(0);
        });
    };
    springTo(e) {
        let { reducedMotion: t } = this.context;
        !0 !== t.enabled && a.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ...p }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: r()(A.XN, e),
            children: [
                (0, i.jsx)(a.A.div, {
                    className: r()(A.Hf, A.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: A.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: r()(A.Hf, A.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: A.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: r()(A.Hf, A.QJ),
                    children: (0, i.jsx)("img", { alt: "", src: n(298607), className: A.D6 }),
                }),
            ],
        });
    }
    renderContent() {
        return (0, i.jsxs)("div", {
            className: A.fi,
            children: [
                (0, i.jsx)("div", { className: A.Iv, children: h.intl.string(h.t.Mp0IGK) }),
                (0, i.jsx)("div", { className: A.kp, children: h.intl.string(h.t["3CbpwH"]) }),
            ],
        });
    }
    render() {
        let { hasQuery: e } = this.props,
            { shown: t } = this.state;
        return (0, i.jsxs)("div", {
            ref: this.rootRef,
            className: r()(A.d$, { [A.SP]: t, [A.tG]: e }),
            children: [this.renderContent(), this.renderArrowGroup(A.__invalid_left), this.renderArrowGroup(A.pG)],
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
                              outputRange: ["0px", "250px"],
                          }),
                      },
                      { translateZ: 0 },
                  ],
              };
    }
}
let m = g;
