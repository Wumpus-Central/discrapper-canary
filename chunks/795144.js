t.d(e, { A: () => u });
var i = t(627968);
t(64700);
var l = t(311907),
    r = t(397927),
    a = t(967198),
    d = t(652215),
    c = t(985018);
function u(n) {
    let e = (0, l.bG)([a.A], () => a.A.getGuildId()),
        u = n.type === d.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || e !== d.YYv
        ? null
        : (0, i.jsx)(r.Drp, {
              id: "set-channel-nickname",
              label: u ? c.intl.string(c.t.xXYKiP) : c.intl.string(c.t.dilOF6),
              action: function () {
                  (0, r.mMO)(async () => {
                      let { default: e } = await t.e("83504").then(t.bind(t, 872243));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              channelId: n.id,
                              heading: u ? c.intl.string(c.t.xXYKiP) : c.intl.string(c.t.dilOF6),
                              formTitle: u ? c.intl.string(c.t.OCAkGP) : c.intl.string(c.t["621LJD"]),
                          });
                  });
              },
          });
}
