n.d(t, { j: () => l }), n(35282), n(473749);
var r = n(464281);
function i(e, t, n) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e, t, n, i, o, l, c) {
    if (!e) return null;
    let u = l
        ? n
        : s(a({}, n), {
              onFocus: (0, r.tS)(n.onFocus, (e) => {
                  let t = e.target;
                  if (null != t) {
                      var n;
                      let e = (0, r.QV)(null != (n = t.getAttribute("aria-describedby")) ? n : void 0, o);
                      t.setAttribute("aria-describedby", e);
                  }
              }),
              onBlur: (0, r.tS)(n.onBlur, (e) => {
                  let t = e.target;
                  if (null != t) {
                      let e = t.getAttribute("aria-describedby");
                      if (null != e) {
                          let n = e.split(" ").filter((e) => e !== o);
                          n.length > 0
                              ? t.setAttribute("aria-describedby", n.join(" "))
                              : t.removeAttribute("aria-describedby");
                      }
                  }
              }),
          });
    return (0, r.FX)({
        tag: c,
        children: t,
        triggerHandlers: u,
        triggerRef: i,
    });
}
