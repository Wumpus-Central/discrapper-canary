n.d(t, {
    ZP: () => L,
    xX: () => w,
}),
    n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(911969),
    l = n(23750),
    c = n(970184),
    u = n(197653),
    d = n(987106),
    f = n(927057),
    _ = n(574597),
    p = n(378975),
    h = n(732586),
    m = n(988075),
    g = n(12067),
    E = n(676149),
    b = n(861529),
    y = n(568248),
    O = n(770009),
    v = n(889515),
    I = n(985184),
    T = n(424158),
    S = n(892519),
    A = n(282611);
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
function C(e) {
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
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    return e.map((e, t) =>
        (0, r.jsxs)(r.Fragment, {
            children: [D(e, t.toString()), (0, r.jsx)(a.nn4, { children: "," })],
        }),
    );
}
function D(e, t) {
    switch (e.type) {
        case s.re.ACTION_ROW:
            return (0, r.jsx)(v.Z, P(C({}, e), { renderComponents: w }), t);
        case s.re.BUTTON:
            return (0, r.jsx)(d.Z, C({}, e), t);
        case s.re.STRING_SELECT:
            return (0, r.jsx)(p.Z, C({}, e), t);
        case s.re.CHANNEL_SELECT:
            return (0, r.jsx)(f.Z, C({}, e), t);
        case s.re.USER_SELECT:
        case s.re.ROLE_SELECT:
        case s.re.MENTIONABLE_SELECT:
            return (0, r.jsx)(_.Z, C({}, e), t);
        case s.re.TEXT_INPUT:
            return (0, r.jsx)(h.Z, C({}, e), t);
        case s.re.SECTION:
            return (0, r.jsx)(S.Z, P(C({}, e), { renderComponents: w }), t);
        case s.re.TEXT_DISPLAY:
            return (0, r.jsx)(b.Z, C({}, e), t);
        case s.re.MEDIA_GALLERY:
            return (0, r.jsx)(g.Z, C({}, e), t);
        case s.re.THUMBNAIL:
            return (0, r.jsx)(y.Z, C({}, e), t);
        case s.re.FILE:
            return (0, r.jsx)(m.Z, C({}, e), t);
        case s.re.SEPARATOR:
            return (0, r.jsx)(E.Z, C({}, e), t);
        case s.re.CONTENT_INVENTORY_ENTRY:
            return (0, r.jsx)(O.Z, C({}, e), t);
        case s.re.CONTAINER:
            return (0, r.jsx)(I.ZP, P(C({}, e), { renderComponents: w }), t);
        case s.re.LABEL:
            return (0, r.jsx)(T.Z, P(C({}, e), { renderComponent: D }), t);
    }
}
function L(e) {
    let { message: t, shouldDisableInteractiveComponents: n } = e,
        { components: i } = t,
        [a, s] = (0, u.e4)();
    return 0 === i.length
        ? null
        : (0, r.jsx)(c.Il, {
              message: t,
              shouldDisableInteractiveComponents: n,
              children: (0, r.jsx)(u.am.Root, {
                  containerInnerWidth: s,
                  children: (0, r.jsx)("div", {
                      style: { width: "100%" },
                      ref: a,
                      children: (0, r.jsx)(u.am.AutoMeasuredNestedContainer, {
                          children: (e) =>
                              (0, r.jsx)("div", {
                                  ref: e,
                                  className: o()([A.container, { [A.isComponentsV2]: (0, l.hv)(t) }]),
                                  children: w(i),
                              }),
                      }),
                  }),
              }),
          });
}
