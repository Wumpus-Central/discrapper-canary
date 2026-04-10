n.d(t, { A: () => v });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(877227),
    o = n(311907),
    d = n(397927),
    c = n(944791),
    u = n(456412),
    A = n(964486),
    _ = n(726249),
    h = n(742589),
    m = n(210714),
    g = n(544028),
    p = n(335934),
    E = n(883344),
    I = n(859524),
    f = n(567061),
    C = n(192380),
    T = n(652215),
    S = n(985018),
    N = n(43288),
    x = n(358943);
let v = (0, u.A)(function (e) {
    let { width: t } = e,
        n = (0, p.c)("ICYMIPage");
    a.useEffect(() => {
        n || (0, s.pX)(T.BVt.ME);
    }, [n]),
        a.useLayoutEffect(() => {
            n && c.I(T.BVt.ICYMI);
        }, [n]),
        (0, A.Ay)(() => {
            n && (0, m.d)("icymi");
        });
    let r = (0, o.bG)([g.A], () => g.A.theme),
        u = (0, o.bG)([E.A], () => E.A.isRefreshing()),
        v = a.useRef(null);
    (0, _.HU)({ location: S.intl.string(S.t["jnXV/V"]) });
    let [b, y] = a.useState(!1);
    a.useEffect(() => {
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
        L = p.f8.useConfig({ location: "icymi page" }).enabled,
        R = a.useCallback(
            async (e) => {
                e.metaKey && L
                    ? await (0, I.be)(T.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await O();
            },
            [O, L],
        ),
        P = b && L ? S.intl.string(S.t.YplSn2) : S.intl.string(S.t.wzzjk9);
    return n
        ? (0, i.jsxs)("div", {
              className: l()(x.TE, N.kL),
              children: [
                  (0, i.jsx)(d.NPJ, {
                      theme: r,
                      children: (e) =>
                          (0, i.jsxs)(h.A, {
                              className: e,
                              toolbar: (0, i.jsx)(h.A.Icon, {
                                  icon: d.fNY,
                                  tooltip: P,
                                  onClick: R,
                                  disabled: u,
                                  "aria-label": P,
                              }),
                              children: [
                                  (0, i.jsx)(h.A.Icon, { icon: d.gXB, "aria-hidden": !0 }),
                                  (0, i.jsx)(h.A.Title, { children: S.intl.string(S.t["jnXV/V"]) }),
                                  (0, i.jsx)(h.A.Title, {
                                      children: (0, i.jsx)("p", {
                                          className: N.HH,
                                          children: S.intl.string(S.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, i.jsx)("div", {
                      ref: v,
                      className: l()(x.Qs, N.Qs),
                      children: (0, i.jsx)(C.A, { scrollContainerRef: v }),
                  }),
              ],
          })
        : null;
});
