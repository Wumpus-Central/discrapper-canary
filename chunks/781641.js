"use strict";
r.d(t, { kl: () => t2 });
var n,
    o,
    a,
    i,
    l,
    s,
    u,
    p,
    c,
    f,
    d = r(64700),
    h = r(205662),
    b = function (e, t, r, n, o) {
        var a = o.clientWidth,
            i = o.clientHeight,
            l = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            s = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            u = l - (o.getBoundingClientRect().left + window.pageXOffset),
            p = s - (o.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === r) {
            var c = void 0;
            if (((c = p < 0 ? 0 : p > i ? 1 : Math.round((100 * p) / i) / 100), t.a !== c))
                return { h: t.h, s: t.s, l: t.l, a: c, source: "rgb" };
        } else {
            var f = void 0;
            if (n !== (f = u < 0 ? 0 : u > a ? 1 : Math.round((100 * u) / a) / 100))
                return { h: t.h, s: t.s, l: t.l, a: f, source: "rgb" };
        }
        return null;
    },
    v = {},
    g = function (e, t, r, n) {
        if ("u" < typeof document && !n) return null;
        var o = n ? new n() : document.createElement("canvas");
        (o.width = 2 * r), (o.height = 2 * r);
        var a = o.getContext("2d");
        return a
            ? ((a.fillStyle = e),
              a.fillRect(0, 0, o.width, o.height),
              (a.fillStyle = t),
              a.fillRect(0, 0, r, r),
              a.translate(r, r),
              a.fillRect(0, 0, r, r),
              o.toDataURL())
            : null;
    },
    x = function (e, t, r, n) {
        var o = e + "-" + t + "-" + r + (n ? "-server" : "");
        if (v[o]) return v[o];
        var a = g(e, t, r, n);
        return (v[o] = a), a;
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
            o = e.renderers,
            a = e.borderRadius,
            i = e.boxShadow,
            l = e.children,
            s = (0, h.default)({
                default: {
                    grid: {
                        borderRadius: a,
                        boxShadow: i,
                        absolute: "0px 0px 0px 0px",
                        background: "url(" + x(t, r, n, o.canvas) + ") center left",
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
var O = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t() {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            for (var e, r, n, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return (
                (r = n = C(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
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
    _ = (function () {
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
    S = [38, 40],
    k = 1,
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
                    if (!isNaN(n) && ((t = e.keyCode), S.indexOf(t) > -1)) {
                        var o = r.getArrowOffset(),
                            a = 38 === e.keyCode ? n + o : n - o;
                        r.setUpdatedValue(a, e);
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
                (r.inputId = "rc-editable-input-" + k++),
                r
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            _(t, [
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
        var o = n.clientWidth,
            a = n.clientHeight,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            s = i - (n.getBoundingClientRect().left + window.pageXOffset),
            u = l - (n.getBoundingClientRect().top + window.pageYOffset);
        if ("vertical" === t) {
            var p = void 0;
            if (((p = u < 0 ? 359 : u > a ? 0 : (360 * (-((100 * u) / a) + 100)) / 100), r.h !== p))
                return { h: p, s: r.s, l: r.l, a: r.a, source: "hsl" };
        } else {
            var c = void 0;
            if (((c = s < 0 ? 0 : s > o ? 359 : (((100 * s) / o) * 360) / 100), r.h !== c))
                return { h: c, s: r.s, l: r.l, a: r.a, source: "hsl" };
        }
        return null;
    },
    M = (function () {
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
function P(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
}
var B = (function (e) {
        if ("function" != typeof e && null !== e)
            throw TypeError("Super expression must either be null or a function, not " + typeof e);
        function t() {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            for (var e, r, n, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
            return (
                (r = n = P(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
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
                P(n, r)
            );
        }
        return (
            (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
            })),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
            M(t, [
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
    F = r(655972),
    T = r.n(F);
let D = function (e, t) {
        return e === t || (e != e && t != t);
    },
    L = function (e, t) {
        for (var r = e.length; r--; ) if (D(e[r][0], t)) return r;
        return -1;
    };
var z = Array.prototype.splice;
function A(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
(A.prototype.clear = function () {
    (this.__data__ = []), (this.size = 0);
}),
    (A.prototype.delete = function (e) {
        var t = this.__data__,
            r = L(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : z.call(t, r, 1), --this.size, !0);
    }),
    (A.prototype.get = function (e) {
        var t = this.__data__,
            r = L(t, e);
        return r < 0 ? void 0 : t[r][1];
    }),
    (A.prototype.has = function (e) {
        return L(this.__data__, e) > -1;
    }),
    (A.prototype.set = function (e, t) {
        var r = this.__data__,
            n = L(r, e);
        return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    });
var H = "object" == typeof global && global && global.Object === Object && global,
    N = "object" == typeof self && self && self.Object === Object && self,
    U = H || N || Function("return this")(),
    W = U.Symbol,
    X = Object.prototype,
    G = X.hasOwnProperty,
    V = X.toString,
    I = W ? W.toStringTag : void 0;
let Y = function (e) {
    var t = G.call(e, I),
        r = e[I];
    try {
        e[I] = void 0;
        var n = !0;
    } catch (e) {}
    var o = V.call(e);
    return n && (t ? (e[I] = r) : delete e[I]), o;
};
var $ = Object.prototype.toString,
    K = W ? W.toStringTag : void 0;
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
var Q = U["__core-js_shared__"],
    ee = (a = /[^.]+$/.exec((Q && Q.keys && Q.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + a : "",
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
    eo = Object.prototype,
    ea = Function.prototype.toString,
    ei = eo.hasOwnProperty,
    el = RegExp(
        "^" +
            ea
                .call(ei)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
            "$",
    );
let es = function (e) {
        return !!Z(e) && (!ee || !(ee in e)) && (J(e) ? el : en).test(er(e));
    },
    eu = function (e, t) {
        var r = null == e ? void 0 : e[t];
        return es(r) ? r : void 0;
    };
var ep = eu(U, "Map"),
    ec = eu(Object, "create"),
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
    (this.__data__ = ec ? ec(null) : {}), (this.size = 0);
}),
    (eh.prototype.delete = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= !!t), t;
    }),
    (eh.prototype.get = function (e) {
        var t = this.__data__;
        if (ec) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r;
        }
        return ef.call(t, e) ? t[e] : void 0;
    }),
    (eh.prototype.has = function (e) {
        var t = this.__data__;
        return ec ? void 0 !== t[e] : ed.call(t, e);
    }),
    (eh.prototype.set = function (e, t) {
        var r = this.__data__;
        return (this.size += +!this.has(e)), (r[e] = ec && void 0 === t ? "__lodash_hash_undefined__" : t), this;
    });
let eb = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
    },
    ev = function (e, t) {
        var r = e.__data__;
        return eb(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
    };
function eg(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
    }
}
function ex(e) {
    var t = (this.__data__ = new A(e));
    this.size = t.size;
}
(eg.prototype.clear = function () {
    (this.size = 0), (this.__data__ = { hash: new eh(), map: new (ep || A)(), string: new eh() });
}),
    (eg.prototype.delete = function (e) {
        var t = ev(this, e).delete(e);
        return (this.size -= !!t), t;
    }),
    (eg.prototype.get = function (e) {
        return ev(this, e).get(e);
    }),
    (eg.prototype.has = function (e) {
        return ev(this, e).has(e);
    }),
    (eg.prototype.set = function (e, t) {
        var r = ev(this, e),
            n = r.size;
        return r.set(e, t), (this.size += +(r.size != n)), this;
    }),
    (ex.prototype.clear = function () {
        (this.__data__ = new A()), (this.size = 0);
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
        if (r instanceof A) {
            var n = r.__data__;
            if (!ep || n.length < 199) return n.push([e, t]), (this.size = ++r.size), this;
            r = this.__data__ = new eg(n);
        }
        return r.set(e, t), (this.size = r.size), this;
    });
var ey = (function () {
    try {
        var e = eu(Object, "defineProperty");
        return e({}, "", {}), e;
    } catch (e) {}
})();
let em = function (e, t, r) {
        "__proto__" == t && ey ? ey(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (e[t] = r);
    },
    ew = function (e, t, r) {
        ((void 0 === r || D(e[t], r)) && (void 0 !== r || t in e)) || em(e, t, r);
    },
    eE = function (e, t, r) {
        for (var n = -1, o = Object(e), a = r(e), i = a.length; i--; ) {
            var l = a[++n];
            if (!1 === t(o[l], l, o)) break;
        }
        return e;
    };
var eC = "object" == typeof exports && exports && !exports.nodeType && exports,
    eO = eC && "object" == typeof module && module && !module.nodeType && module,
    e_ = eO && eO.exports === eC ? U.Buffer : void 0,
    eS = e_ ? e_.allocUnsafe : void 0;
let ek = function (e, t) {
    if (t) return e.slice();
    var r = e.length,
        n = eS ? eS(r) : new e.constructor(r);
    return e.copy(n), n;
};
var ej = U.Uint8Array;
let eR = function (e) {
        var t = new e.constructor(e.byteLength);
        return new ej(t).set(new ej(e)), t;
    },
    eM = function (e, t) {
        var r = t ? eR(e.buffer) : e.buffer;
        return new e.constructor(r, e.byteOffset, e.length);
    },
    eP = function (e, t) {
        var r = -1,
            n = e.length;
        for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
        return t;
    };
var eB = Object.create,
    eF = (function () {
        function e() {}
        return function (t) {
            if (!Z(t)) return {};
            if (eB) return eB(t);
            e.prototype = t;
            var r = new e();
            return (e.prototype = void 0), r;
        };
    })();
let eT = function (e, t) {
    return function (r) {
        return e(t(r));
    };
};
var eD = eT(Object.getPrototypeOf, Object),
    eL = Object.prototype;
let ez = function (e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || eL);
    },
    eA = function (e) {
        return null != e && "object" == typeof e;
    },
    eH = function (e) {
        return eA(e) && "[object Arguments]" == q(e);
    };
var eN = Object.prototype,
    eU = eN.hasOwnProperty,
    eW = eN.propertyIsEnumerable,
    eX = eH(
        (function () {
            return arguments;
        })(),
    )
        ? eH
        : function (e) {
              return eA(e) && eU.call(e, "callee") && !eW.call(e, "callee");
          },
    eG = Array.isArray;
let eV = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff;
    },
    eI = function (e) {
        return null != e && eV(e.length) && !J(e);
    };
var eY = "object" == typeof exports && exports && !exports.nodeType && exports,
    e$ = eY && "object" == typeof module && module && !module.nodeType && module,
    eK = e$ && e$.exports === eY ? U.Buffer : void 0;
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
    if (!eA(e) || "[object Object]" != q(e)) return !1;
    var t = eD(e);
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
    e3 = e5 && "object" == typeof module && module && !module.nodeType && module,
    e4 = e3 && e3.exports === e5 && H.process,
    e6 = (function () {
        try {
            var e = e3 && e3.require && e3.require("util").types;
            if (e) return e;
            return e4 && e4.binding && e4.binding("util");
        } catch (e) {}
    })(),
    e7 = e6 && e6.isTypedArray,
    e8 = e7
        ? function (e) {
              return e7(e);
          }
        : function (e) {
              return eA(e) && eV(e.length) && !!e2[q(e)];
          };
let e9 = function (e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t];
};
var te = Object.prototype.hasOwnProperty;
let tt = function (e, t, r) {
        var n = e[t];
        (te.call(e, t) && D(n, r) && (void 0 !== r || t in e)) || em(e, t, r);
    },
    tr = function (e, t, r, n) {
        var o = !r;
        r || (r = {});
        for (var a = -1, i = t.length; ++a < i; ) {
            var l = t[a],
                s = n ? n(r[l], e[l], l, r, e) : void 0;
            void 0 === s && (s = e[l]), o ? em(r, l, s) : tt(r, l, s);
        }
        return r;
    },
    tn = function (e, t) {
        for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
        return n;
    };
var to = /^(?:0|[1-9]\d*)$/;
let ta = function (e, t) {
    var r = typeof e;
    return (
        !!(t = null == t ? 0x1fffffffffffff : t) &&
        ("number" == r || ("symbol" != r && to.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
};
var ti = Object.prototype.hasOwnProperty;
let tl = function (e, t) {
        var r = eG(e),
            n = !r && eX(e),
            o = !r && !n && eq(e),
            a = !r && !n && !o && e8(e),
            i = r || n || o || a,
            l = i ? tn(e.length, String) : [],
            s = l.length;
        for (var u in e)
            (t || ti.call(e, u)) &&
                !(
                    i &&
                    ("length" == u ||
                        (o && ("offset" == u || "parent" == u)) ||
                        (a && ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                        ta(u, s))
                ) &&
                l.push(u);
        return l;
    },
    ts = function (e) {
        var t = [];
        if (null != e) for (var r in Object(e)) t.push(r);
        return t;
    };
var tu = Object.prototype.hasOwnProperty;
let tp = function (e) {
        if (!Z(e)) return ts(e);
        var t = ez(e),
            r = [];
        for (var n in e) ("constructor" == n && (t || !tu.call(e, n))) || r.push(n);
        return r;
    },
    tc = function (e) {
        return eI(e) ? tl(e, !0) : tp(e);
    },
    tf = function (e, t, r, n, o, a, i) {
        var l = e9(e, r),
            s = e9(t, r),
            u = i.get(s);
        if (u) return void ew(e, r, u);
        var p = a ? a(l, s, r + "", e, t, i) : void 0,
            c = void 0 === p;
        if (c) {
            var f = eG(s),
                d = !f && eq(s),
                h = !f && !d && e8(s);
            ((p = s), f || d || h)
                ? eG(l)
                    ? (p = l)
                    : eA(l) && eI(l)
                      ? (p = eP(l))
                      : d
                        ? ((c = !1), (p = ek(s, !0)))
                        : h
                          ? ((c = !1), (p = eM(s, !0)))
                          : (p = [])
                : e1(s) || eX(s)
                  ? ((p = l), eX(l))
                      ? (p = tr(l, tc(l)))
                      : (!Z(l) || J(l)) && (p = "function" != typeof s.constructor || ez(s) ? {} : eF(eD(s)))
                  : (c = !1);
        }
        c && (i.set(s, p), o(p, s, n, a, i), i.delete(s)), ew(e, r, p);
    },
    td = function e(t, r, n, o, a) {
        t !== r &&
            eE(
                r,
                function (i, l) {
                    if ((a || (a = new ex()), Z(i))) tf(t, r, l, n, e, o, a);
                    else {
                        var s = o ? o(e9(t, l), i, l + "", t, r, a) : void 0;
                        void 0 === s && (s = i), ew(t, l, s);
                    }
                },
                tc,
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
var tv = Math.max,
    tg = Date.now,
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
            var e = tg(),
                t = 16 - (e - s);
            if (((s = e), t > 0)) {
                if (++l >= 800) return arguments[0];
            } else l = 0;
            return i.apply(void 0, arguments);
        });
let ty = function (e, t, r) {
    if (!Z(r)) return !1;
    var n = typeof t;
    return ("number" == n ? !!(eI(r) && ta(t, r.length)) : "string" == n && t in r) && D(r[t], e);
};
var tm =
        ((u = function (e, t, r) {
            td(e, t, r);
        }),
        tx(
            ((n = function (e, t) {
                var r = -1,
                    n = t.length,
                    o = n > 1 ? t[n - 1] : void 0,
                    a = n > 2 ? t[2] : void 0;
                for (
                    o = u.length > 3 && "function" == typeof o ? (n--, o) : void 0,
                        a && ty(t[0], t[1], a) && ((o = n < 3 ? void 0 : o), (n = 1)),
                        e = Object(e);
                    ++r < n;
                ) {
                    var i = t[r];
                    i && u(e, i, r, o);
                }
                return e;
            }),
            (o = tv(((o = void 0), n.length - 1), 0)),
            function () {
                for (var e = arguments, t = -1, r = tv(e.length - o, 0), a = Array(r); ++t < r; ) a[t] = e[o + t];
                t = -1;
                for (var i = Array(o + 1); ++t < o; ) i[t] = e[t];
                return (i[o] = th(a)), tb(n, this, i);
            }),
            n + "",
        )),
    tw = function (e) {
        var t = e.zDepth,
            r = e.radius,
            n = e.background,
            o = e.children,
            a = e.styles,
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
                    void 0 === a ? {} : a,
                ),
                { "zDepth-1": 1 === t },
            );
        return d.createElement(
            "div",
            { style: i.wrap },
            d.createElement("div", { style: i.bg }),
            d.createElement("div", { style: i.content }, o),
        );
    };
(tw.propTypes = {
    background: T().string,
    zDepth: T().oneOf([0, 1, 2, 3, 4, 5]),
    radius: T().number,
    styles: T().object,
}),
    (tw.defaultProps = { background: "#fff", zDepth: 1, radius: 2, styles: {} });
let tE = function () {
    return U.Date.now();
};
var tC = /\s/;
let tO = function (e) {
    for (var t = e.length; t-- && tC.test(e.charAt(t)); );
    return t;
};
var t_ = /^\s+/;
let tS = function (e) {
    return "symbol" == typeof e || (eA(e) && "[object Symbol]" == q(e));
};
var tk = 0 / 0,
    tj = /^[-+]0x[0-9a-f]+$/i,
    tR = /^0b[01]+$/i,
    tM = /^0o[0-7]+$/i,
    tP = parseInt;
let tB = function (e) {
    if ("number" == typeof e) return e;
    if (tS(e)) return tk;
    if (Z(e)) {
        var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = Z(r) ? r + "" : r;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = (t = e) ? t.slice(0, tO(t) + 1).replace(t_, "") : t;
    var n = tR.test(e);
    return n || tM.test(e) ? tP(e.slice(2), n ? 2 : 8) : tj.test(e) ? tk : +e;
};
var tF = Math.max,
    tT = Math.min;
let tD = function (e, t, r) {
        var n,
            o,
            a,
            i,
            l,
            s,
            u = 0,
            p = !1,
            c = !1,
            f = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function d(t) {
            var r = n,
                a = o;
            return (n = o = void 0), (u = t), (i = e.apply(a, r));
        }
        function h(e) {
            var r = e - s,
                n = e - u;
            return void 0 === s || r >= t || r < 0 || (c && n >= a);
        }
        function b() {
            var e,
                r,
                n,
                o = tE();
            if (h(o)) return v(o);
            l = setTimeout(b, ((e = o - s), (r = o - u), (n = t - e), c ? tT(n, a - r) : n));
        }
        function v(e) {
            return ((l = void 0), f && n) ? d(e) : ((n = o = void 0), i);
        }
        function g() {
            var e,
                r = tE(),
                a = h(r);
            if (((n = arguments), (o = this), (s = r), a)) {
                if (void 0 === l) return (u = e = s), (l = setTimeout(b, t)), p ? d(e) : i;
                if (c) return clearTimeout(l), (l = setTimeout(b, t)), d(s);
            }
            return void 0 === l && (l = setTimeout(b, t)), i;
        }
        return (
            (t = tB(t) || 0),
            Z(r) &&
                ((p = !!r.leading),
                (a = (c = "maxWait" in r) ? tF(tB(r.maxWait) || 0, t) : a),
                (f = "trailing" in r ? !!r.trailing : f)),
            (g.cancel = function () {
                void 0 !== l && clearTimeout(l), (u = 0), (n = s = o = l = void 0);
            }),
            (g.flush = function () {
                return void 0 === l ? i : v(tE());
            }),
            g
        );
    },
    tL = function (e, t, r) {
        var n = !0,
            o = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
            Z(r) && ((n = "leading" in r ? !!r.leading : n), (o = "trailing" in r ? !!r.trailing : o)),
            tD(e, t, { leading: n, maxWait: t, trailing: o })
        );
    };
var tz = function (e, t, r) {
        var n = r.getBoundingClientRect(),
            o = n.width,
            a = n.height,
            i = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
            l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
            s = i - (r.getBoundingClientRect().left + window.pageXOffset),
            u = l - (r.getBoundingClientRect().top + window.pageYOffset);
        s < 0 ? (s = 0) : s > o && (s = o), u < 0 ? (u = 0) : u > a && (u = a);
        var p = s / o,
            c = 1 - u / a;
        return { h: t.h, s: p, v: c, a: t.a, source: "hsv" };
    },
    tA = (function () {
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
    tH = (function (e) {
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
                        r.throttle(r.props.onChange, tz(e, r.props.hsl, r.container), e);
                }),
                (r.handleMouseDown = function (e) {
                    r.handleChange(e);
                    var t = r.getContainerRenderWindow();
                    t.addEventListener("mousemove", r.handleChange), t.addEventListener("mouseup", r.handleMouseUp);
                }),
                (r.handleMouseUp = function () {
                    r.unbindEventListeners();
                }),
                (r.throttle = tL(function (e, t, r) {
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
            tA(t, [
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
                            o = t.black,
                            a = t.pointer,
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
                                    custom: { color: r, white: n, black: o, pointer: a, circle: i },
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
var tU = eT(Object.keys, Object),
    tW = Object.prototype.hasOwnProperty;
let tX = function (e) {
        if (!ez(e)) return tU(e);
        var t = [];
        for (var r in Object(e)) tW.call(e, r) && "constructor" != r && t.push(r);
        return t;
    },
    tG = function (e) {
        return eI(e) ? tl(e) : tX(e);
    };
var tV =
    ((p = function (e, t) {
        return e && eE(e, t, tG);
    }),
    function (e, t) {
        if (null == e) return e;
        if (!eI(e)) return p(e, t);
        for (var r = e.length, n = -1, o = Object(e); ++n < r && !1 !== t(o[n], n, o); );
        return e;
    });
let tI = function (e, t) {
    return (eG(e) ? tN : tV)(e, "function" == typeof t ? t : th);
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
            o = r.toHsv(),
            a = r.toRgb(),
            i = r.toHex();
        return (
            0 === n.s && ((n.h = t || 0), (o.h = t || 0)),
            {
                hsl: n,
                hex: "000000" === i && 0 === a.a ? "transparent" : "#" + i,
                rgb: a,
                hsv: o,
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
                (t.debounce = tD(function (e, t, r) {
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
    t3 = (function () {
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
function t4(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ("object" == typeof t || "function" == typeof t) ? t : e;
}
var t6 =
    Object.assign ||
    function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
    };
let t7 = (function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span",
        r = d.Component;
    if ("function" != typeof r && null !== r)
        throw TypeError("Super expression must either be null or a function, not " + typeof r);
    function n() {
        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
        for (var e, t, r, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return (
            (t = r = t4(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(a)))),
            (r.state = { focus: !1 }),
            (r.handleFocus = function () {
                return r.setState({ focus: !0 });
            }),
            (r.handleBlur = function () {
                return r.setState({ focus: !1 });
            }),
            t4(r, t)
        );
    }
    return (
        (n.prototype = Object.create(r && r.prototype, {
            constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
        })),
        r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : (n.__proto__ = r)),
        t3(n, [
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
        o = void 0 === n ? function () {} : n,
        a = e.onHover,
        i = e.title,
        l = void 0 === i ? t : i,
        s = e.children,
        u = e.focus,
        p = e.focusStyle,
        c = "transparent" === t,
        f = (0, h.default)({
            default: {
                swatch: t6(
                    {
                        background: t,
                        height: "100%",
                        width: "100%",
                        cursor: "pointer",
                        position: "relative",
                        outline: "none",
                    },
                    r,
                    u ? (void 0 === p ? {} : p) : {},
                ),
            },
        }),
        b = {};
    return (
        a &&
            (b.onMouseOver = function (e) {
                return a(t, e);
            }),
        d.createElement(
            "div",
            t6(
                {
                    style: f.swatch,
                    onClick: function (e) {
                        return o(t, e);
                    },
                    title: l,
                    tabIndex: 0,
                    onKeyDown: function (e) {
                        return 13 === e.keyCode && o(t, e);
                    },
                },
                b,
            ),
            s,
            c &&
                d.createElement(m, {
                    borderRadius: f.swatch.borderRadius,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }),
        )
    );
});
var t8 =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    t9 = function (e) {
        var t = e.rgb,
            r = e.hsl,
            n = e.width,
            o = e.height,
            a = e.onChange,
            i = e.direction,
            l = e.style,
            s = e.renderers,
            u = e.pointer,
            p = e.className,
            c = (0, h.default)({
                default: { picker: { position: "relative", width: n, height: o }, alpha: { radius: "2px", style: l } },
            });
        return d.createElement(
            "div",
            { style: c.picker, className: "alpha-picker " + (void 0 === p ? "" : p) },
            d.createElement(
                O,
                t8({}, c.alpha, { rgb: t, hsl: r, pointer: u, renderers: s, onChange: a, direction: i }),
            ),
        );
    };
(t9.defaultProps = {
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
    t2(t9);
let re = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
    return o;
};
function rt(e) {
    var t = -1,
        r = null == e ? 0 : e.length;
    for (this.__data__ = new eg(); ++t < r; ) this.add(e[t]);
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
    rn = function (e, t, r, n, o, a) {
        var i = 1 & r,
            l = e.length,
            s = t.length;
        if (l != s && !(i && s > l)) return !1;
        var u = a.get(e),
            p = a.get(t);
        if (u && p) return u == t && p == e;
        var c = -1,
            f = !0,
            d = 2 & r ? new rt() : void 0;
        for (a.set(e, t), a.set(t, e); ++c < l; ) {
            var h = e[c],
                b = t[c];
            if (n) var v = i ? n(b, h, c, t, e, a) : n(h, b, c, e, t, a);
            if (void 0 !== v) {
                if (v) continue;
                f = !1;
                break;
            }
            if (d) {
                if (
                    !rr(t, function (e, t) {
                        if (!d.has(t) && (h === e || o(h, e, r, n, a))) return d.push(t);
                    })
                ) {
                    f = !1;
                    break;
                }
            } else if (!(h === b || o(h, b, r, n, a))) {
                f = !1;
                break;
            }
        }
        return a.delete(e), a.delete(t), f;
    },
    ro = function (e) {
        var t = -1,
            r = Array(e.size);
        return (
            e.forEach(function (e, n) {
                r[++t] = [n, e];
            }),
            r
        );
    },
    ra = function (e) {
        var t = -1,
            r = Array(e.size);
        return (
            e.forEach(function (e) {
                r[++t] = e;
            }),
            r
        );
    };
var ri = W ? W.prototype : void 0,
    rl = ri ? ri.valueOf : void 0;
let rs = function (e, t, r, n, o, a, i) {
        switch (r) {
            case "[object DataView]":
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                (e = e.buffer), (t = t.buffer);
            case "[object ArrayBuffer]":
                if (e.byteLength != t.byteLength || !a(new ej(e), new ej(t))) break;
                return !0;
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
                return D(+e, +t);
            case "[object Error]":
                return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
                return e == t + "";
            case "[object Map]":
                var l = ro;
            case "[object Set]":
                var s = 1 & n;
                if ((l || (l = ra), e.size != t.size && !s)) break;
                var u = i.get(e);
                if (u) return u == t;
                (n |= 2), i.set(e, t);
                var p = rn(l(e), l(t), n, o, a, i);
                return i.delete(e), p;
            case "[object Symbol]":
                if (rl) return rl.call(e) == rl.call(t);
        }
        return !1;
    },
    ru = function (e, t) {
        for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
        return e;
    },
    rp = function (e, t, r) {
        var n = t(e);
        return eG(e) ? n : ru(n, r(e));
    },
    rc = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n; ) {
            var i = e[r];
            t(i, r, e) && (a[o++] = i);
        }
        return a;
    };
var rf = Object.prototype.propertyIsEnumerable,
    rd = Object.getOwnPropertySymbols,
    rh = rd
        ? function (e) {
              return null == e
                  ? []
                  : rc(rd((e = Object(e))), function (t) {
                        return rf.call(e, t);
                    });
          }
        : function () {
              return [];
          };
let rb = function (e) {
    return rp(e, tG, rh);
};
var rv = Object.prototype.hasOwnProperty;
let rg = function (e, t, r, n, o, a) {
    var i = 1 & r,
        l = rb(e),
        s = l.length;
    if (s != rb(t).length && !i) return !1;
    for (var u = s; u--; ) {
        var p = l[u];
        if (!(i ? p in t : rv.call(t, p))) return !1;
    }
    var c = a.get(e),
        f = a.get(t);
    if (c && f) return c == t && f == e;
    var d = !0;
    a.set(e, t), a.set(t, e);
    for (var h = i; ++u < s; ) {
        var b = e[(p = l[u])],
            v = t[p];
        if (n) var g = i ? n(v, b, p, t, e, a) : n(b, v, p, e, t, a);
        if (!(void 0 === g ? b === v || o(b, v, r, n, a) : g)) {
            d = !1;
            break;
        }
        h || (h = "constructor" == p);
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
    return a.delete(e), a.delete(t), d;
};
var rx = eu(U, "DataView"),
    ry = eu(U, "Promise"),
    rm = eu(U, "Set"),
    rw = eu(U, "WeakMap"),
    rE = "[object Map]",
    rC = "[object Promise]",
    rO = "[object Set]",
    r_ = "[object WeakMap]",
    rS = "[object DataView]",
    rk = er(rx),
    rj = er(ep),
    rR = er(ry),
    rM = er(rm),
    rP = er(rw),
    rB = q;
((rx && rB(new rx(new ArrayBuffer(1))) != rS) ||
    (ep && rB(new ep()) != rE) ||
    (ry && rB(ry.resolve()) != rC) ||
    (rm && rB(new rm()) != rO) ||
    (rw && rB(new rw()) != r_)) &&
    (rB = function (e) {
        var t = q(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? er(r) : "";
        if (n)
            switch (n) {
                case rk:
                    return rS;
                case rj:
                    return rE;
                case rR:
                    return rC;
                case rM:
                    return rO;
                case rP:
                    return r_;
            }
        return t;
    });
let rF = rB;
var rT = "[object Arguments]",
    rD = "[object Array]",
    rL = "[object Object]",
    rz = Object.prototype.hasOwnProperty;
let rA = function (e, t, r, n, o, a) {
        var i = eG(e),
            l = eG(t),
            s = i ? rD : rF(e),
            u = l ? rD : rF(t);
        (s = s == rT ? rL : s), (u = u == rT ? rL : u);
        var p = s == rL,
            c = u == rL,
            f = s == u;
        if (f && eq(e)) {
            if (!eq(t)) return !1;
            (i = !0), (p = !1);
        }
        if (f && !p) return a || (a = new ex()), i || e8(e) ? rn(e, t, r, n, o, a) : rs(e, t, s, r, n, o, a);
        if (!(1 & r)) {
            var d = p && rz.call(e, "__wrapped__"),
                h = c && rz.call(t, "__wrapped__");
            if (d || h) {
                var b = d ? e.value() : e,
                    v = h ? t.value() : t;
                return a || (a = new ex()), o(b, v, r, n, a);
            }
        }
        return !!f && (a || (a = new ex()), rg(e, t, r, n, o, a));
    },
    rH = function e(t, r, n, o, a) {
        return t === r || (null != t && null != r && (eA(t) || eA(r)) ? rA(t, r, n, o, e, a) : t != t && r != r);
    },
    rN = function (e, t, r, n) {
        var o = r.length,
            a = o,
            i = !n;
        if (null == e) return !a;
        for (e = Object(e); o--; ) {
            var l = r[o];
            if (i && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
        }
        for (; ++o < a; ) {
            var s = (l = r[o])[0],
                u = e[s],
                p = l[1];
            if (i && l[2]) {
                if (void 0 === u && !(s in e)) return !1;
            } else {
                var c = new ex();
                if (n) var f = n(u, p, s, e, t, c);
                if (!(void 0 === f ? rH(p, u, 3, n, c) : f)) return !1;
            }
        }
        return !0;
    },
    rU = function (e) {
        return e == e && !Z(e);
    },
    rW = function (e) {
        for (var t = tG(e), r = t.length; r--; ) {
            var n = t[r],
                o = e[n];
            t[r] = [n, o, rU(o)];
        }
        return t;
    },
    rX = function (e, t) {
        return function (r) {
            return null != r && r[e] === t && (void 0 !== t || e in Object(r));
        };
    },
    rG = function (e) {
        var t = rW(e);
        return 1 == t.length && t[0][2]
            ? rX(t[0][0], t[0][1])
            : function (r) {
                  return r === e || rN(r, e, t);
              };
    };
var rV = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    rI = /^\w*$/;
let rY = function (e, t) {
    if (eG(e)) return !1;
    var r = typeof e;
    return (
        !!("number" == r || "symbol" == r || "boolean" == r || null == e || tS(e)) ||
        rI.test(e) ||
        !rV.test(e) ||
        (null != t && e in Object(t))
    );
};
function r$(e, t) {
    if ("function" != typeof e || (null != t && "function" != typeof t)) throw TypeError("Expected a function");
    var r = function () {
        var n = arguments,
            o = t ? t.apply(this, n) : n[0],
            a = r.cache;
        if (a.has(o)) return a.get(o);
        var i = e.apply(this, n);
        return (r.cache = a.set(o, i) || a), i;
    };
    return (r.cache = new (r$.Cache || eg)()), r;
}
r$.Cache = eg;
var rK = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    rq = /\\(\\)?/g,
    rZ =
        ((f = (c = r$(
            function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(""),
                    e.replace(rK, function (e, r, n, o) {
                        t.push(n ? o.replace(rq, "$1") : r || e);
                    }),
                    t
                );
            },
            function (e) {
                return 500 === f.size && f.clear(), e;
            },
        )).cache),
        c),
    rJ = 1 / 0,
    rQ = W ? W.prototype : void 0,
    r0 = rQ ? rQ.toString : void 0;
let r1 = function e(t) {
        if ("string" == typeof t) return t;
        if (eG(t)) return re(t, e) + "";
        if (tS(t)) return r0 ? r0.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -rJ ? "-0" : r;
    },
    r2 = function (e, t) {
        return eG(e) ? e : rY(e, t) ? [e] : rZ(null == e ? "" : r1(e));
    };
var r5 = 1 / 0;
let r3 = function (e) {
        if ("string" == typeof e || tS(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -r5 ? "-0" : t;
    },
    r4 = function (e, t) {
        t = r2(t, e);
        for (var r = 0, n = t.length; null != e && r < n; ) e = e[r3(t[r++])];
        return r && r == n ? e : void 0;
    },
    r6 = function (e, t, r) {
        var n = null == e ? void 0 : r4(e, t);
        return void 0 === n ? r : n;
    },
    r7 = function (e, t) {
        return null != e && t in Object(e);
    },
    r8 = function (e, t, r) {
        t = r2(t, e);
        for (var n = -1, o = t.length, a = !1; ++n < o; ) {
            var i = r3(t[n]);
            if (!(a = null != e && r(e, i))) break;
            e = e[i];
        }
        return a || ++n != o ? a : !!(o = null == e ? 0 : e.length) && eV(o) && ta(i, o) && (eG(e) || eX(e));
    },
    r9 = function (e) {
        var t;
        return rY(e)
            ? ((t = r3(e)),
              function (e) {
                  return null == e ? void 0 : e[t];
              })
            : function (t) {
                  return r4(t, e);
              };
    },
    ne = function (e) {
        if ("function" == typeof e) return e;
        if (null == e) return th;
        if ("object" == typeof e) {
            var t, r;
            return eG(e)
                ? ((t = e[0]),
                  (r = e[1]),
                  rY(t) && rU(r)
                      ? rX(r3(t), r)
                      : function (e) {
                            var n = r6(e, t);
                            return void 0 === n && n === r ? null != e && r8(e, t, r7) : rH(r, n, 3);
                        })
                : rG(e);
        }
        return r9(e);
    },
    nt = function (e, t) {
        var r = -1,
            n = eI(e) ? Array(e.length) : [];
        return (
            tV(e, function (e, o, a) {
                n[++r] = t(e, o, a);
            }),
            n
        );
    },
    nr = function (e, t) {
        return (eG(e) ? re : nt)(e, ne(t, 3));
    },
    nn = function (e) {
        var t = e.colors,
            r = e.onClick,
            n = e.onSwatchHover,
            o = (0, h.default)({
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
            { style: o.swatches },
            nr(t, function (e) {
                return d.createElement(t7, {
                    key: e,
                    color: e,
                    style: o.swatch,
                    onClick: r,
                    onHover: n,
                    focusStyle: { boxShadow: "0 0 4px " + e },
                });
            }),
            d.createElement("div", { style: o.clear }),
        );
    };
var no = function (e) {
    var t = e.onChange,
        r = e.onSwatchHover,
        n = e.hex,
        o = e.colors,
        a = e.width,
        i = e.triangle,
        l = e.styles,
        s = e.className,
        u = "transparent" === n,
        p = function (e, r) {
            tZ(e) && t({ hex: e, source: "hex" }, r);
        },
        c = (0, h.default)(
            tm(
                {
                    default: {
                        card: {
                            width: a,
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
        { style: c.card, className: "block-picker " + (void 0 === s ? "" : s) },
        d.createElement("div", { style: c.triangle }),
        d.createElement(
            "div",
            { style: c.head },
            u && d.createElement(m, { borderRadius: "6px 6px 0 0" }),
            d.createElement("div", { style: c.label }, n),
        ),
        d.createElement(
            "div",
            { style: c.body },
            d.createElement(nn, { colors: o, onClick: p, onSwatchHover: r }),
            d.createElement(j, { style: { input: c.input }, value: n, onChange: p }),
        ),
    );
};
(no.propTypes = {
    width: T().oneOfType([T().string, T().number]),
    colors: T().arrayOf(T().string),
    triangle: T().oneOf(["top", "hide"]),
    styles: T().object,
}),
    (no.defaultProps = {
        width: 170,
        colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
        triangle: "top",
        styles: {},
    }),
    t2(no);
var na = {
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
    nu = {
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
    np = {
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
    nc = {
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
    nv = {
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
    ng = {
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
            o = e.hover,
            a = e.active,
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
                { hover: o, active: a },
            );
        return d.createElement(
            "div",
            { style: s.swatch },
            d.createElement(t7, {
                style: s.Swatch,
                color: t,
                onClick: r,
                onHover: n,
                focusStyle: { boxShadow: s.Swatch.boxShadow + ", 0 0 5px " + t },
            }),
        );
    };
nC.defaultProps = { circleSize: 28, circleSpacing: 14 };
let nO = (0, h.handleHover)(nC);
var n_ = function (e) {
    var t = e.width,
        r = e.onChange,
        n = e.onSwatchHover,
        o = e.colors,
        a = e.hex,
        i = e.circleSize,
        l = e.styles,
        s = e.circleSpacing,
        u = e.className,
        p = (0, h.default)(
            tm(
                {
                    default: {
                        card: { width: t, display: "flex", flexWrap: "wrap", marginRight: -s, marginBottom: -s },
                    },
                },
                void 0 === l ? {} : l,
            ),
        ),
        c = function (e, t) {
            return r({ hex: e, source: "hex" }, t);
        };
    return d.createElement(
        "div",
        { style: p.card, className: "circle-picker " + (void 0 === u ? "" : u) },
        nr(o, function (e) {
            return d.createElement(nO, {
                key: e,
                color: e,
                onClick: c,
                onSwatchHover: n,
                active: a === e.toLowerCase(),
                circleSize: i,
                circleSpacing: s,
            });
        }),
    );
};
(n_.propTypes = {
    width: T().oneOfType([T().string, T().number]),
    circleSize: T().number,
    circleSpacing: T().number,
    styles: T().object,
}),
    (n_.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [
            na["500"],
            ni["500"],
            nl["500"],
            ns["500"],
            nu["500"],
            np["500"],
            nc["500"],
            nf["500"],
            nd["500"],
            nh["500"],
            nb["500"],
            nv["500"],
            ng["500"],
            nx["500"],
            ny["500"],
            nm["500"],
            nw["500"],
            nE["500"],
        ],
        styles: {},
    }),
    t2(n_);
let nS = function (e) {
    return void 0 === e;
};
var nk = r(717692),
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
                                      s: Number(nS(e.s) ? r.props.hsl.s : e.s),
                                      l: Number(nS(e.l) ? r.props.hsl.l : e.l),
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
                                            d.createElement(nk.default, {
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
let nM = function () {
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
    nP = function () {
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
var nB = function (e) {
    var t = e.width,
        r = e.onChange,
        n = e.disableAlpha,
        o = e.rgb,
        a = e.hsl,
        i = e.hsv,
        l = e.hex,
        s = e.renderers,
        u = e.styles,
        p = e.className,
        c = e.defaultView,
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
                            background: "rgba(" + o.r + ", " + o.g + ", " + o.b + ", " + o.a + ")",
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
                void 0 === u ? {} : u,
            ),
            { disableAlpha: n },
        );
    return d.createElement(
        "div",
        { style: f.picker, className: "chrome-picker " + (void 0 === p ? "" : p) },
        d.createElement(
            "div",
            { style: f.saturation },
            d.createElement(tH, { style: f.Saturation, hsl: a, hsv: i, pointer: nP, onChange: r }),
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
                        d.createElement(B, { style: f.Hue, hsl: a, pointer: nM, onChange: r }),
                    ),
                    d.createElement(
                        "div",
                        { style: f.alpha },
                        d.createElement(O, { style: f.Alpha, rgb: o, hsl: a, pointer: nM, renderers: s, onChange: r }),
                    ),
                ),
            ),
            d.createElement(nR, { rgb: o, hsl: a, hex: l, view: c, onChange: r, disableAlpha: n }),
        ),
    );
};
(nB.propTypes = {
    width: T().oneOfType([T().string, T().number]),
    disableAlpha: T().bool,
    styles: T().object,
    defaultView: T().oneOf(["hex", "rgb", "hsl"]),
}),
    (nB.defaultProps = { width: 225, disableAlpha: !1, styles: {} }),
    t2(nB);
let nF = function (e) {
        var t = e.color,
            r = e.onClick,
            n = e.onSwatchHover,
            o = e.active,
            a = (0, h.default)(
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
                { active: o, "color-#FFFFFF": "#FFFFFF" === t, transparent: "transparent" === t },
            );
        return d.createElement(
            t7,
            {
                style: a.color,
                color: t,
                onClick: void 0 === r ? function () {} : r,
                onHover: n,
                focusStyle: { boxShadow: "0 0 4px " + t },
            },
            d.createElement("div", { style: a.dot }),
        );
    },
    nT = function (e) {
        var t = e.hex,
            r = e.rgb,
            n = e.onChange,
            o = (0, h.default)({
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
            a = function (e, t) {
                e.r || e.g || e.b
                    ? n({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, source: "rgb" }, t)
                    : n({ hex: e.hex, source: "hex" }, t);
            };
        return d.createElement(
            "div",
            { style: o.fields, className: "flexbox-fix" },
            d.createElement("div", { style: o.active }),
            d.createElement(j, {
                style: { wrap: o.HEXwrap, input: o.HEXinput, label: o.HEXlabel },
                label: "hex",
                value: t,
                onChange: a,
            }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "r",
                value: r.r,
                onChange: a,
            }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "g",
                value: r.g,
                onChange: a,
            }),
            d.createElement(j, {
                style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
                label: "b",
                value: r.b,
                onChange: a,
            }),
        );
    };
var nD = function (e) {
    var t = e.onChange,
        r = e.onSwatchHover,
        n = e.colors,
        o = e.hex,
        a = e.rgb,
        i = e.styles,
        l = void 0 === i ? {} : i,
        s = e.className,
        u = (0, h.default)(
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
        p = function (e, r) {
            e.hex ? tZ(e.hex) && t({ hex: e.hex, source: "hex" }, r) : t(e, r);
        };
    return d.createElement(
        tw,
        { style: u.Compact, styles: l },
        d.createElement(
            "div",
            { style: u.compact, className: "compact-picker " + (void 0 === s ? "" : s) },
            d.createElement(
                "div",
                null,
                nr(n, function (e) {
                    return d.createElement(nF, {
                        key: e,
                        color: e,
                        active: e.toLowerCase() === o,
                        onClick: p,
                        onSwatchHover: r,
                    });
                }),
                d.createElement("div", { style: u.clear }),
            ),
            d.createElement(nT, { hex: o, rgb: a, onChange: p }),
        ),
    );
};
(nD.propTypes = { colors: T().arrayOf(T().string), styles: T().object }),
    (nD.defaultProps = {
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
    t2(nD);
let nL = (0, h.handleHover)(function (e) {
    var t = e.hover,
        r = e.color,
        n = e.onClick,
        o = e.onSwatchHover,
        a = { position: "relative", zIndex: "2", outline: "2px solid #fff", boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)" },
        i = (0, h.default)(
            { default: { swatch: { width: "25px", height: "25px", fontSize: "0" } }, hover: { swatch: a } },
            { hover: t },
        );
    return d.createElement(
        "div",
        { style: i.swatch },
        d.createElement(t7, { color: r, onClick: n, onHover: o, focusStyle: a }),
    );
});
var nz = function (e) {
    var t = e.width,
        r = e.colors,
        n = e.onChange,
        o = e.onSwatchHover,
        a = e.triangle,
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
                "hide-triangle": "hide" === a,
                "top-left-triangle": "top-left" === a,
                "top-right-triangle": "top-right" === a,
                "bottom-left-triangle": "bottom-left" === a,
                "bottom-right-triangle": "bottom-right" === a,
            },
        ),
        u = function (e, t) {
            return n({ hex: e, source: "hex" }, t);
        };
    return d.createElement(
        "div",
        { style: s.card, className: "github-picker " + (void 0 === l ? "" : l) },
        d.createElement("div", { style: s.triangleShadow }),
        d.createElement("div", { style: s.triangle }),
        nr(r, function (e) {
            return d.createElement(nL, { color: e, key: e, onClick: u, onSwatchHover: o });
        }),
    );
};
(nz.propTypes = {
    width: T().oneOfType([T().string, T().number]),
    colors: T().arrayOf(T().string),
    triangle: T().oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
    styles: T().object,
}),
    (nz.defaultProps = {
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
    t2(nz);
var nA =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    nH = function (e) {
        var t = e.width,
            r = e.height,
            n = e.onChange,
            o = e.hsl,
            a = e.direction,
            i = e.pointer,
            l = e.styles,
            s = e.className,
            u = (0, h.default)(
                tm(
                    { default: { picker: { position: "relative", width: t, height: r }, hue: { radius: "2px" } } },
                    void 0 === l ? {} : l,
                ),
            );
        return d.createElement(
            "div",
            { style: u.picker, className: "hue-picker " + (void 0 === s ? "" : s) },
            d.createElement(
                B,
                nA({}, u.hue, {
                    hsl: o,
                    pointer: i,
                    onChange: function (e) {
                        return n({ a: 1, h: e.h, l: 0.5, s: 1 });
                    },
                    direction: a,
                }),
            ),
        );
    };
(nH.propTypes = { styles: T().object }),
    (nH.defaultProps = {
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
    t2(nH),
    t2(function (e) {
        var t = e.onChange,
            r = e.hex,
            n = e.rgb,
            o = e.styles,
            a = void 0 === o ? {} : o,
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
                    a,
                ),
            ),
            s = function (e, r) {
                e.hex
                    ? tZ(e.hex) && t({ hex: e.hex, source: "hex" }, r)
                    : (e.r || e.g || e.b) && t({ r: e.r || n.r, g: e.g || n.g, b: e.b || n.b, source: "rgb" }, r);
            };
        return d.createElement(
            tw,
            { styles: a },
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
            o = e.hex,
            a = (0, h.default)({
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
            i = function (e, o) {
                e["#"]
                    ? tZ(e["#"]) && t({ hex: e["#"], source: "hex" }, o)
                    : e.r || e.g || e.b
                      ? t({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, source: "rgb" }, o)
                      : (e.h || e.s || e.v) && t({ h: e.h || n.h, s: e.s || n.s, v: e.v || n.v, source: "hsv" }, o);
            };
        return d.createElement(
            "div",
            { style: a.fields },
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "h",
                value: Math.round(n.h),
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "s",
                value: Math.round(100 * n.s),
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "v",
                value: Math.round(100 * n.v),
                onChange: i,
            }),
            d.createElement("div", { style: a.divider }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "r",
                value: r.r,
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "g",
                value: r.g,
                onChange: i,
            }),
            d.createElement(j, {
                style: { wrap: a.RGBwrap, input: a.RGBinput, label: a.RGBlabel },
                label: "b",
                value: r.b,
                onChange: i,
            }),
            d.createElement("div", { style: a.divider }),
            d.createElement(j, {
                style: { wrap: a.HEXwrap, input: a.HEXinput, label: a.HEXlabel },
                label: "#",
                value: o.replace("#", ""),
                onChange: i,
            }),
            d.createElement(
                "div",
                { style: a.fieldSymbols },
                d.createElement("div", { style: a.symbol }, "\xb0"),
                d.createElement("div", { style: a.symbol }, "%"),
                d.createElement("div", { style: a.symbol }, "%"),
            ),
        );
    },
    nU = function (e) {
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
    nW = function () {
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
            o = e.active,
            a = (0, h.default)(
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
                { active: o },
            );
        return d.createElement("div", { style: a.button, onClick: t }, r || n);
    },
    nG = function (e) {
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
                                    d.createElement(tH, {
                                        hsl: this.props.hsl,
                                        hsv: this.props.hsv,
                                        pointer: nU,
                                        onChange: this.props.onChange,
                                    }),
                                ),
                                d.createElement(
                                    "div",
                                    { style: n.hue },
                                    d.createElement(B, {
                                        direction: "vertical",
                                        hsl: this.props.hsl,
                                        pointer: nW,
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
                                            d.createElement(nG, {
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
(nI.propTypes = { header: T().string, styles: T().object }),
    (nI.defaultProps = { header: "Color Picker", styles: {} }),
    t2(nI);
let nY = function (e) {
    var t = e.onChange,
        r = e.rgb,
        n = e.hsl,
        o = e.hex,
        a = e.disableAlpha,
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
            { disableAlpha: a },
        ),
        l = function (e, o) {
            e.hex
                ? tZ(e.hex) && t({ hex: e.hex, source: "hex" }, o)
                : e.r || e.g || e.b
                  ? t({ r: e.r || r.r, g: e.g || r.g, b: e.b || r.b, a: r.a, source: "rgb" }, o)
                  : e.a &&
                    (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
                    (e.a /= 100),
                    t({ h: n.h, s: n.s, l: n.l, a: e.a, source: "rgb" }, o));
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
                value: o.replace("#", ""),
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
            o = e.onSwatchHover,
            a = (0, h.default)(
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
            { style: a.colors, className: "flexbox-fix" },
            t.map(function (e) {
                var t = "string" == typeof e ? { color: e } : e,
                    r = "" + t.color + (t.title || "");
                return d.createElement(
                    "div",
                    { key: r, style: a.swatchWrap },
                    d.createElement(
                        t7,
                        n$({}, t, {
                            style: a.swatch,
                            onClick: i,
                            onHover: o,
                            focusStyle: { boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color },
                        }),
                    ),
                );
            }),
        );
    };
nK.propTypes = {
    colors: T().arrayOf(T().oneOfType([T().string, T().shape({ color: T().string, title: T().string })])).isRequired,
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
            o = e.hsv,
            a = e.hsl,
            i = e.onChange,
            l = e.onSwatchHover,
            s = e.disableAlpha,
            u = e.presetColors,
            p = e.renderers,
            c = e.styles,
            f = void 0 === c ? {} : c,
            b = e.className,
            v = (0, h.default)(
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
            { style: v.picker, className: "sketch-picker " + (void 0 === b ? "" : b) },
            d.createElement(
                "div",
                { style: v.saturation },
                d.createElement(tH, { style: v.Saturation, hsl: a, hsv: o, onChange: i }),
            ),
            d.createElement(
                "div",
                { style: v.controls, className: "flexbox-fix" },
                d.createElement(
                    "div",
                    { style: v.sliders },
                    d.createElement("div", { style: v.hue }, d.createElement(B, { style: v.Hue, hsl: a, onChange: i })),
                    d.createElement(
                        "div",
                        { style: v.alpha },
                        d.createElement(O, { style: v.Alpha, rgb: r, hsl: a, renderers: p, onChange: i }),
                    ),
                ),
                d.createElement(
                    "div",
                    { style: v.color },
                    d.createElement(m, null),
                    d.createElement("div", { style: v.activeColor }),
                ),
            ),
            d.createElement(nY, { rgb: r, hsl: a, hex: n, onChange: i, disableAlpha: s }),
            d.createElement(nK, { colors: u, onClick: i, onSwatchHover: l }),
        );
    };
(nZ.propTypes = { disableAlpha: T().bool, width: T().oneOfType([T().string, T().number]), styles: T().object }),
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
            o = void 0 === n ? function () {} : n,
            a = e.active,
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
                { active: a, first: i, last: l },
            );
        return d.createElement("div", {
            style: s.swatch,
            onClick: function (e) {
                return o({ h: t.h, s: 0.5, l: r, source: "hsl" }, e);
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
        o = e.styles,
        a = e.className,
        i = (0, h.default)(
            tm(
                { default: { hue: { height: "12px", position: "relative" }, Hue: { radius: "2px" } } },
                void 0 === o ? {} : o,
            ),
        );
    return d.createElement(
        "div",
        { style: i.wrap || {}, className: "slider-picker " + (void 0 === a ? "" : a) },
        d.createElement("div", { style: i.hue }, d.createElement(B, { style: i.Hue, hsl: t, pointer: n, onChange: r })),
        d.createElement("div", { style: i.swatches }, d.createElement(nQ, { hsl: t, onClick: r })),
    );
};
(n0.propTypes = { styles: T().object }),
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
            o = e.first,
            a = e.last,
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
                { first: o, last: a, active: i, "color-#FFFFFF": "#FFFFFF" === t, transparent: "transparent" === t },
            );
        return d.createElement(
            t7,
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
            o = e.active,
            a = (0, h.default)({
                default: { group: { paddingBottom: "10px", width: "40px", float: "left", marginRight: "10px" } },
            });
        return d.createElement(
            "div",
            { style: a.group },
            nr(n, function (e, a) {
                return d.createElement(n2, {
                    key: e,
                    color: e,
                    active: e.toLowerCase() === o,
                    first: 0 === a,
                    last: a === n.length - 1,
                    onClick: t,
                    onSwatchHover: r,
                });
            }),
        );
    };
var n3 = function (e) {
    var t = e.width,
        r = e.height,
        n = e.onChange,
        o = e.onSwatchHover,
        a = e.colors,
        i = e.hex,
        l = e.styles,
        s = e.className,
        u = (0, h.default)(
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
        p = function (e, t) {
            return n({ hex: e, source: "hex" }, t);
        };
    return d.createElement(
        "div",
        { style: u.picker, className: "swatches-picker " + (void 0 === s ? "" : s) },
        d.createElement(
            tw,
            null,
            d.createElement(
                "div",
                { style: u.overflow },
                d.createElement(
                    "div",
                    { style: u.body },
                    nr(a, function (e) {
                        return d.createElement(n5, {
                            key: e.toString(),
                            group: e,
                            active: i,
                            onClick: p,
                            onSwatchHover: o,
                        });
                    }),
                    d.createElement("div", { style: u.clear }),
                ),
            ),
        ),
    );
};
(n3.propTypes = {
    width: T().oneOfType([T().string, T().number]),
    height: T().oneOfType([T().string, T().number]),
    colors: T().arrayOf(T().arrayOf(T().string)),
    styles: T().object,
}),
    (n3.defaultProps = {
        width: 320,
        height: 240,
        colors: [
            [na["900"], na["700"], na["500"], na["300"], na["100"]],
            [ni["900"], ni["700"], ni["500"], ni["300"], ni["100"]],
            [nl["900"], nl["700"], nl["500"], nl["300"], nl["100"]],
            [ns["900"], ns["700"], ns["500"], ns["300"], ns["100"]],
            [nu["900"], nu["700"], nu["500"], nu["300"], nu["100"]],
            [np["900"], np["700"], np["500"], np["300"], np["100"]],
            [nc["900"], nc["700"], nc["500"], nc["300"], nc["100"]],
            [nf["900"], nf["700"], nf["500"], nf["300"], nf["100"]],
            [nd["900"], nd["700"], nd["500"], nd["300"], nd["100"]],
            ["#194D33", nh["700"], nh["500"], nh["300"], nh["100"]],
            [nb["900"], nb["700"], nb["500"], nb["300"], nb["100"]],
            [nv["900"], nv["700"], nv["500"], nv["300"], nv["100"]],
            [ng["900"], ng["700"], ng["500"], ng["300"], ng["100"]],
            [nx["900"], nx["700"], nx["500"], nx["300"], nx["100"]],
            [ny["900"], ny["700"], ny["500"], ny["300"], ny["100"]],
            [nm["900"], nm["700"], nm["500"], nm["300"], nm["100"]],
            [nw["900"], nw["700"], nw["500"], nw["300"], nw["100"]],
            [nE["900"], nE["700"], nE["500"], nE["300"], nE["100"]],
            ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
        ],
        styles: {},
    }),
    t2(n3);
var n4 = function (e) {
    var t = e.onChange,
        r = e.onSwatchHover,
        n = e.hex,
        o = e.colors,
        a = e.width,
        i = e.triangle,
        l = e.styles,
        s = e.className,
        u = (0, h.default)(
            tm(
                {
                    default: {
                        card: {
                            width: a,
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
        p = function (e, r) {
            tZ(e) && t({ hex: e, source: "hex" }, r);
        };
    return d.createElement(
        "div",
        { style: u.card, className: "twitter-picker " + (void 0 === s ? "" : s) },
        d.createElement("div", { style: u.triangleShadow }),
        d.createElement("div", { style: u.triangle }),
        d.createElement(
            "div",
            { style: u.body },
            nr(o, function (e, t) {
                return d.createElement(t7, {
                    key: t,
                    color: e,
                    hex: e,
                    style: u.swatch,
                    onClick: p,
                    onHover: r,
                    focusStyle: { boxShadow: "0 0 4px " + e },
                });
            }),
            d.createElement("div", { style: u.hash }, "#"),
            d.createElement(j, { label: null, style: { input: u.input }, value: n.replace("#", ""), onChange: p }),
            d.createElement("div", { style: u.clear }),
        ),
    );
};
(n4.propTypes = {
    width: T().oneOfType([T().string, T().number]),
    triangle: T().oneOf(["hide", "top-left", "top-right"]),
    colors: T().arrayOf(T().string),
    styles: T().object,
}),
    (n4.defaultProps = {
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
    t2(n4);
var n6 = function (e) {
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
(n6.propTypes = { hsl: T().shape({ h: T().number, s: T().number, l: T().number, a: T().number }) }),
    (n6.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
var n7 = function (e) {
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
(n7.propTypes = { hsl: T().shape({ h: T().number, s: T().number, l: T().number, a: T().number }) }),
    (n7.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } });
let n8 = function (e) {
    var t = e.onChange,
        r = e.rgb,
        n = e.hsl,
        o = e.hex,
        a = e.hsv,
        i = function (e, r) {
            if (e.hex) tZ(e.hex) && t({ hex: e.hex, source: "hex" }, r);
            else if (e.rgb) {
                var n = e.rgb.split(",");
                tQ(e.rgb, "rgb") && t({ r: n[0], g: n[1], b: n[2], a: 1, source: "rgb" }, r);
            } else if (e.hsv) {
                var o = e.hsv.split(",");
                tQ(e.hsv, "hsv") &&
                    ((o[2] = o[2].replace("%", "")),
                    (o[1] = o[1].replace("%", "")),
                    (o[0] = o[0].replace("\xb0", "")),
                    1 == o[1] ? (o[1] = 0.01) : 1 == o[2] && (o[2] = 0.01),
                    t({ h: Number(o[0]), s: Number(o[1]), v: Number(o[2]), source: "hsv" }, r));
            } else if (e.hsl) {
                var a = e.hsl.split(",");
                tQ(e.hsl, "hsl") &&
                    ((a[2] = a[2].replace("%", "")),
                    (a[1] = a[1].replace("%", "")),
                    (a[0] = a[0].replace("\xb0", "")),
                    1 == p[1] ? (p[1] = 0.01) : 1 == p[2] && (p[2] = 0.01),
                    t({ h: Number(a[0]), s: Number(a[1]), v: Number(a[2]), source: "hsl" }, r));
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
        u = Math.round(n.h) + "\xb0, " + Math.round(100 * n.s) + "%, " + Math.round(100 * n.l) + "%",
        p = Math.round(a.h) + "\xb0, " + Math.round(100 * a.s) + "%, " + Math.round(100 * a.v) + "%";
    return d.createElement(
        "div",
        { style: l.wrap, className: "flexbox-fix" },
        d.createElement(
            "div",
            { style: l.fields },
            d.createElement(
                "div",
                { style: l.double },
                d.createElement(j, { style: { input: l.input, label: l.label }, label: "hex", value: o, onChange: i }),
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
                        value: p,
                        onChange: i,
                    }),
                ),
                d.createElement(
                    "div",
                    { style: l.single },
                    d.createElement(j, {
                        style: { input: l.input2, label: l.label2 },
                        label: "hsl",
                        value: u,
                        onChange: i,
                    }),
                ),
            ),
        ),
    );
};
var n9 = function (e) {
    var t = e.width,
        r = e.onChange,
        n = e.rgb,
        o = e.hsl,
        a = e.hsv,
        i = e.hex,
        l = e.header,
        s = e.styles,
        u = e.className,
        p = (0, h.default)(
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
        { style: p.picker, className: "google-picker " + (void 0 === u ? "" : u) },
        d.createElement("div", { style: p.head }, l),
        d.createElement("div", { style: p.swatch }),
        d.createElement(
            "div",
            { style: p.saturation },
            d.createElement(tH, { hsl: o, hsv: a, pointer: n6, onChange: r }),
        ),
        d.createElement(
            "div",
            { style: p.body },
            d.createElement(
                "div",
                { style: p.controls, className: "flexbox-fix" },
                d.createElement(
                    "div",
                    { style: p.hue },
                    d.createElement(B, { style: p.Hue, hsl: o, radius: "4px", pointer: n7, onChange: r }),
                ),
            ),
            d.createElement(n8, { rgb: n, hsl: o, hex: i, hsv: a, onChange: r }),
        ),
    );
};
(n9.propTypes = { width: T().oneOfType([T().string, T().number]), styles: T().object, header: T().string }),
    (n9.defaultProps = { width: 652, styles: {}, header: "Color picker" }),
    t2(n9);
