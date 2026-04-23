t.d(e, { A: () => u });
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(192308),
    a = t(477782),
    d = t(967198),
    s = t(652215),
    o = t(985018);
function u(n) {
    let e = (0, l.bG)([d.A], () => d.A.getGuildId()),
        u = n.type === s.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || e !== s.YYv
        ? null
        : (0, i.jsx)(a.Dr, {
              id: "set-channel-nickname",
              label: u ? o.intl.string(o.t.xXYKiP) : o.intl.string(o.t.dilOF6),
              action: function () {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await t.e("83504").then(t.bind(t, 872243));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              channelId: n.id,
                              heading: u ? o.intl.string(o.t.xXYKiP) : o.intl.string(o.t.dilOF6),
                              formTitle: u ? o.intl.string(o.t.OCAkGP) : o.intl.string(o.t["621LJD"]),
                          });
                  });
              },
          });
}
