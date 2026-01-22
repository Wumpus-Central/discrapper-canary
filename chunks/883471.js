n.d(t, {
    A: () => c,
});
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(263063),
    i = n(71393),
    s = n(985018),
    o = n(75271);
let c = (e) => {
    let { stageInstance: t } = e,
        n = i.A.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: o.kL,
              children: [
                  (0, l.jsx)(r.Heading, {
                      className: o.wx,
                      variant: "heading-sm/semibold",
                      children: s.intl.string(s.t.InbJ8x),
                  }),
                  (0, l.jsxs)("div", {
                      className: o.bo,
                      children: [
                          (0, l.jsxs)("div", {
                              className: o.OA,
                              children: [
                                  (0, l.jsx)(a.A, {
                                      guild: n,
                                      size: a.A.Sizes.MINI,
                                      className: o.$f,
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, l.jsx)(r.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: t.topic,
                          }),
                      ],
                  }),
              ],
          });
};
