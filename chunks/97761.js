n.d(e, { default: () => f });
var r = n(200651),
    o = n(834345),
    l = n(115850),
    i = n(480743),
    c = n(481060),
    a = n(388032),
    s = n(111929);
function u() {
    let t = [
        {
            icon: l.e,
            text: a.NW.string(a.t.OYu45e)
        },
        {
            icon: i.k,
            text: a.NW.string(a.t['5a8g/f'])
        },
        {
            icon: o.N,
            text: a.NW.string(a.t.k6sOl5)
        }
    ];
    return t.map((e, n) => {
        let { icon: o, text: l } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    'div',
                    {
                        className: s.bulletPointRow,
                        children: [
                            (0, r.jsx)(o, {}),
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                className: s.bulletPointText,
                                children: l
                            })
                        ]
                    },
                    n
                ),
                n !== t.length - 1 && (0, r.jsx)('div', { className: s.bulletPointSeparator })
            ]
        });
    });
}
let f = function (t) {
    var e,
        n,
        { onClickButton: o } = t,
        l = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(t);
                    for (r = 0; r < l.length; r++) (n = l[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (r = 0; r < l.length; r++) (n = l[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ['onClickButton']);
    return (0, r.jsxs)(
        c.Y0X,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })({ size: c.CgR.SMALL }, l)),
        (n = n =
            {
                className: s.modalRoot,
                children: [
                    (0, r.jsx)(c.xBx, {
                        children: (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/semibold',
                            className: s.heading,
                            children: a.NW.string(a.t.WkhDVF)
                        })
                    }),
                    (0, r.jsxs)(c.hzk, {
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                className: s.contentText,
                                children: a.NW.string(a.t.wN9nIC)
                            }),
                            (0, r.jsx)('div', {
                                className: s.bulletPointsContainer,
                                children: (0, r.jsx)(u, {})
                            })
                        ]
                    }),
                    (0, r.jsx)(c.mzw, {
                        className: s.modalFooter,
                        children: (0, r.jsx)(c.zxk, {
                            fullWidth: !0,
                            onClick: o,
                            children: a.NW.string(a.t.RscU7O)
                        })
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e)
    );
};
