i.d(n, { Z: () => Z });
var e = i(951288);
i(647438);
var l = i(442837),
    r = i(481060),
    a = i(240872),
    d = i(456269),
    o = i(346479),
    s = i(665906),
    u = i(592125),
    c = i(176505),
    h = i(388032);
function Z(t) {
    let n = (0, l.e7)([u.Z], () => u.Z.getChannel(t.parent_id)),
        i = (0, s.Xb)(t),
        Z = (0, d.kF)(t);
    return (null == n ? void 0 : n.isForumLikeChannel()) && i
        ? t.hasFlag(c.zZ.PINNED)
            ? (0, e.jsx)(r.sNh, {
                  id: "unpin-thread",
                  label: h.intl.string(h.t.trD8am),
                  action: () => o.Z.unpin(t),
              })
            : (0, e.jsx)(r.sNh, {
                  id: "pin-thread",
                  label: h.intl.string(h.t.EnaWho),
                  action: function () {
                      null != Z
                          ? a.Z.show({
                                title: h.intl.string(h.t.IMbjxs),
                                body: h.intl.string(h.t["mi5+Vl"]),
                                onConfirm: async () => {
                                    await o.Z.unpin(Z), o.Z.pin(t);
                                },
                            })
                          : o.Z.pin(t);
                  },
              })
        : null;
}
