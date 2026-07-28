"use strict";
n.d(t, { A: () => l });
var i = n(477900),
    r = n(582128);
class a extends r.Component {
    _input = null;
    static defaultProps = { multiple: !1, disabled: !1, tabIndex: 0 };
    activateUploadDialogue = () => {
        this._input && this._input.click();
    };
    handleNativeClick = () => {
        this.props.handleNativeClick && this.props.handleNativeClick(this.props);
    };
    handleNativeKeyDown = (e) => {
        (" " === e.key || "Enter" === e.key) && this.handleNativeClick();
    };
    handleBrowserInputMouseDown = (e) => {
        e.currentTarget.value = null;
    };
    render() {
        let { disabled: e, tabIndex: t, className: n, name: r, "aria-label": a, "aria-hidden": s, id: l } = this.props,
            o = "";
        return (
            this.props.filters &&
                (o = this.props.filters.map((e) => e.extensions.map((e) => `.${e}`).join(",")).join(",")),
            (0, i.jsx)("input", {
                id: l,
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0,
                    cursor: e ? "not-allowed" : "pointer",
                    fontSize: 0,
                },
                className: n || "file-input",
                disabled: e,
                type: "file",
                tabIndex: t,
                onMouseDown: this.handleBrowserInputMouseDown,
                onChange: this.props.onChange,
                onClick: this.props.onClick,
                multiple: this.props.multiple,
                accept: o,
                name: r,
                "aria-label": a,
                "aria-hidden": s || void 0,
                ref: (e) => {
                    this._input = e;
                },
                title: this.props.title,
            })
        );
    }
}
class s extends r.Component {
    _ref = r.createRef();
    constructor(e) {
        super(e), (this.setRef = this.setRef.bind(this));
    }
    activateUploadDialogue() {
        if (null != this._ref) return this._ref.activateUploadDialogue();
    }
    setRef(e) {
        this._ref = e;
    }
    render() {
        return (0, i.jsx)(a, { ref: this.setRef, ...this.props });
    }
}
let l = s;
