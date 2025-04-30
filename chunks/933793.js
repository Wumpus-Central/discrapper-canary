e.d(n, { Z: () => g });
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(240872),
    s = e(456269),
    o = e(346479),
    d = e(665906),
    c = e(592125),
    u = e(176505),
    h = e(388032);
function g(t) {
    let n = (0, r.e7)([c.Z], () => c.Z.getChannel(t.parent_id)),
        e = (0, d.Xb)(t),
        g = (0, s.kF)(t);
    return (null == n ? void 0 : n.isForumLikeChannel()) && e
        ? t.hasFlag(u.zZ.PINNED)
            ? (0, i.jsx)(l.sNh, {
                  id: 'unpin-thread',
                  label: h.intl.string(h.t.trD8am),
                  action: () => o.Z.unpin(t)
              })
            : (0, i.jsx)(l.sNh, {
                  id: 'pin-thread',
                  label: h.intl.string(h.t.EnaWho),
                  action: function () {
                      null != g
                          ? a.Z.show({
                                title: h.intl.string(h.t.IMbjxs),
                                body: h.intl.string(h.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await o.Z.unpin(g), o.Z.pin(t);
                                }
                            })
                          : o.Z.pin(t);
                  }
              })
        : null;
}
