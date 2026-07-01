r.d(t, { kl: () => t2 });
var n,
    a,
    o,
    i,
    l,
    s,
    p,
    c,
    u,
    f,
    d = r(64700),
    h = r(205662),
    b = function (e, t, r, n, a) {
        var o = a.clientWidth,
            i = a.clientHeight,
            l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            p = l - (a.getBoundingClientRect().left + window.pageXOffset),
            c = s - (a.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === r) {
            var u = void 0;
            if (((u = c < 0 ? 0 : c > i ? 1 : Math.round((100 * c) / i) / 100), t.a !== u))
                return { h: t.h, s: t.s, l: t.l, a: u, source: "rgb" };
        } else {
            var f = void 0;
            if (n !== (f = p < 0 ? 0 : p > o ? 1 : Math.round((100 * p) / o) / 100))
                return { h: t.h, s: t.s, l: t.l, a: f, source: "rgb" };
        }
        return null;
    },
    g = {},
    v = function (e, t, r, n) {
        if ("u" < typeof document && !n) return null;
        var a = n ? new n() : document.createElement("canvas");
        (a.width = 2 * r), (a.height = 2 * r);
        var o = a.getContext("2d");
        return o
            ? ((o.fillStyle = e),
              o.fillRect(0, 0, a.width, a.height),
              (o.fillStyle = t),
              o.fillRect(0, 0, r, r),
              o.translate(r, r),
              o.fillRect(0, 0, r, r),
              a.toDataURL())
            : null;
    },
    x = function (e, t, r, n) {
        var a = e + "-" + t + "-" + r + (n ? "-server" : "");
        if (g[a]) return g[a];
        var o = v(e, t, r, n);
        return (g[a] = o), o;
    },
    y =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    m = function (e) {
        var t = e.white,
            r = e.grey,
            n = e.size,
            a = e.renderers,
            o = e.borderRadius,
            i = e.boxShadow,
            l = e.children,
            s = (0, h.default)({
                default: {
                    grid: {
                        borderRadius: o,
                        boxShadow: i,
                        absolute: "0px 0px 0px 0px",
                        background: "url(" + x(t, r, n, a.canvas) + ") center left",
                    },
                },
            });
        return (0, d.isValidElement)(l)
            ? d.cloneElement(l, y({}, l.props, { style: y({}, l.props.style, s.grid) }))
            : d.createElement("div", { style: s.grid });
    };
m.defaultProps = { size: 8, white: "transparent", grey: "rgba(0,0,0,.08)", renderers: {} };
var w =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    E = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })();
function C(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
}
var k = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t() {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            for (var e, r, n, a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
            return (
                (r = n = C(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o)))),
                (n.handleChange = function (e) {
                    var t = b(e, n.props.hsl, n.props.direction, n.props.a, n.container);
                    t && "function" == typeof n.props.onChange && n.props.onChange(t, e);
                }),
                (n.handleMouseDown = function (e) {
                    n.handleChange(e),
                        window.addEventListener("mousemove", n.handleChange),
                        window.addEventListener("mouseup", n.handleMouseUp);
                }),
                (n.handleMouseUp = function () {
                    n.unbindEventListeners();
                }),
                (n.unbindEventListeners = function () {
                    window.removeEventListener("mousemove", n.handleChange),
                        window.removeEventListener("mouseup", n.handleMouseUp);
                }),
                C(n, r)
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            E(t, [
                {
                    key: "componentWillUnmount",
                    value: function () {
                        this.unbindEventListeners();
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.rgb,
                            r = (0, h.default)(
                                {
                                    default: {
                                        alpha: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius },
                                        checkboard: {
                                            absolute: "0px 0px 0px 0px",
                                            overflow: "hidden",
                                            borderRadius: this.props.radius,
                                        },
                                        gradient: {
                                            absolute: "0px 0px 0px 0px",
                                            background:
                                                "linear-gradient(to right, rgba(" +
                                                t.r +
                                                "," +
                                                t.g +
                                                "," +
                                                t.b +
                                                ", 0) 0%,\n           rgba(" +
                                                t.r +
                                                "," +
                                                t.g +
                                                "," +
                                                t.b +
                                                ", 1) 100%)",
                                            boxShadow: this.props.shadow,
                                            borderRadius: this.props.radius,
                                        },
                                        container: { position: "relative", height: "100%", margin: "0 3px" },
                                        pointer: { position: "absolute", left: 100 * t.a + "%" },
                                        slider: {
                                            width: "4px",
                                            borderRadius: "1px",
                                            height: "8px",
                                            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                            background: "#fff",
                                            marginTop: "1px",
                                            transform: "translateX(-2px)",
                                        },
                                    },
                                    vertical: {
                                        gradient: {
                                            background:
                                                "linear-gradient(to bottom, rgba(" +
                                                t.r +
                                                "," +
                                                t.g +
                                                "," +
                                                t.b +
                                                ", 0) 0%,\n           rgba(" +
                                                t.r +
                                                "," +
                                                t.g +
                                                "," +
                                                t.b +
                                                ", 1) 100%)",
                                        },
                                        pointer: { left: 0, top: 100 * t.a + "%" },
                                    },
                                    overwrite: w({}, this.props.style),
                                },
                                { vertical: "vertical" === this.props.direction, overwrite: !0 },
                            );
                        return d.createElement(
                            "div",
                            { style: r.alpha },
                            d.createElement(
                                "div",
                                { style: r.checkboard },
                                d.createElement(m, { renderers: this.props.renderers }),
                            ),
                            d.createElement("div", { style: r.gradient }),
                            d.createElement(
                                "div",
                                {
                                    style: r.container,
                                    ref: function (t) {
                                        return (e.container = t);
                                    },
                                    onMouseDown: this.handleMouseDown,
                                    onTouchMove: this.handleChange,
                                    onTouchStart: this.handleChange,
                                },
                                d.createElement(
                                    "div",
                                    { style: r.pointer },
                                    this.props.pointer
                                        ? d.createElement(this.props.pointer, this.props)
                                        : d.createElement("div", { style: r.slider }),
                                ),
                            ),
                        );
                    },
                },
            ]),
            t
        );
    })(d.PureComponent || d.Component),
    S = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    O = [38, 40],
    _ = 1,
    j = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            var r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
                (r.handleBlur = function () {
                    r.state.blurValue && r.setState({ value: r.state.blurValue, blurValue: null });
                }),
                (r.handleChange = function (e) {
                    r.setUpdatedValue(e.target.value, e);
                }),
                (r.handleKeyDown = function (e) {
                    var t,
                        n = Number(String(e.target.value).replace(/%/g, ""));
                    if (!isNaN(n) && ((t = e.keyCode), O.indexOf(t) > -1)) {
                        var a = r.getArrowOffset(),
                            o = 38 === e.keyCode ? n + a : n - a;
                        r.setUpdatedValue(o, e);
                    }
                }),
                (r.handleDrag = function (e) {
                    if (r.props.dragLabel) {
                        var t = Math.round(r.props.value + e.movementX);
                        t >= 0 &&
                            t <= r.props.dragMax &&
                            r.props.onChange &&
                            r.props.onChange(r.getValueObjectWithLabel(t), e);
                    }
                }),
                (r.handleMouseDown = function (e) {
                    r.props.dragLabel &&
                        (e.preventDefault(),
                        r.handleDrag(e),
                        window.addEventListener("mousemove", r.handleDrag),
                        window.addEventListener("mouseup", r.handleMouseUp));
                }),
                (r.handleMouseUp = function () {
                    r.unbindEventListeners();
                }),
                (r.unbindEventListeners = function () {
                    window.removeEventListener("mousemove", r.handleDrag),
                        window.removeEventListener("mouseup", r.handleMouseUp);
                }),
                (r.state = { value: String(e.value).toUpperCase(), blurValue: String(e.value).toUpperCase() }),
                (r.inputId = "rc-editable-input-" + _++),
                r
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            S(t, [
                {
                    key: "componentDidUpdate",
                    value: function (e, t) {
                        this.props.value !== this.state.value &&
                            (e.value !== this.props.value || t.value !== this.state.value) &&
                            (this.input === document.activeElement
                                ? this.setState({ blurValue: String(this.props.value).toUpperCase() })
                                : this.setState({
                                      value: String(this.props.value).toUpperCase(),
                                      blurValue: !this.state.blurValue && String(this.props.value).toUpperCase(),
                                  }));
                    },
                },
                {
                    key: "componentWillUnmount",
                    value: function () {
                        this.unbindEventListeners();
                    },
                },
                {
                    key: "getValueObjectWithLabel",
                    value: function (e) {
                        var t, r;
                        return (
                            (t = {}),
                            (r = this.props.label),
                            r in t
                                ? Object.defineProperty(t, r, {
                                      value: e,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[r] = e),
                            t
                        );
                    },
                },
                {
                    key: "getArrowOffset",
                    value: function () {
                        return this.props.arrowOffset || 1;
                    },
                },
                {
                    key: "setUpdatedValue",
                    value: function (e, t) {
                        var r = this.props.label ? this.getValueObjectWithLabel(e) : e;
                        this.props.onChange && this.props.onChange(r, t), this.setState({ value: e });
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = (0, h.default)(
                                {
                                    default: { wrap: { position: "relative" } },
                                    "user-override": {
                                        wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                                        input: this.props.style && this.props.style.input ? this.props.style.input : {},
                                        label: this.props.style && this.props.style.label ? this.props.style.label : {},
                                    },
                                    "dragLabel-true": { label: { cursor: "ew-resize" } },
                                },
                                { "user-override": !0 },
                                this.props,
                            );
                        return d.createElement(
                            "div",
                            { style: t.wrap },
                            d.createElement("input", {
                                id: this.inputId,
                                style: t.input,
                                ref: function (t) {
                                    return (e.input = t);
                                },
                                value: this.state.value,
                                onKeyDown: this.handleKeyDown,
                                onChange: this.handleChange,
                                onBlur: this.handleBlur,
                                placeholder: this.props.placeholder,
                                spellCheck: "false",
                            }),
                            this.props.label && !this.props.hideLabel
                                ? d.createElement(
                                      "label",
                                      { htmlFor: this.inputId, style: t.label, onMouseDown: this.handleMouseDown },
                                      this.props.label,
                                  )
                                : null,
                        );
                    },
                },
            ]),
            t
        );
    })(d.PureComponent || d.Component),
    R = function (e, t, r, n) {
        var a = n.clientWidth,
            o = n.clientHeight,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            s = i - (n.getBoundingClientRect().left + window.pageXOffset),
            p = l - (n.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === t) {
            var c = void 0;
            if (((c = p < 0 ? 359 : p > o ? 0 : (360 * (-((100 * p) / o) + 100)) / 100), r.h !== c))
                return { h: c, s: r.s, l: r.l, a: r.a, source: "hsl" };
        } else {
            var u = void 0;
            if (((u = s < 0 ? 0 : s > a ? 359 : (((100 * s) / a) * 360) / 100), r.h !== u))
                return { h: u, s: r.s, l: r.l, a: r.a, source: "hsl" };
        }
        return null;
    },
    B = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })();
function F(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
}
var T = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t() {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            for (var e, r, n, a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
            return (
                (r = n = F(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o)))),
                (n.handleChange = function (e) {
                    var t = R(e, n.props.direction, n.props.hsl, n.container);
                    t && "function" == typeof n.props.onChange && n.props.onChange(t, e);
                }),
                (n.handleMouseDown = function (e) {
                    n.handleChange(e),
                        window.addEventListener("mousemove", n.handleChange),
                        window.addEventListener("mouseup", n.handleMouseUp);
                }),
                (n.handleMouseUp = function () {
                    n.unbindEventListeners();
                }),
                F(n, r)
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            B(t, [
                {
                    key: "componentWillUnmount",
                    value: function () {
                        this.unbindEventListeners();
                    },
                },
                {
                    key: "unbindEventListeners",
                    value: function () {
                        window.removeEventListener("mousemove", this.handleChange),
                            window.removeEventListener("mouseup", this.handleMouseUp);
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.direction,
                            r = void 0 === t ? "horizontal" : t,
                            n = (0, h.default)(
                                {
                                    default: {
                                        hue: {
                                            absolute: "0px 0px 0px 0px",
                                            borderRadius: this.props.radius,
                                            boxShadow: this.props.shadow,
                                        },
                                        container: {
                                            padding: "0 2px",
                                            position: "relative",
                                            height: "100%",
                                            borderRadius: this.props.radius,
                                        },
                                        pointer: { position: "absolute", left: (100 * this.props.hsl.h) / 360 + "%" },
                                        slider: {
                                            marginTop: "1px",
                                            width: "4px",
                                            borderRadius: "1px",
                                            height: "8px",
                                            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                                            background: "#fff",
                                            transform: "translateX(-2px)",
                                        },
                                    },
                                    vertical: {
                                        pointer: { left: "0px", top: -((100 * this.props.hsl.h) / 360) + 100 + "%" },
                                    },
                                },
                                { vertical: "vertical" === r },
                            );
                        return d.createElement(
                            "div",
                            { style: n.hue },
                            d.createElement(
                                "div",
                                {
                                    className: "hue-" + r,
                                    style: n.container,
                                    ref: function (t) {
                                        return (e.container = t);
                                    },
                                    onMouseDown: this.handleMouseDown,
                                    onTouchMove: this.handleChange,
                                    onTouchStart: this.handleChange,
                                },
                                d.createElement(
                                    "style",
                                    null,
                                    "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          ",
                                ),
                                d.createElement(
                                    "div",
                                    { style: n.pointer },
                                    this.props.pointer
                                        ? d.createElement(this.props.pointer, this.props)
                                        : d.createElement("div", { style: n.slider }),
                                ),
                            ),
                        );
                    },
                },
            ]),
            t
        );
    })(d.PureComponent || d.Component),
    A = r(655972),
    z = r.n(A);
let P = function (e, t) {
        return e === t || (e != e && t != t);
    },
    D = function (e, t) {
        for (var r = e.length; r--; ) if (P(e[r][0], t)) return r;
        return -1;
    };
var L = Array.prototype.splice;
function H(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
(H.prototype.clear = function () {
    (this.__data__ = []), (this.size = 0);
}),
    (H.prototype.delete = function (e) {
        var t = this.__data__,
            r = D(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : L.call(t, r, 1), --this.size, !0);
    }),
    (H.prototype.get = function (e) {
        var t = this.__data__,
            r = D(t, e);
        return r < 0 ? void 0 : t[r][1];
    }),
    (H.prototype.has = function (e) {
        return D(this.__data__, e) > -1;
    }),
    (H.prototype.set = function (e, t) {
        var r = this.__data__,
            n = D(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    });
var M = "object" == typeof global && global && global.Object === Object && global,
    N = "object" == typeof self && self && self.Object === Object && self,
    G = M || N || Function("return this")(),
    U = G.Symbol,
    X = Object.prototype,
    W = X.hasOwnProperty,
    V = X.toString,
    I = U ? U.toStringTag : void 0;
let Y = function (e) {
    var t = W.call(e, I),
        r = e[I];
    try {
        e[I] = void 0;
        var n = !0;
    } catch (e) {}
    var a = V.call(e);
    return n && (t ? (e[I] = r) : delete e[I]), a;
};
var $ = Object.prototype.toString,
    K = U ? U.toStringTag : void 0;
let q = function (e) {
        return null == e
            ? void 0 === e
                ? "[object Undefined]"
                : "[object Null]"
            : K && K in Object(e)
              ? Y(e)
              : $.call(e);
    },
    Z = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
    },
    J = function (e) {
        if (!Z(e)) return !1;
        var t = q(e);
        return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
        );
    };
