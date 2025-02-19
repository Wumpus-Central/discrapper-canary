n.d(t, {
    BA: () => _,
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
let p = {
    [l.Zc]: 7,
    [l.qm]: 12
};
function _(e) {
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
        super(), c(this, 'id', void 0), c(this, 'name', void 0), c(this, 'icon', void 0), c(this, 'description', void 0), c(this, 'type', void 0), c(this, 'coverImage', void 0), c(this, 'primarySkuId', void 0), c(this, 'bot', void 0), c(this, 'splash', void 0), c(this, 'thirdPartySkus', void 0), c(this, 'isMonetized', void 0), c(this, 'isVerified', void 0), c(this, 'roleConnectionsVerificationUrl', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.splash = e.splash), (this.primarySkuId = e.primarySkuId), (this.thirdPartySkus = null !== (t = e.thirdPartySkus) && void 0 !== t ? t : []), (this.description = e.description), (this.bot = e.bot), (this.coverImage = e.coverImage), (this.type = e.type), (this.isMonetized = e.is_monetized), (this.isVerified = null !== (n = e.is_verified) && void 0 !== n ? n : e.isVerified), (this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl);
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
                overlayMethods: null !== (t = e.overlay_methods) && void 0 !== t ? t : r.e.DEFAULT,
                hook: e.hook,
                storeListingSkuId: e.store_listing_sku_id,
                guildId: e.guild_id,
                guild: e.guild,
                publishers: null != e.publishers ? e.publishers.map(a.Z.createFromServer) : [],
                developers: null != e.developers ? e.developers.map(a.Z.createFromServer) : [],
                eulaId: e.eula_id,
                slug: e.slug,
                flags: null !== (n = e.flags) && void 0 !== n ? n : 0,
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
                directoryEntry: e.directory_entry
            })
        );
    }
    mergeFromApplicationUpdate(e) {
        var t, n, r, i, o, a, s, l, c, d, f, p, _, h, g, E, v, b, y, O, S, I, T, N, A, C, R, P, w, D, x, L, M, k, j, U, G, B, Z, F, V;
        return new m({
            id: null !== (t = e.id) && void 0 !== t ? t : this.id,
            name: null !== (n = e.name) && void 0 !== n ? n : this.name,
            icon: null !== (r = e.icon) && void 0 !== r ? r : this.icon,
            splash: null !== (i = e.splash) && void 0 !== i ? i : this.splash,
            overlay: null !== (o = e.overlay) && void 0 !== o ? o : this.overlay,
            overlayWarn: null !== (a = e.overlayWarn) && void 0 !== a ? a : this.overlayWarn,
            overlayCompatibilityHook: null !== (s = e.overlayCompatibilityHook) && void 0 !== s ? s : this.overlayCompatibilityHook,
            overlayMethods: null !== (l = e.overlayMethods) && void 0 !== l ? l : this.overlayMethods,
            hook: null !== (c = e.hook) && void 0 !== c ? c : this.hook,
            aliases: null !== (d = e.aliases) && void 0 !== d ? d : this.aliases,
            publishers: null !== (f = e.publishers) && void 0 !== f ? f : this.publishers,
            developers: null !== (p = e.developers) && void 0 !== p ? p : this.developers,
            primarySkuId: null !== (_ = e.primarySkuId) && void 0 !== _ ? _ : this.primarySkuId,
            storeListingSkuId: null !== (h = e.storeListingSkuId) && void 0 !== h ? h : this.storeListingSkuId,
            thirdPartySkus: null !== (g = e.thirdPartySkus) && void 0 !== g ? g : this.thirdPartySkus,
            guildId: null !== (E = e.guildId) && void 0 !== E ? E : this.guildId,
            guild: null !== (v = e.guild) && void 0 !== v ? v : this.guild,
            executables: null !== (b = e.executables) && void 0 !== b ? b : this.executables,
            hashes: null !== (y = e.hashes) && void 0 !== y ? y : this.hashes,
            description: null !== (O = e.description) && void 0 !== O ? O : this.description,
            eulaId: null !== (S = e.eulaId) && void 0 !== S ? S : this.eulaId,
            slug: null !== (I = e.slug) && void 0 !== I ? I : this.slug,
            coverImage: null !== (T = e.coverImage) && void 0 !== T ? T : this.coverImage,
            bot: null !== (N = e.bot) && void 0 !== N ? N : this.bot,
            flags: null !== (A = e.flags) && void 0 !== A ? A : this.flags,
            maxParticipants: null !== (C = e.maxParticipants) && void 0 !== C ? C : this.maxParticipants,
            tags: null !== (R = e.tags) && void 0 !== R ? R : this.tags,
            embeddedActivityConfig: null !== (P = e.embeddedActivityConfig) && void 0 !== P ? P : null != this.embeddedActivityConfig ? u({}, this.embeddedActivityConfig) : void 0,
            type: null !== (w = e.type) && void 0 !== w ? w : this.type,
            team: null !== (D = e.team) && void 0 !== D ? D : this.team,
            roleConnectionsVerificationUrl: null !== (x = e.roleConnectionsVerificationUrl) && void 0 !== x ? x : this.roleConnectionsVerificationUrl,
            integrationTypesConfig: null !== (L = e.integrationTypesConfig) && void 0 !== L ? L : this.integrationTypesConfig,
            isMonetized: null !== (M = e.isMonetized) && void 0 !== M ? M : this.isMonetized,
            storefront_available: null !== (k = e.storefront_available) && void 0 !== k ? k : this.storefront_available,
            termsOfServiceUrl: null !== (j = e.termsOfServiceUrl) && void 0 !== j ? j : this.termsOfServiceUrl,
            privacyPolicyUrl: null !== (U = e.privacyPolicyUrl) && void 0 !== U ? U : this.privacyPolicyUrl,
            isVerified: null !== (G = e.isVerified) && void 0 !== G ? G : this.isVerified,
            customInstallUrl: null !== (B = e.customInstallUrl) && void 0 !== B ? B : this.customInstallUrl,
            installParams: null !== (Z = e.installParams) && void 0 !== Z ? Z : this.installParams,
            isDiscoverable: null !== (F = e.isDiscoverable) && void 0 !== F ? F : this.isDiscoverable,
            directoryEntry: null !== (V = e.directoryEntry) && void 0 !== V ? V : this.directoryEntry
        });
    }
    getMaxParticipants() {
        var e, t;
        return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : p[this.id]) && void 0 !== t ? t : 0;
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
        var t, n, i, o, a, s, l, u, d, f, p, h, m, g, E, v, b;
        super(e), c(this, 'overlay', void 0), c(this, 'overlayWarn', void 0), c(this, 'overlayCompatibilityHook', void 0), c(this, 'overlayMethods', void 0), c(this, 'hook', void 0), c(this, 'aliases', void 0), c(this, 'publishers', void 0), c(this, 'developers', void 0), c(this, 'storeListingSkuId', void 0), c(this, 'guildId', void 0), c(this, 'guild', void 0), c(this, 'executables', void 0), c(this, 'hashes', void 0), c(this, 'eulaId', void 0), c(this, 'slug', void 0), c(this, 'flags', void 0), c(this, 'maxParticipants', void 0), c(this, 'tags', void 0), c(this, 'embeddedActivityConfig', void 0), c(this, 'team', void 0), c(this, 'integrationTypesConfig', void 0), c(this, 'storefront_available', void 0), c(this, 'termsOfServiceUrl', void 0), c(this, 'privacyPolicyUrl', void 0), c(this, 'isDiscoverable', void 0), c(this, 'customInstallUrl', void 0), c(this, 'installParams', void 0), c(this, 'directoryEntry', void 0), (this.overlay = null !== (t = e.overlay) && void 0 !== t && t), (this.overlayWarn = null !== (n = e.overlayWarn) && void 0 !== n && n), (this.overlayCompatibilityHook = null !== (i = e.overlayCompatibilityHook) && void 0 !== i && i), (this.overlayMethods = null !== (o = e.overlayMethods) && void 0 !== o ? o : r.e.DEFAULT), (this.hook = null === (a = e.hook) || void 0 === a || a), (this.aliases = null !== (s = e.aliases) && void 0 !== s ? s : []), (this.publishers = null !== (l = e.publishers) && void 0 !== l ? l : []), (this.developers = null !== (u = e.developers) && void 0 !== u ? u : []), (this.storeListingSkuId = e.storeListingSkuId), (this.guildId = e.guildId), (this.guild = e.guild), (this.executables = (null !== (d = e.executables) && void 0 !== d ? d : []).map(_)), (this.hashes = null !== (f = e.hashes) && void 0 !== f ? f : []), (this.eulaId = e.eulaId), (this.slug = e.slug), (this.flags = null !== (p = e.flags) && void 0 !== p ? p : 0), (this.tags = null !== (h = e.tags) && void 0 !== h ? h : []), (this.maxParticipants = e.maxParticipants), (this.embeddedActivityConfig = null !== (m = e.embedded_activity_config) && void 0 !== m ? m : e.embeddedActivityConfig), (this.team = e.team), (this.integrationTypesConfig = e.integrationTypesConfig), (this.storefront_available = e.storefront_available), (this.termsOfServiceUrl = e.termsOfServiceUrl), (this.privacyPolicyUrl = e.privacyPolicyUrl), (this.isDiscoverable = null !== (g = e.is_discoverable) && void 0 !== g ? g : e.isDiscoverable), (this.customInstallUrl = null !== (E = e.custom_install_url) && void 0 !== E ? E : e.customInstallUrl), (this.installParams = null !== (v = e.install_params) && void 0 !== v ? v : e.installParams), (this.directoryEntry = null !== (b = e.directory_entry) && void 0 !== b ? b : e.directoryEntry);
    }
}
