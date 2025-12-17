n.d(t, {
    BA: () => _,
    ZN: () => m,
    ZP: () => h,
}),
    n(953529),
    n(997841),
    n(467055),
    n(388685);
var r = n(480189),
    i = n(81825),
    a = n(768581),
    o = n(584597),
    s = n(598077),
    l = n(701488);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    [l.qm]: 12,
};
function _(e) {
    let t = {
        os: e.os,
        name: e.name,
    };
    return (
        null != e.arguments && (t.arguments = e.arguments), null != e.is_launcher && (t.isLauncher = e.is_launcher), t
    );
}
class m extends i.Z {
    static createFromServer(e) {
        return new m(
            f(u({}, e), {
                coverImage: e.cover_image,
                primarySkuId: e.primary_sku_id,
                bot: null != e.bot ? new s.Z(e.bot) : null,
                thirdPartySkus: e.third_party_skus,
                roleConnectionsVerificationUrl: e.role_connections_verification_url,
                parentId: e.parent_id,
                connectionEntrypointUrl: e.connection_entrypoint_url,
            }),
        );
    }
    getIconURL(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetURL({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t,
              })
            : null;
    }
    getIconSource(e, t) {
        return null != this.icon
            ? a.ZP.getGameAssetSource({
                  id: this.id,
                  hash: this.icon,
                  size: e,
                  format: t,
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
                  format: t,
              })
            : null;
    }
    getCoverImageURL(e) {
        return null != this.coverImage
            ? a.ZP.getApplicationIconURL({
                  id: this.id,
                  icon: this.coverImage,
                  size: e,
                  keepAspectRatio: !0,
              })
            : null;
    }
    constructor(e) {
        var t, n, r, i, a, o;
        super(),
            c(this, "id", void 0),
            c(this, "name", void 0),
            c(this, "icon", void 0),
            c(this, "description", void 0),
            c(this, "type", void 0),
            c(this, "coverImage", void 0),
            c(this, "primarySkuId", void 0),
            c(this, "bot", void 0),
            c(this, "splash", void 0),
            c(this, "thirdPartySkus", void 0),
            c(this, "isMonetized", void 0),
            c(this, "isVerified", void 0),
            c(this, "roleConnectionsVerificationUrl", void 0),
            c(this, "parentId", void 0),
            c(this, "connectionEntrypointUrl", void 0),
            (this.id = e.id),
            (this.name = e.name),
            (this.icon = e.icon),
            (this.splash = e.splash),
            (this.primarySkuId = e.primarySkuId),
            (this.thirdPartySkus = null != (t = e.thirdPartySkus) ? t : []),
            (this.description = e.description),
            (this.bot = e.bot),
            (this.coverImage = e.coverImage),
            (this.type = e.type),
            (this.isMonetized = null != (n = e.is_monetized) ? n : e.isMonetized),
            (this.isVerified = null != (r = e.is_verified) ? r : e.isVerified),
            (this.roleConnectionsVerificationUrl =
                null != (i = e.role_connections_verification_url) ? i : e.roleConnectionsVerificationUrl),
            (this.parentId = null != (a = e.parent_id) ? a : e.parentId),
            (this.connectionEntrypointUrl = null != (o = e.connection_entrypoint_url) ? o : e.connectionEntrypointUrl);
    }
}
class h extends m {
    static createFromServer(e) {
        var t, n, i;
        return new h(
            f(u({}, e), {
                coverImage: e.cover_image,
                primarySkuId: e.primary_sku_id,
                bot: null != e.bot ? new s.Z(e.bot) : null,
                thirdPartySkus: e.third_party_skus,
                roleConnectionsVerificationUrl: e.role_connections_verification_url,
                overlayWarn: e.overlay_warn,
                overlayCompatibilityHook: e.overlay_compatibility_hook,
                overlayMethods: null != (n = e.overlay_methods) ? n : r.e.DEFAULT,
                hook: e.hook,
                storeListingSkuId: e.store_listing_sku_id,
                guildId: e.guild_id,
                guild: e.guild,
                publishers: null != e.publishers ? e.publishers.map(o.Z.createFromServer) : [],
                developers: null != e.developers ? e.developers.map(o.Z.createFromServer) : [],
                eulaId: e.eula_id,
                slug: e.slug,
                flags: null != (i = e.flags) ? i : 0,
                maxParticipants: e.max_participants,
                tags: e.tags,
                embeddedActivityConfig: e.embedded_activity_config,
                integrationTypesConfig:
                    null != e.integration_types_config
                        ? Object.fromEntries(
                              Object.entries(e.integration_types_config).map((e) => {
                                  let [t, n] = e;
                                  return [t, { oauth2InstallParams: (null != n ? n : {}).oauth2_install_params }];
                              }),
                          )
                        : void 0,
                termsOfServiceUrl: e.terms_of_service_url,
                privacyPolicyUrl: e.privacy_policy_url,
                isDiscoverable: e.is_discoverable,
                directoryEntry: e.directory_entry,
                categories: e.categories,
                linkedGames:
                    null == (t = e.linked_games)
                        ? void 0
                        : t.map((e) =>
                              f(u({}, e), {
                                  application: null != e.application ? h.createFromServer(e.application) : void 0,
                              }),
                          ),
                deepLinkUri: e.deeplink_uri,
            }),
        );
    }
    mergeFromApplicationUpdate(e) {
        var t,
            n,
            r,
            i,
            a,
            o,
            s,
            l,
            c,
            d,
            f,
            p,
            _,
            m,
            g,
            E,
            b,
            y,
            O,
            v,
            S,
            I,
            T,
            C,
            A,
            N,
            P,
            R,
            w,
            D,
            x,
            L,
            j,
            M,
            k,
            U,
            G,
            Z,
            F,
            B,
            V,
            H,
            Y,
            W,
            K;
        return new h({
            id: null != (t = e.id) ? t : this.id,
            name: null != (n = e.name) ? n : this.name,
            icon: null != (r = e.icon) ? r : this.icon,
            splash: null != (i = e.splash) ? i : this.splash,
            overlay: null != (a = e.overlay) ? a : this.overlay,
            overlayWarn: null != (o = e.overlayWarn) ? o : this.overlayWarn,
            overlayCompatibilityHook: null != (s = e.overlayCompatibilityHook) ? s : this.overlayCompatibilityHook,
            overlayMethods: null != (l = e.overlayMethods) ? l : this.overlayMethods,
            hook: null != (c = e.hook) ? c : this.hook,
            aliases: null != (d = e.aliases) ? d : this.aliases,
            publishers: null != (f = e.publishers) ? f : this.publishers,
            developers: null != (p = e.developers) ? p : this.developers,
            primarySkuId: null != (_ = e.primarySkuId) ? _ : this.primarySkuId,
            storeListingSkuId: null != (m = e.storeListingSkuId) ? m : this.storeListingSkuId,
            thirdPartySkus: null != (g = e.thirdPartySkus) ? g : this.thirdPartySkus,
            guildId: null != (E = e.guildId) ? E : this.guildId,
            guild: null != (b = e.guild) ? b : this.guild,
            executables: null != (y = e.executables) ? y : this.executables,
            hashes: null != (O = e.hashes) ? O : this.hashes,
            description: null != (v = e.description) ? v : this.description,
            eulaId: null != (S = e.eulaId) ? S : this.eulaId,
            slug: null != (I = e.slug) ? I : this.slug,
            coverImage: null != (T = e.coverImage) ? T : this.coverImage,
            bot: null != (C = e.bot) ? C : this.bot,
            flags: null != (A = e.flags) ? A : this.flags,
            maxParticipants: null != (N = e.maxParticipants) ? N : this.maxParticipants,
            tags: null != (P = e.tags) ? P : this.tags,
            embeddedActivityConfig:
                null != (R = e.embeddedActivityConfig)
                    ? R
                    : null != this.embeddedActivityConfig
                      ? u({}, this.embeddedActivityConfig)
                      : void 0,
            type: null != (w = e.type) ? w : this.type,
            team: null != (D = e.team) ? D : this.team,
            roleConnectionsVerificationUrl:
                null != (x = e.roleConnectionsVerificationUrl) ? x : this.roleConnectionsVerificationUrl,
            connectionEntrypointUrl: null != (L = e.connectionEntrypointUrl) ? L : this.connectionEntrypointUrl,
            integrationTypesConfig: null != (j = e.integrationTypesConfig) ? j : this.integrationTypesConfig,
            isMonetized: null != (M = e.isMonetized) ? M : this.isMonetized,
            storefront_available: null != (k = e.storefront_available) ? k : this.storefront_available,
            termsOfServiceUrl: null != (U = e.termsOfServiceUrl) ? U : this.termsOfServiceUrl,
            privacyPolicyUrl: null != (G = e.privacyPolicyUrl) ? G : this.privacyPolicyUrl,
            isVerified: null != (Z = e.isVerified) ? Z : this.isVerified,
            customInstallUrl: null != (F = e.customInstallUrl) ? F : this.customInstallUrl,
            installParams: null != (B = e.installParams) ? B : this.installParams,
            isDiscoverable: null != (V = e.isDiscoverable) ? V : this.isDiscoverable,
            directoryEntry: null != (H = e.directoryEntry) ? H : this.directoryEntry,
            categories: null != (Y = e.categories) ? Y : this.categories,
            linkedGames: null != (W = e.linkedGames) ? W : this.linkedGames,
            deepLinkUri: null != (K = e.deepLinkUri) ? K : this.deepLinkUri,
        });
    }
    getMaxParticipants() {
        var e, t;
        return null != (t = null != (e = this.maxParticipants) ? e : p[this.id]) ? t : 0;
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
        return h.supportsOutOfProcessOverlay(this.overlayMethods);
    }
    static supportsOutOfProcessOverlay(e) {
        let t = r.e.OUT_OF_PROCESS;
        return null != e && (e & t) === t;
    }
    constructor(e) {
        var t, n, i, a, o, s, l, d, p, m, g, E, b, y, O, v, S, I, T, C;
        super(e),
            c(this, "overlay", void 0),
            c(this, "overlayWarn", void 0),
            c(this, "overlayCompatibilityHook", void 0),
            c(this, "overlayMethods", void 0),
            c(this, "hook", void 0),
            c(this, "aliases", void 0),
            c(this, "publishers", void 0),
            c(this, "developers", void 0),
            c(this, "storeListingSkuId", void 0),
            c(this, "guildId", void 0),
            c(this, "guild", void 0),
            c(this, "executables", void 0),
            c(this, "hashes", void 0),
            c(this, "eulaId", void 0),
            c(this, "slug", void 0),
            c(this, "flags", void 0),
            c(this, "maxParticipants", void 0),
            c(this, "tags", void 0),
            c(this, "embeddedActivityConfig", void 0),
            c(this, "team", void 0),
            c(this, "integrationTypesConfig", void 0),
            c(this, "storefront_available", void 0),
            c(this, "termsOfServiceUrl", void 0),
            c(this, "privacyPolicyUrl", void 0),
            c(this, "isDiscoverable", void 0),
            c(this, "customInstallUrl", void 0),
            c(this, "installParams", void 0),
            c(this, "directoryEntry", void 0),
            c(this, "categories", void 0),
            c(this, "linkedGames", void 0),
            c(this, "deepLinkUri", void 0),
            (this.overlay = null != (n = e.overlay) && n),
            (this.overlayWarn = null != (i = e.overlayWarn) && i),
            (this.overlayCompatibilityHook = null != (a = e.overlayCompatibilityHook) && a),
            (this.overlayMethods = null != (o = e.overlayMethods) ? o : r.e.DEFAULT),
            (this.hook = null == (s = e.hook) || s),
            (this.aliases = null != (l = e.aliases) ? l : []),
            (this.publishers = null != (d = e.publishers) ? d : []),
            (this.developers = null != (p = e.developers) ? p : []),
            (this.storeListingSkuId = e.storeListingSkuId),
            (this.guildId = e.guildId),
            (this.guild = e.guild),
            (this.executables = (null != (m = e.executables) ? m : []).map(_)),
            (this.hashes = null != (g = e.hashes) ? g : []),
            (this.eulaId = e.eulaId),
            (this.slug = e.slug),
            (this.flags = null != (E = e.flags) ? E : 0),
            (this.tags = null != (b = e.tags) ? b : []),
            (this.maxParticipants = e.maxParticipants),
            (this.embeddedActivityConfig = null != (y = e.embedded_activity_config) ? y : e.embeddedActivityConfig),
            (this.team = e.team),
            (this.integrationTypesConfig = e.integrationTypesConfig),
            (this.storefront_available = e.storefront_available),
            (this.termsOfServiceUrl = e.termsOfServiceUrl),
            (this.privacyPolicyUrl = e.privacyPolicyUrl),
            (this.isDiscoverable = null != (O = e.is_discoverable) ? O : e.isDiscoverable),
            (this.customInstallUrl = null != (v = e.custom_install_url) ? v : e.customInstallUrl),
            (this.installParams = null != (S = e.install_params) ? S : e.installParams),
            (this.directoryEntry = null != (I = e.directory_entry) ? I : e.directoryEntry),
            (this.categories = e.categories),
            (this.linkedGames =
                null !=
                (T =
                    null == (t = e.linked_games)
                        ? void 0
                        : t.map((e) =>
                              f(u({}, e), {
                                  application: null != e.application ? h.createFromServer(e.application) : void 0,
                              }),
                          ))
                    ? T
                    : e.linkedGames),
            (this.deepLinkUri = null != (C = e.deepLinkUri) ? C : e.deeplink_uri);
    }
}
