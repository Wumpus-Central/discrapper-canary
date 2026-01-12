n.d(t, { Z: () => x }), n(388685);
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
    p = n(594174),
    f = n(431),
    g = n(74538),
    h = n(374023),
    m = n(709054),
    b = n(367074),
    _ = n(775412),
    E = n(695349),
    O = n(312973),
    v = n(434878),
    y = n(29920),
    I = n(346497),
    C = n(727310),
    S = n(318199),
    T = n(474936);
function N(e, t, n) {
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
let j = "PremiumServerDriveAnnouncementModal";
class P extends c.Z {
    _initialize() {
        s.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            s.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            s.Z.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess);
    }
    _terminate() {
        s.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            s.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            s.Z.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess);
    }
    constructor(...e) {
        super(...e),
            N(this, "handleActivePromotionsFetchSuccess", (e) => {
                let { promotions: t } = e;
                for (let e of t)
                    if (null != e.marketing_components) {
                        if (null != e.trial_id && null == f.Z.getUserTrialOffer(e.trial_id)) continue;
                        for (let t of e.marketing_components)
                            if (t.component_type === l.I.ANNOUNCEMENT_MODAL)
                                return void this.maybeOpenServerDriveAnnouncementModal(
                                    t.id,
                                    t.promotion_id,
                                    t.properties,
                                    !1,
                                );
                    }
            }),
            N(this, "maybeOpenServerDriveAnnouncementModal", async (e, t, i, l) => {
                let a = (0, S.r)({
                    promotionId: t,
                    content: i,
                    isPreview: l,
                });
                if (null != a)
                    return (
                        (!1 !== l ||
                            (null == a ? void 0 : a.contentIdentifier) !== "summer_bogo_content" ||
                            !!(await (0, I.k)())) &&
                        ((0, o.Mr3)(j),
                        (0, o.ZDy)(
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
                            { modalKey: j },
                        ),
                        !0)
                    );
                return !1;
            }),
            N(this, "handlePreview", (e) => {
                let { data: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
            }),
            N(this, "getOfferFromStore", () => {
                let e = p.default.getCurrentUser();
                if ((0, g.I5)(e)) return {};
                let t = [T.hs, T.RU, T.rB, T.ih]
                    .map((e) => f.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, d.k)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, _.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            N(this, "mayShowAnnouncementModal", async () => {
                if ((await (0, b.l2)(), h.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = v.Z.getCurrentConfig({ location: "announcementManager" }, { autoTrackExposure: !1 }).enabled,
                    n = (0, O.$)({ location: "mayShowAnnouncementModal" }),
                    r = (0, u.zu)(a.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
                    l = p.default.getCurrentUser();
                if (
                    (!t ||
                        r ||
                        (0, o.$sL)() ||
                        (0, g.I5)(l) ||
                        ((await (0, E.G)(e.userTrialOffer)) &&
                            (0, C.Z)({ upsellType: T.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL })),
                    (null == l || l.verified) && !(0, o.$sL)() && !i.tq && !n)
                ) {
                    for (let t of await (0, y.He)(e))
                        if (
                            await this.maybeOpenServerDriveAnnouncementModal(
                                "",
                                m.default.fromTimestamp(Date.now()),
                                t,
                                !1,
                            )
                        )
                            break;
                }
            });
    }
}
let x = new P();
