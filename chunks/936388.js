n.d(e, { A: () => A });
var r = n(228366),
    i = n(157559),
    a = n(956793),
    l = n(845584),
    o = n(495544),
    u = n(734057),
    s = n(977997),
    c = n(144485),
    E = n(814278);
n(603266);
var d = n(652215),
    h = n(985018);
async function f(t, e) {
    if (t) {
        r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: t });
        try {
            await (0, E.to)(1), e?.();
        } catch (e) {
            let t = new l.LG(e);
            r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: !1 }),
                i.A.show({
                    title: h.intl.string(h.t.R0RpRX),
                    body: t.getAnyErrorMessage() ?? h.intl.string(h.t.eAn6z2),
                });
        }
    } else r.h.dispatch({ type: "SECURE_FRAMES_SETTINGS_UPDATE", persistentCodesEnabled: t }), e?.();
}
let A = {
    clearUploadedKeyVersions: function () {
        r.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
    },
    updatePersistentCodesEnabled: async function t(t) {
        let e,
            n,
            r =
                ((e = s.A.getVoiceStateForUser(o.default.getId())),
                (n = u.A.getChannel(e?.channelId)),
                o.default.getSessionId() === e?.sessionId && null != n && n.type !== d.rbe.GUILD_STAGE_VOICE
                    ? n.id
                    : null);
        null != r
            ? c.A.openSecureFramesUpdateConfirmation({
                  title: t ? h.intl.string(h.t.DRFN1B) : h.intl.string(h.t.q29xJz),
                  subtitle: t ? h.intl.string(h.t.y015ZY) : h.intl.string(h.t.E66FQn),
                  confirmText: h.intl.string(h.t.aTuFYT),
                  onConfirm: async () => {
                      await f(t, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(r);
                      });
                  },
              })
            : await f(t);
    },
    addUploadedKeyVersion: function (t) {
        r.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion: t });
    },
    createSecureFramesVerifiedKey: function (t, e) {
        r.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId: t, key: e });
    },
    deleteSecureFramesVerifiedKey: function (t, e) {
        r.h.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId: t, serializedKey: e });
    },
    deleteSecureFramesUserVerifiedKeys: function (t) {
        r.h.dispatch({ type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId: t });
    },
    createSecureFramesTransientKey: function (t, e) {
        r.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId: t, key: e });
    },
    deleteSecureFramesTransientKey: function (t) {
        r.h.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId: t });
    },
};