var Q = G["__core-js_shared__"],
    ee = (o = /[^.]+$/.exec((Q && Q.keys && Q.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + o : "",
    et = Function.prototype.toString;
let er = function (e) {
    if (null != e) {
        try {
            return et.call(e);
        } catch (e) {}
        try {
            return e + "";
        } catch (e) {}
    }
    return "";
};
var en = /^\[object .+?Constructor\]$/,
    ea = Object.prototype,
    eo = Function.prototype.toString,
    ei = ea.hasOwnProperty,
    el = RegExp(
        "^" +
            eo
                .call(ei)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    );
let es = function (e) {
        return !!Z(e) && (!ee || !(ee in e)) && (J(e) ? el : en).test(er(e));
    },
    ep = function (e, t) {
        var r = null == e ? void 0 : e[t];
        return es(r) ? r : void 0;
    };
var ec = ep(G, "Map"),
    eu = ep(Object, "create"),
    ef = Object.prototype.hasOwnProperty,
    ed = Object.prototype.hasOwnProperty;
function eh(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
(eh.prototype.clear = function () {
    (this.__data__ = eu ? eu(null) : {}), (this.size = 0);
}),
    (eh.prototype.delete = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= !!t), t;
    }),
    (eh.prototype.get = function (e) {
        var t = this.__data__;
        if (eu) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return ef.call(t, e) ? t[e] : void 0;
    }),
    (eh.prototype.has = function (e) {
        var t = this.__data__;
        return eu ? void 0 !== t[e] : ed.call(t, e);
    }),
    (eh.prototype.set = function (e, t) {
        var r = this.__data__;
        return (this.size += +!this.has(e)), (r[e] = eu && void 0 === t ? "__lodash_hash_undefined__" : t), this;
    });
let eb = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
    },
    eg = function (e, t) {
        var r = e.__data__;
        return eb(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
    };
function ev(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
function ex(e) {
    var t = (this.__data__ = new H(e));
    this.size = t.size;
}
(ev.prototype.clear = function () {
    (this.size = 0), (this.__data__ = { hash: new eh(), map: new (ec || H)(), string: new eh() });
}),
    (ev.prototype.delete = function (e) {
        var t = eg(this, e).delete(e);
        return (this.size -= !!t), t;
    }),
    (ev.prototype.get = function (e) {
        return eg(this, e).get(e);
    }),
    (ev.prototype.has = function (e) {
        return eg(this, e).has(e);
    }),
    (ev.prototype.set = function (e, t) {
        var r = eg(this, e),
            n = r.size;
        return r.set(e, t), (this.size += +(r.size != n)), this;
    }),
    (ex.prototype.clear = function () {
        (this.__data__ = new H()), (this.size = 0);
    }),
    (ex.prototype.delete = function (e) {
        var t = this.__data__,
            r = t.delete(e);
        return (this.size = t.size), r;
    }),
    (ex.prototype.get = function (e) {
        return this.__data__.get(e);
    }),
    (ex.prototype.has = function (e) {
        return this.__data__.has(e);
    }),
    (ex.prototype.set = function (e, t) {
        var r = this.__data__;
        if (r instanceof H) {
            var n = r.__data__;
            if (!ec || n.length < 199) return n.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new ev(n);
        }
        return r.set(e, t), (this.size = r.size), this;
    });
var ey = (function () {
    try {
        var e = ep(Object, "defineProperty");
        return e({}, "", {}), e;
    } catch (e) {}
})();
let em = function (e, t, r) {
        "__proto__" == t && ey ? ey(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
    },
    ew = function (e, t, r) {
        ((void 0 === r || P(e[t], r)) && (void 0 !== r || t in e)) || em(e, t, r);
    },
    eE = function (e, t, r) {
        for (var n = -1, a = Object(e), o = r(e), i = o.length; i--; ) {
            var l = o[++n];
            if (!1 === t(a[l], l, a)) break;
        }
        return e;
    };
var eC = "object" == typeof exports && exports && !exports.nodeType && exports,
    ek = eC && "object" == typeof module && module && !module.nodeType && module,
    eS = ek && ek.exports === eC ? G.Buffer : void 0,
    eO = eS ? eS.allocUnsafe : void 0;
let e_ = function (e, t) {
    if (t) return e.slice();
    var r = e.length,
        n = eO ? eO(r) : new e.constructor(r);
    return e.copy(n), n;
};
var ej = G.Uint8Array;
let eR = function (e) {
        var t = new e.constructor(e.byteLength);
        return new ej(t).set(new ej(e)), t;
    },
    eB = function (e, t) {
        var r = t ? eR(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
    },
    eF = function (e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
    };
var eT = Object.create,
    eA = (function () {
        function e() {}
        return function (t) {
            if (!Z(t)) return {};
            if (eT) return eT(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
        };
    })();
let ez = function (e, t) {
    return function (r) {
        return e(t(r));
    };
};
var eP = ez(Object.getPrototypeOf, Object),
    eD = Object.prototype;
let eL = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || eD);
    },
    eH = function (e) {
        return null != e && "object" == typeof e;
    },
    eM = function (e) {
        return eH(e) && "[object Arguments]" == q(e);
    };
var eN = Object.prototype,
    eG = eN.hasOwnProperty,
    eU = eN.propertyIsEnumerable,
    eX = eM(
        (function () {
            return arguments;
        })(),
    )
        ? eM
        : function (e) {
              return eH(e) && eG.call(e, "callee") && !eU.call(e, "callee");
          },
    eW = Array.isArray;
let eV = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff;
    },
    eI = function (e) {
        return null != e && eV(e.length) && !J(e);
    };
var eY = "object" == typeof exports && exports && !exports.nodeType && exports,
    e$ = eY && "object" == typeof module && module && !module.nodeType && module,
    eK = e$ && e$.exports === eY ? G.Buffer : void 0;
let eq =
    (eK ? eK.isBuffer : void 0) ||
    function () {
        return !1;
    };
var eZ = Object.prototype,
    eJ = Function.prototype.toString,
    eQ = eZ.hasOwnProperty,
    e0 = eJ.call(Object);
let e1 = function (e) {
    if (!eH(e) || "[object Object]" != q(e)) return !1;
    var t = eP(e);
    if (null === t) return !0;
    var r = eQ.call(t, "constructor") && t.constructor;
    return "function" == typeof r && r instanceof r && eJ.call(r) == e0;
};
var e2 = {};
(e2["[object Float32Array]"] =
    e2["[object Float64Array]"] =
    e2["[object Int8Array]"] =
    e2["[object Int16Array]"] =
    e2["[object Int32Array]"] =
    e2["[object Uint8Array]"] =
    e2["[object Uint8ClampedArray]"] =
    e2["[object Uint16Array]"] =
    e2["[object Uint32Array]"] =
        !0),
    (e2["[object Arguments]"] =
        e2["[object Array]"] =
        e2["[object ArrayBuffer]"] =
        e2["[object Boolean]"] =
        e2["[object DataView]"] =
        e2["[object Date]"] =
        e2["[object Error]"] =
        e2["[object Function]"] =
        e2["[object Map]"] =
        e2["[object Number]"] =
        e2["[object Object]"] =
        e2["[object RegExp]"] =
        e2["[object Set]"] =
        e2["[object String]"] =
        e2["[object WeakMap]"] =
            !1);
var e5 = "object" == typeof exports && exports && !exports.nodeType && exports,
    e4 = e5 && "object" == typeof module && module && !module.nodeType && module,
    e3 = e4 && e4.exports === e5 && M.process,
    e8 = (function () {
        try {
            var e = e4 && e4.require && e4.require("util").types;
            if (e) return e;
            return e3 && e3.binding && e3.binding("util");
        } catch (e) {}
    })(),
    e6 = e8 && e8.isTypedArray,
    e9 = e6
        ? function (e) {
              return e6(e);
          }
        : function (e) {
              return eH(e) && eV(e.length) && !!e2[q(e)];
          };
let e7 = function (e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
};
var te = Object.prototype.hasOwnProperty;
let tt = function (e, t, r) {
        var n = e[t];
        (te.call(e, t) && P(n, r) && (void 0 !== r || t in e)) || em(e, t, r);
    },
    tr = function (e, t, r, n) {
        var a = !r;
        r || (r = {});
        for (var o = -1, i = t.length; ++o < i; ) {
            var l = t[o],
                s = n ? n(r[l], e[l], l, r, e) : void 0;
            void 0 === s && (s = e[l]), a ? em(r, l, s) : tt(r, l, s);
        }
        return r;
    },
    tn = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
    };
var ta = /^(?:0|[1-9]\d*)$/;
let to = function (e, t) {
    var r = typeof e;
    return (
        !!(t = null == t ? 0x1fffffffffffff : t) &&
        ("number" == r || ("symbol" != r && ta.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
};
var ti = Object.prototype.hasOwnProperty;
let tl = function (e, t) {
        var r = eW(e),
            n = !r && eX(e),
            a = !r && !n && eq(e),
            o = !r && !n && !a && e9(e),
            i = r || n || a || o,
            l = i ? tn(e.length, String) : [],
            s = l.length;
        for (var p in e)
            (t || ti.call(e, p)) &&
                !(
                    i &&
                    ("length" == p ||
                        (a && ("offset" == p || "parent" == p)) ||
                        (o && ("buffer" == p || "byteLength" == p || "byteOffset" == p)) ||
                        to(p, s))
                ) &&
                l.push(p);
        return l;
    },
    ts = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
    };
var tp = Object.prototype.hasOwnProperty;
let tc = function (e) {
        if (!Z(e)) return ts(e);
        var t = eL(e),
            r = [];
        for (var n in e) ("constructor" == n && (t || !tp.call(e, n))) || r.push(n);
        return r;
    },
    tu = function (e) {
        return eI(e) ? tl(e, !0) : tc(e);
    },
    tf = function (e, t, r, n, a, o, i) {
        var l = e7(e, r),
            s = e7(t, r),
            p = i.get(s);
        if (p) return void ew(e, r, p);
        var c = o ? o(l, s, r + "", e, t, i) : void 0,
            u = void 0 === c;
        if (u) {
            var f = eW(s),
                d = !f && eq(s),
                h = !f && !d && e9(s);
            ((c = s), f || d || h)
                ? eW(l)
                    ? (c = l)
                    : eH(l) && eI(l)
                      ? (c = eF(l))
                      : d
                        ? ((u = !1), (c = e_(s, !0)))
                        : h
                          ? ((u = !1), (c = eB(s, !0)))
                          : (c = [])
                : e1(s) || eX(s)
                  ? ((c = l), eX(l))
                      ? (c = tr(l, tu(l)))
                      : (!Z(l) || J(l)) && (c = "function" != typeof s.constructor || eL(s) ? {} : eA(eP(s)))
                  : (u = !1);
        }
        u && (i.set(s, c), a(c, s, n, o, i), i.delete(s)), ew(e, r, c);
    },
    td = function e(t, r, n, a, o) {
        t !== r &&
            eE(
                r,
                function (i, l) {
                    if ((o || (o = new ex()), Z(i))) tf(t, r, l, n, e, a, o);
                    else {
                        var s = a ? a(e7(t, l), i, l + "", t, r, o) : void 0;
                        void 0 === s && (s = i), ew(t, l, s);
                    }
                },
                tu,
            );
    },
    th = function (e) {
        return e;
    },
    tb = function (e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2]);
        }
        return e.apply(t, r);
    };
var tg = Math.max,
    tv = Date.now,
    tx =
        ((i = ey
            ? function (e, t) {
                  return ey(e, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      value: function () {
                          return t;
                      },
                      writable: !0,
                  });
              }
            : th),
        (l = 0),
        (s = 0),
        function () {
            var e = tv(),
                t = 16 - (e - s);
            if (((s = e), t > 0)) {
                if (++l >= 800) return arguments[0];
            } else l = 0;
            return i.apply(void 0, arguments);
        });
