n.d(t, { A: () => A });
var r = n(228366),
    i = n(157559),
    a = n(730852),
    o = n(913122),
    l = n(280450),
    u = n(734057),
    c = n(977997),
    E = n(144485),
    s = n(814278);
n(603266);
var d = n(652215),
    _ = n(375708);
async function f(e, t) {
    if (e) {
        r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            await (0, s.to)(1), t?.();
        } catch (t) {
            let e = new o.LG(t);
            r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                i.A.show({
                    title: _.intl.string(_.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? _.intl.string(_.t.eAn6z2),
                });
        }
    } else r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.();
}
let A = {
    clearUploadedKeyVersions: function () {
        r.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
    },
    updatePersistentCodesEnabled: async function e(e) {
        let t,
            n,
            r =
                ((t = c.A.getVoiceStateForUser(l.default.getId())),
                (n = u.A.getChannel(t?.channelId)),
                l.default.getSessionId() === t?.sessionId && null != n && n.type !== d.rbe.GUILD_STAGE_VOICE
                    ? n.id
                    : null);
        null != r
            ? E.A.openSecureFramesUpdateConfirmation({
                  title: e ? _.intl.string(_.t.DRFN1B) : _.intl.string(_.t.q29xJz),
                  subtitle: e ? _.intl.string(_.t.y015ZY) : _.intl.string(_.t.E66FQn),
                  confirmText: _.intl.string(_.t.aTuFYT),
                  onConfirm: async () => {
                      await f(e, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(r);
                      });
                  },
              })
            : await f(e);
    },
    addUploadedKeyVersion: function (e) {
        r.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion: e });
    },
    createSecureFramesVerifiedKey: function (e, t) {
        r.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId: e, key: t });
    },
    deleteSecureFramesVerifiedKey: function (e, t) {
        r.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId: e, serializedKey: t });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        r.h.dispatch({ type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId: e });
    },
    createSecureFramesTransientKey: function (e, t) {
        r.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId: e, key: t });
    },
    deleteSecureFramesTransientKey: function (e) {
        r.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId: e });
    },
};
