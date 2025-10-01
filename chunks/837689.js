n.d(t, { Z: () => N }), n(388685);
var r = n(951288);
n(647438);
var i = n(873546),
    l = n(704215),
    a = n(481060),
    o = n(570140),
    s = n(317770),
    c = n(266454),
    u = n(594174),
    d = n(431),
    p = n(74538),
    f = n(374023),
    h = n(367074),
    g = n(775412),
    m = n(695349),
    b = n(434878),
    _ = n(104494),
    O = n(29920),
    E = n(346497),
    y = n(727310),
    v = n(318199),
    I = n(474936);
function S(e, t, n) {
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
let C = "PremiumServerDriveAnnouncementModal";
class T extends s.Z {
    _initialize() {
        o.Z.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            o.Z.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview);
    }
    _terminate() {
        o.Z.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            o.Z.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview);
    }
    constructor(...e) {
        super(...e),
            S(this, "maybeOpenServerDriveAnnouncementModal", async (e, t) => {
                let i = (0, v.r)({
                    content: e,
                    isPreview: t,
                });
                if (null != i)
                    return (
                        (!1 !== t ||
                            (null == i ? void 0 : i.contentIdentifier) !== "summer_bogo_content" ||
                            !!(await (0, E.k)())) &&
                        ((0, a.Mr3)(C),
                        (0, a.ZDy)(
                            async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 318199));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        renderModalProps: t,
                                        properties: i,
                                    });
                            },
                            { modalKey: C },
                        ),
                        !0)
                    );
                return !1;
            }),
            S(this, "handlePreview", (e) => {
                let { properties: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t, !0);
            }),
            S(this, "getOfferFromStore", () => {
                let e = u.default.getCurrentUser();
                if ((0, p.I5)(e)) return {};
                let t = [I.hs, I.RU, I.rB, I.ih]
                    .map((e) => d.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, _.kA)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, g.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            S(this, "mayShowAnnouncementModal", async () => {
                if ((await (0, h.l2)(), f.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = b.Z.getCurrentConfig({ location: "announcementManager" }, { autoTrackExposure: !1 }).enabled,
                    n = (0, c.zu)(l.z.Q2_2025_MARKETING_MOMENT_FOLLOW_UP_MODAL),
                    r = u.default.getCurrentUser();
                if (
                    (!t ||
                        n ||
                        (0, a.$sL)() ||
                        (0, p.I5)(r) ||
                        ((await (0, m.G)(e.userTrialOffer)) &&
                            (0, y.Z)({ upsellType: I.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL })),
                    (null == r || r.verified) && !(0, a.$sL)() && !i.tq)
                ) {
                    for (let t of await (0, O.He)(e))
                        if (await this.maybeOpenServerDriveAnnouncementModal(t, !1)) break;
                }
            });
    }
}
let N = new T();
