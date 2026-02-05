e.d(t, { A: () => o });
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(967198),
    s = e(616075),
    d = e(652215),
    c = e(985018);
function o(n) {
    let t = (0, r.bG)([a.A], () => a.A.getGuildId()),
        o = n.type === d.rbe.GUILD_CATEGORY,
        { isFavoritesPerk: A } = (0, s.l)("useCategoryAddChannelItem");
    return !__OVERLAY__ && t === d.YYv && A && o
        ? (0, i.jsx)(l.Drp, {
              id: "add-channel-to-category",
              icon: l.U1e,
              label: c.intl.string(c.t["6uDHk6"]),
              action: function () {
                  (0, l.mMO)(async () => {
                      let { default: t } = await e.e("82220").then(e.bind(e, 889186));
                      return (e) => (0, i.jsx)(t, { ...e, parentId: n.id });
                  });
              },
          })
        : null;
}
