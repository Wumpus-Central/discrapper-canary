n.d(t, { A: () => eo });
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
    P = n(159522),
    x = n(769015),
    v = n(242874),
    R = n(810498),
    T = n(531536),
    M = n(404885),
    b = n(812020),
    L = n(7133),
    k = n(994500),
    N = n(351906),
    j = n(287809),
    U = n(957565),
    w = n(45938),
    H = n(448645),
    O = n(427262),
    F = n(418200),
    D = n(482132),
    B = n(331322),
    G = n(834730),
    K = n(683071),
    Z = n(696208),
    W = n(869038),
    Y = n(793574),
    z = n(688810),
    q = n(590180),
    Q = n(450047),
    V = n(61750),
    X = n(192308),
    $ = n(780964),
    J = n(766075),
    ee = n(403362),
    et = n(758836),
    en = n(792996),
    el = n(50302),
    er = n(863263);
function ei(e) {
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
        { isLoading: P, potentialRecipients: x } = (function () {
            r.useEffect(() => {
                (g.A.fetchRelationships(), (0, M.u)());
            }, []);
            let { userAffinities: e, isLoading: t } = (0, c.cf)([b.A], () => ({
                    userAffinities: b.A.getUserAffinitiesMap(),
                    isLoading: b.A.isFetching(),
                })),
                n = r.useMemo(() => Array.from(e.keys()).sort((e, t) => b.A.compare(e, t)), [e]),
                l = (0, c.bG)([k.A], () => k.A.getFriendIDs()),
                i = r.useMemo(() => [...n, ...u().difference(l, n)], [l, n]);
            return {
                isLoading: t,
                potentialRecipients: (0, c.yK)(
                    [j.default],
                    () =>
                        i
                            .map(j.default.getUser)
                            .filter(ee.Vq)
                            .filter((e) => !e.bot),
                    [i],
                ),
            };
        })(),
        { analyticsLocations: R } = (0, z.Ay)(Y.A.PREMIUM_GIFT_SUCCESS_MODAL),
        T = (0, c.yK)([j.default], () => C.map(j.default.getUser).filter(ee.Vq), [C]),
        L = i > 1,
        N = L ? !s : null == t,
        U = 1 === C.length,
        w = C.length > 1 && null == a,
        H = I || 0 === C.length || C.length > i || T.length !== C.length || (U ? null == t : !s) || w,
        F = x.map((e) => ({
            id: e.id,
            value: e.id,
            label: O.Ay.getUserTag(e),
            leading: (0, l.jsx)(S.A, { user: e, size: m._3.SIZE_20 }),
            disabled: L && C.length >= i && !C.includes(e.id),
        })),
        ei = (0, Q.D)(d),
        [es, ...eu] = (0, c.yK)([q.A], () => d.map((e) => q.A.getProduct(e)).filter((e) => null != e));
    function ec(e) {
        e.length <= i && y(e);
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: er.Qs,
                children: [
                    (0, l.jsxs)("div", {
                        className: er.OA,
                        children: [
                            L
                                ? (0, l.jsxs)(B.B, {
                                      gap: 8,
                                      children: [
                                          (0, l.jsxs)(B.B, {
                                              direction: "horizontal",
                                              align: "center",
                                              justify: "space-between",
                                              children: [
                                                  (0, l.jsx)(G.E, {
                                                      variant: "body-md/medium",
                                                      color: "text-strong",
                                                      "aria-hidden": !0,
                                                      children: en.intl.string(el.default.ZolTTE),
                                                  }),
                                                  (0, l.jsx)(G.E, {
                                                      variant: "body-md/medium",
                                                      color: "text-strong",
                                                      tabularNumbers: !0,
                                                      role: "status",
                                                      children: en.intl.format(en.t.H55rqz, {
                                                          numMembers: C.length,
                                                          maxMemberLimit: i,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)(E.Z, {
                                              selectionMode: "multiple",
                                              label: en.intl.string(el.default.ZolTTE),
                                              hideLabel: !0,
                                              placeholder: en.intl.string(el.default.xdDO7f),
                                              loading: P || N,
                                              disabled: N || I,
                                              value: C,
                                              onSelectionChange: ec,
                                              options: F,
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(E.Z, {
                                      selectionMode: "single",
                                      label: en.intl.string(en.t.MJw05f),
                                      placeholder: en.intl.string(en.t.J019jZ),
                                      loading: P || N,
                                      disabled: N || I,
                                      value: C[0],
                                      onSelectionChange: (e) => ec(null != e ? [e] : []),
                                      options: F,
                                  }),
                            o,
                        ],
                    }),
                    null != es && (0, l.jsx)(ea, { product: es, moreCount: eu.length }),
                    (0, l.jsx)(K.w, {
                        type: "info",
                        message: en.intl.format(el.default.ZvgWUV, {
                            giftCount: i,
                            onInventoryClick: function () {
                                (p(), (0, _.bz)(), (0, J.openUserSettings)($.X.GIFT_PANEL, { analyticsLocations: R }));
                            },
                        }),
                        role: "none",
                    }),
                ],
            }),
            (0, l.jsx)(D.UX, {
                children: (0, l.jsx)(Z.H, {
                    actionsFullWidth: !0,
                    actions: [
                        {
                            variant: "secondary",
                            text: en.intl.string(el.default["qTXpj/"]),
                            disabled: ei || I,
                            onClick: function () {
                                (p(),
                                    (0, _.bz)(),
                                    null != es
                                        ? (0, V.A)({
                                              product: es,
                                              remainingProducts: eu,
                                              shouldShowPromotionalExperience: !0,
                                              analyticsLocations: R,
                                              purchaseType: et.gs.GIFT,
                                              onCloseCallback: h ? f : void 0,
                                          })
                                        : h && f());
                            },
                        },
                        {
                            variant: "primary",
                            text: en.intl.string(en.t["+EgwQn"]),
                            disabled: H,
                            loading: ei || I,
                            onClick: async function () {
                                var e;
                                let r;
                                A(!0);
                                try {
                                    if (U) {
                                        let e = T[0];
                                        (await (0, v.UN)(e, t), (r = { recipients: [e], failedRecipients: [] }));
                                    } else {
                                        if (null == a) throw Error("Checkout session ID must be defined");
                                        let e = await (0, W.kW)(C, a),
                                            t = new Set(e.successful_recipient_ids),
                                            n = new Set(e.failed_recipient_ids);
                                        r = {
                                            recipients: T.filter((e) => t.has(e.id)),
                                            failedRecipients: T.filter((e) => n.has(e.id)),
                                        };
                                    }
                                } catch {
                                    r = { recipients: [], failedRecipients: T };
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
                                    (0, X.mM)(async () => {
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
function ea(e) {
    let { product: t, moreCount: n } = e,
        i = r.useMemo(() => (n > 0 ? en.intl.format(el.default.XoHiqS, { name: t.name, count: n }) : t?.name), [t, n]);
    return (0, l.jsx)(T.v, {
        className: er.Km,
        product: t,
        title: en.intl.format(el.default["1fYyf4"], { count: n + 1 }),
        subtitle: i,
    });
}
var es = n(652215),
    eu = n(682901),
    ec = n(815328);
function eo(e) {
    let {
            giftCode: t,
            giftCount: n = 1,
            checkoutSessionId: i,
            giftCodeDeliveryReady: s = !1,
            shouldUsePostPurchaseRecipientDelivery: u = !1,
            application: E,
            sku: g,
            subscriptionPlan: A,
            selectedGiftStyle: v,
            onClose: T,
            hasSentMessage: M,
            giftRecipient: b,
            giftMessageError: k,
            isSendingMessage: j,
            orbsBack: B,
        } = e,
        [G, K] = r.useState(f.e.Modes.DEFAULT),
        Z = (0, I.t4)((e) => e.getIsRecurringGiftCheckout()),
        W = (0, c.bG)([N.A], () => N.A.enabled),
        Y = M || (null != v && null != b),
        z = g?.productLine === es.EZt.COLLECTIBLES,
        {
            selectedGiftingPromotionRewards: q,
            openGiftingBadgePostPurchaseModal: Q,
            canShowGiftingBadgePostPurchase: V,
        } = (0, F.Pv)(),
        X = (0, R.Mq)(A) && q.length > 0,
        $ = V && 0 === q.length;
    function J() {
        return null != A ? A.skuId : null != g ? g.id : null;
    }
    function ee() {
        let e;
        return null != k
            ? en.intl.string(en.t.qB8aya)
            : null == A
              ? null
              : Z && null != b
                ? en.intl.string(A.interval === eu.WT.MONTH ? el.default.hPbnzP : el.default["00+8Q2"])
                : ((e =
                      A.interval === eu.WT.MONTH
                          ? Y
                              ? en.t["4ZJ+7Z"]
                              : en.t["P+z55d"]
                          : Y
                            ? en.t.p0pZXP
                            : en.t.bXqk3o),
                  en.intl.format(e, { skuName: (0, H.RH)(A.id), intervalCount: A.intervalCount }));
    }
    function et() {
        let e;
        if (null == t) return null;
        switch (G) {
            case f.e.Modes.SUCCESS:
                e = en.intl.string(en.t.XVvPjU);
                break;
            case f.e.Modes.ERROR:
                e = en.intl.string(en.t.i4GM3L);
                break;
            default:
                e = en.intl.string(en.t.OpuAlK);
        }
        return (0, l.jsx)(p.D, {
            label: en.intl.string(en.t["/dG4NA"]),
            children: (0, l.jsx)(f.e, {
                hideMessage: W ? en.intl.string(en.t["0RLn47"]) : null,
                value: (0, w.Zq)(t),
                mode: G,
                text: e,
                onCopy: (e) => {
                    (null != g && (0, w.AK)(new L.A({ code: t, maxUses: 1 }), g),
                        (0, U.C)(
                            e,
                            () => K(f.e.Modes.SUCCESS),
                            () => K(f.e.Modes.ERROR),
                        ),
                        setTimeout(() => {
                            K(f.e.Modes.DEFAULT);
                        }, 1500));
                },
                supportsCopy: U.p5,
                className: ec.__invalid_copyInput,
                buttonColor: h.XD.LINK,
                buttonLook: h.pR.LINK,
            }),
        });
    }
    return j
        ? (0, l.jsxs)("div", {
              className: ec.EL,
              children: [
                  null != E
                      ? (0, l.jsx)(x.A, { game: E, className: ec.__invalid_icon, size: x.M.LARGE, skuId: J() })
                      : null,
                  (0, l.jsx)(y.y, { type: y.t.PULSING_ELLIPSIS }),
              ],
          })
        : u
          ? (0, l.jsx)(ei, {
                giftCode: t,
                giftCount: n,
                checkoutSessionId: i,
                deliveryReady: s,
                privateGiftLink: 1 === n ? et() : null,
                rewardSkuIds: q,
                canShowGiftingBadgePostPurchase: V,
                openGiftingBadgePostPurchaseModal: Q,
                onClose: T,
            })
          : (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: a()(ec.EL, { [ec.L1]: X }),
                        children: [
                            null != E
                                ? (0, l.jsx)(x.A, {
                                      game: E,
                                      className: ec.__invalid_icon,
                                      size: x.M.LARGE,
                                      skuId: J(),
                                  })
                                : null,
                            (0, l.jsx)(C.D, {
                                variant: "heading-lg/semibold",
                                className: a()({ [ec.wx]: null == v && !z, [ec.$A]: null != v && !z }),
                                children:
                                    Z && null != b
                                        ? en.intl.string(el.default.yizhZK)
                                        : null != b || (M && null == k)
                                          ? en.intl.string(en.t.zOmK9N)
                                          : null != k
                                            ? en.intl.string(en.t.d1lrmU)
                                            : en.intl.string(en.t["/s1xR7"]),
                            }),
                            (M && null != b && null == k) || Y
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsxs)("div", {
                                              className: ec.jx,
                                              children: [
                                                  (0, l.jsx)(S.A, { user: b, size: m._3.SIZE_24 }),
                                                  (0, l.jsx)(C.D, {
                                                      variant: "heading-lg/semibold",
                                                      children: O.Ay.getName(b),
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("div", { className: ec._c, children: ee() }),
                                      ],
                                  })
                                : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)("div", { className: ec.I0, children: ee() }),
                                          null == k &&
                                              (0, l.jsx)(eh, {
                                                  giftCode: t,
                                                  onClose: () => {
                                                      (T(), (0, _.bz)(), $ && Q());
                                                  },
                                              }),
                                          (0, l.jsx)("div", { className: ec.yF }),
                                          (0, l.jsxs)("div", {
                                              className: ec.PN,
                                              children: [
                                                  et(),
                                                  (0, l.jsx)("div", {
                                                      className: ec.W$,
                                                      children: en.intl.string(en.t.QWKUpn),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                            null != B && (0, l.jsx)(P.A, { orbsBack: B }),
                            q.length > 0 && (0, l.jsx)(ed, { skuIds: q }),
                        ],
                    }),
                    $ &&
                        (0, l.jsx)(D.UX, {
                            children: (0, l.jsx)(o.j, {
                                children: (0, l.jsx)("div", {
                                    className: ec.pP,
                                    children: (0, l.jsx)(d.$, {
                                        variant: "primary",
                                        fullWidth: !0,
                                        text: en.intl.string(en.t.PDTjLN),
                                        onClick: () => {
                                            (T(), Q());
                                        },
                                    }),
                                }),
                            }),
                        }),
                ],
            });
}
function ed(e) {
    let { skuIds: t } = e,
        { product: n } = (0, A.q)(t[0]),
        i = r.useMemo(
            () =>
                null != n && t.length > 1
                    ? en.intl.format(el.default.XoHiqS, { name: n.name, count: t.length - 1 })
                    : n?.name,
            [n, t.length],
        );
    return null == n
        ? null
        : (0, l.jsx)(T.v, {
              className: ec.Km,
              product: n,
              title: en.intl.format(el.default["1fYyf4"], { count: t.length }),
              subtitle: i,
          });
}
function eh(e) {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        (g.A.fetchRelationships(), (0, M.u)());
    }, []);
    let [i, a] = r.useState(),
        [s, o] = r.useState(!1),
        [h, f] = r.useState(!1),
        { userAffinities: p, isLoading: C } = (0, c.cf)([b.A], () => ({
            userAffinities: b.A.getUserAffinitiesMap(),
            isLoading: b.A.isFetching(),
        })),
        y = Array.from(p.keys()).sort((e, t) => b.A.compare(e, t)),
        _ = (0, c.bG)([k.A], () => k.A.getFriendIDs()),
        I = u().difference(_, y),
        A = [...y, ...I],
        P = (0, c.bG)([j.default], () => j.default.filter((e) => A.includes(e.id) && !e.bot), [A]);
    if (null == P || 0 === P.length) return null;
    let x = u().sortBy(P, (e) => A.indexOf(e.id));
    return (0, l.jsxs)("div", {
        className: ec.vt,
        children: [
            (0, l.jsxs)("div", {
                className: ec.AQ,
                children: [
                    (0, l.jsx)(E.Z, {
                        selectionMode: "single",
                        label: en.intl.string(en.t.MJw05f),
                        placeholder: en.intl.string(en.t.J019jZ),
                        loading: C,
                        value: i,
                        onSelectionChange: (e) => {
                            (a(e), o(!1));
                        },
                        options: x.map((e) => ({
                            id: e.id,
                            value: e,
                            label: `${O.Ay.getUserTag(e)}`,
                            leading: (0, l.jsx)(S.A, { user: e, size: m._3.SIZE_20 }),
                        })),
                    }),
                    (0, l.jsx)("div", {
                        className: ec.Qg,
                        children: (0, l.jsx)(d.$, {
                            disabled: null == i,
                            loading: h,
                            onClick: () => {
                                (f(!0),
                                    (0, v.UN)(i, t)
                                        .then(() => {
                                            n();
                                        })
                                        .catch(() => {
                                            (o(!0), f(!1));
                                        }));
                            },
                            text: en.intl.string(en.t["+EgwQn"]),
                        }),
                    }),
                ],
            }),
            (0, l.jsx)("div", {
                className: s ? ec.Sc : ec.W$,
                children: s ? en.intl.string(en.t.jo5Vbl) : en.intl.string(en.t["8/N3v3"]),
            }),
        ],
    });
}
