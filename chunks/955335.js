e.d(i, {
    r: function () {
        return o;
    }
});
var l = e(200651);
e(192379);
var t = e(481060),
    r = e(630388),
    s = e(981631),
    d = e(388032),
    a = e(755522);
let u = {
    size: 'md',
    color: t.tokens.colors.INTERACTIVE_NORMAL
};
function o(n) {
    let { subscriptions: i, color: e = 'text-normal' } = n,
        o = i.some((n) => (0, r.yE)(n.skuFlags, s.l4R.APPLICATION_GUILD_SUBSCRIPTION));
    return (0, l.jsx)(t.Heading, {
        variant: 'heading-lg/semibold',
        color: e,
        className: a.heading,
        children: o
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(t.ServerIcon, {
                          ...u,
                          color: 'currentColor'
                      }),
                      d.intl.string(d.t.XIhSoq)
                  ]
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(t.UserIcon, {
                          ...u,
                          color: 'currentColor'
                      }),
                      d.intl.string(d.t.dxfZpq)
                  ]
              })
    });
}
