e.d(n, { Z: () => f });
var i = e(54381);
e(473749);
var a = e(442837),
    l = e(481060),
    r = e(240872),
    s = e(456269),
    o = e(346479),
    d = e(665906),
    u = e(592125),
    c = e(176505),
    h = e(388032);
function f(t) {
    let n = (0, a.e7)([u.Z], () => u.Z.getChannel(t.parent_id)),
        e = (0, d.Xb)(t),
        f = (0, s.kF)(t);
    return (null == n ? void 0 : n.isForumLikeChannel()) && e
        ? t.hasFlag(c.zZ.PINNED)
            ? (0, i.jsx)(l.sNh, {
                  id: "unpin-thread",
                  label: h.intl.string(h.t.trD8ao),
                  action: () => o.Z.unpin(t),
              })
            : (0, i.jsx)(l.sNh, {
                  id: "pin-thread",
                  label: h.intl.string(h.t.EnaWhu),
                  action: function () {
                      null != f
                          ? r.Z.show({
                                title: h.intl.string(h.t.IMbjxo),
                                body: h.intl.string(h.t["mi5+Vl"]),
                                onConfirm: async () => {
                                    await o.Z.unpin(f), o.Z.pin(t);
                                },
                            })
                          : o.Z.pin(t);
                  },
              })
        : null;
}
