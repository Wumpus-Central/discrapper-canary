r.d(n, {
    c: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(642128),
    s = r(442837),
    l = r(710593),
    u = r(481060),
    c = r(607070),
    d = r(79320),
    f = r(388032),
    p = r(481320);
function h() {
    let e = [
            {
                keybinds: ['Spacebar', 'Enter'],
                name: f.intl.string(f.t['cs/HVF'])
            },
            {
                keybinds: ['up', 'down'],
                name: f.intl.string(f.t.dmMqa2)
            },
            {
                keybinds: ['ESC'],
                name: f.intl.string(f.t['1ioMJS'])
            }
        ],
        n = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        r = (0, d.zP)();
    return (0, u.useTransition)(
        r,
        {
            enter: {
                from: {
                    opacity: 0,
                    y: n ? 0 : 80
                },
                to: {
                    opacity: 1,
                    y: 0
                }
            },
            leave: {
                opacity: 0,
                y: n ? 0 : 80
            },
            config: o.config.stiff
        },
        'animate-always'
    )((n, r) =>
        r
            ? (0, i.jsx)('div', {
                  className: p.positioner,
                  children: (0, i.jsx)(o.animated.div, {
                      className: p.container,
                      style: n,
                      children: e.map((n, r) => {
                          let { keybinds: o, name: s } = n;
                          return (0, i.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          className: p.bindName,
                                          children: s
                                      }),
                                      o.map((e) =>
                                          (0, i.jsx)(
                                              l.M,
                                              {
                                                  shortcut: e,
                                                  className: p.shortcut
                                              },
                                              e
                                          )
                                      ),
                                      r < e.length - 1 ? (0, i.jsx)('span', { className: p.separator }) : null
                                  ]
                              },
                              s
                          );
                      })
                  })
              })
            : null
    );
}
