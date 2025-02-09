l.d(i, { r: () => o });
var e = l(200651);
l(192379);
var t = l(481060),
    r = l(630388),
    s = l(981631),
    d = l(388032),
    a = l(379341);
let u = {
    size: 'md',
    color: t.TVs.colors.INTERACTIVE_NORMAL
};
function o(n) {
    let { subscriptions: i, color: l = 'text-normal' } = n,
        o = i.some((n) => (0, r.yE)(n.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, e.jsx)(t.X6q, {
        variant: 'heading-lg/semibold',
        color: l,
        className: a.heading,
        children: o
            ? (0, e.jsxs)(e.Fragment, {
                  children: [
                      (0, e.jsx)(t.QTo, {
                          ...u,
                          color: 'currentColor'
                      }),
                      d.intl.string(d.t.XIhSoq)
                  ]
              })
            : (0, e.jsxs)(e.Fragment, {
                  children: [
                      (0, e.jsx)(t.tBG, {
                          ...u,
                          color: 'currentColor'
                      }),
                      d.intl.string(d.t.dxfZpq)
                  ]
              })
    });
}
