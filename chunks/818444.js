(n.r(t), n.d(t, { default: () => rA }));
var i,
    l,
    s,
    r,
    a,
    o,
    c,
    u,
    d = n(477900),
    h = n(582128),
    m = n(492462),
    g = n(562708),
    f = n(607399),
    p = n(470562),
    x = n(17928),
    E = n(73153),
    A = n(830215),
    _ = n(869038),
    j = n(376728),
    N = n(636537),
    v = n(6981),
    C = n(376943),
    I = n(718446),
    S = n(746080),
    T = n(355097),
    y =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        (i.GUILD_ANALYTICS_SETTING = "guild_analytics_setting"),
        (i.GAME_CLAIM = "game_claim"),
        i);
function b(e) {
    let t = decodeURIComponent(e),
        n = (0, C.vu)(t);
    return null != n && n.channelId === S.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, I.settingsPathToRoute)(T.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var R = n(115036),
    L = n(174459),
    O = n(272355),
    D = n(652215);
function k(e, t) {
    L.default.track(D.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class w extends O.A {
    _initialize() {
        (E.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            E.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    _terminate() {
        (E.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            E.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? N.Bo.post({ url: D.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      ((0, v.uA)(t.user), A.A.loginToken(t.token, !1), k(!0, l));
                  },
                  (e) => {
                      (null != i && k(!1, l),
                          A.A.setFingerprint(i),
                          (0, v.mZ)(),
                          l === y.ROLE_SUBSCRIPTION &&
                              L.default.track(D.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
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
            i = R.A.key;
        null != i && R.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (A.A.setFingerprint(null), (0, v.J0)());
    };
}
let G = new w();
var P = n(854378),
    U = n(976860),
    B = n(210714),
    F = n(430690),
    V = n(503698),
    M = n.n(V),
    H = n(834730),
    W = n(821609),
    K = n(181658),
    Q = n(625494),
    z = n(499785),
    X = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    q = n(660183),
    Y = n(652989),
    Z = n(221851);
function $(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, a] = h.useState(!1),
        [o, c] = h.useState(null),
        [u, m] = h.useState(null),
        [f, p] = h.useState(""),
        x = h.useRef(null);
    return (
        h.useEffect(() => {
            l && x.current?.focus();
        }, [l]),
        (0, d.jsxs)("div", {
            children: [
                (0, d.jsx)(P._V, { src: null == u ? n(79418) : n(579656), className: M()(Z.SX, Z.Ot) }),
                (0, d.jsx)(P.hE, { children: q.intl.string(q.t.IfBQ56) }),
                null != u && "" !== u
                    ? (0, d.jsx)(H.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: u })
                    : null,
                (0, d.jsxs)(P.eB, {
                    className: M()(Z.SX, Z.QX),
                    children: [
                        (0, d.jsx)(P.pd, {
                            name: "password",
                            type: "password",
                            label: q.intl.string(q.t["8dM4FO"]),
                            setRef: x,
                            className: Z.SX,
                            value: f,
                            onChange: p,
                            error: o,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: q.intl.string(q.t["yY/PXY"]),
                        }),
                        (0, d.jsx)("div", {
                            className: Z.Ot,
                            children: (0, d.jsx)(W.$, {
                                text: q.intl.string(q.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            (c(q.intl.string(q.t.R98xD5)), Q._.dispatch(D.jej.WAVE_EMPHASIZE));
                                            return;
                                        }
                                        return (
                                            null != u && m(null),
                                            null != o && c(null),
                                            t(""),
                                            a(!0),
                                            z.A.post({
                                                url: D.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: f },
                                                trackedActionData: { event: g.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    (p(""), t(n), i(X.SUCCESS));
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        m(
                                                            q.intl.formatToPlainString(q.t.aTVNes, {
                                                                statusPageURL: D.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new K.A(e);
                                                        t.hasFieldErrors()
                                                            ? c(t.getAnyErrorMessage())
                                                            : m(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case D.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return q.intl.string(q.t["11zzGR"]);
                                                                          case D.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return q.intl.string(q.t["6qmgaI"]);
                                                                          case D.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return q.intl.string(q.t.bChnKs);
                                                                          default:
                                                                              return q.intl.format(q.t.aTVNes, {
                                                                                  statusPageURL: D.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    Q._.dispatch(D.jej.WAVE_EMPHASIZE);
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
                (0, d.jsx)("div", {
                    className: Y.UD,
                    children: (0, d.jsx)(W.$, {
                        text: q.intl.string(q.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            (p(""), i(X.START));
                        },
                    }),
                }),
            ],
        })
    );
}
var J = n(825484),
    ee = n(749314);
function et(e) {
    let { children: t } = e;
    return (0, d.jsx)("li", {
        className: Y.Aw,
        children: (0, d.jsx)(H.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function en(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, d.jsxs)("div", {
        children: [
            (0, d.jsx)(P._V, { src: n(79418), className: M()(Z.SX, Z.Ot) }),
            (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t["8UcxI6"]) }),
            (0, d.jsx)(H.E, { variant: "text-md/normal", children: q.intl.string(q.t.O37hMl) }),
            (0, d.jsxs)(P.eB, {
                className: M()(Z.SX, Z.QX),
                children: [
                    (0, d.jsx)(H.E, { variant: "text-sm/normal" }),
                    (0, d.jsxs)("ul", {
                        className: Y.qI,
                        children: [
                            (0, d.jsx)(et, { children: q.intl.string(q.t.Gj1Zry) }),
                            (0, d.jsx)(ee.A, {}),
                            (0, d.jsx)(et, { children: q.intl.string(q.t["8C6t3B"]) }),
                            (0, d.jsx)(ee.A, {}),
                            (0, d.jsx)(et, { children: q.intl.string(q.t.mToZMA) }),
                            (0, d.jsx)(ee.A, {}),
                            (0, d.jsx)(et, { children: q.intl.string(q.t.TPEvkc) }),
                            (0, d.jsx)(ee.A, {}),
                            (0, d.jsx)(et, { children: q.intl.string(q.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, d.jsxs)(J.e, {
                direction: "vertical",
                fullWidth: !0,
                className: Y.UD,
                children: [
                    (0, d.jsx)(W.$, { text: q.intl.string(q.t.GgCRqR), onClick: () => t(X.PASSWORD) }),
                    (0, d.jsx)(W.$, {
                        text: q.intl.string(q.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(D.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function ei(e) {
    let { email: t } = e;
    return (0, d.jsxs)("div", {
        children: [
            (0, d.jsx)(P._V, { src: n(79418), className: M()(Z.SX, Z.Ot) }),
            (0, d.jsx)(P.hE, { children: q.intl.string(q.t.ailkVG) }),
            (0, d.jsx)(P.tK, { children: q.intl.format(q.t["4ZMVCI"], { email: t }) }),
            (0, d.jsx)(H.E, {
                className: M()(Z.QB, Z.QX),
                variant: "text-md/normal",
                children: q.intl.string(q.t["dpAn+8"]),
            }),
        ],
    });
}
function el(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = h.useState(X.START),
        [r, a] = h.useState(null),
        [o, c] = h.useState(""),
        u = { impression_group: g.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, d.jsx)("div", {
        style: { margin: "8px" },
        children: (0, d.jsxs)(F.t, {
            activeSlide: l,
            width: i,
            onSlideReady: a,
            children: [
                (0, d.jsx)(F.q, {
                    id: X.START,
                    impressionProperties: u,
                    impressionName: g.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, d.jsx)(en, { setSlide: s, transitionTo: t }),
                }),
                (0, d.jsx)(F.q, {
                    id: X.PASSWORD,
                    impressionProperties: u,
                    impressionName: g.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, d.jsx)($, {
                        setOriginalEmail: c,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === X.PASSWORD,
                        token: n,
                    }),
                }),
                (0, d.jsx)(F.q, {
                    id: X.SUCCESS,
                    impressionProperties: u,
                    impressionName: g.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, d.jsx)(ei, { email: o }),
                }),
            ],
        }),
    });
}
x.Ay.initialize();
class es extends h.PureComponent {
    static defaultProps = { transitionTo: U.pX, replaceWith: U.bG };
    componentDidMount() {
        (0, B.d0)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, d.jsx)(P.Ay, {
            style: { padding: 0 },
            children: (0, d.jsx)(el, { width: 464, token: e, ...this.props }),
        });
    }
}
var er = n(549711);
function ea(e) {
    E.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
(n(323874), n(14289), n(35956));
var eo = n(132500),
    ec = n(941426);
let eu = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return ("127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href);
}
function eh(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eu;
    try {
        let { origin: i } = new URL(ed(e, t));
        return n
            .map((e) => ed(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return i === t;
            });
    } catch (e) {
        return (new ec.Vy("Auth").error("Failed to check external redirect", e), !1);
    }
}
async function em(e) {
    let t = (0, eo.A)();
    try {
        var n;
        let i,
            l,
            s = (await N.Bo.post({ url: D.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
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
var eg = n(123292),
    ef = n(650048),
    ep = n(149790),
    ex = n(396681);
x.Ay.initialize();
class eE extends h.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, ex.A)(this.props.location),
            t = (0, m.parse)(this.props.location.search);
        (N.Bo.post({
            url: D.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { guild: t },
                    } = e,
                    n = (0, ep.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, B.d0)("disable_server_highlight_notifications"));
    }
    renderBusy() {
        return (0, d.jsx)(P.Ay, { children: (0, d.jsx)(P.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.Z33eiP) }),
                (0, d.jsx)(P.tK, { children: q.intl.format(q.t.NRWtfC, { guildName: n.name }) }),
                (0, d.jsx)("div", {
                    className: Z.eT,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, d.jsx)("div", {
                    className: Z.Ot,
                    children: (0, d.jsx)(eg.Q, {
                        text: q.intl.string(q.t["cGmT/J"]),
                        onClick: () => {
                            t(D.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(37772), className: Z.SX }),
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.ox9hIS) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t["/dcuR5"]) }),
                (0, d.jsx)("div", {
                    className: Z.eT,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let eA = x.Ay.connectStores([ef.A], () => ({ defaultRoute: ef.A.defaultRoute }))(eE);
var e_ = n(628284),
    ej = n(557722),
    eN = n(628387),
    ev = n(148864),
    eC = n(354948);
n(53516);
var eI = n(938442);
let eS = ["loopback-network", "local-network-access"];
async function eT() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eS)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var ey = n(736056),
    eb = n(620233),
    eR = n(122906),
    eL = n(121623),
    eO = n(62617),
    eD = n(31008);
function ek(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s, height: r, className: a, style: o } = e,
        c = h.useMemo(
            () => (0, eO.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 162, style: o }),
            [s, r, o],
        );
    return (0, d.jsx)("img", {
        style: c,
        src: eD.A,
        className: (0, eO.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var ew = n(154672),
    eG = n(331322),
    eP = n(289873),
    eU = n(297264),
    eB = n(47084);
function eF(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, d.jsx)(P.Ay, {
        className: eB.kL,
        children: (0, d.jsxs)(eG.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, d.jsxs)(eG.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, d.jsxs)(eG.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, d.jsx)(eG.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eB.Sl,
                                        children: l,
                                    }),
                                r && (0, d.jsx)(eP.y, { type: eP.y.Type.SPINNING_CIRCLE }),
                                (0, d.jsx)(eU.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, d.jsx)(H.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eB.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, d.jsx)(W.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eV = !1,
    eM = null,
    eH = null;
class eW extends x.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eV, verifyErrors: eM, redirectGuildId: eH };
    }
}
let eK = new eW(E.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((eV = !0), (eM = null), (eH = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((eV = !1), (eM = t));
    },
});
var eQ = n(284009),
    ez = n.n(eQ),
    eX = n(481613),
    eq = n.n(eX),
    eY = n(400253),
    eZ = n(742821),
    e$ = n(80703),
    eJ = n(280450),
    e0 = n(877062);
x.Ay.initialize();
var e1 = n(21599),
    e2 = n(202091),
    e3 = n(717421),
    e4 = n(661531),
    e8 = n(993077),
    e5 = n(235986),
    e7 = n(408738);
function e9(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(P._V, { src: n(431979) }),
            (0, d.jsx)(P.hE, { className: M()(Z.QX, Z.QB, eI.tR), children: q.intl.string(q.t.eL5z0i) }),
            (0, d.jsx)(P.tK, { className: Z.C2, children: q.intl.string(q.t.poAv63) }),
            (0, d.jsxs)(e8.Z, {
                className: e7.Nr,
                type: e8.Z.Types.CUSTOM,
                children: [
                    (0, d.jsx)("img", { alt: "", className: e7.q8, src: n(355912) }),
                    (0, d.jsx)("img", { alt: "", className: e7.dw, src: n(610925) }),
                    (0, d.jsxs)(e5.A, {
                        className: e7.p_,
                        direction: e5.A.Direction.VERTICAL,
                        align: e5.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, d.jsx)(H.E, {
                                tag: "strong",
                                className: e7.p8,
                                variant: "text-md/normal",
                                style: { color: e4.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, d.jsx)("div", {
                                className: e7.x6,
                                children: (0, d.jsx)(W.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e6(e) {
    let { text: t, buttonCta: n, theme: i = D.NJ8.DARK, onClick: l } = e;
    return (0, d.jsx)(P.Ay, { theme: i, children: (0, d.jsx)(e9, { text: t, buttonCta: n, onClick: l }) });
}
var te = n(765671),
    tt = n(71393),
    tn = n(299091),
    ti = n(486020),
    tl = n(403362),
    ts = n(778712),
    tr = n(47167),
    ta = n(769015),
    to = n(714991),
    tc = n(427262),
    tu = n(172799),
    td = n(330936),
    th = n(622625);
function tm(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function tg(e) {
    return e.target_type === tu.yV.STREAM && null != e.target_user;
}
function tf(e) {
    return e.channel?.type === D.rbe.GROUP_DM;
}
function tp(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tx(e) {
    return e.state === D.elq.ACCEPTED;
}
function tE(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tA(e) {
    let t;
    return !tE(e) && (!!tp(e) || (null != e.inviter && !tx(e) && ((t = tm(e)), !((t?.memberCount ?? 0) > 100))));
}
function t_(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, d.jsx)(ta.A, { className: th.Z2, game: i, size: th.q6 })
        : null != n
          ? (0, d.jsx)(P.eu, { src: n.getAvatarURL(void 0, 100), size: ts._3.DEPRECATED_SIZE_100, className: th.my })
          : null != t
            ? (0, d.jsx)(P.$v, { guild: t, size: P.$v.Sizes.LARGER, className: th.$f, animate: !0 })
            : null;
}
function tj(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = tm(t);
    return null == l || tA(t) || t?.guild?.id === td.TA
        ? null
        : (0, d.jsx)(P.R1, {
              className: M()(th.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tN(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = h.useMemo(
            () =>
                n
                    ? null
                    : tg(t) && null != t.target_user
                      ? ti.Ay.getUserAvatarURL(t.target_user)
                      : tA(t) && null != t.inviter
                        ? ti.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = q.intl.string(q.t["3rE1P8"]);
    return (
        tf(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? q.intl.format(q.t.Lu4h18, { username: t.inviter.username })
                      : q.intl.string(q.t.OsdY8B))
            : tg(t) && null != t.target_user
              ? (l = q.intl.formatToPlainString(q.t.x2L32Q, { username: t.target_user.username }))
              : tx(t)
                ? (l = q.intl.string(q.t["FDsl+J"]))
                : tA(t) &&
                  null != t.inviter &&
                  (l = q.intl.format(q.t.spU2mI, { username: tc.Ay.getFormattedName(t.inviter) })),
        (0, d.jsxs)("div", {
            className: th.JB,
            children: [
                null != i &&
                    (0, d.jsx)("div", {
                        className: th._t,
                        children: (0, d.jsx)(P.eu, { src: i, size: ts._3.SIZE_24 }),
                    }),
                (0, d.jsx)(P.tK, { className: th.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tv(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: o } = e,
        c = (0, tr.Ay)(r);
    if (null != s)
        (o && null == a && (t = (0, d.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, d.jsxs)("div", {
                    className: th.JB,
                    children: [
                        (0, d.jsx)(P.tK, { className: th.R9, children: q.intl.string(q.t["3gg9fF"]) }),
                        (0, d.jsxs)("div", {
                            className: th.bo,
                            children: [
                                (0, d.jsx)(P.$v, { guild: s, size: P.$v.Sizes.SMALL }),
                                (0, d.jsx)(eU.D, {
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
        let e = tc.Ay.getFormattedName(l);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, d.jsx)(P.F4, { channel: r, size: ts._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = tc.Ay.getFormattedName(l);
        ((n = q.intl.formatToPlainString(q.t["4aF92R"], { username: e })),
            (i = (0, d.jsx)(P.tK, { className: th.b$, children: q.intl.format(q.t.Quj7HX, { username: e }) })));
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(P.hE, {
                className: th.DD,
                children: [
                    null != s ? (0, d.jsx)(to.A, { guild: s, className: th.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tC = n(395671),
    tI = n(95701),
    tS = n(889227),
    tT = n(945810);
let ty = (0, tT.mj)({
    name: "2026-09-silp-cta-copy-tests",
    kind: "user",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "clarity" }, 2: { variant: "clarity_softer" }, 3: { variant: "low_commitment" } },
});
function tb(e) {
    return null != e && null != e.guild && (null == e.type || e.type === tu.Xd.GUILD);
}
function tR(e) {
    return ty.useConfig({ location: e }).variant;
}
function tL(e) {
    switch (e) {
        case "clarity":
            return q.intl.string(q.t.OqHiIt);
        case "clarity_softer":
            return q.intl.string(q.t["1RFJ5Q"]);
        case "low_commitment":
            return q.intl.string(q.t.JMWqry);
        default:
            return q.intl.string(q.t.ohMvm1);
    }
}
var tO = n(548118),
    tD = n(557582),
    tk = n(167630),
    tw = n(424547);
function tG(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, d.jsxs)("div", {
        className: tw.s4,
        children: [
            (0, d.jsx)(tD.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tw.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, d.jsx)("div", {
                    className: tw.yW,
                    children: (0, d.jsx)(tk.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, d.jsx)("div", {
                className: tw.xG,
                children: (0, d.jsx)(W.$, {
                    variant: "active",
                    size: "md",
                    text: q.intl.string(q.t.riu2R5),
                    onClick: i,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function tP(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, ep.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, d.jsxs)("div", {
        className: tw.kQ,
        children: [
            (0, d.jsx)(eU.D, { className: tw.s7, variant: "text-sm/medium", children: q.intl.string(q.t.Eabu1z) }),
            (0, d.jsxs)("div", {
                className: tw.bo,
                children: [
                    (0, d.jsx)(tO.Ay, { guild: n, active: !0, size: tO.Ay.Sizes.MEDIUM }),
                    (0, d.jsxs)("div", {
                        className: tw.bW,
                        children: [
                            (0, d.jsxs)(H.E, {
                                className: tw.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, d.jsx)(to.A, { guild: n, className: tw.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, d.jsx)(tj, { invite: t, textClassName: tw.kS, className: tw.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, d.jsx)("details", {
                    className: tw.x_,
                    children: (0, d.jsx)(H.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tU(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, d.jsx)(tG, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tB = n(578564);
function tF(e) {
    let { text: t, onClick: n, loading: i } = e;
    return (0, d.jsx)(W.$, { variant: "primary", size: "md", text: t, onClick: n, loading: i, fullWidth: !0 });
}
function tV(e) {
    let t = tR("InviteAcceptMobile");
    return (0, d.jsx)(tF, { ...e, text: tL(t) });
}
function tM(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, ep.DY)(t.guild) : null,
        s = null != t.channel ? (0, tI.OY)(t.channel) : null,
        r = null != t.target_application ? new tC.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tS.A(t.inviter),
        o =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(D.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            tf(t),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case D.elq.ACCEPTING:
                case D.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        u = { invite: t, user: a, guild: l, channel: s, application: r };
    return tE(t)
        ? (0, d.jsx)(tU, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, d.jsxs)("div", {
              className: tB.kL,
              children: [
                  (0, d.jsx)(t_, { application: r, guild: l, user: o || tp(t) ? a : null }),
                  tp(t) ? null : (0, d.jsx)(tN, { ...u, showBigUserIcon: o }),
                  (0, d.jsx)(tv, { ...u, showBigUserIcon: o }),
                  (0, d.jsx)(tj, { ...u }),
                  (0, d.jsx)("div", {
                      className: tB.xG,
                      children: tb(t)
                          ? (0, d.jsx)(tV, { onClick: n, loading: c })
                          : (0, d.jsx)(tF, { text: tL(null), onClick: n, loading: c }),
                  }),
              ],
          });
}
var tH = n(43990),
    tW = n(241524),
    tK = n(573435),
    tQ = n(260509),
    tz = n(370953);
function tX(e) {
    let { guild: t, outline: n } = e,
        i = (0, tW.A)("(max-width: 600px), (max-height: 600px)") ? tO.DN.LARGER : tO.DN.XLARGE,
        l = tO.iu[i],
        s = tO.s[i],
        r = h.useMemo(() => ti.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tQ.Rb)(t),
        o =
            null != r
                ? (0, d.jsx)("img", { src: r, alt: "", className: tz.OV })
                : (0, d.jsx)("div", {
                      className: tz.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, d.jsx)("div", {
              className: M()(tz._C, tz.AY),
              children: (0, d.jsx)(tK.Ay, {
                  mask: tK.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, d.jsx)("div", {
                      className: tz.$d,
                      children: (0, d.jsx)(tK.Ay, { mask: tK.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
                  }),
              }),
          })
        : (0, d.jsx)("div", {
              className: tz._C,
              children: (0, d.jsx)(tK.Ay, { mask: tK.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
          });
}
var tq = n(927813);
let tY = /\.$/;
function tZ(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tY, ""))
              .join(". ")
              .trim()
        : e;
}
function t$(e) {
    let [t, n] = h.useState(() => null != e && !e),
        [i, l] = h.useState(e);
    return (null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n]);
}
function tJ() {
    let [e, t] = h.useState(!1),
        n = h.useRef(null);
    return (
        h.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            h.useCallback((e) => {
                (null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        (t(!1), (n.current = null));
                    }, e * tq.A.Millis.SECOND)));
            }, []),
        ]
    );
}
var t0 = n(153488),
    t1 = n(95477),
    t2 = n(866665),
    t3 = n(913122),
    t4 = n(934337),
    t8 = n(15552),
    t5 = n(536637),
    t7 = n.n(t5),
    t9 = n(955437),
    t6 = n(888548),
    ne = n(831167);
n(861807);
var nt = n(569717),
    nn = n(204925);
function ni(e) {
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
    if ((E.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        ((0, nt.A)(o, D.JJy.REGISTER),
            L.default.track(D.HAw.AGE_GATE_ACTION, { source: nn.w_.REGISTER, action: nn.AM.AGE_GATE_SUBMITTED }),
            (e = t7()().diff(o, "years")) < 13 ||
                L.default.track(D.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                }));
    }
    return z.A.post({
        url: D.Rsh.REGISTER,
        body: {
            fingerprint: eJ.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: null != o ? (0, ne.A)(o) : void 0,
            gift_code_sku_id: u,
            guild_template_code: a,
            promotional_email_opt_in: d?.checked,
        },
        trackedActionData: {
            event: g.NetworkActionNames.USER_REGISTER,
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
            (E.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                E.h.dispatch({
                    type: "GUARDIAN_CONNECT_REQUIRED",
                    shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
                }),
                L.default.track(D.HAw.AGE_GATE_ACTION, { source: nn.w_.REGISTER, action: nn.AM.AGE_GATE_SUCCESS }));
        },
        (e) => {
            if (e instanceof t6.CaptchaCancelError) throw e;
            let t = new K.A(e);
            throw (
                null != t.getFieldErrors("date_of_birth") && t9.Xv(nn.w_.REGISTER),
                L.default.track(D.HAw.REGISTER_SUBMIT_ERRORED, {
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
var nl = n(568385),
    ns = n(975639);
function nr(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, d.jsx)("div", {
              className: ns.IQ,
              children: (0, d.jsx)(nl.J, {
                  label: q.intl.format(q.t.qMDAP0, { termsURL: D.X7G.TERMS, privacyURL: D.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, d.jsx)(H.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: M()(Z.Ot, ns.E2),
              children: q.intl.format(q.t["KI+BSb"], { termsURL: D.X7G.TERMS, privacyURL: D.X7G.PRIVACY }),
          });
}
let na = (0, tT.mj)({
    kind: "installation",
    name: "2026-09-registration-email-opt-in-copy",
    defaultConfig: { trackingCopy: !1 },
    variations: { 1: { trackingCopy: !0 } },
});
function no() {
    let { required: e, checked: t } = (0, t4.mZ)(),
        n = (function (e, t) {
            let { trackingCopy: n } = na.useConfig({ location: t });
            return q.intl.string(n ? q.t.LSoXK5 : e);
        })(q.t["0p3R0+"], "REGISTER_PROMO_EMAIL_CHECKBOX_WEB");
    return e
        ? (0, d.jsx)("div", {
              className: Z.Ot,
              children: (0, d.jsx)(nl.J, { label: n, checked: t, onChange: t4.Bw, labelType: "secondary" }),
          })
        : null;
}
var nc = n(890251);
function nu(e) {
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
            onPasswordChange: u,
            onConsentChange: m,
            onApiErrors: g,
            onOpenApp: f,
            onRegister: p,
        } = e,
        [x, E] = h.useState(!1),
        [A, _] = tJ(),
        j = null != a && r,
        N = h.useRef(null),
        v = h.useRef(null);
    function C(e) {
        L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function I(e) {
        L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    h.useEffect(() => {
        N.current?.focus();
    }, []);
    let S = l.length > 0 && s.length > 0,
        T = h.useCallback(async () => {
            let e = t4.mZ.getState();
            (E(!0), g({}));
            try {
                (await ni({
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
                if ((E(!1), !(t instanceof t3.LG))) return;
                let e = (0, t8.W)(t);
                (g(e),
                    null != e.email || null != e.phone ? N.current?.focus() : null != e.password && v.current?.focus(),
                    "number" == typeof e.retry_after && _(e.retry_after));
            }
        }, [t, l, n, s, i, r, g, p, _]),
        y = h.useCallback(
            (e) => {
                (e.preventDefault(), null != a && S && T());
            },
            [a, S, T],
        ),
        { message: b } = o;
    return (0, d.jsxs)("form", {
        onSubmit: y,
        children: [
            (0, d.jsx)("div", {
                className: Z.SX,
                children: (0, d.jsx)(t1.k, {
                    label: q.intl.string(q.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: c,
                    error: tZ(o.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: N,
                    onFocus: () => C("email"),
                    onBlur: () => I("email"),
                }),
            }),
            (0, d.jsx)(t1.k, {
                label: q.intl.string(q.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: u,
                error: tZ(o.password),
                type: "password",
                autoComplete: "new-password",
                inputRef: v,
                onFocus: () => C("password"),
                onBlur: () => I("password"),
            }),
            (0, d.jsx)(no, {}),
            (0, d.jsx)(nr, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, d.jsx)(t2.m, {
                text: !r && a ? q.intl.string(q.t.AY4IVA) : null,
                children: (0, d.jsx)("div", {
                    className: Z.QX,
                    children: (0, d.jsx)(W.$, {
                        text: q.intl.string(q.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !j || A || !S,
                    }),
                }),
            }),
            "string" == typeof b ? (0, d.jsx)(P.ME, { className: M()(Z.QX, ns.gJ), children: b }) : null,
            (0, d.jsx)("div", {
                className: nc.o3,
                children: (0, d.jsx)(eg.Q, {
                    text: q.intl.string(q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function nd(e) {
    let { guild: t } = e,
        n =
            ti.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? ti.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, d.jsx)("div", { className: nc.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function nh(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, ep.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, d.jsxs)("header", {
              children: [
                  (0, d.jsx)(nd, { guild: i }),
                  (0, d.jsxs)("div", {
                      className: nc.lu,
                      children: [
                          (0, d.jsx)("div", { className: nc.LJ, children: (0, d.jsx)(tX, { guild: i, outline: !0 }) }),
                          (0, d.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n ?? q.intl.string(q.t["3rE1P8"]),
                          }),
                          (0, d.jsxs)("div", {
                              className: nc.G1,
                              children: [
                                  (0, d.jsx)(eU.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: nc.qd,
                                      children: i.name,
                                  }),
                                  (0, d.jsx)(to.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, d.jsx)(tj, { invite: t }),
                      ],
                  }),
                  (0, d.jsx)("div", { className: nc.yF }),
              ],
          });
}
var nm = n(201505);
n(801541);
var ng = n(889137),
    nf = n(546727),
    np = n(5052),
    nx = n(446837);
let nE = window.ResizeObserver ?? nx.t;
function nA(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = h.useRef(null),
                [t, n] = h.useState(0),
                i = h.useMemo(
                    () =>
                        new nE((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                h.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        a = (0, e3.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        o = (0, e3.z)({
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
    return (0, d.jsx)(e2.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, d.jsx)(e2.animated.div, { style: { opacity: o.opacity }, ref: s, children: n }),
    });
}
function n_(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, np.i)(n, !0, !0),
        o = n.length > 0;
    return (
        (t = o
            ? (0, ng.YW)(a)
                  .with({ type: nf.q.ERROR, message: ng.P.select() }, (e) =>
                      (0, d.jsx)(H.E, { className: ns.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: nf.q.AVAILABLE, message: ng.P.select() }, (e) =>
                      (0, d.jsx)(H.E, { className: ns.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, d.jsx)(H.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: q.intl.string(q.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, d.jsx)(H.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: q.intl.format(q.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, d.jsx)(H.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: q.intl.string(q.t.z7c4bP),
                })),
        (0, d.jsx)(nA, { show: (o && a?.type === nf.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function nj(e) {
    let {
            username: t,
            parsedDateOfBirth: n,
            apiErrors: i,
            onUsernameChange: l,
            onDateOfBirthChange: s,
            onNext: r,
            onOpenApp: a,
        } = e,
        [o, c] = h.useState(!1),
        u = h.useRef(null);
    function m(e) {
        L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    h.useEffect(() => {
        null != i.username && u.current?.focus();
    }, []);
    let f = t.length > 0 && null != n;
    return (0, d.jsxs)("form", {
        onSubmit: function (e) {
            (e.preventDefault(), f && r());
        },
        children: [
            (0, d.jsxs)("div", {
                onBlur: () => c(!1),
                onFocus: () => c(!0),
                tabIndex: -1,
                children: [
                    (0, d.jsx)("div", {
                        className: Z.SX,
                        children: (0, d.jsx)(t1.k, {
                            label: q.intl.string(q.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: tZ(i.username),
                            autoComplete: "off",
                            inputRef: u,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, d.jsx)(n_, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: o,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, d.jsx)(nm.A, {
                label: q.intl.string(q.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tZ(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, d.jsx)("div", {
                className: Z.QX,
                children: (0, d.jsx)(W.$, {
                    text: q.intl.string(q.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, d.jsx)("div", {
                className: nc.o3,
                children: (0, d.jsx)(eg.Q, {
                    text: q.intl.string(q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function nN(e) {
    let { invite: t, onOpenApp: n } = e,
        i = null != t.guild ? (0, ep.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, d.jsxs)(d.Fragment, {
              children: [
                  null != i ? (0, d.jsx)(nd, { guild: i }) : null,
                  (0, d.jsxs)("div", {
                      className: nc.zY,
                      children: [
                          (0, d.jsxs)("div", {
                              className: nc.rL,
                              children: [
                                  (0, d.jsx)(tX, { guild: i }),
                                  (0, d.jsx)(eU.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: nc.Rw,
                                      children: q.intl.format(q.t["33M5bg"], { guildName: i?.name ?? "" }),
                                  }),
                                  (0, d.jsx)(H.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: nc.Ap,
                                      children: q.intl.string(q.t["7N4JkE"]),
                                  }),
                                  (0, d.jsx)("div", {
                                      className: nc.S7,
                                      children: (0, d.jsx)(W.$, {
                                          variant: "primary",
                                          size: "md",
                                          text: q.intl.string(q.t["n+VrqG"]),
                                          onClick: n,
                                      }),
                                  }),
                              ],
                          }),
                          (0, d.jsx)("div", {
                              className: nc.NG,
                              children: (0, d.jsx)("img", {
                                  alt: "",
                                  src: "https://cdn.discordapp.com/assets/content/55b848b6c57bf51009a1bdaa4465a9e8d79026b8b92889b0ea90a00475f19257.webp",
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function nv(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = h.useState(0),
        [r, a] = h.useState(""),
        [o, c] = h.useState(null),
        [u, m] = h.useState(""),
        [g, f] = h.useState(""),
        [p, E] = h.useState({}),
        _ = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        [j, N] = t$(_),
        [v, C] = h.useState(!1),
        I = h.useRef(null);
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
    function O(e) {
        (f(e), y("password"));
    }
    return (
        h.useEffect(() => {
            A.A.getLocationMetadata();
        }, []),
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsx)("div", {
                    ref: I,
                    "data-theme": D.NJ8.DARK,
                    className: M()(nc.MY, e),
                    children: v
                        ? (0, d.jsx)(nN, { invite: t, onOpenApp: i })
                        : (0, d.jsxs)(d.Fragment, {
                              children: [
                                  (0, d.jsx)(nh, { invite: t, kicker: 1 === l ? q.intl.string(q.t.dzGILG) : void 0 }),
                                  (0, d.jsx)("div", {
                                      className: nc.rf,
                                      children:
                                          0 === l
                                              ? (0, d.jsx)(nj, {
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    apiErrors: p,
                                                    onUsernameChange: b,
                                                    onDateOfBirthChange: R,
                                                    onNext: () => S(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, d.jsx)(nu, {
                                                    invite: t,
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    email: u,
                                                    password: g,
                                                    consent: j,
                                                    consentRequired: _,
                                                    apiErrors: p,
                                                    onEmailChange: L,
                                                    onPasswordChange: O,
                                                    onConsentChange: N,
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
var nC = n(127982);
function nI(e, t, n, i) {
    (e?.preventDefault(),
        L.default.track(
            D.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, e1.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? tu.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != tt.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        ));
    let l = null != n && n.state !== D.elq.EXPIRED && n.state !== D.elq.BANNED ? t : void 0,
        s = eJ.default.getFingerprint(),
        r = null != s ? s : eJ.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    j.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nS() {
    return (0, d.jsx)("div", { className: nC.$k, children: (0, d.jsx)(eP.y, {}) });
}
function nT(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case D.elq.RESOLVED:
        case D.elq.ACCEPTED:
        case D.elq.APP_NOT_OPENED:
        case D.elq.APP_OPENED:
        case D.elq.ACCEPTING:
        case D.elq.APP_OPENING:
            return 1;
        case D.elq.EXPIRED:
        case D.elq.BANNED:
        case D.elq.ERROR:
            return 2;
        case D.elq.RESOLVING:
            return 0;
        default:
            (0, tl.xb)(n);
    }
}
function ny(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === D.elq.BANNED
        ? (0, d.jsx)(e9, { text: q.intl.string(q.t["5AkWAd"]), buttonCta: q.intl.string(q.t["8osdkn"]), onClick: n })
        : (0, d.jsx)(e9, { text: q.intl.string(q.t["usP+Mb"]), buttonCta: q.intl.string(q.t["8osdkn"]), onClick: n });
}
function nb(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = nC.qF } = e,
        { ref: r, height: a } = (0, te.Ay)(),
        o = (0, e3.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: e2.config.stiff });
    return (0, d.jsxs)(e2.animated.div, {
        className: s,
        style: o,
        children: [
            (0, d.jsx)(e2.animated.div, {
                className: nC.NS,
                style: o,
                children: (0, d.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function nR(e) {
    let { invite: t } = e;
    if (null == t || !tE(t)) return null;
    let n = nT(t);
    return (0, d.jsx)(nb, {
        startAnimHeightPx: 0,
        sectionClassName: nC.ui,
        children: 1 === n ? (0, d.jsx)(tP, { invite: t }) : null,
    });
}
let nL = { 1: nC._r, 2: nC.Gm, 0: nC.Kt };
function nO(e) {
    let t,
        { invite: n } = e,
        i = nT(n),
        l = h.useRef(!1);
    if (
        (h.useEffect(() => {
            l.current ||
                (null != n &&
                    1 === i &&
                    ((l.current = !0),
                    L.default.track(D.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, d.jsx)(nS, {});
    else
        switch (i) {
            case 1:
                t = (0, d.jsx)(tM, { ...e, invite: n });
                break;
            case 2:
                t = (0, d.jsx)(ny, { ...e, invite: n });
                break;
            default:
                t = (0, d.jsx)(nS, {});
        }
    return (0, d.jsx)(nb, { startAnimHeightPx: 200, sectionClassName: nL[i], inviteCardClassName: nC.qF, children: t });
}
function nD(e) {
    let { invite: t } = e,
        [n, i] = h.useState(null);
    return (h.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nT(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !eJ.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, d.jsx)(nv, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, d.jsx)(nk, { ...e });
}
function nk(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {};
    if (i?.splash != null) {
        let e = ti.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    }
    return (0, d.jsxs)(P.Ay, {
        theme: D.NJ8.DARK,
        className: nC.G3,
        style: l,
        contentClassName: nC.__,
        children: [(0, d.jsx)(nO, { ...e, onAcceptInvite: n }), (0, d.jsx)(nR, { ...e })],
    });
}
var nw = n(723702);
function nG(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s, height: r, className: a, style: o } = e,
        c = h.useMemo(
            () => (0, eO.H)({ width: s, height: r, intrinsicWidth: 288, intrinsicHeight: 192, style: o }),
            [s, r, o],
        );
    return (0, d.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        className: (0, eO.Z)(a),
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nP = n(474545),
    nU = n(604880);
function nB(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, d.jsxs)("div", {
              className: nP.MY,
              children: [
                  (0, d.jsx)("div", { className: nP.r$, children: (0, d.jsx)("img", { src: nU, alt: "" }) }),
                  (0, d.jsxs)("div", {
                      className: nP.Qs,
                      children: [
                          (0, d.jsx)(nG, { alt: "" }),
                          (0, d.jsx)(eU.D, {
                              variant: "heading-lg/semibold",
                              className: nP.ky,
                              children: q.intl.string(q.t.RtCSr1),
                          }),
                          (0, d.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: nP.G3,
                              children: q.intl.string(q.t["S+YjYJ"]),
                          }),
                          (0, d.jsx)(W.$, {
                              variant: "primary",
                              text: q.intl.string(q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  (L.default.track(D.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, U.pX)(D.BVt.LOGIN));
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, d.jsxs)("div", {
              className: nP.MY,
              children: [
                  (0, d.jsx)("div", { className: nP.r$, children: (0, d.jsx)("img", { src: nU, alt: "" }) }),
                  (0, d.jsxs)("div", {
                      className: nP.Qs,
                      children: [
                          (0, d.jsx)(nG, { alt: "" }),
                          (0, d.jsx)(eU.D, {
                              variant: "heading-lg/semibold",
                              className: nP.ky,
                              children: q.intl.string(q.t["9h/0Rl"]),
                          }),
                          (0, d.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: nP.G3,
                              children: q.intl.string(q.t.Wgm7Om),
                          }),
                          (0, d.jsx)(W.$, {
                              variant: "primary",
                              text: q.intl.string(q.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  ((e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eJ.default.getFingerprint(),
                                              n = (0, eZ.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eZ.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eZ.X7)(e)),
                                      L.default.track(D.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: f.Fr ? "mobile" : "tablet",
                                          platform: L.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          L.default.track(D.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, e$.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      e0.A.launch(e, (e) => {
                                          e || (0, U.bG)({ pathname: D.BVt.LOGIN });
                                      }));
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nF = n(613057);
function nV(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, d.jsx)(P.Ay, {
        children: (0, d.jsxs)(eG.B, {
            gap: 24,
            children: [
                (0, d.jsxs)(eG.B, {
                    gap: 8,
                    children: [(0, d.jsx)(P.hE, { children: t }), (0, d.jsx)(P.tK, { children: n })],
                }),
                (0, d.jsx)(W.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var nM = n(463347),
    nH = n(189213),
    nW = n(192308),
    nK = n(347704),
    nQ = n(803306),
    nz = n(17372),
    nX = n(369053),
    nq = n(975571),
    nY = n(928658);
async function nZ(e, t) {
    try {
        await (0, nX.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: q.intl.string(q.t.Z2hIUf) } };
        throw e;
    }
}
function n$(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return nZ(e, s);
        }
        async function a(t) {
            return await (0, nX.G_)(e, s, t);
        }
        function o(n) {
            ((i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0));
            let l = n?.token;
            switch (e) {
                case nz.tY.MESSAGE:
                    (0, nY.bM)(l, t);
                    break;
                case nz.tY.USER:
                    (0, nY.nQ)(l, t);
                    break;
                case nz.tY.GUILD:
                    (0, nY.V3)(l, t);
                    break;
                case nz.tY.MEDIA_TAKEDOWN:
                    (0, nY._Y)(l, t);
            }
        }
        ((i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nW.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("932606"), n.e("919840")]).then(n.bind(n, 79779));
                    return (t) =>
                        (0, d.jsx)(e, {
                            ...t,
                            onFormSubmit: a,
                            onResend: r,
                            onSuccess: o,
                            headerText: q.intl.string(q.t.H3Q7U8),
                            confirmButtonText: q.intl.string(q.t["13ofGu"]),
                            impression: { impressionName: g.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    }
    return function () {
        function t(t) {
            return nZ(e, t);
        }
        ((0, nW.closeAllModals)(),
            (0, nW.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("429232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, d.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: q.intl.string(q.t.ZLRYGU),
                            confirmButtonText: q.intl.string(q.t.PDTjLN),
                            subtitle: e === nz.tY.MEDIA_TAKEDOWN ? q.intl.string(q.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    };
}
var nJ = n(939249),
    n0 = n(921853),
    n1 = n(43008);
let n2 = { [nz.tY.MESSAGE]: q.t.fuqnBC, [nz.tY.USER]: q.t.F4jrRW, [nz.tY.GUILD]: q.t.gH3aMs },
    n3 = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = h.useCallback(() => {
                n$(n, i)();
            }, [n, i]);
        return (0, d.jsxs)(nJ.D, {
            className: n1.b0,
            onClick: l,
            children: [
                (0, d.jsx)(H.E, { variant: "text-md/medium", children: t }),
                (0, d.jsx)(n0.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    n4 = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, d.jsx)(eG.B, {
            gap: 16,
            children: (0, d.jsx)("div", {
                className: n1.kL,
                children: t.map((e) =>
                    e === nz.tY.MEDIA_TAKEDOWN || null == n2[e]
                        ? null
                        : (0, d.jsx)(n3, { title: q.intl.string(n2[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var n8 = n(881636);
let n5 = "https://stopncii.org/partners/global-network-of-partners/",
    n7 = {
        [nz.sl.TIDA]: {
            selectionLabel: q.t.jMSjZL,
            selectionDescription: q.t.qEaUPS,
            helpBody: q.t.R2Q57u,
            supportOrgURL: n5,
        },
        [nz.sl.UK_STOPNCII]: {
            selectionLabel: q.t.jMSjZL,
            selectionDescription: q.t.J0tNny,
            helpBody: q.t.R2Q57u,
            supportOrgURL: n5,
        },
        [nz.sl.BRAZIL_ONLINE_SAFETY_OF_WOMEN]: {
            selectionLabel: q.t.jMSjZL,
            selectionDescription: q.t.nYb8xq,
            helpBody: q.t.rtm4DR,
            supportOrgURL: "https://discord.findahelpline.com/countries/br",
        },
    };
function n9(e) {
    return (0, nz.c7)(e) ? n7[e] : n7[nz.sl.TIDA];
}
var n6 = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s),
    ie = n(138658);
let it = (e) => {
    let { mediaTakedownRegulation: t } = e,
        { goToStep: n } = (0, nK.n)(),
        { selectionLabel: i, selectionDescription: l } = n9(t),
        s = h.useCallback(() => {
            n(n6.DSA);
        }, [n]),
        r = h.useCallback(() => {
            n(n6.TIDA);
        }, [n]);
    return (0, d.jsxs)(eG.B, {
        gap: 8,
        children: [
            (0, d.jsx)(H.E, { variant: "text-md/normal", children: q.intl.string(q.t.bd1h5T) }),
            (0, d.jsxs)("div", {
                className: ie.k,
                children: [
                    (0, d.jsxs)(nJ.D, {
                        className: ie.b,
                        onClick: s,
                        children: [
                            (0, d.jsxs)("div", {
                                children: [
                                    (0, d.jsx)(H.E, {
                                        variant: "text-md/medium",
                                        children: q.intl.string(q.t["AszWL/"]),
                                    }),
                                    (0, d.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: q.intl.string(q.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, d.jsx)(n8.u, { size: "sm" }),
                        ],
                    }),
                    (0, d.jsxs)(nJ.D, {
                        className: ie.b,
                        onClick: r,
                        children: [
                            (0, d.jsxs)("div", {
                                children: [
                                    (0, d.jsx)(H.E, { variant: "text-md/medium", children: q.intl.string(i) }),
                                    (0, d.jsx)(H.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: q.intl.string(l),
                                    }),
                                ],
                            }),
                            (0, d.jsx)(n8.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var ii = n(108124);
let il = (e) => {
    let { helpBody: t, supportOrgURL: n } = e;
    return (0, d.jsxs)(eG.B, {
        gap: 24,
        children: [
            (0, d.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: q.intl.string(q.t["3zG2Y9"]),
            }),
            (0, d.jsxs)(eG.B, {
                gap: 16,
                children: [
                    (0, d.jsxs)(eG.B, {
                        gap: 8,
                        children: [
                            (0, d.jsx)(H.E, { variant: "text-md/semibold", children: q.intl.string(q.t.CfBo0z) }),
                            (0, d.jsxs)("ul", {
                                className: ii.T,
                                children: [
                                    (0, d.jsx)("li", {
                                        children: (0, d.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: q.intl.string(q.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, d.jsx)("li", {
                                        children: (0, d.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: q.intl.string(q.t.dFaQGn),
                                        }),
                                    }),
                                    (0, d.jsx)("li", {
                                        children: (0, d.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: q.intl.string(q.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, d.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: q.intl.string(q.t.o5azXJ),
                    }),
                    (0, d.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: q.intl.format(q.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, d.jsxs)(eG.B, {
                gap: 8,
                children: [
                    (0, d.jsx)(H.E, { variant: "text-md/semibold", children: q.intl.string(q.t.FJh2zi) }),
                    (0, d.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: q.intl.format(t, {
                            supportOrgURL: n,
                            wellbeingURL: "https://discord.com/safety-wellbeing",
                            helpCenterURL: "https://support.discord.com/hc/articles/38675715591831",
                        }),
                    }),
                ],
            }),
        ],
    });
};
var is = n(379492);
x.Ay.initialize();
let ir = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = h.useState(!0),
            [s, r] = h.useState([]),
            [a, o] = h.useState(null),
            [c, u] = h.useState(null),
            m = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            g = (0, x.bG)([ey.A], () => ey.A.hasLoadedExperiments),
            f = h.useCallback(() => {
                (0, nX.OY)()
                    .then((e) => {
                        let { capabilities: t, media_takedown_regulation: n } = e;
                        (l(!1), r(t), o(n));
                    })
                    .catch(() => {
                        (l(!1), r([]), o(null));
                    });
            }, []);
        (h.useEffect(() => {
            m
                ? (l(!0),
                  nQ
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => f())
                      .catch(() => l(!1)))
                : f();
        }, [m, f]),
            h.useEffect(() => {
                !(async function () {
                    g || (await A.A.getLocationMetadata(), A.A.getExperiments());
                })();
            }, [g]));
        let { helpBody: p, supportOrgURL: E } = n9(a),
            _ = s.filter((e) => e !== nz.tY.MEDIA_TAKEDOWN),
            j = s.includes(nz.tY.MEDIA_TAKEDOWN),
            N = _.length > 0,
            v = N && j,
            C = i || !g;
        h.useEffect(() => {
            C || N || j || n();
        }, [C, N, j, n]);
        let I = h.useCallback(() => {
                (0, nW.openModalLazy)(() => Promise.resolve((e) => (0, d.jsx)(ir, { ...e })), { dismissable: !1 });
            }, []),
            S = h.useCallback((e, t) => {
                t !== n6.SELECTION && e !== n6.SELECTION ? u(n6.SELECTION) : u(e);
            }, []),
            T = h.useMemo(() => n$(nz.tY.MEDIA_TAKEDOWN, I), [I]),
            y = c ?? (v ? n6.SELECTION : N ? n6.DSA : n6.TIDA);
        if (C || (!N && !j))
            return (0, d.jsx)(nH.a, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, d.jsx)(eG.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, d.jsx)(eP.y, {}),
                }),
            });
        if (!v) {
            if (N)
                return (0, d.jsx)(nH.a, {
                    title: q.intl.string(q.t.Z11w18),
                    subtitle: q.intl.format(q.t["532l+q"], {
                        supportURL: nq.A.getArticleURL(D.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, d.jsx)(n4, { dsaCapabilities: _, onReopen: I }),
                });
            if (j)
                return (0, d.jsx)(nH.a, {
                    title: q.intl.string(q.t.YignUm),
                    actions: [{ text: q.intl.string(q.t.D5Czbu), variant: "primary", onClick: T }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, d.jsx)(il, { helpBody: p, supportOrgURL: E }),
                });
        }
        let b = [
            {
                stepKey: n6.SELECTION,
                modalProps: { title: q.intl.string(q.t.Z11w18) },
                body: (0, d.jsx)(it, { mediaTakedownRegulation: a }),
            },
            {
                stepKey: n6.DSA,
                modalProps: {
                    title: q.intl.string(q.t.Z11w18),
                    subtitle: q.intl.format(q.t["532l+q"], {
                        supportURL: nq.A.getArticleURL(D.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, d.jsx)(n4, { dsaCapabilities: _, onReopen: I }),
            },
            {
                stepKey: n6.TIDA,
                modalProps: { title: q.intl.string(q.t.YignUm) },
                body: (0, d.jsx)(il, { helpBody: p, supportOrgURL: E }),
                nextButtonProps: { text: q.intl.string(q.t.D5Czbu) },
                onNext: () => (T(), !1),
            },
        ];
        return (0, d.jsx)("div", {
            className: { [n6.SELECTION]: is.a, [n6.DSA]: is.q, [n6.TIDA]: void 0 }[y],
            children: (0, d.jsx)(nK.t, {
                steps: b,
                currentStepKey: y,
                onStepChange: S,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    ia = () => (
        h.useEffect(() => {
            (0, nW.openModalLazy)(() => Promise.resolve((e) => (0, d.jsx)(ir, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var io = n(30793),
    ic = n(970928),
    iu = n(612181),
    id = n(179689);
let ih = {
    dump(e) {
        let t;
        (null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eq().name, version: eq().version },
                os: { name: eq().os?.family, version: eq().os?.version },
                memory: t,
            }));
    },
    getTimeSinceNavigationStart: () => Date.now() - id.fL,
};
var im = n(649852),
    ig = n.n(im),
    ip = n(615300),
    ix = n(319060),
    iE = n(844222),
    iA = n(240248),
    i_ = n(706192);
let ij = (0, iA.xI)(ix.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    iN = { friction: 10, tension: 130 },
    iv = function (e) {
        return class extends h.Component {
            timeout;
            anim = new ip.A.Value(0);
            state = { shouldAnimate: !f.Fr };
            componentDidMount() {
                f.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > ij;
                (!this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e }));
            };
            handleResizeDebounced = ig()(this.handleResize, 60);
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
                ip.A.spring(this.anim, { toValue: e, ...iN }).start(t);
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
                return (0, d.jsx)("div", {
                    className: i_.i,
                    children: (0, d.jsx)(iE.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, d.jsx)(ip.A.div, {
                                className: i_.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, d.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var iC = n(603647),
    iI = n(970672),
    iS = n(129014),
    iT = n(642277);
let iy = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = h.useState(0);
    (h.useEffect(() => {
        (iS.default.once("connected", () => {
            s(1);
        }),
            iS.default.once("disconnected", () => {
                (0, U.pX)((0, iT.W)());
            }),
            iS.default.connect());
    }, []),
        h.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, U.pX)((0, iT.W)()), 3e3);
            return () => clearTimeout(e);
        }, [l]));
    let r = h.useCallback(
        async (e, t) => {
            try {
                (s(2), await i(e, t), s(3));
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [i],
    );
    if ((0, U.MX)()) return null;
    switch (l) {
        case 1:
            return (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.qllnGm) }),
                    (0, d.jsx)(P.tK, { children: q.intl.string(q.t.SXCxye) }),
                    (0, d.jsx)("div", {
                        className: Z.eT,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: M()(Z.Ot, Z.F1),
                        children: (0, d.jsx)(eg.Q, {
                            text: q.intl.string(q.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, U.pX)((0, iT.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, d.jsxs)(P.Ay, {
                children: [(0, d.jsx)(P.hE, { children: q.intl.string(q.t["Z+hCVU"]) }), (0, d.jsx)(P.CK, {})],
            });
        case 3:
            return (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.csrAMJ) }),
                    (0, d.jsx)(P.tK, { children: q.intl.string(q.t.ghBJz9) }),
                ],
            });
    }
};
var ib = n(723923);
x.Ay.initialize();
class iR extends h.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, ex.A)(this.props.location),
            t = (0, m.parse)(this.props.location.search);
        (N.Bo.post({
            url: D.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new tS.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, B.d0)("disable_email_notifications"));
    }
    renderBusy() {
        return (0, d.jsx)(P.Ay, { children: (0, d.jsx)(P.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = q.intl.formatToPlainString(q.t.YDAohB, { category: t });
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.f6rdLg) }),
                (0, d.jsx)(P.tK, { children: l }),
                (0, d.jsx)("div", {
                    className: Z.QX,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, d.jsx)("div", {
                    className: Z.Ot,
                    children: (0, d.jsx)(eg.Q, {
                        text: q.intl.string(q.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, I.settingsPathToRoute)(T.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = ib.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: ts._3.DEPRECATED_SIZE_100,
                    className: Z.SX,
                }),
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t["6U6OMQ"]) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t["yaDJ4/"]) }),
                (0, d.jsx)("div", {
                    className: Z.eT,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(37772), className: Z.SX }),
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.ox9hIS) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t["/dcuR5"]) }),
                (0, d.jsx)("div", {
                    className: Z.eT,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let iL = x.Ay.connectStores([ef.A], () => ({ defaultRoute: ef.A.defaultRoute }))(iR);
var iO = n(110782),
    iD = n(10088),
    ik = n(871123),
    iw = n(189081),
    iG = n(67480),
    iP = n(45938),
    iU = n(587895),
    iB = n(242874),
    iF = n(180522),
    iV = n(287809),
    iM = n(97352),
    iH = n(615396),
    iW = n(202541),
    iK = n(716592);
function iQ() {
    return (0, d.jsxs)(h.Fragment, {
        children: [
            (0, d.jsx)(P.eu, { src: null, size: ts._3.DEPRECATED_SIZE_100, className: Z.SX }),
            (0, d.jsx)(P.tK, { children: q.intl.string(q.t.lTGZAl) }),
            (0, d.jsx)(P.hE, { className: M()(Z.Ot, eI.tR), children: q.intl.string(q.t.ZTNur7) }),
        ],
    });
}
let iz = x.Ay.connectStores([iG.A, iU.A, iM.A, iV.default], (e) => {
    let { giftCode: t } = e,
        n = iG.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iH.c9)(i) : null,
        application: null != n ? iU.A.getApplication(n.applicationId) : null,
        gifter: iV.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? q.intl.string(q.t.lTGZAl) : q.intl.formatToPlainString(q.t.TjWdPc, { username: i.username });
    if (null == l) return (0, d.jsx)(iQ, {});
    let o = l.name;
    return (
        null != r &&
            (o = q.intl.formatToPlainString(r.interval === iW.WT.MONTH ? q.t.CTpcCZ : q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, d.jsxs)(h.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, d.jsx)(iF.A, { defaultAnimationState: iB.oA.LOOP, giftStyle: n.giftStyle, className: iK.e })
                    : (0, d.jsx)(P.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: ts._3.DEPRECATED_SIZE_100,
                          className: Z.SX,
                      }),
                null != t
                    ? (0, d.jsxs)(h.Fragment, {
                          children: [
                              (0, d.jsx)(P.tK, { children: q.intl.string(q.t.mDFGFj) }),
                              (0, d.jsx)(P.hE, { children: t }),
                          ],
                      })
                    : (0, d.jsxs)(h.Fragment, {
                          children: [
                              (0, d.jsx)(P.tK, { children: a }),
                              (0, d.jsxs)(P.hE, {
                                  className: M()(Z.Ot, eI.tR),
                                  children: [
                                      l.productLine !== D.EZt.COLLECTIBLES &&
                                          (0, d.jsx)(ta.A, {
                                              size: ta.M.MEDIUM,
                                              className: iK.I,
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
var iX = n(935399),
    iq = n(475743),
    iY = n(707554),
    iZ = n(68281);
function i$(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === D.aUe.ACCOUNT_DISABLED,
        a = r ? q.intl.string(q.t["j3rC+U"]) : q.intl.string(q.t.ZFWofo),
        o = r ? q.intl.string(q.t["6eNTWe"]) : q.intl.string(q.t["pCBti+"]);
    return (0, d.jsx)(P.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, d.jsxs)(iY.F, {
            component: (0, d.jsx)(P.hE, { className: Z.QB, children: a }),
            children: [
                (0, d.jsx)(P.tK, { className: Z.SX, children: o }),
                (0, d.jsxs)(P.eB, {
                    children: [
                        (0, d.jsx)(W.$, { text: q.intl.string(q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, d.jsx)("div", {
                            className: M()(Z.Ot, iZ.Qt),
                            children: q.intl.format(q.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iJ = n(504394),
    i0 = n(52423),
    i1 = n(228916);
function i2(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, d.jsx)(P.Ay, {
        ...i,
        className: M()(n, i1.kL),
        contentClassName: i1.Qs,
        children: l.map((e, t) =>
            (0, d.jsx)("div", { className: i1.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var i3 = n(895600),
    i4 = n(506774),
    i8 = n(104798),
    i5 = n(991512);
let i7 = "mweb_handoff_nonce",
    i9 = "mweb_handoff_nonce_expiration",
    i6 = +tq.A.Millis.MINUTE,
    le = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    lt = new Set(["deep_link_failed"]);
function ln() {
    (i4.w.remove(i7), i4.w.remove(i9));
}
let li = () => {
    let e = (0, x.bG)([eJ.default], () => eJ.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, m.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        l = i ?? (null !== e ? e : void 0);
    h.useEffect(() => {
        null !== i && e !== i && E.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
    }, [i, e]);
    let [s, r] = h.useState(null),
        a = h.useCallback(
            (e) => {
                (r(e),
                    L.default.track(
                        D.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, e$.v)(l) },
                        { fingerprint: l },
                    ));
            },
            [r, l],
        ),
        o = i4.w.get(i7);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == o && null === s && a("nonce_missing"),
        h.useEffect(() => {
            if (null != o) {
                let e = i4.w.get(i9);
                (null == e || Date.now() >= e) && (a("nonce_expired"), ln());
            }
        }, [o, a]),
        h.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != o &&
                null == s &&
                N.Bo.post({ url: D.Rsh.HANDOFF_EXCHANGE, body: { key: o, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => A.A.loginToken(e.body.token, !1))
                    .then(() => {
                        L.default.track(D.HAw.LOGIN_SUCCESSFUL, {
                            source: D.mdB.MOBILE_WEB_HANDOFF,
                            is_new_user: !1,
                            fingerprint: (0, e$.v)(l),
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
                        ln();
                    });
        }, [n, o, s, l, a]),
        null == l)
    )
        return null;
    let c =
        null == s
            ? (0, d.jsxs)(d.Fragment, {
                  children: [q.intl.string(q.t.uJ1JsY), (0, d.jsx)("br", {}), q.intl.string(q.t.GHVWAs)],
              })
            : lt.has(s)
              ? q.intl.string(q.t.EPt55r)
              : le.has(s)
                ? q.intl.string(q.t.g87kTp)
                : void 0;
    return null != s && lt.has(s)
        ? (0, d.jsx)("div", {
              className: i5.Un,
              children: (0, d.jsx)(H.E, {
                  color: "interactive-text-default",
                  variant: "text-sm/semibold",
                  children: c,
              }),
          })
        : (0, d.jsxs)("div", {
              className: i5.kL,
              children: [
                  (0, d.jsx)(H.E, { variant: "text-sm/semibold", children: c }),
                  (0, d.jsx)(W.$, {
                      variant: "overlay-primary",
                      text: q.intl.string(q.t.NcC759),
                      onClick: function () {
                          let e = i8.A.generateNonce();
                          (i4.w.set(i7, e), i4.w.set(i9, Date.now() + i6));
                          let t = new URL(D.J$u),
                              n = new URLSearchParams(window.location.search);
                          (n.delete("fingerprint"), n.delete("handoff_token"));
                          let i = new URLSearchParams();
                          (i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                              i.set("key", e),
                              i.set("fingerprint", l),
                              (t.search = i.toString()),
                              L.default.track(
                                  D.HAw.DEEP_LINK_CLICKED,
                                  { fingerprint: (0, e$.v)(l), source: "mobile_web_handoff", destination: D.J$u },
                                  { fingerprint: l, flush: !0 },
                              ),
                              (window.location.href = t.toString()));
                      },
                  }),
              ],
          });
};
var ll = n(274303),
    ls = n(139286),
    lr = n(970573),
    la = n(491919);
function lo(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, ls.A)({ type: g.ImpressionTypes.MODAL, name: g.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, d.jsxs)(P.Ay, {
            className: la.ci,
            transparent: n,
            children: [
                !n && (0, d.jsx)(P.hE, { children: q.intl.string(q.t.bVbB63) }),
                (0, d.jsx)(H.E, {
                    className: la.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: q.intl.string(q.t["0M5fN7"]),
                }),
                (0, d.jsx)(lr.A, {
                    actionText: q.intl.string(q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === lr.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, d.jsx)("div", {
                    className: la.o1,
                    children: (0, d.jsx)(eg.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: q.intl.string(q.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
function lc(e) {
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
    return (0, d.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, d.jsx)(iJ.M, {}),
            (0, d.jsxs)(P.eB, {
                className: Z.QX,
                children: [
                    (0, d.jsx)(eC.A, {
                        className: Z.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: q.intl.string(q.t.tUjnxr),
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
                    (0, d.jsx)(P.pd, {
                        className: Z.SX,
                        label: q.intl.string(q.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: o,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, d.jsx)("div", {
                        className: Z.QB,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, d.jsx)(eg.Q, { text: q.intl.string(q.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, d.jsx)("div", {
                        className: Z.a5,
                        children: (0, d.jsx)(eg.Q, {
                            text: q.intl.string(q.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var lu = n(401755);
function ld(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function lh(e) {
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
            errors: u,
            loginSource: g,
            dismissedChooseAccount: p,
            setDismissedChooseAccount: E,
            conditionalMediationAbortController: A,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: N,
            handleForgotPassword: v,
            handleGotoRegister: C,
        } = e,
        I = (0, x.bG)([ev.A], () => ev.A.getCountryCode()),
        S = (0, x.bG)([eJ.default], () => eJ.default.getLoginStatus()),
        T = (0, x.bG)([ll.A], () => ll.A.getHasLoggedInAccounts()),
        y = h.useCallback(
            (e) => {
                L.default.track(D.HAw.LOGIN_SUCCESSFUL, {
                    source: D.mdB.QR_CODE,
                    login_source: g,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [g, l],
        ),
        { handoff_token: b } = (0, m.parse)(window.location.search),
        R = f.Fr && f.KY && null != b,
        O = null == u.email && null != u.password,
        k = h.useRef(null),
        w = h.useRef(null),
        G = (0, iq.Ay)(u);
    (h.useEffect(() => {
        function e(e) {
            return null != u[e];
        }
        null != G && G !== u && (e("password") ? w.current?.focus() : (e("email") || e("login")) && k.current?.focus());
    }, [u, k, w, G]),
        (t = r
            ? null
            : null != n
              ? (0, d.jsx)("div", { className: Z.S3, children: (0, d.jsx)(iJ.A, { invite: n }) })
              : null != l
                ? (0, d.jsx)(iz, { giftCode: l })
                : (0, d.jsxs)("div", {
                      className: iZ.wx,
                      children: [
                          (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t["7fNJgA"]) }, "title"),
                          !1 === (0, nw.isAndroidWeb)()
                              ? (0, d.jsx)(P.tK, { children: q.intl.string(q.t.euS7r4) }, "subtitle")
                              : null,
                      ],
                  })));
    let U = (0, d.jsxs)("div", {
        className: iZ.Eh,
        children: [
            T &&
                p &&
                (0, d.jsx)("div", {
                    className: iZ.AX,
                    children: (0, d.jsx)(W.$, {
                        onClick: () => E(!1),
                        variant: "secondary",
                        text: q.intl.string(q.t["1MrpWO"]),
                        icon: n0.n,
                    }),
                }),
            t,
            (0, d.jsx)(iY.F, {
                children: (0, d.jsxs)(P.eB, {
                    className: Z.QX,
                    children: [
                        (0, d.jsx)(eC.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: Z.SX,
                            label: q.intl.string(q.t.tUjnxr),
                            error: ld("login", u) ?? ld("email", u),
                            onChange: _,
                            setRef: k,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: o,
                            autoFocus: !O && !R && !a,
                            required: !0,
                        }),
                        (0, d.jsx)(P.pd, {
                            label: q.intl.string(q.t["CIGa+7"]),
                            error: ld("password", u),
                            onChange: j,
                            name: "password",
                            type: "password",
                            setRef: w,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: O && !R && !a,
                            value: c,
                            required: !0,
                        }),
                        (0, d.jsx)("div", {
                            className: M()(Z.SX, Z.a5),
                            children: (0, d.jsx)(eg.Q, {
                                text: q.intl.string(q.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    (null != k.current && k.current.focus(), v());
                                },
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: Z.QB,
                            children: (0, d.jsx)(W.$, {
                                text: q.intl.string(q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: S === D.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, d.jsxs)("div", {
                            className: Z.a5,
                            children: [
                                (0, d.jsx)("span", { className: iZ.Qt, children: q.intl.string(q.t.tmE73r) }),
                                (0, d.jsx)("span", {
                                    className: iZ.Z8,
                                    children: (0, d.jsx)(eg.Q, {
                                        text: q.intl.string(q.t.pV8xeR),
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
    return null != n && n.state === D.elq.RESOLVING
        ? (0, d.jsx)(lc, {
              authBoxClassName: s,
              country: I,
              login: o,
              password: c,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: k,
              passwordRef: w,
          })
        : null != i
          ? i.state === lu.QB.RESOLVING
              ? (0, d.jsx)(lc, {
                    authBoxClassName: s,
                    country: I,
                    login: o,
                    password: c,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: k,
                    passwordRef: w,
                })
              : (0, d.jsx)(i2, {
                    onSubmit: N,
                    tag: "form",
                    className: M()(s, iZ.Sy),
                    children: () => [
                        (0, d.jsx)(i3.A, { guildTemplate: i }, "template"),
                        (0, d.jsx)(h.Fragment, { children: U }, "form-wrapper"),
                    ],
                })
          : T && !p
            ? (0, d.jsx)(lo, { onDismiss: () => E(!0), embedded: r })
            : (0, d.jsxs)("div", {
                  children: [
                      (0, d.jsx)(P.Ay, {
                          onSubmit: N,
                          tag: "form",
                          className: M()(s, { [iZ.M0]: R }),
                          transparent: r,
                          expanded: !0,
                          children: (0, d.jsxs)(eG.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  U,
                                  (0, d.jsx)(i0.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: y,
                                      conditionalMediationAbortController: A,
                                  }),
                              ],
                          }),
                      }),
                      R && (0, d.jsx)(li, {}),
                  ],
              });
}
var lm = n(572469);
function lg(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, x.cf)(
            [eJ.default],
            () => ({ ticket: eJ.default.getMFATicket(), methods: eJ.default.getMFAMethods() }),
            [],
        ),
        s = h.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    Q._.dispatch(D.jej.WAVE_EMPHASIZE),
                    A.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, d.jsx)(P.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, d.jsx)(lm.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                E.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var lf = n(511815),
    lp = n(139033),
    lx = n(952116),
    lE = n(491509),
    lA = n(913612),
    l_ = n(933924);
function lj(e) {
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
        disableAutofocusOnDefaultForm: u,
    } = e;
    (0, lA.K)();
    let g = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
        f = (0, x.bG)([R.A], () => R.A.isHandoffAvailable()),
        p = (0, x.bG)([eJ.default], () => eJ.default.getLoginStatus()),
        E = i?.skuId ?? null,
        _ = (0, x.bG)([iG.A], () => (null != E ? iG.A.get(E) : null)),
        {
            checkingHandoff: j,
            redirecting: N,
            login: C,
            password: I,
            phoneVerifyError: S,
            dismissedChooseAccount: T,
            setDismissedChooseAccount: y,
            errors: O,
            conditionalMediationAbortController: k,
            loginSource: w,
            loginOrSSO: G,
            handleLogin: F,
            handleIPAuthorize: V,
            handlePasswordReset: M,
            handleForgotPassword: W,
            handleResendCode: K,
            handleReset: z,
            handleCancelAccountDeletion: X,
            handleGotoRegister: Y,
            loginReset: $,
            onLoginChange: J,
            onPasswordChange: ee,
        } = (function (e) {
            let {
                    invite: t,
                    guildTemplate: n,
                    giftCode: i,
                    handoffAvailable: l,
                    authenticated: s,
                    transitionTo: r = U.pX,
                    redirectTo: a,
                    location: o,
                    loginSource: c,
                } = e,
                [u, g] = h.useState(() => l),
                [f, p] = h.useState(() => s),
                [x, E] = h.useState(""),
                [_, j] = h.useState(() => {
                    let e = null != o ? (0, m.parse)(o.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [N, v] = h.useState(""),
                [C, I] = h.useState(!1),
                [S, T] = h.useState(null),
                [y, R] = h.useState(!1),
                [L] = h.useState(() => new AbortController()),
                [O, k] = h.useState({});
            !u || l || s || g(!1);
            let w = h.useMemo(() => {
                    if (null != c) return c;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != a ? b(a) : null;
                }, [c, i, n, t, a]),
                G = null != i ? i.skuId : null,
                P = h.useCallback(
                    (e) => {
                        let t = null != e ? (0, m.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (eh(a)) return void em(a);
                            r(a);
                        } else if (null == t.service) r(D.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + D.Rsh.SSO,
                                n = { ...t, token: eJ.default.getToken() };
                            window.location = `${e}?${(0, m.stringify)(n)}`;
                        }
                    },
                    [a, r],
                ),
                B = h.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e &&
                            null != t &&
                            (p(!0),
                            n
                                ? A.A.verifySSOToken("login", null).then(
                                      (e) => {
                                          e ? P(t) : p(!1);
                                      },
                                      () => P(t),
                                  )
                                : P(t));
                    },
                    [P],
                ),
                F = h.useCallback(() => {
                    (L.abort("Login state reset"), k({}), A.A.loginReset());
                }, [L]),
                V = h.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e?.preventDefault(),
                            L.abort("Starting password login"),
                            Q._.dispatch(D.jej.WAVE_EMPHASIZE),
                            k({}));
                        try {
                            await A.A.login({
                                login: x + _,
                                password: N,
                                undelete: n ?? C,
                                source: w,
                                giftCodeSKUId: G,
                                invite: t,
                            });
                        } catch (e) {
                            k((0, t8.p)(e));
                        }
                    },
                    [L, _, x, N, C, w, G, t],
                ),
                M = h.useCallback(
                    async (e) => {
                        let t = x + _;
                        k({});
                        try {
                            let { token: n } = await ej.A.verifyPhone(t, e, !1);
                            (await A.A.authorizeIPAddress(n), V());
                        } catch (e) {
                            null != e.body && null != e.body.message && T(e.body.message);
                        }
                    },
                    [x, _, V],
                ),
                W = h.useCallback(
                    async (e) => {
                        T(null);
                        try {
                            let { token: t } = await ej.A.verifyPhone(x + _, e, !1);
                            r(D.BVt.RESET, { search: (0, m.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && T(e.body.message);
                        }
                    },
                    [x, _, r],
                ),
                K = h.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = x + _;
                        k({});
                        try {
                            Q._.dispatch(D.jej.WAVE_EMPHASIZE);
                            let e = await A.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === lf.D.ONE_TIME_LOGIN
                                ? (0, nW.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: q.intl.string(q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, d.jsx)(nH.a, {
                                          title: q.intl.string(q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, d.jsx)(H.E, {
                                              variant: "text-md/normal",
                                              children: q.intl.string(q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, lp.A)({
                                      title: q.intl.string(q.t.f5Pi7A),
                                      subtitle: q.intl.format(q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            k((0, t8.p)(e));
                        }
                    },
                    [x, _],
                ),
                z = h.useCallback(() => {
                    ej.A.resendCode(x + _);
                }, [x, _]),
                X = h.useCallback((e) => {
                    (null != e && e.preventDefault(),
                        A.A.loginReset(),
                        v(""),
                        E(""),
                        j(""),
                        I(!1),
                        g(!1),
                        p(!1),
                        k({}));
                }, []),
                Y = h.useCallback(() => {
                    (I(!0), V(void 0, { undelete: !0 }));
                }, [V]),
                Z = h.useCallback(() => {
                    let e,
                        l = null != o ? (0, m.parse)(o.search) : {};
                    ("" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = D.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = D.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = D.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = D.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = D.BVt.REGISTER),
                        F(),
                        r(e, { search: (0, m.stringify)(l) }),
                        Q._.dispatch(D.jej.WAVE_EMPHASIZE));
                }, [_, t, i, n, a, o, F, r]);
            return {
                checkingHandoff: u,
                redirecting: f,
                login: _,
                password: N,
                phoneVerifyError: S,
                dismissedChooseAccount: y,
                setDismissedChooseAccount: R,
                errors: O,
                conditionalMediationAbortController: L,
                loginSource: w,
                loginOrSSO: B,
                handleLogin: V,
                handleIPAuthorize: M,
                handlePasswordReset: W,
                handleForgotPassword: K,
                handleResendCode: z,
                handleReset: X,
                handleCancelAccountDeletion: Y,
                handleGotoRegister: Z,
                loginReset: F,
                onLoginChange: h.useCallback((e, t) => {
                    (j(e), E(t));
                }, []),
                onPasswordChange: h.useCallback((e) => {
                    v(e);
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
    (0, iX.Ay)(() => {
        (f && !g ? (0, v.ST)() : g && G(g, l, !0),
            L.default.track(
                D.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: w,
                    authenticated: g,
                    ...(null != _ ? (0, lE.A)(_, !1, !1) : {}),
                    source: (0, U.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, l_.a)({ abortController: k, loginSource: w, giftCodeSKUId: E }),
            A.A.getLocationMetadata(),
            (0, B.d0)("login"));
    });
    let et = (0, iq.Ay)(g);
    if (
        (h.useEffect(() => {
            let e = j && (f || N);
            g && !1 === et && !e && (k.abort("Transitioning to authenticated state"), G(g, l));
        }, [g, f, et, N, j, k, G, l]),
        N || j)
    )
        return (0, d.jsx)(P.Ay, { transparent: o, children: (0, d.jsx)(eP.y, {}) });
    if (f)
        return (0, d.jsxs)(P.Ay, {
            className: a,
            transparent: o,
            children: [
                (0, d.jsx)(P.CK, {}),
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.S6RMNA) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t.YZiJbh) }),
            ],
        });
    switch (p) {
        case D.aUe.LOGGING_IN_MFA_SMS:
        case D.aUe.MFA_SMS_STEP:
        case D.aUe.LOGGING_IN_MFA:
        case D.aUe.MFA_STEP:
            return (0, d.jsx)(lg, { loginSource: w, giftCodeSKUId: E, isEmbedded: o });
        case D.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case D.aUe.ACCOUNT_DISABLED:
            return (0, d.jsx)(i$, {
                loginStatus: p,
                authBoxClassName: a,
                transparent: o,
                onSubmit: z,
                onCancelAccountDeletion: X,
            });
        case D.aUe.PHONE_IP_AUTHORIZATION:
            return (0, d.jsx)(P.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, d.jsx)(lx.A, {
                    title: q.intl.string(q.t.w55Oco),
                    subtitle: q.intl.format(q.t.CfRZBj, { onResendClick: K }),
                    error: S,
                    onSubmit: V,
                    onCancel: $,
                }),
            });
        case D.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, d.jsx)(P.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, d.jsx)(lx.A, {
                    title: q.intl.string(q.t["+xqy3d"]),
                    subtitle: q.intl.format(q.t.ef4uZ7, { onResendClick: K }),
                    error: S,
                    onSubmit: M,
                    onCancel: $,
                }),
            });
        case D.aUe.LOGGING_IN:
        case D.aUe.NONE:
        default:
            return (0, d.jsx)(lh, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: a,
                isEmbedded: o,
                disableAutofocusOnDefaultForm: u,
                login: C,
                password: I,
                errors: O,
                loginSource: w,
                dismissedChooseAccount: T,
                setDismissedChooseAccount: y,
                conditionalMediationAbortController: k,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: F,
                handleForgotPassword: W,
                handleGotoRegister: Y,
            });
    }
}
var lN = n(664294);
let lv = null,
    lC = "underage";
class lI extends x.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nw.isPlatformEmbedded && 1) {
            if (null != lv && lv + nn.bm > Date.now()) return !0;
        } else if (1) return null != lN.parse(document.cookie)[lC];
        return !1;
    }
}
let lS = new lI(E.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        ((lv = Date.now()), (document.cookie = `${lC}=1;path=/`));
    },
    LOGIN_SUCCESS: function () {
        ((lv = null), (document.cookie = `${lC}=1;path=/;max-age=0`));
    },
});
var lT = n(509434),
    ly = n(970116);
let lb = function () {
    return (0, d.jsx)(P.Ay, {
        children: (0, d.jsxs)("div", {
            className: ly.hQ,
            children: [
                (0, d.jsx)(P.hE, { className: ly.DD, children: q.intl.string(q.t.nCB6Ga) }),
                (0, d.jsx)(P.tK, {
                    className: ly.VA,
                    children: q.intl.format(q.t.KQgoxG, { underageMessage: q.intl.string(q.t.WqEH4D) }),
                }),
                (0, d.jsx)(W.$, {
                    icon: lT.I,
                    text: q.intl.string(q.t.hvVgAZ),
                    onClick: () => window.open(nq.A.getArticleURL(D.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
(n(994555), n(827343), n(792251), n(19575), n(945041));
var lR = n(493527),
    lL = n(544395);
function lO(e) {
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
        [c, u] = h.useState(!1),
        [m, g] = h.useState(!1);
    async function f() {
        T.length > 0 && !lL.A.wasRegistrationSuggestionFetched(T) && (await lR.A.fetchSuggestionsRegistration(T));
    }
    function p(e) {
        L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function E(e) {
        L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let A = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        _ = (0, x.bG)([lL.A], () => lL.A.registrationUsernameSuggestion()),
        j = h.useRef(null),
        N = h.useRef(null),
        v = h.useRef(null),
        C = h.useRef(null),
        [I, S] = h.useState(t),
        [T, y] = h.useState(""),
        [b, R] = h.useState(""),
        [O, k] = h.useState(""),
        [w, G] = h.useState(null),
        [U, B] = t$(A),
        [F, V] = h.useState(!1),
        [K, z] = tJ(),
        [X, Y] = h.useState({}),
        { message: $, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = X,
        [el, es] = h.useState(null),
        [er, ea] = h.useState(null),
        [eo, ec] = h.useState(null),
        [eu, ed] = h.useState(null),
        eh = null != A && U;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, iq.Ay)(t);
        h.useEffect(() => {
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
    })({ apiErrors: X, emailRef: j, usernameRef: N, globalNameRef: v, passwordRef: C });
    let em = h.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = t4.mZ.getState(),
                r = (0, iA.uJ)(_) ? null : b === _;
            (Q._.dispatch(D.jej.WAVE_EMPHASIZE), V(!0), Y({}));
            try {
                (await ni({
                    email: I,
                    username: b,
                    globalName: T,
                    consent: U,
                    password: O,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: w,
                    promoEmailConsent: t.required ? t : null,
                }),
                    o?.());
            } catch (t) {
                if ((V(!1), !(t instanceof t3.LG))) return;
                let e = (0, t8.W)(t);
                (Y(e), s?.(e), "number" == typeof e.retry_after && z(e.retry_after));
            }
        }, [i, l, n, I, s, o, _, b, T, O, w, U, z]),
        ef = h.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == A)) return;
                let t = !1;
                (0 === I.length && (es(q.intl.string(q.t.EkokLy)), (t = !0)),
                    0 === b.length && (ea(q.intl.string(q.t.EkokLy)), (t = !0)),
                    0 === O.length && (ec(q.intl.string(q.t.EkokLy)), (t = !0)),
                    null == w && (ed(q.intl.string(q.t.EkokLy)), (t = !0)),
                    t || em());
            },
            [I, b, O, w, A, em],
        ),
        ep = null;
    return (
        "string" == typeof $ && (ep = (0, d.jsx)(P.ME, { className: M()(Z.QX, ns.gJ), children: $ })),
        (0, d.jsx)("form", {
            onSubmit: ef,
            children: (0, d.jsxs)(P.eB, {
                className: Z.QX,
                children: [
                    (0, d.jsx)(P.pd, {
                        autoFocus: !0,
                        className: Z.SX,
                        label: q.intl.string(q.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            (S(e), r?.(e), es(0 === e.length ? q.intl.string(q.t.EkokLy) : null));
                        },
                        error: el ?? tZ(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => E("email"),
                    }),
                    (0, d.jsx)(P.pd, {
                        label: q.intl.string(q.t["9AjdkD"]),
                        className: Z.SX,
                        name: "global_name",
                        value: T,
                        onChange: y,
                        error: tZ(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: v,
                        onFocus: () => {
                            (u(!0), p("global_name"));
                        },
                        onBlur: () => {
                            (u(!1), E("global_name"));
                        },
                    }),
                    (0, d.jsx)(nA, {
                        show: c,
                        top: -12,
                        bottom: 20,
                        children: (0, d.jsx)(H.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: q.intl.string(q.t["330TCc"]),
                        }),
                    }),
                    (0, d.jsxs)("div", {
                        onBlur: () => g(!1),
                        onFocus: () => {
                            (g(!0), f());
                        },
                        tabIndex: -1,
                        children: [
                            (0, d.jsx)(P.pd, {
                                label: q.intl.string(q.t.TWzdWj),
                                className: Z.SX,
                                name: "username",
                                value: b,
                                onChange: (e) => {
                                    (R(e.toLocaleLowerCase()), ea(0 === e.length ? q.intl.string(q.t.EkokLy) : null));
                                },
                                error: er ?? tZ(ee),
                                autoComplete: "off",
                                setRef: N,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => E("username"),
                            }),
                            (0, d.jsx)(n_, {
                                username: b,
                                suggestion: _,
                                globalName: T,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    (N.current?.focus(), null != _ && _.length > 0 && (R(_), ea(null)));
                                },
                            }),
                        ],
                    }),
                    (0, d.jsx)(P.pd, {
                        label: q.intl.string(q.t["CIGa+7"]),
                        name: "password",
                        value: O,
                        onChange: (e) => {
                            (k(e), ec(0 === e.length ? q.intl.string(q.t.EkokLy) : null));
                        },
                        error: eo ?? tZ(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => E("password"),
                    }),
                    (0, d.jsx)(nm.A, {
                        label: q.intl.string(q.t.rhBeKe),
                        wrapperClassName: ns.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            (G(e), null != e && ed(null));
                        },
                        error: eu ?? tZ(ei),
                        value: w,
                        required: !0,
                        onFocus: p,
                        onBlur: E,
                    }),
                    (0, d.jsx)(no, {}),
                    (0, d.jsx)(nr, { consent: U, consentRequired: A, onConsentChange: B }),
                    (0, d.jsx)(t2.m, {
                        text: !U && A ? q.intl.string(q.t.AY4IVA) : null,
                        children: (0, d.jsx)("div", {
                            className: Z.QX,
                            children: (0, d.jsx)(W.$, {
                                text: q.intl.string(q.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: F,
                                disabled: !eh || K,
                            }),
                        }),
                    }),
                    ep,
                    (0, d.jsx)("div", {
                        className: Z.QX,
                        children: (0, d.jsx)(eg.Q, {
                            text: q.intl.string(q.t["1lWxux"]),
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
var lD = n(713654),
    lk = n(331722);
function lw(e) {
    let { channel: t } = e,
        n = (0, lD._U)(t.type);
    return (0, d.jsxs)("div", {
        className: lk.Nj,
        children: [
            null != n ? (0, d.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, d.jsx)(H.E, { className: lk.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lG(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, d.jsxs)("div", {
        className: lk.kL,
        children: [
            (0, d.jsx)(tD.Uq, { className: lk.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, d.jsx)(tD.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, d.jsx)(lw, { channel: t }) : null,
        ],
    });
}
var lP = n(231698);
function lU(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = ep.DY(t),
        { name: l, description: s } = i;
    return (0, d.jsxs)("div", {
        children: [
            (0, d.jsx)(eU.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lP.CT,
                children: q.intl.string(q.t.Eabu1z),
            }),
            (0, d.jsxs)("div", {
                className: lP.EB,
                children: [
                    (0, d.jsx)(tK.Ay, {
                        mask: tK.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, d.jsx)(tO.Ay, { guild: i, size: tO.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, d.jsxs)("div", {
                        className: lP.OA,
                        children: [
                            (0, d.jsx)(eU.D, { variant: "heading-sm/semibold", children: l }),
                            (0, d.jsxs)("div", {
                                className: lP.aH,
                                children: [
                                    (0, d.jsx)("div", { className: lP.Om }),
                                    null != n && n > 0
                                        ? (0, d.jsx)(H.E, {
                                              variant: "text-sm/normal",
                                              children: q.intl.format(q.t["LC+S+m"], { membersOnline: n }),
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
                (0, d.jsx)(H.E, { color: "text-default", className: lP.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lB(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, d.jsxs)(P.Ay, {
        className: t,
        children: [
            (0, d.jsx)(iJ.M, {}),
            (0, d.jsxs)(P.eB, {
                className: ns.y0,
                children: [
                    (0, d.jsx)(t2.m, {
                        text: q.intl.string(q.t["hBB85/"]),
                        position: "right",
                        children: (0, d.jsx)(P.pd, {
                            label: q.intl.string(q.t["9AjdkD"]),
                            autoFocus: !0,
                            className: Z.QB,
                            name: "username",
                            value: n,
                            placeholder: q.intl.string(q.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, d.jsx)(H.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: M()(Z.QX, ns.E2),
                        children: q.intl.format(q.t["KI+BSb"], { termsURL: D.X7G.TERMS, privacyURL: D.X7G.PRIVACY }),
                    }),
                    (0, d.jsx)("div", {
                        className: Z.Ot,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: Z.QX,
                        children: (0, d.jsx)(eg.Q, {
                            text: q.intl.string(q.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lF(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = h.useMemo(() => null != t && n, [t, n]);
    return (0, d.jsx)(t2.m, {
        text: !n && t ? q.intl.string(q.t.AY4IVA) : null,
        children: (0, d.jsx)("div", {
            className: Z.Ot,
            children: (0, d.jsx)(W.$, {
                text: q.intl.string(q.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: i,
                disabled: !l,
            }),
        }),
    });
}
function lV(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        o = t?.guild_scheduled_event != null,
        c = h.useRef(null),
        u = null;
    u = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, d.jsx)(lG, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, d.jsx)("div", { className: Z.S3, children: (0, d.jsx)(iJ.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, g] = h.useState(""),
        [f, p] = h.useState(null),
        [E, A] = t$(a),
        [_, j] = h.useState(!1),
        [N, v] = h.useState({}),
        { username: C, global_name: I, date_of_birth: S } = N,
        [T, y] = tJ();
    h.useEffect(() => {
        null == f && c.current?.focus();
    }, [f, c]);
    let [b, R] = h.useState(null),
        [O, k] = h.useState(null),
        w = h.useCallback(async () => {
            (Q._.dispatch(D.jej.WAVE_EMPHASIZE), j(!0), v({}));
            try {
                (await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return ni({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: E, invite: t.code, globalName: m, birthday: f }),
                    r?.());
            } catch (t) {
                if ((j(!1), !(t instanceof t3.LG))) return;
                let e = (0, t8.W)(t);
                (v(e), l?.(e), "number" == typeof e.retry_after && y(e.retry_after));
            }
        }, [t, m, f, E, l, r, y, v, j]),
        G = h.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                (0 === m.length && (R(q.intl.string(q.t.EkokLy)), (t = !0)),
                    null == f && (k(q.intl.string(q.t.EkokLy)), (t = !0)),
                    t || w());
            },
            [m, f, a, w, R, k],
        );
    return t.state === D.elq.RESOLVING
        ? (0, d.jsx)(lB, { authBoxClassName: n, name: m, onNameChange: g })
        : (0, d.jsxs)("div", {
              children: [
                  (0, d.jsx)(P.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, d.jsxs)("form", {
                          onSubmit: G,
                          children: [
                              u,
                              o ? (0, d.jsx)("div", { className: ns.yF }) : null,
                              (0, d.jsxs)(P.eB, {
                                  className: o ? void 0 : ns.y0,
                                  children: [
                                      (0, d.jsx)(t1.k, {
                                          helperText: q.intl.string(q.t["330TCc"]),
                                          label: q.intl.string(q.t["9AjdkD"]),
                                          error: b ?? tZ(I ?? C),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: q.intl.string(q.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              L.default.track(D.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              L.default.track(D.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, d.jsx)(nm.A, {
                                          label: q.intl.string(q.t.rhBeKe),
                                          wrapperClassName: ns.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              (p(e), null != e && k(null));
                                          },
                                          error: O ?? tZ(S),
                                          value: f,
                                      }),
                                      (0, d.jsx)(nr, { consent: E, consentRequired: a, onConsentChange: A }),
                                      (0, d.jsx)(lF, { consentRequired: a, consent: E, registering: _ }),
                                      (0, d.jsx)("div", {
                                          className: Z.QX,
                                          children: (0, d.jsx)(eg.Q, {
                                              text: q.intl.string(q.t["1lWxux"]),
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
                      ? (0, d.jsx)(P.Ay, {
                            className: Z.QX,
                            children: (0, d.jsx)(lU, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lM = n(942614);
n(100544);
var lH =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lW = n(771016);
function lK(e) {
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
            onRegister: u,
            transitionTo: f = U.pX,
        } = e,
        p = (0, x.bG)([t0.A], () => t0.A.getAuthenticationConsentRequired()),
        E = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
        _ = (0, x.bG)([lS], () => lS.isUnderageAnonymous()),
        j = (0, x.bG)([ll.A], () => ll.A.getHasLoggedInAccounts()),
        N = null != e.location ? (0, m.parse)(e.location.search) : {},
        [v, C] = h.useState(N.email ?? ""),
        [I, S] = h.useState({}),
        T = (0, iq.Ay)(E),
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
        R = null != s && null == s.guild && null == s.channel && null != s.inviter,
        O = h.useCallback(() => {
            E && (null != o ? f(o) : f(ef.A.defaultRoute));
        }, [E, o, f]);
    ((0, iX.Ay)(() => {
        (O(),
            L.default.track(
                D.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: y,
                    ...(null != i ? (0, lE.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == p && A.A.getLocationMetadata(),
            (0, B.d0)("register"));
    }),
        h.useEffect(() => {
            E && !1 === T && ((0, lM.C)(lW.zY.ORGANIC_REGISTERED), O());
        }, [E, T, O]));
    let k = lH.FULL;
    (_ || null != I.date_of_birth ? (k = lH.AGE_GATE) : b && (k = lH.INVITE),
        (0, ls.A)(
            {
                type: g.ImpressionTypes.VIEW,
                name: g.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: g.ImpressionGroups.USER_REGISTRATION_FLOW, step: k },
            },
            {},
            [k],
        ));
    let w = h.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, m.parse)(a.search) : {};
            (null != s
                ? (t = D.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = D.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = D.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != o
                      ? ((t = D.BVt.LOGIN), (i.redirect_to = o))
                      : ((t = D.BVt.LOGIN), "" !== v && (i = { email: v })),
                A.A.loginReset(),
                f(t, { search: (0, m.stringify)(i), source: "register" }),
                c?.(e),
                Q._.dispatch(D.jej.WAVE_EMPHASIZE));
        },
        [v, s, n, l, o, a, c, f],
    );
    if (_ || null != I.date_of_birth) return (0, d.jsx)(lb, {});
    if (null != s && b)
        return (0, d.jsx)(lV, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: S,
            onGotoLogin: w,
            onRegister: u,
        });
    let G = (0, d.jsx)(P.hE, { children: q.intl.string(q.t.wC4TlR) }, "title"),
        F = !1;
    null != l
        ? ((G = (0, d.jsx)(i3.A, { guildTemplate: l })), (F = !0))
        : null != n
          ? (G = (0, d.jsx)(iz, { giftCode: n }))
          : !r &&
            null != s &&
            R &&
            s.state === D.elq.RESOLVED &&
            (G = (0, d.jsx)("div", { className: Z.S3, children: (0, d.jsx)(iJ.A, { invite: s, isRegister: !0 }) }));
    let V = (0, d.jsx)(lO, {
        initialEmail: N.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: S,
        onEmailChange: C,
        onGotoLogin: w,
        onRegister: u,
    });
    return F
        ? (0, d.jsx)(i2, {
              tag: "section",
              className: M()(t, ns.Sy),
              children: () => [
                  G,
                  (0, d.jsxs)(
                      "div",
                      {
                          className: ns.Uu,
                          children: [(0, d.jsx)(P.hE, { className: ns.lR, children: q.intl.string(q.t.wC4TlR) }), V],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, d.jsxs)(P.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, d.jsx)("div", {
                            className: ns.AX,
                            children: (0, d.jsx)(W.$, {
                                onClick: w,
                                variant: "secondary",
                                text: q.intl.string(q.t["1MrpWO"]),
                                icon: n0.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  G,
                  V,
              ],
          });
}
(x.Ay.initialize(), x.Ay.initialize());
class lQ extends h.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        (e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, B.d0)("gift_code"));
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        (n ||
            E.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null }));
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        (iO.Yq(), null == e && this.refreshUser());
    }
    refreshUser = () => {
        (this.setState({ fetchingUser: !0 }),
            nQ
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
        return l === D.t02.INVALID_GIFT_SELF_REDEMPTION
            ? q.intl.string(q.t.wa9h7F)
            : l === D.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === D.EZt.COLLECTIBLES
              ? q.intl.string(q.t.mdLtb5)
              : null != t || l === D.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? q.intl.format(q.t.PIdmg3, { libraryLink: D.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === D.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? q.intl.string(q.t.ilcBeX)
                  : l === D.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? q.intl.string(q.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        A.A.logout("gift_code", D.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        (A.A.verifyResend(), this.setState({ sentVerification: !0 }));
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            (this.setState({ error: null }), await _.Ay.redeemGiftCode({ code: n }), e(D.BVt.APP));
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        _.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(D.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(_.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, d.jsxs)(P.Ay, { children: [(0, d.jsx)(P.hE, { children: e }), (0, d.jsx)(P.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: M()(Z.Ot, Z.QB), children: q.intl.string(q.t.KPowgn) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t.j8734b) }),
                (0, d.jsx)("div", {
                    className: M()(Z.eT, Z.QB),
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, d.jsx)(eg.Q, {
                    text: q.intl.string(q.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(nq.A.getArticleURL(D.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.csrAMJ) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t["m1+IBn"]) }),
                (0, d.jsx)("div", {
                    className: Z.eT,
                    children: (0, d.jsx)(W.$, {
                        text: q.intl.string(q.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(792525), className: Z.QB }),
                (0, d.jsx)(P.hE, { children: q.intl.format(q.t["ivLUf/"], { username: e.username }) }),
                (0, d.jsx)(P.tK, { className: Z.QX, children: q.intl.string(q.t["8Su18+"]) }),
                (0, d.jsx)("div", {
                    className: Z.eT,
                    children: (0, d.jsx)(W.$, {
                        text: t ? q.intl.string(q.t.CMa9Rv) : q.intl.string(q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, d.jsx)("div", {
                    className: Z.Ot,
                    children: (0, d.jsx)(eg.Q, {
                        text: q.intl.string(q.t.Po9eBQ),
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
        return (0, d.jsx)(lX, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(iz, { giftCode: e }),
                    (0, d.jsx)("div", {
                        className: Z.eT,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, d.jsx)(P.tK, { className: Z.QX, children: l })
                        : (0, d.jsx)(P.ME, {
                              className: Z.QX,
                              children: q.intl.format(q.t.NYM08s, {
                                  userTag: tc.Ay.getUserTag(t),
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
        if (e === D.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === D.fAW.OPENING) return this.renderSpinner(q.intl.string(q.t["Z+hCVU"]));
        if (s) return this.renderSpinner(q.intl.string(q.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(q.intl.string(q.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return o || null == e
                    ? this.renderSpinner(q.intl.string(q.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, d.jsx)(lj, { giftCode: i, transitionTo: r, location: a })
                : (0, d.jsx)(lK, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let lz = x.Ay.connectStores([io.A, iw.A, eJ.default, iG.A, ef.A, iD.A], (e) => {
    let t = e.match.params.giftCode,
        n = io.A.get(t),
        i = null != n ? iG.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? iP.YI(n.entitlementBranches, i, iw.A) : null,
        authenticated: eJ.default.isAuthenticated(),
        defaultRoute: ef.A.defaultRoute,
        isResolved: io.A.getIsResolved(t),
        isAccepting: io.A.getIsAccepting(t),
        libraryApplicationsFetched: iw.A.fetched,
        nativeAppState: iD.A.getState(t),
    };
})(lQ);
function lX(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, ik.bF)(t);
    return (h.useEffect(() => {
        null != i && s && l(D.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, d.jsxs)(P.Ay, {
              children: [(0, d.jsx)(P.hE, { children: q.intl.string(q.t.b3lf1c) }), (0, d.jsx)(P.CK, {})],
          })
        : n;
}
var lq = n(871194),
    lY = n(799365),
    lZ = n(894778),
    l$ = n(315290),
    lJ = n(396574),
    l0 = n(838697);
x.Ay.initialize();
class l1 extends h.PureComponent {
    componentDidMount() {
        ((0, B.d0)("guildTemplate"),
            lJ.VP || e0.A.launch("discord://" + D.BVt.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eL.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lJ.VP
            ? (0, d.jsx)("div", { className: Z.eT, children: (0, d.jsx)(W.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, d.jsx)(P.KE, { className: Z.eT });
    }
    renderSpinner(e) {
        return (0, d.jsxs)(P.Ay, { children: [(0, d.jsx)(P.hE, { children: e }), (0, d.jsx)(P.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: M()(Z.Ot, Z.QB), children: q.intl.string(q.t.C7ZRNw) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t.A6MwXE) }),
                this.renderButton(q.intl.string(q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.csrAMJ) }),
                (0, d.jsx)(P.tK, { children: q.intl.string(q.t["m1+IBn"]) }),
                this.renderButton(q.intl.string(q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (ez()(null != e, "guild template must not be null"), e.state === lu.QB.RESOLVING)
            ? (0, d.jsx)(P.Ay, { className: l0.sL, children: (0, d.jsx)(lY.A, { guildTemplate: e }) })
            : (0, d.jsx)(l2, { guildTemplate: e });
    }
    renderContinue() {
        return (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P.hE, { children: q.intl.string(q.t.fOc4gn) }),
                this.renderButton(q.intl.string(q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(q.intl.string(q.t.ZTNur7));
        if (t === D.fAW.OPEN) return this.renderAppOpened();
        if (t === D.fAW.OPENING) return this.renderSpinner(q.intl.string(q.t["Z+hCVU"]));
        switch (e.state) {
            case lu.QB.RESOLVING:
                return this.renderSpinner(q.intl.string(q.t["Z+hCVU"]));
            case lu.QB.RESOLVED:
                if (n || !lJ.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, d.jsx)(lj, { guildTemplate: e, transitionTo: i, location: l });
                return (0, d.jsx)(lK, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        ((0, lM.C)(lW.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lZ.A.flowStart(l$.do.ORGANIC_GUILD_TEMPLATES, l$.ju.NUF_STARTED));
                    },
                });
            case lu.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function l2(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lq.A)(t, !1);
    lZ.A.flowStep(l$.do.ORGANIC_GUILD_TEMPLATES, l$.jC.GUILD_CREATE);
    let l = (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(P.hE, { className: l0.wx, children: q.intl.string(q.t.UNFvtM) }),
            n,
            (0, d.jsx)("div", {
                className: l0.Tf,
                children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, d.jsx)(i2, {
        className: l0.sL,
        children: () => [
            (0, d.jsx)(i3.A, { guildTemplate: t }, "template"),
            (0, d.jsx)("div", { className: l0.KJ, children: l }, "contents"),
        ],
    });
}
function l3(e, t, n) {
    (e.preventDefault(),
        L.default.track(D.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        }));
    let i = eJ.default.getFingerprint(),
        l = null != i ? i : eJ.default.getId();
    eL.A.openMobileApp(n.state === lu.QB.RESOLVED ? t : void 0, l);
}
function l4(e) {
    let { code: t } = e,
        n = (0, x.bG)([eR.A], () => eR.A.getGuildTemplate(t));
    return (h.useEffect(() => {
        (0, B.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === lu.QB.RESOLVING)
        ? (0, d.jsx)(P.Ay, { children: (0, d.jsx)(eP.y, {}) })
        : n.state === lu.QB.RESOLVED
          ? (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(lY.A, { guildTemplate: n, tall: !0 }),
                    (0, d.jsx)("div", {
                        className: Z.QX,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => l3(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, d.jsx)(e6, {
                text: q.intl.string(q.t["e/rZ2n"]),
                buttonCta: q.intl.string(q.t.HAvYn0),
                onClick: (e) => l3(e, t, n),
            });
}
(x.Ay.initialize(), n(938796));
var l8 = n(821418),
    l5 = n(665260),
    l7 = n(362474),
    l9 = n(695366),
    l6 = n(964486),
    se = n(374063),
    st = n(921037),
    sn = (((a = {}).IN_CONTENT = "in_content"), (a.BELOW_CONTENT = "below_content"), a);
let si = (0, tT.mj)({
    name: "2026-09-silp-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var sl = (((o = {}).IN_CONTENT = "in_content"), (o.BELOW_CONTENT = "below_content"), o);
let ss = (0, tT.mj)({
    name: "2026-09-silp-app-opened-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var sr = n(320448),
    sa = n(975807),
    so = n(818348),
    sc = n(438865);
function su(e) {
    let { inviteCode: t, guildId: n, className: i, belowContent: l = !1, location: s } = e;
    function r() {
        (L.default.track(
            D.HAw.INVITE_CTA_CLICKED,
            { action: "browse_other_servers", invite_code: t, guild_id: n, location: s },
            { flush: !0 },
        ),
            (0, sa.A)(so.Tk.DISCOVER));
    }
    return l
        ? (0, d.jsx)("div", {
              className: M()(i, sc.B),
              children: (0, d.jsx)(W.$, {
                  text: q.intl.string(q.t["7itT3E"]),
                  onClick: r,
                  variant: "overlay-secondary",
                  icon: { type: "icon", asset: sr._ },
                  iconPosition: "end",
                  size: "sm",
              }),
          })
        : (0, d.jsx)("div", {
              className: M()(i, Z.Ot),
              children: (0, d.jsx)(W.$, {
                  text: q.intl.string(q.t["7itT3E"]),
                  onClick: r,
                  variant: "secondary",
                  fullWidth: !0,
              }),
          });
}
var sd = n(804070);
let sh = (0, tT.mj)({
    name: "2026-09-silp-desktop-app-upsell",
    kind: "user",
    defaultConfig: { label: null },
    variations: { 1: { label: "download_discord_app" }, 2: { label: "download_app" }, 3: { label: "get_discord" } },
});
var sm = (((c = {}).POPOVER = "popover"), (c.SIDEBAR = "sidebar"), c);
let sg = (0, tT.mj)({
    name: "2026-09-invite-silp-education",
    kind: "installation",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "popover" }, 2: { variant: "sidebar" } },
});
function sf(e, t) {
    let { variant: n } = sg.useConfig({ location: t });
    return null == e ||
        null == e.guild ||
        (null != e.type && e.type !== tu.Xd.GUILD) ||
        null != e.guild_scheduled_event ||
        null != e.target_type
        ? null
        : (sg.getConfig({ location: `${t}.eligible` }), n);
}
var sp =
    (((u = {}).POPOVER_LEARN_MORE = "whats_discord_popover_learn_more"),
    (u.POPOVER_DISMISS = "whats_discord_popover_dismiss"),
    (u.SIDEBAR_ROW = "whats_discord_sidebar_row"),
    (u.PANEL_CLOSE = "whats_discord_panel_close"),
    u);
function sx(e, t) {
    L.default.track(D.HAw.INVITE_CTA_CLICKED, { action: t, invite_code: e.code, guild_id: e.guild?.id });
}
var sE = n(333007),
    sA = n(408278),
    s_ = n(972213),
    sj = n(364522),
    sN = n(607470),
    sv = n(75298);
function sC(e) {
    let { title: t, description: n, video: i, poster: l, mediaEnabled: s } = e;
    return (0, d.jsxs)("li", {
        className: sv.N4,
        children: [
            (0, d.jsx)("div", {
                className: sv.HW,
                children: s
                    ? (0, d.jsx)(sN.A, {
                          className: sv.b5,
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
            (0, d.jsxs)("div", {
                className: sv.oo,
                children: [
                    (0, d.jsx)(H.E, { variant: "text-md/semibold", color: "text-strong", children: q.intl.string(t) }),
                    (0, d.jsx)(H.E, { variant: "text-md/medium", color: "text-subtle", children: q.intl.string(n) }),
                ],
            }),
        ],
    });
}
let sI = [
    {
        id: "chat",
        title: q.t.DHLE0q,
        description: q.t.putVLl,
        video: "https://cdn.discordapp.com/assets/content/c280207b5f7698daf392b8a1d7ef06f6abd4756921cf279e43ac1b4df7435b1e.mp4",
        poster: "https://cdn.discordapp.com/assets/content/ed1c5cc896fda218645dbd7ddd9c15bdbe3672cef38a6c345f33f94e4cdabb09.png",
    },
    {
        id: "stream",
        title: q.t.CmLD50,
        description: q.t.fAU31r,
        video: "https://cdn.discordapp.com/assets/content/924896af22b016a248979482b628d411eb63cc2229f1b3c05e7d13343d6a490a.mp4",
        poster: "https://cdn.discordapp.com/assets/content/ab297c5f0072da3d2e8fc411dc7bacf2fec76239083cb074f25d845050b67ee3.png",
    },
    {
        id: "voice",
        title: q.t.Z70vcv,
        description: q.t["pqph/A"],
        video: "https://cdn.discordapp.com/assets/content/ff7a797aa208c9f706e10b51001ea0a51bbc462de5ee44b8066ccc5038d1f4a8.mp4",
        poster: "https://cdn.discordapp.com/assets/content/5a1beb8894cb9334ce5c91d9f6344ef9779c57e513d1288eb0d9f80e4803fc66.png",
    },
];
function sS(e) {
    let { invite: t, open: n, edge: i, returnRef: l, onRequestClose: s, translucent: r = !1, className: a } = e,
        o = h.useRef(null);
    h.useEffect(() => {
        if (!n) return;
        let e = l.current;
        return (
            o.current?.focus({ preventScroll: !0 }),
            () => {
                e?.focus({ preventScroll: !0 });
            }
        );
    }, [n, l]);
    let c = h.useCallback(() => {
        (sx(t, sp.PANEL_CLOSE), s());
    }, [t, s]);
    return (0, sE.createPortal)(
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)("aside", {
                    "data-theme": D.NJ8.DARK,
                    "aria-label": q.intl.string(q.t["FlY+Rz"]),
                    "aria-hidden": !n,
                    className: M()(sv.nd, "start" === i ? sv.BZ : sv.YQ, n && sv.ZC, r && sv.sJ, e, a),
                    children: [
                        (0, d.jsx)("div", {
                            className: sv.VN,
                            children: (0, d.jsx)(t2.m, {
                                text: q.intl.string(q.t.cpT0Cq),
                                children: (0, d.jsx)(sA.K, {
                                    buttonRef: o,
                                    icon: s_.XLargeIcon,
                                    "aria-label": q.intl.string(q.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: c,
                                }),
                            }),
                        }),
                        (0, d.jsx)(sj.Ip, {
                            className: sv.XG,
                            children: (0, d.jsxs)("div", {
                                className: sv.Qs,
                                children: [
                                    (0, d.jsx)(eU.D, {
                                        variant: "heading-xl/semibold",
                                        color: "text-strong",
                                        children: q.intl.string(q.t.YCIfhC),
                                    }),
                                    (0, d.jsx)("ul", {
                                        className: sv.qT,
                                        children: sI.map((e) => (0, d.jsx)(sC, { ...e, mediaEnabled: n }, e.id)),
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
var sT = n(383072),
    sy = n(789645),
    sb = n(915089),
    sR = n(479789);
function sL(e) {
    let { visible: t, onLearnMore: n, onDismiss: i, learnMoreRef: l } = e,
        s = (0, sb.GV)();
    return (0, sE.createPortal)(
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)("section", {
                    "data-theme": D.NJ8.DARK,
                    "aria-labelledby": s,
                    "aria-hidden": !t,
                    className: M()(sR.oO, t && sR.IZ, e),
                    children: [
                        (0, d.jsx)("div", {
                            className: sR.VN,
                            children: (0, d.jsx)(t2.m, {
                                text: q.intl.string(q.t.cpT0Cq),
                                children: (0, d.jsx)(sA.K, {
                                    icon: sy.P,
                                    "aria-label": q.intl.string(q.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: i,
                                }),
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: sR.fA,
                            children: (0, d.jsx)(sT.l, { alt: "", ariaHidden: !0, width: 144, height: 81 }),
                        }),
                        (0, d.jsxs)("div", {
                            className: sR.Qq,
                            children: [
                                (0, d.jsx)(iY.F, {
                                    forceLevel: 2,
                                    children: (0, d.jsx)(eU.D, {
                                        id: s,
                                        variant: "heading-md/semibold",
                                        color: "text-strong",
                                        children: q.intl.string(q.t["FlY+Rz"]),
                                    }),
                                }),
                                (0, d.jsx)(H.E, {
                                    variant: "text-sm/medium",
                                    color: "text-subtle",
                                    children: q.intl.string(q.t.lgHr73),
                                }),
                            ],
                        }),
                        (0, d.jsx)(W.$, {
                            buttonRef: l,
                            text: q.intl.string(q.t.hvVgAZ),
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
function sO(e) {
    let { invite: t, children: n } = e,
        i = h.useRef(null),
        [l, s] = h.useState(!1),
        [r, a] = h.useState(!1),
        o = h.useCallback(() => {
            (sx(t, sp.POPOVER_LEARN_MORE), s(!0));
        }, [t]),
        c = h.useCallback(() => {
            (sx(t, sp.POPOVER_DISMISS), a(!0));
        }, [t]),
        u = h.useCallback(() => s(!1), []);
    return (0, d.jsxs)(d.Fragment, {
        children: [
            n,
            r ? null : (0, d.jsx)(sL, { visible: !l, learnMoreRef: i, onLearnMore: o, onDismiss: c }),
            (0, d.jsx)(sS, { invite: t, open: l, edge: "end", returnRef: i, onRequestClose: u }),
        ],
    });
}
var sD = n(996682);
function sk(e) {
    let { color: t = e4.A.colors.ICON_STRONG, "aria-label": n, "aria-hidden": i, role: l, width: s, height: r } = e,
        a = h.useMemo(() => (0, eO.H)({ width: s, height: r, intrinsicWidth: 200, intrinsicHeight: 30 }), [s, r]);
    return (0, d.jsx)("svg", {
        ...(0, sD.A)({ "aria-label": n, "aria-hidden": i, role: l }),
        style: a,
        viewBox: "0 0 200 30",
        fill: t.css,
        children: (0, d.jsx)("path", {
            fill: t.css,
            d: "M25.55 0c-.4.69-.74 1.4-1.06 2.12-3.02-.45-6.1-.45-9.13 0C15.06 1.4 14.7.7 14.3 0a33.4 33.4 0 0 0-8.23 2.52c-5.2 7.65-6.6 15.1-5.9 22.44A33.16 33.16 0 0 0 10.26 30a24 24 0 0 0 2.16-3.45 21.94 21.94 0 0 1-3.4-1.61l.83-.63a23.85 23.85 0 0 0 20.17 0c.27.22.55.44.84.63a21.72 21.72 0 0 1-3.41 1.61c.62 1.21 1.34 2.37 2.16 3.46a33.14 33.14 0 0 0 10.09-5.02c.83-8.52-1.42-15.91-5.92-22.45A32.9 32.9 0 0 0 25.55.02V0ZM13.3 20.44c-1.96 0-3.6-1.77-3.6-3.95 0-2.19 1.57-3.96 3.6-3.96 2.01 0 3.62 1.78 3.59 3.96-.04 2.18-1.59 3.95-3.59 3.95Zm13.25 0c-1.98 0-3.59-1.77-3.59-3.95 0-2.19 1.57-3.96 3.59-3.96 2.02 0 3.61 1.78 3.58 3.96-.03 2.18-1.58 3.95-3.58 3.95ZM72.28 5.48a17.76 17.76 0 0 0-7.26-1.33H53.15V25.3h11.01c3.1 0 5.7-.48 7.8-1.42a10.38 10.38 0 0 0 4.7-3.86 9.95 9.95 0 0 0 1.53-5.43c.03-1.9-.48-3.78-1.48-5.42a9.74 9.74 0 0 0-4.43-3.7Zm-3.79 13c-1.03.96-2.51 1.44-4.44 1.44h-3.29V9.53h3.71c1.87 0 3.26.47 4.2 1.38.94.98 1.44 2.3 1.38 3.67a5.1 5.1 0 0 1-1.55 3.91h-.01Zm40.37-2.33c.97.86 1.45 2.12 1.46 3.79a5 5 0 0 1-2.42 4.36c-1.6 1.07-3.9 1.6-6.87 1.6-1.7 0-3.4-.22-5.06-.64a16.21 16.21 0 0 1-4.45-1.83V18.4c1.21.87 2.56 1.51 4 1.89 1.58.47 3.22.73 4.86.73.57.04 1.14-.07 1.66-.28.38-.19.56-.43.56-.68 0-.28-.1-.55-.3-.76a2.74 2.74 0 0 0-1.19-.51l-3.65-.81c-2.09-.48-3.57-1.15-4.45-2a4.46 4.46 0 0 1-1.3-3.38 4.46 4.46 0 0 1 1.15-3.04 7.45 7.45 0 0 1 3.28-2c1.62-.51 3.3-.75 5-.72 1.58-.01 3.15.17 4.68.55 1.24.29 2.43.75 3.53 1.38v4.75a13.17 13.17 0 0 0-3.3-1.34 15.1 15.1 0 0 0-3.85-.5c-1.9 0-2.86.31-2.86.95 0 .3.17.56.44.68.52.22 1.06.38 1.62.47l3.04.54c1.98.35 3.45.95 4.43 1.82h-.01Zm20.2 3.49c.88-.26 1.73-.62 2.53-1.08v5.35a14.94 14.94 0 0 1-7.76 2c-2.18.06-4.35-.38-6.33-1.28a9.1 9.1 0 0 1-3.94-3.45 9.22 9.22 0 0 1-1.3-4.89 8.9 8.9 0 0 1 1.36-4.86 9.19 9.19 0 0 1 4.02-3.36c2-.86 4.15-1.28 6.32-1.23 3.05 0 5.57.63 7.58 1.9v5.54a9.95 9.95 0 0 0-5.53-1.63c-1.88 0-3.36.34-4.42 1.03a3.08 3.08 0 0 0-.05 5.37c1.03.69 2.54 1.04 4.5 1.04 1.02 0 2.03-.15 3-.44l.01-.01Zm22.52-11.58c-4-1.61-8.48-1.61-12.48 0a8.7 8.7 0 0 0-5.38 8.2 9.08 9.08 0 0 0 1.38 4.92 9.4 9.4 0 0 0 4.03 3.45 15.95 15.95 0 0 0 12.44-.01 9.34 9.34 0 0 0 4-3.45 9.15 9.15 0 0 0 1.37-4.93 8.77 8.77 0 0 0-1.37-4.86 9.2 9.2 0 0 0-3.98-3.32h-.01Zm-3.21 11.2a4.08 4.08 0 0 1-3.05 1.1 4.2 4.2 0 0 1-3.04-1.1 3.91 3.91 0 0 1-1.11-2.91 3.82 3.82 0 0 1 1.1-2.89 4.21 4.21 0 0 1 3.05-1.07 4.18 4.18 0 0 1 3.05 1.07 3.8 3.8 0 0 1 1.1 2.89 3.93 3.93 0 0 1-1.1 2.92Zm24.08-12.04a5.1 5.1 0 0 1 2.77.73v6.53c-.91-.53-1.96-.8-3.02-.75-1.62 0-2.87.48-3.74 1.46-.87.98-1.3 2.5-1.3 4.55v5.56h-7.46V7.62h7.3v5.62c.4-2.06 1.05-3.57 1.96-4.55.89-.97 2.15-1.5 3.47-1.47h.02Zm20.08-3.68v7.88c-1.21-3.06-3.6-4.6-7.14-4.6a8.38 8.38 0 0 0-7.74 4.69 10.6 10.6 0 0 0-1.08 4.99 11 11 0 0 0 1.02 4.82 8.05 8.05 0 0 0 2.92 3.35 8 8 0 0 0 4.42 1.23c1.66.04 3.3-.36 4.73-1.18a7.06 7.06 0 0 0 2.88-3.4v3.97H200V3.54h-7.46Zm-1.1 15.62a4.16 4.16 0 0 1-3.04 1.08 4.12 4.12 0 0 1-2.98-1.08 3.72 3.72 0 0 1-1.14-2.81 3.67 3.67 0 0 1 1.13-2.8 4.8 4.8 0 0 1 6.04 0 3.6 3.6 0 0 1 1.14 2.76 3.8 3.8 0 0 1-1.14 2.85ZM88.2 6.2c0 1.83-1.66 3.31-3.71 3.31s-3.71-1.48-3.71-3.31c0-1.84 1.66-3.32 3.71-3.32s3.71 1.48 3.71 3.32Zm0 5.6v13.6h-7.43V11.8c2.38.99 5.06.99 7.43 0Z",
        }),
    });
}
var sw = n(540747),
    sG = n(405494);
function sP(e) {
    let { expanded: t, onClick: n, innerRef: i } = e;
    return (0, d.jsxs)(nJ.D, {
        innerRef: i,
        className: M()(sG.nM, t && sG.cE),
        "aria-expanded": t,
        onClick: n,
        children: [
            (0, d.jsx)("div", {
                className: sG.zR,
                children: (0, d.jsx)(sT.l, { alt: "", ariaHidden: !0, width: 100, height: 56 }),
            }),
            (0, d.jsxs)("div", {
                className: sG.qg,
                children: [
                    (0, d.jsx)(H.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: q.intl.string(q.t["FlY+Rz"]),
                    }),
                    (0, d.jsx)(H.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: q.intl.string(q.t.lgHr73),
                    }),
                ],
            }),
            (0, d.jsx)("div", {
                className: sG.o2,
                children: (0, d.jsx)(sr._, { size: "custom", width: 16, height: 16 }),
            }),
        ],
    });
}
function sU(e) {
    let { invite: t, header: n, children: i } = e,
        l = h.useRef(null),
        [s, r] = h.useState(!1);
    (0, sw.Y)();
    let a = h.useCallback(() => {
            (s || sx(t, sp.SIDEBAR_ROW), r(!s));
        }, [t, s]),
        o = h.useCallback(() => r(!1), []);
    return (0, sE.createPortal)(
        (0, d.jsx)(tH.N, {
            theme: D.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsxs)("div", {
                            "data-theme": D.NJ8.DARK,
                            className: M()(sG.pz, e),
                            children: [
                                (0, d.jsx)(sk, { "aria-hidden": !0, width: 133, height: 20 }),
                                (0, d.jsx)(sj.Ip, {
                                    className: sG.XG,
                                    children: (0, d.jsxs)("div", {
                                        className: sG.Qs,
                                        children: [n, (0, d.jsx)("div", { className: sG.F7, children: i })],
                                    }),
                                }),
                                (0, d.jsx)(sP, { innerRef: l, expanded: s, onClick: a }),
                            ],
                        }),
                        (0, d.jsx)(sS, {
                            invite: t,
                            open: s,
                            edge: "start",
                            returnRef: l,
                            onRequestClose: o,
                            className: sG.nd,
                            translucent: !0,
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
function sB(e) {
    let { mode: t, invite: n, location: i, transitionTo: l, onLoginStart: s, children: r } = e;
    return (0, tW.A)("(min-width: 900px)")
        ? "login" === t
            ? (0, d.jsx)(sU, {
                  invite: n,
                  header: (0, d.jsx)("div", { className: Z.S3, children: (0, d.jsx)(iJ.A, { invite: n }) }),
                  children: (0, d.jsx)(lj, {
                      invite: n,
                      isEmbedded: !0,
                      authBoxClassName: sG.sL,
                      location: i,
                      transitionTo: l,
                  }),
              })
            : (0, d.jsx)(sU, {
                  invite: n,
                  children: (0, d.jsx)(lK, {
                      invite: n,
                      authBoxClassName: sG.sL,
                      onLoginStart: s,
                      location: i,
                      transitionTo: l,
                  }),
              })
        : r;
}
var sF = n(930839),
    sV = n(53505),
    sM = n(4274);
x.Ay.initialize();
let sH = "register",
    sW = "login";
function sK(e) {
    let { message: t, onClick: n, invite: i, className: l, notice: s, secondaryAction: r } = e,
        a = i?.guild_scheduled_event != null,
        o = a ? "active" : "primary";
    return lJ.VP
        ? (0, d.jsx)("div", {
              className: l ?? (a ? Z.QX : Z.eT),
              children: (0, d.jsxs)(eG.B, {
                  gap: 8,
                  children: [
                      s,
                      null == r
                          ? (0, d.jsx)(W.$, { text: t, onClick: n, variant: o, fullWidth: !0 })
                          : (0, d.jsxs)(J.e, {
                                fullWidth: !0,
                                children: [
                                    (0, d.jsx)(W.$, { text: t, onClick: n, variant: o }),
                                    (0, d.jsx)(W.$, { text: r.text, onClick: r.onClick, variant: "secondary" }),
                                ],
                            }),
                  ],
              }),
          })
        : (0, d.jsx)(P.KE, { className: l ?? Z.eT });
}
function sQ(e) {
    let t = tR("InviteAccept");
    return (0, d.jsx)(sK, { ...e, message: tL(t) });
}
function sz(e) {
    let { invite: t, transitionTo: n, location: i } = e,
        l = sf(t, "InviteLogin"),
        s = (0, d.jsx)(lj, { invite: t, transitionTo: n, location: i });
    switch (l) {
        case sm.POPOVER:
            return (0, d.jsx)(sO, { invite: t, children: s });
        case sm.SIDEBAR:
            return (0, d.jsx)(sB, { mode: "login", invite: t, location: i, transitionTo: n, children: s });
        default:
            return s;
    }
}
function sX(e) {
    let { invite: t, onLoginStart: n, location: i, transitionTo: l } = e,
        s = sf(t, "InviteRegister"),
        r = (0, d.jsx)(lK, { invite: t, onLoginStart: n, location: i, transitionTo: l });
    switch (s) {
        case sm.POPOVER:
            return (0, d.jsx)(sO, { invite: t, children: r });
        case sm.SIDEBAR:
            return (0, d.jsx)(sB, {
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
function sq(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l, expirationLocation: s } = e,
        r = (0, x.bG)([tn.A], () => (t.state === D.elq.ERROR ? tn.A.getInviteError(n) : void 0)),
        a = t.guild_scheduled_event,
        o = r?.code === D.t02.INVALID_CANNOT_FRIEND_SELF,
        c = lJ.VP && !o && tb(t),
        u = null == a ? (0, d.jsx)(sd.A, { invite: t, location: s }) : null,
        { label: m } = sh.useConfig({ location: "InviteAuthenticated" }),
        g = lJ.VP && !nw.isPlatformEmbedded && !o;
    g && sh.getConfig({ location: "InviteAuthenticated.eligible" });
    let f =
        g && null != m
            ? {
                  text: (function (e) {
                      switch (e) {
                          case "download_discord_app":
                              return q.intl.string(q.t.jCQlbu);
                          case "download_app":
                              return q.intl.string(q.t["BK8LK+"]);
                          case "get_discord":
                              return q.intl.string(q.t.BjfDQq);
                      }
                  })(m),
                  onClick: function () {
                      (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
                          action: "download_app",
                          invite_code: t.code,
                          guild_id: t.guild?.id,
                      }),
                          window.open((0, sV.SU)(), "_blank"),
                          L.default.track(D.HAw.DOWNLOAD_APP, {
                              platform: (0, sV.Vf)(),
                              ptb: !1,
                              released: !0,
                              referring_location: "Invite Landing Page",
                              qr_code: !1,
                          }));
                  },
              }
            : void 0;
    return (
        h.useEffect(() => {
            sF.A.requestDrain();
        }, []),
        (0, d.jsxs)("div", {
            children: [
                (0, d.jsxs)(P.Ay, {
                    children: [
                        null != a
                            ? (0, d.jsx)(lG, { channel: t.channel, guildScheduledEvent: a })
                            : (0, d.jsx)(iJ.A, { invite: t }),
                        null != r &&
                            (0, d.jsx)("div", {
                                className: Z.QX,
                                role: "alert",
                                children: (0, d.jsxs)(H.E, {
                                    variant: "text-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, d.jsx)(l9.E, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, sM.s)(r.code),
                                    ],
                                }),
                            }),
                        c
                            ? (0, d.jsx)(sQ, {
                                  invite: t,
                                  onClick: i,
                                  className: null != r ? Z.QX : void 0,
                                  notice: u,
                                  secondaryAction: f,
                              })
                            : (0, d.jsx)(sK, {
                                  invite: t,
                                  message: q.intl.string(o ? q.t.fIv16B : q.t.ohMvm1),
                                  onClick: o ? l : i,
                                  className: null != r ? Z.QX : void 0,
                                  notice: u,
                                  secondaryAction: f,
                              }),
                    ],
                }),
                null != a &&
                    null != t.guild &&
                    (0, d.jsx)(P.Ay, {
                        className: Z.QX,
                        children: (0, d.jsx)(lU, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function sY(e) {
    return lJ.VP
        ? (0, d.jsx)(sZ, { ...e })
        : (0, d.jsxs)(P.Ay, {
              children: [(0, d.jsx)(iJ.A, { invite: e.invite }), (0, d.jsx)(P.KE, { className: Z.eT })],
          });
}
function sZ(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e,
        s = ss.useConfig({ location: "InviteAppOpened" }).placement;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(iJ.A, { invite: t }),
                    (0, d.jsx)("div", {
                        className: Z.QX,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.UQvCf7),
                            onClick: function () {
                                (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
                                    action: "open_app",
                                    invite_code: t.code,
                                    guild_id: t.guild?.id,
                                }),
                                    i ? j.Ay.openNativeAppModal(n) : j.Ay.openApp(n));
                            },
                            variant: "primary",
                            fullWidth: !0,
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: Z.Ot,
                        children:
                            s === sl.IN_CONTENT
                                ? (0, d.jsx)(su, {
                                      inviteCode: t.code,
                                      guildId: t.guild?.id,
                                      location: "InviteAppOpened",
                                  })
                                : (0, d.jsx)(W.$, {
                                      text: q.intl.string(q.t["2ixEBi"]),
                                      onClick: function () {
                                          (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
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
            }),
            s === sl.BELOW_CONTENT &&
                (0, d.jsx)(su, {
                    inviteCode: t.code,
                    guildId: t.guild?.id,
                    className: Z.QX,
                    belowContent: !0,
                    location: "InviteAppOpened",
                }),
        ],
    });
}
function s$(e) {
    let { title: t } = e;
    return (0, d.jsxs)(P.Ay, { children: [(0, d.jsx)(P.hE, { children: t }), (0, d.jsx)(P.CK, {})] });
}
function sJ(e) {
    let { banned: t, invite: n, handleDefaultTransition: i } = e,
        l = si.useConfig({ location: "InviteInvalid" }).placement;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)(P.hE, { className: M()(Z.Ot, Z.QB), children: q.intl.string(q.t.kux01N) }),
                    (0, d.jsx)(P.tK, { children: t ? q.intl.string(q.t["5AkWAd"]) : q.intl.string(q.t["+qUJAj"]) }),
                    (0, d.jsx)(sK, { message: q.intl.string(q.t.fIv16B), onClick: i }),
                    l === sn.IN_CONTENT &&
                        (0, d.jsx)(su, { inviteCode: n.code, guildId: n.guild?.id, location: "ExpiredInvite" }),
                    (0, d.jsx)("div", {
                        className: Z.Ot,
                        style: { textAlign: "left" },
                        children: (0, d.jsx)(eg.Q, {
                            size: "sm",
                            textVariant: "text-sm/medium",
                            text: q.intl.string(q.t.urIwn4),
                            onClick: () => window.open(nq.A.getArticleURL(D.MVz.INVALID_INVITES), "_blank"),
                        }),
                    }),
                ],
            }),
            l === sn.BELOW_CONTENT &&
                (0, d.jsx)(su, {
                    inviteCode: n.code,
                    guildId: n.guild?.id,
                    className: Z.QX,
                    belowContent: !0,
                    location: "ExpiredInvite",
                }),
        ],
    });
}
function s0(e) {
    let { handleDefaultTransition: t } = e;
    return (0, d.jsxs)(P.Ay, {
        children: [
            (0, d.jsx)(P.hE, { children: q.intl.string(q.t.fOc4gn) }),
            (0, d.jsx)(sK, { message: q.intl.string(q.t.fIv16B), onClick: t }),
        ],
    });
}
var s1 = n(334465);
let s2 = (0, n(600975).C)({
    kind: "user",
    id: "2023-09_iar_dsa_webform",
    label: "Safety Experience Unauthenticated Report Form",
    defaultConfig: { enabled: !1 },
    treatments: [
        { id: 1, label: "EU user", config: { enabled: !0 } },
        { id: 2, label: "DSA E2E testing user", config: { enabled: !0 } },
    ],
});
x.Ay.initialize();
var s3 = n(163050),
    s4 = n(498206);
x.Ay.initialize();
var s8 = n(701273);
function s5(e) {
    n.g.location.assign(e);
}
(x.Ay.initialize(), n(426620), x.Ay.initialize());
let s7 = iv(lj),
    s9 = iv(function (e) {
        let { transitionTo: t } = e,
            n = h.useCallback(
                (e) => {
                    let n;
                    ((n = (0, s1.B)(e, { path: D.BVt.CHANNEL(nM.pv.guildId(), nM.pv.channelId()) })),
                    +(n?.params?.channelId !== S.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? U.pX)(e)
                        : U.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, x.cf)([eJ.default], () => ({
                isAuthenticated: eJ.default.isAuthenticated(),
                loginStatus: eJ.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, o] = h.useState(i);
        function c(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            ((0, v.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), o(!1));
        }
        return ((0, l6.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, m.parse)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? b(r) : void 0;
                    a
                        ? A.A.logout("handoff", null).finally(() => {
                              c({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : c({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        a || l === D.aUe.LOGGING_IN)
            ? (0, d.jsx)(P.Ay, { children: (0, d.jsx)(eP.y, {}) })
            : (0, d.jsx)(lj, { ...e, transitionTo: n });
    }),
    s6 = iv(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = h.useMemo(() => (0, e1.m0)(t), [t]),
            r = (0, x.bG)([tn.A], () => tn.A.getInvite(t)),
            a = (0, x.bG)([iD.A], () => iD.A.getState(s)),
            o = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            c = (0, x.bG)([ef.A], () => ef.A.defaultRoute),
            u = (0, x.bG)([lS], () => lS.isUnderageAnonymous()),
            m = (function (e) {
                let [t, n] = h.useState(!1);
                return (
                    h.useEffect(() => {
                        let e = !1;
                        return (
                            eT().then((t) => {
                                e || "denied" !== t || n(!0);
                            }),
                            () => {
                                e = !0;
                            }
                        );
                    }, []),
                    t || e === D.fAW.OPEN_FAIL
                );
            })(a),
            g = (function (e) {
                let [t, n] = h.useState(!1);
                return (
                    h.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    !e && !t
                );
            })(m),
            [f, p] = h.useState(!1);
        h.useLayoutEffect(() => {
            (a === D.fAW.OPEN || r?.state === D.elq.APP_OPENED) && p(!0);
        }, [r?.state, a]);
        let A = l ? sW : sH,
            _ = h.useCallback((e) => j.Ay.getInviteContext(e, r), [r]),
            N = h.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? j.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : j.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            v = h.useCallback(() => {
                (L.default.track(D.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    j.Ay.acceptInvite({
                        inviteKey: t,
                        context: _(D.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            (ea(e), null != e.channel && (m ? N(e) : j.Ay.openApp(t, e.channel.id)));
                        },
                    }).catch((e) => {
                        (0, se.mX)(e?.code);
                    }));
            }, [t, _, r?.code, r?.guild?.id, m, N]),
            C = h.useCallback(() => {
                i(c);
            }, [c, i]);
        if (
            ((0, l6.Ay)(() => {
                let e = eJ.default.getAnalyticsToken();
                if (
                    (null != e
                        ? E.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eJ.default.getId() })
                        : eJ.default.isAuthenticated() && nQ.rQ({ withAnalyticsToken: !0 }).catch(D.tEg),
                    L.default.track(D.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, B.d0)("invite"),
                    lJ.VP || e0.A.launch("discord://" + D.BVt.INVITE(t), () => void 0),
                    !l && u)
                ) {
                    let { baseCode: e } = (0, e1.y$)(t);
                    (0, U.bG)(D.BVt.INVITE_LOGIN(e));
                }
            }),
            h.useEffect(() => {
                r?.state === D.elq.APP_NOT_OPENED && N();
            }, [r?.state, N]),
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
                    c = (0, iq.Ay)(i),
                    u = (0, iq.Ay)(l);
                (h.useEffect(() => {
                    if (s === sW && i && !1 === c) {
                        let e = eJ.default.getFingerprint();
                        if (null != e) {
                            let i = (0, e$.d)(e);
                            L.default.track(D.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, e1.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        j.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(D.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch((e) => {
                            (0, se.mX)(e?.code);
                        });
                    }
                }, [i, c, s, r, a, t, n]),
                    h.useEffect(() => {
                        if (null != t && s === sH && i && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lM.C)(lW.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, l5.Lt)(t.flags ?? 0, l8.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                D.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                D.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? o(D.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : j.Ay.transitionToInviteOnboarding(t, { transitionTo: o });
                                } else j.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, i, c, o, s, n]),
                    h.useEffect(() => {
                        null == t ||
                            (l !== u &&
                                (l === D.fAW.OPEN
                                    ? L.default.track(
                                          D.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, e1.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != tt.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? tu.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === D.fAW.OPEN_FAIL &&
                                      L.default.track(D.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, e1.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tu.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, u, n]));
            })({
                invite: r,
                inviteKey: t,
                authenticated: o,
                nativeAppState: a,
                mode: A,
                getAcceptInviteContext: _,
                handleContinue: N,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = a === D.fAW.OPEN;
        if (f || I || r.state === D.elq.APP_OPENED)
            return (0, d.jsx)(sY, { invite: r, inviteKey: t, rpcConnected: I, onContinue: N });
        let { state: S } = r;
        if (S === D.elq.APP_NOT_OPENED) return (0, d.jsx)(s0, { handleDefaultTransition: C });
        if ([D.elq.RESOLVING, D.elq.ACCEPTING, D.elq.APP_OPENING].includes(S)) {
            let e =
                S === D.elq.ACCEPTING ? q.intl.string(q.t["6wsY16"]) : (D.elq.RESOLVING, q.intl.string(q.t["Z+hCVU"]));
            return (0, d.jsx)(s$, { title: e });
        }
        if (S === D.elq.EXPIRED) return (0, d.jsx)(sJ, { banned: !1, invite: r, handleDefaultTransition: C });
        if (S === D.elq.BANNED) return (0, d.jsx)(sJ, { banned: !0, invite: r, handleDefaultTransition: C });
        if (S === D.elq.RESOLVED) {
            if (o && (0, l5.Lt)(r.flags ?? 0, l8.Q.IS_GUEST_INVITE))
                return (
                    j.Ay.openApp(t),
                    l7.u.set(st.B, t),
                    (0, d.jsx)(sY, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(D.BVt.APP) })
                );
            if (null != r.type && tu.uR.has(r.type) && g)
                return (0, d.jsx)(s$, { title: q.intl.string(q.t["Z+hCVU"]) });
            if (!o && lJ.VP)
                return A === sW
                    ? (0, d.jsx)(sz, { invite: r, transitionTo: i, location: n })
                    : (0, d.jsx)(sX, {
                          invite: r,
                          onLoginStart: function () {
                              L.default.track(D.HAw.INVITE_LOGIN, {
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
        return S === D.elq.RESOLVED || S === D.elq.ERROR
            ? (0, d.jsx)(sq, {
                  invite: r,
                  inviteKey: t,
                  handleAccept: v,
                  handleDefaultTransition: C,
                  expirationLocation: o ? "InvitePage" : void 0,
              })
            : null;
    }),
    re = iv(function (e) {
        let t = {
            guildTemplate: (0, x.bG)([eR.A], () => eR.A.getGuildTemplate(e.code)),
            nativeAppState: (0, x.bG)([iD.A], () => iD.A.getState(e.code)),
            authenticated: (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            defaultRoute: (0, x.bG)([ef.A], () => ef.A.defaultRoute),
        };
        return (0, d.jsx)(l1, { ...e, ...t });
    }),
    rt = iv(lz),
    rn = iv(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, x.bG)([tn.A], () => tn.A.getInvite(t));
        return (
            h.useEffect(() => {
                let e = eJ.default.getAnalyticsToken();
                (null != e &&
                    E.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eJ.default.getId() }),
                    (0, B.d0)("invite_mobile"),
                    L.default.track(D.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }));
            }, []),
            (0, d.jsx)(nD, {
                invite: i,
                onAcceptInvite: function (e) {
                    nI(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    nI(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    ri = iv(lK),
    rl = iv(function (e) {
        let { location: t, transitionTo: i = U.pX } = e,
            [l, s] = h.useState("submitting");
        function r() {
            return eq().os?.family === "Android" || eq().os?.family === "iOS"
                ? null
                : (0, d.jsx)(W.$, {
                      text: q.intl.string(q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(D.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        if (
            ((0, l6.Ay)(() => {
                (0, B.d0)("authorize_ip");
                let e = (0, ex.A)(t);
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
        )
            return (0, d.jsxs)(P.Ay, {
                children: [
                    (0, d.jsx)("img", { alt: "", src: n(792009), className: Z.SX }),
                    (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t["f/54az"]) }),
                    (0, d.jsx)(P.tK, { className: Z.C2, children: q.intl.string(q.t.i3ehMr) }),
                    r(),
                ],
            });
        if ("succeeded" === l) {
            let e = r();
            return (0, d.jsxs)(P.Ay, {
                contentClassName: s4.oe,
                children: [
                    (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.iG0SlK) }),
                    (0, d.jsxs)(eG.B, {
                        gap: 40,
                        children: [(0, d.jsx)(P.tK, { children: q.intl.string(q.t["Elv+qt"]) }), e],
                    }),
                ],
            });
        }
        return (0, d.jsxs)(P.Ay, {
            children: [(0, d.jsx)(P.CK, {}), (0, d.jsx)(P.hE, { children: q.intl.string(q.t["9exy+V"]) })],
        });
    }),
    rs = iv(function (e) {
        let { location: t } = e,
            [i, l] = h.useState("submitting");
        return (h.useEffect(() => {
            (0, B.d0)("authorize_payment");
            let e = (0, ex.A)(t);
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
            ? (0, d.jsxs)(P.Ay, {
                  children: [
                      (0, d.jsx)("img", { alt: "", src: n(678985), className: Z.SX }),
                      (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.GHRpue) }),
                      (0, d.jsx)(P.tK, { className: Z.C2, children: q.intl.string(q.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, d.jsxs)(P.Ay, {
                    children: [
                        (0, d.jsx)("img", { alt: "", src: n(586430), className: Z.SX }),
                        (0, d.jsx)(P.hE, { className: Z.QB, children: q.intl.string(q.t.ihHX53) }),
                        (0, d.jsx)(P.tK, { className: Z.C2, children: q.intl.string(q.t["pGPCv+"]) }),
                    ],
                })
              : (0, d.jsxs)(P.Ay, {
                    children: [(0, d.jsx)(P.CK, {}), (0, d.jsx)(P.hE, { children: q.intl.string(q.t.T3vC7n) })],
                });
    }),
    rr = iv(function (e) {
        let { location: t, transitionTo: n = s5 } = e,
            [i, l] = h.useState("submitting"),
            s = h.useRef(void 0);
        (0, l6.Ay)(() => {
            (0, B.d0)("verify_email");
            let e = (0, ex.A)(t);
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
        let r = h.useCallback(() => {
                n(D.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = h.useCallback(() => {
                (L.default.track(D.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, s8.A)("verify_email"));
            }, []);
        return "failed" === i
            ? (0, d.jsx)(eF, {
                  title: q.intl.string(q.t["PCgG3+"]),
                  subtitle: q.intl.string(q.t.tQpeA3),
                  buttonText: q.intl.string(q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, d.jsx)(eF, {
                    title: q.intl.string(q.t["dAfGb+"]),
                    buttonText: q.intl.string(q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, d.jsx)(ek, { alt: q.intl.string(q.t["dAfGb+"]) }),
                })
              : (0, d.jsx)(eF, {
                    title: q.intl.string(q.t["0c8+5n"]),
                    subtitle: q.intl.string(q.t.ULTCBE),
                    loading: !0,
                });
    }),
    ra = iv(function () {
        let [e, t] = h.useState(""),
            [i, l] = h.useState(""),
            [s, r] = h.useState(!1),
            [a, o] = h.useState(!1),
            [c, u] = h.useState(null),
            [m, g] = h.useState(null),
            f = (0, x.bG)([ev.A], () => ev.A.getCountryCode()),
            p = f.code.split(" ")[0];
        async function E() {
            try {
                await ej.A.resendCode(e);
            } catch (e) {
                g(e.body.message);
            }
        }
        async function A() {
            r(!0);
            try {
                let { token: t } = await ej.A.verifyPhone(p + e, i);
                (u(null), g(null), o(!0), ej.A.validatePhoneForSupport(t));
            } catch (e) {
                e.body.message ? (u(null), g(e.body.message)) : (u(e.body.phone), g(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, d.jsxs)(P.Ay, {
            children: [
                (0, d.jsx)(P._V, { src: n(142041) }),
                (0, d.jsxs)(P.hE, {
                    className: M()(Z.QX, eI.Uu, eI.wq, eI.Hu),
                    children: [
                        q.intl.string(q.t.WWzQta),
                        (0, d.jsx)(e_.y, { size: "md", color: "currentColor", className: Z.oY }),
                    ],
                }),
            ],
        });
        return a
            ? _
            : (0, d.jsxs)(P.Ay, {
                  children: [
                      (0, d.jsx)(P.hE, { children: q.intl.string(q.t.o4JNrO) }),
                      (0, d.jsx)(P.tK, { className: Z.Ot, children: q.intl.string(q.t.y0tVbq) }),
                      (0, d.jsxs)(P.eB, {
                          className: Z.QX,
                          children: [
                              (0, d.jsx)(eC.A, {
                                  label: q.intl.string(q.t["eJnn0+"]),
                                  alpha2: f.alpha2,
                                  countryCode: p,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eN.Pd.PHONE,
                                  error: c,
                              }),
                              (0, d.jsx)(P.pd, {
                                  className: Z.QX,
                                  label: q.intl.string(q.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, d.jsx)(eg.Q, { text: q.intl.string(q.t["5b60gi"]), onClick: E }),
                              (0, d.jsx)("div", {
                                  className: Z.QX,
                                  children: (0, d.jsx)(W.$, {
                                      text: q.intl.string(q.t.i4jeWR),
                                      fullWidth: !0,
                                      onClick: A,
                                      loading: s,
                                  }),
                              }),
                          ],
                      }),
                  ],
              });
    }),
    ro = iv(s3.A),
    rc = iv(iL),
    ru = iv(eA),
    rd = iv(function (e) {
        let { location: t } = e,
            [n, i] = h.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, x.bG)([eK], () => eK.getState());
        function a() {
            let e, t;
            ((e = (function (e) {
                let t = eq().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eJ.default.getFingerprint(),
                        n = (0, eZ.I_)();
                    return (
                        ez()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eZ.Ay)((0, eY.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eZ.X7)(e)) &&
                    L.default.track(D.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, e$.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                e0.A.launch(e, (e) => {
                    e || (0, U.bG)(ef.A.fallbackRoute);
                }),
                i(!0));
        }
        return (h.useEffect(() => {
            let e = (0, ex.A)(t);
            (ew.A.verify(e), (0, B.d0)("verify_hub_email"));
        }, [t]),
        n)
            ? (0, d.jsx)(eF, {
                  title: q.intl.string(q.t.csrAMJ),
                  subtitle: q.intl.string(q.t["m1+IBn"]),
                  buttonText: q.intl.string(q.t.fIv16B),
                  onButtonClick: () => (0, U.pX)(D.BVt.CHANNEL(r)),
              })
            : l
              ? (0, d.jsx)(eF, {
                    title: q.intl.string(q.t["dAfGb+"]),
                    buttonText: q.intl.string(q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, d.jsx)(ek, { alt: q.intl.string(q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, d.jsx)(eF, {
                      title: q.intl.string(q.t["PCgG3+"]),
                      subtitle: q.intl.string(q.t.tQpeA3),
                      buttonText: q.intl.string(q.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, d.jsx)(eF, {
                      title: q.intl.string(q.t["0c8+5n"]),
                      subtitle: q.intl.string(q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    rh = iv(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, iI.W)(nF.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, d.jsx)(iy, { match: t, location: n, attemptDeepLink: i });
    }),
    rm = iv(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, iI.W)(nF.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, d.jsx)(iy, { match: t, location: n, attemptDeepLink: i });
    }),
    rg = iv(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, iI.W)(nF.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, d.jsx)(iy, { match: t, location: n, attemptDeepLink: i });
    }),
    rf = iv(function (e) {
        let { location: t } = e,
            n = (0, x.bG)([eJ.default], () => eJ.default.isAuthenticated()),
            i = (0, x.bG)([ey.A], () => ey.A.hasLoadedExperiments),
            l = s2.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = h.useState(!1),
            [a, o] = h.useState(q.intl.string(q.t["9exy+V"])),
            [c, u] = h.useState(!0);
        function m(e) {
            switch (e) {
                case D.t02.INVALID_FORM_BODY:
                case D.t02.DSA_RSL_REPORT_NOT_FOUND:
                    o(q.intl.string(q.t.bzXDfc));
                    break;
                case D.t02.DSA_RSL_ALREADY_REQUESTED:
                    o(q.intl.string(q.t.rV00wq));
                    break;
                case D.t02.DSA_RSL_LIMITED_TIME:
                    o(q.intl.string(q.t["0dI29h"]));
                    break;
                case D.t02.DSA_RSL_REPORT_INELIGIBLE:
                    o(q.intl.string(q.t["RGa/Gb"]));
                    break;
                default:
                    o(q.intl.string(q.t["0QLzfv"]));
            }
        }
        return (
            h.useEffect(() => {
                n
                    ? (u(!0),
                      nQ
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => u(!1))
                          .catch(() => u(!1)))
                    : u(!1);
            }, [n]),
            h.useEffect(() => {
                i || l || A.A.getExperiments();
            }, [i, l]),
            h.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, nX.q)(e) : void 0;
                        null != t ? o(q.intl.string(q.t.e6mZMt)) : m(t.body?.code);
                    } catch (e) {
                        m(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                (r(!0), e((0, ex.A)(t)), (0, B.d0)("report_second_look"));
            }, [t]),
            l &&
                !c &&
                (0, d.jsxs)(P.Ay, {
                    children: [(0, d.jsx)(P.hE, { className: Z.QB, children: a }), s && (0, d.jsx)(eP.y, {})],
                })
        );
    }),
    rp = iv(es),
    rx = iv(function (e) {
        let { match: t, location: i } = e,
            l = (0, m.parse)(i.search).token,
            [s, r] = h.useState("loading"),
            a = h.useRef(!1),
            o = h.useCallback(async (e) => {
                try {
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await A.A.oneTimeLogin(e),
                        r("login_success"),
                        L.default.track(D.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(D.BVt.APP));
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error"));
                }
            }, []),
            c = h.useCallback((e) => {
                let t = eJ.default.getFingerprint() ?? eJ.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                e0.A.launch(n, (e) => {
                    e
                        ? (L.default.track(D.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          r("app_launched"))
                        : r("app_launch_not_supported");
                });
            }, []),
            u = h.useCallback(
                (e) => {
                    let t = eJ.default.getFingerprint() ?? eJ.default.getId(),
                        i = eJ.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(D.e$_.DEEP_LINK, {
                                type: nF.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (L.default.track(D.HAw.DEEP_LINK_CLICKED, {
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
            (h.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = f.Fr ? "mobile" : f.v1 ? "tablet" : (0, nw.isDesktop)() ? "desktop_app" : "web";
                if ((L.default.track(D.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (f.Fr || f.v1) {
                    let e = L.default.getSuperProperties()?.os;
                    L.default.track(D.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, nw.isDesktop)() ? o(l) : a.current || ((a.current = !0), r("rpc_attempting"), u(l));
            }, [l, i, o, u]),
            f.Fr || f.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, d.jsx)(nB, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, U.MX)()) return null;
        if ("app_launched" === s)
            return (0, d.jsx)(nV, {
                title: q.intl.string(q.t.RvUUOy),
                subtitle: q.intl.string(q.t["5/lR0g"]),
                buttonText: q.intl.string(q.t["2ixEBi"]),
                buttonOnClick: () => {
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), o(l));
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, d.jsx)(nV, {
                title: q.intl.string(q.t.qq4tjT),
                subtitle: q.intl.string(q.t.CVxYRo),
                buttonText: q.intl.string(q.t["2ixEBi"]),
                buttonOnClick: () => o(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, d.jsx)(nV, {
                title: q.intl.string(q.t.RtCSr1),
                subtitle: q.intl.string(q.t["S+YjYJ"]),
                buttonText: q.intl.string(q.t.j3cG2p),
                buttonOnClick: () => {
                    (L.default.track(D.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, U.pX)(D.BVt.LOGIN));
                },
            });
        }
        return (0, d.jsx)(P.Ay, { children: (0, d.jsx)(P.CK, {}) });
    });
class rE extends h.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, m.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(D.BVt.ME) || (!(0, p.e)(s) && !eh(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, iu.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, ic.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = ti.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        (null != e &&
            (!t && n && A.A.getExperiments(!0),
            null != eJ.default.getInstallationForTracking() && (0, eb.fetchInstallationExperiments)(null),
            L.default.track(
                D.HAw.INVITE_OPENED,
                { invite_code: (0, e1.m0)(e), load_time: ih.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            G.initialize(),
            (0, B.DC)());
    }
    componentDidUpdate(e) {
        (!e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash());
    }
    componentWillUnmount() {
        (null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            G.terminate());
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
        if (e?.state === D.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, ic.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await j.Ay.resolveInvite(e, D.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: f.Fr || f.v1,
        });
        if (null != t && (ea(t), null != t.type && tu.uR.has(t.type))) {
            if ("denied" === (await eT()))
                return void L.default.track(D.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, e1.m0)(e),
                    reason: "lna_denied",
                    invite_type: tu.Xd[t.type],
                });
            j.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (L.default.track(
                D.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: ih.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eL.A.resolveGuildTemplate(e),
            eL.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            _.Ay.resolveGiftCode(e, !0, !0)
                .then((t) => {
                    null != t && null == t.giftCode.promotion && E.h.wait(() => _.Ay.openNativeGiftCodeModal(e));
                })
                .catch(_.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, d.jsxs)(iC.A, {
            splash: e,
            children: [
                (0, d.jsx)(er.A, { path: D.BVt.LOGIN_HANDOFF, render: (e) => (0, d.jsx)(s9, { ...e, redirectTo: t }) }),
                (0, d.jsx)(er.A, { path: D.BVt.LOGIN_ONE_TIME, render: (e) => (0, d.jsx)(rx, { ...e }) }),
                (0, d.jsx)(er.A, {
                    impressionName: g.ImpressionNames.USER_LOGIN,
                    path: D.BVt.LOGIN,
                    render: (e) => (0, d.jsx)(s7, { ...e, redirectTo: t }),
                }),
                (0, d.jsx)(er.A, {
                    impressionName: g.ImpressionNames.USER_REGISTRATION,
                    path: D.BVt.REGISTER,
                    render: (e) => (0, d.jsx)(ri, { ...e, redirectTo: t }),
                }),
                (0, d.jsx)(er.A, {
                    path: D.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, d.jsx)(rt, { login: !0, ...e }),
                }),
                (0, d.jsx)(er.A, { path: D.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, d.jsx)(rt, { ...e }) }),
                (0, d.jsx)(er.A, {
                    path: [D.BVt.INVITE_LOGIN(":inviteCode"), D.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, e1.fB)(t ?? "", i.search);
                        return f.Fr || f.v1
                            ? (0, d.jsx)(rn, { inviteKey: s, transitionTo: l }, s)
                            : (0, d.jsx)(
                                  s6,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === D.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, d.jsx)(er.A, {
                    path: [
                        D.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        D.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
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
                        return f.Fr || f.v1
                            ? (0, d.jsx)(l4, { code: t }, t)
                            : (0, d.jsx)(re, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === D.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, d.jsx)(er.A, { path: D.BVt.VERIFY, render: (e) => (0, d.jsx)(rr, { ...e }) }),
                (0, d.jsx)(er.A, { path: D.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, d.jsx)(rd, { ...e }) }),
                (0, d.jsx)(er.A, { path: D.BVt.VERIFY_REQUEST, render: (e) => (0, d.jsx)(ra, { ...e }) }),
                (0, d.jsx)(er.A, { path: D.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, d.jsx)(rc, { ...e }) }),
                (0, d.jsx)(er.A, {
                    path: D.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, d.jsx)(ru, { ...e }),
                }),
                (0, d.jsx)(er.A, { path: D.BVt.AUTHORIZE_IP, render: (e) => (0, d.jsx)(rl, { ...e }) }),
                (0, d.jsx)(er.A, {
                    path: D.BVt.REJECT_IP,
                    render: (e) => (0, d.jsx)(ro, { source: D.BVt.REJECT_IP, ...e }),
                }),
                (0, d.jsx)(er.A, {
                    path: D.BVt.REJECT_MFA,
                    render: (e) => (0, d.jsx)(ro, { source: D.BVt.REJECT_MFA, ...e }),
                }),
                (0, d.jsx)(er.A, { path: D.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, d.jsx)(rs, { ...e }) }),
                (0, d.jsx)(er.A, { path: D.BVt.RESET, render: (e) => (0, d.jsx)(ro, { source: D.BVt.RESET, ...e }) }),
                (0, d.jsx)(er.A, {
                    path: D.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, d.jsx)(rg, { ...e }),
                }),
                (0, d.jsx)(er.A, {
                    path: D.BVt.CHANNELS_GAME_SHOP(nM.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, d.jsx)(rm, { ...e }),
                }),
                (0, d.jsx)(er.A, {
                    path: D.BVt.CHANNEL(nM.pv.guildId(), nM.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, d.jsx)(rh, { ...e }),
                }),
                (0, d.jsx)(er.A, { path: D.BVt.REPORT, render: () => (0, d.jsx)(ia, {}) }),
                (0, d.jsx)(er.A, { path: D.BVt.REPORT_SECOND_LOOK, render: (e) => (0, d.jsx)(rf, { ...e }) }),
                (0, d.jsx)(er.A, { path: D.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, d.jsx)(rp, { ...e }) }),
            ],
        });
    }
}
let rA = x.Ay.connectStores([eJ.default, tn.A, io.A, ey.A, eR.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, e1.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eJ.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? io.A.get(s) : null,
        invite: null != l ? tn.A.getInvite(l) : null,
        guildTemplate: null != r ? eR.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: ey.A.hasLoadedExperiments,
    };
})(rE);
