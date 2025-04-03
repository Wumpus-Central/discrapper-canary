n.d(t, { Z: () => P }), n(47120);
var r = n(200651);
n(192379);
var i = n(873546),
    l = n(704215),
    a = n(481060),
    o = n(570140),
    s = n(317770),
    c = n(605236),
    u = n(594174),
    d = n(431),
    p = n(74538),
    h = n(374023),
    f = n(775412),
    g = n(695349),
    m = n(913976),
    b = n(526552),
    _ = n(104494),
    E = n(29920),
    O = n(346497),
    N = n(727310),
    y = n(231541),
    I = n(318199),
    v = n(474936);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let S = 'PremiumServerDriveAnnouncementModal';
class T extends s.Z {
    _initialize() {
        o.Z.subscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), o.Z.subscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    _terminate() {
        o.Z.unsubscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), o.Z.unsubscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    constructor(...e) {
        super(...e),
            C(this, 'maybeOpenServerDriveAnnouncementModal', async (e, t) => {
                let i = (0, I.r)({
                    content: e,
                    isPreview: t
                });
                if (null != i) {
                    if (!1 === t) {
                        if ((null == i ? void 0 : i.contentIdentifier) === 'summer_bogo_content') {
                            if (!(await (0, O.k)())) return !1;
                        } else if ((null == i ? void 0 : i.contentIdentifier) === 'Q1_MARKETING_MOMENT_ANNOUNCEMENT_CONTENT_IDENTIFIER' && !1 === (0, y.M)({ location: 'OfferAnnouncementManager' })) return !1;
                    }
                    return (
                        (0, a.Mr3)(S),
                        (0, a.ZDy)(
                            async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 318199));
                                return (t) =>
                                    (0, r.jsx)(e, {
                                        renderModalProps: t,
                                        properties: i
                                    });
                            },
                            { modalKey: S }
                        ),
                        !0
                    );
                }
                return !1;
            }),
            C(this, 'handlePreview', (e) => {
                let { properties: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t, !0);
            }),
            C(this, 'getOfferFromStore', () => {
                let e = u.default.getCurrentUser();
                if ((0, p.I5)(e)) return {};
                let t = [v.hs, v.RU, v.rB, v.ih]
                    .map((e) => d.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, _.kA)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, f.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            C(this, 'mayShowAnnouncementModal', async () => {
                if ((await (0, O.l2)(), h.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = b.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).enabled,
                    n = (0, c.un)(l.z.Q1_2025_FOLLOW_UP_REVERSE_TRIAL_OFFER),
                    r = u.default.getCurrentUser();
                if ((!t || n || (0, a.$sL)() || (0, p.I5)(r) || ((await (0, g.G)(e.userTrialOffer)) && (0, N.Z)({ upsellType: v.cd.REVERSE_TRIAL_FOLLOWUP_UPSELL })), (null == r || r.verified) && !(0, a.$sL)() && m.Z.getCurrentConfig({ location: 'OfferAnnouncementManager' }).enabled && !i.tq)) {
                    for (let t of await (0, E.He)(e)) if (await this.maybeOpenServerDriveAnnouncementModal(t, !1)) break;
                }
            });
    }
}
let P = new T();
