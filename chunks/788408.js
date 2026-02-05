i.d(t, { A: () => A });
var e = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    a = i(367513),
    s = i(976860),
    d = i(576705),
    c = i(652215),
    o = i(985018);
function A(n, t) {
    return (0, l.bG)([d.A], () => d.A.can(c.xBc.CONNECT, n), [n]) && n.isGuildVocal()
        ? (0, e.jsx)(r.Drp, {
              id: "open-chat",
              label: o.intl.string(o.t.ZXxLQg),
              action: () => {
                  a.A.updateChatOpen(n.id, !0), (0, s.uh)(t.id, n.id);
              },
          })
        : null;
}
