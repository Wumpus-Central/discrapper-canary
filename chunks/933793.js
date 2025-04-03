n.d(e, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(240872),
    s = n(456269),
    o = n(346479),
    d = n(665906),
    c = n(592125),
    u = n(176505),
    h = n(388032);
function g(t) {
    let e = (0, r.e7)([c.Z], () => c.Z.getChannel(t.parent_id)),
        n = (0, d.Xb)(t),
        g = (0, s.kF)(t);
    return (null == e ? void 0 : e.isForumLikeChannel()) && n
        ? t.hasFlag(u.zZ.PINNED)
            ? (0, i.jsx)(a.sNh, {
                  id: 'unpin-thread',
                  label: h.NW.string(h.t.trD8am),
                  action: () => o.Z.unpin(t)
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'pin-thread',
                  label: h.NW.string(h.t.EnaWho),
                  action: function () {
                      null != g
                          ? l.Z.show({
                                title: h.NW.string(h.t.IMbjxs),
                                body: h.NW.string(h.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await o.Z.unpin(g), o.Z.pin(t);
                                }
                            })
                          : o.Z.pin(t);
                  }
              })
        : null;
}
