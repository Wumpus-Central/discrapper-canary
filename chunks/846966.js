n.r(t), n.d(t, { default: () => rg });
var i,
    l,
    s,
    r,
    a,
    o = n(627968),
    c = n(64700),
    d = n(492462),
    u = n(562708),
    h = n(607399),
    m = n(470562),
    g = n(17928),
    x = n(228366),
    f = n(830215),
    p = n(869038),
    A = n(376728),
    E = n(636537),
    _ = n(6981),
    j = n(376943),
    v = n(718446),
    N = n(746080),
    I = n(355097),
    C =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        i);
function y(e) {
    let t = decodeURIComponent(e),
        n = (0, j.vu)(t);
    return null != n && n.channelId === N.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, v.settingsPathToRoute)(I.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
var b = n(115036),
    S = n(174459),
    T = n(272355),
    R = n(652215);
function L(e, t) {
    S.default.track(R.HAw.BROWSER_HANDOFF_SUCCEEDED, { authenticated: e, handoff_source: t });
}
class O extends T.A {
    _initialize() {
        x.h.subscribe("BROWSER_HANDOFF_END", this.handleEnd),
            x.h.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    _terminate() {
        x.h.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd),
            x.h.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff);
    }
    handleHandoff(e) {
        let { handoffKey: t, handoffToken: n, fingerprint: i, handoffSource: l } = e;
        null != n
            ? E.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: t, handoff_token: n }, rejectWithError: !1 }).then(
                  (e) => {
                      let { body: t } = e;
                      (0, _.uA)(t.user), f.A.loginToken(t.token, !1), L(!0, l);
                  },
                  (e) => {
                      null != i && L(!1, l),
                          f.A.setFingerprint(i),
                          (0, _.mZ)(),
                          l === C.ROLE_SUBSCRIPTION &&
                              S.default.track(R.HAw.MOBILE_WEB_HANDOFF_FAILURE, {
                                  reason: e.message ?? e.text,
                                  handoff_source: l,
                              });
                  },
              )
            : null != i
              ? (f.A.setFingerprint(i), L(!1, l), (0, _.mZ)())
              : (f.A.setFingerprint(i), (0, _.J0)());
    }
    handleEnd = (e) => {
        let { handoffToken: t, fingerprint: n } = e,
            i = b.A.key;
        null != i && b.A.isHandoffAvailable()
            ? this.handleHandoff({ handoffKey: i, handoffToken: t, fingerprint: n, handoffSource: void 0 })
            : (f.A.setFingerprint(null), (0, _.J0)());
    };
}
let k = new O();
var G = n(854378),
    w = n(976860),
    D = n(210714),
    P = n(430690),
    B = n(503698),
    V = n.n(B),
    U = n(834730),
    M = n(821609),
    F = n(181658),
    W = n(625494),
    H = n(499785),
    Q = (((l = {}).START = "start"), (l.PASSWORD = "password"), (l.SUCCESS = "success"), (l.FAILED = "failed"), l),
    z = n(375708),
    K = n(244460),
    X = n(818050);
