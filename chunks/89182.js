n.d(t, {
    PA: () => h,
    ZP: () => f,
    iG: () => m,
});
var a,
    r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(481060),
    c = n(706454),
    d = n(566576);
function u(e, t) {
    if (null == e) return {};
    var n,
        a,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = {},
                i = Object.keys(e);
            for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++)
            (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
function p(e) {
    var { items: t, onClose: n, onSelect: a, selected: i } = e,
        l = u(e, ["items", "onClose", "onSelect", "selected"]);
    return (0, r.jsx)(o.v2r, {
        className: d.menu,
        navId: "global-discovery-search-filter-options",
        "aria-label": l["aria-label"],
        hideScroller: !0,
        onClose: n,
        onSelect: n,
        children: (0, r.jsx)(
            o.kSQ,
            {
                children: t.map((e) => {
                    let { id: t, label: n } = e;
                    return (0, r.jsx)(
                        o.sNh,
                        {
                            id: t,
                            label: n,
                            icon: t === i ? o.owK : void 0,
                            action: () => a(t),
                        },
                        t,
                    );
                }),
            },
            "overflow-tabs",
        ),
    });
}
function m(e) {
    let { count: t, name: n } = e,
        a = t.toLocaleString(c.default.locale);
    return (0, r.jsxs)("div", {
        className: d.categoryLabel,
        children: [
            (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-strong",
                children: n,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: a,
            }),
        ],
    });
}
var h = (((a = {}).FILLED = "FILLED"), (a.TRANSPARENT = "TRANSPARENT"), a);
function f(e) {
    var { items: t, title: n, onSelect: a, selected: l, variant: c = "TRANSPARENT" } = e,
        m = u(e, ["items", "title", "onSelect", "selected", "variant"]);
    let h = i.useRef(null),
        f = i.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case "FILLED":
                            return d.filterBackground;
                        case "TRANSPARENT":
                            return;
                    }
                })(c),
            [c],
        );
    return (0, r.jsx)(o.yRy, {
        targetElementRef: h,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, r.jsx)(p, {
                selected: l,
                onClose: n,
                items: t,
                onSelect: a,
                "aria-label": m["aria-label"],
            });
        },
        position: "bottom",
        align: "left",
        children: (e, t) => {
            var a, i;
            let { isShown: l } = t;
            return (0, r.jsxs)(
                "div",
                ((a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (a = a.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            a.forEach(function (t) {
                                var a;
                                (a = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: a,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = a);
                            });
                    }
                    return e;
                })({}, e)),
                (i = i =
                    {
                        ref: h,
                        className: s()(d.filter, f),
                        children: [
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-text-default",
                                children: n,
                            }),
                            l
                                ? (0, r.jsx)(o.u04, {
                                      size: "xs",
                                      color: o.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                  })
                                : (0, r.jsx)(o.CJ0, {
                                      size: "xs",
                                      color: o.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                  }),
                        ],
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var a = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, a);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                a),
            );
        },
    });
}
