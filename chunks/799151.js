r.d(n, {
    c: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(666912),
    o = r(442837),
    l = r(710593),
    u = r(481060),
    c = r(607070),
    d = r(79320),
    f = r(388032),
    _ = r(481320);
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
        n = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
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
            config: s.config.stiff
        },
        'animate-always'
    )((n, r) =>
        r
            ? (0, i.jsx)('div', {
                  className: _.positioner,
                  children: (0, i.jsx)(s.animated.div, {
                      className: _.container,
                      style: n,
                      children: e.map((n, r) => {
                          let { keybinds: s, name: o } = n;
                          return (0, i.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          className: _.bindName,
                                          children: o
                                      }),
                                      s.map((e) =>
                                          (0, i.jsx)(
                                              l.M,
                                              {
                                                  shortcut: e,
                                                  className: _.shortcut
                                              },
                                              e
                                          )
                                      ),
                                      r < e.length - 1 ? (0, i.jsx)('span', { className: _.separator }) : null
                                  ]
                              },
                              o
                          );
                      })
                  })
              })
            : null
    );
}
