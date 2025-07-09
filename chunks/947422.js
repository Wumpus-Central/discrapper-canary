n.d(e, { default: () => d });
var r = n(255367);
n(73800);
var o = n(755721),
    l = n(481060),
    i = n(313201),
    c = n(77880),
    a = n(388032),
    s = n(344785),
    u = n(298860);
let b = (t) => {
    let { text: e, icon: n, foreground: o } = t;
    return (0, r.jsxs)('div', {
        className: s.bulletContainer,
        children: [
            (0, r.jsx)('div', {
                className: s.iconContainer,
                children: (0, r.jsx)(n, {
                    color: null != o ? o : 'currentColor',
                    className: s.bulletIcon,
                    size: 'custom',
                    height: 40,
                    width: 40
                })
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: s.bulletText,
                children: e
            })
        ]
    });
};
function d(t) {
    var e,
        n,
        { transitionState: d, onClose: p } = t,
        f = (function (t, e) {
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
    let g = (0, i.Dt)(),
        { changeLeaveCallAndActivityIcons: j } = (0, c.A)({ location: 'StageChannelWelcomeModal' });
    return (0, r.jsx)(
        l.Y0X,
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
                transitionState: d,
                'aria-labelledby': g
            },
            f
        )),
        (n = n =
            {
                size: l.CgR.SMALL,
                parentComponent: 'StageChannelWelcomeModal',
                children: (0, r.jsxs)('div', {
                    className: s.content,
                    children: [
                        (0, r.jsx)('img', {
                            src: u,
                            alt: a.intl.string(a.t['5DRw+/']),
                            className: s.illustration
                        }),
                        (0, r.jsx)(l.X6q, {
                            id: g,
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            className: s.headerTitle,
                            children: a.intl.string(a.t.UVuXCg)
                        }),
                        (0, r.jsx)(b, {
                            text: a.intl.string(a.t.sBDfo6),
                            icon: l.nRN,
                            foreground: s.red
                        }),
                        (0, r.jsx)(b, {
                            text: a.intl.string(a.t.x58YtL),
                            icon: j ? l.PBZ : l.gkL
                        }),
                        (0, r.jsx)(b, {
                            text: a.intl.string(a.t.XtVqlZ),
                            icon: l.V9
                        }),
                        (0, r.jsx)(o.zx, {
                            color: o.zx.Colors.BRAND,
                            className: s.button,
                            onClick: p,
                            children: a.intl.string(a.t.obLqZ2)
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
