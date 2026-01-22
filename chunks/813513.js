n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(685399),
    a = n(667936),
    s = n(879349),
    o = n(439792);

function c(e) {
    let { channel: t, onAction: n } = e,
        c = (0, i.Ay)(t),
        u = Array.from((0, i.Rz)(c).values());
    return 0 === u.length
        ? null
        : (0, r.jsxs)(l.HOs, {
              className: o.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: o.oT,
                      children: (0, r.jsx)(s.A, {
                          channel: t,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: o.zN,
                  }),
                  u.map((e, l) => {
                      var i;
                      return (0, r.jsx)(
                          a.A,
                          {
                              embeddedApp: e,
                              presenceActivity: null != (i = e.presenceActivity) ? i : void 0,
                              channel: t,
                              onAction: n,
                          },
                          l,
                      );
                  }),
              ],
          });
}
