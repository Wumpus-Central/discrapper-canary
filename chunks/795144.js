t.d(e, { A: () => c });
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(967198),
    d = t(616075),
    s = t(652215),
    u = t(985018);
function c(n) {
    let e = (0, r.bG)([a.A], () => a.A.getGuildId()),
        c = n.type === s.rbe.GUILD_CATEGORY,
        { isFavoritesPerk: o } = (0, d.l)("useChannelFavoriteSetNickname");
    return __OVERLAY__ || e !== s.YYv
        ? null
        : (0, i.jsx)(l.Drp, {
              id: "set-channel-nickname",
              label: o && c ? u.intl.string(u.t.xXYKiP) : u.intl.string(u.t.dilOF6),
              action: function () {
                  (0, l.mMO)(async () => {
                      let { default: e } = await t.e("83504").then(t.bind(t, 872243));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              channelId: n.id,
                              heading: o && c ? u.intl.string(u.t.xXYKiP) : u.intl.string(u.t.dilOF6),
                              formTitle: o && c ? u.intl.string(u.t.OCAkGP) : u.intl.string(u.t["621LJD"]),
                              allowReset: !(o && c),
                          });
                  });
              },
          });
}
