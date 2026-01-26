n.d(t, {
    A: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(965407),
    a = n(249700),
    o = n(652215),
    c = n(985018);

function s(e, t) {
    return e.state !== o.cmJ.SEND_FAILED
        ? null
        : (0, r.jsx)(i.Drp, {
              id: "resend",
              label: c.intl.string(c.t.lXHojr),
              leadingAccessory: {
                  type: "icon",
                  icon: i.fNY,
              },
              action: () => (0, a.A)(t, e, void 0, l.A.getOptions(e.id)),
          });
}
