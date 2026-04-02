n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(877227),
    o = n(311907),
    d = n(397927),
    c = n(944791),
    u = n(456412),
    A = n(964486),
    h = n(726249),
    _ = n(742589),
    m = n(210714),
    p = n(544028),
    g = n(335934),
    E = n(883344),
    I = n(859524),
    f = n(567061),
    C = n(192380),
    T = n(652215),
    N = n(985018),
    S = n(742223),
    x = n(513544);
let v = (0, u.A)(function (e) {
    let { width: t } = e,
        n = (0, g.c)("ICYMIPage", !1);
    l.useEffect(() => {
        n || (0, s.pX)(T.BVt.ME);
    }, [n]),
        l.useLayoutEffect(() => {
            n && c.I(T.BVt.ICYMI);
        }, [n]),
        (0, A.Ay)(() => {
            n && (0, m.d)("icymi");
        });
    let a = (0, o.bG)([p.A], () => p.A.theme),
        u = (0, o.bG)([E.A], () => E.A.isRefreshing()),
        v = l.useRef(null);
    (0, h.HU)({ location: N.intl.string(N.t["jnXV/V"]) });
    let [b, y] = l.useState(!1);
    l.useEffect(() => {
        let e = (e) => {
                e.metaKey && y(!0);
            },
            t = (e) => {
                "Meta" === e.key && y(!1);
            },
            n = () => {
                y(!1);
            };
        return (
            window.addEventListener("keydown", e),
            window.addEventListener("keyup", t),
            window.addEventListener("blur", n),
            () => {
                window.removeEventListener("keydown", e),
                    window.removeEventListener("keyup", t),
                    window.removeEventListener("blur", n);
            }
        );
    }, []);
    let O = (0, f.E)(),
        L = g.f8.useConfig({ location: "icymi page" }).enabled,
        R = l.useCallback(
            async (e) => {
                e.metaKey && L
                    ? await (0, I.be)(T.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await O();
            },
            [O, L],
        ),
        P = b && L ? N.intl.string(N.t.YplSn2) : N.intl.string(N.t.wzzjk9);
    return n
        ? (0, i.jsxs)("div", {
              className: r()(x.TE, S.kL),
              children: [
                  (0, i.jsx)(d.NPJ, {
                      theme: a,
                      children: (e) =>
                          (0, i.jsxs)(_.A, {
                              className: e,
                              toolbar: (0, i.jsx)(_.A.Icon, {
                                  icon: d.fNY,
                                  tooltip: P,
                                  onClick: R,
                                  disabled: u,
                                  "aria-label": P,
                              }),
                              children: [
                                  (0, i.jsx)(_.A.Icon, { icon: d.gXB, "aria-hidden": !0 }),
                                  (0, i.jsx)(_.A.Title, { children: N.intl.string(N.t["jnXV/V"]) }),
                                  (0, i.jsx)(_.A.Title, {
                                      children: (0, i.jsx)("p", {
                                          className: S.HH,
                                          children: N.intl.string(N.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, i.jsx)("div", {
                      ref: v,
                      className: r()(x.Qs, S.Qs),
                      children: (0, i.jsx)(C.A, { scrollContainerRef: v }),
                  }),
              ],
          })
        : null;
});
