n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(652215),
    c = n(992415);

function o(e, t, n) {
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
class d extends i.Component {
    componentDidUpdate(e, t) {
        if (t.focused !== this.state.focused && this.state.focused) {
            var n;
            null == (n = this.inputRef.current) || n.focus();
        }
        null !== this.props.value &&
            this.props.value !== e.value &&
            this.props.value !== this.state.value &&
            u(this.props.value, this.props, this.state) &&
            this.setState({
                value: this.props.value,
            });
    }
    render() {
        let e,
            { className: t, name: n, autoComplete: i, maxLen: l, disabled: a } = this.props,
            o = {
                position: "absolute",
                left: 0,
                width: "100%",
                opacity: 1,
            };
        return (
            this.state.focused
                ? (e = {
                      visibility: "hidden",
                      pointerEvents: "none",
                  })
                : (o.opacity = 0),
            (0, r.jsx)("div", {
                className: s()(c.A7, t),
                children: (0, r.jsxs)("div", {
                    className: c.kL,
                    children: [
                        (0, r.jsx)("input", {
                            type: "text",
                            className: c.hF,
                            ref: this.inputRef,
                            style: o,
                            value: this.state.value,
                            name: n,
                            maxLength: l,
                            autoComplete: i,
                            onKeyPress: this.handleKeyPress,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onMouseEnter: this.handleMouseEnter,
                            disabled: a,
                        }),
                        (0, r.jsx)("div", {
                            className: c.hF,
                            style: e,
                            children: this.state.value,
                        }),
                    ],
                }),
            })
        );
    }
    constructor(...e) {
        super(...e),
            o(this, "inputRef", i.createRef()),
            o(this, "state", {
                focused: !1,
                lastGoodValue: this.props.value,
                value: this.props.value,
            }),
            o(this, "handleChange", (e) => {
                let { onChange: t } = this.props;
                this.setState({
                    value: e.currentTarget.value,
                }),
                    null == t || t(e);
            }),
            o(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props;
                this.setState({
                    focused: !0,
                    lastGoodValue: e.currentTarget.value,
                }),
                    null == t || t(e);
            }),
            o(this, "handleBlur", (e) => {
                if (u("", this.props, this.state)) {
                    this.setState({
                        focused: !1,
                    });
                    let { onBlur: t } = this.props;
                    null == t || t(e);
                } else
                    this.setState({
                        focused: !1,
                        value: this.state.lastGoodValue,
                    });
            }),
            o(this, "handleMouseEnter", (e) => {
                let { onMouseEnter: t } = this.props;
                null == t || t(e);
            }),
            o(this, "handleKeyPress", (e) => {
                if (e.which === a.Ks6.ENTER) {
                    var t;
                    null == (t = this.inputRef.current) || t.blur();
                }
            });
    }
}

function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        r = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
    return (null == t.minLen || !(r.length < t.minLen)) && (null == t.maxLen || !(r.length > t.maxLen));
}
