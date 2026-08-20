n.d(t, { default: () => eI });
var i,
    l = n(477900),
    s = n(582128),
    r = n(224640),
    a = n(314116),
    o = n(815021),
    u = n(192308),
    d = n(689175),
    c = n(915089),
    f = n(60175),
    m = n(890620),
    x = n(17928),
    h = n(555337),
    g = n(306846),
    j = n(894222),
    v = n(71393),
    p = n(149790),
    C = n(408213),
    N = n(513461),
    A = n(709977),
    I = n(375708),
    b =
        (((i = {})[(i.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (i[(i.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (i[(i.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        i),
    E = n(602853),
    F = n(661531),
    M = n(297264),
    R = n(834730),
    y = n(95477),
    S = n(123292),
    O = n(289873),
    _ = n(821609),
    T = n(866665),
    G = n(685094),
    P = n(830215),
    L = n(631670),
    w = n(775602),
    D = n(654107),
    U = n(90084),
    k = n(42780),
    V = n(764548),
    H = n(280450),
    Y = n(498642),
    z = n(696451),
    $ = n(287809),
    X = n(174459),
    q = n(486020);
n(321073);
let K = [
    { position: 0, alpha: 0 },
    { position: 0.19, alpha: 0.262 },
    { position: 0.34, alpha: 0.459 },
    { position: 0.47, alpha: 0.618 },
    { position: 0.57, alpha: 0.722 },
    { position: 0.65, alpha: 0.806 },
    { position: 0.73, alpha: 0.874 },
    { position: 0.8, alpha: 0.925 },
    { position: 0.86, alpha: 0.958 },
    { position: 0.91, alpha: 0.979 },
    { position: 0.95, alpha: 0.992 },
    { position: 0.98, alpha: 0.998 },
    { position: 1, alpha: 1 },
];
function W(e) {
    let { className: t, children: n, containerRef: i, faderSize: r, faderEdgeThreshold: a } = e,
        o = s.useRef(null),
        [u, c] = s.useState(0),
        [f, m] = s.useState(0),
        [x, h] = s.useState(0),
        g = s.useCallback(() => {
            null != o.current &&
                (c(o.current.getDistanceFromTop()),
                m(o.current.getDistanceFromBottom()),
                h(o.current.getScrollerState().offsetHeight));
        }, []);
    s.useEffect(() => {
        if ((g(), null == i.current)) return;
        let e = new ResizeObserver(() => {
            g();
        });
        return (
            e.observe(i.current),
            () => {
                e.disconnect();
            }
        );
    }, [o, i, g]);
    let j = s.useMemo(() => {
        if (0 === u && 0 === f) return {};
        let e = [];
        if ((e.push("to bottom"), u > 0)) {
            let t = a > 0 ? 1 - Math.min(a, u) / a : 1;
            for (let n = 0; n < K.length; n++) {
                let { position: i, alpha: l } = K[n],
                    s = (i * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + l * (1 - t)}) ${s}px`);
            }
        }
        if (f > 0) {
            let t = x - r,
                n = a > 0 ? 1 - Math.min(a, f) / a : 1;
            for (let i = K.length - 1; i >= 0; i--) {
                let { position: l, alpha: s } = K[i],
                    a = (t + (1 - l) * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${n + s * (1 - n)}) ${a}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [f, u, a, r, x]);
    return (0, l.jsx)(d.zC, { ref: o, style: j, className: t, onScroll: g, children: n });
}
var B = n(652215);
function Q(e) {
    let { guildId: t } = e;
    return (0, x.bG)([f.A, v.A], () => {
        let e = f.A.get(t),
            n = e?.guild,
            i = v.A.getGuild(t),
            l = i?.verificationLevel,
            s = n?.verification_level;
        return l ?? s ?? B.PvD.NONE;
    }, [t]);
}
var Z = n(849516),
    J = n(31457),
    ee = n(762062);
function et() {
    let [e, t] = s.useState(!1),
        [n, i] = s.useState(!1),
        [r, a] = s.useState(!1);
    async function o() {
        if (!e) {
            t(!0);
            try {
                await P.A.verifyResend(), i(!0), a(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    }
    return (s.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    i(!1);
                }, 2e3)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [n]),
    n)
        ? (0, l.jsx)(R.E, {
              className: ee.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: I.intl.string(I.t.H3Q7U8),
          })
        : (0, l.jsx)(_.$, {
              variant: "primary",
              size: "sm",
              text: r ? I.intl.string(I.t.WnX4J2) : I.intl.string(I.t["13ofGu"]),
              loading: e,
              onClick: o,
          });
}
function en() {
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: Z.u,
        text: I.intl.string(I.t.c6EUJI),
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, l.jsx)(T.m, {
            asContainer: !0,
            text: I.intl.string(I.t.mGlP30),
            children: (0, l.jsx)(_.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: I.intl.string(I.t["13ofGu"]),
            }),
        }),
    });
}
function ei(e) {
    let { isUserVerified: t } = e,
        n = t ? I.intl.string(I.t.qY1jHN) : I.intl.string(I.t.c6EUJI);
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: Z.u,
        text: n,
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, l.jsx)(et, {}),
    });
}
var el = n(414626),
    es = n(601047),
    er = n(646270),
    ea = n(557722),
    eo = n(53516);
function eu() {
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: er.u,
        text: I.intl.string(I.t.woMjLV),
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, l.jsx)(T.m, {
            asContainer: !0,
            text: I.intl.string(I.t.mGlP30),
            children: (0, l.jsx)(_.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: I.intl.string(I.t["13ofGu"]),
            }),
        }),
    });
}
function ed(e) {
    let { isUserVerified: t } = e,
        i = t ? I.intl.string(I.t.WWzQta) : I.intl.string(I.t.woMjLV);
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: er.u,
        text: i,
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, l.jsx)(_.$, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t["13ofGu"]),
            onClick: function () {
                (0, u.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("590275"),
                            n.e("334179"),
                            n.e("14775"),
                            n.e("928662"),
                            n.e("989545"),
                            n.e("991531"),
                            n.e("311493"),
                            n.e("84704"),
                            n.e("286197"),
                        ]).then(n.bind(n, 615715));
                        return (t) => (0, l.jsx)(e, { reason: ea.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: eo.V },
                );
            },
        }),
    });
}
var ec = n(273926),
    ef = n(453016);
function em(e) {
    let { guildId: t, formFields: n, updateFormFields: i } = e,
        s = (0, x.bG)([v.A], () => v.A.getGuild(t)?.rulesChannelId);
    function r(e, t) {
        let l = n[e];
        i([...n.slice(0, e), { ...l, response: t }, ...n.slice(e + 1)]);
    }
    return (0, l.jsx)(l.Fragment, {
        children: n.map((e, t) =>
            (function (e, t) {
                switch (e.field_type) {
                    case N.rX.TERMS:
                        return (0, l.jsx)(
                            ec.Ot,
                            {
                                channelId: s,
                                formField: e,
                                onChange: (e) => {
                                    let l;
                                    return (
                                        (l = n[t]), void i([...n.slice(0, t), { ...l, response: e }, ...n.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case N.rX.TEXT_INPUT:
                        return (0, l.jsx)(ef.y4, { formField: e, autofocus: 0 === t, onChange: (e) => r(t, e) }, t);
                    case N.rX.PARAGRAPH:
                        return (0, l.jsx)(es.zD, { formField: e, autofocus: 0 === t, onChange: (e) => r(t, e) }, t);
                    case N.rX.MULTIPLE_CHOICE:
                        return (0, l.jsx)(
                            el.MZ,
                            {
                                formField: e,
                                onChange: (e) =>
                                    (function (e, t) {
                                        let { value: l } = t,
                                            s = n[e];
                                        i([...n.slice(0, e), { ...s, response: l }, ...n.slice(e + 1)]);
                                    })(t, e),
                            },
                            t,
                        );
                }
            })(e, t),
        ),
    });
}
function ex(e) {
    let t,
        { guildId: n, formFields: i, updateFormFields: s, disableVerification: r } = e,
        a = (0, x.bG)([$.default], () => $.default.getCurrentUser()),
        o = Q({ guildId: n });
    return ((t = o === B.PvD.NONE ? null : o === B.PvD.VERY_HIGH ? eu : en), null == a)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !r && null != t && (0, l.jsx)(t, {}),
                  (0, l.jsx)(em, { guildId: n, formFields: i, updateFormFields: s }),
              ],
          });
}
function eh(e) {
    let t,
        { guildId: n, formFields: i, updateFormFields: r, disableVerification: a } = e,
        o = (0, x.bG)([$.default], () => $.default.getCurrentUser()),
        u = Q({ guildId: n }),
        d = o?.isPhoneVerified() || o?.isStaff(),
        c = o?.verified || d,
        f = !1;
    u === B.PvD.NONE
        ? ((f = !0), (t = null))
        : u === B.PvD.VERY_HIGH
          ? ((f = d ?? !1), (t = ed))
          : ((f = c ?? !1), (t = ei));
    let m = s.useRef(f);
    return null == o
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !a && !m.current && null != t && (0, l.jsx)(t, { isUserVerified: f }),
                  (0, l.jsx)(em, { guildId: n, formFields: i, updateFormFields: r }),
              ],
          });
}
var eg = n(260197),
    ej = n(817907);
function ev(e) {
    let {
        headerId: t,
        email: n,
        password: i,
        setEmail: s,
        setPassword: r,
        emailError: a,
        passwordError: o,
        hasManualFormFields: u,
        isMember: d,
    } = e;
    return (0, l.jsxs)("div", {
        className: ej.Qs,
        children: [
            (0, l.jsx)("div", {
                className: ej.DS,
                children: (0, l.jsx)("img", {
                    alt: I.intl.string(I.t.ewGfjv),
                    src: "/assets/138ad5b31e172be7.svg",
                    className: ej.In,
                }),
            }),
            (0, l.jsx)(M.D, {
                id: t,
                variant: "heading-xl/semibold",
                className: ej.wx,
                children: u && !d ? I.intl.string(I.t.qQYF6z) : I.intl.string(I.t.MhcDLz),
            }),
            (0, l.jsx)(R.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: I.intl.string(I.t["SPlaR/"]),
            }),
            (0, l.jsx)("hr", { className: ej.yF }),
            (0, l.jsx)("div", {
                className: ej.kz,
                children: (0, l.jsx)(y.k, {
                    label: I.intl.string(I.t.dI4d4S),
                    value: n,
                    error: a,
                    onChange: s,
                    autoFocus: !0,
                }),
            }),
            (0, l.jsx)("div", {
                className: ej.kz,
                children: (0, l.jsx)(y.k, {
                    label: I.intl.string(I.t["CIGa+7"]),
                    type: "password",
                    value: i,
                    error: o,
                    onChange: r,
                }),
            }),
        ],
    });
}
function ep(e) {
    let { headerId: t, email: n } = e;
    return (0, l.jsxs)("div", {
        className: ej.Qs,
        children: [
            (0, l.jsx)("img", {
                alt: I.intl.string(I.t.wNAblz),
                src: "/assets/733e8e16d7ff7288.svg",
                className: ej.In,
            }),
            (0, l.jsx)(M.D, {
                id: t,
                variant: "heading-xl/semibold",
                className: ej.wx,
                children: I.intl.format(I.t.v01XgL, { email: n }),
            }),
            (0, l.jsx)(R.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: I.intl.string(I.t["/Hw5ad"]),
            }),
            (0, l.jsx)("div", {
                className: ej.rb,
                children: (0, l.jsx)(S.Q, { onClick: () => P.A.verifyResend(), text: I.intl.string(I.t["MLk/mK"]) }),
            }),
        ],
    });
}
function eC(e) {
    let { guildId: t, formState: n, updateFormState: i, isPreview: s = !1, disableVerification: r = !1 } = e,
        a = (0, x.bG)([f.A], () => f.A.get(t));
    if (null == a) return null;
    let o = n ?? a?.formFields ?? [];
    return (0, l.jsx)(s ? ex : eh, { guildId: t, formFields: o, updateFormFields: i, disableVerification: r });
}
function eN(e) {
    let {
        guildId: t,
        headerId: n,
        formState: i,
        updateFormState: s,
        guildName: r,
        hasManualFormFields: a,
        disableVerification: o,
        isPreview: u = !1,
    } = e;
    return (0, l.jsxs)("div", {
        className: ej.Qs,
        children: [
            (0, l.jsx)(M.D, {
                id: n,
                variant: "heading-xxl/normal",
                className: ej.wx,
                children: a ? I.intl.format(I.t.cgX47Z, { guildName: r }) : I.intl.string(I.t.DrEEC8),
            }),
            (0, l.jsx)(R.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: a ? I.intl.string(I.t["3smSPP"]) : I.intl.string(I.t["7D3C5p"]),
            }),
            (0, l.jsx)(eC, { guildId: t, formState: i, updateFormState: s, isPreview: u, disableVerification: o }),
        ],
    });
}
let eA = function (e) {
        var t, n;
        let i,
            r,
            a,
            o,
            { verificationForm: u, headerId: d, guildId: c, onClose: g, onComplete: j, isPreview: C = !1 } = e,
            M =
                ((t = u?.guild),
                (i = (0, x.bG)([v.A], () => v.A.getGuild(c))),
                (r = (0, x.bG)([h.A], () => h.A.getGuild())),
                s.useMemo(
                    () => (C && r?.id === c ? r : null != i ? i : null != t ? (0, p.Yh)(t) : null),
                    [C, r, c, i, t],
                )),
            { guildProfile: y, fetchGuildProfile: S } = (0, U.u)(c),
            P = (0, x.bG)([z.Ay, H.default], () => z.Ay.isMember(c, H.default.getId())),
            [K, Q] = s.useState(!1);
        s.useEffect(() => {
            P && !K && null == y && S().finally(() => Q(!0));
        }, [S, y, K, P]);
        let Z = u?.formFields.some((e) => e.field_type !== N.rX.TERMS),
            [J, ee] = s.useState(u?.formFields ?? []),
            [et, en] = s.useState(!1),
            [ei, el] = s.useState(null),
            [es, er] = s.useState(""),
            [ea, eo] = s.useState(""),
            [eu, ed] = s.useState(null),
            [ec, ef] = s.useState(null),
            { storeMemberCount: em, storeOnlineCount: ex } = (0, x.cf)([Y.A], () => ({
                storeMemberCount: Y.A.getMemberCount(c),
                storeOnlineCount: Y.A.getOnlineCount(c),
            })),
            eh = ex ?? u?.guild?.approximate_presence_count,
            eC = em ?? u?.guild?.approximate_member_count,
            eA = Z ?? !1;
        s.useEffect(() => {
            null != u && ee(u.formFields);
        }, [u]),
            s.useEffect(() => {
                null != c && X.default.track(B.HAw.OPEN_MODAL, { type: eg.mk, guild_id: c });
            }, [c]);
        let eI = (0, x.bG)([$.default], () => $.default.getCurrentUser()),
            { currentStep: eb, setCurrentStep: eE } = (function (e) {
                let t = !e?.isClaimed(),
                    n = e?.verified,
                    [i, l] = s.useState(2 * !t);
                return (
                    s.useEffect(() => {
                        null != e && e.isClaimed() && l(2);
                    }, [e]),
                    s.useEffect(() => {
                        1 === i && n && l(2);
                    }, [i, n]),
                    { currentStep: i, setCurrentStep: l }
                );
            })(eI);
        (a = (0, m.YN)((e) => e.hasUnsubmittedChanges)),
            s.useEffect(
                () => (
                    (0, m.Yb)(!1),
                    () => {
                        (0, m.Yb)(!1);
                    }
                ),
                [],
            ),
            s.useEffect(() => {
                let e = J.some((e) => e.field_type !== N.rX.TERMS && (0, A.Ge)(e));
                e && !a ? (0, m.Yb)(!0) : !e && a && (0, m.Yb)(!1);
            }, [J, a]);
        let eF = eI?.verified,
            eM = eI?.isPhoneVerified(),
            { invalidFormFields: eR, hasInvalidTermsFormField: ey } = s.useMemo(
                () => ({
                    invalidFormFields: J.some((e) => !(0, A.Ge)(e)),
                    hasInvalidTermsFormField: J.some((e) => e.field_type === N.rX.TERMS && !(0, A.Ge)(e)),
                }),
                [J],
            ),
            eS = s.useMemo(() => {
                if (null == j || eR) return !0;
                if (eA || eI?.isStaff()) return !1;
                switch (M?.verificationLevel) {
                    case B.PvD.VERY_HIGH:
                        return !eM;
                    case B.PvD.LOW:
                    case B.PvD.MEDIUM:
                    case B.PvD.HIGH:
                        return !eF && !eM;
                    case B.PvD.NONE:
                    default:
                        return !1;
                }
            }, [j, eR, eA, eI, M?.verificationLevel, eM, eF]),
            eO = (0, x.bG)([w.Ay], () => w.Ay.useReducedMotion),
            e_ = s.useRef(null),
            eT = (function (e) {
                let t = null != e ? q.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    n = (0, E.r)(F.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    i = (0, E.r)(F.A.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [l, s, r] = (0, D.rh)(t, n, !1);
                return `linear-gradient(-45deg, ${l}, ${r ?? i})`;
            })(M),
            eG =
                ((n = y?.brandColorPrimary ?? ""),
                (o = (0, E.r)(F.A.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${o}, ${n})`);
        if (null == M) return (0, l.jsx)(O.y, {});
        async function eP() {
            en(!0), ed(null), ef(null);
            try {
                await (0, L.KD)({ email: es, password: ea }), en(!1), eE(b.EMAIL_CONFIRMATION);
            } catch (e) {
                ed(e?.body?.email), ef(e?.body?.password);
            } finally {
                en(!1);
            }
        }
        async function eL() {
            en(!0), el(null);
            let e = null != eI ? z.Ay.getMember(c, eI.id) : null;
            if (null != e && !e.isPending) return void g?.(!0);
            try {
                await j?.({ ...(u ?? f.U), formFields: J }), g?.(!0);
            } catch (t) {
                let e = t?.body;
                e?.errors?.version != null || e?.errors?.form_fields != null
                    ? el(I.intl.string(I.t.PD09Sl))
                    : el(e?.message);
            } finally {
                en(!1);
            }
        }
        let ew = null != y;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: ej.uC,
                    children: [
                        (0, l.jsx)("div", { style: { background: ew ? eG : eT }, className: ej.nL }),
                        ew
                            ? (0, l.jsx)(k.Ay, {
                                  profile: y,
                                  className: ej.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, l.jsx)(V.A, { className: ej.P5, guild: M, presenceCount: eh, memberCount: eC }),
                    ],
                }),
                (0, l.jsx)("div", {
                    className: ej.yl,
                    children: (0, l.jsxs)("div", {
                        className: ej.Ok,
                        ref: e_,
                        children: [
                            (0, l.jsx)(W, {
                                className: ej.jE,
                                containerRef: e_,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, l.jsx)(G.Y, {
                                    className: ej.C9,
                                    steps: [b.CLAIM_ACCOUNT, b.EMAIL_CONFIRMATION, b.VERIFICATION_FORM],
                                    step: eb,
                                    children: (function () {
                                        if (null == M) return null;
                                        switch (eb) {
                                            case b.CLAIM_ACCOUNT:
                                                return (0, l.jsx)(ev, {
                                                    headerId: d,
                                                    email: es,
                                                    password: ea,
                                                    setEmail: er,
                                                    setPassword: eo,
                                                    emailError: eu,
                                                    passwordError: ec,
                                                    hasManualFormFields: Z,
                                                    isMember: P,
                                                });
                                            case b.EMAIL_CONFIRMATION:
                                                return (0, l.jsx)(ep, { headerId: d, email: es });
                                            case b.VERIFICATION_FORM:
                                                return (0, l.jsx)(eN, {
                                                    headerId: d,
                                                    guildId: c,
                                                    guildName: M.name,
                                                    formState: J,
                                                    updateFormState: ee,
                                                    isPreview: C,
                                                    useReducedMotion: eO,
                                                    hasManualFormFields: Z,
                                                    disableVerification: eA,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (function () {
                                switch (eb) {
                                    case b.CLAIM_ACCOUNT:
                                        return (0, l.jsxs)("div", {
                                            className: ej.qr,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: ej.RC,
                                                    children: (0, l.jsx)(_.$, {
                                                        variant: "primary",
                                                        text: I.intl.string(I.t.PDTjLN),
                                                        type: "submit",
                                                        loading: et,
                                                        onClick: eP,
                                                        disabled: 0 === es.length || 0 === ea.length,
                                                    }),
                                                }),
                                                (0, l.jsx)(R.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: I.intl.string(I.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case b.EMAIL_CONFIRMATION:
                                        return null;
                                    case b.VERIFICATION_FORM:
                                        return (0, l.jsxs)("div", {
                                            className: ej.qr,
                                            children: [
                                                (0, l.jsx)(T.m, {
                                                    asContainer: !0,
                                                    shouldShow: eS && eR && Z,
                                                    text: ey ? I.intl.string(I.t.PLNbh3) : I.intl.string(I.t.brWmV2),
                                                    children: (0, l.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: ej.RC,
                                                        children: (0, l.jsx)(_.$, {
                                                            variant: "active",
                                                            text: I.intl.string(I.t.geKm7t),
                                                            type: "submit",
                                                            loading: et,
                                                            onClick: eL,
                                                            disabled: eS,
                                                        }),
                                                    }),
                                                }),
                                                null != ei &&
                                                    (0, l.jsx)(R.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: ei,
                                                    }),
                                                null == ei &&
                                                    Z &&
                                                    (0, l.jsxs)("div", {
                                                        className: ej.BU,
                                                        children: [
                                                            (0, l.jsx)(R.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: I.intl.string(I.t["+fPCTZ"]),
                                                            }),
                                                            (0, l.jsx)(R.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: I.intl.string(I.t.VjgH0c),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        });
                                }
                            })(),
                        ],
                    }),
                }),
            ],
        });
    },
    eI = function (e) {
        let { transitionState: t, guildId: n, onClose: i, onComplete: h, inviteKey: v, isPreview: p = !1 } = e,
            A = (0, m.YN)((e) => e.shouldShowWarning),
            { verificationForm: b, hasFetched: E } = (function (e, t, n) {
                let [i, l] = s.useState(!1),
                    r = (0, x.bG)([f.A], () => f.A.get(e)),
                    a = (0, x.bG)([g.A], () => g.A.pendingState);
                return (
                    s.useEffect(() => {
                        t || C.Ay.fetchVerificationForm(e, n).finally(() => l(!0));
                    }, [e, n, t]),
                    {
                        hasFetched: i,
                        verificationForm:
                            s.useMemo(() => {
                                let e;
                                if (!t || null == a) return null;
                                if (a.joinType === j.J.APPLY)
                                    e = null != a.pendingVerificationFields ? [...a.pendingVerificationFields] : void 0;
                                else if (null != a.termRules) {
                                    let t = a.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
                                    e = [
                                        {
                                            field_type: N.rX.TERMS,
                                            label: I.intl.string(I.t["9suSIA"]),
                                            values: t,
                                            required: !0,
                                        },
                                    ];
                                }
                                return null == e
                                    ? null
                                    : {
                                          version: r?.version ?? "",
                                          description: r?.description ?? "",
                                          formFields: e,
                                          guild: r?.guild,
                                      };
                            }, [t, a, r]) ?? r,
                    }
                );
            })(n, p, v),
            F = (0, c.GV)();
        return (s.useEffect(() => {
            E && b === f.U && i();
        }, [E, i, b]),
        s.useEffect(() => {
            A &&
                ((0, m.C7)(!1),
                (0, a.A)({
                    title: I.intl.string(I.t["8g514U"]),
                    confirmText: I.intl.string(I.t["Xt+Uab"]),
                    cancelText: I.intl.string(I.t["ETE/oC"]),
                    onConfirm: () => (0, u.closeModal)(eg.LC),
                }));
        }, [A]),
        b === f.U)
            ? null
            : (0, l.jsxs)(r.d, {
                  transitionState: t,
                  "aria-labelledby": F,
                  size: "xxl",
                  onClose: i,
                  children: [
                      (0, l.jsx)("div", { className: ej.b, children: (0, l.jsx)(o.J, { onClick: () => i(!1) }) }),
                      (0, l.jsx)(d.Ch, {
                          className: ej.kL,
                          children: (0, l.jsx)(eA, {
                              verificationForm: b,
                              headerId: F,
                              guildId: n,
                              onClose: i,
                              onComplete: h,
                              isPreview: p,
                          }),
                      }),
                  ],
              });
    };
