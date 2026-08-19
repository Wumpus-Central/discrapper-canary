"use strict";
function n(...e) {
    return 1 === e.length && e[0]
        ? e[0]
        : (t) => {
              let r = !1,
                  n = e.map((e) => {
                      let n = o(e, t);
                      return r || (r = "function" == typeof n), n;
                  });
              if (r)
                  return () => {
                      n.forEach((t, r) => {
                          "function" == typeof t ? t() : o(e[r], null);
                      });
                  };
          };
}
function o(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
}
r.d(t, { P: () => n });
