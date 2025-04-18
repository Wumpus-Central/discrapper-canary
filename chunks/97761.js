n.d(e, { default: () => f });
var r = n(200651);
n(192379);
var o = n(834345),
    i = n(115850),
    l = n(480743),
    c = n(481060),
    s = n(388032),
    a = n(853639);
function u() {
    return [
        {
            icon: i.e,
            text: s.NW.string(s.t.OYu45e)
        },
        {
            icon: l.k,
            text: s.NW.string(s.t['5a8g/f'])
        },
        {
            icon: o.N,
            text: s.NW.string(s.t.k6sOl5)
        }
    ].map((t, e) => {
        let { icon: n, text: o } = t;
        return (0, r.jsxs)(
            'div',
            {
                className: a.bulletPointRow,
                children: [
                    (0, r.jsx)(n, {}),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-primary',
                        className: a.bulletPointText,
                        children: o
                    })
                ]
            },
            e
        );
    });
}
let f = function (t) {
    var e,
        n,
        { onClickButton: o } = t,
        i = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++) (n = i[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
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
        })({ size: c.CgR.SMALL }, i)),
        (n = n =
            {
                className: a.modalRoot,
                children: [
                    (0, r.jsx)(c.xBx, {
                        children: (0, r.jsx)(c.X6q, {
                            variant: 'heading-xl/semibold',
                            className: a.heading,
                            children: s.NW.string(s.t.WkhDVF)
                        })
                    }),
                    (0, r.jsxs)(c.hzk, {
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsx)(c.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                className: a.contentText,
                                children: s.NW.string(s.t.wN9nIC)
                            }),
                            (0, r.jsx)('div', {
                                className: a.bulletPointsContainer,
                                children: (0, r.jsx)(u, {})
                            })
                        ]
                    }),
                    (0, r.jsx)(c.mzw, {
                        className: a.modalFooter,
                        children: (0, r.jsx)(c.zxk, {
                            fullWidth: !0,
                            onClick: o,
                            children: s.NW.string(s.t.RscU7O)
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
