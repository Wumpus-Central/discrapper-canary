n.d(t, { A: () => B, d: () => M });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(311907),
    s = n(3026),
    c = n(990078),
    d = n(421380),
    u = n(397927),
    p = n(58149),
    A = n(717048),
    m = n(587895),
    f = n(87001),
    x = n(574172),
    I = n(253932),
    h = n(246356),
    v = n(459632),
    _ = n(423562),
    y = n(520006),
    C = n(128286),
    b = n(619344),
    g = n(734057),
    j = n(696451),
    P = n(287809),
    T = n(723702),
    N = n(427262),
    k = n(837921),
    O = n(475815),
    S = n(795816),
    w = n(933958),
    E = n(869003),
    L = n(104171),
    R = n(47294),
    U = n(246323),
    G = n(365995),
    D = n(16961),
    F = n(652215),
    W = n(985018),
    Y = n(250849);
let K = L.DN.SIZE_24;
function M(e) {
    let t,
        n,
        {
            hasActivity: a,
            applicationId: S,
            channelId: w,
            compositeInstanceId: E,
            userIds: M,
            isRichPresenceInvite: B,
            onConfirmClosePopout: z,
        } = e,
        V = (0, o.bG)([m.A], () => m.A.getApplication(S)),
        $ = (0, o.bG)([g.A], () => g.A.getChannel(w)),
        q = I.Q_.useSetting(),
        H = (0, o.yK)(
            [j.Ay],
            () => (null == $ || null == M ? [] : Array.from(M ?? []).map((e) => j.Ay.getMember($.guild_id, e))),
            [$, M],
        ),
        X = l.useMemo(() => {
            let e = new Map();
            return (
                H.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [H]),
        Z = l.useCallback(
            (e, t) => {
                if (null == e || e === L.mt) return null;
                let n = X.get(e.id),
                    l = n?.nick ?? N.Ay.getName(e);
                return (0, i.jsx)(
                    c.m,
                    {
                        asContainer: !0,
                        text: l,
                        position: "bottom",
                        children: (0, i.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, K), alt: l, className: Y.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [X],
        ),
        J = (0, o.yK)(
            [P.default],
            () =>
                Array.from(M ?? [])
                    .map((e) => P.default.getUser(e))
                    .filter((e) => null != e),
            [M],
        ),
        {
            canStayOnTop: Q,
            popoutWindowAlwaysOnTop: ee,
            handleStayOnTop: et,
        } = ((t = (0, o.bG)([f.A], () => f.A.getIsAlwaysOnTop(F.MLl.ACTIVITY_POPOUT))),
        (n = l.useCallback((e) => {
            x.setAlwaysOnTop(F.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: T.isPlatformEmbedded && k.Ay.supportsFeature(F.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        en = (0, D.G)(),
        {
            rootNode: ei,
            popoutWindow: el,
            toggleFullScreen: ea,
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, G.A)(),
                [i, a] = l.useState(!1),
                r = l.useCallback(() => {
                    null == n || (i && (a(!1), (0, O.sP)(n, t)));
                }, [n, t, i]),
                o = l.useCallback(() => {
                    null != n && (i ? r() : (a(!0), (0, O.tl)(n)));
                }, [n, i, r]),
                s = l.useCallback(() => {
                    null != n && !(0, O._U)(n, t) && i && o();
                }, [n, t, i, o]);
            return (
                l.useEffect(
                    () => (
                        t?.addEventListener(O.Wb, s),
                        () => {
                            t?.removeEventListener(O.Wb, s);
                        }
                    ),
                    [t, s],
                ),
                { rootNode: n, popoutWindow: e, toggleFullScreen: o }
            );
        })(),
        er = l.useRef(null);
    if (null == V || !a) return null;
    let eo = (0, i.jsx)(A.A, { application: V, size: 24, className: Y.Z2 });
    return (
        q && null != E && (eo = (0, i.jsx)(c.m, { asContainer: !0, text: E, position: "bottom", children: eo })),
        (0, i.jsx)(u.NPJ, {
            theme: F.NJ8.DARK,
            children: (e) =>
                (0, i.jsxs)("div", {
                    className: r()(Y.kL, e),
                    children: [
                        (0, i.jsxs)("div", {
                            className: r()(Y.ND, Y.c8),
                            children: [
                                eo,
                                (0, i.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: Y.SX,
                                    children: (0, i.jsx)(s.A, { children: V.name }),
                                }),
                                J.length > 0
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: Y.SC,
                                                  children: (0, i.jsx)(u.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, i.jsx)(L.Ay, {
                                                  renderIcon: !1,
                                                  users: J,
                                                  size: K,
                                                  max: 6,
                                                  renderUser: (e) => Z(e, $),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, i.jsxs)("div", {
                            className: r()(Y.ND, Y.fU),
                            children: [
                                (0, i.jsx)("div", { className: Y.Rv }),
                                (0, i.jsxs)("div", {
                                    className: Y.fc,
                                    children: [
                                        (0, i.jsx)(y.A, {
                                            appContext: F.BRT.POPOUT,
                                            applicationId: S,
                                            channel: $,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: B,
                                            iconClassName: Y.NS,
                                            size: d.$n.Sizes.TINY,
                                            look: d.$n.Looks.FILLED,
                                            buttonText: W.intl.string(W.t["6F9ivu"]),
                                            color: d.$n.Colors.TRANSPARENT,
                                        }),
                                        Q
                                            ? (0, i.jsx)(b.A, { popoutWindowAlwaysOnTop: ee, onToggleStayOnTop: et })
                                            : null,
                                        en
                                            ? (0, i.jsx)(C.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, p.zV)(F.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, R.A)({ onConfirm: z });
                                                  },
                                              })
                                            : null,
                                        (0, i.jsx)(_.A, { node: ei, guestWindow: el, onClick: ea }),
                                        (0, i.jsx)(
                                            u.YNO,
                                            {
                                                targetElementRef: er,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, i.jsx)(h.A, {
                                                        children: (0, i.jsx)(U.default, {
                                                            application: V,
                                                            channelId: w,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, l.createElement)(v.A, {
                                                        ...e,
                                                        buttonRef: er,
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
function B(e) {
    let { applicationId: t, channelId: n } = e,
        a = (0, o.bG)([w.Ay], () => w.Ay.getSelfEmbeddedActivities().get(t)),
        r = l.useCallback(async () => {
            await (0, S.od)(t, n ?? null), E.A.popInActivity();
        }, [t, n]);
    return (0, i.jsx)(M, {
        hasActivity: null != a,
        applicationId: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
