"use strict";
n.d(t, { Kd: () => c, N_: () => E });
var r = n(873263),
    i = n(238710),
    a = n(64700),
    s = n(830845);
n(655972);
var o = n(542113),
    l = n(725664),
    u = n(258635),
    c = (function (e) {
        function t() {
            for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, s.zR)(t.props)), t;
        }
        return (
            (0, i.A)(t, e),
            (t.prototype.render = function () {
                return a.createElement(r.Ix, { history: this.history, children: this.props.children });
            }),
            t
        );
    })(a.Component);
a.Component;
var d = function (e, t) {
        return "function" == typeof e ? e(t) : e;
    },
    _ = function (e, t) {
        return "string" == typeof e ? (0, s.yJ)(e, null, null, t) : e;
    },
    f = function (e) {
        return e;
    },
    h = a.forwardRef;
function p(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === h && (h = f);
var g = h(function (e, t) {
        var n = e.innerRef,
            r = e.navigate,
            i = e.onClick,
            s = (0, l.A)(e, ["innerRef", "navigate", "onClick"]),
            u = s.target,
            c = (0, o.A)({}, s, {
                onClick: function (e) {
                    try {
                        i && i(e);
                    } catch (t) {
                        throw (e.preventDefault(), t);
                    }
                    e.defaultPrevented || 0 !== e.button || (u && "_self" !== u) || p(e) || (e.preventDefault(), r());
                },
            });
        return f !== h ? (c.ref = t || n) : (c.ref = n), a.createElement("a", c);
    }),
    E = h(function (e, t) {
        var n = e.component,
            i = void 0 === n ? g : n,
            c = e.replace,
            p = e.to,
            E = e.innerRef,
            A = (0, l.A)(e, ["component", "replace", "to", "innerRef"]);
        return a.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = e.history,
                r = _(d(p, e.location), e.location),
                l = r ? n.createHref(r) : "",
                g = (0, o.A)({}, A, {
                    href: l,
                    navigate: function () {
                        var t = d(p, e.location),
                            r = (0, s.AO)(e.location) === (0, s.AO)(_(t));
                        (c || r ? n.replace : n.push)(t);
                    },
                });
            return f !== h ? (g.ref = t || E) : (g.innerRef = E), a.createElement(i, g);
        });
    }),
    A = function (e) {
        return e;
    },
    I = a.forwardRef;
function T() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t
        .filter(function (e) {
            return e;
        })
        .join(" ");
}
void 0 === I && (I = A),
    I(function (e, t) {
        var n = e["aria-current"],
            i = void 0 === n ? "page" : n,
            s = e.activeClassName,
            c = void 0 === s ? "active" : s,
            f = e.activeStyle,
            h = e.className,
            p = e.exact,
            g = e.isActive,
            y = e.location,
            S = e.sensitive,
            v = e.strict,
            C = e.style,
            b = e.to,
            N = e.innerRef,
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
        return a.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = y || e.location,
                s = _(d(b, n), n),
                l = s.pathname,
                O = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                D = O ? (0, r.B6)(n.pathname, { path: O, exact: p, sensitive: S, strict: v }) : null,
                L = !!(g ? g(D, n) : D),
                w = "function" == typeof h ? h(L) : h,
                x = "function" == typeof C ? C(L) : C;
            L && ((w = T(w, c)), (x = (0, o.A)({}, x, f)));
            var P = (0, o.A)({ "aria-current": (L && i) || null, className: w, style: x, to: s }, R);
            return A !== I ? (P.ref = t || N) : (P.innerRef = N), a.createElement(E, P);
        });
    });
