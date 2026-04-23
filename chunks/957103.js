n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(939249),
    r = n(834730),
    o = n(442433),
    d = n(950072),
    c = n(985018),
    u = n(576642);
function m(e) {
    let { roles: t, guildId: m } = e,
        g = t[0] ?? null,
        h = t.length - 1,
        x = l.useMemo(() => new Intl.NumberFormat(c.intl.currentLocale).format(h), [h]),
        p = l.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("54526").then(n.bind(n, 551309));
                        return () => (0, i.jsx)(e, { roles: t });
                    });
            },
            [t],
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: u.yk,
              children: [
                  null != g && (0, i.jsx)(d.A, { className: u.Bc, role: g, guildId: m }),
                  h > 0 &&
                      (0, i.jsx)(a.D, {
                          className: u.yt,
                          onClick: p,
                          children: (0, i.jsx)(s.m, {
                              text: c.intl.string(c.t.DY6n4q),
                              children: (0, i.jsxs)(r.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ["+", x],
                              }),
                          }),
                      }),
              ],
          });
}
