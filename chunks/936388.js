n.d(t, { A: () => A });
var r = n(73153),
    i = n(157559),
    a = n(956793),
    o = n(198982),
    l = n(961350),
    c = n(734057),
    E = n(977997),
    u = n(144485),
    s = n(814278);
n(603266);
var d = n(652215),
    _ = n(985018);
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
                ((t = E.A.getVoiceStateForUser(l.default.getId())),
                (n = c.A.getChannel(t?.channelId)),
                l.default.getSessionId() === t?.sessionId && null != n && n.type !== d.rbe.GUILD_STAGE_VOICE
                    ? n.id
                    : null);
        null != r
            ? u.A.openSecureFramesUpdateConfirmation({
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
