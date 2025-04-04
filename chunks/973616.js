n.d(t, {
    BA: () => p,
    ZN: () => h,
    ZP: () => m
}),
    n(266796),
    n(789020),
    n(977457),
    n(47120);
var r = n(480189),
    i = n(81825),
    o = n(768581),
    a = n(584597),
    s = n(598077),
    l = n(701488);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = {
    [l.Zc]: 7,
    [l.qm]: 12
};
function p(e) {
    let t = {
        os: e.os,
        name: e.name
    };
    return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t;
}
class h extends i.Z {
    static createFromServer(e) {
        return new h(
            f(u({}, e), {
                coverImage: e.cover_image,
                primarySkuId: e.primary_sku_id,
                bot: null != e.bot ? new s.Z(e.bot) : null,
                thirdPartySkus: e.third_party_skus,
                roleConnectionsVerificationUrl: e.role_connections_verification_url
            })
        );
    }
    getIconURL(e, t) {
        return null != this.icon
            ? o.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getIconSource(e, t) {
        return null != this.icon
            ? o.ZP.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getSplashURL(e, t) {
        return null != this.splash
            ? o.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.splash,
                  size: e,
                  keepAspectRatio: !0,
                  format: t
              })
            : null;
    }
    getCoverImageURL(e) {
        return null != this.coverImage
            ? o.ZP.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e
              })
            : null;
    }
    constructor(e) {
        var t, n;
        super(), c(this, 'id', void 0), c(this, 'name', void 0), c(this, 'icon', void 0), c(this, 'description', void 0), c(this, 'type', void 0), c(this, 'coverImage', void 0), c(this, 'primarySkuId', void 0), c(this, 'bot', void 0), c(this, 'splash', void 0), c(this, 'thirdPartySkus', void 0), c(this, 'isMonetized', void 0), c(this, 'isVerified', void 0), c(this, 'roleConnectionsVerificationUrl', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.splash = e.splash), (this.primarySkuId = e.primarySkuId), (this.thirdPartySkus = null != (t = e.thirdPartySkus) ? t : []), (this.description = e.description), (this.bot = e.bot), (this.coverImage = e.coverImage), (this.type = e.type), (this.isMonetized = e.is_monetized), (this.isVerified = null != (n = e.is_verified) ? n : e.isVerified), (this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl);
    }
}
class m extends h {
    static createFromServer(e) {
        var t, n;
        return new m(
            f(u({}, e), {
                coverImage: e.cover_image,
                primarySkuId: e.primary_sku_id,
                bot: null != e.bot ? new s.Z(e.bot) : null,
                thirdPartySkus: e.third_party_skus,
                roleConnectionsVerificationUrl: e.role_connections_verification_url,
                overlayWarn: e.overlay_warn,
                overlayCompatibilityHook: e.overlay_compatibility_hook,
                overlayMethods: null != (t = e.overlay_methods) ? t : r.e.DEFAULT,
                hook: e.hook,
                storeListingSkuId: e.store_listing_sku_id,
                guildId: e.guild_id,
                guild: e.guild,
                publishers: null != e.publishers ? e.publishers.map(a.Z.createFromServer) : [],
                developers: null != e.developers ? e.developers.map(a.Z.createFromServer) : [],
                eulaId: e.eula_id,
                slug: e.slug,
                flags: null != (n = e.flags) ? n : 0,
                maxParticipants: e.max_participants,
                tags: e.tags,
                embeddedActivityConfig: e.embedded_activity_config,
                integrationTypesConfig:
                    null != e.integration_types_config
                        ? Object.fromEntries(
                              Object.entries(e.integration_types_config).map((e) => {
                                  let [t, n] = e;
                                  return [t, { oauth2InstallParams: (null != n ? n : {}).oauth2_install_params }];
                              })
                          )
                        : void 0,
                termsOfServiceUrl: e.terms_of_service_url,
                privacyPolicyUrl: e.privacy_policy_url,
                isDiscoverable: e.is_discoverable,
                directoryEntry: e.directory_entry,
                categories: e.categories
            })
        );
    }
    mergeFromApplicationUpdate(e) {
        var t, n, r, i, o, a, s, l, c, d, f, _, p, h, g, E, b, y, v, O, I, S, T, N, A, C, R, P, w, D, L, x, M, k, j, U, G, B, F, V, Z, H;
        return new m({
            id: null != (t = e.id) ? t : this.id,
            name: null != (n = e.name) ? n : this.name,
            icon: null != (r = e.icon) ? r : this.icon,
            splash: null != (i = e.splash) ? i : this.splash,
            overlay: null != (o = e.overlay) ? o : this.overlay,
            overlayWarn: null != (a = e.overlayWarn) ? a : this.overlayWarn,
            overlayCompatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : this.overlayCompatibilityHook,
            overlayMethods: null != (l = e.overlayMethods) ? l : this.overlayMethods,
            hook: null != (c = e.hook) ? c : this.hook,
            aliases: null != (d = e.aliases) ? d : this.aliases,
            publishers: null != (f = e.publishers) ? f : this.publishers,
            developers: null != (_ = e.developers) ? _ : this.developers,
            primarySkuId: null != (p = e.primarySkuId) ? p : this.primarySkuId,
            storeListingSkuId: null != (h = e.storeListingSkuId) ? h : this.storeListingSkuId,
            thirdPartySkus: null != (g = e.thirdPartySkus) ? g : this.thirdPartySkus,
            guildId: null != (E = e.guildId) ? E : this.guildId,
            guild: null != (b = e.guild) ? b : this.guild,
            executables: null != (y = e.executables) ? y : this.executables,
            hashes: null != (v = e.hashes) ? v : this.hashes,
            description: null != (O = e.description) ? O : this.description,
            eulaId: null != (I = e.eulaId) ? I : this.eulaId,
            slug: null != (S = e.slug) ? S : this.slug,
            coverImage: null != (T = e.coverImage) ? T : this.coverImage,
            bot: null != (N = e.bot) ? N : this.bot,
            flags: null != (A = e.flags) ? A : this.flags,
            maxParticipants: null != (C = e.maxParticipants) ? C : this.maxParticipants,
            tags: null != (R = e.tags) ? R : this.tags,
            embeddedActivityConfig: null != (P = e.embeddedActivityConfig) ? P : null != this.embeddedActivityConfig ? u({}, this.embeddedActivityConfig) : void 0,
            type: null != (w = e.type) ? w : this.type,
            team: null != (D = e.team) ? D : this.team,
            roleConnectionsVerificationUrl: null != (L = e.roleConnectionsVerificationUrl) ? L : this.roleConnectionsVerificationUrl,
            integrationTypesConfig: null != (x = e.integrationTypesConfig) ? x : this.integrationTypesConfig,
            isMonetized: null != (M = e.isMonetized) ? M : this.isMonetized,
            storefront_available: null != (k = e.storefront_available) ? k : this.storefront_available,
            termsOfServiceUrl: null != (j = e.termsOfServiceUrl) ? j : this.termsOfServiceUrl,
            privacyPolicyUrl: null != (U = e.privacyPolicyUrl) ? U : this.privacyPolicyUrl,
            isVerified: null != (G = e.isVerified) ? G : this.isVerified,
            customInstallUrl: null != (B = e.customInstallUrl) ? B : this.customInstallUrl,
            installParams: null != (F = e.installParams) ? F : this.installParams,
            isDiscoverable: null != (V = e.isDiscoverable) ? V : this.isDiscoverable,
            directoryEntry: null != (Z = e.directoryEntry) ? Z : this.directoryEntry,
            categories: null != (H = e.categories) ? H : this.categories
        });
    }
    getMaxParticipants() {
        var e, t;
        return null != (t = null != (e = this.maxParticipants) ? e : _[this.id]) ? t : 0;
    }
    supportsIntegrationTypes() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let r = this.integrationTypesConfig;
        return null != r && t.every((e) => e in r);
    }
    get destinationSkuId() {
        return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId;
    }
    get supportsOutOfProcessOverlay() {
        return m.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = r.e.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
    constructor(e) {
        var t, n, i, o, a, s, l, u, d, f, _, h, m, g, E, b, y;
        super(e), c(this, 'overlay', void 0), c(this, 'overlayWarn', void 0), c(this, 'overlayCompatibilityHook', void 0), c(this, 'overlayMethods', void 0), c(this, 'hook', void 0), c(this, 'aliases', void 0), c(this, 'publishers', void 0), c(this, 'developers', void 0), c(this, 'storeListingSkuId', void 0), c(this, 'guildId', void 0), c(this, 'guild', void 0), c(this, 'executables', void 0), c(this, 'hashes', void 0), c(this, 'eulaId', void 0), c(this, 'slug', void 0), c(this, 'flags', void 0), c(this, 'maxParticipants', void 0), c(this, 'tags', void 0), c(this, 'embeddedActivityConfig', void 0), c(this, 'team', void 0), c(this, 'integrationTypesConfig', void 0), c(this, 'storefront_available', void 0), c(this, 'termsOfServiceUrl', void 0), c(this, 'privacyPolicyUrl', void 0), c(this, 'isDiscoverable', void 0), c(this, 'customInstallUrl', void 0), c(this, 'installParams', void 0), c(this, 'directoryEntry', void 0), c(this, 'categories', void 0), (this.overlay = null != (t = e.overlay) && t), (this.overlayWarn = null != (n = e.overlayWarn) && n), (this.overlayCompatibilityHook = null != (i = e.overlayCompatibilityHook) && i), (this.overlayMethods = null != (o = e.overlayMethods) ? o : r.e.DEFAULT), (this.hook = null == (a = e.hook) || a), (this.aliases = null != (s = e.aliases) ? s : []), (this.publishers = null != (l = e.publishers) ? l : []), (this.developers = null != (u = e.developers) ? u : []), (this.storeListingSkuId = e.storeListingSkuId), (this.guildId = e.guildId), (this.guild = e.guild), (this.executables = (null != (d = e.executables) ? d : []).map(p)), (this.hashes = null != (f = e.hashes) ? f : []), (this.eulaId = e.eulaId), (this.slug = e.slug), (this.flags = null != (_ = e.flags) ? _ : 0), (this.tags = null != (h = e.tags) ? h : []), (this.maxParticipants = e.maxParticipants), (this.embeddedActivityConfig = null != (m = e.embedded_activity_config) ? m : e.embeddedActivityConfig), (this.team = e.team), (this.integrationTypesConfig = e.integrationTypesConfig), (this.storefront_available = e.storefront_available), (this.termsOfServiceUrl = e.termsOfServiceUrl), (this.privacyPolicyUrl = e.privacyPolicyUrl), (this.isDiscoverable = null != (g = e.is_discoverable) ? g : e.isDiscoverable), (this.customInstallUrl = null != (E = e.custom_install_url) ? E : e.customInstallUrl), (this.installParams = null != (b = e.install_params) ? b : e.installParams), (this.directoryEntry = null != (y = e.directory_entry) ? y : e.directoryEntry), (this.categories = e.categories);
    }
}