let ty = function (e, t, r) {
    if (!Z(r)) return !1;
    var n = typeof t;
    return ("number" == n ? !!(eI(r) && to(t, r.length)) : "string" == n && t in r) && P(r[t], e);
};
var tm =
        ((p = function (e, t, r) {
            td(e, t, r);
        }),
        tx(
            ((n = function (e, t) {
                var r = -1,
                    n = t.length,
                    a = n > 1 ? t[n - 1] : void 0,
                    o = n > 2 ? t[2] : void 0;
                for (
                    a = p.length > 3 && "function" == typeof a ? (n--, a) : void 0,
                        o && ty(t[0], t[1], o) && ((a = n < 3 ? void 0 : a), (n = 1)),
                        e = Object(e);
                    ++r < n;
                ) {
                    var i = t[r];
                    i && p(e, i, r, a);
                }
                return e;
            }),
            (a = tg(((a = void 0), n.length - 1), 0)),
            function () {
                for (var e = arguments, t = -1, r = tg(e.length - a, 0), o = Array(r); ++t < r; ) o[t] = e[a + t];
                t = -1;
                for (var i = Array(a + 1); ++t < a; ) i[t] = e[t];
                return (i[a] = th(o)), tb(n, this, i);
            }),
            n + "",
        )),
    tw = function (e) {
        var t = e.zDepth,
            r = e.radius,
            n = e.background,
            a = e.children,
            o = e.styles,
            i = (0, h.default)(
                tm(
                    {
                        default: {
                            wrap: { position: "relative", display: "inline-block" },
                            content: { position: "relative" },
                            bg: {
                                absolute: "0px 0px 0px 0px",
                                boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
                                borderRadius: r,
                                background: n,
                            },
                        },
                        "zDepth-0": { bg: { boxShadow: "none" } },
                        "zDepth-1": { bg: { boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)" } },
                        "zDepth-2": { bg: { boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)" } },
                        "zDepth-3": { bg: { boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)" } },
                        "zDepth-4": { bg: { boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)" } },
                        "zDepth-5": { bg: { boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)" } },
                        square: { bg: { borderRadius: "0" } },
                        circle: { bg: { borderRadius: "50%" } },
                    },
                    void 0 === o ? {} : o,
                ),
                { "zDepth-1": 1 === t },
            );
        return d.createElement(
            "div",
            { style: i.wrap },
            d.createElement("div", { style: i.bg }),
            d.createElement("div", { style: i.content }, a),
        );
    };
(tw.propTypes = {
    background: z().string,
    zDepth: z().oneOf([0, 1, 2, 3, 4, 5]),
    radius: z().number,
    styles: z().object,
}),
    (tw.defaultProps = { background: "#fff", zDepth: 1, radius: 2, styles: {} });
let tE = function () {
    return G.Date.now();
};
var tC = /\s/;
let tk = function (e) {
    for (var t = e.length; t-- && tC.test(e.charAt(t)); );
    return t;
};
var tS = /^\s+/;
let tO = function (e) {
    return "symbol" == typeof e || (eH(e) && "[object Symbol]" == q(e));
};
var t_ = 0 / 0,
    tj = /^[-+]0x[0-9a-f]+$/i,
    tR = /^0b[01]+$/i,
    tB = /^0o[0-7]+$/i,
    tF = parseInt;
let tT = function (e) {
    if ("number" == typeof e) return e;
    if (tO(e)) return t_;
    if (Z(e)) {
        var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = Z(r) ? r + "" : r;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = (t = e) ? t.slice(0, tk(t) + 1).replace(tS, "") : t;
    var n = tR.test(e);
    return n || tB.test(e) ? tF(e.slice(2), n ? 2 : 8) : tj.test(e) ? t_ : +e;
};
var tA = Math.max,
    tz = Math.min;
let tP = function (e, t, r) {
        var n,
            a,
            o,
            i,
            l,
            s,
            p = 0,
            c = !1,
            u = !1,
            f = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function d(t) {
            var r = n,
                o = a;
            return (n = a = void 0), (p = t), (i = e.apply(o, r));
        }
        function h(e) {
            var r = e - s,
                n = e - p;
            return void 0 === s || r >= t || r < 0 || (u && n >= o);
        }
        function b() {
            var e,
                r,
                n,
                a = tE();
            if (h(a)) return g(a);
            l = setTimeout(b, ((e = a - s), (r = a - p), (n = t - e), u ? tz(n, o - r) : n));
        }
        function g(e) {
            return ((l = void 0), f && n) ? d(e) : ((n = a = void 0), i);
        }
        function v() {
            var e,
                r = tE(),
                o = h(r);
            if (((n = arguments), (a = this), (s = r), o)) {
                if (void 0 === l) return (p = e = s), (l = setTimeout(b, t)), c ? d(e) : i;
                if (u) return clearTimeout(l), (l = setTimeout(b, t)), d(s);
            }
            return void 0 === l && (l = setTimeout(b, t)), i;
        }
        return (
            (t = tT(t) || 0),
            Z(r) &&
                ((c = !!r.leading),
                (o = (u = "maxWait" in r) ? tA(tT(r.maxWait) || 0, t) : o),
                (f = "trailing" in r ? !!r.trailing : f)),
            (v.cancel = function () {
                void 0 !== l && clearTimeout(l), (p = 0), (n = s = a = l = void 0);
            }),
            (v.flush = function () {
                return void 0 === l ? i : g(tE());
            }),
            v
        );
    },
    tD = function (e, t, r) {
        var n = !0,
            a = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
            Z(r) && ((n = "leading" in r ? !!r.leading : n), (a = "trailing" in r ? !!r.trailing : a)),
            tP(e, t, { leading: n, maxWait: t, trailing: a })
        );
    };
var tL = function (e, t, r) {
        var n = r.getBoundingClientRect(),
            a = n.width,
            o = n.height,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            s = i - (r.getBoundingClientRect().left + window.pageXOffset),
            p = l - (r.getBoundingClientRect().top + window.pageYOffset);
        s < 0 ? (s = 0) : s > a && (s = a), p < 0 ? (p = 0) : p > o && (p = o);
        var c = s / a,
            u = 1 - p / o;
        return { h: t.h, s: c, v: u, a: t.a, source: "hsv" };
    },
    tH = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    tM = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            var r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return (
                (r.handleChange = function (e) {
                    "function" == typeof r.props.onChange &&
                        r.throttle(r.props.onChange, tL(e, r.props.hsl, r.container), e);
                }),
                (r.handleMouseDown = function (e) {
                    r.handleChange(e);
                    var t = r.getContainerRenderWindow();
                    t.addEventListener("mousemove", r.handleChange), t.addEventListener("mouseup", r.handleMouseUp);
                }),
                (r.handleMouseUp = function () {
                    r.unbindEventListeners();
                }),
                (r.throttle = tD(function (e, t, r) {
                    e(t, r);
                }, 50)),
                r
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            tH(t, [
                {
                    key: "componentWillUnmount",
                    value: function () {
                        this.throttle.cancel(), this.unbindEventListeners();
                    },
                },
                {
                    key: "getContainerRenderWindow",
                    value: function () {
                        for (var e = this.container, t = window; !t.document.contains(e) && t.parent !== t; )
                            t = t.parent;
                        return t;
                    },
                },
                {
                    key: "unbindEventListeners",
                    value: function () {
                        var e = this.getContainerRenderWindow();
                        e.removeEventListener("mousemove", this.handleChange),
                            e.removeEventListener("mouseup", this.handleMouseUp);
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var e = this,
                            t = this.props.style || {},
                            r = t.color,
                            n = t.white,
                            a = t.black,
                            o = t.pointer,
                            i = t.circle,
                            l = (0, h.default)(
                                {
                                    default: {
                                        color: {
                                            absolute: "0px 0px 0px 0px",
                                            background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                                            borderRadius: this.props.radius,
                                        },
                                        white: { absolute: "0px 0px 0px 0px", borderRadius: this.props.radius },
                                        black: {
                                            absolute: "0px 0px 0px 0px",
                                            boxShadow: this.props.shadow,
                                            borderRadius: this.props.radius,
                                        },
                                        pointer: {
                                            position: "absolute",
                                            top: -(100 * this.props.hsv.v) + 100 + "%",
                                            left: 100 * this.props.hsv.s + "%",
                                            cursor: "default",
                                        },
                                        circle: {
                                            width: "4px",
                                            height: "4px",
                                            boxShadow:
                                                "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                                            borderRadius: "50%",
                                            cursor: "hand",
                                            transform: "translate(-2px, -2px)",
                                        },
                                    },
                                    custom: { color: r, white: n, black: a, pointer: o, circle: i },
                                },
                                { custom: !!this.props.style },
                            );
                        return d.createElement(
                            "div",
                            {
                                style: l.color,
                                ref: function (t) {
                                    return (e.container = t);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange,
                            },
                            d.createElement(
                                "style",
                                null,
                                "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        ",
                            ),
                            d.createElement(
                                "div",
                                { style: l.white, className: "saturation-white" },
                                d.createElement("div", { style: l.black, className: "saturation-black" }),
                                d.createElement(
                                    "div",
                                    { style: l.pointer },
                                    this.props.pointer
                                        ? d.createElement(this.props.pointer, this.props)
                                        : d.createElement("div", { style: l.circle }),
                                ),
                            ),
                        );
                    },
                },
            ]),
            t
        );
    })(d.PureComponent || d.Component);
let tN = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e); );
    return e;
};
var tG = ez(Object.keys, Object),
    tU = Object.prototype.hasOwnProperty;
let tX = function (e) {
        if (!eL(e)) return tG(e);
        var t = [];
        for (var r in Object(e)) tU.call(e, r) && "constructor" != r && t.push(r);
        return t;
    },
    tW = function (e) {
        return eI(e) ? tl(e) : tX(e);
    };
var tV =
    ((c = function (e, t) {
        return e && eE(e, t, tW);
    }),
    function (e, t) {
        if (null == e) return e;
        if (!eI(e)) return c(e, t);
        for (var r = e.length, n = -1, a = Object(e); ++n < r && !1 !== t(a[n], n, a); );
        return e;
    });
let tI = function (e, t) {
    return (eW(e) ? tN : tV)(e, "function" == typeof t ? t : th);
};
var tY = r(440745),
    t$ = r.n(tY),
    tK = function (e) {
        var t = 0,
            r = 0;
        return (
            tI(["r", "g", "b", "a", "h", "s", "l", "v"], function (n) {
                e[n] &&
                    ((t += 1), isNaN(e[n]) || (r += 1), ("s" === n || "l" === n) && /^\d+%$/.test(e[n]) && (r += 1));
            }),
            t === r && e
        );
    },
    tq = function (e, t) {
        var r = e.hex ? t$()(e.hex) : t$()(e),
            n = r.toHsl(),
            a = r.toHsv(),
            o = r.toRgb(),
            i = r.toHex();
        return (
            0 === n.s && ((n.h = t || 0), (a.h = t || 0)),
            {
                hsl: n,
                hex: "000000" === i && 0 === o.a ? "transparent" : "#" + i,
                rgb: o,
                hsv: a,
                oldHue: e.h || t || n.h,
                source: e.source,
            }
        );
    },
    tZ = function (e) {
        if ("transparent" === e) return !0;
        var t = +("#" === String(e).charAt(0));
        return e.length !== 4 + t && e.length < 7 + t && t$()(e).isValid();
    },
    tJ = function (e) {
        if (!e) return "#fff";
        var t = tq(e);
        return "transparent" === t.hex
            ? "rgba(0,0,0,0.4)"
            : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1e3 >= 128
              ? "#000"
              : "#fff";
    },
    tQ = function (e, t) {
        var r = e.replace("\xb0", "");
        return t$()(t + " (" + r + ")")._ok;
    },
    t0 =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    t1 = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })();
let t2 = function (e) {
    var t = (function (t) {
        if ("function" != typeof t && null !== t)
            throw TypeError("Super expression must either be null or a function, not " + typeof t);
        function r(e) {
            if (!(this instanceof r)) throw TypeError("Cannot call a class as a function");
            var t = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            return (
                (t.handleChange = function (e, r) {
                    if (tK(e)) {
                        var n = tq(e, e.h || t.state.oldHue);
                        t.setState(n),
                            t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, n, r),
                            t.props.onChange && t.props.onChange(n, r);
                    }
                }),
                (t.handleSwatchHover = function (e, r) {
                    if (tK(e)) {
                        var n = tq(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(n, r);
                    }
                }),
                (t.state = t0({}, tq(e.color, 0))),
                (t.debounce = tP(function (e, t, r) {
                    e(t, r);
                }, 100)),
                t
            );
        }
        return (
            (r.prototype = Object.create(t && t.prototype, {
                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(r, t) : (r.__proto__ = t)),
            t1(
                r,
                [
                    {
                        key: "render",
                        value: function () {
                            var t = {};
                            return (
                                this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover),
                                d.createElement(e, t0({}, this.props, this.state, { onChange: this.handleChange }, t))
                            );
                        },
                    },
                ],
                [
                    {
                        key: "getDerivedStateFromProps",
                        value: function (e, t) {
                            return t0({}, tq(e.color, t.oldHue));
                        },
                    },
                ],
            ),
            r
        );
    })(d.PureComponent || d.Component);
    return (
        (t.propTypes = t0({}, e.propTypes)),
        (t.defaultProps = t0({}, e.defaultProps, { color: { h: 250, s: 0.5, l: 0.2, a: 1 } })),
        t
    );
};
var t5 =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    t4 = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })();
function t3(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
}
var t8 =
    Object.assign ||
    function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    };
let t6 = (function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span",
        r = d.Component;
    if ("function" != typeof r && null !== r)
        throw TypeError("Super expression must either be null or a function, not " + typeof r);
    function n() {
        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
        for (var e, t, r, a = arguments.length, o = Array(a), i = 0; i < a; i++) o[i] = arguments[i];
        return (
            (t = r = t3(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(o)))),
            (r.state = { focus: !1 }),
            (r.handleFocus = function () {
                return r.setState({ focus: !0 });
            }),
            (r.handleBlur = function () {
                return r.setState({ focus: !1 });
            }),
            t3(r, t)
        );
    }
    return (
        (n.prototype = Object.create(r && r.prototype, {
            constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
        })),
        r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : (n.__proto__ = r)),
        t4(n, [
            {
                key: "render",
                value: function () {
                    return d.createElement(
                        t,
                        { onFocus: this.handleFocus, onBlur: this.handleBlur },
                        d.createElement(e, t5({}, this.props, this.state)),
                    );
                },
            },
        ]),
        n
    );
})(function (e) {
    var t = e.color,
        r = e.style,
        n = e.onClick,
        a = void 0 === n ? function () {} : n,
        o = e.onHover,
        i = e.title,
        l = void 0 === i ? t : i,
        s = e.children,
        p = e.focus,
        c = e.focusStyle,
        u = "transparent" === t,
        f = (0, h.default)({
            default: {
                swatch: t8(
                    {
                        background: t,
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        position: "relative",
                        outline: "none",
                    },
                    r,
                    p ? (void 0 === c ? {} : c) : {},
                ),
            },
        }),
        b = {};
    return (
        o &&
            (b.onMouseOver = function (e) {
                return o(t, e);
            }),
        d.createElement(
            "div",
            t8(
                {
                    style: f.swatch,
                    onClick: function (e) {
                        return a(t, e);
                    },
                    title: l,
                    tabIndex: 0,
                    onKeyDown: function (e) {
                        return 13 === e.keyCode && a(t, e);
                    },
                },
                b,
            ),
            s,
            u &&
                d.createElement(m, {
                    borderRadius: f.swatch.borderRadius,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }),
        )
    );
});
var t9 =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    t7 = function (e) {
        var t = e.rgb,
            r = e.hsl,
            n = e.width,
            a = e.height,
            o = e.onChange,
            i = e.direction,
            l = e.style,
            s = e.renderers,
            p = e.pointer,
            c = e.className,
            u = (0, h.default)({
                default: { picker: { position: "relative", width: n, height: a }, alpha: { radius: "2px", style: l } },
            });
        return d.createElement(
            "div",
            { style: u.picker, className: "alpha-picker " + (void 0 === c ? "" : c) },
            d.createElement(
                k,
                t9({}, u.alpha, { rgb: t, hsl: r, pointer: p, renderers: s, onChange: o, direction: i }),
            ),
        );
    };
(t7.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: function (e) {
        var t = e.direction,
            r = (0, h.default)(
                {
                    default: {
                        picker: {
                            width: "18px",
                            height: "18px",
                            borderRadius: "50%",
                            transform: "translate(-9px, -1px)",
                            backgroundColor: "rgb(248, 248, 248)",
                            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                        },
                    },
                    vertical: { picker: { transform: "translate(-3px, -9px)" } },
                },
                { vertical: "vertical" === t },
            );
        return d.createElement("div", { style: r.picker });
    },
}),
    t2(t7);
let re = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, a = Array(n); ++r < n; ) a[r] = t(e[r], r, e);
    return a;
};
function rt(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.__data__ = new ev(); ++t < r; ) this.add(e[t]);
}
(rt.prototype.add = rt.prototype.push =
    function (e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this;
    }),
    (rt.prototype.has = function (e) {
        return this.__data__.has(e);
    });
let rr = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n; ) if (t(e[r], r, e)) return !0;
        return !1;
    },
    rn = function (e, t, r, n, a, o) {
        var i = 1 & r,
            l = e.length,
            s = t.length;
        if (l != s && !(i && s > l)) return !1;
        var p = o.get(e),
            c = o.get(t);
        if (p && c) return p == t && c == e;
        var u = -1,
            f = !0,
            d = 2 & r ? new rt() : void 0;
        for (o.set(e, t), o.set(t, e); ++u < l; ) {
            var h = e[u],
                b = t[u];
            if (n) var g = i ? n(b, h, u, t, e, o) : n(h, b, u, e, t, o);
            if (void 0 !== g) {
                if (g) continue;
                f = !1;
                break;
            }
            if (d) {
                if (
                    !rr(t, function (e, t) {
                        if (!d.has(t) && (h === e || a(h, e, r, n, o))) return d.push(t);
                    })
                ) {
                    f = !1;
                    break;
                }
            } else if (!(h === b || a(h, b, r, n, o))) {
                f = !1;
                break;
            }
        }
        return o.delete(e), o.delete(t), f;
    },
    ra = function (e) {
        var t = -1,
            r = Array(e.size);
        return (
            e.forEach(function (e, n) {
                r[++t] = [n, e];
            }),
            r
        );
    },
    ro = function (e) {
        var t = -1,
            r = Array(e.size);
        return (
            e.forEach(function (e) {
                r[++t] = e;
            }),
            r
        );
    };
var ri = U ? U.prototype : void 0,
    rl = ri ? ri.valueOf : void 0;
let rs = function (e, t, r, n, a, o, i) {
        switch (r) {
            case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                (e = e.buffer), (t = t.buffer);
            case "[object ArrayBuffer]":
                if (e.byteLength != t.byteLength || !o(new ej(e), new ej(t))) break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return P(+e, +t);
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "";
            case "[object Map]":
                var l = ra;
            case "[object Set]":
                var s = 1 & n;
                if ((l || (l = ro), e.size != t.size && !s)) break;
                var p = i.get(e);
                if (p) return p == t;
                (n |= 2), i.set(e, t);
                var c = rn(l(e), l(t), n, a, o, i);
                return i.delete(e), c;
            case "[object Symbol]":
                if (rl) return rl.call(e) == rl.call(t);
        }
        return !1;
    },
    rp = function (e, t) {
        for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
        return e;
    },
    rc = function (e, t, r) {
        var n = t(e);
        return eW(e) ? n : rp(n, r(e));
    },
    ru = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, a = 0, o = []; ++r < n; ) {
            var i = e[r];
            t(i, r, e) && (o[a++] = i);
        }
        return o;
    };
var rf = Object.prototype.propertyIsEnumerable,
    rd = Object.getOwnPropertySymbols,
    rh = rd
        ? function (e) {
              return null == e
                  ? []
                  : ru(rd((e = Object(e))), function (t) {
                        return rf.call(e, t);
                    });
          }
        : function () {
              return [];
          };
let rb = function (e) {
    return rc(e, tW, rh);
};
var rg = Object.prototype.hasOwnProperty;
let rv = function (e, t, r, n, a, o) {
    var i = 1 & r,
        l = rb(e),
        s = l.length;
    if (s != rb(t).length && !i) return !1;
    for (var p = s; p--; ) {
        var c = l[p];
        if (!(i ? c in t : rg.call(t, c))) return !1;
    }
    var u = o.get(e),
        f = o.get(t);
    if (u && f) return u == t && f == e;
    var d = !0;
    o.set(e, t), o.set(t, e);
    for (var h = i; ++p < s; ) {
        var b = e[(c = l[p])],
            g = t[c];
        if (n) var v = i ? n(g, b, c, t, e, o) : n(b, g, c, e, t, o);
        if (!(void 0 === v ? b === g || a(b, g, r, n, o) : v)) {
            d = !1;
            break;
        }
        h || (h = "constructor" == c);
    }
    if (d && !h) {
        var x = e.constructor,
            y = t.constructor;
        x != y &&
            "constructor" in e &&
            "constructor" in t &&
            !("function" == typeof x && x instanceof x && "function" == typeof y && y instanceof y) &&
            (d = !1);
    }
    return o.delete(e), o.delete(t), d;
};
var rx = ep(G, "DataView"),
    ry = ep(G, "Promise"),
    rm = ep(G, "Set"),
    rw = ep(G, "WeakMap"),
    rE = "[object Map]",
    rC = "[object Promise]",
    rk = "[object Set]",
    rS = "[object WeakMap]",
    rO = "[object DataView]",
    r_ = er(rx),
    rj = er(ec),
    rR = er(ry),
    rB = er(rm),
    rF = er(rw),
    rT = q;
