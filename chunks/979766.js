n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(687709),
    s = n(492841),
    a = n(145530),
    o = n(652215),
    u = n(985018);
function c(e, t) {
    return e.state !== o.cmJ.SEND_FAILED && (0, s.A)(e, t)
        ? !1 === e.pinned
            ? (0, i.jsx)(l.Drp, {
                  id: "pin",
                  action: function (n) {
                      n.shiftKey ? r.A.pinMessage(t, e.id) : a.A.confirmPin(t, e);
                  },
                  label: u.intl.string(u.t.CvQ18w),
                  icon: l.tsw,
              })
            : (0, i.jsx)(l.Drp, {
                  id: "unpin",
                  action: function (n) {
                      n.shiftKey ? r.A.unpinMessage(t, e.id) : a.A.confirmUnpin(t, e);
                  },
                  label: u.intl.string(u.t["Bse+F/"]),
                  icon: l.tsw,
              })
        : null;
}
