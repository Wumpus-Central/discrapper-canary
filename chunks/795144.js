n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
    l = n(967198),
    d = n(652215),
    s = n(985018);
function o(e) {
    let t = (0, a.bG)([l.A], () => l.A.getGuildId());
    return (
        e.type,
        d.rbe.GUILD_CATEGORY,
        __OVERLAY__ || t !== d.YYv
            ? null
            : (0, i.jsx)(r.Drp, {
                  id: "set-channel-nickname",
                  label: s.intl.string(s.t.dilOF6),
                  action: function () {
                      (0, r.mMO)(async () => {
                          let { default: t } = await n.e("83504").then(n.bind(n, 872243));
                          return (n) =>
                              (0, i.jsx)(t, {
                                  ...n,
                                  channelId: e.id,
                                  heading: s.intl.string(s.t.dilOF6),
                                  formTitle: s.intl.string(s.t["621LJD"]),
                                  allowReset: !0,
                              });
                      });
                  },
              })
    );
}
