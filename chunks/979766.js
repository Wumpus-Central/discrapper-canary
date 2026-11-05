var t = e(477900);
e(582128);
var c = e(477782),
    o = e(366605),
    r = e(687709),
    a = e(492841),
    s = e(145530),
    l = e(652215),
    d = e(792996);
e.d(
    i,
    {},
    {
        A: function (n, i) {
            return n.state !== l.cmJ.SEND_FAILED && (0, a.A)(n, i)
                ? !1 === n.pinned
                    ? (0, t.jsx)(c.Dr, {
                          id: "pin",
                          action: function (e) {
                              e.shiftKey ? r.A.pinMessage(i, n.id) : s.A.confirmPin(i, n);
                          },
                          label: d.intl.string(d.t.CvQ18w),
                          leadingAccessory: { type: "icon", icon: o.PinIcon },
                          icon: o.PinIcon,
                      })
                    : (0, t.jsx)(c.Dr, {
                          id: "unpin",
                          action: function (e) {
                              e.shiftKey ? r.A.unpinMessage(i, n.id) : s.A.confirmUnpin(i, n);
                          },
                          label: d.intl.string(d.t["Bse+F/"]),
                          leadingAccessory: { type: "icon", icon: o.PinIcon },
                          icon: o.PinIcon,
                      })
                : null;
        },
    },
);
