n.d(t, {
    A: () => l,
});
var i = n(627968);
n(64700);
var s = n(953727);
let l = (e) => {
    var t, n;
    let { width: l = 24, height: r = 24, color: a = "currentColor", className: o, foreground: c } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                s,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++)
                    (i = n[s]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        s = {},
                        l = Object.getOwnPropertyNames(e);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                    return s;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
                    (i = n[s]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l;
        })(e, ["width", "height", "color", "className", "foreground"]);
    return (0, i.jsx)(
        "svg",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })(
            {
                width: l,
                height: r,
                viewBox: "0 0 24 24",
                className: o,
            },
            (0, s.A)(d),
        )),
        (n = n =
            {
                children: (0, i.jsx)("path", {
                    className: c,
                    fill: a,
                    d: "M17.836 6.009A4.794 4.794 0 0 1 15.658 2h-3.439l-.005 13.78a2.892 2.892 0 0 1-2.885 2.782 2.893 2.893 0 0 1-2.89-2.89 2.894 2.894 0 0 1 2.89-2.89c.298 0 .583.048.853.133v-3.51a6.308 6.308 0 0 0-.853-.062A6.336 6.336 0 0 0 3 15.672a6.324 6.324 0 0 0 2.702 5.181A6.29 6.29 0 0 0 9.329 22a6.336 6.336 0 0 0 6.329-6.329V8.683c1.348.968 3 1.539 4.784 1.539V6.783c-.96 0-1.855-.285-2.605-.775v.001Z",
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
};
