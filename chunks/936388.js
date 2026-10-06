n.d(t, { A: () => i });
var r = n(73153);
let i = {
    clearUploadedKeyVersions: function () {
        r.h.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
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
