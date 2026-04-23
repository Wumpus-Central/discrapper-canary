n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(477782),
    a = n(663417),
    r = n(965407),
    s = n(249700),
    o = n(652215),
    d = n(985018);
function c(e, t) {
    return e.state !== o.cmJ.SEND_FAILED
        ? null
        : (0, i.jsx)(l.Dr, {
              id: "resend",
              label: d.intl.string(d.t.lXHojr),
              leadingAccessory: { type: "icon", icon: a.f },
              action: () => (0, s.A)(t, e, void 0, r.A.getOptions(e.id)),
          });
}
