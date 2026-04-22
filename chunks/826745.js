"use strict";
let i;
n.d(t, { y: () => m });
var l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
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
            l = this.props.value ?? e.value;
        if (null != t && -1 === l.indexOf("\n") && l.length * t < 0.8 * e.offsetWidth)
            return void this.setState({ height: void 0 });
        null == i && null != document.body && ((i = document.createElement("textarea")), document.body.appendChild(i));
        let { paddingSize: s, borderSize: r, boxSizing: a, sizingStyle: o } = this.calculateNodeStyling(e);
        i.setAttribute("style", o + ";" + d),
            (i.value = l),
            null != n ? i.setAttribute("rows", `${n}`) : i.removeAttribute("rows");
        let c = i.scrollHeight;
        "border-box" === a ? (c += r) : "content-box" === a && (c -= s), this.setState({ height: c });
    }
    calculateNodeStyling(e) {
        let t = window.getComputedStyle(e),
            n = (0, o.G)(
                t.getPropertyValue("box-sizing"),
                t.getPropertyValue("-moz-box-sizing"),
                t.getPropertyValue("-webkit-box-sizing"),
            ),
            i = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
            l =
                parseFloat(t.getPropertyValue("border-bottom-width")) +
                parseFloat(t.getPropertyValue("border-top-width"));
        return {
            sizingStyle: h.map((e) => `${e}:${t.getPropertyValue(e)}`).join(";"),
            paddingSize: i,
            borderSize: l,
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
        let { style: e, className: t, onResize: n, ...i } = this.props;
        delete i.fontWidthEstimate;
        let s = { ...this.state, ...e };
        return (0, l.jsx)(c.vN, {
            children: (0, l.jsx)("textarea", {
                ...i,
                className: a()(t, u.kw),
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
