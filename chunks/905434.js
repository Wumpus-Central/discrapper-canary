n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(565138),
    a = n(430824),
    o = n(388032),
    s = n(633570);
let c = (e) => {
    let { stageInstance: t } = e,
        n = a.Z.getGuild(t.guild_id);
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: s.container,
              children: [
                  (0, r.jsx)(i.Heading, {
                      className: s.header,
                      variant: "heading-sm/semibold",
                      children: o.intl.string(o.t["InbJ8/"]),
                  }),
                  (0, r.jsxs)("div", {
                      className: s.guildContainer,
                      children: [
                          (0, r.jsxs)("div", {
                              className: s.guildInfo,
                              children: [
                                  (0, r.jsx)(l.Z, {
                                      guild: n,
                                      size: l.Z.Sizes.MINI,
                                      className: s.guildIcon,
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
