r.d(n, {
    BA: function () {
        return h;
    },
    ZN: function () {
        return p;
    },
    ZP: function () {
        return m;
    }
});
var i = r(789020);
var a = r(47120);
var s = r(480189),
    o = r(81825),
    l = r(768581),
    u = r(584597),
    c = r(598077),
    d = r(701488);
function f(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = {
    [d.Zc]: 7,
    [d.qm]: 12
};
function h(e) {
    let n = {
        os: e.os,
        name: e.name
    };
    return null != e.arguments && (n.arguments = e.arguments), null != e.is_launcher && (n.isLauncher = e.is_launcher), n;
}
class p extends o.Z {
    static createFromServer(e) {
        return new p({
            ...e,
            coverImage: e.cover_image,
            primarySkuId: e.primary_sku_id,
            bot: null != e.bot ? new c.Z(e.bot) : null,
            thirdPartySkus: e.third_party_skus,
            roleConnectionsVerificationUrl: e.role_connections_verification_url
        });
    }
    getIconURL(e, n) {
        return null != this.icon
            ? l.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: n
              })
            : null;
    }
    getIconSource(e, n) {
        return null != this.icon
            ? l.ZP.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: n
              })
            : null;
    }
    getSplashURL(e, n) {
        return null != this.splash
            ? l.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.splash,
                  size: e,
                  keepAspectRatio: !0,
                  format: n
              })
            : null;
    }
    getCoverImageURL(e) {
        return null != this.coverImage
            ? l.ZP.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e
              })
            : null;
    }
    constructor(e) {
        var n, r;
        super(), f(this, 'id', void 0), f(this, 'name', void 0), f(this, 'icon', void 0), f(this, 'description', void 0), f(this, 'type', void 0), f(this, 'coverImage', void 0), f(this, 'primarySkuId', void 0), f(this, 'bot', void 0), f(this, 'splash', void 0), f(this, 'thirdPartySkus', void 0), f(this, 'isMonetized', void 0), f(this, 'isVerified', void 0), f(this, 'roleConnectionsVerificationUrl', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.splash = e.splash), (this.primarySkuId = e.primarySkuId), (this.thirdPartySkus = null !== (n = e.thirdPartySkus) && void 0 !== n ? n : []), (this.description = e.description), (this.bot = e.bot), (this.coverImage = e.coverImage), (this.type = e.type), (this.isMonetized = e.is_monetized), (this.isVerified = null !== (r = e.is_verified) && void 0 !== r ? r : e.isVerified), (this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl);
    }
}
class m extends p {
    static createFromServer(e) {
        var n, r;
        return new m({
            ...e,
            coverImage: e.cover_image,
            primarySkuId: e.primary_sku_id,
            bot: null != e.bot ? new c.Z(e.bot) : null,
            thirdPartySkus: e.third_party_skus,
            roleConnectionsVerificationUrl: e.role_connections_verification_url,
            overlayWarn: e.overlay_warn,
            overlayCompatibilityHook: e.overlay_compatibility_hook,
            overlayMethods: null !== (n = e.overlay_methods) && void 0 !== n ? n : s.e.DEFAULT,
            hook: e.hook,
            storeListingSkuId: e.store_listing_sku_id,
            guildId: e.guild_id,
            guild: e.guild,
            publishers: null != e.publishers ? e.publishers.map(u.Z.createFromServer) : [],
            developers: null != e.developers ? e.developers.map(u.Z.createFromServer) : [],
            eulaId: e.eula_id,
            slug: e.slug,
            flags: null !== (r = e.flags) && void 0 !== r ? r : 0,
            maxParticipants: e.max_participants,
            tags: e.tags,
            embeddedActivityConfig: e.embedded_activity_config,
            integrationTypesConfig:
                null != e.integration_types_config
                    ? Object.fromEntries(
                          Object.entries(e.integration_types_config).map((e) => {
                              let [n, r] = e;
                              return [n, { oauth2InstallParams: (null != r ? r : {}).oauth2_install_params }];
                          })
                      )
                    : void 0,
            termsOfServiceUrl: e.terms_of_service_url,
            privacyPolicyUrl: e.privacy_policy_url
        });
    }
    mergeFromApplicationUpdate(e) {
        var n, r, i, a, s, o, l, u, c, d, f, _, h, p, g, E, v, I, T, b, y, S, A, N, C, R, O, D, L, x, w, P, M, k, U, B, G, Z, F, V;
        return new m({
            id: null !== (n = e.id) && void 0 !== n ? n : this.id,
            name: null !== (r = e.name) && void 0 !== r ? r : this.name,
            icon: null !== (i = e.icon) && void 0 !== i ? i : this.icon,
            splash: null !== (a = e.splash) && void 0 !== a ? a : this.splash,
            overlay: null !== (s = e.overlay) && void 0 !== s ? s : this.overlay,
            overlayWarn: null !== (o = e.overlayWarn) && void 0 !== o ? o : this.overlayWarn,
            overlayCompatibilityHook: null !== (l = e.overlayCompatibilityHook) && void 0 !== l ? l : this.overlayCompatibilityHook,
            overlayMethods: null !== (u = e.overlayMethods) && void 0 !== u ? u : this.overlayMethods,
            hook: null !== (c = e.hook) && void 0 !== c ? c : this.hook,
            aliases: null !== (d = e.aliases) && void 0 !== d ? d : this.aliases,
            publishers: null !== (f = e.publishers) && void 0 !== f ? f : this.publishers,
            developers: null !== (_ = e.developers) && void 0 !== _ ? _ : this.developers,
            primarySkuId: null !== (h = e.primarySkuId) && void 0 !== h ? h : this.primarySkuId,
            storeListingSkuId: null !== (p = e.storeListingSkuId) && void 0 !== p ? p : this.storeListingSkuId,
            thirdPartySkus: null !== (g = e.thirdPartySkus) && void 0 !== g ? g : this.thirdPartySkus,
            guildId: null !== (E = e.guildId) && void 0 !== E ? E : this.guildId,
            guild: null !== (v = e.guild) && void 0 !== v ? v : this.guild,
            executables: null !== (I = e.executables) && void 0 !== I ? I : this.executables,
            hashes: null !== (T = e.hashes) && void 0 !== T ? T : this.hashes,
            description: null !== (b = e.description) && void 0 !== b ? b : this.description,
            eulaId: null !== (y = e.eulaId) && void 0 !== y ? y : this.eulaId,
            slug: null !== (S = e.slug) && void 0 !== S ? S : this.slug,
            coverImage: null !== (A = e.coverImage) && void 0 !== A ? A : this.coverImage,
            bot: null !== (N = e.bot) && void 0 !== N ? N : this.bot,
            flags: null !== (C = e.flags) && void 0 !== C ? C : this.flags,
            maxParticipants: null !== (R = e.maxParticipants) && void 0 !== R ? R : this.maxParticipants,
            tags: null !== (O = e.tags) && void 0 !== O ? O : this.tags,
            embeddedActivityConfig: null !== (D = e.embeddedActivityConfig) && void 0 !== D ? D : null != this.embeddedActivityConfig ? { ...this.embeddedActivityConfig } : void 0,
            type: null !== (L = e.type) && void 0 !== L ? L : this.type,
            team: null !== (x = e.team) && void 0 !== x ? x : this.team,
            roleConnectionsVerificationUrl: null !== (w = e.roleConnectionsVerificationUrl) && void 0 !== w ? w : this.roleConnectionsVerificationUrl,
            integrationTypesConfig: null !== (P = e.integrationTypesConfig) && void 0 !== P ? P : this.integrationTypesConfig,
            isMonetized: null !== (M = e.isMonetized) && void 0 !== M ? M : this.isMonetized,
            storefront_available: null !== (k = e.storefront_available) && void 0 !== k ? k : this.storefront_available,
            termsOfServiceUrl: null !== (U = e.termsOfServiceUrl) && void 0 !== U ? U : this.termsOfServiceUrl,
            privacyPolicyUrl: null !== (B = e.privacyPolicyUrl) && void 0 !== B ? B : this.privacyPolicyUrl,
            isVerified: null !== (G = e.isVerified) && void 0 !== G ? G : this.isVerified,
            customInstallUrl: null !== (Z = e.customInstallUrl) && void 0 !== Z ? Z : this.customInstallUrl,
            installParams: null !== (F = e.installParams) && void 0 !== F ? F : this.installParams,
            isDiscoverable: null !== (V = e.isDiscoverable) && void 0 !== V ? V : this.isDiscoverable
        });
    }
    getMaxParticipants() {
        var e, n;
        return null !== (n = null !== (e = this.maxParticipants) && void 0 !== e ? e : _[this.id]) && void 0 !== n ? n : 0;
    }
    supportsIntegrationTypes() {
        for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
        let i = this.integrationTypesConfig;
        return null != i && n.every((e) => e in i);
    }
    get destinationSkuId() {
        return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId;
    }
    get supportsOutOfProcessOverlay() {
        return m.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let n = s.e.OUT_OF_PROCESS;
        return null != e && (e & n) === n;
    }
    constructor(e) {
        var n, r, i, a, o, l, u, c, d, _, p, m, g, E, v, I;
        super(e), f(this, 'overlay', void 0), f(this, 'overlayWarn', void 0), f(this, 'overlayCompatibilityHook', void 0), f(this, 'overlayMethods', void 0), f(this, 'hook', void 0), f(this, 'aliases', void 0), f(this, 'publishers', void 0), f(this, 'developers', void 0), f(this, 'storeListingSkuId', void 0), f(this, 'guildId', void 0), f(this, 'guild', void 0), f(this, 'executables', void 0), f(this, 'hashes', void 0), f(this, 'eulaId', void 0), f(this, 'slug', void 0), f(this, 'flags', void 0), f(this, 'maxParticipants', void 0), f(this, 'tags', void 0), f(this, 'embeddedActivityConfig', void 0), f(this, 'team', void 0), f(this, 'integrationTypesConfig', void 0), f(this, 'storefront_available', void 0), f(this, 'termsOfServiceUrl', void 0), f(this, 'privacyPolicyUrl', void 0), f(this, 'isDiscoverable', void 0), f(this, 'customInstallUrl', void 0), f(this, 'installParams', void 0), (this.overlay = null !== (n = e.overlay) && void 0 !== n && n), (this.overlayWarn = null !== (r = e.overlayWarn) && void 0 !== r && r), (this.overlayCompatibilityHook = null !== (i = e.overlayCompatibilityHook) && void 0 !== i && i), (this.overlayMethods = null !== (a = e.overlayMethods) && void 0 !== a ? a : s.e.DEFAULT), (this.hook = null === (o = e.hook) || void 0 === o || o), (this.aliases = null !== (l = e.aliases) && void 0 !== l ? l : []), (this.publishers = null !== (u = e.publishers) && void 0 !== u ? u : []), (this.developers = null !== (c = e.developers) && void 0 !== c ? c : []), (this.storeListingSkuId = e.storeListingSkuId), (this.guildId = e.guildId), (this.guild = e.guild), (this.executables = (null !== (d = e.executables) && void 0 !== d ? d : []).map(h)), (this.hashes = null !== (_ = e.hashes) && void 0 !== _ ? _ : []), (this.eulaId = e.eulaId), (this.slug = e.slug), (this.flags = null !== (p = e.flags) && void 0 !== p ? p : 0), (this.tags = null !== (m = e.tags) && void 0 !== m ? m : []), (this.maxParticipants = e.maxParticipants), (this.embeddedActivityConfig = null !== (g = e.embedded_activity_config) && void 0 !== g ? g : e.embeddedActivityConfig), (this.team = e.team), (this.integrationTypesConfig = e.integrationTypesConfig), (this.storefront_available = e.storefront_available), (this.termsOfServiceUrl = e.termsOfServiceUrl), (this.privacyPolicyUrl = e.privacyPolicyUrl), (this.isDiscoverable = null !== (E = e.is_discoverable) && void 0 !== E ? E : e.isDiscoverable), (this.customInstallUrl = null !== (v = e.custom_install_url) && void 0 !== v ? v : e.customInstallUrl), (this.installParams = null !== (I = e.install_params) && void 0 !== I ? I : e.installParams);
    }
}
