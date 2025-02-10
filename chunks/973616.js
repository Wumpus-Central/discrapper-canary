n.d(t, {
    BA: () => d,
    ZN: () => f,
    ZP: () => _
}),
    n(789020),
    n(47120);
var i = n(480189),
    r = n(81825),
    a = n(768581),
    s = n(584597),
    o = n(598077),
    l = n(701488);
function u(e, t, n) {
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
let c = {
    [l.Zc]: 7,
    [l.qm]: 12
};
function d(e) {
    let t = {
        os: e.os,
        name: e.name
    };
    return null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t;
}
class f extends r.Z {
    static createFromServer(e) {
        return new f({
            ...e,
            coverImage: e.cover_image,
            primarySkuId: e.primary_sku_id,
            bot: null != e.bot ? new o.Z(e.bot) : null,
            thirdPartySkus: e.third_party_skus,
            roleConnectionsVerificationUrl: e.role_connections_verification_url
        });
    }
    getIconURL(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getIconSource(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t
              })
            : null;
    }
    getSplashURL(e, t) {
        return null != this.splash
            ? a.ZP.getGameAssetURL({
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
            ? a.ZP.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e
              })
            : null;
    }
    constructor(e) {
        var t, n;
        super(), u(this, 'id', void 0), u(this, 'name', void 0), u(this, 'icon', void 0), u(this, 'description', void 0), u(this, 'type', void 0), u(this, 'coverImage', void 0), u(this, 'primarySkuId', void 0), u(this, 'bot', void 0), u(this, 'splash', void 0), u(this, 'thirdPartySkus', void 0), u(this, 'isMonetized', void 0), u(this, 'isVerified', void 0), u(this, 'roleConnectionsVerificationUrl', void 0), (this.id = e.id), (this.name = e.name), (this.icon = e.icon), (this.splash = e.splash), (this.primarySkuId = e.primarySkuId), (this.thirdPartySkus = null !== (t = e.thirdPartySkus) && void 0 !== t ? t : []), (this.description = e.description), (this.bot = e.bot), (this.coverImage = e.coverImage), (this.type = e.type), (this.isMonetized = e.is_monetized), (this.isVerified = null !== (n = e.is_verified) && void 0 !== n ? n : e.isVerified), (this.roleConnectionsVerificationUrl = e.roleConnectionsVerificationUrl);
    }
}
class _ extends f {
    static createFromServer(e) {
        var t, n;
        return new _({
            ...e,
            coverImage: e.cover_image,
            primarySkuId: e.primary_sku_id,
            bot: null != e.bot ? new o.Z(e.bot) : null,
            thirdPartySkus: e.third_party_skus,
            roleConnectionsVerificationUrl: e.role_connections_verification_url,
            overlayWarn: e.overlay_warn,
            overlayCompatibilityHook: e.overlay_compatibility_hook,
            overlayMethods: null !== (t = e.overlay_methods) && void 0 !== t ? t : i.e.DEFAULT,
            hook: e.hook,
            storeListingSkuId: e.store_listing_sku_id,
            guildId: e.guild_id,
            guild: e.guild,
            publishers: null != e.publishers ? e.publishers.map(s.Z.createFromServer) : [],
            developers: null != e.developers ? e.developers.map(s.Z.createFromServer) : [],
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
        });
    }
    mergeFromApplicationUpdate(e) {
        var t, n, i, r, a, s, o, l, u, c, d, f, p, h, m, g, E, v, y, I, T, b, S, A, N, C, R, O, D, L, x, P, w, M, k, U, G, B, Z, F, V;
        return new _({
            id: null !== (t = e.id) && void 0 !== t ? t : this.id,
            name: null !== (n = e.name) && void 0 !== n ? n : this.name,
            icon: null !== (i = e.icon) && void 0 !== i ? i : this.icon,
            splash: null !== (r = e.splash) && void 0 !== r ? r : this.splash,
            overlay: null !== (a = e.overlay) && void 0 !== a ? a : this.overlay,
            overlayWarn: null !== (s = e.overlayWarn) && void 0 !== s ? s : this.overlayWarn,
            overlayCompatibilityHook: null !== (o = e.overlayCompatibilityHook) && void 0 !== o ? o : this.overlayCompatibilityHook,
            overlayMethods: null !== (l = e.overlayMethods) && void 0 !== l ? l : this.overlayMethods,
            hook: null !== (u = e.hook) && void 0 !== u ? u : this.hook,
            aliases: null !== (c = e.aliases) && void 0 !== c ? c : this.aliases,
            publishers: null !== (d = e.publishers) && void 0 !== d ? d : this.publishers,
            developers: null !== (f = e.developers) && void 0 !== f ? f : this.developers,
            primarySkuId: null !== (p = e.primarySkuId) && void 0 !== p ? p : this.primarySkuId,
            storeListingSkuId: null !== (h = e.storeListingSkuId) && void 0 !== h ? h : this.storeListingSkuId,
            thirdPartySkus: null !== (m = e.thirdPartySkus) && void 0 !== m ? m : this.thirdPartySkus,
            guildId: null !== (g = e.guildId) && void 0 !== g ? g : this.guildId,
            guild: null !== (E = e.guild) && void 0 !== E ? E : this.guild,
            executables: null !== (v = e.executables) && void 0 !== v ? v : this.executables,
            hashes: null !== (y = e.hashes) && void 0 !== y ? y : this.hashes,
            description: null !== (I = e.description) && void 0 !== I ? I : this.description,
            eulaId: null !== (T = e.eulaId) && void 0 !== T ? T : this.eulaId,
            slug: null !== (b = e.slug) && void 0 !== b ? b : this.slug,
            coverImage: null !== (S = e.coverImage) && void 0 !== S ? S : this.coverImage,
            bot: null !== (A = e.bot) && void 0 !== A ? A : this.bot,
            flags: null !== (N = e.flags) && void 0 !== N ? N : this.flags,
            maxParticipants: null !== (C = e.maxParticipants) && void 0 !== C ? C : this.maxParticipants,
            tags: null !== (R = e.tags) && void 0 !== R ? R : this.tags,
            embeddedActivityConfig: null !== (O = e.embeddedActivityConfig) && void 0 !== O ? O : null != this.embeddedActivityConfig ? { ...this.embeddedActivityConfig } : void 0,
            type: null !== (D = e.type) && void 0 !== D ? D : this.type,
            team: null !== (L = e.team) && void 0 !== L ? L : this.team,
            roleConnectionsVerificationUrl: null !== (x = e.roleConnectionsVerificationUrl) && void 0 !== x ? x : this.roleConnectionsVerificationUrl,
            integrationTypesConfig: null !== (P = e.integrationTypesConfig) && void 0 !== P ? P : this.integrationTypesConfig,
            isMonetized: null !== (w = e.isMonetized) && void 0 !== w ? w : this.isMonetized,
            storefront_available: null !== (M = e.storefront_available) && void 0 !== M ? M : this.storefront_available,
            termsOfServiceUrl: null !== (k = e.termsOfServiceUrl) && void 0 !== k ? k : this.termsOfServiceUrl,
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
        return null !== (t = null !== (e = this.maxParticipants) && void 0 !== e ? e : c[this.id]) && void 0 !== t ? t : 0;
    }
    supportsIntegrationTypes() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        let i = this.integrationTypesConfig;
        return null != i && t.every((e) => e in i);
    }
    get destinationSkuId() {
        return null != this.storeListingSkuId ? this.storeListingSkuId : this.primarySkuId;
    }
    get supportsOutOfProcessOverlay() {
        return _.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = i.e.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
    constructor(e) {
        var t, n, r, a, s, o, l, c, f, _, p, h, m, g, E, v, y;
        super(e), u(this, 'overlay', void 0), u(this, 'overlayWarn', void 0), u(this, 'overlayCompatibilityHook', void 0), u(this, 'overlayMethods', void 0), u(this, 'hook', void 0), u(this, 'aliases', void 0), u(this, 'publishers', void 0), u(this, 'developers', void 0), u(this, 'storeListingSkuId', void 0), u(this, 'guildId', void 0), u(this, 'guild', void 0), u(this, 'executables', void 0), u(this, 'hashes', void 0), u(this, 'eulaId', void 0), u(this, 'slug', void 0), u(this, 'flags', void 0), u(this, 'maxParticipants', void 0), u(this, 'tags', void 0), u(this, 'embeddedActivityConfig', void 0), u(this, 'team', void 0), u(this, 'integrationTypesConfig', void 0), u(this, 'storefront_available', void 0), u(this, 'termsOfServiceUrl', void 0), u(this, 'privacyPolicyUrl', void 0), u(this, 'isDiscoverable', void 0), u(this, 'customInstallUrl', void 0), u(this, 'installParams', void 0), u(this, 'directoryEntry', void 0), (this.overlay = null !== (t = e.overlay) && void 0 !== t && t), (this.overlayWarn = null !== (n = e.overlayWarn) && void 0 !== n && n), (this.overlayCompatibilityHook = null !== (r = e.overlayCompatibilityHook) && void 0 !== r && r), (this.overlayMethods = null !== (a = e.overlayMethods) && void 0 !== a ? a : i.e.DEFAULT), (this.hook = null === (s = e.hook) || void 0 === s || s), (this.aliases = null !== (o = e.aliases) && void 0 !== o ? o : []), (this.publishers = null !== (l = e.publishers) && void 0 !== l ? l : []), (this.developers = null !== (c = e.developers) && void 0 !== c ? c : []), (this.storeListingSkuId = e.storeListingSkuId), (this.guildId = e.guildId), (this.guild = e.guild), (this.executables = (null !== (f = e.executables) && void 0 !== f ? f : []).map(d)), (this.hashes = null !== (_ = e.hashes) && void 0 !== _ ? _ : []), (this.eulaId = e.eulaId), (this.slug = e.slug), (this.flags = null !== (p = e.flags) && void 0 !== p ? p : 0), (this.tags = null !== (h = e.tags) && void 0 !== h ? h : []), (this.maxParticipants = e.maxParticipants), (this.embeddedActivityConfig = null !== (m = e.embedded_activity_config) && void 0 !== m ? m : e.embeddedActivityConfig), (this.team = e.team), (this.integrationTypesConfig = e.integrationTypesConfig), (this.storefront_available = e.storefront_available), (this.termsOfServiceUrl = e.termsOfServiceUrl), (this.privacyPolicyUrl = e.privacyPolicyUrl), (this.isDiscoverable = null !== (g = e.is_discoverable) && void 0 !== g ? g : e.isDiscoverable), (this.customInstallUrl = null !== (E = e.custom_install_url) && void 0 !== E ? E : e.customInstallUrl), (this.installParams = null !== (v = e.install_params) && void 0 !== v ? v : e.installParams), (this.directoryEntry = null !== (y = e.directory_entry) && void 0 !== y ? y : e.directoryEntry);
    }
}
