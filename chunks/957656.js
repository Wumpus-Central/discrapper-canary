r.d(t, { Z: () => u });
var n = r(951288);
r(647438);
var i = r(481060),
    o = r(198952),
    a = r(329242),
    l = r(602698),
    c = r(388032),
    s = r(167154);
let d = (e) => {
    var t,
        r,
        { children: o, className: a } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (r = o[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["children", "className"]);
    return (0, n.jsx)(
        i.Y0X,
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
        })(
            {
                "data-migration-pending": !0,
                className: a,
            },
            l,
        )),
        (r = r =
            {
                parentComponent: "FamilyCenterCommonModal",
                children: o,
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
};
(d.ButtonFooter = (e) => {
    let { children: t } = e;
    return (0, n.jsx)("div", {
        className: s.footer,
        children: t,
    });
}),
    (d.Header = (e) => {
        let { icon: t, currentUser: r, otherUser: l, header: c } = e;
        return (0, n.jsxs)("div", {
            className: s.header,
            children: [
                (0, n.jsx)(o.Z, {
                    currentUser: r,
                    otherUser: l,
                    children: t,
                }),
                (0, n.jsxs)("div", {
                    className: s.heading,
                    children: [
                        (0, n.jsx)(i.Heading, {
                            variant: "text-lg/bold",
                            children: c,
                        }),
                        (0, n.jsx)(a.Z, { user: l }),
                    ],
                }),
            ],
        });
    }),
    (d.Content = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", {
            className: s.content,
            children: t,
        });
    }),
    (d.Notice = (e) => {
        let { notice: t } = e;
        return (0, n.jsxs)("div", {
            className: s.notice,
            children: [
                (0, n.jsx)(i.Text, {
                    variant: "eyebrow",
                    color: "header-primary",
                    children: c.intl.string(l.default.cXgKMD),
                }),
                (0, n.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: t,
                }),
            ],
        });
    });
let u = d;
