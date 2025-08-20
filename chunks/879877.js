r.d(t, { Z: () => b }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(481060),
    a = r(259580),
    c = r(785717),
    o = r(221292),
    s = r(86419),
    u = r(978369),
    d = r(286957),
    f = r(388032),
    g = r(44258);
function b(e) {
    let { tags: t, isCurrentUser: r, widgetType: i, applicationId: a, disableInteraction: o = !1 } = e,
        b = null == t ? void 0 : t.filter((e) => null != (0, d.zK)(e)),
        y = (0, l.useRef)(new Map()),
        v = (0, l.useRef)(null),
        x = (0, l.useRef)(null),
        [h, P] = (0, l.useState)(0),
        [E, w] = (0, l.useState)(!1),
        { trackUserProfileAction: I } = (0, c.KZ)(),
        S = r && !o && (0, s.M8)(i),
        _ = j(v, x, b, y, P);
    if (
        ((0, l.useEffect)(
            () => (
                _(),
                window.addEventListener("resize", _),
                () => {
                    window.removeEventListener("resize", _);
                }
            ),
            [_, null == b ? void 0 : b.join("")],
        ),
        null == b || 0 === b.length)
    )
        return S
            ? (0, n.jsx)("div", {
                  className: g.tagListContainer,
                  children: (0, n.jsx)(u.Z, {
                      tags: t,
                      widgetType: i,
                      applicationId: a,
                      ref: x,
                  }),
              })
            : null;
    let T = E ? b : b.slice(0, b.length - h);
    return (0, n.jsxs)("div", {
        className: g.tagListContainer,
        children: [
            (0, n.jsx)("ul", {
                className: g.tagList,
                "aria-label": f.intl.string(f.t.EfjTi4),
                children: T.map((e) =>
                    (0, n.jsx)(
                        p,
                        {
                            tag: e,
                            isCurrentUser: r,
                            applicationId: a,
                            widgetType: i,
                            ref: (t) => {
                                null != t && y.current.set(e, t);
                            },
                            disableInteraction: o,
                        },
                        e,
                    ),
                ),
            }),
            h > 0 &&
                (E
                    ? (0, n.jsx)(m, {
                          onClick: () => {
                              w(!1), I({ action: "COLLAPSE_GAME_TAGS" });
                          },
                      })
                    : (0, n.jsx)(O, {
                          numHidden: h,
                          onClick: () => {
                              w(!0), I({ action: "EXPAND_GAME_TAGS" });
                          },
                          ref: v,
                          disableInteraction: o,
                      })),
            r &&
                !o &&
                (0, n.jsx)(u.Z, {
                    tags: t,
                    widgetType: i,
                    applicationId: a,
                    ref: x,
                }),
        ],
    });
}
let p = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: l, widgetType: a, disableInteraction: c, ref: u } = e,
            b = (0, d.zK)(t);
        if (null == b) return null;
        let { getText: p, icon: O } = b,
            m = () => {
                (0, s.RZ)(a, l, t), (0, o.pQ)({ action: "REMOVE_GAME_TAGS" });
            };
        return (0, n.jsxs)("li", {
            className: g.tag,
            ref: u,
            children: [
                (0, n.jsx)(O, { size: "xxs" }),
                (0, n.jsx)(i.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: p(),
                }),
                r &&
                    !c &&
                    (0, n.jsx)(i.ua7, {
                        text: f.intl.string(f.t.Otv9fH),
                        children: (e) => {
                            var t, r;
                            return (0, n.jsx)(
                                i.P3F,
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
                                })({}, e)),
                                (r = r =
                                    {
                                        onClick: m,
                                        className: g.removeButton,
                                        "aria-label": f.intl.formatToPlainString(f.t.GCn1nZ, { tag: p() }),
                                        children: (0, n.jsx)(i.Dio, { size: "xxs" }),
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
                        },
                    }),
            ],
        });
    },
    O = (e) => {
        let { numHidden: t, onClick: r, disableInteraction: l, ref: a } = e;
        return l
            ? (0, n.jsx)("div", {
                  className: g.expandButton,
                  children: (0, n.jsx)(i.Text, {
                      variant: "text-xxs/medium",
                      color: "text-secondary",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(i.DY3, {
                  className: g.buttonContainer,
                  text: f.intl.string(f.t.mriLXF),
                  children: (0, n.jsx)(i.P3F, {
                      onClick: r,
                      className: g.expandButton,
                      innerRef: a,
                      "aria-label": f.intl.string(f.t.mriLXF),
                      children: (0, n.jsx)(i.Text, {
                          variant: "text-xxs/medium",
                          color: "text-secondary",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    m = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(i.DY3, {
            className: g.buttonContainer,
            text: f.intl.string(f.t.z9VPra),
            children: (0, n.jsx)(i.P3F, {
                onClick: t,
                className: g.collapseButton,
                "aria-label": f.intl.string(f.t.z9VPra),
                children: (0, n.jsx)(a.Z, {
                    direction: a.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: g.caret,
                }),
            }),
        });
    },
    j = (e, t, r, n, i) =>
        (0, l.useCallback)(() => {
            var l, a, c, o;
            if (null == r) return void i(0);
            let s = null != (c = null == (l = e.current) ? void 0 : l.getBoundingClientRect().width) ? c : 0,
                u = null != (o = null == (a = t.current) ? void 0 : a.getBoundingClientRect().width) ? o : 0,
                d = u > 0 ? 8 : 4,
                f = 0,
                g = 0,
                b = n.current;
            for (let e = 0; e < r.length; e++) {
                let t = b.get(r[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296) break;
                    f++;
                }
            }
            g = 0;
            for (let e = f; e < r.length; e++) {
                let t = b.get(r[e]);
                if (null != t) {
                    if ((g += t.offsetWidth + 4) > 296 - s - u - d) break;
                    f++;
                }
            }
            i(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, i]);
