n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(477782),
    s = n(366605),
    r = n(687709),
    a = n(492841),
    o = n(145530),
    c = n(652215),
    d = n(985018);
function g(e, t) {
    return e.state !== c.cmJ.SEND_FAILED && (0, a.A)(e, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(l.Dr, {
                  id: "pin",
                  action: function (n) {
                      n.shiftKey ? r.A.pinMessage(t, e.id) : o.A.confirmPin(t, e);
                  },
                  label: d.intl.string(d.t.CvQ18w),
                  leadingAccessory: { type: "icon", icon: s.t },
                  icon: s.t,
              })
            : (0, i.jsx)(l.Dr, {
                  id: "unpin",
                  action: function (n) {
                      n.shiftKey ? r.A.unpinMessage(t, e.id) : o.A.confirmUnpin(t, e);
                  },
                  label: d.intl.string(d.t["Bse+F/"]),
                  leadingAccessory: { type: "icon", icon: s.t },
                  icon: s.t,
              })
        : null;
}
