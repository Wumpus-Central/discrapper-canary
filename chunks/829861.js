"use strict";
n.d(t, { A: () => K });
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
    m = n(964404),
    _ = n(709562),
    f = n(383831),
    x = n(128286),
    C = n(734057),
    E = n(696451),
    I = n(309010),
    b = n(287809),
    N = n(203982),
    S = n(427262),
    T = n(795816),
    v = n(933958),
    y = n(685399),
    j = n(216418),
    R = n(969151),
    O = n(620148),
    L = n(732637),
    M = n(104171),
    D = n(47294),
    G = n(594007),
    U = n(16961),
    P = n(716730),
    w = n(5867),
    k = n(652215),
    V = n(985018),
    B = n(907585);
let H = M.DN.SIZE_32,
    F = { [w.E8.NO_CHAT]: B.Oo, [w.E8.RESIZABLE]: B.Ig };
function K(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: l } = e,
        K = (0, O.A)(),
        W = (0, a.yK)([v.Ay], () => v.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        Y = (0, R.H)(n),
        z = (0, a.bG)([C.A], () => C.A.getChannel(Y)),
        X = (0, y.IQ)(W),
        q = (0, y.Rz)(X),
        J = s.useCallback(() => {
            (0, T.gk)(w.Gd.PIP);
        }, []),
        Q = s.useRef(null),
        $ = (0, a.bG)([v.Ay], () => v.Ay.getFocusedLayout()),
        Z = $ !== w.E8.NO_CHAT,
        [ee, et] = s.useState(m.Ay.activityPanelHeight ?? t ?? null),
        en = s.useCallback((e) => {
            u.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        ei = s.useRef(null),
        [es, el] = s.useState({ width: 0, height: 0 });
    s.useLayoutEffect(() => {
        if (null == ei.current) return;
        let e = new ResizeObserver(() => {
            el({ width: ei.current?.clientWidth ?? 0, height: ei.current?.clientHeight ?? 0 });
        });
        return e.observe(ei.current), () => e.disconnect();
    }, []);
    let er = es.width / Math.max(es.height, 1) < w.B5,
        ea = 0,
        eo = 0,
        ec = (0, j.A)(K?.id);
    if (!ec) {
        let e = es.width,
            t = es.height;
        er
            ? ((t = es.width / w.B5) > es.height && (e = (t = es.height) * w.B5), (eo = (es.height - t) / 2))
            : ((e = Math.min(es.height * w.B5)) > es.width && (t = (e = es.width) / w.B5), (ea = (es.width - e) / 2));
    }
    let ed = q.get(K?.id ?? ""),
        eu = (0, a.bG)([I.A], () => I.A.getChannelId()),
        eh = (0, a.yK)(
            [E.Ay],
            () =>
                null == z
                    ? []
                    : Array.from(ed?.embeddedActivity.userIds ?? []).map((e) => E.Ay.getMember(z.guild_id, e)),
            [ed, z],
        ),
        eA = s.useMemo(() => {
            let e = new Map();
            return (
                eh.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eh]),
        ep = (function (e, t, n) {
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
        })(Z, ee, t),
        eg = (0, U.G)();
    if (null == K) return null;
    let em = [];
    null != ed &&
        (em = Array.from(ed.embeddedActivity.userIds)
            .map((e) => b.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let e_ = (e) => {
        if (null == e || void 0 === e || e === M.mt) return null;
        let t = eA.get(e.id),
            n = t?.nick ?? S.Ay.getName(e);
        return (0, i.jsx)(
            c.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, i.jsx)("img", { src: e.getAvatarURL(z?.guild_id, H), alt: n, className: B.my }, e.id),
            },
            e.id,
        );
    };
    return (0, i.jsx)(d.NPJ, {
        theme: k.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: r()(B.iE, F[$], e),
                ref: Q,
                style: ep,
                children: [
                    l?.(),
                    (0, i.jsxs)("div", {
                        className: B.lq,
                        children: [
                            Z
                                ? null
                                : (0, i.jsx)("div", {
                                      className: B.wx,
                                      children: (0, i.jsx)(o.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: B.qd,
                                          children: K?.name,
                                      }),
                                  }),
                            (0, i.jsx)("div", {
                                className: r()(B.ht, { [B.kK]: ec }),
                                style: { paddingLeft: ea, paddingRight: ea, paddingTop: eo, paddingBottom: eo },
                                ref: ei,
                                children: (0, i.jsx)(L.A, { className: B.pU, embedId: (0, G.A)(n.id, K.id) }),
                            }),
                            null != eu
                                ? (0, i.jsxs)("div", {
                                      className: B.qr,
                                      children: [
                                          (0, i.jsx)(M.Ay, {
                                              renderIcon: !1,
                                              users: em,
                                              size: H,
                                              max: 6,
                                              renderUser: e_,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: B.Hq,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: B.qi,
                                                      children: [
                                                          (0, i.jsx)(P.A, { channelId: eu }),
                                                          (0, i.jsx)(_.l, {
                                                              isTrayButton: !0,
                                                              label: V.intl.string(V.t.brPQ5U),
                                                              onClick: J,
                                                              iconComponent: d.gR,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: B.pt,
                                                      children: (0, i.jsx)(f.A, {
                                                          applicationId: K.id,
                                                          location: n,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          eg
                                              ? (0, i.jsx)(x.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, p.zV)(k.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, D.A)({
                                                                onConfirm: async () => {
                                                                    K?.id != null &&
                                                                        null != Y &&
                                                                        (await (0, T.od)(K.id, Y)),
                                                                        (0, T.jp)();
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
                    Z && null != t
                        ? (0, i.jsx)(g.A, {
                              minHeight: 480,
                              maxHeight: t,
                              resizableNode: Q,
                              onResize: (e) => {
                                  N._.dispatch(k.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), et(e);
                              },
                              onResizeEnd: (e) => {
                                  N._.dispatch(k.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), en(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
