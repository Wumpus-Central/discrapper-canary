n.d(t, { A: () => H, d: () => q });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    r = n(311907),
    s = n(3026),
    c = n(990078),
    d = n(421380),
    u = n(397927),
    p = n(684013),
    A = n(58149),
    m = n(717048),
    x = n(587895),
    f = n(222506),
    I = n(87001),
    h = n(574172),
    v = n(253932),
    C = n(246356),
    y = n(459632),
    _ = n(709562),
    b = n(423562),
    g = n(520006),
    j = n(128286),
    P = n(619344),
    T = n(734057),
    N = n(696451),
    k = n(287809),
    O = n(723702),
    S = n(427262),
    L = n(837921),
    w = n(475815),
    E = n(9302),
    R = n(795816),
    U = n(933958),
    G = n(57220),
    D = n(869003),
    F = n(104171),
    W = n(47294),
    Y = n(246323),
    K = n(365995),
    M = n(16961),
    B = n(652215),
    V = n(985018),
    z = n(936106);
let $ = F.DN.SIZE_24;
function q(e) {
    let t,
        n,
        {
            hasActivity: a,
            applicationId: R,
            channelId: U,
            compositeInstanceId: D,
            userIds: q,
            isRichPresenceInvite: H,
            onConfirmClosePopout: Z,
        } = e,
        X = (0, r.bG)([x.A], () => x.A.getApplication(R)),
        J = (0, r.bG)([T.A], () => T.A.getChannel(U)),
        Q = v.Q_.useSetting(),
        ee = (0, r.yK)(
            [N.Ay],
            () => (null == J || null == q ? [] : Array.from(q ?? []).map((e) => N.Ay.getMember(J.guild_id, e))),
            [J, q],
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
                if (null == e || e === F.mt) return null;
                let n = et.get(e.id),
                    i = n?.nick ?? S.Ay.getName(e);
                return (0, l.jsx)(
                    c.m,
                    {
                        asContainer: !0,
                        text: i,
                        position: "bottom",
                        children: (0, l.jsx)(
                            "img",
                            { src: e.getAvatarURL(t?.guild_id, $), alt: i, className: z.my },
                            e.id,
                        ),
                    },
                    e.id,
                );
            },
            [et],
        ),
        el = (0, r.yK)(
            [k.default],
            () =>
                Array.from(q ?? [])
                    .map((e) => k.default.getUser(e))
                    .filter((e) => null != e),
            [q],
        ),
        ei = i.useCallback(() => {
            let e = (0, E.getPID)();
            p.A.setInputLocked(!f.A.isInputLocked(e), e);
        }, []),
        ea = (0, G.V)(),
        {
            canStayOnTop: eo,
            popoutWindowAlwaysOnTop: er,
            handleStayOnTop: es,
        } = ((t = (0, r.bG)([I.A], () => I.A.getIsAlwaysOnTop(B.MLl.ACTIVITY_POPOUT))),
        (n = i.useCallback((e) => {
            h.setAlwaysOnTop(B.MLl.ACTIVITY_POPOUT, e);
        }, [])),
        {
            canStayOnTop: O.isPlatformEmbedded && L.Ay.supportsFeature(B.BYE.POPOUT_WINDOWS),
            popoutWindowAlwaysOnTop: t,
            handleStayOnTop: n,
        }),
        ec = (0, M.G)(),
        {
            rootNode: ed,
            popoutWindow: eu,
            toggleFullScreen: ep,
        } = (function () {
            let { popoutWindow: e, currentDocument: t, rootNode: n } = (0, K.A)(),
                [l, a] = i.useState(!1),
                o = i.useCallback(() => {
                    null == n || (l && (a(!1), (0, w.sP)(n, t)));
                }, [n, t, l]),
                r = i.useCallback(() => {
                    null != n && (l ? o() : (a(!0), (0, w.tl)(n)));
                }, [n, l, o]),
                s = i.useCallback(() => {
                    null != n && !(0, w._U)(n, t) && l && r();
                }, [n, t, l, r]);
            return (
                i.useEffect(
                    () => (
                        t?.addEventListener(w.Wb, s),
                        () => {
                            t?.removeEventListener(w.Wb, s);
                        }
                    ),
                    [t, s],
                ),
                { rootNode: n, popoutWindow: e, toggleFullScreen: r }
            );
        })(),
        eA = i.useRef(null);
    if (null == X || !a) return null;
    let em = (0, l.jsx)(m.A, { application: X, size: 24, className: z.Z2 });
    return (
        Q && null != D && (em = (0, l.jsx)(c.m, { asContainer: !0, text: D, position: "bottom", children: em })),
        (0, l.jsx)(u.NPJ, {
            theme: B.NJ8.DARK,
            children: (e) =>
                (0, l.jsxs)("div", {
                    className: o()(z.kL, e),
                    children: [
                        (0, l.jsxs)("div", {
                            className: o()(z.ND, z.c8),
                            children: [
                                em,
                                (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-strong",
                                    className: z.SX,
                                    children: (0, l.jsx)(s.A, { children: X.name }),
                                }),
                                el.length > 0
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("div", {
                                                  className: z.SC,
                                                  children: (0, l.jsx)(u.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: ".",
                                                  }),
                                              }),
                                              (0, l.jsx)(F.Ay, {
                                                  renderIcon: !1,
                                                  users: el,
                                                  size: $,
                                                  max: 6,
                                                  renderUser: (e) => en(e, J),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, l.jsxs)("div", {
                            className: o()(z.ND, z.fU),
                            children: [
                                (0, l.jsx)("div", { className: z.Rv }),
                                (0, l.jsxs)("div", {
                                    className: z.fc,
                                    children: [
                                        (0, l.jsx)(g.A, {
                                            appContext: B.BRT.POPOUT,
                                            applicationId: R,
                                            channel: J,
                                            shouldPrioritizeGroupPlusIcon: !0,
                                            isRichPresenceInvite: H,
                                            iconClassName: z.NS,
                                            size: d.$n.Sizes.TINY,
                                            look: d.$n.Looks.FILLED,
                                            buttonText: V.intl.string(V.t["6F9ivu"]),
                                            color: d.$n.Colors.TRANSPARENT,
                                        }),
                                        ea
                                            ? (0, l.jsx)(_.A, {
                                                  onClick: ei,
                                                  iconComponent: u.ld1,
                                                  label: V.intl.string(V.t.mseZsD),
                                              })
                                            : null,
                                        eo
                                            ? (0, l.jsx)(P.A, { popoutWindowAlwaysOnTop: er, onToggleStayOnTop: es })
                                            : null,
                                        ec
                                            ? (0, l.jsx)(j.A, {
                                                  popoutOpen: !0,
                                                  onOpenPopout: () => {},
                                                  onClosePopout: () => {
                                                      (0, A.zV)(B.HAw.ACTIVITY_POPOUT_POP_IN_BUTTON_CLICKED),
                                                          (0, W.A)({ onConfirm: Z });
                                                  },
                                              })
                                            : null,
                                        (0, l.jsx)(b.A, { node: ed, guestWindow: eu, onClick: ep }),
                                        (0, l.jsx)(
                                            u.YNO,
                                            {
                                                targetElementRef: eA,
                                                position: "bottom",
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, l.jsx)(C.A, {
                                                        children: (0, l.jsx)(Y.default, {
                                                            application: X,
                                                            channelId: U,
                                                            onClose: t,
                                                        }),
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, i.createElement)(y.A, {
                                                        ...e,
                                                        buttonRef: eA,
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
function H(e) {
    let { applicationId: t, channelId: n } = e,
        a = (0, r.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities().get(t)),
        o = i.useCallback(async () => {
            await (0, R.od)(t, n ?? null), D.A.popInActivity();
        }, [t, n]);
    return (0, l.jsx)(q, {
        hasActivity: null != a,
        applicationId: t,
        channelId: n,
        compositeInstanceId: a?.compositeInstanceId,
        userIds: a?.userIds,
        isRichPresenceInvite: !1,
        onConfirmClosePopout: o,
    });
}