((rx && rT(new rx(new ArrayBuffer(1))) != rO) ||
    (ec && rT(new ec()) != rE) ||
    (ry && rT(ry.resolve()) != rC) ||
    (rm && rT(new rm()) != rk) ||
    (rw && rT(new rw()) != rS)) &&
    (rT = function (e) {
        var t = q(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? er(r) : "";
        if (n)
            switch (n) {
                case r_:
                    return rO;
                case rj:
                    return rE;
                case rR:
                    return rC;
                case rB:
                    return rk;
                case rF:
                    return rS;
            }
        return t;
    });
let rA = rT;
var rz = "[object Arguments]",
    rP = "[object Array]",
    rD = "[object Object]",
    rL = Object.prototype.hasOwnProperty;
let rH = function (e, t, r, n, a, o) {
        var i = eW(e),
            l = eW(t),
            s = i ? rP : rA(e),
            p = l ? rP : rA(t);
        (s = s == rz ? rD : s), (p = p == rz ? rD : p);
        var c = s == rD,
            u = p == rD,
            f = s == p;
        if (f && eq(e)) {
            if (!eq(t)) return !1;
            (i = !0), (c = !1);
        }
        if (f && !c) return o || (o = new ex()), i || e9(e) ? rn(e, t, r, n, a, o) : rs(e, t, s, r, n, a, o);
        if (!(1 & r)) {
            var d = c && rL.call(e, "__wrapped__"),
                h = u && rL.call(t, "__wrapped__");
            if (d || h) {
                var b = d ? e.value() : e,
                    g = h ? t.value() : t;
                return o || (o = new ex()), a(b, g, r, n, o);
            }
        }
        return !!f && (o || (o = new ex()), rv(e, t, r, n, a, o));
    },
    rM = function e(t, r, n, a, o) {
        return t === r || (null != t && null != r && (eH(t) || eH(r)) ? rH(t, r, n, a, e, o) : t != t && r != r);
    },
    rN = function (e, t, r, n) {
        var a = r.length,
            o = a,
            i = !n;
        if (null == e) return !o;
        for (e = Object(e); a--; ) {
            var l = r[a];
            if (i && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
        }
        for (; ++a < o; ) {
            var s = (l = r[a])[0],
                p = e[s],
                c = l[1];
            if (i && l[2]) {
                if (void 0 === p && !(s in e)) return !1;
            } else {
                var u = new ex();
                if (n) var f = n(p, c, s, e, t, u);
                if (!(void 0 === f ? rM(c, p, 3, n, u) : f)) return !1;
            }
        }
        return !0;
    },
    rG = function (e) {
        return e == e && !Z(e);
    },
    rU = function (e) {
        for (var t = tW(e), r = t.length; r--; ) {
            var n = t[r],
                a = e[n];
            t[r] = [n, a, rG(a)];
        }
        return t;
    },
    rX = function (e, t) {
        return function (r) {
            return null != r && r[e] === t && (void 0 !== t || e in Object(r));
        };
    },
    rW = function (e) {
        var t = rU(e);
        return 1 == t.length && t[0][2]
            ? rX(t[0][0], t[0][1])
            : function (r) {
                  return r === e || rN(r, e, t);
              };
    };
var rV = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    rI = /^\w*$/;
let rY = function (e, t) {
    if (eW(e)) return !1;
    var r = typeof e;
    return (
        !!("number" == r || "symbol" == r || "boolean" == r || null == e || tO(e)) ||
        rI.test(e) ||
        !rV.test(e) ||
        (null != t && e in Object(t))
    );
};
function r$(e, t) {
    if ("function" != typeof e || (null != t && "function" != typeof t)) throw TypeError("Expected a function");
    var r = function () {
        var n = arguments,
            a = t ? t.apply(this, n) : n[0],
            o = r.cache;
        if (o.has(a)) return o.get(a);
        var i = e.apply(this, n);
        return (r.cache = o.set(a, i) || o), i;
    };
    return (r.cache = new (r$.Cache || ev)()), r;
}
r$.Cache = ev;
var rK = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    rq = /\\(\\)?/g,
    rZ =
        ((f = (u = r$(
            function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(""),
                    e.replace(rK, function (e, r, n, a) {
                        t.push(n ? a.replace(rq, "$1") : r || e);
                    }),
                    t
                );
            },
            function (e) {
                return 500 === f.size && f.clear(), e;
            },
        )).cache),
        u),
    rJ = 1 / 0,
    rQ = U ? U.prototype : void 0,
    r0 = rQ ? rQ.toString : void 0;
let r1 = function e(t) {
        if ("string" == typeof t) return t;
        if (eW(t)) return re(t, e) + "";
        if (tO(t)) return r0 ? r0.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -rJ ? "-0" : r;
    },
    r2 = function (e, t) {
        return eW(e) ? e : rY(e, t) ? [e] : rZ(null == e ? "" : r1(e));
    };
