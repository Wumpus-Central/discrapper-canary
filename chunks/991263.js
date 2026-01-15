n.d(t, { Z: () => p });
var r = n(54381),
    i = n(473749),
    l = n(657707),
    a = n(481060),
    o = n(315322),
    s = n(531578),
    c = n(388032),
    u = n(992733);
function d(e) {
    let { rating: t, onClick: n } = e,
        o = t === s.aZ.BAD ? l.ThumbsDownIcon : l.ThumbsUpIcon,
        c = i.useCallback(() => {
            n(t);
        }, [n, t]);
    return (0, r.jsx)(a.P3F, {
        onClick: c,
        className: u.iconContainer,
        children: (0, r.jsx)(o, {
            size: "md",
            color: "currentColor",
            className: u.icon,
        }),
    });
}
let p = function (e) {
    let { searchContext: t, dismissFeedbackEntrypoint: l } = e;
    i.useEffect(() => {
        (0, o.bo)({ searchContext: t });
    }, [t]);
    let p = i.useCallback(
        (e) => {
            l(),
                (0, a.ZDy)(async () => {
                    let { default: i } = await n.e("69606").then(n.bind(n, 922696));
                    return (n) => {
                        var l, a;
                        return (0, r.jsx)(
                            i,
                            ((l = (function (e) {
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
                            })({}, n)),
                            (a = a =
                                {
                                    searchContext: t,
                                    rating: e,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            l),
                        );
                    };
                });
        },
        [l, t],
    );
    return (0, r.jsxs)("div", {
        className: u.container,
        children: [
            (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: c.intl.string(c.t["I+4OJC"]),
            }),
            (0, r.jsxs)("div", {
                className: u.icons,
                children: [
                    (0, r.jsx)(d, {
                        rating: s.aZ.GOOD,
                        onClick: p,
                    }),
                    (0, r.jsx)(d, {
                        rating: s.aZ.BAD,
                        onClick: p,
                    }),
                ],
            }),
        ],
    });
};
