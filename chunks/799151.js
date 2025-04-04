n.d(t, { c: () => _ });
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    s = n(710593),
    l = n(481060),
    c = n(607070),
    u = n(79320),
    d = n(388032),
    f = n(74927);
function _() {
    let e = [
            {
                keybinds: ['Spacebar', 'Enter'],
                name: d.NW.string(d.t['cs/HVF'])
            },
            {
                keybinds: ['up', 'down'],
                name: d.NW.string(d.t.dmMqa2)
            },
            {
                keybinds: ['ESC'],
                name: d.NW.string(d.t['1ioMJS'])
            }
        ],
        t = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        n = (0, u.zP)();
    return (0, l.Yzy)(
        n,
        {
            enter: {
                from: {
                    opacity: 0,
                    y: 80 * !t
                },
                to: {
                    opacity: 1,
                    y: 0
                }
            },
            leave: {
                opacity: 0,
                y: 80 * !t
            },
            config: o.config.stiff
        },
        'animate-always'
    )((t, n) =>
        n
            ? (0, r.jsx)('div', {
                  className: f.positioner,
                  children: (0, r.jsx)(o.animated.div, {
                      className: f.container,
                      style: t,
                      children: e.map((t, n) => {
                          let { keybinds: o, name: a } = t;
                          return (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, r.jsx)(l.Text, {
                                          variant: 'text-md/semibold',
                                          className: f.bindName,
                                          children: a
                                      }),
                                      o.map((e) =>
                                          (0, r.jsx)(
                                              s.M,
                                              {
                                                  shortcut: e,
                                                  className: f.shortcut
                                              },
                                              e
                                          )
                                      ),
                                      n < e.length - 1 ? (0, r.jsx)('span', { className: f.separator }) : null
                                  ]
                              },
                              a
                          );
                      })
                  })
              })
            : null
    );
}
