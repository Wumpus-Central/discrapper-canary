n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(240872),
    s = n(456269),
    o = n(346479),
    c = n(665906),
    d = n(592125),
    u = n(176505),
    h = n(388032);
function p(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.getChannel(e.parent_id)),
        n = (0, c.Xb)(e),
        p = (0, s.kF)(e);
    return (null == t ? void 0 : t.isForumLikeChannel()) && n
        ? e.hasFlag(u.zZ.PINNED)
            ? (0, i.jsx)(a.sNh, {
                  id: 'unpin-thread',
                  label: h.intl.string(h.t.trD8am),
                  action: () => o.Z.unpin(e)
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'pin-thread',
                  label: h.intl.string(h.t.EnaWho),
                  action: function () {
                      null != p
                          ? r.Z.show({
                                title: h.intl.string(h.t.IMbjxs),
                                body: h.intl.string(h.t['mi5+Vl']),
                                onConfirm: async () => {
                                    await o.Z.unpin(p), o.Z.pin(e);
                                }
                            })
                          : o.Z.pin(e);
                  }
              })
        : null;
}
