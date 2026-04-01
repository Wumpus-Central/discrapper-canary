n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(397927),
    r = n(685399),
    o = n(667936),
    d = n(879349),
    c = n(86865),
    u = n(442078);
function h(e) {
    let { channel: t, onAction: n } = e,
        l = (0, r.Ay)(t),
        h = Array.from((0, r.Rz)(l).values());
    return 0 === h.length
        ? null
        : (0, i.jsxs)(a.HOs, {
              className: s()(u.popover, c.kL),
              children: [
                  (0, i.jsx)("div", { className: c.oT, children: (0, i.jsx)(d.A, { channel: t }) }),
                  (0, i.jsx)("div", { className: c.zN }),
                  h.map((e, l) =>
                      (0, i.jsx)(
                          o.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
