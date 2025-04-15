n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(299379),
    s = n(486472),
    a = n(430824),
    c = n(682662),
    u = n(662146),
    d = n(981631),
    h = n(388032),
    p = n(552179);
function f() {
    let e = (0, i.e7)([s.Z, a.Z], () => s.Z.unavailableGuilds.filter((e) => null == a.Z.getGuild(e)).length);
    return e <= 0
        ? null
        : (0, r.jsx)(c.H, {
              children: (0, r.jsx)(u.Z, {
                  text: h.NW.format(h.t['TnH05+'], { count: e }),
                  color: l.ua7.Colors.RED,
                  children: (0, r.jsx)(l.eee, {
                      href: (0, o.Z)(d.RK.TWITTER),
                      target: '_blank',
                      className: p.guildsError,
                      'aria-label': h.NW.formatToPlainString(h.t['MEpX+/'], { count: e }),
                      children: (0, r.jsx)('span', {
                          'aria-hidden': !0,
                          className: p.errorInner,
                          children: '!'
                      })
                  })
              })
          });
}
