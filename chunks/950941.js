n.d(t, { W: () => d });
var r = n(54381),
    o = n(481060),
    a = n(970013),
    i = n(388032);
function l(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e) {
    let { useCount: t } = e,
        n = t();
    return 0 === n ? null : (0, r.jsx)(o.mAB, { count: n });
}
function u(e) {
    let { getDismissibleContentTypes: t, stronglyDiscouragedBadgeComponent: n, visibleContent: a, isSelected: l } = e,
        c = null == t ? void 0 : t(),
        s = null != a && c.includes(a) && !l,
        u = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(o.IGR, { text: i.intl.string(i.t.y2b7CA) });
    return s ? u : null;
}
function f(e) {
    let { useCustomDecoration: t, visibleContent: n, isSelected: r } = e;
    return t(n, r);
}
function d(e) {
    let { trailing: t, visibleContent: n, isSelected: o } = e;
    if (null == t) return null;
    switch (t.type) {
        case a.W.BADGE_COUNT:
            return (0, r.jsx)(s, l({}, t));
        case a.W.BADGE_NEW:
            return (0, r.jsx)(
                u,
                c(l({}, t), {
                    visibleContent: n,
                    isSelected: o,
                }),
            );
        case a.W.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(
                f,
                c(l({}, t), {
                    visibleContent: n,
                    isSelected: o,
                }),
            );
    }
}
