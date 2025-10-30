n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(948789),
    o = n(442837),
    c = n(481060),
    u = n(150063),
    d = n(112724),
    p = n(493773),
    f = n(252618),
    m = n(984370),
    h = n(108427),
    g = n(210887),
    _ = n(518929),
    b = n(144725),
    E = n(613928),
    O = n(390536),
    I = n(581696),
    y = n(981631),
    v = n(388032),
    C = n(683252),
    S = n(161655);
let T = (0, d.Z)(function (e) {
    let { width: t } = e,
        n = (0, _.b5)("ICYMIPage", !1);
    i.useEffect(() => {
        n || (0, s.uL)(y.Z5c.ME);
    }, [n]),
        i.useLayoutEffect(() => {
            n && u.Y(y.Z5c.ICYMI);
        }, [n]),
        (0, p.ZP)(() => {
            n && (0, h.e)("icymi");
        });
    let l = (0, o.e7)([g.Z], () => g.Z.theme),
        d = (0, o.e7)([b.Z], () => b.Z.isRefreshing()),
        T = i.useRef(null);
    (0, f.Tt)({ location: v.intl.string(v.t["jnXV/V"]) });
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
        x = _.ZY.useExperiment({ location: "icymi page" }).enabled,
        A = i.useCallback(
            async (e) => {
                e.metaKey && x
                    ? await (0, E.ye)(y.qAy.ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON)
                    : await P();
            },
            [P, x],
        ),
        Z = N && x ? v.intl.string(v.t.YplSn2) : v.intl.string(v.t.wzzjk9);
    return n
        ? (0, r.jsxs)("div", {
              className: a()(S.chat, C.container),
              children: [
                  (0, r.jsx)(c.f6W, {
                      theme: l,
                      children: (e) =>
                          (0, r.jsxs)(m.Z, {
                              className: e,
                              toolbar: (0, r.jsx)(m.Z.Icon, {
                                  icon: c.DuK,
                                  tooltip: Z,
                                  onClick: A,
                                  disabled: d,
                                  "aria-label": Z,
                              }),
                              children: [
                                  (0, r.jsx)(m.Z.Icon, {
                                      icon: c.qOE,
                                      "aria-hidden": !0,
                                  }),
                                  (0, r.jsx)(m.Z.Title, { children: v.intl.string(v.t["jnXV/V"]) }),
                                  (0, r.jsx)(m.Z.Title, {
                                      children: (0, r.jsx)("p", {
                                          className: C.preAlphaText,
                                          children: v.intl.string(v.t.Ac2OZA),
                                      }),
                                  }),
                              ],
                          }),
                  }),
                  (0, r.jsx)("div", {
                      ref: T,
                      className: a()(S.content, C.content),
                      children: (0, r.jsx)(I.Z, { scrollContainerRef: T }),
                  }),
              ],
          })
        : null;
});
