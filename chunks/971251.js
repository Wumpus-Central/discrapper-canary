"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(650583),
    o = n(816054);
class d extends s.Component {
    inputRef = s.createRef();
    state = { focused: !1, lastGoodValue: this.props.value, value: this.props.value };
    componentDidUpdate(e, t) {
        t.focused !== this.state.focused && this.state.focused && this.inputRef.current?.focus(),
            null !== this.props.value &&
                this.props.value !== e.value &&
                this.props.value !== this.state.value &&
                c(this.props.value, this.props, this.state) &&
                this.setState({ value: this.props.value });
    }
    handleChange = (e) => {
        let { onChange: t } = this.props;
        this.setState({ value: e.currentTarget.value }), t?.(e);
    };
    handleFocus = (e) => {
        let { onFocus: t } = this.props;
        this.setState({ focused: !0, lastGoodValue: e.currentTarget.value }), t?.(e);
    };
    handleBlur = (e) => {
        if (c("", this.props, this.state)) {
            this.setState({ focused: !1 });
            let { onBlur: t } = this.props;
            t?.(e);
        } else this.setState({ focused: !1, value: this.state.lastGoodValue });
    };
    handleMouseEnter = (e) => {
        let { onMouseEnter: t } = this.props;
        t?.(e);
    };
    handleKeyPress = (e) => {
        e.key === a.dh.ENTER && this.inputRef.current?.blur();
    };
    render() {
        let e,
            { className: t, name: n, autoComplete: s, maxLen: l, disabled: a } = this.props,
            d = { position: "absolute", left: 0, width: "100%", opacity: 1 };
        return (
            this.state.focused ? (e = { visibility: "hidden", pointerEvents: "none" }) : (d.opacity = 0),
            (0, i.jsx)("div", {
                className: r()(o.A7, t),
                children: (0, i.jsxs)("div", {
                    className: o.kL,
                    children: [
                        (0, i.jsx)("input", {
                            type: "text",
                            className: o.hF,
                            ref: this.inputRef,
                            style: d,
                            value: this.state.value,
                            name: n,
                            maxLength: l,
                            autoComplete: s,
                            onKeyPress: this.handleKeyPress,
                            onChange: this.handleChange,
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur,
                            onMouseEnter: this.handleMouseEnter,
                            disabled: a,
                        }),
                        (0, i.jsx)("div", { className: o.hF, style: e, children: this.state.value }),
                    ],
                }),
            })
        );
    }
}
function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 ? arguments[2] : void 0,
        i = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
    return (null == t.minLen || !(i.length < t.minLen)) && (null == t.maxLen || !(i.length > t.maxLen));
}
