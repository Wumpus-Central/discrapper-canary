n.d(t, { Z: () => G }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(252258),
    s = n(442837),
    c = n(993365),
    u = n(481060),
    d = n(153867),
    p = n(110924),
    h = n(607070),
    f = n(900211),
    m = n(740492),
    g = n(871499),
    b = n(786915),
    _ = n(402113),
    C = n(592125),
    x = n(271383),
    y = n(944486),
    v = n(594174),
    j = n(585483),
    O = n(51144),
    E = n(566620),
    I = n(317381),
    S = n(619915),
    P = n(988980),
    Z = n(16609),
    N = n(952561),
    T = n(563218),
    A = n(884338),
    w = n(719296),
    R = n(651612),
    M = n(918559),
    k = n(981631),
    L = n(388032),
    D = n(199570);
let U = A.u.SIZE_32,
    B = {
        [M.MI.NO_CHAT]: D.noChat,
        [M.MI.RESIZABLE]: D.resizable
    };
function G(e) {
    var t, n, l;
    let { maxHeight: G, connectedLocation: F, renderExternalHeader: H } = e,
        V = (0, N.Z)(),
        z = (0, s.Wu)([I.ZP], () => I.ZP.getEmbeddedActivitiesForLocation(F), [F]),
        W = (0, Z.pY)(F),
        Y = (0, s.e7)([C.Z], () => C.Z.getChannel(W)),
        q = (0, S.gb)(z),
        K = (0, S.uF)(q),
        X = i.useCallback(() => {
            (0, E.tg)(M.Ez.PIP);
        }, []),
        Q = i.useRef(null),
        J = (0, s.e7)([I.ZP], () => I.ZP.getFocusedLayout()),
        $ = J !== M.MI.NO_CHAT,
        [ee, et] = i.useState(null != (n = null != (t = m.ZP.activityPanelHeight) ? t : G) ? n : null),
        en = i.useCallback((e) => {
            d.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        er = i.useRef(null),
        [ei, el] = i.useState({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        if (null == er.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            el({
                width: null != (n = null == (e = er.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = er.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return e.observe(er.current), () => e.disconnect();
    }, []);
    let ea = ei.width / Math.max(ei.height, 1) < M.I0,
        eo = 0,
        es = 0,
        ec = (0, P.Z)(null == V ? void 0 : V.id);
    if (!ec) {
        let e = ei.width,
            t = ei.height;
        ea ? ((t = ei.width / M.I0) > ei.height && (e = (t = ei.height) * M.I0), (es = (ei.height - t) / 2)) : ((e = Math.min(ei.height * M.I0)) > ei.width && (t = (e = ei.width) / M.I0), (eo = (ei.width - e) / 2));
    }
    let eu = K.get(null != (l = null == V ? void 0 : V.id) ? l : ''),
        ed = F.kind === o.E.CONTEXTLESS,
        ep = (0, s.e7)([y.Z], () => y.Z.getChannelId()),
        eh = (0, s.Wu)(
            [x.ZP],
            () => {
                var e;
                return null == Y ? [] : Array.from(null != (e = null == eu ? void 0 : eu.embeddedActivity.userIds) ? e : []).map((e) => x.ZP.getMember(Y.guild_id, e));
            },
            [eu, Y]
        ),
        ef = i.useMemo(() => {
            let e = new Map();
            return (
                eh.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [eh]),
        em = (function (e, t, n) {
            let r = (0, p.Z)(e),
                l = e !== r,
                [a, o] = i.useState(!1);
            i.useEffect(() => {
                o(!0);
                let e = setTimeout(() => o(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let s = !h.Z.useReducedMotion && (l || a);
            return i.useMemo(() => {
                var r, i;
                let l = s
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
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      })
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
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
            }, [s, e, n, t]);
        })($, ee, G);
    if (null == V) return null;
    let eg = [];
    null != eu &&
        (eg = Array.from(eu.embeddedActivity.userIds)
            .map((e) => v.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let eb = (e) => {
        var t;
        if (null == e || void 0 === e) return null;
        let n = ef.get(e.id),
            i = null != (t = null == n ? void 0 : n.nick) ? t : O.ZP.getName(e);
        return (0, r.jsx)(
            u.DY3,
            {
                text: i,
                position: 'bottom',
                children: (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(null == Y ? void 0 : Y.guild_id, U),
                        alt: i,
                        className: D.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, r.jsx)(u.f6W, {
        theme: k.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: a()(D.wrapper, B[J], e, { [D.contextlessActivityWrapper]: ed }),
                ref: Q,
                style: em,
                children: [
                    !ed && (null == H ? void 0 : H()),
                    (0, r.jsxs)('div', {
                        className: D.activityPanelContainer,
                        children: [
                            $ || ed
                                ? null
                                : (0, r.jsx)('div', {
                                      className: D.header,
                                      children: (0, r.jsx)(c.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: D.headerTitle,
                                          children: null == V ? void 0 : V.name
                                      })
                                  }),
                            ed
                                ? (0, r.jsxs)('div', {
                                      className: D.contextlessHeader,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: D.contextlessHeaderLeft,
                                              children: [
                                                  (0, r.jsx)(A.Z, {
                                                      renderIcon: !1,
                                                      users: eg,
                                                      size: U,
                                                      max: 6,
                                                      className: D.userAvatars,
                                                      renderUser: eb
                                                  }),
                                                  (0, r.jsx)(b.Z, {
                                                      appContext: k.IlC.APP,
                                                      applicationId: V.id,
                                                      shouldPrioritizeGroupPlusIcon: !0,
                                                      isContextlessActivity: ed,
                                                      iconClassName: D.contextlessInviteButtonIcon,
                                                      size: u.zxk.Sizes.SMALL,
                                                      look: u.zxk.Looks.FILLED,
                                                      buttonText: L.intl.string(L.t['6F9ivr']),
                                                      color: u.zxk.Colors.PRIMARY
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)(_.Z, {
                                              applicationId: V.id,
                                              location: F,
                                              centerButton: !0,
                                              color: 'disconnect',
                                              applyStyles: ed,
                                              className: D.contextlessLeaveActivityButton,
                                              iconClassName: D.contextlessLeaveActivityButtonIcon
                                          })
                                      ]
                                  })
                                : null,
                            (0, r.jsx)('div', {
                                className: a()(D.activityContainer, { [D.activityContainerNoMargin]: ec }),
                                style: {
                                    paddingLeft: eo,
                                    paddingRight: eo,
                                    paddingTop: es,
                                    paddingBottom: es
                                },
                                ref: er,
                                children: (0, r.jsx)(T.Z, {
                                    className: D.iframe,
                                    embedId: (0, w.Z)(F.id, V.id)
                                })
                            }),
                            ed || null == ep
                                ? null
                                : (0, r.jsxs)('div', {
                                      className: D.footer,
                                      children: [
                                          (0, r.jsx)(A.Z, {
                                              renderIcon: !1,
                                              users: eg,
                                              size: U,
                                              max: 6,
                                              className: D.userAvatars,
                                              renderUser: eb
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: D.footerButtons,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: D.buttonSection,
                                                      children: [
                                                          (0, r.jsx)(R.Z, { channelId: ep }),
                                                          (0, r.jsx)(g.d, {
                                                              isTrayButton: !0,
                                                              label: L.intl.string(L.t.brPQ5e),
                                                              onClick: X,
                                                              iconComponent: u.dOc,
                                                              themeable: !0
                                                          })
                                                      ]
                                                  }),
                                                  (0, r.jsx)('div', {
                                                      className: D.leaveButtonContainer,
                                                      children: (0, r.jsx)(_.Z, {
                                                          applicationId: V.id,
                                                          location: F,
                                                          centerButton: !0,
                                                          color: 'disconnect'
                                                      })
                                                  })
                                              ]
                                          }),
                                          (0, r.jsx)('div', { className: D.flex })
                                      ]
                                  })
                        ]
                    }),
                    $ && null != G
                        ? (0, r.jsx)(f.Z, {
                              minHeight: 480,
                              maxHeight: G,
                              resizableNode: Q,
                              onResize: (e) => {
                                  j.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), et(e);
                              },
                              onResizeEnd: (e) => {
                                  j.S.dispatch(k.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), en(e);
                              }
                          })
                        : null
                ]
            })
    });
}
