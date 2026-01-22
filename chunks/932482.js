n.d(t, {
    A: () => s,
});
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(985018),
    i = n(645720);
let s = (e) => {
    let { errorMessage: t, onClose: n } = e;
    return null == t || "" === t
        ? null
        : (0, l.jsxs)("div", {
              className: i.Un,
              children: [
                  (0, l.jsx)(r.EpV, {
                      size: "custom",
                      color: "currentColor",
                      width: 20,
                      height: 20,
                      className: i.ik,
                  }),
                  (0, l.jsx)(r.Text, {
                      className: i.kc,
                      variant: "text-sm/normal",
                      children: t,
                  }),
                  (0, l.jsx)(r.DUT, {
                      onClick: () => {
                          n();
                      },
                      "aria-label": a.intl.string(a.t.WAI6xu),
                      className: i.ut,
                  }),
              ],
          });
};
