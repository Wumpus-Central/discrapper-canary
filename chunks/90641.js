n.d(t, { Z: () => y });
var r = n(570140),
    i = n(668781),
    a = n(287734),
    o = n(881052),
    c = n(314897),
    u = n(592125),
    l = n(979651),
    s = n(352954),
    E = n(630759),
    d = n(760373),
    f = n(981631),
    _ = n(388032);
async function S(e, t) {
    if (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        });
        try {
            await (0, E.om)(d.GB), null == t || t();
        } catch (t) {
            var n;
            let e = new o.Hx(t);
            r.Z.dispatch({
                type: 'SECURE_FRAMES_SETTINGS_UPDATE',
                persistentCodesEnabled: !1
            }),
                i.Z.show({
                    title: _.NW.string(_.t.R0RpRU),
                    body: null != (n = e.getAnyErrorMessage()) ? n : _.NW.string(_.t.eAn6z8)
                });
        }
    } else
        r.Z.dispatch({
            type: 'SECURE_FRAMES_SETTINGS_UPDATE',
            persistentCodesEnabled: e
        }),
            null == t || t();
}
let y = {
    clearUploadedKeyVersions: function () {
        r.Z.dispatch({ type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR' });
    },
    updatePersistentCodesEnabled: async function e(e) {
        let t = (function () {
            let e = l.Z.getVoiceStateForUser(c.default.getId()),
                t = u.Z.getChannel(null == e ? void 0 : e.channelId);
            return c.default.getSessionId() === (null == e ? void 0 : e.sessionId) && null != t && t.type !== f.d4z.GUILD_STAGE_VOICE ? t.id : null;
        })();
        null != t
            ? s.Z.openSecureFramesUpdateConfirmation({
                  title: e ? _.NW.string(_.t.DRFN1N) : _.NW.string(_.t.q29xJy),
                  subtitle: e ? _.NW.string(_.t.y015ZW) : _.NW.string(_.t.E66FQk),
                  confirmText: _.NW.string(_.t.aTuFYW),
                  onConfirm: async () => {
                      await S(e, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(t);
                      });
                  }
              })
            : await S(e);
    },
    addUploadedKeyVersion: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD',
            keyVersion: e
        });
    },
    createSecureFramesVerifiedKey: function (e, t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_CREATE',
            userId: e,
            key: t
        });
    },
    deleteSecureFramesVerifiedKey: function (e, t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_VERIFIED_KEY_DELETE',
            userId: e,
            serializedKey: t
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE',
            userId: e
        });
    },
    createSecureFramesTransientKey: function (e, t) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_CREATE',
            userId: e,
            key: t
        });
    },
    deleteSecureFramesTransientKey: function (e) {
        r.Z.dispatch({
            type: 'SECURE_FRAMES_TRANSIENT_KEY_DELETE',
            userId: e
        });
    }
};
