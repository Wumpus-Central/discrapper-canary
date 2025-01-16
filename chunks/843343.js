n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(299379),
    o = n(486472),
    s = n(430824),
    c = n(682662),
    u = n(662146),
    d = n(981631),
    h = n(388032),
    p = n(768753);
function m() {
    let e = (0, l.e7)([o.Z, s.Z], () => o.Z.unavailableGuilds.filter((e) => null == s.Z.getGuild(e)).length);
    return e <= 0
        ? null
        : (0, i.jsx)(c.H, {
              children: (0, i.jsx)(u.Z, {
                  text: h.intl.format(h.t['TnH05+'], { count: e }),
                  color: r.Tooltip.Colors.RED,
                  children: (0, i.jsx)(r.Anchor, {
                      href: (0, a.Z)(d.RK.TWITTER),
                      target: '_blank',
                      className: p.guildsError,
                      'aria-label': h.intl.formatToPlainString(h.t['MEpX+/'], { count: e }),
                      children: (0, i.jsx)('span', {
                          'aria-hidden': !0,
                          className: p.errorInner,
                          children: '!'
                      })
                  })
              })
          });
}
