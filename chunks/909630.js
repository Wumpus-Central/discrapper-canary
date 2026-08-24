"use strict";
function n(...e) {
    return 1 === e.length && e[0]
        ? e[0]
        : (t) => {
              let r = !1,
                  n = e.map((e) => {
                      let n = i(e, t);
                      return r || (r = "function" == typeof n), n;
                  });
              if (r)
                  return () => {
                      n.forEach((t, r) => {
                          "function" == typeof t ? t() : i(e[r], null);
                      });
                  };
          };
}
function i(e, t) {
    if ("function" == typeof e) return e(t);
    null != e && (e.current = t);
}
r.d(t, { P: () => n });
