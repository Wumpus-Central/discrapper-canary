n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(240872),
    o = n(456269),
    s = n(346479),
    c = n(665906),
    u = n(592125),
    d = n(176505),
    p = n(388032);
function h(e) {
    let t = (0, i.e7)([u.Z], () => u.Z.getChannel(e.parent_id)),
        n = (0, c.Xb)(e),
        h = (0, o.kF)(e);
    return (null == t ? void 0 : t.isForumLikeChannel()) && n
        ? e.hasFlag(d.zZ.PINNED)
            ? (0, r.jsx)(l.sNh, {
                  id: 'unpin-thread',
                  label: p.intl.string(p.t.trD8am),
                  action: () => s.Z.unpin(e)
              })
            : (0, r.jsx)(l.sNh, {
                  id: 'pin-thread',
                  label: p.intl.string(p.t.EnaWho),
                  action: function () {
                      null != h
                          ? a.Z.show({
                                title: p.intl.string(p.t.IMbjxs),
                                body: p.intl.string(p.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await s.Z.unpin(h), s.Z.pin(e);
                                }
                            })
                          : s.Z.pin(e);
                  }
              })
        : null;
}
