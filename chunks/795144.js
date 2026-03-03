e.d(n, { A: () => s });
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    r = e(967198),
    d = e(652215),
    o = e(985018);
function s(t) {
    let n = (0, l.bG)([r.A], () => r.A.getGuildId()),
        s = t.type === d.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || n !== d.YYv
        ? null
        : (0, i.jsx)(a.Drp, {
              id: "set-channel-nickname",
              label: s ? o.intl.string(o.t.xXYKiP) : o.intl.string(o.t.dilOF6),
              action: function () {
                  (0, a.mMO)(async () => {
                      let { default: n } = await e.e("83504").then(e.bind(e, 872243));
                      return (e) =>
                          (0, i.jsx)(n, {
                              ...e,
                              channelId: t.id,
                              heading: s ? o.intl.string(o.t.xXYKiP) : o.intl.string(o.t.dilOF6),
                              formTitle: s ? o.intl.string(o.t.OCAkGP) : o.intl.string(o.t["621LJD"]),
                              allowReset: !1,
                          });
                  });
              },
          });
}
