e.d(t, { Z: () => h });
var i = e(200651);
e(192379);
var a = e(442837),
    l = e(481060),
    r = e(240872),
    o = e(456269),
    d = e(346479),
    s = e(665906),
    u = e(592125),
    c = e(176505),
    f = e(388032);
function h(n) {
    let t = (0, a.e7)([u.Z], () => u.Z.getChannel(n.parent_id)),
        e = (0, s.Xb)(n),
        h = (0, o.kF)(n);
    return (null == t ? void 0 : t.isForumLikeChannel()) && e
        ? n.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(l.sNh, {
                  id: 'unpin-thread',
                  label: f.intl.string(f.t.trD8am),
                  action: () => d.Z.unpin(n)
              })
            : (0, i.jsx)(l.sNh, {
                  id: 'pin-thread',
                  label: f.intl.string(f.t.EnaWho),
                  action: function () {
                      null != h
                          ? r.Z.show({
                                title: f.intl.string(f.t.IMbjxs),
                                body: f.intl.string(f.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await d.Z.unpin(h), d.Z.pin(n);
                                }
                            })
                          : d.Z.pin(n);
                  }
              })
        : null;
}
