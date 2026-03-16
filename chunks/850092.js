"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(925946),
    a = n(935520),
    o = n(985018),
    l = n(183959);
function u(e) {
    let { userId: t, onSendWave: n } = e,
        { enabled: u } = a.A.useConfig({ location: "Friend Request Toast" }),
        c = (0, s.A)(t);
    return u
        ? (0, r.jsxs)("div", {
              className: l.$J,
              children: [
                  (0, r.jsx)(i.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: o.intl.string(o.t.XcTHmQ),
                  }),
                  (0, r.jsx)(i.Button, {
                      variant: "secondary",
                      text: o.intl.string(o.t.pVlP58),
                      size: "sm",
                      onClick: () => {
                          c(), n?.();
                      },
                  }),
              ],
          })
        : null;
}
