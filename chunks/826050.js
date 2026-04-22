n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(451988),
    d = n(844222),
    c = n(203982),
    u = n(652215),
    h = n(985018),
    A = n(246729);
let _ = { friction: 15, tension: 100 };
class m extends l.PureComponent {
    state = { shown: !1, translateY: new r.A.Value(0) };
    static contextType = d.C;
    rootRef = l.createRef();
    focusTimeout = new o.Ep();
    componentDidMount() {
        this.setState({ shown: !0 }), c._.subscribe(u.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
    }
    componentWillUnmount() {
        this.focusTimeout.stop(), c._.unsubscribe(u.jej.QUICKSWITCHER_RESULT_FOCUS, this.handleResultFocus);
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
        !0 !== t.enabled && r.A.spring(this.state.translateY, { toValue: Math.min(e, 250), ..._ }).start();
    }
    renderArrowGroup(e) {
        return (0, i.jsxs)("div", {
            className: a()(A.XN, e),
            children: [
                (0, i.jsx)(r.A.div, {
                    className: a()(A.Hf, A.xM),
                    style: this.getStyle(),
                    children: (0, i.jsx)("img", { alt: "", src: n(824829), className: A.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: a()(A.Hf, A.JM),
                    children: (0, i.jsx)("img", { alt: "", src: n(162206), className: A.D6 }),
                }),
                (0, i.jsx)("div", {
                    className: a()(A.Hf, A.QJ),
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
            className: a()(A.d$, { [A.SP]: t, [A.tG]: e }),
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
let g = m;
