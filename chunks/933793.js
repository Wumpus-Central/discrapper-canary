e.d(t, { Z: () => f });
var i = e(200651);
e(192379);
var a = e(442837),
    l = e(481060),
    r = e(240872),
    d = e(456269),
    o = e(346479),
    s = e(665906),
    u = e(592125),
    c = e(176505),
    h = e(388032);
function f(n) {
    let t = (0, a.e7)([u.Z], () => u.Z.getChannel(n.parent_id)),
        e = (0, s.Xb)(n),
        f = (0, d.kF)(n);
    return (null == t ? void 0 : t.isForumLikeChannel()) && e
        ? n.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(l.sNh, {
                  id: 'unpin-thread',
                  label: h.intl.string(h.t.trD8am),
                  action: () => o.Z.unpin(n)
              })
            : (0, i.jsx)(l.sNh, {
                  id: 'pin-thread',
                  label: h.intl.string(h.t.EnaWho),
                  action: function () {
                      null != f
                          ? r.Z.show({
                                title: h.intl.string(h.t.IMbjxs),
                                body: h.intl.string(h.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await o.Z.unpin(f), o.Z.pin(n);
                                }
                            })
                          : o.Z.pin(n);
                  }
              })
        : null;
}
