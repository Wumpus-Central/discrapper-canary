n.r(t), n.d(t, { default: () => C });
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(877227),
    d = n(311907),
    o = n(43990),
    c = n(663417),
    u = n(768622),
    m = n(944791),
    h = n(456412),
    g = n(964486),
    p = n(726249),
    v = n(742589),
    x = n(210714),
    A = n(544028),
    f = n(335934),
    _ = n(883344),
    y = n(859524),
    b = n(567061),
    I = n(192380),
    j = n(652215),
    E = n(985018),
    k = n(852456),
    T = n(964623);
let C = (0, h.A)(function (e) {
    let { width: t } = e,
        n = (0, f.c)("ICYMIPage");
    i.useEffect(() => {
        n || (0, r.pX)(j.BVt.ME);
    }, [n]),
        i.useLayoutEffect(() => {
            n && m.I(j.BVt.ICYMI);
        }, [n]),
        (0, g.Ay)(() => {
            n && (0, x.d)("icymi");
        });
    let s = (0, d.bG)([A.A], () => A.A.theme),
        h = (0, d.bG)([_.A], () => _.A.isRefreshing()),
        C = i.useRef(null);
    (0, p.HU)({ location: E.intl.string(E.t["jnXV/V"]) });
    let [w, N] = i.useState(!1);
    i.useEffect(() => {
        let e = (e) => {
                e.metaKey && N(!0);
            },
            t = (e) => {
                "Meta" === e.key && N(!1);
            },
            n = () => {
                N(!1);
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
    let S = (0, b.E)(),
        M = f.f8.useConfig({ location: "icymi page" }).enabled,
        G = i.useCallback(
            async (e) => {
                e.metaKey && M
                    ? await (0, y.be)(j.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await S();
            },
            [S, M],
        ),
        L = w && M ? E.intl.string(E.t.YplSn2) : E.intl.string(E.t.wzzjk9);
    return n
        ? (0, a.jsxs)("div", {
              className: l()(T.TE, k.kL),
              children: [
                  (0, a.jsx)(o.N, {
                      theme: s,
                      children: (e) =>
                          (0, a.jsxs)(v.A, {
                              className: e,
                              toolbar: (0, a.jsx)(v.A.Icon, {
                                  icon: c.f,
                                  tooltip: L,
                                  onClick: G,
                                  disabled: h,
                                  "aria-label": L,
                              }),
                              children: [
                                  (0, a.jsx)(v.A.Icon, { icon: u.g, "aria-hidden": !0 }),
                                  (0, a.jsx)(v.A.Title, { children: E.intl.string(E.t["jnXV/V"]) }),
                                  (0, a.jsx)(v.A.Title, {
                                      children: (0, a.jsx)("p", {
                                          className: k.HH,
                                          children: E.intl.string(E.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, a.jsx)("div", {
                      ref: C,
                      className: l()(T.Qs, k.Qs),
                      children: (0, a.jsx)(I.A, { scrollContainerRef: C }),
                  }),
              ],
          })
        : null;
});
