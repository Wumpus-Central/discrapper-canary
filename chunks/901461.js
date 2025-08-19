n.d(t, { Z: () => a });
var r = n(275726),
    i = n(623879);
function a(e) {
    return e.type === r.u.PREMIUM_REFERRAL
        ? i.ZP.getCurrentConfig({ location: "isSystemMessage" }).cohort !== i.FZ.Control
        : !r.V.USER_MESSAGE.has(e.type);
}
