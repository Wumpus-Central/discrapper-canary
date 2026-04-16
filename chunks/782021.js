"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(158954),
    a = n(397927),
    o = n(652215),
    c = n(985018),
    d = n(135622),
    u = n(885106);
function h(e) {
    let { consent: t, consentRequired: n, onConsentChange: s } = e;
    return n
        ? (0, i.jsx)("div", {
              className: d.IQ,
              children: (0, i.jsx)(l.JuY, {
                  label: c.intl.format(c.t.qMDAP0, { termsURL: o.X7G.TERMS, privacyURL: o.X7G.PRIVACY }),
                  checked: t,
                  onChange: s,
                  labelType: "secondary",
              }),
          })
        : (0, i.jsx)(a.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: r()(u.Ot, d.E2),
              children: c.intl.format(c.t["KI+BSb"], { termsURL: o.X7G.TERMS, privacyURL: o.X7G.PRIVACY }),
          });
}
