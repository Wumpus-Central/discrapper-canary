d.d(t, { n: () => c, r: () => a, t: () => e });
let i = ["frontId", "backId", "poa"];
function e(l) {
    return i.includes(l) ? "environment" : "user";
}
function c(l) {
    let t = [];
    return (
        l.checkIdScan && (t.push("frontId"), t.push("backId")),
        l.checkDocumentScan && t.push("poa"),
        t.push("selfie"),
        l.checkVoiceConsent && ((l.voiceConsentQuestions ?? 0) > 0 && t.push("questions"), t.push("speech")),
        t
    );
}
function a(l) {
    let t = ["videoSelfie"];
    return l.checkIdScan && t.push("videoSelfieId"), t;
}
