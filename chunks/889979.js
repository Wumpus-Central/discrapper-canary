n.d(t, { A: () => E });
var i = n(554146),
    r = n(439372),
    a = n(626584),
    l = n(367727),
    s = n(710195),
    o = n(733391),
    d = n(832163),
    u = n(271049);
let c = new a.A("SocialLayerStorefrontAnnouncementManager");
class h extends r.A {
    _didAttemptToOpenModal = !1;
    _didConnectionOpen = !1;
    actions = {
        LOGOUT: () => this._handleLogout(),
        POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen(),
        SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: (e) => this._handleStorefrontConfigFetchSuccess(e),
        SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: () => {
            this._handleShowAnnouncementModal();
        },
    };
    stores = new Map()
        .set(d.A, () => this._handleSocialLayerStorefrontUpdate())
        .set(s.A, () => this._handleExperimentChange());
    _handleLogout = () => {
        (this._didAttemptToOpenModal = !1), (this._didConnectionOpen = !1);
    };
    _handlePostConnectionOpen = () => {
        this._didConnectionOpen = !0;
    };
    _handleSocialLayerStorefrontUpdate = () => {
        this._handleShowAnnouncementModal();
    };
    _handleExperimentChange = () => {
        this._handleShowAnnouncementModal();
    };
    _handleStorefrontConfigFetchSuccess = (e) => {
        let { config: t } = e,
            n = t.announcementModalConfig?.version ?? 0;
        0 === n ||
            (0, l.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, n).isDismissed ||
            ("idle" === d.A.getStorefrontAffinity().state && (0, o.dS)(), this._handleShowAnnouncementModal());
    };
    _handleShowAnnouncementModal = async () => {
        if (
            this._didAttemptToOpenModal ||
            !this._didConnectionOpen ||
            !(0, u.N)({ location: "SocialLayerStorefrontAnnouncementManager" })
        )
            return;
        let e = d.A.getStorefrontAffinity(),
            t = d.A.getAnnouncementModalConfig(),
            r = t?.version ?? 0,
            a = "success" === e.state && e.affinity[t?.applicationId ?? ""]?.isEligible;
        if (0 !== r && !(0, l.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, r).isDismissed && a) {
            this._didAttemptToOpenModal = !0;
            try {
                let { openSocialLayerStorefrontAnnouncementModal: e } = await Promise.all([
                    n.e("32292"),
                    n.e("24199"),
                    n.e("57036"),
                    n.e("88394"),
                    n.e("28367"),
                    n.e("45174"),
                    n.e("85519"),
                    n.e("11871"),
                    n.e("37266"),
                    n.e("55057"),
                    n.e("14976"),
                    n.e("63229"),
                    n.e("31988"),
                    n.e("55343"),
                    n.e("80527"),
                    n.e("58710"),
                    n.e("31825"),
                    n.e("23353"),
                    n.e("7175"),
                    n.e("37249"),
                    n.e("14138"),
                    n.e("8971"),
                    n.e("85071"),
                    n.e("88017"),
                    n.e("1040"),
                    n.e("64615"),
                    n.e("17239"),
                    n.e("66950"),
                    n.e("58164"),
                    n.e("38229"),
                    n.e("20861"),
                    n.e("36682"),
                    n.e("45723"),
                    n.e("56871"),
                    n.e("69601"),
                    n.e("47511"),
                    n.e("51444"),
                    n.e("62290"),
                    n.e("48900"),
                    n.e("80973"),
                    n.e("82731"),
                    n.e("20735"),
                    n.e("27846"),
                    n.e("8306"),
                    n.e("10567"),
                    n.e("12542"),
                    n.e("84317"),
                    n.e("93858"),
                    n.e("14325"),
                ]).then(n.bind(n, 99161));
                e();
            } catch (e) {
                (this._didAttemptToOpenModal = !1), c.error("Failed to open announcement modal", e);
            }
        }
    };
}
let E = new h();
