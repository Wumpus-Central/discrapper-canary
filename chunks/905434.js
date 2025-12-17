n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(565138),
    a = n(430824),
    s = n(388032),
    o = n(435639);
let c = (e) => {
    let { stageInstance: t } = e,
        n = a.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: o.container,
              children: [
                  (0, r.jsx)(l.Heading, {
                      className: o.header,
                      variant: "heading-sm/semibold",
                      children: s.intl.string(s.t.InbJ8x),
                  }),
                  (0, r.jsxs)("div", {
                      className: o.guildContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: o.guildInfo,
                              children: [
                                  (0, r.jsx)(i.Z, {
                                      guild: n,
                                      size: i.Z.Sizes.MINI,
                                      className: o.guildIcon,
                                  }),
                                  (0, r.jsx)(l.Text, {
                                      color: "text-default",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(l.Text, {
                              variant: "text-md/semibold",
                              color: "text-strong",
                              children: t.topic,
                          }),
                      ],
                  }),
              ],
          });
};
