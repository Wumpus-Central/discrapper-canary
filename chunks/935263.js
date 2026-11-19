i.d(e, { default: () => tT });
var n = i(477900),
    s = i(582128),
    l = i(503698),
    r = i.n(l),
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
    C = i(993408),
    S = i(674658),
    I = i(778712),
    T = i(97808),
    j = i(289873),
    E = i(242874),
    v = i(446263),
    N = i(287809),
    O = i(562819),
    b = i(215689),
    _ = i(872200),
    P = i(139136),
    L = i(395744),
    k = i(842385),
    M = i(864449);
let G = I._3.SIZE_152,
    w = (0, O.Te)(G);
function U(t) {
    let { responsive: e } = t;
    return !0 !== e;
}
function F(t) {
    let { item: e } = t,
        i = (0, o.bG)([N.default], () => N.default.getCurrentUser()),
        {
            avatarDecorationSrc: s,
            avatarPlaceholderSrc: l,
            eventHandlers: r,
        } = (0, b.A)({ user: i, avatarDecorationOverride: e, size: w });
    return (0, n.jsx)("div", {
        className: M._P,
        children: (0, n.jsx)(T.eu, { ...r, "aria-label": e.label, src: l, avatarDecoration: s, size: G }),
    });
}
function D(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", { className: M.xC, children: (0, n.jsx)(P.A, { isHighlighted: !0, skuId: e?.skuId }) });
}
function H(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", { className: M.pI, children: (0, n.jsx)(L.A, { frame: e, filterLayer: U }) });
}
function V(t) {
    let { item: e } = t;
    return (0, n.jsx)("div", {
        className: M.M4,
        children: (0, n.jsx)(_.A, {
            nameplate: e,
            className: M.qF,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
function z(t) {
    let { product: e } = t;
    return (0, n.jsx)("div", { className: M.hT, children: (0, n.jsx)(k.X, { product: e, isHighlighted: !1 }) });
}
let B = function (t) {
    let { giftCode: e } = t,
        { product: i, isFetching: s } = (0, S.q)(e.skuId, !0);
    if (s || null == i) return (0, n.jsx)("div", { className: M.dc, children: (0, n.jsx)(j.y, {}) });
    if (i.type === a.R.BUNDLE) return 0 === i.items.length ? null : (0, n.jsx)(z, { product: i });
    let l = i?.items[0];
    switch (l?.type) {
        case a.R.AVATAR_DECORATION:
            return (0, n.jsx)(F, { item: l });
        case a.R.PROFILE_EFFECT:
            return (0, n.jsx)(D, { item: l });
        case a.R.NAMEPLATE:
            return (0, n.jsx)(V, { item: l });
        case a.R.PROFILE_FRAME:
            return (0, n.jsx)(H, { item: l });
        default:
            return null != e.giftStyle
                ? (0, n.jsx)(v.A, {
                      defaultAnimationState: E.oA.ACTION,
                      idleAnimationState: E.oA.LOOP,
                      className: M.l$,
                      giftStyle: e.giftStyle,
                  })
                : null;
    }
};
var q = i(61750),
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
    tl = i(189081),
    tr = i(97352),
    ta = i(67480),
    to = i(690521),
    tu = i(45938),
    td = i(615396),
    tc = i(427262),
    tf = i(153626),
    tp = i(84740),
    th = i(518926),
    tm = i(682901),
    tg = i(758836),
    tA = i(50302),
    tR = i(792996),
    tx = i(368773);
function ty(t) {
    let { openedGift: e } = t,
        { createMultipleConfettiAt: i } = s.useContext(W.x);
    return (
        s.useEffect(() => {
            e && i(window.innerWidth / 2, window.innerHeight / 4);
        }, [i, e]),
        null
    );
}
function tC(t) {
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
        let l = null != i || null != n.giftStyle,
            r = (0, C.hU)(n),
            a = null != s ? to.Ay.getURL(s) : void 0;
        (this.setState({ isCustomGift: l, isCollectiblesGift: r, emojiURL: a, opened: r }), this.trackStepAnalytics());
    }
    get step() {
        let { libraryApplication: t, accepting: e, giftCode: i } = this.props,
            { error: n, accepted: s, opened: l, isCustomGift: r } = this.state;
        return (0, tu.v3)(t, i, { error: n, accepted: s, accepting: e, opened: l, isCustomGift: r });
    }
    get buttonText() {
        return (0, tu.UJ)(this.step, this.props.giftCode, { isCustomGift: this.state.isCustomGift });
    }
    get isConfirmingPendingGiftSubscription() {
        return this.step === tt.frR.CONFIRM && (0, tf.m)(this.props.giftCode);
    }
    get firstHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: n, subscriptionPlan: s, collectiblesItemType: l } = this.props;
        if (t && this.step === tt.frR.ERROR) return tR.intl.formatToMarkdownString(tR.t.JUvC0s, {});
        if (this.isConfirmingPendingGiftSubscription)
            return tR.intl.formatToPlainString(tA.default.lhj054, { name: tc.Ay.getName(N.default.getUser(n.userId)) });
        if (t && !i)
            if (!e)
                return tR.intl.formatToPlainString(tR.t.xHzRub, {
                    recipientDisplayName: tc.Ay.getName(N.default.getCurrentUser()),
                });
            else {
                let t = N.default.getUser(n.userId),
                    e = tc.Ay.getName(t);
                if (null != l)
                    switch (l) {
                        case a.R.AVATAR_DECORATION:
                            return tR.intl.formatToPlainString(tR.t.SKduyh, { sender: e });
                        case a.R.PROFILE_EFFECT:
                            return tR.intl.formatToPlainString(tR.t["1w42T2"], { sender: e });
                        case a.R.NAMEPLATE:
                            return tR.intl.formatToPlainString(tR.t.vFiQlU, { sender: e });
                        case a.R.PROFILE_FRAME:
                            return tR.intl.formatToPlainString(tR.t["UH/EQL"], { sender: e });
                        default:
                            return tR.intl.formatToPlainString(tR.t.U4Ko2y, { sender: e });
                    }
                return s?.interval === tm.WT.MONTH && s.intervalCount > 1
                    ? tR.intl.formatToPlainString(tA.default.E7QYGI, { sender: e, intervalCount: s.intervalCount })
                    : tR.intl.formatToPlainString(tR.t["0UR0u4"], {
                          sender: e,
                          timeInterval:
                              s?.interval === tm.WT.MONTH ? tR.intl.string(tR.t.FPybU7) : tR.intl.string(tR.t.tfqrhj),
                      });
            }
        return null == this.props.sku ? null : (0, tu.n$)(this.step, this.props.giftCode, this.props.sku);
    }
    get secondHeaderText() {
        let { isCustomGift: t, opened: e, accepted: i } = this.state,
            { giftCode: n, subscriptionPlan: s } = this.props;
        if (this.isConfirmingPendingGiftSubscription && null != s)
            return tR.intl.string(s.interval === tm.WT.MONTH ? tA.default.p3wUY4 : tA.default.RdrnRc);
        if (!t || i || e) return null;
        let l = N.default.getUser(n.userId);
        return tR.intl.formatToPlainString(tR.t.DDO4Wz, { sender: tc.Ay.getName(l) });
    }
    get bodyText() {
        let { sku: t, accepting: e, libraryApplication: i, subscriptionPlan: n } = this.props;
        if (null == t) return null;
        let { error: s, accepted: l, isCustomGift: r, opened: a } = this.state;
        return (!a && r) || this.isConfirmingPendingGiftSubscription
            ? null
            : this.step === tt.frR.SUCCESS && (0, tf.m)(this.props.giftCode)
              ? tR.intl.string(tA.default.fdrOGN)
              : (0, tu.e_)({
                    step: this.step,
                    sku: t,
                    libraryApplication: i,
                    error: s,
                    accepted: l,
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
        let { giftCode: t, channelContext: e, onAccept: i, isResolvingAgreement: n } = this.props;
        if (null == t) throw Error("GiftCode is null at acceptance.");
        if (!n)
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
    getDefaultAnimationStatus = () => (this.step === tt.frR.OPEN ? E.oA.IDLE : E.oA.ACTION);
    getIdleAnimationStatus = () => {
        if (this.step !== tt.frR.OPEN) return E.oA.LOOP;
    };
    trackStepAnalytics() {
        let { giftCode: t, customGiftMessage: e, emojiName: i, soundId: n, sku: s, analyticsLocations: l } = this.props,
            { isCustomGift: r } = this.state;
        X.default.track(tt.HAw.GIFT_ACCEPT_STEP, {
            to_step: this.step,
            location_stack: l,
            has_custom_message: r,
            is_custom_message_edited: r && e !== tR.intl.string(tR.t.ZkOo1U),
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
                isResolvingAgreement: s,
                onClose: l,
                giftCode: a,
                headerId: o,
                transitionState: p,
                useReducedMotion: h,
                onComplete: m,
                customGiftMessage: g,
                emojiName: A,
                soundId: R,
            } = this.props,
            x = N.default.getUser(a.userId),
            { isCustomGift: y, isCollectiblesGift: C, accepted: S, opened: I, emojiURL: T } = this.state,
            j = N.default.getCurrentUser(),
            E = this.step === tt.frR.ERROR,
            O = a?.userId != null && null != j && j?.id != null && a.userId === j.id;
        switch (this.step) {
            case tt.frR.ERROR:
                m?.(a, !1);
                break;
            case tt.frR.SUCCESS:
                m?.(a, !0);
        }
        return (0, n.jsxs)("div", {
            ref: this.modalRef,
            children: [
                (0, n.jsxs)(u.EO, {
                    "data-migration-pending": !0,
                    transitionState: p,
                    size: u.rI.SMALL,
                    className: tx.yl,
                    "aria-labelledby": o,
                    parentComponent: "GiftCodeModal",
                    children: [
                        null != a.giftStyle &&
                            !y &&
                            !C &&
                            (0, n.jsx)(v.A, {
                                defaultAnimationState: this.getDefaultAnimationStatus(),
                                idleAnimationState: this.getIdleAnimationStatus(),
                                giftStyle: a.giftStyle,
                                className: tx.C9,
                            }),
                        !y && (0, n.jsx)("div", { className: tx.Dv }),
                        !C && (0, n.jsx)(u.s_, { "data-migration-pending": !0, onClick: l, className: tx.b }),
                        (0, n.jsxs)(u.$m, {
                            "data-migration-pending": !0,
                            className: r()({ [tx.Qs]: !y, [tx.Fl]: y }),
                            children: [
                                !C && (null == a.giftStyle || (y && S))
                                    ? (0, n.jsx)(Y.A, { size: Y.M.LARGE, game: t, skuId: a.skuId })
                                    : null,
                                (0, n.jsxs)(d.D, {
                                    id: o,
                                    className: r()({ [tx.Ry]: y && !S, [tx.wx]: !y || S }),
                                    variant: "heading-xs/semibold",
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: r()({ [tx.Qw]: y }),
                                            children: this.firstHeaderText,
                                        }),
                                        (0, n.jsx)("div", { children: this.secondHeaderText }),
                                    ],
                                }),
                                !(y && !S) &&
                                    (0, n.jsx)(c.E, {
                                        className: tx.rf,
                                        variant: "body-sm/normal",
                                        children: this.bodyText,
                                    }),
                                y &&
                                    !C &&
                                    null != a.giftStyle &&
                                    !S &&
                                    !E &&
                                    (0, n.jsx)(v.A, {
                                        defaultAnimationState: this.getDefaultAnimationStatus(),
                                        idleAnimationState: this.getIdleAnimationStatus(),
                                        className: tx.l$,
                                        giftStyle: a.giftStyle,
                                    }),
                                this.state.opened && !E && C && (0, n.jsx)(B, { giftCode: a }),
                                E &&
                                    (0, n.jsx)(c.E, {
                                        className: tx.rf,
                                        variant: "body-md/normal",
                                        children: this.errorMessage,
                                    }),
                                y &&
                                    this.state.opened &&
                                    !this.state.accepted &&
                                    !E &&
                                    null != g &&
                                    "" !== g &&
                                    !O &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(d.D, {
                                                id: o,
                                                variant: "heading-sm/semibold",
                                                children: tR.intl.format(tR.t.DDO4Wz, { sender: tc.Ay.getName(x) }),
                                            }),
                                            (0, n.jsx)(c.E, {
                                                className: tx.$B,
                                                variant: "body-md/semibold",
                                                children: g,
                                            }),
                                        ],
                                    }),
                                (0, n.jsx)(f.$, {
                                    variant: "primary",
                                    text: this.buttonText,
                                    loading: e || (i && I) || (this.step === tt.frR.CONFIRM && s),
                                    onClick: () => {
                                        (this.trackStepAnalytics(), this.handleClick());
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                null != a.giftStyle &&
                    !h &&
                    this.step !== tt.frR.ERROR &&
                    !S &&
                    !e &&
                    I &&
                    (null == A || null == T
                        ? (0, n.jsx)(ty, { openedGift: !0 })
                        : (0, n.jsx)(th.A, { confettiTarget: this.modalRef.current, emojiURL: T })),
                !S && !e && I && null != R && (0, n.jsx)(tC, { soundId: R, step: this.step }),
            ],
        });
    }
}
let tI = o.Ay.connectStores([tl.A, ta.A, x.A, ts.A, tr.A, m.Ay, y.A], (t) => {
        let { giftCode: e } = t,
            i = ta.A.get(e.skuId),
            n = null != i ? x.A.getApplication(i.applicationId) : null,
            s = m.Ay.useReducedMotion;
        return {
            sku: i,
            libraryApplication:
                null != i && e?.entitlementBranches != null ? (0, tu.YI)(e.entitlementBranches, i, tl.A) : null,
            application: n,
            subscriptionPlan: null != e.subscriptionPlanId ? (0, td.c9)(e.subscriptionPlanId) : null,
            accepting: ts.A.getIsAccepting(e.code),
            resolving: ts.A.getIsResolving(e.code),
            useReducedMotion: s,
        };
    })(function (t) {
        let e = (0, p.k)(),
            {
                sku: l,
                giftCode: r,
                channelContext: a,
                customGiftMessage: o,
                onClose: u,
                analyticsLocations: d,
                emojiName: c,
                soundId: f,
            } = t,
            h = null != l && (0, Q.bF)(l);
        return (s.useEffect(() => {
            if (h) {
                (((t) => {
                    let {
                            sku: e,
                            giftCode: s,
                            channelContext: l,
                            customGiftMessage: r,
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
                                    channelContext: l,
                                    customGiftMessage: r,
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
                    sku: l,
                    giftCode: r,
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
        }, [l, h, a, o, r, u, d, c, f, e]),
        h)
            ? null
            : (0, n.jsx)(tS, { ...t });
    }),
    tT = function (t) {
        let { channelContext: e, code: i, customGiftMessage: s, emojiName: l, soundId: r, onClose: a, ...u } = t,
            d = (0, K.GV)(),
            c = (0, o.bG)([ts.A], () => ts.A.get(i)),
            { analyticsLocations: f } = (0, A.Ay)(g.A.GIFT_CODE_MODAL),
            { product: p } = (0, S.q)(c?.skuId, !0),
            { isResolvingAgreement: h } = (0, tp.A)(c);
        return null == c
            ? null
            : (0, n.jsx)(tI, {
                  ...u,
                  customGiftMessage: s,
                  channelContext: e,
                  giftCode: c,
                  headerId: d,
                  emojiName: l,
                  soundId: r,
                  analyticsLocations: f,
                  isResolvingAgreement: h,
                  onClose: a,
                  collectiblesItemType: (0, C.oj)(p),
                  onAccept:
                      null != p
                          ? () => {
                                (a(), (0, q.A)({ product: p, analyticsLocations: f, purchaseType: tg.gs.GIFT }));
                            }
                          : void 0,
              });
    };
