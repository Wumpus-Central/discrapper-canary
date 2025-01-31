n.d(t, { Z: () => B }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(993365),
    c = n(481060),
    d = n(153867),
    u = n(110924),
    h = n(607070),
    p = n(900211),
    m = n(740492),
    f = n(861254),
    g = n(871499),
    _ = n(402113),
    C = n(592125),
    x = n(271383),
    v = n(944486),
    E = n(594174),
    I = n(585483),
    b = n(51144),
    Z = n(566620),
    N = n(317381),
    T = n(619915),
    S = n(988980),
    j = n(16609),
    A = n(952561),
    y = n(563218),
    P = n(884338),
    R = n(719296),
    M = n(651612),
    L = n(918559),
    k = n(981631),
    O = n(388032),
    D = n(718691);
let w = P.u.SIZE_32,
    U = {
        [L.MI.NO_CHAT]: D.noChat,
        [L.MI.RESIZABLE]: D.resizable
    };
function B(e) {
    var t, n;
    let { maxHeight: a, connectedLocation: B, renderExternalHeader: F } = e,
        { groupedButtons: H } = (0, f.ZP)({ location: 'ActivityPanelFocusedView' }),
        G = (0, A.Z)(),
        V = (0, s.Wu)([N.ZP], () => N.ZP.getEmbeddedActivitiesForLocation(B), [B]),
        z = (0, j.p)(B),
        W = (0, s.e7)([C.Z], () => C.Z.getChannel(z)),
        Y = (0, T.gb)(V),
        q = (0, T.uF)(Y),
        K = l.useCallback(() => {
            (0, Z.tg)(L.Ez.PIP);
        }, []),
        X = l.useRef(null),
        J = (0, s.e7)([N.ZP], () => N.ZP.getFocusedLayout()),
        Q = J !== L.MI.NO_CHAT,
        [$, ee] = l.useState(null !== (t = m.ZP.activityPanelHeight) && void 0 !== t ? t : a),
        et = l.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        en = l.useRef(null),
        [ei, el] = l.useState({
            width: 0,
            height: 0
        });
    l.useLayoutEffect(() => {
        if (null == en.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, i;
            el({
                width: null !== (n = null === (e = en.current) || void 0 === e ? void 0 : e.clientWidth) && void 0 !== n ? n : 0,
                height: null !== (i = null === (t = en.current) || void 0 === t ? void 0 : t.clientHeight) && void 0 !== i ? i : 0
            });
        });
        return e.observe(en.current), () => e.disconnect();
    }, []);
    let ea = ei.width / Math.max(ei.height, 1) < L.I0,
        er = 0,
        es = 0,
        eo = (0, S.Z)(null == G ? void 0 : G.id);
    if (!eo) {
        let e = ei.width,
            t = ei.height;
        ea ? ((t = ei.width / L.I0) > ei.height && (e = (t = ei.height) * L.I0), (es = (ei.height - t) / 2)) : ((e = Math.min(ei.height * L.I0)) > ei.width && (t = (e = ei.width) / L.I0), (er = (ei.width - e) / 2));
    }
    let ec = q.get(null !== (n = null == G ? void 0 : G.id) && void 0 !== n ? n : ''),
        ed = (0, s.e7)([v.Z], () => v.Z.getChannelId()),
        eu = (0, s.Wu)(
            [x.ZP],
            () => {
                var e;
                return null == W ? [] : Array.from(null !== (e = null == ec ? void 0 : ec.embeddedActivity.userIds) && void 0 !== e ? e : []).map((e) => x.ZP.getMember(W.guild_id, e));
            },
            [ec, W]
        ),
        eh = l.useMemo(() => {
            let e = new Map();
            return (
                eu.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eu]),
        ep = (function (e, t, n) {
            let i = (0, u.Z)(e),
                a = e !== i,
                [r, s] = l.useState(!1);
            l.useEffect(() => {
                s(!0);
                let e = setTimeout(() => s(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (a || r);
            return l.useMemo(() => {
                let i = o
                    ? {
                          transitionProperty: 'height, max-height',
                          transitionDuration: ''.concat(50, 'ms'),
                          transitionTimingFunction: 'ease-in-out'
                      }
                    : void 0;
                return e && null != t
                    ? {
                          ...i,
                          minHeight: 200,
                          maxHeight: n,
                          height: t
                      }
                    : i;
            }, [o, e, n, t]);
        })(Q, $, a);
    if (null == G) return null;
    let em = [];
    null != ec &&
        (em = Array.from(ec.embeddedActivity.userIds)
            .map((e) => E.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ef = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let l = eh.get(e.id),
            a = null !== (n = null == l ? void 0 : l.nick) && void 0 !== n ? n : b.ZP.getName(e);
        return (0, i.jsx)(
            c.DY3,
            {
                text: a,
                position: 'bottom',
                children: (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, w),
                        alt: a,
                        className: D.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, i.jsx)(c.f6W, {
        theme: k.BRd.DARK,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: r()(D.wrapper, U[J], e),
                ref: X,
                style: ep,
                children: [
                    null == F ? void 0 : F(),
                    (0, i.jsxs)('div', {
                        className: D.activityPanelContainer,
                        children: [
                            Q
                                ? null
                                : (0, i.jsx)('div', {
                                      className: D.header,
                                      children: (0, i.jsx)(o.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: D.headerTitle,
                                          children: null == G ? void 0 : G.name
                                      })
                                  }),
                            (0, i.jsx)('div', {
                                className: r()(D.activityContainer, { [D.activityContainerNoMargin]: eo }),
                                style: {
                                    paddingLeft: er,
                                    paddingRight: er,
                                    paddingTop: es,
                                    paddingBottom: es
                                },
                                ref: en,
                                children: (0, i.jsx)(y.Z, {
                                    className: D.iframe,
                                    embedId: (0, R.Z)(B.id, G.id)
                                })
                            }),
                            null != ed
                                ? (0, i.jsxs)('div', {
                                      className: D.footer,
                                      children: [
                                          (0, i.jsx)(P.Z, {
                                              renderIcon: !1,
                                              users: em,
                                              size: w,
                                              max: 6,
                                              className: D.userAvatars,
                                              renderUser: (e) => ef(e, W)
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: D.footerButtons,
                                              children: [
                                                  H
                                                      ? null
                                                      : (0, i.jsx)(M.Z, {
                                                            channelId: ed,
                                                            className: D.circularButton
                                                        }),
                                                  H
                                                      ? (0, i.jsxs)('div', {
                                                            className: D.buttonSection,
                                                            children: [
                                                                (0, i.jsx)(M.Z, { channelId: ed }),
                                                                (0, i.jsx)(g.d, {
                                                                    label: O.intl.string(O.t.brPQ5e),
                                                                    onClick: K,
                                                                    iconComponent: c.dOc,
                                                                    themeable: !0
                                                                })
                                                            ]
                                                        })
                                                      : null,
                                                  (0, i.jsx)('div', {
                                                      className: D.leaveButtonContainer,
                                                      children: (0, i.jsx)(_.Z, {
                                                          applicationId: G.id,
                                                          location: B,
                                                          centerButton: !0,
                                                          color: 'red',
                                                          className: H ? void 0 : D.leaveActivityButton
                                                      })
                                                  }),
                                                  H
                                                      ? null
                                                      : (0, i.jsx)(g.d, {
                                                            label: O.intl.string(O.t.brPQ5e),
                                                            onClick: K,
                                                            iconComponent: c.dOc,
                                                            themeable: !0,
                                                            className: D.circularButton
                                                        })
                                              ]
                                          }),
                                          (0, i.jsx)('div', { className: D.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    Q
                        ? (0, i.jsx)(p.Z, {
                              minHeight: 480,
                              maxHeight: a,
                              resizableNode: X,
                              onResize: (e) => {
                                  I.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), ee(e);
                              },
                              onResizeEnd: (e) => {
                                  I.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), et(e);
                              }
                          })
                        : null
                ]
            })
    });
}
