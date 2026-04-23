n.d(t, { default: () => eC });
var r,
    i = n(627968),
    l = n(64700),
    a = n(224640),
    s = n(73939),
    o = n(36525),
    d = n(815021),
    c = n(862482),
    u = n(192308),
    _ = n(871682),
    m = n(915089),
    h = n(60175),
    f = n(890620),
    E = n(17928),
    p = n(555337),
    x = n(306846),
    g = n(894222),
    v = n(71393),
    I = n(860689),
    N = n(408213),
    A = n(513461),
    b = n(709977),
    R = n(985018),
    S =
        (((r = {})[(r.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (r[(r.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (r[(r.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        r),
    C = n(990078),
    j = n(602853),
    T = n(661531),
    y = n(534514),
    O = n(834730),
    F = n(292666),
    P = n(123292),
    L = n(289873),
    G = n(821609),
    M = n(685094),
    U = n(830215),
    k = n(631670),
    D = n(775602),
    w = n(654107),
    V = n(90084),
    B = n(42780),
    H = n(764548),
    z = n(495544),
    W = n(498642),
    Y = n(696451),
    q = n(287809),
    $ = n(954571),
    X = n(486020);
n(321073);
var K = n(689175);
let Q = [
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
function Z(e) {
    let { className: t, children: n, containerRef: r, faderSize: a, faderEdgeThreshold: s } = e,
        o = l.useRef(null),
        [d, c] = l.useState(0),
        [u, _] = l.useState(0),
        [m, h] = l.useState(0),
        f = l.useCallback(() => {
            null != o.current &&
                (c(o.current.getDistanceFromTop()),
                _(o.current.getDistanceFromBottom()),
                h(o.current.getScrollerState().offsetHeight));
        }, []);
    l.useEffect(() => {
        if ((f(), null == r.current)) return;
        let e = new ResizeObserver(() => {
            f();
        });
        return (
            e.observe(r.current),
            () => {
                e.disconnect();
            }
        );
    }, [o, r, f]);
    let E = l.useMemo(() => {
        if (0 === d && 0 === u) return {};
        let e = [];
        if ((e.push("to bottom"), d > 0)) {
            let t = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let n = 0; n < Q.length; n++) {
                let { position: r, alpha: i } = Q[n],
                    l = (r * a).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + i * (1 - t)}) ${l}px`);
            }
        }
        if (u > 0) {
            let t = m - a,
                n = s > 0 ? 1 - Math.min(s, u) / s : 1;
            for (let r = Q.length - 1; r >= 0; r--) {
                let { position: i, alpha: l } = Q[r],
                    s = (t + (1 - i) * a).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${n + l * (1 - n)}) ${s}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [u, d, s, a, m]);
    return (0, i.jsx)(K.zC, { ref: o, style: E, className: t, onScroll: f, children: n });
}
var J = n(652215);
function ee(e) {
    let { guildId: t } = e;
    return (0, E.bG)([h.A, v.A], () => {
        let e = h.A.get(t),
            n = e?.guild,
            r = v.A.getGuild(t),
            i = r?.verificationLevel,
            l = n?.verification_level;
        return i ?? l ?? J.PvD.NONE;
    }, [t]);
}
var et = n(849516),
    en = n(31457),
    er = n(397251);
function ei() {
    let [e, t] = l.useState(!1),
        [n, r] = l.useState(!1),
        [a, s] = l.useState(!1);
    l.useEffect(() => {
        let e;
        return (
            n &&
                (e = setTimeout(() => {
                    r(!1);
                }, 2e3)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [n]);
    let o = async () => {
        if (!e) {
            t(!0);
            try {
                await U.A.verifyResend(), r(!0), s(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return n
        ? (0, i.jsx)(O.E, {
              className: er.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: R.intl.string(R.t.H3Q7U8),
          })
        : (0, i.jsx)(G.$, {
              variant: "primary",
              size: "sm",
              text: a ? R.intl.string(R.t.WnX4J2) : R.intl.string(R.t["13ofGu"]),
              loading: e,
              onClick: o,
          });
}
function el() {
    return (0, i.jsx)(en.ZK, {
        className: er.jm,
        icon: et.u,
        text: R.intl.string(R.t.c6EUJI),
        footnote: R.intl.string(R.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, i.jsx)(C.m, {
            asContainer: !0,
            text: R.intl.string(R.t.mGlP30),
            children: (0, i.jsx)(G.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: R.intl.string(R.t["13ofGu"]),
            }),
        }),
    });
}
function ea(e) {
    let { isUserVerified: t } = e,
        n = t ? R.intl.string(R.t.qY1jHN) : R.intl.string(R.t.c6EUJI);
    return (0, i.jsx)(en.ZK, {
        className: er.jm,
        icon: et.u,
        text: n,
        footnote: R.intl.string(R.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, i.jsx)(ei, {}),
    });
}
var es = n(414626),
    eo = n(601047),
    ed = n(646270),
    ec = n(557722),
    eu = n(53516);
function e_() {
    return (0, i.jsx)(en.ZK, {
        className: er.jm,
        icon: ed.u,
        text: R.intl.string(R.t.woMjLV),
        footnote: R.intl.string(R.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, i.jsx)(C.m, {
            asContainer: !0,
            text: R.intl.string(R.t.mGlP30),
            children: (0, i.jsx)(G.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: R.intl.string(R.t["13ofGu"]),
            }),
        }),
    });
}
function em(e) {
    let { isUserVerified: t } = e,
        r = t ? R.intl.string(R.t.WWzQta) : R.intl.string(R.t.woMjLV);
    return (0, i.jsx)(en.ZK, {
        className: er.jm,
        icon: ed.u,
        text: r,
        footnote: R.intl.string(R.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, i.jsx)(G.$, {
            variant: "primary",
            size: "sm",
            text: R.intl.string(R.t["13ofGu"]),
            onClick: () => {
                (0, u.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("84704"), n.e("85543")]).then(n.bind(n, 615715));
                        return (t) => (0, i.jsx)(e, { reason: ec.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: eu.V },
                );
            },
        }),
    });
}
var eh = n(273926),
    ef = n(453016);
function eE(e) {
    let { guildId: t, formFields: n, updateFormFields: r } = e,
        l = (0, E.bG)([v.A], () => v.A.getGuild(t)?.rulesChannelId),
        a = (e, t) => {
            let i = n[e];
            r([...n.slice(0, e), { ...i, response: t }, ...n.slice(e + 1)]);
        };
    return (0, i.jsx)(i.Fragment, {
        children: n.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case A.rX.TERMS:
                        return (0, i.jsx)(
                            eh.Ot,
                            {
                                channelId: l,
                                formField: e,
                                onChange: (e) => {
                                    let i;
                                    return (
                                        (i = n[t]), void r([...n.slice(0, t), { ...i, response: e }, ...n.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case A.rX.TEXT_INPUT:
                        return (0, i.jsx)(ef.y4, { formField: e, autofocus: 0 === t, onChange: (e) => a(t, e) }, t);
                    case A.rX.PARAGRAPH:
                        return (0, i.jsx)(eo.zD, { formField: e, autofocus: 0 === t, onChange: (e) => a(t, e) }, t);
                    case A.rX.MULTIPLE_CHOICE:
                        return (0, i.jsx)(
                            es.MZ,
                            {
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let { value: i } = t,
                                            l = n[e];
                                        r([...n.slice(0, e), { ...l, response: i }, ...n.slice(e + 1)]);
                                    })(t, e),
                            },
                            t,
                        );
                }
            })(e, t),
        ),
    });
}
function ep(e) {
    let t,
        { guildId: n, formFields: r, updateFormFields: l, disableVerification: a } = e,
        s = (0, E.bG)([q.default], () => q.default.getCurrentUser()),
        o = ee({ guildId: n });
    return ((t = o === J.PvD.NONE ? null : o === J.PvD.VERY_HIGH ? e_ : el), null == s)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !a && null != t && (0, i.jsx)(t, {}),
                  (0, i.jsx)(eE, { guildId: n, formFields: r, updateFormFields: l }),
              ],
          });
}
function ex(e) {
    let t,
        { guildId: n, formFields: r, updateFormFields: a, disableVerification: s } = e,
        o = (0, E.bG)([q.default], () => q.default.getCurrentUser()),
        d = ee({ guildId: n }),
        c = o?.isPhoneVerified() || o?.isStaff(),
        u = o?.verified || c,
        _ = !1;
    d === J.PvD.NONE
        ? ((_ = !0), (t = null))
        : d === J.PvD.VERY_HIGH
          ? ((_ = c ?? !1), (t = em))
          : ((_ = u ?? !1), (t = ea));
    let m = l.useRef(_);
    return null == o
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  !s && !m.current && null != t && (0, i.jsx)(t, { isUserVerified: _ }),
                  (0, i.jsx)(eE, { guildId: n, formFields: r, updateFormFields: a }),
              ],
          });
}
var eg = n(260197),
    ev = n(944970);
let eI = (e) => {
        let {
            headerId: t,
            email: n,
            password: r,
            setEmail: l,
            setPassword: a,
            emailError: s,
            passwordError: o,
            hasManualFormFields: d,
            isMember: c,
        } = e;
        return (0, i.jsxs)("div", {
            className: ev.Qs,
            children: [
                (0, i.jsx)("div", {
                    className: ev.DS,
                    children: (0, i.jsx)("img", {
                        alt: R.intl.string(R.t.ewGfjv),
                        src: "/assets/138ad5b31e172be7.svg",
                        className: ev.In,
                    }),
                }),
                (0, i.jsx)(y.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: ev.wx,
                    children: d && !c ? R.intl.string(R.t.qQYF6z) : R.intl.string(R.t.MhcDLz),
                }),
                (0, i.jsx)(O.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: R.intl.string(R.t["SPlaR/"]),
                }),
                (0, i.jsx)("hr", { className: ev.yF }),
                (0, i.jsx)("div", {
                    className: ev.kz,
                    children: (0, i.jsx)(F.k, {
                        label: R.intl.string(R.t.dI4d4S),
                        value: n,
                        error: s,
                        onChange: l,
                        autoFocus: !0,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: ev.kz,
                    children: (0, i.jsx)(F.k, {
                        label: R.intl.string(R.t["CIGa+7"]),
                        type: "password",
                        value: r,
                        error: o,
                        onChange: a,
                    }),
                }),
            ],
        });
    },
    eN = (e) => {
        let { headerId: t, email: n } = e;
        return (0, i.jsxs)("div", {
            className: ev.Qs,
            children: [
                (0, i.jsx)("img", {
                    alt: R.intl.string(R.t.wNAblz),
                    src: "/assets/733e8e16d7ff7288.svg",
                    className: ev.In,
                }),
                (0, i.jsx)(y.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: ev.wx,
                    children: R.intl.format(R.t.v01XgL, { email: n }),
                }),
                (0, i.jsx)(O.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: R.intl.string(R.t["/Hw5ad"]),
                }),
                (0, i.jsx)("div", {
                    className: ev.rb,
                    children: (0, i.jsx)(P.Q, {
                        onClick: () => U.A.verifyResend(),
                        text: R.intl.string(R.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    eA = (e) => {
        let { guildId: t, formState: n, updateFormState: r, isPreview: l = !1, disableVerification: a = !1 } = e,
            s = (0, E.bG)([h.A], () => h.A.get(t));
        if (null == s) return null;
        let o = n ?? s?.formFields ?? [];
        return (0, i.jsx)(l ? ep : ex, { guildId: t, formFields: o, updateFormFields: r, disableVerification: a });
    },
    eb = (e) => {
        let {
            guildId: t,
            headerId: n,
            formState: r,
            updateFormState: l,
            guildName: a,
            hasManualFormFields: s,
            disableVerification: o,
            isPreview: d = !1,
        } = e;
        return (0, i.jsxs)("div", {
            className: ev.Qs,
            children: [
                (0, i.jsx)(y.D, {
                    id: n,
                    variant: "heading-xxl/normal",
                    className: ev.wx,
                    children: s ? R.intl.format(R.t.cgX47Z, { guildName: a }) : R.intl.string(R.t.DrEEC8),
                }),
                (0, i.jsx)(O.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: s ? R.intl.string(R.t["3smSPP"]) : R.intl.string(R.t["7D3C5p"]),
                }),
                (0, i.jsx)(eA, { guildId: t, formState: r, updateFormState: l, isPreview: d, disableVerification: o }),
            ],
        });
    },
    eR = (e) => {
        var t, n;
        let r,
            a,
            s,
            o,
            { verificationForm: d, headerId: c, guildId: u, onClose: _, onComplete: m, isPreview: x = !1 } = e,
            g =
                ((t = d?.guild),
                (r = (0, E.bG)([v.A], () => v.A.getGuild(u))),
                (a = (0, E.bG)([p.A], () => p.A.getGuild())),
                l.useMemo(
                    () => (x && a?.id === u ? a : null != r ? r : null != t ? (0, I.Yh)(t) : null),
                    [x, a, u, r, t],
                )),
            { guildProfile: N, fetchGuildProfile: y } = (0, V.u)(u),
            F = (0, E.bG)([Y.Ay, z.default], () => Y.Ay.isMember(u, z.default.getId())),
            [P, U] = l.useState(!1);
        l.useEffect(() => {
            F && !P && null == N && y().finally(() => U(!0));
        }, [y, N, P, F]);
        let K = d?.formFields.some((e) => e.field_type !== A.rX.TERMS),
            [Q, ee] = l.useState(d?.formFields ?? []),
            [et, en] = l.useState(!1),
            [er, ei] = l.useState(null),
            [el, ea] = l.useState(""),
            [es, eo] = l.useState(""),
            [ed, ec] = l.useState(null),
            [eu, e_] = l.useState(null),
            { storeMemberCount: em, storeOnlineCount: eh } = (0, E.cf)([W.A], () => ({
                storeMemberCount: W.A.getMemberCount(u),
                storeOnlineCount: W.A.getOnlineCount(u),
            })),
            ef = eh ?? d?.guild?.approximate_presence_count,
            eE = em ?? d?.guild?.approximate_member_count,
            ep = K ?? !1;
        l.useEffect(() => {
            null != d && ee(d.formFields);
        }, [d]),
            l.useEffect(() => {
                null != u && $.default.track(J.HAw.OPEN_MODAL, { type: eg.mk, guild_id: u });
            }, [u]);
        let ex = (0, E.bG)([q.default], () => q.default.getCurrentUser()),
            { currentStep: eA, setCurrentStep: eR } = (function (e) {
                let t = !e?.isClaimed(),
                    n = e?.verified,
                    [r, i] = l.useState(2 * !t);
                return (
                    l.useEffect(() => {
                        null != e && e.isClaimed() && i(2);
                    }, [e]),
                    l.useEffect(() => {
                        1 === r && n && i(2);
                    }, [r, n]),
                    { currentStep: r, setCurrentStep: i }
                );
            })(ex);
        (s = (0, f.YN)((e) => e.hasUnsubmittedChanges)),
            l.useEffect(
                () => (
                    (0, f.Yb)(!1),
                    () => {
                        (0, f.Yb)(!1);
                    }
                ),
                [],
            ),
            l.useEffect(() => {
                let e = Q.some((e) => e.field_type !== A.rX.TERMS && (0, b.Ge)(e));
                e && !s ? (0, f.Yb)(!0) : !e && s && (0, f.Yb)(!1);
            }, [Q, s]);
        let eS = ex?.verified,
            eC = ex?.isPhoneVerified(),
            { invalidFormFields: ej, hasInvalidTermsFormField: eT } = l.useMemo(
                () => ({
                    invalidFormFields: Q.some((e) => !(0, b.Ge)(e)),
                    hasInvalidTermsFormField: Q.some((e) => e.field_type === A.rX.TERMS && !(0, b.Ge)(e)),
                }),
                [Q],
            ),
            ey = l.useMemo(() => {
                if (null == m || ej) return !0;
                if (ep || ex?.isStaff()) return !1;
                switch (g?.verificationLevel) {
                    case J.PvD.VERY_HIGH:
                        return !eC;
                    case J.PvD.LOW:
                    case J.PvD.MEDIUM:
                    case J.PvD.HIGH:
                        return !eS && !eC;
                    case J.PvD.NONE:
                    default:
                        return !1;
                }
            }, [m, ej, ep, ex, g?.verificationLevel, eC, eS]),
            eO = (0, E.bG)([D.A], () => D.A.useReducedMotion),
            eF = l.useRef(null),
            eP = (function (e) {
                let t = null != e ? X.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    n = (0, j.r)(T.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, j.r)(T.A.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [i, l, a] = (0, w.rh)(t, n, !1);
                return `linear-gradient(-45deg, ${i}, ${a ?? r})`;
            })(g),
            eL =
                ((n = N?.brandColorPrimary ?? ""),
                (o = (0, j.r)(T.A.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${o}, ${n})`);
        if (null == g) return (0, i.jsx)(L.y, {});
        let eG = async () => {
                en(!0), ec(null), e_(null);
                try {
                    await (0, k.KD)({ email: el, password: es }), en(!1), eR(S.EMAIL_CONFIRMATION);
                } catch (e) {
                    ec(e?.body?.email), e_(e?.body?.password);
                } finally {
                    en(!1);
                }
            },
            eM = async () => {
                en(!0), ei(null);
                let e = null != ex ? Y.Ay.getMember(u, ex.id) : null;
                if (null != e && !e.isPending) return void _?.(!0);
                try {
                    await m?.({ ...(d ?? h.U), formFields: Q }), _?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? ei(R.intl.string(R.t.PD09Sl))
                        : ei(e?.message);
                } finally {
                    en(!1);
                }
            },
            eU = null != N;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: ev.uC,
                    children: [
                        (0, i.jsx)("div", { style: { background: eU ? eL : eP }, className: ev.nL }),
                        eU
                            ? (0, i.jsx)(B.Ay, {
                                  profile: N,
                                  className: ev.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, i.jsx)(H.A, { className: ev.P5, guild: g, presenceCount: ef, memberCount: eE }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: ev.yl,
                    children: (0, i.jsxs)("div", {
                        className: ev.Ok,
                        ref: eF,
                        children: [
                            (0, i.jsx)(Z, {
                                className: ev.jE,
                                containerRef: eF,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, i.jsx)(M.Y, {
                                    className: ev.C9,
                                    steps: [S.CLAIM_ACCOUNT, S.EMAIL_CONFIRMATION, S.VERIFICATION_FORM],
                                    step: eA,
                                    children: (() => {
                                        switch (eA) {
                                            case S.CLAIM_ACCOUNT:
                                                return (0, i.jsx)(eI, {
                                                    headerId: c,
                                                    email: el,
                                                    password: es,
                                                    setEmail: ea,
                                                    setPassword: eo,
                                                    emailError: ed,
                                                    passwordError: eu,
                                                    hasManualFormFields: K,
                                                    isMember: F,
                                                });
                                            case S.EMAIL_CONFIRMATION:
                                                return (0, i.jsx)(eN, { headerId: c, email: el });
                                            case S.VERIFICATION_FORM:
                                                return (0, i.jsx)(eb, {
                                                    headerId: c,
                                                    guildId: u,
                                                    guildName: g.name,
                                                    formState: Q,
                                                    updateFormState: ee,
                                                    isPreview: x,
                                                    useReducedMotion: eO,
                                                    hasManualFormFields: K,
                                                    disableVerification: ep,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (eA) {
                                    case S.CLAIM_ACCOUNT:
                                        return (0, i.jsxs)("div", {
                                            className: ev.qr,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: ev.RC,
                                                    children: (0, i.jsx)(G.$, {
                                                        variant: "primary",
                                                        text: R.intl.string(R.t.PDTjLN),
                                                        type: "submit",
                                                        loading: et,
                                                        onClick: eG,
                                                        disabled: 0 === el.length || 0 === es.length,
                                                    }),
                                                }),
                                                (0, i.jsx)(O.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: R.intl.string(R.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case S.EMAIL_CONFIRMATION:
                                        return null;
                                    case S.VERIFICATION_FORM:
                                        return (0, i.jsxs)("div", {
                                            className: ev.qr,
                                            children: [
                                                (0, i.jsx)(C.m, {
                                                    asContainer: !0,
                                                    shouldShow: ey && ej && K,
                                                    text: eT ? R.intl.string(R.t.PLNbh3) : R.intl.string(R.t.brWmV2),
                                                    children: (0, i.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: ev.RC,
                                                        children: (0, i.jsx)(G.$, {
                                                            variant: "active",
                                                            text: R.intl.string(R.t.geKm7t),
                                                            type: "submit",
                                                            loading: et,
                                                            onClick: eM,
                                                            disabled: ey,
                                                        }),
                                                    }),
                                                }),
                                                null != er &&
                                                    (0, i.jsx)(O.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: er,
                                                    }),
                                                null == er &&
                                                    K &&
                                                    (0, i.jsxs)("div", {
                                                        className: ev.BU,
                                                        children: [
                                                            (0, i.jsx)(O.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: R.intl.string(R.t["+fPCTZ"]),
                                                            }),
                                                            (0, i.jsx)(O.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: R.intl.string(R.t.VjgH0c),
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
    eS = () =>
        (0, i.jsx)(o.A, {
            submitting: !1,
            message: R.intl.string(R.t["8g514U"]),
            onReset: () => {
                (0, f.C7)(!1);
            },
            onResetText: R.intl.string(R.t["ETE/oC"]),
            onSave: () => {
                (0, f.C7)(!1), (0, u.closeModal)(eg.LC);
            },
            onSaveText: R.intl.string(R.t["Xt+Uab"]),
            onSaveButtonColor: c.XD.RED,
        }),
    eC = (e) => {
        let { transitionState: t, guildId: n, onClose: r, onComplete: o, inviteKey: c, isPreview: u = !1 } = e,
            p = (0, f.YN)((e) => e.shouldShowWarning),
            { verificationForm: v, hasFetched: I } = (function (e, t, n) {
                let [r, i] = l.useState(!1),
                    a = (0, E.bG)([h.A], () => h.A.get(e)),
                    s = (0, E.bG)([x.A], () => x.A.pendingState);
                return (
                    l.useEffect(() => {
                        t || N.Ay.fetchVerificationForm(e, n).finally(() => i(!0));
                    }, [e, n, t]),
                    {
                        hasFetched: r,
                        verificationForm:
                            l.useMemo(() => {
                                let e;
                                if (!t || null == s) return null;
                                if (s.joinType === g.J.APPLY)
                                    e = null != s.pendingVerificationFields ? [...s.pendingVerificationFields] : void 0;
                                else if (null != s.termRules) {
                                    let t = s.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
                                    e = [
                                        {
                                            field_type: A.rX.TERMS,
                                            label: R.intl.string(R.t["9suSIA"]),
                                            values: t,
                                            required: !0,
                                        },
                                    ];
                                }
                                return null == e
                                    ? null
                                    : {
                                          version: a?.version ?? "",
                                          description: a?.description ?? "",
                                          formFields: e,
                                          guild: a?.guild,
                                      };
                            }, [t, s, a]) ?? a,
                    }
                );
            })(n, u, c),
            b = (0, m.GV)();
        return (l.useEffect(() => {
            I && v === h.U && r();
        }, [I, r, v]),
        v === h.U)
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)(a.d, {
                          transitionState: t,
                          "aria-labelledby": b,
                          size: "xxl",
                          onClose: r,
                          children: [
                              (0, i.jsx)("div", {
                                  className: ev.b,
                                  children: (0, i.jsx)(d.J, { onClick: () => r(!1) }),
                              }),
                              (0, i.jsx)("div", {
                                  className: ev.kL,
                                  children: (0, i.jsx)(eR, {
                                      verificationForm: v,
                                      headerId: b,
                                      guildId: n,
                                      onClose: r,
                                      onComplete: o,
                                      isPreview: u,
                                  }),
                              }),
                          ],
                      }),
                      (0, i.jsx)(s.F, {
                          children: !0 === p && (0, i.jsx)(_.F, { className: ev.lm, children: (0, i.jsx)(eS, {}) }),
                      }),
                  ],
              });
    };
