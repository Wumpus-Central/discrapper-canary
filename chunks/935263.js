i.d(e, { default: () => tI });
var n = i(477900),
    s = i(582128),
    r = i(503698),
    l = i.n(r),
    a = i(575593),
    o = i(855986),
    u = i(935462),
    d = i(534514),
    c = i(834730),
    f = i(821609),
    p = i(638495),
    h = i(869038),
    m = i(775602),
    g = i(793574),
    A = i(688810),
    R = i(627363),
    x = i(587895),
    y = i(590180),
    S = i(993408),
    C = i(674658),
    I = i(778712),
    E = i(97808),
    b = i(289873),
    T = i(242874),
    v = i(446263),
    j = i(287809),
    N = i(562819),
    O = i(215689),
    _ = i(872200),
    P = i(139136),
    G = i(395744),
    k = i(842385),
    L = i(864449);
let M = I._3.SIZE_152,
    F = (0, N.Te)(M);
function w(t) {
    let { responsive: e } = t;
    return !0 !== e;
}
function U(t) {
    let { item: e } = t,
        i = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        {
            avatarDecorationSrc: s,
            avatarPlaceholderSrc: r,
            eventHandlers: l,
        } = (0, O.A)({ user: i, avatarDecorationOverride: e, size: F });
    return (0, n.jsx)("div", {
        className: L._P,
        children: (0, n.jsx)(E.eu, { ...l, "aria-label": e.label, src: r, avatarDecoration: s, size: M }),
    });
}
function D(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", { className: L.xC, children: (0, n.jsx)(P.A, { isHighlighted: !0, skuId: e?.skuId }) });
}
function H(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", { className: L.pI, children: (0, n.jsx)(G.A, { frame: e, filterLayer: w }) });
}
function V(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", {
        className: L.M4,
        children: (0, n.jsx)(_.A, {
            nameplate: e,
            className: L.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
function z(t) {
    let { product: e } = t;
    return (0, n.jsx)("div", { className: L.hT, children: (0, n.jsx)(k.X, { product: e, isHighlighted: !1 }) });
}
let q = function (t) {
    let { giftCode: e } = t,
        { product: i, isFetching: s } = (0, C.q)(e.skuId, !0);
    if (s || null == i) return (0, n.jsx)("div", { className: L.dc, children: (0, n.jsx)(b.y, {}) });
    if (i.type === a.R.BUNDLE) return 0 === i.items.length ? null : (0, n.jsx)(z, { product: i });
    let r = i?.items[0];
    switch (r?.type) {
        case a.R.AVATAR_DECORATION:
            return (0, n.jsx)(U, { item: r });
        case a.R.PROFILE_EFFECT:
            return (0, n.jsx)(D, { item: r });
        case a.R.NAMEPLATE:
            return (0, n.jsx)(V, { item: r });
        case a.R.PROFILE_FRAME:
            return (0, n.jsx)(H, { item: r });
        default:
            return null != e.giftStyle
                ? (0, n.jsx)(v.A, {
                      defaultAnimationState: T.oA.ACTION,
                      idleAnimationState: T.oA.LOOP,
                      className: L.l$,
                      giftStyle: e.giftStyle,
                  })
                : null;
    }
};
var B = i(61750),
    W = i(21161),
    K = i(915089),
    Y = i(769015),
    $ = i(976860),
    Q = i(871123),
    J = i(192308),
    X = i(129230),
    Z = i(188275),
    tt = i(652215);
let te = "social-layer-storefront-gift-code-claim-modal";
var ti = i(946261),
    tn = i(209932),
    ts = i(30793),
    tr = i(189081),
    tl = i(97352),
    ta = i(67480),
    to = i(690521),
    tu = i(45938),
    td = i(615396),
    tc = i(427262),
    tf = i(153626),
    tp = i(518926),
    th = i(682901),
    tm = i(758836),
    tg = i(50302),
    tA = i(792996),
    tR = i(368773);
function tx(t) {
    let { openedGift: e } = t,
        { createMultipleConfettiAt: i } = s.useContext(W.x);
    return (
        s.useEffect(() => {
            e && i(window.innerWidth / 2, window.innerHeight / 4);
        }, [i, e]),
        null
    );
}
function ty(t) {
    let { step: e, soundId: i } = t;
    return (
        s.useEffect(() => {
            if (e !== tt.frR.CONFIRM) return;
            let t = tn.A.getSoundById(i);
            (0, ti.C)(i, t?.volume ?? 1);
        }, [e, i]),
        null
    );
}
class tS extends s.Component {
    state = {
        error: null,
        accepted: !1,
        opened: !1,
        isCustomGift: !1,
        isCollectiblesGift: !1,
        step: void 0,
        emojiURL: void 0,
    };
    modalRef = s.createRef();
    componentDidMount() {
        let { application: t, sku: e, customGiftMessage: i, giftCode: n, emojiName: s } = this.props;
        null == t && null != e && R.Ay.fetchApplication(e.applicationId);
        let r = null != i || null != n.giftStyle,
            l = (0, S.hU)(n),
            a = null != s ? to.Ay.getURL(s) : void 0;
        (this.setState({ isCustomGift: r, isCollectiblesGift: l, emojiURL: a, opened: l }), this.trackStepAnalytics());
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: n, accepted: s, opened: r, isCustomGift: l } = this.state;
        return (0, tu.v3)(t, i, { error: n, accepted: s, accepting: e, opened: r, isCustomGift: l });
    }
    get buttonText() {
        return this.step === tt.frR.CONFIRM && this.hasGiftSubscriptionAgreementError
            ? tA.intl.string(tA.t["7NqTJn"])
            : (0, tu.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get needsGiftSubscriptionAgreement() {
        let { giftCode: t } = this.props;
        return t.isSubscription && void 0 === t.giftSubscriptionAgreement;
    }
    get hasGiftSubscriptionAgreementError() {
        return this.needsGiftSubscriptionAgreement && this.props.giftSubscriptionAgreementFailed;
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: n, subscriptionPlan: s, collectiblesItemType: r } = this.props;
        if (t && this.step === tt.frR.ERROR) return tA.intl.formatToMarkdownString(tA.t.JUvC0s, {});
        if (t && !i)
            if (!e)
                return tA.intl.formatToPlainString(tA.t.xHzRub, {
                    recipientDisplayName: tc.Ay.getName(j.default.getCurrentUser()),
                });
            else {
                let t = j.default.getUser(n.userId),
                    e = tc.Ay.getName(t);
                if (null != r)
                    switch (r) {
                        case a.R.AVATAR_DECORATION:
                            return tA.intl.formatToPlainString(tA.t.SKduyh, { sender: e });
                        case a.R.PROFILE_EFFECT:
                            return tA.intl.formatToPlainString(tA.t["1w42T2"], { sender: e });
                        case a.R.NAMEPLATE:
                            return tA.intl.formatToPlainString(tA.t.vFiQlU, { sender: e });
                        case a.R.PROFILE_FRAME:
                            return tA.intl.formatToPlainString(tA.t["UH/EQL"], { sender: e });
                        default:
                            return tA.intl.formatToPlainString(tA.t.U4Ko2y, { sender: e });
                    }
                return (0, tf.m)(n)
                    ? tA.intl.formatToPlainString(tg.default.lhj054, { name: e })
                    : s?.interval === th.WT.MONTH && s.intervalCount > 1
                      ? tA.intl.formatToPlainString(tg.default.E7QYGI, { sender: e, intervalCount: s.intervalCount })
                      : tA.intl.formatToPlainString(tA.t["0UR0u4"], {
                            sender: e,
                            timeInterval:
                                s?.interval === th.WT.MONTH ? tA.intl.string(tA.t.FPybU7) : tA.intl.string(tA.t.tfqrhj),
                        });
            }
        return null == this.props.sku ? null : (0, tu.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: n, subscriptionPlan: s } = this.props;
        if (!t || i) return null;
        if (e)
            return this.step !== tt.frR.ERROR && (0, tf.m)(n) && null != s
                ? tA.intl.string(s.interval === th.WT.MONTH ? tg.default.p3wUY4 : tg.default.RdrnRc)
                : null;
        let r = j.default.getUser(n.userId);
        return tA.intl.formatToPlainString(tA.t.DDO4Wz, { sender: tc.Ay.getName(r) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: n } = this.props;
        if (null == t) return null;
        let { error: s, accepted: r, isCustomGift: l, opened: a } = this.state;
        return !a && l
            ? null
            : (0, tu.e_)({
                  step: this.step,
                  sku: t,
                  libraryApplication: i,
                  error: s,
                  accepted: r,
                  accepting: e,
                  onGoToLibrary: this.handleGoToLibrary,
                  subscriptionPlan: n,
              });
    }
    get errorMessage() {
        let { libraryApplication: t, accepting: e } = this.props,
            { error: i, accepted: n } = this.state;
        return (0, tu.u1)(t, i, n, e, this.handleGoToLibrary);
    }
    get handleClick() {
        let { giftCode: t, onClose: e } = this.props;
        switch (this.step) {
            case tt.frR.ERROR:
                return e;
            case tt.frR.SUCCESS:
                if (__OVERLAY__ || null != t.subscriptionPlanId) return e;
                return this.handleGoToLibrary;
            case tt.frR.OPEN:
                return this.handleOpen;
            case tt.frR.CONFIRM:
            default:
                return this.handleAccept;
        }
    }
    handleOpen = () => {
        this.setState({ opened: !0 });
    };
    handleAccept = async () => {
        let {
            giftCode: t,
            channelContext: e,
            onAccept: i,
            resolving: n,
            onResolveGiftSubscriptionAgreement: s,
        } = this.props;
        if (null == t) throw Error("GiftCode is null at acceptance.");
        if (this.needsGiftSubscriptionAgreement) {
            n || s();
            return;
        }
        try {
            (await h.Ay.redeemGiftCode({ code: t.code, options: { channelId: e } }),
                this.setState({ accepted: !0 }),
                i?.());
        } catch (t) {
            this.setState({ error: t });
        }
    };
    handleGoToLibrary = () => {
        let { onClose: t, libraryApplication: e } = this.props;
        ((0, $.pX)(tt.BVt.APPLICATION_LIBRARY, { state: { applicationId: null != e ? e.id : void 0 } }), t());
    };
    getDefaultAnimationStatus = () => (this.step === tt.frR.OPEN ? T.oA.IDLE : T.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== tt.frR.OPEN) return T.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: n, sku: s, analyticsLocations: r } = this.props,
            { isCustomGift: l } = this.state;
        X.default.track(tt.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: r,
            has_custom_message: l,
            is_custom_message_edited: l && e !== tA.intl.string(tA.t.ZkOo1U),
            gift_style: t.giftStyle,
            gift_code: t.code,
            emoji_name: i,
            sound_id: n,
            product_line: s?.productLine,
        });
    }
    render() {
        let {
                application: t,
                accepting: e,
                resolving: i,
                onClose: s,
                giftCode: r,
                headerId: a,
                transitionState: o,
                useReducedMotion: p,
                onComplete: h,
                customGiftMessage: m,
                emojiName: g,
                soundId: A,
            } = this.props,
            R = j.default.getUser(r.userId),
            { isCustomGift: x, isCollectiblesGift: y, accepted: S, opened: C, emojiURL: I } = this.state,
            E = j.default.getCurrentUser(),
            b = this.step === tt.frR.ERROR,
            T = r?.userId != null && null != E && E?.id != null && r.userId === E.id;
        switch (this.step) {
            case tt.frR.ERROR:
                h?.(r, !1);
                break;
            case tt.frR.SUCCESS:
                h?.(r, !0);
        }
        return (0, n.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, n.jsxs)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: o,
                    size: u.rI.SMALL,
                    className: tR.yl,
                    "aria-labelledby": a,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != r.giftStyle &&
                            !x &&
                            !y &&
                            (0, n.jsx)(v.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: r.giftStyle,
                                className: tR.C9,
                            }),
                        !x && (0, n.jsx)("div", { className: tR.Dv }),
                        !y && (0, n.jsx)(u.s_, { "data-migration-pending": !0, onClick: s, className: tR.b }),
                        (0, n.jsxs)(u.$m, {
                            "data-migration-pending": !0,
                            className: l()({ [tR.Qs]: !x, [tR.Fl]: x }),
                            children: [
                                !y && (null == r.giftStyle || (x && S))
                                    ? (0, n.jsx)(Y.A, { size: Y.M.LARGE, game: t, skuId: r.skuId })
                                    : null,
                                (0, n.jsxs)(d.D, {
                                    id: a,
                                    className: l()({ [tR.Ry]: x && !S, [tR.wx]: !x || S }),
                                    variant: "heading-xs/semibold",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: l()({ [tR.Qw]: x }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, n.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(x && !S) &&
                                    (0, n.jsx)(c.E, {
                                        className: tR.rf,
                                        variant: "body-sm/normal",
                                        children: this.bodyText,
                                    }),
                                x &&
                                    !y &&
                                    null != r.giftStyle &&
                                    !S &&
                                    !b &&
                                    (0, n.jsx)(v.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: tR.l$,
                                        giftStyle: r.giftStyle,
                                    }),
                                this.state.opened && !b && y && (0, n.jsx)(q, { giftCode: r }),
                                b &&
                                    (0, n.jsx)(c.E, {
                                        className: tR.rf,
                                        variant: "body-md/normal",
                                        children: this.errorMessage,
                                    }),
                                this.step === tt.frR.CONFIRM &&
                                    this.hasGiftSubscriptionAgreementError &&
                                    (0, n.jsx)(c.E, {
                                        className: tR.rf,
                                        variant: "body-md/normal",
                                        role: "alert",
                                        children: tA.intl.string(tA.t.fEptJP),
                                    }),
                                x &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !b &&
                                    null != m &&
                                    "" !== m &&
                                    !T &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(d.D, {
                                                id: a,
                                                variant: "heading-sm/semibold",
                                                children: tA.intl.format(tA.t.DDO4Wz, { sender: tc.Ay.getName(R) }),
                                            }),
                                            (0, n.jsx)(c.E, {
                                                className: tR.$B,
                                                variant: "body-md/semibold",
                                                children: m,
                                            }),
                                        ],
                                    }),
                                (0, n.jsx)(f.$, {
                                    variant: "primary",
                                    text: this.buttonText,
                                    loading:
                                        e ||
                                        (i && C) ||
                                        (this.step === tt.frR.CONFIRM &&
                                            this.needsGiftSubscriptionAgreement &&
                                            !this.hasGiftSubscriptionAgreementError),
                                    onClick: () => {
                                        (this.trackStepAnalytics(), this.handleClick());
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                null != r.giftStyle &&
                    !p &&
                    this.step !== tt.frR.ERROR &&
                    !S &&
                    !e &&
                    C &&
                    (null == g || null == I
                        ? (0, n.jsx)(tx, { openedGift: !0 })
                        : (0, n.jsx)(tp.A, { confettiTarget: this.modalRef.current, emojiURL: I })),
                !S && !e && C && null != A && (0, n.jsx)(ty, { soundId: A, step: this.step }),
            ],
        });
    }
}
let tC = o.Ay.connectStores([tr.A, ta.A, x.A, ts.A, tl.A, m.Ay, y.A], (t) => {
        let { giftCode: e } = t,
            i = ta.A.get(e.skuId),
            n = null != i ? x.A.getApplication(i.applicationId) : null,
            s = m.Ay.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, tu.YI)(e.entitlementBranches, i, tr.A) : null,
            application: n,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, td.c9)(e.subscriptionPlanId) : null,
            accepting: ts.A.getIsAccepting(e.code),
            resolving: ts.A.getIsResolving(e.code),
            useReducedMotion: s,
        };
    })(function (t) {
        let e = (0, p.k)(),
            {
                sku: r,
                giftCode: l,
                channelContext: a,
                customGiftMessage: o,
                onClose: u,
                analyticsLocations: d,
                emojiName: c,
                soundId: f,
            } = t,
            h = null != r && (0, Q.bF)(r);
        return (s.useEffect(() => {
            if (h) {
                (((t) => {
                    let {
                            sku: e,
                            giftCode: s,
                            channelContext: r,
                            customGiftMessage: l,
                            analyticsLocations: a,
                            emojiName: o,
                            soundId: u,
                            contextKey: d,
                        } = t,
                        c = d ?? (0, J.lx)(),
                        f = !1;
                    function p(t) {
                        f = t.shouldIgnoreCloseRequest;
                    }
                    (0, J.mM)(
                        async () => {
                            let { default: t } = await Promise.all([
                                i.e(286615),
                                i.e(728809),
                                i.e(678157),
                                i.e(572963),
                                i.e(538513),
                                i.e(361684),
                                i.e(494544),
                            ]).then(i.bind(i, 173971));
                            return (i) =>
                                (0, n.jsx)(t, {
                                    ...i,
                                    sku: e,
                                    giftCode: s,
                                    channelContext: r,
                                    customGiftMessage: l,
                                    analyticsLocations: a,
                                    emojiName: o,
                                    soundId: u,
                                    onSetIgnoreCloseRequest: p,
                                });
                        },
                        {
                            modalKey: te,
                            contextKey: c,
                            onCloseRequest: () => {
                                f || (0, J.Oo)(te, c);
                            },
                            onCloseCallback: () => {
                                X.default.track(tt.HAw.SLAYER_STOREFRONT_MODAL_CLOSED, {
                                    type: Z.Nu,
                                    sku_id: e.id,
                                    application_id: e.applicationId,
                                    location_stack: a ?? [],
                                });
                            },
                        },
                    );
                })({
                    sku: r,
                    giftCode: l,
                    channelContext: a,
                    customGiftMessage: o,
                    analyticsLocations: d,
                    emojiName: c,
                    soundId: f,
                    contextKey: e,
                }),
                    u());
                return;
            }
        }, [r, h, a, o, l, u, d, c, f, e]),
        h)
            ? null
            : (0, n.jsx)(tS, { ...t });
    }),
    tI = function (t) {
        let { channelContext: e, code: i, customGiftMessage: r, emojiName: l, soundId: a, onClose: u, ...d } = t,
            c = (0, K.GV)(),
            f = (0, o.bG)([ts.A], () => ts.A.get(i)),
            { analyticsLocations: p } = (0, A.Ay)(g.A.GIFT_CODE_MODAL),
            { product: m } = (0, C.q)(f?.skuId, !0),
            [R, x] = s.useState(!1),
            y = null != f && f.isSubscription && void 0 === f.giftSubscriptionAgreement,
            I = s.useCallback(
                () =>
                    h.Ay.resolveGiftCode(i, !1, !0, !0).then(
                        (t) => {
                            let { giftCode: e } = t;
                            return x(void 0 === e.gift_subscription_agreement);
                        },
                        (t) => {
                            (x(!0), h.Ay.reportUnexpectedGiftCodeError(t));
                        },
                    ),
                [i],
            );
        return (s.useEffect(() => {
            y && I();
        }, [y, I]),
        null == f)
            ? null
            : (0, n.jsx)(tC, {
                  ...d,
                  customGiftMessage: r,
                  channelContext: e,
                  giftCode: f,
                  headerId: c,
                  emojiName: l,
                  soundId: a,
                  analyticsLocations: p,
                  giftSubscriptionAgreementFailed: R,
                  onResolveGiftSubscriptionAgreement: () => {
                      (x(!1), I());
                  },
                  onClose: u,
                  collectiblesItemType: (0, S.oj)(m),
                  onAccept:
                      null != m
                          ? () => {
                                (u(), (0, B.A)({ product: m, analyticsLocations: p, purchaseType: tm.gs.GIFT }));
                            }
                          : void 0,
              });
    };
