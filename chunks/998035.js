n.d(t, { A: () => ec });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    a = n.n(i),
    s = n(435558),
    u = n.n(s),
    c = n(855986),
    o = n(364840),
    d = n(821609),
    h = n(862482),
    f = n(109802),
    p = n(452027),
    m = n(778712),
    C = n(534514),
    y = n(289873),
    E = n(890497),
    _ = n(398590),
    g = n(49229),
    S = n(966327),
    I = n(316363),
    A = n(674658),
    P = n(769015),
    x = n(242874),
    v = n(810498),
    R = n(531536),
    T = n(404885),
    M = n(812020),
    b = n(7133),
    L = n(994500),
    k = n(351906),
    N = n(287809),
    j = n(957565),
    U = n(45938),
    w = n(448645),
    H = n(427262),
    O = n(418200),
    F = n(482132),
    D = n(331322),
    B = n(834730),
    G = n(683071),
    K = n(696208),
    Z = n(869038),
    W = n(793574),
    Y = n(688810),
    q = n(590180),
    z = n(450047),
    Q = n(61750),
    V = n(192308),
    X = n(780964),
    $ = n(766075),
    J = n(403362),
    ee = n(758836),
    et = n(792996),
    en = n(50302),
    el = n(863263);
function er(e) {
    let {
            giftCode: t,
            giftCount: i,
            checkoutSessionId: a,
            deliveryReady: s,
            privateGiftLink: o,
            rewardSkuIds: d,
            canShowGiftingBadgePostPurchase: h,
            openGiftingBadgePostPurchaseModal: f,
            onClose: p,
        } = e,
        [C, y] = r.useState([]),
        [I, A] = r.useState(!1),
        { isLoading: P, potentialRecipients: v } = (function () {
            r.useEffect(() => {
                (g.A.fetchRelationships(), (0, T.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, c.cf)([M.A], () => ({
                    userAffinities: M.A.getUserAffinitiesMap(),
                    isLoading: M.A.isFetching(),
                })),
                n = r.useMemo(() => Array.from(e.keys()).sort((e, t) => M.A.compare(e, t)), [e]),
                l = (0, c.bG)([L.A], () => L.A.getFriendIDs()),
                i = r.useMemo(() => [...n, ...u().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, c.yK)(
                    [N.default],
                    () =>
                        i
                            .map(N.default.getUser)
                            .filter(J.Vq)
                            .filter((e) => !e.bot),
                    [i],
                ),
            };
        })(),
        { analyticsLocations: R } = (0, Y.Ay)(W.A.PREMIUM_GIFT_SUCCESS_MODAL),
        b = (0, c.yK)([N.default], () => C.map(N.default.getUser).filter(J.Vq), [C]),
        k = i > 1,
        j = k ? !s : null == t,
        U = 1 === C.length,
        w = C.length > 1 && null == a,
        O = I || 0 === C.length || C.length > i || b.length !== C.length || (U ? null == t : !s) || w,
        er = v.map((e) => ({
            id: e.id,
            value: e.id,
            label: H.Ay.getUserTag(e),
            leading: (0, l.jsx)(S.A, { user: e, size: m._3.SIZE_20 }),
            disabled: k && C.length >= i && !C.includes(e.id),
        })),
        ea = (0, z.D)(d),
        [es, ...eu] = (0, c.yK)([q.A], () => d.map((e) => q.A.getProduct(e)).filter((e) => null != e));
    function ec(e) {
        e.length <= i && y(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: el.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: el.OA,
                        children: [
                            k
                                ? (0, l.jsxs)(D.B, {
                                      gap: 8,
                                      children: [
                                          (0, l.jsxs)(D.B, {
                                              direction: "horizontal",
                                              align: "center",
                                              justify: "space-between",
                                              children: [
                                                  (0, l.jsx)(B.E, {
                                                      variant: "body-md/medium",
                                                      color: "text-strong",
                                                      "aria-hidden": !0,
                                                      children: et.intl.string(en.default.ZolTTE),
                                                  }),
                                                  (0, l.jsx)(B.E, {
                                                      variant: "body-md/medium",
                                                      color: "text-strong",
                                                      tabularNumbers: !0,
                                                      role: "status",
                                                      children: et.intl.format(et.t.H55rqz, {
                                                          numMembers: C.length,
                                                          maxMemberLimit: i,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(E.Z, {
                                              selectionMode: "multiple",
                                              label: et.intl.string(en.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: et.intl.string(en.default.xdDO7f),
                                              loading: P || j,
                                              disabled: j || I,
                                              value: C,
                                              onSelectionChange: ec,
                                              options: er,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(E.Z, {
                                      selectionMode: "single",
                                      label: et.intl.string(et.t.MJw05f),
                                      placeholder: et.intl.string(et.t.J019jZ),
                                      loading: P || j,
                                      disabled: j || I,
                                      value: C[0],
                                      onSelectionChange: (e) => ec(null != e ? [e] : []),
                                      options: er,
                                  }),
                            o,
                        ],
                    }),
                    null != es && (0, l.jsx)(ei, { product: es, moreCount: eu.length }),
                    (0, l.jsx)(G.w, {
                        type: "info",
                        message: et.intl.format(en.default.ZvgWUV, {
                            giftCount: i,
                            onInventoryClick: function () {
                                (p(), (0, _.bz)(), (0, $.openUserSettings)(X.X.GIFT_PANEL, { analyticsLocations: R }));
                            },
                        }),
                        role: "none",
                    }),
                ],
            }),
            (0, l.jsx)(F.UX, {
                children: (0, l.jsx)(K.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: et.intl.string(en.default["qTXpj/"]),
                            disabled: ea || I,
                            onClick: function () {
                                (p(),
                                    (0, _.bz)(),
                                    null != es
                                        ? (0, Q.A)({
                                              product: es,
                                              remainingProducts: eu,
                                              shouldShowPromotionalExperience: !0,
                                              analyticsLocations: R,
                                              purchaseType: ee.gs.GIFT,
                                              onCloseCallback: h ? f : void 0,
                                          })
                                        : h && f());
                            },
                        },
                        {
                            variant: "primary",
                            text: et.intl.string(et.t["+EgwQn"]),
                            disabled: O,
                            loading: ea || I,
                            onClick: async function () {
                                var e;
                                let r;
                                A(!0);
                                try {
                                    if (U) {
                                        let e = b[0];
                                        (await (0, x.UN)(e, t), (r = { recipients: [e], failedRecipients: [] }));
                                    } else {
                                        if (null == a) throw Error("Checkout session ID must be defined");
                                        let e = await (0, Z.kW)(C, a),
                                            t = new Set(e.successful_recipient_ids),
                                            n = new Set(e.failed_recipient_ids);
                                        r = {
                                            recipients: b.filter((e) => t.has(e.id)),
                                            failedRecipients: b.filter((e) => n.has(e.id)),
                                        };
                                    }
                                } catch {
                                    r = { recipients: [], failedRecipients: b };
                                } finally {
                                    A(!1);
                                }
                                (p(),
                                    (0, _.bz)(),
                                    (e = {
                                        recipients: r.recipients,
                                        failedRecipients: r.failedRecipients,
                                        rewardSkuIds: d,
                                        purchaseQuantity: i,
                                        canShowGiftingBadgePostPurchase: h,
                                        openGiftingBadgePostPurchaseModal: f,
                                    }),
                                    (0, V.mM)(async () => {
                                        let { default: t } = await Promise.all([n.e(719466), n.e(692318)]).then(
                                            n.bind(n, 150061),
                                        );
                                        return (n) => (0, l.jsx)(t, { ...n, ...e });
                                    }));
                            },
                        },
                    ],
                }),
            }),
        ],
    });
}
function ei(e) {
    let { product: t, moreCount: n } = e,
        i = r.useMemo(() => (n > 0 ? et.intl.format(en.default.XoHiqS, { name: t.name, count: n }) : t?.name), [t, n]);
    return (0, l.jsx)(R.v, {
        className: el.Km,
        product: t,
        title: et.intl.format(en.default["1fYyf4"], { count: n + 1 }),
        subtitle: i,
    });
}
var ea = n(652215),
    es = n(682901),
    eu = n(815328);
function ec(e) {
    let {
            giftCode: t,
            giftCount: n = 1,
            checkoutSessionId: i,
            giftCodeDeliveryReady: s = !1,
            shouldUsePostPurchaseRecipientDelivery: u = !1,
            application: E,
            sku: g,
            subscriptionPlan: A,
            selectedGiftStyle: x,
            onClose: R,
            hasSentMessage: T,
            giftRecipient: M,
            giftMessageError: L,
            isSendingMessage: N,
        } = e,
        [D, B] = r.useState(f.e.Modes.DEFAULT),
        G = (0, I.t4)((e) => e.getIsRecurringGiftCheckout()),
        K = (0, c.bG)([k.A], () => k.A.enabled),
        Z = T || (null != x && null != M),
        W = g?.productLine === ea.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: Y,
            openGiftingBadgePostPurchaseModal: q,
            canShowGiftingBadgePostPurchase: z,
        } = (0, O.Pv)(),
        Q = (0, v.Mq)(A) && Y.length > 0,
        V = z && 0 === Y.length;
    function X() {
        return null != A ? A.skuId : null != g ? g.id : null;
    }
    function $() {
        let e;
        return null != L
            ? et.intl.string(et.t.qB8aya)
            : null == A
              ? null
              : G && null != M
                ? et.intl.string(A.interval === es.WT.MONTH ? en.default.hPbnzP : en.default["00+8Q2"])
                : ((e =
                      A.interval === es.WT.MONTH
                          ? Z
                              ? et.t["4ZJ+7Z"]
                              : et.t["P+z55d"]
                          : Z
                            ? et.t.p0pZXP
                            : et.t.bXqk3o),
                  et.intl.format(e, { skuName: (0, w.RH)(A.id), intervalCount: A.intervalCount }));
    }
    function J() {
        let e;
        if (null == t) return null;
        switch (D) {
            case f.e.Modes.SUCCESS:
                e = et.intl.string(et.t.XVvPjU);
                break;
            case f.e.Modes.ERROR:
                e = et.intl.string(et.t.i4GM3L);
                break;
            default:
                e = et.intl.string(et.t.OpuAlK);
        }
        return (0, l.jsx)(p.D, {
            label: et.intl.string(et.t["/dG4NA"]),
            children: (0, l.jsx)(f.e, {
                hideMessage: K ? et.intl.string(et.t["0RLn47"]) : null,
                value: (0, U.Zq)(t),
                mode: D,
                text: e,
                onCopy: (e) => {
                    (null != g && (0, U.AK)(new b.A({ code: t, maxUses: 1 }), g),
                        (0, j.C)(
                            e,
                            () => B(f.e.Modes.SUCCESS),
                            () => B(f.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            B(f.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: j.p5,
                className: eu.__invalid_copyInput,
                buttonColor: h.XD.LINK,
                buttonLook: h.pR.LINK,
            }),
        });
    }
    return N
        ? (0, l.jsxs)("div", {
              className: eu.EL,
              children: [
                  null != E
                      ? (0, l.jsx)(P.A, { game: E, className: eu.__invalid_icon, size: P.M.LARGE, skuId: X() })
                      : null,
                  (0, l.jsx)(y.y, { type: y.t.PULSING_ELLIPSIS }),
              ],
          })
        : u
          ? (0, l.jsx)(er, {
                giftCode: t,
                giftCount: n,
                checkoutSessionId: i,
                deliveryReady: s,
                privateGiftLink: 1 === n ? J() : null,
                rewardSkuIds: Y,
                canShowGiftingBadgePostPurchase: z,
                openGiftingBadgePostPurchaseModal: q,
                onClose: R,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(eu.EL, { [eu.L1]: Q }),
                        children: [
                            null != E
                                ? (0, l.jsx)(P.A, {
                                      game: E,
                                      className: eu.__invalid_icon,
                                      size: P.M.LARGE,
                                      skuId: X(),
                                  })
                                : null,
                            (0, l.jsx)(C.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [eu.wx]: null == x && !W, [eu.$A]: null != x && !W }),
                                children:
                                    G && null != M
                                        ? et.intl.string(en.default.yizhZK)
                                        : null != M || (T && null == L)
                                          ? et.intl.string(et.t.zOmK9N)
                                          : null != L
                                            ? et.intl.string(et.t.d1lrmU)
                                            : et.intl.string(et.t["/s1xR7"]),
                            }),
                            (T && null != M && null == L) || Z
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: eu.jx,
                                              children: [
                                                  (0, l.jsx)(S.A, { user: M, size: m._3.SIZE_24 }),
                                                  (0, l.jsx)(C.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: H.Ay.getName(M),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: eu._c, children: $() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: eu.I0, children: $() }),
                                          null == L &&
                                              (0, l.jsx)(ed, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (R(), (0, _.bz)(), V && q());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: eu.yF }),
                                          (0, l.jsxs)("div", {
                                              className: eu.PN,
                                              children: [
                                                  J(),
                                                  (0, l.jsx)("div", {
                                                      className: eu.W$,
                                                      children: et.intl.string(et.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                            Y.length > 0 && (0, l.jsx)(eo, { skuIds: Y }),
                        ],
                    }),
                    V &&
                        (0, l.jsx)(F.UX, {
                            children: (0, l.jsx)(o.j, {
                                children: (0, l.jsx)("div", {
                                    className: eu.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: et.intl.string(et.t.PDTjLN),
                                        onClick: () => {
                                            (R(), q());
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function eo(e) {
    let { skuIds: t } = e,
        { product: n } = (0, A.q)(t[0]),
        i = r.useMemo(
            () =>
                null != n && t.length > 1
                    ? et.intl.format(en.default.XoHiqS, { name: n.name, count: t.length - 1 })
                    : n?.name,
            [n, t.length],
        );
    return null == n
        ? null
        : (0, l.jsx)(R.v, {
              className: eu.Km,
              product: n,
              title: et.intl.format(en.default["1fYyf4"], { count: t.length }),
              subtitle: i,
          });
}
function ed(e) {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        (g.A.fetchRelationships(), (0, T.u)());
    }, []);
    let [i, a] = r.useState(),
        [s, o] = r.useState(!1),
        [h, f] = r.useState(!1),
        { userAffinities: p, isLoading: C } = (0, c.cf)([M.A], () => ({
            userAffinities: M.A.getUserAffinitiesMap(),
            isLoading: M.A.isFetching(),
        })),
        y = Array.from(p.keys()).sort((e, t) => M.A.compare(e, t)),
        _ = (0, c.bG)([L.A], () => L.A.getFriendIDs()),
        I = u().difference(_, y),
        A = [...y, ...I],
        P = (0, c.bG)([N.default], () => N.default.filter((e) => A.includes(e.id) && !e.bot), [A]);
    if (null == P || 0 === P.length) return null;
    let v = u().sortBy(P, (e) => A.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: eu.vt,
        children: [
            (0, l.jsxs)("div", {
                className: eu.AQ,
                children: [
                    (0, l.jsx)(E.Z, {
                        selectionMode: "single",
                        label: et.intl.string(et.t.MJw05f),
                        placeholder: et.intl.string(et.t.J019jZ),
                        loading: C,
                        value: i,
                        onSelectionChange: (e) => {
                            (a(e), o(!1));
                        },
                        options: v.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${H.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(S.A, { user: e, size: m._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: eu.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == i,
                            loading: h,
                            onClick: () => {
                                (f(!0),
                                    (0, x.UN)(i, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            (o(!0), f(!1));
                                        }));
                            },
                            text: et.intl.string(et.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? eu.Sc : eu.W$,
                children: s ? et.intl.string(et.t.jo5Vbl) : et.intl.string(et.t["8/N3v3"]),
            }),
        ],
    });
}
