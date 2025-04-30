e.d(t, { Z: () => g });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    a = e(240872),
    o = e(456269),
    s = e(346479),
    d = e(665906),
    u = e(592125),
    c = e(176505),
    h = e(388032);
function g(n) {
    let t = (0, l.e7)([u.Z], () => u.Z.getChannel(n.parent_id)),
        e = (0, d.Xb)(n),
        g = (0, o.kF)(n);
    return (null == t ? void 0 : t.isForumLikeChannel()) && e
        ? n.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(r.sNh, {
                  id: 'unpin-thread',
                  label: h.intl.string(h.t.trD8am),
                  action: () => s.Z.unpin(n)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'pin-thread',
                  label: h.intl.string(h.t.EnaWho),
                  action: function () {
                      null != g
                          ? a.Z.show({
                                title: h.intl.string(h.t.IMbjxs),
                                body: h.intl.string(h.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await s.Z.unpin(g), s.Z.pin(n);
                                }
                            })
                          : s.Z.pin(n);
                  }
              })
        : null;
}
