"use strict";
var n = r(582128),
    i =
        "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
              },
    o = n.useState,
    a = n.useEffect,
    s = n.useLayoutEffect,
    l = n.useDebugValue;
function u(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var r = t();
        return !i(e, r);
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
                  n = o({ inst: { value: r, getSnapshot: t } }),
                  i = n[0].inst,
                  c = n[1];
              return (
                  s(
                      function () {
                          (i.value = r), (i.getSnapshot = t), u(i) && c({ inst: i });
                      },
                      [e, r, t],
                  ),
                  a(
                      function () {
                          return (
                              u(i) && c({ inst: i }),
                              e(function () {
                                  u(i) && c({ inst: i });
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
