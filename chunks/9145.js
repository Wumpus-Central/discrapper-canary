n.d(t, { Z: () => U }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(993365),
    c = n(481060),
    u = n(153867),
    d = n(110924),
    p = n(607070),
    h = n(900211),
    f = n(740492),
    m = n(82965),
    g = n(871499),
    b = n(402113),
    _ = n(592125),
    C = n(271383),
    y = n(944486),
    x = n(594174),
    v = n(585483),
    j = n(51144),
    O = n(566620),
    E = n(317381),
    N = n(619915),
    I = n(988980),
    P = n(16609),
    S = n(952561),
    Z = n(563218),
    T = n(884338),
    A = n(719296),
    w = n(651612),
    R = n(918559),
    M = n(981631),
    k = n(388032),
    L = n(199570);
let D = T.u.SIZE_32,
    W = {
        [R.MI.NO_CHAT]: L.noChat,
        [R.MI.RESIZABLE]: L.resizable
    };
function U(e) {
    var t, n;
    let { maxHeight: l, connectedLocation: U, renderExternalHeader: B } = e,
        H = (0, m.Z)({ location: 'ActivityPanelFocusedView' }),
        F = (0, S.Z)(),
        G = (0, a.Wu)([E.ZP], () => E.ZP.getEmbeddedActivitiesForLocation(U), [U]),
        V = (0, P.pY)(U),
        z = (0, a.e7)([_.Z], () => _.Z.getChannel(V)),
        Y = (0, N.gb)(G),
        q = (0, N.uF)(Y),
        K = i.useCallback(() => {
            (0, O.tg)(R.Ez.PIP);
        }, []),
        X = i.useRef(null),
        Q = (0, a.e7)([E.ZP], () => E.ZP.getFocusedLayout()),
        J = Q !== R.MI.NO_CHAT,
        [$, ee] = i.useState(null != (t = f.ZP.activityPanelHeight) ? t : l),
        et = i.useCallback((e) => {
            u.ZP.updatedUnsyncedSettings({ activityPanelHeight: e });
        }, []),
        en = i.useRef(null),
        [er, ei] = i.useState({
            width: 0,
            height: 0
        });
    i.useLayoutEffect(() => {
        if (null == en.current) return;
        let e = new ResizeObserver(() => {
            var e, t, n, r;
            ei({
                width: null != (n = null == (e = en.current) ? void 0 : e.clientWidth) ? n : 0,
                height: null != (r = null == (t = en.current) ? void 0 : t.clientHeight) ? r : 0
            });
        });
        return e.observe(en.current), () => e.disconnect();
    }, []);
    let el = er.width / Math.max(er.height, 1) < R.I0,
        eo = 0,
        ea = 0,
        es = (0, I.Z)(null == F ? void 0 : F.id);
    if (!es) {
        let e = er.width,
            t = er.height;
        el ? ((t = er.width / R.I0) > er.height && (e = (t = er.height) * R.I0), (ea = (er.height - t) / 2)) : ((e = Math.min(er.height * R.I0)) > er.width && (t = (e = er.width) / R.I0), (eo = (er.width - e) / 2));
    }
    let ec = q.get(null != (n = null == F ? void 0 : F.id) ? n : ''),
        eu = (0, a.e7)([y.Z], () => y.Z.getChannelId()),
        ed = (0, a.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == z ? [] : Array.from(null != (e = null == ec ? void 0 : ec.embeddedActivity.userIds) ? e : []).map((e) => C.ZP.getMember(z.guild_id, e));
            },
            [ec, z]
        ),
        ep = i.useMemo(() => {
            let e = new Map();
            return (
                ed.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ed]),
        eh = (function (e, t, n) {
            let r = (0, d.Z)(e),
                l = e !== r,
                [o, a] = i.useState(!1);
            i.useEffect(() => {
                a(!0);
                let e = setTimeout(() => a(!1), 50);
                return () => clearTimeout(e);
            }, [e]);
            let s = !p.Z.useReducedMotion && (l || o);
            return i.useMemo(() => {
                var r, i;
                let l = s
                    ? {
                          transitionProperty: 'height, max-height',
                          transitionDuration: ''.concat(50, 'ms'),
                          transitionTimingFunction: 'ease-in-out'
                      }
                    : void 0;
                return e && null != t
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
        })(J, $, l);
    if (null == F) return null;
    let ef = [];
    null != ec &&
        (ef = Array.from(ec.embeddedActivity.userIds)
            .map((e) => x.default.getUser(e))
            .filter((e) => null != e && void 0 !== e));
    let em = (e, t) => {
        var n;
        if (null == e || void 0 === e || void 0 === t) return null;
        let i = ep.get(e.id),
            l = null != (n = null == i ? void 0 : i.nick) ? n : j.ZP.getName(e);
        return (0, r.jsx)(
            c.DY3,
            {
                text: l,
                position: 'bottom',
                children: (0, r.jsx)(
                    'img',
                    {
                        src: e.getAvatarURL(t.guild_id, D),
                        alt: l,
                        className: L.avatar
                    },
                    e.id
                )
            },
            e.id
        );
    };
    return (0, r.jsx)(c.f6W, {
        theme: M.BRd.DARK,
        children: (e) =>
            (0, r.jsxs)('div', {
                className: o()(L.wrapper, W[Q], e),
                ref: X,
                style: eh,
                children: [
                    null == B ? void 0 : B(),
                    (0, r.jsxs)('div', {
                        className: L.activityPanelContainer,
                        children: [
                            J
                                ? null
                                : (0, r.jsx)('div', {
                                      className: L.header,
                                      children: (0, r.jsx)(s.x, {
                                          color: 'header-primary',
                                          variant: 'text-md/semibold',
                                          className: L.headerTitle,
                                          children: null == F ? void 0 : F.name
                                      })
                                  }),
                            (0, r.jsx)('div', {
                                className: o()(L.activityContainer, { [L.activityContainerNoMargin]: es }),
                                style: {
                                    paddingLeft: eo,
                                    paddingRight: eo,
                                    paddingTop: ea,
                                    paddingBottom: ea
                                },
                                ref: en,
                                children: (0, r.jsx)(Z.Z, {
                                    className: L.iframe,
                                    embedId: (0, A.Z)(U.id, F.id)
                                })
                            }),
                            null != eu
                                ? (0, r.jsxs)('div', {
                                      className: L.footer,
                                      children: [
                                          (0, r.jsx)(T.Z, {
                                              renderIcon: !1,
                                              users: ef,
                                              size: D,
                                              max: 6,
                                              className: L.userAvatars,
                                              renderUser: (e) => em(e, z)
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: L.footerButtons,
                                              children: [
                                                  H
                                                      ? null
                                                      : (0, r.jsx)(w.Z, {
                                                            channelId: eu,
                                                            className: L.circularButton
                                                        }),
                                                  H
                                                      ? (0, r.jsxs)('div', {
                                                            className: L.buttonSection,
                                                            children: [
                                                                (0, r.jsx)(w.Z, { channelId: eu }),
                                                                (0, r.jsx)(g.d, {
                                                                    label: k.NW.string(k.t.brPQ5e),
                                                                    onClick: K,
                                                                    iconComponent: c.dOc,
                                                                    themeable: !0
                                                                })
                                                            ]
                                                        })
                                                      : null,
                                                  (0, r.jsx)('div', {
                                                      className: L.leaveButtonContainer,
                                                      children: (0, r.jsx)(b.Z, {
                                                          applicationId: F.id,
                                                          location: U,
                                                          centerButton: !0,
                                                          color: 'disconnect',
                                                          className: H ? void 0 : L.leaveActivityButton
                                                      })
                                                  }),
                                                  H
                                                      ? null
                                                      : (0, r.jsx)(g.d, {
                                                            label: k.NW.string(k.t.brPQ5e),
                                                            onClick: K,
                                                            iconComponent: c.dOc,
                                                            themeable: !0,
                                                            className: L.circularButton
                                                        })
                                              ]
                                          }),
                                          (0, r.jsx)('div', { className: L.flex })
                                      ]
                                  })
                                : null
                        ]
                    }),
                    J
                        ? (0, r.jsx)(h.Z, {
                              minHeight: 480,
                              maxHeight: l,
                              resizableNode: X,
                              onResize: (e) => {
                                  v.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, { resizing: !0 }), ee(e);
                              },
                              onResizeEnd: (e) => {
                                  v.S.dispatch(M.CkL.MANUAL_IFRAME_RESIZING, { resizing: !1 }), et(e);
                              }
                          })
                        : null
                ]
            })
    });
}
