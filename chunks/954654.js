n.d(t, {
    ZP: () => G,
    xX: () => k,
}),
    n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(911969),
    l = n(23750),
    c = n(970184),
    u = n(197653),
    d = n(987106),
    f = n(927057),
    p = n(944414),
    _ = n(514523),
    h = n(241085),
    m = n(574597),
    g = n(182134),
    E = n(368451),
    b = n(732586),
    y = n(628844),
    O = n(988075),
    v = n(12067),
    S = n(676149),
    I = n(861529),
    T = n(568248),
    C = n(48870),
    A = n(770009),
    N = n(889515),
    P = n(985184),
    w = n(424158),
    R = n(892519),
    D = n(528945);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    return e.map((e, t) =>
        (0, r.jsxs)(r.Fragment, {
            children: [U(e, t.toString()), (0, r.jsx)(o.nn4, { children: "," })],
        }),
    );
}
function U(e, t) {
    switch (e.type) {
        case s.re.ACTION_ROW:
            return (0, r.jsx)(N.Z, M(L({}, e), { renderComponents: k }), t);
        case s.re.BUTTON:
            return (0, r.jsx)(d.Z, L({}, e), t);
        case s.re.STRING_SELECT:
            return (0, r.jsx)(E.Z, L({}, e), t);
        case s.re.CHANNEL_SELECT:
            return (0, r.jsx)(f.Z, L({}, e), t);
        case s.re.USER_SELECT:
        case s.re.ROLE_SELECT:
        case s.re.MENTIONABLE_SELECT:
            return (0, r.jsx)(m.Z, L({}, e), t);
        case s.re.TEXT_INPUT:
            return (0, r.jsx)(b.Z, L({}, e), t);
        case s.re.SECTION:
            return (0, r.jsx)(R.Z, M(L({}, e), { renderComponents: k }), t);
        case s.re.TEXT_DISPLAY:
            return (0, r.jsx)(I.Z, L({}, e), t);
        case s.re.MEDIA_GALLERY:
            return (0, r.jsx)(v.Z, L({}, e), t);
        case s.re.THUMBNAIL:
            return (0, r.jsx)(T.Z, L({}, e), t);
        case s.re.FILE:
            return (0, r.jsx)(O.Z, L({}, e), t);
        case s.re.SEPARATOR:
            return (0, r.jsx)(S.Z, L({}, e), t);
        case s.re.CONTENT_INVENTORY_ENTRY:
            return (0, r.jsx)(A.Z, L({}, e), t);
        case s.re.CONTAINER:
            return (0, r.jsx)(P.Z, M(L({}, e), { renderComponents: k }), t);
        case s.re.LABEL:
            return (0, r.jsx)(w.Z, M(L({}, e), { renderComponent: U }), t);
        case s.re.FILE_UPLOAD:
            return (0, r.jsx)(h.Z, L({}, e), t);
        case s.re.CHECKPOINT_CARD:
            return (0, r.jsx)(y.Z, L({}, e), t);
        case s.re.RADIO_GROUP:
            return (0, r.jsx)(g.Z, L({}, e), t);
        case s.re.CHECKBOX_GROUP:
            return (0, r.jsx)(_.Z, L({}, e), t);
        case s.re.CHECKBOX:
            return (0, r.jsx)(p.Z, L({}, e), t);
        default:
            return (0, r.jsx)(C.Z, {}, t);
    }
}
function G(e) {
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
                                  className: a()([D.container, { [D.isComponentsV2]: (0, l.hv)(t) }]),
                                  children: k(i),
                              }),
                      }),
                  }),
              }),
          });
}
