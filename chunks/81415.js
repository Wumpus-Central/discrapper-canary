e.d(n, {
    OL: () => y,
    rU: () => h
});
var r = e(332009);
e(190031);
var i = e(192379),
    o = e(539528);
e(476400);
var a = e(910974),
    c = e(312089),
    s = e(431803);
i.Component, i.Component;
var u = function (t, n) {
        return 'function' == typeof t ? t(n) : t;
    },
    l = function (t, n) {
        return 'string' == typeof t ? (0, o.ob)(t, null, null, n) : t;
    },
    p = function (t) {
        return t;
    },
    f = i.forwardRef;
void 0 === f && (f = p);
var v = f(function (t, n) {
        var e = t.innerRef,
            r = t.navigate,
            o = t.onClick,
            s = (0, c.Z)(t, ['innerRef', 'navigate', 'onClick']),
            u = s.target,
            l = (0, a.Z)({}, s, {
                onClick: function (t) {
                    try {
                        o && o(t);
                    } catch (n) {
                        throw (t.preventDefault(), n);
                    }
                    t.defaultPrevented || 0 !== t.button || (u && '_self' !== u) || t.metaKey || t.altKey || t.ctrlKey || t.shiftKey || (t.preventDefault(), r());
                }
            });
        return p !== f ? (l.ref = n || e) : (l.ref = e), i.createElement('a', l);
    }),
    h = f(function (t, n) {
        var e = t.component,
            h = void 0 === e ? v : e,
            m = t.replace,
            d = t.to,
            y = t.innerRef,
            C = (0, c.Z)(t, ['component', 'replace', 'to', 'innerRef']);
        return i.createElement(r.s6.Consumer, null, function (t) {
            t || (0, s.Z)(!1);
            var e = t.history,
                r = l(u(d, t.location), t.location),
                c = r ? e.createHref(r) : '',
                v = (0, a.Z)({}, C, {
                    href: c,
                    navigate: function () {
                        var n = u(d, t.location),
                            r = (0, o.Ep)(t.location) === (0, o.Ep)(l(n));
                        (m || r ? e.replace : e.push)(n);
                    }
                });
            return p !== f ? (v.ref = n || y) : (v.innerRef = y), i.createElement(h, v);
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
        p = t.activeClassName,
        f = void 0 === p ? 'active' : p,
        v = t.activeStyle,
        y = t.className,
        C = t.exact,
        R = t.isActive,
        g = t.location,
        E = t.sensitive,
        Z = t.strict,
        x = t.style,
        _ = t.to,
        k = t.innerRef,
        w = (0, c.Z)(t, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef']);
    return i.createElement(r.s6.Consumer, null, function (t) {
        t || (0, s.Z)(!1);
        var e = g || t.location,
            c = l(u(_, e), e),
            p = c.pathname,
            N = p && p.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            L = N
                ? (0, r.LX)(e.pathname, {
                      path: N,
                      exact: C,
                      sensitive: E,
                      strict: Z
                  })
                : null,
            M = !!(R ? R(L, e) : L),
            A = 'function' == typeof y ? y(M) : y,
            b = 'function' == typeof x ? x(M) : x;
        M &&
            ((A = (function () {
                for (var t = arguments.length, n = Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                return n
                    .filter(function (t) {
                        return t;
                    })
                    .join(' ');
            })(A, f)),
            (b = (0, a.Z)({}, b, v)));
        var K = (0, a.Z)(
            {
                'aria-current': (M && o) || null,
                className: A,
                style: b,
                to: c
            },
            w
        );
        return m !== d ? (K.ref = n || k) : (K.innerRef = k), i.createElement(h, K);
    });
});
