n.d(t, {
    A: () => L,
});
var l = n(627968),
    r = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(989349),
    o = n.n(s),
    c = n(417597),
    u = n(990078),
    E = n(397927),
    d = n(137130),
    _ = n(688810),
    g = n(836731),
    A = n(189552),
    T = n(276373),
    f = n(523599),
    h = n(438407),
    I = n(967144),
    O = n(696451),
    N = n(71393),
    m = n(562153),
    S = n(829887),
    p = n(652215),
    b = n(985018),
    G = n(585951),
    R = n(100411);

function D(e) {
    var t, n;
    let { log: a, member: s, guild: d } = e,
        { analyticsLocations: f } = (0, _.Ay)(),
        N = T.Zo(a),
        S = T.nG(a),
        D = null == (n = T.AO(p.gGk.REASON, a)) ? void 0 : n.newValue,
        L = T.gT(a),
        x = (0, g.L4)(a.id),
        C = (0, c.bG)([O.Ay], () => (null != a.userId ? O.Ay.getMember(s.guildId, a.userId) : null), [
            s.guildId,
            a.userId,
        ]),
        M = (0, I.gn)(
            null == C ? void 0 : C.guildId,
            null == C ? void 0 : C.userId,
            null != (t = null == C ? void 0 : C.colorStrings) ? t : null,
        ),
        v = r.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, A.Ko)(e, f);
            },
            [f],
        ),
        j = r.useCallback(() => {
            var e;
            return null == a.user
                ? null
                : (0, l.jsx)(u.m, {
                      asContainer: !0,
                      text: b.intl.string(b.t.mvsi9n),
                      children: (0, l.jsx)(E.DUT, {
                          onClick: v(C),
                          tag: "span",
                          className: G.Xh,
                          children: (0, l.jsxs)(E.Text, {
                              variant: "text-sm/medium",
                              tag: "span",
                              children: [
                                  "@",
                                  (0, l.jsx)(E.gyj, {
                                      name: m.Ay.getName(s.guildId, null, a.user),
                                      colorString: null != (e = null == C ? void 0 : C.colorString) ? e : null,
                                      colorStrings: M,
                                  }),
                              ],
                          }),
                      }),
                  });
        }, [v, a.user, s.guildId, C, M])();
    return (0, l.jsxs)("div", {
        className: i()(R.ol, G.$9),
        children: [
            (0, l.jsxs)("div", {
                className: G._6,
                children: [
                    (0, l.jsxs)("div", {
                        className: G.lc,
                        children: [
                            null != N &&
                                (0, l.jsx)(E.Text, {
                                    variant: "text-sm/semibold",
                                    color: "text-strong",
                                    children: N,
                                }),
                            null != S &&
                                (0, l.jsxs)(E.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: ["(", "string" == typeof S ? S : o()(S).fromNow(), ")"],
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: G.FS,
                        children: (0, l.jsx)(E.Text, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: x,
                        }),
                    }),
                ],
            }),
            null != D &&
                (0, l.jsx)("div", {
                    className: G.Xy,
                    children: (0, l.jsxs)("div", {
                        className: G.eH,
                        children: [
                            j,
                            (0, l.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: D,
                            }),
                        ],
                    }),
                }),
            null == D &&
                null != L &&
                (0, l.jsx)("div", {
                    className: G.Xy,
                    children: (0, l.jsxs)("div", {
                        className: G.E9,
                        children: [
                            j,
                            (0, l.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tag: "span",
                                children: L,
                            }),
                        ],
                    }),
                }),
            null == D &&
                null == L &&
                (0, l.jsx)("div", {
                    className: G.Xy,
                    children: (0, l.jsx)("div", {
                        className: G.E9,
                        children: (0, l.jsx)(E.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            tag: "span",
                            children: (0, l.jsx)(h.ri, {
                                log: a,
                                guild: d,
                                onContentClick: () => {},
                                className: G.zm,
                            }),
                        }),
                    }),
                }),
        ],
    });
}

function L(e) {
    let { member: t } = e,
        n = (0, c.bG)([N.A], () => N.A.getGuild(t.guildId), [t.guildId]),
        a = (0, c.bG)([f.A], () => {
            let e = f.A.logs;
            return null == e || null == n ? [] : T.yy(e, n);
        }, [n]);
    return (r.useEffect(() => {
        !(async function (e, t) {
            await d.Qi(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === a.length)
        ? null
        : (0, l.jsx)(E.D0$, {
              label: b.intl.string(b.t.flCxLo),
              children:
                  a.length > 0
                      ? (0, l.jsx)(S.SQ, {
                            children: a.map((e) =>
                                (0, l.jsx)(
                                    D,
                                    {
                                        log: e,
                                        member: t,
                                        guild: n,
                                    },
                                    e.id,
                                ),
                            ),
                        })
                      : null,
          });
}
