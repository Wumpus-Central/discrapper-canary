n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(477782),
    l = n(366605),
    r = n(687709),
    a = n(492841),
    c = n(145530),
    o = n(652215),
    d = n(985018);
function u(e, t) {
    return e.state !== o.cmJ.SEND_FAILED && (0, a.A)(e, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(s.Dr, {
                  id: "pin",
                  action: function (n) {
                      n.shiftKey ? r.A.pinMessage(t, e.id) : c.A.confirmPin(t, e);
                  },
                  label: d.intl.string(d.t.CvQ18w),
                  leadingAccessory: { type: "icon", icon: l.t },
                  icon: l.t,
              })
            : (0, i.jsx)(s.Dr, {
                  id: "unpin",
                  action: function (n) {
                      n.shiftKey ? r.A.unpinMessage(t, e.id) : c.A.confirmUnpin(t, e);
                  },
                  label: d.intl.string(d.t["Bse+F/"]),
                  leadingAccessory: { type: "icon", icon: l.t },
                  icon: l.t,
              })
        : null;
}
