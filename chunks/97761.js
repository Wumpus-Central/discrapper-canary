n.d(e, { default: () => b });
var r = n(200651),
    o = n(192379),
    l = n(834345),
    i = n(115850),
    c = n(480743),
    a = n(481060),
    s = n(388032),
    u = n(111929);
function f() {
    let t = [
        {
            icon: i.e,
            text: s.NW.string(s.t.OYu45e)
        },
        {
            icon: c.k,
            text: s.NW.string(s.t['5a8g/f'])
        },
        {
            icon: l.N,
            text: s.NW.string(s.t.k6sOl5)
        }
    ];
    return t.map((e, n) => {
        let { icon: l, text: i } = e;
        return (0, r.jsxs)(
            o.Fragment,
            {
                children: [
                    (0, r.jsxs)('div', {
                        className: u.bulletPointRow,
                        children: [
                            (0, r.jsx)(l, {}),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                className: u.bulletPointText,
                                children: i
                            })
                        ]
                    }),
                    n !== t.length - 1 && (0, r.jsx)('div', { className: u.bulletPointSeparator })
                ]
            },
            n
        );
    });
}
let b = function (t) {
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
        a.Y0X,
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
        })({ size: a.CgR.SMALL }, l)),
        (n = n =
            {
                className: u.modalRoot,
                children: [
                    (0, r.jsx)(a.xBx, {
                        children: (0, r.jsx)(a.X6q, {
                            variant: 'heading-xl/semibold',
                            className: u.heading,
                            children: s.NW.string(s.t.WkhDVF)
                        })
                    }),
                    (0, r.jsxs)(a.hzk, {
                        scrollbarType: 'none',
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-secondary',
                                className: u.contentText,
                                children: s.NW.string(s.t.wN9nIC)
                            }),
                            (0, r.jsx)('div', {
                                className: u.bulletPointsContainer,
                                children: (0, r.jsx)(f, {})
                            })
                        ]
                    }),
                    (0, r.jsx)(a.mzw, {
                        className: u.modalFooter,
                        children: (0, r.jsx)(a.zxk, {
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
