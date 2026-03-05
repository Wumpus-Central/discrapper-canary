n.d(t, { A: () => v });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(877227),
    o = n(311907),
    d = n(397927),
    c = n(944791),
    u = n(456412),
    A = n(964486),
    h = n(726249),
    _ = n(742589),
    m = n(210714),
    g = n(544028),
    p = n(335934),
    E = n(883344),
    I = n(859524),
    f = n(567061),
    C = n(192380),
    T = n(652215),
    N = n(985018),
    S = n(706572),
    x = n(370808);
let v = (0, u.A)(function (e) {
    let { width: t } = e,
        n = (0, p.c)("ICYMIPage", !1);
    r.useEffect(() => {
        n || (0, s.pX)(T.BVt.ME);
    }, [n]),
        r.useLayoutEffect(() => {
            n && c.I(T.BVt.ICYMI);
        }, [n]),
        (0, A.Ay)(() => {
            n && (0, m.d)("icymi");
        });
    let l = (0, o.bG)([g.A], () => g.A.theme),
        u = (0, o.bG)([E.A], () => E.A.isRefreshing()),
        v = r.useRef(null);
    (0, h.HU)({ location: N.intl.string(N.t["jnXV/V"]) });
    let [y, b] = r.useState(!1);
    r.useEffect(() => {
        let e = (e) => {
                e.metaKey && b(!0);
            },
            t = (e) => {
                "Meta" === e.key && b(!1);
            },
            n = () => {
                b(!1);
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
        L = p.E2.useExperiment({ location: "icymi page" }).enabled,
        R = r.useCallback(
            async (e) => {
                e.metaKey && L
                    ? await (0, I.be)(T.ZSU.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await O();
            },
            [O, L],
        ),
        P = y && L ? N.intl.string(N.t.YplSn2) : N.intl.string(N.t.wzzjk9);
    return n
        ? (0, i.jsxs)("div", {
              className: a()(x.TE, S.kL),
              children: [
                  (0, i.jsx)(d.NPJ, {
                      theme: l,
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
                      className: a()(x.Qs, S.Qs),
                      children: (0, i.jsx)(C.A, { scrollContainerRef: v }),
                  }),
              ],
          })
        : null;
});
