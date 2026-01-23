t.d(n, {
    A: () => J,
    d: () => $,
}),
    t(896048);
var r = t(627968),
    o = t(64700),
    a = t(503698),
    i = t.n(a),
    l = t(311907),
    c = t(3026),
    _ = t(990078),
    s = t(421380),
    d = t(397927),
    u = t(684013),
    p = t(58149),
    b = t(717048),
    f = t(587895),
    m = t(222506),
    v = t(87001),
    y = t(574172),
    h = t(253932),
    x = t(246356),
    A = t(459632),
    g = t(709562),
    C = t(423562),
    I = t(520006),
    O = t(128286),
    P = t(619344),
    k = t(734057),
    j = t(696451),
    N = t(287809),
    w = t(723702),
    T = t(427262),
    S = t(837921),
    E = t(475815),
    L = t(9302),
    R = t(795816),
    U = t(933958),
    D = t(57220),
    B = t(869003),
    W = t(104171),
    z = t(47294),
    G = t(246323),
    M = t(365995),
    K = t(16961),
    F = t(652215),
    V = t(985018),
    H = t(936106);
let Y = W.DN.SIZE_24;

function $(e) {
    let n,
        t,
        {
            hasActivity: a,
            applicationId: R,
            channelId: U,
            compositeInstanceId: B,
            userIds: $,
            isRichPresenceInvite: J,
            onConfirmClosePopout: Z,
        } = e,
        q = (0, l.bG)([f.A], () => f.A.getApplication(R)),
        X = (0, l.bG)([k.A], () => k.A.getChannel(U)),
        Q = h.Q_.useSetting(),
        ee = (0, l.yK)(
            [j.Ay],
            () =>
                null == X || null == $ ? [] : Array.from(null != $ ? $ : []).map((e) => j.Ay.getMember(X.guild_id, e)),
            [X, $],
        ),
        en = o.useMemo(() => {
            let e = new Map();
            return (
                ee.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [ee]),
        et = o.useCallback(
            (e, n) => {
                var t;
                if (null == e || e === W.mt) return null;
                let o = en.get(e.id),
                    a = null != (t = null == o ? void 0 : o.nick) ? t : T.Ay.getName(e);
                return (0, r.jsx)(
                    _.m,
                    {
                        asContainer: !0,
                        text: a,
                        position: "bottom",
                        children: (0, r.jsx)(
                            "img",
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, Y),
                                alt: a,
                                className: H.my,
                            },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [en],
        ),
        er = (0, l.yK)(
            [N.default],
            () =>
                Array.from(null != $ ? $ : [])
                    .map((e) => N.default.getUser(e))
                    .filter((e) => null != e),
            [$],
        ),
        eo = o.useCallback(() => {
            let e = (0, L.getPID)();
            u.A.setInputLocked(!m.A.isInputLocked(e), e);
        }, []),
        ea = (0, D.V)(),
        {
            canStayOnTop: ei,
            popoutWindowAlwaysOnTop: el,
            handleStayOnTop: ec,
        } = ((n = (0, l.bG)([v.A], () => v.A.getIsAlwaysOnTop(F.MLl.ACTIVITY_POPOUT))),
        (t = o.useCallback((e) => {
            y.setAlwaysOnTop(F.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: w.isPlatformEmbedded && S.Ay.supportsFeature(F.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: n,
            handleStayOnTop: t,
        }),
        e_ = (0, K.G)(),
        {
            rootNode: es,
            popoutWindow: ed,
            toggleFullScreen: eu,
        } = (function () {
            let { popoutWindow: e, currentDocument: n, rootNode: t } = (0, M.A)(),
                [r, a] = o.useState(!1),
                i = o.useCallback(() => {
                    null == t || (r && (a(!1), (0, E.sP)(t, n)));
                }, [t, n, r]),
                l = o.useCallback(() => {
                    null != t && (r ? i() : (a(!0), (0, E.tl)(t)));
                }, [t, r, i]),
                c = o.useCallback(() => {
                    null != t && !(0, E._U)(t, n) && r && l();
                }, [t, n, r, l]);
            return (
                o.useEffect(
                    () => (
                        null == n || n.addEventListener(E.Wb, c),
                        () => {
                            null == n || n.removeEventListener(E.Wb, c);
                        }
                    ),
                    [n, c],
                ),
                {
                    rootNode: t,
                    popoutWindow: e,
                    toggleFullScreen: l,
                }
            );
        })(),
        ep = o.useRef(null);
    if (null == q || !a) return null;
    let eb = (0, r.jsx)(b.A, {
        application: q,
        size: 24,
        className: H.Z2,
    });
    return (
        Q &&
            null != B &&
            (eb = (0, r.jsx)(_.m, {
                asContainer: !0,
                text: B,
                position: "bottom",
                children: eb,
            })),
        (0, r.jsx)(d.NPJ, {
            theme: F.NJ8.DARK,
            children: (e) =>
                (0, r.jsxs)("div", {
                    className: i()(H.kL, e),
                    children: [
                        (0, r.jsxs)("div", {
                            className: i()(H.ND, H.c8),
                            children: [
                                eb,
                                (0, r.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: H.SX,
                                    children: (0, r.jsx)(c.A, {
                                        children: q.name,
                                    }),
                                }),
                                er.length > 0
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", {
                                                  className: H.SC,
                                                  children: (0, r.jsx)(d.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, r.jsx)(W.Ay, {
                                                  renderIcon: !1,
                                                  users: er,
                                                  size: Y,
                                                  max: 6,
                                                  renderUser: (e) => et(e, X),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: i()(H.ND, H.fU),
                            children: [
                                (0, r.jsx)("div", {
                                    className: H.Rv,
                                }),
                                (0, r.jsxs)("div", {
                                    className: H.fc,
                                    children: [
                                        (0, r.jsx)(I.A, {
                                            appContext: F.BRT.POPOUT,
                                            applicationId: R,
                                            channel: X,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: J,
                                            iconClassName: H.NS,
                                            size: s.$n.Sizes.TINY,
                                            look: s.$n.Looks.FILLED,
                                            buttonText: V.intl.string(V.t["6F9ivu"]),
                                            color: s.$n.Colors.TRANSPARENT,
                                        }),
                                        ea
                                            ? (0, r.jsx)(g.A, {
                                                  onClick: eo,
                                                  iconComponent: d.ld1,
                                                  label: V.intl.string(V.t.mseZsD),
                                              })
                                            : null,
                                        ei
                                            ? (0, r.jsx)(P.A, {
                                                  popoutWindowAlwaysOnTop: el,
                                                  onToggleStayOnTop: ec,
                                              })
                                            : null,
                                        e_
                                            ? (0, r.jsx)(O.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, p.zV)(F.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, z.A)({
                                                              onConfirm: Z,
                                                          });
                                                  },
                                              })
                                            : null,
                                        (0, r.jsx)(C.A, {
                                            node: es,
                                            guestWindow: ed,
                                            onClick: eu,
                                        }),
                                        (0, r.jsx)(
                                            d.YNO,
                                            {
                                                targetElementRef: ep,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, r.jsx)(x.A, {
                                                        children: (0, r.jsx)(G.default, {
                                                            application: q,
                                                            channelId: U,
                                                            onClose: n,
                                                        }),
                                                    });
                                                },
                                                children: (e, n) => {
                                                    var t, r;
                                                    let { isShown: a } = n;
                                                    return (0, o.createElement)(
                                                        A.A,
                                                        ((t = (function (e) {
                                                            for (var n = 1; n < arguments.length; n++) {
                                                                var t = null != arguments[n] ? arguments[n] : {},
                                                                    r = Object.keys(t);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(t).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    t,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    r.forEach(function (n) {
                                                                        var r;
                                                                        (r = t[n]),
                                                                            n in e
                                                                                ? Object.defineProperty(e, n, {
                                                                                      value: r,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[n] = r);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (r = r =
                                                            {
                                                                buttonRef: ep,
                                                                key: "more-options",
                                                                isActive: a,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  t,
                                                                  Object.getOwnPropertyDescriptors(r),
                                                              )
                                                            : (function (e, n) {
                                                                  var t = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      t.push.apply(t, r);
                                                                  }
                                                                  return t;
                                                              })(Object(r)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      t,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(r, e),
                                                                  );
                                                              }),
                                                        t),
                                                    );
                                                },
                                            },
                                            "more-options-popout",
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
        })
    );
}

function J(e) {
    let { applicationId: n, channelId: t } = e,
        a = (0, l.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities().get(n)),
        i = o.useCallback(async () => {
            await (0, R.od)(n, null != t ? t : null), B.A.popInActivity();
        }, [n, t]);
    return (0, r.jsx)($, {
        hasActivity: null != a,
        applicationId: n,
        channelId: t,
        compositeInstanceId: null == a ? void 0 : a.compositeInstanceId,
        userIds: null == a ? void 0 : a.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: i,
    });
}
