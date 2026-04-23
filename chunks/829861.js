n.d(t, { A: () => K });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(834730),
    d = n(990078),
    c = n(43990),
    u = n(446576),
    h = n(817281),
    A = n(475743),
    _ = n(775602),
    m = n(58149),
    g = n(587837),
    p = n(473553),
    f = n(964404),
    E = n(709562),
    x = n(383831),
    I = n(128286),
    C = n(734057),
    b = n(696451),
    N = n(309010),
    S = n(287809),
    v = n(203982),
    T = n(427262),
    y = n(795816),
    j = n(933958),
    R = n(685399),
    L = n(216418),
    O = n(969151),
    G = n(620148),
    M = n(732637),
    D = n(104171),
    U = n(47294),
    P = n(594007),
    w = n(16961),
    k = n(716730),
    V = n(5867),
    B = n(652215),
    H = n(985018),
    F = n(141160);
let W = D.DN.SIZE_32,
    Y = { [V.E8.NO_CHAT]: F.Oo, [V.E8.RESIZABLE]: F.Ig };
function K(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: s } = e,
        K = (0, G.A)(),
        z = (0, r.yK)([j.Ay], () => j.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        q = (0, O.H)(n),
        X = (0, r.bG)([C.A], () => C.A.getChannel(q)),
        Q = (0, R.IQ)(z),
        Z = (0, R.Rz)(Q),
        J = l.useCallback(() => {
            (0, y.gk)(V.Gd.PIP);
        }, []),
        $ = l.useRef(null),
        ee = (0, r.bG)([j.Ay], () => j.Ay.getFocusedLayout()),
        et = ee !== V.E8.NO_CHAT,
        [en, ei] = l.useState(f.Ay.activityPanelHeight ?? t ?? null),
        el = l.useCallback((e) => {
            h.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        es = l.useRef(null),
        [ea, er] = l.useState({ width: 0, height: 0 });
    l.useLayoutEffect(() => {
        if (null == es.current) return;
        let e = new ResizeObserver(() => {
            er({ width: es.current?.clientWidth ?? 0, height: es.current?.clientHeight ?? 0 });
        });
        return e.observe(es.current), () => e.disconnect();
    }, []);
    let eo = ea.width / Math.max(ea.height, 1) < V.B5,
        ed = 0,
        ec = 0,
        eu = (0, L.A)(K?.id);
    if (!eu) {
        let e = ea.width,
            t = ea.height;
        eo
            ? ((t = ea.width / V.B5) > ea.height && (e = (t = ea.height) * V.B5), (ec = (ea.height - t) / 2))
            : ((e = Math.min(ea.height * V.B5)) > ea.width && (t = (e = ea.width) / V.B5), (ed = (ea.width - e) / 2));
    }
    let eh = Z.get(K?.id ?? ""),
        eA = (0, r.bG)([N.A], () => N.A.getChannelId()),
        e_ = (0, r.yK)(
            [b.Ay],
            () =>
                null == X
                    ? []
                    : Array.from(eh?.embeddedActivity.userIds ?? []).map((e) => b.Ay.getMember(X.guild_id, e)),
            [eh, X],
        ),
        em = l.useMemo(() => {
            let e = new Map();
            return (
                e_.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [e_]),
        eg = (function (e, t, n) {
            let i = (0, A.A)(e),
                s = e !== i,
                [a, r] = l.useState(!1);
            l.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !_.A.useReducedMotion && (s || a);
            return l.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: "height, max-height",
                          transitionDuration: "50ms",
                          transitionTimingFunction: "ease-in-out",
                      }
                    : void 0;
                return e && null != t && null != n ? { ...i, minHeight: 200, maxHeight: n, height: t } : i;
            }, [o, e, n, t]);
        })(et, en, t),
        ep = (0, w.G)();
    if (null == K) return null;
    let ef = [];
    null != eh &&
        (ef = Array.from(eh.embeddedActivity.userIds)
            .map((e) => S.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let eE = (e) => {
        if (null == e || void 0 === e || e === D.mt) return null;
        let t = em.get(e.id),
            n = t?.nick ?? T.Ay.getName(e);
        return (0, i.jsx)(
            d.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, i.jsx)("img", { src: e.getAvatarURL(X?.guild_id, W), alt: n, className: F.my }, e.id),
            },
            e.id,
        );
    };
    return (0, i.jsx)(c.N, {
        theme: B.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(F.iE, Y[ee], e),
                ref: $,
                style: eg,
                children: [
                    s?.(),
                    (0, i.jsx)(p.A, { applicationId: K.id }),
                    (0, i.jsxs)("div", {
                        className: F.lq,
                        children: [
                            et
                                ? null
                                : (0, i.jsx)("div", {
                                      className: F.wx,
                                      children: (0, i.jsx)(o.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: F.qd,
                                          children: K?.name,
                                      }),
                                  }),
                            (0, i.jsx)("div", {
                                className: a()(F.ht, { [F.kK]: eu }),
                                style: { paddingLeft: ed, paddingRight: ed, paddingTop: ec, paddingBottom: ec },
                                ref: es,
                                children: (0, i.jsx)(M.A, { className: F.pU, embedId: (0, P.A)(n.id, K.id) }),
                            }),
                            null != eA
                                ? (0, i.jsxs)("div", {
                                      className: F.qr,
                                      children: [
                                          (0, i.jsx)(D.Ay, {
                                              renderIcon: !1,
                                              users: ef,
                                              size: W,
                                              max: 6,
                                              renderUser: eE,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: F.Hq,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: F.qi,
                                                      children: [
                                                          (0, i.jsx)(k.A, { channelId: eA }),
                                                          (0, i.jsx)(E.l, {
                                                              isTrayButton: !0,
                                                              label: H.intl.string(H.t.brPQ5U),
                                                              onClick: J,
                                                              iconComponent: u.g,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: F.pt,
                                                      children: (0, i.jsx)(x.A, {
                                                          applicationId: K.id,
                                                          location: n,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          ep
                                              ? (0, i.jsx)(I.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, m.zV)(B.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, U.A)({
                                                                onConfirm: async () => {
                                                                    K?.id != null &&
                                                                        null != q &&
                                                                        (await (0, y.od)(K.id, q)),
                                                                        (0, y.jp)();
                                                                },
                                                            });
                                                    },
                                                    onClosePopout: () => {},
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    et && null != t
                        ? (0, i.jsx)(g.A, {
                              minHeight: 480,
                              maxHeight: t,
                              resizableNode: $,
                              onResize: (e) => {
                                  v._.dispatch(B.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), ei(e);
                              },
                              onResizeEnd: (e) => {
                                  v._.dispatch(B.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), el(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
