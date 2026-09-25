(n.r(t), n.d(t, { default: () => rd }));
var i,
    l,
    s,
    r,
    a,
    o,
    c,
    u = n(477900),
    d = n(582128),
    h = n(492462),
    m = n(562708),
    g = n(607399),
    f = n(470562),
    p = n(17928),
    x = n(228366),
    A = n(830215),
    E = n(869038),
    _ = n(376728),
    j = n(636537),
    v = n(6981),
    N = n(376943),
    C = n(718446),
    I = n(746080),
    S = n(355097),
    T =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        (i.GUILD_ANALYTICS_SETTING = "guild_analytics_setting"),
        (i.GAME_CLAIM = "game_claim"),
        i);
function y(e) {
    let t = decodeURIComponent(e),
        n = (0, N.vu)(t);
    return null != n && n.channelId === I.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, C.settingsPathToRoute)(S.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var b = n(115036),
    R = n(174459),
    L = n(272355),
    O = n(652215);
function k(e, t) {
    R.default.track(O.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class D extends L.A {
    _initialize() {
        (x.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            x.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    _terminate() {
        (x.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            x.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? j.Bo.post({ url: O.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      ((0, v.uA)(t.user), A.A.loginToken(t.token, !1), k(!0, l));
                  },
                  (e) => {
                      (null != i && k(!1, l),
                          A.A.setFingerprint(i),
                          (0, v.mZ)(),
                          l === T.ROLE_SUBSCRIPTION &&
                              R.default.track(O.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              }));
                  },
              )
            : null != i
              ? (A.A.setFingerprint(i), k(!1, l), (0, v.mZ)())
              : (A.A.setFingerprint(i), (0, v.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = b.A.key;
        null != i && b.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (A.A.setFingerprint(null), (0, v.J0)());
    };
}
let w = new D();
var P = n(854378),
    G = n(976860),
    U = n(210714),
    B = n(430690),
    F = n(503698),
    V = n.n(F),
    M = n(834730),
    H = n(821609),
    W = n(181658),
    K = n(625494),
    Q = n(499785),
    z = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    X = n(375708),
    q = n(652989),
    Y = n(221851);
function $(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, a] = d.useState(!1),
        [o, c] = d.useState(null),
        [h, g] = d.useState(null),
        [f, p] = d.useState(""),
        x = d.useRef(null);
    return (
        d.useEffect(() => {
            l && x.current?.focus();
        }, [l]),
        (0, u.jsxs)("div", {
            children: [
                (0, u.jsx)(P._V, { src: null == h ? n(79418) : n(579656), className: V()(Y.SX, Y.Ot) }),
                (0, u.jsx)(P.hE, { children: X.intl.string(X.t.IfBQ56) }),
                null != h && "" !== h
                    ? (0, u.jsx)(M.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: h })
                    : null,
                (0, u.jsxs)(P.eB, {
                    className: V()(Y.SX, Y.QX),
                    children: [
                        (0, u.jsx)(P.pd, {
                            name: "password",
                            type: "password",
                            label: X.intl.string(X.t["8dM4FO"]),
                            setRef: x,
                            className: Y.SX,
                            value: f,
                            onChange: p,
                            error: o,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: X.intl.string(X.t["yY/PXY"]),
                        }),
                        (0, u.jsx)("div", {
                            className: Y.Ot,
                            children: (0, u.jsx)(H.$, {
                                text: X.intl.string(X.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            (c(X.intl.string(X.t.R98xD5)), K._.dispatch(O.jej.WAVE_EMPHASIZE));
                                            return;
                                        }
                                        return (
                                            null != h && g(null),
                                            null != o && c(null),
                                            t(""),
                                            a(!0),
                                            Q.A.post({
                                                url: O.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: f },
                                                trackedActionData: { event: m.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    (p(""), t(n), i(z.SUCCESS));
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            X.intl.formatToPlainString(X.t.aTVNes, {
                                                                statusPageURL: O.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new W.A(e);
                                                        t.hasFieldErrors()
                                                            ? c(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case O.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return X.intl.string(X.t["11zzGR"]);
                                                                          case O.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return X.intl.string(X.t["6qmgaI"]);
                                                                          case O.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return X.intl.string(X.t.bChnKs);
                                                                          default:
                                                                              return X.intl.format(X.t.aTVNes, {
                                                                                  statusPageURL: O.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    K._.dispatch(O.jej.WAVE_EMPHASIZE);
                                                })
                                                .finally(() => {
                                                    a(!1);
                                                })
                                        );
                                    }
                                },
                                loading: r,
                                disabled: r,
                            }),
                        }),
                    ],
                }),
                (0, u.jsx)("div", {
                    className: q.UD,
                    children: (0, u.jsx)(H.$, {
                        text: X.intl.string(X.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            (p(""), i(z.START));
                        },
                    }),
                }),
            ],
        })
    );
}
var Z = n(825484),
    J = n(749314);
function ee(e) {
    let { children: t } = e;
    return (0, u.jsx)("li", {
        className: q.Aw,
        children: (0, u.jsx)(M.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function et(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsx)(P._V, { src: n(79418), className: V()(Y.SX, Y.Ot) }),
            (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["8UcxI6"]) }),
            (0, u.jsx)(M.E, { variant: "text-md/normal", children: X.intl.string(X.t.O37hMl) }),
            (0, u.jsxs)(P.eB, {
                className: V()(Y.SX, Y.QX),
                children: [
                    (0, u.jsx)(M.E, { variant: "text-sm/normal" }),
                    (0, u.jsxs)("ul", {
                        className: q.qI,
                        children: [
                            (0, u.jsx)(ee, { children: X.intl.string(X.t.Gj1Zry) }),
                            (0, u.jsx)(J.A, {}),
                            (0, u.jsx)(ee, { children: X.intl.string(X.t["8C6t3B"]) }),
                            (0, u.jsx)(J.A, {}),
                            (0, u.jsx)(ee, { children: X.intl.string(X.t.mToZMA) }),
                            (0, u.jsx)(J.A, {}),
                            (0, u.jsx)(ee, { children: X.intl.string(X.t.TPEvkc) }),
                            (0, u.jsx)(J.A, {}),
                            (0, u.jsx)(ee, { children: X.intl.string(X.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, u.jsxs)(Z.e, {
                direction: "vertical",
                fullWidth: !0,
                className: q.UD,
                children: [
                    (0, u.jsx)(H.$, { text: X.intl.string(X.t.GgCRqR), onClick: () => t(z.PASSWORD) }),
                    (0, u.jsx)(H.$, {
                        text: X.intl.string(X.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(O.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function en(e) {
    let { email: t } = e;
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsx)(P._V, { src: n(79418), className: V()(Y.SX, Y.Ot) }),
            (0, u.jsx)(P.hE, { children: X.intl.string(X.t.ailkVG) }),
            (0, u.jsx)(P.tK, { children: X.intl.format(X.t["4ZMVCI"], { email: t }) }),
            (0, u.jsx)(M.E, {
                className: V()(Y.QB, Y.QX),
                variant: "text-md/normal",
                children: X.intl.string(X.t["dpAn+8"]),
            }),
        ],
    });
}
function ei(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = d.useState(z.START),
        [r, a] = d.useState(null),
        [o, c] = d.useState(""),
        h = { impression_group: m.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, u.jsx)("div", {
        style: { margin: "8px" },
        children: (0, u.jsxs)(B.t, {
            activeSlide: l,
            width: i,
            onSlideReady: a,
            children: [
                (0, u.jsx)(B.q, {
                    id: z.START,
                    impressionProperties: h,
                    impressionName: m.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, u.jsx)(et, { setSlide: s, transitionTo: t }),
                }),
                (0, u.jsx)(B.q, {
                    id: z.PASSWORD,
                    impressionProperties: h,
                    impressionName: m.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, u.jsx)($, {
                        setOriginalEmail: c,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === z.PASSWORD,
                        token: n,
                    }),
                }),
                (0, u.jsx)(B.q, {
                    id: z.SUCCESS,
                    impressionProperties: h,
                    impressionName: m.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, u.jsx)(en, { email: o }),
                }),
            ],
        }),
    });
}
p.Ay.initialize();
class el extends d.PureComponent {
    static defaultProps = { transitionTo: G.pX, replaceWith: G.bG };
    componentDidMount() {
        (0, U.d0)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, u.jsx)(P.Ay, {
            style: { padding: 0 },
            children: (0, u.jsx)(ei, { width: 464, token: e, ...this.props }),
        });
    }
}
var es = n(549711);
function er(e) {
    x.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
(n(323874), n(14289), n(35956));
var ea = n(132500),
    eo = n(941426);
let ec = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function eu(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return ("127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href);
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec;
    try {
        let { origin: i } = new URL(eu(e, t));
        return n
            .map((e) => eu(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return i === t;
            });
    } catch (e) {
        return (new eo.Vy("Auth").error("Failed to check external redirect", e), !1);
    }
}
async function eh(e) {
    let t = (0, ea.A)();
    try {
        var n;
        let i,
            l,
            s = (await j.Bo.post({ url: O.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
                .handoff_token,
            r =
                ((n = { urlString: e, handoffKey: t, handoffToken: s }),
                (i = new URL(n.urlString)),
                (l = `handoff_key=${encodeURIComponent(n.handoffKey)}&handoff_token=${encodeURIComponent(n.handoffToken)}`),
                "" !== i.hash ? (i.hash += `&${l}`) : (i.hash = `#${l}`),
                i.href);
        window.location.href = r;
    } catch (t) {
        window.location.href = e;
    }
}
var em = n(123292),
    eg = n(650048),
    ef = n(149790),
    ep = n(396681);
p.Ay.initialize();
class ex extends d.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, ep.A)(this.props.location),
            t = (0, h.parse)(this.props.location.search);
        (j.Bo.post({
            url: O.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { guild: t },
                    } = e,
                    n = (0, ef.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, U.d0)("disable_server_highlight_notifications"));
    }
    renderBusy() {
        return (0, u.jsx)(P.Ay, { children: (0, u.jsx)(P.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.Z33eiP) }),
                (0, u.jsx)(P.tK, { children: X.intl.format(X.t.NRWtfC, { guildName: n.name }) }),
                (0, u.jsx)("div", {
                    className: Y.eT,
                    children: (0, u.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, u.jsx)("div", {
                    className: Y.Ot,
                    children: (0, u.jsx)(em.Q, {
                        text: X.intl.string(X.t["cGmT/J"]),
                        onClick: () => {
                            t(O.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P._V, { src: n(37772), className: Y.SX }),
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.ox9hIS) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t["/dcuR5"]) }),
                (0, u.jsx)("div", {
                    className: Y.eT,
                    children: (0, u.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let eA = p.Ay.connectStores([eg.A], () => ({ defaultRoute: eg.A.defaultRoute }))(ex);
var eE = n(628284),
    e_ = n(557722),
    ej = n(628387),
    ev = n(148864),
    eN = n(354948);
n(53516);
var eC = n(938442);
let eI = ["loopback-network", "local-network-access"];
async function eS() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eI)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eT = n(736056),
    ey = n(620233),
    eb = n(122906),
    eR = n(121623),
    eL = n(31008);
function eO(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: s, height: r },
        src: eL.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var ek = n(154672),
    eD = n(331322),
    ew = n(289873),
    eP = n(297264),
    eG = n(47084);
function eU(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, u.jsx)(P.Ay, {
        className: eG.kL,
        children: (0, u.jsxs)(eD.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, u.jsxs)(eD.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, u.jsxs)(eD.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, u.jsx)(eD.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eG.Sl,
                                        children: l,
                                    }),
                                r && (0, u.jsx)(ew.y, { type: ew.y.Type.SPINNING_CIRCLE }),
                                (0, u.jsx)(eP.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, u.jsx)(M.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eG.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, u.jsx)(H.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eB = !1,
    eF = null,
    eV = null;
class eM extends p.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eB, verifyErrors: eF, redirectGuildId: eV };
    }
}
let eH = new eM(x.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((eB = !0), (eF = null), (eV = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((eB = !1), (eF = t));
    },
});
var eW = n(284009),
    eK = n.n(eW),
    eQ = n(481613),
    ez = n.n(eQ),
    eX = n(400253),
    eq = n(742821),
    eY = n(80703),
    e$ = n(280450),
    eZ = n(877062);
p.Ay.initialize();
var eJ = n(842241),
    e0 = n(202091),
    e1 = n(717421),
    e2 = n(661531),
    e3 = n(993077),
    e4 = n(235986),
    e8 = n(408738);
function e5(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(P._V, { src: n(431979) }),
            (0, u.jsx)(P.hE, { className: V()(Y.QX, Y.QB, eC.tR), children: X.intl.string(X.t.eL5z0i) }),
            (0, u.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t.poAv63) }),
            (0, u.jsxs)(e3.Z, {
                className: e8.Nr,
                type: e3.Z.Types.CUSTOM,
                children: [
                    (0, u.jsx)("img", { alt: "", className: e8.q8, src: n(355912) }),
                    (0, u.jsx)("img", { alt: "", className: e8.dw, src: n(610925) }),
                    (0, u.jsxs)(e4.A, {
                        className: e8.p_,
                        direction: e4.A.Direction.VERTICAL,
                        align: e4.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, u.jsx)(M.E, {
                                tag: "strong",
                                className: e8.p8,
                                variant: "text-md/normal",
                                style: { color: e2.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, u.jsx)("div", {
                                className: e8.x6,
                                children: (0, u.jsx)(H.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e7(e) {
    let { text: t, buttonCta: n, theme: i = O.NJ8.DARK, onClick: l } = e;
    return (0, u.jsx)(P.Ay, { theme: i, children: (0, u.jsx)(e5, { text: t, buttonCta: n, onClick: l }) });
}
var e9 = n(765671),
    e6 = n(71393),
    te = n(299091),
    tt = n(486020),
    tn = n(403362),
    ti = n(778712),
    tl = n(47167),
    ts = n(769015),
    tr = n(714991),
    ta = n(427262),
    to = n(172799),
    tc = n(330936),
    tu = n(622625);
function td(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function th(e) {
    return e.target_type === to.yV.STREAM && null != e.target_user;
}
function tm(e) {
    return e.channel?.type === O.rbe.GROUP_DM;
}
function tg(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tf(e) {
    return e.state === O.elq.ACCEPTED;
}
function tp(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tx(e) {
    let t;
    return !tp(e) && (!!tg(e) || (null != e.inviter && !tf(e) && ((t = td(e)), !((t?.memberCount ?? 0) > 100))));
}
function tA(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, u.jsx)(ts.A, { className: tu.Z2, game: i, size: tu.q6 })
        : null != n
          ? (0, u.jsx)(P.eu, { src: n.getAvatarURL(void 0, 100), size: ti._3.DEPRECATED_SIZE_100, className: tu.my })
          : null != t
            ? (0, u.jsx)(P.$v, { guild: t, size: P.$v.Sizes.LARGER, className: tu.$f, animate: !0 })
            : null;
}
function tE(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = td(t);
    return null == l || tx(t) || t?.guild?.id === tc.TA
        ? null
        : (0, u.jsx)(P.R1, {
              className: V()(tu.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function t_(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = d.useMemo(
            () =>
                n
                    ? null
                    : th(t) && null != t.target_user
                      ? tt.Ay.getUserAvatarURL(t.target_user)
                      : tx(t) && null != t.inviter
                        ? tt.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = X.intl.string(X.t["3rE1P8"]);
    return (
        tm(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? X.intl.format(X.t.Lu4h18, { username: t.inviter.username })
                      : X.intl.string(X.t.OsdY8B))
            : th(t) && null != t.target_user
              ? (l = X.intl.formatToPlainString(X.t.x2L32Q, { username: t.target_user.username }))
              : tf(t)
                ? (l = X.intl.string(X.t["FDsl+J"]))
                : tx(t) &&
                  null != t.inviter &&
                  (l = X.intl.format(X.t.spU2mI, { username: ta.Ay.getFormattedName(t.inviter) })),
        (0, u.jsxs)("div", {
            className: tu.JB,
            children: [
                null != i &&
                    (0, u.jsx)("div", {
                        className: tu._t,
                        children: (0, u.jsx)(P.eu, { src: i, size: ti._3.SIZE_24 }),
                    }),
                (0, u.jsx)(P.tK, { className: tu.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tj(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: o } = e,
        c = (0, tl.Ay)(r);
    if (null != s)
        (o && null == a && (t = (0, u.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, u.jsxs)("div", {
                    className: tu.JB,
                    children: [
                        (0, u.jsx)(P.tK, { className: tu.R9, children: X.intl.string(X.t["3gg9fF"]) }),
                        (0, u.jsxs)("div", {
                            className: tu.bo,
                            children: [
                                (0, u.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL }),
                                (0, u.jsx)(eP.D, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                }))));
    else if (null != r) {
        if (null == l) throw Error("no inviter in group DM invite");
        let e = ta.Ay.getFormattedName(l);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, u.jsx)(P.F4, { channel: r, size: ti._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = ta.Ay.getFormattedName(l);
        ((n = X.intl.formatToPlainString(X.t["4aF92R"], { username: e })),
            (i = (0, u.jsx)(P.tK, { className: tu.b$, children: X.intl.format(X.t.Quj7HX, { username: e }) })));
    }
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsxs)(P.hE, {
                className: tu.DD,
                children: [
                    null != s ? (0, u.jsx)(tr.A, { guild: s, className: tu.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tv = n(395671),
    tN = n(95701),
    tC = n(889227),
    tI = n(945810);
let tS = (0, tI.mj)({
    name: "2026-09-silp-cta-copy-tests",
    kind: "user",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "clarity" }, 2: { variant: "clarity_softer" }, 3: { variant: "low_commitment" } },
});
function tT(e) {
    return null != e && null != e.guild && (null == e.type || e.type === to.Xd.GUILD);
}
function ty(e) {
    return tS.useConfig({ location: e }).variant;
}
function tb(e) {
    switch (e) {
        case "clarity":
            return X.intl.string(X.t.OqHiIt);
        case "clarity_softer":
            return X.intl.string(X.t["1RFJ5Q"]);
        case "low_commitment":
            return X.intl.string(X.t.JMWqry);
        default:
            return X.intl.string(X.t.ohMvm1);
    }
}
var tR = n(548118),
    tL = n(557582),
    tO = n(167630),
    tk = n(424547);
function tD(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, u.jsxs)("div", {
        className: tk.s4,
        children: [
            (0, u.jsx)(tL.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tk.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, u.jsx)("div", {
                    className: tk.yW,
                    children: (0, u.jsx)(tO.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, u.jsx)("div", {
                className: tk.xG,
                children: (0, u.jsx)(H.$, {
                    variant: "active",
                    size: "md",
                    text: X.intl.string(X.t.riu2R5),
                    onClick: i,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function tw(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, ef.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, u.jsxs)("div", {
        className: tk.kQ,
        children: [
            (0, u.jsx)(eP.D, { className: tk.s7, variant: "text-sm/medium", children: X.intl.string(X.t.Eabu1z) }),
            (0, u.jsxs)("div", {
                className: tk.bo,
                children: [
                    (0, u.jsx)(tR.Ay, { guild: n, active: !0, size: tR.Ay.Sizes.MEDIUM }),
                    (0, u.jsxs)("div", {
                        className: tk.bW,
                        children: [
                            (0, u.jsxs)(M.E, {
                                className: tk.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, u.jsx)(tr.A, { guild: n, className: tk.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, u.jsx)(tE, { invite: t, textClassName: tk.kS, className: tk.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, u.jsx)("details", {
                    className: tk.x_,
                    children: (0, u.jsx)(M.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tP(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, u.jsx)(tD, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tG = n(578564);
function tU(e) {
    let { text: t, onClick: n, loading: i } = e;
    return (0, u.jsx)(H.$, { variant: "primary", size: "md", text: t, onClick: n, loading: i, fullWidth: !0 });
}
function tB(e) {
    let t = ty("InviteAcceptMobile");
    return (0, u.jsx)(tU, { ...e, text: tb(t) });
}
function tF(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, ef.DY)(t.guild) : null,
        s = null != t.channel ? (0, tN.OY)(t.channel) : null,
        r = null != t.target_application ? new tv.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tC.A(t.inviter),
        o =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(O.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            tm(t),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case O.elq.ACCEPTING:
                case O.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        d = { invite: t, user: a, guild: l, channel: s, application: r };
    return tp(t)
        ? (0, u.jsx)(tP, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, u.jsxs)("div", {
              className: tG.kL,
              children: [
                  (0, u.jsx)(tA, { application: r, guild: l, user: o || tg(t) ? a : null }),
                  tg(t) ? null : (0, u.jsx)(t_, { ...d, showBigUserIcon: o }),
                  (0, u.jsx)(tj, { ...d, showBigUserIcon: o }),
                  (0, u.jsx)(tE, { ...d }),
                  (0, u.jsx)("div", {
                      className: tG.xG,
                      children: tT(t)
                          ? (0, u.jsx)(tB, { onClick: n, loading: c })
                          : (0, u.jsx)(tU, { text: tb(null), onClick: n, loading: c }),
                  }),
              ],
          });
}
var tV = n(43990),
    tM = n(241524),
    tH = n(573435),
    tW = n(260509),
    tK = n(370953);
function tQ(e) {
    let { guild: t, outline: n } = e,
        i = (0, tM.A)("(max-width: 600px), (max-height: 600px)") ? tR.DN.LARGER : tR.DN.XLARGE,
        l = tR.iu[i],
        s = tR.s[i],
        r = d.useMemo(() => tt.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tW.Rb)(t),
        o =
            null != r
                ? (0, u.jsx)("img", { src: r, alt: "", className: tK.OV })
                : (0, u.jsx)("div", {
                      className: tK.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, u.jsx)("div", {
              className: V()(tK._C, tK.AY),
              children: (0, u.jsx)(tH.Ay, {
                  mask: tH.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, u.jsx)("div", {
                      className: tK.$d,
                      children: (0, u.jsx)(tH.Ay, { mask: tH.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
                  }),
              }),
          })
        : (0, u.jsx)("div", {
              className: tK._C,
              children: (0, u.jsx)(tH.Ay, { mask: tH.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
          });
}
var tz = n(927813);
let tX = /\.$/;
function tq(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tX, ""))
              .join(". ")
              .trim()
        : e;
}
function tY(e) {
    let [t, n] = d.useState(() => null != e && !e),
        [i, l] = d.useState(e);
    return (null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n]);
}
function t$() {
    let [e, t] = d.useState(!1),
        n = d.useRef(null);
    return (
        d.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            d.useCallback((e) => {
                (null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        (t(!1), (n.current = null));
                    }, e * tz.A.Millis.SECOND)));
            }, []),
        ]
    );
}
var tZ = n(153488),
    tJ = n(95477),
    t0 = n(866665),
    t1 = n(913122),
    t2 = n(934337),
    t3 = n(15552),
    t4 = n(536637),
    t8 = n.n(t4),
    t5 = n(955437),
    t7 = n(888548);
n(861807);
var t9 = n(569717),
    t6 = n(204925);
function ne(e) {
    let {
        email: t,
        phoneToken: n,
        username: i,
        globalName: l,
        consent: s,
        password: r,
        guildTemplateCode: a,
        birthday: o,
        invite: c = null,
        giftCodeSKUId: u = null,
        promoEmailConsent: d = null,
        usedUsernameSuggestion: h = null,
    } = e;
    if ((x.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        ((0, t9.A)(o, O.JJy.REGISTER),
            R.default.track(O.HAw.AGE_GATE_ACTION, { source: t6.w_.REGISTER, action: t6.AM.AGE_GATE_SUBMITTED }),
            (e = t8()().diff(o, "years")) < 13 ||
                R.default.track(O.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                }));
    }
    return Q.A.post({
        url: O.Rsh.REGISTER,
        body: {
            fingerprint: e$.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: u,
            guild_template_code: a,
            promotional_email_opt_in: d?.checked,
        },
        trackedActionData: {
            event: m.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
                used_username_suggestion: h,
                promotional_email_opt_in: d?.checked,
                promotional_email_pre_checked: d?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => {
            (x.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                x.h.dispatch({
                    type: "GUARDIAN_CONNECT_REQUIRED",
                    shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
                }),
                R.default.track(O.HAw.AGE_GATE_ACTION, { source: t6.w_.REGISTER, action: t6.AM.AGE_GATE_SUCCESS }));
        },
        (e) => {
            if (e instanceof t7.CaptchaCancelError) throw e;
            let t = new W.A(e);
            throw (
                null != t.getFieldErrors("date_of_birth") && t5.Xv(t6.w_.REGISTER),
                R.default.track(O.HAw.REGISTER_SUBMIT_ERRORED, {
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
                t
            );
        },
    );
}
var nt = n(568385),
    nn = n(975639);
function ni(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, u.jsx)("div", {
              className: nn.IQ,
              children: (0, u.jsx)(nt.J, {
                  label: X.intl.format(X.t.qMDAP0, { termsURL: O.X7G.TERMS, privacyURL: O.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, u.jsx)(M.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: V()(Y.Ot, nn.E2),
              children: X.intl.format(X.t["KI+BSb"], { termsURL: O.X7G.TERMS, privacyURL: O.X7G.PRIVACY }),
          });
}
let nl = (0, tI.mj)({
    kind: "installation",
    name: "2026-09-registration-email-opt-in-copy",
    defaultConfig: { trackingCopy: !1 },
    variations: { 1: { trackingCopy: !0 } },
});
function ns() {
    let { required: e, checked: t } = (0, t2.mZ)(),
        n = (function (e, t) {
            let { trackingCopy: n } = nl.useConfig({ location: t });
            return X.intl.string(n ? X.t.LSoXK5 : e);
        })(X.t["0p3R0+"], "REGISTER_PROMO_EMAIL_CHECKBOX_WEB");
    return e
        ? (0, u.jsx)("div", {
              className: Y.Ot,
              children: (0, u.jsx)(nt.J, { label: n, checked: t, onChange: t2.Bw, labelType: "secondary" }),
          })
        : null;
}
var nr = n(890251);
function na(e) {
    let {
            invite: t,
            username: n,
            parsedDateOfBirth: i,
            email: l,
            password: s,
            consent: r,
            consentRequired: a,
            apiErrors: o,
            onEmailChange: c,
            onPasswordChange: h,
            onConsentChange: m,
            onApiErrors: g,
            onOpenApp: f,
            onRegister: p,
        } = e,
        [x, A] = d.useState(!1),
        [E, _] = t$(),
        j = null != a && r,
        v = d.useRef(null),
        N = d.useRef(null);
    function C(e) {
        R.default.track(O.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function I(e) {
        R.default.track(O.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    d.useEffect(() => {
        v.current?.focus();
    }, []);
    let S = l.length > 0 && s.length > 0,
        T = d.useCallback(async () => {
            let e = t2.mZ.getState();
            (A(!0), g({}));
            try {
                (await ne({
                    email: l,
                    username: n,
                    consent: r,
                    password: s,
                    invite: t.code,
                    birthday: i,
                    promoEmailConsent: e.required ? e : null,
                }),
                    p());
            } catch (t) {
                if ((A(!1), !(t instanceof t1.LG))) return;
                let e = (0, t3.W)(t);
                (g(e),
                    null != e.email || null != e.phone ? v.current?.focus() : null != e.password && N.current?.focus(),
                    "number" == typeof e.retry_after && _(e.retry_after));
            }
        }, [t, l, n, s, i, r, g, p, _]),
        y = d.useCallback(
            (e) => {
                (e.preventDefault(), null != a && S && T());
            },
            [a, S, T],
        ),
        { message: b } = o;
    return (0, u.jsxs)("form", {
        onSubmit: y,
        children: [
            (0, u.jsx)("div", {
                className: Y.SX,
                children: (0, u.jsx)(tJ.k, {
                    label: X.intl.string(X.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: c,
                    error: tq(o.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: v,
                    onFocus: () => C("email"),
                    onBlur: () => I("email"),
                }),
            }),
            (0, u.jsx)(tJ.k, {
                label: X.intl.string(X.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: h,
                error: tq(o.password),
                type: "password",
                autoComplete: "new-password",
                inputRef: N,
                onFocus: () => C("password"),
                onBlur: () => I("password"),
            }),
            (0, u.jsx)(ns, {}),
            (0, u.jsx)(ni, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, u.jsx)(t0.m, {
                text: !r && a ? X.intl.string(X.t.AY4IVA) : null,
                children: (0, u.jsx)("div", {
                    className: Y.QX,
                    children: (0, u.jsx)(H.$, {
                        text: X.intl.string(X.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !j || E || !S,
                    }),
                }),
            }),
            "string" == typeof b ? (0, u.jsx)(P.ME, { className: V()(Y.QX, nn.gJ), children: b }) : null,
            (0, u.jsx)("div", {
                className: nr.o3,
                children: (0, u.jsx)(em.Q, {
                    text: X.intl.string(X.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function no(e) {
    let { guild: t } = e,
        n =
            tt.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? tt.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, u.jsx)("div", { className: nr.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function nc(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, ef.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, u.jsxs)("header", {
              children: [
                  (0, u.jsx)(no, { guild: i }),
                  (0, u.jsxs)("div", {
                      className: nr.lu,
                      children: [
                          (0, u.jsx)("div", { className: nr.LJ, children: (0, u.jsx)(tQ, { guild: i, outline: !0 }) }),
                          (0, u.jsx)(M.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n ?? X.intl.string(X.t["3rE1P8"]),
                          }),
                          (0, u.jsxs)("div", {
                              className: nr.G1,
                              children: [
                                  (0, u.jsx)(eP.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: nr.qd,
                                      children: i.name,
                                  }),
                                  (0, u.jsx)(tr.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, u.jsx)(tE, { invite: t }),
                      ],
                  }),
                  (0, u.jsx)("div", { className: nr.yF }),
              ],
          });
}
var nu = n(201505);
n(801541);
var nd = n(889137),
    nh = n(546727),
    nm = n(5052),
    ng = n(446837);
let nf = window.ResizeObserver ?? ng.t;
function np(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = d.useRef(null),
                [t, n] = d.useState(0),
                i = d.useMemo(
                    () =>
                        new nf((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                d.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        a = (0, e1.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        o = (0, e1.z)({
            from: { opacity: 0 },
            to: { opacity: +!!t },
            config: {
                duration: 200,
                easing: t
                    ? function (e) {
                          return e ** 4;
                      }
                    : function (e) {
                          return e * (2 - e);
                      },
            },
        });
    return (0, u.jsx)(e0.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, u.jsx)(e0.animated.div, { style: { opacity: o.opacity }, ref: s, children: n }),
    });
}
function nx(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, nm.i)(n, !0, !0),
        o = n.length > 0;
    return (
        (t = o
            ? (0, nd.YW)(a)
                  .with({ type: nh.q.ERROR, message: nd.P.select() }, (e) =>
                      (0, u.jsx)(M.E, { className: nn.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: nh.q.AVAILABLE, message: nd.P.select() }, (e) =>
                      (0, u.jsx)(M.E, { className: nn.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, u.jsx)(M.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: X.intl.string(X.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, u.jsx)(M.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: X.intl.format(X.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, u.jsx)(M.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: X.intl.string(X.t.z7c4bP),
                })),
        (0, u.jsx)(np, { show: (o && a?.type === nh.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function nA(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: i,
            onUsernameChange: l,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: a,
        } = e,
        [o, c] = d.useState(!1),
        h = d.useRef(null);
    function m(e) {
        R.default.track(O.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        R.default.track(O.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    d.useEffect(() => {
        null != i.username && h.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, u.jsxs)("form", {
        onSubmit: function (e) {
            (e.preventDefault(), f && r());
        },
        children: [
            (0, u.jsxs)("div", {
                onBlur: () => c(!1),
                onFocus: () => c(!0),
                tabIndex: -1,
                children: [
                    (0, u.jsx)("div", {
                        className: Y.SX,
                        children: (0, u.jsx)(tJ.k, {
                            label: X.intl.string(X.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: tq(i.username),
                            autoComplete: "off",
                            inputRef: h,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, u.jsx)(nx, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: o,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, u.jsx)(nu.A, {
                label: X.intl.string(X.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tq(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, u.jsx)("div", {
                className: Y.QX,
                children: (0, u.jsx)(H.$, {
                    text: X.intl.string(X.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, u.jsx)("div", {
                className: nr.o3,
                children: (0, u.jsx)(em.Q, {
                    text: X.intl.string(X.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function nE(e) {
    let { invite: t, onOpenApp: n } = e,
        i = null != t.guild ? (0, ef.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, u.jsxs)(u.Fragment, {
              children: [
                  null != i ? (0, u.jsx)(no, { guild: i }) : null,
                  (0, u.jsxs)("div", {
                      className: nr.zY,
                      children: [
                          (0, u.jsxs)("div", {
                              className: nr.rL,
                              children: [
                                  (0, u.jsx)(tQ, { guild: i }),
                                  (0, u.jsx)(eP.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: nr.Rw,
                                      children: X.intl.format(X.t["33M5bg"], { guildName: i?.name ?? "" }),
                                  }),
                                  (0, u.jsx)(M.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: nr.Ap,
                                      children: X.intl.string(X.t["7N4JkE"]),
                                  }),
                                  (0, u.jsx)("div", {
                                      className: nr.S7,
                                      children: (0, u.jsx)(H.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: X.intl.string(X.t["n+VrqG"]),
                                          onClick: n,
                                      }),
                                  }),
                              ],
                          }),
                          (0, u.jsx)("div", {
                              className: nr.NG,
                              children: (0, u.jsx)("img", {
                                  alt: "",
                                  src: "https://cdn.discordapp.com/assets/content/55b848b6c57bf51009a1bdaa4465a9e8d79026b8b92889b0ea90a00475f19257.webp",
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function n_(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = d.useState(0),
        [r, a] = d.useState(""),
        [o, c] = d.useState(null),
        [h, m] = d.useState(""),
        [g, f] = d.useState(""),
        [x, E] = d.useState({}),
        _ = (0, p.bG)([tZ.A], () => tZ.A.getAuthenticationConsentRequired()),
        [j, v] = tY(_),
        [N, C] = d.useState(!1),
        I = d.useRef(null);
    function S(e) {
        (s(e), I.current?.scrollTo(0, 0));
    }
    function T(e) {
        (E(e), (null != e.username || null != e.date_of_birth) && S(0));
    }
    function y(e) {
        E((t) => {
            if (null == t[e]) return t;
            let n = { ...t };
            return (delete n[e], n);
        });
    }
    function b(e) {
        (a(e), y("username"));
    }
    function R(e) {
        let t = e === o || (null != e && null != o && e.isSame(o, "day"));
        (c(e), t || y("date_of_birth"));
    }
    function L(e) {
        (m(e), y("email"));
    }
    function k(e) {
        (f(e), y("password"));
    }
    return (
        d.useEffect(() => {
            A.A.getLocationMetadata();
        }, []),
        (0, u.jsx)(tV.N, {
            theme: O.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, u.jsx)("div", {
                    ref: I,
                    "data-theme": O.NJ8.DARK,
                    className: V()(nr.MY, e),
                    children: N
                        ? (0, u.jsx)(nE, { invite: t, onOpenApp: i })
                        : (0, u.jsxs)(u.Fragment, {
                              children: [
                                  (0, u.jsx)(nc, { invite: t, kicker: 1 === l ? X.intl.string(X.t.dzGILG) : void 0 }),
                                  (0, u.jsx)("div", {
                                      className: nr.rf,
                                      children:
                                          0 === l
                                              ? (0, u.jsx)(nA, {
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    apiErrors: x,
                                                    onUsernameChange: b,
                                                    onDateOfBirthChange: R,
                                                    onNext: () => S(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, u.jsx)(na, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    email: h,
                                                    password: g,
                                                    consent: j,
                                                    consentRequired: _,
                                                    apiErrors: x,
                                                    onEmailChange: L,
                                                    onPasswordChange: k,
                                                    onConsentChange: v,
                                                    onApiErrors: T,
                                                    onOpenApp: n,
                                                    onRegister: () => C(!0),
                                                }),
                                  }),
                              ],
                          }),
                }),
        })
    );
}
var nj = n(127982);
function nv(e, t, n, i) {
    (e?.preventDefault(),
        R.default.track(
            O.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, eJ.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? to.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != e6.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        ));
    let l = null != n && n.state !== O.elq.EXPIRED && n.state !== O.elq.BANNED ? t : void 0,
        s = e$.default.getFingerprint(),
        r = null != s ? s : e$.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    _.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nN() {
    return (0, u.jsx)("div", { className: nj.$k, children: (0, u.jsx)(ew.y, {}) });
}
function nC(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case O.elq.RESOLVED:
        case O.elq.ACCEPTED:
        case O.elq.APP_NOT_OPENED:
        case O.elq.APP_OPENED:
        case O.elq.ACCEPTING:
        case O.elq.APP_OPENING:
            return 1;
        case O.elq.EXPIRED:
        case O.elq.BANNED:
        case O.elq.ERROR:
            return 2;
        case O.elq.RESOLVING:
            return 0;
        default:
            (0, tn.xb)(n);
    }
}
function nI(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === O.elq.BANNED
        ? (0, u.jsx)(e5, { text: X.intl.string(X.t["5AkWAd"]), buttonCta: X.intl.string(X.t["8osdkn"]), onClick: n })
        : (0, u.jsx)(e5, { text: X.intl.string(X.t["usP+Mb"]), buttonCta: X.intl.string(X.t["8osdkn"]), onClick: n });
}
function nS(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = nj.qF } = e,
        { ref: r, height: a } = (0, e9.Ay)(),
        o = (0, e1.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: e0.config.stiff });
    return (0, u.jsxs)(e0.animated.div, {
        className: s,
        style: o,
        children: [
            (0, u.jsx)(e0.animated.div, {
                className: nj.NS,
                style: o,
                children: (0, u.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function nT(e) {
    let { invite: t } = e;
    if (null == t || !tp(t)) return null;
    let n = nC(t);
    return (0, u.jsx)(nS, {
        startAnimHeightPx: 0,
        sectionClassName: nj.ui,
        children: 1 === n ? (0, u.jsx)(tw, { invite: t }) : null,
    });
}
let ny = { 1: nj._r, 2: nj.Gm, 0: nj.Kt };
function nb(e) {
    let t,
        { invite: n } = e,
        i = nC(n),
        l = d.useRef(!1);
    if (
        (d.useEffect(() => {
            l.current ||
                (null != n &&
                    1 === i &&
                    ((l.current = !0),
                    R.default.track(O.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, u.jsx)(nN, {});
    else
        switch (i) {
            case 1:
                t = (0, u.jsx)(tF, { ...e, invite: n });
                break;
            case 2:
                t = (0, u.jsx)(nI, { ...e, invite: n });
                break;
            default:
                t = (0, u.jsx)(nN, {});
        }
    return (0, u.jsx)(nS, { startAnimHeightPx: 200, sectionClassName: ny[i], inviteCardClassName: nj.qF, children: t });
}
function nR(e) {
    let { invite: t } = e,
        [n, i] = d.useState(null);
    return (d.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nC(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !e$.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, u.jsx)(n_, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, u.jsx)(nL, { ...e });
}
function nL(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {};
    if (i?.splash != null) {
        let e = tt.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    }
    return (0, u.jsxs)(P.Ay, {
        theme: O.NJ8.DARK,
        className: nj.G3,
        style: l,
        contentClassName: nj.__,
        children: [(0, u.jsx)(nb, { ...e, onAcceptInvite: n }), (0, u.jsx)(nT, { ...e })],
    });
}
var nO = n(723702);
function nk(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 192 } = e;
    return (0, u.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nD = n(474545),
    nw = n(604880);
function nP(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, u.jsxs)("div", {
              className: nD.MY,
              children: [
                  (0, u.jsx)("div", { className: nD.r$, children: (0, u.jsx)("img", { src: nw, alt: "" }) }),
                  (0, u.jsxs)("div", {
                      className: nD.Qs,
                      children: [
                          (0, u.jsx)(nk, { alt: "" }),
                          (0, u.jsx)(eP.D, {
                              variant: "heading-lg/semibold",
                              className: nD.ky,
                              children: X.intl.string(X.t.RtCSr1),
                          }),
                          (0, u.jsx)(M.E, {
                              variant: "text-md/normal",
                              className: nD.G3,
                              children: X.intl.string(X.t["S+YjYJ"]),
                          }),
                          (0, u.jsx)(H.$, {
                              variant: "primary",
                              text: X.intl.string(X.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  (R.default.track(O.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, G.pX)(O.BVt.LOGIN));
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, u.jsxs)("div", {
              className: nD.MY,
              children: [
                  (0, u.jsx)("div", { className: nD.r$, children: (0, u.jsx)("img", { src: nw, alt: "" }) }),
                  (0, u.jsxs)("div", {
                      className: nD.Qs,
                      children: [
                          (0, u.jsx)(nk, { alt: "" }),
                          (0, u.jsx)(eP.D, {
                              variant: "heading-lg/semibold",
                              className: nD.ky,
                              children: X.intl.string(X.t["9h/0Rl"]),
                          }),
                          (0, u.jsx)(M.E, {
                              variant: "text-md/normal",
                              className: nD.G3,
                              children: X.intl.string(X.t.Wgm7Om),
                          }),
                          (0, u.jsx)(H.$, {
                              variant: "primary",
                              text: X.intl.string(X.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  ((e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = e$.default.getFingerprint(),
                                              n = (0, eq.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eq.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eq.X7)(e)),
                                      R.default.track(O.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: g.Fr ? "mobile" : "tablet",
                                          platform: R.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          R.default.track(O.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eY.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eZ.A.launch(e, (e) => {
                                          e || (0, G.bG)({ pathname: O.BVt.LOGIN });
                                      }));
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nG = n(613057);
function nU(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, u.jsx)(P.Ay, {
        children: (0, u.jsxs)(eD.B, {
            gap: 24,
            children: [
                (0, u.jsxs)(eD.B, {
                    gap: 8,
                    children: [(0, u.jsx)(P.hE, { children: t }), (0, u.jsx)(P.tK, { children: n })],
                }),
                (0, u.jsx)(H.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var nB = n(463347),
    nF = n(189213),
    nV = n(192308),
    nM = n(347704),
    nH = n(803306),
    nW = n(17372),
    nK = n(369053),
    nQ = n(975571),
    nz = n(928658);
async function nX(e, t) {
    try {
        await (0, nK.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: X.intl.string(X.t.Z2hIUf) } };
        throw e;
    }
}
function nq(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return nX(e, s);
        }
        async function a(t) {
            return await (0, nK.G_)(e, s, t);
        }
        function o(n) {
            ((i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0));
            let l = n?.token;
            switch (e) {
                case nW.tY.MESSAGE:
                    (0, nz.bM)(l, t);
                    break;
                case nW.tY.USER:
                    (0, nz.nQ)(l, t);
                    break;
                case nW.tY.GUILD:
                    (0, nz.V3)(l, t);
                    break;
                case nW.tY.MEDIA_TAKEDOWN:
                    (0, nz._Y)(l, t);
            }
        }
        ((i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nV.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("932606"), n.e("919840")]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, u.jsx)(e, {
                            ...t,
                            onFormSubmit: a,
                            onResend: r,
                            onSuccess: o,
                            headerText: X.intl.string(X.t.H3Q7U8),
                            confirmButtonText: X.intl.string(X.t["13ofGu"]),
                            impression: { impressionName: m.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    }
    return function () {
        function t(t) {
            return nX(e, t);
        }
        ((0, nV.closeAllModals)(),
            (0, nV.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("429232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, u.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: X.intl.string(X.t.ZLRYGU),
                            confirmButtonText: X.intl.string(X.t.PDTjLN),
                            subtitle: e === nW.tY.MEDIA_TAKEDOWN ? X.intl.string(X.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    };
}
var nY = n(939249),
    n$ = n(921853),
    nZ = n(43008);
let nJ = { [nW.tY.MESSAGE]: X.t.fuqnBC, [nW.tY.USER]: X.t.F4jrRW, [nW.tY.GUILD]: X.t.gH3aMs },
    n0 = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = d.useCallback(() => {
                nq(n, i)();
            }, [n, i]);
        return (0, u.jsxs)(nY.D, {
            className: nZ.b0,
            onClick: l,
            children: [
                (0, u.jsx)(M.E, { variant: "text-md/medium", children: t }),
                (0, u.jsx)(n$.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    n1 = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, u.jsx)(eD.B, {
            gap: 16,
            children: (0, u.jsx)("div", {
                className: nZ.kL,
                children: t.map((e) =>
                    e === nW.tY.MEDIA_TAKEDOWN || null == nJ[e]
                        ? null
                        : (0, u.jsx)(n0, { title: X.intl.string(nJ[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var n2 = n(881636);
let n3 = {
    [nW.sl.TIDA]: { selectionLabel: X.t.jMSjZL, selectionDescription: X.t.qEaUPS, helpBody: X.t.R2Q57u },
    [nW.sl.UK_STOPNCII]: { selectionLabel: X.t.jMSjZL, selectionDescription: X.t.J0tNny, helpBody: X.t.R2Q57u },
};
function n4(e) {
    return (0, nW.c7)(e) ? n3[e] : n3[nW.sl.TIDA];
}
var n8 = n(138658);
let n5 = (e) => {
    let { mediaTakedownRegulation: t } = e,
        { goToStep: n } = (0, nM.n)(),
        { selectionLabel: i, selectionDescription: l } = n4(t),
        s = d.useCallback(() => {
            n(ie.DSA);
        }, [n]),
        r = d.useCallback(() => {
            n(ie.TIDA);
        }, [n]);
    return (0, u.jsxs)(eD.B, {
        gap: 8,
        children: [
            (0, u.jsx)(M.E, { variant: "text-md/normal", children: X.intl.string(X.t.bd1h5T) }),
            (0, u.jsxs)("div", {
                className: n8.k,
                children: [
                    (0, u.jsxs)(nY.D, {
                        className: n8.b,
                        onClick: s,
                        children: [
                            (0, u.jsxs)("div", {
                                children: [
                                    (0, u.jsx)(M.E, {
                                        variant: "text-md/medium",
                                        children: X.intl.string(X.t["AszWL/"]),
                                    }),
                                    (0, u.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: X.intl.string(X.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, u.jsx)(n2.u, { size: "sm" }),
                        ],
                    }),
                    (0, u.jsxs)(nY.D, {
                        className: n8.b,
                        onClick: r,
                        children: [
                            (0, u.jsxs)("div", {
                                children: [
                                    (0, u.jsx)(M.E, { variant: "text-md/medium", children: X.intl.string(i) }),
                                    (0, u.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: X.intl.string(l),
                                    }),
                                ],
                            }),
                            (0, u.jsx)(n2.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var n7 = n(108124);
let n9 = (e) => {
    let { helpBody: t } = e;
    return (0, u.jsxs)(eD.B, {
        gap: 24,
        children: [
            (0, u.jsx)(M.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: X.intl.string(X.t["3zG2Y9"]),
            }),
            (0, u.jsxs)(eD.B, {
                gap: 16,
                children: [
                    (0, u.jsxs)(eD.B, {
                        gap: 8,
                        children: [
                            (0, u.jsx)(M.E, { variant: "text-md/semibold", children: X.intl.string(X.t.CfBo0z) }),
                            (0, u.jsxs)("ul", {
                                className: n7.T,
                                children: [
                                    (0, u.jsx)("li", {
                                        children: (0, u.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: X.intl.string(X.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, u.jsx)("li", {
                                        children: (0, u.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: X.intl.string(X.t.dFaQGn),
                                        }),
                                    }),
                                    (0, u.jsx)("li", {
                                        children: (0, u.jsx)(M.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: X.intl.string(X.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, u.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: X.intl.string(X.t.o5azXJ),
                    }),
                    (0, u.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: X.intl.format(X.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, u.jsxs)(eD.B, {
                gap: 8,
                children: [
                    (0, u.jsx)(M.E, { variant: "text-md/semibold", children: X.intl.string(X.t.FJh2zi) }),
                    (0, u.jsx)(M.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: X.intl.format(t, {
                            supportOrgURL: "https://stopncii.org/partners/global-network-of-partners/",
                            wellbeingURL: "https://discord.com/safety-wellbeing",
                            helpCenterURL: "https://support.discord.com/hc/articles/38675715591831",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var n6 = n(379492);
p.Ay.initialize();
var ie = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let it = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = d.useState(!0),
            [s, r] = d.useState([]),
            [a, o] = d.useState(null),
            [c, h] = d.useState(null),
            m = (0, p.bG)([e$.default], () => e$.default.isAuthenticated()),
            g = (0, p.bG)([eT.A], () => eT.A.hasLoadedExperiments),
            f = d.useCallback(() => {
                (0, nK.OY)()
                    .then((e) => {
                        let { capabilities: t, media_takedown_regulation: n } = e;
                        (l(!1), r(t), o(n));
                    })
                    .catch(() => {
                        (l(!1), r([]), o(null));
                    });
            }, []);
        (d.useEffect(() => {
            m
                ? (l(!0),
                  nH
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => f())
                      .catch(() => l(!1)))
                : f();
        }, [m, f]),
            d.useEffect(() => {
                !(async function () {
                    g || (await A.A.getLocationMetadata(), A.A.getExperiments());
                })();
            }, [g]));
        let { helpBody: x } = n4(a),
            E = s.filter((e) => e !== nW.tY.MEDIA_TAKEDOWN),
            _ = s.includes(nW.tY.MEDIA_TAKEDOWN),
            j = E.length > 0,
            v = j && _,
            N = i || !g;
        d.useEffect(() => {
            N || j || _ || n();
        }, [N, j, _, n]);
        let C = d.useCallback(() => {
                (0, nV.openModalLazy)(() => Promise.resolve((e) => (0, u.jsx)(it, { ...e })), { dismissable: !1 });
            }, []),
            I = d.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? h("selection") : h(e);
            }, []),
            S = d.useMemo(() => nq(nW.tY.MEDIA_TAKEDOWN, C), [C]),
            T = c ?? (v ? "selection" : j ? "dsa" : "tida");
        if (N || (!j && !_))
            return (0, u.jsx)(nF.a, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, u.jsx)(eD.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, u.jsx)(ew.y, {}),
                }),
            });
        if (!v) {
            if (j)
                return (0, u.jsx)(nF.a, {
                    title: X.intl.string(X.t.Z11w18),
                    subtitle: X.intl.format(X.t["532l+q"], {
                        supportURL: nQ.A.getArticleURL(O.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, u.jsx)(n1, { dsaCapabilities: E, onReopen: C }),
                });
            if (_)
                return (0, u.jsx)(nF.a, {
                    title: X.intl.string(X.t.YignUm),
                    actions: [{ text: X.intl.string(X.t.D5Czbu), variant: "primary", onClick: S }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, u.jsx)(n9, { helpBody: x }),
                });
        }
        let y = [
            {
                stepKey: "selection",
                modalProps: { title: X.intl.string(X.t.Z11w18) },
                body: (0, u.jsx)(n5, { mediaTakedownRegulation: a }),
            },
            {
                stepKey: "dsa",
                modalProps: {
                    title: X.intl.string(X.t.Z11w18),
                    subtitle: X.intl.format(X.t["532l+q"], {
                        supportURL: nQ.A.getArticleURL(O.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, u.jsx)(n1, { dsaCapabilities: E, onReopen: C }),
            },
            {
                stepKey: "tida",
                modalProps: { title: X.intl.string(X.t.YignUm) },
                body: (0, u.jsx)(n9, { helpBody: x }),
                nextButtonProps: { text: X.intl.string(X.t.D5Czbu) },
                onNext: () => (S(), !1),
            },
        ];
        return (0, u.jsx)("div", {
            className: { selection: n6.a, dsa: n6.q, tida: void 0 }[T],
            children: (0, u.jsx)(nM.t, {
                steps: y,
                currentStepKey: T,
                onStepChange: I,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    ii = () => (
        d.useEffect(() => {
            (0, nV.openModalLazy)(() => Promise.resolve((e) => (0, u.jsx)(it, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var il = n(30793),
    is = n(970928),
    ir = n(612181),
    ia = n(179689);
let io = {
    dump(e) {
        let t;
        (null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: ez().name, version: ez().version },
                os: { name: ez().os.family, version: ez().os.version },
                memory: t,
            }));
    },
    getTimeSinceNavigationStart: () => Date.now() - ia.fL,
};
var ic = n(649852),
    iu = n.n(ic),
    id = n(615300),
    ih = n(319060),
    im = n(844222),
    ig = n(240248),
    ip = n(706192);
let ix = (0, ig.xI)(ih.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    iA = { friction: 10, tension: 130 },
    iE = function (e) {
        return class extends d.Component {
            timeout;
            anim = new id.A.Value(0);
            state = { shouldAnimate: !g.Fr };
            componentDidMount() {
                g.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > ix;
                (!this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e }));
            };
            handleResizeDebounced = iu()(this.handleResize, 60);
            componentWillUnmount() {
                (clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced));
            }
            componentWillAppear(e) {
                this.state.shouldAnimate ? this.animateTo(1, e) : e();
            }
            componentWillEnter(e) {
                this.state.shouldAnimate
                    ? (clearTimeout(this.timeout), (this.timeout = setTimeout(() => this.animateTo(1, e), 40)))
                    : e();
            }
            componentWillLeave(e) {
                this.state.shouldAnimate ? this.animateTo(0, e) : e();
            }
            animateTo(e, t) {
                id.A.spring(this.anim, { toValue: e, ...iA }).start(t);
            }
            getAnimatedStyle(e) {
                return this.state.shouldAnimate
                    ? {
                          opacity: this.anim,
                          transform: e
                              ? void 0
                              : [
                                    { scale: this.anim.interpolate({ inputRange: [0, 1], outputRange: [1.05, 1] }) },
                                    {
                                        translateY: this.anim.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ["-70px", "0px"],
                                        }),
                                    },
                                    { translateZ: 0 },
                                ],
                      }
                    : null;
            }
            render() {
                return (0, u.jsx)("div", {
                    className: ip.i,
                    children: (0, u.jsx)(im.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, u.jsx)(id.A.div, {
                                className: ip.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, u.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var i_ = n(603647),
    ij = n(970672),
    iv = n(129014),
    iN = n(642277);
let iC = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = d.useState(0);
    (d.useEffect(() => {
        (iv.default.once("connected", () => {
            s(1);
        }),
            iv.default.once("disconnected", () => {
                (0, G.pX)((0, iN.W)());
            }),
            iv.default.connect());
    }, []),
        d.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, G.pX)((0, iN.W)()), 3e3);
            return () => clearTimeout(e);
        }, [l]));
    let r = d.useCallback(
        async (e, t) => {
            try {
                (s(2), await i(e, t), s(3));
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [i],
    );
    if ((0, G.MX)()) return null;
    switch (l) {
        case 1:
            return (0, u.jsxs)(P.Ay, {
                children: [
                    (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.qllnGm) }),
                    (0, u.jsx)(P.tK, { children: X.intl.string(X.t.SXCxye) }),
                    (0, u.jsx)("div", {
                        className: Y.eT,
                        children: (0, u.jsx)(H.$, {
                            text: X.intl.string(X.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, u.jsx)("div", {
                        className: V()(Y.Ot, Y.F1),
                        children: (0, u.jsx)(em.Q, {
                            text: X.intl.string(X.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, G.pX)((0, iN.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, u.jsxs)(P.Ay, {
                children: [(0, u.jsx)(P.hE, { children: X.intl.string(X.t["Z+hCVU"]) }), (0, u.jsx)(P.CK, {})],
            });
        case 3:
            return (0, u.jsxs)(P.Ay, {
                children: [
                    (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.csrAMJ) }),
                    (0, u.jsx)(P.tK, { children: X.intl.string(X.t.ghBJz9) }),
                ],
            });
    }
};
var iI = n(723923);
p.Ay.initialize();
class iS extends d.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, ep.A)(this.props.location),
            t = (0, h.parse)(this.props.location.search);
        (j.Bo.post({
            url: O.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new tC.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, U.d0)("disable_email_notifications"));
    }
    renderBusy() {
        return (0, u.jsx)(P.Ay, { children: (0, u.jsx)(P.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = X.intl.formatToPlainString(X.t.YDAohB, { category: t });
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.f6rdLg) }),
                (0, u.jsx)(P.tK, { children: l }),
                (0, u.jsx)("div", {
                    className: Y.QX,
                    children: (0, u.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, u.jsx)("div", {
                    className: Y.Ot,
                    children: (0, u.jsx)(em.Q, {
                        text: X.intl.string(X.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, C.settingsPathToRoute)(S.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = iI.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: ti._3.DEPRECATED_SIZE_100,
                    className: Y.SX,
                }),
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["6U6OMQ"]) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t["yaDJ4/"]) }),
                (0, u.jsx)("div", {
                    className: Y.eT,
                    children: (0, u.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P._V, { src: n(37772), className: Y.SX }),
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.ox9hIS) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t["/dcuR5"]) }),
                (0, u.jsx)("div", {
                    className: Y.eT,
                    children: (0, u.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let iT = p.Ay.connectStores([eg.A], () => ({ defaultRoute: eg.A.defaultRoute }))(iS);
var iy = n(110782),
    ib = n(10088),
    iR = n(871123),
    iL = n(189081),
    iO = n(67480),
    ik = n(45938),
    iD = n(587895),
    iw = n(242874),
    iP = n(165191),
    iG = n(287809),
    iU = n(97352),
    iB = n(615396),
    iF = n(202541),
    iV = n(716592);
function iM() {
    return (0, u.jsxs)(d.Fragment, {
        children: [
            (0, u.jsx)(P.eu, { src: null, size: ti._3.DEPRECATED_SIZE_100, className: Y.SX }),
            (0, u.jsx)(P.tK, { children: X.intl.string(X.t.lTGZAl) }),
            (0, u.jsx)(P.hE, { className: V()(Y.Ot, eC.tR), children: X.intl.string(X.t.ZTNur7) }),
        ],
    });
}
let iH = p.Ay.connectStores([iO.A, iD.A, iU.A, iG.default], (e) => {
    let { giftCode: t } = e,
        n = iO.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iB.c9)(i) : null,
        application: null != n ? iD.A.getApplication(n.applicationId) : null,
        gifter: iG.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? X.intl.string(X.t.lTGZAl) : X.intl.formatToPlainString(X.t.TjWdPc, { username: i.username });
    if (null == l) return (0, u.jsx)(iM, {});
    let o = l.name;
    return (
        null != r &&
            (o = X.intl.formatToPlainString(r.interval === iF.WT.MONTH ? X.t.CTpcCZ : X.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, u.jsxs)(d.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, u.jsx)(iP.A, { defaultAnimationState: iw.oA.LOOP, giftStyle: n.giftStyle, className: iV.e })
                    : (0, u.jsx)(P.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: ti._3.DEPRECATED_SIZE_100,
                          className: Y.SX,
                      }),
                null != t
                    ? (0, u.jsxs)(d.Fragment, {
                          children: [
                              (0, u.jsx)(P.tK, { children: X.intl.string(X.t.mDFGFj) }),
                              (0, u.jsx)(P.hE, { children: t }),
                          ],
                      })
                    : (0, u.jsxs)(d.Fragment, {
                          children: [
                              (0, u.jsx)(P.tK, { children: a }),
                              (0, u.jsxs)(P.hE, {
                                  className: V()(Y.Ot, eC.tR),
                                  children: [
                                      l.productLine !== O.EZt.COLLECTIBLES &&
                                          (0, u.jsx)(ts.A, {
                                              size: ts.M.MEDIUM,
                                              className: iV.I,
                                              game: s,
                                              skuId: l.id,
                                          }),
                                      o,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
var iW = n(935399),
    iK = n(475743),
    iQ = n(707554),
    iz = n(68281);
function iX(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === O.aUe.ACCOUNT_DISABLED,
        a = r ? X.intl.string(X.t["j3rC+U"]) : X.intl.string(X.t.ZFWofo),
        o = r ? X.intl.string(X.t["6eNTWe"]) : X.intl.string(X.t["pCBti+"]);
    return (0, u.jsx)(P.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, u.jsxs)(iQ.F, {
            component: (0, u.jsx)(P.hE, { className: Y.QB, children: a }),
            children: [
                (0, u.jsx)(P.tK, { className: Y.SX, children: o }),
                (0, u.jsxs)(P.eB, {
                    children: [
                        (0, u.jsx)(H.$, { text: X.intl.string(X.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, u.jsx)("div", {
                            className: V()(Y.Ot, iz.Qt),
                            children: X.intl.format(X.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iq = n(504394),
    iY = n(275538),
    i$ = n(228916);
function iZ(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, u.jsx)(P.Ay, {
        ...i,
        className: V()(n, i$.kL),
        contentClassName: i$.Qs,
        children: l.map((e, t) =>
            (0, u.jsx)("div", { className: i$.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var iJ = n(895600),
    i0 = n(506774),
    i1 = n(104798),
    i2 = n(991512);
let i3 = "mweb_handoff_nonce",
    i4 = "mweb_handoff_nonce_expiration",
    i8 = +tz.A.Millis.MINUTE,
    i5 = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    i7 = new Set(["deep_link_failed"]);
function i9() {
    (i0.w.remove(i3), i0.w.remove(i4));
}
let i6 = () => {
    let e = (0, p.bG)([e$.default], () => e$.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, h.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        l = i ?? (null !== e ? e : void 0);
    d.useEffect(() => {
        null !== i && e !== i && x.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
    }, [i, e]);
    let [s, r] = d.useState(null),
        a = d.useCallback(
            (e) => {
                (r(e),
                    R.default.track(
                        O.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, eY.v)(l) },
                        { fingerprint: l },
                    ));
            },
            [r, l],
        ),
        o = i0.w.get(i3);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == o && null === s && a("nonce_missing"),
        d.useEffect(() => {
            if (null != o) {
                let e = i0.w.get(i4);
                (null == e || Date.now() >= e) && (a("nonce_expired"), i9());
            }
        }, [o, a]),
        d.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != o &&
                null == s &&
                j.Bo.post({ url: O.Rsh.HANDOFF_EXCHANGE, body: { key: o, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => A.A.loginToken(e.body.token, !1))
                    .then(() => {
                        R.default.track(O.HAw.LOGIN_SUCCESSFUL, {
                            source: O.mdB.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, eY.v)(l),
                        });
                        let e = new URL(window.location.href),
                            t = new URLSearchParams(e.search);
                        (t.delete("handoff_token"),
                            t.delete("fingerprint"),
                            (e.search = t.toString()),
                            window.history.pushState(null, "", e));
                    })
                    .catch(() => {
                        a("handoff_exchange");
                    })
                    .finally(() => {
                        i9();
                    });
        }, [n, o, s, l, a]),
        null == l)
    )
        return null;
    let c =
        null == s
            ? (0, u.jsxs)(u.Fragment, {
                  children: [X.intl.string(X.t.uJ1JsY), (0, u.jsx)("br", {}), X.intl.string(X.t.GHVWAs)],
              })
            : i7.has(s)
              ? X.intl.string(X.t.EPt55r)
              : i5.has(s)
                ? X.intl.string(X.t.g87kTp)
                : void 0;
    return null != s && i7.has(s)
        ? (0, u.jsx)("div", {
              className: i2.Un,
              children: (0, u.jsx)(M.E, {
                  color: "interactive-text-default",
                  variant: "text-sm/semibold",
                  children: c,
              }),
          })
        : (0, u.jsxs)("div", {
              className: i2.kL,
              children: [
                  (0, u.jsx)(M.E, { variant: "text-sm/semibold", children: c }),
                  (0, u.jsx)(H.$, {
                      variant: "overlay-primary",
                      text: X.intl.string(X.t.NcC759),
                      onClick: function () {
                          let e = i1.A.generateNonce();
                          (i0.w.set(i3, e), i0.w.set(i4, Date.now() + i8));
                          let t = new URL(O.J$u),
                              n = new URLSearchParams(window.location.search);
                          (n.delete("fingerprint"), n.delete("handoff_token"));
                          let i = new URLSearchParams();
                          (i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                              i.set("key", e),
                              i.set("fingerprint", l),
                              (t.search = i.toString()),
                              R.default.track(
                                  O.HAw.DEEP_LINK_CLICKED,
                                  { fingerprint: (0, eY.v)(l), source: "mobile_web_handoff", destination: O.J$u },
                                  { fingerprint: l, flush: !0 },
                              ),
                              (window.location.href = t.toString()));
                      },
                  }),
              ],
          });
};
var le = n(274303),
    lt = n(139286),
    ln = n(970573),
    li = n(491919);
function ll(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, lt.A)({ type: m.ImpressionTypes.MODAL, name: m.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, u.jsxs)(P.Ay, {
            className: li.ci,
            transparent: n,
            children: [
                !n && (0, u.jsx)(P.hE, { children: X.intl.string(X.t.bVbB63) }),
                (0, u.jsx)(M.E, {
                    className: li.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: X.intl.string(X.t["0M5fN7"]),
                }),
                (0, u.jsx)(ln.A, {
                    actionText: X.intl.string(X.t["DSN+hw"]),
                    onAction: (e) => {
                        e === ln.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, u.jsx)("div", {
                    className: li.o1,
                    children: (0, u.jsx)(em.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: X.intl.string(X.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
function ls(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: i,
        password: l,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: a,
        passwordRef: o,
    } = e;
    return (0, u.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, u.jsx)(iq.M, {}),
            (0, u.jsxs)(P.eB, {
                className: Y.QX,
                children: [
                    (0, u.jsx)(eN.A, {
                        className: Y.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: X.intl.string(X.t.tUjnxr),
                        onChange: s,
                        setRef: a,
                        autoCapitalize: "none",
                        autoComplete: "username webauthn",
                        autoCorrect: "off",
                        spellCheck: "false",
                        value: i,
                        autoFocus: !0,
                        required: !0,
                    }),
                    (0, u.jsx)(P.pd, {
                        className: Y.SX,
                        label: X.intl.string(X.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: o,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, u.jsx)("div", {
                        className: Y.QB,
                        children: (0, u.jsx)(H.$, {
                            text: X.intl.string(X.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, u.jsx)(em.Q, { text: X.intl.string(X.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, u.jsx)("div", {
                        className: Y.a5,
                        children: (0, u.jsx)(em.Q, {
                            text: X.intl.string(X.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var lr = n(401755);
function la(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function lo(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            isEmbedded: r = !1,
            disableAutofocusOnDefaultForm: a,
            login: o,
            password: c,
            errors: m,
            loginSource: f,
            dismissedChooseAccount: x,
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: E,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: v,
            handleForgotPassword: N,
            handleGotoRegister: C,
        } = e,
        I = (0, p.bG)([ev.A], () => ev.A.getCountryCode()),
        S = (0, p.bG)([e$.default], () => e$.default.getLoginStatus()),
        T = (0, p.bG)([le.A], () => le.A.getHasLoggedInAccounts()),
        y = d.useCallback(
            (e) => {
                R.default.track(O.HAw.LOGIN_SUCCESSFUL, {
                    source: O.mdB.QR_CODE,
                    login_source: f,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [f, l],
        ),
        { handoff_token: b } = (0, h.parse)(window.location.search),
        L = g.Fr && g.KY && null != b,
        k = null == m.email && null != m.password,
        D = d.useRef(null),
        w = d.useRef(null),
        G = (0, iK.Ay)(m);
    (d.useEffect(() => {
        function e(e) {
            return null != m[e];
        }
        null != G && G !== m && (e("password") ? w.current?.focus() : (e("email") || e("login")) && D.current?.focus());
    }, [m, D, w, G]),
        (t = r
            ? null
            : null != n
              ? (0, u.jsx)("div", { className: Y.S3, children: (0, u.jsx)(iq.A, { invite: n }) })
              : null != l
                ? (0, u.jsx)(iH, { giftCode: l })
                : (0, u.jsxs)("div", {
                      className: iz.wx,
                      children: [
                          (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["7fNJgA"]) }, "title"),
                          !1 === (0, nO.isAndroidWeb)()
                              ? (0, u.jsx)(P.tK, { children: X.intl.string(X.t.euS7r4) }, "subtitle")
                              : null,
                      ],
                  })));
    let U = (0, u.jsxs)("div", {
        className: iz.Eh,
        children: [
            T &&
                x &&
                (0, u.jsx)("div", {
                    className: iz.AX,
                    children: (0, u.jsx)(H.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: X.intl.string(X.t["1MrpWO"]),
                        icon: n$.n,
                    }),
                }),
            t,
            (0, u.jsx)(iQ.F, {
                children: (0, u.jsxs)(P.eB, {
                    className: Y.QX,
                    children: [
                        (0, u.jsx)(eN.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: Y.SX,
                            label: X.intl.string(X.t.tUjnxr),
                            error: la("login", m) ?? la("email", m),
                            onChange: _,
                            setRef: D,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: o,
                            autoFocus: !k && !L && !a,
                            required: !0,
                        }),
                        (0, u.jsx)(P.pd, {
                            label: X.intl.string(X.t["CIGa+7"]),
                            error: la("password", m),
                            onChange: j,
                            name: "password",
                            type: "password",
                            setRef: w,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: k && !L && !a,
                            value: c,
                            required: !0,
                        }),
                        (0, u.jsx)("div", {
                            className: V()(Y.SX, Y.a5),
                            children: (0, u.jsx)(em.Q, {
                                text: X.intl.string(X.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    (null != D.current && D.current.focus(), N());
                                },
                            }),
                        }),
                        (0, u.jsx)("div", {
                            className: Y.QB,
                            children: (0, u.jsx)(H.$, {
                                text: X.intl.string(X.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: S === O.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, u.jsxs)("div", {
                            className: Y.a5,
                            children: [
                                (0, u.jsx)("span", { className: iz.Qt, children: X.intl.string(X.t.tmE73r) }),
                                (0, u.jsx)("span", {
                                    className: iz.Z8,
                                    children: (0, u.jsx)(em.Q, {
                                        text: X.intl.string(X.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: C,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
    return null != n && n.state === O.elq.RESOLVING
        ? (0, u.jsx)(ls, {
              authBoxClassName: s,
              country: I,
              login: o,
              password: c,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: D,
              passwordRef: w,
          })
        : null != i
          ? i.state === lr.QB.RESOLVING
              ? (0, u.jsx)(ls, {
                    authBoxClassName: s,
                    country: I,
                    login: o,
                    password: c,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: D,
                    passwordRef: w,
                })
              : (0, u.jsx)(iZ, {
                    onSubmit: v,
                    tag: "form",
                    className: V()(s, iz.Sy),
                    children: () => [
                        (0, u.jsx)(iJ.A, { guildTemplate: i }, "template"),
                        (0, u.jsx)(d.Fragment, { children: U }, "form-wrapper"),
                    ],
                })
          : T && !x
            ? (0, u.jsx)(ll, { onDismiss: () => A(!0), embedded: r })
            : (0, u.jsxs)("div", {
                  children: [
                      (0, u.jsx)(P.Ay, {
                          onSubmit: v,
                          tag: "form",
                          className: V()(s, { [iz.M0]: L }),
                          transparent: r,
                          expanded: !0,
                          children: (0, u.jsxs)(eD.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  U,
                                  (0, u.jsx)(iY.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: y,
                                      conditionalMediationAbortController: E,
                                  }),
                              ],
                          }),
                      }),
                      L && (0, u.jsx)(i6, {}),
                  ],
              });
}
var lc = n(572469);
function lu(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, p.cf)(
            [e$.default],
            () => ({ ticket: e$.default.getMFATicket(), methods: e$.default.getMFAMethods() }),
            [],
        ),
        s = d.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    K._.dispatch(O.jej.WAVE_EMPHASIZE),
                    A.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, u.jsx)(P.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, u.jsx)(lc.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                x.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var ld = n(511815),
    lh = n(139033),
    lm = n(952116),
    lg = n(491509),
    lf = n(913612),
    lp = n(933924);
function lx(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: a,
        isEmbedded: o = !1,
        loginSource: c,
        disableAutofocusOnDefaultForm: m,
    } = e;
    (0, lf.K)();
    let g = (0, p.bG)([e$.default], () => e$.default.isAuthenticated()),
        f = (0, p.bG)([b.A], () => b.A.isHandoffAvailable()),
        x = (0, p.bG)([e$.default], () => e$.default.getLoginStatus()),
        E = i?.skuId ?? null,
        _ = (0, p.bG)([iO.A], () => (null != E ? iO.A.get(E) : null)),
        {
            checkingHandoff: j,
            redirecting: N,
            login: C,
            password: I,
            phoneVerifyError: S,
            dismissedChooseAccount: T,
            setDismissedChooseAccount: L,
            errors: k,
            conditionalMediationAbortController: D,
            loginSource: w,
            loginOrSSO: B,
            handleLogin: F,
            handleIPAuthorize: V,
            handlePasswordReset: H,
            handleForgotPassword: W,
            handleResendCode: Q,
            handleReset: z,
            handleCancelAccountDeletion: q,
            handleGotoRegister: $,
            loginReset: Z,
            onLoginChange: J,
            onPasswordChange: ee,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: i,
                    handoffAvailable: l,
                    authenticated: s,
                    transitionTo: r = G.pX,
                    redirectTo: a,
                    location: o,
                    loginSource: c,
                } = e,
                [m, g] = d.useState(() => l),
                [f, p] = d.useState(() => s),
                [x, E] = d.useState(""),
                [_, j] = d.useState(() => {
                    let e = null != o ? (0, h.parse)(o.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [v, N] = d.useState(""),
                [C, I] = d.useState(!1),
                [S, T] = d.useState(null),
                [b, R] = d.useState(!1),
                [L] = d.useState(() => new AbortController()),
                [k, D] = d.useState({});
            !m || l || s || g(!1);
            let w = d.useMemo(() => {
                    if (null != c) return c;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != a ? y(a) : null;
                }, [c, i, n, t, a]),
                P = null != i ? i.skuId : null,
                U = d.useCallback(
                    (e) => {
                        let t = null != e ? (0, h.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (ed(a)) return void eh(a);
                            r(a);
                        } else if (null == t.service) r(O.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + O.Rsh.SSO,
                                n = { ...t, token: e$.default.getToken() };
                            window.location = `${e}?${(0, h.stringify)(n)}`;
                        }
                    },
                    [a, r],
                ),
                B = d.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e &&
                            null != t &&
                            (p(!0),
                            n
                                ? A.A.verifySSOToken("login", null).then(
                                      (e) => {
                                          e ? U(t) : p(!1);
                                      },
                                      () => U(t),
                                  )
                                : U(t));
                    },
                    [U],
                ),
                F = d.useCallback(() => {
                    (L.abort("Login state reset"), D({}), A.A.loginReset());
                }, [L]),
                V = d.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e?.preventDefault(),
                            L.abort("Starting password login"),
                            K._.dispatch(O.jej.WAVE_EMPHASIZE),
                            D({}));
                        try {
                            await A.A.login({
                                login: x + _,
                                password: v,
                                undelete: n ?? C,
                                source: w,
                                giftCodeSKUId: P,
                                invite: t,
                            });
                        } catch (e) {
                            D((0, t3.p)(e));
                        }
                    },
                    [L, _, x, v, C, w, P, t],
                ),
                H = d.useCallback(
                    async (e) => {
                        let t = x + _;
                        D({});
                        try {
                            let { token: n } = await e_.A.verifyPhone(t, e, !1);
                            (await A.A.authorizeIPAddress(n), V());
                        } catch (e) {
                            null != e.body && null != e.body.message && T(e.body.message);
                        }
                    },
                    [x, _, V],
                ),
                W = d.useCallback(
                    async (e) => {
                        T(null);
                        try {
                            let { token: t } = await e_.A.verifyPhone(x + _, e, !1);
                            r(O.BVt.RESET, { search: (0, h.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && T(e.body.message);
                        }
                    },
                    [x, _, r],
                ),
                Q = d.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = x + _;
                        D({});
                        try {
                            K._.dispatch(O.jej.WAVE_EMPHASIZE);
                            let e = await A.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === ld.D.ONE_TIME_LOGIN
                                ? (0, nV.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: X.intl.string(X.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, u.jsx)(nF.a, {
                                          title: X.intl.string(X.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, u.jsx)(M.E, {
                                              variant: "text-md/normal",
                                              children: X.intl.string(X.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, lh.A)({
                                      title: X.intl.string(X.t.f5Pi7A),
                                      subtitle: X.intl.format(X.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            D((0, t3.p)(e));
                        }
                    },
                    [x, _],
                ),
                z = d.useCallback(() => {
                    e_.A.resendCode(x + _);
                }, [x, _]),
                q = d.useCallback((e) => {
                    (null != e && e.preventDefault(),
                        A.A.loginReset(),
                        N(""),
                        E(""),
                        j(""),
                        I(!1),
                        g(!1),
                        p(!1),
                        D({}));
                }, []),
                Y = d.useCallback(() => {
                    (I(!0), V(void 0, { undelete: !0 }));
                }, [V]),
                $ = d.useCallback(() => {
                    let e,
                        l = null != o ? (0, h.parse)(o.search) : {};
                    ("" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = O.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = O.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = O.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = O.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = O.BVt.REGISTER),
                        F(),
                        r(e, { search: (0, h.stringify)(l) }),
                        K._.dispatch(O.jej.WAVE_EMPHASIZE));
                }, [_, t, i, n, a, o, F, r]);
            return {
                checkingHandoff: m,
                redirecting: f,
                login: _,
                password: v,
                phoneVerifyError: S,
                dismissedChooseAccount: b,
                setDismissedChooseAccount: R,
                errors: k,
                conditionalMediationAbortController: L,
                loginSource: w,
                loginOrSSO: B,
                handleLogin: V,
                handleIPAuthorize: H,
                handlePasswordReset: W,
                handleForgotPassword: Q,
                handleResendCode: z,
                handleReset: q,
                handleCancelAccountDeletion: Y,
                handleGotoRegister: $,
                loginReset: F,
                onLoginChange: d.useCallback((e, t) => {
                    (j(e), E(t));
                }, []),
                onPasswordChange: d.useCallback((e) => {
                    N(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: f,
            authenticated: g,
            transitionTo: r,
            redirectTo: s,
            location: l,
            loginSource: c,
        });
    (0, iW.Ay)(() => {
        (f && !g ? (0, v.ST)() : g && B(g, l, !0),
            R.default.track(
                O.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: w,
                    authenticated: g,
                    ...(null != _ ? (0, lg.A)(_, !1, !1) : {}),
                    source: (0, G.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, lp.a)({ abortController: D, loginSource: w, giftCodeSKUId: E }),
            A.A.getLocationMetadata(),
            (0, U.d0)("login"));
    });
    let et = (0, iK.Ay)(g);
    if (
        (d.useEffect(() => {
            let e = j && (f || N);
            g && !1 === et && !e && (D.abort("Transitioning to authenticated state"), B(g, l));
        }, [g, f, et, N, j, D, B, l]),
        N || j)
    )
        return (0, u.jsx)(P.Ay, { transparent: o, children: (0, u.jsx)(ew.y, {}) });
    if (f)
        return (0, u.jsxs)(P.Ay, {
            className: a,
            transparent: o,
            children: [
                (0, u.jsx)(P.CK, {}),
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.S6RMNA) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t.YZiJbh) }),
            ],
        });
    switch (x) {
        case O.aUe.LOGGING_IN_MFA_SMS:
        case O.aUe.MFA_SMS_STEP:
        case O.aUe.LOGGING_IN_MFA:
        case O.aUe.MFA_STEP:
            return (0, u.jsx)(lu, { loginSource: w, giftCodeSKUId: E, isEmbedded: o });
        case O.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case O.aUe.ACCOUNT_DISABLED:
            return (0, u.jsx)(iX, {
                loginStatus: x,
                authBoxClassName: a,
                transparent: o,
                onSubmit: z,
                onCancelAccountDeletion: q,
            });
        case O.aUe.PHONE_IP_AUTHORIZATION:
            return (0, u.jsx)(P.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, u.jsx)(lm.A, {
                    title: X.intl.string(X.t.w55Oco),
                    subtitle: X.intl.format(X.t.CfRZBj, { onResendClick: Q }),
                    error: S,
                    onSubmit: V,
                    onCancel: Z,
                }),
            });
        case O.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, u.jsx)(P.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, u.jsx)(lm.A, {
                    title: X.intl.string(X.t["+xqy3d"]),
                    subtitle: X.intl.format(X.t.ef4uZ7, { onResendClick: Q }),
                    error: S,
                    onSubmit: H,
                    onCancel: Z,
                }),
            });
        case O.aUe.LOGGING_IN:
        case O.aUe.NONE:
        default:
            return (0, u.jsx)(lo, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: a,
                isEmbedded: o,
                disableAutofocusOnDefaultForm: m,
                login: C,
                password: I,
                errors: k,
                loginSource: w,
                dismissedChooseAccount: T,
                setDismissedChooseAccount: L,
                conditionalMediationAbortController: D,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: F,
                handleForgotPassword: W,
                handleGotoRegister: $,
            });
    }
}
var lA = n(664294);
let lE = null,
    l_ = "underage";
class lj extends p.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nO.isPlatformEmbedded && 1) {
            if (null != lE && lE + t6.bm > Date.now()) return !0;
        } else if (1) return null != lA.parse(document.cookie)[l_];
        return !1;
    }
}
let lv = new lj(x.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        ((lE = Date.now()), (document.cookie = `${l_}=1;path=/`));
    },
    LOGIN_SUCCESS: function () {
        ((lE = null), (document.cookie = `${l_}=1;path=/;max-age=0`));
    },
});
var lN = n(509434),
    lC = n(970116);
let lI = function () {
    return (0, u.jsx)(P.Ay, {
        children: (0, u.jsxs)("div", {
            className: lC.hQ,
            children: [
                (0, u.jsx)(P.hE, { className: lC.DD, children: X.intl.string(X.t.nCB6Ga) }),
                (0, u.jsx)(P.tK, {
                    className: lC.VA,
                    children: X.intl.format(X.t.KQgoxG, { underageMessage: X.intl.string(X.t.WqEH4D) }),
                }),
                (0, u.jsx)(H.$, {
                    icon: lN.I,
                    text: X.intl.string(X.t.hvVgAZ),
                    onClick: () => window.open(nQ.A.getArticleURL(O.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
(n(994555), n(827343), n(792251), n(19575), n(945041));
var lS = n(493527),
    lT = n(544395);
function ly(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: a,
            onRegister: o,
        } = e,
        [c, h] = d.useState(!1),
        [m, g] = d.useState(!1);
    async function f() {
        T.length > 0 && !lT.A.wasRegistrationSuggestionFetched(T) && (await lS.A.fetchSuggestionsRegistration(T));
    }
    function x(e) {
        R.default.track(O.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        R.default.track(O.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, p.bG)([tZ.A], () => tZ.A.getAuthenticationConsentRequired()),
        _ = (0, p.bG)([lT.A], () => lT.A.registrationUsernameSuggestion()),
        j = d.useRef(null),
        v = d.useRef(null),
        N = d.useRef(null),
        C = d.useRef(null),
        [I, S] = d.useState(t),
        [T, y] = d.useState(""),
        [b, L] = d.useState(""),
        [k, D] = d.useState(""),
        [w, G] = d.useState(null),
        [U, B] = tY(E),
        [F, W] = d.useState(!1),
        [Q, z] = t$(),
        [q, $] = d.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = q,
        [el, es] = d.useState(null),
        [er, ea] = d.useState(null),
        [eo, ec] = d.useState(null),
        [eu, ed] = d.useState(null),
        eh = null != E && U;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, iK.Ay)(t);
        d.useEffect(() => {
            null == r ||
                (r !== t &&
                    (null != t.email || null != t.phone
                        ? n.current?.focus()
                        : null != t.username
                          ? i.current?.focus()
                          : null != t.global_name
                            ? l.current?.focus()
                            : null != t.password && s.current?.focus()));
        }, [t, r, n, i, l, s]);
    })({ apiErrors: q, emailRef: j, usernameRef: v, globalNameRef: N, passwordRef: C });
    let eg = d.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = t2.mZ.getState(),
                r = (0, ig.uJ)(_) ? null : b === _;
            (K._.dispatch(O.jej.WAVE_EMPHASIZE), W(!0), $({}));
            try {
                (await ne({
                    email: I,
                    username: b,
                    globalName: T,
                    consent: U,
                    password: k,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: w,
                    promoEmailConsent: t.required ? t : null,
                }),
                    o?.());
            } catch (t) {
                if ((W(!1), !(t instanceof t1.LG))) return;
                let e = (0, t3.W)(t);
                ($(e), s?.(e), "number" == typeof e.retry_after && z(e.retry_after));
            }
        }, [i, l, n, I, s, o, _, b, T, k, w, U, z]),
        ef = d.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                (0 === I.length && (es(X.intl.string(X.t.EkokLy)), (t = !0)),
                    0 === b.length && (ea(X.intl.string(X.t.EkokLy)), (t = !0)),
                    0 === k.length && (ec(X.intl.string(X.t.EkokLy)), (t = !0)),
                    null == w && (ed(X.intl.string(X.t.EkokLy)), (t = !0)),
                    t || eg());
            },
            [I, b, k, w, E, eg],
        ),
        ep = null;
    return (
        "string" == typeof Z && (ep = (0, u.jsx)(P.ME, { className: V()(Y.QX, nn.gJ), children: Z })),
        (0, u.jsx)("form", {
            onSubmit: ef,
            children: (0, u.jsxs)(P.eB, {
                className: Y.QX,
                children: [
                    (0, u.jsx)(P.pd, {
                        autoFocus: !0,
                        className: Y.SX,
                        label: X.intl.string(X.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            (S(e), r?.(e), es(0 === e.length ? X.intl.string(X.t.EkokLy) : null));
                        },
                        error: el ?? tq(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => x("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, u.jsx)(P.pd, {
                        label: X.intl.string(X.t["9AjdkD"]),
                        className: Y.SX,
                        name: "global_name",
                        value: T,
                        onChange: y,
                        error: tq(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: N,
                        onFocus: () => {
                            (h(!0), x("global_name"));
                        },
                        onBlur: () => {
                            (h(!1), A("global_name"));
                        },
                    }),
                    (0, u.jsx)(np, {
                        show: c,
                        top: -12,
                        bottom: 20,
                        children: (0, u.jsx)(M.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: X.intl.string(X.t["330TCc"]),
                        }),
                    }),
                    (0, u.jsxs)("div", {
                        onBlur: () => g(!1),
                        onFocus: () => {
                            (g(!0), f());
                        },
                        tabIndex: -1,
                        children: [
                            (0, u.jsx)(P.pd, {
                                label: X.intl.string(X.t.TWzdWj),
                                className: Y.SX,
                                name: "username",
                                value: b,
                                onChange: (e) => {
                                    (L(e.toLocaleLowerCase()), ea(0 === e.length ? X.intl.string(X.t.EkokLy) : null));
                                },
                                error: er ?? tq(ee),
                                autoComplete: "off",
                                setRef: v,
                                required: !0,
                                onFocus: () => x("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, u.jsx)(nx, {
                                username: b,
                                suggestion: _,
                                globalName: T,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    (v.current?.focus(), null != _ && _.length > 0 && (L(_), ea(null)));
                                },
                            }),
                        ],
                    }),
                    (0, u.jsx)(P.pd, {
                        label: X.intl.string(X.t["CIGa+7"]),
                        name: "password",
                        value: k,
                        onChange: (e) => {
                            (D(e), ec(0 === e.length ? X.intl.string(X.t.EkokLy) : null));
                        },
                        error: eo ?? tq(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => x("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, u.jsx)(nu.A, {
                        label: X.intl.string(X.t.rhBeKe),
                        wrapperClassName: nn.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            (G(e), null != e && ed(null));
                        },
                        error: eu ?? tq(ei),
                        value: w,
                        required: !0,
                        onFocus: x,
                        onBlur: A,
                    }),
                    (0, u.jsx)(ns, {}),
                    (0, u.jsx)(ni, { consent: U, consentRequired: E, onConsentChange: B }),
                    (0, u.jsx)(t0.m, {
                        text: !U && E ? X.intl.string(X.t.AY4IVA) : null,
                        children: (0, u.jsx)("div", {
                            className: Y.QX,
                            children: (0, u.jsx)(H.$, {
                                text: X.intl.string(X.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: F,
                                disabled: !eh || Q,
                            }),
                        }),
                    }),
                    ep,
                    (0, u.jsx)("div", {
                        className: Y.QX,
                        children: (0, u.jsx)(em.Q, {
                            text: X.intl.string(X.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            onClick: a,
                        }),
                    }),
                ],
            }),
        })
    );
}
n(436317);
var lb = n(713654),
    lR = n(331722);
function lL(e) {
    let { channel: t } = e,
        n = (0, lb._U)(t.type);
    return (0, u.jsxs)("div", {
        className: lR.Nj,
        children: [
            null != n ? (0, u.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, u.jsx)(M.E, { className: lR.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lO(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, u.jsxs)("div", {
        className: lR.kL,
        children: [
            (0, u.jsx)(tL.Uq, { className: lR.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, u.jsx)(tL.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, u.jsx)(lL, { channel: t }) : null,
        ],
    });
}
var lk = n(231698);
function lD(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = ef.DY(t),
        { name: l, description: s } = i;
    return (0, u.jsxs)("div", {
        children: [
            (0, u.jsx)(eP.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lk.CT,
                children: X.intl.string(X.t.Eabu1z),
            }),
            (0, u.jsxs)("div", {
                className: lk.EB,
                children: [
                    (0, u.jsx)(tH.Ay, {
                        mask: tH.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, u.jsx)(tR.Ay, { guild: i, size: tR.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, u.jsxs)("div", {
                        className: lk.OA,
                        children: [
                            (0, u.jsx)(eP.D, { variant: "heading-sm/semibold", children: l }),
                            (0, u.jsxs)("div", {
                                className: lk.aH,
                                children: [
                                    (0, u.jsx)("div", { className: lk.Om }),
                                    null != n && n > 0
                                        ? (0, u.jsx)(M.E, {
                                              variant: "text-sm/normal",
                                              children: X.intl.format(X.t["LC+S+m"], { membersOnline: n }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != s &&
                "" !== s &&
                (0, u.jsx)(M.E, { color: "text-default", className: lk.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lw(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, u.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, u.jsx)(iq.M, {}),
            (0, u.jsxs)(P.eB, {
                className: nn.y0,
                children: [
                    (0, u.jsx)(t0.m, {
                        text: X.intl.string(X.t["hBB85/"]),
                        position: "right",
                        children: (0, u.jsx)(P.pd, {
                            label: X.intl.string(X.t["9AjdkD"]),
                            autoFocus: !0,
                            className: Y.QB,
                            name: "username",
                            value: n,
                            placeholder: X.intl.string(X.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                R.default.track(O.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                R.default.track(O.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, u.jsx)(M.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: V()(Y.QX, nn.E2),
                        children: X.intl.format(X.t["KI+BSb"], { termsURL: O.X7G.TERMS, privacyURL: O.X7G.PRIVACY }),
                    }),
                    (0, u.jsx)("div", {
                        className: Y.Ot,
                        children: (0, u.jsx)(H.$, {
                            text: X.intl.string(X.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, u.jsx)("div", {
                        className: Y.QX,
                        children: (0, u.jsx)(em.Q, {
                            text: X.intl.string(X.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lP(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = d.useMemo(() => null != t && n, [t, n]);
    return (0, u.jsx)(t0.m, {
        text: !n && t ? X.intl.string(X.t.AY4IVA) : null,
        children: (0, u.jsx)("div", {
            className: Y.Ot,
            children: (0, u.jsx)(H.$, {
                text: X.intl.string(X.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: i,
                disabled: !l,
            }),
        }),
    });
}
function lG(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, p.bG)([tZ.A], () => tZ.A.getAuthenticationConsentRequired()),
        o = t?.guild_scheduled_event != null,
        c = d.useRef(null),
        h = null;
    h = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, u.jsx)(lO, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, u.jsx)("div", { className: Y.S3, children: (0, u.jsx)(iq.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, g] = d.useState(""),
        [f, x] = d.useState(null),
        [A, E] = tY(a),
        [_, j] = d.useState(!1),
        [v, N] = d.useState({}),
        { username: C, global_name: I, date_of_birth: S } = v,
        [T, y] = t$();
    d.useEffect(() => {
        null == f && c.current?.focus();
    }, [f, c]);
    let [b, L] = d.useState(null),
        [k, D] = d.useState(null),
        w = d.useCallback(async () => {
            (K._.dispatch(O.jej.WAVE_EMPHASIZE), j(!0), N({}));
            try {
                (await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return ne({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: t.code, globalName: m, birthday: f }),
                    r?.());
            } catch (t) {
                if ((j(!1), !(t instanceof t1.LG))) return;
                let e = (0, t3.W)(t);
                (N(e), l?.(e), "number" == typeof e.retry_after && y(e.retry_after));
            }
        }, [t, m, f, A, l, r, y, N, j]),
        G = d.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                (0 === m.length && (L(X.intl.string(X.t.EkokLy)), (t = !0)),
                    null == f && (D(X.intl.string(X.t.EkokLy)), (t = !0)),
                    t || w());
            },
            [m, f, a, w, L, D],
        );
    return t.state === O.elq.RESOLVING
        ? (0, u.jsx)(lw, { authBoxClassName: n, name: m, onNameChange: g })
        : (0, u.jsxs)("div", {
              children: [
                  (0, u.jsx)(P.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, u.jsxs)("form", {
                          onSubmit: G,
                          children: [
                              h,
                              o ? (0, u.jsx)("div", { className: nn.yF }) : null,
                              (0, u.jsxs)(P.eB, {
                                  className: o ? void 0 : nn.y0,
                                  children: [
                                      (0, u.jsx)(tJ.k, {
                                          helperText: X.intl.string(X.t["330TCc"]),
                                          label: X.intl.string(X.t["9AjdkD"]),
                                          error: b ?? tq(I ?? C),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: X.intl.string(X.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              R.default.track(O.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              R.default.track(O.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, u.jsx)(nu.A, {
                                          label: X.intl.string(X.t.rhBeKe),
                                          wrapperClassName: nn.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              (x(e), null != e && D(null));
                                          },
                                          error: k ?? tq(S),
                                          value: f,
                                      }),
                                      (0, u.jsx)(ni, { consent: A, consentRequired: a, onConsentChange: E }),
                                      (0, u.jsx)(lP, { consentRequired: a, consent: A, registering: _ }),
                                      (0, u.jsx)("div", {
                                          className: Y.QX,
                                          children: (0, u.jsx)(em.Q, {
                                              text: X.intl.string(X.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: s,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != t && o
                      ? (0, u.jsx)(P.Ay, {
                            className: Y.QX,
                            children: (0, u.jsx)(lD, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lU = n(942614);
n(100544);
var lB =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lF = n(771016);
function lV(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            hideInviteHeader: r = !1,
            location: a,
            redirectTo: o,
            onLoginStart: c,
            onRegister: g,
            transitionTo: f = G.pX,
        } = e,
        x = (0, p.bG)([tZ.A], () => tZ.A.getAuthenticationConsentRequired()),
        E = (0, p.bG)([e$.default], () => e$.default.isAuthenticated()),
        _ = (0, p.bG)([lv], () => lv.isUnderageAnonymous()),
        j = (0, p.bG)([le.A], () => le.A.getHasLoggedInAccounts()),
        v = null != e.location ? (0, h.parse)(e.location.search) : {},
        [N, C] = d.useState(v.email ?? ""),
        [I, S] = d.useState({}),
        T = (0, iK.Ay)(E),
        y = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, l, s),
        b = null != s && (null != s.guild || null != s.channel),
        L = null != s && null == s.guild && null == s.channel && null != s.inviter,
        k = d.useCallback(() => {
            E && (null != o ? f(o) : f(eg.A.defaultRoute));
        }, [E, o, f]);
    ((0, iW.Ay)(() => {
        (k(),
            R.default.track(
                O.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: y,
                    ...(null != i ? (0, lg.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == x && A.A.getLocationMetadata(),
            (0, U.d0)("register"));
    }),
        d.useEffect(() => {
            E && !1 === T && ((0, lU.C)(lF.zY.ORGANIC_REGISTERED), k());
        }, [E, T, k]));
    let D = lB.FULL;
    (_ || null != I.date_of_birth ? (D = lB.AGE_GATE) : b && (D = lB.INVITE),
        (0, lt.A)(
            {
                type: m.ImpressionTypes.VIEW,
                name: m.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: m.ImpressionGroups.USER_REGISTRATION_FLOW, step: D },
            },
            {},
            [D],
        ));
    let w = d.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, h.parse)(a.search) : {};
            (null != s
                ? (t = O.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = O.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = O.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != o
                      ? ((t = O.BVt.LOGIN), (i.redirect_to = o))
                      : ((t = O.BVt.LOGIN), "" !== N && (i = { email: N })),
                A.A.loginReset(),
                f(t, { search: (0, h.stringify)(i), source: "register" }),
                c?.(e),
                K._.dispatch(O.jej.WAVE_EMPHASIZE));
        },
        [N, s, n, l, o, a, c, f],
    );
    if (_ || null != I.date_of_birth) return (0, u.jsx)(lI, {});
    if (null != s && b)
        return (0, u.jsx)(lG, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: S,
            onGotoLogin: w,
            onRegister: g,
        });
    let B = (0, u.jsx)(P.hE, { children: X.intl.string(X.t.wC4TlR) }, "title"),
        F = !1;
    null != l
        ? ((B = (0, u.jsx)(iJ.A, { guildTemplate: l })), (F = !0))
        : null != n
          ? (B = (0, u.jsx)(iH, { giftCode: n }))
          : !r &&
            null != s &&
            L &&
            s.state === O.elq.RESOLVED &&
            (B = (0, u.jsx)("div", { className: Y.S3, children: (0, u.jsx)(iq.A, { invite: s, isRegister: !0 }) }));
    let M = (0, u.jsx)(ly, {
        initialEmail: v.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: S,
        onEmailChange: C,
        onGotoLogin: w,
        onRegister: g,
    });
    return F
        ? (0, u.jsx)(iZ, {
              tag: "section",
              className: V()(t, nn.Sy),
              children: () => [
                  B,
                  (0, u.jsxs)(
                      "div",
                      {
                          className: nn.Uu,
                          children: [(0, u.jsx)(P.hE, { className: nn.lR, children: X.intl.string(X.t.wC4TlR) }), M],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, u.jsxs)(P.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, u.jsx)("div", {
                            className: nn.AX,
                            children: (0, u.jsx)(H.$, {
                                onClick: w,
                                variant: "secondary",
                                text: X.intl.string(X.t["1MrpWO"]),
                                icon: n$.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  B,
                  M,
              ],
          });
}
(p.Ay.initialize(), p.Ay.initialize());
class lM extends d.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        (e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, U.d0)("gift_code"));
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        (n ||
            x.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null }));
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        (iy.Yq(), null == e && this.refreshUser());
    }
    refreshUser = () => {
        (this.setState({ fetchingUser: !0 }),
            nH
                .rQ({ withAnalyticsToken: !0 })
                .then((e) => this.setState({ currentUser: e, fetchingUser: !1 }))
                .catch(() => this.setState({ fetchingUser: !1 })));
    };
    get requiresVerification() {
        let { currentUser: e } = this.state;
        return null != e && !e.verified;
    }
    getCode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.match.params.giftCode;
    }
    getMode() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
        return e.login ? "login" : "register";
    }
    getErrorMessage(e) {
        let { libraryApplication: t, sku: n } = this.props,
            { error: i } = this.state,
            l = null != i ? i.code : null;
        return l === O.t02.INVALID_GIFT_SELF_REDEMPTION
            ? X.intl.string(X.t.wa9h7F)
            : l === O.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === O.EZt.COLLECTIBLES
              ? X.intl.string(X.t.mdLtb5)
              : null != t || l === O.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? X.intl.format(X.t.PIdmg3, { libraryLink: O.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === O.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? X.intl.string(X.t.ilcBeX)
                  : l === O.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? X.intl.string(X.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        A.A.logout("gift_code", O.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        (A.A.verifyResend(), this.setState({ sentVerification: !0 }));
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            (this.setState({ error: null }), await E.Ay.redeemGiftCode({ code: n }), e(O.BVt.APP));
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        E.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(O.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(E.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, u.jsxs)(P.Ay, { children: [(0, u.jsx)(P.hE, { children: e }), (0, u.jsx)(P.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.hE, { className: V()(Y.Ot, Y.QB), children: X.intl.string(X.t.KPowgn) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t.j8734b) }),
                (0, u.jsx)("div", {
                    className: V()(Y.eT, Y.QB),
                    children: (0, u.jsx)(H.$, { text: X.intl.string(X.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, u.jsx)(em.Q, {
                    text: X.intl.string(X.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(nQ.A.getArticleURL(O.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.csrAMJ) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t["m1+IBn"]) }),
                (0, u.jsx)("div", {
                    className: Y.eT,
                    children: (0, u.jsx)(H.$, {
                        text: X.intl.string(X.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P._V, { src: n(792525), className: Y.QB }),
                (0, u.jsx)(P.hE, { children: X.intl.format(X.t["ivLUf/"], { username: e.username }) }),
                (0, u.jsx)(P.tK, { className: Y.QX, children: X.intl.string(X.t["8Su18+"]) }),
                (0, u.jsx)("div", {
                    className: Y.eT,
                    children: (0, u.jsx)(H.$, {
                        text: t ? X.intl.string(X.t.CMa9Rv) : X.intl.string(X.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, u.jsx)("div", {
                    className: Y.Ot,
                    children: (0, u.jsx)(em.Q, {
                        text: X.intl.string(X.t.Po9eBQ),
                        textVariant: "text-sm/normal",
                        onClick: this.refreshUser,
                    }),
                }),
            ],
        });
    }
    renderAuthenticated(e, t, n) {
        let { transitionTo: i } = this.props,
            l = this.getErrorMessage(e);
        return (0, u.jsx)(lW, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, u.jsxs)(P.Ay, {
                children: [
                    (0, u.jsx)(iH, { giftCode: e }),
                    (0, u.jsx)("div", {
                        className: Y.eT,
                        children: (0, u.jsx)(H.$, {
                            text: X.intl.string(X.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, u.jsx)(P.tK, { className: Y.QX, children: l })
                        : (0, u.jsx)(P.ME, {
                              className: Y.QX,
                              children: X.intl.format(X.t.NYM08s, {
                                  userTag: ta.Ay.getUserTag(t),
                                  onLogoutClick: this.handleLogout,
                              }),
                          }),
                ],
            }),
        });
    }
    render() {
        let {
                nativeAppState: e,
                sku: t,
                authenticated: n,
                giftCode: i,
                isResolved: l,
                isAccepting: s,
                transitionTo: r,
                location: a,
            } = this.props,
            { fetchingUser: o, continueOnWeb: c } = this.state;
        if (e === O.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === O.fAW.OPENING) return this.renderSpinner(X.intl.string(X.t["Z+hCVU"]));
        if (s) return this.renderSpinner(X.intl.string(X.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(X.intl.string(X.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return o || null == e
                    ? this.renderSpinner(X.intl.string(X.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, u.jsx)(lx, { giftCode: i, transitionTo: r, location: a })
                : (0, u.jsx)(lV, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let lH = p.Ay.connectStores([il.A, iL.A, e$.default, iO.A, eg.A, ib.A], (e) => {
    let t = e.match.params.giftCode,
        n = il.A.get(t),
        i = null != n ? iO.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? ik.YI(n.entitlementBranches, i, iL.A) : null,
        authenticated: e$.default.isAuthenticated(),
        defaultRoute: eg.A.defaultRoute,
        isResolved: il.A.getIsResolved(t),
        isAccepting: il.A.getIsAccepting(t),
        libraryApplicationsFetched: iL.A.fetched,
        nativeAppState: ib.A.getState(t),
    };
})(lM);
function lW(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, iR.bF)(t);
    return (d.useEffect(() => {
        null != i && s && l(O.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, u.jsxs)(P.Ay, {
              children: [(0, u.jsx)(P.hE, { children: X.intl.string(X.t.b3lf1c) }), (0, u.jsx)(P.CK, {})],
          })
        : n;
}
var lK = n(871194),
    lQ = n(799365),
    lz = n(894778),
    lX = n(315290),
    lq = n(396574),
    lY = n(838697);
p.Ay.initialize();
class l$ extends d.PureComponent {
    componentDidMount() {
        ((0, U.d0)("guildTemplate"),
            lq.VP || eZ.A.launch("discord://" + O.BVt.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eR.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lq.VP
            ? (0, u.jsx)("div", { className: Y.eT, children: (0, u.jsx)(H.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, u.jsx)(P.KE, { className: Y.eT });
    }
    renderSpinner(e) {
        return (0, u.jsxs)(P.Ay, { children: [(0, u.jsx)(P.hE, { children: e }), (0, u.jsx)(P.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.hE, { className: V()(Y.Ot, Y.QB), children: X.intl.string(X.t.C7ZRNw) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t.A6MwXE) }),
                this.renderButton(X.intl.string(X.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.csrAMJ) }),
                (0, u.jsx)(P.tK, { children: X.intl.string(X.t["m1+IBn"]) }),
                this.renderButton(X.intl.string(X.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eK()(null != e, "guild template must not be null"), e.state === lr.QB.RESOLVING)
            ? (0, u.jsx)(P.Ay, { className: lY.sL, children: (0, u.jsx)(lQ.A, { guildTemplate: e }) })
            : (0, u.jsx)(lZ, { guildTemplate: e });
    }
    renderContinue() {
        return (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P.hE, { children: X.intl.string(X.t.fOc4gn) }),
                this.renderButton(X.intl.string(X.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(X.intl.string(X.t.ZTNur7));
        if (t === O.fAW.OPEN) return this.renderAppOpened();
        if (t === O.fAW.OPENING) return this.renderSpinner(X.intl.string(X.t["Z+hCVU"]));
        switch (e.state) {
            case lr.QB.RESOLVING:
                return this.renderSpinner(X.intl.string(X.t["Z+hCVU"]));
            case lr.QB.RESOLVED:
                if (n || !lq.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, u.jsx)(lx, { guildTemplate: e, transitionTo: i, location: l });
                return (0, u.jsx)(lV, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        ((0, lU.C)(lF.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lz.A.flowStart(lX.do.ORGANIC_GUILD_TEMPLATES, lX.ju.NUF_STARTED));
                    },
                });
            case lr.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lZ(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lK.A)(t, !1);
    lz.A.flowStep(lX.do.ORGANIC_GUILD_TEMPLATES, lX.jC.GUILD_CREATE);
    let l = (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(P.hE, { className: lY.wx, children: X.intl.string(X.t.UNFvtM) }),
            n,
            (0, u.jsx)("div", {
                className: lY.Tf,
                children: (0, u.jsx)(H.$, { text: X.intl.string(X.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, u.jsx)(iZ, {
        className: lY.sL,
        children: () => [
            (0, u.jsx)(iJ.A, { guildTemplate: t }, "template"),
            (0, u.jsx)("div", { className: lY.KJ, children: l }, "contents"),
        ],
    });
}
function lJ(e, t, n) {
    (e.preventDefault(),
        R.default.track(O.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        }));
    let i = e$.default.getFingerprint(),
        l = null != i ? i : e$.default.getId();
    eR.A.openMobileApp(n.state === lr.QB.RESOLVED ? t : void 0, l);
}
function l0(e) {
    let { code: t } = e,
        n = (0, p.bG)([eb.A], () => eb.A.getGuildTemplate(t));
    return (d.useEffect(() => {
        (0, U.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === lr.QB.RESOLVING)
        ? (0, u.jsx)(P.Ay, { children: (0, u.jsx)(ew.y, {}) })
        : n.state === lr.QB.RESOLVED
          ? (0, u.jsxs)(P.Ay, {
                children: [
                    (0, u.jsx)(lQ.A, { guildTemplate: n, tall: !0 }),
                    (0, u.jsx)("div", {
                        className: Y.QX,
                        children: (0, u.jsx)(H.$, {
                            text: X.intl.string(X.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lJ(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, u.jsx)(e7, {
                text: X.intl.string(X.t["e/rZ2n"]),
                buttonCta: X.intl.string(X.t.HAvYn0),
                onClick: (e) => lJ(e, t, n),
            });
}
(p.Ay.initialize(), n(938796));
var l1 = n(821418),
    l2 = n(665260),
    l3 = n(362474),
    l4 = n(695366),
    l8 = n(964486),
    l5 = n(921037),
    l7 = (((a = {}).IN_CONTENT = "in_content"), (a.BELOW_CONTENT = "below_content"), a);
let l9 = (0, tI.mj)({
    name: "2026-09-silp-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
function l6(e) {
    return l9.useConfig({ location: e }).placement;
}
var se = n(320448),
    st = n(975807),
    sn = n(818348),
    si = n(438865);
function sl(e) {
    let { inviteCode: t, guildId: n, className: i, belowContent: l = !1 } = e;
    function s() {
        (R.default.track(
            O.HAw.INVITE_CTA_CLICKED,
            { action: "browse_other_servers", invite_code: t, guild_id: n },
            { flush: !0 },
        ),
            (0, st.A)(sn.Tk.DISCOVER));
    }
    return l
        ? (0, u.jsx)("div", {
              className: V()(i, si.B),
              children: (0, u.jsx)(H.$, {
                  text: X.intl.string(X.t["7itT3E"]),
                  onClick: s,
                  variant: "overlay-secondary",
                  icon: { type: "icon", asset: se._ },
                  iconPosition: "end",
                  size: "sm",
              }),
          })
        : (0, u.jsx)("div", {
              className: V()(i, Y.Ot),
              children: (0, u.jsx)(H.$, {
                  text: X.intl.string(X.t["7itT3E"]),
                  onClick: s,
                  variant: "secondary",
                  fullWidth: !0,
              }),
          });
}
var ss = n(804070);
let sr = (0, tI.mj)({
    name: "2026-09-silp-desktop-app-upsell",
    kind: "user",
    defaultConfig: { label: null },
    variations: { 1: { label: "download_discord_app" }, 2: { label: "download_app" }, 3: { label: "get_discord" } },
});
var sa = (((o = {}).POPOVER = "popover"), (o.SIDEBAR = "sidebar"), o);
let so = (0, tI.mj)({
    name: "2026-09-invite-silp-education",
    kind: "installation",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "popover" }, 2: { variant: "sidebar" } },
});
function sc(e, t) {
    let { variant: n } = so.useConfig({ location: t });
    return null == e ||
        null == e.guild ||
        (null != e.type && e.type !== to.Xd.GUILD) ||
        null != e.guild_scheduled_event ||
        null != e.target_type
        ? null
        : (so.getConfig({ location: `${t}.eligible` }), n);
}
var su =
    (((c = {}).POPOVER_LEARN_MORE = "whats_discord_popover_learn_more"),
    (c.POPOVER_DISMISS = "whats_discord_popover_dismiss"),
    (c.SIDEBAR_ROW = "whats_discord_sidebar_row"),
    (c.PANEL_CLOSE = "whats_discord_panel_close"),
    c);
function sd(e, t) {
    R.default.track(O.HAw.INVITE_CTA_CLICKED, { action: t, invite_code: e.code, guild_id: e.guild?.id });
}
var sh = n(333007),
    sm = n(408278),
    sg = n(972213),
    sf = n(364522),
    sp = n(607470),
    sx = n(75298);
function sA(e) {
    let { title: t, description: n, video: i, poster: l, mediaEnabled: s } = e;
    return (0, u.jsxs)("li", {
        className: sx.N4,
        children: [
            (0, u.jsx)("div", {
                className: sx.HW,
                children: s
                    ? (0, u.jsx)(sp.A, {
                          className: sx.b5,
                          src: i,
                          poster: l,
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          playsInline: !0,
                          controls: !1,
                          preload: "auto",
                      })
                    : null,
            }),
            (0, u.jsxs)("div", {
                className: sx.oo,
                children: [
                    (0, u.jsx)(M.E, { variant: "text-md/semibold", color: "text-strong", children: X.intl.string(t) }),
                    (0, u.jsx)(M.E, { variant: "text-md/medium", color: "text-subtle", children: X.intl.string(n) }),
                ],
            }),
        ],
    });
}
let sE = [
    {
        id: "chat",
        title: X.t.DHLE0q,
        description: X.t.putVLl,
        video: "https://cdn.discordapp.com/assets/content/c280207b5f7698daf392b8a1d7ef06f6abd4756921cf279e43ac1b4df7435b1e.mp4",
        poster: "https://cdn.discordapp.com/assets/content/ed1c5cc896fda218645dbd7ddd9c15bdbe3672cef38a6c345f33f94e4cdabb09.png",
    },
    {
        id: "stream",
        title: X.t.CmLD50,
        description: X.t.fAU31r,
        video: "https://cdn.discordapp.com/assets/content/924896af22b016a248979482b628d411eb63cc2229f1b3c05e7d13343d6a490a.mp4",
        poster: "https://cdn.discordapp.com/assets/content/ab297c5f0072da3d2e8fc411dc7bacf2fec76239083cb074f25d845050b67ee3.png",
    },
    {
        id: "voice",
        title: X.t.Z70vcv,
        description: X.t["pqph/A"],
        video: "https://cdn.discordapp.com/assets/content/ff7a797aa208c9f706e10b51001ea0a51bbc462de5ee44b8066ccc5038d1f4a8.mp4",
        poster: "https://cdn.discordapp.com/assets/content/5a1beb8894cb9334ce5c91d9f6344ef9779c57e513d1288eb0d9f80e4803fc66.png",
    },
];
function s_(e) {
    let { invite: t, open: n, edge: i, returnRef: l, onRequestClose: s, translucent: r = !1, className: a } = e,
        o = d.useRef(null);
    d.useEffect(() => {
        if (!n) return;
        let e = l.current;
        return (
            o.current?.focus({ preventScroll: !0 }),
            () => {
                e?.focus({ preventScroll: !0 });
            }
        );
    }, [n, l]);
    let c = d.useCallback(() => {
        (sd(t, su.PANEL_CLOSE), s());
    }, [t, s]);
    return (0, sh.createPortal)(
        (0, u.jsx)(tV.N, {
            theme: O.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, u.jsxs)("aside", {
                    "data-theme": O.NJ8.DARK,
                    "aria-label": X.intl.string(X.t["FlY+Rz"]),
                    "aria-hidden": !n,
                    className: V()(sx.nd, "start" === i ? sx.BZ : sx.YQ, n && sx.ZC, r && sx.sJ, e, a),
                    children: [
                        (0, u.jsx)("div", {
                            className: sx.VN,
                            children: (0, u.jsx)(t0.m, {
                                text: X.intl.string(X.t.cpT0Cq),
                                children: (0, u.jsx)(sm.K, {
                                    buttonRef: o,
                                    icon: sg.XLargeIcon,
                                    "aria-label": X.intl.string(X.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: c,
                                }),
                            }),
                        }),
                        (0, u.jsx)(sf.Ip, {
                            className: sx.XG,
                            children: (0, u.jsxs)("div", {
                                className: sx.Qs,
                                children: [
                                    (0, u.jsx)(eP.D, {
                                        variant: "heading-xl/semibold",
                                        color: "text-strong",
                                        children: X.intl.string(X.t.YCIfhC),
                                    }),
                                    (0, u.jsx)("ul", {
                                        className: sx.qT,
                                        children: sE.map((e) => (0, u.jsx)(sA, { ...e, mediaEnabled: n }, e.id)),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
function sj(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/f7a6b755e6c2a5228c797a994ec09f9689fd695cafb96eae119c82f72edfe50d.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var sv = n(789645),
    sN = n(915089),
    sC = n(479789);
function sI(e) {
    let { visible: t, onLearnMore: n, onDismiss: i, learnMoreRef: l } = e,
        s = (0, sN.GV)();
    return (0, sh.createPortal)(
        (0, u.jsx)(tV.N, {
            theme: O.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, u.jsxs)("section", {
                    "data-theme": O.NJ8.DARK,
                    "aria-labelledby": s,
                    "aria-hidden": !t,
                    className: V()(sC.oO, t && sC.IZ, e),
                    children: [
                        (0, u.jsx)("div", {
                            className: sC.VN,
                            children: (0, u.jsx)(t0.m, {
                                text: X.intl.string(X.t.cpT0Cq),
                                children: (0, u.jsx)(sm.K, {
                                    icon: sv.P,
                                    "aria-label": X.intl.string(X.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: i,
                                }),
                            }),
                        }),
                        (0, u.jsx)("div", {
                            className: sC.fA,
                            children: (0, u.jsx)(sj, { alt: "", ariaHidden: !0, width: 144, height: 81 }),
                        }),
                        (0, u.jsxs)("div", {
                            className: sC.Qq,
                            children: [
                                (0, u.jsx)(iQ.F, {
                                    forceLevel: 2,
                                    children: (0, u.jsx)(eP.D, {
                                        id: s,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: X.intl.string(X.t["FlY+Rz"]),
                                    }),
                                }),
                                (0, u.jsx)(M.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: X.intl.string(X.t.lgHr73),
                                }),
                            ],
                        }),
                        (0, u.jsx)(H.$, {
                            buttonRef: l,
                            text: X.intl.string(X.t.hvVgAZ),
                            variant: "secondary",
                            size: "sm",
                            fullWidth: !0,
                            onClick: n,
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
function sS(e) {
    let { invite: t, children: n } = e,
        i = d.useRef(null),
        [l, s] = d.useState(!1),
        [r, a] = d.useState(!1),
        o = d.useCallback(() => {
            (sd(t, su.POPOVER_LEARN_MORE), s(!0));
        }, [t]),
        c = d.useCallback(() => {
            (sd(t, su.POPOVER_DISMISS), a(!0));
        }, [t]),
        h = d.useCallback(() => s(!1), []);
    return (0, u.jsxs)(u.Fragment, {
        children: [
            n,
            r ? null : (0, u.jsx)(sI, { visible: !l, learnMoreRef: i, onLearnMore: o, onDismiss: c }),
            (0, u.jsx)(s_, { invite: t, open: l, edge: "end", returnRef: i, onRequestClose: h }),
        ],
    });
}
var sT = n(996682);
function sy(e) {
    let {
        color: t = e2.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: l,
        width: s = 200,
        height: r = 30,
    } = e;
    return (0, u.jsx)("svg", {
        ...(0, sT.A)({ "aria-label": n, "aria-hidden": i, role: l }),
        width: s,
        height: r,
        viewBox: "0 0 200 30",
        fill: t.css,
        children: (0, u.jsx)("path", {
            fill: t.css,
            d: "M25.55 0c-.4.69-.74 1.4-1.06 2.12-3.02-.45-6.1-.45-9.13 0C15.06 1.4 14.7.7 14.3 0a33.4 33.4 0 0 0-8.23 2.52c-5.2 7.65-6.6 15.1-5.9 22.44A33.16 33.16 0 0 0 10.26 30a24 24 0 0 0 2.16-3.45 21.94 21.94 0 0 1-3.4-1.61l.83-.63a23.85 23.85 0 0 0 20.17 0c.27.22.55.44.84.63a21.72 21.72 0 0 1-3.41 1.61c.62 1.21 1.34 2.37 2.16 3.46a33.14 33.14 0 0 0 10.09-5.02c.83-8.52-1.42-15.91-5.92-22.45A32.9 32.9 0 0 0 25.55.02V0ZM13.3 20.44c-1.96 0-3.6-1.77-3.6-3.95 0-2.19 1.57-3.96 3.6-3.96 2.01 0 3.62 1.78 3.59 3.96-.04 2.18-1.59 3.95-3.59 3.95Zm13.25 0c-1.98 0-3.59-1.77-3.59-3.95 0-2.19 1.57-3.96 3.59-3.96 2.02 0 3.61 1.78 3.58 3.96-.03 2.18-1.58 3.95-3.58 3.95ZM72.28 5.48a17.76 17.76 0 0 0-7.26-1.33H53.15V25.3h11.01c3.1 0 5.7-.48 7.8-1.42a10.38 10.38 0 0 0 4.7-3.86 9.95 9.95 0 0 0 1.53-5.43c.03-1.9-.48-3.78-1.48-5.42a9.74 9.74 0 0 0-4.43-3.7Zm-3.79 13c-1.03.96-2.51 1.44-4.44 1.44h-3.29V9.53h3.71c1.87 0 3.26.47 4.2 1.38.94.98 1.44 2.3 1.38 3.67a5.1 5.1 0 0 1-1.55 3.91h-.01Zm40.37-2.33c.97.86 1.45 2.12 1.46 3.79a5 5 0 0 1-2.42 4.36c-1.6 1.07-3.9 1.6-6.87 1.6-1.7 0-3.4-.22-5.06-.64a16.21 16.21 0 0 1-4.45-1.83V18.4c1.21.87 2.56 1.51 4 1.89 1.58.47 3.22.73 4.86.73.57.04 1.14-.07 1.66-.28.38-.19.56-.43.56-.68 0-.28-.1-.55-.3-.76a2.74 2.74 0 0 0-1.19-.51l-3.65-.81c-2.09-.48-3.57-1.15-4.45-2a4.46 4.46 0 0 1-1.3-3.38 4.46 4.46 0 0 1 1.15-3.04 7.45 7.45 0 0 1 3.28-2c1.62-.51 3.3-.75 5-.72 1.58-.01 3.15.17 4.68.55 1.24.29 2.43.75 3.53 1.38v4.75a13.17 13.17 0 0 0-3.3-1.34 15.1 15.1 0 0 0-3.85-.5c-1.9 0-2.86.31-2.86.95 0 .3.17.56.44.68.52.22 1.06.38 1.62.47l3.04.54c1.98.35 3.45.95 4.43 1.82h-.01Zm20.2 3.49c.88-.26 1.73-.62 2.53-1.08v5.35a14.94 14.94 0 0 1-7.76 2c-2.18.06-4.35-.38-6.33-1.28a9.1 9.1 0 0 1-3.94-3.45 9.22 9.22 0 0 1-1.3-4.89 8.9 8.9 0 0 1 1.36-4.86 9.19 9.19 0 0 1 4.02-3.36c2-.86 4.15-1.28 6.32-1.23 3.05 0 5.57.63 7.58 1.9v5.54a9.95 9.95 0 0 0-5.53-1.63c-1.88 0-3.36.34-4.42 1.03a3.08 3.08 0 0 0-.05 5.37c1.03.69 2.54 1.04 4.5 1.04 1.02 0 2.03-.15 3-.44l.01-.01Zm22.52-11.58c-4-1.61-8.48-1.61-12.48 0a8.7 8.7 0 0 0-5.38 8.2 9.08 9.08 0 0 0 1.38 4.92 9.4 9.4 0 0 0 4.03 3.45 15.95 15.95 0 0 0 12.44-.01 9.34 9.34 0 0 0 4-3.45 9.15 9.15 0 0 0 1.37-4.93 8.77 8.77 0 0 0-1.37-4.86 9.2 9.2 0 0 0-3.98-3.32h-.01Zm-3.21 11.2a4.08 4.08 0 0 1-3.05 1.1 4.2 4.2 0 0 1-3.04-1.1 3.91 3.91 0 0 1-1.11-2.91 3.82 3.82 0 0 1 1.1-2.89 4.21 4.21 0 0 1 3.05-1.07 4.18 4.18 0 0 1 3.05 1.07 3.8 3.8 0 0 1 1.1 2.89 3.93 3.93 0 0 1-1.1 2.92Zm24.08-12.04a5.1 5.1 0 0 1 2.77.73v6.53c-.91-.53-1.96-.8-3.02-.75-1.62 0-2.87.48-3.74 1.46-.87.98-1.3 2.5-1.3 4.55v5.56h-7.46V7.62h7.3v5.62c.4-2.06 1.05-3.57 1.96-4.55.89-.97 2.15-1.5 3.47-1.47h.02Zm20.08-3.68v7.88c-1.21-3.06-3.6-4.6-7.14-4.6a8.38 8.38 0 0 0-7.74 4.69 10.6 10.6 0 0 0-1.08 4.99 11 11 0 0 0 1.02 4.82 8.05 8.05 0 0 0 2.92 3.35 8 8 0 0 0 4.42 1.23c1.66.04 3.3-.36 4.73-1.18a7.06 7.06 0 0 0 2.88-3.4v3.97H200V3.54h-7.46Zm-1.1 15.62a4.16 4.16 0 0 1-3.04 1.08 4.12 4.12 0 0 1-2.98-1.08 3.72 3.72 0 0 1-1.14-2.81 3.67 3.67 0 0 1 1.13-2.8 4.8 4.8 0 0 1 6.04 0 3.6 3.6 0 0 1 1.14 2.76 3.8 3.8 0 0 1-1.14 2.85ZM88.2 6.2c0 1.83-1.66 3.31-3.71 3.31s-3.71-1.48-3.71-3.31c0-1.84 1.66-3.32 3.71-3.32s3.71 1.48 3.71 3.32Zm0 5.6v13.6h-7.43V11.8c2.38.99 5.06.99 7.43 0Z",
        }),
    });
}
var sb = n(540747),
    sR = n(405494);
function sL(e) {
    let { expanded: t, onClick: n, innerRef: i } = e;
    return (0, u.jsxs)(nY.D, {
        innerRef: i,
        className: V()(sR.nM, t && sR.cE),
        "aria-expanded": t,
        onClick: n,
        children: [
            (0, u.jsx)("div", {
                className: sR.zR,
                children: (0, u.jsx)(sj, { alt: "", ariaHidden: !0, width: 100, height: 56 }),
            }),
            (0, u.jsxs)("div", {
                className: sR.qg,
                children: [
                    (0, u.jsx)(M.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: X.intl.string(X.t["FlY+Rz"]),
                    }),
                    (0, u.jsx)(M.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: X.intl.string(X.t.lgHr73),
                    }),
                ],
            }),
            (0, u.jsx)("div", {
                className: sR.o2,
                children: (0, u.jsx)(se._, { size: "custom", width: 16, height: 16 }),
            }),
        ],
    });
}
function sO(e) {
    let { invite: t, header: n, children: i } = e,
        l = d.useRef(null),
        [s, r] = d.useState(!1);
    (0, sb.Y)();
    let a = d.useCallback(() => {
            (s || sd(t, su.SIDEBAR_ROW), r(!s));
        }, [t, s]),
        o = d.useCallback(() => r(!1), []);
    return (0, sh.createPortal)(
        (0, u.jsx)(tV.N, {
            theme: O.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsxs)("div", {
                            "data-theme": O.NJ8.DARK,
                            className: V()(sR.pz, e),
                            children: [
                                (0, u.jsx)(sy, { "aria-hidden": !0, width: 133, height: 20 }),
                                (0, u.jsx)(sf.Ip, {
                                    className: sR.XG,
                                    children: (0, u.jsxs)("div", {
                                        className: sR.Qs,
                                        children: [n, (0, u.jsx)("div", { className: sR.F7, children: i })],
                                    }),
                                }),
                                (0, u.jsx)(sL, { innerRef: l, expanded: s, onClick: a }),
                            ],
                        }),
                        (0, u.jsx)(s_, {
                            invite: t,
                            open: s,
                            edge: "start",
                            returnRef: l,
                            onRequestClose: o,
                            className: sR.nd,
                            translucent: !0,
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
function sk(e) {
    let { mode: t, invite: n, location: i, transitionTo: l, onLoginStart: s, children: r } = e;
    return (0, tM.A)("(min-width: 900px)")
        ? "login" === t
            ? (0, u.jsx)(sO, {
                  invite: n,
                  header: (0, u.jsx)("div", { className: Y.S3, children: (0, u.jsx)(iq.A, { invite: n }) }),
                  children: (0, u.jsx)(lx, {
                      invite: n,
                      isEmbedded: !0,
                      authBoxClassName: sR.sL,
                      location: i,
                      transitionTo: l,
                  }),
              })
            : (0, u.jsx)(sO, {
                  invite: n,
                  children: (0, u.jsx)(lV, {
                      invite: n,
                      authBoxClassName: sR.sL,
                      onLoginStart: s,
                      location: i,
                      transitionTo: l,
                  }),
              })
        : r;
}
var sD = n(930839),
    sw = n(53505),
    sP = n(4274);
p.Ay.initialize();
let sG = "register",
    sU = "login";
function sB(e) {
    let { message: t, onClick: n, invite: i, className: l, notice: s, secondaryAction: r } = e,
        a = i?.guild_scheduled_event != null,
        o = a ? "active" : "primary";
    return lq.VP
        ? (0, u.jsx)("div", {
              className: l ?? (a ? Y.QX : Y.eT),
              children: (0, u.jsxs)(eD.B, {
                  gap: 8,
                  children: [
                      s,
                      null == r
                          ? (0, u.jsx)(H.$, { text: t, onClick: n, variant: o, fullWidth: !0 })
                          : (0, u.jsxs)(Z.e, {
                                fullWidth: !0,
                                children: [
                                    (0, u.jsx)(H.$, { text: t, onClick: n, variant: o }),
                                    (0, u.jsx)(H.$, { text: r.text, onClick: r.onClick, variant: "secondary" }),
                                ],
                            }),
                  ],
              }),
          })
        : (0, u.jsx)(P.KE, { className: l ?? Y.eT });
}
function sF(e) {
    let t = ty("InviteAccept");
    return (0, u.jsx)(sB, { ...e, message: tb(t) });
}
function sV(e) {
    let { invite: t, transitionTo: n, location: i } = e,
        l = sc(t, "InviteLogin"),
        s = (0, u.jsx)(lx, { invite: t, transitionTo: n, location: i });
    switch (l) {
        case sa.POPOVER:
            return (0, u.jsx)(sS, { invite: t, children: s });
        case sa.SIDEBAR:
            return (0, u.jsx)(sk, { mode: "login", invite: t, location: i, transitionTo: n, children: s });
        default:
            return s;
    }
}
function sM(e) {
    let { invite: t, onLoginStart: n, location: i, transitionTo: l } = e,
        s = sc(t, "InviteRegister"),
        r = (0, u.jsx)(lV, { invite: t, onLoginStart: n, location: i, transitionTo: l });
    switch (s) {
        case sa.POPOVER:
            return (0, u.jsx)(sS, { invite: t, children: r });
        case sa.SIDEBAR:
            return (0, u.jsx)(sk, {
                mode: "register",
                invite: t,
                onLoginStart: n,
                location: i,
                transitionTo: l,
                children: r,
            });
        default:
            return r;
    }
}
function sH(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l, expirationLocation: s } = e,
        r = (0, p.bG)([te.A], () => (t.state === O.elq.ERROR ? te.A.getInviteError(n) : void 0)),
        a = t.guild_scheduled_event,
        o = r?.code === O.t02.INVALID_CANNOT_FRIEND_SELF,
        c = lq.VP && !o && tT(t),
        h = null == a ? (0, u.jsx)(ss.A, { invite: t, location: s }) : null,
        { label: m } = sr.useConfig({ location: "InviteAuthenticated" }),
        g = lq.VP && !nO.isPlatformEmbedded && !o;
    g && sr.getConfig({ location: "InviteAuthenticated.eligible" });
    let f =
        g && null != m
            ? {
                  text: (function (e) {
                      switch (e) {
                          case "download_discord_app":
                              return X.intl.string(X.t.jCQlbu);
                          case "download_app":
                              return X.intl.string(X.t["BK8LK+"]);
                          case "get_discord":
                              return X.intl.string(X.t.BjfDQq);
                      }
                  })(m),
                  onClick: function () {
                      (R.default.track(O.HAw.INVITE_CTA_CLICKED, {
                          action: "download_app",
                          invite_code: t.code,
                          guild_id: t.guild?.id,
                      }),
                          window.open((0, sw.SU)(), "_blank"),
                          R.default.track(O.HAw.DOWNLOAD_APP, {
                              platform: (0, sw.Vf)(),
                              ptb: !1,
                              released: !0,
                              referring_location: "Invite Landing Page",
                              qr_code: !1,
                          }));
                  },
              }
            : void 0;
    return (
        d.useEffect(() => {
            sD.A.requestDrain();
        }, []),
        (0, u.jsxs)("div", {
            children: [
                (0, u.jsxs)(P.Ay, {
                    children: [
                        null != a
                            ? (0, u.jsx)(lO, { channel: t.channel, guildScheduledEvent: a })
                            : (0, u.jsx)(iq.A, { invite: t }),
                        null != r &&
                            (0, u.jsx)("div", {
                                className: Y.QX,
                                role: "alert",
                                children: (0, u.jsxs)(M.E, {
                                    variant: "text-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, u.jsx)(l4.E, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, sP.s)(r.code),
                                    ],
                                }),
                            }),
                        c
                            ? (0, u.jsx)(sF, {
                                  invite: t,
                                  onClick: i,
                                  className: null != r ? Y.QX : void 0,
                                  notice: h,
                                  secondaryAction: f,
                              })
                            : (0, u.jsx)(sB, {
                                  invite: t,
                                  message: X.intl.string(o ? X.t.fIv16B : X.t.ohMvm1),
                                  onClick: o ? l : i,
                                  className: null != r ? Y.QX : void 0,
                                  notice: h,
                                  secondaryAction: f,
                              }),
                    ],
                }),
                null != a &&
                    null != t.guild &&
                    (0, u.jsx)(P.Ay, {
                        className: Y.QX,
                        children: (0, u.jsx)(lD, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function sW(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e;
    return (0, u.jsxs)(P.Ay, {
        children: [
            (0, u.jsx)(iq.A, { invite: t }),
            lq.VP
                ? (0, u.jsxs)(u.Fragment, {
                      children: [
                          (0, u.jsx)("div", {
                              className: Y.QX,
                              children: (0, u.jsx)(H.$, {
                                  text: X.intl.string(X.t.UQvCf7),
                                  onClick: function () {
                                      (R.default.track(O.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          i ? _.Ay.openNativeAppModal(n) : _.Ay.openApp(n));
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, u.jsx)("div", {
                              className: Y.Ot,
                              children: (0, u.jsx)(H.$, {
                                  text: X.intl.string(X.t["2ixEBi"]),
                                  onClick: function () {
                                      (R.default.track(O.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          l?.());
                                  },
                                  variant: "secondary",
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  })
                : (0, u.jsx)(P.KE, { className: Y.eT }),
        ],
    });
}
function sK(e) {
    let { title: t } = e;
    return (0, u.jsxs)(P.Ay, { children: [(0, u.jsx)(P.hE, { children: t }), (0, u.jsx)(P.CK, {})] });
}
function sQ(e) {
    let { banned: t, invite: n, handleDefaultTransition: i } = e,
        l = l6("InviteInvalid");
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsxs)(P.Ay, {
                children: [
                    (0, u.jsx)(P.hE, { className: V()(Y.Ot, Y.QB), children: X.intl.string(X.t.kux01N) }),
                    (0, u.jsx)(P.tK, { children: t ? X.intl.string(X.t["5AkWAd"]) : X.intl.string(X.t["+qUJAj"]) }),
                    (0, u.jsx)(sB, { message: X.intl.string(X.t.fIv16B), onClick: i }),
                    l === l7.IN_CONTENT && (0, u.jsx)(sl, { inviteCode: n.code, guildId: n.guild?.id }),
                    (0, u.jsx)("div", {
                        className: Y.Ot,
                        style: { textAlign: "left" },
                        children: (0, u.jsx)(em.Q, {
                            size: "sm",
                            textVariant: "text-sm/medium",
                            text: X.intl.string(X.t.urIwn4),
                            onClick: () => window.open(nQ.A.getArticleURL(O.MVz.INVALID_INVITES), "_blank"),
                        }),
                    }),
                ],
            }),
            l === l7.BELOW_CONTENT &&
                (0, u.jsx)(sl, { inviteCode: n.code, guildId: n.guild?.id, className: Y.QX, belowContent: !0 }),
        ],
    });
}
function sz(e) {
    let { invite: t, handleDefaultTransition: n } = e,
        i = l6("InviteContinue");
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsxs)(P.Ay, {
                children: [
                    (0, u.jsx)(P.hE, { children: X.intl.string(X.t.fOc4gn) }),
                    (0, u.jsx)(sB, { message: X.intl.string(X.t.fIv16B), onClick: n }),
                    i === l7.IN_CONTENT && (0, u.jsx)(sl, { inviteCode: t.code, guildId: t.guild?.id }),
                ],
            }),
            i === l7.BELOW_CONTENT &&
                (0, u.jsx)(sl, { inviteCode: t.code, guildId: t.guild?.id, className: Y.QX, belowContent: !0 }),
        ],
    });
}
var sX = n(334465);
let sq = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
p.Ay.initialize();
var sY = n(163050);
p.Ay.initialize();
var s$ = n(701273);
function sZ(e) {
    n.g.location.assign(e);
}
(p.Ay.initialize(), n(426620), p.Ay.initialize());
let sJ = iE(lx),
    s0 = iE(function (e) {
        let { transitionTo: t } = e,
            n = d.useCallback(
                (e) => {
                    let n;
                    ((n = (0, sX.B)(e, { path: O.BVt.CHANNEL(nB.pv.guildId(), nB.pv.channelId()) })),
                    +(n?.params?.channelId !== I.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? G.pX)(e)
                        : G.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, p.cf)([e$.default], () => ({
                isAuthenticated: e$.default.isAuthenticated(),
                loginStatus: e$.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, o] = d.useState(i);
        function c(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            ((0, v.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), o(!1));
        }
        return ((0, l8.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, h.parse)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? y(r) : void 0;
                    a
                        ? A.A.logout("handoff", null).finally(() => {
                              c({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : c({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        a || l === O.aUe.LOGGING_IN)
            ? (0, u.jsx)(P.Ay, { children: (0, u.jsx)(ew.y, {}) })
            : (0, u.jsx)(lx, { ...e, transitionTo: n });
    }),
    s1 = iE(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = d.useMemo(() => (0, eJ.m0)(t), [t]),
            r = (0, p.bG)([te.A], () => te.A.getInvite(t)),
            a = (0, p.bG)([ib.A], () => ib.A.getState(s)),
            o = (0, p.bG)([e$.default], () => e$.default.isAuthenticated()),
            c = (0, p.bG)([eg.A], () => eg.A.defaultRoute),
            h = (0, p.bG)([lv], () => lv.isUnderageAnonymous()),
            m = (function (e) {
                let [t, n] = d.useState(!1);
                return (
                    d.useEffect(() => {
                        let e = !1;
                        return (
                            eS().then((t) => {
                                e || "denied" !== t || n(!0);
                            }),
                            () => {
                                e = !0;
                            }
                        );
                    }, []),
                    t || e === O.fAW.OPEN_FAIL
                );
            })(a),
            g = (function (e) {
                let [t, n] = d.useState(!1);
                return (
                    d.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    !e && !t
                );
            })(m),
            [f, A] = d.useState(!1);
        d.useLayoutEffect(() => {
            (a === O.fAW.OPEN || r?.state === O.elq.APP_OPENED) && A(!0);
        }, [r?.state, a]);
        let E = l ? sU : sG,
            j = d.useCallback((e) => _.Ay.getInviteContext(e, r), [r]),
            v = d.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? _.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : _.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            N = d.useCallback(() => {
                (R.default.track(O.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    _.Ay.acceptInvite({
                        inviteKey: t,
                        context: j(O.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            (er(e), null != e.channel && (m ? v(e) : _.Ay.openApp(t, e.channel.id)));
                        },
                    }).catch(() => {}));
            }, [t, j, r?.code, r?.guild?.id, m, v]),
            C = d.useCallback(() => {
                i(c);
            }, [c, i]);
        if (
            ((0, l8.Ay)(() => {
                let e = e$.default.getAnalyticsToken();
                if (
                    (null != e
                        ? x.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: e$.default.getId() })
                        : e$.default.isAuthenticated() && nH.rQ({ withAnalyticsToken: !0 }).catch(O.tEg),
                    R.default.track(O.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, U.d0)("invite"),
                    lq.VP || eZ.A.launch("discord://" + O.BVt.INVITE(t), () => void 0),
                    !l && h)
                ) {
                    let { baseCode: e } = (0, eJ.y$)(t);
                    (0, G.bG)(O.BVt.INVITE_LOGIN(e));
                }
            }),
            d.useEffect(() => {
                r?.state === O.elq.APP_NOT_OPENED && v();
            }, [r?.state, v]),
            (function (e) {
                let {
                        invite: t,
                        inviteKey: n,
                        authenticated: i,
                        nativeAppState: l,
                        mode: s,
                        getAcceptInviteContext: r,
                        handleContinue: a,
                        transitionTo: o,
                    } = e,
                    c = (0, iK.Ay)(i),
                    u = (0, iK.Ay)(l);
                (d.useEffect(() => {
                    if (s === sU && i && !1 === c) {
                        let e = e$.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eY.d)(e);
                            R.default.track(O.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, eJ.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        _.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(O.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [i, c, s, r, a, t, n]),
                    d.useEffect(() => {
                        if (null != t && s === sG && i && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lU.C)(lF.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, l2.Lt)(t.flags ?? 0, l1.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                O.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                O.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? o(O.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : _.Ay.transitionToInviteOnboarding(t, { transitionTo: o });
                                } else _.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, i, c, o, s, n]),
                    d.useEffect(() => {
                        null == t ||
                            (l !== u &&
                                (l === O.fAW.OPEN
                                    ? R.default.track(
                                          O.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, eJ.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e6.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? to.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === O.fAW.OPEN_FAIL &&
                                      R.default.track(O.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, eJ.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? to.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, u, n]));
            })({
                invite: r,
                inviteKey: t,
                authenticated: o,
                nativeAppState: a,
                mode: E,
                getAcceptInviteContext: j,
                handleContinue: v,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = a === O.fAW.OPEN;
        if (f || I || r.state === O.elq.APP_OPENED)
            return (0, u.jsx)(sW, { invite: r, inviteKey: t, rpcConnected: I, onContinue: v });
        let { state: S } = r;
        if (S === O.elq.APP_NOT_OPENED) return (0, u.jsx)(sz, { invite: r, handleDefaultTransition: C });
        if ([O.elq.RESOLVING, O.elq.ACCEPTING, O.elq.APP_OPENING].includes(S)) {
            let e =
                S === O.elq.ACCEPTING ? X.intl.string(X.t["6wsY16"]) : (O.elq.RESOLVING, X.intl.string(X.t["Z+hCVU"]));
            return (0, u.jsx)(sK, { title: e });
        }
        if (S === O.elq.EXPIRED) return (0, u.jsx)(sQ, { banned: !1, invite: r, handleDefaultTransition: C });
        if (S === O.elq.BANNED) return (0, u.jsx)(sQ, { banned: !0, invite: r, handleDefaultTransition: C });
        if (S === O.elq.RESOLVED) {
            if (o && (0, l2.Lt)(r.flags ?? 0, l1.Q.IS_GUEST_INVITE))
                return (
                    _.Ay.openApp(t),
                    l3.u.set(l5.B, t),
                    (0, u.jsx)(sW, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(O.BVt.APP) })
                );
            if (null != r.type && to.uR.has(r.type) && g)
                return (0, u.jsx)(sK, { title: X.intl.string(X.t["Z+hCVU"]) });
            if (!o && lq.VP)
                return E === sU
                    ? (0, u.jsx)(sV, { invite: r, transitionTo: i, location: n })
                    : (0, u.jsx)(sM, {
                          invite: r,
                          onLoginStart: function () {
                              R.default.track(O.HAw.INVITE_LOGIN, {
                                  invite_code: r?.code,
                                  guild_id: r?.guild?.id,
                                  channel_id: r?.channel?.id,
                                  inviter_id: r?.inviter?.id,
                              });
                          },
                          location: n,
                          transitionTo: i,
                      });
        }
        return S === O.elq.RESOLVED || S === O.elq.ERROR
            ? (0, u.jsx)(sH, {
                  invite: r,
                  inviteKey: t,
                  handleAccept: N,
                  handleDefaultTransition: C,
                  expirationLocation: o ? "InvitePage" : void 0,
              })
            : null;
    }),
    s2 = iE(function (e) {
        let t = {
            guildTemplate: (0, p.bG)([eb.A], () => eb.A.getGuildTemplate(e.code)),
            nativeAppState: (0, p.bG)([ib.A], () => ib.A.getState(e.code)),
            authenticated: (0, p.bG)([e$.default], () => e$.default.isAuthenticated()),
            defaultRoute: (0, p.bG)([eg.A], () => eg.A.defaultRoute),
        };
        return (0, u.jsx)(l$, { ...e, ...t });
    }),
    s3 = iE(lH),
    s4 = iE(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, p.bG)([te.A], () => te.A.getInvite(t));
        return (
            d.useEffect(() => {
                let e = e$.default.getAnalyticsToken();
                (null != e &&
                    x.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: e$.default.getId() }),
                    (0, U.d0)("invite_mobile"),
                    R.default.track(O.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }));
            }, []),
            (0, u.jsx)(nR, {
                invite: i,
                onAcceptInvite: function (e) {
                    nv(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    nv(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    s8 = iE(lV),
    s5 = iE(function (e) {
        let { location: t, transitionTo: i = G.pX } = e,
            [l, s] = d.useState("submitting");
        function r() {
            return "Android" === ez().os.family || "iOS" === ez().os.family
                ? null
                : (0, u.jsx)(H.$, {
                      text: X.intl.string(X.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(O.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, l8.Ay)(() => {
            (0, U.d0)("authorize_ip");
            let e = (0, ep.A)(t);
            null == e
                ? s("failed")
                : (async function () {
                      if (null != e)
                          try {
                              (await A.A.authorizeIPAddress(e), s("succeeded"));
                          } catch (e) {
                              s("failed");
                          }
                  })();
        }),
        "failed" === l)
            ? (0, u.jsxs)(P.Ay, {
                  children: [
                      (0, u.jsx)("img", { alt: "", src: n(792009), className: Y.SX }),
                      (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t["f/54az"]) }),
                      (0, u.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, u.jsxs)(P.Ay, {
                    children: [
                        (0, u.jsx)("img", { alt: "", src: n(841406), className: Y.SX }),
                        (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.iG0SlK) }),
                        (0, u.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, u.jsxs)(P.Ay, {
                    children: [(0, u.jsx)(P.CK, {}), (0, u.jsx)(P.hE, { children: X.intl.string(X.t["9exy+V"]) })],
                });
    }),
    s7 = iE(function (e) {
        let { location: t } = e,
            [i, l] = d.useState("submitting");
        return (d.useEffect(() => {
            (0, U.d0)("authorize_payment");
            let e = (0, ep.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              (await A.A.authorizePayment(e), l("succeeded"));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, u.jsxs)(P.Ay, {
                  children: [
                      (0, u.jsx)("img", { alt: "", src: n(678985), className: Y.SX }),
                      (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.GHRpue) }),
                      (0, u.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, u.jsxs)(P.Ay, {
                    children: [
                        (0, u.jsx)("img", { alt: "", src: n(586430), className: Y.SX }),
                        (0, u.jsx)(P.hE, { className: Y.QB, children: X.intl.string(X.t.ihHX53) }),
                        (0, u.jsx)(P.tK, { className: Y.C2, children: X.intl.string(X.t["pGPCv+"]) }),
                    ],
                })
              : (0, u.jsxs)(P.Ay, {
                    children: [(0, u.jsx)(P.CK, {}), (0, u.jsx)(P.hE, { children: X.intl.string(X.t.T3vC7n) })],
                });
    }),
    s9 = iE(function (e) {
        let { location: t, transitionTo: n = sZ } = e,
            [i, l] = d.useState("submitting"),
            s = d.useRef(void 0);
        (0, l8.Ay)(() => {
            (0, U.d0)("verify_email");
            let e = (0, ep.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              let t = await A.A.verify(e);
                              (l("succeeded"), (s.current = t));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        });
        let r = d.useCallback(() => {
                n(O.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = d.useCallback(() => {
                (R.default.track(O.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, s$.A)("verify_email"));
            }, []);
        return "failed" === i
            ? (0, u.jsx)(eU, {
                  title: X.intl.string(X.t["PCgG3+"]),
                  subtitle: X.intl.string(X.t.tQpeA3),
                  buttonText: X.intl.string(X.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, u.jsx)(eU, {
                    title: X.intl.string(X.t["dAfGb+"]),
                    buttonText: X.intl.string(X.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, u.jsx)(eO, { alt: X.intl.string(X.t["dAfGb+"]) }),
                })
              : (0, u.jsx)(eU, {
                    title: X.intl.string(X.t["0c8+5n"]),
                    subtitle: X.intl.string(X.t.ULTCBE),
                    loading: !0,
                });
    }),
    s6 = iE(function () {
        let [e, t] = d.useState(""),
            [i, l] = d.useState(""),
            [s, r] = d.useState(!1),
            [a, o] = d.useState(!1),
            [c, h] = d.useState(null),
            [m, g] = d.useState(null),
            f = (0, p.bG)([ev.A], () => ev.A.getCountryCode()),
            x = f.code.split(" ")[0];
        async function A() {
            try {
                await e_.A.resendCode(e);
            } catch (e) {
                g(e.body.message);
            }
        }
        async function E() {
            r(!0);
            try {
                let { token: t } = await e_.A.verifyPhone(x + e, i);
                (h(null), g(null), o(!0), e_.A.validatePhoneForSupport(t));
            } catch (e) {
                e.body.message ? (h(null), g(e.body.message)) : (h(e.body.phone), g(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, u.jsxs)(P.Ay, {
            children: [
                (0, u.jsx)(P._V, { src: n(142041) }),
                (0, u.jsxs)(P.hE, {
                    className: V()(Y.QX, eC.Uu, eC.wq, eC.Hu),
                    children: [
                        X.intl.string(X.t.WWzQta),
                        (0, u.jsx)(eE.y, { size: "md", color: "currentColor", className: Y.oY }),
                    ],
                }),
            ],
        });
        return a
            ? _
            : (0, u.jsxs)(P.Ay, {
                  children: [
                      (0, u.jsx)(P.hE, { children: X.intl.string(X.t.o4JNrO) }),
                      (0, u.jsx)(P.tK, { className: Y.Ot, children: X.intl.string(X.t.y0tVbq) }),
                      (0, u.jsxs)(P.eB, {
                          className: Y.QX,
                          children: [
                              (0, u.jsx)(eN.A, {
                                  label: X.intl.string(X.t["eJnn0+"]),
                                  alpha2: f.alpha2,
                                  countryCode: x,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: ej.Pd.PHONE,
                                  error: c,
                              }),
                              (0, u.jsx)(P.pd, {
                                  className: Y.QX,
                                  label: X.intl.string(X.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, u.jsx)(em.Q, { text: X.intl.string(X.t["5b60gi"]), onClick: A }),
                              (0, u.jsx)("div", {
                                  className: Y.QX,
                                  children: (0, u.jsx)(H.$, {
                                      text: X.intl.string(X.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: E,
                                      loading: s,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    re = iE(sY.A),
    rt = iE(iT),
    rn = iE(eA),
    ri = iE(function (e) {
        let { location: t } = e,
            [n, i] = d.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, p.bG)([eH], () => eH.getState());
        function a() {
            let e, t;
            ((e = (function (e) {
                let t = ez().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = e$.default.getFingerprint(),
                        n = (0, eq.I_)();
                    return (
                        eK()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eq.Ay)((0, eX.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eq.X7)(e)) &&
                    R.default.track(O.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eY.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eZ.A.launch(e, (e) => {
                    e || (0, G.bG)(eg.A.fallbackRoute);
                }),
                i(!0));
        }
        return (d.useEffect(() => {
            let e = (0, ep.A)(t);
            (ek.A.verify(e), (0, U.d0)("verify_hub_email"));
        }, [t]),
        n)
            ? (0, u.jsx)(eU, {
                  title: X.intl.string(X.t.csrAMJ),
                  subtitle: X.intl.string(X.t["m1+IBn"]),
                  buttonText: X.intl.string(X.t.fIv16B),
                  onButtonClick: () => (0, G.pX)(O.BVt.CHANNEL(r)),
              })
            : l
              ? (0, u.jsx)(eU, {
                    title: X.intl.string(X.t["dAfGb+"]),
                    buttonText: X.intl.string(X.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, u.jsx)(eO, { alt: X.intl.string(X.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, u.jsx)(eU, {
                      title: X.intl.string(X.t["PCgG3+"]),
                      subtitle: X.intl.string(X.t.tQpeA3),
                      buttonText: X.intl.string(X.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, u.jsx)(eU, {
                      title: X.intl.string(X.t["0c8+5n"]),
                      subtitle: X.intl.string(X.t.ULTCBE),
                      loading: !0,
                  });
    }),
    rl = iE(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, ij.W)(nG.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, u.jsx)(iC, { match: t, location: n, attemptDeepLink: i });
    }),
    rs = iE(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, ij.W)(nG.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, u.jsx)(iC, { match: t, location: n, attemptDeepLink: i });
    }),
    rr = iE(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, ij.W)(nG.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, u.jsx)(iC, { match: t, location: n, attemptDeepLink: i });
    }),
    ra = iE(function (e) {
        let { location: t } = e,
            n = (0, p.bG)([e$.default], () => e$.default.isAuthenticated()),
            i = (0, p.bG)([eT.A], () => eT.A.hasLoadedExperiments),
            l = sq.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = d.useState(!1),
            [a, o] = d.useState(X.intl.string(X.t["9exy+V"])),
            [c, h] = d.useState(!0);
        function m(e) {
            switch (e) {
                case O.t02.INVALID_FORM_BODY:
                case O.t02.DSA_RSL_REPORT_NOT_FOUND:
                    o(X.intl.string(X.t.bzXDfc));
                    break;
                case O.t02.DSA_RSL_ALREADY_REQUESTED:
                    o(X.intl.string(X.t.rV00wq));
                    break;
                case O.t02.DSA_RSL_LIMITED_TIME:
                    o(X.intl.string(X.t["0dI29h"]));
                    break;
                case O.t02.DSA_RSL_REPORT_INELIGIBLE:
                    o(X.intl.string(X.t["RGa/Gb"]));
                    break;
                default:
                    o(X.intl.string(X.t["0QLzfv"]));
            }
        }
        return (
            d.useEffect(() => {
                n
                    ? (h(!0),
                      nH
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            d.useEffect(() => {
                i || l || A.A.getExperiments();
            }, [i, l]),
            d.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, nK.q)(e) : void 0;
                        null != t ? o(X.intl.string(X.t.e6mZMt)) : m(t.body?.code);
                    } catch (e) {
                        m(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                (r(!0), e((0, ep.A)(t)), (0, U.d0)("report_second_look"));
            }, [t]),
            l &&
                !c &&
                (0, u.jsxs)(P.Ay, {
                    children: [(0, u.jsx)(P.hE, { className: Y.QB, children: a }), s && (0, u.jsx)(ew.y, {})],
                })
        );
    }),
    ro = iE(el),
    rc = iE(function (e) {
        let { match: t, location: i } = e,
            l = (0, h.parse)(i.search).token,
            [s, r] = d.useState("loading"),
            a = d.useRef(!1),
            o = d.useCallback(async (e) => {
                try {
                    (R.default.track(O.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await A.A.oneTimeLogin(e),
                        r("login_success"),
                        R.default.track(O.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(O.BVt.APP));
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    (R.default.track(O.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error"));
                }
            }, []),
            c = d.useCallback((e) => {
                let t = e$.default.getFingerprint() ?? e$.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eZ.A.launch(n, (e) => {
                    e
                        ? (R.default.track(O.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          r("app_launched"))
                        : r("app_launch_not_supported");
                });
            }, []),
            m = d.useCallback(
                (e) => {
                    let t = e$.default.getFingerprint() ?? e$.default.getId(),
                        i = e$.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(O.e$_.DEEP_LINK, {
                                type: nG.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (R.default.track(O.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: t,
                                          }),
                                          r("app_launched"))
                                        : c(e);
                                })
                                .catch(() => {
                                    c(e);
                                })
                                .then(() => l.disconnect());
                        });
                },
                [c],
            );
        if (
            (d.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = g.Fr ? "mobile" : g.v1 ? "tablet" : (0, nO.isDesktop)() ? "desktop_app" : "web";
                if ((R.default.track(O.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (g.Fr || g.v1) {
                    let e = R.default.getSuperProperties()?.os;
                    R.default.track(O.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, nO.isDesktop)() ? o(l) : a.current || ((a.current = !0), r("rpc_attempting"), m(l));
            }, [l, i, o, m]),
            g.Fr || g.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, u.jsx)(nP, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, G.MX)()) return null;
        if ("app_launched" === s)
            return (0, u.jsx)(nU, {
                title: X.intl.string(X.t.RvUUOy),
                subtitle: X.intl.string(X.t["5/lR0g"]),
                buttonText: X.intl.string(X.t["2ixEBi"]),
                buttonOnClick: () => {
                    (R.default.track(O.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), o(l));
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, u.jsx)(nU, {
                title: X.intl.string(X.t.qq4tjT),
                subtitle: X.intl.string(X.t.CVxYRo),
                buttonText: X.intl.string(X.t["2ixEBi"]),
                buttonOnClick: () => o(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, u.jsx)(nU, {
                title: X.intl.string(X.t.RtCSr1),
                subtitle: X.intl.string(X.t["S+YjYJ"]),
                buttonText: X.intl.string(X.t.j3cG2p),
                buttonOnClick: () => {
                    (R.default.track(O.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, G.pX)(O.BVt.LOGIN));
                },
            });
        }
        return (0, u.jsx)(P.Ay, { children: (0, u.jsx)(P.CK, {}) });
    });
class ru extends d.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, h.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(O.BVt.ME) || (!(0, f.e)(s) && !ed(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, ir.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, is.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = tt.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        (null != e &&
            (!t && n && A.A.getExperiments(!0),
            null != e$.default.getInstallationForTracking() && (0, ey.Tv)(null),
            R.default.track(
                O.HAw.INVITE_OPENED,
                { invite_code: (0, eJ.m0)(e), load_time: io.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            w.initialize(),
            (0, U.DC)());
    }
    componentDidUpdate(e) {
        (!e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash());
    }
    componentWillUnmount() {
        (null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            w.terminate());
    }
    maybeResolveInvite = () => {
        this.hasTriggeredInviteResolve ||
            null == this.props.inviteKey ||
            ((this.hasTriggeredInviteResolve = !0),
            null != this.experimentFallbackTimeout &&
                (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            this.resolveInvite());
    };
    maybeFetchApplicationSplash() {
        let { invite: e } = this.props;
        if (e?.state === O.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, is.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await _.Ay.resolveInvite(e, O.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: g.Fr || g.v1,
        });
        if (null != t && (er(t), null != t.type && to.uR.has(t.type))) {
            if ("denied" === (await eS()))
                return void R.default.track(O.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, eJ.m0)(e),
                    reason: "lna_denied",
                    invite_type: to.Xd[t.type],
                });
            _.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (R.default.track(
                O.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: io.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eR.A.resolveGuildTemplate(e),
            eR.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            E.Ay.resolveGiftCode(e, !0, !0)
                .then((t) => {
                    null != t && null == t.giftCode.promotion && x.h.wait(() => E.Ay.openNativeGiftCodeModal(e));
                })
                .catch(E.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, u.jsxs)(i_.A, {
            splash: e,
            children: [
                (0, u.jsx)(es.A, { path: O.BVt.LOGIN_HANDOFF, render: (e) => (0, u.jsx)(s0, { ...e, redirectTo: t }) }),
                (0, u.jsx)(es.A, { path: O.BVt.LOGIN_ONE_TIME, render: (e) => (0, u.jsx)(rc, { ...e }) }),
                (0, u.jsx)(es.A, {
                    impressionName: m.ImpressionNames.USER_LOGIN,
                    path: O.BVt.LOGIN,
                    render: (e) => (0, u.jsx)(sJ, { ...e, redirectTo: t }),
                }),
                (0, u.jsx)(es.A, {
                    impressionName: m.ImpressionNames.USER_REGISTRATION,
                    path: O.BVt.REGISTER,
                    render: (e) => (0, u.jsx)(s8, { ...e, redirectTo: t }),
                }),
                (0, u.jsx)(es.A, {
                    path: O.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, u.jsx)(s3, { login: !0, ...e }),
                }),
                (0, u.jsx)(es.A, { path: O.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, u.jsx)(s3, { ...e }) }),
                (0, u.jsx)(es.A, {
                    path: [O.BVt.INVITE_LOGIN(":inviteCode"), O.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, eJ.fB)(t, i.search);
                        return g.Fr || g.v1
                            ? (0, u.jsx)(s4, { inviteKey: s, transitionTo: l }, s)
                            : (0, u.jsx)(
                                  s1,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === O.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, u.jsx)(es.A, {
                    path: [
                        O.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        O.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
                    ],
                    render: (e) => {
                        let {
                            match: {
                                params: { guildTemplateCode: t },
                                path: n,
                            },
                            location: i,
                            transitionTo: l,
                        } = e;
                        return g.Fr || g.v1
                            ? (0, u.jsx)(l0, { code: t }, t)
                            : (0, u.jsx)(s2, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === O.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, u.jsx)(es.A, { path: O.BVt.VERIFY, render: (e) => (0, u.jsx)(s9, { ...e }) }),
                (0, u.jsx)(es.A, { path: O.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, u.jsx)(ri, { ...e }) }),
                (0, u.jsx)(es.A, { path: O.BVt.VERIFY_REQUEST, render: (e) => (0, u.jsx)(s6, { ...e }) }),
                (0, u.jsx)(es.A, { path: O.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, u.jsx)(rt, { ...e }) }),
                (0, u.jsx)(es.A, {
                    path: O.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, u.jsx)(rn, { ...e }),
                }),
                (0, u.jsx)(es.A, { path: O.BVt.AUTHORIZE_IP, render: (e) => (0, u.jsx)(s5, { ...e }) }),
                (0, u.jsx)(es.A, {
                    path: O.BVt.REJECT_IP,
                    render: (e) => (0, u.jsx)(re, { source: O.BVt.REJECT_IP, ...e }),
                }),
                (0, u.jsx)(es.A, {
                    path: O.BVt.REJECT_MFA,
                    render: (e) => (0, u.jsx)(re, { source: O.BVt.REJECT_MFA, ...e }),
                }),
                (0, u.jsx)(es.A, { path: O.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, u.jsx)(s7, { ...e }) }),
                (0, u.jsx)(es.A, { path: O.BVt.RESET, render: (e) => (0, u.jsx)(re, { source: O.BVt.RESET, ...e }) }),
                (0, u.jsx)(es.A, {
                    path: O.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, u.jsx)(rr, { ...e }),
                }),
                (0, u.jsx)(es.A, {
                    path: O.BVt.CHANNELS_GAME_SHOP(nB.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, u.jsx)(rs, { ...e }),
                }),
                (0, u.jsx)(es.A, {
                    path: O.BVt.CHANNEL(nB.pv.guildId(), nB.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, u.jsx)(rl, { ...e }),
                }),
                (0, u.jsx)(es.A, { path: O.BVt.REPORT, render: () => (0, u.jsx)(ii, {}) }),
                (0, u.jsx)(es.A, { path: O.BVt.REPORT_SECOND_LOOK, render: (e) => (0, u.jsx)(ra, { ...e }) }),
                (0, u.jsx)(es.A, { path: O.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, u.jsx)(ro, { ...e }) }),
            ],
        });
    }
}
let rd = p.Ay.connectStores([e$.default, te.A, il.A, eT.A, eb.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, eJ.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: e$.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? il.A.get(s) : null,
        invite: null != l ? te.A.getInvite(l) : null,
        guildTemplate: null != r ? eb.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eT.A.hasLoadedExperiments,
    };
})(ru);
