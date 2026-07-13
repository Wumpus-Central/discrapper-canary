t.d(e, { A: () => c });
var n = t(64700);
let u = [];
function c(r, e) {
    let t = (0, n.useRef)(),
        c = (0, n.useRef)(u);
    return (
        c.current === u
            ? ((t.current = r()), (c.current = e))
            : !(function (r, e) {
                  if (r.length !== e.length) return !1;
                  for (let t = 0; t < e.length && t < r.length; t++) if (!Object.is(r[t], e[t])) return !1;
                  return !0;
              })(e, c.current) && ((t.current = r()), (c.current = e)),
        t.current
    );
}