var r5 = 1 / 0;
let r4 = function (e) {
        if ("string" == typeof e || tO(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -r5 ? "-0" : t;
    },
    r3 = function (e, t) {
        t = r2(t, e);
        for (var r = 0, n = t.length; null != e && r < n; ) e = e[r4(t[r++])];
        return r && r == n ? e : void 0;
    },
    r8 = function (e, t, r) {
        var n = null == e ? void 0 : r3(e, t);
        return void 0 === n ? r : n;
    },
    r6 = function (e, t) {
        return null != e && t in Object(e);
    },
    r9 = function (e, t, r) {
        t = r2(t, e);
        for (var n = -1, a = t.length, o = !1; ++n < a; ) {
            var i = r4(t[n]);
            if (!(o = null != e && r(e, i))) break;
            e = e[i];
        }
        return o || ++n != a ? o : !!(a = null == e ? 0 : e.length) && eV(a) && to(i, a) && (eW(e) || eX(e));
    },
    r7 = function (e) {
        var t;
        return rY(e)
            ? ((t = r4(e)),
              function (e) {
                  return null == e ? void 0 : e[t];
              })
            : function (t) {
                  return r3(t, e);
              };
    },
    ne = function (e) {
        if ("function" == typeof e) return e;
        if (null == e) return th;
        if ("object" == typeof e) {
            var t, r;
            return eW(e)
                ? ((t = e[0]),
                  (r = e[1]),
                  rY(t) && rG(r)
                      ? rX(r4(t), r)
                      : function (e) {
                            var n = r8(e, t);
                            return void 0 === n && n === r ? null != e && r9(e, t, r6) : rM(r, n, 3);
                        })
                : rW(e);
        }
        return r7(e);
    },
    nt = function (e, t) {
        var r = -1,
            n = eI(e) ? Array(e.length) : [];
        return (
            tV(e, function (e, a, o) {
                n[++r] = t(e, a, o);
            }),
            n
        );
    },
    nr = function (e, t) {
        return (eW(e) ? re : nt)(e, ne(t, 3));
    },
    nn = function (e) {
        var t = e.colors,
            r = e.onClick,
            n = e.onSwatchHover,
            a = (0, h.default)({
                default: {
                    swatches: { marginRight: "-10px" },
                    swatch: {
                        width: "22px",
                        height: "22px",
                        float: "left",
                        marginRight: "10px",
                        marginBottom: "10px",
                        borderRadius: "4px",
                    },
                    clear: { clear: "both" },
                },
            });
        return d.createElement(
            "div",
            { style: a.swatches },
            nr(t, function (e) {
                return d.createElement(t6, {
                    key: e,
                    color: e,
                    style: a.swatch,
                    onClick: r,
                    onHover: n,
                    focusStyle: { boxShadow: "0 0 4px " + e },
                });
            }),
            d.createElement("div", { style: a.clear }),
        );
    };
var na = function (e) {
    var t = e.onChange,
        r = e.onSwatchHover,
        n = e.hex,
        a = e.colors,
        o = e.width,
        i = e.triangle,
        l = e.styles,
        s = e.className,
        p = "transparent" === n,
        c = function (e, r) {
            tZ(e) && t({ hex: e, source: "hex" }, r);
        },
        u = (0, h.default)(
            tm(
                {
                    default: {
                        card: {
                            width: o,
                            background: "#fff",
                            boxShadow: "0 1px rgba(0,0,0,.1)",
                            borderRadius: "6px",
                            position: "relative",
                        },
                        head: {
                            height: "110px",
                            background: n,
                            borderRadius: "6px 6px 0 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                        },
                        body: { padding: "10px" },
                        label: { fontSize: "18px", color: tJ(n), position: "relative" },
                        triangle: {
                            width: "0px",
                            height: "0px",
                            borderStyle: "solid",
                            borderWidth: "0 10px 10px 10px",
                            borderColor: "transparent transparent " + n + " transparent",
                            position: "absolute",
                            top: "-10px",
                            left: "50%",
                            marginLeft: "-10px",
                        },
                        input: {
                            width: "100%",
                            fontSize: "12px",
                            color: "#666",
                            border: "0px",
                            outline: "none",
                            height: "22px",
                            boxShadow: "inset 0 0 0 1px #ddd",
                            borderRadius: "4px",
                            padding: "0 7px",
                            boxSizing: "border-box",
                        },
                    },
                    "hide-triangle": { triangle: { display: "none" } },
                },
                void 0 === l ? {} : l,
            ),
            { "hide-triangle": "hide" === i },
        );
    return d.createElement(
        "div",
        { style: u.card, className: "block-picker " + (void 0 === s ? "" : s) },
        d.createElement("div", { style: u.triangle }),
        d.createElement(
            "div",
            { style: u.head },
            p && d.createElement(m, { borderRadius: "6px 6px 0 0" }),
            d.createElement("div", { style: u.label }, n),
        ),
        d.createElement(
            "div",
            { style: u.body },
            d.createElement(nn, { colors: a, onClick: c, onSwatchHover: r }),
            d.createElement(j, { style: { input: u.input }, value: n, onChange: c }),
        ),
    );
};
(na.propTypes = {
    width: z().oneOfType([z().string, z().number]),
    colors: z().arrayOf(z().string),
    triangle: z().oneOf(["top", "hide"]),
    styles: z().object,
}),
    (na.defaultProps = {
        width: 170,
        colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
        triangle: "top",
        styles: {},
    }),
    t2(na);
var no = {
        50: "#ffebee",
        100: "#ffcdd2",
        200: "#ef9a9a",
        300: "#e57373",
        400: "#ef5350",
        500: "#f44336",
        600: "#e53935",
        700: "#d32f2f",
        800: "#c62828",
        900: "#b71c1c",
        a100: "#ff8a80",
        a200: "#ff5252",
        a400: "#ff1744",
        a700: "#d50000",
    },
    ni = {
        50: "#fce4ec",
        100: "#f8bbd0",
        200: "#f48fb1",
        300: "#f06292",
        400: "#ec407a",
        500: "#e91e63",
        600: "#d81b60",
        700: "#c2185b",
        800: "#ad1457",
        900: "#880e4f",
        a100: "#ff80ab",
        a200: "#ff4081",
        a400: "#f50057",
        a700: "#c51162",
    },
    nl = {
        50: "#f3e5f5",
        100: "#e1bee7",
        200: "#ce93d8",
        300: "#ba68c8",
        400: "#ab47bc",
        500: "#9c27b0",
        600: "#8e24aa",
        700: "#7b1fa2",
        800: "#6a1b9a",
        900: "#4a148c",
        a100: "#ea80fc",
        a200: "#e040fb",
        a400: "#d500f9",
        a700: "#aa00ff",
    },
    ns = {
        50: "#ede7f6",
        100: "#d1c4e9",
        200: "#b39ddb",
        300: "#9575cd",
        400: "#7e57c2",
        500: "#673ab7",
        600: "#5e35b1",
        700: "#512da8",
        800: "#4527a0",
        900: "#311b92",
        a100: "#b388ff",
        a200: "#7c4dff",
        a400: "#651fff",
        a700: "#6200ea",
    },
    np = {
        50: "#e8eaf6",
        100: "#c5cae9",
        200: "#9fa8da",
        300: "#7986cb",
        400: "#5c6bc0",
        500: "#3f51b5",
        600: "#3949ab",
        700: "#303f9f",
        800: "#283593",
        900: "#1a237e",
        a100: "#8c9eff",
        a200: "#536dfe",
        a400: "#3d5afe",
        a700: "#304ffe",
    },
    nc = {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        a100: "#82b1ff",
        a200: "#448aff",
        a400: "#2979ff",
        a700: "#2962ff",
    },
    nu = {
        50: "#e1f5fe",
        100: "#b3e5fc",
        200: "#81d4fa",
        300: "#4fc3f7",
        400: "#29b6f6",
        500: "#03a9f4",
        600: "#039be5",
        700: "#0288d1",
        800: "#0277bd",
        900: "#01579b",
        a100: "#80d8ff",
        a200: "#40c4ff",
        a400: "#00b0ff",
        a700: "#0091ea",
    },
    nf = {
        50: "#e0f7fa",
        100: "#b2ebf2",
        200: "#80deea",
        300: "#4dd0e1",
        400: "#26c6da",
        500: "#00bcd4",
        600: "#00acc1",
        700: "#0097a7",
        800: "#00838f",
        900: "#006064",
        a100: "#84ffff",
        a200: "#18ffff",
        a400: "#00e5ff",
        a700: "#00b8d4",
    },
    nd = {
        50: "#e0f2f1",
        100: "#b2dfdb",
        200: "#80cbc4",
        300: "#4db6ac",
        400: "#26a69a",
        500: "#009688",
        600: "#00897b",
        700: "#00796b",
        800: "#00695c",
        900: "#004d40",
        a100: "#a7ffeb",
        a200: "#64ffda",
        a400: "#1de9b6",
        a700: "#00bfa5",
    },
    nh = {
        50: "#e8f5e9",
        100: "#c8e6c9",
        200: "#a5d6a7",
        300: "#81c784",
        400: "#66bb6a",
        500: "#4caf50",
        600: "#43a047",
        700: "#388e3c",
        800: "#2e7d32",
        900: "#1b5e20",
        a100: "#b9f6ca",
        a200: "#69f0ae",
        a400: "#00e676",
        a700: "#00c853",
    },
    nb = {
        50: "#f1f8e9",
        100: "#dcedc8",
        200: "#c5e1a5",
        300: "#aed581",
        400: "#9ccc65",
        500: "#8bc34a",
        600: "#7cb342",
        700: "#689f38",
        800: "#558b2f",
        900: "#33691e",
        a100: "#ccff90",
        a200: "#b2ff59",
        a400: "#76ff03",
        a700: "#64dd17",
    },
    ng = {
        50: "#f9fbe7",
        100: "#f0f4c3",
        200: "#e6ee9c",
        300: "#dce775",
        400: "#d4e157",
        500: "#cddc39",
        600: "#c0ca33",
        700: "#afb42b",
        800: "#9e9d24",
        900: "#827717",
        a100: "#f4ff81",
        a200: "#eeff41",
        a400: "#c6ff00",
        a700: "#aeea00",
    },
    nv = {
        50: "#fffde7",
        100: "#fff9c4",
        200: "#fff59d",
        300: "#fff176",
        400: "#ffee58",
        500: "#ffeb3b",
        600: "#fdd835",
        700: "#fbc02d",
        800: "#f9a825",
        900: "#f57f17",
        a100: "#ffff8d",
        a200: "#ffff00",
        a400: "#ffea00",
        a700: "#ffd600",
    },
    nx = {
        50: "#fff8e1",
        100: "#ffecb3",
        200: "#ffe082",
        300: "#ffd54f",
        400: "#ffca28",
        500: "#ffc107",
        600: "#ffb300",
        700: "#ffa000",
        800: "#ff8f00",
        900: "#ff6f00",
        a100: "#ffe57f",
        a200: "#ffd740",
        a400: "#ffc400",
        a700: "#ffab00",
    },
    ny = {
        50: "#fff3e0",
        100: "#ffe0b2",
        200: "#ffcc80",
        300: "#ffb74d",
        400: "#ffa726",
        500: "#ff9800",
        600: "#fb8c00",
        700: "#f57c00",
        800: "#ef6c00",
        900: "#e65100",
        a100: "#ffd180",
        a200: "#ffab40",
        a400: "#ff9100",
        a700: "#ff6d00",
    },
    nm = {
        50: "#fbe9e7",
        100: "#ffccbc",
        200: "#ffab91",
        300: "#ff8a65",
        400: "#ff7043",
        500: "#ff5722",
        600: "#f4511e",
        700: "#e64a19",
        800: "#d84315",
        900: "#bf360c",
        a100: "#ff9e80",
        a200: "#ff6e40",
        a400: "#ff3d00",
        a700: "#dd2c00",
    },
    nw = {
        50: "#efebe9",
        100: "#d7ccc8",
        200: "#bcaaa4",
        300: "#a1887f",
        400: "#8d6e63",
        500: "#795548",
        600: "#6d4c41",
        700: "#5d4037",
        800: "#4e342e",
        900: "#3e2723",
    },
    nE = {
        50: "#eceff1",
        100: "#cfd8dc",
        200: "#b0bec5",
        300: "#90a4ae",
        400: "#78909c",
        500: "#607d8b",
        600: "#546e7a",
        700: "#455a64",
        800: "#37474f",
        900: "#263238",
    },
    nC = function (e) {
        var t = e.color,
            r = e.onClick,
            n = e.onSwatchHover,
            a = e.hover,
            o = e.active,
            i = e.circleSize,
            l = e.circleSpacing,
            s = (0, h.default)(
                {
                    default: {
                        swatch: {
                            width: i,
                            height: i,
                            marginRight: l,
                            marginBottom: l,
                            transform: "scale(1)",
                            transition: "100ms transform ease",
                        },
                        Swatch: {
                            borderRadius: "50%",
                            background: "transparent",
                            boxShadow: "inset 0 0 0 " + (i / 2 + 1) + "px " + t,
                            transition: "100ms box-shadow ease",
                        },
                    },
                    hover: { swatch: { transform: "scale(1.2)" } },
                    active: { Swatch: { boxShadow: "inset 0 0 0 3px " + t } },
                },
                { hover: a, active: o },
            );
        return d.createElement(
            "div",
            { style: s.swatch },
            d.createElement(t6, {
                style: s.Swatch,
                color: t,
                onClick: r,
                onHover: n,
                focusStyle: { boxShadow: s.Swatch.boxShadow + ", 0 0 5px " + t },
            }),
        );
    };
nC.defaultProps = { circleSize: 28, circleSpacing: 14 };
let nk = (0, h.handleHover)(nC);
var nS = function (e) {
    var t = e.width,
        r = e.onChange,
        n = e.onSwatchHover,
        a = e.colors,
        o = e.hex,
        i = e.circleSize,
        l = e.styles,
        s = e.circleSpacing,
        p = e.className,
        c = (0, h.default)(
            tm(
                {
                    default: {
                        card: { width: t, display: "flex", flexWrap: "wrap", marginRight: -s, marginBottom: -s },
                    },
                },
                void 0 === l ? {} : l,
            ),
        ),
        u = function (e, t) {
            return r({ hex: e, source: "hex" }, t);
        };
    return d.createElement(
        "div",
        { style: c.card, className: "circle-picker " + (void 0 === p ? "" : p) },
        nr(a, function (e) {
            return d.createElement(nk, {
                key: e,
                color: e,
                onClick: u,
                onSwatchHover: n,
                active: o === e.toLowerCase(),
                circleSize: i,
                circleSpacing: s,
            });
        }),
    );
};
(nS.propTypes = {
    width: z().oneOfType([z().string, z().number]),
    circleSize: z().number,
    circleSpacing: z().number,
    styles: z().object,
}),
    (nS.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [
            no["500"],
            ni["500"],
            nl["500"],
            ns["500"],
            np["500"],
            nc["500"],
            nu["500"],
            nf["500"],
            nd["500"],
            nh["500"],
            nb["500"],
            ng["500"],
            nv["500"],
            nx["500"],
            ny["500"],
            nm["500"],
            nw["500"],
            nE["500"],
        ],
        styles: {},
    }),
    t2(nS);
let nO = function (e) {
    return void 0 === e;
};
var n_ = r(717692),
    nj = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    nR = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            var r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
                (r.toggleViews = function () {
                    "hex" === r.state.view
                        ? r.setState({ view: "rgb" })
                        : "rgb" === r.state.view
                          ? r.setState({ view: "hsl" })
                          : "hsl" === r.state.view &&
                            (1 === r.props.hsl.a ? r.setState({ view: "hex" }) : r.setState({ view: "rgb" }));
                }),
                (r.handleChange = function (e, t) {
                    e.hex
                        ? tZ(e.hex) && r.props.onChange({ hex: e.hex, source: "hex" }, t)
                        : e.r || e.g || e.b
                          ? r.props.onChange(
                                {
                                    r: e.r || r.props.rgb.r,
                                    g: e.g || r.props.rgb.g,
                                    b: e.b || r.props.rgb.b,
                                    source: "rgb",
                                },
                                t,
                            )
                          : e.a
                            ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
                              r.props.onChange(
                                  {
                                      h: r.props.hsl.h,
                                      s: r.props.hsl.s,
                                      l: r.props.hsl.l,
                                      a: Math.round(100 * e.a) / 100,
                                      source: "rgb",
                                  },
                                  t,
                              ))
                            : (e.h || e.s || e.l) &&
                              ("string" == typeof e.s && e.s.includes("%") && (e.s = e.s.replace("%", "")),
                              "string" == typeof e.l && e.l.includes("%") && (e.l = e.l.replace("%", "")),
                              1 == e.s ? (e.s = 0.01) : 1 == e.l && (e.l = 0.01),
                              r.props.onChange(
                                  {
                                      h: e.h || r.props.hsl.h,
                                      s: Number(nO(e.s) ? r.props.hsl.s : e.s),
                                      l: Number(nO(e.l) ? r.props.hsl.l : e.l),
                                      source: "hsl",
                                  },
                                  t,
                              ));
                }),
                (r.showHighlight = function (e) {
                    e.currentTarget.style.background = "#eee";
                }),
                (r.hideHighlight = function (e) {
                    e.currentTarget.style.background = "transparent";
                }),
                1 !== e.hsl.a && "hex" === e.view ? (r.state = { view: "rgb" }) : (r.state = { view: e.view }),
                r
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            nj(
                t,
                [
                    {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = (0, h.default)(
                                    {
                                        default: {
                                            wrap: { paddingTop: "16px", display: "flex" },
                                            fields: { flex: "1", display: "flex", marginLeft: "-6px" },
                                            field: { paddingLeft: "6px", width: "100%" },
                                            alpha: { paddingLeft: "6px", width: "100%" },
                                            toggle: { width: "32px", textAlign: "right", position: "relative" },
                                            icon: {
                                                marginRight: "-4px",
                                                marginTop: "12px",
                                                cursor: "pointer",
                                                position: "relative",
                                            },
                                            iconHighlight: {
                                                position: "absolute",
                                                width: "24px",
                                                height: "28px",
                                                background: "#eee",
                                                borderRadius: "4px",
                                                top: "10px",
                                                left: "12px",
                                                display: "none",
                                            },
                                            input: {
                                                fontSize: "11px",
                                                color: "#333",
                                                width: "100%",
                                                borderRadius: "2px",
                                                border: "none",
                                                boxShadow: "inset 0 0 0 1px #dadada",
                                                height: "21px",
                                                textAlign: "center",
                                            },
                                            label: {
                                                textTransform: "uppercase",
                                                fontSize: "11px",
                                                lineHeight: "11px",
                                                color: "#969696",
                                                textAlign: "center",
                                                display: "block",
                                                marginTop: "12px",
                                            },
                                            svg: {
                                                fill: "#333",
                                                width: "24px",
                                                height: "24px",
                                                border: "1px transparent solid",
                                                borderRadius: "5px",
                                            },
                                        },
                                        disableAlpha: { alpha: { display: "none" } },
                                    },
                                    this.props,
                                    this.state,
                                ),
                                r = void 0;
                            return (
                                "hex" === this.state.view
                                    ? (r = d.createElement(
                                          "div",
                                          { style: t.fields, className: "flexbox-fix" },
                                          d.createElement(
                                              "div",
                                              { style: t.field },
                                              d.createElement(j, {
                                                  style: { input: t.input, label: t.label },
                                                  label: "hex",
                                                  value: this.props.hex,
                                                  onChange: this.handleChange,
                                              }),
                                          ),
                                      ))
                                    : "rgb" === this.state.view
                                      ? (r = d.createElement(
                                            "div",
                                            { style: t.fields, className: "flexbox-fix" },
                                            d.createElement(
                                                "div",
                                                { style: t.field },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "r",
                                                    value: this.props.rgb.r,
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                            d.createElement(
                                                "div",
                                                { style: t.field },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "g",
                                                    value: this.props.rgb.g,
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                            d.createElement(
                                                "div",
                                                { style: t.field },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "b",
                                                    value: this.props.rgb.b,
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                            d.createElement(
                                                "div",
                                                { style: t.alpha },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "a",
                                                    value: this.props.rgb.a,
                                                    arrowOffset: 0.01,
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                        ))
                                      : "hsl" === this.state.view &&
                                        (r = d.createElement(
                                            "div",
                                            { style: t.fields, className: "flexbox-fix" },
                                            d.createElement(
                                                "div",
                                                { style: t.field },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "h",
                                                    value: Math.round(this.props.hsl.h),
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                            d.createElement(
                                                "div",
                                                { style: t.field },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "s",
                                                    value: Math.round(100 * this.props.hsl.s) + "%",
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                            d.createElement(
                                                "div",
                                                { style: t.field },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "l",
                                                    value: Math.round(100 * this.props.hsl.l) + "%",
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                            d.createElement(
                                                "div",
                                                { style: t.alpha },
                                                d.createElement(j, {
                                                    style: { input: t.input, label: t.label },
                                                    label: "a",
                                                    value: this.props.hsl.a,
                                                    arrowOffset: 0.01,
                                                    onChange: this.handleChange,
                                                }),
                                            ),
                                        )),
                                d.createElement(
                                    "div",
                                    { style: t.wrap, className: "flexbox-fix" },
                                    r,
                                    d.createElement(
                                        "div",
                                        { style: t.toggle },
                                        d.createElement(
                                            "div",
                                            {
                                                style: t.icon,
                                                onClick: this.toggleViews,
                                                ref: function (t) {
                                                    return (e.icon = t);
                                                },
                                            },
                                            d.createElement(n_.default, {
                                                style: t.svg,
                                                onMouseOver: this.showHighlight,
                                                onMouseEnter: this.showHighlight,
                                                onMouseOut: this.hideHighlight,
                                            }),
                                        ),
                                    ),
                                )
                            );
                        },
                    },
                ],
                [
                    {
                        key: "getDerivedStateFromProps",
                        value: function (e, t) {
                            return 1 !== e.hsl.a && "hex" === t.view ? { view: "rgb" } : null;
                        },
                    },
                ],
            ),
            t
        );
    })(d.Component);
nR.defaultProps = { view: "hex" };
let nB = function () {
        var e = (0, h.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    transform: "translate(-6px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                },
            },
        });
        return d.createElement("div", { style: e.picker });
    },
    nF = function () {
        var e = (0, h.default)({
            default: {
                picker: {
                    width: "12px",
                    height: "12px",
                    borderRadius: "6px",
                    boxShadow: "inset 0 0 0 1px #fff",
                    transform: "translate(-6px, -6px)",
                },
            },
        });
        return d.createElement("div", { style: e.picker });
    };
var nT = function (e) {
    var t = e.width,
        r = e.onChange,
        n = e.disableAlpha,
        a = e.rgb,
        o = e.hsl,
        i = e.hsv,
        l = e.hex,
        s = e.renderers,
        p = e.styles,
        c = e.className,
        u = e.defaultView,
        f = (0, h.default)(
            tm(
                {
                    default: {
                        picker: {
                            width: t,
                            background: "#fff",
                            borderRadius: "2px",
                            boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                            boxSizing: "initial",
                            fontFamily: "Menlo",
                        },
                        saturation: {
                            width: "100%",
                            paddingBottom: "55%",
                            position: "relative",
                            borderRadius: "2px 2px 0 0",
                            overflow: "hidden",
                        },
                        Saturation: { radius: "2px 2px 0 0" },
                        body: { padding: "16px 16px 12px" },
                        controls: { display: "flex" },
                        color: { width: "32px" },
                        swatch: {
                            marginTop: "6px",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            position: "relative",
                            overflow: "hidden",
                        },
                        active: {
                            absolute: "0px 0px 0px 0px",
                            borderRadius: "8px",
                            boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                            background: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", " + a.a + ")",
                            zIndex: "2",
                        },
                        toggles: { flex: "1" },
                        hue: { height: "10px", position: "relative", marginBottom: "8px" },
                        Hue: { radius: "2px" },
                        alpha: { height: "10px", position: "relative" },
                        Alpha: { radius: "2px" },
                    },
                    disableAlpha: {
                        color: { width: "22px" },
                        alpha: { display: "none" },
                        hue: { marginBottom: "0px" },
                        swatch: { width: "10px", height: "10px", marginTop: "0px" },
                    },
                },
                void 0 === p ? {} : p,
            ),
            { disableAlpha: n },
        );
    return d.createElement(
        "div",
        { style: f.picker, className: "chrome-picker " + (void 0 === c ? "" : c) },
        d.createElement(
            "div",
            { style: f.saturation },
            d.createElement(tM, { style: f.Saturation, hsl: o, hsv: i, pointer: nF, onChange: r }),
        ),
        d.createElement(
            "div",
            { style: f.body },
            d.createElement(
                "div",
                { style: f.controls, className: "flexbox-fix" },
                d.createElement(
                    "div",
                    { style: f.color },
                    d.createElement(
                        "div",
                        { style: f.swatch },
                        d.createElement("div", { style: f.active }),
                        d.createElement(m, { renderers: s }),
                    ),
                ),
                d.createElement(
                    "div",
                    { style: f.toggles },
                    d.createElement(
                        "div",
                        { style: f.hue },
                        d.createElement(T, { style: f.Hue, hsl: o, pointer: nB, onChange: r }),
                    ),
                    d.createElement(
                        "div",
                        { style: f.alpha },
                        d.createElement(k, { style: f.Alpha, rgb: a, hsl: o, pointer: nB, renderers: s, onChange: r }),
                    ),
                ),
            ),
            d.createElement(nR, { rgb: a, hsl: o, hex: l, view: u, onChange: r, disableAlpha: n }),
        ),
    );
};
(nT.propTypes = {
    width: z().oneOfType([z().string, z().number]),
    disableAlpha: z().bool,
    styles: z().object,
    defaultView: z().oneOf(["hex", "rgb", "hsl"]),
}),
    (nT.defaultProps = { width: 225, disableAlpha: !1, styles: {} }),
    t2(nT);
let nA = function (e) {
        var t = e.color,
            r = e.onClick,
            n = e.onSwatchHover,
            a = e.active,
            o = (0, h.default)(
                {
                    default: {
                        color: {
                            background: t,
                            width: "15px",
                            height: "15px",
                            float: "left",
                            marginRight: "5px",
                            marginBottom: "5px",
                            position: "relative",
                            cursor: "pointer",
                        },
                        dot: { absolute: "5px 5px 5px 5px", background: tJ(t), borderRadius: "50%", opacity: "0" },
                    },
                    active: { dot: { opacity: "1" } },
                    "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, dot: { background: "#000" } },
                    transparent: { dot: { background: "#000" } },
                },
                { active: a, "color-#FFFFFF": "#FFFFFF" === t, transparent: "transparent" === t },
            );
        return d.createElement(
            t6,
            {
                style: o.color,
                color: t,
                onClick: void 0 === r ? function () {} : r,
                onHover: n,
                focusStyle: { boxShadow: "0 0 4px " + t },
            },
            d.createElement("div", { style: o.dot }),
        );
    },
    nz = function (e) {
        var t = e.hex,
            r = e.rgb,
            n = e.onChange,
            a = (0, h.default)({
                default: {
                    fields: { display: "flex", paddingBottom: "6px", paddingRight: "5px", position: "relative" },
                    active: {
                        position: "absolute",
                        top: "6px",
                        left: "5px",
                        height: "9px",
                        width: "9px",
                        background: t,
                    },
                    HEXwrap: { flex: "6", position: "relative" },
                    HEXinput: {
                        width: "80%",
                        padding: "0px",
                        paddingLeft: "20%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px",
                    },
                    HEXlabel: { display: "none" },
                    RGBwrap: { flex: "3", position: "relative" },
                    RGBinput: {
                        width: "70%",
                        padding: "0px",
                        paddingLeft: "30%",
                        border: "none",
                        outline: "none",
                        background: "none",
                        fontSize: "12px",
                        color: "#333",
                        height: "16px",
                    },
                    RGBlabel: {
                        position: "absolute",
                        top: "3px",
                        left: "0px",
                        lineHeight: "16px",
                        textTransform: "uppercase",
                        fontSize: "12px",
                        color: "#999",
                    },
                },
            }),
            o = function (e, t) {
                e.r || e.g || e.b
                    ? n({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, source: "rgb" }, t)
                    : n({ hex: e.hex, source: "hex" }, t);
            };
        return d.createElement(
            "div",
            { style: a.fields, className: "flexbox-fix" },
            d.createElement("div", { style: a.active }),
            d.createElement(j, {
                style: { wrap: a.HEXwrap, input: a.HEXinput, label: a.HEXlabel },
                label: "hex",
                value: t,
                onChange: o,
            }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "r",
                value: r.r,
                onChange: o,
            }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "g",
                value: r.g,
                onChange: o,
            }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "b",
                value: r.b,
                onChange: o,
            }),
        );
    };
