"use strict";
n.d(t, { A: () => u });
var i = n(574381),
    r = n(626584),
    s = n(464477);
function a(e) {
    let t = new Uint8Array(16),
        n = new DataView(t.buffer);
    return (
        n.setUint32(0, 0x30f303fb),
        n.setUint16(4, 35878),
        n.setUint16(6, 20307),
        n.setBigUint64(8, BigInt(e)),
        btoa(String.fromCharCode(...t))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "")
    );
}
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
let o = new r.A("SignalHelpers.web"),
    l = window.GLOBAL_ENV.WEBAUTHN_ORIGIN,
    d = window.PublicKeyCredential;
async function _(e, t, n) {
    if (!s.d4) return null;
    if (i.Av && (0, i.cX)() && window.DiscordNative?.webAuthn?.[e] != null)
        return await window.DiscordNative.nativeModules.ensureModule("discord_webauthn"), t;
    let r = await PublicKeyCredential.getClientCapabilities?.();
    return void 0 !== r && r[e] ? n : null;
}
let u = class {
    static async signalAllAcceptedCredentials(e, t) {
        let n = await _(
            "signalAllAcceptedCredentials",
            (e, t, n) => window.DiscordNative.webAuthn.signalAllAcceptedCredentials(e, t, n),
            (e, t, n) => d.signalAllAcceptedCredentials({ rpId: e, userId: t, allAcceptedCredentialIds: n }),
        );
        if (null == n) return;
        let i = a(t),
            r = e.map((e) => e.cred_id).filter((e) => e);
        o.info("signalAllAcceptedCredentials", { rpId: l, encodedUserId: i, allAcceptedCredentialIds: r }),
            await n(l, i, r).catch(o.warn);
    }
    static async signalCurrentUserDetails(e) {
        let t = await _(
            "signalCurrentUserDetails",
            (e, t, n, i) => window.DiscordNative.webAuthn.signalCurrentUserDetails(e, t, n, i),
            (e, t, n, i) => d.signalCurrentUserDetails({ rpId: e, userId: t, name: n, displayName: i }),
        );
        if (null == t) return;
        let n = e.email ?? e.global_name ?? e.username,
            i = e.username,
            r = a(e.id);
        o.info("signalCurrentUserDetails", { rpId: l, userId: r, name: n, displayName: i }),
            await t(l, r, n, i).catch(o.warn);
    }
    static async signalUnknownCredential(e) {
        let t = await _(
            "signalUnknownCredential",
            (e, t) => window.DiscordNative.webAuthn.signalUnknownCredential(e, t),
            (e, t) => d.signalUnknownCredential({ rpId: e, credentialId: t }),
        );
        if (null == t) return;
        let n = "string" == typeof e ? JSON.parse(e).id : e.cred_id;
        o.info("signalUnknownCredential", { rpId: l, credentialId: n }), await t(l, n).catch(o.warn);
    }
};
