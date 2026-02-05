n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(965407),
    r = n(249700),
    s = n(652215),
    o = n(985018);
function d(e, t) {
    return e.state !== s.cmJ.SEND_FAILED
        ? null
        : (0, i.jsx)(l.Drp, {
              id: "resend",
              label: o.intl.string(o.t.lXHojr),
              leadingAccessory: { type: "icon", icon: l.fNY },
              action: () => (0, r.A)(t, e, void 0, a.A.getOptions(e.id)),
          });
}
