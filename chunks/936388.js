n.d(t, {
    A: () => m,
});
var r = n(73153),
    i = n(157559),
    a = n(956793),
    s = n(198982),
    o = n(961350),
    l = n(734057),
    c = n(977997),
    u = n(144485),
    d = n(814278);
n(603266);
var f = n(652215),
    p = n(985018);

function _() {
    let e = c.A.getVoiceStateForUser(o.default.getId()),
        t = l.A.getChannel(null == e ? void 0 : e.channelId);
    return o.default.getSessionId() === (null == e ? void 0 : e.sessionId) &&
        null != t &&
        t.type !== f.rbe.GUILD_STAGE_VOICE
        ? t.id
        : null;
}
async function h(e, t) {
    if (e) {
        r.h.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
        });
        try {
            await (0, d.to)(1), null == t || t();
        } catch (t) {
            var n;
            let e = new s.LG(t);
            r.h.dispatch({
                type: "SECURE_FRAMES_SETTINGS_UPDATE",
                persistentCodesEnabled: !1,
            }),
                i.A.show({
                    title: p.intl.string(p.t.R0RpRX),
                    body: null != (n = e.getAnyErrorMessage()) ? n : p.intl.string(p.t.eAn6z2),
                });
        }
    } else
        r.h.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
        }),
            null == t || t();
}
let m = {
    clearUploadedKeyVersions: function () {
        r.h.dispatch({
            type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR",
        });
    },
    updatePersistentCodesEnabled: async function (e) {
        let t = _();
        null != t
            ? u.A.openSecureFramesUpdateConfirmation({
                  title: e ? p.intl.string(p.t.DRFN1B) : p.intl.string(p.t.q29xJz),
                  subtitle: e ? p.intl.string(p.t.y015ZY) : p.intl.string(p.t.E66FQn),
                  confirmText: p.intl.string(p.t.aTuFYT),
                  onConfirm: async () => {
                      await h(e, () => {
                          a.default.disconnect(), a.default.selectVoiceChannel(t);
                      });
                  },
              })
            : await h(e);
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
