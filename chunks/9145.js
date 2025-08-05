(n.d(t, { Z: () => H }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(993365),
    c = n(481060),
    d = n(153867),
    u = n(110924),
    h = n(607070),
    p = n(367907),
    f = n(900211),
    g = n(740492),
    m = n(871499),
    b = n(402113),
    _ = n(800965),
    y = n(592125),
    j = n(271383),
    O = n(944486),
    x = n(594174),
    v = n(585483),
    C = n(51144),
    E = n(566620),
    Z = n(317381),
    I = n(619915),
    S = n(988980),
    P = n(16609),
    T = n(952561),
    N = n(563218),
    w = n(884338),
    R = n(617552),
    A = n(719296),
    D = n(225639),
    L = n(651612),
    M = n(918559),
    k = n(981631),
    U = n(388032),
    G = n(199570);
let F = w.u8.SIZE_32,
    B = {
        [M.MI.NO_CHAT]: G.noChat,
        [M.MI.RESIZABLE]: G.resizable
    };
function H(e) {
    var t, n, l;
    let { maxHeight: H, connectedLocation: z, renderExternalHeader: V } = e,
        W = (0, T.Z)(),
        Y = (0, s.Wu)([Z.ZP], () => Z.ZP.getEmbeddedActivitiesForLocation(z), [z]),
        K = (0, P.p)(z),
        q = (0, s.e7)([y.Z], () => y.Z.getChannel(K)),
        Q = (0, I.gb)(Y),
        X = (0, I.uF)(Q),
        J = i.useCallback(() => {
            (0, E.tg)(M.Ez.PIP);
        }, []),
        $ = i.useRef(null),
        ee = (0, s.e7)([Z.ZP], () => Z.ZP.getFocusedLayout()),
        et = ee !== M.MI.NO_CHAT,
        [en, er] = i.useState(null != (n = null != (t = g.ZP.activityPanelHeight) ? t : H) ? n : null),
        ei = i.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        el = i.useRef(null),
        [ea, es] = i.useState({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        if (null == el.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            es({
                width: null != (n = null == (e = el.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = el.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return (e.observe(el.current), () => e.disconnect());
    }, []);
    let eo = ea.width / Math.max(ea.height, 1) < M.I0,
        ec = 0,
        ed = 0,
        eu = (0, S.Z)(null == W ? void 0 : W.id);
    if (!eu) {
        let e = ea.width,
            t = ea.height;
        eo ? ((t = ea.width / M.I0) > ea.height && (e = (t = ea.height) * M.I0), (ed = (ea.height - t) / 2)) : ((e = Math.min(ea.height * M.I0)) > ea.width && (t = (e = ea.width) / M.I0), (ec = (ea.width - e) / 2));
    }
    let eh = X.get(null != (l = null == W ? void 0 : W.id) ? l : ''),
        ep = (0, s.e7)([O.Z], () => O.Z.getChannelId()),
        ef = (0, s.Wu)(
            [j.ZP],
            () => {
                var e;
                return null == q ? [] : Array.from(null != (e = null == eh ? void 0 : eh.embeddedActivity.userIds) ? e : []).map((e) => j.ZP.getMember(q.guild_id, e));
            },
            [eh, q]
        ),
        eg = i.useMemo(() => {
            let e = new Map();
            return (
                ef.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ef]),
        em = (function (e, t, n) {
            let r = (0, u.Z)(e),
                l = e !== r,
                [a, s] = i.useState(!1);
            i.useEffect(() => {
                s(!0);
                let e = setTimeout(() => s(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let o = !h.Z.useReducedMotion && (l || a);
            return i.useMemo(() => {
                var r, i;
                let l = o
                    ? {
                          transitionProperty: 'height, max-height',
                          transitionDuration: ''.concat(50, 'ms'),
                          transitionTimingFunction: 'ease-in-out'
                      }
                    : void 0;
                return e && null != t && null != n
                    ? ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      ((r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r));
                                  }));
                          }
                          return e;
                      })({}, l)),
                      (i = i =
                          {
                              minHeight: 200,
                              maxHeight: n,
                              height: t
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r);
                                }
                                return n;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      r)
                    : l;
            }, [o, e, n, t]);
        })(et, en, H),
        eb = (0, D.y)({ location: 'Activity Panel' });
    if (null == W) return null;
    let e_ = [];
    null != eh &&
        (e_ = Array.from(eh.embeddedActivity.userIds)
            .map((e) => x.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let ey = (e) => {
        var t;
        if (null == e || void 0 === e || e === w.ag) return null;
        let n = eg.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : C.ZP.getName(e);
        return (0, r.jsx)(
            c.DY3,
            {
                text: i,
                position: 'bottom',
                children: (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(null == q ? void 0 : q.guild_id, F),
                        alt: i,
                        className: G.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, r.jsx)(c.f6W, {
        theme: k.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(G.wrapper, B[ee], e),
                ref: $,
                style: em,
                children: [
                    null == V ? void 0 : V(),
                    (0, r.jsxs)('div', {
                        className: G.activityPanelContainer,
                        children: [
                            et
                                ? null
                                : (0, r.jsx)('div', {
                                      className: G.header,
                                      children: (0, r.jsx)(o.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: G.headerTitle,
                                          children: null == W ? void 0 : W.name
                                      })
                                  }),
                            (0, r.jsx)('div', {
                                className: a()(G.activityContainer, { [G.activityContainerNoMargin]: eu }),
                                style: {
                                    paddingLeft: ec,
                                    paddingRight: ec,
                                    paddingTop: ed,
                                    paddingBottom: ed
                                },
                                ref: el,
                                children: (0, r.jsx)(N.Z, {
                                    className: G.iframe,
                                    embedId: (0, A.Z)(z.id, W.id)
                                })
                            }),
                            null != ep
                                ? (0, r.jsxs)('div', {
                                      className: G.footer,
                                      children: [
                                          (0, r.jsx)(w.ZP, {
                                              renderIcon: !1,
                                              users: e_,
                                              size: F,
                                              max: 6,
                                              renderUser: ey
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: G.footerButtons,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: G.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(L.Z, { channelId: ep }),
                                                          (0, r.jsx)(m.d, {
                                                              isTrayButton: !0,
                                                              label: U.intl.string(U.t.brPQ5e),
                                                              onClick: J,
                                                              iconComponent: c.dOc,
                                                              themeable: !0
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: G.leaveButtonContainer,
                                                      children: (0, r.jsx)(b.Z, {
                                                          applicationId: W.id,
                                                          location: z,
                                                          centerButton: !0,
                                                          color: 'disconnect',
                                                          isActivityInCall: !1
                                                      })
                                                  })
                                              ]
                                          }),
                                          eb
                                              ? (0, r.jsx)(_.Z, {
                                                    popoutOpen: !1,
                                                    onOpenPopout: () => {
                                                        ((0, p.yw)(k.rMx.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED), (0, R.Z)({ onConfirm: E.Gj }));
                                                    },
                                                    onClosePopout: () => {}
                                                })
                                              : null
                                      ]
                                  })
                                : null
                        ]
                    }),
                    et && null != H
                        ? (0, r.jsx)(f.Z, {
                              minHeight: 480,
                              maxHeight: H,
                              resizableNode: $,
                              onResize: (e) => {
                                  (v.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), er(e));
                              },
                              onResizeEnd: (e) => {
                                  (v.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), ei(e));
                              }
                          })
                        : null
                ]
            })
    });
}
