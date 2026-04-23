"use strict";
n.d(t, { H: () => p });
var i = n(64700),
    s = n(158390),
    r = n(562465),
    l = n(830215),
    a = n(765548),
    o = n(626584),
    c = n(751124),
    d = n(203982),
    u = n(323737),
    _ = n(442767),
    h = n(525711),
    m = n(652215);
let g = new o.A("useAuthWebsocket");
function p(e, t) {
    let [n, o] = i.useState(0),
        [p, A] = i.useState(!1),
        [f, E] = i.useState({ step: h.b.INITIALIZING }),
        x = i.useRef(null),
        I = i.useMemo(() => new s.A(1500, 3e4), []),
        v = (0, a.A)(() => {
            E({ step: h.b.INITIALIZING }),
                t
                    ? o((e) => e + 1)
                    : (g.info("document is not visible, will defer reconnection when document becomes visible."),
                      A(!0));
        }),
        N = i.useCallback(() => {
            g.error("Could not complete Remote Auth login, trying to restart with a new Remote Auth session."),
                E({ step: h.b.INITIALIZING }),
                I.pending || I.fail(v);
        }, [v, I]);
    return (
        i.useEffect(() => {
            t &&
                p &&
                f.step === h.b.INITIALIZING &&
                (g.info("reconnecting, now that document is visible"), A(!1), o((e) => e + 1));
        }, [f, t, p, A]),
        i.useEffect(() => {
            let t = Date.now(),
                n = (e) => `[${Date.now() - t}ms] ${e}`,
                i = (e) => g.info(n(e)),
                s = `${window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT}/?v=2`;
            s.startsWith("//") && (s = `wss:${s}`);
            let a = (0, c.A)(s);
            g.info(`[0ms] connecting to ${s}`);
            let o = null,
                p = null,
                A = null,
                f = null,
                j = !0;
            function C() {
                if (null != o) return o;
                throw Error("No key pair set");
            }
            let T = () => {
                    j
                        ? ((j = !1), a.send(JSON.stringify({ op: "heartbeat" })))
                        : (i("heartbeat timeout, reconnecting."), a.close(), N());
                },
                y = async (t) => {
                    let { data: s } = t,
                        o = JSON.parse(s);
                    switch (o.op) {
                        case "nonce_proof": {
                            let e = o.encrypted_nonce,
                                t = await u.A.decryptNonce(C(), e);
                            i("computed nonce proof"), a.send(JSON.stringify({ op: "nonce_proof", nonce: t }));
                            return;
                        }
                        case "pending_remote_init": {
                            I.succeed(), d._.dispatch(m.jej.WAVE_EMPHASIZE);
                            let e = await u.A.publicKeyFingerprint(C());
                            if (e !== o.fingerprint) throw Error(`bad fingerprint ${e} !== ${o.fingerprint}`);
                            i("handshake complete awaiting remote auth."),
                                E({ step: h.b.PENDING_REMOTE_INIT, fingerprint: e });
                            return;
                        }
                        case "pending_login": {
                            let t = o.ticket;
                            if (null == t) return void N();
                            E({ step: h.b.PENDING_LOGIN, ticket: t }),
                                r.Bo.post({
                                    url: m.Rsh.REMOTE_AUTH_LOGIN,
                                    body: { ticket: t },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                })
                                    .then(async (t) => {
                                        if (null == x.current) return void N();
                                        let n = await u.A.decryptEncodedCiphertext(x.current, t.body.encrypted_token),
                                            i = await u.A.publicKeyFingerprint(x.current);
                                        await l.A.loginToken(n, !1), e(i);
                                    })
                                    .catch(() => N());
                            return;
                        }
                        case "pending_ticket": {
                            d._.dispatch(m.jej.WAVE_EMPHASIZE),
                                i("remote auth handshake started, awaiting ticket/cancel.");
                            let e = o.encrypted_user_payload,
                                t = await (0, _.n7)(C(), e);
                            E({ step: h.b.PENDING_TICKET, user: t });
                            return;
                        }
                        case "cancel":
                            i("remote auth handshake cancelled."), v();
                            return;
                        case "hello": {
                            i(`got hello, auth timeout=${o.timeout_ms}ms`);
                            let e = o.heartbeat_interval;
                            f = setTimeout(
                                () => {
                                    (f = null), T(), (A = setInterval(T, e));
                                },
                                Math.floor(e * Math.random()),
                            );
                            return;
                        }
                        case "heartbeat_ack":
                            j = !0;
                            return;
                        default:
                            g.warn(n("received unsupported message"));
                    }
                },
                b = async () => {
                    (o = await u.A.generateRsaKeyPair()), (p = await u.A.serializePublicKey(o));
                    let e = await u.A.publicKeyFingerprint(o);
                    i(`connected, handshaking with fingerprint: ${e}`),
                        a.send(JSON.stringify({ op: "init", encoded_public_key: p })),
                        (x.current = o);
                },
                S = (e) => {
                    i(`disconnected, code: ${e.code} ${e.reason}`), N();
                },
                R = (e) => {
                    i(`disconnected, error: ${JSON.stringify(e)}`), N();
                };
            return (
                a.addEventListener("open", b),
                a.addEventListener("message", y),
                a.addEventListener("close", S),
                a.addEventListener("error", R),
                () => {
                    i("cleaning up"),
                        a.removeEventListener("open", b),
                        a.removeEventListener("message", y),
                        a.removeEventListener("close", S),
                        a.removeEventListener("error", R),
                        a.close(1e3),
                        I.cancel(),
                        u.A.release(),
                        null != f && clearTimeout(f),
                        null != A && clearInterval(A);
                }
            );
        }, [v, e, n, I, N]),
        { state: f, cancel: v }
    );
}
