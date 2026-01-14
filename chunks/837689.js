n.d(t, { Z: () => w }), n(388685);
var r = n(54381);
n(473749);
var i = n(873546),
    l = n(79766),
    a = n(704215),
    o = n(481060),
    s = n(570140),
    c = n(317770),
    u = n(266454),
    d = n(86376),
    p = n(605338),
    f = n(594174),
    g = n(431),
    h = n(74538),
    m = n(374023),
    b = n(709054),
    _ = n(367074),
    E = n(775412),
    O = n(695349),
    v = n(312973),
    I = n(434878),
    y = n(29920),
    C = n(1844),
    S = n(397047),
    T = n(346497),
    N = n(727310),
    j = n(318199),
    x = n(474936);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let A = "PremiumServerDriveAnnouncementModal";
class Z extends c.Z {
    _initialize() {
        s.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            s.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            s.Z.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            s.Z.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    _terminate() {
        s.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            s.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            s.Z.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            s.Z.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess);
    }
    constructor(...e) {
        super(...e),
            P(this, "maybeShowAnnouncementModalFromPromotions", (e) => {
                for (let t of e)
                    if (null != t.marketingComponents) {
                        if (null != t.trialId) {
                            let e = g.Z.getUserTrialOffer(t.trialId);
                            if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                        }
                        for (let e of t.marketingComponents)
                            if (e.component_type === l.I.ANNOUNCEMENT_MODAL)
                                return void this.maybeOpenServerDriveAnnouncementModal(
                                    e.id,
                                    e.promotion_id,
                                    e.properties,
                                    !1,
                                );
                    }
            }),
            P(this, "handleActivePromotionsFetchSuccess", (e) => {
                let { promotions: t } = e;
                this.maybeShowAnnouncementModalFromPromotions(t.map((e) => p.Z.createFromServer(e)));
            }),
            P(this, "handleUserOfferFetchSuccess", (e) => {
                let { userTrialOffer: t } = e;
                null != t &&
                    this.maybeShowAnnouncementModalFromPromotions(
                        Object.values(C.Z.promotionsByType[S.$k.MARKETING_MOMENT]),
                    );
            }),
            P(this, "maybeOpenServerDriveAnnouncementModal", async (e, t, i, l) => {
                if ((0, o.nfh)(A)) return !1;
                let a = (0, j.r)({
                    promotionId: t,
                    content: i,
                    isPreview: l,
                });
                if (null != a)
                    return (
                        (!1 !== l ||
                            (null == a ? void 0 : a.contentIdentifier) !== "summer_bogo_content" ||
                            !!(await (0, T.k)())) &&
                        ((0, o.ZDy)(
                            async () => {
                                let { default: i } = await Promise.resolve().then(n.bind(n, 318199));
                                return (n) =>
                                    (0, r.jsx)(i, {
                                        renderModalProps: n,
                                        componentId: e,
                                        promotionId: t,
                                        properties: a,
                                    });
                            },
                            { modalKey: A },
                        ),
                        !0)
                    );
                return !1;
            }),
            P(this, "handlePreview", (e) => {
                let { data: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
            }),
            P(this, "getOfferFromStore", () => {
                let e = f.default.getCurrentUser();
                if ((0, h.I5)(e)) return {};
                let t = [x.hs, x.RU, x.rB, x.ih]
                    .map((e) => g.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, d.k)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, E.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            P(this, "mayShowAnnouncementModal", async () => {
                if ((await (0, _.l2)(), m.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = I.Z.getCurrentConfig({ location: "announcementManager" }, { autoTrackExposure: !1 }).enabled,
                    n = (0, v.$)({ location: "mayShowAnnouncementModal" }),
                    r = (0, u.zu)(a.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
                    l = f.default.getCurrentUser();
                if (
                    (!t ||
                        r ||
                        (0, o.$sL)() ||
                        (0, h.I5)(l) ||
                        ((await (0, O.G)(e.userTrialOffer)) &&
                            (0, N.Z)({ upsellType: x.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL })),
                    (null == l || l.verified) && !(0, o.$sL)() && !i.tq && !n)
                ) {
                    for (let t of await (0, y.He)(e))
                        if (
                            await this.maybeOpenServerDriveAnnouncementModal(
                                "",
                                b.default.fromTimestamp(Date.now()),
                                t,
                                !1,
                            )
                        )
                            break;
                }
            });
    }
}
let w = new Z();
