n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(948789),
    s = n(442837),
    c = n(481060),
    u = n(150063),
    d = n(112724),
    p = n(493773),
    f = n(252618),
    g = n(984370),
    h = n(108427),
    m = n(210887),
    b = n(518929),
    _ = n(144725),
    E = n(613928),
    O = n(390536),
    v = n(581696),
    y = n(981631),
    I = n(388032),
    C = n(445814),
    S = n(978966);
let T = (0, d.Z)(function (e) {
    let { width: t } = e,
        n = (0, b.b5)("ICYMIPage", !1);
    i.useEffect(() => {
        n || (0, o.uL)(y.Z5c.ME);
    }, [n]),
        i.useLayoutEffect(() => {
            n && u.Y(y.Z5c.ICYMI);
        }, [n]),
        (0, p.ZP)(() => {
            n && (0, h.e)("icymi");
        });
    let l = (0, s.e7)([m.Z], () => m.Z.theme),
        d = (0, s.e7)([_.Z], () => _.Z.isRefreshing()),
        T = i.useRef(null);
    (0, f.Tt)({ location: I.intl.string(I.t["jnXV/V"]) });
    let [N, j] = i.useState(!1);
    i.useEffect(() => {
        let e = (e) => {
                e.metaKey && j(!0);
            },
            t = (e) => {
                "Meta" === e.key && j(!1);
            },
            n = () => {
                j(!1);
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
    let P = (0, O.G)(),
        x = b.ZY.useExperiment({ location: "icymi page" }).enabled,
        A = i.useCallback(
            async (e) => {
                e.metaKey && x
                    ? await (0, E.ye)(y.qAy.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await P();
            },
            [P, x],
        ),
        Z = N && x ? I.intl.string(I.t.YplSn2) : I.intl.string(I.t.wzzjk9);
    return n
        ? (0, r.jsxs)("div", {
              className: a()(S.chat, C.container),
              children: [
                  (0, r.jsx)(c.f6W, {
                      theme: l,
                      children: (e) =>
                          (0, r.jsxs)(g.Z, {
                              className: e,
                              toolbar: (0, r.jsx)(g.Z.Icon, {
                                  icon: c.DuK,
                                  tooltip: Z,
                                  onClick: A,
                                  disabled: d,
                                  "aria-label": Z,
                              }),
                              children: [
                                  (0, r.jsx)(g.Z.Icon, {
                                      icon: c.qOE,
                                      "aria-hidden": !0,
                                  }),
                                  (0, r.jsx)(g.Z.Title, { children: I.intl.string(I.t["jnXV/V"]) }),
                                  (0, r.jsx)(g.Z.Title, {
                                      children: (0, r.jsx)("p", {
                                          className: C.preAlphaText,
                                          children: I.intl.string(I.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, r.jsx)("div", {
                      ref: T,
                      className: a()(S.content, C.content),
                      children: (0, r.jsx)(v.Z, { scrollContainerRef: T }),
                  }),
              ],
          })
        : null;
});
