"use strict";
let l;
n.d(t, { y: () => m });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(745262),
    c = n(187322),
    u = n(429128);
let d = `
  visibility:hidden;
  overflow:hidden;
  position:absolute;
  z-index:-1000;
  top:0;
  right:0;
`,
    h = [
        "letter-spacing",
        "line-height",
        "padding-top",
        "padding-bottom",
        "font-family",
        "font-weight",
        "font-size",
        "text-transform",
        "width",
        "padding-left",
        "padding-right",
        "border-width",
        "box-sizing",
    ];
class m extends s.PureComponent {
    static defaultProps = { autoFocus: !1, disabled: !1, autoCorrect: "off" };
    _textArea;
    constructor(e) {
        super(e), (this.state = { height: void 0 });
    }
    componentDidMount() {
        this.props.onResize?.(void 0), Promise.resolve().then(() => this.calculateSize());
    }
    componentDidUpdate(e, t) {
        if (this.state.height !== t.height) {
            let { onResize: e } = this.props;
            e?.(this.state.height);
        }
        e.value !== this.props.value && Promise.resolve().then(() => this.calculateSize());
    }
    calculateSize() {
        let e = this._textArea;
        if (null == e) return;
        let { fontWidthEstimate: t, rows: n } = this.props,
            i = this.props.value ?? e.value;
        if (null != t && -1 === i.indexOf("\n") && i.length * t < 0.8 * e.offsetWidth)
            return void this.setState({ height: void 0 });
        null == l && null != document.body && ((l = document.createElement("textarea")), document.body.appendChild(l));
        let { paddingSize: s, borderSize: a, boxSizing: r, sizingStyle: o } = this.calculateNodeStyling(e);
        l.setAttribute("style", o + ";" + d),
            (l.value = i),
            null != n ? l.setAttribute("rows", `${n}`) : l.removeAttribute("rows");
        let c = l.scrollHeight;
        "border-box" === r ? (c += a) : "content-box" === r && (c -= s), this.setState({ height: c });
    }
    calculateNodeStyling(e) {
        let t = window.getComputedStyle(e),
            n = (0, o.G)(
                t.getPropertyValue("box-sizing"),
                t.getPropertyValue("-moz-box-sizing"),
                t.getPropertyValue("-webkit-box-sizing"),
            ),
            l = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
            i =
                parseFloat(t.getPropertyValue("border-bottom-width")) +
                parseFloat(t.getPropertyValue("border-top-width"));
        return {
            sizingStyle: h.map((e) => `${e}:${t.getPropertyValue(e)}`).join(";"),
            paddingSize: l,
            borderSize: i,
            boxSizing: n,
        };
    }
    clear() {
        null != this._textArea && (this._textArea.value = ""), this.calculateSize();
    }
    blur() {
        let { _textArea: e } = this;
        null != e && e.blur();
    }
    focus() {
        let { _textArea: e } = this;
        null != e && e.focus();
    }
    setSelection(e, t) {
        null != this._textArea && ((this._textArea.selectionStart = e), (this._textArea.selectionEnd = t));
    }
    get selectionStart() {
        return this._textArea?.selectionStart ?? 0;
    }
    get selectionEnd() {
        return this._textArea?.selectionEnd ?? 0;
    }
    get value() {
        return this._textArea?.value ?? "";
    }
    render() {
        let { style: e, className: t, onResize: n, ...l } = this.props;
        delete l.fontWidthEstimate;
        let s = { ...this.state, ...e };
        return (0, i.jsx)(c.vN, {
            children: (0, i.jsx)("textarea", {
                ...l,
                className: r()(t, u.kw),
                ref: this.handleSetRef,
                style: s,
                onChange: this.handleChange,
            }),
        });
    }
    handleSetRef = (e) => {
        this._textArea = e;
    };
    handleChange = (e) => {
        let { onChange: t } = this.props;
        t?.(e), this.calculateSize();
    };
}