var nP = function (e) {
    var t = e.onChange,
        r = e.onSwatchHover,
        n = e.colors,
        a = e.hex,
        o = e.rgb,
        i = e.styles,
        l = void 0 === i ? {} : i,
        s = e.className,
        p = (0, h.default)(
            tm(
                {
                    default: {
                        Compact: { background: "#f6f6f6", radius: "4px" },
                        compact: { paddingTop: "5px", paddingLeft: "5px", boxSizing: "initial", width: "240px" },
                        clear: { clear: "both" },
                    },
                },
                l,
            ),
        ),
        c = function (e, r) {
            e.hex ? tZ(e.hex) && t({ hex: e.hex, source: "hex" }, r) : t(e, r);
        };
    return d.createElement(
        tw,
        { style: p.Compact, styles: l },
        d.createElement(
            "div",
            { style: p.compact, className: "compact-picker " + (void 0 === s ? "" : s) },
            d.createElement(
                "div",
                null,
                nr(n, function (e) {
                    return d.createElement(nA, {
                        key: e,
                        color: e,
                        active: e.toLowerCase() === a,
                        onClick: c,
                        onSwatchHover: r,
                    });
                }),
                d.createElement("div", { style: p.clear }),
            ),
            d.createElement(nz, { hex: a, rgb: o, onChange: c }),
        ),
    );
};
(nP.propTypes = { colors: z().arrayOf(z().string), styles: z().object }),
    (nP.defaultProps = {
        colors: [
            "#4D4D4D",
            "#999999",
            "#FFFFFF",
            "#F44E3B",
            "#FE9200",
            "#FCDC00",
            "#DBDF00",
            "#A4DD00",
            "#68CCCA",
            "#73D8FF",
            "#AEA1FF",
            "#FDA1FF",
            "#333333",
            "#808080",
            "#cccccc",
            "#D33115",
            "#E27300",
            "#FCC400",
            "#B0BC00",
            "#68BC00",
            "#16A5A5",
            "#009CE0",
            "#7B64FF",
            "#FA28FF",
            "#000000",
            "#666666",
            "#B3B3B3",
            "#9F0500",
            "#C45100",
            "#FB9E00",
            "#808900",
            "#194D33",
            "#0C797D",
            "#0062B1",
            "#653294",
            "#AB149E",
        ],
        styles: {},
    }),
    t2(nP);
let nD = (0, h.handleHover)(function (e) {
    var t = e.hover,
        r = e.color,
        n = e.onClick,
        a = e.onSwatchHover,
        o = { position: "relative", zIndex: "2", outline: "2px solid #fff", boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)" },
        i = (0, h.default)(
            { default: { swatch: { width: "25px", height: "25px", fontSize: "0" } }, hover: { swatch: o } },
            { hover: t },
        );
    return d.createElement(
        "div",
        { style: i.swatch },
        d.createElement(t6, { color: r, onClick: n, onHover: a, focusStyle: o }),
    );
});
var nL = function (e) {
    var t = e.width,
        r = e.colors,
        n = e.onChange,
        a = e.onSwatchHover,
        o = e.triangle,
        i = e.styles,
        l = e.className,
        s = (0, h.default)(
            tm(
                {
                    default: {
                        card: {
                            width: t,
                            background: "#fff",
                            border: "1px solid rgba(0,0,0,0.2)",
                            boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                            borderRadius: "4px",
                            position: "relative",
                            padding: "5px",
                            display: "flex",
                            flexWrap: "wrap",
                        },
                        triangle: { position: "absolute", border: "7px solid transparent", borderBottomColor: "#fff" },
                        triangleShadow: {
                            position: "absolute",
                            border: "8px solid transparent",
                            borderBottomColor: "rgba(0,0,0,0.15)",
                        },
                    },
                    "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
                    "top-left-triangle": {
                        triangle: { top: "-14px", left: "10px" },
                        triangleShadow: { top: "-16px", left: "9px" },
                    },
                    "top-right-triangle": {
                        triangle: { top: "-14px", right: "10px" },
                        triangleShadow: { top: "-16px", right: "9px" },
                    },
                    "bottom-left-triangle": {
                        triangle: { top: "35px", left: "10px", transform: "rotate(180deg)" },
                        triangleShadow: { top: "37px", left: "9px", transform: "rotate(180deg)" },
                    },
                    "bottom-right-triangle": {
                        triangle: { top: "35px", right: "10px", transform: "rotate(180deg)" },
                        triangleShadow: { top: "37px", right: "9px", transform: "rotate(180deg)" },
                    },
                },
                void 0 === i ? {} : i,
            ),
            {
                "hide-triangle": "hide" === o,
                "top-left-triangle": "top-left" === o,
                "top-right-triangle": "top-right" === o,
                "bottom-left-triangle": "bottom-left" === o,
                "bottom-right-triangle": "bottom-right" === o,
            },
        ),
        p = function (e, t) {
            return n({ hex: e, source: "hex" }, t);
        };
    return d.createElement(
        "div",
        { style: s.card, className: "github-picker " + (void 0 === l ? "" : l) },
        d.createElement("div", { style: s.triangleShadow }),
        d.createElement("div", { style: s.triangle }),
        nr(r, function (e) {
            return d.createElement(nD, { color: e, key: e, onClick: p, onSwatchHover: a });
        }),
    );
};
(nL.propTypes = {
    width: z().oneOfType([z().string, z().number]),
    colors: z().arrayOf(z().string),
    triangle: z().oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
    styles: z().object,
}),
    (nL.defaultProps = {
        width: 200,
        colors: [
            "#B80000",
            "#DB3E00",
            "#FCCB00",
            "#008B02",
            "#006B76",
            "#1273DE",
            "#004DCF",
            "#5300EB",
            "#EB9694",
            "#FAD0C3",
            "#FEF3BD",
            "#C1E1C5",
            "#BEDADC",
            "#C4DEF6",
            "#BED3F3",
            "#D4C4FB",
        ],
        triangle: "top-left",
        styles: {},
    }),
    t2(nL);
var nH =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    nM = function (e) {
        var t = e.width,
            r = e.height,
            n = e.onChange,
            a = e.hsl,
            o = e.direction,
            i = e.pointer,
            l = e.styles,
            s = e.className,
            p = (0, h.default)(
                tm(
                    { default: { picker: { position: "relative", width: t, height: r }, hue: { radius: "2px" } } },
                    void 0 === l ? {} : l,
                ),
            );
        return d.createElement(
            "div",
            { style: p.picker, className: "hue-picker " + (void 0 === s ? "" : s) },
            d.createElement(
                T,
                nH({}, p.hue, {
                    hsl: a,
                    pointer: i,
                    onChange: function (e) {
                        return n({ a: 1, h: e.h, l: 0.5, s: 1 });
                    },
                    direction: o,
                }),
            ),
        );
    };
(nM.propTypes = { styles: z().object }),
    (nM.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: function (e) {
            var t = e.direction,
                r = (0, h.default)(
                    {
                        default: {
                            picker: {
                                width: "18px",
                                height: "18px",
                                borderRadius: "50%",
                                transform: "translate(-9px, -1px)",
                                backgroundColor: "rgb(248, 248, 248)",
                                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                            },
                        },
                        vertical: { picker: { transform: "translate(-3px, -9px)" } },
                    },
                    { vertical: "vertical" === t },
                );
            return d.createElement("div", { style: r.picker });
        },
        styles: {},
    }),
    t2(nM),
    t2(function (e) {
        var t = e.onChange,
            r = e.hex,
            n = e.rgb,
            a = e.styles,
            o = void 0 === a ? {} : a,
            i = e.className,
            l = (0, h.default)(
                tm(
                    {
                        default: {
                            material: { width: "98px", height: "98px", padding: "16px", fontFamily: "Roboto" },
                            HEXwrap: { position: "relative" },
                            HEXinput: {
                                width: "100%",
                                marginTop: "12px",
                                fontSize: "15px",
                                color: "#333",
                                padding: "0px",
                                border: "0px",
                                borderBottom: "2px solid " + r,
                                outline: "none",
                                height: "30px",
                            },
                            HEXlabel: {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                fontSize: "11px",
                                color: "#999999",
                                textTransform: "capitalize",
                            },
                            Hex: { style: {} },
                            RGBwrap: { position: "relative" },
                            RGBinput: {
                                width: "100%",
                                marginTop: "12px",
                                fontSize: "15px",
                                color: "#333",
                                padding: "0px",
                                border: "0px",
                                borderBottom: "1px solid #eee",
                                outline: "none",
                                height: "30px",
                            },
                            RGBlabel: {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                fontSize: "11px",
                                color: "#999999",
                                textTransform: "capitalize",
                            },
                            split: { display: "flex", marginRight: "-10px", paddingTop: "11px" },
                            third: { flex: "1", paddingRight: "10px" },
                        },
                    },
                    o,
                ),
            ),
            s = function (e, r) {
                e.hex
                    ? tZ(e.hex) && t({ hex: e.hex, source: "hex" }, r)
                    : (e.r || e.g || e.b) && t({ r: e.r || n.r, g: e.g || n.g, b: e.b || n.b, source: "rgb" }, r);
            };
        return d.createElement(
            tw,
            { styles: o },
            d.createElement(
                "div",
                { style: l.material, className: "material-picker " + (void 0 === i ? "" : i) },
                d.createElement(j, {
                    style: { wrap: l.HEXwrap, input: l.HEXinput, label: l.HEXlabel },
                    label: "hex",
                    value: r,
                    onChange: s,
                }),
                d.createElement(
                    "div",
                    { style: l.split, className: "flexbox-fix" },
                    d.createElement(
                        "div",
                        { style: l.third },
                        d.createElement(j, {
                            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
                            label: "r",
                            value: n.r,
                            onChange: s,
                        }),
                    ),
                    d.createElement(
                        "div",
                        { style: l.third },
                        d.createElement(j, {
                            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
                            label: "g",
                            value: n.g,
                            onChange: s,
                        }),
                    ),
                    d.createElement(
                        "div",
                        { style: l.third },
                        d.createElement(j, {
                            style: { wrap: l.RGBwrap, input: l.RGBinput, label: l.RGBlabel },
                            label: "b",
                            value: n.b,
                            onChange: s,
                        }),
                    ),
                ),
            ),
        );
    });
let nN = function (e) {
        var t = e.onChange,
            r = e.rgb,
            n = e.hsv,
            a = e.hex,
            o = (0, h.default)({
                default: {
                    fields: { paddingTop: "5px", paddingBottom: "9px", width: "80px", position: "relative" },
                    divider: { height: "5px" },
                    RGBwrap: { position: "relative" },
                    RGBinput: {
                        marginLeft: "40%",
                        width: "40%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "5px",
                        fontSize: "13px",
                        paddingLeft: "3px",
                        marginRight: "10px",
                    },
                    RGBlabel: {
                        left: "0px",
                        top: "0px",
                        width: "34px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px",
                        position: "absolute",
                    },
                    HEXwrap: { position: "relative" },
                    HEXinput: {
                        marginLeft: "20%",
                        width: "80%",
                        height: "18px",
                        border: "1px solid #888888",
                        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                        marginBottom: "6px",
                        fontSize: "13px",
                        paddingLeft: "3px",
                    },
                    HEXlabel: {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "14px",
                        textTransform: "uppercase",
                        fontSize: "13px",
                        height: "18px",
                        lineHeight: "22px",
                    },
                    fieldSymbols: { position: "absolute", top: "5px", right: "-7px", fontSize: "13px" },
                    symbol: { height: "20px", lineHeight: "22px", paddingBottom: "7px" },
                },
            }),
            i = function (e, a) {
                e["#"]
                    ? tZ(e["#"]) && t({ hex: e["#"], source: "hex" }, a)
                    : e.r || e.g || e.b
                      ? t({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, source: "rgb" }, a)
                      : (e.h || e.s || e.v) && t({ h: e.h || n.h, s: e.s || n.s, v: e.v || n.v, source: "hsv" }, a);
            };
        return d.createElement(
            "div",
            { style: o.fields },
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "h",
                value: Math.round(n.h),
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "s",
                value: Math.round(100 * n.s),
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "v",
                value: Math.round(100 * n.v),
                onChange: i,
            }),
            d.createElement("div", { style: o.divider }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "r",
                value: r.r,
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "g",
                value: r.g,
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "b",
                value: r.b,
                onChange: i,
            }),
            d.createElement("div", { style: o.divider }),
            d.createElement(j, {
                style: { wrap: o.HEXwrap, input: o.HEXinput, label: o.HEXlabel },
                label: "#",
                value: a.replace("#", ""),
                onChange: i,
            }),
            d.createElement(
                "div",
                { style: o.fieldSymbols },
                d.createElement("div", { style: o.symbol }, "\xb0"),
                d.createElement("div", { style: o.symbol }, "%"),
                d.createElement("div", { style: o.symbol }, "%"),
            ),
        );
    },
    nG = function (e) {
        var t = e.hsl,
            r = (0, h.default)(
                {
                    default: {
                        picker: {
                            width: "12px",
                            height: "12px",
                            borderRadius: "6px",
                            boxShadow: "inset 0 0 0 1px #fff",
                            transform: "translate(-6px, -6px)",
                        },
                    },
                    "black-outline": { picker: { boxShadow: "inset 0 0 0 1px #000" } },
                },
                { "black-outline": t.l > 0.5 },
            );
        return d.createElement("div", { style: r.picker });
    },
    nU = function () {
        var e = (0, h.default)({
            default: {
                triangle: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "4px 0 4px 6px",
                    borderColor: "transparent transparent transparent #fff",
                    position: "absolute",
                    top: "1px",
                    left: "1px",
                },
                triangleBorder: {
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "5px 0 5px 8px",
                    borderColor: "transparent transparent transparent #555",
                },
                left: { Extend: "triangleBorder", transform: "translate(-13px, -4px)" },
                leftInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
                right: { Extend: "triangleBorder", transform: "translate(20px, -14px) rotate(180deg)" },
                rightInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
            },
        });
        return d.createElement(
            "div",
            { style: e.pointer },
            d.createElement("div", { style: e.left }, d.createElement("div", { style: e.leftInside })),
            d.createElement("div", { style: e.right }, d.createElement("div", { style: e.rightInside })),
        );
    },
    nX = function (e) {
        var t = e.onClick,
            r = e.label,
            n = e.children,
            a = e.active,
            o = (0, h.default)(
                {
                    default: {
                        button: {
                            backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                            border: "1px solid #878787",
                            borderRadius: "2px",
                            height: "20px",
                            boxShadow: "0 1px 0 0 #EAEAEA",
                            fontSize: "14px",
                            color: "#000",
                            lineHeight: "20px",
                            textAlign: "center",
                            marginBottom: "10px",
                            cursor: "pointer",
                        },
                    },
                    active: { button: { boxShadow: "0 0 0 1px #878787" } },
                },
                { active: a },
            );
        return d.createElement("div", { style: o.button, onClick: t }, r || n);
    },
    nW = function (e) {
        var t = e.rgb,
            r = e.currentColor,
            n = (0, h.default)({
                default: {
                    swatches: {
                        border: "1px solid #B3B3B3",
                        borderBottom: "1px solid #F0F0F0",
                        marginBottom: "2px",
                        marginTop: "1px",
                    },
                    new: {
                        height: "34px",
                        background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000",
                    },
                    current: {
                        height: "34px",
                        background: r,
                        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000",
                    },
                    label: { fontSize: "14px", color: "#000", textAlign: "center" },
                },
            });
        return d.createElement(
            "div",
            null,
            d.createElement("div", { style: n.label }, "new"),
            d.createElement(
                "div",
                { style: n.swatches },
                d.createElement("div", { style: n.new }),
                d.createElement("div", { style: n.current }),
            ),
            d.createElement("div", { style: n.label }, "current"),
        );
    };
