n.d(t, { c: () => h });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
    l = n(442837),
    c = n(710593),
    u = n(481060),
    d = n(607070),
    f = n(79320),
    _ = n(388032),
    p = n(110109);
function h(e) {
    let { className: t } = e,
        n = [
            {
                keybinds: ["Spacebar", "Enter"],
                name: _.intl.string(_.t["cs/HVF"]),
            },
            {
                keybinds: ["up", "down"],
                name: _.intl.string(_.t.dmMqa2),
            },
            {
                keybinds: ["ESC"],
                name: _.intl.string(_.t["1ioMJS"]),
            },
        ],
        a = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        h = (0, f.zP)();
    return (0, u.Yzy)(
        h,
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
                                      (0, r.jsx)(u.Text, {
                                          variant: "text-md/semibold",
                                          className: p.bindName,
                                          children: o,
                                      }),
                                      a.map((e) =>
                                          (0, r.jsx)(
                                              c.M,
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
