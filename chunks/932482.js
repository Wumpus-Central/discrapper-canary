n.d(t, { A: () => s });
var l = n(627968);
n(64700);
var a = n(397927),
    i = n(985018),
    r = n(645720);
let s = (e) => {
    let { errorMessage: t, onClose: n } = e;
    return null == t || "" === t
        ? null
        : (0, l.jsxs)("div", {
              className: r.Un,
              children: [
                  (0, l.jsx)(a.EpV, { size: "custom", color: "currentColor", width: 20, height: 20, className: r.ik }),
                  (0, l.jsx)(a.Text, { className: r.kc, variant: "text-sm/normal", children: t }),
                  (0, l.jsx)(a.DUT, {
                      onClick: () => {
                          n();
                      },
                      "aria-label": i.intl.string(i.t.WAI6xu),
                      className: r.ut,
                  }),
              ],
          });
};
