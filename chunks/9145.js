n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(402113),
    x = n(592125),
    v = n(271383),
    _ = n(944486),
    I = n(594174),
    E = n(585483),
    b = n(51144),
    Z = n(566620),
    N = n(317381),
    S = n(619915),
    T = n(988980),
    j = n(16609),
    A = n(952561),
    y = n(563218),
    P = n(884338),
    M = n(719296),
    R = n(651612),
    L = n(918559),
    k = n(981631),
    O = n(388032),
    D = n(718691);
let w = P.u.SIZE_32,
    B = {
        [L.MI.NO_CHAT]: D.noChat,
        [L.MI.RESIZABLE]: D.resizable
    };
function U(e) {
    var t, n;
    let { maxHeight: r, connectedLocation: U, renderExternalHeader: H } = e,
        { groupedButtons: G } = (0, f.ZP)({ location: 'ActivityPanelFocusedView' }),
        F = (0, A.Z)(),
        V = (0, s.Wu)([N.ZP], () => N.ZP.getEmbeddedActivitiesForLocation(U), [U]),
        z = (0, j.p)(U),
        W = (0, s.e7)([x.Z], () => x.Z.getChannel(z)),
        K = (0, S.gb)(V),
        Y = (0, S.uF)(K),
        q = l.useCallback(() => {
            (0, Z.tg)(L.Ez.PIP);
        }, []),
        X = l.useRef(null),
        J = (0, s.e7)([N.ZP], () => N.ZP.getFocusedLayout()),
        Q = J !== L.MI.NO_CHAT,
        [$, ee] = l.useState(null !== (t = m.ZP.activityPanelHeight) && void 0 !== t ? t : r),
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
    let er = ei.width / Math.max(ei.height, 1) < L.I0,
        ea = 0,
        es = 0,
        eo = (0, T.Z)(null == F ? void 0 : F.id);
    if (!eo) {
        let e = ei.width,
            t = ei.height;
        er ? ((t = ei.width / L.I0) > ei.height && (e = (t = ei.height) * L.I0), (es = (ei.height - t) / 2)) : ((e = Math.min(ei.height * L.I0)) > ei.width && (t = (e = ei.width) / L.I0), (ea = (ei.width - e) / 2));
    }
    let ec = Y.get(null !== (n = null == F ? void 0 : F.id) && void 0 !== n ? n : ''),
        ed = (0, s.e7)([_.Z], () => _.Z.getChannelId()),
        eu = (0, s.Wu)(
            [v.ZP],
            () => {
                var e;
                return null == W ? [] : Array.from(null !== (e = null == ec ? void 0 : ec.embeddedActivity.userIds) && void 0 !== e ? e : []).map((e) => v.ZP.getMember(W.guild_id, e));
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
                r = e !== i,
                [a, s] = l.useState(!1);
            l.useEffect(() => {
                s(!0);
                let e = setTimeout(() => s(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (r || a);
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
        })(Q, $, r);
    if (null == F) return null;
    let em = [];
    null != ec &&
        (em = Array.from(ec.embeddedActivity.userIds)
            .map((e) => I.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ef = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let l = eh.get(e.id),
            r = null !== (n = null == l ? void 0 : l.nick) && void 0 !== n ? n : b.ZP.getName(e);
        return (0, i.jsx)(
            c.TooltipContainer,
            {
                text: r,
                position: 'bottom',
                children: (0, i.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, w),
                        alt: r,
                        className: D.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, i.jsx)(c.ThemeProvider, {
        theme: k.BRd.DARK,
        children: (e) =>
            (0, i.jsxs)('div', {
                className: a()(D.wrapper, B[J], e),
                ref: X,
                style: ep,
                children: [
                    null == H ? void 0 : H(),
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
                                          children: null == F ? void 0 : F.name
                                      })
                                  }),
                            (0, i.jsx)('div', {
                                className: a()(D.activityContainer, { [D.activityContainerNoMargin]: eo }),
                                style: {
                                    paddingLeft: ea,
                                    paddingRight: ea,
                                    paddingTop: es,
                                    paddingBottom: es
                                },
                                ref: en,
                                children: (0, i.jsx)(y.Z, {
                                    className: D.iframe,
                                    embedId: (0, M.Z)(U.id, F.id)
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
                                                  G
                                                      ? null
                                                      : (0, i.jsx)(R.Z, {
                                                            channelId: ed,
                                                            className: D.circularButton
                                                        }),
                                                  G
                                                      ? (0, i.jsxs)('div', {
                                                            className: D.buttonSection,
                                                            children: [
                                                                (0, i.jsx)(R.Z, { channelId: ed }),
                                                                (0, i.jsx)(g.d, {
                                                                    label: O.intl.string(O.t.brPQ5e),
                                                                    onClick: q,
                                                                    iconComponent: c.MinimizeIcon,
                                                                    themeable: !0
                                                                })
                                                            ]
                                                        })
                                                      : null,
                                                  (0, i.jsx)('div', {
                                                      className: D.leaveButtonContainer,
                                                      children: (0, i.jsx)(C.Z, {
                                                          applicationId: F.id,
                                                          location: U,
                                                          centerButton: !0,
                                                          color: 'red',
                                                          className: G ? void 0 : D.leaveActivityButton
                                                      })
                                                  }),
                                                  G
                                                      ? null
                                                      : (0, i.jsx)(g.d, {
                                                            label: O.intl.string(O.t.brPQ5e),
                                                            onClick: q,
                                                            iconComponent: c.MinimizeIcon,
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
                              maxHeight: r,
                              resizableNode: X,
                              onResize: (e) => {
                                  E.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), ee(e);
                              },
                              onResizeEnd: (e) => {
                                  E.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), et(e);
                              }
                          })
                        : null
                ]
            })
    });
}
