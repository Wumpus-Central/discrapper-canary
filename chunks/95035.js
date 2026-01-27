n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(976860),
    a = n(652215);

function o(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = l.forwardRef(function (e, t) {
    let [n, ...u] = [e, t],
        { href: d, children: p, onClick: h, onKeyPress: f, focusProps: g } = n,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(n, ["href", "children", "onClick", "onKeyPress", "focusProps"]),
        [b] = u,
        A = l.useCallback(
            (e) => {
                e.repeat ||
                    ((e.charCode === a.Ks6.SPACE || e.charCode === a.Ks6.ENTER) &&
                        (e.preventDefault(), null != d && (0, s.pX)(d), null == h || h()),
                    null == f || f(e));
            },
            [d, f, h],
        ),
        y = l.useCallback(
            (e) => {
                e.metaKey ||
                    e.shiftKey ||
                    0 !== e.button ||
                    (e.preventDefault(), e.stopPropagation(), null != d && (0, s.pX)(d), null == h || h());
            },
            [d, h],
        ),
        _ = (0, r.jsx)(
            "a",
            c(
                o(
                    {
                        ref: b,
                        href: d,
                        onClick: y,
                        onKeyPress: A,
                    },
                    m,
                ),
                {
                    children: p,
                },
            ),
        );
    return (0, r.jsx)(
        i.vN3,
        c(o({}, g), {
            children: _,
        }),
    );
});
