n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(685399),
    a = n(667936),
    r = n(879349),
    o = n(439792);
function d(e) {
    let { channel: t, onAction: n } = e,
        d = (0, s.Ay)(t),
        c = Array.from((0, s.Rz)(d).values());
    return 0 === c.length
        ? null
        : (0, i.jsxs)(l.HOs, {
              className: o.kL,
              children: [
                  (0, i.jsx)("div", { className: o.oT, children: (0, i.jsx)(r.A, { channel: t }) }),
                  (0, i.jsx)("div", { className: o.zN }),
                  c.map((e, l) =>
                      (0, i.jsx)(
                          a.A,
                          { embeddedApp: e, presenceActivity: e.presenceActivity ?? void 0, channel: t, onAction: n },
                          l,
                      ),
                  ),
              ],
          });
}
