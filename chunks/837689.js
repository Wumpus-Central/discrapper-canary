n.d(t, { Z: () => x }), n(47120);
var i = n(200651);
n(192379);
var l = n(873546),
    r = n(704215),
    a = n(481060),
    s = n(570140),
    o = n(317770),
    c = n(605236),
    d = n(594174),
    u = n(431),
    h = n(74538),
    m = n(374023),
    p = n(775412),
    g = n(695349),
    _ = n(913976),
    f = n(533990),
    E = n(104494),
    I = n(29920),
    C = n(346497),
    v = n(727310),
    N = n(318199),
    T = n(474936);
function S(e, t, n) {
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
let A = 'PremiumServerDriveAnnouncementModal';
class Z extends o.Z {
    _initialize() {
        s.Z.subscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), s.Z.subscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    _terminate() {
        s.Z.unsubscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), s.Z.unsubscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    constructor(...e) {
        super(...e),
            S(this, 'maybeOpenServerDriveAnnouncementModal', async (e, t) => {
                let l = (0, N.r)({
                    content: e,
                    isPreview: t
                });
                return (
                    null != l &&
                    !!(!1 !== t || (null == l ? void 0 : l.contentIdentifier) !== 'summer_bogo_content' || (await (0, C.k)())) &&
                    ((0, a.Mr3)(A),
                    (0, a.ZDy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 318199));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    renderModalProps: t,
                                    properties: l
                                });
                        },
                        { modalKey: A }
                    ),
                    !0)
                );
            }),
            S(this, 'handlePreview', (e) => {
                let { properties: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t, !0);
            }),
            S(this, 'getOfferFromStore', () => {
                let e = d.default.getCurrentUser();
                if ((0, h.I5)(e)) return {};
                let t = [T.hs, T.RU, T.rB, T.ih]
                    .map((e) => u.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, E.kA)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, p.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            S(this, 'mayShowAnnouncementModal', async () => {
                if ((await (0, C.l2)(), m.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = f.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).inExperiment || f.Z.isAAMode({ location: 'announcementManager' }),
                    n = (0, c.un)(r.z.REVERSE_TRIAL_ENDED_UPSELL),
                    i = d.default.getCurrentUser();
                if (t && !n && !(0, a.$sL)() && !(0, h.I5)(i)) {
                    let t = await (0, g.r)(e.userTrialOffer);
                    null != t && (0, v.Z)({ upsellType: t });
                }
                if ((null == i || i.verified) && !(0, a.$sL)() && _.Z.getCurrentConfig({ location: 'OfferAnnouncementManager' }).enabled && !l.tq) {
                    for (let t of await (0, I.He)(e)) if (await this.maybeOpenServerDriveAnnouncementModal(t, !1)) break;
                }
            });
    }
}
let x = new Z();
