n.d(t, { Z: () => P }), n(388685);
var r = n(951288);
n(647438);
var i = n(873546),
    l = n(79766),
    a = n(704215),
    s = n(481060),
    o = n(570140),
    c = n(317770),
    u = n(266454),
    d = n(137691),
    p = n(594174),
    f = n(431),
    h = n(74538),
    g = n(374023),
    m = n(367074),
    _ = n(775412),
    b = n(695349),
    E = n(312973),
    O = n(434878),
    y = n(29920),
    v = n(346497),
    I = n(727310),
    C = n(318199),
    S = n(474936);
function T(e, t, n) {
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
let N = "PremiumServerDriveAnnouncementModal";
class j extends c.Z {
    _initialize() {
        o.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            o.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            o.Z.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess);
    }
    _terminate() {
        o.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            o.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            o.Z.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess);
    }
    constructor(...e) {
        super(...e),
            T(this, "handleActivePromotionsFetchSuccess", (e) => {
                let { promotions: t } = e;
                for (let e of t)
                    if (null != e.marketing_components) {
                        for (let t of e.marketing_components)
                            if (t.component_type === l.I.ANNOUNCEMENT_MODAL)
                                return void this.maybeOpenServerDriveAnnouncementModal(t.id, t.properties, !1);
                    }
            }),
            T(this, "maybeOpenServerDriveAnnouncementModal", async (e, t, i) => {
                let l = (0, C.r)({
                    content: t,
                    isPreview: i,
                });
                if (null != l)
                    return (
                        (!1 !== i ||
                            (null == l ? void 0 : l.contentIdentifier) !== "summer_bogo_content" ||
                            !!(await (0, v.k)())) &&
                        ((0, s.Mr3)(N),
                        (0, s.ZDy)(
                            async () => {
                                let { default: t } = await Promise.resolve().then(n.bind(n, 318199));
                                return (n) =>
                                    (0, r.jsx)(t, {
                                        renderModalProps: n,
                                        componentId: e,
                                        properties: l,
                                    });
                            },
                            { modalKey: N },
                        ),
                        !0)
                    );
                return !1;
            }),
            T(this, "handlePreview", (e) => {
                let { data: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t.id, t.properties, !0);
            }),
            T(this, "getOfferFromStore", () => {
                let e = p.default.getCurrentUser();
                if ((0, h.I5)(e)) return {};
                let t = [S.hs, S.RU, S.rB, S.ih]
                    .map((e) => f.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, d.k)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, _.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            T(this, "mayShowAnnouncementModal", async () => {
                if ((await (0, m.l2)(), g.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = O.Z.getCurrentConfig({ location: "announcementManager" }, { autoTrackExposure: !1 }).enabled,
                    n = (0, E.$)({ location: "mayShowAnnouncementModal" }),
                    r = (0, u.zu)(a.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
                    l = p.default.getCurrentUser();
                if (
                    (!t ||
                        r ||
                        (0, s.$sL)() ||
                        (0, h.I5)(l) ||
                        ((await (0, b.G)(e.userTrialOffer)) &&
                            (0, I.Z)({ upsellType: S.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL })),
                    (null == l || l.verified) && !(0, s.$sL)() && !i.tq && !n)
                ) {
                    for (let t of await (0, y.He)(e))
                        if (await this.maybeOpenServerDriveAnnouncementModal("", t, !1)) break;
                }
            });
    }
}
let P = new j();
