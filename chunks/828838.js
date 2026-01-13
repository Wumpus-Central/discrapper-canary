n.d(t, { Z: () => c });
var r = n(481060),
    i = n(48131),
    a = n(460093),
    o = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class l extends a.Z {
    showRPCDisconnectErrorUI(e) {
        let { code: t, message: n } = e,
            i = "".concat(o.intl.formatToPlainString(o.t.hbiAO6, { code: t }), ": ").concat(n);
        (0, r.showToast)((0, r.createToast)(i, r.ToastType.FAILURE));
    }
    leaveFrame(e) {
        let { applicationId: t } = e;
        i.Z.stopFrame({ applicationId: t });
    }
}
s(l, "displayName", "FramesWebManager");
let c = new l();
