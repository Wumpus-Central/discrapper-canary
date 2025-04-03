r.d(e, { default: () => u });
var n = r(200651);
r(192379);
var o = r(481060),
    i = r(313201),
    l = r(388032),
    c = r(344785),
    s = r(298860);
let a = (t) => {
    let { text: e, icon: r, foreground: i } = t;
    return (0, n.jsxs)('div', {
        className: c.bulletContainer,
        children: [
            (0, n.jsx)('div', {
                className: c.iconContainer,
                children: (0, n.jsx)(r, {
                    color: null != i ? i : 'currentColor',
                    className: c.bulletIcon,
                    size: 'custom',
                    height: 40,
                    width: 40
                })
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: c.bulletText,
                children: e
            })
        ]
    });
};
function u(t) {
    var e,
        r,
        { transitionState: u, onClose: b } = t,
        d = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++) (r = i[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ['transitionState', 'onClose']);
    let f = (0, i.Dt)();
    return (0, n.jsx)(
        o.Y0X,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        })
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })(
            {
                transitionState: u,
                'aria-labelledby': f
            },
            d
        )),
        (r = r =
            {
                size: o.CgR.SMALL,
                children: (0, n.jsxs)('div', {
                    className: c.content,
                    children: [
                        (0, n.jsx)('img', {
                            src: s,
                            alt: l.NW.string(l.t['5DRw+/']),
                            className: c.illustration
                        }),
                        (0, n.jsx)(o.X6q, {
                            id: f,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            className: c.headerTitle,
                            children: l.NW.string(l.t.UVuXCg)
                        }),
                        (0, n.jsx)(a, {
                            text: l.NW.string(l.t.sBDfo6),
                            icon: o.nRN,
                            foreground: c.red
                        }),
                        (0, n.jsx)(a, {
                            text: l.NW.string(l.t.x58YtL),
                            icon: o.gkL
                        }),
                        (0, n.jsx)(a, {
                            text: l.NW.string(l.t.XtVqlZ),
                            icon: o.V9
                        }),
                        (0, n.jsx)(o.zxk, {
                            color: o.zxk.Colors.BRAND,
                            className: c.button,
                            onClick: b,
                            children: l.NW.string(l.t.obLqZ2)
                        })
                    ]
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (t, e) {
                  var r = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(t);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e)
    );
}
