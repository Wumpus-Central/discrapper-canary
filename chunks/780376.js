n.d(t, { A: () => Z, d: () => $ });
var a = n(627968),
    i = n(64700),
    o = n(503698),
    r = n.n(o),
    l = n(311907),
    c = n(3026),
    _ = n(990078),
    s = n(421380),
    d = n(397927),
    u = n(684013),
    p = n(58149),
    m = n(717048),
    b = n(587895),
    A = n(222506),
    x = n(87001),
    h = n(574172),
    f = n(253932),
    C = n(246356),
    v = n(459632),
    I = n(709562),
    g = n(423562),
    y = n(520006),
    k = n(128286),
    T = n(619344),
    N = n(734057),
    P = n(696451),
    j = n(287809),
    S = n(723702),
    O = n(427262),
    L = n(837921),
    w = n(475815),
    E = n(9302),
    R = n(795816),
    U = n(933958),
    z = n(57220),
    D = n(869003),
    G = n(104171),
    W = n(47294),
    B = n(246323),
    F = n(365995),
    K = n(16961),
    M = n(652215),
    V = n(985018),
    Y = n(250849);
let H = G.DN.SIZE_24;
function $(e) {
    let t,
        n,
        {
            hasActivity: o,
            applicationId: R,
            channelId: U,
            compositeInstanceId: D,
            userIds: $,
            isRichPresenceInvite: Z,
            onConfirmClosePopout: J,
        } = e,
        q = (0, l.bG)([b.A], () => b.A.getApplication(R)),
        X = (0, l.bG)([N.A], () => N.A.getChannel(U)),
        Q = f.Q_.useSetting(),
        ee = (0, l.yK)(
            [P.Ay],
            () => (null == X || null == $ ? [] : Array.from($ ?? []).map((e) => P.Ay.getMember(X.guild_id, e))),
            [X, $],
        ),
        et = i.useMemo(() => {
            let e = new Map();
            return (
                ee.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [ee]),
        en = i.useCallback(
            (e, t) => {
                if (null == e || e === G.mt) return null;
                let n = et.get(e.id),
                    i = n?.nick ?? O.Ay.getName(e);
                return (0, a.jsx)(
                    _.m,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, a.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, H), alt: i, className: Y.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [et],
        ),
        ea = (0, l.yK)(
            [j.default],
            () =>
                Array.from($ ?? [])
                    .map((e) => j.default.getUser(e))
                    .filter((e) => null != e),
            [$],
        ),
        ei = i.useCallback(() => {
            let e = (0, E.getPID)();
            u.A.setInputLocked(!A.A.isInputLocked(e), e);
        }, []),
        eo = (0, z.V)(),
        {
            canStayOnTop: er,
            popoutWindowAlwaysOnTop: el,
            handleStayOnTop: ec,
        } = ((t = (0, l.bG)([x.A], () => x.A.getIsAlwaysOnTop(M.MLl.ACTIVITY_POPOUT))),
        (n = i.useCallback((e) => {
            h.setAlwaysOnTop(M.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: S.isPlatformEmbedded && L.Ay.supportsFeature(M.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        e_ = (0, K.G)(),
        {
            rootNode: es,
            popoutWindow: ed,
            toggleFullScreen: eu,
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, F.A)(),
                [a, o] = i.useState(!1),
                r = i.useCallback(() => {
                    null == n || (a && (o(!1), (0, w.sP)(n, t)));
                }, [n, t, a]),
                l = i.useCallback(() => {
                    null != n && (a ? r() : (o(!0), (0, w.tl)(n)));
                }, [n, a, r]),
                c = i.useCallback(() => {
                    null != n && !(0, w._U)(n, t) && a && l();
                }, [n, t, a, l]);
            return (
                i.useEffect(
                    () => (
                        t?.addEventListener(w.Wb, c),
                        () => {
                            t?.removeEventListener(w.Wb, c);
                        }
                    ),
                    [t, c],
                ),
                { rootNode: n, popoutWindow: e, toggleFullScreen: l }
            );
        })(),
        ep = i.useRef(null);
    if (null == q || !o) return null;
    let em = (0, a.jsx)(m.A, { application: q, size: 24, className: Y.Z2 });
    return (
        Q && null != D && (em = (0, a.jsx)(_.m, { asContainer: !0, text: D, position: "bottom", children: em })),
        (0, a.jsx)(d.NPJ, {
            theme: M.NJ8.DARK,
            children: (e) =>
                (0, a.jsxs)("div", {
                    className: r()(Y.kL, e),
                    children: [
                        (0, a.jsxs)("div", {
                            className: r()(Y.ND, Y.c8),
                            children: [
                                em,
                                (0, a.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: Y.SX,
                                    children: (0, a.jsx)(c.A, { children: q.name }),
                                }),
                                ea.length > 0
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)("div", {
                                                  className: Y.SC,
                                                  children: (0, a.jsx)(d.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, a.jsx)(G.Ay, {
                                                  renderIcon: !1,
                                                  users: ea,
                                                  size: H,
                                                  max: 6,
                                                  renderUser: (e) => en(e, X),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: r()(Y.ND, Y.fU),
                            children: [
                                (0, a.jsx)("div", { className: Y.Rv }),
                                (0, a.jsxs)("div", {
                                    className: Y.fc,
                                    children: [
                                        (0, a.jsx)(y.A, {
                                            appContext: M.BRT.POPOUT,
                                            applicationId: R,
                                            channel: X,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: Z,
                                            iconClassName: Y.NS,
                                            size: s.$n.Sizes.TINY,
                                            look: s.$n.Looks.FILLED,
                                            buttonText: V.intl.string(V.t["6F9ivu"]),
                                            color: s.$n.Colors.TRANSPARENT,
                                        }),
                                        eo
                                            ? (0, a.jsx)(I.A, {
                                                  onClick: ei,
                                                  iconComponent: d.ld1,
                                                  label: V.intl.string(V.t.mseZsD),
                                              })
                                            : null,
                                        er
                                            ? (0, a.jsx)(T.A, { popoutWindowAlwaysOnTop: el, onToggleStayOnTop: ec })
                                            : null,
                                        e_
                                            ? (0, a.jsx)(k.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, p.zV)(M.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, W.A)({ onConfirm: J });
                                                  },
                                              })
                                            : null,
                                        (0, a.jsx)(g.A, { node: es, guestWindow: ed, onClick: eu }),
                                        (0, a.jsx)(
                                            d.YNO,
                                            {
                                                targetElementRef: ep,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, a.jsx)(C.A, {
                                                        children: (0, a.jsx)(B.default, {
                                                            application: q,
                                                            channelId: U,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, i.createElement)(v.A, {
                                                        ...e,
                                                        buttonRef: ep,
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
        o = (0, l.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities().get(t)),
        r = i.useCallback(async () => {
            await (0, R.od)(t, n ?? null), D.A.popInActivity();
        }, [t, n]);
    return (0, a.jsx)($, {
        hasActivity: null != o,
        applicationId: t,
        channelId: n,
        compositeInstanceId: o?.compositeInstanceId,
        userIds: o?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: r,
    });
}
