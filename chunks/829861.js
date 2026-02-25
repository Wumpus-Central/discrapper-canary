"use strict";
n.d(t, { A: () => W });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(571356),
    c = n(990078),
    d = n(397927),
    u = n(817281),
    h = n(475743),
    A = n(775602),
    p = n(58149),
    g = n(587837),
    m = n(201805),
    _ = n(964404),
    f = n(709562),
    x = n(383831),
    C = n(128286),
    E = n(734057),
    I = n(696451),
    N = n(309010),
    b = n(287809),
    S = n(203982),
    T = n(427262),
    y = n(795816),
    v = n(933958),
    j = n(685399),
    R = n(216418),
    O = n(969151),
    L = n(620148),
    M = n(732637),
    D = n(104171),
    G = n(47294),
    U = n(594007),
    P = n(16961),
    w = n(716730),
    k = n(5867),
    V = n(652215),
    B = n(985018),
    H = n(429496);
let F = D.DN.SIZE_32,
    K = { [k.E8.NO_CHAT]: H.Oo, [k.E8.RESIZABLE]: H.Ig };
function W(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: l } = e,
        W = (0, L.A)(),
        Y = (0, a.yK)([v.Ay], () => v.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        z = (0, O.H)(n),
        X = (0, a.bG)([E.A], () => E.A.getChannel(z)),
        q = (0, j.IQ)(Y),
        J = (0, j.Rz)(q),
        Q = s.useCallback(() => {
            (0, y.gk)(k.Gd.PIP);
        }, []),
        $ = s.useRef(null),
        Z = (0, a.bG)([v.Ay], () => v.Ay.getFocusedLayout()),
        ee = Z !== k.E8.NO_CHAT,
        [et, en] = s.useState(_.Ay.activityPanelHeight ?? t ?? null),
        ei = s.useCallback((e) => {
            u.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        es = s.useRef(null),
        [el, er] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == es.current) return;
        let e = new ResizeObserver(() => {
            er({ width: es.current?.clientWidth ?? 0, height: es.current?.clientHeight ?? 0 });
        });
        return e.observe(es.current), () => e.disconnect();
    }, []);
    let ea = el.width / Math.max(el.height, 1) < k.B5,
        eo = 0,
        ec = 0,
        ed = (0, R.A)(W?.id);
    if (!ed) {
        let e = el.width,
            t = el.height;
        ea
            ? ((t = el.width / k.B5) > el.height && (e = (t = el.height) * k.B5), (ec = (el.height - t) / 2))
            : ((e = Math.min(el.height * k.B5)) > el.width && (t = (e = el.width) / k.B5), (eo = (el.width - e) / 2));
    }
    let eu = J.get(W?.id ?? ""),
        eh = (0, a.bG)([N.A], () => N.A.getChannelId()),
        eA = (0, a.yK)(
            [I.Ay],
            () =>
                null == X
                    ? []
                    : Array.from(eu?.embeddedActivity.userIds ?? []).map((e) => I.Ay.getMember(X.guild_id, e)),
            [eu, X],
        ),
        ep = s.useMemo(() => {
            let e = new Map();
            return (
                eA.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eA]),
        eg = (function (e, t, n) {
            let i = (0, h.A)(e),
                l = e !== i,
                [r, a] = s.useState(!1);
            s.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !A.A.useReducedMotion && (l || r);
            return s.useMemo(() => {
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
        em = (0, P.G)();
    if (((0, m.ns)(W?.id), null == W)) return null;
    let e_ = [];
    null != eu &&
        (e_ = Array.from(eu.embeddedActivity.userIds)
            .map((e) => b.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ef = (e) => {
        if (null == e || void 0 === e || e === D.mt) return null;
        let t = ep.get(e.id),
            n = t?.nick ?? T.Ay.getName(e);
        return (0, i.jsx)(
            c.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, i.jsx)("img", { src: e.getAvatarURL(X?.guild_id, F), alt: n, className: H.my }, e.id),
            },
            e.id,
        );
    };
    return (0, i.jsx)(d.NPJ, {
        theme: V.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(H.iE, K[Z], e),
                ref: $,
                style: eg,
                children: [
                    l?.(),
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
                                className: r()(H.ht, { [H.kK]: ed }),
                                style: { paddingLeft: eo, paddingRight: eo, paddingTop: ec, paddingBottom: ec },
                                ref: es,
                                children: (0, i.jsx)(M.A, { className: H.pU, embedId: (0, U.A)(n.id, W.id) }),
                            }),
                            null != eh
                                ? (0, i.jsxs)("div", {
                                      className: H.qr,
                                      children: [
                                          (0, i.jsx)(D.Ay, {
                                              renderIcon: !1,
                                              users: e_,
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
                                                          (0, i.jsx)(w.A, { channelId: eh }),
                                                          (0, i.jsx)(f.l, {
                                                              isTrayButton: !0,
                                                              label: B.intl.string(B.t.brPQ5U),
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
                                          em
                                              ? (0, i.jsx)(C.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, p.zV)(V.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, G.A)({
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
                        ? (0, i.jsx)(g.A, {
                              minHeight: 480,
                              maxHeight: t,
                              resizableNode: $,
                              onResize: (e) => {
                                  S._.dispatch(V.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), en(e);
                              },
                              onResizeEnd: (e) => {
                                  S._.dispatch(V.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ei(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