var nV = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    nI = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t(e) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            var r = (function (e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (r.state = { currentColor: e.hex }), r;
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            nV(t, [
                {
                    key: "render",
                    value: function () {
                        var e = this.props,
                            t = e.styles,
                            r = e.className,
                            n = (0, h.default)(
                                tm(
                                    {
                                        default: {
                                            picker: {
                                                background: "#DCDCDC",
                                                borderRadius: "4px",
                                                boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                                                boxSizing: "initial",
                                                width: "513px",
                                            },
                                            head: {
                                                backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                                                borderBottom: "1px solid #B1B1B1",
                                                boxShadow:
                                                    "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                                                height: "23px",
                                                lineHeight: "24px",
                                                borderRadius: "4px 4px 0 0",
                                                fontSize: "13px",
                                                color: "#4D4D4D",
                                                textAlign: "center",
                                            },
                                            body: { padding: "15px 15px 0", display: "flex" },
                                            saturation: {
                                                width: "256px",
                                                height: "256px",
                                                position: "relative",
                                                border: "2px solid #B3B3B3",
                                                borderBottom: "2px solid #F0F0F0",
                                                overflow: "hidden",
                                            },
                                            hue: {
                                                position: "relative",
                                                height: "256px",
                                                width: "19px",
                                                marginLeft: "10px",
                                                border: "2px solid #B3B3B3",
                                                borderBottom: "2px solid #F0F0F0",
                                            },
                                            controls: { width: "180px", marginLeft: "10px" },
                                            top: { display: "flex" },
                                            previews: { width: "60px" },
                                            actions: { flex: "1", marginLeft: "20px" },
                                        },
                                    },
                                    void 0 === t ? {} : t,
                                ),
                            );
                        return d.createElement(
                            "div",
                            { style: n.picker, className: "photoshop-picker " + (void 0 === r ? "" : r) },
                            d.createElement("div", { style: n.head }, this.props.header),
                            d.createElement(
                                "div",
                                { style: n.body, className: "flexbox-fix" },
                                d.createElement(
                                    "div",
                                    { style: n.saturation },
                                    d.createElement(tM, {
                                        hsl: this.props.hsl,
                                        hsv: this.props.hsv,
                                        pointer: nG,
                                        onChange: this.props.onChange,
                                    }),
                                ),
                                d.createElement(
                                    "div",
                                    { style: n.hue },
                                    d.createElement(T, {
                                        direction: "vertical",
                                        hsl: this.props.hsl,
                                        pointer: nU,
                                        onChange: this.props.onChange,
                                    }),
                                ),
                                d.createElement(
                                    "div",
                                    { style: n.controls },
                                    d.createElement(
                                        "div",
                                        { style: n.top, className: "flexbox-fix" },
                                        d.createElement(
                                            "div",
                                            { style: n.previews },
                                            d.createElement(nW, {
                                                rgb: this.props.rgb,
                                                currentColor: this.state.currentColor,
                                            }),
                                        ),
                                        d.createElement(
                                            "div",
                                            { style: n.actions },
                                            d.createElement(nX, {
                                                label: "OK",
                                                onClick: this.props.onAccept,
                                                active: !0,
                                            }),
                                            d.createElement(nX, { label: "Cancel", onClick: this.props.onCancel }),
                                            d.createElement(nN, {
                                                onChange: this.props.onChange,
                                                rgb: this.props.rgb,
                                                hsv: this.props.hsv,
                                                hex: this.props.hex,
                                            }),
                                        ),
                                    ),
                                ),
                            ),
                        );
                    },
                },
            ]),
            t
        );
    })(d.Component);
(nI.propTypes = { header: z().string, styles: z().object }),
    (nI.defaultProps = { header: "Color Picker", styles: {} }),
    t2(nI);
let nY = function (e) {
    var t = e.onChange,
        r = e.rgb,
        n = e.hsl,
        a = e.hex,
        o = e.disableAlpha,
        i = (0, h.default)(
            {
                default: {
                    fields: { display: "flex", paddingTop: "4px" },
                    single: { flex: "1", paddingLeft: "6px" },
                    alpha: { flex: "1", paddingLeft: "6px" },
                    double: { flex: "2" },
                    input: {
                        width: "80%",
                        padding: "4px 10% 3px",
                        border: "none",
                        boxShadow: "inset 0 0 0 1px #ccc",
                        fontSize: "11px",
                    },
                    label: {
                        display: "block",
                        textAlign: "center",
                        fontSize: "11px",
                        color: "#222",
                        paddingTop: "3px",
                        paddingBottom: "4px",
                        textTransform: "capitalize",
                    },
                },
                disableAlpha: { alpha: { display: "none" } },
            },
            { disableAlpha: o },
        ),
        l = function (e, a) {
            e.hex
                ? tZ(e.hex) && t({ hex: e.hex, source: "hex" }, a)
                : e.r || e.g || e.b
                  ? t({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, a: r.a, source: "rgb" }, a)
                  : e.a &&
                    (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                    (e.a /= 100),
                    t({ h: n.h, s: n.s, l: n.l, a: e.a, source: "rgb" }, a));
        };
    return d.createElement(
        "div",
        { style: i.fields, className: "flexbox-fix" },
        d.createElement(
            "div",
            { style: i.double },
            d.createElement(j, {
                style: { input: i.input, label: i.label },
                label: "hex",
                value: a.replace("#", ""),
                onChange: l,
            }),
        ),
        d.createElement(
            "div",
            { style: i.single },
            d.createElement(j, {
                style: { input: i.input, label: i.label },
                label: "r",
                value: r.r,
                onChange: l,
                dragLabel: "true",
                dragMax: "255",
            }),
        ),
        d.createElement(
            "div",
            { style: i.single },
            d.createElement(j, {
                style: { input: i.input, label: i.label },
                label: "g",
                value: r.g,
                onChange: l,
                dragLabel: "true",
                dragMax: "255",
            }),
        ),
        d.createElement(
            "div",
            { style: i.single },
            d.createElement(j, {
                style: { input: i.input, label: i.label },
                label: "b",
                value: r.b,
                onChange: l,
                dragLabel: "true",
                dragMax: "255",
            }),
        ),
        d.createElement(
            "div",
            { style: i.alpha },
            d.createElement(j, {
                style: { input: i.input, label: i.label },
                label: "a",
                value: Math.round(100 * r.a),
                onChange: l,
                dragLabel: "true",
                dragMax: "100",
            }),
        ),
    );
};
var n$ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    nK = function (e) {
        var t = e.colors,
            r = e.onClick,
            n = void 0 === r ? function () {} : r,
            a = e.onSwatchHover,
            o = (0, h.default)(
                {
                    default: {
                        colors: {
                            margin: "0 -10px",
                            padding: "10px 0 0 10px",
                            borderTop: "1px solid #eee",
                            display: "flex",
                            flexWrap: "wrap",
                            position: "relative",
                        },
                        swatchWrap: { width: "16px", height: "16px", margin: "0 10px 10px 0" },
                        swatch: { borderRadius: "3px", boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)" },
                    },
                    "no-presets": { colors: { display: "none" } },
                },
                { "no-presets": !t || !t.length },
            ),
            i = function (e, t) {
                n({ hex: e, source: "hex" }, t);
            };
        return d.createElement(
            "div",
            { style: o.colors, className: "flexbox-fix" },
            t.map(function (e) {
                var t = "string" == typeof e ? { color: e } : e,
                    r = "" + t.color + (t.title || "");
                return d.createElement(
                    "div",
                    { key: r, style: o.swatchWrap },
                    d.createElement(
                        t6,
                        n$({}, t, {
                            style: o.swatch,
                            onClick: i,
                            onHover: a,
                            focusStyle: { boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color },
                        }),
                    ),
                );
            }),
        );
    };
nK.propTypes = {
    colors: z().arrayOf(z().oneOfType([z().string, z().shape({ color: z().string, title: z().string })])).isRequired,
};
var nq =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    nZ = function (e) {
        var t = e.width,
            r = e.rgb,
            n = e.hex,
            a = e.hsv,
            o = e.hsl,
            i = e.onChange,
            l = e.onSwatchHover,
            s = e.disableAlpha,
            p = e.presetColors,
            c = e.renderers,
            u = e.styles,
            f = void 0 === u ? {} : u,
            b = e.className,
            g = (0, h.default)(
                tm(
                    {
                        default: nq(
                            {
                                picker: {
                                    width: t,
                                    padding: "10px 10px 0",
                                    boxSizing: "initial",
                                    background: "#fff",
                                    borderRadius: "4px",
                                    boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",
                                },
                                saturation: {
                                    width: "100%",
                                    paddingBottom: "75%",
                                    position: "relative",
                                    overflow: "hidden",
                                },
                                Saturation: {
                                    radius: "3px",
                                    shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                                },
                                controls: { display: "flex" },
                                sliders: { padding: "4px 0", flex: "1" },
                                color: {
                                    width: "24px",
                                    height: "24px",
                                    position: "relative",
                                    marginTop: "4px",
                                    marginLeft: "4px",
                                    borderRadius: "3px",
                                },
                                activeColor: {
                                    absolute: "0px 0px 0px 0px",
                                    borderRadius: "2px",
                                    background: "rgba(" + r.r + "," + r.g + "," + r.b + "," + r.a + ")",
                                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                                },
                                hue: { position: "relative", height: "10px", overflow: "hidden" },
                                Hue: {
                                    radius: "2px",
                                    shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                                },
                                alpha: { position: "relative", height: "10px", marginTop: "4px", overflow: "hidden" },
                                Alpha: {
                                    radius: "2px",
                                    shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                                },
                            },
                            f,
                        ),
                        disableAlpha: {
                            color: { height: "10px" },
                            hue: { height: "10px" },
                            alpha: { display: "none" },
                        },
                    },
                    f,
                ),
                { disableAlpha: s },
            );
        return d.createElement(
            "div",
            { style: g.picker, className: "sketch-picker " + (void 0 === b ? "" : b) },
            d.createElement(
                "div",
                { style: g.saturation },
                d.createElement(tM, { style: g.Saturation, hsl: o, hsv: a, onChange: i }),
            ),
            d.createElement(
                "div",
                { style: g.controls, className: "flexbox-fix" },
                d.createElement(
                    "div",
                    { style: g.sliders },
                    d.createElement("div", { style: g.hue }, d.createElement(T, { style: g.Hue, hsl: o, onChange: i })),
                    d.createElement(
                        "div",
                        { style: g.alpha },
                        d.createElement(k, { style: g.Alpha, rgb: r, hsl: o, renderers: c, onChange: i }),
                    ),
                ),
                d.createElement(
                    "div",
                    { style: g.color },
                    d.createElement(m, null),
                    d.createElement("div", { style: g.activeColor }),
                ),
            ),
            d.createElement(nY, { rgb: r, hsl: o, hex: n, onChange: i, disableAlpha: s }),
            d.createElement(nK, { colors: p, onClick: i, onSwatchHover: l }),
        );
    };
(nZ.propTypes = { disableAlpha: z().bool, width: z().oneOfType([z().string, z().number]), styles: z().object }),
    (nZ.defaultProps = {
        disableAlpha: !1,
        width: 200,
        styles: {},
        presetColors: [
            "#D0021B",
            "#F5A623",
            "#F8E71C",
            "#8B572A",
            "#7ED321",
            "#417505",
            "#BD10E0",
            "#9013FE",
            "#4A90E2",
            "#50E3C2",
            "#B8E986",
            "#000000",
            "#4A4A4A",
            "#9B9B9B",
            "#FFFFFF",
        ],
    }),
    t2(nZ);
let nJ = function (e) {
        var t = e.hsl,
            r = e.offset,
            n = e.onClick,
            a = void 0 === n ? function () {} : n,
            o = e.active,
            i = e.first,
            l = e.last,
            s = (0, h.default)(
                {
                    default: {
                        swatch: {
                            height: "12px",
                            background: "hsl(" + t.h + ", 50%, " + 100 * r + "%)",
                            cursor: "pointer",
                        },
                    },
                    first: { swatch: { borderRadius: "2px 0 0 2px" } },
                    last: { swatch: { borderRadius: "0 2px 2px 0" } },
                    active: { swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" } },
                },
                { active: o, first: i, last: l },
            );
        return d.createElement("div", {
            style: s.swatch,
            onClick: function (e) {
                return a({ h: t.h, s: 0.5, l: r, source: "hsl" }, e);
            },
        });
    },
    nQ = function (e) {
        var t = e.onClick,
            r = e.hsl,
            n = (0, h.default)({
                default: {
                    swatches: { marginTop: "20px" },
                    swatch: { boxSizing: "border-box", width: "20%", paddingRight: "1px", float: "left" },
                    clear: { clear: "both" },
                },
            });
        return d.createElement(
            "div",
            { style: n.swatches },
            d.createElement(
                "div",
                { style: n.swatch },
                d.createElement(nJ, {
                    hsl: r,
                    offset: ".80",
                    active: 0.1 > Math.abs(r.l - 0.8) && 0.1 > Math.abs(r.s - 0.5),
                    onClick: t,
                    first: !0,
                }),
            ),
            d.createElement(
                "div",
                { style: n.swatch },
                d.createElement(nJ, {
                    hsl: r,
                    offset: ".65",
                    active: 0.1 > Math.abs(r.l - 0.65) && 0.1 > Math.abs(r.s - 0.5),
                    onClick: t,
                }),
            ),
            d.createElement(
                "div",
                { style: n.swatch },
                d.createElement(nJ, {
                    hsl: r,
                    offset: ".50",
                    active: 0.1 > Math.abs(r.l - 0.5) && 0.1 > Math.abs(r.s - 0.5),
                    onClick: t,
                }),
            ),
            d.createElement(
                "div",
                { style: n.swatch },
                d.createElement(nJ, {
                    hsl: r,
                    offset: ".35",
                    active: 0.1 > Math.abs(r.l - 0.35) && 0.1 > Math.abs(r.s - 0.5),
                    onClick: t,
                }),
            ),
            d.createElement(
                "div",
                { style: n.swatch },
                d.createElement(nJ, {
                    hsl: r,
                    offset: ".20",
                    active: 0.1 > Math.abs(r.l - 0.2) && 0.1 > Math.abs(r.s - 0.5),
                    onClick: t,
                    last: !0,
                }),
            ),
            d.createElement("div", { style: n.clear }),
        );
    };
var n0 = function (e) {
    var t = e.hsl,
        r = e.onChange,
        n = e.pointer,
        a = e.styles,
        o = e.className,
        i = (0, h.default)(
            tm(
                { default: { hue: { height: "12px", position: "relative" }, Hue: { radius: "2px" } } },
                void 0 === a ? {} : a,
            ),
        );
    return d.createElement(
        "div",
        { style: i.wrap || {}, className: "slider-picker " + (void 0 === o ? "" : o) },
        d.createElement("div", { style: i.hue }, d.createElement(T, { style: i.Hue, hsl: t, pointer: n, onChange: r })),
        d.createElement("div", { style: i.swatches }, d.createElement(nQ, { hsl: t, onClick: r })),
    );
};
(n0.propTypes = { styles: z().object }),
    (n0.defaultProps = {
        pointer: function () {
            var e = (0, h.default)({
                default: {
                    picker: {
                        width: "14px",
                        height: "14px",
                        borderRadius: "6px",
                        transform: "translate(-7px, -1px)",
                        backgroundColor: "rgb(248, 248, 248)",
                        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
                    },
                },
            });
            return d.createElement("div", { style: e.picker });
        },
        styles: {},
    }),
    t2(n0);
var n1 = r(891751);
let n2 = function (e) {
        var t = e.color,
            r = e.onClick,
            n = e.onSwatchHover,
            a = e.first,
            o = e.last,
            i = e.active,
            l = (0, h.default)(
                {
                    default: {
                        color: { width: "40px", height: "24px", cursor: "pointer", background: t, marginBottom: "1px" },
                        check: { color: tJ(t), marginLeft: "8px", display: "none" },
                    },
                    first: { color: { overflow: "hidden", borderRadius: "2px 2px 0 0" } },
                    last: { color: { overflow: "hidden", borderRadius: "0 0 2px 2px" } },
                    active: { check: { display: "block" } },
                    "color-#FFFFFF": { color: { boxShadow: "inset 0 0 0 1px #ddd" }, check: { color: "#333" } },
                    transparent: { check: { color: "#333" } },
                },
                { first: a, last: o, active: i, "color-#FFFFFF": "#FFFFFF" === t, transparent: "transparent" === t },
            );
        return d.createElement(
            t6,
            {
                color: t,
                style: l.color,
                onClick: void 0 === r ? function () {} : r,
                onHover: n,
                focusStyle: { boxShadow: "0 0 4px " + t },
            },
            d.createElement("div", { style: l.check }, d.createElement(n1.default, null)),
        );
    },
    n5 = function (e) {
        var t = e.onClick,
            r = e.onSwatchHover,
            n = e.group,
            a = e.active,
            o = (0, h.default)({
                default: { group: { paddingBottom: "10px", width: "40px", float: "left", marginRight: "10px" } },
            });
        return d.createElement(
            "div",
            { style: o.group },
            nr(n, function (e, o) {
                return d.createElement(n2, {
                    key: e,
                    color: e,
                    active: e.toLowerCase() === a,
                    first: 0 === o,
                    last: o === n.length - 1,
                    onClick: t,
                    onSwatchHover: r,
                });
            }),
        );
    };
var n4 = function (e) {
    var t = e.width,
        r = e.height,
        n = e.onChange,
        a = e.onSwatchHover,
        o = e.colors,
        i = e.hex,
        l = e.styles,
        s = e.className,
        p = (0, h.default)(
            tm(
                {
                    default: {
                        picker: { width: t, height: r },
                        overflow: { height: r, overflowY: "scroll" },
                        body: { padding: "16px 0 6px 16px" },
                        clear: { clear: "both" },
                    },
                },
                void 0 === l ? {} : l,
            ),
        ),
        c = function (e, t) {
            return n({ hex: e, source: "hex" }, t);
        };
    return d.createElement(
        "div",
        { style: p.picker, className: "swatches-picker " + (void 0 === s ? "" : s) },
        d.createElement(
            tw,
            null,
            d.createElement(
                "div",
                { style: p.overflow },
                d.createElement(
                    "div",
                    { style: p.body },
                    nr(o, function (e) {
                        return d.createElement(n5, {
                            key: e.toString(),
                            group: e,
                            active: i,
                            onClick: c,
                            onSwatchHover: a,
                        });
                    }),
                    d.createElement("div", { style: p.clear }),
                ),
            ),
        ),
    );
};
(n4.propTypes = {
    width: z().oneOfType([z().string, z().number]),
    height: z().oneOfType([z().string, z().number]),
    colors: z().arrayOf(z().arrayOf(z().string)),
    styles: z().object,
}),
    (n4.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [no["900"], no["700"], no["500"], no["300"], no["100"]],
            [ni["900"], ni["700"], ni["500"], ni["300"], ni["100"]],
            [nl["900"], nl["700"], nl["500"], nl["300"], nl["100"]],
            [ns["900"], ns["700"], ns["500"], ns["300"], ns["100"]],
            [np["900"], np["700"], np["500"], np["300"], np["100"]],
            [nc["900"], nc["700"], nc["500"], nc["300"], nc["100"]],
            [nu["900"], nu["700"], nu["500"], nu["300"], nu["100"]],
            [nf["900"], nf["700"], nf["500"], nf["300"], nf["100"]],
            [nd["900"], nd["700"], nd["500"], nd["300"], nd["100"]],
            ["#194D33", nh["700"], nh["500"], nh["300"], nh["100"]],
            [nb["900"], nb["700"], nb["500"], nb["300"], nb["100"]],
            [ng["900"], ng["700"], ng["500"], ng["300"], ng["100"]],
            [nv["900"], nv["700"], nv["500"], nv["300"], nv["100"]],
            [nx["900"], nx["700"], nx["500"], nx["300"], nx["100"]],
            [ny["900"], ny["700"], ny["500"], ny["300"], ny["100"]],
            [nm["900"], nm["700"], nm["500"], nm["300"], nm["100"]],
            [nw["900"], nw["700"], nw["500"], nw["300"], nw["100"]],
            [nE["900"], nE["700"], nE["500"], nE["300"], nE["100"]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
        ],
        styles: {},
    }),
    t2(n4);
