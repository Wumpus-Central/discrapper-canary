"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(685399),
    o = n(667936),
    c = n(879349),
    d = n(439792);
function u(e) {
    let { channel: t, onAction: n, isStandardGap: s } = e,
        u = (0, r.Ay)(t),
        h = Array.from((0, r.Rz)(u).values());
    return 0 === h.length
        ? null
        : (0, i.jsxs)(a.HOs, {
              className: l()(d.kL, { [d.iA]: s }),
              children: [
                  (0, i.jsx)("div", { className: d.oT, children: (0, i.jsx)(c.A, { channel: t }) }),
                  (0, i.jsx)("div", { className: d.zN }),
                  h.map((e, s) =>
                      (0, i.jsx)(
                          o.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          s,
                      ),
                  ),
              ],
          });
}
