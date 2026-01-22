n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(615300),
    o = n(837381),
    c = n(397927),
    u = n(442433);
n(687599);
var d = n(102752);

function p(e) {
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

function f(e, t) {
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
let h = function (e) {
    let {
            index: t,
            children: l,
            user: h,
            channel: A,
            onClick: g,
            isFocused: m,
            isActive: b,
            onOtherHover: _,
            className: E,
        } = e,
        [O, y] = i.useState(!1),
        [I, v] = i.useState(!1),
        S = () => {
            y(!0), !m || b || I || null == _ || _();
        },
        C = () => {
            y(!1);
        };
    return (0, r.jsx)(o.tG, {
        id: A.id,
        children: (e) =>
            (0, r.jsx)(c.vN3, {
                offset: {
                    left: -8,
                    right: -8,
                },
                children: (0, r.jsx)(
                    s.A.div,
                    f(
                        p(
                            {
                                className: a()(d.Cf, E, {
                                    [d.vu]: b || I,
                                    [d.CJ]: 0 === t,
                                }),
                                onContextMenu: (e) => {
                                    null != h &&
                                        (v(!0),
                                        (0, u.L3)(
                                            e,
                                            async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("97262"),
                                                    n.e("32418"),
                                                    n.e("99871"),
                                                ]).then(n.bind(n, 668569));
                                                return (t) =>
                                                    (0, r.jsx)(
                                                        e,
                                                        f(p({}, t), {
                                                            user: h,
                                                        }),
                                                    );
                                            },
                                            {
                                                onClose: () => {
                                                    v(!1);
                                                },
                                            },
                                        ));
                                },
                                onMouseEnter: S,
                                onMouseLeave: C,
                                onClick: null != g ? g : void 0,
                                style: {
                                    LIST_ROW_HEIGHT: 73,
                                    opacity: 1,
                                },
                            },
                            e,
                        ),
                        {
                            children: l(O || b || I),
                        },
                    ),
                ),
            }),
    });
};
