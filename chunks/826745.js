let r;
n.d(t, { y: () => y });
var i,
    a = n(627968),
    s = n(64700),
    o = n(503698),
    l = n.n(o),
    c = n(745262),
    u = n(158954),
    d = n(829681);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = "\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0;\n",
    b = [
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
class y extends (i = s.PureComponent) {
    componentDidMount() {
        var e, t;
        null == (e = (t = this.props).onResize) || e.call(t, void 0),
            Promise.resolve().then(() => this.calculateSize());
    }
    componentDidUpdate(e, t) {
        if (this.state.height !== t.height) {
            let { onResize: e } = this.props;
            null == e || e(this.state.height);
        }
        e.value !== this.props.value && Promise.resolve().then(() => this.calculateSize());
    }
    calculateSize() {
        var e;
        let t = this._textArea;
        if (null == t) return;
        let { fontWidthEstimate: n, rows: i } = this.props,
            a = null != (e = this.props.value) ? e : t.value;
        if (null != n && -1 === a.indexOf("\n") && a.length * n < 0.8 * t.offsetWidth)
            return void this.setState({ height: void 0 });
        null == r && null != document.body && ((r = document.createElement("textarea")), document.body.appendChild(r));
        let { paddingSize: s, borderSize: o, boxSizing: l, sizingStyle: c } = this.calculateNodeStyling(t);
        r.setAttribute("style", c + ";" + E),
            (r.value = a),
            null != i ? r.setAttribute("rows", "".concat(i)) : r.removeAttribute("rows");
        let u = r.scrollHeight;
        "border-box" === l ? (u += o) : "content-box" === l && (u -= s), this.setState({ height: u });
    }
    calculateNodeStyling(e) {
        let t = window.getComputedStyle(e),
            n = (0, c.G)(
                t.getPropertyValue("box-sizing"),
                t.getPropertyValue("-moz-box-sizing"),
                t.getPropertyValue("-webkit-box-sizing"),
            ),
            r = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top")),
            i =
                parseFloat(t.getPropertyValue("border-bottom-width")) +
                parseFloat(t.getPropertyValue("border-top-width"));
        return {
            sizingStyle: b.map((e) => "".concat(e, ":").concat(t.getPropertyValue(e))).join(";"),
            paddingSize: r,
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
        var e, t;
        return null != (e = null == (t = this._textArea) ? void 0 : t.selectionStart) ? e : 0;
    }
    get selectionEnd() {
        var e, t;
        return null != (e = null == (t = this._textArea) ? void 0 : t.selectionEnd) ? e : 0;
    }
    get value() {
        var e, t;
        return null != (e = null == (t = this._textArea) ? void 0 : t.value) ? e : "";
    }
    render() {
        let e = this.props,
            { style: t, className: n, onResize: r } = e,
            i = m(e, ["style", "className", "onResize"]);
        delete i.fontWidthEstimate;
        let s = p({}, this.state, t);
        return (0, a.jsx)(u.vN3, {
            children: (0, a.jsx)(
                "textarea",
                h(p({}, i), {
                    className: l()(n, d.kw),
                    ref: this.handleSetRef,
                    style: s,
                    onChange: this.handleChange,
                }),
            ),
        });
    }
    constructor(e) {
        super(e),
            f(this, "_textArea", void 0),
            f(this, "handleSetRef", (e) => {
                this._textArea = e;
            }),
            f(this, "handleChange", (e) => {
                let { onChange: t } = this.props;
                null == t || t(e), this.calculateSize();
            }),
            (this.state = { height: void 0 });
    }
}
f(y, "defaultProps", {
    autoFocus: !1,
    disabled: !1,
    autoCorrect: "off",
});
