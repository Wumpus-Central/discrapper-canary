n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(565138),
    a = n(430824),
    s = n(388032),
    o = n(748364);
let c = (e) => {
    let { stageInstance: t } = e,
        n = a.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: o.container,
              children: [
                  (0, r.jsx)(i.Heading, {
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
                                  (0, r.jsx)(l.Z, {
                                      guild: n,
                                      size: l.Z.Sizes.MINI,
                                      className: o.guildIcon,
                                  }),
                                  (0, r.jsx)(i.Text, {
                                      color: "header-secondary",
                                      variant: "text-sm/normal",
                                      children: n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(i.Text, {
                              variant: "text-md/semibold",
                              color: "header-primary",
                              children: t.topic,
                          }),
                      ],
                  }),
              ],
          });
};
