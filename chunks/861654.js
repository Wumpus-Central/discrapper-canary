d.d(t, { a: () => Z, r: () => b });
var i = d(768672),
    e = d(288052),
    c = d(769308),
    a = class extends Error {
        constructor(l, t) {
            super(`POST ${e.t.qrValidateUuid} failed: ${l} ${t}`),
                (this.name = "QrValidationError"),
                (this.status = l),
                (this.statusText = t);
        }
    };
async function s(l, t, d) {
    try {
        return (
            await (0, i.n)().post(
                e.t.createSession,
                {
                    configurationId: t.configurationId,
                    externalId: t.externalId,
                    externalCustomerId: t.externalCustomerId,
                    language: t.language ?? "en-US",
                    customFields: t.customFields,
                    uuid: t.uuid ?? null,
                    urlUuid: t.urlUuid ?? null,
                    interviewId: t.interviewId ?? null,
                    ...(null != t.loginHint && "" !== t.loginHint ? { loginHint: t.loginHint } : {}),
                },
                { headers: { "x-api-key": l, "api-version": "1.0" }, signal: d },
            )
        ).data;
    } catch (l) {
        (0, c.n)(e.t.createSession, l);
    }
}
async function n(l, t) {
    try {
        return (
            await (0, i.n)().post(
                e.t.qrValidateUuid,
                { onboardingId: l.onboardingId, urlUuid: l.urlUuid },
                { headers: { "api-version": "1.0" }, signal: t },
            )
        ).data;
    } catch (l) {
        throw new a(l.data?.status ?? l.status, l.statusText);
    }
}
async function Z(l, t) {
    if ("string" != typeof l.urlUuid || 0 === l.urlUuid.length) return;
    let d = await n({ onboardingId: l.onboardingId ?? null, urlUuid: l.urlUuid }, t);
    return l.onRefreshed?.(d.urlUuid), d.urlUuid;
}
async function b(l, t, d) {
    let { onUrlUuidRefreshed: i, ...e } = t,
        c = await Z({ urlUuid: t.urlUuid, onboardingId: t.uuid ?? null, onRefreshed: i }, d);
    return s(l, { ...e, urlUuid: c }, d);
}
