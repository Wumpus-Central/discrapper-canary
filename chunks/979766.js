e.d(i, { A: () => A });
var t = e(627968);
e(64700);
var c = e(477782),
    r = e(366605),
    a = e(687709),
    o = e(492841),
    s = e(145530),
    l = e(652215),
    d = e(375708);
function A(n, i) {
    return n.state !== l.cmJ.SEND_FAILED && (0, o.A)(n, i)
        ? !1 === n.pinned
            ? (0, t.jsx)(c.Dr, {
                  id: "pin",
                  action: function (e) {
                      e.shiftKey ? a.A.pinMessage(i, n.id) : s.A.confirmPin(i, n);
                  },
                  label: d.intl.string(d.t.CvQ18w),
                  leadingAccessory: { type: "icon", icon: r.t },
                  icon: r.t,
              })
            : (0, t.jsx)(c.Dr, {
                  id: "unpin",
                  action: function (e) {
                      e.shiftKey ? a.A.unpinMessage(i, n.id) : s.A.confirmUnpin(i, n);
                  },
                  label: d.intl.string(d.t["Bse+F/"]),
                  leadingAccessory: { type: "icon", icon: r.t },
                  icon: r.t,
              })
        : null;
}
