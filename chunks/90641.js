n.d(t, { Z: () => g });
var r = n(570140),
    i = n(668781),
    a = n(287734),
    o = n(881052),
    s = n(314897),
    l = n(592125),
    c = n(979651),
    u = n(352954),
    d = n(630759),
    f = n(760373),
    _ = n(981631),
    p = n(388032);
function h() {
    let e = c.Z.getVoiceStateForUser(s.default.getId()),
        t = l.Z.getChannel(null == e ? void 0 : e.channelId);
    return s.default.getSessionId() === (null == e ? void 0 : e.sessionId) &&
        null != t &&
        t.type !== _.d4z.GUILD_STAGE_VOICE
        ? t.id
        : null;
}
async function m(e, t) {
    if (e) {
        r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
        });
        try {
            await (0, d.om)(f.GB), null == t || t();
        } catch (t) {
            var n;
            let e = new o.Hx(t);
            r.Z.dispatch({
                type: "SECURE_FRAMES_SETTINGS_UPDATE",
                persistentCodesEnabled: !1,
            }),
                i.Z.show({
                    title: p.intl.string(p.t.R0RpRX),
                    body: null != (n = e.getAnyErrorMessage()) ? n : p.intl.string(p.t.eAn6z2),
                });
        }
    } else
        r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
        }),
            null == t || t();
}
let g = {
    clearUploadedKeyVersions: function () {
        r.Z.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
    },
    updatePersistentCodesEnabled: async function (e) {
        let t = h();
        null != t
            ? u.Z.openSecureFramesUpdateConfirmation({
                  title: e ? p.intl.string(p.t.DRFN1B) : p.intl.string(p.t.q29xJz),
                  subtitle: e ? p.intl.string(p.t.y015ZY) : p.intl.string(p.t.E66FQn),
                  confirmText: p.intl.string(p.t.aTuFYT),
                  onConfirm: async () => {
                      await m(e, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(t);
                      });
                  },
              })
            : await m(e);
    },
    addUploadedKeyVersion: function (e) {
        r.Z.dispatch({
            type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
            keyVersion: e,
        });
    },
    createSecureFramesVerifiedKey: function (e, t) {
        r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: e,
            key: t,
        });
    },
    deleteSecureFramesVerifiedKey: function (e, t) {
        r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: e,
            serializedKey: t,
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        r.Z.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: e,
        });
    },
    createSecureFramesTransientKey: function (e, t) {
        r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: e,
            key: t,
        });
    },
    deleteSecureFramesTransientKey: function (e) {
        r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
            userId: e,
        });
    },
};
