e.d(n, {
    OL: function () {
        return y;
    },
    rU: function () {
        return h;
    }
});
var r = e(332009);
e(190031);
var i = e(192379),
    o = e(539528);
e(476400);
var a = e(910974),
    c = e(312089),
    u = e(568895);
i.Component;
i.Component;
var s = function (t, n) {
        return 'function' == typeof t ? t(n) : t;
    },
    l = function (t, n) {
        return 'string' == typeof t ? (0, o.ob)(t, null, null, n) : t;
    },
    f = function (t) {
        return t;
    },
    p = i.forwardRef;
void 0 === p && (p = f);
var v = p(function (t, n) {
        var e = t.innerRef,
            r = t.navigate,
            o = t.onClick,
            u = (0, c.Z)(t, ['innerRef', 'navigate', 'onClick']),
            s = u.target,
            l = (0, a.Z)({}, u, {
                onClick: function (t) {
                    var n;
                    try {
                        o && o(t);
                    } catch (n) {
                        throw (t.preventDefault(), n);
                    }
                    if (!t.defaultPrevented && 0 === t.button && (!s || '_self' === s) && !((n = t).metaKey || n.altKey || n.ctrlKey || n.shiftKey)) t.preventDefault(), r();
                }
            });
        return f !== p ? (l.ref = n || e) : (l.ref = e), i.createElement('a', l);
    }),
    h = p(function (t, n) {
        var e = t.component,
            h = void 0 === e ? v : e,
            m = t.replace,
            d = t.to,
            y = t.innerRef,
            C = (0, c.Z)(t, ['component', 'replace', 'to', 'innerRef']);
        return i.createElement(r.s6.Consumer, null, function (t) {
            t || (0, u.Z)(!1);
            var e = t.history,
                r = l(s(d, t.location), t.location),
                c = r ? e.createHref(r) : '',
                v = (0, a.Z)({}, C, {
                    href: c,
                    navigate: function () {
                        var n = s(d, t.location),
                            r = (0, o.Ep)(t.location) === (0, o.Ep)(l(n));
                        (m || r ? e.replace : e.push)(n);
                    }
                });
            return f !== p ? (v.ref = n || y) : (v.innerRef = y), i.createElement(h, v);
        });
    }),
    m = function (t) {
        return t;
    },
    d = i.forwardRef;
void 0 === d && (d = m);
var y = d(function (t, n) {
    var e = t['aria-current'],
        o = void 0 === e ? 'page' : e,
        f = t.activeClassName,
        p = void 0 === f ? 'active' : f,
        v = t.activeStyle,
        y = t.className,
        C = t.exact,
        R = t.isActive,
        g = t.location,
        x = t.sensitive,
        E = t.strict,
        Z = t.style,
        _ = t.to,
        k = t.innerRef,
        N = (0, c.Z)(t, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']);
    return i.createElement(r.s6.Consumer, null, function (t) {
        t || (0, u.Z)(!1);
        var e = g || t.location,
            c = l(s(_, e), e),
            f = c.pathname,
            w = f && f.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            L = w
                ? (0, r.LX)(e.pathname, {
                      path: w,
                      exact: C,
                      sensitive: x,
                      strict: E
                  })
                : null,
            M = !!(R ? R(L, e) : L),
            A = 'function' == typeof y ? y(M) : y,
            b = 'function' == typeof Z ? Z(M) : Z;
        M &&
            ((A = (function () {
                for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                return n
                    .filter(function (t) {
                        return t;
                    })
                    .join(' ');
            })(A, p)),
            (b = (0, a.Z)({}, b, v)));
        var K = (0, a.Z)(
            {
                'aria-current': (M && o) || null,
                className: A,
                style: b,
                to: c
            },
            N
        );
        return m !== d ? (K.ref = n || k) : (K.innerRef = k), i.createElement(h, K);
    });
});
