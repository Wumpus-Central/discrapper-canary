n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(299379),
    a = n(486472),
    s = n(430824),
    c = n(682662),
    d = n(662146),
    u = n(981631),
    h = n(388032),
    p = n(204544);
function m() {
    let e = (0, l.e7)([a.Z, s.Z], () => a.Z.unavailableGuilds.filter((e) => null == s.Z.getGuild(e)).length);
    return e <= 0
        ? null
        : (0, i.jsx)(c.H, {
              children: (0, i.jsx)(d.Z, {
                  text: h.intl.format(h.t['TnH05+'], { count: e }),
                  color: r.ua7.Colors.RED,
                  children: (0, i.jsx)(r.eee, {
                      href: (0, o.Z)(u.RK.TWITTER),
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
