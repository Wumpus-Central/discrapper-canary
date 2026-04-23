"use strict";
r.d(t, { A: () => s });
var n = r(64700);
let a = [];
function s(e, t) {
    let r = (0, n.useRef)(),
        s = (0, n.useRef)(a);
    return (
        s.current === a
            ? ((r.current = e()), (s.current = t))
            : !(function (e, t) {
                  if (e.length !== t.length) return !1;
                  for (let r = 0; r < t.length && r < e.length; r++) if (!Object.is(e[r], t[r])) return !1;
                  return !0;
              })(t, s.current) && ((r.current = e()), (s.current = t)),
        r.current
    );
}
