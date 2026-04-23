"use strict";
n.d(t, { A: () => d });
var r = n(554146),
    i = n(439372),
    s = n(826673),
    a = n(367727),
    o = n(733391),
    l = n(832163),
    u = n(533406);
class c extends i.A {
    _didAttemptToOpenModal = !1;
    _didConnectionOpen = !1;
    actions = {
        LOGOUT: () => this._handleLogout(),
        POST_CONNECTION_OPEN: () => this._handlePostConnectionOpen(),
        SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: (e) => this._handleStorefrontConfigFetchSuccess(e),
        SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: () => this._handleShowAnnouncementModal(),
    };
    stores = new Map().set(l.A, () => this._handleSocialLayerStorefrontUpdate());
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
            (0, a.En)(r.M.GAME_SHOP_ANNOUNCEMENT_MODAL, n).isDismissed ||
            ("idle" === l.A.getStorefrontAffinity().state && (0, o.dS)(), this._handleShowAnnouncementModal());
    };
    _handleShowAnnouncementModal = () => {
        if (this._didAttemptToOpenModal || !this._didConnectionOpen) return;
        let e = l.A.getStorefrontAffinity(),
            t = l.A.getAnnouncementModalConfig(),
            n = t?.version ?? 0,
            i = "success" === e.state && e.affinity[t?.applicationId ?? ""]?.isEligible;
        !(0 === n || (0, s.k8)(r.M.GAME_SHOP_ANNOUNCEMENT_MODAL)) &&
            i &&
            ((this._didAttemptToOpenModal = !0), (0, u.B)());
    };
}
let d = new c();
