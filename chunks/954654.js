r.d(t, {
    ZP: () => T,
    xX: () => I,
}),
    r(388685);
var n = r(951288);
r(647438);
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
    S = r(424158),
    w = r(892519),
    C = r(429577);
function E(e) {
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
}
function N(e, t) {
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
function I(e) {
    return e.map((e, t) =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (function e(t, r) {
                    switch (t.type) {
                        case a.re.ACTION_ROW:
                            return (0, n.jsx)(P.Z, N(E({}, t), { renderComponents: I }), r);
                        case a.re.BUTTON:
                            return (0, n.jsx)(d.Z, E({}, t), r);
                        case a.re.STRING_SELECT:
                            return (0, n.jsx)(b.Z, E({}, t), r);
                        case a.re.CHANNEL_SELECT:
                            return (0, n.jsx)(p.Z, E({}, t), r);
                        case a.re.USER_SELECT:
                        case a.re.ROLE_SELECT:
                        case a.re.MENTIONABLE_SELECT:
                            return (0, n.jsx)(f.Z, E({}, t), r);
                        case a.re.TEXT_INPUT:
                            return (0, n.jsx)(m.Z, E({}, t), r);
                        case a.re.SECTION:
                            return (0, n.jsx)(w.Z, N(E({}, t), { renderComponents: I }), r);
                        case a.re.TEXT_DISPLAY:
                            return (0, n.jsx)(g.Z, E({}, t), r);
                        case a.re.MEDIA_GALLERY:
                            return (0, n.jsx)(y.Z, E({}, t), r);
                        case a.re.THUMBNAIL:
                            return (0, n.jsx)(h.Z, E({}, t), r);
                        case a.re.FILE:
                            return (0, n.jsx)(O.Z, E({}, t), r);
                        case a.re.SEPARATOR:
                            return (0, n.jsx)(j.Z, E({}, t), r);
                        case a.re.CONTENT_INVENTORY_ENTRY:
                            return (0, n.jsx)(v.Z, E({}, t), r);
                        case a.re.CONTAINER:
                            return (0, n.jsx)(x.ZP, N(E({}, t), { renderComponents: I }), r);
                        case a.re.LABEL:
                            return (0, n.jsx)(S.Z, N(E({}, t), { renderComponent: e }), r);
                    }
                })(e, t.toString()),
                (0, n.jsx)(o.nn4, { children: "," }),
            ],
        }),
    );
}
function T(e) {
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
                  children: (0, n.jsx)("div", {
                      style: { width: "100%" },
                      ref: o,
                      children: (0, n.jsx)(u.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, n.jsx)("div", {
                                  ref: e,
                                  className: i()([C.container, { [C.isComponentsV2]: (0, c.hv)(t) }]),
                                  children: I(l),
                              }),
                      }),
                  }),
              }),
          });
}
