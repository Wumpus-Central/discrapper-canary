"use strict";
r.d(t, { A: () => o });
var n = r(64700);
let i = [];
function o(e, t) {
    let r = (0, n.useRef)(),
        o = (0, n.useRef)(i);
    return (
        o.current === i
            ? ((r.current = e()), (o.current = t))
            : !(function (e, t) {
                  if (e.length !== t.length) return !1;
                  for (let r = 0; r < t.length && r < e.length; r++) if (!Object.is(e[r], t[r])) return !1;
                  return !0;
              })(t, o.current) && ((r.current = e()), (o.current = t)),
        r.current
    );
}
