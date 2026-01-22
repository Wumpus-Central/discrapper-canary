n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    l = n(990078),
    a = n(397927),
    s = n(442433),
    o = n(950072),
    c = n(985018),
    d = n(560927);
function u(e) {
    var t;
    let { roles: u, guildId: b } = e,
        f = null != (t = u[0]) ? t : null,
        p = u.length - 1,
        m = r.useMemo(() => new Intl.NumberFormat(c.intl.currentLocale).format(p), [p]),
        g = r.useCallback(
            (e) => {
                e.stopPropagation(),
                    (0, s.L3)(e, async () => {
                        let { default: e } = await n.e("54526").then(n.bind(n, 551309));
                        return () => (0, i.jsx)(e, { roles: u });
                    });
            },
            [u],
        );
    return 0 === u.length
        ? null
        : (0, i.jsxs)("div", {
              className: d.yk,
              children: [
                  null != f &&
                      (0, i.jsx)(o.A, {
                          className: d.Bc,
                          role: f,
                          guildId: b,
                      }),
                  p > 0 &&
                      (0, i.jsx)(a.DUT, {
                          className: d.yt,
                          onClick: g,
                          children: (0, i.jsx)(l.m, {
                              text: c.intl.string(c.t.DY6n4q),
                              children: (0, i.jsxs)(a.Text, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: ["+", m],
                              }),
                          }),
                      }),
              ],
          });
}
