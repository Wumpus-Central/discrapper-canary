n.d(e, { default: () => b });
var r = n(255367);
n(73800);
var o = n(481060),
    l = n(313201),
    i = n(77880),
    c = n(388032),
    a = n(344785),
    s = n(298860);
let u = (t) => {
    let { text: e, icon: n, foreground: l } = t;
    return (0, r.jsxs)('div', {
        className: a.bulletContainer,
        children: [
            (0, r.jsx)('div', {
                className: a.iconContainer,
                children: (0, r.jsx)(n, {
                    color: null != l ? l : 'currentColor',
                    className: a.bulletIcon,
                    size: 'custom',
                    height: 40,
                    width: 40
                })
            }),
            (0, r.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: a.bulletText,
                children: e
            })
        ]
    });
};
function b(t) {
    var e,
        n,
        { transitionState: b, onClose: d } = t,
        p = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(t);
                    for (r = 0; r < l.length; r++) ((n = l[r]), e.indexOf(n) >= 0 || (o[n] = t[n]));
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(t);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
            }
            return o;
        })(t, ['transitionState', 'onClose']);
    let f = (0, l.Dt)(),
        { changeLeaveCallAndActivityIcons: g } = (0, i.A)({ location: 'StageChannelWelcomeModal' });
    return (0, r.jsx)(
        o.Y0X,
        ((e = (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        })
                    )),
                    r.forEach(function (e) {
                        var r;
                        ((r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = r));
                    }));
            }
            return t;
        })(
            {
                transitionState: b,
                'aria-labelledby': f
            },
            p
        )),
        (n = n =
            {
                size: o.CgR.SMALL,
                parentComponent: 'StageChannelWelcomeModal',
                children: (0, r.jsxs)('div', {
                    className: a.content,
                    children: [
                        (0, r.jsx)('img', {
                            src: s,
                            alt: c.intl.string(c.t['5DRw+/']),
                            className: a.illustration
                        }),
                        (0, r.jsx)(o.X6q, {
                            id: f,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            className: a.headerTitle,
                            children: c.intl.string(c.t.UVuXCg)
                        }),
                        (0, r.jsx)(u, {
                            text: c.intl.string(c.t.sBDfo6),
                            icon: o.nRN,
                            foreground: a.red
                        }),
                        (0, r.jsx)(u, {
                            text: c.intl.string(c.t.x58YtL),
                            icon: g ? o.PBZ : o.gkL
                        }),
                        (0, r.jsx)(u, {
                            text: c.intl.string(c.t.XtVqlZ),
                            icon: o.V9
                        }),
                        (0, r.jsx)(o.zxk, {
                            color: o.zxk.Colors.BRAND,
                            className: a.button,
                            onClick: d,
                            children: c.intl.string(c.t.obLqZ2)
                        })
                    ]
                })
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
}
