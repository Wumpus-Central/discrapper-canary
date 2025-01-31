n.d(t, { c: () => _ });
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(442837),
    o = n(710593),
    l = n(481060),
    u = n(607070),
    c = n(79320),
    d = n(388032),
    f = n(481320);
function _() {
    let e = [
            {
                keybinds: ['Spacebar', 'Enter'],
                name: d.intl.string(d.t['cs/HVF'])
            },
            {
                keybinds: ['up', 'down'],
                name: d.intl.string(d.t.dmMqa2)
            },
            {
                keybinds: ['ESC'],
                name: d.intl.string(d.t['1ioMJS'])
            }
        ],
        t = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        n = (0, c.zP)();
    return (0, l.Yzy)(
        n,
        {
            enter: {
                from: {
                    opacity: 0,
                    y: t ? 0 : 80
                },
                to: {
                    opacity: 1,
                    y: 0
                }
            },
            leave: {
                opacity: 0,
                y: t ? 0 : 80
            },
            config: a.config.stiff
        },
        'animate-always'
    )((t, n) =>
        n
            ? (0, i.jsx)('div', {
                  className: f.positioner,
                  children: (0, i.jsx)(a.animated.div, {
                      className: f.container,
                      style: t,
                      children: e.map((t, n) => {
                          let { keybinds: a, name: s } = t;
                          return (0, i.jsxs)(
                              r.Fragment,
                              {
                                  children: [
                                      (0, i.jsx)(l.Text, {
                                          variant: 'text-md/semibold',
                                          className: f.bindName,
                                          children: s
                                      }),
                                      a.map((e) =>
                                          (0, i.jsx)(
                                              o.M,
                                              {
                                                  shortcut: e,
                                                  className: f.shortcut
                                              },
                                              e
                                          )
                                      ),
                                      n < e.length - 1 ? (0, i.jsx)('span', { className: f.separator }) : null
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
