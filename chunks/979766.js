n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(687709),
    r = n(492841),
    a = n(145530),
    c = n(652215),
    o = n(985018);
function d(e, t) {
    return e.state !== c.cmJ.SEND_FAILED && (0, r.A)(e, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(l.Drp, {
                  id: "pin",
                  action: function (n) {
                      n.shiftKey ? s.A.pinMessage(t, e.id) : a.A.confirmPin(t, e);
                  },
                  label: o.intl.string(o.t.CvQ18w),
                  leadingAccessory: { type: "icon", icon: l.tsw },
                  icon: l.tsw,
              })
            : (0, i.jsx)(l.Drp, {
                  id: "unpin",
                  action: function (n) {
                      n.shiftKey ? s.A.unpinMessage(t, e.id) : a.A.confirmUnpin(t, e);
                  },
                  label: o.intl.string(o.t["Bse+F/"]),
                  leadingAccessory: { type: "icon", icon: l.tsw },
                  icon: l.tsw,
              })
        : null;
}
