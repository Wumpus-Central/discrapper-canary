"use strict";
n.d(t, { Ay: () => p, pG: () => A });
var i = n(989349),
    s = n.n(i),
    r = n(110259),
    l = n(73153),
    a = n(181658),
    o = n(955437),
    c = n(577015),
    d = n(961350),
    u = n(954571),
    _ = n(499785),
    h = n(569717),
    m = n(652215),
    g = n(204925);
function p(e) {
    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
    return A({ ...i, invite: t, giftCodeSKUId: n });
}
function A(e) {
    let {
        email: t,
        phoneToken: n,
        username: i,
        globalName: p,
        consent: A,
        password: f,
        guildTemplateCode: E,
        birthday: x,
        invite: I = null,
        giftCodeSKUId: v = null,
        promoEmailConsent: N = null,
        usedUsernameSuggestion: j = null,
    } = e;
    if ((l.h.dispatch({ type: "REGISTER" }), null != x)) {
        let e;
        (0, h.A)(x, m.JJy.REGISTER),
            u.default.track(m.HAw.AGE_GATE_ACTION, { source: g.w_.REGISTER, action: g.AM.AGE_GATE_SUBMITTED }),
            (e = s()().diff(x, "years")) < 13 ||
                u.default.track(m.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return _.A.post({
        url: m.Rsh.REGISTER,
        body: {
            fingerprint: d.default.getFingerprint(),
            email: t,
            username: i,
            global_name: p,
            password: f,
            invite: I,
            consent: A,
            phone_token: n,
            date_of_birth: x?.format("YYYY-MM-DD"),
            gift_code_sku_id: v,
            guild_template_code: E,
            promotional_email_opt_in: N?.checked,
        },
        trackedActionData: {
            event: r.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: I,
                used_username_suggestion: j,
                promotional_email_opt_in: N?.checked,
                promotional_email_pre_checked: N?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => {
            l.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                u.default.track(m.HAw.AGE_GATE_ACTION, { source: g.w_.REGISTER, action: g.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof c.CaptchaCancelError) throw e;
            let t = new a.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && o.Xv(g.w_.REGISTER),
                u.default.track(m.HAw.REGISTER_SUBMIT_ERRORED, {
                    is_unique_username_registration: !0,
                    email_error_reason: t.getFirstFieldErrorMessage("email"),
                    phone_error_reason: t.getFirstFieldErrorMessage("phone_token"),
                    password_error_reason: t.getFirstFieldErrorMessage("password"),
                    username_error_reason: t.getFirstFieldErrorMessage("username"),
                    global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                    date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth"),
                    promotional_email_opt_in_error_reason: t.getFirstFieldErrorMessage("promotional_email_opt_in"),
                    fingerprint_error_reason: t.getFirstFieldErrorMessage("fingerprint"),
                    invite_error_reason: t.getFirstFieldErrorMessage("invite"),
                    gift_code_sku_id_error_reason: t.getFirstFieldErrorMessage("gift_code_sku_id"),
                    guild_template_code_error_reason: t.getFirstFieldErrorMessage("guild_template_code"),
                    consent_error_reason: t.getFirstFieldErrorMessage("consent"),
                    generic_error_reason: t.getAnyErrorMessage(),
                }),
                t)
            );
        },
    );
}
