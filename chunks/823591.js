l.d(t, { default: () => eI });
var i,
    n = l(627968),
    s = l(64700),
    r = l(224640),
    a = l(314116),
    o = l(815021),
    u = l(192308),
    d = l(915089),
    c = l(60175),
    m = l(890620),
    f = l(17928),
    x = l(555337),
    h = l(306846),
    g = l(894222),
    j = l(71393),
    v = l(860689),
    p = l(408213),
    C = l(513461),
    N = l(709977),
    A = l(375708),
    I =
        (((i = {})[(i.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (i[(i.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (i[(i.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        i),
    b = l(990078),
    E = l(602853),
    F = l(661531),
    M = l(534514),
    R = l(834730),
    y = l(292666),
    S = l(123292),
    O = l(289873),
    _ = l(821609),
    T = l(685094),
    G = l(830215),
    P = l(631670),
    L = l(775602),
    w = l(654107),
    D = l(90084),
    U = l(42780),
    k = l(764548),
    V = l(495544),
    H = l(498642),
    Y = l(696451),
    z = l(287809),
    $ = l(174459),
    X = l(486020);
l(321073);
var q = l(689175);
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
    let { className: t, children: l, containerRef: i, faderSize: r, faderEdgeThreshold: a } = e,
        o = s.useRef(null),
        [u, d] = s.useState(0),
        [c, m] = s.useState(0),
        [f, x] = s.useState(0),
        h = s.useCallback(() => {
            null != o.current &&
                (d(o.current.getDistanceFromTop()),
                m(o.current.getDistanceFromBottom()),
                x(o.current.getScrollerState().offsetHeight));
        }, []);
    s.useEffect(() => {
        if ((h(), null == i.current)) return;
        let e = new ResizeObserver(() => {
            h();
        });
        return (
            e.observe(i.current),
            () => {
                e.disconnect();
            }
        );
    }, [o, i, h]);
    let g = s.useMemo(() => {
        if (0 === u && 0 === c) return {};
        let e = [];
        if ((e.push("to bottom"), u > 0)) {
            let t = a > 0 ? 1 - Math.min(a, u) / a : 1;
            for (let l = 0; l < K.length; l++) {
                let { position: i, alpha: n } = K[l],
                    s = (i * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + n * (1 - t)}) ${s}px`);
            }
        }
        if (c > 0) {
            let t = f - r,
                l = a > 0 ? 1 - Math.min(a, c) / a : 1;
            for (let i = K.length - 1; i >= 0; i--) {
                let { position: n, alpha: s } = K[i],
                    a = (t + (1 - n) * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${l + s * (1 - l)}) ${a}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [c, u, a, r, f]);
    return (0, n.jsx)(q.zC, { ref: o, style: g, className: t, onScroll: h, children: l });
}
var B = l(652215);
function Q(e) {
    let { guildId: t } = e;
    return (0, f.bG)([c.A, j.A], () => {
        let e = c.A.get(t),
            l = e?.guild,
            i = j.A.getGuild(t),
            n = i?.verificationLevel,
            s = l?.verification_level;
        return n ?? s ?? B.PvD.NONE;
    }, [t]);
}
var Z = l(849516),
    J = l(31457),
    ee = l(397251);
function et() {
    let [e, t] = s.useState(!1),
        [l, i] = s.useState(!1),
        [r, a] = s.useState(!1);
    s.useEffect(() => {
        let e;
        return (
            l &&
                (e = setTimeout(() => {
                    i(!1);
                }, 2e3)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [l]);
    let o = async () => {
        if (!e) {
            t(!0);
            try {
                await G.A.verifyResend(), i(!0), a(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return l
        ? (0, n.jsx)(R.E, {
              className: ee.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: A.intl.string(A.t.H3Q7U8),
          })
        : (0, n.jsx)(_.$, {
              variant: "primary",
              size: "sm",
              text: r ? A.intl.string(A.t.WnX4J2) : A.intl.string(A.t["13ofGu"]),
              loading: e,
              onClick: o,
          });
}
function el() {
    return (0, n.jsx)(J.ZK, {
        className: ee.jm,
        icon: Z.u,
        text: A.intl.string(A.t.c6EUJI),
        footnote: A.intl.string(A.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(b.m, {
            asContainer: !0,
            text: A.intl.string(A.t.mGlP30),
            children: (0, n.jsx)(_.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: A.intl.string(A.t["13ofGu"]),
            }),
        }),
    });
}
function ei(e) {
    let { isUserVerified: t } = e,
        l = t ? A.intl.string(A.t.qY1jHN) : A.intl.string(A.t.c6EUJI);
    return (0, n.jsx)(J.ZK, {
        className: ee.jm,
        icon: Z.u,
        text: l,
        footnote: A.intl.string(A.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(et, {}),
    });
}
var en = l(414626),
    es = l(601047),
    er = l(646270),
    ea = l(557722),
    eo = l(53516);
function eu() {
    return (0, n.jsx)(J.ZK, {
        className: ee.jm,
        icon: er.u,
        text: A.intl.string(A.t.woMjLV),
        footnote: A.intl.string(A.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(b.m, {
            asContainer: !0,
            text: A.intl.string(A.t.mGlP30),
            children: (0, n.jsx)(_.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: A.intl.string(A.t["13ofGu"]),
            }),
        }),
    });
}
function ed(e) {
    let { isUserVerified: t } = e,
        i = t ? A.intl.string(A.t.WWzQta) : A.intl.string(A.t.woMjLV);
    return (0, n.jsx)(J.ZK, {
        className: ee.jm,
        icon: er.u,
        text: i,
        footnote: A.intl.string(A.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(_.$, {
            variant: "primary",
            size: "sm",
            text: A.intl.string(A.t["13ofGu"]),
            onClick: () => {
                (0, u.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("54266"),
                            l.e("79924"),
                            l.e("54975"),
                            l.e("89545"),
                            l.e("84704"),
                            l.e("86197"),
                        ]).then(l.bind(l, 615715));
                        return (t) => (0, n.jsx)(e, { reason: ea.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: eo.V },
                );
            },
        }),
    });
}
var ec = l(273926),
    em = l(453016);
function ef(e) {
    let { guildId: t, formFields: l, updateFormFields: i } = e,
        s = (0, f.bG)([j.A], () => j.A.getGuild(t)?.rulesChannelId),
        r = (e, t) => {
            let n = l[e];
            i([...l.slice(0, e), { ...n, response: t }, ...l.slice(e + 1)]);
        };
    return (0, n.jsx)(n.Fragment, {
        children: l.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case C.rX.TERMS:
                        return (0, n.jsx)(
                            ec.Ot,
                            {
                                channelId: s,
                                formField: e,
                                onChange: (e) => {
                                    let n;
                                    return (
                                        (n = l[t]), void i([...l.slice(0, t), { ...n, response: e }, ...l.slice(t + 1)])
                                    );
                                },
                            },
                            t,
                        );
                    case C.rX.TEXT_INPUT:
                        return (0, n.jsx)(em.y4, { formField: e, autofocus: 0 === t, onChange: (e) => r(t, e) }, t);
                    case C.rX.PARAGRAPH:
                        return (0, n.jsx)(es.zD, { formField: e, autofocus: 0 === t, onChange: (e) => r(t, e) }, t);
                    case C.rX.MULTIPLE_CHOICE:
                        return (0, n.jsx)(
                            en.MZ,
                            {
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let { value: n } = t,
                                            s = l[e];
                                        i([...l.slice(0, e), { ...s, response: n }, ...l.slice(e + 1)]);
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
        { guildId: l, formFields: i, updateFormFields: s, disableVerification: r } = e,
        a = (0, f.bG)([z.default], () => z.default.getCurrentUser()),
        o = Q({ guildId: l });
    return ((t = o === B.PvD.NONE ? null : o === B.PvD.VERY_HIGH ? eu : el), null == a)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !r && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(ef, { guildId: l, formFields: i, updateFormFields: s }),
              ],
          });
}
function eh(e) {
    let t,
        { guildId: l, formFields: i, updateFormFields: r, disableVerification: a } = e,
        o = (0, f.bG)([z.default], () => z.default.getCurrentUser()),
        u = Q({ guildId: l }),
        d = o?.isPhoneVerified() || o?.isStaff(),
        c = o?.verified || d,
        m = !1;
    u === B.PvD.NONE
        ? ((m = !0), (t = null))
        : u === B.PvD.VERY_HIGH
          ? ((m = d ?? !1), (t = ed))
          : ((m = c ?? !1), (t = ei));
    let x = s.useRef(m);
    return null == o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !a && !x.current && null != t && (0, n.jsx)(t, { isUserVerified: m }),
                  (0, n.jsx)(ef, { guildId: l, formFields: i, updateFormFields: r }),
              ],
          });
}
var eg = l(260197),
    ej = l(944970);
let ev = (e) => {
        let {
            headerId: t,
            email: l,
            password: i,
            setEmail: s,
            setPassword: r,
            emailError: a,
            passwordError: o,
            hasManualFormFields: u,
            isMember: d,
        } = e;
        return (0, n.jsxs)("div", {
            className: ej.Qs,
            children: [
                (0, n.jsx)("div", {
                    className: ej.DS,
                    children: (0, n.jsx)("img", {
                        alt: A.intl.string(A.t.ewGfjv),
                        src: "/assets/138ad5b31e172be7.svg",
                        className: ej.In,
                    }),
                }),
                (0, n.jsx)(M.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: ej.wx,
                    children: u && !d ? A.intl.string(A.t.qQYF6z) : A.intl.string(A.t.MhcDLz),
                }),
                (0, n.jsx)(R.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: A.intl.string(A.t["SPlaR/"]),
                }),
                (0, n.jsx)("hr", { className: ej.yF }),
                (0, n.jsx)("div", {
                    className: ej.kz,
                    children: (0, n.jsx)(y.k, {
                        label: A.intl.string(A.t.dI4d4S),
                        value: l,
                        error: a,
                        onChange: s,
                        autoFocus: !0,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: ej.kz,
                    children: (0, n.jsx)(y.k, {
                        label: A.intl.string(A.t["CIGa+7"]),
                        type: "password",
                        value: i,
                        error: o,
                        onChange: r,
                    }),
                }),
            ],
        });
    },
    ep = (e) => {
        let { headerId: t, email: l } = e;
        return (0, n.jsxs)("div", {
            className: ej.Qs,
            children: [
                (0, n.jsx)("img", {
                    alt: A.intl.string(A.t.wNAblz),
                    src: "/assets/733e8e16d7ff7288.svg",
                    className: ej.In,
                }),
                (0, n.jsx)(M.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: ej.wx,
                    children: A.intl.format(A.t.v01XgL, { email: l }),
                }),
                (0, n.jsx)(R.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: A.intl.string(A.t["/Hw5ad"]),
                }),
                (0, n.jsx)("div", {
                    className: ej.rb,
                    children: (0, n.jsx)(S.Q, {
                        onClick: () => G.A.verifyResend(),
                        text: A.intl.string(A.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    eC = (e) => {
        let { guildId: t, formState: l, updateFormState: i, isPreview: s = !1, disableVerification: r = !1 } = e,
            a = (0, f.bG)([c.A], () => c.A.get(t));
        if (null == a) return null;
        let o = l ?? a?.formFields ?? [];
        return (0, n.jsx)(s ? ex : eh, { guildId: t, formFields: o, updateFormFields: i, disableVerification: r });
    },
    eN = (e) => {
        let {
            guildId: t,
            headerId: l,
            formState: i,
            updateFormState: s,
            guildName: r,
            hasManualFormFields: a,
            disableVerification: o,
            isPreview: u = !1,
        } = e;
        return (0, n.jsxs)("div", {
            className: ej.Qs,
            children: [
                (0, n.jsx)(M.D, {
                    id: l,
                    variant: "heading-xxl/normal",
                    className: ej.wx,
                    children: a ? A.intl.format(A.t.cgX47Z, { guildName: r }) : A.intl.string(A.t.DrEEC8),
                }),
                (0, n.jsx)(R.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: a ? A.intl.string(A.t["3smSPP"]) : A.intl.string(A.t["7D3C5p"]),
                }),
                (0, n.jsx)(eC, { guildId: t, formState: i, updateFormState: s, isPreview: u, disableVerification: o }),
            ],
        });
    },
    eA = (e) => {
        var t, l;
        let i,
            r,
            a,
            o,
            { verificationForm: u, headerId: d, guildId: h, onClose: g, onComplete: p, isPreview: M = !1 } = e,
            y =
                ((t = u?.guild),
                (i = (0, f.bG)([j.A], () => j.A.getGuild(h))),
                (r = (0, f.bG)([x.A], () => x.A.getGuild())),
                s.useMemo(
                    () => (M && r?.id === h ? r : null != i ? i : null != t ? (0, v.Yh)(t) : null),
                    [M, r, h, i, t],
                )),
            { guildProfile: S, fetchGuildProfile: G } = (0, D.u)(h),
            q = (0, f.bG)([Y.Ay, V.default], () => Y.Ay.isMember(h, V.default.getId())),
            [K, Q] = s.useState(!1);
        s.useEffect(() => {
            q && !K && null == S && G().finally(() => Q(!0));
        }, [G, S, K, q]);
        let Z = u?.formFields.some((e) => e.field_type !== C.rX.TERMS),
            [J, ee] = s.useState(u?.formFields ?? []),
            [et, el] = s.useState(!1),
            [ei, en] = s.useState(null),
            [es, er] = s.useState(""),
            [ea, eo] = s.useState(""),
            [eu, ed] = s.useState(null),
            [ec, em] = s.useState(null),
            { storeMemberCount: ef, storeOnlineCount: ex } = (0, f.cf)([H.A], () => ({
                storeMemberCount: H.A.getMemberCount(h),
                storeOnlineCount: H.A.getOnlineCount(h),
            })),
            eh = ex ?? u?.guild?.approximate_presence_count,
            eC = ef ?? u?.guild?.approximate_member_count,
            eA = Z ?? !1;
        s.useEffect(() => {
            null != u && ee(u.formFields);
        }, [u]),
            s.useEffect(() => {
                null != h && $.default.track(B.HAw.OPEN_MODAL, { type: eg.mk, guild_id: h });
            }, [h]);
        let eI = (0, f.bG)([z.default], () => z.default.getCurrentUser()),
            { currentStep: eb, setCurrentStep: eE } = (function (e) {
                let t = !e?.isClaimed(),
                    l = e?.verified,
                    [i, n] = s.useState(2 * !t);
                return (
                    s.useEffect(() => {
                        null != e && e.isClaimed() && n(2);
                    }, [e]),
                    s.useEffect(() => {
                        1 === i && l && n(2);
                    }, [i, l]),
                    { currentStep: i, setCurrentStep: n }
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
                let e = J.some((e) => e.field_type !== C.rX.TERMS && (0, N.Ge)(e));
                e && !a ? (0, m.Yb)(!0) : !e && a && (0, m.Yb)(!1);
            }, [J, a]);
        let eF = eI?.verified,
            eM = eI?.isPhoneVerified(),
            { invalidFormFields: eR, hasInvalidTermsFormField: ey } = s.useMemo(
                () => ({
                    invalidFormFields: J.some((e) => !(0, N.Ge)(e)),
                    hasInvalidTermsFormField: J.some((e) => e.field_type === C.rX.TERMS && !(0, N.Ge)(e)),
                }),
                [J],
            ),
            eS = s.useMemo(() => {
                if (null == p || eR) return !0;
                if (eA || eI?.isStaff()) return !1;
                switch (y?.verificationLevel) {
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
            }, [p, eR, eA, eI, y?.verificationLevel, eM, eF]),
            eO = (0, f.bG)([L.A], () => L.A.useReducedMotion),
            e_ = s.useRef(null),
            eT = (function (e) {
                let t = null != e ? X.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    l = (0, E.r)(F.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    i = (0, E.r)(F.A.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [n, s, r] = (0, w.rh)(t, l, !1);
                return `linear-gradient(-45deg, ${n}, ${r ?? i})`;
            })(y),
            eG =
                ((l = S?.brandColorPrimary ?? ""),
                (o = (0, E.r)(F.A.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${o}, ${l})`);
        if (null == y) return (0, n.jsx)(O.y, {});
        let eP = async () => {
                el(!0), ed(null), em(null);
                try {
                    await (0, P.KD)({ email: es, password: ea }), el(!1), eE(I.EMAIL_CONFIRMATION);
                } catch (e) {
                    ed(e?.body?.email), em(e?.body?.password);
                } finally {
                    el(!1);
                }
            },
            eL = async () => {
                el(!0), en(null);
                let e = null != eI ? Y.Ay.getMember(h, eI.id) : null;
                if (null != e && !e.isPending) return void g?.(!0);
                try {
                    await p?.({ ...(u ?? c.U), formFields: J }), g?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? en(A.intl.string(A.t.PD09Sl))
                        : en(e?.message);
                } finally {
                    el(!1);
                }
            },
            ew = null != S;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: ej.uC,
                    children: [
                        (0, n.jsx)("div", { style: { background: ew ? eG : eT }, className: ej.nL }),
                        ew
                            ? (0, n.jsx)(U.Ay, {
                                  profile: S,
                                  className: ej.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, n.jsx)(k.A, { className: ej.P5, guild: y, presenceCount: eh, memberCount: eC }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: ej.yl,
                    children: (0, n.jsxs)("div", {
                        className: ej.Ok,
                        ref: e_,
                        children: [
                            (0, n.jsx)(W, {
                                className: ej.jE,
                                containerRef: e_,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, n.jsx)(T.Y, {
                                    className: ej.C9,
                                    steps: [I.CLAIM_ACCOUNT, I.EMAIL_CONFIRMATION, I.VERIFICATION_FORM],
                                    step: eb,
                                    children: (() => {
                                        switch (eb) {
                                            case I.CLAIM_ACCOUNT:
                                                return (0, n.jsx)(ev, {
                                                    headerId: d,
                                                    email: es,
                                                    password: ea,
                                                    setEmail: er,
                                                    setPassword: eo,
                                                    emailError: eu,
                                                    passwordError: ec,
                                                    hasManualFormFields: Z,
                                                    isMember: q,
                                                });
                                            case I.EMAIL_CONFIRMATION:
                                                return (0, n.jsx)(ep, { headerId: d, email: es });
                                            case I.VERIFICATION_FORM:
                                                return (0, n.jsx)(eN, {
                                                    headerId: d,
                                                    guildId: h,
                                                    guildName: y.name,
                                                    formState: J,
                                                    updateFormState: ee,
                                                    isPreview: M,
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
                                    case I.CLAIM_ACCOUNT:
                                        return (0, n.jsxs)("div", {
                                            className: ej.qr,
                                            children: [
                                                (0, n.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: ej.RC,
                                                    children: (0, n.jsx)(_.$, {
                                                        variant: "primary",
                                                        text: A.intl.string(A.t.PDTjLN),
                                                        type: "submit",
                                                        loading: et,
                                                        onClick: eP,
                                                        disabled: 0 === es.length || 0 === ea.length,
                                                    }),
                                                }),
                                                (0, n.jsx)(R.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: A.intl.string(A.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case I.EMAIL_CONFIRMATION:
                                        return null;
                                    case I.VERIFICATION_FORM:
                                        return (0, n.jsxs)("div", {
                                            className: ej.qr,
                                            children: [
                                                (0, n.jsx)(b.m, {
                                                    asContainer: !0,
                                                    shouldShow: eS && eR && Z,
                                                    text: ey ? A.intl.string(A.t.PLNbh3) : A.intl.string(A.t.brWmV2),
                                                    children: (0, n.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: ej.RC,
                                                        children: (0, n.jsx)(_.$, {
                                                            variant: "active",
                                                            text: A.intl.string(A.t.geKm7t),
                                                            type: "submit",
                                                            loading: et,
                                                            onClick: eL,
                                                            disabled: eS,
                                                        }),
                                                    }),
                                                }),
                                                null != ei &&
                                                    (0, n.jsx)(R.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: ei,
                                                    }),
                                                null == ei &&
                                                    Z &&
                                                    (0, n.jsxs)("div", {
                                                        className: ej.BU,
                                                        children: [
                                                            (0, n.jsx)(R.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: A.intl.string(A.t["+fPCTZ"]),
                                                            }),
                                                            (0, n.jsx)(R.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: A.intl.string(A.t.VjgH0c),
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
    eI = (e) => {
        let { transitionState: t, guildId: l, onClose: i, onComplete: x, inviteKey: j, isPreview: v = !1 } = e,
            N = (0, m.YN)((e) => e.shouldShowWarning),
            { verificationForm: I, hasFetched: b } = (function (e, t, l) {
                let [i, n] = s.useState(!1),
                    r = (0, f.bG)([c.A], () => c.A.get(e)),
                    a = (0, f.bG)([h.A], () => h.A.pendingState);
                return (
                    s.useEffect(() => {
                        t || p.Ay.fetchVerificationForm(e, l).finally(() => n(!0));
                    }, [e, l, t]),
                    {
                        hasFetched: i,
                        verificationForm:
                            s.useMemo(() => {
                                let e;
                                if (!t || null == a) return null;
                                if (a.joinType === g.J.APPLY)
                                    e = null != a.pendingVerificationFields ? [...a.pendingVerificationFields] : void 0;
                                else if (null != a.termRules) {
                                    let t = a.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
                                    e = [
                                        {
                                            field_type: C.rX.TERMS,
                                            label: A.intl.string(A.t["9suSIA"]),
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
            })(l, v, j),
            E = (0, d.GV)();
        return (s.useEffect(() => {
            b && I === c.U && i();
        }, [b, i, I]),
        s.useEffect(() => {
            N &&
                ((0, m.C7)(!1),
                (0, a.A)({
                    title: A.intl.string(A.t["8g514U"]),
                    confirmText: A.intl.string(A.t["Xt+Uab"]),
                    cancelText: A.intl.string(A.t["ETE/oC"]),
                    onConfirm: () => (0, u.closeModal)(eg.LC),
                }));
        }, [N]),
        I === c.U)
            ? null
            : (0, n.jsxs)(r.d, {
                  transitionState: t,
                  "aria-labelledby": E,
                  size: "xxl",
                  onClose: i,
                  children: [
                      (0, n.jsx)("div", { className: ej.b, children: (0, n.jsx)(o.J, { onClick: () => i(!1) }) }),
                      (0, n.jsx)("div", {
                          className: ej.kL,
                          children: (0, n.jsx)(eA, {
                              verificationForm: I,
                              headerId: E,
                              guildId: l,
                              onClose: i,
                              onComplete: x,
                              isPreview: v,
                          }),
                      }),
                  ],
              });
    };
