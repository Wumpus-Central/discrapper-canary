n.d(t, { A: () => W });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(571356),
    c = n(990078),
    d = n(397927),
    u = n(817281),
    h = n(475743),
    A = n(775602),
    _ = n(58149),
    m = n(587837),
    g = n(473553),
    p = n(964404),
    f = n(709562),
    x = n(383831),
    E = n(128286),
    I = n(734057),
    C = n(696451),
    N = n(309010),
    T = n(287809),
    S = n(203982),
    b = n(427262),
    y = n(795816),
    v = n(933958),
    j = n(685399),
    R = n(216418),
    O = n(969151),
    L = n(620148),
    M = n(732637),
    D = n(104171),
    U = n(47294),
    G = n(594007),
    P = n(16961),
    k = n(716730),
    w = n(5867),
    B = n(652215),
    V = n(985018),
    H = n(513336);
let F = D.DN.SIZE_32,
    K = { [w.E8.NO_CHAT]: H.Oo, [w.E8.RESIZABLE]: H.Ig };
function W(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: s } = e,
        W = (0, L.A)(),
        Y = (0, r.yK)([v.Ay], () => v.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        z = (0, O.H)(n),
        q = (0, r.bG)([I.A], () => I.A.getChannel(z)),
        X = (0, j.IQ)(Y),
        J = (0, j.Rz)(X),
        Q = l.useCallback(() => {
            (0, y.gk)(w.Gd.PIP);
        }, []),
        $ = l.useRef(null),
        Z = (0, r.bG)([v.Ay], () => v.Ay.getFocusedLayout()),
        ee = Z !== w.E8.NO_CHAT,
        [et, en] = l.useState(p.Ay.activityPanelHeight ?? t ?? null),
        ei = l.useCallback((e) => {
            u.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        el = l.useRef(null),
        [es, ea] = l.useState({ width: 0, height: 0 });
    l.useLayoutEffect(() => {
        if (null == el.current) return;
        let e = new ResizeObserver(() => {
            ea({ width: el.current?.clientWidth ?? 0, height: el.current?.clientHeight ?? 0 });
        });
        return e.observe(el.current), () => e.disconnect();
    }, []);
    let er = es.width / Math.max(es.height, 1) < w.B5,
        eo = 0,
        ec = 0,
        ed = (0, R.A)(W?.id);
    if (!ed) {
        let e = es.width,
            t = es.height;
        er
            ? ((t = es.width / w.B5) > es.height && (e = (t = es.height) * w.B5), (ec = (es.height - t) / 2))
            : ((e = Math.min(es.height * w.B5)) > es.width && (t = (e = es.width) / w.B5), (eo = (es.width - e) / 2));
    }
    let eu = J.get(W?.id ?? ""),
        eh = (0, r.bG)([N.A], () => N.A.getChannelId()),
        eA = (0, r.yK)(
            [C.Ay],
            () =>
                null == q
                    ? []
                    : Array.from(eu?.embeddedActivity.userIds ?? []).map((e) => C.Ay.getMember(q.guild_id, e)),
            [eu, q],
        ),
        e_ = l.useMemo(() => {
            let e = new Map();
            return (
                eA.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eA]),
        em = (function (e, t, n) {
            let i = (0, h.A)(e),
                s = e !== i,
                [a, r] = l.useState(!1);
            l.useEffect(() => {
                r(!0);
                let e = setTimeout(() => r(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !A.A.useReducedMotion && (s || a);
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
        })(ee, et, t),
        eg = (0, P.G)();
    if (null == W) return null;
    let ep = [];
    null != eu &&
        (ep = Array.from(eu.embeddedActivity.userIds)
            .map((e) => T.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ef = (e) => {
        if (null == e || void 0 === e || e === D.mt) return null;
        let t = e_.get(e.id),
            n = t?.nick ?? b.Ay.getName(e);
        return (0, i.jsx)(
            c.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, i.jsx)("img", { src: e.getAvatarURL(q?.guild_id, F), alt: n, className: H.my }, e.id),
            },
            e.id,
        );
    };
    return (0, i.jsx)(d.NPJ, {
        theme: B.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(H.iE, K[Z], e),
                ref: $,
                style: em,
                children: [
                    s?.(),
                    (0, i.jsx)(g.A, { applicationId: W.id }),
                    (0, i.jsxs)("div", {
                        className: H.lq,
                        children: [
                            ee
                                ? null
                                : (0, i.jsx)("div", {
                                      className: H.wx,
                                      children: (0, i.jsx)(o.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: H.qd,
                                          children: W?.name,
                                      }),
                                  }),
                            (0, i.jsx)("div", {
                                className: a()(H.ht, { [H.kK]: ed }),
                                style: { paddingLeft: eo, paddingRight: eo, paddingTop: ec, paddingBottom: ec },
                                ref: el,
                                children: (0, i.jsx)(M.A, { className: H.pU, embedId: (0, G.A)(n.id, W.id) }),
                            }),
                            null != eh
                                ? (0, i.jsxs)("div", {
                                      className: H.qr,
                                      children: [
                                          (0, i.jsx)(D.Ay, {
                                              renderIcon: !1,
                                              users: ep,
                                              size: F,
                                              max: 6,
                                              renderUser: ef,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: H.Hq,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: H.qi,
                                                      children: [
                                                          (0, i.jsx)(k.A, { channelId: eh }),
                                                          (0, i.jsx)(f.l, {
                                                              isTrayButton: !0,
                                                              label: V.intl.string(V.t.brPQ5U),
                                                              onClick: Q,
                                                              iconComponent: d.gR,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: H.pt,
                                                      children: (0, i.jsx)(x.A, {
                                                          applicationId: W.id,
                                                          location: n,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          eg
                                              ? (0, i.jsx)(E.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, _.zV)(B.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, U.A)({
                                                                onConfirm: async () => {
                                                                    W?.id != null &&
                                                                        null != z &&
                                                                        (await (0, y.od)(W.id, z)),
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
                    ee && null != t
                        ? (0, i.jsx)(m.A, {
                              minHeight: 480,
                              maxHeight: t,
                              resizableNode: $,
                              onResize: (e) => {
                                  S._.dispatch(B.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), en(e);
                              },
                              onResizeEnd: (e) => {
                                  S._.dispatch(B.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ei(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
