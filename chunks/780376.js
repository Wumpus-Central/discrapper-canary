n.d(t, { A: () => Z, d: () => K });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(311907),
    s = n(3026),
    c = n(990078),
    d = n(862482),
    u = n(43990),
    p = n(834730),
    A = n(265872),
    m = n(58149),
    h = n(717048),
    x = n(587895),
    v = n(87001),
    f = n(574172),
    I = n(253932),
    g = n(246356),
    C = n(459632),
    _ = n(423562),
    y = n(520006),
    b = n(128286),
    j = n(619344),
    T = n(734057),
    N = n(696451),
    P = n(287809),
    w = n(723702),
    k = n(427262),
    O = n(837921),
    E = n(475815),
    L = n(795816),
    R = n(933958),
    S = n(869003),
    U = n(104171),
    M = n(47294),
    G = n(246323),
    D = n(365995),
    W = n(16961),
    F = n(652215),
    V = n(985018),
    Y = n(316561);
let B = U.DN.SIZE_24;
function K(e) {
    let t,
        n,
        {
            hasActivity: a,
            applicationId: L,
            channelId: R,
            compositeInstanceId: S,
            userIds: K,
            isRichPresenceInvite: Z,
            onConfirmClosePopout: q,
        } = e,
        H = (0, o.bG)([x.A], () => x.A.getApplication(L)),
        z = (0, o.bG)([T.A], () => T.A.getChannel(R)),
        $ = I.Q_.useSetting(),
        X = (0, o.yK)(
            [N.Ay],
            () => (null == z || null == K ? [] : Array.from(K ?? []).map((e) => N.Ay.getMember(z.guild_id, e))),
            [z, K],
        ),
        J = i.useMemo(() => {
            let e = new Map();
            return (
                X.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [X]),
        Q = i.useCallback(
            (e, t) => {
                if (null == e || e === U.mt) return null;
                let n = J.get(e.id),
                    i = n?.nick ?? k.Ay.getName(e);
                return (0, l.jsx)(
                    c.m,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, l.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, B), alt: i, className: Y.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [J],
        ),
        ee = (0, o.yK)(
            [P.default],
            () =>
                Array.from(K ?? [])
                    .map((e) => P.default.getUser(e))
                    .filter((e) => null != e),
            [K],
        ),
        {
            canStayOnTop: et,
            popoutWindowAlwaysOnTop: en,
            handleStayOnTop: el,
        } = ((t = (0, o.bG)([v.A], () => v.A.getIsAlwaysOnTop(F.MLl.ACTIVITY_POPOUT))),
        (n = i.useCallback((e) => {
            f.setAlwaysOnTop(F.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: w.isPlatformEmbedded && O.Ay.supportsFeature(F.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        ei = (0, W.G)(),
        {
            rootNode: ea,
            popoutWindow: er,
            toggleFullScreen: eo,
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, D.A)(),
                [l, a] = i.useState(!1),
                r = i.useCallback(() => {
                    null == n || (l && (a(!1), (0, E.sP)(n, t)));
                }, [n, t, l]),
                o = i.useCallback(() => {
                    null != n && (l ? r() : (a(!0), (0, E.tl)(n)));
                }, [n, l, r]),
                s = i.useCallback(() => {
                    null != n && !(0, E._U)(n, t) && l && o();
                }, [n, t, l, o]);
            return (
                i.useEffect(
                    () => (
                        t?.addEventListener(E.Wb, s),
                        () => {
                            t?.removeEventListener(E.Wb, s);
                        }
                    ),
                    [t, s],
                ),
                { rootNode: n, popoutWindow: e, toggleFullScreen: o }
            );
        })(),
        es = i.useRef(null);
    if (null == H || !a) return null;
    let ec = (0, l.jsx)(h.A, { application: H, size: 24, className: Y.Z2 });
    return (
        $ && null != S && (ec = (0, l.jsx)(c.m, { asContainer: !0, text: S, position: "bottom", children: ec })),
        (0, l.jsx)(u.N, {
            theme: F.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: r()(Y.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: r()(Y.ND, Y.c8),
                            children: [
                                ec,
                                (0, l.jsx)(p.E, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: Y.SX,
                                    children: (0, l.jsx)(s.A, { children: H.name }),
                                }),
                                ee.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: Y.SC,
                                                  children: (0, l.jsx)(p.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, l.jsx)(U.Ay, {
                                                  renderIcon: !1,
                                                  users: ee,
                                                  size: B,
                                                  max: 6,
                                                  renderUser: (e) => Q(e, z),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: r()(Y.ND, Y.fU),
                            children: [
                                (0, l.jsx)("div", { className: Y.Rv }),
                                (0, l.jsxs)("div", {
                                    className: Y.fc,
                                    children: [
                                        (0, l.jsx)(y.A, {
                                            appContext: F.BRT.POPOUT,
                                            applicationId: L,
                                            channel: z,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: Z,
                                            iconClassName: Y.NS,
                                            size: d.$n.Sizes.TINY,
                                            look: d.$n.Looks.FILLED,
                                            buttonText: V.intl.string(V.t["6F9ivu"]),
                                            color: d.$n.Colors.TRANSPARENT,
                                        }),
                                        et
                                            ? (0, l.jsx)(j.A, { popoutWindowAlwaysOnTop: en, onToggleStayOnTop: el })
                                            : null,
                                        ei
                                            ? (0, l.jsx)(b.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, m.zV)(F.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, M.A)({ onConfirm: q });
                                                  },
                                              })
                                            : null,
                                        (0, l.jsx)(_.A, { node: ea, guestWindow: er, onClick: eo }),
                                        (0, l.jsx)(
                                            A.Y,
                                            {
                                                targetElementRef: es,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, l.jsx)(g.A, {
                                                        children: (0, l.jsx)(G.default, {
                                                            application: H,
                                                            channelId: R,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, i.createElement)(C.A, {
                                                        ...e,
                                                        buttonRef: es,
                                                        key: "more-options",
                                                        isActive: n,
                                                    });
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
function Z(e) {
    let { applicationId: t, channelId: n } = e,
        a = (0, o.bG)([R.Ay], () => R.Ay.getSelfEmbeddedActivities().get(t)),
        r = i.useCallback(async () => {
            await (0, L.od)(t, n ?? null), S.A.popInActivity();
        }, [t, n]);
    return (0, l.jsx)(K, {
        hasActivity: null != a,
        applicationId: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
