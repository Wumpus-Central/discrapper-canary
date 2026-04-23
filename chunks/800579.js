n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(192308),
    a = n(176781),
    r = n(777666),
    o = n(95551),
    d = n(734066),
    c = n(274372),
    u = n(710315),
    p = n(696016),
    h = n(985018);
function m(e) {
    let { onClose: t } = e,
        m = (0, d.sw)(),
        { userStatusMenu: _ } = u.$.useConfig({ location: "ClipsUserStatusMenuItem" }),
        A = (0, s.bG)([c.A], () => c.A.getNewClipIds().length);
    return m && _
        ? (0, i.jsx)(o.N3, {
              action: "PRESS_CLIPS",
              icon: a.x,
              label: h.intl.string(h.t.z2jK6X),
              trailing: A > 0 ? (0, i.jsx)(r.hV, { count: A }) : null,
              onClick: () => {
                  t(),
                      (0, l.openModalLazy)(
                          async () => {
                              let { default: e } = await Promise.all([n.e("42784"), n.e("53584")]).then(
                                  n.bind(n, 543428),
                              );
                              return (t) => (0, i.jsx)(e, { ...t });
                          },
                          { modalKey: p.nm },
                      );
              },
          })
        : null;
}
