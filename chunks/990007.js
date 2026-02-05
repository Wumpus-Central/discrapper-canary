n.d(t, { A: () => L }), n(938796), n(323874), n(14289), n(35956);
var i = n(488428),
    r = n(485845),
    a = n(179771),
    l = n(136722),
    s = n(665260),
    o = n(562465),
    d = n(898467),
    c = n(420970),
    u = n(506774),
    A = n(73153),
    h = n(587895),
    _ = n(224750),
    m = n(716965),
    p = n(671523),
    g = n(337095),
    E = n(611010),
    f = n(287809),
    I = n(927813),
    C = n(488926),
    N = n(636401),
    T = n(613057),
    S = n(652215);
let x = "CachedTokens",
    v = { "1273616940451102832": new d.A(2, +I.A.Millis.MINUTE) };
async function b(e, t, n) {
    let i,
        a,
        o,
        d,
        c,
        {
            client_id: u,
            response_type: A = "code",
            redirect_uri: I,
            code_challenge: T,
            code_challenge_method: x,
            state: b,
            nonce: y,
            scope: L,
            permissions: O,
            guild_id: R,
            channel_id: P,
            prompt: j,
            disable_guild_select: D,
            integration_type: w,
            pid: M,
            signal: U,
            isSocketRpcPrivateScope: G,
        } = e;
    if (U?.aborted) throw new N.A({ errorCode: S.Lw6.UNKNOWN_ERROR }, "Request aborted");
    if (null == u) throw new N.A({ errorCode: S.Lw6.OAUTH2_ERROR }, "No Client ID provided");
    if (!G && null != I)
        throw new N.A(
            { errorCode: S.Lw6.OAUTH2_ERROR },
            "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
        );
    let k = [];
    if (
        ("string" == typeof L ? (k = L.split(" ").filter((e) => e.length > 0)) : Array.isArray(L) && (k = L),
        null == f.default.getCurrentUser())
    )
        throw new N.A({ errorCode: S.Lw6.OAUTH2_ERROR }, "Client is not logged in");
    if (null != w) a = Number(w);
    else {
        let e = (e) =>
                null != e && (0, s.Lt)(e.flags, S.gfo.EMBEDDED) && e.integrationTypesConfig?.[r.b.USER_INSTALL] != null,
            t = h.A.getApplication(u);
        a = e(t) || e((t = E.Ay.createFromServer(await (0, g.TA)(u, U)))) ? r.b.USER_INSTALL : r.b.GUILD_INSTALL;
    }
    try {
        [o, { disclosures: d, allAcked: c }] = await Promise.all([
            (0, m.qY)({
                clientId: u,
                scopes: k,
                responseType: A,
                redirectUri: I,
                codeChallenge: T,
                codeChallengeMethod: x,
                state: b,
                integrationType: a,
                signal: U,
            }),
            (0, _.vG)(u),
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new N.A(
            { errorCode: S.Lw6.OAUTH2_ERROR },
            `OAuth2 Authorization Error: ${e?.message || "Unknown Error"}`,
        );
    }
    if (j === p.l.NONE && null != o && o.authorized && c)
        try {
            return (
                await (0, m.Gq)({
                    authorize: !0,
                    clientId: u,
                    scopes: k,
                    responseType: A,
                    redirectUri: I,
                    codeChallenge: T,
                    codeChallengeMethod: x,
                    state: b,
                    nonce: y,
                    integrationType: a,
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new N.A(
                { errorCode: S.Lw6.OAUTH2_ERROR },
                `OAuth2 Authorize Error: ${e?.message || "Unknown Error"}`,
            );
        }
    n?.(o.application, P, M);
    let V = C.x3;
    try {
        V = l.iu(O ?? 0);
    } catch (e) {}
    if (
        (null != o.integration_type &&
            Object.values(r.b).includes(o.integration_type) &&
            (i = new Map()).set(o.integration_type, o),
        null != v[o.application.id] && (await v[o.application.id].process(), U?.aborted))
    )
        throw new N.A({ errorCode: S.Lw6.UNKNOWN_ERROR }, "Request aborted");
    return t({
        clientId: u,
        authorizations: i,
        scopes: k,
        parsedPermissions: V,
        responseType: A,
        redirectUri: I,
        codeChallenge: T,
        codeChallengeMethod: x,
        state: b,
        guildId: R,
        channelId: P,
        prompt: j,
        disableGuildSelect: D,
        disclosures: d,
        integrationType: a,
        pid: M,
        signal: U,
    });
}
function y(e, t) {
    if (e.authorization.accessToken) throw new N.A({ errorCode: S.Lw6.INVALID_COMMAND }, "Already authenticated");
    if (e.authorization.authing) throw new N.A({ errorCode: S.Lw6.INVALID_COMMAND }, "Already authenticating");
    return (
        (e.authorization.authing = !0),
        o.Bo.get({
            url: S.Rsh.OAUTH2_CURRENT_AUTH,
            headers: { Authorization: `Bearer ${t}` },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: a, expires: l } = n.body;
                    if (e.application.id !== i.id)
                        throw new N.A(
                            { errorCode: S.Lw6.INVALID_CLIENTID },
                            "Application does not match the connection's",
                        );
                    let s = f.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id)
                        throw new N.A({ errorCode: S.Lw6.INVALID_TOKEN }, "Token does not match current user");
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...a, T.VH]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(l)),
                        A.h.dispatch({ type: "RPC_APP_AUTHENTICATED", socketId: e.id, application: e.application }),
                        { ...n.body, access_token: t }
                    );
                },
                () => {
                    throw new N.A({ errorCode: S.Lw6.INVALID_TOKEN }, `Invalid access token: ${t}`);
                },
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
function L(e, t) {
    return {
        [S.e$_.AUTHENTICATE]: (0, c.T)(S.e$_.AUTHENTICATE, {
            handler(n) {
                let {
                    socket: r,
                    signal: l,
                    args: { access_token: s },
                } = n;
                if (null == s && r.transport === T.z4.IPC) {
                    let n = r.application.id;
                    if (null == n) throw new N.A({ errorCode: S.Lw6.INVALID_COMMAND }, "No application.");
                    let o = a.F.IDENTIFY,
                        d = () =>
                            b(
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
                                    throw new N.A({ errorCode: S.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                                let o = e.split(/#|\?/),
                                    d = i.parse(o[o.length - 1]);
                                if (null != d.error)
                                    throw new N.A(
                                        { errorCode: S.Lw6.OAUTH2_ERROR },
                                        `OAuth2 Error: ${d.error}: ${d.error_description ?? "unknown error"}`,
                                    );
                                return (
                                    (t = d.access_token),
                                    (a = d.scope),
                                    (l = d.expires_in),
                                    ((s = u.w.get(x) ?? {})[n] = { accessToken: t, scope: a, expires: Date.now() + l }),
                                    u.w.set(x, s),
                                    y(r, d.access_token)
                                );
                            });
                    return null !=
                        (s = (function (e, t) {
                            let n = u.w.get(x);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], u.w.set(x, n);
                            }
                        })(n, o))
                        ? y(r, s).catch(() => {
                              let e;
                              return (e = u.w.get(x) ?? {}), delete e[n], u.w.set(x, e), d();
                          })
                        : d();
                }
                if (null == s) throw new N.A({ errorCode: S.Lw6.INVALID_TOKEN }, "No access token provided");
                return y(r, s);
            },
        }),
        [S.e$_.AUTHORIZE]: {
            handler(n) {
                let { socket: i, signal: r, args: a } = n,
                    l = a.client_id;
                if (!l) throw new N.A({ errorCode: S.Lw6.INVALID_CLIENTID }, "No client id provided");
                if (null != i.authorization.accessToken)
                    throw new N.A({ errorCode: S.Lw6.INVALID_COMMAND }, "Already authenticated");
                if (i.authorization.authing) throw new N.A({ errorCode: S.Lw6.INVALID_COMMAND }, "Already authing");
                if (((i.authorization.authing = !0), "token" === a.response_type))
                    throw (
                        ((i.authorization.authing = !1),
                        new N.A(
                            { errorCode: S.Lw6.INVALID_COMMAND },
                            'Authorization response_type "token" is not supported',
                        ))
                    );
                let s = i.authorization.scopes.includes(T.LQ);
                if (!s && i.application.id !== l)
                    throw (
                        ((i.authorization.authing = !1),
                        new N.A({ errorCode: S.Lw6.INVALID_CLIENTID }, "Application does not match the connection's"))
                    );
                let o = a.scopes || a.scope;
                return (
                    delete a.scopes,
                    b({ ...a, scope: o, signal: r, isSocketRpcPrivateScope: s }, e, t)
                        .then((e) => {
                            if (((i.authorization.authing = !1), null == e))
                                throw new N.A({ errorCode: S.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                            let t = new URL(e),
                                n = t.searchParams.get("code");
                            if (s) return { code: n, location: e };
                            let r = t.searchParams.get("error");
                            if (null != r && "" !== r) {
                                let e = t.searchParams.get("error_description") ?? "unknown error";
                                throw new N.A({ errorCode: S.Lw6.OAUTH2_ERROR }, `OAuth2 Error: ${r}: ${e}`);
                            }
                            if (null == n)
                                throw new N.A(
                                    { errorCode: S.Lw6.OAUTH2_ERROR },
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
