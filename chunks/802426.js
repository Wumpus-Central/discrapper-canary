r.d(t, { default: () => p }), r(388685), r(953529);
var n = r(951288),
    o = r(647438),
    i = r(793030),
    a = r(481060),
    c = r(921944),
    s = r(388032),
    l = r(64330);
function p(e) {
    var t,
        r,
        { modalConfig: p, markAsDismissed: d } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["modalConfig", "markAsDismissed"]);
    let f = o.useCallback(
            (e) => {
                var t;
                null == (t = p.onPrimaryClick) || t.call(p, e), d(c.L.TAKE_ACTION);
            },
            [p, d],
        ),
        y = [p.firstHeader, p.secondHeader].filter(Boolean).join(" "),
        b = [
            {
                variant: "secondary",
                text: s.intl.string(s.t["ETE/oC"]),
                onClick: u.onClose,
            },
            ...(null != p.primaryButtonText
                ? [
                      {
                          variant: "primary",
                          text: p.primaryButtonText,
                          onClick: f,
                      },
                  ]
                : []),
        ];
    return (0, n.jsx)(
        i.Modal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, u)),
        (r = r =
            {
                title: y,
                actions: b,
                size: "md",
                children: (0, n.jsx)("div", {
                    className: l.container,
                    children: (0, n.jsxs)("div", {
                        className: l.contentContainer,
                        children: [
                            (0, n.jsx)(a.Text, {
                                tag: "span",
                                className: l.description,
                                variant: "text-sm/normal",
                                children: p.firstBody,
                            }),
                            (0, n.jsx)(a.Text, {
                                tag: "span",
                                className: l.description,
                                variant: "text-sm/normal",
                                children: p.secondBody,
                            }),
                            (0, n.jsx)(a.Text, {
                                tag: "span",
                                className: l.description,
                                variant: "text-sm/normal",
                                children: p.thirdBody,
                            }),
                        ],
                    }),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
