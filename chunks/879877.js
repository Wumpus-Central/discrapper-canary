r.d(t, { Z: () => g }), r(388685);
var n = r(951288),
    l = r(647438),
    i = r(481060),
    a = r(259580),
    o = r(785717),
    c = r(221292),
    s = r(86419),
    u = r(978369),
    d = r(286957),
    f = r(388032),
    b = r(44258);
function g(e) {
    let { tags: t, isCurrentUser: r, widgetType: i, applicationId: a, disableInteraction: c = !1 } = e,
        g = null == t ? void 0 : t.filter((e) => null != (0, d.zK)(e)),
        y = (0, l.useRef)(new Map()),
        v = (0, l.useRef)(null),
        x = (0, l.useRef)(null),
        [h, P] = (0, l.useState)(0),
        [E, w] = (0, l.useState)(!1),
        { trackUserProfileAction: S } = (0, o.KZ)(),
        I = r && !c && (0, s.M8)(i),
        _ = j(v, x, g, y, P);
    if (
        ((0, l.useEffect)(
            () => (
                _(),
                window.addEventListener("resize", _),
                () => {
                    window.removeEventListener("resize", _);
                }
            ),
            [_, null == g ? void 0 : g.join("")],
        ),
        null == g || 0 === g.length)
    )
        return I
            ? (0, n.jsx)("div", {
                  className: b.tagListContainer,
                  children: (0, n.jsx)(u.Z, {
                      tags: t,
                      widgetType: i,
                      applicationId: a,
                      ref: x,
                  }),
              })
            : null;
    let T = E ? g : g.slice(0, g.length - h);
    return (0, n.jsxs)("div", {
        className: b.tagListContainer,
        children: [
            (0, n.jsx)("ul", {
                className: b.tagList,
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
                            disableInteraction: c,
                        },
                        e,
                    ),
                ),
            }),
            h > 0 &&
                (E
                    ? (0, n.jsx)(m, {
                          onClick: () => {
                              w(!1), S({ action: "COLLAPSE_GAME_TAGS" });
                          },
                      })
                    : (0, n.jsx)(O, {
                          numHidden: h,
                          onClick: () => {
                              w(!0), S({ action: "EXPAND_GAME_TAGS" });
                          },
                          ref: v,
                          disableInteraction: c,
                      })),
            r &&
                !c &&
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
        let { tag: t, isCurrentUser: r, applicationId: l, widgetType: a, disableInteraction: o, ref: u } = e,
            g = (0, d.zK)(t);
        if (null == g) return null;
        let { getText: p, icon: O } = g,
            m = () => {
                (0, s.RZ)(a, l, t), (0, c.pQ)({ action: "REMOVE_GAME_TAGS" });
            };
        return (0, n.jsxs)("li", {
            className: b.tag,
            ref: u,
            children: [
                (0, n.jsx)(O, { size: "xxs" }),
                (0, n.jsx)(i.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: p(),
                }),
                r &&
                    !o &&
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
                                        className: b.removeButton,
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
                  className: b.expandButton,
                  children: (0, n.jsx)(i.Text, {
                      variant: "text-xxs/medium",
                      color: "text-secondary",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(i.DY3, {
                  className: b.buttonContainer,
                  text: f.intl.string(f.t.mriLXF),
                  children: (0, n.jsx)(i.P3F, {
                      onClick: r,
                      className: b.expandButton,
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
            className: b.buttonContainer,
            text: f.intl.string(f.t.z9VPra),
            children: (0, n.jsx)(i.P3F, {
                onClick: t,
                className: b.collapseButton,
                "aria-label": f.intl.string(f.t.z9VPra),
                children: (0, n.jsx)(a.Z, {
                    direction: a.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: b.caret,
                }),
            }),
        });
    },
    j = (e, t, r, n, i) =>
        (0, l.useCallback)(() => {
            var l, a, o, c;
            if (null == r) return void i(0);
            let s = null != (o = null == (l = e.current) ? void 0 : l.getBoundingClientRect().width) ? o : 0,
                u = null != (c = null == (a = t.current) ? void 0 : a.getBoundingClientRect().width) ? c : 0,
                d = u > 0 ? 8 : 4,
                f = 0,
                b = 0,
                g = n.current;
            for (let e = 0; e < r.length; e++) {
                let t = g.get(r[e]);
                if (null != t) {
                    if ((b += t.offsetWidth + 4) > 296) break;
                    f++;
                }
            }
            b = 0;
            for (let e = f; e < r.length; e++) {
                let t = g.get(r[e]);
                if (null != t) {
                    if ((b += t.offsetWidth + 4) > 296 - s - u - d) break;
                    f++;
                }
            }
            i(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, i]);
