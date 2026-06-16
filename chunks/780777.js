i.d(t, { A: () => r });
var a = i(627968),
    n = i(64700);
class s extends n.Component {
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
        let { disabled: e, tabIndex: t, className: i, name: n, "aria-label": s, "aria-hidden": l, id: r } = this.props,
            o = "";
        return (
            this.props.filters &&
                (o = this.props.filters.map((e) => e.extensions.map((e) => `.${e}`).join(",")).join(",")),
            (0, a.jsx)("input", {
                id: r,
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
                className: i || "file-input",
                disabled: e,
                type: "file",
                tabIndex: t,
                onMouseDown: this.handleBrowserInputMouseDown,
                onChange: this.props.onChange,
                onClick: this.props.onClick,
                multiple: this.props.multiple,
                accept: o,
                name: n,
                "aria-label": s,
                "aria-hidden": l || void 0,
                ref: (e) => {
                    this._input = e;
                },
                title: this.props.title,
            })
        );
    }
}
class l extends n.Component {
    _ref = n.createRef();
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
        return (0, a.jsx)(s, { ref: this.setRef, ...this.props });
    }
}
let r = l;
