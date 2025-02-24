t.d(n, { Z: () => v }), t(47120);
var i = t(200651),
    r = t(793030),
    a = t(704215),
    o = t(481060),
    s = t(243778),
    c = t(921944),
    l = t(783684),
    d = t(388032),
    u = t(503388),
    x = t(719119);
function v() {
    let [e, n] = (0, s.US)([a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK], void 0, !1);
    return null == e || e !== a.z.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK
        ? null
        : (0, i.jsxs)('div', {
              className: u.container,
              children: [
                  (0, i.jsx)('img', {
                      alt: '',
                      className: u.image,
                      src: x
                  }),
                  (0, i.jsx)(r.xv, {
                      color: 'always-white',
                      variant: 'text-md/semibold',
                      children: d.NW.string(l.Z.diMhWV)
                  }),
                  (0, i.jsx)(r.xv, {
                      color: 'always-white',
                      variant: 'text-sm/medium',
                      children: d.NW.string(l.Z.pycxTk)
                  }),
                  (0, i.jsx)(o.olH, {
                      className: u.close,
                      innerClassName: u.innerClose,
                      onClick: () => {
                          n(c.L.USER_DISMISS);
                      }
                  })
              ]
          });
}
