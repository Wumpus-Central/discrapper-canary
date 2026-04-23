n.d(t, { A: () => c });
var l = n(627968);
n(64700);
var a = n(534514),
    i = n(834730),
    r = n(263063),
    s = n(71393),
    d = n(985018),
    o = n(618282);
let c = (e) => {
    let { stageInstance: t } = e,
        n = s.A.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, l.jsx)(a.D, {
                      className: o.wx,
                      variant: "heading-sm/semibold",
                      children: d.intl.string(d.t.InbJ8x),
                  }),
                  (0, l.jsxs)("div", {
                      className: o.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: o.OA,
                              children: [
                                  (0, l.jsx)(r.Ay, { guild: n, size: r.Ay.Sizes.MINI, className: o.$f }),
                                  (0, l.jsx)(i.E, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(i.E, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
