e.d(n, { Z: () => h });
var i = e(951288);
e(647438);
var a = e(442837),
    l = e(481060),
    r = e(240872),
    o = e(456269),
    s = e(346479),
    d = e(665906),
    u = e(592125),
    c = e(176505),
    f = e(388032);
function h(t) {
    let n = (0, a.e7)([u.Z], () => u.Z.getChannel(t.parent_id)),
        e = (0, d.Xb)(t),
        h = (0, o.kF)(t);
    return (null == n ? void 0 : n.isForumLikeChannel()) && e
        ? t.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(l.sNh, {
                  id: "unpin-thread",
                  label: f.intl.string(f.t.trD8am),
                  action: () => s.Z.unpin(t),
              })
            : (0, i.jsx)(l.sNh, {
                  id: "pin-thread",
                  label: f.intl.string(f.t.EnaWho),
                  action: function () {
                      null != h
                          ? r.Z.show({
                                title: f.intl.string(f.t.IMbjxs),
                                body: f.intl.string(f.t["mi5+Vl"]),
                                onConfirm: async () => {
                                    await s.Z.unpin(h), s.Z.pin(t);
                                },
                            })
                          : s.Z.pin(t);
                  },
              })
        : null;
}
