"use strict";
n.d(t, { A: () => c });
var i = n(574381),
    r = n(626584),
    a = n(464477);
function s(e) {
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
let l = new r.A("SignalHelpers.web"),
    o = window.GLOBAL_ENV.WEBAUTHN_ORIGIN;
async function d(e, t, n) {
    if (!a.d4) return null;
    if (i.Av && (0, i.cX)() && window.DiscordNative?.webAuthn?.[e] != null)
        return await window.DiscordNative.nativeModules.ensureModule("discord_webauthn"), t;
    let r = await PublicKeyCredential.getClientCapabilities?.();
    return void 0 !== r && r[e] ? n : null;
}
let c = class {
    static async signalAllAcceptedCredentials(e, t) {
        let n = await d(
            "signalAllAcceptedCredentials",
            (e, t, n) => window.DiscordNative.webAuthn.signalAllAcceptedCredentials(e, t, n),
            (e, t, n) =>
                window.PublicKeyCredential.signalAllAcceptedCredentials({
                    rpId: e,
                    userId: t,
                    allAcceptedCredentialIds: n,
                }),
        );
        if (null == n) return;
        let i = s(t),
            r = e.map((e) => e.cred_id).filter((e) => "" !== e);
        l.info("signalAllAcceptedCredentials", { rpId: o, encodedUserId: i, allAcceptedCredentialIds: r }),
            await n(o, i, r).catch(l.warn);
    }
    static async signalCurrentUserDetails(e) {
        let t = await d(
            "signalCurrentUserDetails",
            (e, t, n, i) => window.DiscordNative.webAuthn.signalCurrentUserDetails(e, t, n, i),
            (e, t, n, i) =>
                window.PublicKeyCredential.signalCurrentUserDetails({ rpId: e, userId: t, name: n, displayName: i }),
        );
        if (null == t) return;
        let n = e.email ?? e.global_name ?? e.username,
            i = e.username,
            r = s(e.id);
        l.info("signalCurrentUserDetails", { rpId: o, userId: r, name: n, displayName: i }),
            await t(o, r, n, i).catch(l.warn);
    }
    static async signalUnknownCredential(e) {
        let t = await d(
            "signalUnknownCredential",
            (e, t) => window.DiscordNative.webAuthn.signalUnknownCredential(e, t),
            (e, t) => window.PublicKeyCredential.signalUnknownCredential({ rpId: e, credentialId: t }),
        );
        if (null == t) return;
        let n = "string" == typeof e ? JSON.parse(e).id : e.cred_id;
        l.info("signalUnknownCredential", { rpId: o, credentialId: n }), await t(o, n).catch(l.warn);
    }
};
