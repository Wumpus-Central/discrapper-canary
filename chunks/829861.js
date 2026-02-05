n.d(t, { A: () => Y });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(571356),
    d = n(990078),
    c = n(397927),
    u = n(817281),
    h = n(475743),
    A = n(775602),
    g = n(58149),
    m = n(587837),
    p = n(964404),
    _ = n(709562),
    x = n(383831),
    f = n(128286),
    E = n(734057),
    C = n(696451),
    I = n(309010),
    S = n(287809),
    b = n(203982),
    N = n(427262),
    T = n(795816),
    j = n(933958),
    v = n(685399),
    y = n(216418),
    R = n(969151),
    O = n(620148),
    L = n(732637),
    D = n(104171),
    M = n(47294),
    G = n(594007),
    U = n(16961),
    P = n(716730),
    k = n(5867),
    w = n(652215),
    V = n(985018),
    B = n(907585);
let H = D.DN.SIZE_32,
    F = { [k.E8.NO_CHAT]: B.Oo, [k.E8.RESIZABLE]: B.Ig };
function Y(e) {
    let { maxHeight: t, connectedLocation: n, renderExternalHeader: s } = e,
        Y = (0, O.A)(),
        W = (0, r.yK)([j.Ay], () => j.Ay.getEmbeddedActivitiesForLocation(n), [n]),
        K = (0, R.H)(n),
        z = (0, r.bG)([E.A], () => E.A.getChannel(K)),
        X = (0, v.IQ)(W),
        q = (0, v.Rz)(X),
        J = l.useCallback(() => {
            (0, T.gk)(k.Gd.PIP);
        }, []),
        Q = l.useRef(null),
        Z = (0, r.bG)([j.Ay], () => j.Ay.getFocusedLayout()),
        $ = Z !== k.E8.NO_CHAT,
        [ee, et] = l.useState(p.Ay.activityPanelHeight ?? t ?? null),
        en = l.useCallback((e) => {
            u.Ay.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        ei = l.useRef(null),
        [el, es] = l.useState({ width: 0, height: 0 });
    l.useLayoutEffect(() => {
        if (null == ei.current) return;
        let e = new ResizeObserver(() => {
            es({ width: ei.current?.clientWidth ?? 0, height: ei.current?.clientHeight ?? 0 });
        });
        return e.observe(ei.current), () => e.disconnect();
    }, []);
    let ea = el.width / Math.max(el.height, 1) < k.B5,
        er = 0,
        eo = 0,
        ed = (0, y.A)(Y?.id);
    if (!ed) {
        let e = el.width,
            t = el.height;
        ea
            ? ((t = el.width / k.B5) > el.height && (e = (t = el.height) * k.B5), (eo = (el.height - t) / 2))
            : ((e = Math.min(el.height * k.B5)) > el.width && (t = (e = el.width) / k.B5), (er = (el.width - e) / 2));
    }
    let ec = q.get(Y?.id ?? ""),
        eu = (0, r.bG)([I.A], () => I.A.getChannelId()),
        eh = (0, r.yK)(
            [C.Ay],
            () =>
                null == z
                    ? []
                    : Array.from(ec?.embeddedActivity.userIds ?? []).map((e) => C.Ay.getMember(z.guild_id, e)),
            [ec, z],
        ),
        eA = l.useMemo(() => {
            let e = new Map();
            return (
                eh.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eh]),
        eg = (function (e, t, n) {
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
        })($, ee, t),
        em = (0, U.G)();
    if (null == Y) return null;
    let ep = [];
    null != ec &&
        (ep = Array.from(ec.embeddedActivity.userIds)
            .map((e) => S.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let e_ = (e) => {
        if (null == e || void 0 === e || e === D.mt) return null;
        let t = eA.get(e.id),
            n = t?.nick ?? N.Ay.getName(e);
        return (0, i.jsx)(
            d.m,
            {
                asContainer: !0,
                text: n,
                position: "bottom",
                children: (0, i.jsx)("img", { src: e.getAvatarURL(z?.guild_id, H), alt: n, className: B.my }, e.id),
            },
            e.id,
        );
    };
    return (0, i.jsx)(c.NPJ, {
        theme: w.NJ8.DARK,
        children: (e) =>
            (0, i.jsxs)("div", {
                className: a()(B.iE, F[Z], e),
                ref: Q,
                style: eg,
                children: [
                    s?.(),
                    (0, i.jsxs)("div", {
                        className: B.lq,
                        children: [
                            $
                                ? null
                                : (0, i.jsx)("div", {
                                      className: B.wx,
                                      children: (0, i.jsx)(o.E, {
                                          color: "text-strong",
                                          variant: "text-md/semibold",
                                          className: B.qd,
                                          children: Y?.name,
                                      }),
                                  }),
                            (0, i.jsx)("div", {
                                className: a()(B.ht, { [B.kK]: ed }),
                                style: { paddingLeft: er, paddingRight: er, paddingTop: eo, paddingBottom: eo },
                                ref: ei,
                                children: (0, i.jsx)(L.A, { className: B.pU, embedId: (0, G.A)(n.id, Y.id) }),
                            }),
                            null != eu
                                ? (0, i.jsxs)("div", {
                                      className: B.qr,
                                      children: [
                                          (0, i.jsx)(D.Ay, {
                                              renderIcon: !1,
                                              users: ep,
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
                                                              iconComponent: c.gR,
                                                              themeable: !0,
                                                          }),
                                                      ],
                                                  }),
                                                  (0, i.jsx)("div", {
                                                      className: B.pt,
                                                      children: (0, i.jsx)(x.A, {
                                                          applicationId: Y.id,
                                                          location: n,
                                                          centerButton: !0,
                                                          color: "disconnect",
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          em
                                              ? (0, i.jsx)(f.A, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        (0, g.zV)(w.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                                            (0, M.A)({
                                                                onConfirm: async () => {
                                                                    Y?.id != null &&
                                                                        null != K &&
                                                                        (await (0, T.od)(Y.id, K)),
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
                    $ && null != t
                        ? (0, i.jsx)(m.A, {
                              minHeight: 480,
                              maxHeight: t,
                              resizableNode: Q,
                              onResize: (e) => {
                                  b._.dispatch(w.jej.MANUAL_IFRAME_RESIZING, { resizing: !0 }), et(e);
                              },
                              onResizeEnd: (e) => {
                                  b._.dispatch(w.jej.MANUAL_IFRAME_RESIZING, { resizing: !1 }), en(e);
                              },
                          })
                        : null,
                ],
            }),
    });
}
