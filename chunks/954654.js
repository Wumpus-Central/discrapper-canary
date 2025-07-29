(r.d(t, {
    ZP: () => I,
    xX: () => N
}),
    r(388685));
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    o = r(481060),
    a = r(911969),
    c = r(23750),
    s = r(970184),
    u = r(197653),
    d = r(987106),
    p = r(927057),
    f = r(574597),
    b = r(378975),
    m = r(732586),
    O = r(988075),
    y = r(12067),
    j = r(676149),
    g = r(861529),
    h = r(568248),
    v = r(770009),
    P = r(889515),
    x = r(985184),
    S = r(892519),
    w = r(841806);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                ((n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n));
            }));
    }
    return e;
}
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function N(e) {
    return e.map((e, t) =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (function (e, t) {
                    switch (e.type) {
                        case a.re.ACTION_ROW:
                            return (0, n.jsx)(P.Z, E(C({}, e), { renderComponents: N }), t);
                        case a.re.BUTTON:
                            return (0, n.jsx)(d.Z, C({}, e), t);
                        case a.re.STRING_SELECT:
                            return (0, n.jsx)(b.Z, C({}, e), t);
                        case a.re.CHANNEL_SELECT:
                            return (0, n.jsx)(p.Z, C({}, e), t);
                        case a.re.USER_SELECT:
                        case a.re.ROLE_SELECT:
                        case a.re.MENTIONABLE_SELECT:
                            return (0, n.jsx)(f.Z, C({}, e), t);
                        case a.re.TEXT_INPUT:
                            return (0, n.jsx)(m.Z, C({}, e), t);
                        case a.re.SECTION:
                            return (0, n.jsx)(S.Z, E(C({}, e), { renderComponents: N }), t);
                        case a.re.TEXT_DISPLAY:
                            return (0, n.jsx)(g.Z, C({}, e), t);
                        case a.re.MEDIA_GALLERY:
                            return (0, n.jsx)(y.Z, C({}, e), t);
                        case a.re.THUMBNAIL:
                            return (0, n.jsx)(h.Z, C({}, e), t);
                        case a.re.FILE:
                            return (0, n.jsx)(O.Z, C({}, e), t);
                        case a.re.SEPARATOR:
                            return (0, n.jsx)(j.Z, C({}, e), t);
                        case a.re.CONTENT_INVENTORY_ENTRY:
                            return (0, n.jsx)(v.Z, C({}, e), t);
                        case a.re.CONTAINER:
                            return (0, n.jsx)(x.ZP, E(C({}, e), { renderComponents: N }), t);
                    }
                })(e, t.toString()),
                (0, n.jsx)(o.nn4, { children: ',' })
            ]
        })
    );
}
function I(e) {
    let { message: t, shouldDisableInteractiveComponents: r } = e,
        { components: l } = t,
        [o, a] = (0, u.e4)();
    return 0 === l.length
        ? null
        : (0, n.jsx)(s.Il, {
              message: t,
              shouldDisableInteractiveComponents: r,
              children: (0, n.jsx)(u.am.Root, {
                  containerInnerWidth: a,
                  children: (0, n.jsx)('div', {
                      style: { width: '100%' },
                      ref: o,
                      children: (0, n.jsx)(u.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, n.jsx)('div', {
                                  ref: e,
                                  className: i()([w.container, { [w.isComponentsV2]: (0, c.hv)(t) }]),
                                  children: N(l)
                              })
                      })
                  })
              })
          });
}
