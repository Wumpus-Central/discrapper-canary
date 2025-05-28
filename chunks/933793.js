t.d(e, { Z: () => h });
var i = t(255367);
t(73800);
var r = t(442837),
    a = t(481060),
    l = t(240872),
    o = t(456269),
    s = t(346479),
    d = t(665906),
    u = t(592125),
    c = t(176505),
    f = t(388032);
function h(n) {
    let e = (0, r.e7)([u.Z], () => u.Z.getChannel(n.parent_id)),
        t = (0, d.Xb)(n),
        h = (0, o.kF)(n);
    return (null == e ? void 0 : e.isForumLikeChannel()) && t
        ? n.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(a.sNh, {
                  id: 'unpin-thread',
                  label: f.intl.string(f.t.trD8am),
                  action: () => s.Z.unpin(n)
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'pin-thread',
                  label: f.intl.string(f.t.EnaWho),
                  action: function () {
                      null != h
                          ? l.Z.show({
                                title: f.intl.string(f.t.IMbjxs),
                                body: f.intl.string(f.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await s.Z.unpin(h), s.Z.pin(n);
                                }
                            })
                          : s.Z.pin(n);
                  }
              })
        : null;
}
