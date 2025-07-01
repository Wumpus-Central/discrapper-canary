(r.d(t, {
    ZP: () => N,
    xX: () => E
}),
    r(388685));
var n = r(255367);
r(73800);
var l = r(120356),
    i = r.n(l),
    o = r(481060),
    a = r(911969),
    c = r(970184),
    s = r(197653),
    u = r(987106),
    d = r(927057),
    p = r(574597),
    f = r(378975),
    b = r(732586),
    m = r(988075),
    O = r(12067),
    y = r(676149),
    j = r(861529),
    g = r(568248),
    h = r(770009),
    v = r(889515),
    P = r(985184),
    x = r(892519),
    S = r(841806);
function w(e) {
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
function C(e, t) {
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
function E(e) {
    return e.map((e, t) =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (function (e, t) {
                    switch (e.type) {
                        case a.re.ACTION_ROW:
                            return (0, n.jsx)(v.Z, C(w({}, e), { renderComponents: E }), t);
                        case a.re.BUTTON:
                            return (0, n.jsx)(u.Z, w({}, e), t);
                        case a.re.STRING_SELECT:
                            return (0, n.jsx)(f.Z, w({}, e), t);
                        case a.re.CHANNEL_SELECT:
                            return (0, n.jsx)(d.Z, w({}, e), t);
                        case a.re.USER_SELECT:
                        case a.re.ROLE_SELECT:
                        case a.re.MENTIONABLE_SELECT:
                            return (0, n.jsx)(p.Z, w({}, e), t);
                        case a.re.TEXT_INPUT:
                            return (0, n.jsx)(b.Z, w({}, e), t);
                        case a.re.SECTION:
                            return (0, n.jsx)(x.Z, C(w({}, e), { renderComponents: E }), t);
                        case a.re.TEXT_DISPLAY:
                            return (0, n.jsx)(j.Z, w({}, e), t);
                        case a.re.MEDIA_GALLERY:
                            return (0, n.jsx)(O.Z, w({}, e), t);
                        case a.re.THUMBNAIL:
                            return (0, n.jsx)(g.Z, w({}, e), t);
                        case a.re.FILE:
                            return (0, n.jsx)(m.Z, w({}, e), t);
                        case a.re.SEPARATOR:
                            return (0, n.jsx)(y.Z, w({}, e), t);
                        case a.re.CONTENT_INVENTORY_ENTRY:
                            return (0, n.jsx)(h.Z, w({}, e), t);
                        case a.re.CONTAINER:
                            return (0, n.jsx)(P.ZP, C(w({}, e), { renderComponents: E }), t);
                    }
                })(e, t.toString()),
                (0, n.jsx)(o.nn4, { children: ',' })
            ]
        })
    );
}
function N(e) {
    let { message: t, shouldDisableInteractiveComponents: r } = e,
        { components: l } = t,
        [o, a] = (0, s.e4)();
    return 0 === l.length
        ? null
        : (0, n.jsx)(c.Il, {
              message: t,
              shouldDisableInteractiveComponents: r,
              children: (0, n.jsx)(s.am.Root, {
                  containerInnerWidth: a,
                  children: (0, n.jsx)('div', {
                      style: { width: '100%' },
                      ref: o,
                      children: (0, n.jsx)(s.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, n.jsx)('div', {
                                  ref: e,
                                  className: i()([S.container, { [S.isComponentsV2]: t.isComponentsV2() }]),
                                  children: E(l)
                              })
                      })
                  })
              })
          });
}
