let i, r;
function a() {
    if (null == i) throw Error("Native dependencies have not been injected.");
}
n.d(
    t,
    {},
    {
        $b: function (e) {
            return (a(), i.supportsFeature(e));
        },
        $j: function () {
            return (a(), i.supported());
        },
        WQ: function (e) {
            i = e;
        },
        XH: function () {
            return (a(), i.getOpenH264LibraryPath());
        },
        i0: function (e) {
            (a(), i.setProcessPriority(e));
        },
        lE: function () {
            return (a(), r ?? (r = i.getVoiceEngine()));
        },
    },
);
