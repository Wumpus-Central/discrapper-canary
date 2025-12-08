n.d(t, { W: () => f });
var r = n(54381),
    o = n(481060),
    i = n(970013),
    l = n(388032);
function a(e) {
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
    let { getDismissibleContentTypes: t, stronglyDiscouragedBadgeComponent: n, visibleContent: i, isSelected: a } = e,
        c = null == t ? void 0 : t(),
        s = null != i && c.includes(i) && !a,
        u = null != n ? (0, r.jsx)(n, {}) : (0, r.jsx)(o.IGR, { text: l.intl.string(l.t.y2b7CA) });
    return s ? u : null;
}
function d(e) {
    let { useCustomDecoration: t, visibleContent: n, isSelected: r } = e;
    return t(n, r);
}
function f(e) {
    let { trailing: t, visibleContent: n, isSelected: o } = e;
    if (null == t) return null;
    switch (t.type) {
        case i.W.BADGE_COUNT:
            return (0, r.jsx)(s, a({}, t));
        case i.W.BADGE_NEW:
            return (0, r.jsx)(
                u,
                c(a({}, t), {
                    visibleContent: n,
                    isSelected: o,
                }),
            );
        case i.W.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(
                d,
                c(a({}, t), {
                    visibleContent: n,
                    isSelected: o,
                }),
            );
    }
}
