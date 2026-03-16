n.d(t, { A: () => o });
var l = n(627968);
n(64700);
var a = n(397927),
    r = n(263063),
    i = n(71393),
    s = n(985018),
    d = n(75271);
let o = (e) => {
    let { stageInstance: t } = e,
        n = i.A.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: d.kL,
              children: [
                  (0, l.jsx)(a.Heading, {
                      className: d.wx,
                      variant: "heading-sm/semibold",
                      children: s.intl.string(s.t.InbJ8x),
                  }),
                  (0, l.jsxs)("div", {
                      className: d.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: d.OA,
                              children: [
                                  (0, l.jsx)(r.Ay, { guild: n, size: r.Ay.Sizes.MINI, className: d.$f }),
                                  (0, l.jsx)(a.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(a.Text, { variant: "text-md/semibold", color: "text-strong", children: t.topic }),
                      ],
                  }),
              ],
          });
};
