r.d(t, { Z: () => b }), r(388685);
var n = r(951288),
    i = r(647438),
    a = r(481060),
    l = r(259580),
    o = r(785717),
    c = r(221292),
    s = r(86419),
    u = r(978369),
    d = r(286957),
    f = r(388032),
    g = r(44258);
function b(e) {
    let { tags: t, isCurrentUser: r, widgetType: a, applicationId: l, disableInteraction: c = !1 } = e,
        b = null == t ? void 0 : t.filter((e) => null != (0, d.zK)(e)),
        y = (0, i.useRef)(new Map()),
        x = (0, i.useRef)(null),
        v = (0, i.useRef)(null),
        [h, _] = (0, i.useState)(0),
        [P, w] = (0, i.useState)(!1),
        { trackUserProfileAction: S } = (0, o.KZ)(),
        I = r && !c && (0, s.M8)(a),
        E = j(x, v, b, y, _);
    if (
        ((0, i.useEffect)(
            () => (
                E(),
                window.addEventListener("resize", E),
                () => {
                    window.removeEventListener("resize", E);
                }
            ),
            [E, null == b ? void 0 : b.join("")],
        ),
        null == b || 0 === b.length)
    )
        return I
            ? (0, n.jsx)("div", {
                  className: g.tagListContainer,
                  children: (0, n.jsx)(u.Z, {
                      tags: t,
                      widgetType: a,
                      applicationId: l,
                      ref: v,
                  }),
              })
            : null;
    let T = P ? b : b.slice(0, b.length - h);
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
                            applicationId: l,
                            widgetType: a,
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
                (P
                    ? (0, n.jsx)(O, {
                          onClick: () => {
                              w(!1), S({ action: "COLLAPSE_GAME_TAGS" });
                          },
                      })
                    : (0, n.jsx)(m, {
                          numHidden: h,
                          onClick: () => {
                              w(!0), S({ action: "EXPAND_GAME_TAGS" });
                          },
                          ref: x,
                          disableInteraction: c,
                      })),
            r &&
                !c &&
                (0, n.jsx)(u.Z, {
                    tags: t,
                    widgetType: a,
                    applicationId: l,
                    ref: v,
                }),
        ],
    });
}
let p = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: i, widgetType: l, disableInteraction: o, ref: u } = e,
            b = (0, d.zK)(t);
        if (null == b) return null;
        let { getText: p, icon: m } = b,
            O = () => {
                (0, s.RZ)(l, i, t), (0, c.pQ)({ action: "REMOVE_GAME_TAGS" });
            };
        return (0, n.jsxs)("li", {
            className: g.tag,
            ref: u,
            children: [
                (0, n.jsx)(m, { size: "xxs" }),
                (0, n.jsx)(a.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: p(),
                }),
                r &&
                    !o &&
                    (0, n.jsx)(a.ua7, {
                        text: f.intl.string(f.t.Otv9fH),
                        children: (e) => {
                            var t, r;
                            return (0, n.jsx)(
                                a.P3F,
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
                                        onClick: O,
                                        className: g.removeButton,
                                        "aria-label": f.intl.formatToPlainString(f.t.GCn1nZ, { tag: p() }),
                                        children: (0, n.jsx)(a.Dio, { size: "xxs" }),
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
    m = (e) => {
        let { numHidden: t, onClick: r, disableInteraction: i, ref: l } = e;
        return i
            ? (0, n.jsx)("div", {
                  className: g.expandButton,
                  children: (0, n.jsx)(a.Text, {
                      variant: "text-xxs/medium",
                      color: "text-secondary",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(a.DY3, {
                  className: g.buttonContainer,
                  text: f.intl.string(f.t.mriLXF),
                  children: (0, n.jsx)(a.P3F, {
                      onClick: r,
                      className: g.expandButton,
                      innerRef: l,
                      "aria-label": f.intl.string(f.t.mriLXF),
                      children: (0, n.jsx)(a.Text, {
                          variant: "text-xxs/medium",
                          color: "text-secondary",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    O = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(a.DY3, {
            className: g.buttonContainer,
            text: f.intl.string(f.t.z9VPra),
            children: (0, n.jsx)(a.P3F, {
                onClick: t,
                className: g.collapseButton,
                "aria-label": f.intl.string(f.t.z9VPra),
                children: (0, n.jsx)(l.Z, {
                    direction: l.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: g.caret,
                }),
            }),
        });
    },
    j = (e, t, r, n, a) =>
        (0, i.useCallback)(() => {
            var i, l, o, c;
            if (null == r) return void a(0);
            let s = null != (o = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? o : 0,
                u = null != (c = null == (l = t.current) ? void 0 : l.getBoundingClientRect().width) ? c : 0,
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
            a(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, a]);
