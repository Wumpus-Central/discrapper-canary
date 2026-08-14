"use strict";
n.d(t, { A: () => h });
var i = n(228366),
    r = n(157559),
    a = n(730852),
    s = n(913122),
    l = n(280450),
    o = n(734057),
    d = n(977997),
    c = n(144485),
    u = n(814278);
n(603266);
var _ = n(652215),
    E = n(375708);
async function A(e, t) {
    if (e) {
        i.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            await (0, u.to)(1), t?.();
        } catch (t) {
            let e = new s.LG(t);
            i.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                r.A.show({
                    title: E.intl.string(E.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? E.intl.string(E.t.eAn6z2),
                });
        }
    } else i.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.();
}
let h = {
    clearUploadedKeyVersions: function () {
        i.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
    },
    updatePersistentCodesEnabled: async function e(e) {
        let t,
            n,
            i =
                ((t = d.A.getVoiceStateForUser(l.default.getId())),
                (n = o.A.getChannel(t?.channelId)),
                l.default.getSessionId() === t?.sessionId && null != n && n.type !== _.rbe.GUILD_STAGE_VOICE
                    ? n.id
                    : null);
        null != i
            ? c.A.openSecureFramesUpdateConfirmation({
                  title: e ? E.intl.string(E.t.DRFN1B) : E.intl.string(E.t.q29xJz),
                  subtitle: e ? E.intl.string(E.t.y015ZY) : E.intl.string(E.t.E66FQn),
                  confirmText: E.intl.string(E.t.aTuFYT),
                  onConfirm: async () => {
                      await A(e, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(i);
                      });
                  },
              })
            : await A(e);
    },
    addUploadedKeyVersion: function (e) {
        i.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion: e });
    },
    createSecureFramesVerifiedKey: function (e, t) {
        i.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId: e, key: t });
    },
    deleteSecureFramesVerifiedKey: function (e, t) {
        i.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId: e, serializedKey: t });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        i.h.dispatch({ type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId: e });
    },
    createSecureFramesTransientKey: function (e, t) {
        i.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId: e, key: t });
    },
    deleteSecureFramesTransientKey: function (e) {
        i.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId: e });
    },
};
