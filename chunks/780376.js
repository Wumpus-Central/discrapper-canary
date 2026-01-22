a.d(t, {
    A: () => J,
    d: () => B,
}),
    a(896048);
var c = a(627968),
    n = a(64700),
    l = a(503698),
    d = a.n(l),
    r = a(311907),
    o = a(3026),
    i = a(990078),
    f = a(421380),
    b = a(397927),
    s = a(684013),
    u = a(58149),
    p = a(717048),
    _ = a(587895),
    m = a(222506),
    x = a(87001),
    A = a(574172),
    v = a(253932),
    y = a(246356),
    O = a(459632),
    j = a(709562),
    P = a(423562),
    I = a(520006),
    g = a(128286),
    h = a(619344),
    k = a(734057),
    C = a(696451),
    T = a(287809),
    N = a(723702),
    w = a(427262),
    E = a(837921),
    S = a(475815),
    L = a(9302),
    R = a(795816),
    U = a(933958),
    G = a(57220),
    D = a(869003),
    K = a(104171),
    M = a(47294),
    V = a(246323),
    z = a(365995),
    F = a(16961),
    W = a(652215),
    Y = a(985018),
    H = a(936106);
let $ = K.DN.SIZE_24;

function B(e) {
    let t,
        a,
        {
            hasActivity: l,
            applicationId: R,
            channelId: U,
            compositeInstanceId: D,
            userIds: B,
            isRichPresenceInvite: J,
            onConfirmClosePopout: q,
        } = e,
        Z = (0, r.bG)([_.A], () => _.A.getApplication(R)),
        X = (0, r.bG)([k.A], () => k.A.getChannel(U)),
        Q = v.Q_.useSetting(),
        ee = (0, r.yK)(
            [C.Ay],
            () =>
                null == X || null == B ? [] : Array.from(null != B ? B : []).map((e) => C.Ay.getMember(X.guild_id, e)),
            [X, B],
        ),
        et = n.useMemo(() => {
            let e = new Map();
            return (
                ee.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ee]),
        ea = n.useCallback(
            (e, t) => {
                var a;
                if (null == e || e === K.mt) return null;
                let n = et.get(e.id),
                    l = null != (a = null == n ? void 0 : n.nick) ? a : w.Ay.getName(e);
                return (0, c.jsx)(
                    i.m,
                    {
                        asContainer: !0,
                        text: l,
                        position: "bottom",
                        children: (0, c.jsx)(
                            "img",
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, $),
                                alt: l,
                                className: H.my,
                            },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [et],
        ),
        ec = (0, r.yK)(
            [T.default],
            () =>
                Array.from(null != B ? B : [])
                    .map((e) => T.default.getUser(e))
                    .filter((e) => null != e),
            [B],
        ),
        en = n.useCallback(() => {
            let e = (0, L.getPID)();
            s.A.setInputLocked(!m.A.isInputLocked(e), e);
        }, []),
        el = (0, G.V)(),
        {
            canStayOnTop: ed,
            popoutWindowAlwaysOnTop: er,
            handleStayOnTop: eo,
        } = ((t = (0, r.bG)([x.A], () => x.A.getIsAlwaysOnTop(W.MLl.ACTIVITY_POPOUT))),
        (a = n.useCallback((e) => {
            A.setAlwaysOnTop(W.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: N.isPlatformEmbedded && E.Ay.supportsFeature(W.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: a,
        }),
        ei = (0, F.G)(),
        {
            rootNode: ef,
            popoutWindow: eb,
            toggleFullScreen: es,
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: a } = (0, z.A)(),
                [c, l] = n.useState(!1),
                d = n.useCallback(() => {
                    null == a || (c && (l(!1), (0, S.sP)(a, t)));
                }, [a, t, c]),
                r = n.useCallback(() => {
                    null != a && (c ? d() : (l(!0), (0, S.tl)(a)));
                }, [a, c, d]),
                o = n.useCallback(() => {
                    null != a && !(0, S._U)(a, t) && c && r();
                }, [a, t, c, r]);
            return (
                n.useEffect(
                    () => (
                        null == t || t.addEventListener(S.Wb, o),
                        () => {
                            null == t || t.removeEventListener(S.Wb, o);
                        }
                    ),
                    [t, o],
                ),
                {
                    rootNode: a,
                    popoutWindow: e,
                    toggleFullScreen: r,
                }
            );
        })(),
        eu = n.useRef(null);
    if (null == Z || !l) return null;
    let ep = (0, c.jsx)(p.A, {
        application: Z,
        size: 24,
        className: H.Z2,
    });
    return (
        Q &&
            null != D &&
            (ep = (0, c.jsx)(i.m, {
                asContainer: !0,
                text: D,
                position: "bottom",
                children: ep,
            })),
        (0, c.jsx)(b.NPJ, {
            theme: W.NJ8.DARK,
            children: (e) =>
                (0, c.jsxs)("div", {
                    className: d()(H.kL, e),
                    children: [
                        (0, c.jsxs)("div", {
                            className: d()(H.ND, H.c8),
                            children: [
                                ep,
                                (0, c.jsx)(b.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: H.SX,
                                    children: (0, c.jsx)(o.A, {
                                        children: Z.name,
                                    }),
                                }),
                                ec.length > 0
                                    ? (0, c.jsxs)(c.Fragment, {
                                          children: [
                                              (0, c.jsx)("div", {
                                                  className: H.SC,
                                                  children: (0, c.jsx)(b.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, c.jsx)(K.Ay, {
                                                  renderIcon: !1,
                                                  users: ec,
                                                  size: $,
                                                  max: 6,
                                                  renderUser: (e) => ea(e, X),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, c.jsxs)("div", {
                            className: d()(H.ND, H.fU),
                            children: [
                                (0, c.jsx)("div", {
                                    className: H.Rv,
                                }),
                                (0, c.jsxs)("div", {
                                    className: H.fc,
                                    children: [
                                        (0, c.jsx)(I.A, {
                                            appContext: W.BRT.POPOUT,
                                            applicationId: R,
                                            channel: X,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: J,
                                            iconClassName: H.NS,
                                            size: f.$n.Sizes.TINY,
                                            look: f.$n.Looks.FILLED,
                                            buttonText: Y.intl.string(Y.t["6F9ivu"]),
                                            color: f.$n.Colors.TRANSPARENT,
                                        }),
                                        el
                                            ? (0, c.jsx)(j.A, {
                                                  onClick: en,
                                                  iconComponent: b.ld1,
                                                  label: Y.intl.string(Y.t.mseZsD),
                                              })
                                            : null,
                                        ed
                                            ? (0, c.jsx)(h.A, {
                                                  popoutWindowAlwaysOnTop: er,
                                                  onToggleStayOnTop: eo,
                                              })
                                            : null,
                                        ei
                                            ? (0, c.jsx)(g.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, u.zV)(W.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, M.A)({
                                                              onConfirm: q,
                                                          });
                                                  },
                                              })
                                            : null,
                                        (0, c.jsx)(P.A, {
                                            node: ef,
                                            guestWindow: eb,
                                            onClick: es,
                                        }),
                                        (0, c.jsx)(
                                            b.YNO,
                                            {
                                                targetElementRef: eu,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, c.jsx)(y.A, {
                                                        children: (0, c.jsx)(V.A, {
                                                            application: Z,
                                                            channelId: U,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    var a, c;
                                                    let { isShown: l } = t;
                                                    return (0, n.createElement)(
                                                        O.A,
                                                        ((a = (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var a = null != arguments[t] ? arguments[t] : {},
                                                                    c = Object.keys(a);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (c = c.concat(
                                                                        Object.getOwnPropertySymbols(a).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    a,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
                                                                    )),
                                                                    c.forEach(function (t) {
                                                                        var c;
                                                                        (c = a[t]),
                                                                            t in e
                                                                                ? Object.defineProperty(e, t, {
                                                                                      value: c,
                                                                                      enumerable: !0,
                                                                                      configurable: !0,
                                                                                      writable: !0,
                                                                                  })
                                                                                : (e[t] = c);
                                                                    });
                                                            }
                                                            return e;
                                                        })({}, e)),
                                                        (c = c =
                                                            {
                                                                buttonRef: eu,
                                                                key: "more-options",
                                                                isActive: l,
                                                            }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  a,
                                                                  Object.getOwnPropertyDescriptors(c),
                                                              )
                                                            : (function (e, t) {
                                                                  var a = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var c = Object.getOwnPropertySymbols(e);
                                                                      a.push.apply(a, c);
                                                                  }
                                                                  return a;
                                                              })(Object(c)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      a,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(c, e),
                                                                  );
                                                              }),
                                                        a),
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
    let { applicationId: t, channelId: a } = e,
        l = (0, r.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities().get(t)),
        d = n.useCallback(async () => {
            await (0, R.od)(t, null != a ? a : null), D.A.popInActivity();
        }, [t, a]);
    return (0, c.jsx)(B, {
        hasActivity: null != l,
        applicationId: t,
        channelId: a,
        compositeInstanceId: null == l ? void 0 : l.compositeInstanceId,
        userIds: null == l ? void 0 : l.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: d,
    });
}
