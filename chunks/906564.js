n.d(t, {
    Ay: () => m,
    pG: () => A,
});
var r = n(989349),
    i = n.n(r),
    s = n(110259),
    l = n(73153),
    a = n(181658),
    o = n(955437),
    c = n(577015),
    u = n(961350),
    d = n(954571),
    h = n(499785),
    f = n(569717),
    p = n(652215),
    g = n(204925);

function m(e) {
    var t, n;
    let { invite: r = null, giftCodeSKUId: i = null } = e;
    return A(
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {},
            (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    s = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                    return s;
                }
                if (
                    ((s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            s = Object.getOwnPropertyNames(e);
                        for (r = 0; r < s.length; r++)
                            (n = s[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
                return s;
            })(e, ["invite", "giftCodeSKUId"]),
        )),
        (n = n =
            {
                invite: r,
                giftCodeSKUId: i,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}

function A(e) {
    let {
        email: t,
        phoneToken: n,
        username: r,
        globalName: m,
        consent: A,
        password: x,
        guildTemplateCode: _,
        birthday: E,
        invite: b = null,
        giftCodeSKUId: v = null,
        promoEmailConsent: j = null,
        usedUsernameSuggestion: y = null,
    } = e;
    if (
        (l.h.dispatch({
            type: "REGISTER",
        }),
        null != E)
    ) {
        let e;
        (0, f.A)(E, p.JJy.REGISTER),
            d.default.track(p.HAw.AGE_GATE_ACTION, {
                source: g.w_.REGISTER,
                action: g.AM.AGE_GATE_SUBMITTED,
            }),
            (e = i()().diff(E, "years")) < 13 ||
                d.default.track(p.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return h.A.post({
        url: p.Rsh.REGISTER,
        body: {
            fingerprint: u.default.getFingerprint(),
            email: t,
            username: r,
            global_name: m,
            password: x,
            invite: b,
            consent: A,
            phone_token: n,
            date_of_birth: null == E ? void 0 : E.format("YYYY-MM-DD"),
            gift_code_sku_id: v,
            guild_template_code: _,
            promotional_email_opt_in: null == j ? void 0 : j.checked,
        },
        trackedActionData: {
            event: s.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: b,
                used_username_suggestion: y,
                promotional_email_opt_in: null == j ? void 0 : j.checked,
                promotional_email_pre_checked: null == j ? void 0 : j.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => {
            l.h.dispatch({
                type: "REGISTER_SUCCESS",
                token: e.body.token,
            }),
                d.default.track(p.HAw.AGE_GATE_ACTION, {
                    source: g.w_.REGISTER,
                    action: g.AM.AGE_GATE_SUCCESS,
                });
        },
        (e) => {
            if (e instanceof c.CaptchaCancelError) throw e;
            let t = new a.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && o.Xv(g.w_.REGISTER),
                d.default.track(p.HAw.REGISTER_SUBMIT_ERRORED, {
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
