n.d(t, {
    ZP: () => L,
    xX: () => D,
}),
    n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(911969),
    l = n(23750),
    c = n(970184),
    u = n(197653),
    d = n(987106),
    f = n(927057),
    _ = n(241085),
    p = n(574597),
    h = n(378975),
    m = n(732586),
    g = n(988075),
    E = n(12067),
    b = n(676149),
    y = n(861529),
    O = n(568248),
    v = n(770009),
    I = n(889515),
    T = n(985184),
    S = n(424158),
    A = n(892519),
    C = n(429577);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    return e.map((e, t) =>
        (0, r.jsxs)(r.Fragment, {
            children: [x(e, t.toString()), (0, r.jsx)(o.nn4, { children: "," })],
        }),
    );
}
function x(e, t) {
    switch (e.type) {
        case s.re.ACTION_ROW:
            return (0, r.jsx)(I.Z, w(R({}, e), { renderComponents: D }), t);
        case s.re.BUTTON:
            return (0, r.jsx)(d.Z, R({}, e), t);
        case s.re.STRING_SELECT:
            return (0, r.jsx)(h.Z, R({}, e), t);
        case s.re.CHANNEL_SELECT:
            return (0, r.jsx)(f.Z, R({}, e), t);
        case s.re.USER_SELECT:
        case s.re.ROLE_SELECT:
        case s.re.MENTIONABLE_SELECT:
            return (0, r.jsx)(p.Z, R({}, e), t);
        case s.re.TEXT_INPUT:
            return (0, r.jsx)(m.Z, R({}, e), t);
        case s.re.SECTION:
            return (0, r.jsx)(A.Z, w(R({}, e), { renderComponents: D }), t);
        case s.re.TEXT_DISPLAY:
            return (0, r.jsx)(y.Z, R({}, e), t);
        case s.re.MEDIA_GALLERY:
            return (0, r.jsx)(E.Z, R({}, e), t);
        case s.re.THUMBNAIL:
            return (0, r.jsx)(O.Z, R({}, e), t);
        case s.re.FILE:
            return (0, r.jsx)(g.Z, R({}, e), t);
        case s.re.SEPARATOR:
            return (0, r.jsx)(b.Z, R({}, e), t);
        case s.re.CONTENT_INVENTORY_ENTRY:
            return (0, r.jsx)(v.Z, R({}, e), t);
        case s.re.CONTAINER:
            return (0, r.jsx)(T.Z, w(R({}, e), { renderComponents: D }), t);
        case s.re.LABEL:
            return (0, r.jsx)(S.Z, w(R({}, e), { renderComponent: x }), t);
        case s.re.FILE_UPLOAD:
            return (0, r.jsx)(_.Z, R({}, e), t);
    }
}
function L(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: i } = t,
        [o, s] = (0, u.e4)();
    return 0 === i.length
        ? null
        : (0, r.jsx)(c.Il, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, r.jsx)(u.am.Root, {
                  containerInnerWidth: s,
                  children: (0, r.jsx)("div", {
                      style: { width: "100%" },
                      ref: o,
                      children: (0, r.jsx)(u.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, r.jsx)("div", {
                                  ref: e,
                                  className: a()([C.container, { [C.isComponentsV2]: (0, l.hv)(t) }]),
                                  children: D(i),
                              }),
                      }),
                  }),
              }),
          });
}
