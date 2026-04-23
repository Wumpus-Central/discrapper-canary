n.d(t, { A: () => h });
var r = n(73153),
    i = n(157559),
    a = n(956793),
    l = n(198982),
    o = n(961350),
    s = n(734057),
    c = n(977997),
    u = n(144485),
    d = n(814278);
n(603266);
var E = n(652215),
    f = n(985018);
async function A(e, t) {
    if (e) {
        r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e });
        try {
            await (0, d.to)(1), t?.();
        } catch (t) {
            let e = new l.LG(t);
            r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                i.A.show({
                    title: f.intl.string(f.t.R0RpRX),
                    body: e.getAnyErrorMessage() ?? f.intl.string(f.t.eAn6z2),
                });
        }
    } else r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: e }), t?.();
}
let h = {
    clearUploadedKeyVersions: function () {
        r.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
    },
    updatePersistentCodesEnabled: async function e(e) {
        let t,
            n,
            r =
                ((t = c.A.getVoiceStateForUser(o.default.getId())),
                (n = s.A.getChannel(t?.channelId)),
                o.default.getSessionId() === t?.sessionId && null != n && n.type !== E.rbe.GUILD_STAGE_VOICE
                    ? n.id
                    : null);
        null != r
            ? u.A.openSecureFramesUpdateConfirmation({
                  title: e ? f.intl.string(f.t.DRFN1B) : f.intl.string(f.t.q29xJz),
                  subtitle: e ? f.intl.string(f.t.y015ZY) : f.intl.string(f.t.E66FQn),
                  confirmText: f.intl.string(f.t.aTuFYT),
                  onConfirm: async () => {
                      await A(e, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(r);
                      });
                  },
              })
            : await A(e);
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
