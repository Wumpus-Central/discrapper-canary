n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(397927),
    r = n(442433),
    o = n(950072),
    d = n(985018),
    c = n(560927);
function u(e) {
    let { roles: t, guildId: u } = e,
        m = t[0] ?? null,
        g = t.length - 1,
        x = l.useMemo(() => new Intl.NumberFormat(d.intl.currentLocale).format(g), [g]),
        h = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, r.L3)(e, async () => {
                        let { default: e } = await n.e("54526").then(n.bind(n, 551309));
                        return () => (0, i.jsx)(e, { roles: t });
                    });
            },
            [t],
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: c.yk,
              children: [
                  null != m && (0, i.jsx)(o.A, { className: c.Bc, role: m, guildId: u }),
                  g > 0 &&
                      (0, i.jsx)(a.DUT, {
                          className: c.yt,
                          onClick: h,
                          children: (0, i.jsx)(s.m, {
                              text: d.intl.string(d.t.DY6n4q),
                              children: (0, i.jsxs)(a.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ["+", x],
                              }),
                          }),
                      }),
              ],
          });
}
