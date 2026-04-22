"use strict";
n.d(t, { A: () => c });
var a = n(627968);
n(64700);
var i = n(534514),
    r = n(834730),
    l = n(263063),
    s = n(71393),
    d = n(985018),
    o = n(618282);
let c = (e) => {
    let { stageInstance: t } = e,
        n = s.A.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, a.jsx)(i.D, {
                      className: o.wx,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.InbJ8x),
                  }),
                  (0, a.jsxs)("div", {
                      className: o.bo,
                      children: [
                          (0, a.jsxs)("div", {
                              className: o.OA,
                              children: [
                                  (0, a.jsx)(l.Ay, { guild: n, size: l.Ay.Sizes.MINI, className: o.$f }),
                                  (0, a.jsx)(r.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(r.E, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
