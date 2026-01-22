r.d(t, {
    Z: () => b,
});
var n = r(627968),
    l = r(397927),
    o = r(933297),
    a = r(985018);

function c(e) {
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

function i(e, t) {
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

function s(e) {
    let { useCount: t } = e,
        r = t();
    return 0 === r
        ? null
        : (0, n.jsx)(l.hVq, {
              count: r,
          });
}

function u(e) {
    let { getDismissibleContentTypes: t, stronglyDiscouragedBadgeComponent: r, visibleContent: o, isSelected: c } = e,
        i = null == t ? void 0 : t(),
        s = null != o && i.includes(o) && !c,
        u =
            null != r
                ? (0, n.jsx)(r, {})
                : (0, n.jsx)(l.LpS, {
                      text: a.intl.string(a.t.y2b7CA),
                  });
    return s ? u : null;
}

function f(e) {
    let { useCustomDecoration: t, visibleContent: r, isSelected: n } = e;
    return t(r, n);
}

function b(e) {
    let { trailing: t, visibleContent: r, isSelected: l } = e;
    if (null == t) return null;
    switch (t.type) {
        case o.S.BADGE_COUNT:
            return (0, n.jsx)(s, c({}, t));
        case o.S.BADGE_NEW:
            return (0, n.jsx)(
                u,
                i(c({}, t), {
                    visibleContent: r,
                    isSelected: l,
                }),
            );
        case o.S.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, n.jsx)(
                f,
                i(c({}, t), {
                    visibleContent: r,
                    isSelected: l,
                }),
            );
    }
}
