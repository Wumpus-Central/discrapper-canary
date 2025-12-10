n.d(t, { c: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(467721),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(79320),
    f = n(388032),
    p = n(110109);
function _(e) {
    let { className: t } = e,
        n = [
            {
                keybinds: ["Spacebar", "Enter"],
                name: f.intl.string(f.t["cs/HVH"]),
            },
            {
                keybinds: ["up", "down"],
                name: f.intl.string(f.t.dmMqay),
            },
            {
                keybinds: ["ESC"],
                name: f.intl.string(f.t["1ioMJQ"]),
            },
        ],
        a = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        _ = (0, d.zP)();
    return (0, c.Yzy)(
        _,
        {
            enter: {
                from: {
                    opacity: 0,
                    y: 80 * !a,
                },
                to: {
                    opacity: 1,
                    y: 0,
                },
            },
            leave: {
                opacity: 0,
                y: 80 * !a,
            },
            config: s.config.stiff,
        },
        "animate-always",
    )((e, a) =>
        a
            ? (0, r.jsx)("div", {
                  className: o()(p.positioner, t),
                  children: (0, r.jsx)(s.animated.div, {
                      className: p.container,
                      style: e,
                      children: n.map((e, t) => {
                          let { keybinds: a, name: o } = e;
                          return (0, r.jsxs)(
                              i.Fragment,
                              {
                                  children: [
                                      (0, r.jsx)(c.Text, {
                                          variant: "text-md/semibold",
                                          className: p.bindName,
                                          children: o,
                                      }),
                                      a.map((e) =>
                                          (0, r.jsx)(
                                              c.M2$,
                                              {
                                                  shortcut: e,
                                                  className: p.shortcut,
                                              },
                                              e,
                                          ),
                                      ),
                                      t < n.length - 1 ? (0, r.jsx)("span", { className: p.separator }) : null,
                                  ],
                              },
                              o,
                          );
                      }),
                  }),
              })
            : null,
    );
}
