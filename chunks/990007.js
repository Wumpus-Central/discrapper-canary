n.d(t, { A: () => b }), n(323874), n(14289), n(35956);
var i = n(488428),
    r = n(485845),
    a = n(179771),
    l = n(136722),
    s = n(562465),
    o = n(898467),
    d = n(420970),
    u = n(506774),
    c = n(73153),
    A = n(587895),
    h = n(224750),
    _ = n(20015),
    E = n(716965),
    p = n(671523),
    m = n(337095),
    g = n(611010),
    I = n(287809),
    C = n(927813),
    f = n(488926),
    T = n(636401),
    S = n(613057),
    N = n(652215);
let O = "CachedTokens",
    L = { "1273616940451102832": new o.A(2, +C.A.Millis.MINUTE) };
async function y(e, t, n) {
    let i,
        a,
        s,
        o,
        d,
        {
            client_id: u,
            response_type: c = "code",
            redirect_uri: C,
            code_challenge: S,
            code_challenge_method: O,
            state: y,
            nonce: v,
            scope: b,
            permissions: D,
            guild_id: R,
            channel_id: P,
            prompt: w,
            disable_guild_select: M,
            integration_type: U,
            pid: x,
            signal: G,
            isSocketRpcPrivateScope: k,
        } = e;
    if (G?.aborted) throw new T.A({ errorCode: N.Lw6.UNKNOWN_ERROR }, "Request aborted");
    if (null == u) throw new T.A({ errorCode: N.Lw6.OAUTH2_ERROR }, "No Client ID provided");
    if (!k && null != C)
        throw new T.A(
            { errorCode: N.Lw6.OAUTH2_ERROR },
            "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
        );
    let j = [];
    if (
        ("string" == typeof b ? (j = b.split(" ").filter((e) => e.length > 0)) : Array.isArray(b) && (j = b),
        null == I.default.getCurrentUser())
    )
        throw new T.A({ errorCode: N.Lw6.OAUTH2_ERROR }, "Client is not logged in");
    if (null != U) a = Number(U);
    else {
        let e = (e) => (0, _.n)(e, N.gfo.EMBEDDED) && e?.integrationTypesConfig?.[r.b.USER_INSTALL] != null,
            t = A.A.getApplication(u);
        a = e(t) || e((t = g.Ay.createFromServer(await (0, m.TA)(u, G)))) ? r.b.USER_INSTALL : r.b.GUILD_INSTALL;
    }
    try {
        [s, { disclosures: o, allAcked: d }] = await Promise.all([
            (0, E.qY)({
                clientId: u,
                scopes: j,
                responseType: c,
                redirectUri: C,
                codeChallenge: S,
                codeChallengeMethod: O,
                state: y,
                integrationType: a,
                signal: G,
            }),
            (0, h.vG)(u),
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new T.A(
            { errorCode: N.Lw6.OAUTH2_ERROR },
            `OAuth2 Authorization Error: ${e?.message || "Unknown Error"}`,
        );
    }
    if (w === p.l.NONE && null != s && s.authorized && d)
        try {
            return (
                await (0, E.Gq)({
                    authorize: !0,
                    clientId: u,
                    scopes: j,
                    responseType: c,
                    redirectUri: C,
                    codeChallenge: S,
                    codeChallengeMethod: O,
                    state: y,
                    nonce: v,
                    integrationType: a,
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new T.A(
                { errorCode: N.Lw6.OAUTH2_ERROR },
                `OAuth2 Authorize Error: ${e?.message || "Unknown Error"}`,
            );
        }
    n?.(s.application, P, x);
    let V = f.x3;
    try {
        V = l.iu(D ?? 0);
    } catch (e) {}
    if (
        (null != s.integration_type &&
            Object.values(r.b).includes(s.integration_type) &&
            (i = new Map()).set(s.integration_type, s),
        null != L[s.application.id] && (await L[s.application.id].process(), G?.aborted))
    )
        throw new T.A({ errorCode: N.Lw6.UNKNOWN_ERROR }, "Request aborted");
    return t({
        clientId: u,
        authorizations: i,
        scopes: j,
        parsedPermissions: V,
        responseType: c,
        redirectUri: C,
        codeChallenge: S,
        codeChallengeMethod: O,
        state: y,
        guildId: R,
        channelId: P,
        prompt: w,
        disableGuildSelect: M,
        disclosures: o,
        integrationType: a,
        pid: x,
        signal: G,
    });
}
function v(e, t) {
    if (e.authorization.accessToken) throw new T.A({ errorCode: N.Lw6.INVALID_COMMAND }, "Already authenticated");
    if (e.authorization.authing) throw new T.A({ errorCode: N.Lw6.INVALID_COMMAND }, "Already authenticating");
    return (
        (e.authorization.authing = !0),
        s.Bo.get({
            url: N.Rsh.OAUTH2_CURRENT_AUTH,
            headers: { Authorization: `Bearer ${t}` },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: a, expires: l } = n.body;
                    if (e.application.id !== i.id)
                        throw new T.A(
                            { errorCode: N.Lw6.INVALID_CLIENTID },
                            "Application does not match the connection's",
                        );
                    let s = I.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id)
                        throw new T.A({ errorCode: N.Lw6.INVALID_TOKEN }, "Token does not match current user");
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...a, S.VH]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(l)),
                        c.h.dispatch({ type: "RPC_APP_AUTHENTICATED", socketId: e.id, application: e.application }),
                        { ...n.body, access_token: t }
                    );
                },
                () => {
                    throw new T.A({ errorCode: N.Lw6.INVALID_TOKEN }, `Invalid access token: ${t}`);
                },
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function b(e, t) {
    return {
        [N.e$_.AUTHENTICATE]: (0, d.T)(N.e$_.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: r,
                    signal: l,
                    args: { access_token: s },
                } = n;
                if (null == s && r.transport === S.z4.IPC) {
                    let n = r.application.id;
                    if (null == n) throw new T.A({ errorCode: N.Lw6.INVALID_COMMAND }, "No application.");
                    let o = a.F.IDENTIFY,
                        d = () =>
                            y(
                                {
                                    client_id: n,
                                    scope: o,
                                    response_type: "token",
                                    signal: l,
                                    isSocketRpcPrivateScope: !1,
                                },
                                e,
                                t,
                            ).then((e) => {
                                var t, a, l;
                                let s;
                                if (null == e)
                                    throw new T.A({ errorCode: N.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                                let o = e.split(/#|\?/),
                                    d = i.parse(o[o.length - 1]);
                                if (null != d.error)
                                    throw new T.A(
                                        { errorCode: N.Lw6.OAUTH2_ERROR },
                                        `OAuth2 Error: ${d.error}: ${d.error_description ?? "unknown error"}`,
                                    );
                                return (
                                    (t = d.access_token),
                                    (a = d.scope),
                                    (l = d.expires_in),
                                    ((s = u.w.get(O) ?? {})[n] = { accessToken: t, scope: a, expires: Date.now() + l }),
                                    u.w.set(O, s),
                                    v(r, d.access_token)
                                );
                            });
                    return null !=
                        (s = (function (e, t) {
                            let n = u.w.get(O);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], u.w.set(O, n);
                            }
                        })(n, o))
                        ? v(r, s).catch(() => {
                              let e;
                              return (e = u.w.get(O) ?? {}), delete e[n], u.w.set(O, e), d();
                          })
                        : d();
                }
                if (null == s) throw new T.A({ errorCode: N.Lw6.INVALID_TOKEN }, "No access token provided");
                return v(r, s);
            },
        }),
        [N.e$_.AUTHORIZE]: {
            handler(n) {
                let { socket: i, signal: r, args: a } = n,
                    l = a.client_id;
                if (!l) throw new T.A({ errorCode: N.Lw6.INVALID_CLIENTID }, "No client id provided");
                if (null != i.authorization.accessToken)
                    throw new T.A({ errorCode: N.Lw6.INVALID_COMMAND }, "Already authenticated");
                if (i.authorization.authing) throw new T.A({ errorCode: N.Lw6.INVALID_COMMAND }, "Already authing");
                if (((i.authorization.authing = !0), "token" === a.response_type))
                    throw (
                        ((i.authorization.authing = !1),
                        new T.A(
                            { errorCode: N.Lw6.INVALID_COMMAND },
                            'Authorization response_type "token" is not supported',
                        ))
                    );
                let s = i.authorization.scopes.includes(S.LQ);
                if (!s && i.application.id !== l)
                    throw (
                        ((i.authorization.authing = !1),
                        new T.A({ errorCode: N.Lw6.INVALID_CLIENTID }, "Application does not match the connection's"))
                    );
                let o = a.scopes || a.scope;
                return (
                    delete a.scopes,
                    y({ ...a, scope: o, signal: r, isSocketRpcPrivateScope: s }, e, t)
                        .then((e) => {
                            if (((i.authorization.authing = !1), null == e))
                                throw new T.A({ errorCode: N.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                            let t = new URL(e),
                                n = t.searchParams.get("code");
                            if (s) return { code: n, location: e };
                            let r = t.searchParams.get("error");
                            if (null != r && "" !== r) {
                                let e = t.searchParams.get("error_description") ?? "unknown error";
                                throw new T.A({ errorCode: N.Lw6.OAUTH2_ERROR }, `OAuth2 Error: ${r}: ${e}`);
                            }
                            if (null == n)
                                throw new T.A(
                                    { errorCode: N.Lw6.OAUTH2_ERROR },
                                    "OAuth2 Error: Unable to find auth code",
                                );
                            return { code: n };
                        })
                        .catch((e) => {
                            throw ((i.authorization.authing = !1), e);
                        })
                );
            },
        },
    };
}
