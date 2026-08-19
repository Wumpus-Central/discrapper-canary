"use strict";
var n = r(582128),
    o =
        "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    i = n.useState,
    a = n.useEffect,
    s = n.useLayoutEffect,
    l = n.useDebugValue;
function u(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !o(e, r);
    } catch (e) {
        return !0;
    }
}
var c =
    "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement
        ? function (e, t) {
              return t();
          }
        : function (e, t) {
              var r = t(),
                  n = i({ inst: { value: r, getSnapshot: t } }),
                  o = n[0].inst,
                  c = n[1];
              return (
                  s(
                      function () {
                          (o.value = r), (o.getSnapshot = t), u(o) && c({ inst: o });
                      },
                      [e, r, t],
                  ),
                  a(
                      function () {
                          return (
                              u(o) && c({ inst: o }),
                              e(function () {
                                  u(o) && c({ inst: o });
                              })
                          );
                      },
                      [e],
                  ),
                  l(r),
                  r
              );
          };
t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