var n3 = function (e) {
    var t = e.onChange,
        r = e.onSwatchHover,
        n = e.hex,
        a = e.colors,
        o = e.width,
        i = e.triangle,
        l = e.styles,
        s = e.className,
        p = (0, h.default)(
            tm(
                {
                    default: {
                        card: {
                            width: o,
                            background: "#fff",
                            border: "0 solid rgba(0,0,0,0.25)",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                            borderRadius: "4px",
                            position: "relative",
                        },
                        body: { padding: "15px 9px 9px 15px" },
                        label: { fontSize: "18px", color: "#fff" },
                        triangle: {
                            width: "0px",
                            height: "0px",
                            borderStyle: "solid",
                            borderWidth: "0 9px 10px 9px",
                            borderColor: "transparent transparent #fff transparent",
                            position: "absolute",
                        },
                        triangleShadow: {
                            width: "0px",
                            height: "0px",
                            borderStyle: "solid",
                            borderWidth: "0 9px 10px 9px",
                            borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
                            position: "absolute",
                        },
                        hash: {
                            background: "#F0F0F0",
                            height: "30px",
                            width: "30px",
                            borderRadius: "4px 0 0 4px",
                            float: "left",
                            color: "#98A1A4",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        input: {
                            width: "100px",
                            fontSize: "14px",
                            color: "#666",
                            border: "0px",
                            outline: "none",
                            height: "28px",
                            boxShadow: "inset 0 0 0 1px #F0F0F0",
                            boxSizing: "content-box",
                            borderRadius: "0 4px 4px 0",
                            float: "left",
                            paddingLeft: "8px",
                        },
                        swatch: {
                            width: "30px",
                            height: "30px",
                            float: "left",
                            borderRadius: "4px",
                            margin: "0 6px 6px 0",
                        },
                        clear: { clear: "both" },
                    },
                    "hide-triangle": { triangle: { display: "none" }, triangleShadow: { display: "none" } },
                    "top-left-triangle": {
                        triangle: { top: "-10px", left: "12px" },
                        triangleShadow: { top: "-11px", left: "12px" },
                    },
                    "top-right-triangle": {
                        triangle: { top: "-10px", right: "12px" },
                        triangleShadow: { top: "-11px", right: "12px" },
                    },
                },
                void 0 === l ? {} : l,
            ),
            {
                "hide-triangle": "hide" === i,
                "top-left-triangle": "top-left" === i,
                "top-right-triangle": "top-right" === i,
            },
        ),
        c = function (e, r) {
            tZ(e) && t({ hex: e, source: "hex" }, r);
        };
    return d.createElement(
        "div",
        { style: p.card, className: "twitter-picker " + (void 0 === s ? "" : s) },
        d.createElement("div", { style: p.triangleShadow }),
        d.createElement("div", { style: p.triangle }),
        d.createElement(
            "div",
            { style: p.body },
            nr(a, function (e, t) {
                return d.createElement(t6, {
                    key: t,
                    color: e,
                    hex: e,
                    style: p.swatch,
                    onClick: c,
                    onHover: r,
                    focusStyle: { boxShadow: "0 0 4px " + e },
                });
            }),
            d.createElement("div", { style: p.hash }, "#"),
            d.createElement(j, { label: null, style: { input: p.input }, value: n.replace("#", ""), onChange: c }),
            d.createElement("div", { style: p.clear }),
        ),
    );
};
(n3.propTypes = {
    width: z().oneOfType([z().string, z().number]),
    triangle: z().oneOf(["hide", "top-left", "top-right"]),
    colors: z().arrayOf(z().string),
    styles: z().object,
}),
    (n3.defaultProps = {
        width: 276,
        colors: [
            "#FF6900",
            "#FCB900",
            "#7BDCB5",
            "#00D084",
            "#8ED1FC",
            "#0693E3",
            "#ABB8C3",
            "#EB144C",
            "#F78DA7",
            "#9900EF",
        ],
        triangle: "top-left",
        styles: {},
    }),
    t2(n3);
var n8 = function (e) {
    var t = (0, h.default)({
        default: {
            picker: {
                width: "20px",
                height: "20px",
                borderRadius: "22px",
                border: "2px #fff solid",
                transform: "translate(-12px, -13px)",
                background:
                    "hsl(" +
                    Math.round(e.hsl.h) +
                    ", " +
                    Math.round(100 * e.hsl.s) +
                    "%, " +
                    Math.round(100 * e.hsl.l) +
                    "%)",
            },
        },
    });
    return d.createElement("div", { style: t.picker });
};
(n8.propTypes = { hsl: z().shape({ h: z().number, s: z().number, l: z().number, a: z().number }) }),
    (n8.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
var n6 = function (e) {
    var t = (0, h.default)({
        default: {
            picker: {
                width: "20px",
                height: "20px",
                borderRadius: "22px",
                transform: "translate(-10px, -7px)",
                background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
                border: "2px white solid",
            },
        },
    });
    return d.createElement("div", { style: t.picker });
};
(n6.propTypes = { hsl: z().shape({ h: z().number, s: z().number, l: z().number, a: z().number }) }),
    (n6.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
let n9 = function (e) {
    var t = e.onChange,
        r = e.rgb,
        n = e.hsl,
        a = e.hex,
        o = e.hsv,
        i = function (e, r) {
            if (e.hex) tZ(e.hex) && t({ hex: e.hex, source: "hex" }, r);
            else if (e.rgb) {
                var n = e.rgb.split(",");
                tQ(e.rgb, "rgb") && t({ r: n[0], g: n[1], b: n[2], a: 1, source: "rgb" }, r);
            } else if (e.hsv) {
                var a = e.hsv.split(",");
                tQ(e.hsv, "hsv") &&
                    ((a[2] = a[2].replace("%", "")),
                    (a[1] = a[1].replace("%", "")),
                    (a[0] = a[0].replace("\xb0", "")),
                    1 == a[1] ? (a[1] = 0.01) : 1 == a[2] && (a[2] = 0.01),
                    t({ h: Number(a[0]), s: Number(a[1]), v: Number(a[2]), source: "hsv" }, r));
            } else if (e.hsl) {
                var o = e.hsl.split(",");
                tQ(e.hsl, "hsl") &&
                    ((o[2] = o[2].replace("%", "")),
                    (o[1] = o[1].replace("%", "")),
                    (o[0] = o[0].replace("\xb0", "")),
                    1 == c[1] ? (c[1] = 0.01) : 1 == c[2] && (c[2] = 0.01),
                    t({ h: Number(o[0]), s: Number(o[1]), v: Number(o[2]), source: "hsl" }, r));
            }
        },
        l = (0, h.default)({
            default: {
                wrap: { display: "flex", height: "100px", marginTop: "4px" },
                fields: { width: "100%" },
                column: { paddingTop: "10px", display: "flex", justifyContent: "space-between" },
                double: { padding: "0px 4.4px", boxSizing: "border-box" },
                input: {
                    width: "100%",
                    height: "38px",
                    boxSizing: "border-box",
                    padding: "4px 10% 3px",
                    textAlign: "center",
                    border: "1px solid #dadce0",
                    fontSize: "11px",
                    textTransform: "lowercase",
                    borderRadius: "5px",
                    outline: "none",
                    fontFamily: "Roboto,Arial,sans-serif",
                },
                input2: {
                    height: "38px",
                    width: "100%",
                    border: "1px solid #dadce0",
                    boxSizing: "border-box",
                    fontSize: "11px",
                    textTransform: "lowercase",
                    borderRadius: "5px",
                    outline: "none",
                    paddingLeft: "10px",
                    fontFamily: "Roboto,Arial,sans-serif",
                },
                label: {
                    textAlign: "center",
                    fontSize: "12px",
                    background: "#fff",
                    position: "absolute",
                    textTransform: "uppercase",
                    color: "#3c4043",
                    width: "35px",
                    top: "-6px",
                    left: "0",
                    right: "0",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontFamily: "Roboto,Arial,sans-serif",
                },
                label2: {
                    left: "10px",
                    textAlign: "center",
                    fontSize: "12px",
                    background: "#fff",
                    position: "absolute",
                    textTransform: "uppercase",
                    color: "#3c4043",
                    width: "32px",
                    top: "-6px",
                    fontFamily: "Roboto,Arial,sans-serif",
                },
                single: { flexGrow: "1", margin: "0px 4.4px" },
            },
        }),
        s = r.r + ", " + r.g + ", " + r.b,
        p = Math.round(n.h) + "\xb0, " + Math.round(100 * n.s) + "%, " + Math.round(100 * n.l) + "%",
        c = Math.round(o.h) + "\xb0, " + Math.round(100 * o.s) + "%, " + Math.round(100 * o.v) + "%";
    return d.createElement(
        "div",
        { style: l.wrap, className: "flexbox-fix" },
        d.createElement(
            "div",
            { style: l.fields },
            d.createElement(
                "div",
                { style: l.double },
                d.createElement(j, { style: { input: l.input, label: l.label }, label: "hex", value: a, onChange: i }),
            ),
            d.createElement(
                "div",
                { style: l.column },
                d.createElement(
                    "div",
                    { style: l.single },
                    d.createElement(j, {
                        style: { input: l.input2, label: l.label2 },
                        label: "rgb",
                        value: s,
                        onChange: i,
                    }),
                ),
                d.createElement(
                    "div",
                    { style: l.single },
                    d.createElement(j, {
                        style: { input: l.input2, label: l.label2 },
                        label: "hsv",
                        value: c,
                        onChange: i,
                    }),
                ),
                d.createElement(
                    "div",
                    { style: l.single },
                    d.createElement(j, {
                        style: { input: l.input2, label: l.label2 },
                        label: "hsl",
                        value: p,
                        onChange: i,
                    }),
                ),
            ),
        ),
    );
};
var n7 = function (e) {
    var t = e.width,
        r = e.onChange,
        n = e.rgb,
        a = e.hsl,
        o = e.hsv,
        i = e.hex,
        l = e.header,
        s = e.styles,
        p = e.className,
        c = (0, h.default)(
            tm(
                {
                    default: {
                        picker: {
                            width: t,
                            background: "#fff",
                            border: "1px solid #dfe1e5",
                            boxSizing: "initial",
                            display: "flex",
                            flexWrap: "wrap",
                            borderRadius: "8px 8px 0px 0px",
                        },
                        head: {
                            height: "57px",
                            width: "100%",
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            paddingLeft: "16px",
                            fontSize: "20px",
                            boxSizing: "border-box",
                            fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
                        },
                        saturation: { width: "70%", padding: "0px", position: "relative", overflow: "hidden" },
                        swatch: {
                            width: "30%",
                            height: "228px",
                            padding: "0px",
                            background: "rgba(" + n.r + ", " + n.g + ", " + n.b + ", 1)",
                            position: "relative",
                            overflow: "hidden",
                        },
                        body: { margin: "auto", width: "95%" },
                        controls: { display: "flex", boxSizing: "border-box", height: "52px", paddingTop: "22px" },
                        color: { width: "32px" },
                        hue: { height: "8px", position: "relative", margin: "0px 16px 0px 16px", width: "100%" },
                        Hue: { radius: "2px" },
                    },
                },
                void 0 === s ? {} : s,
            ),
        );
    return d.createElement(
        "div",
        { style: c.picker, className: "google-picker " + (void 0 === p ? "" : p) },
        d.createElement("div", { style: c.head }, l),
        d.createElement("div", { style: c.swatch }),
        d.createElement(
            "div",
            { style: c.saturation },
            d.createElement(tM, { hsl: a, hsv: o, pointer: n8, onChange: r }),
        ),
        d.createElement(
            "div",
            { style: c.body },
            d.createElement(
                "div",
                { style: c.controls, className: "flexbox-fix" },
                d.createElement(
                    "div",
                    { style: c.hue },
                    d.createElement(T, { style: c.Hue, hsl: a, radius: "4px", pointer: n6, onChange: r }),
                ),
            ),
            d.createElement(n9, { rgb: n, hsl: a, hex: i, hsv: o, onChange: r }),
        ),
    );
};
(n7.propTypes = { width: z().oneOfType([z().string, z().number]), styles: z().object, header: z().string }),
    (n7.defaultProps = { width: 652, styles: {}, header: "Color picker" }),
    t2(n7);
