"use strict";
n.d(t, { Q: () => o });
var r = n(627968);
n(64700);
var i = n(834730),
    s = n(665711),
    a = n(582275);
let o = (e) => {
    let { application: t, iconSize: n = 20 } = e;
    return null == t
        ? null
        : (0, r.jsxs)("div", {
              className: a.k,
              children: [
                  (0, r.jsx)(s.W, { application: t, iconSize: n }),
                  (0, r.jsx)(i.E, { variant: "text-sm/medium", color: "text-muted", children: t.name }),
              ],
          });
};
