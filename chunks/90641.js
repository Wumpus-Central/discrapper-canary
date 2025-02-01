n.d(e, { Z: () => h });
var r = n(570140),
    i = n(668781),
    a = n(287734),
    o = n(881052),
    l = n(314897),
    c = n(592125),
    u = n(979651),
    E = n(352954),
    s = n(630759),
    d = n(760373),
    _ = n(981631),
    f = n(388032);
async function S(t, e) {
    if (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: t
        });
        try {
            await (0, s.om)(d.GB), null == e || e();
        } catch (e) {
            var n;
            let t = new o.Hx(e);
            r.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                i.Z.show({
                    title: f.intl.string(f.t.R0RpRU),
                    body: null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : f.intl.string(f.t.eAn6z8)
                });
        }
    } else
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: t
        }),
            null == e || e();
}
let h = {
    clearUploadedKeyVersions: function () {
        r.Z.dispatch({ type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR' });
    },
    updatePersistentCodesEnabled: async function t(t) {
        let e = (function () {
            let t = u.Z.getVoiceStateForUser(l.default.getId()),
                e = c.Z.getChannel(null == t ? void 0 : t.channelId);
            return l.default.getSessionId() === (null == t ? void 0 : t.sessionId) && null != e && e.type !== _.d4z.GUILD_STAGE_VOICE ? e.id : null;
        })();
        null != e
            ? E.Z.openSecureFramesUpdateConfirmation({
                  title: t ? f.intl.string(f.t.DRFN1N) : f.intl.string(f.t.q29xJy),
                  subtitle: t ? f.intl.string(f.t.y015ZW) : f.intl.string(f.t.E66FQk),
                  confirmText: f.intl.string(f.t.aTuFYW),
                  onConfirm: async () => {
                      await S(t, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(e);
                      });
                  }
              })
            : await S(t);
    },
    addUploadedKeyVersion: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD',
            keyVersion: t
        });
    },
    createSecureFramesVerifiedKey: function (t, e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: t,
            key: e
        });
    },
    deleteSecureFramesVerifiedKey: function (t, e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: t,
            serializedKey: e
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: t
        });
    },
    createSecureFramesTransientKey: function (t, e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: t,
            key: e
        });
    },
    deleteSecureFramesTransientKey: function (t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: t
        });
    }
};
