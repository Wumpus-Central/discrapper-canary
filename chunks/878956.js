n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(965407),
    o = n(249700),
    a = n(652215),
    c = n(985018);
function s(e, t) {
    return e.state !== a.cmJ.SEND_FAILED
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "resend",
              label: c.intl.string(c.t.lXHojr),
              action: () => (0, o.A)(t, e, void 0, i.A.getOptions(e.id)),
          });
}
