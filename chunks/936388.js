"use strict";
n.d(t, { A: () => p });
var i = n(228366),
    r = n(157559),
    s = n(730852),
    a = n(845584),
    o = n(495544),
    l = n(734057),
    u = n(977997),
    c = n(144485),
    d = n(814278);
n(603266);
var _ = n(652215),
    f = n(375708);
async function h(e, t) {
    if (e) {
        i.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            await (0, d.to)(1), t?.();
        } catch (t) {
            let e = new a.LG(t);
            i.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                r.A.show({
                    title: f.intl.string(f.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? f.intl.string(f.t.eAn6z2),
                });
        }
    } else i.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.();
}
let p = {
    clearUploadedKeyVersions: function () {
        i.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
    },
    updatePersistentCodesEnabled: async function e(e) {
        let t,
            n,
            i =
                ((t = u.A.getVoiceStateForUser(o.default.getId())),
                (n = l.A.getChannel(t?.channelId)),
                o.default.getSessionId() === t?.sessionId && null != n && n.type !== _.rbe.GUILD_STAGE_VOICE
                    ? n.id
                    : null);
        null != i
            ? c.A.openSecureFramesUpdateConfirmation({
                  title: e ? f.intl.string(f.t.DRFN1B) : f.intl.string(f.t.q29xJz),
                  subtitle: e ? f.intl.string(f.t.y015ZY) : f.intl.string(f.t.E66FQn),
                  confirmText: f.intl.string(f.t.aTuFYT),
                  onConfirm: async () => {
                      await h(e, () => {
                          s.default.disconnect(), s.default.selectVoiceChannel(i);
                      });
                  },
              })
            : await h(e);
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
