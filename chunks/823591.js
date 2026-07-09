i.d(t, { default: () => eI });
var n,
    l = i(627968),
    s = i(64700),
    r = i(224640),
    a = i(314116),
    o = i(815021),
    u = i(192308),
    d = i(689175),
    c = i(915089),
    m = i(60175),
    f = i(890620),
    x = i(17928),
    h = i(913758),
    g = i(306846),
    j = i(894222),
    v = i(71393),
    p = i(860689),
    C = i(408213),
    N = i(513461),
    A = i(709977),
    I = i(375708),
    b =
        (((n = {})[(n.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (n[(n.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (n[(n.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        n),
    E = i(990078),
    F = i(602853),
    M = i(661531),
    R = i(534514),
    y = i(834730),
    S = i(292666),
    O = i(123292),
    _ = i(289873),
    T = i(821609),
    G = i(685094),
    P = i(830215),
    L = i(631670),
    w = i(775602),
    D = i(654107),
    U = i(90084),
    k = i(42780),
    V = i(764548),
    H = i(280450),
    Y = i(498642),
    z = i(696451),
    $ = i(287809),
    X = i(174459),
    q = i(486020);
i(321073);
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
    let { className: t, children: i, containerRef: n, faderSize: r, faderEdgeThreshold: a } = e,
        o = s.useRef(null),
        [u, c] = s.useState(0),
        [m, f] = s.useState(0),
        [x, h] = s.useState(0),
        g = s.useCallback(() => {
            null != o.current &&
                (c(o.current.getDistanceFromTop()),
                f(o.current.getDistanceFromBottom()),
                h(o.current.getScrollerState().offsetHeight));
        }, []);
    s.useEffect(() => {
        if ((g(), null == n.current)) return;
        let e = new ResizeObserver(() => {
            g();
        });
        return (
            e.observe(n.current),
            () => {
                e.disconnect();
            }
        );
    }, [o, n, g]);
    let j = s.useMemo(() => {
        if (0 === u && 0 === m) return {};
        let e = [];
        if ((e.push("to bottom"), u > 0)) {
            let t = a > 0 ? 1 - Math.min(a, u) / a : 1;
            for (let i = 0; i < K.length; i++) {
                let { position: n, alpha: l } = K[i],
                    s = (n * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + l * (1 - t)}) ${s}px`);
            }
        }
        if (m > 0) {
            let t = x - r,
                i = a > 0 ? 1 - Math.min(a, m) / a : 1;
            for (let n = K.length - 1; n >= 0; n--) {
                let { position: l, alpha: s } = K[n],
                    a = (t + (1 - l) * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${i + s * (1 - i)}) ${a}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [m, u, a, r, x]);
    return (0, l.jsx)(d.zC, { ref: o, style: j, className: t, onScroll: g, children: i });
}
var B = i(652215);
function Q(e) {
    let { guildId: t } = e;
    return (0, x.bG)([m.A, v.A], () => {
        let e = m.A.get(t),
            i = e?.guild,
            n = v.A.getGuild(t),
            l = n?.verificationLevel,
            s = i?.verification_level;
        return l ?? s ?? B.PvD.NONE;
    }, [t]);
}
var Z = i(849516),
    J = i(31457),
    ee = i(397251);
function et() {
    let [e, t] = s.useState(!1),
        [i, n] = s.useState(!1),
        [r, a] = s.useState(!1);
    async function o() {
        if (!e) {
            t(!0);
            try {
                await P.A.verifyResend(), n(!0), a(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    }
    return (s.useEffect(() => {
        let e;
        return (
            i &&
                (e = setTimeout(() => {
                    n(!1);
                }, 2e3)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [i]),
    i)
        ? (0, l.jsx)(y.E, {
              className: ee.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: I.intl.string(I.t.H3Q7U8),
          })
        : (0, l.jsx)(T.$, {
              variant: "primary",
              size: "sm",
              text: r ? I.intl.string(I.t.WnX4J2) : I.intl.string(I.t["13ofGu"]),
              loading: e,
              onClick: o,
          });
}
function ei() {
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: Z.u,
        text: I.intl.string(I.t.c6EUJI),
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, l.jsx)(E.m, {
            asContainer: !0,
            text: I.intl.string(I.t.mGlP30),
            children: (0, l.jsx)(T.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: I.intl.string(I.t["13ofGu"]),
            }),
        }),
    });
}
function en(e) {
    let { isUserVerified: t } = e,
        i = t ? I.intl.string(I.t.qY1jHN) : I.intl.string(I.t.c6EUJI);
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: Z.u,
        text: i,
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, l.jsx)(et, {}),
    });
}
var el = i(414626),
    es = i(601047),
    er = i(646270),
    ea = i(557722),
    eo = i(53516);
function eu() {
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: er.u,
        text: I.intl.string(I.t.woMjLV),
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, l.jsx)(E.m, {
            asContainer: !0,
            text: I.intl.string(I.t.mGlP30),
            children: (0, l.jsx)(T.$, {
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
        n = t ? I.intl.string(I.t.WWzQta) : I.intl.string(I.t.woMjLV);
    return (0, l.jsx)(J.ZK, {
        className: ee.jm,
        icon: er.u,
        text: n,
        footnote: I.intl.string(I.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, l.jsx)(T.$, {
            variant: "primary",
            size: "sm",
            text: I.intl.string(I.t["13ofGu"]),
            onClick: function () {
                (0, u.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("56643"),
                            i.e("65264"),
                            i.e("86380"),
                            i.e("28662"),
                            i.e("89545"),
                            i.e("91531"),
                            i.e("11493"),
                            i.e("84704"),
                            i.e("86197"),
                        ]).then(i.bind(i, 615715));
                        return (t) => (0, l.jsx)(e, { reason: ea.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: eo.V },
                );
            },
        }),
    });
}
var ec = i(273926),
    em = i(453016);
function ef(e) {
    let { guildId: t, formFields: i, updateFormFields: n } = e,
        s = (0, x.bG)([v.A], () => v.A.getGuild(t)?.rulesChannelId);
    function r(e, t) {
        let l = i[e];
        n([...i.slice(0, e), { ...l, response: t }, ...i.slice(e + 1)]);
    }
    return (0, l.jsx)(l.Fragment, {
        children: i.map((e, t) =>
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
                                        (l = i[t]), void n([...i.slice(0, t), { ...l, response: e }, ...i.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case N.rX.TEXT_INPUT:
                        return (0, l.jsx)(em.y4, { formField: e, autofocus: 0 === t, onChange: (e) => r(t, e) }, t);
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
                                            s = i[e];
                                        n([...i.slice(0, e), { ...s, response: l }, ...i.slice(e + 1)]);
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
        { guildId: i, formFields: n, updateFormFields: s, disableVerification: r } = e,
        a = (0, x.bG)([$.default], () => $.default.getCurrentUser()),
        o = Q({ guildId: i });
    return ((t = o === B.PvD.NONE ? null : o === B.PvD.VERY_HIGH ? eu : ei), null == a)
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !r && null != t && (0, l.jsx)(t, {}),
                  (0, l.jsx)(ef, { guildId: i, formFields: n, updateFormFields: s }),
              ],
          });
}
function eh(e) {
    let t,
        { guildId: i, formFields: n, updateFormFields: r, disableVerification: a } = e,
        o = (0, x.bG)([$.default], () => $.default.getCurrentUser()),
        u = Q({ guildId: i }),
        d = o?.isPhoneVerified() || o?.isStaff(),
        c = o?.verified || d,
        m = !1;
    u === B.PvD.NONE
        ? ((m = !0), (t = null))
        : u === B.PvD.VERY_HIGH
          ? ((m = d ?? !1), (t = ed))
          : ((m = c ?? !1), (t = en));
    let f = s.useRef(m);
    return null == o
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  !a && !f.current && null != t && (0, l.jsx)(t, { isUserVerified: m }),
                  (0, l.jsx)(ef, { guildId: i, formFields: n, updateFormFields: r }),
              ],
          });
}
var eg = i(260197),
    ej = i(944970);
function ev(e) {
    let {
        headerId: t,
        email: i,
        password: n,
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
            (0, l.jsx)(R.D, {
                id: t,
                variant: "heading-xl/semibold",
                className: ej.wx,
                children: u && !d ? I.intl.string(I.t.qQYF6z) : I.intl.string(I.t.MhcDLz),
            }),
            (0, l.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: I.intl.string(I.t["SPlaR/"]),
            }),
            (0, l.jsx)("hr", { className: ej.yF }),
            (0, l.jsx)("div", {
                className: ej.kz,
                children: (0, l.jsx)(S.k, {
                    label: I.intl.string(I.t.dI4d4S),
                    value: i,
                    error: a,
                    onChange: s,
                    autoFocus: !0,
                }),
            }),
            (0, l.jsx)("div", {
                className: ej.kz,
                children: (0, l.jsx)(S.k, {
                    label: I.intl.string(I.t["CIGa+7"]),
                    type: "password",
                    value: n,
                    error: o,
                    onChange: r,
                }),
            }),
        ],
    });
}
function ep(e) {
    let { headerId: t, email: i } = e;
    return (0, l.jsxs)("div", {
        className: ej.Qs,
        children: [
            (0, l.jsx)("img", {
                alt: I.intl.string(I.t.wNAblz),
                src: "/assets/733e8e16d7ff7288.svg",
                className: ej.In,
            }),
            (0, l.jsx)(R.D, {
                id: t,
                variant: "heading-xl/semibold",
                className: ej.wx,
                children: I.intl.format(I.t.v01XgL, { email: i }),
            }),
            (0, l.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: I.intl.string(I.t["/Hw5ad"]),
            }),
            (0, l.jsx)("div", {
                className: ej.rb,
                children: (0, l.jsx)(O.Q, { onClick: () => P.A.verifyResend(), text: I.intl.string(I.t["MLk/mK"]) }),
            }),
        ],
    });
}
function eC(e) {
    let { guildId: t, formState: i, updateFormState: n, isPreview: s = !1, disableVerification: r = !1 } = e,
        a = (0, x.bG)([m.A], () => m.A.get(t));
    if (null == a) return null;
    let o = i ?? a?.formFields ?? [];
    return (0, l.jsx)(s ? ex : eh, { guildId: t, formFields: o, updateFormFields: n, disableVerification: r });
}
function eN(e) {
    let {
        guildId: t,
        headerId: i,
        formState: n,
        updateFormState: s,
        guildName: r,
        hasManualFormFields: a,
        disableVerification: o,
        isPreview: u = !1,
    } = e;
    return (0, l.jsxs)("div", {
        className: ej.Qs,
        children: [
            (0, l.jsx)(R.D, {
                id: i,
                variant: "heading-xxl/normal",
                className: ej.wx,
                children: a ? I.intl.format(I.t.cgX47Z, { guildName: r }) : I.intl.string(I.t.DrEEC8),
            }),
            (0, l.jsx)(y.E, {
                variant: "text-sm/normal",
                color: "text-default",
                children: a ? I.intl.string(I.t["3smSPP"]) : I.intl.string(I.t["7D3C5p"]),
            }),
            (0, l.jsx)(eC, { guildId: t, formState: n, updateFormState: s, isPreview: u, disableVerification: o }),
        ],
    });
}
let eA = function (e) {
        var t, i;
        let n,
            r,
            a,
            o,
            { verificationForm: u, headerId: d, guildId: c, onClose: g, onComplete: j, isPreview: C = !1 } = e,
            R =
                ((t = u?.guild),
                (n = (0, x.bG)([v.A], () => v.A.getGuild(c))),
                (r = (0, x.bG)([h.A], () => h.A.getGuild())),
                s.useMemo(
                    () => (C && r?.id === c ? r : null != n ? n : null != t ? (0, p.Yh)(t) : null),
                    [C, r, c, n, t],
                )),
            { guildProfile: S, fetchGuildProfile: O } = (0, U.u)(c),
            P = (0, x.bG)([z.Ay, H.default], () => z.Ay.isMember(c, H.default.getId())),
            [K, Q] = s.useState(!1);
        s.useEffect(() => {
            P && !K && null == S && O().finally(() => Q(!0));
        }, [O, S, K, P]);
        let Z = u?.formFields.some((e) => e.field_type !== N.rX.TERMS),
            [J, ee] = s.useState(u?.formFields ?? []),
            [et, ei] = s.useState(!1),
            [en, el] = s.useState(null),
            [es, er] = s.useState(""),
            [ea, eo] = s.useState(""),
            [eu, ed] = s.useState(null),
            [ec, em] = s.useState(null),
            { storeMemberCount: ef, storeOnlineCount: ex } = (0, x.cf)([Y.A], () => ({
                storeMemberCount: Y.A.getMemberCount(c),
                storeOnlineCount: Y.A.getOnlineCount(c),
            })),
            eh = ex ?? u?.guild?.approximate_presence_count,
            eC = ef ?? u?.guild?.approximate_member_count,
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
                    i = e?.verified,
                    [n, l] = s.useState(2 * !t);
                return (
                    s.useEffect(() => {
                        null != e && e.isClaimed() && l(2);
                    }, [e]),
                    s.useEffect(() => {
                        1 === n && i && l(2);
                    }, [n, i]),
                    { currentStep: n, setCurrentStep: l }
                );
            })(eI);
        (a = (0, f.YN)((e) => e.hasUnsubmittedChanges)),
            s.useEffect(
                () => (
                    (0, f.Yb)(!1),
                    () => {
                        (0, f.Yb)(!1);
                    }
                ),
                [],
            ),
            s.useEffect(() => {
                let e = J.some((e) => e.field_type !== N.rX.TERMS && (0, A.Ge)(e));
                e && !a ? (0, f.Yb)(!0) : !e && a && (0, f.Yb)(!1);
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
                switch (R?.verificationLevel) {
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
            }, [j, eR, eA, eI, R?.verificationLevel, eM, eF]),
            eO = (0, x.bG)([w.Ay], () => w.Ay.useReducedMotion),
            e_ = s.useRef(null),
            eT = (function (e) {
                let t = null != e ? q.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    i = (0, F.r)(M.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    n = (0, F.r)(M.A.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [l, s, r] = (0, D.rh)(t, i, !1);
                return `linear-gradient(-45deg, ${l}, ${r ?? n})`;
            })(R),
            eG =
                ((i = S?.brandColorPrimary ?? ""),
                (o = (0, F.r)(M.A.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${o}, ${i})`);
        if (null == R) return (0, l.jsx)(_.y, {});
        async function eP() {
            ei(!0), ed(null), em(null);
            try {
                await (0, L.KD)({ email: es, password: ea }), ei(!1), eE(b.EMAIL_CONFIRMATION);
            } catch (e) {
                ed(e?.body?.email), em(e?.body?.password);
            } finally {
                ei(!1);
            }
        }
        let eL = async () => {
                ei(!0), el(null);
                let e = null != eI ? z.Ay.getMember(c, eI.id) : null;
                if (null != e && !e.isPending) return void g?.(!0);
                try {
                    await j?.({ ...(u ?? m.U), formFields: J }), g?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? el(I.intl.string(I.t.PD09Sl))
                        : el(e?.message);
                } finally {
                    ei(!1);
                }
            },
            ew = null != S;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: ej.uC,
                    children: [
                        (0, l.jsx)("div", { style: { background: ew ? eG : eT }, className: ej.nL }),
                        ew
                            ? (0, l.jsx)(k.Ay, {
                                  profile: S,
                                  className: ej.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, l.jsx)(V.A, { className: ej.P5, guild: R, presenceCount: eh, memberCount: eC }),
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
                                    children: (() => {
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
                                                    guildName: R.name,
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
                            (() => {
                                switch (eb) {
                                    case b.CLAIM_ACCOUNT:
                                        return (0, l.jsxs)("div", {
                                            className: ej.qr,
                                            children: [
                                                (0, l.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: ej.RC,
                                                    children: (0, l.jsx)(T.$, {
                                                        variant: "primary",
                                                        text: I.intl.string(I.t.PDTjLN),
                                                        type: "submit",
                                                        loading: et,
                                                        onClick: eP,
                                                        disabled: 0 === es.length || 0 === ea.length,
                                                    }),
                                                }),
                                                (0, l.jsx)(y.E, {
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
                                                (0, l.jsx)(E.m, {
                                                    asContainer: !0,
                                                    shouldShow: eS && eR && Z,
                                                    text: ey ? I.intl.string(I.t.PLNbh3) : I.intl.string(I.t.brWmV2),
                                                    children: (0, l.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: ej.RC,
                                                        children: (0, l.jsx)(T.$, {
                                                            variant: "active",
                                                            text: I.intl.string(I.t.geKm7t),
                                                            type: "submit",
                                                            loading: et,
                                                            onClick: eL,
                                                            disabled: eS,
                                                        }),
                                                    }),
                                                }),
                                                null != en &&
                                                    (0, l.jsx)(y.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: en,
                                                    }),
                                                null == en &&
                                                    Z &&
                                                    (0, l.jsxs)("div", {
                                                        className: ej.BU,
                                                        children: [
                                                            (0, l.jsx)(y.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: I.intl.string(I.t["+fPCTZ"]),
                                                            }),
                                                            (0, l.jsx)(y.E, {
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
        let { transitionState: t, guildId: i, onClose: n, onComplete: h, inviteKey: v, isPreview: p = !1 } = e,
            A = (0, f.YN)((e) => e.shouldShowWarning),
            { verificationForm: b, hasFetched: E } = (function (e, t, i) {
                let [n, l] = s.useState(!1),
                    r = (0, x.bG)([m.A], () => m.A.get(e)),
                    a = (0, x.bG)([g.A], () => g.A.pendingState);
                return (
                    s.useEffect(() => {
                        t || C.Ay.fetchVerificationForm(e, i).finally(() => l(!0));
                    }, [e, i, t]),
                    {
                        hasFetched: n,
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
            })(i, p, v),
            F = (0, c.GV)();
        return (s.useEffect(() => {
            E && b === m.U && n();
        }, [E, n, b]),
        s.useEffect(() => {
            A &&
                ((0, f.C7)(!1),
                (0, a.A)({
                    title: I.intl.string(I.t["8g514U"]),
                    confirmText: I.intl.string(I.t["Xt+Uab"]),
                    cancelText: I.intl.string(I.t["ETE/oC"]),
                    onConfirm: () => (0, u.closeModal)(eg.LC),
                }));
        }, [A]),
        b === m.U)
            ? null
            : (0, l.jsxs)(r.d, {
                  transitionState: t,
                  "aria-labelledby": F,
                  size: "xxl",
                  onClose: n,
                  children: [
                      (0, l.jsx)("div", { className: ej.b, children: (0, l.jsx)(o.J, { onClick: () => n(!1) }) }),
                      (0, l.jsx)(d.Ch, {
                          className: ej.kL,
                          children: (0, l.jsx)(eA, {
                              verificationForm: b,
                              headerId: F,
                              guildId: i,
                              onClose: n,
                              onComplete: h,
                              isPreview: p,
                          }),
                      }),
                  ],
              });
    };
