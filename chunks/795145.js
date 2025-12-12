n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(692547),
    l = n(481060),
    s = n(355011),
    a = n(388032),
    o = n(53774);
let c = (e) => {
    let {
            title: t,
            subtext: n = a.intl.string(a.t.jHpxwo),
            localizedNumber: c,
            isTrendingUp: u,
            isTrendingDown: d,
            tooltipText: g,
        } = e,
        m =
            null != g
                ? (0, r.jsx)(l.aML, {
                      "data-migration-pending": !0,
                      text: g,
                      position: "top",
                      "aria-label": "string" == typeof g ? g : t,
                      children: (e) => {
                          var t, n;
                          return (0, r.jsx)(
                              l.d3s,
                              ((t = (function (e) {
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
                              })(
                                  {
                                      size: "xs",
                                      color: "currentColor",
                                  },
                                  e,
                              )),
                              (n = n = { className: o.infoIcon }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    }),
                              t),
                          );
                      },
                  })
                : null;
    return (0, r.jsxs)("div", {
        className: o.analyticsCard,
        children: [
            (0, r.jsxs)(l.Text, {
                variant: "text-md/medium",
                className: o.analyticsCardTitle,
                children: [t, m],
            }),
            (0, r.jsx)("div", {
                className: o.analyticsCardContent,
                children: (0, r.jsx)(l.Text, {
                    className: null != c ? o.analyticsCardNumber : o.analyticsCardNumberNotAvailable,
                    variant: "text-lg/semibold",
                    children: null != c ? c : a.intl.string(a.t.jHpxwo),
                }),
            }),
            (0, r.jsxs)("div", {
                className: o.analyticsCardArrowSubText,
                children: [
                    u
                        ? (0, r.jsx)(s.Z, {
                              className: o.trendingArrow,
                              color: i.Z.unsafe_rawColors.GREEN_360.css,
                              "aria-label": a.intl.string(a.t["8mcccd"]),
                              width: 14,
                              height: 12,
                          })
                        : null,
                    d
                        ? (0, r.jsx)(s.Z, {
                              className: o.trendingArrowIconDown,
                              color: i.Z.unsafe_rawColors.RED_400.css,
                              "aria-label": a.intl.string(a.t.NLl6Q3),
                              width: 14,
                              height: 12,
                          })
                        : null,
                    (0, r.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        children: n,
                    }),
                ],
            }),
        ],
    });
};
