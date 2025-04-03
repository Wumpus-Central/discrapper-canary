r.d(t, {
    ZP: () => E,
    xX: () => C
}),
    r(47120);
var n = r(200651);
r(192379);
var l = r(120356),
    i = r.n(l),
    o = r(911969),
    a = r(970184),
    c = r(197653),
    s = r(987106),
    u = r(927057),
    p = r(574597),
    d = r(378975),
    f = r(732586),
    b = r(988075),
    O = r(12067),
    y = r(676149),
    m = r(861529),
    j = r(568248),
    g = r(770009),
    h = r(889515),
    v = r(985184),
    P = r(892519),
    x = r(841806);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function S(e, t) {
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
function C(e) {
    return e.map((e, t) =>
        (function (e, t) {
            switch (e.type) {
                case o.re.ACTION_ROW:
                    return (0, n.jsx)(h.Z, S(w({}, e), { renderComponents: C }), t);
                case o.re.BUTTON:
                    return (0, n.jsx)(s.Z, w({}, e), t);
                case o.re.STRING_SELECT:
                    return (0, n.jsx)(d.Z, w({}, e), t);
                case o.re.CHANNEL_SELECT:
                    return (0, n.jsx)(u.Z, w({}, e), t);
                case o.re.USER_SELECT:
                case o.re.ROLE_SELECT:
                case o.re.MENTIONABLE_SELECT:
                    return (0, n.jsx)(p.Z, w({}, e), t);
                case o.re.TEXT_INPUT:
                    return (0, n.jsx)(f.Z, w({}, e), t);
                case o.re.SECTION:
                    return (0, n.jsx)(P.Z, w({}, e), t);
                case o.re.TEXT_DISPLAY:
                    return (0, n.jsx)(m.Z, w({}, e), t);
                case o.re.MEDIA_GALLERY:
                    return (0, n.jsx)(O.Z, w({}, e), t);
                case o.re.THUMBNAIL:
                    return (0, n.jsx)(j.Z, w({}, e), t);
                case o.re.FILE:
                    return (0, n.jsx)(b.Z, w({}, e), t);
                case o.re.SEPARATOR:
                    return (0, n.jsx)(y.Z, w({}, e), t);
                case o.re.CONTENT_INVENTORY_ENTRY:
                    return (0, n.jsx)(g.Z, w({}, e), t);
                case o.re.CONTAINER:
                    return (0, n.jsx)(v.ZP, S(w({}, e), { renderComponents: C }), t);
            }
        })(e, t.toString())
    );
}
function E(e) {
    let { message: t, shouldDisableInteractiveComponents: r } = e,
        { components: l } = t,
        [o, s] = (0, c.e4)();
    return 0 === l.length
        ? null
        : (0, n.jsx)(a.Il, {
              message: t,
              shouldDisableInteractiveComponents: r,
              children: (0, n.jsx)(c.am.Root, {
                  containerInnerWidth: s,
                  children: (0, n.jsx)('div', {
                      style: { width: '100%' },
                      ref: o,
                      children: (0, n.jsx)(c.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, n.jsx)('div', {
                                  ref: e,
                                  className: i()([x.container, { [x.isComponentsV2]: t.isComponentsV2() }]),
                                  children: C(l)
                              })
                      })
                  })
              })
          });
}
