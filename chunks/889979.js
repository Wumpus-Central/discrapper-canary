n.d(t, { A: () => c });
var i = n(554146),
    r = n(439372),
    l = n(826673),
    a = n(367727),
    s = n(733391),
    o = n(832163),
    d = n(533406);
class u extends r.A {
    _didAttemptToOpenModal = !1;
    _didConnectionOpen = !1;
    actions = {
        LOGOUT: () => this._handleLogout(),
        POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen(),
        SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: (e) => this._handleStorefrontConfigFetchSuccess(e),
        SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: () => this._handleShowAnnouncementModal(),
    };
    stores = new Map().set(o.A, () => this._handleSocialLayerStorefrontUpdate());
    _handleLogout = () => {
        (this._didAttemptToOpenModal = !1), (this._didConnectionOpen = !1);
    };
    _handlePostConnectionOpen = () => {
        this._didConnectionOpen = !0;
    };
    _handleSocialLayerStorefrontUpdate = () => {
        this._handleShowAnnouncementModal();
    };
    _handleStorefrontConfigFetchSuccess = (e) => {
        let { config: t } = e,
            n = t.announcementModalConfig?.version ?? 0;
        0 === n ||
            (0, a.En)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL, n).isDismissed ||
            ("idle" === o.A.getStorefrontAffinity().state && (0, s.dS)(), this._handleShowAnnouncementModal());
    };
    _handleShowAnnouncementModal = () => {
        if (this._didAttemptToOpenModal || !this._didConnectionOpen) return;
        let e = o.A.getStorefrontAffinity(),
            t = o.A.getAnnouncementModalConfig(),
            n = t?.version ?? 0,
            r = "success" === e.state && e.affinity[t?.applicationId ?? ""]?.isEligible;
        !(0 === n || (0, l.k8)(i.M.GAME_SHOP_ANNOUNCEMENT_MODAL)) &&
            r &&
            ((this._didAttemptToOpenModal = !0), (0, d.B)());
    };
}
let c = new u();