function q(e) {
    let { setOriginalEmail: t, setSlide: i, ready: l, token: s } = e,
        [r, a] = c.useState(!1),
        [d, h] = c.useState(null),
        [m, g] = c.useState(null),
        [x, f] = c.useState(""),
        p = c.useRef(null);
    return (
        c.useEffect(() => {
            l && p.current?.focus();
        }, [l]),
        (0, o.jsxs)("div", {
            children: [
                (0, o.jsx)(G._V, { src: null == m ? n(79418) : n(579656), className: V()(X.SX, X.Ot) }),
                (0, o.jsx)(G.hE, { children: z.intl.string(z.t.IfBQ56) }),
                null != m && "" !== m
                    ? (0, o.jsx)(U.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: m })
                    : null,
                (0, o.jsxs)(G.eB, {
                    className: V()(X.SX, X.QX),
                    children: [
                        (0, o.jsx)(G.pd, {
                            name: "password",
                            type: "password",
                            label: z.intl.string(z.t["8dM4FO"]),
                            setRef: p,
                            className: X.SX,
                            value: x,
                            onChange: f,
                            error: d,
                            autoComplete: "new-password",
                            maxLength: 72,
                            placeholder: z.intl.string(z.t["yY/PXY"]),
                        }),
                        (0, o.jsx)("div", {
                            className: X.Ot,
                            children: (0, o.jsx)(M.$, {
                                text: z.intl.string(z.t.ezv91b),
                                fullWidth: !0,
                                onClick: function () {
                                    if (!r) {
                                        if (0 === x.length) {
                                            h(z.intl.string(z.t.R98xD5)), W._.dispatch(R.jej.WAVE_EMPHASIZE);
                                            return;
                                        }
                                        return (
                                            null != m && g(null),
                                            null != d && h(null),
                                            t(""),
                                            a(!0),
                                            H.A.post({
                                                url: R.Rsh.ACCOUNT_REVERT,
                                                body: { token: s, password: x },
                                                trackedActionData: { event: u.NetworkActionNames.ACCOUNT_REVERT },
                                                rejectWithError: !1,
                                            })
                                                .then((e) => {
                                                    let {
                                                        body: { email: n },
                                                    } = e;
                                                    f(""), t(n), i(Q.SUCCESS);
                                                })
                                                .catch((e) => {
                                                    if (e instanceof Error)
                                                        g(
                                                            z.intl.formatToPlainString(z.t.aTVNes, {
                                                                statusPageURL: R.qF7.STATUS,
                                                            }),
                                                        );
                                                    else {
                                                        let t = new F.A(e);
                                                        t.hasFieldErrors()
                                                            ? h(t.getAnyErrorMessage())
                                                            : g(
                                                                  (function (e) {
                                                                      switch (e) {
                                                                          case R.t02.ACCOUNT_REVERT_INVALID_TOKEN:
                                                                              return z.intl.string(z.t["11zzGR"]);
                                                                          case R.t02.ACCOUNT_REVERT_EMAIL_ALREADY_TAKEN:
                                                                              return z.intl.string(z.t["6qmgaI"]);
                                                                          case R.t02.ACCOUNT_REVERT_ACCOUNT_NOT_FOUND:
                                                                              return z.intl.string(z.t.bChnKs);
                                                                          default:
                                                                              return z.intl.format(z.t.aTVNes, {
                                                                                  statusPageURL: R.qF7.STATUS,
                                                                              });
                                                                      }
                                                                  })(t.code).toString(),
                                                              );
                                                    }
                                                    W._.dispatch(R.jej.WAVE_EMPHASIZE);
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
                (0, o.jsx)("div", {
                    className: K.UD,
                    children: (0, o.jsx)(M.$, {
                        text: z.intl.string(z.t.rzxnQ8),
                        variant: "secondary",
                        fullWidth: !0,
                        onClick: function () {
                            f(""), i(Q.START);
                        },
                    }),
                }),
            ],
        })
    );
}
var Y = n(825484),
    $ = n(749314);
function Z(e) {
    let { children: t } = e;
    return (0, o.jsx)("li", {
        className: K.Aw,
        children: (0, o.jsx)(U.E, { variant: "text-sm/medium", color: "text-default", children: t }),
    });
}
function J(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(G._V, { src: n(79418), className: V()(X.SX, X.Ot) }),
            (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t["8UcxI6"]) }),
            (0, o.jsx)(U.E, { variant: "text-md/normal", children: z.intl.string(z.t.O37hMl) }),
            (0, o.jsxs)(G.eB, {
                className: V()(X.SX, X.QX),
                children: [
                    (0, o.jsx)(U.E, { variant: "text-sm/normal" }),
                    (0, o.jsxs)("ul", {
                        className: K.qI,
                        children: [
                            (0, o.jsx)(Z, { children: z.intl.string(z.t.Gj1Zry) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: z.intl.string(z.t["8C6t3B"]) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: z.intl.string(z.t.mToZMA) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: z.intl.string(z.t.TPEvkc) }),
                            (0, o.jsx)($.A, {}),
                            (0, o.jsx)(Z, { children: z.intl.string(z.t.H8Y1Ln) }),
                        ],
                    }),
                ],
            }),
            (0, o.jsxs)(Y.e, {
                direction: "vertical",
                fullWidth: !0,
                className: K.UD,
                children: [
                    (0, o.jsx)(M.$, { text: z.intl.string(z.t.GgCRqR), onClick: () => t(Q.PASSWORD) }),
                    (0, o.jsx)(M.$, {
                        text: z.intl.string(z.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () => i(R.BVt.LOGIN, { source: "account_revert" }),
                    }),
                ],
            }),
        ],
    });
}
function ee(e) {
    let { email: t } = e;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(G._V, { src: n(79418), className: V()(X.SX, X.Ot) }),
            (0, o.jsx)(G.hE, { children: z.intl.string(z.t.ailkVG) }),
            (0, o.jsx)(G.tK, { children: z.intl.format(z.t["4ZMVCI"], { email: t }) }),
            (0, o.jsx)(U.E, {
                className: V()(X.QB, X.QX),
                variant: "text-md/normal",
                children: z.intl.string(z.t["dpAn+8"]),
            }),
        ],
    });
}
function et(e) {
    let { transitionTo: t, token: n, width: i } = e,
        [l, s] = c.useState(Q.START),
        [r, a] = c.useState(null),
        [d, h] = c.useState(""),
        m = { impression_group: u.ImpressionGroups.ACCOUNT_REVERT_FLOW };
    return (0, o.jsx)("div", {
        style: { margin: "8px" },
        children: (0, o.jsxs)(P.t, {
            activeSlide: l,
            width: i,
            onSlideReady: a,
            children: [
                (0, o.jsx)(P.q, {
                    id: Q.START,
                    impressionProperties: m,
                    impressionName: u.ImpressionNames.ACCOUNT_REVERT_EXPLAINER,
                    children: (0, o.jsx)(J, { setSlide: s, transitionTo: t }),
                }),
                (0, o.jsx)(P.q, {
                    id: Q.PASSWORD,
                    impressionProperties: m,
                    impressionName: u.ImpressionNames.ACCOUNT_REVERT_CHANGE_PASSWORD,
                    children: (0, o.jsx)(q, {
                        setOriginalEmail: h,
                        setSlide: s,
                        transitionTo: t,
                        ready: r === Q.PASSWORD,
                        token: n,
                    }),
                }),
                (0, o.jsx)(P.q, {
                    id: Q.SUCCESS,
                    impressionProperties: m,
                    impressionName: u.ImpressionNames.ACCOUNT_REVERT_SUCCESS,
                    children: (0, o.jsx)(ee, { email: d }),
                }),
            ],
        }),
    });
}
g.Ay.initialize();
class en extends c.PureComponent {
    static defaultProps = { transitionTo: w.pX, replaceWith: w.bG };
    componentDidMount() {
        (0, D.d0)("account_revert");
    }
    render() {
        let { token: e } = this.props.match.params;
        return (0, o.jsx)(G.Ay, {
            style: { padding: 0 },
            children: (0, o.jsx)(et, { width: 464, token: e, ...this.props }),
        });
    }
}
var ei = n(549711);
function el(e) {
    x.h.dispatch({ type: "AUTH_INVITE_UPDATE", invite: e });
}
n(323874), n(14289), n(35956);
var es = n(132500),
    er = n(941426);
let ea = [window.GLOBAL_ENV.ADS_MANAGER_ENDPOINT].filter(Boolean);
function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = new URL(e, t);
    return "127.0.0.1" === n.hostname && (n.hostname = "localhost"), n.href;
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.href,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ea;
    try {
        let { origin: i } = new URL(eo(e, t));
        return n
            .map((e) => eo(e, t))
            .some((e) => {
                let { origin: t } = new URL(e);
                return i === t;
            });
    } catch (e) {
        return new er.Vy("Auth").error("Failed to check external redirect", e), !1;
    }
}
async function ed(e) {
    let t = (0, es.A)();
    try {
        var n;
        let i,
            l,
            s = (await E.Bo.post({ url: R.Rsh.HANDOFF, body: { key: t }, oldFormErrors: !0, rejectWithError: !0 })).body
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
var eu = n(123292),
    eh = n(650048),
    em = n(860689),
    eg = n(396681);
g.Ay.initialize();
class ex extends c.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, eg.A)(this.props.location),
            t = (0, d.parse)(this.props.location.search);
        E.Bo.post({
            url: R.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { guild: t },
                    } = e,
                    n = (0, em.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, D.d0)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, o.jsx)(G.Ay, { children: (0, o.jsx)(G.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.Z33eiP) }),
                (0, o.jsx)(G.tK, { children: z.intl.format(z.t.NRWtfC, { guildName: n.name }) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(M.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(eu.Q, {
                        text: z.intl.string(z.t["cGmT/J"]),
                        onClick: () => {
                            t(R.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G._V, { src: n(37772), className: X.SX }),
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.ox9hIS) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t["/dcuR5"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(M.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let ef = g.Ay.connectStores([eh.A], () => ({ defaultRoute: eh.A.defaultRoute }))(ex);
var ep = n(628284),
    eA = n(557722),
    eE = n(628387),
    e_ = n(148864),
    ej = n(354948);
n(53516);
var ev = n(653307);
let eN = ["loopback-network", "local-network-access"];
async function eI() {
    if ("u" < typeof navigator || null == navigator.permissions) return "unknown";
    for (let e of eN)
        try {
            return (await navigator.permissions.query({ name: e })).state;
        } catch {}
    return "unknown";
}
var eC = n(736056),
    ey = n(620233),
    eb = n(122906),
    eS = n(121623),
    eT = n(31008);
function eR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 162 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: r },
        src: eT.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var eL = n(154672),
    eO = n(331322),
    ek = n(297264),
    eG = n(289873),
    ew = n(794347);
function eD(e) {
    let { title: t, subtitle: n, buttonText: i, image: l, onButtonClick: s, loading: r } = e;
    return (0, o.jsx)(G.Ay, {
        className: ew.kL,
        children: (0, o.jsxs)(eO.B, {
            align: "center",
            justify: "center",
            gap: 24,
            children: [
                (0, o.jsxs)(eO.B, {
                    gap: 8,
                    align: "center",
                    children: [
                        (0, o.jsxs)(eO.B, {
                            gap: 24,
                            align: "center",
                            children: [
                                null != l &&
                                    (0, o.jsx)(eO.B, {
                                        align: "center",
                                        justify: "center",
                                        className: ew.Sl,
                                        children: l,
                                    }),
                                r && (0, o.jsx)(eG.y, { type: eG.y.Type.SPINNING_CIRCLE }),
                                (0, o.jsx)(ek.D, { variant: "heading-xl/semibold", color: "text-strong", children: t }),
                            ],
                        }),
                        null != n &&
                            "" !== n &&
                            (0, o.jsx)(U.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                className: ew.VA,
                                children: n,
                            }),
                    ],
                }),
                !r && (0, o.jsx)(M.$, { onClick: s, text: i, variant: "overlay-primary" }),
            ],
        }),
    });
}
let eP = !1,
    eB = null,
    eV = null;
class eU extends g.Ay.Store {
    static displayName = "HubEmailVerificationStore";
    getState() {
        return { verifySuccess: eP, verifyErrors: eB, redirectGuildId: eV };
    }
}
let eM = new eU(x.h, {
    HUB_VERIFY_EMAIL_SUCCESS: function (e) {
        let { guildId: t } = e;
        (eP = !0), (eB = null), (eV = t);
    },
    HUB_VERIFY_EMAIL_FAILURE: function (e) {
        let { errors: t } = e;
        (eP = !1), (eB = t);
    },
});
var eF = n(284009),
    eW = n.n(eF),
    eH = n(481613),
    eQ = n.n(eH),
    ez = n(400253),
    eK = n(742821),
    eX = n(80703),
    eq = n(280450),
    eY = n(877062);
g.Ay.initialize();
var e$ = n(842241),
    eZ = n(580929),
    eJ = n(280513),
    e0 = n(717421),
    e1 = n(661531),
    e2 = n(993077),
    e4 = n(235986),
    e6 = n(592743);
function e8(e) {
    let { text: t, buttonCta: i, onClick: l } = e;
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(G._V, { src: n(431979) }),
            (0, o.jsx)(G.hE, { className: V()(X.QX, X.QB, ev.tR), children: z.intl.string(z.t.eL5z0i) }),
            (0, o.jsx)(G.tK, { className: X.C2, children: z.intl.string(z.t.poAv63) }),
            (0, o.jsxs)(e2.Z, {
                className: e6.Nr,
                type: e2.Z.Types.CUSTOM,
                children: [
                    (0, o.jsx)("img", { alt: "", className: e6.q8, src: n(355912) }),
                    (0, o.jsx)("img", { alt: "", className: e6.dw, src: n(610925) }),
                    (0, o.jsxs)(e4.A, {
                        className: e6.p_,
                        direction: e4.A.Direction.VERTICAL,
                        align: e4.A.Align.STRETCH,
                        grow: 0,
                        children: [
                            (0, o.jsx)(U.E, {
                                tag: "strong",
                                className: e6.p8,
                                variant: "text-md/normal",
                                style: { color: e1.A.unsafe_rawColors.PRIMARY_300.css },
                                children: t,
                            }),
                            (0, o.jsx)("div", {
                                className: e6.x6,
                                children: (0, o.jsx)(M.$, { text: i, fullWidth: !0, onClick: l }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function e3(e) {
    let { text: t, buttonCta: n, theme: i = R.NJ8.DARK, onClick: l } = e;
    return (0, o.jsx)(G.Ay, { theme: i, children: (0, o.jsx)(e8, { text: t, buttonCta: n, onClick: l }) });
}
var e7 = n(765671),
    e5 = n(9994),
    e9 = n(71393),
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
    td = n(82210);
function tu(e) {
    let t = { onlineCount: e.approximate_presence_count ?? 0, memberCount: e.approximate_member_count ?? 0 };
    return 0 === t.memberCount ? null : t;
}
function th(e) {
    return e.target_type === to.yV.STREAM && null != e.target_user;
}
function tm(e) {
    return e.channel?.type === R.rbe.GROUP_DM;
}
function tg(e) {
    return null == e.channel && null == e.guild && null != e.inviter;
}
function tx(e) {
    return e.state === R.elq.ACCEPTED;
}
function tf(e) {
    let { guild_scheduled_event: t } = e;
    return null != t;
}
function tp(e) {
    let t;
    return !tf(e) && (!!tg(e) || (null != e.inviter && !tx(e) && ((t = tu(e)), !((t?.memberCount ?? 0) > 100))));
}
function tA(e) {
    let { guild: t, user: n, application: i } = e;
    return null != i
        ? (0, o.jsx)(ts.A, { className: td.Z2, game: i, size: td.q6 })
        : null != n
          ? (0, o.jsx)(G.eu, { src: n.getAvatarURL(void 0, 100), size: ti._3.DEPRECATED_SIZE_100, className: td.my })
          : null != t
            ? (0, o.jsx)(G.$v, { guild: t, size: G.$v.Sizes.LARGER, className: td.$f, animate: !0 })
            : null;
}
function tE(e) {
    let { invite: t, textClassName: n, className: i } = e,
        l = tu(t);
    return null == l || tp(t) || t?.guild?.id === tc.TA
        ? null
        : (0, o.jsx)(G.R1, {
              className: V()(td.He, i),
              online: l.onlineCount,
              total: l.memberCount,
              textClassName: n,
              flat: !0,
          });
}
function t_(e) {
    let { invite: t, showBigUserIcon: n } = e,
        i = c.useMemo(
            () =>
                n
                    ? null
                    : th(t) && null != t.target_user
                      ? tt.Ay.getUserAvatarURL(t.target_user)
                      : tp(t) && null != t.inviter
                        ? tt.Ay.getUserAvatarURL(t.inviter)
                        : null,
            [t, n],
        ),
        l = z.intl.string(z.t["3rE1P8"]);
    return (
        tm(t)
            ? (l =
                  t.channel?.name != null && t.inviter?.username != null
                      ? z.intl.format(z.t.Lu4h18, { username: t.inviter.username })
                      : z.intl.string(z.t.OsdY8B))
            : th(t) && null != t.target_user
              ? (l = z.intl.formatToPlainString(z.t.x2L32Q, { username: t.target_user.username }))
              : tx(t)
                ? (l = z.intl.string(z.t["FDsl+J"]))
                : tp(t) &&
                  null != t.inviter &&
                  (l = z.intl.format(z.t.spU2mI, { username: ta.Ay.getFormattedName(t.inviter) })),
        (0, o.jsxs)("div", {
            className: td.JB,
            children: [
                null != i &&
                    (0, o.jsx)("div", {
                        className: td._t,
                        children: (0, o.jsx)(G.eu, { src: i, size: ti._3.SIZE_24 }),
                    }),
                (0, o.jsx)(G.tK, { className: td.__invalid_inviteJoinSubTitle, children: l }),
            ],
        })
    );
}
function tj(e) {
    let t,
        n,
        i,
        { user: l, guild: s, channel: r, application: a, showBigUserIcon: c } = e,
        d = (0, tl.Ay)(r);
    if (null != s)
        c && null == a && (t = (0, o.jsx)(G.$v, { guild: s, size: G.$v.Sizes.SMALL })),
            (n = s.name),
            null != a &&
                ((n = a.name),
                (i = (0, o.jsxs)("div", {
                    className: td.JB,
                    children: [
                        (0, o.jsx)(G.tK, { className: td.R9, children: z.intl.string(z.t["3gg9fF"]) }),
                        (0, o.jsxs)("div", {
                            className: td.bo,
                            children: [
                                (0, o.jsx)(G.$v, { guild: s, size: G.$v.Sizes.SMALL }),
                                (0, o.jsx)(ek.D, {
                                    color: "text-strong",
                                    variant: "heading-xl/semibold",
                                    children: s.name,
                                }),
                            ],
                        }),
                    ],
                })));
    else if (null != r) {
        if (null == l) throw Error("no inviter in group DM invite");
        let e = ta.Ay.getFormattedName(l);
        null != d && "" !== d
            ? ((n = d), null != r.icon && (t = (0, o.jsx)(G.F4, { channel: r, size: ti._3.SIZE_32 })))
            : (n = e);
    } else if (null != l) {
        let e = ta.Ay.getFormattedName(l);
        (n = z.intl.formatToPlainString(z.t["4aF92R"], { username: e })),
            (i = (0, o.jsx)(G.tK, { className: td.b$, children: z.intl.format(z.t.Quj7HX, { username: e }) }));
    }
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)(G.hE, {
                className: td.DD,
                children: [
                    null != s ? (0, o.jsx)(tr.A, { guild: s, className: td.n2, tooltipPosition: "left" }) : null,
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
    tI = n(889227),
    tC = n(548118),
    ty = n(557582),
    tb = n(167630),
    tS = n(367048);
function tT(e) {
    let { guildScheduledEvent: t, channel: n, onAcceptInvite: i, isSubmitting: l } = e;
    return (0, o.jsxs)("div", {
        className: tS.s4,
        children: [
            (0, o.jsx)(ty.Ay, {
                name: t.name,
                description: t.description ?? void 0,
                headerVariant: "heading-md/medium",
                descriptionClassName: tS.__invalid_channelDescription,
                guildId: t.guild_id,
                guildEvent: t,
                eventPreview: t,
            }),
            null != n &&
                (0, o.jsx)("div", {
                    className: tS.yW,
                    children: (0, o.jsx)(tb.A, { guildScheduledEvent: t, channel: n }),
                }),
            (0, o.jsx)("div", {
                className: tS.xG,
                children: (0, o.jsx)(M.$, {
                    variant: "active",
                    size: "md",
                    text: z.intl.string(z.t.riu2R5),
                    onClick: i,
                    loading: l,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
function tR(e) {
    let { invite: t } = e,
        n = null != t.guild ? (0, em.DY)(t.guild) : null;
    if (null == n) return null;
    let i = n.description ?? "";
    return (0, o.jsxs)("div", {
        className: tS.kQ,
        children: [
            (0, o.jsx)(ek.D, { className: tS.s7, variant: "text-sm/medium", children: z.intl.string(z.t.Eabu1z) }),
            (0, o.jsxs)("div", {
                className: tS.bo,
                children: [
                    (0, o.jsx)(tC.Ay, { guild: n, active: !0, size: tC.Ay.Sizes.MEDIUM }),
                    (0, o.jsxs)("div", {
                        className: tS.bW,
                        children: [
                            (0, o.jsxs)(U.E, {
                                className: tS.J5,
                                color: "text-strong",
                                variant: "text-sm/medium",
                                tag: "span",
                                children: [
                                    n.name,
                                    (0, o.jsx)(tr.A, { guild: n, className: tS.n2, tooltipPosition: "left" }),
                                ],
                            }),
                            (0, o.jsx)(tE, { invite: t, textClassName: tS.kS, className: tS.pe }),
                        ],
                    }),
                ],
            }),
            i.length > 0 &&
                (0, o.jsx)("details", {
                    className: tS.x_,
                    children: (0, o.jsx)(U.E, { color: "text-default", variant: "text-sm/normal", children: i }),
                }),
        ],
    });
}
function tL(e) {
    let { invite: t, channel: n, isSubmitting: i, onAcceptInvite: l } = e,
        { guild_scheduled_event: s } = t;
    return null != s
        ? (0, o.jsx)(tT, { guildScheduledEvent: s, channel: n, isSubmitting: i, onAcceptInvite: l })
        : null;
}
var tO = n(467661);
function tk(e) {
    let { invite: t, onAcceptInvite: n, disableUser: i = !1 } = e;
    if (null == t) return null;
    let l = null != t.guild ? (0, em.DY)(t.guild) : null,
        s = null != t.channel ? (0, tN.OY)(t.channel) : null,
        r = null != t.target_application ? new tv.Ay(t.target_application) : null,
        a = i || null == t.inviter ? null : new tI.A(t.inviter),
        c =
            !(
                (null != t.approximate_member_count && t.approximate_member_count > 100) ||
                (null != l && l.features.has(R.GuildFeatures.COMMUNITY))
            ) &&
            null != a &&
            tm(t),
        d = (function (e) {
            let { state: t } = e;
            switch (t) {
                case R.elq.ACCEPTING:
                case R.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        u = { invite: t, user: a, guild: l, channel: s, application: r };
    return tf(t)
        ? (0, o.jsx)(tL, { invite: t, channel: s, isSubmitting: d, onAcceptInvite: n })
        : (0, o.jsxs)("div", {
              className: tO.kL,
              children: [
                  (0, o.jsx)(tA, { application: r, guild: l, user: c || tg(t) ? a : null }),
                  tg(t) ? null : (0, o.jsx)(t_, { ...u, showBigUserIcon: c }),
                  (0, o.jsx)(tj, { ...u, showBigUserIcon: c }),
                  (0, o.jsx)(tE, { ...u }),
                  (0, o.jsx)("div", {
                      className: tO.xG,
                      children: (0, o.jsx)(M.$, {
                          variant: "primary",
                          size: "md",
                          text: z.intl.string(z.t.ohMvm1),
                          onClick: n,
                          loading: d,
                          fullWidth: !0,
                      }),
                  }),
              ],
          });
}
var tG = n(781696),
    tw = n(997590),
    tD = n(107773),
    tP = n(107123),
    tB = n(86376),
    tV = n(534400),
    tU = n(773669),
    tM = n(935208),
    tF = n(963120);
function tW(e) {
    let {
            guild: t,
            invite: n,
            discoveryGuild: i,
            showGuildTag: l = !1,
            highContrast: s = !1,
            hideEnglish: r = !1,
            showLocale: a = !0,
            showLevel: d = !0,
            showEstablished: u = !0,
        } = e,
        h = n.approximate_presence_count ?? 0,
        m = n.approximate_member_count ?? 0,
        x = (0, g.bG)([tU.default], () => tU.default.locale),
        f = (0, tP.P)(tM.default.extractTimestamp(t.id), x),
        p = (0, g.bG)([tw.A], () =>
            i?.primary_category_id != null ? tw.A.getCategoryName(i.primary_category_id) : null,
        ),
        A = t.premiumTier ?? R.TVA.NONE,
        E = d && A !== R.TVA.NONE,
        _ = t.preferredLocale ?? i?.preferred_locale ?? null,
        j = c.useMemo(() => {
            if ("en-US" === _) return z.intl.string(z.t.LQLMGP);
            let e = (0, z.getAvailableLocales)().find((e) => e.value === _);
            return null != e ? z.intl.string(e.localizedName) : _;
        }, [_]),
        v = ["en-US", "en-GB"].includes(_ ?? ""),
        N = a && null != _ && "" !== _ && !(r && v),
        I = null != p,
        C = N || I || E,
        y = I || E,
        b = (0, g.bG)([te.A], () => te.A.getInvite(te.A.getInviteKeyForGuildId(t.id) ?? n.code));
    if (null == b) return null;
    let S = (0, e5.oO)(b),
        T = s ? "text-default" : "text-subtle";
    return (0, o.jsxs)("div", {
        className: tF.hn,
        children: [
            (0, o.jsxs)("div", {
                className: tF.S7,
                children: [
                    (0, o.jsx)(U.E, {
                        tag: "span",
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: t.name,
                    }),
                    (0, o.jsx)(tD.A, {
                        guild: t,
                        tooltipPosition: "bottom",
                        size: 18,
                        tooltipColor: tG.ST.Colors.PRIMARY,
                    }),
                    l &&
                        S?.tag != null &&
                        S?.badgeHash != null &&
                        (0, o.jsx)(tV.o9, {
                            guildId: t.id,
                            guildTag: S?.tag ?? void 0,
                            guildBadge: S.badgeHash,
                            inline: !1,
                        }),
                ],
            }),
            (0, o.jsx)(tB.X, { onlineCount: h, memberCount: m, className: tF.He, highContrast: s }),
            (0, o.jsxs)("div", {
                className: tF.ov,
                children: [
                    u &&
                        null != f &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(U.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: T,
                                    children: z.intl.format(z.t.zb2Q56, { createdAtDate: f }),
                                }),
                                C && (0, o.jsx)("span", { className: tF.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    N &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(U.E, { tag: "span", variant: "text-sm/normal", color: T, children: j }),
                                y && (0, o.jsx)("span", { className: tF.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    I &&
                        (0, o.jsxs)(o.Fragment, {
                            children: [
                                (0, o.jsx)(U.E, { tag: "span", variant: "text-sm/normal", color: T, children: p }),
                                E && (0, o.jsx)("span", { className: tF.LO, "aria-hidden": !0 }),
                            ],
                        }),
                    E &&
                        (0, o.jsx)(U.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: T,
                            children: z.intl.format(z.t.hmdOwf, { tier: A }),
                        }),
                ],
            }),
        ],
    });
}
var tH = n(241524),
    tQ = n(573435),
    tz = n(260509);
function tK(e) {
    let { guild: t, outline: n } = e,
        i = (0, tH.A)("(max-width: 600px), (max-height: 600px)") ? tC.DN.LARGER : tC.DN.XLARGE,
        l = tC.iu[i],
        s = tC.s[i],
        r = c.useMemo(() => tt.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: l }), [t.icon, t.id, l]),
        a = (0, tz.Rb)(t),
        d =
            null != r
                ? (0, o.jsx)("img", { src: r, alt: "", className: tF.OV })
                : (0, o.jsx)("div", {
                      className: tF.ef,
                      style: { fontSize: s[a.length] ?? s[s.length - 1] },
                      children: a,
                  });
    return n
        ? (0, o.jsx)("div", {
              className: V()(tF._C, tF.AY),
              children: (0, o.jsx)(tQ.Ay, {
                  mask: tQ.Ay.Masks.SQUIRCLE,
                  width: l + 8,
                  height: l + 8,
                  children: (0, o.jsx)("div", {
                      className: tF.$d,
                      children: (0, o.jsx)(tQ.Ay, { mask: tQ.Ay.Masks.SQUIRCLE, width: l, height: l, children: d }),
                  }),
              }),
          })
        : (0, o.jsx)("div", {
              className: tF._C,
              children: (0, o.jsx)(tQ.Ay, { mask: tQ.Ay.Masks.SQUIRCLE, width: l, height: l, children: d }),
          });
}
var tX = n(115703),
    tq = n(180419),
    tY = n(888849);
function t$(e) {
    let { invite: t, guild: n, profile: i, onAcceptInvite: l } = e,
        { gamesToDisplay: s, lastGameToDisplay: r, remainingGames: a } = (0, tX.A)(i),
        c = (function (e) {
            let { state: t } = e;
            switch (t) {
                case R.elq.ACCEPTING:
                case R.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        d = i.description ?? n.description;
    return (0, o.jsxs)("div", {
        className: tY.f_,
        children: [
            (0, o.jsxs)("div", {
                className: tY.qQ,
                children: [
                    (0, o.jsx)("div", {
                        className: tY.WT,
                        children: (0, o.jsx)("div", { className: tY.g_, "aria-hidden": !0 }),
                    }),
                    (0, o.jsxs)("div", {
                        className: tY.TS,
                        children: [
                            (0, o.jsx)(tK, { guild: n, outline: !0 }),
                            (0, o.jsxs)(eO.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, o.jsx)(tW, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != d &&
                                        "" !== d &&
                                        (0, o.jsx)(U.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: d,
                                        }),
                                    (0, o.jsx)(tq.A, {
                                        gamesToDisplay: s,
                                        lastGameToDisplay: r,
                                        remainingGames: a,
                                        activity: i.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: tY.Fx,
                children: (0, o.jsx)(M.$, {
                    variant: "primary",
                    size: "md",
                    text: z.intl.string(z.t.ohMvm1),
                    onClick: l,
                    loading: c,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
var tZ = n(945810);
let tJ = (0, tZ.mj)({
        name: "2026-03-mobile-web-invite-server-profile",
        kind: "installation",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    t0 = n(843020);
function t1(e) {
    if (null == e || !eJ.i.VISIBLE.has(e.visibility)) return !1;
    let t = null != e.description && e.description.length > 0,
        n = null != e.gameApplicationIds && e.gameApplicationIds.length > 0;
    return t || n;
}
function t2() {
    return (0, o.jsx)("div", { className: tY.$k, children: (0, o.jsx)(eG.y, {}) });
}
function t4(e) {
    let t = e?.state == null && e?.channel == null;
    if (null == e || null == e.state || t) return 0;
    let n = e.state;
    switch (n) {
        case R.elq.RESOLVED:
        case R.elq.ACCEPTED:
        case R.elq.APP_NOT_OPENED:
        case R.elq.APP_OPENED:
        case R.elq.ACCEPTING:
        case R.elq.APP_OPENING:
            return 1;
        case R.elq.EXPIRED:
        case R.elq.BANNED:
        case R.elq.ERROR:
            return 2;
        case R.elq.RESOLVING:
            return 0;
        default:
            (0, tn.xb)(n);
    }
}
function t6(e) {
    let { invite: t, onAcceptInvite: n } = e;
    return t?.state === R.elq.BANNED
        ? (0, o.jsx)(e8, { text: z.intl.string(z.t["5AkWAd"]), buttonCta: z.intl.string(z.t["8osdkn"]), onClick: n })
        : (0, o.jsx)(e8, { text: z.intl.string(z.t["usP+Mb"]), buttonCta: z.intl.string(z.t["8osdkn"]), onClick: n });
}
function t8(e) {
    let { children: t, cardChildren: n, startAnimHeightPx: i, sectionClassName: l, inviteCardClassName: s = tY.qF } = e,
        { ref: r, height: a } = (0, e7.Ay)(),
        c = (0, e0.z)({ height: null != a && 0 !== a ? `${a}px` : `${i}px`, config: eZ.config.stiff });
    return (0, o.jsxs)(eZ.animated.div, {
        className: s,
        style: c,
        children: [
            (0, o.jsx)(eZ.animated.div, {
                className: tY.NS,
                style: c,
                children: (0, o.jsx)("section", { ref: r, className: l, children: t }),
            }),
            n,
        ],
    });
}
function t3(e) {
    let { invite: t } = e;
    if (null == t || !tf(t)) return null;
    let n = t4(t);
    return (0, o.jsx)(t8, {
        startAnimHeightPx: 0,
        sectionClassName: tY.ui,
        children: 1 === n ? (0, o.jsx)(tR, { invite: t }) : null,
    });
}
let t7 = { 1: tY._r, 2: tY.Gm, 0: tY.Kt };
function t5(e) {
    let t,
        { invite: n } = e,
        i = t4(n),
        { enabled: l } = tJ.useConfig({ location: "AcceptInviteMobile" }),
        s = null != n ? (0, e5.oO)(n) : null,
        r = n?.guild != null ? (0, em.DY)(n.guild) : null,
        a = null != r && t1(s) && null != n && !tf(n),
        d = l && a;
    c.useEffect(() => {
        a && tJ.getConfig({ location: "AcceptInviteMobile.hasProfile" });
    }, [a]);
    let u = c.useRef(!1);
    if (
        (c.useEffect(() => {
            u.current ||
                (null != n &&
                    1 === i &&
                    ((u.current = !0),
                    S.default.track(R.HAw.INVITE_ACCEPT_BUTTON_RENDERED, {
                        invite_code: n.code,
                        guild_id: n.guild?.id,
                        duration_ms_since_page_load: Math.round(performance.now()),
                    })));
        }, [n, i]),
        null == n)
    )
        t = (0, o.jsx)(t2, {});
    else
        switch (i) {
            case 1:
                t = d
                    ? (0, o.jsx)(t$, { invite: n, guild: r, profile: s, onAcceptInvite: e.onAcceptInvite })
                    : (0, o.jsx)(tk, { ...e, invite: n });
                break;
            case 2:
                t = (0, o.jsx)(t6, { ...e, invite: n });
                break;
            default:
                t = (0, o.jsx)(t2, {});
        }
    let h = 1 === i && d ? tY.c4 : tY.qF;
    return (0, o.jsx)(t8, { startAnimHeightPx: 200, sectionClassName: t7[i], inviteCardClassName: h, children: t });
}
function t9(e) {
    let { invite: t, onAcceptInvite: n } = e,
        { guild: i } = t ?? {},
        l = {},
        { enabled: s } = tJ.useConfig({ location: "AcceptInviteMobile" }),
        r = null != t ? (0, e5.oO)(t) : null,
        a = null != i && t1(r) && null != t && !tf(t);
    if (i?.splash != null) {
        let e = tt.Ay.getGuildSplashURL({ id: i.id, splash: i.splash });
        null != e && ((l.backgroundImage = `url(${e})`), (l.backgroundSize = "cover"));
    } else s && a && ((l.backgroundImage = `url(${t0})`), (l.backgroundSize = "cover"));
    return (0, o.jsxs)(G.Ay, {
        theme: R.NJ8.DARK,
        className: tY.G3,
        style: l,
        contentClassName: tY.__,
        children: [(0, o.jsx)(t5, { ...e, onAcceptInvite: n }), (0, o.jsx)(t3, { ...e })],
    });
}
var ne = n(723702);
function nt(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, width: s = 288, height: r = 192 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/f116e92cafb14967bf471809621718b4c2fe5abd27c9236c1ab4353d32a9fc6c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var nn = n(611346),
    ni = n(604880);
function nl(e) {
    let { token: t, hasError: n, errorReason: i } = e;
    return n
        ? (0, o.jsxs)("div", {
              className: nn.MY,
              children: [
                  (0, o.jsx)("div", { className: nn.r$, children: (0, o.jsx)("img", { src: ni, alt: "" }) }),
                  (0, o.jsxs)("div", {
                      className: nn.Qs,
                      children: [
                          (0, o.jsx)(nt, { alt: "" }),
                          (0, o.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nn.ky,
                              children: z.intl.string(z.t.RtCSr1),
                          }),
                          (0, o.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: nn.G3,
                              children: z.intl.string(z.t["S+YjYJ"]),
                          }),
                          (0, o.jsx)(M.$, {
                              variant: "primary",
                              text: z.intl.string(z.t.j3cG2p),
                              fullWidth: !0,
                              onClick: () => {
                                  S.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: i }),
                                      (0, w.pX)(R.BVt.LOGIN);
                              },
                          }),
                      ],
                  }),
              ],
          })
        : (0, o.jsxs)("div", {
              className: nn.MY,
              children: [
                  (0, o.jsx)("div", { className: nn.r$, children: (0, o.jsx)("img", { src: ni, alt: "" }) }),
                  (0, o.jsxs)("div", {
                      className: nn.Qs,
                      children: [
                          (0, o.jsx)(nt, { alt: "" }),
                          (0, o.jsx)(ek.D, {
                              variant: "heading-lg/semibold",
                              className: nn.ky,
                              children: z.intl.string(z.t["9h/0Rl"]),
                          }),
                          (0, o.jsx)(U.E, {
                              variant: "text-md/normal",
                              className: nn.G3,
                              children: z.intl.string(z.t.Wgm7Om),
                          }),
                          (0, o.jsx)(M.$, {
                              variant: "primary",
                              text: z.intl.string(z.t.NydsTd),
                              fullWidth: !0,
                              onClick: () => {
                                  let e, n;
                                  (e = (function (e) {
                                      let t = platform.os?.family;
                                      if ("Android" === t || "iOS" === t) {
                                          let t = eq.default.getFingerprint(),
                                              n = (0, eK.I_)(),
                                              i = `${location.protocol}//${window.GLOBAL_ENV.WEBAPP_ENDPOINT}/login/one-time?token=${e}`;
                                          return (0, eK.Ay)(i, {
                                              utmSource: "one-time-login",
                                              fingerprint: t,
                                              attemptId: n,
                                          });
                                      }
                                      return "discord://";
                                  })(t)),
                                      (n = (0, eK.X7)(e)),
                                      S.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                                          detection_type: "mobile_button_clicked",
                                          device_type: h.Fr ? "mobile" : "tablet",
                                          platform: S.default.getSuperProperties()?.os,
                                      }),
                                      null != n &&
                                          S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                                              fingerprint: (0, eX.v)(n.fingerprint),
                                              attempt_id: n.attemptId,
                                              source: n.utmSource,
                                          }),
                                      eY.A.launch(e, (e) => {
                                          e || (0, w.bG)({ pathname: R.BVt.LOGIN });
                                      });
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var ns = n(613057);
function nr(e) {
    let { title: t, subtitle: n, buttonText: i, buttonOnClick: l } = e;
    return (0, o.jsx)(G.Ay, {
        children: (0, o.jsxs)(eO.B, {
            gap: 24,
            children: [
                (0, o.jsxs)(eO.B, {
                    gap: 8,
                    children: [(0, o.jsx)(G.hE, { children: t }), (0, o.jsx)(G.tK, { children: n })],
                }),
                (0, o.jsx)(M.$, { onClick: l, text: i, fullWidth: !0 }),
            ],
        }),
    });
}
var na = n(463347),
    no = n(189213),
    nc = n(192308),
    nd = n(347704),
    nu = n(803306),
    nh = n(17372),
    nm = n(369053),
    ng = n(975571),
    nx = n(928658);
async function nf(e, t) {
    try {
        await (0, nm.TP)(e, t);
    } catch (e) {
        if (null != e && "object" == typeof e && 429 === e.status)
            throw { status: 429, body: { message: z.intl.string(z.t.Z2hIUf) } };
        throw e;
    }
}
function np(e, t) {
    let i = !1;
    function l() {
        i || t?.();
    }
    let s = (s) => {
        function r() {
            return nf(e, s);
        }
        async function a(t) {
            return await (0, nm.G_)(e, s, t);
        }
        (i = !0),
            setTimeout(() => {
                i = !1;
            }, 0);
        let c = (n) => {
            (i = !0),
                setTimeout(() => {
                    i = !1;
                }, 0);
            let l = n?.token;
            switch (e) {
                case nh.tY.MESSAGE:
                    (0, nx.bM)(l, t);
                    break;
                case nh.tY.USER:
                    (0, nx.nQ)(l, t);
                    break;
                case nh.tY.GUILD:
                    (0, nx.V3)(l, t);
                    break;
                case nh.tY.MEDIA_TAKEDOWN:
                    (0, nx._Y)(l, t);
            }
        };
        (0, nc.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("32606"), n.e("19840")]).then(n.bind(n, 79779));
                return (t) =>
                    (0, o.jsx)(e, {
                        ...t,
                        onFormSubmit: a,
                        onResend: r,
                        onSuccess: c,
                        headerText: z.intl.string(z.t.H3Q7U8),
                        confirmButtonText: z.intl.string(z.t["13ofGu"]),
                        impression: { impressionName: u.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                    });
            },
            { onCloseCallback: l, dismissable: !1 },
        );
    };
    return function () {
        function t(t) {
            return nf(e, t);
        }
        (0, nc.closeAllModals)(),
            (0, nc.openModalLazy)(
                async () => {
                    let { default: i } = await n.e("29232").then(n.bind(n, 180275));
                    return (n) =>
                        (0, o.jsx)(i, {
                            ...n,
                            onFormSubmit: t,
                            onSuccess: s,
                            headerText: z.intl.string(z.t.ZLRYGU),
                            confirmButtonText: z.intl.string(z.t.PDTjLN),
                            subtitle: e === nh.tY.MEDIA_TAKEDOWN ? z.intl.string(z.t.jt3z8f) : void 0,
                        });
                },
                { onCloseCallback: l, dismissable: !1 },
            );
    };
}
var nA = n(939249),
    nE = n(921853),
    n_ = n(750997);
let nj = { [nh.tY.MESSAGE]: z.t.fuqnBC, [nh.tY.USER]: z.t.F4jrRW, [nh.tY.GUILD]: z.t.gH3aMs },
    nv = (e) => {
        let { title: t, menuType: n, onReopen: i } = e,
            l = c.useCallback(() => {
                np(n, i)();
            }, [n, i]);
        return (0, o.jsxs)(nA.D, {
            className: n_.b0,
            onClick: l,
            children: [
                (0, o.jsx)(U.E, { variant: "text-md/medium", children: t }),
                (0, o.jsx)(nE.n, { size: "sm", style: { transform: "rotate(180deg)" } }),
            ],
        });
    },
    nN = (e) => {
        let { dsaCapabilities: t, onReopen: n } = e;
        return (0, o.jsx)(eO.B, {
            gap: 16,
            children: (0, o.jsx)("div", {
                className: n_.kL,
                children: t.map((e) =>
                    e === nh.tY.MEDIA_TAKEDOWN || null == nj[e]
                        ? null
                        : (0, o.jsx)(nv, { title: z.intl.string(nj[e]), menuType: e, onReopen: n }, e),
                ),
            }),
        });
    };
var nI = n(881636),
    nC = n(913951);
let ny = () => {
    let { goToStep: e } = (0, nd.n)(),
        t = c.useCallback(() => {
            e(nR.DSA);
        }, [e]),
        n = c.useCallback(() => {
            e(nR.TIDA);
        }, [e]);
    return (0, o.jsxs)(eO.B, {
        gap: 8,
        children: [
            (0, o.jsx)(U.E, { variant: "text-md/normal", children: z.intl.string(z.t.bd1h5T) }),
            (0, o.jsxs)("div", {
                className: nC.k,
                children: [
                    (0, o.jsxs)(nA.D, {
                        className: nC.b,
                        onClick: t,
                        children: [
                            (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)(U.E, {
                                        variant: "text-md/medium",
                                        children: z.intl.string(z.t["AszWL/"]),
                                    }),
                                    (0, o.jsx)(U.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: z.intl.string(z.t["0Jikui"]),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(nI.u, { size: "sm" }),
                        ],
                    }),
                    (0, o.jsxs)(nA.D, {
                        className: nC.b,
                        onClick: n,
                        children: [
                            (0, o.jsxs)("div", {
                                children: [
                                    (0, o.jsx)(U.E, { variant: "text-md/medium", children: z.intl.string(z.t.jMSjZL) }),
                                    (0, o.jsx)(U.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: z.intl.string(z.t.qEaUPS),
                                    }),
                                ],
                            }),
                            (0, o.jsx)(nI.u, { size: "sm" }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var nb = n(229503);
let nS = () =>
    (0, o.jsxs)(eO.B, {
        gap: 24,
        children: [
            (0, o.jsx)(U.E, {
                variant: "text-md/normal",
                color: "text-subtle",
                children: z.intl.string(z.t["3zG2Y9"]),
            }),
            (0, o.jsxs)(eO.B, {
                gap: 16,
                children: [
                    (0, o.jsxs)(eO.B, {
                        gap: 8,
                        children: [
                            (0, o.jsx)(U.E, { variant: "text-md/semibold", children: z.intl.string(z.t.CfBo0z) }),
                            (0, o.jsxs)("ul", {
                                className: nb.T,
                                children: [
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: z.intl.string(z.t.ofQnNQ),
                                        }),
                                    }),
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: z.intl.string(z.t.dFaQGn),
                                        }),
                                    }),
                                    (0, o.jsx)("li", {
                                        children: (0, o.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-subtle",
                                            children: z.intl.string(z.t.RVNwXh),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, o.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: z.intl.string(z.t.o5azXJ),
                    }),
                    (0, o.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: z.intl.format(z.t.YETtaY, {
                            policyURL: "https://discord.com/safety/non-consensual-intimate-media-policy-explainer",
                        }),
                    }),
                ],
            }),
            (0, o.jsxs)(eO.B, {
                gap: 8,
                children: [
                    (0, o.jsx)(U.E, { variant: "text-md/semibold", children: z.intl.string(z.t.FJh2zi) }),
                    (0, o.jsx)(U.E, {
                        variant: "text-md/normal",
                        color: "text-subtle",
                        children: z.intl.format(z.t.R2Q57u, {
                            supportOrgURL: "https://stopncii.org/partners/global-network-of-partners/",
                            wellbeingURL: "https://discord.com/safety-wellbeing",
                            helpCenterURL: "https://support.discord.com/hc/articles/38675715591831",
                        }),
                    }),
                ],
            }),
        ],
    });
var nT = n(725925);
g.Ay.initialize();
var nR = (((s = {}).SELECTION = "selection"), (s.DSA = "dsa"), (s.TIDA = "tida"), s);
let nL = (e) => {
        let { transitionState: t, onClose: n } = e,
            [i, l] = c.useState(!0),
            [s, r] = c.useState([]),
            [a, d] = c.useState(null),
            u = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            h = (0, g.bG)([eC.A], () => eC.A.hasLoadedExperiments),
            m = c.useCallback(() => {
                (0, nm.OY)()
                    .then((e) => {
                        let {
                            body: { capabilities: t },
                        } = e;
                        l(!1), r(t);
                    })
                    .catch(() => {
                        l(!1), r([]);
                    });
            }, []);
        c.useEffect(() => {
            u
                ? (l(!0),
                  nu
                      .rQ({ withAnalyticsToken: !0 })
                      .then(() => m())
                      .catch(() => l(!1)))
                : m();
        }, [u, m]),
            c.useEffect(() => {
                !(async function () {
                    h || (await f.A.getLocationMetadata(), f.A.getExperiments());
                })();
            }, [h]);
        let x = s.filter((e) => e !== nh.tY.MEDIA_TAKEDOWN),
            p = s.includes(nh.tY.MEDIA_TAKEDOWN),
            A = x.length > 0,
            E = A && p,
            _ = i || !h;
        c.useEffect(() => {
            _ || A || p || n();
        }, [_, A, p, n]);
        let j = c.useCallback(() => {
                (0, nc.openModalLazy)(() => Promise.resolve((e) => (0, o.jsx)(nL, { ...e })), { dismissable: !1 });
            }, []),
            v = c.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? d("selection") : d(e);
            }, []),
            N = c.useMemo(() => np(nh.tY.MEDIA_TAKEDOWN, j), [j]),
            I = a ?? (E ? "selection" : A ? "dsa" : "tida");
        if (_ || (!A && !p))
            return (0, o.jsx)(no.Modal, {
                title: "",
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, o.jsx)(eO.B, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: { minHeight: "200px" },
                    children: (0, o.jsx)(eG.y, {}),
                }),
            });
        if (!E) {
            if (A)
                return (0, o.jsx)(no.Modal, {
                    title: z.intl.string(z.t.Z11w18),
                    subtitle: z.intl.format(z.t["532l+q"], {
                        supportURL: ng.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                    actions: [],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, o.jsx)(nN, { dsaCapabilities: x, onReopen: j }),
                });
            if (p)
                return (0, o.jsx)(no.Modal, {
                    title: z.intl.string(z.t.YignUm),
                    actions: [{ text: z.intl.string(z.t.D5Czbu), variant: "primary", onClick: N }],
                    transitionState: t,
                    onClose: n,
                    dismissable: !1,
                    children: (0, o.jsx)(nS, {}),
                });
        }
        let C = [
            { stepKey: "selection", modalProps: { title: z.intl.string(z.t.Z11w18) }, body: (0, o.jsx)(ny, {}) },
            {
                stepKey: "dsa",
                modalProps: {
                    title: z.intl.string(z.t.Z11w18),
                    subtitle: z.intl.format(z.t["532l+q"], {
                        supportURL: ng.A.getArticleURL(R.MVz.COPYRIGHT_AND_IP_POLICY),
                    }),
                },
                body: (0, o.jsx)(nN, { dsaCapabilities: x, onReopen: j }),
            },
            {
                stepKey: "tida",
                modalProps: { title: z.intl.string(z.t.YignUm) },
                body: (0, o.jsx)(nS, {}),
                nextButtonProps: { text: z.intl.string(z.t.D5Czbu) },
                onNext: () => (N(), !1),
            },
        ];
        return (0, o.jsx)("div", {
            className: { selection: nT.a, dsa: nT.q, tida: void 0 }[I],
            children: (0, o.jsx)(nd.t, {
                steps: C,
                currentStepKey: I,
                onStepChange: v,
                onClose: n,
                transitionState: t,
                dismissable: !1,
            }),
        });
    },
    nO = () => (
        c.useEffect(() => {
            (0, nc.openModalLazy)(() => Promise.resolve((e) => (0, o.jsx)(nL, { ...e })), { dismissable: !1 });
        }, []),
        null
    );
var nk = n(30793),
    nG = n(970928),
    nw = n(612181),
    nD = n(179689);
let nP = {
    dump(e) {
        let t;
        null != performance.memory &&
            (t = {
                jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                totalJSHeapSize: performance.memory.totalJSHeapSize,
                usedJSHeapSize: performance.memory.usedJSHeapSize,
            }),
            e({
                browser: { name: eQ().name, version: eQ().version },
                os: { name: eQ().os.family, version: eQ().os.version },
                memory: t,
            });
    },
    getTimeSinceNavigationStart: () => Date.now() - nD.fL,
};
var nB = n(649852),
    nV = n.n(nB),
    nU = n(615300),
    nM = n(319060),
    nF = n(844222),
    nW = n(240248),
    nH = n(115617);
let nQ = (0, nW.xI)(nM.A.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    nz = { friction: 10, tension: 130 },
    nK = function (e) {
        return class extends c.Component {
            timeout;
            anim = new nU.A.Value(0);
            state = { shouldAnimate: !h.Fr };
            componentDidMount() {
                h.Fr || (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize());
            }
            handleResize = () => {
                let e = window.innerWidth > nQ;
                !this.state.shouldAnimate && e && this.anim.setValue(1), this.setState({ shouldAnimate: e });
            };
            handleResizeDebounced = nV()(this.handleResize, 60);
            componentWillUnmount() {
                clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced);
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
                nU.A.spring(this.anim, { toValue: e, ...nz }).start(t);
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
                return (0, o.jsx)("div", {
                    className: nH.i,
                    children: (0, o.jsx)(nF.C.Consumer, {
                        children: (t) => {
                            let { reducedMotion: n } = t;
                            return (0, o.jsx)(nU.A.div, {
                                className: nH.l,
                                style: this.getAnimatedStyle(n.enabled),
                                children: (0, o.jsx)(e, { ...this.props }),
                            });
                        },
                    }),
                });
            }
        };
    };
var nX = n(603647),
    nq = n(970672),
    nY = n(129014),
    n$ = n(642277);
let nZ = function (e) {
    let { match: t, location: n, attemptDeepLink: i } = e,
        [l, s] = c.useState(0);
    c.useEffect(() => {
        nY.default.once("connected", () => {
            s(1);
        }),
            nY.default.once("disconnected", () => {
                (0, w.pX)((0, n$.W)());
            }),
            nY.default.connect();
    }, []),
        c.useEffect(() => {
            if (0 !== l) return;
            let e = setTimeout(() => (0, w.pX)((0, n$.W)()), 3e3);
            return () => clearTimeout(e);
        }, [l]);
    let r = c.useCallback(
        async (e, t) => {
            try {
                s(2), await i(e, t), s(3);
            } catch (e) {
                console.error("Error opening deeplink", e);
            }
        },
        [i],
    );
    if ((0, w.MX)()) return null;
    switch (l) {
        case 1:
            return (0, o.jsxs)(G.Ay, {
                children: [
                    (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.qllnGm) }),
                    (0, o.jsx)(G.tK, { children: z.intl.string(z.t.SXCxye) }),
                    (0, o.jsx)("div", {
                        className: X.eT,
                        children: (0, o.jsx)(M.$, {
                            text: z.intl.string(z.t.UQvCf7),
                            fullWidth: !0,
                            onClick: () => r(t, n),
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: V()(X.Ot, X.F1),
                        children: (0, o.jsx)(eu.Q, {
                            text: z.intl.string(z.t["2ixEBi"]),
                            textVariant: "text-sm/normal",
                            onClick: () => (0, w.pX)((0, n$.W)()),
                        }),
                    }),
                ],
            });
        case 0:
        case 2:
            return (0, o.jsxs)(G.Ay, {
                children: [(0, o.jsx)(G.hE, { children: z.intl.string(z.t["Z+hCVU"]) }), (0, o.jsx)(G.CK, {})],
            });
        case 3:
            return (0, o.jsxs)(G.Ay, {
                children: [
                    (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.csrAMJ) }),
                    (0, o.jsx)(G.tK, { children: z.intl.string(z.t.ghBJz9) }),
                ],
            });
    }
};
var nJ = n(723923);
g.Ay.initialize();
class n0 extends c.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, eg.A)(this.props.location),
            t = (0, d.parse)(this.props.location.search);
        E.Bo.post({
            url: R.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
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
            (0, D.d0)("disable_email_notifications");
    }
    renderBusy() {
        return (0, o.jsx)(G.Ay, { children: (0, o.jsx)(G.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            l = z.intl.formatToPlainString(z.t.YDAohB, { category: t });
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.f6rdLg) }),
                (0, o.jsx)(G.tK, { children: l }),
                (0, o.jsx)("div", {
                    className: X.QX,
                    children: (0, o.jsx)(M.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => i(n) }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(eu.Q, {
                        text: z.intl.string(z.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => i((0, v.settingsPathToRoute)(I.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = nJ.px.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: ti._3.DEPRECATED_SIZE_100,
                    className: X.SX,
                }),
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t["6U6OMQ"]) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t["yaDJ4/"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(M.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G._V, { src: n(37772), className: X.SX }),
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.ox9hIS) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t["/dcuR5"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(M.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let n1 = g.Ay.connectStores([eh.A], () => ({ defaultRoute: eh.A.defaultRoute }))(n0);
var n2 = n(110782),
    n4 = n(10088),
    n6 = n(871123),
    n8 = n(189081),
    n3 = n(67480),
    n7 = n(45938),
    n5 = n(587895),
    n9 = n(242874),
    ie = n(75825),
    it = n(287809),
    ii = n(97352),
    il = n(615396),
    is = n(202541),
    ir = n(402693);
let ia = g.Ay.connectStores([n3.A, n5.A, ii.A, it.default], (e) => {
    let { giftCode: t } = e,
        n = n3.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, il.c9)(i) : null,
        application: n5.A.getApplication(n.applicationId),
        gifter: it.default.getUser(t.userId),
    };
})(function (e) {
    let { error: t, giftCode: n, gifter: i, sku: l, application: s, subscriptionPlan: r } = e,
        a = null == i ? z.intl.string(z.t.lTGZAl) : z.intl.formatToPlainString(z.t.TjWdPc, { username: i.username }),
        d = l.name;
    return (
        null != r &&
            (d = z.intl.formatToPlainString(r.interval === is.WT.MONTH ? z.t.CTpcCZ : z.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: r.intervalCount,
            })),
        (0, o.jsxs)(c.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, o.jsx)(ie.A, { defaultAnimationState: n9.oA.LOOP, giftStyle: n.giftStyle, className: ir.e })
                    : (0, o.jsx)(G.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: ti._3.DEPRECATED_SIZE_100,
                          className: X.SX,
                      }),
                null != t
                    ? (0, o.jsxs)(c.Fragment, {
                          children: [
                              (0, o.jsx)(G.tK, { children: z.intl.string(z.t.mDFGFj) }),
                              (0, o.jsx)(G.hE, { children: t }),
                          ],
                      })
                    : (0, o.jsxs)(c.Fragment, {
                          children: [
                              (0, o.jsx)(G.tK, { children: a }),
                              (0, o.jsxs)(G.hE, {
                                  className: V()(X.Ot, ev.tR),
                                  children: [
                                      l.productLine !== R.EZt.COLLECTIBLES &&
                                          (0, o.jsx)(ts.A, {
                                              size: ts.M.MEDIUM,
                                              className: ir.I,
                                              game: s,
                                              skuId: l.id,
                                          }),
                                      d,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
var io = n(935399),
    ic = n(475743),
    id = n(707554),
    iu = n(379154);
function ih(e) {
    let { loginStatus: t, authBoxClassName: n, transparent: i = !1, onSubmit: l, onCancelAccountDeletion: s } = e,
        r = t === R.aUe.ACCOUNT_DISABLED,
        a = r ? z.intl.string(z.t["j3rC+U"]) : z.intl.string(z.t.ZFWofo),
        c = r ? z.intl.string(z.t["6eNTWe"]) : z.intl.string(z.t["pCBti+"]);
    return (0, o.jsx)(G.Ay, {
        tag: "form",
        onSubmit: l,
        className: n,
        transparent: i,
        children: (0, o.jsxs)(id.F, {
            component: (0, o.jsx)(G.hE, { className: X.QB, children: a }),
            children: [
                (0, o.jsx)(G.tK, { className: X.SX, children: c }),
                (0, o.jsxs)(G.eB, {
                    children: [
                        (0, o.jsx)(M.$, { text: z.intl.string(z.t.JhDw5o), fullWidth: !0, type: "submit" }),
                        (0, o.jsx)("div", {
                            className: V()(X.Ot, iu.Qt),
                            children: z.intl.format(z.t.js2rr5, { onClick: s }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var im = n(504394),
    ig = n(275538),
    ix = n(431870);
function ip(e) {
    let { children: t, className: n, ...i } = e,
        l = t();
    return (0, o.jsx)(G.Ay, {
        ...i,
        className: V()(n, ix.kL),
        contentClassName: ix.Qs,
        children: l.map((e, t) =>
            (0, o.jsx)("div", { className: ix.fi, style: { flexBasis: `${100 / l.length}%` }, children: e }, t),
        ),
    });
}
var iA = n(895600),
    iE = n(506774),
    i_ = n(927813),
    ij = n(104798),
    iv = n(1959);
let iN = "mweb_handoff_nonce",
    iI = "mweb_handoff_nonce_expiration",
    iC = +i_.A.Millis.MINUTE,
    iy = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
    ib = new Set(["deep_link_failed"]),
    iS = () => {
        iE.w.remove(iN), iE.w.remove(iI);
    },
    iT = () => {
        let e = (0, g.bG)([eq.default], () => eq.default.getFingerprint()),
            { fingerprint: t, handoff_token: n } = (0, d.parse)(window.location.search),
            i = Array.isArray(t) ? (t.length > 1 ? t[0] : null) : t,
            l = i ?? (null !== e ? e : void 0);
        c.useEffect(() => {
            null !== i && e !== i && x.h.dispatch({ type: "FINGERPRINT", fingerprint: i });
        }, [i, e]);
        let [s, r] = c.useState(null),
            a = c.useCallback(
                (e) => {
                    r(e),
                        S.default.track(
                            R.HAw.MOBILE_WEB_HANDOFF_FAILURE,
                            { reason: e, fingerprint: (0, eX.v)(l) },
                            { fingerprint: l },
                        );
                },
                [r, l],
            ),
            u = iE.w.get(iN);
        if (
            ("null" === n && null === s && a("deep_link_failed"),
            null != n && "null" !== n && null == u && null === s && a("nonce_missing"),
            c.useEffect(() => {
                if (null != u) {
                    let e = iE.w.get(iI);
                    (null == e || Date.now() >= e) && (a("nonce_expired"), iS());
                }
            }, [u, a]),
            c.useEffect(() => {
                null != n &&
                    "null" !== n &&
                    null != u &&
                    null == s &&
                    E.Bo.post({ url: R.Rsh.HANDOFF_EXCHANGE, body: { key: u, handoff_token: n }, rejectWithError: !0 })
                        .then((e) => f.A.loginToken(e.body.token, !1))
                        .then(() => {
                            S.default.track(R.HAw.LOGIN_SUCCESSFUL, {
                                source: R.mdB.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, eX.v)(l),
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"),
                                t.delete("fingerprint"),
                                (e.search = t.toString()),
                                window.history.pushState(null, "", e);
                        })
                        .catch(() => {
                            a("handoff_exchange");
                        })
                        .finally(() => {
                            iS();
                        });
            }, [n, u, s, l, a]),
            null == l)
        )
            return null;
        let h =
            null == s
                ? (0, o.jsxs)(o.Fragment, {
                      children: [z.intl.string(z.t.uJ1JsY), (0, o.jsx)("br", {}), z.intl.string(z.t.GHVWAs)],
                  })
                : ib.has(s)
                  ? z.intl.string(z.t.EPt55r)
                  : iy.has(s)
                    ? z.intl.string(z.t.g87kTp)
                    : void 0;
        return null != s && ib.has(s)
            ? (0, o.jsx)("div", {
                  className: iv.Un,
                  children: (0, o.jsx)(U.E, {
                      color: "interactive-text-default",
                      variant: "text-sm/semibold",
                      children: h,
                  }),
              })
            : (0, o.jsxs)("div", {
                  className: iv.kL,
                  children: [
                      (0, o.jsx)(U.E, { variant: "text-sm/semibold", children: h }),
                      (0, o.jsx)(M.$, {
                          variant: "overlay-primary",
                          text: z.intl.string(z.t.NcC759),
                          onClick: () => {
                              let e = ij.A.generateNonce();
                              iE.w.set(iN, e), iE.w.set(iI, Date.now() + iC);
                              let t = new URL(R.J$u),
                                  n = new URLSearchParams(window.location.search);
                              n.delete("fingerprint"), n.delete("handoff_token");
                              let i = new URLSearchParams();
                              i.set("redirect", encodeURIComponent(window.location.pathname + n.toString())),
                                  i.set("key", e),
                                  i.set("fingerprint", l),
                                  (t.search = i.toString()),
                                  S.default.track(
                                      R.HAw.DEEP_LINK_CLICKED,
                                      { fingerprint: (0, eX.v)(l), source: "mobile_web_handoff", destination: R.J$u },
                                      { fingerprint: l, flush: !0 },
                                  ),
                                  (window.location.href = t.toString());
                          },
                      }),
                  ],
              });
    };
var iR = n(274303),
    iL = n(139286),
    iO = n(970573),
    ik = n(364488);
function iG(e) {
    let { onDismiss: t, embedded: n = !1 } = e;
    return (
        (0, iL.A)({ type: u.ImpressionTypes.MODAL, name: u.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING }),
        (0, o.jsxs)(G.Ay, {
            className: ik.ci,
            transparent: n,
            children: [
                !n && (0, o.jsx)(G.hE, { children: z.intl.string(z.t.bVbB63) }),
                (0, o.jsx)(U.E, {
                    className: ik.PK,
                    variant: "text-md/normal",
                    color: "text-default",
                    children: z.intl.string(z.t["0M5fN7"]),
                }),
                (0, o.jsx)(iO.A, {
                    actionText: z.intl.string(z.t["DSN+hw"]),
                    onAction: (e) => {
                        e === iO.X.LOGIN_REQUIRED && t();
                    },
                }),
                (0, o.jsx)("div", {
                    className: ik.o1,
                    children: (0, o.jsx)(eu.Q, {
                        variant: "secondary",
                        size: "md",
                        textVariant: "text-sm/medium",
                        text: z.intl.string(z.t["9g2mqT"]),
                        onClick: t,
                    }),
                }),
            ],
        })
    );
}
function iw(e) {
    let {
        authBoxClassName: t,
        country: n,
        login: i,
        password: l,
        onLoginChange: s,
        onPasswordChange: r,
        loginRef: a,
        passwordRef: c,
    } = e;
    return (0, o.jsxs)(G.Ay, {
        className: t,
        children: [
            (0, o.jsx)(im.M, {}),
            (0, o.jsxs)(G.eB, {
                className: X.QX,
                children: [
                    (0, o.jsx)(ej.A, {
                        className: X.SX,
                        alpha2: n.alpha2,
                        countryCode: n.code.split(" ")[0],
                        label: z.intl.string(z.t.tUjnxr),
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
                    (0, o.jsx)(G.pd, {
                        className: X.SX,
                        label: z.intl.string(z.t["CIGa+7"]),
                        onChange: r,
                        type: "password",
                        setRef: c,
                        autoComplete: "current-password",
                        spellCheck: "false",
                        value: l,
                        required: !0,
                    }),
                    (0, o.jsx)("div", {
                        className: X.QB,
                        children: (0, o.jsx)(M.$, {
                            text: z.intl.string(z.t.dKhVQN),
                            fullWidth: !0,
                            type: "submit",
                            disabled: !0,
                        }),
                    }),
                    (0, o.jsx)(eu.Q, { text: z.intl.string(z.t.wWIufs), textVariant: "text-sm/normal", disabled: !0 }),
                    (0, o.jsx)("div", {
                        className: X.a5,
                        children: (0, o.jsx)(eu.Q, {
                            text: z.intl.string(z.t.tmE73r),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var iD = n(401755);
function iP(e, t) {
    if (null == t[e]) return null;
    {
        let n = t[e];
        return Array.isArray(n) ? n[0] : n;
    }
}
function iB(e) {
    let t,
        {
            invite: n,
            guildTemplate: i,
            giftCode: l,
            authBoxClassName: s,
            isEmbedded: r = !1,
            disableAutofocusOnDefaultForm: a,
            login: u,
            password: m,
            errors: x,
            loginSource: f,
            dismissedChooseAccount: p,
            setDismissedChooseAccount: A,
            conditionalMediationAbortController: E,
            onLoginChange: _,
            onPasswordChange: j,
            handleLogin: v,
            handleForgotPassword: N,
            handleGotoRegister: I,
        } = e,
        C = (0, g.bG)([e_.A], () => e_.A.getCountryCode()),
        y = (0, g.bG)([eq.default], () => eq.default.getLoginStatus()),
        b = (0, g.bG)([iR.A], () => iR.A.getHasLoggedInAccounts()),
        T = c.useCallback(
            (e) => {
                S.default.track(R.HAw.LOGIN_SUCCESSFUL, {
                    source: R.mdB.QR_CODE,
                    login_source: f,
                    gift_code_sku_id: l?.skuId ?? null,
                    is_new_user: !1,
                    login_method: "remote_auth",
                    login_instance_id: e ?? null,
                });
            },
            [f, l],
        ),
        { handoff_token: L } = (0, d.parse)(window.location.search),
        O = h.Fr && h.KY && null != L,
        k = null == x.email && null != x.password,
        w = c.useRef(null),
        D = c.useRef(null),
        P = (0, ic.A)(x);
    c.useEffect(() => {
        function e(e) {
            return null != x[e];
        }
        null != P && P !== x && (e("password") ? D.current?.focus() : (e("email") || e("login")) && w.current?.focus());
    }, [x, w, D, P]),
        (t = r
            ? null
            : null != n
              ? (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(im.A, { invite: n }) })
              : null != l
                ? (0, o.jsx)(ia, { giftCode: l })
                : (0, o.jsxs)("div", {
                      className: iu.wx,
                      children: [
                          (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t["7fNJgA"]) }, "title"),
                          !1 === (0, ne.isAndroidWeb)()
                              ? (0, o.jsx)(G.tK, { children: z.intl.string(z.t.euS7r4) }, "subtitle")
                              : null,
                      ],
                  }));
    let B = (0, o.jsxs)("div", {
        className: iu.Eh,
        children: [
            b &&
                p &&
                (0, o.jsx)("div", {
                    className: iu.AX,
                    children: (0, o.jsx)(M.$, {
                        onClick: () => A(!1),
                        variant: "secondary",
                        text: z.intl.string(z.t["1MrpWO"]),
                        icon: nE.n,
                    }),
                }),
            t,
            (0, o.jsx)(id.F, {
                children: (0, o.jsxs)(G.eB, {
                    className: X.QX,
                    children: [
                        (0, o.jsx)(ej.A, {
                            alpha2: C.alpha2,
                            countryCode: C.code.split(" ")[0],
                            className: X.SX,
                            label: z.intl.string(z.t.tUjnxr),
                            error: iP("login", x) ?? iP("email", x),
                            onChange: _,
                            setRef: w,
                            autoCapitalize: "none",
                            autoComplete: "username webauthn",
                            autoCorrect: "off",
                            spellCheck: "false",
                            value: u,
                            autoFocus: !k && !O && !a,
                            required: !0,
                        }),
                        (0, o.jsx)(G.pd, {
                            label: z.intl.string(z.t["CIGa+7"]),
                            error: iP("password", x),
                            onChange: j,
                            name: "password",
                            type: "password",
                            setRef: D,
                            autoComplete: "current-password",
                            spellCheck: "false",
                            autoFocus: k && !O && !a,
                            value: m,
                            required: !0,
                        }),
                        (0, o.jsx)("div", {
                            className: V()(X.SX, X.a5),
                            children: (0, o.jsx)(eu.Q, {
                                text: z.intl.string(z.t.wWIufs),
                                textVariant: "text-sm/normal",
                                onClick: () => {
                                    null != w.current && w.current.focus(), N();
                                },
                            }),
                        }),
                        (0, o.jsx)("div", {
                            className: X.QB,
                            children: (0, o.jsx)(M.$, {
                                text: z.intl.string(z.t.dKhVQN),
                                fullWidth: !0,
                                type: "submit",
                                loading: y === R.aUe.LOGGING_IN,
                            }),
                        }),
                        (0, o.jsxs)("div", {
                            className: X.a5,
                            children: [
                                (0, o.jsx)("span", { className: iu.Qt, children: z.intl.string(z.t.tmE73r) }),
                                (0, o.jsx)("span", {
                                    className: iu.Z8,
                                    children: (0, o.jsx)(eu.Q, {
                                        text: z.intl.string(z.t.pV8xeR),
                                        textVariant: "text-sm/normal",
                                        onClick: I,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
    return null != n && n.state === R.elq.RESOLVING
        ? (0, o.jsx)(iw, {
              authBoxClassName: s,
              country: C,
              login: u,
              password: m,
              onLoginChange: _,
              onPasswordChange: j,
              loginRef: w,
              passwordRef: D,
          })
        : null != i
          ? i.state === iD.QB.RESOLVING
              ? (0, o.jsx)(iw, {
                    authBoxClassName: s,
                    country: C,
                    login: u,
                    password: m,
                    onLoginChange: _,
                    onPasswordChange: j,
                    loginRef: w,
                    passwordRef: D,
                })
              : (0, o.jsx)(ip, {
                    onSubmit: v,
                    tag: "form",
                    className: V()(s, iu.Sy),
                    children: () => [
                        (0, o.jsx)(iA.A, { guildTemplate: i }, "template"),
                        (0, o.jsx)(c.Fragment, { children: B }, "form-wrapper"),
                    ],
                })
          : b && !p
            ? (0, o.jsx)(iG, { onDismiss: () => A(!0), embedded: r })
            : (0, o.jsxs)("div", {
                  children: [
                      (0, o.jsx)(G.Ay, {
                          onSubmit: v,
                          tag: "form",
                          className: V()(s, { [iu.M0]: O }),
                          transparent: r,
                          expanded: !0,
                          children: (0, o.jsxs)(eO.B, {
                              direction: r ? "vertical" : "horizontal",
                              align: r ? "stretch" : "center",
                              gap: r ? 24 : 64,
                              children: [
                                  B,
                                  (0, o.jsx)(ig.A, {
                                      horizontal: r,
                                      onAuthenticateSuccess: T,
                                      conditionalMediationAbortController: E,
                                  }),
                              ],
                          }),
                      }),
                      O && (0, o.jsx)(iT, {}),
                  ],
              });
}
var iV = n(572469);
function iU(e) {
    let { loginSource: t, giftCodeSKUId: n, isEmbedded: i = !1 } = e,
        l = (0, g.cf)(
            [eq.default],
            () => ({ ticket: eq.default.getMFATicket(), methods: eq.default.getMFAMethods() }),
            [],
        ),
        s = c.useCallback(
            (e) => {
                let { mfaType: i, data: l, ticket: s } = e;
                return (
                    W._.dispatch(R.jej.WAVE_EMPHASIZE),
                    f.A.loginMFAv2({ code: l, ticket: s, mfaType: i, source: t, giftCodeSKUId: n })
                );
            },
            [t, n],
        );
    return (0, o.jsx)(G.Ay, {
        transparent: i,
        style: { padding: 0 },
        children: (0, o.jsx)(iV.t, {
            mfaFinish: s,
            mfaChallenge: l,
            onEarlyClose: () => {
                x.h.dispatch({ type: "LOGIN_RESET" });
            },
            width: i ? "100%" : 480,
            embedded: i,
        }),
    });
}
var iM = n(511815),
    iF = n(139033),
    iW = n(15552),
    iH = n(952116),
    iQ = n(491509),
    iz = n(913612),
    iK = n(933924);
let iX = (e) => n.g.location.assign(e);
function iq(e) {
    let {
        invite: t,
        guildTemplate: n,
        giftCode: i,
        location: l,
        redirectTo: s,
        transitionTo: r,
        authBoxClassName: a,
        isEmbedded: u = !1,
        loginSource: h,
        disableAutofocusOnDefaultForm: m,
    } = e;
    (0, iz.K)();
    let x = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
        p = (0, g.bG)([b.A], () => b.A.isHandoffAvailable()),
        A = (0, g.bG)([eq.default], () => eq.default.getLoginStatus()),
        E = i?.skuId ?? null,
        j = (0, g.bG)([n3.A], () => (null != E ? n3.A.get(E) : null)),
        {
            checkingHandoff: v,
            redirecting: N,
            login: I,
            password: C,
            phoneVerifyError: T,
            dismissedChooseAccount: L,
            setDismissedChooseAccount: O,
            errors: k,
            conditionalMediationAbortController: P,
            loginSource: B,
            loginOrSSO: V,
            handleLogin: M,
            handleIPAuthorize: F,
            handlePasswordReset: H,
            handleForgotPassword: Q,
            handleResendCode: K,
            handleReset: q,
            handleCancelAccountDeletion: Y,
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
                    transitionTo: r,
                    redirectTo: a,
                    location: u,
                    loginSource: h,
                } = e,
                [m, g] = c.useState(() => l),
                [x, p] = c.useState(() => s),
                [A, E] = c.useState(""),
                [_, j] = c.useState(() => {
                    let e = null != u ? (0, d.parse)(u.search) : {};
                    return e.email ?? e.login ?? "";
                }),
                [v, N] = c.useState(""),
                [I, C] = c.useState(!1),
                [b, S] = c.useState(null),
                [T, L] = c.useState(!1),
                [O] = c.useState(() => new AbortController()),
                [k, G] = c.useState({});
            !m || l || s || g(!1);
            let w = c.useMemo(() => {
                    if (null != h) return h;
                    if (null != i) return "gift";
                    if (null != n) return "guild_template";
                    if (null != t) {
                        if (null != t.guild) return "guild_invite";
                        if (null != t.channel) return "dm_invite";
                        if (null != t.inviter) return "friend_invite";
                    }
                    return null != a ? y(a) : null;
                }, [h, i, n, t, a]),
                D = null != i ? i.skuId : null,
                P = c.useCallback(
                    (e) => {
                        let t = null != e ? (0, d.parse)(e.search) : {};
                        if ((delete t.redirect_to, null != a)) {
                            if (ec(a)) return void ed(a);
                            r(a);
                        } else if (null == t.service) r(R.BVt.APP);
                        else {
                            let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + R.Rsh.SSO,
                                n = { ...t, token: eq.default.getToken() };
                            window.location = `${e}?${(0, d.stringify)(n)}`;
                        }
                    },
                    [a, r],
                ),
                B = c.useCallback(
                    function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        e && null != t && (p(!0), n ? f.A.verifySSOToken("login").then(() => P(t)) : P(t));
                    },
                    [P],
                ),
                V = c.useCallback(() => {
                    O.abort("Login state reset"), G({}), f.A.loginReset();
                }, [O]),
                M = c.useCallback(
                    async function (e) {
                        let { undelete: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        e?.preventDefault(),
                            O.abort("Starting password login"),
                            W._.dispatch(R.jej.WAVE_EMPHASIZE),
                            G({});
                        try {
                            await f.A.login({
                                login: A + _,
                                password: v,
                                undelete: n ?? I,
                                source: w,
                                giftCodeSKUId: D,
                                invite: t,
                            });
                        } catch (e) {
                            G((0, iW.p)(e));
                        }
                    },
                    [O, _, A, v, I, w, D, t],
                ),
                F = c.useCallback(
                    async (e) => {
                        let t = A + _;
                        G({});
                        try {
                            let { token: n } = await eA.A.verifyPhone(t, e, !1);
                            await f.A.authorizeIPAddress(n), M();
                        } catch (e) {
                            null != e.body && null != e.body.message && S(e.body.message);
                        }
                    },
                    [A, _, M],
                ),
                H = c.useCallback(
                    async (e) => {
                        S(null);
                        try {
                            let { token: t } = await eA.A.verifyPhone(A + _, e, !1);
                            r(R.BVt.RESET, { search: (0, d.stringify)({ token: t, from_login: "true" }) });
                        } catch (e) {
                            null != e.body && null != e.body.message && S(e.body.message);
                        }
                    },
                    [A, _, r],
                ),
                Q = c.useCallback(
                    async (e) => {
                        null != e && e.preventDefault();
                        let t = A + _;
                        G({});
                        try {
                            W._.dispatch(R.jej.WAVE_EMPHASIZE);
                            let e = await f.A.forgotPassword(t);
                            if (!1 === e) return;
                            e === iM.D.ONE_TIME_LOGIN
                                ? (0, nc.openModal)((e) => {
                                      let t = [
                                          {
                                              variant: "primary",
                                              text: z.intl.string(z.t.BddRzS),
                                              onClick: e.onClose,
                                              fullWidth: !0,
                                          },
                                      ];
                                      return (0, o.jsx)(no.Modal, {
                                          title: z.intl.string(z.t["6Ecyts"]),
                                          actions: t,
                                          ...e,
                                          children: (0, o.jsx)(U.E, {
                                              variant: "text-md/normal",
                                              children: z.intl.string(z.t.iAcrqV),
                                          }),
                                      });
                                  })
                                : (0, iF.A)({
                                      title: z.intl.string(z.t.f5Pi7A),
                                      subtitle: z.intl.format(z.t["6u5hQ9"], { email: t }),
                                  });
                        } catch (e) {
                            G((0, iW.p)(e));
                        }
                    },
                    [A, _],
                ),
                K = c.useCallback(() => {
                    eA.A.resendCode(A + _);
                }, [A, _]),
                X = c.useCallback((e) => {
                    null != e && e.preventDefault(), f.A.loginReset(), N(""), E(""), j(""), C(!1), g(!1), p(!1), G({});
                }, []),
                q = c.useCallback(() => {
                    C(!0), M(void 0, { undelete: !0 });
                }, [M]),
                Y = c.useCallback(() => {
                    let e,
                        l = null != u ? (0, d.parse)(u.search) : {};
                    "" !== _ && (l.email = _),
                        null != t
                            ? ((l.mode = "register"), (e = R.BVt.INVITE(t.code)))
                            : null != i
                              ? ((l.mode = "register"), (e = R.BVt.GIFT_CODE(i.code)))
                              : null != n
                                ? (e = R.BVt.GUILD_TEMPLATE(n.code))
                                : null != a
                                  ? ((e = R.BVt.REGISTER), (l.redirect_to = a))
                                  : (e = R.BVt.REGISTER),
                        V(),
                        r(e, { search: (0, d.stringify)(l) }),
                        W._.dispatch(R.jej.WAVE_EMPHASIZE);
                }, [_, t, i, n, a, u, V, r]);
            return {
                checkingHandoff: m,
                redirecting: x,
                login: _,
                password: v,
                phoneVerifyError: b,
                dismissedChooseAccount: T,
                setDismissedChooseAccount: L,
                errors: k,
                conditionalMediationAbortController: O,
                loginSource: w,
                loginOrSSO: B,
                handleLogin: M,
                handleIPAuthorize: F,
                handlePasswordReset: H,
                handleForgotPassword: Q,
                handleResendCode: K,
                handleReset: X,
                handleCancelAccountDeletion: q,
                handleGotoRegister: Y,
                loginReset: V,
                onLoginChange: c.useCallback((e, t) => {
                    j(e), E(t);
                }, []),
                onPasswordChange: c.useCallback((e) => {
                    N(e);
                }, []),
            };
        })({
            invite: t,
            guildTemplate: n,
            giftCode: i,
            handoffAvailable: p,
            authenticated: x,
            transitionTo: r ?? iX,
            redirectTo: s,
            location: l,
            loginSource: h,
        });
    (0, io.Ay)(() => {
        p && !x ? (0, _.ST)() : x && V(x, l, !0),
            S.default.track(
                R.HAw.LOGIN_VIEWED,
                {
                    location: null != t ? "Invite Login Page" : "Non-Invite Login Page",
                    login_source: B,
                    authenticated: x,
                    ...(null != j ? (0, iQ.A)(j, !1, !1) : {}),
                    source: (0, w.PR)(),
                },
                { flush: !0 },
            ),
            x || (0, iK.a)({ abortController: P, loginSource: B, giftCodeSKUId: E }),
            f.A.getLocationMetadata(),
            (0, D.d0)("login");
    });
    let et = (0, ic.A)(x);
    if (
        (c.useEffect(() => {
            let e = v && (p || N);
            x && !1 === et && !e && (P.abort("Transitioning to authenticated state"), V(x, l));
        }, [x, p, et, N, v, P, V, l]),
        N || v)
    )
        return (0, o.jsx)(G.Ay, { transparent: u, children: (0, o.jsx)(eG.y, {}) });
    if (p)
        return (0, o.jsxs)(G.Ay, {
            className: a,
            transparent: u,
            children: [
                (0, o.jsx)(G.CK, {}),
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.S6RMNA) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t.YZiJbh) }),
            ],
        });
    switch (A) {
        case R.aUe.LOGGING_IN_MFA_SMS:
        case R.aUe.MFA_SMS_STEP:
        case R.aUe.LOGGING_IN_MFA:
        case R.aUe.MFA_STEP:
            return (0, o.jsx)(iU, { loginSource: B, giftCodeSKUId: E, isEmbedded: u });
        case R.aUe.ACCOUNT_SCHEDULED_FOR_DELETION:
        case R.aUe.ACCOUNT_DISABLED:
            return (0, o.jsx)(ih, {
                loginStatus: A,
                authBoxClassName: a,
                transparent: u,
                onSubmit: q,
                onCancelAccountDeletion: Y,
            });
        case R.aUe.PHONE_IP_AUTHORIZATION:
            return (0, o.jsx)(G.Ay, {
                tag: "form",
                className: a,
                transparent: u,
                children: (0, o.jsx)(iH.A, {
                    title: z.intl.string(z.t.w55Oco),
                    subtitle: z.intl.format(z.t.CfRZBj, { onResendClick: K }),
                    error: T,
                    onSubmit: F,
                    onCancel: Z,
                }),
            });
        case R.aUe.PASSWORD_RECOVERY_PHONE_VERIFICATION:
            return (0, o.jsx)(G.Ay, {
                tag: "form",
                className: a,
                transparent: u,
                children: (0, o.jsx)(iH.A, {
                    title: z.intl.string(z.t["+xqy3d"]),
                    subtitle: z.intl.format(z.t.ef4uZ7, { onResendClick: K }),
                    error: T,
                    onSubmit: H,
                    onCancel: Z,
                }),
            });
        case R.aUe.LOGGING_IN:
        case R.aUe.NONE:
        default:
            return (0, o.jsx)(iB, {
                invite: t,
                guildTemplate: n,
                giftCode: i,
                authBoxClassName: a,
                isEmbedded: u,
                disableAutofocusOnDefaultForm: m,
                login: I,
                password: C,
                errors: k,
                loginSource: B,
                dismissedChooseAccount: L,
                setDismissedChooseAccount: O,
                conditionalMediationAbortController: P,
                onLoginChange: J,
                onPasswordChange: ee,
                handleLogin: M,
                handleForgotPassword: Q,
                handleGotoRegister: $,
            });
    }
}
var iY = n(664294),
    i$ = n(204925);
let iZ = null,
    iJ = "underage";
class i0 extends g.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (ne.isPlatformEmbedded && 1) {
            if (null != iZ && iZ + i$.bm > Date.now()) return !0;
        } else if (1) return null != iY.parse(document.cookie)[iJ];
        return !1;
    }
}
let i1 = new i0(x.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (iZ = Date.now()), (document.cookie = `${iJ}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (iZ = null), (document.cookie = `${iJ}=1;path=/;max-age=0`);
    },
});
var i2 = n(509434),
    i4 = n(153801);
let i6 = function () {
    return (0, o.jsx)(G.Ay, {
        children: (0, o.jsxs)("div", {
            className: i4.hQ,
            children: [
                (0, o.jsx)(G.hE, { className: i4.DD, children: z.intl.string(z.t.nCB6Ga) }),
                (0, o.jsx)(G.tK, {
                    className: i4.VA,
                    children: z.intl.format(z.t.KQgoxG, { underageMessage: z.intl.string(z.t.WqEH4D) }),
                }),
                (0, o.jsx)(M.$, {
                    icon: i2.I,
                    text: z.intl.string(z.t.hvVgAZ),
                    onClick: () => window.open(ng.A.getArticleURL(R.MVz.AGE_GATE), "_blank"),
                    iconPosition: "end",
                }),
            ],
        }),
    });
};
var i8 = n(990078),
    i3 = n(913122),
    i7 = n(201505);
n(994555), n(827343), n(792251), n(19575), n(945041);
var i5 = n(493527),
    i9 = n(544395),
    le = n(446837);
let lt = window.ResizeObserver ?? le.t;
function ln(e) {
    let { show: t, children: n, top: i = 0, bottom: l = 0 } = e,
        { ref: s, height: r } = (function () {
            let e = c.useRef(null),
                [t, n] = c.useState(0),
                i = c.useMemo(
                    () =>
                        new lt((e) => {
                            let [t] = e;
                            return n(t.contentRect.height);
                        }),
                    [],
                );
            return (
                c.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]),
                { ref: e, height: t }
            );
        })(),
        a = (0, e0.z)({
            from: { height: 0, paddingBottom: "0px", marginTop: "0px" },
            to: { height: t ? r : 0, paddingBottom: t ? `${l}px` : "0px", marginTop: t ? `${i}px` : "0px" },
            config: { tension: 170, friction: 26 },
        }),
        d = (0, e0.z)({
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
    return (0, o.jsx)(eZ.animated.div, {
        style: { overflow: "hidden", height: a.height, paddingBottom: a.paddingBottom, marginTop: a.marginTop },
        children: (0, o.jsx)(eZ.animated.div, { style: { opacity: d.opacity }, ref: s, children: n }),
    });
}
var li = n(153488),
    ll = n(934337),
    ls = n(989349),
    lr = n.n(ls),
    la = n(955437),
    lo = n(888548);
n(861807);
var lc = n(569717);
function ld(e) {
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
        giftCodeSKUId: d = null,
        promoEmailConsent: h = null,
        usedUsernameSuggestion: m = null,
    } = e;
    if ((x.h.dispatch({ type: "REGISTER" }), null != o)) {
        let e;
        (0, lc.A)(o, R.JJy.REGISTER),
            S.default.track(R.HAw.AGE_GATE_ACTION, { source: i$.w_.REGISTER, action: i$.AM.AGE_GATE_SUBMITTED }),
            (e = lr()().diff(o, "years")) < 13 ||
                S.default.track(R.HAw.USER_AGE_SUBMITTED, {
                    age_bucket: e >= 13 && e <= 17 ? "13-17" : e >= 18 && e <= 22 ? "18-22" : "23+",
                });
    }
    return H.A.post({
        url: R.Rsh.REGISTER,
        body: {
            fingerprint: eq.default.getFingerprint(),
            email: t,
            username: i,
            global_name: l,
            password: r,
            invite: c,
            consent: s,
            phone_token: n,
            date_of_birth: o?.format("YYYY-MM-DD"),
            gift_code_sku_id: d,
            guild_template_code: a,
            promotional_email_opt_in: h?.checked,
        },
        trackedActionData: {
            event: u.NetworkActionNames.USER_REGISTER,
            properties: {
                invite_code: c,
                used_username_suggestion: m,
                promotional_email_opt_in: h?.checked,
                promotional_email_pre_checked: h?.preChecked,
                was_unique_username: !0,
            },
        },
        rejectWithError: !1,
    }).then(
        (e) => {
            x.h.dispatch({ type: "REGISTER_SUCCESS", token: e.body.token }),
                x.h.dispatch({
                    type: "GUARDIAN_CONNECT_REQUIRED",
                    shouldShowGuardianConnect: !0 === e.body.show_guardian_connect,
                }),
                S.default.track(R.HAw.AGE_GATE_ACTION, { source: i$.w_.REGISTER, action: i$.AM.AGE_GATE_SUCCESS });
        },
        (e) => {
            if (e instanceof lo.CaptchaCancelError) throw e;
            let t = new F.A(e);
            throw (
                (null != t.getFieldErrors("date_of_birth") && la.Xv(i$.w_.REGISTER),
                S.default.track(R.HAw.REGISTER_SUBMIT_ERRORED, {
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
var lu = n(568385);
function lh() {
    let { required: e, checked: t } = (0, ll.mZ)();
    return e
        ? (0, o.jsx)("div", {
              className: X.Ot,
              children: (0, o.jsx)(lu.J, {
                  label: z.intl.string(z.t["0p3R0+"]),
                  checked: t,
                  onChange: ll.Bw,
                  labelType: "secondary",
              }),
          })
        : null;
}
let lm = /\.$/;
function lg(e) {
    return Array.isArray(e)
        ? e
              .map((e) => e.replace(lm, ""))
              .join(". ")
              .trim()
        : e;
}
function lx(e) {
    let [t, n] = c.useState(() => null != e && !e),
        [i, l] = c.useState(e);
    return null == i && null != e ? (l(e), n(!e)) : i !== e && l(e), [t, n];
}
function lf() {
    let [e, t] = c.useState(!1),
        n = c.useRef(null);
    return (
        c.useEffect(
            () => () => {
                null != n.current && clearTimeout(n.current);
            },
            [],
        ),
        [
            e,
            c.useCallback((e) => {
                null != n.current && clearTimeout(n.current),
                    t(!0),
                    (n.current = setTimeout(() => {
                        t(!1), (n.current = null);
                    }, e * i_.A.Millis.SECOND));
            }, []),
        ]
    );
}
var lp = n(731286);
function lA(e) {
    let { consent: t, consentRequired: n, onConsentChange: i } = e;
    return n
        ? (0, o.jsx)("div", {
              className: lp.IQ,
              children: (0, o.jsx)(lu.J, {
                  label: z.intl.format(z.t.qMDAP0, { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
                  checked: t,
                  onChange: i,
                  labelType: "secondary",
              }),
          })
        : (0, o.jsx)(U.E, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: V()(X.Ot, lp.E2),
              children: z.intl.format(z.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
          });
}
n(801541);
var lE = n(889137),
    l_ = n(546727),
    lj = n(5052);
function lv(e) {
    let t,
        { username: n, suggestion: i, globalName: l, isUsernameFocused: s, onClickSuggestion: r } = e,
        a = (0, lj.i)(n, !0, !0),
        c = n.length > 0;
    return (
        (t = c
            ? (0, lE.YW)(a)
                  .with({ type: l_.q.ERROR, message: lE.P.select() }, (e) =>
                      (0, o.jsx)(U.E, { className: lp.vU, variant: "text-sm/normal", children: e }),
                  )
                  .with({ type: l_.q.AVAILABLE, message: lE.P.select() }, (e) =>
                      (0, o.jsx)(U.E, { className: lp.vq, variant: "text-sm/normal", children: e }),
                  )
                  .otherwise(() =>
                      (0, o.jsx)(U.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: z.intl.string(z.t.z7c4bP),
                      }),
                  )
            : null != i && i.length > 0 && l.length > 0
              ? (0, o.jsx)(U.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: z.intl.format(z.t.nDGqqq, { suggestion: i, nameOnClick: r }),
                })
              : (0, o.jsx)(U.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: z.intl.string(z.t.z7c4bP),
                })),
        (0, o.jsx)(ln, { show: (c && a?.type === l_.q.ERROR) || s, top: -12, bottom: 20, children: t })
    );
}
function lN(e) {
    let {
            initialEmail: t,
            invite: n,
            giftCode: i,
            guildTemplate: l,
            onApiErrors: s,
            onEmailChange: r,
            onGotoLogin: a,
            onRegister: d,
        } = e,
        [u, h] = c.useState(!1),
        [m, x] = c.useState(!1);
    async function f() {
        b.length > 0 && !i9.A.wasRegistrationSuggestionFetched(b) && (await i5.A.fetchSuggestionsRegistration(b));
    }
    function p(e) {
        S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: e });
    }
    function A(e) {
        S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: e });
    }
    let E = (0, g.bG)([li.A], () => li.A.getAuthenticationConsentRequired()),
        _ = (0, g.bG)([i9.A], () => i9.A.registrationUsernameSuggestion()),
        j = c.useRef(null),
        v = c.useRef(null),
        N = c.useRef(null),
        I = c.useRef(null),
        [C, y] = c.useState(t),
        [b, T] = c.useState(""),
        [L, O] = c.useState(""),
        [k, w] = c.useState(""),
        [D, P] = c.useState(null),
        [B, F] = lx(E),
        [H, Q] = c.useState(!1),
        [K, q] = lf(),
        [Y, $] = c.useState({}),
        { message: Z, email: J, username: ee, global_name: et, password: en, date_of_birth: ei } = Y,
        [el, es] = c.useState(null),
        [er, ea] = c.useState(null),
        [eo, ec] = c.useState(null),
        [ed, eh] = c.useState(null),
        em = null != E && B;
    !(function (e) {
        let { apiErrors: t, emailRef: n, usernameRef: i, globalNameRef: l, passwordRef: s } = e,
            r = (0, ic.A)(t);
        c.useEffect(() => {
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
    })({ apiErrors: Y, emailRef: j, usernameRef: v, globalNameRef: N, passwordRef: I });
    let eg = c.useCallback(async () => {
            let e = null != i ? i.skuId : null,
                t = ll.mZ.getState(),
                r = (0, nW.uJ)(_) ? null : L === _;
            W._.dispatch(R.jej.WAVE_EMPHASIZE), Q(!0), $({});
            try {
                await ld({
                    email: C,
                    username: L,
                    globalName: b,
                    consent: B,
                    password: k,
                    invite: n?.code,
                    usedUsernameSuggestion: r,
                    guildTemplateCode: l?.code,
                    giftCodeSKUId: e,
                    birthday: D,
                    promoEmailConsent: t.required ? t : null,
                }),
                    d?.();
            } catch (t) {
                if ((Q(!1), !(t instanceof i3.LG))) return;
                let e = (0, iW.W)(t);
                $(e), s?.(e), "number" == typeof e.retry_after && q(e.retry_after);
            }
        }, [i, l, n, C, s, d, _, L, b, k, D, B, q]),
        ex = c.useCallback(
            (e) => {
                if ((e?.preventDefault(), null == E)) return;
                let t = !1;
                0 === C.length && (es(z.intl.string(z.t.EkokLy)), (t = !0)),
                    0 === L.length && (ea(z.intl.string(z.t.EkokLy)), (t = !0)),
                    0 === k.length && (ec(z.intl.string(z.t.EkokLy)), (t = !0)),
                    null == D && (eh(z.intl.string(z.t.EkokLy)), (t = !0)),
                    t || eg();
            },
            [C, L, k, D, E, eg],
        ),
        ef = null;
    return (
        "string" == typeof Z && (ef = (0, o.jsx)(G.ME, { className: V()(X.QX, lp.gJ), children: Z })),
        (0, o.jsx)("form", {
            onSubmit: ex,
            children: (0, o.jsxs)(G.eB, {
                className: X.QX,
                children: [
                    (0, o.jsx)(G.pd, {
                        autoFocus: !0,
                        className: X.SX,
                        label: z.intl.string(z.t.dI4d4S),
                        name: "email",
                        value: C,
                        onChange: (e) => {
                            y(e), r?.(e), es(0 === e.length ? z.intl.string(z.t.EkokLy) : null);
                        },
                        error: el ?? lg(J),
                        type: "email",
                        autoComplete: "username",
                        setRef: j,
                        required: !0,
                        onFocus: () => p("email"),
                        onBlur: () => A("email"),
                    }),
                    (0, o.jsx)(G.pd, {
                        label: z.intl.string(z.t["9AjdkD"]),
                        className: X.SX,
                        name: "global_name",
                        value: b,
                        onChange: T,
                        error: lg(et),
                        maxLength: 32,
                        autoComplete: "off",
                        setRef: N,
                        onFocus: () => {
                            h(!0), p("global_name");
                        },
                        onBlur: () => {
                            h(!1), A("global_name");
                        },
                    }),
                    (0, o.jsx)(ln, {
                        show: u,
                        top: -12,
                        bottom: 20,
                        children: (0, o.jsx)(U.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: z.intl.string(z.t["330TCc"]),
                        }),
                    }),
                    (0, o.jsxs)("div", {
                        onBlur: () => x(!1),
                        onFocus: () => {
                            x(!0), f();
                        },
                        tabIndex: -1,
                        children: [
                            (0, o.jsx)(G.pd, {
                                label: z.intl.string(z.t.TWzdWj),
                                className: X.SX,
                                name: "username",
                                value: L,
                                onChange: (e) => {
                                    O(e.toLocaleLowerCase()), ea(0 === e.length ? z.intl.string(z.t.EkokLy) : null);
                                },
                                error: er ?? lg(ee),
                                autoComplete: "off",
                                setRef: v,
                                required: !0,
                                onFocus: () => p("username"),
                                onBlur: () => A("username"),
                            }),
                            (0, o.jsx)(lv, {
                                username: L,
                                suggestion: _,
                                globalName: b,
                                isUsernameFocused: m,
                                onClickSuggestion: () => {
                                    v.current?.focus(), null != _ && _.length > 0 && O(_);
                                },
                            }),
                        ],
                    }),
                    (0, o.jsx)(G.pd, {
                        label: z.intl.string(z.t["CIGa+7"]),
                        name: "password",
                        value: k,
                        onChange: (e) => {
                            w(e), ec(0 === e.length ? z.intl.string(z.t.EkokLy) : null);
                        },
                        error: eo ?? lg(en),
                        type: "password",
                        autoComplete: "new-password",
                        setRef: I,
                        required: !0,
                        onFocus: () => p("password"),
                        onBlur: () => A("password"),
                    }),
                    (0, o.jsx)(i7.A, {
                        label: z.intl.string(z.t.rhBeKe),
                        wrapperClassName: lp.UJ,
                        name: "date_of_birth",
                        onChange: (e) => {
                            P(e), null != e && eh(null);
                        },
                        error: ed ?? lg(ei),
                        value: D,
                        required: !0,
                        onFocus: p,
                        onBlur: A,
                    }),
                    (0, o.jsx)(lh, {}),
                    (0, o.jsx)(lA, { consent: B, consentRequired: E, onConsentChange: F }),
                    (0, o.jsx)(i8.m, {
                        text: !B && E ? z.intl.string(z.t.AY4IVA) : null,
                        children: (0, o.jsx)("div", {
                            className: X.QX,
                            children: (0, o.jsx)(M.$, {
                                text: z.intl.string(z.t["825cFy"]),
                                variant: "primary",
                                fullWidth: !0,
                                type: "submit",
                                loading: H,
                                disabled: !em || K,
                            }),
                        }),
                    }),
                    ef,
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(eu.Q, {
                            text: z.intl.string(z.t["1lWxux"]),
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
var lI = n(292666),
    lC = n(713654),
    ly = n(131165);
function lb(e) {
    let { channel: t } = e,
        n = (0, lC._U)(t.type);
    return (0, o.jsxs)("div", {
        className: ly.Nj,
        children: [
            null != n ? (0, o.jsx)(n, { color: "currentColor", size: "custom", width: 20, height: 20 }) : null,
            (0, o.jsx)(U.E, { className: ly.dN, color: "none", variant: "text-sm/semibold", children: t.name }),
        ],
    });
}
function lS(e) {
    let { channel: t, guildScheduledEvent: n } = e;
    return (0, o.jsxs)("div", {
        className: ly.kL,
        children: [
            (0, o.jsx)(ty.Uq, { className: ly.II, guildId: n.guild_id, guildEvent: n, eventPreview: n }),
            (0, o.jsx)(ty.sC, { name: n.name, description: n.description, guildId: n.guild_id }),
            null != t && n.channel_id === t.id ? (0, o.jsx)(lb, { channel: t }) : null,
        ],
    });
}
var lT = n(831985);
function lR(e) {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let i = em.DY(t),
        { name: l, description: s } = i;
    return (0, o.jsxs)("div", {
        children: [
            (0, o.jsx)(ek.D, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: lT.CT,
                children: z.intl.string(z.t.Eabu1z),
            }),
            (0, o.jsxs)("div", {
                className: lT.EB,
                children: [
                    (0, o.jsx)(tQ.Ay, {
                        mask: tQ.Ay.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, o.jsx)(tC.Ay, { guild: i, size: tC.Ay.Sizes.MEDIUM, active: !0 }),
                    }),
                    (0, o.jsxs)("div", {
                        className: lT.OA,
                        children: [
                            (0, o.jsx)(ek.D, { variant: "heading-sm/semibold", children: l }),
                            (0, o.jsxs)("div", {
                                className: lT.aH,
                                children: [
                                    (0, o.jsx)("div", { className: lT.Om }),
                                    null != n && n > 0
                                        ? (0, o.jsx)(U.E, {
                                              variant: "text-sm/normal",
                                              children: z.intl.format(z.t["LC+S+m"], { membersOnline: n }),
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
                (0, o.jsx)(U.E, { color: "text-default", className: lT.CT, variant: "text-sm/normal", children: s }),
        ],
    });
}
function lL(e) {
    let { authBoxClassName: t, name: n, onNameChange: i } = e;
    return (0, o.jsxs)(G.Ay, {
        className: t,
        children: [
            (0, o.jsx)(im.M, {}),
            (0, o.jsxs)(G.eB, {
                className: lp.y0,
                children: [
                    (0, o.jsx)(i8.m, {
                        text: z.intl.string(z.t["hBB85/"]),
                        position: "right",
                        children: (0, o.jsx)(G.pd, {
                            label: z.intl.string(z.t["9AjdkD"]),
                            autoFocus: !0,
                            className: X.QB,
                            name: "username",
                            value: n,
                            placeholder: z.intl.string(z.t["09Q8yp"]),
                            onChange: i,
                            onFocus: () => {
                                S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: "username" });
                            },
                            onBlur: () => {
                                S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: "username" });
                            },
                        }),
                    }),
                    (0, o.jsx)(U.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        className: V()(X.QX, lp.E2),
                        children: z.intl.format(z.t["KI+BSb"], { termsURL: R.X7G.TERMS, privacyURL: R.X7G.PRIVACY }),
                    }),
                    (0, o.jsx)("div", {
                        className: X.Ot,
                        children: (0, o.jsx)(M.$, {
                            text: z.intl.string(z.t["825cFy"]),
                            variant: "primary",
                            fullWidth: !0,
                            disabled: !0,
                        }),
                    }),
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(eu.Q, {
                            text: z.intl.string(z.t["1lWxux"]),
                            textVariant: "text-sm/normal",
                            disabled: !0,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lO(e) {
    let { consentRequired: t, consent: n, registering: i } = e,
        l = c.useMemo(() => null != t && n, [t, n]);
    return (0, o.jsx)(i8.m, {
        text: !n && t ? z.intl.string(z.t.AY4IVA) : null,
        children: (0, o.jsx)("div", {
            className: X.Ot,
            children: (0, o.jsx)(M.$, {
                text: z.intl.string(z.t["825cFy"]),
                variant: "primary",
                fullWidth: !0,
                type: "submit",
                loading: i,
                disabled: !l,
            }),
        }),
    });
}
function lk(e) {
    let { invite: t, authBoxClassName: n, hideInviteHeader: i = !1, onApiErrors: l, onGotoLogin: s, onRegister: r } = e,
        a = (0, g.bG)([li.A], () => li.A.getAuthenticationConsentRequired()),
        d = t?.guild_scheduled_event != null,
        u = c.useRef(null),
        h = null;
    h = i
        ? null
        : t?.guild_scheduled_event != null
          ? (0, o.jsx)(lS, { channel: t.channel, guildScheduledEvent: t.guild_scheduled_event })
          : (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(im.A, { invite: t, inUnclaimedFlow: !0 }) });
    let [m, x] = c.useState(""),
        [f, p] = c.useState(null),
        [A, E] = lx(a),
        [_, j] = c.useState(!1),
        [v, N] = c.useState({}),
        { username: I, global_name: C, date_of_birth: y } = v,
        [b, T] = lf();
    c.useEffect(() => {
        null == f && u.current?.focus();
    }, [f, u]);
    let [L, O] = c.useState(null),
        [k, w] = c.useState(null),
        D = c.useCallback(async () => {
            W._.dispatch(R.jej.WAVE_EMPHASIZE), j(!0), N({});
            try {
                await (function (e) {
                    let { invite: t = null, giftCodeSKUId: n = null, ...i } = e;
                    return ld({ ...i, invite: t, giftCodeSKUId: n });
                })({ consent: A, invite: t.code, globalName: m, birthday: f }),
                    r?.();
            } catch (t) {
                if ((j(!1), !(t instanceof i3.LG))) return;
                let e = (0, iW.W)(t);
                N(e), l?.(e), "number" == typeof e.retry_after && T(e.retry_after);
            }
        }, [t, m, f, A, l, r, T, N, j]),
        P = c.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === a)) return;
                let t = !1;
                0 === m.length && (O(z.intl.string(z.t.EkokLy)), (t = !0)),
                    null == f && (w(z.intl.string(z.t.EkokLy)), (t = !0)),
                    t || D();
            },
            [m, f, a, D, O, w],
        );
    return t.state === R.elq.RESOLVING
        ? (0, o.jsx)(lL, { authBoxClassName: n, name: m, onNameChange: x })
        : (0, o.jsxs)("div", {
              children: [
                  (0, o.jsx)(G.Ay, {
                      tag: "section",
                      className: n,
                      children: (0, o.jsxs)("form", {
                          onSubmit: P,
                          children: [
                              h,
                              d ? (0, o.jsx)("div", { className: lp.yF }) : null,
                              (0, o.jsxs)(G.eB, {
                                  className: d ? void 0 : lp.y0,
                                  children: [
                                      (0, o.jsx)(lI.k, {
                                          helperText: z.intl.string(z.t["330TCc"]),
                                          label: z.intl.string(z.t["9AjdkD"]),
                                          error: L ?? lg(C ?? I),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: m,
                                          placeholder: z.intl.string(z.t["09Q8yp"]),
                                          onChange: x,
                                          onFocus: () => {
                                              S.default.track(R.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              S.default.track(R.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, o.jsx)(i7.A, {
                                          label: z.intl.string(z.t.rhBeKe),
                                          wrapperClassName: lp.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              p(e), null != e && w(null);
                                          },
                                          error: k ?? lg(y),
                                          value: f,
                                      }),
                                      (0, o.jsx)(lA, { consent: A, consentRequired: a, onConsentChange: E }),
                                      (0, o.jsx)(lO, { consentRequired: a, consent: A, registering: _ }),
                                      (0, o.jsx)("div", {
                                          className: X.QX,
                                          children: (0, o.jsx)(eu.Q, {
                                              text: z.intl.string(z.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: s,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != t && d
                      ? (0, o.jsx)(G.Ay, {
                            className: X.QX,
                            children: (0, o.jsx)(lR, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
var lG = n(942614);
n(100544);
var lw =
        (((r = {}).IDENTITY = "identity"),
        (r.DISPLAY_NAME = "display_name"),
        (r.ACCOUNT_INFORMATION = "account_information"),
        (r.FULL = "full"),
        (r.AGE_GATE = "age_gate"),
        (r.INVITE = "invite"),
        (r.SMS_VERIFY = "sms_verify"),
        r),
    lD = n(771016);
function lP(e) {
    let {
            authBoxClassName: t,
            giftCode: n,
            giftCodeSKU: i,
            guildTemplate: l,
            invite: s,
            hideInviteHeader: r = !1,
            location: a,
            redirectTo: h,
            onLoginStart: m,
            onRegister: x,
            transitionTo: p = w.pX,
        } = e,
        A = (0, g.bG)([li.A], () => li.A.getAuthenticationConsentRequired()),
        E = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
        _ = (0, g.bG)([i1], () => i1.isUnderageAnonymous()),
        j = (0, g.bG)([iR.A], () => iR.A.getHasLoggedInAccounts()),
        v = null != e.location ? (0, d.parse)(e.location.search) : {},
        [N, I] = c.useState(v.email ?? ""),
        [C, y] = c.useState({}),
        b = (0, ic.A)(E),
        T = (function (e, t, n) {
            if (null != e) return "gift";
            if (null != t) return "guild_template";
            if (null != n) {
                if (null != n.guild) return "guild_invite";
                else if (null != n.channel) return "dm_invite";
                else if (null != n.inviter) return "friend_invite";
            }
            return null;
        })(n, l, s),
        L = null != s && (null != s.guild || null != s.channel),
        O = null != s && null == s.guild && null == s.channel && null != s.inviter,
        k = c.useCallback(() => {
            E && (null != h ? p(h) : p(eh.A.defaultRoute));
        }, [E, h, p]);
    (0, io.Ay)(() => {
        k(),
            S.default.track(
                R.HAw.REGISTER_VIEWED,
                {
                    location: null != s ? "Invite Register Page" : "Non-Invite Register Page",
                    registration_source: T,
                    ...(null != i ? (0, iQ.A)(i, !1, !1) : {}),
                },
                { flush: !0 },
            ),
            null == A && f.A.getLocationMetadata(),
            (0, D.d0)("register");
    }),
        c.useEffect(() => {
            E && !1 === b && ((0, lG.C)(lD.zY.ORGANIC_REGISTERED), k());
        }, [E, b, k]);
    let P = lw.FULL;
    _ || null != C.date_of_birth ? (P = lw.AGE_GATE) : L && (P = lw.INVITE),
        (0, iL.A)(
            {
                type: u.ImpressionTypes.VIEW,
                name: u.ImpressionNames.USER_REGISTRATION,
                properties: { impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW, step: P },
            },
            {},
            [P],
        );
    let B = c.useCallback(
        (e) => {
            let t,
                i = null != a ? (0, d.parse)(a.search) : {};
            null != s
                ? (t = R.BVt.INVITE_LOGIN(s.code))
                : null != n
                  ? (t = R.BVt.GIFT_CODE_LOGIN(n.code))
                  : null != l
                    ? (t = R.BVt.GUILD_TEMPLATE_LOGIN(l.code))
                    : null != h
                      ? ((t = R.BVt.LOGIN), (i.redirect_to = h))
                      : ((t = R.BVt.LOGIN), "" !== N && (i = { email: N })),
                f.A.loginReset(),
                p(t, { search: (0, d.stringify)(i), source: "register" }),
                m?.(e),
                W._.dispatch(R.jej.WAVE_EMPHASIZE);
        },
        [N, s, n, l, h, a, m, p],
    );
    if (_ || null != C.date_of_birth) return (0, o.jsx)(i6, {});
    if (null != s && L)
        return (0, o.jsx)(lk, {
            invite: s,
            authBoxClassName: t,
            hideInviteHeader: r,
            onApiErrors: y,
            onGotoLogin: B,
            onRegister: x,
        });
    let U = (0, o.jsx)(G.hE, { children: z.intl.string(z.t.wC4TlR) }, "title"),
        F = !1;
    null != l
        ? ((U = (0, o.jsx)(iA.A, { guildTemplate: l })), (F = !0))
        : null != n
          ? (U = (0, o.jsx)(ia, { giftCode: n }))
          : !r &&
            null != s &&
            O &&
            s.state === R.elq.RESOLVED &&
            (U = (0, o.jsx)("div", { className: X.S3, children: (0, o.jsx)(im.A, { invite: s, isRegister: !0 }) }));
    let H = (0, o.jsx)(lN, {
        initialEmail: v.email ?? "",
        invite: s,
        giftCode: n,
        guildTemplate: l,
        onApiErrors: y,
        onEmailChange: I,
        onGotoLogin: B,
        onRegister: x,
    });
    return F
        ? (0, o.jsx)(ip, {
              tag: "section",
              className: V()(t, lp.Sy),
              children: () => [
                  U,
                  (0, o.jsxs)(
                      "div",
                      {
                          className: lp.Uu,
                          children: [(0, o.jsx)(G.hE, { className: lp.lR, children: z.intl.string(z.t.wC4TlR) }), H],
                      },
                      "register-title",
                  ),
              ],
          })
        : (0, o.jsxs)(G.Ay, {
              tag: "section",
              className: t,
              children: [
                  j
                      ? (0, o.jsx)("div", {
                            className: lp.AX,
                            children: (0, o.jsx)(M.$, {
                                onClick: B,
                                variant: "secondary",
                                text: z.intl.string(z.t["1MrpWO"]),
                                icon: nE.n,
                                iconPosition: "start",
                            }),
                        })
                      : null,
                  U,
                  H,
              ],
          });
}
g.Ay.initialize(), g.Ay.initialize();
class lB extends c.PureComponent {
    state = { error: null, continueOnWeb: !1, currentUser: null, sentVerification: !1, fetchingUser: !1 };
    componentDidMount() {
        let { authenticated: e, isResolved: t } = this.props;
        e && this.handleAuthenticated(), t || this.resolveGiftCode(), (0, D.d0)("gift_code");
    }
    componentDidUpdate(e) {
        let { authenticated: t, isResolved: n } = this.props;
        n ||
            x.h.wait(() => {
                this.resolveGiftCode();
            }),
            t && !e.authenticated && this.handleAuthenticated(),
            !t && e.authenticated && this.setState({ currentUser: null });
    }
    handleAuthenticated() {
        let { currentUser: e } = this.state;
        n2.Yq(), null == e && this.refreshUser();
    }
    refreshUser = () => {
        this.setState({ fetchingUser: !0 }),
            nu
                .rQ({ withAnalyticsToken: !0 })
                .then((e) => this.setState({ currentUser: e, fetchingUser: !1 }))
                .catch(() => this.setState({ fetchingUser: !1 }));
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
        return l === R.t02.INVALID_GIFT_SELF_REDEMPTION
            ? z.intl.string(z.t.wa9h7F)
            : l === R.t02.INVALID_GIFT_REDEMPTION_OWNED && n?.productLine === R.EZt.COLLECTIBLES
              ? z.intl.string(z.t.mdLtb5)
              : null != t || l === R.t02.INVALID_GIFT_REDEMPTION_OWNED
                ? z.intl.format(z.t.PIdmg3, { libraryLink: R.BVt.APPLICATION_LIBRARY })
                : e.isClaimed || l === R.t02.INVALID_GIFT_REDEMPTION_EXHAUSTED
                  ? z.intl.string(z.t.ilcBeX)
                  : l === R.t02.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                    ? z.intl.string(z.t.ypuSd8)
                    : void 0;
    }
    handleLogout = () => {
        let e = this.props.match.params.giftCode;
        f.A.logout("gift_code", R.BVt.GIFT_CODE_LOGIN(e));
    };
    handleResendVerification = () => {
        f.A.verifyResend(), this.setState({ sentVerification: !0 });
    };
    handleAccept = async () => {
        let { transitionTo: e, giftCode: t } = this.props;
        if (null == t) throw Error("Trying to accept gift before resolve");
        let n = this.getCode();
        try {
            this.setState({ error: null }), await p.A.redeemGiftCode({ code: n }), e(R.BVt.APP);
        } catch (e) {
            this.setState({ error: e });
        }
    };
    resolveGiftCode = () => {
        let { transitionTo: e } = this.props,
            t = this.getCode();
        p.A.resolveGiftCode(t, !0, !0).then((n) => {
            null != n && null != n.giftCode.promotion && e(R.BVt.BILLING_PROMOTION_REDEMPTION(t));
        });
    };
    renderSpinner(e) {
        return (0, o.jsxs)(G.Ay, { children: [(0, o.jsx)(G.hE, { children: e }), (0, o.jsx)(G.CK, {})] });
    }
    renderExpiredInvite() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.hE, { className: V()(X.Ot, X.QB), children: z.intl.string(z.t.KPowgn) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t.j8734b) }),
                (0, o.jsx)("div", {
                    className: V()(X.eT, X.QB),
                    children: (0, o.jsx)(M.$, { text: z.intl.string(z.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, o.jsx)(eu.Q, {
                    text: z.intl.string(z.t["/CjuXF"]),
                    textVariant: "text-sm/normal",
                    onClick: () => window.open(ng.A.getArticleURL(R.MVz.GIFTING), "_blank"),
                }),
            ],
        });
    }
    renderAppOpened() {
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.csrAMJ) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t["m1+IBn"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(M.$, {
                        text: z.intl.string(z.t["qsI+EH"]),
                        fullWidth: !0,
                        onClick: () => this.setState({ continueOnWeb: !0 }),
                    }),
                }),
            ],
        });
    }
    renderVerification(e) {
        let { sentVerification: t } = this.state;
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G._V, { src: n(792525), className: X.QB }),
                (0, o.jsx)(G.hE, { children: z.intl.format(z.t["ivLUf/"], { username: e.username }) }),
                (0, o.jsx)(G.tK, { className: X.QX, children: z.intl.string(z.t["8Su18+"]) }),
                (0, o.jsx)("div", {
                    className: X.eT,
                    children: (0, o.jsx)(M.$, {
                        text: t ? z.intl.string(z.t.CMa9Rv) : z.intl.string(z.t.lm1UKt),
                        fullWidth: !0,
                        disabled: t,
                        onClick: this.handleResendVerification,
                    }),
                }),
                (0, o.jsx)("div", {
                    className: X.Ot,
                    children: (0, o.jsx)(eu.Q, {
                        text: z.intl.string(z.t.Po9eBQ),
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
        return (0, o.jsx)(lU, {
            sku: n,
            giftCodeCode: e.code,
            transitionTo: i,
            children: (0, o.jsxs)(G.Ay, {
                children: [
                    (0, o.jsx)(ia, { giftCode: e }),
                    (0, o.jsx)("div", {
                        className: X.eT,
                        children: (0, o.jsx)(M.$, {
                            text: z.intl.string(z.t.n6I6k4),
                            fullWidth: !0,
                            disabled: null != l,
                            onClick: this.handleAccept,
                        }),
                    }),
                    null != l
                        ? (0, o.jsx)(G.tK, { className: X.QX, children: l })
                        : (0, o.jsx)(G.ME, {
                              className: X.QX,
                              children: z.intl.format(z.t.NYM08s, {
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
            { fetchingUser: c, continueOnWeb: d } = this.state;
        if (e === R.fAW.OPEN && !d) return this.renderAppOpened();
        if (e === R.fAW.OPENING) return this.renderSpinner(z.intl.string(z.t["Z+hCVU"]));
        if (s) return this.renderSpinner(z.intl.string(z.t.bhJseN));
        if (null == i) return l ? this.renderExpiredInvite() : this.renderSpinner(z.intl.string(z.t.b3lf1c));
        if (l) {
            if (n) {
                let e = this.state.currentUser;
                return c || null == e
                    ? this.renderSpinner(z.intl.string(z.t.bYb2nS))
                    : this.requiresVerification && null != e
                      ? this.renderVerification(e)
                      : this.renderAuthenticated(i, e, t);
            }
            return "login" === this.getMode()
                ? (0, o.jsx)(iq, { giftCode: i, transitionTo: r, location: a })
                : (0, o.jsx)(lP, { giftCodeSKU: t, giftCode: i, transitionTo: r, location: a });
        }
        return null;
    }
}
let lV = g.Ay.connectStores([nk.A, n8.A, eq.default, n3.A, eh.A, n4.A], (e) => {
    let t = e.match.params.giftCode,
        n = nk.A.get(t),
        i = null != n ? n3.A.get(n.skuId) : null;
    return {
        giftCode: n,
        sku: i,
        libraryApplication: null != i && n?.entitlementBranches != null ? n7.YI(n.entitlementBranches, i, n8.A) : null,
        authenticated: eq.default.isAuthenticated(),
        defaultRoute: eh.A.defaultRoute,
        isResolved: nk.A.getIsResolved(t),
        isAccepting: nk.A.getIsAccepting(t),
        libraryApplicationsFetched: n8.A.fetched,
        nativeAppState: n4.A.getState(t),
    };
})(lB);
function lU(e) {
    let { sku: t, children: n, giftCodeCode: i, transitionTo: l } = e,
        s = (0, n6.bF)(t);
    return (c.useEffect(() => {
        null != i && s && l(R.BVt.APP_WITH_GIFT_CODE(i));
    }, [s, i, l]),
    s)
        ? (0, o.jsxs)(G.Ay, {
              children: [(0, o.jsx)(G.hE, { children: z.intl.string(z.t.b3lf1c) }), (0, o.jsx)(G.CK, {})],
          })
        : n;
}
var lM = n(871194),
    lF = n(799365),
    lW = n(894778),
    lH = n(315290),
    lQ = n(396574),
    lz = n(94654);
g.Ay.initialize();
class lK extends c.PureComponent {
    componentDidMount() {
        (0, D.d0)("guildTemplate"),
            lQ.VP || eY.A.launch("discord://" + R.BVt.GUILD_TEMPLATE(this.props.code), () => void 0);
    }
    componentDidUpdate(e) {
        this.props.code !== e.code && eS.A.resolveGuildTemplate(this.props.code);
    }
    handleContinue = () => {
        let { defaultRoute: e, transitionTo: t } = this.props;
        t(e);
    };
    renderButton(e, t) {
        return lQ.VP
            ? (0, o.jsx)("div", { className: X.eT, children: (0, o.jsx)(M.$, { text: e, fullWidth: !0, onClick: t }) })
            : (0, o.jsx)(G.KE, { className: X.eT });
    }
    renderSpinner(e) {
        return (0, o.jsxs)(G.Ay, { children: [(0, o.jsx)(G.hE, { children: e }), (0, o.jsx)(G.CK, {})] });
    }
    renderInvalidGuildTemplate() {
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.hE, { className: V()(X.Ot, X.QB), children: z.intl.string(z.t.C7ZRNw) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t.A6MwXE) }),
                this.renderButton(z.intl.string(z.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAppOpened() {
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.csrAMJ) }),
                (0, o.jsx)(G.tK, { children: z.intl.string(z.t["m1+IBn"]) }),
                this.renderButton(z.intl.string(z.t.fIv16B), this.handleContinue),
            ],
        });
    }
    renderAuthenticatedOrDownload() {
        let { guildTemplate: e } = this.props;
        return (eW()(null != e, "guild template must not be null"), e.state === iD.QB.RESOLVING)
            ? (0, o.jsx)(G.Ay, { className: lz.sL, children: (0, o.jsx)(lF.A, { guildTemplate: e }) })
            : (0, o.jsx)(lX, { guildTemplate: e });
    }
    renderContinue() {
        return (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G.hE, { children: z.intl.string(z.t.fOc4gn) }),
                this.renderButton(z.intl.string(z.t.fIv16B), this.handleContinue),
            ],
        });
    }
    render() {
        let { guildTemplate: e, nativeAppState: t, authenticated: n, transitionTo: i, location: l } = this.props;
        if (null == e) return this.renderSpinner(z.intl.string(z.t.ZTNur7));
        if (t === R.fAW.OPEN) return this.renderAppOpened();
        if (t === R.fAW.OPENING) return this.renderSpinner(z.intl.string(z.t["Z+hCVU"]));
        switch (e.state) {
            case iD.QB.RESOLVING:
                return this.renderSpinner(z.intl.string(z.t["Z+hCVU"]));
            case iD.QB.RESOLVED:
                if (n || !lQ.VP) return this.renderAuthenticatedOrDownload();
                if (this.props.login) return (0, o.jsx)(iq, { guildTemplate: e, transitionTo: i, location: l });
                return (0, o.jsx)(lP, {
                    guildTemplate: e,
                    transitionTo: i,
                    location: l,
                    onRegister: () => {
                        (0, lG.C)(lD.zY.ORGANIC_REGISTERED_GUILD_TEMPLATE),
                            lW.A.flowStart(lH.do.ORGANIC_GUILD_TEMPLATES, lH.ju.NUF_STARTED);
                    },
                });
            case iD.QB.EXPIRED:
                return this.renderInvalidGuildTemplate();
            default:
                return null;
        }
    }
}
function lX(e) {
    let { guildTemplate: t } = e,
        { form: n, handleSubmit: i } = (0, lM.A)(t, !1);
    lW.A.flowStep(lH.do.ORGANIC_GUILD_TEMPLATES, lH.jC.GUILD_CREATE);
    let l = (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(G.hE, { className: lz.wx, children: z.intl.string(z.t.UNFvtM) }),
            n,
            (0, o.jsx)("div", {
                className: lz.Tf,
                children: (0, o.jsx)(M.$, { text: z.intl.string(z.t.xr59t7), fullWidth: !0, onClick: i }),
            }),
        ],
    });
    return (0, o.jsx)(ip, {
        className: lz.sL,
        children: () => [
            (0, o.jsx)(iA.A, { guildTemplate: t }, "template"),
            (0, o.jsx)("div", { className: lz.KJ, children: l }, "contents"),
        ],
    });
}
function lq(e, t, n) {
    e.preventDefault(),
        S.default.track(R.HAw.GUILD_TEMPLATE_APP_OPENED, {
            guild_template_code: t,
            guild_template_name: n.name,
            guild_template_description: n.description,
            guild_template_guild_id: n.sourceGuildId,
        });
    let i = eq.default.getFingerprint(),
        l = null != i ? i : eq.default.getId();
    eS.A.openMobileApp(n.state === iD.QB.RESOLVED ? t : void 0, l);
}
function lY(e) {
    let { code: t } = e,
        n = (0, g.bG)([eb.A], () => eb.A.getGuildTemplate(t));
    return (c.useEffect(() => {
        (0, D.d0)("guild_template_mobile");
    }, []),
    null == n || n.state === iD.QB.RESOLVING)
        ? (0, o.jsx)(G.Ay, { children: (0, o.jsx)(eG.y, {}) })
        : n.state === iD.QB.RESOLVED
          ? (0, o.jsxs)(G.Ay, {
                children: [
                    (0, o.jsx)(lF.A, { guildTemplate: n, tall: !0 }),
                    (0, o.jsx)("div", {
                        className: X.QX,
                        children: (0, o.jsx)(M.$, {
                            text: z.intl.string(z.t["a3Gl+e"]),
                            fullWidth: !0,
                            onClick: (e) => lq(e, t, n),
                        }),
                    }),
                ],
            })
          : (0, o.jsx)(e3, {
                text: z.intl.string(z.t["e/rZ2n"]),
                buttonCta: z.intl.string(z.t.HAvYn0),
                onClick: (e) => lq(e, t, n),
            });
}
g.Ay.initialize(), n(938796);
var l$ = n(821418),
    lZ = n(665260),
    lJ = n(362474),
    l0 = n(695366),
    l1 = n(964486),
    l2 = (((a = {}).CHART = "chart"), (a.HIGHLIGHTS = "highlights"), a);
let l4 = (0, tZ.mj)({
    name: "2026-07-invite-server-liveliness",
    kind: "installation",
    defaultConfig: { enabled: !1, variant: null },
    variations: { 1: { enabled: !0, variant: "chart" }, 2: { enabled: !0, variant: "highlights" } },
});
var l6 = n(575181),
    l8 = n(943255),
    l3 = n(406810),
    l7 = n(81466),
    l5 = n(27232),
    l9 = n(825860);
function se(e) {
    return { h: e % 12 == 0 ? 12 : e % 12, ampm: e < 12 || 24 === e ? "am" : "pm" };
}
function st(e) {
    let t = Math.round(-new Date().getTimezoneOffset() / 60),
        n = Array(168);
    for (let i = 0; i < 168; i++) {
        let l = (((i - t) % 168) + 168) % 168;
        n[i] = e[l] ?? 0;
    }
    return n;
}
let sn = { morning: 7, afternoon: 5, evening: 4, night: 8 };
function si(e) {
    return e >= 5 && e < 12 ? "morning" : e >= 12 && e < 17 ? "afternoon" : e >= 17 && e < 21 ? "evening" : "night";
}
function sl(e) {
    let t,
        n,
        i = Array(24).fill(0),
        l = Array(7).fill(0),
        s = 0;
    for (let t = 0; t < 168; t++) {
        let n = e[t] ?? 0;
        (i[t % 24] += n), (l[Math.floor(t / 24)] += n), (s += n);
    }
    if (0 === s) return null;
    let r = { morning: 0, afternoon: 0, evening: 0, night: 0 };
    for (let e = 0; e < 24; e++) r[si(e)] += i[e] ?? 0;
    let a = "evening",
        o = -1;
    Object.keys(r).forEach((e) => {
        let t = r[e] / sn[e];
        t > o && ((o = t), (a = e));
    });
    let c = 24 - sn[a],
        d = c > 0 ? (s - r[a]) / c : o,
        u = d > 0 ? o / d : 1 / 0,
        h = (l[0] ?? 0) + (l[6] ?? 0),
        m = h / 2,
        g = (s - h) / 5,
        x = m >= g ? "weekend" : "weekday",
        f = Math.max(m, g),
        p = Math.min(m, g),
        A = p > 0 ? f / p : 1 / 0,
        E = u >= 1.3,
        _ = A >= 1.3,
        j = E ? a : "allDay";
    return (
        E && (!_ || u >= A)
            ? ((t = a),
              (n = (function (e, t) {
                  var n;
                  let i,
                      l,
                      s = 0,
                      r = -1;
                  for (let n = 0; n < 24; n++) {
                      if (si(n) !== t) continue;
                      let i = e[n] ?? 0;
                      i > r && ((r = i), (s = n));
                  }
                  let a = e[(s + 23) % 24] ?? 0,
                      o = (((e[(s + 1) % 24] ?? 0) >= a ? s : s - 1) + 24) % 24;
                  return (
                      (n = o + 2),
                      (i = se(o)),
                      (l = se(n % 24)),
                      i.ampm === l.ampm ? `${i.h}-${l.h}${l.ampm}` : `${i.h}${i.ampm}-${l.h}${l.ampm}`
                  );
              })(i, a)))
            : (t = _ ? x : A <= u ? "everyDay" : "allDay"),
        { hourTotals: i, category: t, peakRange: n, timeCategory: j, dayCategory: _ ? x : "everyDay" }
    );
}
let ss = {
    morning: z.t.s5jG51,
    afternoon: z.t["0qmYNB"],
    evening: z.t["0QA+rq"],
    night: z.t.ZSLBan,
    allDay: z.t["K+spIo"],
    weekday: z.t.hj2zN0,
    weekend: z.t.Tl1n53,
    everyDay: z.t.cQbw52,
};
var sr = n(301634);
function sa(e) {
    let t,
        { hourTotals: n } = e,
        i = Math.max(...n, 1),
        l = (((t = new Date()).getHours() + t.getMinutes() / 60) / 24) * 100;
    return (0, o.jsxs)("div", {
        className: sr.n_,
        role: "img",
        "aria-label": z.intl.string(z.t.qfBFn4),
        children: [
            n.map((e, t) => {
                let n = Math.max(8, Math.round((e / i) * 100));
                return (0, o.jsx)(
                    "div",
                    { className: sr.oh, children: (0, o.jsx)("div", { className: sr.M0, style: { height: `${n}%` } }) },
                    t,
                );
            }),
            (0, o.jsx)("div", { className: sr.X1, style: { left: `${l}%` }, "aria-hidden": !0 }),
        ],
    });
}
function so() {
    return (0, o.jsxs)("div", {
        className: sr.w9,
        "aria-hidden": !0,
        children: [
            (0, o.jsx)(U.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                tag: "span",
                className: sr.pS,
                children: "12a",
            }),
            [
                { text: "6a", leftPct: 25 },
                { text: "12p", leftPct: 50 },
                { text: "6p", leftPct: 75 },
            ].map((e) =>
                (0, o.jsx)(
                    U.E,
                    {
                        variant: "text-xs/medium",
                        color: "text-muted",
                        tag: "span",
                        className: sr.XE,
                        style: { left: `${e.leftPct}%` },
                        children: e.text,
                    },
                    e.text,
                ),
            ),
            (0, o.jsx)(U.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                tag: "span",
                className: sr.c3,
                children: "12a",
            }),
        ],
    });
}
let sc = {
    morning: (0, o.jsx)(l6.F, { size: "xs", color: "currentColor" }),
    afternoon: (0, o.jsx)(l6.F, { size: "xs", color: "currentColor" }),
    evening: (0, o.jsx)(l8.Z, { size: "xs", color: "currentColor" }),
    night: (0, o.jsx)(l8.Z, { size: "xs", color: "currentColor" }),
    allDay: (0, o.jsx)(l3.O, { size: "xs", color: "currentColor" }),
    weekday: (0, o.jsx)(l7.C, { size: "xs", color: "currentColor" }),
    weekend: (0, o.jsx)(l5.G, { size: "xs", color: "currentColor" }),
    everyDay: (0, o.jsx)(l9.Y, { size: "xs", color: "currentColor" }),
};
function sd(e) {
    let { msgActivityBins: t, className: n } = e,
        i = c.useMemo(() => (168 !== t.length ? null : sl(st(t))), [t]);
    if (null == i) return null;
    let l = z.intl.string(ss[i.category]),
        s = null != i.peakRange ? `${l} ${i.peakRange}` : l;
    return (0, o.jsx)("div", {
        className: V()(sr.Nr, n),
        children: (0, o.jsxs)(eO.B, {
            direction: "vertical",
            gap: 12,
            children: [
                (0, o.jsxs)("div", {
                    className: sr.wx,
                    children: [
                        (0, o.jsx)("span", { className: sr.Kk, "aria-hidden": !0, children: sc[i.category] }),
                        (0, o.jsx)(U.E, { variant: "text-md/medium", color: "text-default", tag: "span", children: s }),
                    ],
                }),
                (0, o.jsx)(sa, { hourTotals: i.hourTotals }),
                (0, o.jsx)(so, {}),
            ],
        }),
    });
}
function su(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/ff5b300debaaf761268675632055ea2aaeed0156e927f4039b5d8c056480aab8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sh(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/882c3bbaf049df9d6ce9fb5d00affb1b1269f9ace6bb845ae809eeddd27d8f69.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sm(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/6d4a50142bedb19840dd335117cdbea681cfe97d29490b5ac58a3e26c3e919c9.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sg(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/68a47ae494bc9040f827fab6d508efe1233f06c7270cad257657560e82114de8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sx(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/6bf5f218ad05c4e78b30041e3f0c322f720a0de79fa0dc5e50e0382cee05efd6.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
function sf(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
    return (0, o.jsx)("img", {
        style: { width: s, height: s },
        src: "https://cdn.discordapp.com/assets/content/9b204bba40df001f3d38d8ba5e4eba033db71c96524191948837d4c458a4bcd1.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: l ?? "img",
    });
}
var sp = n(34037);
function sA(e) {
    switch (e) {
        case "evening":
        case "night":
            return { Icon: su, accent: "#816bee" };
        case "morning":
        case "afternoon":
            return { Icon: sh, accent: "#ffb84b" };
        case "allDay":
            return { Icon: sm, accent: "#ffb84b" };
        case "weekday":
            return { Icon: sg, accent: "#5865f2" };
        case "weekend":
            return { Icon: sx, accent: "#f547cb" };
        case "everyDay":
            return { Icon: sf, accent: "#fd6214" };
    }
}
let sE = {
        Icon: function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
            return (0, o.jsx)("img", {
                style: { width: s, height: s },
                src: "https://cdn.discordapp.com/assets/content/340b0e4c91818567c8e6f87a1254f69688e8325f13ee56967fbbec12347866ce.svg",
                alt: t,
                "aria-label": n,
                "aria-hidden": i,
                role: l ?? "img",
            });
        },
        accent: "#7fb134",
    },
    s_ = {
        Icon: function (e) {
            let { alt: t, ariaLabel: n, ariaHidden: i, role: l, size: s = 64 } = e;
            return (0, o.jsx)("img", {
                style: { width: s, height: s },
                src: "https://cdn.discordapp.com/assets/content/8aaad4125f486ba26e967cee08ff5f02ec069bdd45c6e191f77492d98769918c.svg",
                alt: t,
                "aria-label": n,
                "aria-hidden": i,
                role: l ?? "img",
            });
        },
        accent: "#ffb84b",
    };
function sj(e) {
    let { Icon: t, accent: n, label: i } = e;
    return (0, o.jsxs)("div", {
        className: sp.AS,
        children: [
            (0, o.jsx)("div", {
                className: sp.rN,
                style: { "--liveliness-accent": n },
                children: (0, o.jsx)(t, { alt: "", size: 24, ariaHidden: !0 }),
            }),
            (0, o.jsx)(U.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                tag: "span",
                className: sp.Pf,
                children: i,
            }),
        ],
    });
}
function sv(e) {
    let { guild: t, msgActivityBins: n, className: i } = e,
        l = (0, g.bG)([tU.default], () => tU.default.locale),
        s = c.useMemo(() => (168 !== n.length ? null : sl(st(n))), [n]),
        r = tM.default.extractTimestamp(t.id),
        a = (0, tP.P)(r, l);
    if (null == s) return null;
    let d = r > new Date().getTime() - 2592e6;
    return (0, o.jsxs)("div", {
        className: i,
        children: [
            (0, o.jsx)(U.E, {
                variant: "text-sm/semibold",
                color: "text-default",
                tag: "div",
                className: sp.R_,
                children: z.intl.string(z.t.xRxGFl),
            }),
            (0, o.jsxs)("div", {
                className: sp.ld,
                children: [
                    (0, o.jsx)(sj, { ...sA(s.timeCategory), label: z.intl.string(ss[s.timeCategory]) }),
                    (0, o.jsx)(sj, { ...sA(s.dayCategory), label: z.intl.string(ss[s.dayCategory]) }),
                    null != a &&
                        (0, o.jsx)(sj, { ...(d ? sE : s_), label: z.intl.format(z.t.LVx4Xr, { createdAtDate: a }) }),
                ],
            }),
        ],
    });
}
function sN(e) {
    let { invite: t, guild: n, liveliness: i, analyticsLocation: l } = e,
        s = t.profile?.description ?? n.description,
        r = l4.useConfig({ location: l }).variant;
    return (0, o.jsxs)(eO.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, o.jsx)(tK, { guild: n }),
            (0, o.jsxs)(eO.B, {
                direction: "vertical",
                gap: 16,
                children: [
                    (0, o.jsx)(tW, {
                        guild: n,
                        invite: t,
                        showGuildTag: !0,
                        showLocale: !1,
                        showLevel: !1,
                        showEstablished: r !== l2.HIGHLIGHTS,
                    }),
                    null != s &&
                        "" !== s &&
                        (0, o.jsx)(U.E, { variant: "text-md/normal", color: "text-default", children: s }),
                    r === l2.HIGHLIGHTS
                        ? (0, o.jsx)(sv, { guild: n, msgActivityBins: i.msg_activity_bins })
                        : (0, o.jsx)(sd, { msgActivityBins: i.msg_activity_bins }),
                ],
            }),
        ],
    });
}
var sI = n(14979);
function sC(e) {
    let { invite: t, guild: n, liveliness: i } = e;
    return (0, o.jsx)("div", {
        className: sI.nG,
        children: (0, o.jsx)(sN, {
            invite: t,
            guild: n,
            liveliness: i,
            analyticsLocation: "InviteWebLoginRedesignDetails",
        }),
    });
}
function sy(e) {
    let { invite: t, guild: n, liveliness: i, location: l, transitionTo: s } = e;
    return (0, o.jsxs)("div", {
        className: sI.Nf,
        children: [
            (0, o.jsx)("div", { className: sI.yJ, children: (0, o.jsx)(sC, { invite: t, guild: n, liveliness: i }) }),
            (0, o.jsxs)("div", {
                className: sI.Vx,
                children: [
                    (0, o.jsx)(ek.D, {
                        variant: "heading-xl/semibold",
                        color: "text-default",
                        children: z.intl.string(z.t["YcW+Gm"]),
                    }),
                    (0, o.jsx)(iq, { invite: t, isEmbedded: !0, location: l, transitionTo: s }),
                ],
            }),
        ],
    });
}
function sb(e) {
    let { invite: t, guild: n, liveliness: i, onLoginStart: l, location: s, transitionTo: r } = e;
    return (0, o.jsxs)("div", {
        className: sI.Nf,
        children: [
            (0, o.jsx)("div", { className: sI.yJ, children: (0, o.jsx)(sC, { invite: t, guild: n, liveliness: i }) }),
            (0, o.jsxs)("div", {
                className: sI.Vx,
                children: [
                    (0, o.jsx)(ek.D, {
                        variant: "heading-xl/semibold",
                        color: "text-default",
                        children: z.intl.string(z.t["1OGGMX"]),
                    }),
                    (0, o.jsx)(lP, {
                        invite: t,
                        hideInviteHeader: !0,
                        authBoxClassName: sI.To,
                        location: s,
                        onLoginStart: l,
                        transitionTo: r,
                    }),
                ],
            }),
        ],
    });
}
var sS = n(922016),
    sT = n(408278),
    sR = n(625903),
    sL = n(966327),
    sO = n(960736),
    sk = n(4274),
    sG = n(980707),
    sw = n(477782),
    sD = n(885386);
function sP(e) {
    let { invite: t, closePopout: n } = e,
        i = sD.tz.useSetting(),
        {
            nickname: l,
            dmsAllowed: s,
            showActivity: r,
            setNickname: a,
            setDmsAllowed: c,
            setShowActivity: d,
        } = (0, sO.lD)(),
        u = t.is_nickname_changeable;
    return (0, o.jsxs)(sG.W, {
        navId: "accept-invite-modal-settings-menu",
        onClose: n,
        "aria-label": z.intl.string(z.t["3D5yo/"]),
        onSelect: () => {},
        children: [
            u
                ? (0, o.jsx)(sw.Yn, {
                      id: "accept-invite-modal-settings-nickname",
                      label: z.intl.string(z.t.me1lRk),
                      value: l,
                      onChange: a,
                      placeholder: z.intl.string(z.t["09Q8yp"]),
                      maxLength: R.d0r,
                  })
                : null,
            (0, o.jsx)(sw.fP, {
                id: "accept-invite-modal-settings-dms",
                label: z.intl.string(z.t["/2ed37"]),
                action: c,
                checked: s,
            }),
            i
                ? (0, o.jsx)(sw.fP, {
                      id: "accept-invite-modal-settings-activity",
                      label: z.intl.string(z.t.bN4m1G),
                      action: d,
                      checked: r,
                  })
                : null,
        ],
    });
}
function sB(e) {
    let { invite: t, guild: n, onAcceptInvite: i, error: l } = e,
        s = c.useRef(null),
        [r, a] = c.useState(!1),
        d = (0, g.bG)([it.default], () => it.default.getCurrentUser()),
        u = (0, sO.uE)(),
        h = "" !== u ? z.intl.format(z.t["9sWQNT"], { usernameHook: () => u }) : z.intl.string(z.t["e/6Ogt"]),
        m = c.useCallback(() => {
            r ||
                S.default.track(R.HAw.INVITE_ACCEPT_JOIN_SETTINGS_EXPANDED, {
                    guild_id: n.id,
                    invite_code: t.code,
                    location: "invite_web_redesign",
                }),
                a(!r);
        }, [n.id, t.code, r]);
    return (
        (0, io.Ay)(() => {
            null == d && nu.rQ({ withAnalyticsToken: !0 });
        }),
        (0, o.jsxs)("div", {
            className: sI.cv,
            children: [
                null != l &&
                    (0, o.jsxs)("div", {
                        className: sI.fl,
                        role: "alert",
                        children: [
                            (0, o.jsx)(l0.E, {
                                size: "custom",
                                width: 14,
                                height: 14,
                                color: e1.A.colors.TEXT_FEEDBACK_CRITICAL,
                            }),
                            (0, o.jsx)(U.E, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                children: (0, sk.s)(l.code),
                            }),
                        ],
                    }),
                lQ.VP
                    ? (0, o.jsxs)(Y.e, {
                          fullWidthContainer: !0,
                          fullWidth: !0,
                          direction: "horizontal",
                          children: [
                              (0, o.jsx)(M.$, {
                                  onClick: i,
                                  loading: (function (e) {
                                      let { state: t } = e;
                                      switch (t) {
                                          case R.elq.ACCEPTING:
                                          case R.elq.APP_OPENING:
                                              return !0;
                                          default:
                                              return !1;
                                      }
                                  })(t),
                                  variant: "primary",
                                  text: h,
                                  icon:
                                      null == d
                                          ? void 0
                                          : () => (0, o.jsx)(sL.A, { "aria-hidden": !0, size: ti._3.SIZE_16, user: d }),
                              }),
                              (0, o.jsx)(sS.Y, {
                                  targetElementRef: s,
                                  animation: sS.Y.Animation.NONE,
                                  position: "top",
                                  align: "right",
                                  shouldShow: r,
                                  autoInvert: !1,
                                  onRequestClose: () => a(!1),
                                  renderPopout: (e) => (0, o.jsx)(sP, { invite: t, ...e }),
                                  children: (e) =>
                                      (0, o.jsx)("div", {
                                          ref: s,
                                          children: (0, o.jsx)(sT.K, {
                                              ...e,
                                              icon: sR.Z,
                                              "aria-label": z.intl.string(z.t["3D5yo/"]),
                                              variant: "secondary",
                                              onClick: m,
                                          }),
                                      }),
                              }),
                          ],
                      })
                    : (0, o.jsx)(G.KE, {}),
            ],
        })
    );
}
function sV(e) {
    let { invite: t, guild: n, liveliness: i, onAcceptInvite: l, error: s } = e;
    return (0, o.jsxs)("div", {
        className: sI.qF,
        children: [
            (0, o.jsx)("div", {
                className: sI.yh,
                children: (0, o.jsx)(sN, {
                    invite: t,
                    guild: n,
                    liveliness: i,
                    analyticsLocation: "InviteWebRedesign",
                }),
            }),
            (0, o.jsx)(sB, { invite: t, guild: n, onAcceptInvite: l, error: s }),
        ],
    });
}
var sU = n(921037);
g.Ay.initialize();
let sM = "register",
    sF = "login";
function sW(e) {
    let { message: t, onClick: n, invite: i, className: l } = e,
        s = i?.guild_scheduled_event != null;
    return lQ.VP
        ? (0, o.jsx)("div", {
              className: l ?? (s ? X.QX : X.eT),
              children: (0, o.jsx)(M.$, { text: t, onClick: n, variant: s ? "active" : "primary", fullWidth: !0 }),
          })
        : (0, o.jsx)(G.KE, { className: l ?? X.eT });
}
function sH(e) {
    let { invite: t, transitionTo: n, location: i } = e,
        l = null != t.guild ? (0, em.DY)(t.guild) : null,
        { enabled: s } = l4.useConfig({ location: "InviteLogin" });
    return null != l &&
        t.liveliness?.msg_activity_bins != null &&
        null == t.guild_scheduled_event &&
        (l4.getConfig({ location: "InviteLogin.hasLiveliness" }), s)
        ? (0, o.jsx)(sy, { invite: t, guild: l, liveliness: t.liveliness, location: i, transitionTo: n })
        : (0, o.jsx)(iq, { invite: t, transitionTo: n, location: i });
}
function sQ(e) {
    let { invite: t, onLoginStart: n, location: i, transitionTo: l } = e,
        s = null != t.guild ? (0, em.DY)(t.guild) : null,
        { enabled: r } = l4.useConfig({ location: "InviteRegister" });
    return null != s &&
        t.liveliness?.msg_activity_bins != null &&
        null == t.guild_scheduled_event &&
        (l4.getConfig({ location: "InviteRegister.hasLiveliness" }), r)
        ? (0, o.jsx)(sb, {
              invite: t,
              guild: s,
              liveliness: t.liveliness,
              onLoginStart: n,
              location: i,
              transitionTo: l,
          })
        : (0, o.jsx)(lP, { invite: t, onLoginStart: n, location: i, transitionTo: l });
}
function sz(e) {
    let { invite: t, inviteKey: n, handleAccept: i, handleDefaultTransition: l } = e,
        s = (0, g.bG)([te.A], () => (t.state === R.elq.ERROR ? te.A.getInviteError(n) : void 0)),
        r = null != t.guild ? (0, em.DY)(t.guild) : null,
        { enabled: a } = l4.useConfig({ location: "InviteAuthenticated" }),
        c = t.guild_scheduled_event,
        d = s?.code === R.t02.INVALID_CANNOT_FRIEND_SELF;
    return null != r &&
        t.liveliness?.msg_activity_bins != null &&
        null == c &&
        (l4.getConfig({ location: "InviteAuthenticated.hasLiveliness" }), a)
        ? (0, o.jsx)(sV, { invite: t, guild: r, liveliness: t.liveliness, onAcceptInvite: i, error: s })
        : (0, o.jsxs)("div", {
              children: [
                  (0, o.jsxs)(G.Ay, {
                      children: [
                          null != c
                              ? (0, o.jsx)(lS, { channel: t.channel, guildScheduledEvent: c })
                              : (0, o.jsx)(im.A, { invite: t }),
                          null != s &&
                              (0, o.jsx)("div", {
                                  className: X.QX,
                                  role: "alert",
                                  children: (0, o.jsxs)(U.E, {
                                      variant: "text-sm/medium",
                                      color: "text-feedback-critical",
                                      style: { display: "flex", alignItems: "center", gap: 4 },
                                      children: [
                                          (0, o.jsx)(l0.E, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                          }),
                                          " ",
                                          (0, sk.s)(s.code),
                                      ],
                                  }),
                              }),
                          (0, o.jsx)(sW, {
                              invite: t,
                              message: z.intl.string(d ? z.t.fIv16B : z.t.ohMvm1),
                              onClick: d ? l : i,
                              className: null != s ? X.QX : void 0,
                          }),
                      ],
                  }),
                  null != c &&
                      null != t.guild &&
                      (0, o.jsx)(G.Ay, {
                          className: X.QX,
                          children: (0, o.jsx)(lR, { guild: t.guild, onlineCount: t.approximate_presence_count }),
                      }),
              ],
          });
}
function sK(e) {
    let { invite: t, inviteKey: n, rpcConnected: i, onContinue: l } = e;
    return (0, o.jsxs)(G.Ay, {
        children: [
            (0, o.jsx)(im.A, { invite: t }),
            lQ.VP
                ? (0, o.jsxs)(o.Fragment, {
                      children: [
                          (0, o.jsx)("div", {
                              className: X.QX,
                              children: (0, o.jsx)(M.$, {
                                  text: z.intl.string(z.t.UQvCf7),
                                  onClick: function () {
                                      S.default.track(R.HAw.INVITE_CTA_CLICKED, {
                                          action: "open_app",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          i ? A.Ay.openNativeAppModal(n) : A.Ay.openApp(n);
                                  },
                                  variant: "primary",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, o.jsx)("div", {
                              className: X.Ot,
                              children: (0, o.jsx)(M.$, {
                                  text: z.intl.string(z.t["2ixEBi"]),
                                  onClick: function () {
                                      S.default.track(R.HAw.INVITE_CTA_CLICKED, {
                                          action: "continue_in_browser",
                                          invite_code: t.code,
                                          guild_id: t.guild?.id,
                                      }),
                                          l?.();
                                  },
                                  variant: "secondary",
                                  fullWidth: !0,
                              }),
                          }),
                      ],
                  })
                : (0, o.jsx)(G.KE, { className: X.eT }),
        ],
    });
}
function sX(e) {
    let { title: t } = e;
    return (0, o.jsxs)(G.Ay, { children: [(0, o.jsx)(G.hE, { children: t }), (0, o.jsx)(G.CK, {})] });
}
function sq(e) {
    let { banned: t, handleDefaultTransition: n } = e;
    return (0, o.jsxs)(G.Ay, {
        children: [
            (0, o.jsx)(G.hE, { className: V()(X.Ot, X.QB), children: z.intl.string(z.t.kux01N) }),
            (0, o.jsx)(G.tK, { children: t ? z.intl.string(z.t["5AkWAd"]) : z.intl.string(z.t["+qUJAj"]) }),
            (0, o.jsx)(sW, { message: z.intl.string(z.t.fIv16B), onClick: n }),
            (0, o.jsx)("div", {
                className: X.Ot,
                style: { textAlign: "left" },
                children: (0, o.jsx)(eu.Q, {
                    size: "sm",
                    textVariant: "text-sm/medium",
                    text: z.intl.string(z.t.urIwn4),
                    onClick: () => window.open(ng.A.getArticleURL(R.MVz.INVALID_INVITES), "_blank"),
                }),
            }),
        ],
    });
}
function sY(e) {
    let { handleDefaultTransition: t } = e;
    return (0, o.jsxs)(G.Ay, {
        children: [
            (0, o.jsx)(G.hE, { children: z.intl.string(z.t.fOc4gn) }),
            (0, o.jsx)(sW, { message: z.intl.string(z.t.fIv16B), onClick: t }),
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
g.Ay.initialize();
var sJ = n(163050);
g.Ay.initialize();
var s0 = n(701273);
function s1(e) {
    n.g.location.assign(e);
}
g.Ay.initialize(), n(426620), g.Ay.initialize();
let s2 = nK(iq),
    s4 = nK(function (e) {
        let t = c.useCallback(
                (t) => {
                    let n;
                    ((n = (0, s$.B)(t, { path: R.BVt.CHANNEL(na.pv.guildId(), na.pv.channelId()) })),
                    +(n?.params?.channelId !== N.VV.ROLE_SUBSCRIPTIONS))
                        ? (e.transitionTo ?? w.pX)(t)
                        : w.bG(t);
                },
                [e.transitionTo],
            ),
            { isAuthenticated: n, loginStatus: i } = (0, g.cf)([eq.default], () => ({
                isAuthenticated: eq.default.isAuthenticated(),
                loginStatus: eq.default.getLoginStatus(),
            })),
            { location: l, redirectTo: s } = e,
            [r, a] = c.useState(n);
        function u(e) {
            let { handoffKey: t, handoffToken: n, handoffSource: i } = e;
            (0, _.Qh)({ handoffKey: t, handoffToken: n, handoffSource: i }), a(!1);
        }
        return ((0, l1.Ay)(() => {
            if (null != l) {
                let { handoff_key: e, handoff_token: t } = (0, d.parse)(l.search);
                if (null != e && null != t) {
                    let n = null != s ? y(s) : void 0;
                    r
                        ? f.A.logout("handoff", null).finally(() => {
                              u({ handoffKey: e, handoffToken: t, handoffSource: n });
                          })
                        : u({ handoffKey: e, handoffToken: t, handoffSource: n });
                }
            }
        }),
        r || i === R.aUe.LOGGING_IN)
            ? (0, o.jsx)(G.Ay, { children: (0, o.jsx)(eG.y, {}) })
            : (0, o.jsx)(iq, { ...e, transitionTo: t });
    }),
    s6 = nK(function (e) {
        let { inviteKey: t, location: n, transitionTo: i, login: l } = e,
            s = c.useMemo(() => (0, e$.m0)(t), [t]),
            r = (0, g.bG)([te.A], () => te.A.getInvite(t)),
            a = (0, g.bG)([n4.A], () => n4.A.getState(s)),
            d = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            u = (0, g.bG)([eh.A], () => eh.A.defaultRoute),
            h = (0, g.bG)([i1], () => i1.isUnderageAnonymous()),
            m = (function (e) {
                let [t, n] = c.useState(!1),
                    [i, l] = c.useState(!1);
                return (
                    c.useEffect(() => {
                        let e = setTimeout(() => n(!0), 500);
                        return () => clearTimeout(e);
                    }, []),
                    c.useEffect(() => {
                        let e = !1;
                        return (
                            eI().then((t) => {
                                e || "denied" !== t || l(!0);
                            }),
                            () => {
                                e = !0;
                            }
                        );
                    }, []),
                    !i && e !== R.fAW.OPEN_FAIL && !t
                );
            })(a),
            [f, p] = c.useState(!1);
        c.useLayoutEffect(() => {
            (a === R.fAW.OPEN || r?.state === R.elq.APP_OPENED) && p(!0);
        }, [r?.state, a]);
        let E = l ? sF : sM,
            _ = c.useCallback((e) => A.Ay.getInviteContext(e, r), [r]),
            j = c.useCallback(
                (e) => {
                    null != r &&
                        (null != r.channel || e?.channel != null) &&
                        (r.guild?.id != null
                            ? A.Ay.transitionToInviteOnboarding(e ?? r, { transitionTo: i })
                            : A.Ay.transitionToInvite(e ?? r, { transitionTo: i }));
                },
                [r, i],
            ),
            v = c.useCallback(() => {
                S.default.track(R.HAw.INVITE_CTA_CLICKED, {
                    action: "accept_invite",
                    invite_code: r?.code,
                    guild_id: r?.guild?.id,
                }),
                    A.Ay.acceptInvite({
                        inviteKey: t,
                        context: _(R.S3d.INVITE),
                        skipOnboarding: !0,
                        callback: (e) => {
                            el(e), null != e.channel && A.Ay.openApp(t, e.channel.id);
                        },
                    }).catch(() => {});
            }, [t, _, r?.code, r?.guild?.id]),
            N = c.useCallback(() => {
                i(u);
            }, [u, i]);
        if (
            ((0, l1.Ay)(() => {
                let e = eq.default.getAnalyticsToken();
                if (
                    (null != e &&
                        x.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eq.default.getId() }),
                    S.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 }),
                    (0, D.d0)("invite"),
                    lQ.VP || eY.A.launch("discord://" + R.BVt.INVITE(t), () => void 0),
                    !l && h)
                ) {
                    let { baseCode: e } = (0, e$.y$)(t);
                    (0, w.bG)(R.BVt.INVITE_LOGIN(e));
                }
            }),
            c.useEffect(() => {
                r?.state === R.elq.APP_NOT_OPENED && j();
            }, [r?.state, j]),
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
                    d = (0, ic.A)(i),
                    u = (0, ic.A)(l);
                c.useEffect(() => {
                    if (s === sF && i && !1 === d) {
                        let e = eq.default.getFingerprint();
                        if (null != e) {
                            let i = (0, eX.d)(e);
                            S.default.track(R.HAw.INVITE_LOGIN_SUCCESSFUL, {
                                invite_code: (0, e$.m0)(n),
                                guild_id: t?.guild?.id,
                                channel_id: t?.channel?.id,
                                inviter_id: t?.inviter?.id,
                                prev_user_id: i,
                            });
                        }
                        A.Ay.acceptInvite({
                            inviteKey: n,
                            context: r(R.S3d.INVITE),
                            skipOnboarding: !0,
                            callback: a,
                        }).catch(() => {});
                    }
                }, [i, d, s, r, a, t, n]),
                    c.useEffect(() => {
                        if (null != t && s === sM && i && !1 === d) {
                            let { channel: e } = t;
                            if (null != e)
                                if (((0, lG.C)(lD.zY.INVITE_UNCLAIMED), null != t.guild)) {
                                    let e = (0, lZ.Lt)(t.flags ?? 0, l$.Q.IS_APPLICATION_BYPASS),
                                        n =
                                            t.guild.features?.includes(
                                                R.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED,
                                            ) &&
                                            t.guild.features?.includes(
                                                R.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL,
                                            );
                                    !e && n
                                        ? o(R.BVt.GUILD_MEMBER_VERIFICATION(t.guild.id))
                                        : A.Ay.transitionToInviteOnboarding(t, { transitionTo: o });
                                } else A.Ay.transitionToInvite(t, { transitionTo: o });
                        }
                    }, [t, i, d, o, s, n]),
                    c.useEffect(() => {
                        null == t ||
                            (l !== u &&
                                (l === R.fAW.OPEN
                                    ? S.default.track(
                                          R.HAw.INVITE_APP_INVOKED,
                                          {
                                              invite_code: (0, e$.m0)(n),
                                              guild_id: t.guild?.id,
                                              channel_id: t.channel?.id,
                                              inviter_id: t.inviter?.id,
                                              user_is_member: null != t.guild && null != e9.A.getGuild(t.guild.id),
                                              size_total: t.approximate_member_count,
                                              invite_type: null != t.type ? to.Xd[t.type] : void 0,
                                          },
                                          { flush: !0 },
                                      )
                                    : l === R.fAW.OPEN_FAIL &&
                                      S.default.track(R.HAw.INVITE_APP_INVOKE_FAILED, {
                                          invite_code: (0, e$.m0)(n),
                                          reason: "rpc_failed",
                                          invite_type: null != t.type ? to.Xd[t.type] : void 0,
                                      })));
                    }, [t, l, u, n]);
            })({
                invite: r,
                inviteKey: t,
                authenticated: d,
                nativeAppState: a,
                mode: E,
                getAcceptInviteContext: _,
                handleContinue: j,
                transitionTo: i,
            }),
            null == r)
        )
            return null;
        let I = a === R.fAW.OPEN;
        if (f || I || r.state === R.elq.APP_OPENED)
            return (0, o.jsx)(sK, { invite: r, inviteKey: t, rpcConnected: I, onContinue: j });
        let { state: C } = r;
        if (C === R.elq.APP_NOT_OPENED) return (0, o.jsx)(sY, { handleDefaultTransition: N });
        if ([R.elq.RESOLVING, R.elq.ACCEPTING, R.elq.APP_OPENING].includes(C)) {
            let e =
                C === R.elq.ACCEPTING ? z.intl.string(z.t["6wsY16"]) : (R.elq.RESOLVING, z.intl.string(z.t["Z+hCVU"]));
            return (0, o.jsx)(sX, { title: e });
        }
        if (C === R.elq.EXPIRED) return (0, o.jsx)(sq, { banned: !1, handleDefaultTransition: N });
        if (C === R.elq.BANNED) return (0, o.jsx)(sq, { banned: !0, handleDefaultTransition: N });
        if (C === R.elq.RESOLVED) {
            if (d && (0, lZ.Lt)(r.flags ?? 0, l$.Q.IS_GUEST_INVITE))
                return (
                    A.Ay.openApp(t),
                    lJ.u.set(sU.B, t),
                    (0, o.jsx)(sK, { invite: r, inviteKey: t, rpcConnected: I, onContinue: () => i(R.BVt.APP) })
                );
            if (null != r.type && to.uR.has(r.type) && m)
                return (0, o.jsx)(sX, { title: z.intl.string(z.t["Z+hCVU"]) });
            if (!d && lQ.VP)
                return E === sF
                    ? (0, o.jsx)(sH, { invite: r, transitionTo: i, location: n })
                    : (0, o.jsx)(sQ, {
                          invite: r,
                          onLoginStart: function () {
                              S.default.track(R.HAw.INVITE_LOGIN, {
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
        return C === R.elq.RESOLVED || C === R.elq.ERROR
            ? (0, o.jsx)(sz, { invite: r, inviteKey: t, handleAccept: v, handleDefaultTransition: N })
            : null;
    }),
    s8 = nK(function (e) {
        let t = {
            guildTemplate: (0, g.bG)([eb.A], () => eb.A.getGuildTemplate(e.code)),
            nativeAppState: (0, g.bG)([n4.A], () => n4.A.getState(e.code)),
            authenticated: (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            defaultRoute: (0, g.bG)([eh.A], () => eh.A.defaultRoute),
        };
        return (0, o.jsx)(lK, { ...e, ...t });
    }),
    s3 = nK(lV),
    s7 = nK(function (e) {
        let { inviteKey: t, transitionTo: n } = e,
            i = (0, g.bG)([te.A], () => te.A.getInvite(t));
        return (
            c.useEffect(() => {
                let e = eq.default.getAnalyticsToken();
                null != e &&
                    x.h.dispatch({ type: "SET_ANALYTICS_TOKEN", analyticsToken: e, userId: eq.default.getId() }),
                    (0, D.d0)("invite_mobile"),
                    S.default.track(R.HAw.INVITE_VIEWED, { invite_code: t }, { flush: !0 });
            }, []),
            (0, o.jsx)(t9, {
                invite: i,
                onAcceptInvite: function (e) {
                    let n, l, s, r;
                    e?.preventDefault(),
                        S.default.track(
                            R.HAw.INVITE_APP_OPENED,
                            {
                                invite_code: (0, e$.m0)(t),
                                guild_id: i?.guild?.id,
                                channel_id: i?.channel?.id,
                                inviter_id: i?.inviter?.id,
                                invite_type: null != i && i?.type != null ? to.Xd[i?.type] : void 0,
                                user_is_member: null != i && null != i.guild && null != e9.A.getGuild(i.guild.id),
                                size_total: i?.approximate_member_count,
                                time_to_click_ms: Math.round(performance.now()),
                            },
                            { flush: !0 },
                        ),
                        (n = null != i && i.state !== R.elq.EXPIRED && i.state !== R.elq.BANNED ? t : void 0),
                        (s = null != (l = eq.default.getFingerprint()) ? l : eq.default.getId()),
                        (r = null != i && i?.type != null ? Number(i?.type) : void 0),
                        A.Ay.openApp(n, void 0, s, void 0, r);
                },
                transitionTo: n,
            })
        );
    }),
    s5 = nK(lP),
    s9 = nK(function (e) {
        let { location: t, transitionTo: i = w.pX } = e,
            [l, s] = c.useState("submitting");
        function r() {
            return "Android" === eQ().os.family || "iOS" === eQ().os.family
                ? null
                : (0, o.jsx)(M.$, {
                      text: z.intl.string(z.t.dKhVQN),
                      fullWidth: !0,
                      onClick: () => i(R.BVt.LOGIN, { source: "authorizeIPAdress" }),
                  });
        }
        return ((0, l1.Ay)(() => {
            (0, D.d0)("authorize_ip");
            let e = (0, eg.A)(t);
            null == e
                ? s("failed")
                : (async () => {
                      try {
                          await f.A.authorizeIPAddress(e), s("succeeded");
                      } catch (e) {
                          s("failed");
                      }
                  })();
        }),
        "failed" === l)
            ? (0, o.jsxs)(G.Ay, {
                  children: [
                      (0, o.jsx)("img", { alt: "", src: n(792009), className: X.SX }),
                      (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t["f/54az"]) }),
                      (0, o.jsx)(G.tK, { className: X.C2, children: z.intl.string(z.t.i3ehMr) }),
                      r(),
                  ],
              })
            : "succeeded" === l
              ? (0, o.jsxs)(G.Ay, {
                    children: [
                        (0, o.jsx)("img", { alt: "", src: n(841406), className: X.SX }),
                        (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.iG0SlK) }),
                        (0, o.jsx)(G.tK, { className: X.C2, children: z.intl.string(z.t["Elv+qt"]) }),
                        r(),
                    ],
                })
              : (0, o.jsxs)(G.Ay, {
                    children: [(0, o.jsx)(G.CK, {}), (0, o.jsx)(G.hE, { children: z.intl.string(z.t["9exy+V"]) })],
                });
    }),
    re = nK(function (e) {
        let { location: t } = e,
            [i, l] = c.useState("submitting");
        return (c.useEffect(() => {
            (0, D.d0)("authorize_payment");
            let e = (0, eg.A)(t);
            null == e
                ? l("failed")
                : (async () => {
                      try {
                          await f.A.authorizePayment(e), l("succeeded");
                      } catch (e) {
                          l("failed");
                      }
                  })();
        }, [t]),
        "failed" === i)
            ? (0, o.jsxs)(G.Ay, {
                  children: [
                      (0, o.jsx)("img", { alt: "", src: n(678985), className: X.SX }),
                      (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.GHRpue) }),
                      (0, o.jsx)(G.tK, { className: X.C2, children: z.intl.string(z.t["1nO55v"]) }),
                  ],
              })
            : "succeeded" === i
              ? (0, o.jsxs)(G.Ay, {
                    children: [
                        (0, o.jsx)("img", { alt: "", src: n(586430), className: X.SX }),
                        (0, o.jsx)(G.hE, { className: X.QB, children: z.intl.string(z.t.ihHX53) }),
                        (0, o.jsx)(G.tK, { className: X.C2, children: z.intl.string(z.t["pGPCv+"]) }),
                    ],
                })
              : (0, o.jsxs)(G.Ay, {
                    children: [(0, o.jsx)(G.CK, {}), (0, o.jsx)(G.hE, { children: z.intl.string(z.t.T3vC7n) })],
                });
    }),
    rt = nK(function (e) {
        let { location: t, transitionTo: n = s1 } = e,
            [i, l] = c.useState("submitting"),
            s = c.useRef(void 0);
        (0, l1.Ay)(() => {
            (0, D.d0)("verify_email");
            let e = (0, eg.A)(t);
            null == e
                ? l("failed")
                : (async () => {
                      try {
                          let t = await f.A.verify(e);
                          l("succeeded"), (s.current = t);
                      } catch (e) {
                          l("failed");
                      }
                  })();
        });
        let r = c.useCallback(() => {
                n(R.BVt.LOGIN, { source: "verify_email" });
            }, [n]),
            a = c.useCallback(() => {
                S.default.track(R.HAw.VERIFY_ACCOUNT_APP_OPENED, { verifying_user_id: s.current }),
                    (0, s0.A)("verify_email");
            }, []);
        return "failed" === i
            ? (0, o.jsx)(eD, {
                  title: z.intl.string(z.t["PCgG3+"]),
                  subtitle: z.intl.string(z.t.tQpeA3),
                  buttonText: z.intl.string(z.t.dKhVQN),
                  onButtonClick: r,
              })
            : "succeeded" === i
              ? (0, o.jsx)(eD, {
                    title: z.intl.string(z.t["dAfGb+"]),
                    buttonText: z.intl.string(z.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, o.jsx)(eR, { alt: z.intl.string(z.t["dAfGb+"]) }),
                })
              : (0, o.jsx)(eD, {
                    title: z.intl.string(z.t["0c8+5n"]),
                    subtitle: z.intl.string(z.t.ULTCBE),
                    loading: !0,
                });
    }),
    rn = nK(function () {
        let [e, t] = c.useState(""),
            [i, l] = c.useState(""),
            [s, r] = c.useState(!1),
            [a, d] = c.useState(!1),
            [u, h] = c.useState(null),
            [m, x] = c.useState(null),
            f = (0, g.bG)([e_.A], () => e_.A.getCountryCode()),
            p = f.code.split(" ")[0];
        async function A() {
            try {
                await eA.A.resendCode(e);
            } catch (e) {
                x(e.body.message);
            }
        }
        async function E() {
            r(!0);
            try {
                let { token: t } = await eA.A.verifyPhone(p + e, i);
                h(null), x(null), d(!0), eA.A.validatePhoneForSupport(t);
            } catch (e) {
                e.body.message ? (h(null), x(e.body.message)) : (h(e.body.phone), x(e.body.code));
            } finally {
                r(!1);
            }
        }
        let _ = (0, o.jsxs)(G.Ay, {
            children: [
                (0, o.jsx)(G._V, { src: n(142041) }),
                (0, o.jsxs)(G.hE, {
                    className: V()(X.QX, ev.Uu, ev.wq, ev.Hu),
                    children: [
                        z.intl.string(z.t.WWzQta),
                        (0, o.jsx)(ep.y, { size: "md", color: "currentColor", className: X.oY }),
                    ],
                }),
            ],
        });
        return a
            ? _
            : (0, o.jsxs)(G.Ay, {
                  children: [
                      (0, o.jsx)(G.hE, { children: z.intl.string(z.t.o4JNrO) }),
                      (0, o.jsx)(G.tK, { className: X.Ot, children: z.intl.string(z.t.y0tVbq) }),
                      (0, o.jsxs)(G.eB, {
                          className: X.QX,
                          children: [
                              (0, o.jsx)(ej.A, {
                                  label: z.intl.string(z.t["eJnn0+"]),
                                  alpha2: f.alpha2,
                                  countryCode: p,
                                  value: e,
                                  autoComplete: "off",
                                  spellCheck: "false",
                                  onChange: t,
                                  forceMode: eE.Pd.PHONE,
                                  error: u,
                              }),
                              (0, o.jsx)(G.pd, {
                                  className: X.QX,
                                  label: z.intl.string(z.t.OdzNbm),
                                  value: i,
                                  onChange: l,
                                  maxLength: 6,
                                  error: m,
                              }),
                              (0, o.jsx)(eu.Q, { text: z.intl.string(z.t["5b60gi"]), onClick: A }),
                              (0, o.jsx)("div", {
                                  className: X.QX,
                                  children: (0, o.jsx)(M.$, {
                                      text: z.intl.string(z.t.i4jeWR),
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
    ri = nK(sJ.A),
    rl = nK(n1),
    rs = nK(ef),
    rr = nK(function (e) {
        let { location: t } = e,
            [n, i] = c.useState(!1),
            { verifySuccess: l, verifyErrors: s, redirectGuildId: r } = (0, g.bG)([eM], () => eM.getState());
        function a() {
            let e, t;
            (e = (function (e) {
                let t = eQ().os?.family;
                if ("Android" === t || "iOS" === t) {
                    let t = eq.default.getFingerprint(),
                        n = (0, eK.I_)();
                    return (
                        eW()(null != e, "generateAppPath: guildId cannot be null"),
                        (0, eK.Ay)((0, ez.jN)(e), { utmSource: "verify_hub_email", fingerprint: t, attemptId: n })
                    );
                }
                return "discord://";
            })(r)),
                null != (t = (0, eK.X7)(e)) &&
                    S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                        fingerprint: (0, eX.v)(t.fingerprint),
                        attempt_id: t.attemptId,
                        source: t.utmSource,
                    }),
                eY.A.launch(e, (e) => {
                    e || (0, w.bG)(eh.A.fallbackRoute);
                }),
                i(!0);
        }
        return (c.useEffect(() => {
            let e = (0, eg.A)(t);
            eL.A.verify(e), (0, D.d0)("verify_hub_email");
        }, [t]),
        n)
            ? (0, o.jsx)(eD, {
                  title: z.intl.string(z.t.csrAMJ),
                  subtitle: z.intl.string(z.t["m1+IBn"]),
                  buttonText: z.intl.string(z.t.fIv16B),
                  onButtonClick: () => (0, w.pX)(R.BVt.CHANNEL(r)),
              })
            : l
              ? (0, o.jsx)(eD, {
                    title: z.intl.string(z.t["dAfGb+"]),
                    buttonText: z.intl.string(z.t["uJWIj/"]),
                    onButtonClick: a,
                    image: (0, o.jsx)(eR, { alt: z.intl.string(z.t["dAfGb+"]) }),
                })
              : null != s
                ? (0, o.jsx)(eD, {
                      title: z.intl.string(z.t["PCgG3+"]),
                      subtitle: z.intl.string(z.t.tQpeA3),
                      buttonText: z.intl.string(z.t["uJWIj/"]),
                      onButtonClick: a,
                  })
                : (0, o.jsx)(eD, {
                      title: z.intl.string(z.t["0c8+5n"]),
                      subtitle: z.intl.string(z.t.ULTCBE),
                      loading: !0,
                  });
    }),
    ra = nK(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, nq.W)(ns.XK.CHANNEL, {
                guildId: e.params.guildId,
                channelId: e.params.channelId,
                messageId: e.params.messageId,
                search: t.search,
            });
        }
        return (0, o.jsx)(nZ, { match: t, location: n, attemptDeepLink: i });
    }),
    ro = nK(function (e) {
        let { match: t, location: n } = e;
        async function i(e) {
            await (0, nq.W)(ns.XK.GAME_SHOP, {
                guildId: e.params.guildId,
                pageIndex: e.params.pageIndex,
                skuId: e.params.skuId,
                slug: e.params.slug,
            });
        }
        return (0, o.jsx)(nZ, { match: t, location: n, attemptDeepLink: i });
    }),
    rc = nK(function (e) {
        let { match: t, location: n } = e;
        async function i(e, t) {
            await (0, nq.W)(ns.XK.PICK_GUILD_SETTINGS, {
                section: e.params.section,
                subsection: e.params.subsection,
                search: t.search,
            });
        }
        return (0, o.jsx)(nZ, { match: t, location: n, attemptDeepLink: i });
    }),
    rd = nK(function (e) {
        let { location: t } = e,
            n = (0, g.bG)([eq.default], () => eq.default.isAuthenticated()),
            i = (0, g.bG)([eC.A], () => eC.A.hasLoadedExperiments),
            l = sZ.useExperiment({ location: "RSL - Landing Page" }, { autoTrackExposure: !0 }).enabled,
            [s, r] = c.useState(!1),
            [a, d] = c.useState(z.intl.string(z.t["9exy+V"])),
            [u, h] = c.useState(!0);
        function m(e) {
            switch (e) {
                case R.t02.INVALID_FORM_BODY:
                case R.t02.DSA_RSL_REPORT_NOT_FOUND:
                    d(z.intl.string(z.t.bzXDfc));
                    break;
                case R.t02.DSA_RSL_ALREADY_REQUESTED:
                    d(z.intl.string(z.t.rV00wq));
                    break;
                case R.t02.DSA_RSL_LIMITED_TIME:
                    d(z.intl.string(z.t["0dI29h"]));
                    break;
                case R.t02.DSA_RSL_REPORT_INELIGIBLE:
                    d(z.intl.string(z.t["RGa/Gb"]));
                    break;
                default:
                    d(z.intl.string(z.t["0QLzfv"]));
            }
        }
        return (
            c.useEffect(() => {
                n
                    ? (h(!0),
                      nu
                          .rQ({ withAnalyticsToken: !0 })
                          .then(() => h(!1))
                          .catch(() => h(!1)))
                    : h(!1);
            }, [n]),
            c.useEffect(() => {
                i || l || f.A.getExperiments();
            }, [i, l]),
            c.useEffect(() => {
                async function e(e) {
                    try {
                        let t = null != e ? await (0, nm.q)(e) : void 0;
                        null != t ? d(z.intl.string(z.t.e6mZMt)) : m(t.body?.code);
                    } catch (e) {
                        m(e.body?.code);
                    } finally {
                        r(!1);
                    }
                }
                r(!0), e((0, eg.A)(t)), (0, D.d0)("report_second_look");
            }, [t]),
            l &&
                !u &&
                (0, o.jsxs)(G.Ay, {
                    children: [(0, o.jsx)(G.hE, { className: X.QB, children: a }), s && (0, o.jsx)(eG.y, {})],
                })
        );
    }),
    ru = nK(en),
    rh = nK(function (e) {
        let { match: t, location: i } = e,
            l = (0, d.parse)(i.search).token,
            [s, r] = c.useState("loading"),
            a = c.useRef(!1),
            u = c.useCallback(async (e) => {
                try {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_ATTEMPTED, { source: "web_page" }),
                        await f.A.oneTimeLogin(e),
                        r("login_success"),
                        S.default.track(R.HAw.LOGIN_SUCCESSFUL, { source: "web_page", login_method: "one_time_login" }),
                        n.g.location.assign(R.BVt.APP);
                } catch (t) {
                    let e = t instanceof Error ? t.message : "Unknown error";
                    S.default.track(R.HAw.ONE_TIME_LOGIN_ERROR, {
                        source: "web_page",
                        error_reason: "api_error",
                        error_message: e,
                    }),
                        r("error");
                }
            }, []),
            m = c.useCallback((e) => {
                let t = eq.default.getFingerprint() ?? eq.default.getId(),
                    n = `discord://login/one-time?token=${encodeURIComponent(e)}`;
                eY.A.launch(n, (e) => {
                    e
                        ? (S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                              source: "web_page",
                              destination: "discord://login/one-time",
                              deep_link_provider: "protocol",
                              fingerprint: t,
                          }),
                          r("app_launched"))
                        : r("app_launch_not_supported");
                });
            }, []),
            g = c.useCallback(
                (e) => {
                    let t = eq.default.getFingerprint() ?? eq.default.getId(),
                        i = eq.default.getInstallationForTracking();
                    Promise.resolve()
                        .then(n.bind(n, 129014))
                        .then((n) => {
                            let { default: l } = n;
                            l.request(R.e$_.DEEP_LINK, {
                                type: ns.XK.ONE_TIME_LOGIN,
                                params: { token: e, fingerprint: t, installationId: i },
                            })
                                .then((n) => {
                                    n
                                        ? (S.default.track(R.HAw.DEEP_LINK_CLICKED, {
                                              source: "web_page",
                                              destination: "one_time_login_modal",
                                              deep_link_provider: "rpc",
                                              fingerprint: t,
                                          }),
                                          r("app_launched"))
                                        : m(e);
                                })
                                .catch(() => {
                                    m(e);
                                })
                                .then(() => l.disconnect());
                        });
                },
                [m],
            );
        if (
            (c.useEffect(() => {
                let e = null != l && "string" == typeof l,
                    t = h.Fr ? "mobile" : h.v1 ? "tablet" : (0, ne.isDesktop)() ? "desktop_app" : "web";
                if ((S.default.track(R.HAw.ONE_TIME_LOGIN_PAGE_VIEWED, { has_token: e, device_type: t }), !e))
                    return void r("error");
                if (h.Fr || h.v1) {
                    let e = S.default.getSuperProperties()?.os;
                    S.default.track(R.HAw.ONE_TIME_LOGIN_APP_DETECTION_ATTEMPTED, {
                        detection_type: "mobile_ui_shown",
                        device_type: t,
                        platform: e,
                    });
                    return;
                }
                (0, ne.isDesktop)() ? u(l) : a.current || ((a.current = !0), r("rpc_attempting"), g(l));
            }, [l, i, u, g]),
            h.Fr || h.v1)
        ) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, o.jsx)(nl, { token: l, hasError: "error" === s, errorReason: e });
        }
        if ((0, w.MX)()) return null;
        if ("app_launched" === s)
            return (0, o.jsx)(nr, {
                title: z.intl.string(z.t.RvUUOy),
                subtitle: z.intl.string(z.t["5/lR0g"]),
                buttonText: z.intl.string(z.t["2ixEBi"]),
                buttonOnClick: () => {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_CONTINUE_IN_BROWSER_CLICKED, { previous_status: s }), u(l);
                },
            });
        if ("app_launch_not_supported" === s)
            return (0, o.jsx)(nr, {
                title: z.intl.string(z.t.qq4tjT),
                subtitle: z.intl.string(z.t.CVxYRo),
                buttonText: z.intl.string(z.t["2ixEBi"]),
                buttonOnClick: () => u(l),
            });
        if ("error" === s) {
            let e = null == l || "string" != typeof l ? "missing_token" : "invalid_token";
            return (0, o.jsx)(nr, {
                title: z.intl.string(z.t.RtCSr1),
                subtitle: z.intl.string(z.t["S+YjYJ"]),
                buttonText: z.intl.string(z.t.j3cG2p),
                buttonOnClick: () => {
                    S.default.track(R.HAw.ONE_TIME_LOGIN_BACK_TO_LOGIN_CLICKED, { error_reason: e }),
                        (0, w.pX)(R.BVt.LOGIN);
                },
            });
        }
        return (0, o.jsx)(G.Ay, { children: (0, o.jsx)(G.CK, {}) });
    });
class rm extends c.PureComponent {
    state = { splash: null, redirectTo: null, backgroundId: null };
    hasTriggeredInviteResolve = !1;
    experimentFallbackTimeout = null;
    static getDerivedStateFromProps(e, t) {
        let { invite: n, location: i } = e,
            { backgroundId: l } = t,
            s = (0, d.parse)(i.search).redirect_to ?? null;
        (null == s || "" === s || s.startsWith(R.BVt.ME) || (!(0, m.e)(s) && !ec(s))) && (s = null);
        let r = null;
        if (null == n) r = (0, nw.u8)(s);
        else {
            let { guild: e, target_application: t } = n;
            null != t
                ? null != l && (r = (0, nG.uD)(t.id, l, 1024))
                : null != e &&
                  "string" == typeof e.splash &&
                  (r = tt.Ay.getGuildSplashURL({ id: e.id, splash: e.splash }));
        }
        return { redirectTo: s, splash: r };
    }
    componentDidMount() {
        let { inviteKey: e, hasLoadedExperiments: t, isAuthenticated: n } = this.props;
        null != e &&
            (!t && n && f.A.getExperiments(!0),
            null != eq.default.getInstallationForTracking() && (0, ey.Tv)(null),
            S.default.track(
                R.HAw.INVITE_OPENED,
                { invite_code: (0, e$.m0)(e), load_time: nP.getTimeSinceNavigationStart() },
                { flush: !0 },
            )),
            t
                ? this.maybeResolveInvite()
                : null != e && (this.experimentFallbackTimeout = setTimeout(this.maybeResolveInvite, 2e3)),
            this.resolveGiftCode(),
            this.resolveGuildTemplate(),
            k.initialize(),
            (0, D.DC)();
    }
    componentDidUpdate(e) {
        !e.hasLoadedExperiments && this.props.hasLoadedExperiments && this.maybeResolveInvite(),
            e.invite?.state !== this.props.invite?.state && this.maybeFetchApplicationSplash();
    }
    componentWillUnmount() {
        null != this.experimentFallbackTimeout &&
            (clearTimeout(this.experimentFallbackTimeout), (this.experimentFallbackTimeout = null)),
            k.terminate();
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
        if (e?.state === R.elq.RESOLVED) {
            let { target_application: t } = e;
            null != t &&
                (0, nG.RG)(t.id, ["embedded_splash"]).then((e) => {
                    let [t] = e;
                    return this.setState({ backgroundId: t });
                });
        }
    }
    async resolveInvite() {
        let { inviteKey: e } = this.props;
        if (null == e) return;
        let { invite: t } = await A.Ay.resolveInvite(e, R.S3d.INVITE, { withGames: !0 });
        if (null != t && (el(t), null != t.type && to.uR.has(t.type))) {
            if ("denied" === (await eI()))
                return void S.default.track(R.HAw.INVITE_APP_INVOKE_FAILED, {
                    invite_code: (0, e$.m0)(e),
                    reason: "lna_denied",
                    invite_type: to.Xd[t.type],
                });
            A.Ay.openNativeAppModal(e);
        }
    }
    resolveGuildTemplate() {
        let { guildTemplateCode: e } = this.props;
        null != e &&
            (S.default.track(
                R.HAw.GUILD_TEMPLATE_OPENED,
                { guild_template_code: e, load_time: nP.getTimeSinceNavigationStart() },
                { flush: !0 },
            ),
            eS.A.resolveGuildTemplate(e),
            eS.A.openNativeAppModal(e));
    }
    resolveGiftCode() {
        let { giftCode: e } = this.props;
        null != e &&
            p.A.resolveGiftCode(e, !0, !0).then((t) => {
                null != t && null == t.giftCode.promotion && x.h.wait(() => p.A.openNativeGiftCodeModal(e));
            });
    }
    render() {
        let { splash: e, redirectTo: t } = this.state,
            { inviteKey: n } = this.props;
        return (0, o.jsxs)(nX.A, {
            splash: e,
            children: [
                (0, o.jsx)(ei.A, { path: R.BVt.LOGIN_HANDOFF, render: (e) => (0, o.jsx)(s4, { ...e, redirectTo: t }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.LOGIN_ONE_TIME, render: (e) => (0, o.jsx)(rh, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    impressionName: u.ImpressionNames.USER_LOGIN,
                    path: R.BVt.LOGIN,
                    render: (e) => (0, o.jsx)(s2, { ...e, redirectTo: t }),
                }),
                (0, o.jsx)(ei.A, {
                    impressionName: u.ImpressionNames.USER_REGISTRATION,
                    path: R.BVt.REGISTER,
                    render: (e) => (0, o.jsx)(s5, { ...e, redirectTo: t }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.GIFT_CODE_LOGIN(":giftCode"),
                    render: (e) => (0, o.jsx)(s3, { login: !0, ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.GIFT_CODE(":giftCode"), render: (e) => (0, o.jsx)(s3, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: [R.BVt.INVITE_LOGIN(":inviteCode"), R.BVt.INVITE(":inviteCode")],
                    render: (e) => {
                        let {
                                match: {
                                    params: { inviteCode: t },
                                    path: n,
                                },
                                location: i,
                                transitionTo: l,
                            } = e,
                            s = (0, e$.fB)(t, i.search);
                        return h.Fr || h.v1
                            ? (0, o.jsx)(s7, { inviteKey: s, transitionTo: l }, s)
                            : (0, o.jsx)(
                                  s6,
                                  {
                                      inviteKey: s,
                                      location: i,
                                      transitionTo: l,
                                      login: n === R.BVt.INVITE_LOGIN(":inviteCode"),
                                  },
                                  s,
                              );
                    },
                }),
                (0, o.jsx)(ei.A, {
                    path: [
                        R.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                        R.BVt.GUILD_TEMPLATE(":guildTemplateCode"),
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
                        return h.Fr || h.v1
                            ? (0, o.jsx)(lY, { code: t }, t)
                            : (0, o.jsx)(s8, {
                                  code: t,
                                  location: i,
                                  transitionTo: l,
                                  login: n === R.BVt.GUILD_TEMPLATE_LOGIN(":guildTemplateCode"),
                              });
                    },
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY, render: (e) => (0, o.jsx)(rt, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY_HUB_EMAIL, render: (e) => (0, o.jsx)(rr, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.VERIFY_REQUEST, render: (e) => (0, o.jsx)(rn, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.DISABLE_EMAIL_NOTIFICATIONS, render: (e) => (0, o.jsx)(rl, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                    render: (e) => (0, o.jsx)(rs, { ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.AUTHORIZE_IP, render: (e) => (0, o.jsx)(s9, { ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.REJECT_IP,
                    render: (e) => (0, o.jsx)(ri, { source: R.BVt.REJECT_IP, ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.REJECT_MFA,
                    render: (e) => (0, o.jsx)(ri, { source: R.BVt.REJECT_MFA, ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.AUTHORIZE_PAYMENT, render: (e) => (0, o.jsx)(re, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.RESET, render: (e) => (0, o.jsx)(ri, { source: R.BVt.RESET, ...e }) }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
                    render: (e) => (0, o.jsx)(rc, { ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.CHANNELS_GAME_SHOP(na.pv.guildId(), ":pageIndex", ":skuId", ":slug?"),
                    render: (e) => (0, o.jsx)(ro, { ...e }),
                }),
                (0, o.jsx)(ei.A, {
                    path: R.BVt.CHANNEL(na.pv.guildId(), na.pv.channelId({ optional: !0 }), ":messageId?"),
                    render: (e) => (0, o.jsx)(ra, { ...e }),
                }),
                (0, o.jsx)(ei.A, { path: R.BVt.REPORT, render: () => (0, o.jsx)(nO, {}) }),
                (0, o.jsx)(ei.A, { path: R.BVt.REPORT_SECOND_LOOK, render: (e) => (0, o.jsx)(rd, { ...e }) }),
                (0, o.jsx)(ei.A, { path: R.BVt.ACCOUNT_REVERT(":token"), render: (e) => (0, o.jsx)(ru, { ...e }) }),
            ],
        });
    }
}
let rg = g.Ay.connectStores([eq.default, te.A, nk.A, eC.A, eb.A], (e) => {
    let { match: t, location: n } = e,
        i = t?.params?.inviteCode,
        l = null != i ? (0, e$.fB)(i, n.search) : void 0,
        s = t?.params?.giftCode,
        r = t?.params?.guildTemplateCode;
    return {
        inviteKey: l,
        isAuthenticated: eq.default.isAuthenticated(),
        giftCode: s,
        guildTemplateCode: r,
        gift: null != s ? nk.A.get(s) : null,
        invite: null != l ? te.A.getInvite(l) : null,
        guildTemplate: null != r ? eb.A.getGuildTemplate(r) : null,
        hasLoadedExperiments: eC.A.hasLoadedExperiments,
    };
})(rm);
