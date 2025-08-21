r.d(t, { Z: () => g }), r(388685);
var n = r(951288),
    i = r(647438),
    l = r(481060),
    a = r(259580),
    o = r(785717),
    c = r(221292),
    s = r(86419),
    u = r(978369),
    d = r(286957),
    f = r(388032),
    b = r(44258);
function g(e) {
    let { tags: t, isCurrentUser: r, widgetType: l, applicationId: a, disableInteraction: c = !1 } = e,
        g = null == t ? void 0 : t.filter((e) => null != (0, d.zK)(e)),
        y = (0, i.useRef)(new Map()),
        v = (0, i.useRef)(null),
        x = (0, i.useRef)(null),
        [h, P] = (0, i.useState)(0),
        [w, S] = (0, i.useState)(!1),
        { trackUserProfileAction: E } = (0, o.KZ)(),
        I = r && !c && (0, s.M8)(l),
        _ = j(v, x, g, y, P);
    if (
        ((0, i.useEffect)(
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
                      widgetType: l,
                      applicationId: a,
                      ref: x,
                  }),
              })
            : null;
    let T = w ? g : g.slice(0, g.length - h);
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
                            widgetType: l,
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
                (w
                    ? (0, n.jsx)(m, {
                          onClick: () => {
                              S(!1), E({ action: "COLLAPSE_GAME_TAGS" });
                          },
                      })
                    : (0, n.jsx)(O, {
                          numHidden: h,
                          onClick: () => {
                              S(!0), E({ action: "EXPAND_GAME_TAGS" });
                          },
                          ref: v,
                          disableInteraction: c,
                      })),
            r &&
                !c &&
                (0, n.jsx)(u.Z, {
                    tags: t,
                    widgetType: l,
                    applicationId: a,
                    ref: x,
                }),
        ],
    });
}
let p = (e) => {
        let { tag: t, isCurrentUser: r, applicationId: i, widgetType: a, disableInteraction: o, ref: u } = e,
            g = (0, d.zK)(t);
        if (null == g) return null;
        let { getText: p, icon: O } = g,
            m = () => {
                (0, s.RZ)(a, i, t), (0, c.pQ)({ action: "REMOVE_GAME_TAGS" });
            };
        return (0, n.jsxs)("li", {
            className: b.tag,
            ref: u,
            children: [
                (0, n.jsx)(O, { size: "xxs" }),
                (0, n.jsx)(l.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: p(),
                }),
                r &&
                    !o &&
                    (0, n.jsx)(l.ua7, {
                        text: f.intl.string(f.t.Otv9fH),
                        children: (e) => {
                            var t, r;
                            return (0, n.jsx)(
                                l.P3F,
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
                                        children: (0, n.jsx)(l.Dio, { size: "xxs" }),
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
        let { numHidden: t, onClick: r, disableInteraction: i, ref: a } = e;
        return i
            ? (0, n.jsx)("div", {
                  className: b.expandButton,
                  children: (0, n.jsx)(l.Text, {
                      variant: "text-xxs/medium",
                      color: "text-secondary",
                      children: "+".concat(t),
                  }),
              })
            : (0, n.jsx)(l.DY3, {
                  className: b.buttonContainer,
                  text: f.intl.string(f.t.mriLXF),
                  children: (0, n.jsx)(l.P3F, {
                      onClick: r,
                      className: b.expandButton,
                      innerRef: a,
                      "aria-label": f.intl.string(f.t.mriLXF),
                      children: (0, n.jsx)(l.Text, {
                          variant: "text-xxs/medium",
                          color: "text-secondary",
                          children: "+".concat(t),
                      }),
                  }),
              });
    },
    m = (e) => {
        let { onClick: t } = e;
        return (0, n.jsx)(l.DY3, {
            className: b.buttonContainer,
            text: f.intl.string(f.t.z9VPra),
            children: (0, n.jsx)(l.P3F, {
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
    j = (e, t, r, n, l) =>
        (0, i.useCallback)(() => {
            var i, a, o, c;
            if (null == r) return void l(0);
            let s = null != (o = null == (i = e.current) ? void 0 : i.getBoundingClientRect().width) ? o : 0,
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
            l(r.length - f);
        }, [e, t, null == r ? void 0 : r.join(""), n, l]);
