"use strict";
n.d(t, { Kd: () => d, N_: () => p });
var r = n(873263),
    i = n(238710),
    s = n(64700),
    a = n(830845);
n(655972);
var o = n(542113),
    l = n(725664),
    u = n(258635),
    d = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, a.zR)(t.props)), t;
        }
        return (
            (0, i.A)(t, e),
            (t.prototype.render = function () {
                return s.createElement(r.Ix, { history: this.history, children: this.props.children });
            }),
            t
        );
    })(s.Component);
s.Component;
var c = function (e, t) {
        return "function" == typeof e ? e(t) : e;
    },
    _ = function (e, t) {
        return "string" == typeof e ? (0, a.yJ)(e, null, null, t) : e;
    },
    f = function (e) {
        return e;
    },
    E = s.forwardRef;
void 0 === E && (E = f);
var h = E(function (e, t) {
        var n = e.innerRef,
            r = e.navigate,
            i = e.onClick,
            a = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
            u = a.target,
            d = (0, o.A)({}, a, {
                onClick: function (e) {
                    try {
                        i && i(e);
                    } catch (t) {
                        throw (e.preventDefault(), t);
                    }
                    e.defaultPrevented ||
                        0 !== e.button ||
                        (u && "_self" !== u) ||
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        (e.preventDefault(), r());
                },
            });
        return f !== E ? (d.ref = t || n) : (d.ref = n), s.createElement("a", d);
    }),
    p = E(function (e, t) {
        var n = e.component,
            i = void 0 === n ? h : n,
            d = e.replace,
            p = e.to,
            m = e.innerRef,
            g = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
        return s.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = e.history,
                r = _(c(p, e.location), e.location),
                l = r ? n.createHref(r) : "",
                h = (0, o.A)({}, g, {
                    href: l,
                    navigate: function () {
                        var t = c(p, e.location),
                            r = (0, a.AO)(e.location) === (0, a.AO)(_(t));
                        (d || r ? n.replace : n.push)(t);
                    },
                });
            return f !== E ? (h.ref = t || m) : (h.innerRef = m), s.createElement(i, h);
        });
    }),
    m = function (e) {
        return e;
    },
    g = s.forwardRef;
void 0 === g && (g = m),
    g(function (e, t) {
        var n = e["aria-current"],
            i = void 0 === n ? "page" : n,
            a = e.activeClassName,
            d = void 0 === a ? "active" : a,
            f = e.activeStyle,
            E = e.className,
            h = e.exact,
            A = e.isActive,
            I = e.location,
            T = e.sensitive,
            S = e.strict,
            y = e.style,
            N = e.to,
            O = e.innerRef,
            R = (0, l.A)(e, [
                "aria-current",
                "activeClassName",
                "activeStyle",
                "className",
                "exact",
                "isActive",
                "location",
                "sensitive",
                "strict",
                "style",
                "to",
                "innerRef",
            ]);
        return s.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = I || e.location,
                a = _(c(N, n), n),
                l = a.pathname,
                v = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                C = v ? (0, r.B6)(n.pathname, { path: v, exact: h, sensitive: T, strict: S }) : null,
                b = !!(A ? A(C, n) : C),
                D = "function" == typeof E ? E(b) : E,
                L = "function" == typeof y ? y(b) : y;
            b &&
                ((D = (function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t
                        .filter(function (e) {
                            return e;
                        })
                        .join(" ");
                })(D, d)),
                (L = (0, o.A)({}, L, f)));
            var w = (0, o.A)({ "aria-current": (b && i) || null, className: D, style: L, to: a }, R);
            return m !== g ? (w.ref = t || O) : (w.innerRef = O), s.createElement(p, w);
        });
    });
