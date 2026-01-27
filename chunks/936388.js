n.d(t, {
    A: () => A,
});
var r = n(73153),
    i = n(157559),
    a = n(956793),
    o = n(198982),
    l = n(961350),
    c = n(734057),
    u = n(977997),
    s = n(144485),
    E = n(814278);
n(603266);
var d = n(652215),
    f = n(985018);
async function _(e, t) {
    if (e) {
        r.h.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
        });
        try {
            await (0, E.to)(1), null == t || t();
        } catch (t) {
            var n;
            let e = new o.LG(t);
            r.h.dispatch({
                type: "SECURE_FRAMES_SETTINGS_UPDATE",
                persistentCodesEnabled: !1,
            }),
                i.A.show({
                    title: f.intl.string(f.t.R0RpRX),
                    body: null != (n = e.getAnyErrorMessage()) ? n : f.intl.string(f.t.eAn6z2),
                });
        }
    } else
        r.h.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
        }),
            null == t || t();
}
let A = {
    clearUploadedKeyVersions: function () {
        r.h.dispatch({
            type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR",
        });
    },
    updatePersistentCodesEnabled: async function e(e) {
        let t,
            n,
            r =
                ((t = u.A.getVoiceStateForUser(l.default.getId())),
                (n = c.A.getChannel(null == t ? void 0 : t.channelId)),
                l.default.getSessionId() === (null == t ? void 0 : t.sessionId) &&
                null != n &&
                n.type !== d.rbe.GUILD_STAGE_VOICE
                    ? n.id
                    : null);
        null != r
            ? s.A.openSecureFramesUpdateConfirmation({
                  title: e ? f.intl.string(f.t.DRFN1B) : f.intl.string(f.t.q29xJz),
                  subtitle: e ? f.intl.string(f.t.y015ZY) : f.intl.string(f.t.E66FQn),
                  confirmText: f.intl.string(f.t.aTuFYT),
                  onConfirm: async () => {
                      await _(e, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(r);
                      });
                  },
              })
            : await _(e);
    },
    addUploadedKeyVersion: function (e) {
        r.h.dispatch({
            type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD",
            keyVersion: e,
        });
    },
    createSecureFramesVerifiedKey: function (e, t) {
        r.h.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: e,
            key: t,
        });
    },
    deleteSecureFramesVerifiedKey: function (e, t) {
        r.h.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: e,
            serializedKey: t,
        });
    },
    deleteSecureFramesUserVerifiedKeys: function (e) {
        r.h.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: e,
        });
    },
    createSecureFramesTransientKey: function (e, t) {
        r.h.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: e,
            key: t,
        });
    },
    deleteSecureFramesTransientKey: function (e) {
        r.h.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
            userId: e,
        });
    },
};
