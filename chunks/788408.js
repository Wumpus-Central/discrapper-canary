e.d(t, { A: () => u });
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(367513),
    s = e(976860),
    c = e(576705),
    o = e(652215),
    d = e(985018);
function u(n, t) {
    return (0, l.bG)([c.A], () => c.A.can(o.xBc.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, i.jsx)(r.Drp, {
              id: "open-chat",
              label: d.intl.string(d.t.ZXxLQg),
              action: () => {
                  a.A.updateChatOpen(n.id, !0), (0, s.uh)(t.id, n.id);
              },
          })
        : null;
}
