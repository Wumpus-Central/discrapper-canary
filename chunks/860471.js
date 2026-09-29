(n.r(t), n.d(t, { default: () => rg }));
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
    A = n(228366),
    E = n(830215),
    _ = n(869038),
    j = n(376728),
    v = n(636537),
    N = n(6981),
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
    k = n(652215);
function D(e, t) {
    L.default.track(k.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class w extends O.A {
    _initialize() {
        (A.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            A.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    _terminate() {
        (A.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            A.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff));
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? v.Bo.post({ url: k.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      ((0, N.uA)(t.user), E.A.loginToken(t.token, !1), D(!0, l));
                  },
                  (e) => {
                      (null != i && D(!1, l),
                          E.A.setFingerprint(i),
                          (0, N.mZ)(),
                          l === y.ROLE_SUBSCRIPTION &&
                              L.default.track(k.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              }));
                  },
              )
            : null != i
              ? (E.A.setFingerprint(i), D(!1, l), (0, N.mZ)())
              : (E.A.setFingerprint(i), (0, N.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = R.A.key;
        null != i && R.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (E.A.setFingerprint(null), (0, N.J0)());
    };
}
let P = new w();
var G = n(854378),
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
    q = n(375708),
    Y = n(652989),
    $ = n(221851);
function Z(e) {
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
                (0, d.jsx)(G._V, { src: null == u ? n(79418) : n(579656), className: M()($.SX, $.Ot) }),
                (0, d.jsx)(G.hE, { children: q.intl.string(q.t.IfBQ56) }),
                null != u && "" !== u
                    ? (0, d.jsx)(H.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: u })
                    : null,
                (0, d.jsxs)(G.eB, {
                    className: M()($.SX, $.QX),
                    children: [
                        (0, d.jsx)(G.pd, {
                            name: "password",
                            type: "password",
                            label: q.intl.string(q.t["8dM4FO"]),
                            setRef: x,
                            className: $.SX,
                            value: f,
                            onChange: p,
                            error: o,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: q.intl.string(q.t["yY/PXY"]),
                        }),
                        (0, d.jsx)("div", {
                            className: $.Ot,
                            children: (0, d.jsx)(W.$, {
                                text: q.intl.string(q.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === f.length) {
                                            (c(q.intl.string(q.t.R98xD5)), Q._.dispatch(k.jej.WAVE_EMPHASIZE));
                                            return;
                                        }
                                        return (
                                            null != u && m(null),
                                            null != o && c(null),
                                            t(""),
                                            a(!0),
                                            z.A.post({
                                                url: k.Rsh.ACCOUNT_REVERT,
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
                                                                statusPageURL: k.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new K.A(e);
                                                        t.hasFieldErrors()
                                                            ? c(t.getAnyErrorMessage())
                                                            : m(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case k.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return q.intl.string(q.t["11zzGR"]);
                                                                          case k.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return q.intl.string(q.t["6qmgaI"]);
                                                                          case k.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return q.intl.string(q.t.bChnKs);
                                                                          default:
                                                                              return q.intl.format(q.t.aTVNes, {
                                                                                  statusPageURL: k.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    Q._.dispatch(k.jej.WAVE_EMPHASIZE);
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
            (0, d.jsx)(G._V, { src: n(79418), className: M()($.SX, $.Ot) }),
            (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t["8UcxI6"]) }),
            (0, d.jsx)(H.E, { variant: "text-md/normal", children: q.intl.string(q.t.O37hMl) }),
            (0, d.jsxs)(G.eB, {
                className: M()($.SX, $.QX),
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
                        onClick: () => i(k.BVt.LOGIN, { source: "account_revert" }),
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
            (0, d.jsx)(G._V, { src: n(79418), className: M()($.SX, $.Ot) }),
            (0, d.jsx)(G.hE, { children: q.intl.string(q.t.ailkVG) }),
            (0, d.jsx)(G.tK, { children: q.intl.format(q.t["4ZMVCI"], { email: t }) }),
            (0, d.jsx)(H.E, {
                className: M()($.QB, $.QX),
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
                    children: (0, d.jsx)(Z, {
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
        return (0, d.jsx)(G.Ay, {
            style: { padding: 0 },
            children: (0, d.jsx)(el, { width: 464, token: e, ...this.props }),
        });
    }
}
var er = n(549711);
function ea(e) {
    A.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
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
            s = (await v.Bo.post({ url: k.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
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
class eA extends h.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, ex.A)(this.props.location),
            t = (0, m.parse)(this.props.location.search);
        (v.Bo.post({
            url: k.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
        return (0, d.jsx)(G.Ay, { children: (0, d.jsx)(G.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.Z33eiP) }),
                (0, d.jsx)(G.tK, { children: q.intl.format(q.t.NRWtfC, { guildName: n.name }) }),
                (0, d.jsx)("div", {
                    className: $.eT,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, d.jsx)("div", {
                    className: $.Ot,
                    children: (0, d.jsx)(eg.Q, {
                        text: q.intl.string(q.t["cGmT/J"]),
                        onClick: () => {
                            t(k.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G._V, { src: n(37772), className: $.SX }),
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.ox9hIS) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t["/dcuR5"]) }),
                (0, d.jsx)("div", {
                    className: $.eT,
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
let eE = x.Ay.connectStores([ef.A], () => ({ defaultRoute: ef.A.defaultRoute }))(eA);
var e_ = n(628284),
    ej = n(557722),
    ev = n(628387),
    eN = n(148864),
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
    eO = n(31008);
function ek(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: s, height: r },
        src: eO.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eD = n(154672),
    ew = n(331322),
    eP = n(289873),
    eG = n(297264),
    eU = n(47084);
function eB(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, d.jsx)(G.Ay, {
        className: eU.kL,
        children: (0, d.jsxs)(ew.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, d.jsxs)(ew.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, d.jsxs)(ew.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, d.jsx)(ew.B, {
                                        align: "center",
                                        justify: "center",
                                        className: eU.Sl,
                                        children: l,
                                    }),
                                r && (0, d.jsx)(eP.y, { type: eP.y.Type.SPINNING_CIRCLE }),
                                (0, d.jsx)(eG.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, d.jsx)(H.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: eU.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, d.jsx)(W.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eF = !1,
    eV = null,
    eM = null;
class eH extends x.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eF, verifyErrors: eV, redirectGuildId: eM };
    }
}
let eW = new eH(A.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        ((eF = !0), (eV = null), (eM = t));
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        ((eF = !1), (eV = t));
    },
});
var eK = n(284009),
    eQ = n.n(eK),
    ez = n(481613),
    eX = n.n(ez),
    eq = n(400253),
    eY = n(742821),
    e$ = n(80703),
    eZ = n(280450),
    eJ = n(877062);
x.Ay.initialize();
var e0 = n(842241),
    e1 = n(202091),
    e2 = n(717421),
    e4 = n(661531),
    e3 = n(993077),
    e8 = n(235986),
    e5 = n(408738);
function e7(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(G._V, { src: n(431979) }),
            (0, d.jsx)(G.hE, { className: M()($.QX, $.QB, eI.tR), children: q.intl.string(q.t.eL5z0i) }),
            (0, d.jsx)(G.tK, { className: $.C2, children: q.intl.string(q.t.poAv63) }),
            (0, d.jsxs)(e3.Z, {
                className: e5.Nr,
                type: e3.Z.Types.CUSTOM,
                children: [
                    (0, d.jsx)("img", { alt: "", className: e5.q8, src: n(355912) }),
                    (0, d.jsx)("img", { alt: "", className: e5.dw, src: n(610925) }),
                    (0, d.jsxs)(e8.A, {
                        className: e5.p_,
                        direction: e8.A.Direction.VERTICAL,
                        align: e8.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, d.jsx)(H.E, {
                                tag: "strong",
                                className: e5.p8,
                                variant: "text-md/normal",
                                style: { color: e4.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, d.jsx)("div", {
                                className: e5.x6,
                                children: (0, d.jsx)(W.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e9(e) {
    let { text: t, buttonCta: n, theme: i = k.NJ8.DARK, onClick: l } = e;
    return (0, d.jsx)(G.Ay, { theme: i, children: (0, d.jsx)(e7, { text: t, buttonCta: n, onClick: l }) });
}
var e6 = n(765671),
    te = n(71393),
    tt = n(299091),
    tn = n(486020),
    ti = n(403362),
    tl = n(778712),
    ts = n(47167),
    tr = n(769015),
    ta = n(714991),
    to = n(427262),
    tc = n(172799),
    tu = n(330936),
    td = n(622625);
function th(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function tm(e) {
    return e.target_type === tc.yV.STREAM && null != e.target_user;
}
function tg(e) {
    return e.channel?.type === k.rbe.GROUP_DM;
}
function tf(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tp(e) {
    return e.state === k.elq.ACCEPTED;
}
function tx(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tA(e) {
    let t;
    return !tx(e) && (!!tf(e) || (null != e.inviter && !tp(e) && ((t = th(e)), !((t?.memberCount ?? 0) > 100))));
}
function tE(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, d.jsx)(tr.A, { className: td.Z2, game: i, size: td.q6 })
        : null != n
          ? (0, d.jsx)(G.eu, { src: n.getAvatarURL(void 0, 100), size: tl._3.DEPRECATED_SIZE_100, className: td.my })
          : null != t
            ? (0, d.jsx)(G.$v, { guild: t, size: G.$v.Sizes.LARGER, className: td.$f, animate: !0 })
            : null;
}
function t_(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = th(t);
    return null == l || tA(t) || t?.guild?.id === tu.TA
        ? null
        : (0, d.jsx)(G.R1, {
              className: M()(td.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function tj(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = h.useMemo(
            () =>
                n
                    ? null
                    : tm(t) && null != t.target_user
                      ? tn.Ay.getUserAvatarURL(t.target_user)
                      : tA(t) && null != t.inviter
                        ? tn.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = q.intl.string(q.t["3rE1P8"]);
    return (
        tg(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? q.intl.format(q.t.Lu4h18, { username: t.inviter.username })
                      : q.intl.string(q.t.OsdY8B))
            : tm(t) && null != t.target_user
              ? (l = q.intl.formatToPlainString(q.t.x2L32Q, { username: t.target_user.username }))
              : tp(t)
                ? (l = q.intl.string(q.t["FDsl+J"]))
                : tA(t) &&
                  null != t.inviter &&
                  (l = q.intl.format(q.t.spU2mI, { username: to.Ay.getFormattedName(t.inviter) })),
        (0, d.jsxs)("div", {
            className: td.JB,
            children: [
                null != i &&
                    (0, d.jsx)("div", {
                        className: td._t,
                        children: (0, d.jsx)(G.eu, { src: i, size: tl._3.SIZE_24 }),
                    }),
                (0, d.jsx)(G.tK, { className: td.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tv(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: o } = e,
        c = (0, ts.Ay)(r);
    if (null != s)
        (o && null == a && (t = (0, d.jsx)(G.$v, { guild: s, size: G.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, d.jsxs)("div", {
                    className: td.JB,
                    children: [
                        (0, d.jsx)(G.tK, { className: td.R9, children: q.intl.string(q.t["3gg9fF"]) }),
                        (0, d.jsxs)("div", {
                            className: td.bo,
                            children: [
                                (0, d.jsx)(G.$v, { guild: s, size: G.$v.Sizes.SMALL }),
                                (0, d.jsx)(eG.D, {
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
        let e = to.Ay.getFormattedName(l);
        null != c && "" !== c
            ? ((n = c), null != r.icon && (t = (0, d.jsx)(G.F4, { channel: r, size: tl._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = to.Ay.getFormattedName(l);
        ((n = q.intl.formatToPlainString(q.t["4aF92R"], { username: e })),
            (i = (0, d.jsx)(G.tK, { className: td.b$, children: q.intl.format(q.t.Quj7HX, { username: e }) })));
    }
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(G.hE, {
                className: td.DD,
                children: [
                    null != s ? (0, d.jsx)(ta.A, { guild: s, className: td.n2, tooltipPosition: "left" }) : null,
                    t,
                    n,
                ],
            }),
            i,
        ],
    });
}
var tN = n(395671),
    tC = n(95701),
    tI = n(889227),
    tS = n(945810);
let tT = (0, tS.mj)({
    name: "2026-09-silp-cta-copy-tests",
    kind: "user",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "clarity" }, 2: { variant: "clarity_softer" }, 3: { variant: "low_commitment" } },
});
function ty(e) {
    return null != e && null != e.guild && (null == e.type || e.type === tc.Xd.GUILD);
}
function tb(e) {
    return tT.useConfig({ location: e }).variant;
}
function tR(e) {
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
var tL = n(548118),
    tO = n(557582),
    tk = n(167630),
    tD = n(424547);
function tw(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, d.jsxs)("div", {
        className: tD.s4,
        children: [
            (0, d.jsx)(tO.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tD.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, d.jsx)("div", {
                    className: tD.yW,
                    children: (0, d.jsx)(tk.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, d.jsx)("div", {
                className: tD.xG,
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
        className: tD.kQ,
        children: [
            (0, d.jsx)(eG.D, { className: tD.s7, variant: "text-sm/medium", children: q.intl.string(q.t.Eabu1z) }),
            (0, d.jsxs)("div", {
                className: tD.bo,
                children: [
                    (0, d.jsx)(tL.Ay, { guild: n, active: !0, size: tL.Ay.Sizes.MEDIUM }),
                    (0, d.jsxs)("div", {
                        className: tD.bW,
                        children: [
                            (0, d.jsxs)(H.E, {
                                className: tD.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, d.jsx)(ta.A, { guild: n, className: tD.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, d.jsx)(t_, { invite: t, textClassName: tD.kS, className: tD.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, d.jsx)("details", {
                    className: tD.x_,
                    children: (0, d.jsx)(H.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tG(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, d.jsx)(tw, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tU = n(578564);
function tB(e) {
    let { text: t, onClick: n, loading: i } = e;
    return (0, d.jsx)(W.$, { variant: "primary", size: "md", text: t, onClick: n, loading: i, fullWidth: !0 });
}
function tF(e) {
    let t = tb("InviteAcceptMobile");
    return (0, d.jsx)(tB, { ...e, text: tR(t) });
}
function tV(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, ep.DY)(t.guild) : null,
        s = null != t.channel ? (0, tC.OY)(t.channel) : null,
        r = null != t.target_application ? new tN.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tI.A(t.inviter),
        o =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(k.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            tg(t),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case k.elq.ACCEPTING:
                case k.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        u = { invite: t, user: a, guild: l, channel: s, application: r };
    return tx(t)
        ? (0, d.jsx)(tG, { invite: t, channel: s, isSubmitting: c, onAcceptInvite: n })
        : (0, d.jsxs)("div", {
              className: tU.kL,
              children: [
                  (0, d.jsx)(tE, { application: r, guild: l, user: o || tf(t) ? a : null }),
                  tf(t) ? null : (0, d.jsx)(tj, { ...u, showBigUserIcon: o }),
                  (0, d.jsx)(tv, { ...u, showBigUserIcon: o }),
                  (0, d.jsx)(t_, { ...u }),
                  (0, d.jsx)("div", {
                      className: tU.xG,
                      children: ty(t)
                          ? (0, d.jsx)(tF, { onClick: n, loading: c })
                          : (0, d.jsx)(tB, { text: tR(null), onClick: n, loading: c }),
                  }),
              ],
          });
}
var tM = n(43990),
    tH = n(241524),
    tW = n(573435),
    tK = n(260509),
    tQ = n(370953);
function tz(e) {
    let { guild: t, outline: n } = e,
        i = (0, tH.A)("(max-width: 600px), (max-height: 600px)") ? tL.DN.LARGER : tL.DN.XLARGE,
        l = tL.iu[i],
        s = tL.s[i],
        r = h.useMemo(() => tn.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tK.Rb)(t),
        o =
            null != r
                ? (0, d.jsx)("img", { src: r, alt: "", className: tQ.OV })
                : (0, d.jsx)("div", {
                      className: tQ.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, d.jsx)("div", {
              className: M()(tQ._C, tQ.AY),
              children: (0, d.jsx)(tW.Ay, {
                  mask: tW.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, d.jsx)("div", {
                      className: tQ.$d,
                      children: (0, d.jsx)(tW.Ay, { mask: tW.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
                  }),
              }),
          })
        : (0, d.jsx)("div", {
              className: tQ._C,
              children: (0, d.jsx)(tW.Ay, { mask: tW.Ay.Masks.SQUIRCLE, width: l, height: l, children: o }),
          });
}
var tX = n(927813);
let tq = /\.$/;
function tY(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(tq, ""))
              .join(". ")
              .trim()
        : e;
}
function t$(e) {
    let [t, n] = h.useState(() => null != e && !e),
        [i, l] = h.useState(e);
    return (null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n]);
}
function tZ() {
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
                    }, e * tX.A.Millis.SECOND)));
            }, []),
        ]
    );
}
var tJ = n(153488),
    t0 = n(95477),
    t1 = n(866665),
    t2 = n(913122),
    t4 = n(934337),
    t3 = n(15552),
    t8 = n(536637),
    t5 = n.n(t8),
    t7 = n(955437),
    t9 = n(888548);
n(861807);
var t6 = n(569717),
    ne = n(204925);
function nt(e) {
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
    if ((A.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        ((0, t6.A)(o, k.JJy.REGISTER),
            L.default.track(k.HAw.AGE_GATE_ACTION, { source: ne.w_.REGISTER, action: ne.AM.AGE_GATE_SUBMITTED }),
            (e = t5()().diff(o, "years")) < 13 ||
                L.default.track(k.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                }));
    }
    return z.A.post({
        url: k.Rsh.REGISTER,
        body: {
            fingerprint: eZ.default.getFingerprint(),
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
            (A.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                A.h.dispatch({
                    type: "GUARDIAN_CONNECT_REQUIRED",
                    shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
                }),
                L.default.track(k.HAw.AGE_GATE_ACTION, { source: ne.w_.REGISTER, action: ne.AM.AGE_GATE_SUCCESS }));
        },
        (e) => {
            if (e instanceof t9.CaptchaCancelError) throw e;
            let t = new K.A(e);
            throw (
                null != t.getFieldErrors("date_of_birth") && t7.Xv(ne.w_.REGISTER),
                L.default.track(k.HAw.REGISTER_SUBMIT_ERRORED, {
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
var nn = n(568385),
    ni = n(975639);
function nl(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, d.jsx)("div", {
              className: ni.IQ,
              children: (0, d.jsx)(nn.J, {
                  label: q.intl.format(q.t.qMDAP0, { termsURL: k.X7G.TERMS, privacyURL: k.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, d.jsx)(H.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: M()($.Ot, ni.E2),
              children: q.intl.format(q.t["KI+BSb"], { termsURL: k.X7G.TERMS, privacyURL: k.X7G.PRIVACY }),
          });
}
let ns = (0, tS.mj)({
    kind: "installation",
    name: "2026-09-registration-email-opt-in-copy",
    defaultConfig: { trackingCopy: !1 },
    variations: { 1: { trackingCopy: !0 } },
});
function nr() {
    let { required: e, checked: t } = (0, t4.mZ)(),
        n = (function (e, t) {
            let { trackingCopy: n } = ns.useConfig({ location: t });
            return q.intl.string(n ? q.t.LSoXK5 : e);
        })(q.t["0p3R0+"], "REGISTER_PROMO_EMAIL_CHECKBOX_WEB");
    return e
        ? (0, d.jsx)("div", {
              className: $.Ot,
              children: (0, d.jsx)(nn.J, { label: n, checked: t, onChange: t4.Bw, labelType: "secondary" }),
          })
        : null;
}
var na = n(890251);
function no(e) {
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
        [x, A] = h.useState(!1),
        [E, _] = tZ(),
        j = null != a && r,
        v = h.useRef(null),
        N = h.useRef(null);
    function C(e) {
        L.default.track(k.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function I(e) {
        L.default.track(k.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    h.useEffect(() => {
        v.current?.focus();
    }, []);
    let S = l.length > 0 && s.length > 0,
        T = h.useCallback(async () => {
            let e = t4.mZ.getState();
            (A(!0), g({}));
            try {
                (await nt({
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
                if ((A(!1), !(t instanceof t2.LG))) return;
                let e = (0, t3.W)(t);
                (g(e),
                    null != e.email || null != e.phone ? v.current?.focus() : null != e.password && N.current?.focus(),
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
                className: $.SX,
                children: (0, d.jsx)(t0.k, {
                    label: q.intl.string(q.t.dI4d4S),
                    name: "email",
                    value: l,
                    onChange: c,
                    error: tY(o.email),
                    type: "email",
                    autoComplete: "username",
                    inputRef: v,
                    onFocus: () => C("email"),
                    onBlur: () => I("email"),
                }),
            }),
            (0, d.jsx)(t0.k, {
                label: q.intl.string(q.t["CIGa+7"]),
                name: "password",
                value: s,
                onChange: u,
                error: tY(o.password),
                type: "password",
                autoComplete: "new-password",
                inputRef: N,
                onFocus: () => C("password"),
                onBlur: () => I("password"),
            }),
            (0, d.jsx)(nr, {}),
            (0, d.jsx)(nl, { consent: r, consentRequired: a, onConsentChange: m }),
            (0, d.jsx)(t1.m, {
                text: !r && a ? q.intl.string(q.t.AY4IVA) : null,
                children: (0, d.jsx)("div", {
                    className: $.QX,
                    children: (0, d.jsx)(W.$, {
                        text: q.intl.string(q.t["825cFy"]),
                        variant: "primary",
                        fullWidth: !0,
                        type: "submit",
                        loading: x,
                        disabled: !j || E || !S,
                    }),
                }),
            }),
            "string" == typeof b ? (0, d.jsx)(G.ME, { className: M()($.QX, ni.gJ), children: b }) : null,
            (0, d.jsx)("div", {
                className: na.o3,
                children: (0, d.jsx)(eg.Q, {
                    text: q.intl.string(q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: f,
                }),
            }),
        ],
    });
}
function nc(e) {
    let { guild: t } = e,
        n =
            tn.Ay.getGuildBannerURL(t) ??
            (null != t.splash ? tn.Ay.getGuildSplashURL({ id: t.id, splash: t.splash, size: 640 }) : null);
    return (0, d.jsx)("div", { className: na.ZK, style: null != n ? { backgroundImage: `url(${n})` } : void 0 });
}
function nu(e) {
    let { invite: t, kicker: n } = e,
        i = null != t.guild ? (0, ep.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, d.jsxs)("header", {
              children: [
                  (0, d.jsx)(nc, { guild: i }),
                  (0, d.jsxs)("div", {
                      className: na.lu,
                      children: [
                          (0, d.jsx)("div", { className: na.LJ, children: (0, d.jsx)(tz, { guild: i, outline: !0 }) }),
                          (0, d.jsx)(H.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              children: n ?? q.intl.string(q.t["3rE1P8"]),
                          }),
                          (0, d.jsxs)("div", {
                              className: na.G1,
                              children: [
                                  (0, d.jsx)(eG.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: na.qd,
                                      children: i.name,
                                  }),
                                  (0, d.jsx)(ta.A, { guild: i, tooltipPosition: "left" }),
                              ],
                          }),
                          (0, d.jsx)(t_, { invite: t }),
                      ],
                  }),
                  (0, d.jsx)("div", { className: na.yF }),
              ],
          });
}
var nd = n(201505);
n(801541);
var nh = n(889137),
    nm = n(546727),
    ng = n(5052),
    nf = n(446837);
let np = window.ResizeObserver ?? nf.t;
function nx(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = h.useRef(null),
                [t, n] = h.useState(0),
                i = h.useMemo(
                    () =>
                        new np((e) => {
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
        a = (0, e2.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        o = (0, e2.z)({
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
    return (0, d.jsx)(e1.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, d.jsx)(e1.animated.div, { style: { opacity: o.opacity }, ref: s, children: n }),
    });
}
function nA(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, ng.i)(n, !0, !0),
        o = n.length > 0;
    return (
        (t = o
            ? (0, nh.YW)(a)
                  .with({ type: nm.q.ERROR, message: nh.P.select() }, (e) =>
                      (0, d.jsx)(H.E, { className: ni.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: nm.q.AVAILABLE, message: nh.P.select() }, (e) =>
                      (0, d.jsx)(H.E, { className: ni.vq, variant: "text-sm/normal", children: e }),
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
        (0, d.jsx)(nx, { show: (o && a?.type === nm.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function nE(e) {
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
        L.default.track(k.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function g(e) {
        L.default.track(k.HAw.REGISTER_INPUT_BLUR, { field: e });
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
                        className: $.SX,
                        children: (0, d.jsx)(t0.k, {
                            label: q.intl.string(q.t.TWzdWj),
                            name: "username",
                            value: t,
                            onChange: (e) => l(e.toLocaleLowerCase()),
                            error: tY(i.username),
                            autoComplete: "off",
                            inputRef: u,
                            onFocus: () => m("username"),
                            onBlur: () => g("username"),
                        }),
                    }),
                    (0, d.jsx)(nA, {
                        username: t,
                        suggestion: null,
                        globalName: "",
                        isUsernameFocused: o,
                        onClickSuggestion: () => {},
                    }),
                ],
            }),
            (0, d.jsx)(nd.A, {
                label: q.intl.string(q.t.rhBeKe),
                name: "date_of_birth",
                onChange: s,
                error: tY(i.date_of_birth),
                value: n,
                onFocus: m,
                onBlur: g,
            }),
            (0, d.jsx)("div", {
                className: $.QX,
                children: (0, d.jsx)(W.$, {
                    text: q.intl.string(q.t.PDTjLN),
                    variant: "primary",
                    fullWidth: !0,
                    type: "submit",
                    disabled: !f,
                }),
            }),
            (0, d.jsx)("div", {
                className: na.o3,
                children: (0, d.jsx)(eg.Q, {
                    text: q.intl.string(q.t.renMUD),
                    textVariant: "text-sm/normal",
                    onClick: a,
                }),
            }),
        ],
    });
}
function n_(e) {
    let { invite: t, onOpenApp: n } = e,
        i = null != t.guild ? (0, ep.DY)(t.guild) : null;
    return null == i
        ? null
        : (0, d.jsxs)(d.Fragment, {
              children: [
                  null != i ? (0, d.jsx)(nc, { guild: i }) : null,
                  (0, d.jsxs)("div", {
                      className: na.zY,
                      children: [
                          (0, d.jsxs)("div", {
                              className: na.rL,
                              children: [
                                  (0, d.jsx)(tz, { guild: i }),
                                  (0, d.jsx)(eG.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      className: na.Rw,
                                      children: q.intl.format(q.t["33M5bg"], { guildName: i?.name ?? "" }),
                                  }),
                                  (0, d.jsx)(H.E, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: na.Ap,
                                      children: q.intl.string(q.t["7N4JkE"]),
                                  }),
                                  (0, d.jsx)("div", {
                                      className: na.S7,
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
                              className: na.NG,
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
function nj(e) {
    let { invite: t, onOpenApp: n, onOpenAppAfterRegistration: i } = e,
        [l, s] = h.useState(0),
        [r, a] = h.useState(""),
        [o, c] = h.useState(null),
        [u, m] = h.useState(""),
        [g, f] = h.useState(""),
        [p, A] = h.useState({}),
        _ = (0, x.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        [j, v] = t$(_),
        [N, C] = h.useState(!1),
        I = h.useRef(null);
    function S(e) {
        (s(e), I.current?.scrollTo(0, 0));
    }
    function T(e) {
        (A(e), (null != e.username || null != e.date_of_birth) && S(0));
    }
    function y(e) {
        A((t) => {
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
            E.A.getLocationMetadata();
        }, []),
        (0, d.jsx)(tM.N, {
            theme: k.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsx)("div", {
                    ref: I,
                    "data-theme": k.NJ8.DARK,
                    className: M()(na.MY, e),
                    children: N
                        ? (0, d.jsx)(n_, { invite: t, onOpenApp: i })
                        : (0, d.jsxs)(d.Fragment, {
                              children: [
                                  (0, d.jsx)(nu, { invite: t, kicker: 1 === l ? q.intl.string(q.t.dzGILG) : void 0 }),
                                  (0, d.jsx)("div", {
                                      className: na.rf,
                                      children:
                                          0 === l
                                              ? (0, d.jsx)(nE, {
                                                    username: r,
                                                    parsedDateOfBirth: o,
                                                    apiErrors: p,
                                                    onUsernameChange: b,
                                                    onDateOfBirthChange: R,
                                                    onNext: () => S(1),
                                                    onOpenApp: n,
                                                })
                                              : (0, d.jsx)(no, {
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
var nv = n(127982);
function nN(e, t, n, i) {
    (e?.preventDefault(),
        L.default.track(
            k.HAw.INVITE_APP_OPENED,
            {
                invite_code: (0, e0.m0)(t),
                guild_id: n?.guild?.id,
                channel_id: n?.channel?.id,
                inviter_id: n?.inviter?.id,
                invite_type: null != n && n?.type != null ? tc.Xd[n?.type] : void 0,
                user_is_member: null != n && null != n.guild && null != te.A.getGuild(n.guild.id),
                size_total: n?.approximate_member_count,
                time_to_click_ms: Math.round(performance.now()),
            },
            { flush: !0 },
        ));
    let l = null != n && n.state !== k.elq.EXPIRED && n.state !== k.elq.BANNED ? t : void 0,
        s = eZ.default.getFingerprint(),
        r = null != s ? s : eZ.default.getId(),
        a = null != n && n?.type != null ? Number(n?.type) : void 0;
    j.Ay.openApp(l, void 0, r, void 0, { inviteType: a, didRegister: i?.didRegister });
}
function nC() {
    return (0, d.jsx)("div", { className: nv.$k, children: (0, d.jsx)(eP.y, {}) });
}
function nI(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case k.elq.RESOLVED:
        case k.elq.ACCEPTED:
        case k.elq.APP_NOT_OPENED:
        case k.elq.APP_OPENED:
        case k.elq.ACCEPTING:
        case k.elq.APP_OPENING:
            return 1;
        case k.elq.EXPIRED:
        case k.elq.BANNED:
        case k.elq.ERROR:
            return 2;
        case k.elq.RESOLVING:
            return 0;
        default:
            (0, ti.xb)(n);
    }
}
function nS(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === k.elq.BANNED
        ? (0, d.jsx)(e7, { text: q.intl.string(q.t["5AkWAd"]), buttonCta: q.intl.string(q.t["8osdkn"]), onClick: n })
        : (0, d.jsx)(e7, { text: q.intl.string(q.t["usP+Mb"]), buttonCta: q.intl.string(q.t["8osdkn"]), onClick: n });
}
function nT(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = nv.qF } = e,
        { ref: r, height: a } = (0, e6.Ay)(),
        o = (0, e2.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: e1.config.stiff });
    return (0, d.jsxs)(e1.animated.div, {
        className: s,
        style: o,
        children: [
            (0, d.jsx)(e1.animated.div, {
                className: nv.NS,
                style: o,
                children: (0, d.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function ny(e) {
    let { invite: t } = e;
    if (null == t || !tx(t)) return null;
    let n = nI(t);
    return (0, d.jsx)(nT, {
        startAnimHeightPx: 0,
        sectionClassName: nv.ui,
        children: 1 === n ? (0, d.jsx)(tP, { invite: t }) : null,
    });
}
let nb = { 1: nv._r, 2: nv.Gm, 0: nv.Kt };
function nR(e) {
    let t,
        { invite: n } = e,
        i = nI(n),
        l = h.useRef(!1);
    if (
        (h.useEffect(() => {
            l.current ||
                (null != n &&
                    1 === i &&
                    ((l.current = !0),
                    L.default.track(k.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, d.jsx)(nC, {});
    else
        switch (i) {
            case 1:
                t = (0, d.jsx)(tV, { ...e, invite: n });
                break;
            case 2:
                t = (0, d.jsx)(nS, { ...e, invite: n });
                break;
            default:
                t = (0, d.jsx)(nC, {});
        }
    return (0, d.jsx)(nT, { startAnimHeightPx: 200, sectionClassName: nb[i], inviteCardClassName: nv.qF, children: t });
}
function nL(e) {
    let { invite: t } = e,
        [n, i] = h.useState(null);
    return (h.useLayoutEffect(() => {
        let e;
        null == n &&
            null != t &&
            1 === nI(t) &&
            i(
                ((e = t.guild_experiments?.["2026-08-mweb-invite-registration"]),
                e?.variation === 1 && !eZ.default.isAuthenticated() && null != t.guild && null == t.target_application),
            );
    }, [t, n]),
    !0 === n)
        ? (0, d.jsx)(nj, {
              invite: t,
              onOpenApp: e.onAcceptInvite,
              onOpenAppAfterRegistration: e.onOpenAppAfterRegistration,
          })
        : (0, d.jsx)(nO, { ...e });
}
function nO(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {};
    if (i?.splash != null) {
        let e = tn.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    }
    return (0, d.jsxs)(G.Ay, {
        theme: k.NJ8.DARK,
        className: nv.G3,
        style: l,
        contentClassName: nv.__,
        children: [(0, d.jsx)(nR, { ...e, onAcceptInvite: n }), (0, d.jsx)(ny, { ...e })],
    });
}
var nk = n(723702);
function nD(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 192 } = e;
    return (0, d.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/575199861cc3c18cdeb6745807591de54ce1ce9ddad5bae636a5737664545aa0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nw = n(474545),
    nP = n(604880);
function nG(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, d.jsxs)("div", {
              className: nw.MY,
              children: [
                  (0, d.jsx)("div", { className: nw.r$, children: (0, d.jsx)("img", { src: nP, alt: "" }) }),
                  (0, d.jsxs)("div", {
                      className: nw.Qs,
                      children: [
                          (0, d.jsx)(nD, { alt: "" }),
                          (0, d.jsx)(eG.D, {
                              variant: "heading-lg/semibold",
                              className: nw.ky,
                              children: q.intl.string(q.t.RtCSr1),
                          }),
                          (0, d.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: nw.G3,
                              children: q.intl.string(q.t["S+YjYJ"]),
                          }),
                          (0, d.jsx)(W.$, {
                              variant: "primary",
                              text: q.intl.string(q.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  (L.default.track(k.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, U.pX)(k.BVt.LOGIN));
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, d.jsxs)("div", {
              className: nw.MY,
              children: [
                  (0, d.jsx)("div", { className: nw.r$, children: (0, d.jsx)("img", { src: nP, alt: "" }) }),
                  (0, d.jsxs)("div", {
                      className: nw.Qs,
                      children: [
                          (0, d.jsx)(nD, { alt: "" }),
                          (0, d.jsx)(eG.D, {
                              variant: "heading-lg/semibold",
                              className: nw.ky,
                              children: q.intl.string(q.t["9h/0Rl"]),
                          }),
                          (0, d.jsx)(H.E, {
                              variant: "text-md/normal",
                              className: nw.G3,
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
                                          let t = eZ.default.getFingerprint(),
                                              n = (0, eY.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eY.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eY.X7)(e)),
                                      L.default.track(k.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: f.Fr ? "mobile" : "tablet",
                                          platform: L.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          L.default.track(k.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, e$.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eJ.A.launch(e, (e) => {
                                          e || (0, U.bG)({ pathname: k.BVt.LOGIN });
                                      }));
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var nU = n(613057);
function nB(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, d.jsx)(G.Ay, {
        children: (0, d.jsxs)(ew.B, {
            gap: 24,
            children: [
                (0, d.jsxs)(ew.B, {
                    gap: 8,
                    children: [(0, d.jsx)(G.hE, { children: t }), (0, d.jsx)(G.tK, { children: n })],
                }),
                (0, d.jsx)(W.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var nF = n(463347),
    nV = n(189213),
    nM = n(192308),
    nH = n(347704),
    nW = n(803306),
    nK = n(17372),
    nQ = n(369053),
    nz = n(975571),
    nX = n(928658);
async function nq(e, t) {
    try {
        await (0, nQ.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: q.intl.string(q.t.Z2hIUf) } };
        throw e;
    }
}
function nY(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    function s(s) {
        function r() {
            return nq(e, s);
        }
        async function a(t) {
            return await (0, nQ.G_)(e, s, t);
        }
        function o(n) {
            ((i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0));
            let l = n?.token;
            switch (e) {
                case nK.tY.MESSAGE:
                    (0, nX.bM)(l, t);
                    break;
                case nK.tY.USER:
                    (0, nX.nQ)(l, t);
                    break;
                case nK.tY.GUILD:
                    (0, nX.V3)(l, t);
                    break;
                case nK.tY.MEDIA_TAKEDOWN:
                    (0, nX._Y)(l, t);
            }
        }
        ((i = !0),
            setTimeout(() => {
                i = !1;
            }, 0),
            (0, nM.openModalLazy)(
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
            return nq(e, t);
        }
        ((0, nM.closeAllModals)(),
            (0, nM.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("429232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, d.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: q.intl.string(q.t.ZLRYGU),
                            confirmButtonText: q.intl.string(q.t.PDTjLN),
                            subtitle: e === nK.tY.MEDIA_TAKEDOWN ? q.intl.string(q.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            ));
    };
}
var n$ = n(939249),
    nZ = n(921853),
    nJ = n(43008);
let n0 = { [nK.tY.MESSAGE]: q.t.fuqnBC, [nK.tY.USER]: q.t.F4jrRW, [nK.tY.GUILD]: q.t.gH3aMs },
    n1 = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = h.useCallback(() => {
                nY(n, i)();
            }, [n, i]);
        return (0, d.jsxs)(n$.D, {
            className: nJ.b0,
            onClick: l,
            children: [
                (0, d.jsx)(H.E, { variant: "text-md/medium", children: t }),
                (0, d.jsx)(nZ.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    n2 = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, d.jsx)(ew.B, {
            gap: 16,
            children: (0, d.jsx)("div", {
                className: nJ.kL,
                children: t.map((e) =>
                    e === nK.tY.MEDIA_TAKEDOWN || null == n0[e]
                        ? null
                        : (0, d.jsx)(n1, { title: q.intl.string(n0[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var n4 = n(881636);
let n3 = {
    [nK.sl.TIDA]: { selectionLabel: q.t.jMSjZL, selectionDescription: q.t.qEaUPS, helpBody: q.t.R2Q57u },
    [nK.sl.UK_STOPNCII]: { selectionLabel: q.t.jMSjZL, selectionDescription: q.t.J0tNny, helpBody: q.t.R2Q57u },
};
function n8(e) {
    return (0, nK.c7)(e) ? n3[e] : n3[nK.sl.TIDA];
}
var n5 = n(138658);
let n7 = (e) => {
    let { mediaTakedownRegulation: t } = e,
        { goToStep: n } = (0, nH.n)(),
        { selectionLabel: i, selectionDescription: l } = n8(t),
        s = h.useCallback(() => {
            n(it.DSA);
        }, [n]),
        r = h.useCallback(() => {
            n(it.TIDA);
        }, [n]);
    return (0, d.jsxs)(ew.B, {
        gap: 8,
        children: [
            (0, d.jsx)(H.E, { variant: "text-md/normal", children: q.intl.string(q.t.bd1h5T) }),
            (0, d.jsxs)("div", {
                className: n5.k,
                children: [
                    (0, d.jsxs)(n$.D, {
                        className: n5.b,
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
                            (0, d.jsx)(n4.u, { size: "sm" }),
                        ],
                    }),
                    (0, d.jsxs)(n$.D, {
                        className: n5.b,
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
                            (0, d.jsx)(n4.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var n9 = n(108124);
let n6 = (e) => {
    let { helpBody: t } = e;
    return (0, d.jsxs)(ew.B, {
        gap: 24,
        children: [
            (0, d.jsx)(H.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: q.intl.string(q.t["3zG2Y9"]),
            }),
            (0, d.jsxs)(ew.B, {
                gap: 16,
                children: [
                    (0, d.jsxs)(ew.B, {
                        gap: 8,
                        children: [
                            (0, d.jsx)(H.E, { variant: "text-md/semibold", children: q.intl.string(q.t.CfBo0z) }),
                            (0, d.jsxs)("ul", {
                                className: n9.T,
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
            (0, d.jsxs)(ew.B, {
                gap: 8,
                children: [
                    (0, d.jsx)(H.E, { variant: "text-md/semibold", children: q.intl.string(q.t.FJh2zi) }),
                    (0, d.jsx)(H.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: q.intl.format(t, {
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
var ie = n(379492);
x.Ay.initialize();
var it = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let ii = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = h.useState(!0),
            [s, r] = h.useState([]),
            [a, o] = h.useState(null),
            [c, u] = h.useState(null),
            m = (0, x.bG)([eZ.default], () => eZ.default.isAuthenticated()),
            g = (0, x.bG)([ey.A], () => ey.A.hasLoadedExperiments),
            f = h.useCallback(() => {
                (0, nQ.OY)()
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
                  nW
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => f())
                      .catch(() => l(!1)))
                : f();
        }, [m, f]),
            h.useEffect(() => {
                !(async function () {
                    g || (await E.A.getLocationMetadata(), E.A.getExperiments());
                })();
            }, [g]));
        let { helpBody: p } = n8(a),
            A = s.filter((e) => e !== nK.tY.MEDIA_TAKEDOWN),
            _ = s.includes(nK.tY.MEDIA_TAKEDOWN),
            j = A.length > 0,
            v = j && _,
            N = i || !g;
        h.useEffect(() => {
            N || j || _ || n();
        }, [N, j, _, n]);
        let C = h.useCallback(() => {
                (0, nM.openModalLazy)(() => Promise.resolve((e) => (0, d.jsx)(ii, { ...e })), { dismissable: !1 });
            }, []),
            I = h.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? u("selection") : u(e);
            }, []),
            S = h.useMemo(() => nY(nK.tY.MEDIA_TAKEDOWN, C), [C]),
            T = c ?? (v ? "selection" : j ? "dsa" : "tida");
        if (N || (!j && !_))
            return (0, d.jsx)(nV.a, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, d.jsx)(ew.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, d.jsx)(eP.y, {}),
                }),
            });
        if (!v) {
            if (j)
                return (0, d.jsx)(nV.a, {
                    title: q.intl.string(q.t.Z11w18),
                    subtitle: q.intl.format(q.t["532l+q"], {
                        supportURL: nz.A.getArticleURL(k.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, d.jsx)(n2, { dsaCapabilities: A, onReopen: C }),
                });
            if (_)
                return (0, d.jsx)(nV.a, {
                    title: q.intl.string(q.t.YignUm),
                    actions: [{ text: q.intl.string(q.t.D5Czbu), variant: "primary", onClick: S }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, d.jsx)(n6, { helpBody: p }),
                });
        }
        let y = [
            {
                stepKey: "selection",
                modalProps: { title: q.intl.string(q.t.Z11w18) },
                body: (0, d.jsx)(n7, { mediaTakedownRegulation: a }),
            },
            {
                stepKey: "dsa",
                modalProps: {
                    title: q.intl.string(q.t.Z11w18),
                    subtitle: q.intl.format(q.t["532l+q"], {
                        supportURL: nz.A.getArticleURL(k.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, d.jsx)(n2, { dsaCapabilities: A, onReopen: C }),
            },
            {
                stepKey: "tida",
                modalProps: { title: q.intl.string(q.t.YignUm) },
                body: (0, d.jsx)(n6, { helpBody: p }),
                nextButtonProps: { text: q.intl.string(q.t.D5Czbu) },
                onNext: () => (S(), !1),
            },
        ];
        return (0, d.jsx)("div", {
            className: { selection: ie.a, dsa: ie.q, tida: void 0 }[T],
            children: (0, d.jsx)(nH.t, {
                steps: y,
                currentStepKey: T,
                onStepChange: I,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    il = () => (
        h.useEffect(() => {
            (0, nM.openModalLazy)(() => Promise.resolve((e) => (0, d.jsx)(ii, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var is = n(30793),
    ir = n(970928),
    ia = n(612181),
    io = n(179689);
let ic = {
    dump(e) {
        let t;
        (null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eX().name, version: eX().version },
                os: { name: eX().os.family, version: eX().os.version },
                memory: t,
            }));
    },
    getTimeSinceNavigationStart: () => Date.now() - io.fL,
};
var iu = n(649852),
    id = n.n(iu),
    ih = n(615300),
    im = n(319060),
    ig = n(844222),
    ip = n(240248),
    ix = n(706192);
let iA = (0, ip.xI)(im.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    iE = { friction: 10, tension: 130 },
    i_ = function (e) {
        return class extends h.Component {
            timeout;
            anim = new ih.A.Value(0);
            state = { shouldAnimate: !f.Fr };
            componentDidMount() {
                f.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > iA;
                (!this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e }));
            };
            handleResizeDebounced = id()(this.handleResize, 60);
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
                ih.A.spring(this.anim, { toValue: e, ...iE }).start(t);
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
                    className: ix.i,
                    children: (0, d.jsx)(ig.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, d.jsx)(ih.A.div, {
                                className: ix.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, d.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var ij = n(603647),
    iv = n(970672),
    iN = n(129014),
    iC = n(642277);
let iI = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = h.useState(0);
    (h.useEffect(() => {
        (iN.default.once("connected", () => {
            s(1);
        }),
            iN.default.once("disconnected", () => {
                (0, U.pX)((0, iC.W)());
            }),
            iN.default.connect());
    }, []),
        h.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, U.pX)((0, iC.W)()), 3e3);
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
            return (0, d.jsxs)(G.Ay, {
                children: [
                    (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.qllnGm) }),
                    (0, d.jsx)(G.tK, { children: q.intl.string(q.t.SXCxye) }),
                    (0, d.jsx)("div", {
                        className: $.eT,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: M()($.Ot, $.F1),
                        children: (0, d.jsx)(eg.Q, {
                            text: q.intl.string(q.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, U.pX)((0, iC.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, d.jsxs)(G.Ay, {
                children: [(0, d.jsx)(G.hE, { children: q.intl.string(q.t["Z+hCVU"]) }), (0, d.jsx)(G.CK, {})],
            });
        case 3:
            return (0, d.jsxs)(G.Ay, {
                children: [
                    (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.csrAMJ) }),
                    (0, d.jsx)(G.tK, { children: q.intl.string(q.t.ghBJz9) }),
                ],
            });
    }
};
var iS = n(723923);
x.Ay.initialize();
class iT extends h.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, ex.A)(this.props.location),
            t = (0, m.parse)(this.props.location.search);
        (v.Bo.post({
            url: k.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new tI.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, B.d0)("disable_email_notifications"));
    }
    renderBusy() {
        return (0, d.jsx)(G.Ay, { children: (0, d.jsx)(G.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = q.intl.formatToPlainString(q.t.YDAohB, { category: t });
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.f6rdLg) }),
                (0, d.jsx)(G.tK, { children: l }),
                (0, d.jsx)("div", {
                    className: $.QX,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, d.jsx)("div", {
                    className: $.Ot,
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
            let e = iS.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: tl._3.DEPRECATED_SIZE_100,
                    className: $.SX,
                }),
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t["6U6OMQ"]) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t["yaDJ4/"]) }),
                (0, d.jsx)("div", {
                    className: $.eT,
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G._V, { src: n(37772), className: $.SX }),
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.ox9hIS) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t["/dcuR5"]) }),
                (0, d.jsx)("div", {
                    className: $.eT,
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
let iy = x.Ay.connectStores([ef.A], () => ({ defaultRoute: ef.A.defaultRoute }))(iT);
var ib = n(110782),
    iR = n(10088),
    iL = n(871123),
    iO = n(189081),
    ik = n(67480),
    iD = n(45938),
    iw = n(587895),
    iP = n(242874),
    iG = n(165191),
    iU = n(287809),
    iB = n(97352),
    iF = n(615396),
    iV = n(202541),
    iM = n(716592);
function iH() {
    return (0, d.jsxs)(h.Fragment, {
        children: [
            (0, d.jsx)(G.eu, { src: null, size: tl._3.DEPRECATED_SIZE_100, className: $.SX }),
            (0, d.jsx)(G.tK, { children: q.intl.string(q.t.lTGZAl) }),
            (0, d.jsx)(G.hE, { className: M()($.Ot, eI.tR), children: q.intl.string(q.t.ZTNur7) }),
        ],
    });
}
let iW = x.Ay.connectStores([ik.A, iw.A, iB.A, iU.default], (e) => {
    let { giftCode: t } = e,
        n = ik.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, iF.c9)(i) : null,
        application: null != n ? iw.A.getApplication(n.applicationId) : null,
        gifter: iU.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? q.intl.string(q.t.lTGZAl) : q.intl.formatToPlainString(q.t.TjWdPc, { username: i.username });
    if (null == l) return (0, d.jsx)(iH, {});
    let o = l.name;
    return (
        null != r &&
            (o = q.intl.formatToPlainString(r.interval === iV.WT.MONTH ? q.t.CTpcCZ : q.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, d.jsxs)(h.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, d.jsx)(iG.A, { defaultAnimationState: iP.oA.LOOP, giftStyle: n.giftStyle, className: iM.e })
                    : (0, d.jsx)(G.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: tl._3.DEPRECATED_SIZE_100,
                          className: $.SX,
                      }),
                null != t
                    ? (0, d.jsxs)(h.Fragment, {
                          children: [
                              (0, d.jsx)(G.tK, { children: q.intl.string(q.t.mDFGFj) }),
                              (0, d.jsx)(G.hE, { children: t }),
                          ],
                      })
                    : (0, d.jsxs)(h.Fragment, {
                          children: [
                              (0, d.jsx)(G.tK, { children: a }),
                              (0, d.jsxs)(G.hE, {
                                  className: M()($.Ot, eI.tR),
                                  children: [
                                      l.productLine !== k.EZt.COLLECTIBLES &&
                                          (0, d.jsx)(tr.A, {
                                              size: tr.M.MEDIUM,
                                              className: iM.I,
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
var iK = n(935399),
    iQ = n(475743),
    iz = n(707554),
    iX = n(68281);
function iq(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === k.aUe.ACCOUNT_DISABLED,
        a = r ? q.intl.string(q.t["j3rC+U"]) : q.intl.string(q.t.ZFWofo),
        o = r ? q.intl.string(q.t["6eNTWe"]) : q.intl.string(q.t["pCBti+"]);
    return (0, d.jsx)(G.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, d.jsxs)(iz.F, {
            component: (0, d.jsx)(G.hE, { className: $.QB, children: a }),
            children: [
                (0, d.jsx)(G.tK, { className: $.SX, children: o }),
                (0, d.jsxs)(G.eB, {
                    children: [
                        (0, d.jsx)(W.$, { text: q.intl.string(q.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, d.jsx)("div", {
                            className: M()($.Ot, iX.Qt),
                            children: q.intl.format(q.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var iY = n(504394),
    i$ = n(275538),
    iZ = n(228916);
function iJ(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, d.jsx)(G.Ay, {
        ...i,
        className: M()(n, iZ.kL),
        contentClassName: iZ.Qs,
        children: l.map((e, t) =>
            (0, d.jsx)("div", { className: iZ.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var i0 = n(895600),
    i1 = n(506774),
    i2 = n(104798),
    i4 = n(991512);
let i3 = "mweb_handoff_nonce",
    i8 = "mweb_handoff_nonce_expiration",
    i5 = +tX.A.Millis.MINUTE,
    i7 = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    i9 = new Set(["deep_link_failed"]);
function i6() {
    (i1.w.remove(i3), i1.w.remove(i8));
}
let le = () => {
    let e = (0, x.bG)([eZ.default], () => eZ.default.getFingerprint()),
        { fingerprint: t, handoff_token: n } = (0, m.parse)(window.location.search),
        i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
        l = i ?? (null !== e ? e : void 0);
    h.useEffect(() => {
        null !== i && e !== i && A.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
    }, [i, e]);
    let [s, r] = h.useState(null),
        a = h.useCallback(
            (e) => {
                (r(e),
                    L.default.track(
                        k.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                        { reason: e, fingerprint: (0, e$.v)(l) },
                        { fingerprint: l },
                    ));
            },
            [r, l],
        ),
        o = i1.w.get(i3);
    if (
        ("null" === n && null === s && a("deep_link_failed"),
        null != n && "null" !== n && null == o && null === s && a("nonce_missing"),
        h.useEffect(() => {
            if (null != o) {
                let e = i1.w.get(i8);
                (null == e || Date.now() >= e) && (a("nonce_expired"), i6());
            }
        }, [o, a]),
        h.useEffect(() => {
            null != n &&
                "null" !== n &&
                null != o &&
                null == s &&
                v.Bo.post({ url: k.Rsh.HANDOFF_EXCHANGE, body: { key: o, handoff_token: n }, rejectWithError: !0 })
                    .then((e) => E.A.loginToken(e.body.token, !1))
                    .then(() => {
                        L.default.track(k.HAw.LOGIN_SUCCESSFUL, {
                            source: k.mdB.MOBILE_WEB_HANDOFF,
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
                        i6();
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
            : i9.has(s)
              ? q.intl.string(q.t.EPt55r)
              : i7.has(s)
                ? q.intl.string(q.t.g87kTp)
                : void 0;
    return null != s && i9.has(s)
        ? (0, d.jsx)("div", {
              className: i4.Un,
              children: (0, d.jsx)(H.E, {
                  color: "interactive-text-default",
                  variant: "text-sm/semibold",
                  children: c,
              }),
          })
        : (0, d.jsxs)("div", {
              className: i4.kL,
              children: [
                  (0, d.jsx)(H.E, { variant: "text-sm/semibold", children: c }),
                  (0, d.jsx)(W.$, {
                      variant: "overlay-primary",
                      text: q.intl.string(q.t.NcC759),
                      onClick: function () {
                          let e = i2.A.generateNonce();
                          (i1.w.set(i3, e), i1.w.set(i8, Date.now() + i5));
                          let t = new URL(k.J$u),
                              n = new URLSearchParams(window.location.search);
                          (n.delete("fingerprint"), n.delete("handoff_token"));
                          let i = new URLSearchParams();
                          (i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                              i.set("key", e),
                              i.set("fingerprint", l),
                              (t.search = i.toString()),
                              L.default.track(
                                  k.HAw.DEEP_LINK_CLICKED,
                                  { fingerprint: (0, e$.v)(l), source: "mobile_web_handoff", destination: k.J$u },
                                  { fingerprint: l, flush: !0 },
                              ),
                              (window.location.href = t.toString()));
                      },
                  }),
              ],
          });
};
var lt = n(274303),
    ln = n(139286),
    li = n(970573),
    ll = n(491919);
function ls(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, ln.A)({ type: g.ImpressionTypes.MODAL, name: g.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, d.jsxs)(G.Ay, {
            className: ll.ci,
            transparent: n,
            children: [
                !n && (0, d.jsx)(G.hE, { children: q.intl.string(q.t.bVbB63) }),
                (0, d.jsx)(H.E, {
                    className: ll.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: q.intl.string(q.t["0M5fN7"]),
                }),
                (0, d.jsx)(li.A, {
                    actionText: q.intl.string(q.t["DSN+hw"]),
                    onAction: (e) => {
                        e === li.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, d.jsx)("div", {
                    className: ll.o1,
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
function lr(e) {
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
    return (0, d.jsxs)(G.Ay, {
        className: t,
        children: [
            (0, d.jsx)(iY.M, {}),
            (0, d.jsxs)(G.eB, {
                className: $.QX,
                children: [
                    (0, d.jsx)(eC.A, {
                        className: $.SX,
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
                    (0, d.jsx)(G.pd, {
                        className: $.SX,
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
                        className: $.QB,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, d.jsx)(eg.Q, { text: q.intl.string(q.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, d.jsx)("div", {
                        className: $.a5,
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
var la = n(401755);
function lo(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function lc(e) {
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
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: E,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: v,
            handleForgotPassword: N,
            handleGotoRegister: C,
        } = e,
        I = (0, x.bG)([eN.A], () => eN.A.getCountryCode()),
        S = (0, x.bG)([eZ.default], () => eZ.default.getLoginStatus()),
        T = (0, x.bG)([lt.A], () => lt.A.getHasLoggedInAccounts()),
        y = h.useCallback(
            (e) => {
                L.default.track(k.HAw.LOGIN_SUCCESSFUL, {
                    source: k.mdB.QR_CODE,
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
        D = h.useRef(null),
        w = h.useRef(null),
        P = (0, iQ.Ay)(u);
    (h.useEffect(() => {
        function e(e) {
            return null != u[e];
        }
        null != P && P !== u && (e("password") ? w.current?.focus() : (e("email") || e("login")) && D.current?.focus());
    }, [u, D, w, P]),
        (t = r
            ? null
            : null != n
              ? (0, d.jsx)("div", { className: $.S3, children: (0, d.jsx)(iY.A, { invite: n }) })
              : null != l
                ? (0, d.jsx)(iW, { giftCode: l })
                : (0, d.jsxs)("div", {
                      className: iX.wx,
                      children: [
                          (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t["7fNJgA"]) }, "title"),
                          !1 === (0, nk.isAndroidWeb)()
                              ? (0, d.jsx)(G.tK, { children: q.intl.string(q.t.euS7r4) }, "subtitle")
                              : null,
                      ],
                  })));
    let U = (0, d.jsxs)("div", {
        className: iX.Eh,
        children: [
            T &&
                p &&
                (0, d.jsx)("div", {
                    className: iX.AX,
                    children: (0, d.jsx)(W.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: q.intl.string(q.t["1MrpWO"]),
                        icon: nZ.n,
                    }),
                }),
            t,
            (0, d.jsx)(iz.F, {
                children: (0, d.jsxs)(G.eB, {
                    className: $.QX,
                    children: [
                        (0, d.jsx)(eC.A, {
                            alpha2: I.alpha2,
                            countryCode: I.code.split(" ")[0],
                            className: $.SX,
                            label: q.intl.string(q.t.tUjnxr),
                            error: lo("login", u) ?? lo("email", u),
                            onChange: _,
                            setRef: D,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: o,
                            autoFocus: !O && !R && !a,
                            required: !0,
                        }),
                        (0, d.jsx)(G.pd, {
                            label: q.intl.string(q.t["CIGa+7"]),
                            error: lo("password", u),
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
                            className: M()($.SX, $.a5),
                            children: (0, d.jsx)(eg.Q, {
                                text: q.intl.string(q.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    (null != D.current && D.current.focus(), N());
                                },
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: $.QB,
                            children: (0, d.jsx)(W.$, {
                                text: q.intl.string(q.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: S === k.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, d.jsxs)("div", {
                            className: $.a5,
                            children: [
                                (0, d.jsx)("span", { className: iX.Qt, children: q.intl.string(q.t.tmE73r) }),
                                (0, d.jsx)("span", {
                                    className: iX.Z8,
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
    return null != n && n.state === k.elq.RESOLVING
        ? (0, d.jsx)(lr, {
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
          ? i.state === la.QB.RESOLVING
              ? (0, d.jsx)(lr, {
                    authBoxClassName: s,
                    country: I,
                    login: o,
                    password: c,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: D,
                    passwordRef: w,
                })
              : (0, d.jsx)(iJ, {
                    onSubmit: v,
                    tag: "form",
                    className: M()(s, iX.Sy),
                    children: () => [
                        (0, d.jsx)(i0.A, { guildTemplate: i }, "template"),
                        (0, d.jsx)(h.Fragment, { children: U }, "form-wrapper"),
                    ],
                })
          : T && !p
            ? (0, d.jsx)(ls, { onDismiss: () => A(!0), embedded: r })
            : (0, d.jsxs)("div", {
                  children: [
                      (0, d.jsx)(G.Ay, {
                          onSubmit: v,
                          tag: "form",
                          className: M()(s, { [iX.M0]: R }),
                          transparent: r,
                          expanded: !0,
                          children: (0, d.jsxs)(ew.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  U,
                                  (0, d.jsx)(i$.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: y,
                                      conditionalMediationAbortController: E,
                                  }),
                              ],
                          }),
                      }),
                      R && (0, d.jsx)(le, {}),
                  ],
              });
}
var lu = n(572469);
function ld(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, x.cf)(
            [eZ.default],
            () => ({ ticket: eZ.default.getMFATicket(), methods: eZ.default.getMFAMethods() }),
            [],
        ),
        s = h.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    Q._.dispatch(k.jej.WAVE_EMPHASIZE),
                    E.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, d.jsx)(G.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, d.jsx)(lu.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                A.h.dispatch({ type: "LOGIN_RESET" });
            },
            embedded: i,
        }),
    });
}
var lh = n(511815),
    lm = n(139033),
    lg = n(952116),
    lf = n(491509),
    lp = n(913612),
    lx = n(933924);
function lA(e) {
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
    (0, lp.K)();
    let g = (0, x.bG)([eZ.default], () => eZ.default.isAuthenticated()),
        f = (0, x.bG)([R.A], () => R.A.isHandoffAvailable()),
        p = (0, x.bG)([eZ.default], () => eZ.default.getLoginStatus()),
        A = i?.skuId ?? null,
        _ = (0, x.bG)([ik.A], () => (null != A ? ik.A.get(A) : null)),
        {
            checkingHandoff: j,
            redirecting: v,
            login: C,
            password: I,
            phoneVerifyError: S,
            dismissedChooseAccount: T,
            setDismissedChooseAccount: y,
            errors: O,
            conditionalMediationAbortController: D,
            loginSource: w,
            loginOrSSO: P,
            handleLogin: F,
            handleIPAuthorize: V,
            handlePasswordReset: M,
            handleForgotPassword: W,
            handleResendCode: K,
            handleReset: z,
            handleCancelAccountDeletion: X,
            handleGotoRegister: Y,
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
                    transitionTo: r = U.pX,
                    redirectTo: a,
                    location: o,
                    loginSource: c,
                } = e,
                [u, g] = h.useState(() => l),
                [f, p] = h.useState(() => s),
                [x, A] = h.useState(""),
                [_, j] = h.useState(() => {
                    let e = null != o ? (0, m.parse)(o.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [v, N] = h.useState(""),
                [C, I] = h.useState(!1),
                [S, T] = h.useState(null),
                [y, R] = h.useState(!1),
                [L] = h.useState(() => new AbortController()),
                [O, D] = h.useState({});
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
                P = null != i ? i.skuId : null,
                G = h.useCallback(
                    (e) => {
                        let t = null != e ? (0, m.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (eh(a)) return void em(a);
                            r(a);
                        } else if (null == t.service) r(k.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + k.Rsh.SSO,
                                n = { ...t, token: eZ.default.getToken() };
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
                                ? E.A.verifySSOToken("login", null).then(
                                      (e) => {
                                          e ? G(t) : p(!1);
                                      },
                                      () => G(t),
                                  )
                                : G(t));
                    },
                    [G],
                ),
                F = h.useCallback(() => {
                    (L.abort("Login state reset"), D({}), E.A.loginReset());
                }, [L]),
                V = h.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (e?.preventDefault(),
                            L.abort("Starting password login"),
                            Q._.dispatch(k.jej.WAVE_EMPHASIZE),
                            D({}));
                        try {
                            await E.A.login({
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
                M = h.useCallback(
                    async (e) => {
                        let t = x + _;
                        D({});
                        try {
                            let { token: n } = await ej.A.verifyPhone(t, e, !1);
                            (await E.A.authorizeIPAddress(n), V());
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
                            r(k.BVt.RESET, { search: (0, m.stringify)({ token: t, from_login: "true" }) });
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
                        D({});
                        try {
                            Q._.dispatch(k.jej.WAVE_EMPHASIZE);
                            let e = await E.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === lh.D.ONE_TIME_LOGIN
                                ? (0, nM.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: q.intl.string(q.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, d.jsx)(nV.a, {
                                          title: q.intl.string(q.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, d.jsx)(H.E, {
                                              variant: "text-md/normal",
                                              children: q.intl.string(q.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, lm.A)({
                                      title: q.intl.string(q.t.f5Pi7A),
                                      subtitle: q.intl.format(q.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            D((0, t3.p)(e));
                        }
                    },
                    [x, _],
                ),
                z = h.useCallback(() => {
                    ej.A.resendCode(x + _);
                }, [x, _]),
                X = h.useCallback((e) => {
                    (null != e && e.preventDefault(),
                        E.A.loginReset(),
                        N(""),
                        A(""),
                        j(""),
                        I(!1),
                        g(!1),
                        p(!1),
                        D({}));
                }, []),
                Y = h.useCallback(() => {
                    (I(!0), V(void 0, { undelete: !0 }));
                }, [V]),
                $ = h.useCallback(() => {
                    let e,
                        l = null != o ? (0, m.parse)(o.search) : {};
                    ("" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = k.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = k.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = k.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = k.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = k.BVt.REGISTER),
                        F(),
                        r(e, { search: (0, m.stringify)(l) }),
                        Q._.dispatch(k.jej.WAVE_EMPHASIZE));
                }, [_, t, i, n, a, o, F, r]);
            return {
                checkingHandoff: u,
                redirecting: f,
                login: _,
                password: v,
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
                handleGotoRegister: $,
                loginReset: F,
                onLoginChange: h.useCallback((e, t) => {
                    (j(e), A(t));
                }, []),
                onPasswordChange: h.useCallback((e) => {
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
    (0, iK.Ay)(() => {
        (f && !g ? (0, N.ST)() : g && P(g, l, !0),
            L.default.track(
                k.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: w,
                    authenticated: g,
                    ...(null != _ ? (0, lf.A)(_, !1, !1) : {}),
                    source: (0, U.PR)(),
                },
                { flush: !0 },
            ),
            g || (0, lx.a)({ abortController: D, loginSource: w, giftCodeSKUId: A }),
            E.A.getLocationMetadata(),
            (0, B.d0)("login"));
    });
    let et = (0, iQ.Ay)(g);
    if (
        (h.useEffect(() => {
            let e = j && (f || v);
            g && !1 === et && !e && (D.abort("Transitioning to authenticated state"), P(g, l));
        }, [g, f, et, v, j, D, P, l]),
        v || j)
    )
        return (0, d.jsx)(G.Ay, { transparent: o, children: (0, d.jsx)(eP.y, {}) });
    if (f)
        return (0, d.jsxs)(G.Ay, {
            className: a,
            transparent: o,
            children: [
                (0, d.jsx)(G.CK, {}),
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.S6RMNA) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t.YZiJbh) }),
            ],
        });
    switch (p) {
        case k.aUe.LOGGING_IN_MFA_SMS:
        case k.aUe.MFA_SMS_STEP:
        case k.aUe.LOGGING_IN_MFA:
        case k.aUe.MFA_STEP:
            return (0, d.jsx)(ld, { loginSource: w, giftCodeSKUId: A, isEmbedded: o });
        case k.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case k.aUe.ACCOUNT_DISABLED:
            return (0, d.jsx)(iq, {
                loginStatus: p,
                authBoxClassName: a,
                transparent: o,
                onSubmit: z,
                onCancelAccountDeletion: X,
            });
        case k.aUe.PHONE_IP_AUTHORIZATION:
            return (0, d.jsx)(G.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, d.jsx)(lg.A, {
                    title: q.intl.string(q.t.w55Oco),
                    subtitle: q.intl.format(q.t.CfRZBj, { onResendClick: K }),
                    error: S,
                    onSubmit: V,
                    onCancel: Z,
                }),
            });
        case k.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, d.jsx)(G.Ay, {
                tag: "form",
                className: a,
                transparent: o,
                children: (0, d.jsx)(lg.A, {
                    title: q.intl.string(q.t["+xqy3d"]),
                    subtitle: q.intl.format(q.t.ef4uZ7, { onResendClick: K }),
                    error: S,
                    onSubmit: M,
                    onCancel: Z,
                }),
            });
        case k.aUe.LOGGING_IN:
        case k.aUe.NONE:
        default:
            return (0, d.jsx)(lc, {
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
                conditionalMediationAbortController: D,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: F,
                handleForgotPassword: W,
                handleGotoRegister: Y,
            });
    }
}
var lE = n(664294);
let l_ = null,
    lj = "underage";
class lv extends x.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (nk.isPlatformEmbedded && 1) {
            if (null != l_ && l_ + ne.bm > Date.now()) return !0;
        } else if (1) return null != lE.parse(document.cookie)[lj];
        return !1;
    }
}
let lN = new lv(A.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        ((l_ = Date.now()), (document.cookie = `${lj}=1;path=/`));
    },
    LOGIN_SUCCESS: function () {
        ((l_ = null), (document.cookie = `${lj}=1;path=/;max-age=0`));
    },
});
var lC = n(509434),
    lI = n(970116);
let lS = function () {
    return (0, d.jsx)(G.Ay, {
        children: (0, d.jsxs)("div", {
            className: lI.hQ,
            children: [
                (0, d.jsx)(G.hE, { className: lI.DD, children: q.intl.string(q.t.nCB6Ga) }),
                (0, d.jsx)(G.tK, {
                    className: lI.VA,
                    children: q.intl.format(q.t.KQgoxG, { underageMessage: q.intl.string(q.t.WqEH4D) }),
                }),
                (0, d.jsx)(W.$, {
                    icon: lC.I,
                    text: q.intl.string(q.t.hvVgAZ),
                    onClick: () => window.open(nz.A.getArticleURL(k.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
(n(994555), n(827343), n(792251), n(19575), n(945041));
var lT = n(493527),
    ly = n(544395);
function lb(e) {
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
        T.length > 0 && !ly.A.wasRegistrationSuggestionFetched(T) && (await lT.A.fetchSuggestionsRegistration(T));
    }
    function p(e) {
        L.default.track(k.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        L.default.track(k.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, x.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        _ = (0, x.bG)([ly.A], () => ly.A.registrationUsernameSuggestion()),
        j = h.useRef(null),
        v = h.useRef(null),
        N = h.useRef(null),
        C = h.useRef(null),
        [I, S] = h.useState(t),
        [T, y] = h.useState(""),
        [b, R] = h.useState(""),
        [O, D] = h.useState(""),
        [w, P] = h.useState(null),
        [U, B] = t$(E),
        [F, V] = h.useState(!1),
        [K, z] = tZ(),
        [X, Y] = h.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = X,
        [el, es] = h.useState(null),
        [er, ea] = h.useState(null),
        [eo, ec] = h.useState(null),
        [eu, ed] = h.useState(null),
        eh = null != E && U;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, iQ.Ay)(t);
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
    })({ apiErrors: X, emailRef: j, usernameRef: v, globalNameRef: N, passwordRef: C });
    let em = h.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = t4.mZ.getState(),
                r = (0, ip.uJ)(_) ? null : b === _;
            (Q._.dispatch(k.jej.WAVE_EMPHASIZE), V(!0), Y({}));
            try {
                (await nt({
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
                if ((V(!1), !(t instanceof t2.LG))) return;
                let e = (0, t3.W)(t);
                (Y(e), s?.(e), "number" == typeof e.retry_after && z(e.retry_after));
            }
        }, [i, l, n, I, s, o, _, b, T, O, w, U, z]),
        ef = h.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                (0 === I.length && (es(q.intl.string(q.t.EkokLy)), (t = !0)),
                    0 === b.length && (ea(q.intl.string(q.t.EkokLy)), (t = !0)),
                    0 === O.length && (ec(q.intl.string(q.t.EkokLy)), (t = !0)),
                    null == w && (ed(q.intl.string(q.t.EkokLy)), (t = !0)),
                    t || em());
            },
            [I, b, O, w, E, em],
        ),
        ep = null;
    return (
        "string" == typeof Z && (ep = (0, d.jsx)(G.ME, { className: M()($.QX, ni.gJ), children: Z })),
        (0, d.jsx)("form", {
            onSubmit: ef,
            children: (0, d.jsxs)(G.eB, {
                className: $.QX,
                children: [
                    (0, d.jsx)(G.pd, {
                        autoFocus: !0,
                        className: $.SX,
                        label: q.intl.string(q.t.dI4d4S),
                        name: "email",
                        value: I,
                        onChange: (e) => {
                            (S(e), r?.(e), es(0 === e.length ? q.intl.string(q.t.EkokLy) : null));
                        },
                        error: el ?? tY(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, d.jsx)(G.pd, {
                        label: q.intl.string(q.t["9AjdkD"]),
                        className: $.SX,
                        name: "global_name",
                        value: T,
                        onChange: y,
                        error: tY(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: N,
                        onFocus: () => {
                            (u(!0), p("global_name"));
                        },
                        onBlur: () => {
                            (u(!1), A("global_name"));
                        },
                    }),
                    (0, d.jsx)(nx, {
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
                            (0, d.jsx)(G.pd, {
                                label: q.intl.string(q.t.TWzdWj),
                                className: $.SX,
                                name: "username",
                                value: b,
                                onChange: (e) => {
                                    (R(e.toLocaleLowerCase()), ea(0 === e.length ? q.intl.string(q.t.EkokLy) : null));
                                },
                                error: er ?? tY(ee),
                                autoComplete: "off",
                                setRef: v,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, d.jsx)(nA, {
                                username: b,
                                suggestion: _,
                                globalName: T,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    (v.current?.focus(), null != _ && _.length > 0 && (R(_), ea(null)));
                                },
                            }),
                        ],
                    }),
                    (0, d.jsx)(G.pd, {
                        label: q.intl.string(q.t["CIGa+7"]),
                        name: "password",
                        value: O,
                        onChange: (e) => {
                            (D(e), ec(0 === e.length ? q.intl.string(q.t.EkokLy) : null));
                        },
                        error: eo ?? tY(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: C,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, d.jsx)(nd.A, {
                        label: q.intl.string(q.t.rhBeKe),
                        wrapperClassName: ni.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            (P(e), null != e && ed(null));
                        },
                        error: eu ?? tY(ei),
                        value: w,
                        required: !0,
                        onFocus: p,
                        onBlur: A,
                    }),
                    (0, d.jsx)(nr, {}),
                    (0, d.jsx)(nl, { consent: U, consentRequired: E, onConsentChange: B }),
                    (0, d.jsx)(t1.m, {
                        text: !U && E ? q.intl.string(q.t.AY4IVA) : null,
                        children: (0, d.jsx)("div", {
                            className: $.QX,
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
                        className: $.QX,
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
var lR = n(713654),
    lL = n(331722);
function lO(e) {
    let { channel: t } = e,
        n = (0, lR._U)(t.type);
    return (0, d.jsxs)("div", {
        className: lL.Nj,
        children: [
            null != n ? (0, d.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, d.jsx)(H.E, { className: lL.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lk(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, d.jsxs)("div", {
        className: lL.kL,
        children: [
            (0, d.jsx)(tO.Uq, { className: lL.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, d.jsx)(tO.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, d.jsx)(lO, { channel: t }) : null,
        ],
    });
}
var lD = n(231698);
function lw(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = ep.DY(t),
        { name: l, description: s } = i;
    return (0, d.jsxs)("div", {
        children: [
            (0, d.jsx)(eG.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lD.CT,
                children: q.intl.string(q.t.Eabu1z),
            }),
            (0, d.jsxs)("div", {
                className: lD.EB,
                children: [
                    (0, d.jsx)(tW.Ay, {
                        mask: tW.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, d.jsx)(tL.Ay, { guild: i, size: tL.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, d.jsxs)("div", {
                        className: lD.OA,
                        children: [
                            (0, d.jsx)(eG.D, { variant: "heading-sm/semibold", children: l }),
                            (0, d.jsxs)("div", {
                                className: lD.aH,
                                children: [
                                    (0, d.jsx)("div", { className: lD.Om }),
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
                (0, d.jsx)(H.E, { color: "text-default", className: lD.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lP(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, d.jsxs)(G.Ay, {
        className: t,
        children: [
            (0, d.jsx)(iY.M, {}),
            (0, d.jsxs)(G.eB, {
                className: ni.y0,
                children: [
                    (0, d.jsx)(t1.m, {
                        text: q.intl.string(q.t["hBB85/"]),
                        position: "right",
                        children: (0, d.jsx)(G.pd, {
                            label: q.intl.string(q.t["9AjdkD"]),
                            autoFocus: !0,
                            className: $.QB,
                            name: "username",
                            value: n,
                            placeholder: q.intl.string(q.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                L.default.track(k.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                L.default.track(k.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, d.jsx)(H.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: M()($.QX, ni.E2),
                        children: q.intl.format(q.t["KI+BSb"], { termsURL: k.X7G.TERMS, privacyURL: k.X7G.PRIVACY }),
                    }),
                    (0, d.jsx)("div", {
                        className: $.Ot,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, d.jsx)("div", {
                        className: $.QX,
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
function lG(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = h.useMemo(() => null != t && n, [t, n]);
    return (0, d.jsx)(t1.m, {
        text: !n && t ? q.intl.string(q.t.AY4IVA) : null,
        children: (0, d.jsx)("div", {
            className: $.Ot,
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
function lU(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, x.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        o = t?.guild_scheduled_event != null,
        c = h.useRef(null),
        u = null;
    u = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, d.jsx)(lk, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, d.jsx)("div", { className: $.S3, children: (0, d.jsx)(iY.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, g] = h.useState(""),
        [f, p] = h.useState(null),
        [A, E] = t$(a),
        [_, j] = h.useState(!1),
        [v, N] = h.useState({}),
        { username: C, global_name: I, date_of_birth: S } = v,
        [T, y] = tZ();
    h.useEffect(() => {
        null == f && c.current?.focus();
    }, [f, c]);
    let [b, R] = h.useState(null),
        [O, D] = h.useState(null),
        w = h.useCallback(async () => {
            (Q._.dispatch(k.jej.WAVE_EMPHASIZE), j(!0), N({}));
            try {
                (await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return nt({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: t.code, globalName: m, birthday: f }),
                    r?.());
            } catch (t) {
                if ((j(!1), !(t instanceof t2.LG))) return;
                let e = (0, t3.W)(t);
                (N(e), l?.(e), "number" == typeof e.retry_after && y(e.retry_after));
            }
        }, [t, m, f, A, l, r, y, N, j]),
        P = h.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                (0 === m.length && (R(q.intl.string(q.t.EkokLy)), (t = !0)),
                    null == f && (D(q.intl.string(q.t.EkokLy)), (t = !0)),
                    t || w());
            },
            [m, f, a, w, R, D],
        );
    return t.state === k.elq.RESOLVING
        ? (0, d.jsx)(lP, { authBoxClassName: n, name: m, onNameChange: g })
        : (0, d.jsxs)("div", {
              children: [
                  (0, d.jsx)(G.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, d.jsxs)("form", {
                          onSubmit: P,
                          children: [
                              u,
                              o ? (0, d.jsx)("div", { className: ni.yF }) : null,
                              (0, d.jsxs)(G.eB, {
                                  className: o ? void 0 : ni.y0,
                                  children: [
                                      (0, d.jsx)(t0.k, {
                                          helperText: q.intl.string(q.t["330TCc"]),
                                          label: q.intl.string(q.t["9AjdkD"]),
                                          error: b ?? tY(I ?? C),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: q.intl.string(q.t["09Q8yp"]),
                                          onChange: g,
                                          onFocus: () => {
                                              L.default.track(k.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              L.default.track(k.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, d.jsx)(nd.A, {
                                          label: q.intl.string(q.t.rhBeKe),
                                          wrapperClassName: ni.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              (p(e), null != e && D(null));
                                          },
                                          error: O ?? tY(S),
                                          value: f,
                                      }),
                                      (0, d.jsx)(nl, { consent: A, consentRequired: a, onConsentChange: E }),
                                      (0, d.jsx)(lG, { consentRequired: a, consent: A, registering: _ }),
                                      (0, d.jsx)("div", {
                                          className: $.QX,
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
                      ? (0, d.jsx)(G.Ay, {
                            className: $.QX,
                            children: (0, d.jsx)(lw, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lB = n(942614);
n(100544);
var lF =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lV = n(771016);
function lM(e) {
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
        p = (0, x.bG)([tJ.A], () => tJ.A.getAuthenticationConsentRequired()),
        A = (0, x.bG)([eZ.default], () => eZ.default.isAuthenticated()),
        _ = (0, x.bG)([lN], () => lN.isUnderageAnonymous()),
        j = (0, x.bG)([lt.A], () => lt.A.getHasLoggedInAccounts()),
        v = null != e.location ? (0, m.parse)(e.location.search) : {},
        [N, C] = h.useState(v.email ?? ""),
        [I, S] = h.useState({}),
        T = (0, iQ.Ay)(A),
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
            A && (null != o ? f(o) : f(ef.A.defaultRoute));
        }, [A, o, f]);
    ((0, iK.Ay)(() => {
        (O(),
            L.default.track(
                k.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: y,
                    ...(null != i ? (0, lf.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == p && E.A.getLocationMetadata(),
            (0, B.d0)("register"));
    }),
        h.useEffect(() => {
            A && !1 === T && ((0, lB.C)(lV.zY.ORGANIC_REGISTERED), O());
        }, [A, T, O]));
    let D = lF.FULL;
    (_ || null != I.date_of_birth ? (D = lF.AGE_GATE) : b && (D = lF.INVITE),
        (0, ln.A)(
            {
                type: g.ImpressionTypes.VIEW,
                name: g.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: g.ImpressionGroups.USER_REGISTRATION_FLOW, step: D },
            },
            {},
            [D],
        ));
    let w = h.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, m.parse)(a.search) : {};
            (null != s
                ? (t = k.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = k.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = k.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != o
                      ? ((t = k.BVt.LOGIN), (i.redirect_to = o))
                      : ((t = k.BVt.LOGIN), "" !== N && (i = { email: N })),
                E.A.loginReset(),
                f(t, { search: (0, m.stringify)(i), source: "register" }),
                c?.(e),
                Q._.dispatch(k.jej.WAVE_EMPHASIZE));
        },
        [N, s, n, l, o, a, c, f],
    );
    if (_ || null != I.date_of_birth) return (0, d.jsx)(lS, {});
    if (null != s && b)
        return (0, d.jsx)(lU, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: S,
            onGotoLogin: w,
            onRegister: u,
        });
    let P = (0, d.jsx)(G.hE, { children: q.intl.string(q.t.wC4TlR) }, "title"),
        F = !1;
    null != l
        ? ((P = (0, d.jsx)(i0.A, { guildTemplate: l })), (F = !0))
        : null != n
          ? (P = (0, d.jsx)(iW, { giftCode: n }))
          : !r &&
            null != s &&
            R &&
            s.state === k.elq.RESOLVED &&
            (P = (0, d.jsx)("div", { className: $.S3, children: (0, d.jsx)(iY.A, { invite: s, isRegister: !0 }) }));
    let V = (0, d.jsx)(lb, {
        initialEmail: v.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: S,
        onEmailChange: C,
        onGotoLogin: w,
        onRegister: u,
    });
    return F
        ? (0, d.jsx)(iJ, {
              tag: "section",
              className: M()(t, ni.Sy),
              children: () => [
                  P,
                  (0, d.jsxs)(
                      "div",
                      {
                          className: ni.Uu,
                          children: [(0, d.jsx)(G.hE, { className: ni.lR, children: q.intl.string(q.t.wC4TlR) }), V],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, d.jsxs)(G.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, d.jsx)("div", {
                            className: ni.AX,
                            children: (0, d.jsx)(W.$, {
                                onClick: w,
                                variant: "secondary",
                                text: q.intl.string(q.t["1MrpWO"]),
                                icon: nZ.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  P,
                  V,
              ],
          });
}
(x.Ay.initialize(), x.Ay.initialize());
class lH extends h.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        (e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, B.d0)("gift_code"));
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        (n ||
            A.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null }));
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        (ib.Yq(), null == e && this.refreshUser());
    }
    refreshUser = () => {
        (this.setState({ fetchingUser: !0 }),
            nW
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
        return l === k.t02.INVALID_GIFT_SELF_REDEMPTION
            ? q.intl.string(q.t.wa9h7F)
            : l === k.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === k.EZt.COLLECTIBLES
              ? q.intl.string(q.t.mdLtb5)
              : null != t || l === k.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? q.intl.format(q.t.PIdmg3, { libraryLink: k.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === k.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? q.intl.string(q.t.ilcBeX)
                  : l === k.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? q.intl.string(q.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        E.A.logout("gift_code", k.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        (E.A.verifyResend(), this.setState({ sentVerification: !0 }));
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            (this.setState({ error: null }), await _.Ay.redeemGiftCode({ code: n }), e(k.BVt.APP));
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        _.Ay.resolveGiftCode(t, !0, !0)
            .then((n) => {
                null != n && null != n.giftCode.promotion && e(k.BVt.BILLING_PROMOTION_REDEMPTION(t));
            })
            .catch(_.Ay.reportUnexpectedGiftCodeError);
    };
    renderSpinner(e) {
        return (0, d.jsxs)(G.Ay, { children: [(0, d.jsx)(G.hE, { children: e }), (0, d.jsx)(G.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.hE, { className: M()($.Ot, $.QB), children: q.intl.string(q.t.KPowgn) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t.j8734b) }),
                (0, d.jsx)("div", {
                    className: M()($.eT, $.QB),
                    children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, d.jsx)(eg.Q, {
                    text: q.intl.string(q.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(nz.A.getArticleURL(k.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.csrAMJ) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t["m1+IBn"]) }),
                (0, d.jsx)("div", {
                    className: $.eT,
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
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G._V, { src: n(792525), className: $.QB }),
                (0, d.jsx)(G.hE, { children: q.intl.format(q.t["ivLUf/"], { username: e.username }) }),
                (0, d.jsx)(G.tK, { className: $.QX, children: q.intl.string(q.t["8Su18+"]) }),
                (0, d.jsx)("div", {
                    className: $.eT,
                    children: (0, d.jsx)(W.$, {
                        text: t ? q.intl.string(q.t.CMa9Rv) : q.intl.string(q.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, d.jsx)("div", {
                    className: $.Ot,
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
        return (0, d.jsx)(lK, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, d.jsxs)(G.Ay, {
                children: [
                    (0, d.jsx)(iW, { giftCode: e }),
                    (0, d.jsx)("div", {
                        className: $.eT,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, d.jsx)(G.tK, { className: $.QX, children: l })
                        : (0, d.jsx)(G.ME, {
                              className: $.QX,
                              children: q.intl.format(q.t.NYM08s, {
                                  userTag: to.Ay.getUserTag(t),
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
        if (e === k.fAW.OPEN && !c) return this.renderAppOpened();
        if (e === k.fAW.OPENING) return this.renderSpinner(q.intl.string(q.t["Z+hCVU"]));
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
                ? (0, d.jsx)(lA, { giftCode: i, transitionTo: r, location: a })
                : (0, d.jsx)(lM, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let lW = x.Ay.connectStores([is.A, iO.A, eZ.default, ik.A, ef.A, iR.A], (e) => {
    let t = e.match.params.giftCode,
        n = is.A.get(t),
        i = null != n ? ik.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? iD.YI(n.entitlementBranches, i, iO.A) : null,
        authenticated: eZ.default.isAuthenticated(),
        defaultRoute: ef.A.defaultRoute,
        isResolved: is.A.getIsResolved(t),
        isAccepting: is.A.getIsAccepting(t),
        libraryApplicationsFetched: iO.A.fetched,
        nativeAppState: iR.A.getState(t),
    };
})(lH);
function lK(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, iL.bF)(t);
    return (h.useEffect(() => {
        null != i && s && l(k.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, d.jsxs)(G.Ay, {
              children: [(0, d.jsx)(G.hE, { children: q.intl.string(q.t.b3lf1c) }), (0, d.jsx)(G.CK, {})],
          })
        : n;
}
var lQ = n(871194),
    lz = n(799365),
    lX = n(894778),
    lq = n(315290),
    lY = n(396574),
    l$ = n(838697);
x.Ay.initialize();
class lZ extends h.PureComponent {
    componentDidMount() {
        ((0, B.d0)("guildTemplate"),
            lY.VP || eJ.A.launch("discord://" + k.BVt.GUILD_TEMPLATE(this.props.code), () => void 0));
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eL.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lY.VP
            ? (0, d.jsx)("div", { className: $.eT, children: (0, d.jsx)(W.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, d.jsx)(G.KE, { className: $.eT });
    }
    renderSpinner(e) {
        return (0, d.jsxs)(G.Ay, { children: [(0, d.jsx)(G.hE, { children: e }), (0, d.jsx)(G.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.hE, { className: M()($.Ot, $.QB), children: q.intl.string(q.t.C7ZRNw) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t.A6MwXE) }),
                this.renderButton(q.intl.string(q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.csrAMJ) }),
                (0, d.jsx)(G.tK, { children: q.intl.string(q.t["m1+IBn"]) }),
                this.renderButton(q.intl.string(q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eQ()(null != e, "guild template must not be null"), e.state === la.QB.RESOLVING)
            ? (0, d.jsx)(G.Ay, { className: l$.sL, children: (0, d.jsx)(lz.A, { guildTemplate: e }) })
            : (0, d.jsx)(lJ, { guildTemplate: e });
    }
    renderContinue() {
        return (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G.hE, { children: q.intl.string(q.t.fOc4gn) }),
                this.renderButton(q.intl.string(q.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(q.intl.string(q.t.ZTNur7));
        if (t === k.fAW.OPEN) return this.renderAppOpened();
        if (t === k.fAW.OPENING) return this.renderSpinner(q.intl.string(q.t["Z+hCVU"]));
        switch (e.state) {
            case la.QB.RESOLVING:
                return this.renderSpinner(q.intl.string(q.t["Z+hCVU"]));
            case la.QB.RESOLVED:
                if (n || !lY.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, d.jsx)(lA, { guildTemplate: e, transitionTo: i, location: l });
                return (0, d.jsx)(lM, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        ((0, lB.C)(lV.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lX.A.flowStart(lq.do.ORGANIC_GUILD_TEMPLATES, lq.ju.NUF_STARTED));
                    },
                });
            case la.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lJ(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lQ.A)(t, !1);
    lX.A.flowStep(lq.do.ORGANIC_GUILD_TEMPLATES, lq.jC.GUILD_CREATE);
    let l = (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(G.hE, { className: l$.wx, children: q.intl.string(q.t.UNFvtM) }),
            n,
            (0, d.jsx)("div", {
                className: l$.Tf,
                children: (0, d.jsx)(W.$, { text: q.intl.string(q.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, d.jsx)(iJ, {
        className: l$.sL,
        children: () => [
            (0, d.jsx)(i0.A, { guildTemplate: t }, "template"),
            (0, d.jsx)("div", { className: l$.KJ, children: l }, "contents"),
        ],
    });
}
function l0(e, t, n) {
    (e.preventDefault(),
        L.default.track(k.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        }));
    let i = eZ.default.getFingerprint(),
        l = null != i ? i : eZ.default.getId();
    eL.A.openMobileApp(n.state === la.QB.RESOLVED ? t : void 0, l);
}
function l1(e) {
    let { code: t } = e,
        n = (0, x.bG)([eR.A], () => eR.A.getGuildTemplate(t));
    return (h.useEffect(() => {
        (0, B.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === la.QB.RESOLVING)
        ? (0, d.jsx)(G.Ay, { children: (0, d.jsx)(eP.y, {}) })
        : n.state === la.QB.RESOLVED
          ? (0, d.jsxs)(G.Ay, {
                children: [
                    (0, d.jsx)(lz.A, { guildTemplate: n, tall: !0 }),
                    (0, d.jsx)("div", {
                        className: $.QX,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => l0(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, d.jsx)(e9, {
                text: q.intl.string(q.t["e/rZ2n"]),
                buttonCta: q.intl.string(q.t.HAvYn0),
                onClick: (e) => l0(e, t, n),
            });
}
(x.Ay.initialize(), n(938796));
var l2 = n(821418),
    l4 = n(665260),
    l3 = n(362474),
    l8 = n(695366),
    l5 = n(964486),
    l7 = n(921037),
    l9 = (((a = {}).IN_CONTENT = "in_content"), (a.BELOW_CONTENT = "below_content"), a);
let l6 = (0, tS.mj)({
    name: "2026-09-silp-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var se = (((o = {}).IN_CONTENT = "in_content"), (o.BELOW_CONTENT = "below_content"), o);
let st = (0, tS.mj)({
    name: "2026-09-silp-app-opened-direct-to-discoverable",
    kind: "installation",
    defaultConfig: { placement: null },
    variations: { 0: { placement: null }, 1: { placement: "in_content" }, 2: { placement: "below_content" } },
});
var sn = n(320448),
    si = n(975807),
    sl = n(818348),
    ss = n(438865);
function sr(e) {
    let { inviteCode: t, guildId: n, className: i, belowContent: l = !1, location: s } = e;
    function r() {
        (L.default.track(
            k.HAw.INVITE_CTA_CLICKED,
            { action: "browse_other_servers", invite_code: t, guild_id: n, location: s },
            { flush: !0 },
        ),
            (0, si.A)(sl.Tk.DISCOVER));
    }
    return l
        ? (0, d.jsx)("div", {
              className: M()(i, ss.B),
              children: (0, d.jsx)(W.$, {
                  text: q.intl.string(q.t["7itT3E"]),
                  onClick: r,
                  variant: "overlay-secondary",
                  icon: { type: "icon", asset: sn._ },
                  iconPosition: "end",
                  size: "sm",
              }),
          })
        : (0, d.jsx)("div", {
              className: M()(i, $.Ot),
              children: (0, d.jsx)(W.$, {
                  text: q.intl.string(q.t["7itT3E"]),
                  onClick: r,
                  variant: "secondary",
                  fullWidth: !0,
              }),
          });
}
var sa = n(804070);
let so = (0, tS.mj)({
    name: "2026-09-silp-desktop-app-upsell",
    kind: "user",
    defaultConfig: { label: null },
    variations: { 1: { label: "download_discord_app" }, 2: { label: "download_app" }, 3: { label: "get_discord" } },
});
var sc = (((c = {}).POPOVER = "popover"), (c.SIDEBAR = "sidebar"), c);
let su = (0, tS.mj)({
    name: "2026-09-invite-silp-education",
    kind: "installation",
    defaultConfig: { variant: null },
    variations: { 1: { variant: "popover" }, 2: { variant: "sidebar" } },
});
function sd(e, t) {
    let { variant: n } = su.useConfig({ location: t });
    return null == e ||
        null == e.guild ||
        (null != e.type && e.type !== tc.Xd.GUILD) ||
        null != e.guild_scheduled_event ||
        null != e.target_type
        ? null
        : (su.getConfig({ location: `${t}.eligible` }), n);
}
var sh =
    (((u = {}).POPOVER_LEARN_MORE = "whats_discord_popover_learn_more"),
    (u.POPOVER_DISMISS = "whats_discord_popover_dismiss"),
    (u.SIDEBAR_ROW = "whats_discord_sidebar_row"),
    (u.PANEL_CLOSE = "whats_discord_panel_close"),
    u);
function sm(e, t) {
    L.default.track(k.HAw.INVITE_CTA_CLICKED, { action: t, invite_code: e.code, guild_id: e.guild?.id });
}
var sg = n(333007),
    sf = n(408278),
    sp = n(972213),
    sx = n(364522),
    sA = n(607470),
    sE = n(75298);
function s_(e) {
    let { title: t, description: n, video: i, poster: l, mediaEnabled: s } = e;
    return (0, d.jsxs)("li", {
        className: sE.N4,
        children: [
            (0, d.jsx)("div", {
                className: sE.HW,
                children: s
                    ? (0, d.jsx)(sA.A, {
                          className: sE.b5,
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
                className: sE.oo,
                children: [
                    (0, d.jsx)(H.E, { variant: "text-md/semibold", color: "text-strong", children: q.intl.string(t) }),
                    (0, d.jsx)(H.E, { variant: "text-md/medium", color: "text-subtle", children: q.intl.string(n) }),
                ],
            }),
        ],
    });
}
let sj = [
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
function sv(e) {
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
        (sm(t, sh.PANEL_CLOSE), s());
    }, [t, s]);
    return (0, sg.createPortal)(
        (0, d.jsx)(tM.N, {
            theme: k.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)("aside", {
                    "data-theme": k.NJ8.DARK,
                    "aria-label": q.intl.string(q.t["FlY+Rz"]),
                    "aria-hidden": !n,
                    className: M()(sE.nd, "start" === i ? sE.BZ : sE.YQ, n && sE.ZC, r && sE.sJ, e, a),
                    children: [
                        (0, d.jsx)("div", {
                            className: sE.VN,
                            children: (0, d.jsx)(t1.m, {
                                text: q.intl.string(q.t.cpT0Cq),
                                children: (0, d.jsx)(sf.K, {
                                    buttonRef: o,
                                    icon: sp.XLargeIcon,
                                    "aria-label": q.intl.string(q.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: c,
                                }),
                            }),
                        }),
                        (0, d.jsx)(sx.Ip, {
                            className: sE.XG,
                            children: (0, d.jsxs)("div", {
                                className: sE.Qs,
                                children: [
                                    (0, d.jsx)(eG.D, {
                                        variant: "heading-xl/semibold",
                                        color: "text-strong",
                                        children: q.intl.string(q.t.YCIfhC),
                                    }),
                                    (0, d.jsx)("ul", {
                                        className: sE.qT,
                                        children: sj.map((e) => (0, d.jsx)(s_, { ...e, mediaEnabled: n }, e.id)),
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
function sN(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/f7a6b755e6c2a5228c797a994ec09f9689fd695cafb96eae119c82f72edfe50d.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var sC = n(789645),
    sI = n(915089),
    sS = n(479789);
function sT(e) {
    let { visible: t, onLearnMore: n, onDismiss: i, learnMoreRef: l } = e,
        s = (0, sI.GV)();
    return (0, sg.createPortal)(
        (0, d.jsx)(tM.N, {
            theme: k.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)("section", {
                    "data-theme": k.NJ8.DARK,
                    "aria-labelledby": s,
                    "aria-hidden": !t,
                    className: M()(sS.oO, t && sS.IZ, e),
                    children: [
                        (0, d.jsx)("div", {
                            className: sS.VN,
                            children: (0, d.jsx)(t1.m, {
                                text: q.intl.string(q.t.cpT0Cq),
                                children: (0, d.jsx)(sf.K, {
                                    icon: sC.P,
                                    "aria-label": q.intl.string(q.t.cpT0Cq),
                                    variant: "secondary",
                                    size: "sm",
                                    onClick: i,
                                }),
                            }),
                        }),
                        (0, d.jsx)("div", {
                            className: sS.fA,
                            children: (0, d.jsx)(sN, { alt: "", ariaHidden: !0, width: 144, height: 81 }),
                        }),
                        (0, d.jsxs)("div", {
                            className: sS.Qq,
                            children: [
                                (0, d.jsx)(iz.F, {
                                    forceLevel: 2,
                                    children: (0, d.jsx)(eG.D, {
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
function sy(e) {
    let { invite: t, children: n } = e,
        i = h.useRef(null),
        [l, s] = h.useState(!1),
        [r, a] = h.useState(!1),
        o = h.useCallback(() => {
            (sm(t, sh.POPOVER_LEARN_MORE), s(!0));
        }, [t]),
        c = h.useCallback(() => {
            (sm(t, sh.POPOVER_DISMISS), a(!0));
        }, [t]),
        u = h.useCallback(() => s(!1), []);
    return (0, d.jsxs)(d.Fragment, {
        children: [
            n,
            r ? null : (0, d.jsx)(sT, { visible: !l, learnMoreRef: i, onLearnMore: o, onDismiss: c }),
            (0, d.jsx)(sv, { invite: t, open: l, edge: "end", returnRef: i, onRequestClose: u }),
        ],
    });
}
var sb = n(996682);
function sR(e) {
    let {
        color: t = e4.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: l,
        width: s = 200,
        height: r = 30,
    } = e;
    return (0, d.jsx)("svg", {
        ...(0, sb.A)({ "aria-label": n, "aria-hidden": i, role: l }),
        width: s,
        height: r,
        viewBox: "0 0 200 30",
        fill: t.css,
        children: (0, d.jsx)("path", {
            fill: t.css,
            d: "M25.55 0c-.4.69-.74 1.4-1.06 2.12-3.02-.45-6.1-.45-9.13 0C15.06 1.4 14.7.7 14.3 0a33.4 33.4 0 0 0-8.23 2.52c-5.2 7.65-6.6 15.1-5.9 22.44A33.16 33.16 0 0 0 10.26 30a24 24 0 0 0 2.16-3.45 21.94 21.94 0 0 1-3.4-1.61l.83-.63a23.85 23.85 0 0 0 20.17 0c.27.22.55.44.84.63a21.72 21.72 0 0 1-3.41 1.61c.62 1.21 1.34 2.37 2.16 3.46a33.14 33.14 0 0 0 10.09-5.02c.83-8.52-1.42-15.91-5.92-22.45A32.9 32.9 0 0 0 25.55.02V0ZM13.3 20.44c-1.96 0-3.6-1.77-3.6-3.95 0-2.19 1.57-3.96 3.6-3.96 2.01 0 3.62 1.78 3.59 3.96-.04 2.18-1.59 3.95-3.59 3.95Zm13.25 0c-1.98 0-3.59-1.77-3.59-3.95 0-2.19 1.57-3.96 3.59-3.96 2.02 0 3.61 1.78 3.58 3.96-.03 2.18-1.58 3.95-3.58 3.95ZM72.28 5.48a17.76 17.76 0 0 0-7.26-1.33H53.15V25.3h11.01c3.1 0 5.7-.48 7.8-1.42a10.38 10.38 0 0 0 4.7-3.86 9.95 9.95 0 0 0 1.53-5.43c.03-1.9-.48-3.78-1.48-5.42a9.74 9.74 0 0 0-4.43-3.7Zm-3.79 13c-1.03.96-2.51 1.44-4.44 1.44h-3.29V9.53h3.71c1.87 0 3.26.47 4.2 1.38.94.98 1.44 2.3 1.38 3.67a5.1 5.1 0 0 1-1.55 3.91h-.01Zm40.37-2.33c.97.86 1.45 2.12 1.46 3.79a5 5 0 0 1-2.42 4.36c-1.6 1.07-3.9 1.6-6.87 1.6-1.7 0-3.4-.22-5.06-.64a16.21 16.21 0 0 1-4.45-1.83V18.4c1.21.87 2.56 1.51 4 1.89 1.58.47 3.22.73 4.86.73.57.04 1.14-.07 1.66-.28.38-.19.56-.43.56-.68 0-.28-.1-.55-.3-.76a2.74 2.74 0 0 0-1.19-.51l-3.65-.81c-2.09-.48-3.57-1.15-4.45-2a4.46 4.46 0 0 1-1.3-3.38 4.46 4.46 0 0 1 1.15-3.04 7.45 7.45 0 0 1 3.28-2c1.62-.51 3.3-.75 5-.72 1.58-.01 3.15.17 4.68.55 1.24.29 2.43.75 3.53 1.38v4.75a13.17 13.17 0 0 0-3.3-1.34 15.1 15.1 0 0 0-3.85-.5c-1.9 0-2.86.31-2.86.95 0 .3.17.56.44.68.52.22 1.06.38 1.62.47l3.04.54c1.98.35 3.45.95 4.43 1.82h-.01Zm20.2 3.49c.88-.26 1.73-.62 2.53-1.08v5.35a14.94 14.94 0 0 1-7.76 2c-2.18.06-4.35-.38-6.33-1.28a9.1 9.1 0 0 1-3.94-3.45 9.22 9.22 0 0 1-1.3-4.89 8.9 8.9 0 0 1 1.36-4.86 9.19 9.19 0 0 1 4.02-3.36c2-.86 4.15-1.28 6.32-1.23 3.05 0 5.57.63 7.58 1.9v5.54a9.95 9.95 0 0 0-5.53-1.63c-1.88 0-3.36.34-4.42 1.03a3.08 3.08 0 0 0-.05 5.37c1.03.69 2.54 1.04 4.5 1.04 1.02 0 2.03-.15 3-.44l.01-.01Zm22.52-11.58c-4-1.61-8.48-1.61-12.48 0a8.7 8.7 0 0 0-5.38 8.2 9.08 9.08 0 0 0 1.38 4.92 9.4 9.4 0 0 0 4.03 3.45 15.95 15.95 0 0 0 12.44-.01 9.34 9.34 0 0 0 4-3.45 9.15 9.15 0 0 0 1.37-4.93 8.77 8.77 0 0 0-1.37-4.86 9.2 9.2 0 0 0-3.98-3.32h-.01Zm-3.21 11.2a4.08 4.08 0 0 1-3.05 1.1 4.2 4.2 0 0 1-3.04-1.1 3.91 3.91 0 0 1-1.11-2.91 3.82 3.82 0 0 1 1.1-2.89 4.21 4.21 0 0 1 3.05-1.07 4.18 4.18 0 0 1 3.05 1.07 3.8 3.8 0 0 1 1.1 2.89 3.93 3.93 0 0 1-1.1 2.92Zm24.08-12.04a5.1 5.1 0 0 1 2.77.73v6.53c-.91-.53-1.96-.8-3.02-.75-1.62 0-2.87.48-3.74 1.46-.87.98-1.3 2.5-1.3 4.55v5.56h-7.46V7.62h7.3v5.62c.4-2.06 1.05-3.57 1.96-4.55.89-.97 2.15-1.5 3.47-1.47h.02Zm20.08-3.68v7.88c-1.21-3.06-3.6-4.6-7.14-4.6a8.38 8.38 0 0 0-7.74 4.69 10.6 10.6 0 0 0-1.08 4.99 11 11 0 0 0 1.02 4.82 8.05 8.05 0 0 0 2.92 3.35 8 8 0 0 0 4.42 1.23c1.66.04 3.3-.36 4.73-1.18a7.06 7.06 0 0 0 2.88-3.4v3.97H200V3.54h-7.46Zm-1.1 15.62a4.16 4.16 0 0 1-3.04 1.08 4.12 4.12 0 0 1-2.98-1.08 3.72 3.72 0 0 1-1.14-2.81 3.67 3.67 0 0 1 1.13-2.8 4.8 4.8 0 0 1 6.04 0 3.6 3.6 0 0 1 1.14 2.76 3.8 3.8 0 0 1-1.14 2.85ZM88.2 6.2c0 1.83-1.66 3.31-3.71 3.31s-3.71-1.48-3.71-3.31c0-1.84 1.66-3.32 3.71-3.32s3.71 1.48 3.71 3.32Zm0 5.6v13.6h-7.43V11.8c2.38.99 5.06.99 7.43 0Z",
        }),
    });
}
var sL = n(540747),
    sO = n(405494);
function sk(e) {
    let { expanded: t, onClick: n, innerRef: i } = e;
    return (0, d.jsxs)(n$.D, {
        innerRef: i,
        className: M()(sO.nM, t && sO.cE),
        "aria-expanded": t,
        onClick: n,
        children: [
            (0, d.jsx)("div", {
                className: sO.zR,
                children: (0, d.jsx)(sN, { alt: "", ariaHidden: !0, width: 100, height: 56 }),
            }),
            (0, d.jsxs)("div", {
                className: sO.qg,
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
                className: sO.o2,
                children: (0, d.jsx)(sn._, { size: "custom", width: 16, height: 16 }),
            }),
        ],
    });
}
function sD(e) {
    let { invite: t, header: n, children: i } = e,
        l = h.useRef(null),
        [s, r] = h.useState(!1);
    (0, sL.Y)();
    let a = h.useCallback(() => {
            (s || sm(t, sh.SIDEBAR_ROW), r(!s));
        }, [t, s]),
        o = h.useCallback(() => r(!1), []);
    return (0, sg.createPortal)(
        (0, d.jsx)(tM.N, {
            theme: k.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsxs)("div", {
                            "data-theme": k.NJ8.DARK,
                            className: M()(sO.pz, e),
                            children: [
                                (0, d.jsx)(sR, { "aria-hidden": !0, width: 133, height: 20 }),
                                (0, d.jsx)(sx.Ip, {
                                    className: sO.XG,
                                    children: (0, d.jsxs)("div", {
                                        className: sO.Qs,
                                        children: [n, (0, d.jsx)("div", { className: sO.F7, children: i })],
                                    }),
                                }),
                                (0, d.jsx)(sk, { innerRef: l, expanded: s, onClick: a }),
                            ],
                        }),
                        (0, d.jsx)(sv, {
                            invite: t,
                            open: s,
                            edge: "start",
                            returnRef: l,
                            onRequestClose: o,
                            className: sO.nd,
                            translucent: !0,
                        }),
                    ],
                }),
        }),
        document.body,
    );
}
function sw(e) {
    let { mode: t, invite: n, location: i, transitionTo: l, onLoginStart: s, children: r } = e;
    return (0, tH.A)("(min-width: 900px)")
        ? "login" === t
            ? (0, d.jsx)(sD, {
                  invite: n,
                  header: (0, d.jsx)("div", { className: $.S3, children: (0, d.jsx)(iY.A, { invite: n }) }),
                  children: (0, d.jsx)(lA, {
                      invite: n,
                      isEmbedded: !0,
                      authBoxClassName: sO.sL,
                      location: i,
                      transitionTo: l,
                  }),
              })
            : (0, d.jsx)(sD, {
                  invite: n,
                  children: (0, d.jsx)(lM, {
                      invite: n,
                      authBoxClassName: sO.sL,
                      onLoginStart: s,
                      location: i,
                      transitionTo: l,
                  }),
              })
        : r;
}
var sP = n(930839),
    sG = n(53505),
    sU = n(4274);
x.Ay.initialize();
let sB = "register",
    sF = "login";
function sV(e) {
    let { message: t, onClick: n, invite: i, className: l, notice: s, secondaryAction: r } = e,
        a = i?.guild_scheduled_event != null,
        o = a ? "active" : "primary";
    return lY.VP
        ? (0, d.jsx)("div", {
              className: l ?? (a ? $.QX : $.eT),
              children: (0, d.jsxs)(ew.B, {
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
        : (0, d.jsx)(G.KE, { className: l ?? $.eT });
}
function sM(e) {
    let t = tb("InviteAccept");
    return (0, d.jsx)(sV, { ...e, message: tR(t) });
}
function sH(e) {
    let { invite: t, transitionTo: n, location: i } = e,
        l = sd(t, "InviteLogin"),
        s = (0, d.jsx)(lA, { invite: t, transitionTo: n, location: i });
    switch (l) {
        case sc.POPOVER:
            return (0, d.jsx)(sy, { invite: t, children: s });
        case sc.SIDEBAR:
            return (0, d.jsx)(sw, { mode: "login", invite: t, location: i, transitionTo: n, children: s });
        default:
            return s;
    }
}
function sW(e) {
    let { invite: t, onLoginStart: n, location: i, transitionTo: l } = e,
        s = sd(t, "InviteRegister"),
        r = (0, d.jsx)(lM, { invite: t, onLoginStart: n, location: i, transitionTo: l });
    switch (s) {
        case sc.POPOVER:
            return (0, d.jsx)(sy, { invite: t, children: r });
        case sc.SIDEBAR:
            return (0, d.jsx)(sw, {
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
function sK(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l, expirationLocation: s } = e,
        r = (0, x.bG)([tt.A], () => (t.state === k.elq.ERROR ? tt.A.getInviteError(n) : void 0)),
        a = t.guild_scheduled_event,
        o = r?.code === k.t02.INVALID_CANNOT_FRIEND_SELF,
        c = lY.VP && !o && ty(t),
        u = null == a ? (0, d.jsx)(sa.A, { invite: t, location: s }) : null,
        { label: m } = so.useConfig({ location: "InviteAuthenticated" }),
        g = lY.VP && !nk.isPlatformEmbedded && !o;
    g && so.getConfig({ location: "InviteAuthenticated.eligible" });
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
                      (L.default.track(k.HAw.INVITE_CTA_CLICKED, {
                          action: "download_app",
                          invite_code: t.code,
                          guild_id: t.guild?.id,
                      }),
                          window.open((0, sG.SU)(), "_blank"),
                          L.default.track(k.HAw.DOWNLOAD_APP, {
                              platform: (0, sG.Vf)(),
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
            sP.A.requestDrain();
        }, []),
        (0, d.jsxs)("div", {
            children: [
                (0, d.jsxs)(G.Ay, {
                    children: [
                        null != a
                            ? (0, d.jsx)(lk, { channel: t.channel, guildScheduledEvent: a })
                            : (0, d.jsx)(iY.A, { invite: t }),
                        null != r &&
                            (0, d.jsx)("div", {
                                className: $.QX,
                                role: "alert",
                                children: (0, d.jsxs)(H.E, {
                                    variant: "text-sm/medium",
                                    color: "text-feedback-critical",
                                    style: { display: "flex", alignItems: "center", gap: 4 },
                                    children: [
                                        (0, d.jsx)(l8.E, {
                                            size: "custom",
                                            width: 14,
                                            height: 14,
                                            color: "currentColor",
                                        }),
                                        " ",
                                        (0, sU.s)(r.code),
                                    ],
                                }),
                            }),
                        c
                            ? (0, d.jsx)(sM, {
                                  invite: t,
                                  onClick: i,
                                  className: null != r ? $.QX : void 0,
                                  notice: u,
                                  secondaryAction: f,
                              })
                            : (0, d.jsx)(sV, {
                                  invite: t,
                                  message: q.intl.string(o ? q.t.fIv16B : q.t.ohMvm1),
                                  onClick: o ? l : i,
                                  className: null != r ? $.QX : void 0,
                                  notice: u,
                                  secondaryAction: f,
                              }),
                    ],
                }),
                null != a &&
                    null != t.guild &&
                    (0, d.jsx)(G.Ay, {
                        className: $.QX,
                        children: (0, d.jsx)(lw, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                    }),
            ],
        })
    );
}
function sQ(e) {
    return lY.VP
        ? (0, d.jsx)(sz, { ...e })
        : (0, d.jsxs)(G.Ay, {
              children: [(0, d.jsx)(iY.A, { invite: e.invite }), (0, d.jsx)(G.KE, { className: $.eT })],
          });
}
function sz(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e,
        s = st.useConfig({ location: "InviteAppOpened" }).placement;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(G.Ay, {
                children: [
                    (0, d.jsx)(iY.A, { invite: t }),
                    (0, d.jsx)("div", {
                        className: $.QX,
                        children: (0, d.jsx)(W.$, {
                            text: q.intl.string(q.t.UQvCf7),
                            onClick: function () {
                                (L.default.track(k.HAw.INVITE_CTA_CLICKED, {
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
                        className: $.Ot,
                        children:
                            s === se.IN_CONTENT
                                ? (0, d.jsx)(sr, {
                                      inviteCode: t.code,
                                      guildId: t.guild?.id,
                                      location: "InviteAppOpened",
                                  })
                                : (0, d.jsx)(W.$, {
                                      text: q.intl.string(q.t["2ixEBi"]),
                                      onClick: function () {
                                          (L.default.track(k.HAw.INVITE_CTA_CLICKED, {
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
            s === se.BELOW_CONTENT &&
                (0, d.jsx)(sr, {
                    inviteCode: t.code,
                    guildId: t.guild?.id,
                    className: $.QX,
                    belowContent: !0,
                    location: "InviteAppOpened",
                }),
        ],
    });
}
function sX(e) {
    let { title: t } = e;
    return (0, d.jsxs)(G.Ay, { children: [(0, d.jsx)(G.hE, { children: t }), (0, d.jsx)(G.CK, {})] });
}
function sq(e) {
    let { banned: t, invite: n, handleDefaultTransition: i } = e,
        l = l6.useConfig({ location: "InviteInvalid" }).placement;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)(G.Ay, {
                children: [
                    (0, d.jsx)(G.hE, { className: M()($.Ot, $.QB), children: q.intl.string(q.t.kux01N) }),
                    (0, d.jsx)(G.tK, { children: t ? q.intl.string(q.t["5AkWAd"]) : q.intl.string(q.t["+qUJAj"]) }),
                    (0, d.jsx)(sV, { message: q.intl.string(q.t.fIv16B), onClick: i }),
                    l === l9.IN_CONTENT &&
                        (0, d.jsx)(sr, { inviteCode: n.code, guildId: n.guild?.id, location: "ExpiredInvite" }),
                    (0, d.jsx)("div", {
                        className: $.Ot,
                        style: { textAlign: "left" },
                        children: (0, d.jsx)(eg.Q, {
                            size: "sm",
                            textVariant: "text-sm/medium",
                            text: q.intl.string(q.t.urIwn4),
                            onClick: () => window.open(nz.A.getArticleURL(k.MVz.INVALID_INVITES), "_blank"),
                        }),
                    }),
                ],
            }),
            l === l9.BELOW_CONTENT &&
                (0, d.jsx)(sr, {
                    inviteCode: n.code,
                    guildId: n.guild?.id,
                    className: $.QX,
                    belowContent: !0,
                    location: "ExpiredInvite",
                }),
        ],
    });
}
function sY(e) {
    let { handleDefaultTransition: t } = e;
    return (0, d.jsxs)(G.Ay, {
        children: [
            (0, d.jsx)(G.hE, { children: q.intl.string(q.t.fOc4gn) }),
            (0, d.jsx)(sV, { message: q.intl.string(q.t.fIv16B), onClick: t }),
        ],
    });
}
var s$ = n(334465);
let sZ = (0, n(600975).C)({
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
var sJ = n(163050);
x.Ay.initialize();
var s0 = n(701273);
function s1(e) {
    n.g.location.assign(e);
}
(x.Ay.initialize(), n(426620), x.Ay.initialize());
let s2 = i_(lA),
    s4 = i_(function (e) {
        let { transitionTo: t } = e,
            n = h.useCallback(
                (e) => {
                    let n;
                    ((n = (0, s$.B)(e, { path: k.BVt.CHANNEL(nF.pv.guildId(), nF.pv.channelId()) })),
                    +(n?.params?.channelId !== S.VV.ROLE_SUBSCRIPTIONS))
                        ? (t ?? U.pX)(e)
                        : U.bG(e);
                },
                [t],
            ),
            { isAuthenticated: i, loginStatus: l } = (0, x.cf)([eZ.default], () => ({
                isAuthenticated: eZ.default.isAuthenticated(),
                loginStatus: eZ.default.getLoginStatus(),
            })),
            { location: s, redirectTo: r } = e,
            [a, o] = h.useState(i);
        function c(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            ((0, N.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), o(!1));
        }
        return ((0, l5.Ay)(() => {
            if (null != s) {
                let { handoff_key: e, handoff_token: t } = (0, m.parse)(s.search);
                if (null != e && null != t) {
                    let n = null != r ? b(r) : void 0;
                    a
                        ? E.A.logout("handoff", null).finally(() => {
                              c({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : c({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        a || l === k.aUe.LOGGING_IN)
            ? (0, d.jsx)(G.Ay, { children: (0, d.jsx)(eP.y, {}) })
            : (0, d.jsx)(lA, { ...e, transitionTo: n });
    }),
    s3 = i_(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = h.useMemo(() => (0, e0.m0)(t), [t]),
            r = (0, x.bG)([tt.A], () => tt.A.getInvite(t)),
            a = (0, x.bG)([iR.A], () => iR.A.getState(s)),
            o = (0, x.bG)([eZ.default], () => eZ.default.isAuthenticated()),
            c = (0, x.bG)([ef.A], () => ef.A.defaultRoute),
            u = (0, x.bG)([lN], () => lN.isUnderageAnonymous()),
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
                    t || e === k.fAW.OPEN_FAIL
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
            (a === k.fAW.OPEN || r?.state === k.elq.APP_OPENED) && p(!0);
        }, [r?.state, a]);
        let E = l ? sF : sB,
            _ = h.useCallback((e) => j.Ay.getInviteContext(e, r), [r]),
            v = h.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? j.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : j.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            N = h.useCallback(() => {
                (L.default.track(k.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    j.Ay.acceptInvite({
                        inviteKey: t,
                        context: _(k.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            (ea(e), null != e.channel && (m ? v(e) : j.Ay.openApp(t, e.channel.id)));
                        },
                    }).catch(() => {}));
            }, [t, _, r?.code, r?.guild?.id, m, v]),
            C = h.useCallback(() => {
                i(c);
            }, [c, i]);
        if (
            ((0, l5.Ay)(() => {
                let e = eZ.default.getAnalyticsToken();
                if (
                    (null != e
                        ? A.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eZ.default.getId() })
                        : eZ.default.isAuthenticated() && nW.rQ({ withAnalyticsToken: !0 }).catch(k.tEg),
                    L.default.track(k.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, B.d0)("invite"),
                    lY.VP || eJ.A.launch("discord://" + k.BVt.INVITE(t), () => void 0),
                    !l && u)
                ) {
                    let { baseCode: e } = (0, e0.y$)(t);
                    (0, U.bG)(k.BVt.INVITE_LOGIN(e));
                }
            }),
            h.useEffect(() => {
                r?.state === k.elq.APP_NOT_OPENED && v();
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
                    c = (0, iQ.Ay)(i),
                    u = (0, iQ.Ay)(l);
                (h.useEffect(() => {
                    if (s === sF && i && !1 === c) {
                        let e = eZ.default.getFingerprint();
                        if (null != e) {
                            let i = (0, e$.d)(e);
                            L.default.track(k.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, e0.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        j.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(k.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [i, c, s, r, a, t, n]),
                    h.useEffect(() => {
                        if (null != t && s === sB && i && !1 === c) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lB.C)(lV.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, l4.Lt)(t.flags ?? 0, l2.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                k.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                k.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? o(k.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : j.Ay.transitionToInviteOnboarding(t, { transitionTo: o });
                                } else j.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, i, c, o, s, n]),
                    h.useEffect(() => {
                        null == t ||
                            (l !== u &&
                                (l === k.fAW.OPEN
                                    ? L.default.track(
                                          k.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, e0.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != te.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? tc.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === k.fAW.OPEN_FAIL &&
                                      L.default.track(k.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, e0.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? tc.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, u, n]));
            })({
                invite: r,
                inviteKey: t,
                authenticated: o,
                nativeAppState: a,
                mode: E,
                getAcceptInviteContext: _,
                handleContinue: v,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = a === k.fAW.OPEN;
        if (f || I || r.state === k.elq.APP_OPENED)
            return (0, d.jsx)(sQ, { invite: r, inviteKey: t, rpcConnected: I, onContinue: v });
        let { state: S } = r;
        if (S === k.elq.APP_NOT_OPENED) return (0, d.jsx)(sY, { handleDefaultTransition: C });
        if ([k.elq.RESOLVING, k.elq.ACCEPTING, k.elq.APP_OPENING].includes(S)) {
            let e =
                S === k.elq.ACCEPTING ? q.intl.string(q.t["6wsY16"]) : (k.elq.RESOLVING, q.intl.string(q.t["Z+hCVU"]));
            return (0, d.jsx)(sX, { title: e });
        }
        if (S === k.elq.EXPIRED) return (0, d.jsx)(sq, { banned: !1, invite: r, handleDefaultTransition: C });
        if (S === k.elq.BANNED) return (0, d.jsx)(sq, { banned: !0, invite: r, handleDefaultTransition: C });
        if (S === k.elq.RESOLVED) {
            if (o && (0, l4.Lt)(r.flags ?? 0, l2.Q.IS_GUEST_INVITE))
                return (
                    j.Ay.openApp(t),
                    l3.u.set(l7.B, t),
                    (0, d.jsx)(sQ, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(k.BVt.APP) })
                );
            if (null != r.type && tc.uR.has(r.type) && g)
                return (0, d.jsx)(sX, { title: q.intl.string(q.t["Z+hCVU"]) });
            if (!o && lY.VP)
                return E === sF
                    ? (0, d.jsx)(sH, { invite: r, transitionTo: i, location: n })
                    : (0, d.jsx)(sW, {
                          invite: r,
                          onLoginStart: function () {
                              L.default.track(k.HAw.INVITE_LOGIN, {
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
        return S === k.elq.RESOLVED || S === k.elq.ERROR
            ? (0, d.jsx)(sK, {
                  invite: r,
                  inviteKey: t,
                  handleAccept: N,
                  handleDefaultTransition: C,
                  expirationLocation: o ? "InvitePage" : void 0,
              })
            : null;
    }),
    s8 = i_(function (e) {
        let t = {
            guildTemplate: (0, x.bG)([eR.A], () => eR.A.getGuildTemplate(e.code)),
            nativeAppState: (0, x.bG)([iR.A], () => iR.A.getState(e.code)),
            authenticated: (0, x.bG)([eZ.default], () => eZ.default.isAuthenticated()),
            defaultRoute: (0, x.bG)([ef.A], () => ef.A.defaultRoute),
        };
        return (0, d.jsx)(lZ, { ...e, ...t });
    }),
    s5 = i_(lW),
    s7 = i_(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, x.bG)([tt.A], () => tt.A.getInvite(t));
        return (
            h.useEffect(() => {
                let e = eZ.default.getAnalyticsToken();
                (null != e &&
                    A.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eZ.default.getId() }),
                    (0, B.d0)("invite_mobile"),
                    L.default.track(k.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }));
            }, []),
            (0, d.jsx)(nL, {
                invite: i,
                onAcceptInvite: function (e) {
                    nN(e, t, i);
                },
                onOpenAppAfterRegistration: function (e) {
                    nN(e, t, i, { didRegister: !0 });
                },
                transitionTo: n,
            })
        );
    }),
    s9 = i_(lM),
    s6 = i_(function (e) {
        let { location: t, transitionTo: i = U.pX } = e,
            [l, s] = h.useState("submitting");
        function r() {
            return "Android" === eX().os.family || "iOS" === eX().os.family
                ? null
                : (0, d.jsx)(W.$, {
                      text: q.intl.string(q.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(k.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, l5.Ay)(() => {
            (0, B.d0)("authorize_ip");
            let e = (0, ex.A)(t);
            null == e
                ? s("failed")
                : (async function () {
                      if (null != e)
                          try {
                              (await E.A.authorizeIPAddress(e), s("succeeded"));
                          } catch (e) {
                              s("failed");
                          }
                  })();
        }),
        "failed" === l)
            ? (0, d.jsxs)(G.Ay, {
                  children: [
                      (0, d.jsx)("img", { alt: "", src: n(792009), className: $.SX }),
                      (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t["f/54az"]) }),
                      (0, d.jsx)(G.tK, { className: $.C2, children: q.intl.string(q.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, d.jsxs)(G.Ay, {
                    children: [
                        (0, d.jsx)("img", { alt: "", src: n(841406), className: $.SX }),
                        (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.iG0SlK) }),
                        (0, d.jsx)(G.tK, { className: $.C2, children: q.intl.string(q.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, d.jsxs)(G.Ay, {
                    children: [(0, d.jsx)(G.CK, {}), (0, d.jsx)(G.hE, { children: q.intl.string(q.t["9exy+V"]) })],
                });
    }),
    re = i_(function (e) {
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
                              (await E.A.authorizePayment(e), l("succeeded"));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, d.jsxs)(G.Ay, {
                  children: [
                      (0, d.jsx)("img", { alt: "", src: n(678985), className: $.SX }),
                      (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.GHRpue) }),
                      (0, d.jsx)(G.tK, { className: $.C2, children: q.intl.string(q.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, d.jsxs)(G.Ay, {
                    children: [
                        (0, d.jsx)("img", { alt: "", src: n(586430), className: $.SX }),
                        (0, d.jsx)(G.hE, { className: $.QB, children: q.intl.string(q.t.ihHX53) }),
                        (0, d.jsx)(G.tK, { className: $.C2, children: q.intl.string(q.t["pGPCv+"]) }),
                    ],
                })
              : (0, d.jsxs)(G.Ay, {
                    children: [(0, d.jsx)(G.CK, {}), (0, d.jsx)(G.hE, { children: q.intl.string(q.t.T3vC7n) })],
                });
    }),
    rt = i_(function (e) {
        let { location: t, transitionTo: n = s1 } = e,
            [i, l] = h.useState("submitting"),
            s = h.useRef(void 0);
        (0, l5.Ay)(() => {
            (0, B.d0)("verify_email");
            let e = (0, ex.A)(t);
            null == e
                ? l("failed")
                : (async function () {
                      if (null != e)
                          try {
                              let t = await E.A.verify(e);
                              (l("succeeded"), (s.current = t));
                          } catch (e) {
                              l("failed");
                          }
                  })();
        });
        let r = h.useCallback(() => {
                n(k.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = h.useCallback(() => {
                (L.default.track(k.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, s0.A)("verify_email"));
            }, []);
        return "failed" === i
            ? (0, d.jsx)(eB, {
                  title: q.intl.string(q.t["PCgG3+"]),
                  subtitle: q.intl.string(q.t.tQpeA3),
                  buttonText: q.intl.string(q.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, d.jsx)(eB, {
                    title: q.intl.string(q.t["dAfGb+"]),
                    buttonText: q.intl.string(q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, d.jsx)(ek, { alt: q.intl.string(q.t["dAfGb+"]) }),
                })
              : (0, d.jsx)(eB, {
                    title: q.intl.string(q.t["0c8+5n"]),
                    subtitle: q.intl.string(q.t.ULTCBE),
                    loading: !0,
                });
    }),
    rn = i_(function () {
        let [e, t] = h.useState(""),
            [i, l] = h.useState(""),
            [s, r] = h.useState(!1),
            [a, o] = h.useState(!1),
            [c, u] = h.useState(null),
            [m, g] = h.useState(null),
            f = (0, x.bG)([eN.A], () => eN.A.getCountryCode()),
            p = f.code.split(" ")[0];
        async function A() {
            try {
                await ej.A.resendCode(e);
            } catch (e) {
                g(e.body.message);
            }
        }
        async function E() {
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
        let _ = (0, d.jsxs)(G.Ay, {
            children: [
                (0, d.jsx)(G._V, { src: n(142041) }),
                (0, d.jsxs)(G.hE, {
                    className: M()($.QX, eI.Uu, eI.wq, eI.Hu),
                    children: [
                        q.intl.string(q.t.WWzQta),
                        (0, d.jsx)(e_.y, { size: "md", color: "currentColor", className: $.oY }),
                    ],
                }),
            ],
        });
        return a
            ? _
            : (0, d.jsxs)(G.Ay, {
                  children: [
                      (0, d.jsx)(G.hE, { children: q.intl.string(q.t.o4JNrO) }),
                      (0, d.jsx)(G.tK, { className: $.Ot, children: q.intl.string(q.t.y0tVbq) }),
                      (0, d.jsxs)(G.eB, {
                          className: $.QX,
                          children: [
                              (0, d.jsx)(eC.A, {
                                  label: q.intl.string(q.t["eJnn0+"]),
                                  alpha2: f.alpha2,
                                  countryCode: p,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: ev.Pd.PHONE,
                                  error: c,
                              }),
                              (0, d.jsx)(G.pd, {
                                  className: $.QX,
                                  label: q.intl.string(q.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, d.jsx)(eg.Q, { text: q.intl.string(q.t["5b60gi"]), onClick: A }),
                              (0, d.jsx)("div", {
                                  className: $.QX,
                                  children: (0, d.jsx)(W.$, {
                                      text: q.intl.string(q.t.i4jeWR),
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
    ri = i_(sJ.A),
    rl = i_(iy),
    rs = i_(eE),
    rr = i_(function (e) {
        let { location: t } = e,
            [n, i] = h.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, x.bG)([eW], () => eW.getState());
        function a() {
            let e, t;
            ((e = (function (e) {
                let t = eX().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eZ.default.getFingerprint(),
                        n = (0, eY.I_)();
                    return (
                        eQ()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eY.Ay)((0, eq.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eY.X7)(e)) &&
                    L.default.track(k.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, e$.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eJ.A.launch(e, (e) => {
                    e || (0, U.bG)(ef.A.fallbackRoute);
                }),
                i(!0));
        }
        return (h.useEffect(() => {
            let e = (0, ex.A)(t);
            (eD.A.verify(e), (0, B.d0)("verify_hub_email"));
        }, [t]),
        n)
            ? (0, d.jsx)(eB, {
                  title: q.intl.string(q.t.csrAMJ),
                  subtitle: q.intl.string(q.t["m1+IBn"]),
                  buttonText: q.intl.string(q.t.fIv16B),
                  onButtonClick: () => (0, U.pX)(k.BVt.CHANNEL(r)),
              })
            : l
              ? (0, d.jsx)(eB, {
                    title: q.intl.string(q.t["dAfGb+"]),
                    buttonText: q.intl.string(q.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, d.jsx)(ek, { alt: q.intl.string(q.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, d.jsx)(eB, {
                      title: q.intl.string(q.t["PCgG3+"]),
                      subtitle: q.intl.string(q.t.tQpeA3),
                      buttonText: q.intl.string(q.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, d.jsx)(eB, {
                      title: q.intl.string(q.t["0c8+5n"]),
                      subtitle: q.intl.string(q.t.ULTCBE),
                      loading: !0,
                  });
    }),
    ra = i_(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, iv.W)(nU.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, d.jsx)(iI, { match: t, location: n, attemptDeepLink: i });
    }),
    ro = i_(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, iv.W)(nU.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, d.jsx)(iI, { match: t, location: n, attemptDeepLink: i });
    }),
    rc = i_(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, iv.W)(nU.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, d.jsx)(iI, { match: t, location: n, attemptDeepLink: i });
    }),
    ru = i_(function (e) {
        let { location: t } = e,
            n = (0, x.bG)([eZ.default], () => eZ.default.isAuthenticated()),
            i = (0, x.bG)([ey.A], () => ey.A.hasLoadedExperiments),
            l = sZ.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = h.useState(!1),
            [a, o] = h.useState(q.intl.string(q.t["9exy+V"])),
            [c, u] = h.useState(!0);
        function m(e) {
            switch (e) {
                case k.t02.INVALID_FORM_BODY:
                case k.t02.DSA_RSL_REPORT_NOT_FOUND:
                    o(q.intl.string(q.t.bzXDfc));
                    break;
                case k.t02.DSA_RSL_ALREADY_REQUESTED:
                    o(q.intl.string(q.t.rV00wq));
                    break;
                case k.t02.DSA_RSL_LIMITED_TIME:
                    o(q.intl.string(q.t["0dI29h"]));
                    break;
                case k.t02.DSA_RSL_REPORT_INELIGIBLE:
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
                      nW
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => u(!1))
                          .catch(() => u(!1)))
                    : u(!1);
            }, [n]),
            h.useEffect(() => {
                i || l || E.A.getExperiments();
            }, [i, l]),
            h.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, nQ.q)(e) : void 0;
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
                (0, d.jsxs)(G.Ay, {
                    children: [(0, d.jsx)(G.hE, { className: $.QB, children: a }), s && (0, d.jsx)(eP.y, {})],
                })
        );
    }),
    rd = i_(es),
    rh = i_(function (e) {
        let { match: t, location: i } = e,
            l = (0, m.parse)(i.search).token,
            [s, r] = h.useState("loading"),
            a = h.useRef(!1),
            o = h.useCallback(async (e) => {
                try {
                    (L.default.track(k.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await E.A.oneTimeLogin(e),
                        r("login_success"),
                        L.default.track(k.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(k.BVt.APP));
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    (L.default.track(k.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error"));
                }
            }, []),
            c = h.useCallback((e) => {
                let t = eZ.default.getFingerprint() ?? eZ.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eJ.A.launch(n, (e) => {
                    e
                        ? (L.default.track(k.HAw.DEEP_LINK_CLICKED, {
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
                    let t = eZ.default.getFingerprint() ?? eZ.default.getId(),
                        i = eZ.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(k.e$_.DEEP_LINK, {
                                type: nU.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (L.default.track(k.HAw.DEEP_LINK_CLICKED, {
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
                    t = f.Fr ? "mobile" : f.v1 ? "tablet" : (0, nk.isDesktop)() ? "desktop_app" : "web";
                if ((L.default.track(k.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (f.Fr || f.v1) {
                    let e = L.default.getSuperProperties()?.os;
                    L.default.track(k.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, nk.isDesktop)() ? o(l) : a.current || ((a.current = !0), r("rpc_attempting"), u(l));
            }, [l, i, o, u]),
            f.Fr || f.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, d.jsx)(nG, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, U.MX)()) return null;
        if ("app_launched" === s)
            return (0, d.jsx)(nB, {
                title: q.intl.string(q.t.RvUUOy),
                subtitle: q.intl.string(q.t["5/lR0g"]),
                buttonText: q.intl.string(q.t["2ixEBi"]),
                buttonOnClick: () => {
                    (L.default.track(k.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), o(l));
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, d.jsx)(nB, {
                title: q.intl.string(q.t.qq4tjT),
                subtitle: q.intl.string(q.t.CVxYRo),
                buttonText: q.intl.string(q.t["2ixEBi"]),
                buttonOnClick: () => o(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, d.jsx)(nB, {
                title: q.intl.string(q.t.RtCSr1),
                subtitle: q.intl.string(q.t["S+YjYJ"]),
                buttonText: q.intl.string(q.t.j3cG2p),
                buttonOnClick: () => {
                    (L.default.track(k.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, U.pX)(k.BVt.LOGIN));
                },
            });
        }
        return (0, d.jsx)(G.Ay, { children: (0, d.jsx)(G.CK, {}) });
    });
class rm extends h.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, m.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(k.BVt.ME) || (!(0, p.e)(s) && !eh(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, ia.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, ir.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = tn.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        (null != e &&
            (!t && n && E.A.getExperiments(!0),
            null != eZ.default.getInstallationForTracking() && (0, eb.Tv)(null),
            L.default.track(
                k.HAw.INVITE_OPENED,
                { invite_code: (0, e0.m0)(e), load_time: ic.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            P.initialize(),
            (0, B.DC)());
    }
    componentDidUpdate(e) {
        (!e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash());
    }
    componentWillUnmount() {
        (null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            P.terminate());
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
        if (e?.state === k.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, ir.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await j.Ay.resolveInvite(e, k.S3d.INVITE, {
            withGames: !0,
            withGuildExperiments: f.Fr || f.v1,
        });
        if (null != t && (ea(t), null != t.type && tc.uR.has(t.type))) {
            if ("denied" === (await eT()))
                return void L.default.track(k.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, e0.m0)(e),
                    reason: "lna_denied",
                    invite_type: tc.Xd[t.type],
                });
            j.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (L.default.track(
                k.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: ic.getTimeSinceNavigationStart() },
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
                    null != t && null == t.giftCode.promotion && A.h.wait(() => _.Ay.openNativeGiftCodeModal(e));
                })
                .catch(_.Ay.reportUnexpectedGiftCodeError);
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, d.jsxs)(ij.A, {
            splash: e,
            children: [
                (0, d.jsx)(er.A, { path: k.BVt.LOGIN_HANDOFF, render: (e) => (0, d.jsx)(s4, { ...e, redirectTo: t }) }),
                (0, d.jsx)(er.A, { path: k.BVt.LOGIN_ONE_TIME, render: (e) => (0, d.jsx)(rh, { ...e }) }),
                (0, d.jsx)(er.A, {
                    impressionName: g.ImpressionNames.USER_LOGIN,
                    path: k.BVt.LOGIN,
                    render: (e) => (0, d.jsx)(s2, { ...e, redirectTo: t }),
                }),
                (0, d.jsx)(er.A, {
                    impressionName: g.ImpressionNames.USER_REGISTRATION,
                    path: k.BVt.REGISTER,
                    render: (e) => (0, d.jsx)(s9, { ...e, redirectTo: t }),
                }),
                (0, d.jsx)(er.A, {
                    path: k.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, d.jsx)(s5, { login: !0, ...e }),
                }),
                (0, d.jsx)(er.A, { path: k.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, d.jsx)(s5, { ...e }) }),
                (0, d.jsx)(er.A, {
                    path: [k.BVt.INVITE_LOGIN(":inviteCode"), k.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, e0.fB)(t, i.search);
                        return f.Fr || f.v1
                            ? (0, d.jsx)(s7, { inviteKey: s, transitionTo: l }, s)
                            : (0, d.jsx)(
                                  s3,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === k.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, d.jsx)(er.A, {
                    path: [
                        k.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        k.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
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
                            ? (0, d.jsx)(l1, { code: t }, t)
                            : (0, d.jsx)(s8, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === k.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, d.jsx)(er.A, { path: k.BVt.VERIFY, render: (e) => (0, d.jsx)(rt, { ...e }) }),
                (0, d.jsx)(er.A, { path: k.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, d.jsx)(rr, { ...e }) }),
                (0, d.jsx)(er.A, { path: k.BVt.VERIFY_REQUEST, render: (e) => (0, d.jsx)(rn, { ...e }) }),
                (0, d.jsx)(er.A, { path: k.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, d.jsx)(rl, { ...e }) }),
                (0, d.jsx)(er.A, {
                    path: k.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, d.jsx)(rs, { ...e }),
                }),
                (0, d.jsx)(er.A, { path: k.BVt.AUTHORIZE_IP, render: (e) => (0, d.jsx)(s6, { ...e }) }),
                (0, d.jsx)(er.A, {
                    path: k.BVt.REJECT_IP,
                    render: (e) => (0, d.jsx)(ri, { source: k.BVt.REJECT_IP, ...e }),
                }),
                (0, d.jsx)(er.A, {
                    path: k.BVt.REJECT_MFA,
                    render: (e) => (0, d.jsx)(ri, { source: k.BVt.REJECT_MFA, ...e }),
                }),
                (0, d.jsx)(er.A, { path: k.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, d.jsx)(re, { ...e }) }),
                (0, d.jsx)(er.A, { path: k.BVt.RESET, render: (e) => (0, d.jsx)(ri, { source: k.BVt.RESET, ...e }) }),
                (0, d.jsx)(er.A, {
                    path: k.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, d.jsx)(rc, { ...e }),
                }),
                (0, d.jsx)(er.A, {
                    path: k.BVt.CHANNELS_GAME_SHOP(nF.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, d.jsx)(ro, { ...e }),
                }),
                (0, d.jsx)(er.A, {
                    path: k.BVt.CHANNEL(nF.pv.guildId(), nF.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, d.jsx)(ra, { ...e }),
                }),
                (0, d.jsx)(er.A, { path: k.BVt.REPORT, render: () => (0, d.jsx)(il, {}) }),
                (0, d.jsx)(er.A, { path: k.BVt.REPORT_SECOND_LOOK, render: (e) => (0, d.jsx)(ru, { ...e }) }),
                (0, d.jsx)(er.A, { path: k.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, d.jsx)(rd, { ...e }) }),
            ],
        });
    }
}
let rg = x.Ay.connectStores([eZ.default, tt.A, is.A, ey.A, eR.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, e0.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eZ.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? is.A.get(s) : null,
        invite: null != l ? tt.A.getInvite(l) : null,
        guildTemplate: null != r ? eR.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: ey.A.hasLoadedExperiments,
    };
})(rm);
