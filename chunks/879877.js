n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(259580),
    a = n(785717),
    c = n(221292),
    s = n(86419),
    d = n(978369),
    u = n(286957),
    f = n(388032),
    p = n(44258);
function m(e) {
    let { tags: t, isCurrentUser: n, widgetType: i, applicationId: o } = e,
        c = null == t ? void 0 : t.filter((e) => null != (0, u.zK)(e)),
        s = (0, l.useRef)(new Map()),
        m = (0, l.useRef)(null),
        [O, x] = (0, l.useState)(0),
        [h, v] = (0, l.useState)(!1),
        { trackUserProfileAction: _ } = (0, a.KZ)(),
        I = y(m, c, s, x);
    if (
        ((0, l.useEffect)(
            () => (
                I(),
                window.addEventListener("resize", I),
                () => {
                    window.removeEventListener("resize", I);
                }
            ),
            [I, null == c ? void 0 : c.join("")],
        ),
        null == c || 0 === c.length)
    )
        return null;
    let P = h ? c : c.slice(0, c.length - O);
    return (0, r.jsxs)("div", {
        className: p.tagListContainer,
        children: [
            (0, r.jsx)("ul", {
                className: p.tagList,
                "aria-label": f.intl.string(f.t.EfjTi4),
                children: P.map((e) =>
                    (0, r.jsx)(
                        g,
                        {
                            tag: e,
                            isCurrentUser: n,
                            applicationId: o,
                            widgetType: i,
                            ref: (t) => {
                                null != t && s.current.set(e, t);
                            },
                        },
                        e,
                    ),
                ),
            }),
            O > 0 &&
                (h
                    ? (0, r.jsx)(j, {
                          onClick: () => {
                              v(!1), _({ action: "COLLAPSE_GAME_TAGS" });
                          },
                      })
                    : (0, r.jsx)(b, {
                          numHidden: O,
                          onClick: () => {
                              v(!0), _({ action: "EXPAND_GAME_TAGS" });
                          },
                          ref: m,
                      })),
            n &&
                (0, r.jsx)(d.Z, {
                    tags: t,
                    widgetType: i,
                    applicationId: o,
                }),
        ],
    });
}
let g = (e) => {
        let { tag: t, isCurrentUser: n, applicationId: l, widgetType: o, ref: a } = e,
            d = (0, u.zK)(t);
        if (null == d) return null;
        let { getText: m, icon: g } = d,
            b = () => {
                (0, s.RZ)(o, l, t), (0, c.pQ)({ action: "REMOVE_GAME_TAGS" });
            };
        return (0, r.jsxs)("li", {
            className: p.tag,
            ref: a,
            children: [
                (0, r.jsx)(g, { size: "xxs" }),
                (0, r.jsx)(i.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: m(),
                }),
                n &&
                    (0, r.jsx)(i.ua7, {
                        text: f.intl.string(f.t.Otv9fH),
                        children: (e) => {
                            var t, n;
                            return (0, r.jsx)(
                                i.P3F,
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
                                })({}, e)),
                                (n = n =
                                    {
                                        onClick: b,
                                        className: p.removeButton,
                                        "aria-label": f.intl.formatToPlainString(f.t.GCn1nZ, { tag: m() }),
                                        children: (0, r.jsx)(i.Dio, { size: "xxs" }),
                                    }),
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
                    }),
            ],
        });
    },
    b = (e) => {
        let { numHidden: t, onClick: n, ref: l } = e;
        return (0, r.jsx)(i.DY3, {
            className: p.buttonContainer,
            text: f.intl.string(f.t.mriLXF),
            children: (0, r.jsx)(i.P3F, {
                onClick: n,
                className: p.expandButton,
                innerRef: l,
                "aria-label": f.intl.string(f.t.mriLXF),
                children: (0, r.jsx)(i.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: "+".concat(t),
                }),
            }),
        });
    },
    j = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(i.DY3, {
            className: p.buttonContainer,
            text: f.intl.string(f.t.z9VPra),
            children: (0, r.jsx)(i.P3F, {
                onClick: t,
                className: p.collapseButton,
                "aria-label": f.intl.string(f.t.z9VPra),
                children: (0, r.jsx)(o.Z, {
                    direction: o.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: p.caret,
                }),
            }),
        });
    },
    y = (e, t, n, r) =>
        (0, l.useCallback)(() => {
            var l, i;
            if (null == t) return void r(0);
            let o = null != (i = null == (l = e.current) ? void 0 : l.getBoundingClientRect().width) ? i : 0,
                a = 0,
                c = 0,
                s = n.current;
            for (let e = 0; e < t.length; e++) {
                let n = s.get(t[e]);
                if (null != n) {
                    if ((c += n.offsetWidth + 4) > 296) break;
                    a++;
                }
            }
            c = 0;
            for (let e = a; e < t.length; e++) {
                let n = s.get(t[e]);
                if (null != n) {
                    if ((c += n.offsetWidth + 4) > 296 - o) break;
                    a++;
                }
            }
            r(t.length - a);
        }, [e, null == t ? void 0 : t.join(""), n, r]);
