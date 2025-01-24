n(47120);
var i = n(200651);
n(192379);
var r = n(873546),
    l = n(704215),
    a = n(481060),
    s = n(570140),
    o = n(317770),
    c = n(605236),
    d = n(594174),
    u = n(431),
    h = n(74538),
    m = n(374023),
    p = n(775412),
    g = n(913976),
    f = n(533990),
    _ = n(104494),
    E = n(29920),
    I = n(346497),
    C = n(278945),
    v = n(727310),
    N = n(318199),
    S = n(474936);
function T(e, t, n) {
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
let b = 'PremiumServerDriveAnnouncementModal';
class A extends o.Z {
    _initialize() {
        s.Z.subscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), s.Z.subscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    _terminate() {
        s.Z.unsubscribe('PREMIUM_MARKETING_DATA_READY', this.mayShowAnnouncementModal), s.Z.unsubscribe('PREMIUM_MARKETING_PREVIEW', this.handlePreview);
    }
    constructor(...e) {
        super(...e),
            T(this, 'maybeOpenServerDriveAnnouncementModal', async (e, t) => {
                let r = (0, N.extractAnnouncementModalContent)({
                    content: e,
                    isPreview: t
                });
                if (null != r)
                    return (
                        !!(!1 !== t || (null == r ? void 0 : r.contentIdentifier) !== 'summer_bogo_content' || (await (0, I.k)())) &&
                        ((0, a.closeModal)(b),
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 318199));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        renderModalProps: t,
                                        properties: r
                                    });
                            },
                            { modalKey: b }
                        ),
                        !0)
                    );
                return !1;
            }),
            T(this, 'handlePreview', (e) => {
                let { properties: t } = e;
                this.maybeOpenServerDriveAnnouncementModal(t, !0);
            }),
            T(this, 'getOfferFromStore', () => {
                let e = d.default.getCurrentUser();
                if ((0, h.I5)(e)) return {};
                let t = [S.hs, S.RU, S.rB, S.ih]
                    .map((e) => u.Z.getUserDiscountOffer(e))
                    .filter((e) => null != e && !(0, _.kA)(e))
                    .shift();
                if (null != t) return { userDiscountOffer: t };
                let n = (0, p.J0)();
                return null != n ? { userTrialOffer: n } : {};
            }),
            T(this, 'mayShowAnnouncementModal', async () => {
                if ((await (0, I.l2)(), m.s.isDisallowPopupsSet())) return;
                let e = this.getOfferFromStore(),
                    t = f.Z.getCurrentConfig({ location: 'announcementManager' }, { autoTrackExposure: !1 }).inExperiment || f.Z.isAAMode({ location: 'announcementManager' }),
                    n = (0, c.un)(l.z.REVERSE_TRIAL_ENDED_UPSELL),
                    i = d.default.getCurrentUser();
                if (t && !n && !(0, a.hasAnyModalOpen)() && !(0, h.I5)(i)) {
                    let t = await (0, C.r)(e.userTrialOffer);
                    null != t && (0, v.Z)({ upsellType: t });
                }
                if (null == i || !!i.verified) {
                    if (!(0, a.hasAnyModalOpen)() && g.Z.getCurrentConfig({ location: 'OfferAnnouncementManager' }).enabled && !r.tq) {
                        for (let t of await (0, E.H)(e)) if (await this.maybeOpenServerDriveAnnouncementModal(t, !1)) break;
                    }
                }
            });
    }
}
t.Z = new A();
