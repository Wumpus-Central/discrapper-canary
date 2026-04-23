e.d(t, { A: () => A });
var i = e(627968);
e(64700);
var l = e(311907),
    a = e(477782),
    r = e(367513),
    s = e(976860),
    d = e(576705),
    c = e(652215),
    o = e(985018);
function A(n, t) {
    return (0, l.bG)([d.A], () => d.A.can(c.xBc.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, i.jsx)(a.Dr, {
              id: "open-chat",
              label: o.intl.string(o.t.ZXxLQg),
              action: () => {
                  r.A.updateChatOpen(n.id, !0), (0, s.uh)(t.id, n.id);
              },
          })
        : null;
}
