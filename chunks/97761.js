n.d(e, { default: () => s });
var r = n(255367);
n(73800);
var o = n(481060),
    i = n(388032),
    l = n(853639);
function c() {
    return [
        {
            icon: o.ejJ,
            text: i.intl.string(i.t.OYu45e)
        },
        {
            icon: o.k5M,
            text: i.intl.string(i.t['5a8g/f'])
        },
        {
            icon: o.NpZ,
            text: i.intl.string(i.t.k6sOl5)
        }
    ].map((t, e) => {
        let { icon: n, text: i } = t;
        return (0, r.jsxs)(
            'div',
            {
                className: l.bulletPointRow,
                children: [
                    (0, r.jsx)(n, {}),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-primary',
                        className: l.bulletPointText,
                        children: i
                    })
                ]
            },
            e
        );
    });
}
let s = function (t) {
    var e,
        n,
        { onClickButton: s } = t,
        a = (function (t, e) {
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
        o.Y0X,
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
        })({ size: o.CgR.SMALL }, a)),
        (n = n =
            {
                className: l.modalRoot,
                children: [
                    (0, r.jsx)(o.xBx, {
                        children: (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            className: l.heading,
                            children: i.intl.string(i.t.WkhDVF)
                        })
                    }),
                    (0, r.jsxs)(o.hzk, {
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                className: l.contentText,
                                children: i.intl.string(i.t.wN9nIC)
                            }),
                            (0, r.jsx)('div', {
                                className: l.bulletPointsContainer,
                                children: (0, r.jsx)(c, {})
                            })
                        ]
                    }),
                    (0, r.jsx)(o.mzw, {
                        className: l.modalFooter,
                        children: (0, r.jsx)(o.zxk, {
                            fullWidth: !0,
                            onClick: s,
                            children: i.intl.string(i.t.RscU7O)
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
