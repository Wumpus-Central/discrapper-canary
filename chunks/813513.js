"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(685399),
    o = n(667936),
    c = n(879349),
    d = n(706926),
    u = n(467935);
function h(e) {
    let { channel: t, onAction: n } = e,
        s = (0, a.Ay)(t),
        h = Array.from((0, a.Rz)(s).values());
    return 0 === h.length
        ? null
        : (0, i.jsxs)(r.HOs, {
              className: l()(u.popover, d.kL),
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
