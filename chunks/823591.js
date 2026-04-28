l.d(t, { default: () => eM });
var i,
    n = l(627968),
    s = l(64700),
    r = l(224640),
    a = l(73939),
    o = l(36525),
    u = l(815021),
    d = l(862482),
    c = l(192308),
    m = l(871682),
    f = l(915089),
    x = l(60175),
    h = l(890620),
    g = l(17928),
    j = l(555337),
    v = l(306846),
    p = l(894222),
    C = l(71393),
    N = l(860689),
    A = l(408213),
    b = l(513461),
    I = l(709977),
    E = l(985018),
    F =
        (((i = {})[(i.CLAIM_ACCOUNT = 0)] = "CLAIM_ACCOUNT"),
        (i[(i.EMAIL_CONFIRMATION = 1)] = "EMAIL_CONFIRMATION"),
        (i[(i.VERIFICATION_FORM = 2)] = "VERIFICATION_FORM"),
        i),
    M = l(990078),
    R = l(602853),
    S = l(661531),
    y = l(534514),
    O = l(834730),
    _ = l(292666),
    T = l(123292),
    G = l(289873),
    P = l(821609),
    L = l(685094),
    w = l(830215),
    D = l(631670),
    U = l(775602),
    k = l(654107),
    V = l(90084),
    H = l(42780),
    Y = l(764548),
    z = l(495544),
    $ = l(498642),
    X = l(696451),
    q = l(287809),
    K = l(954571),
    B = l(486020);
l(321073);
var W = l(689175);
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
            for (let l = 0; l < Q.length; l++) {
                let { position: i, alpha: n } = Q[l],
                    s = (i * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${t + n * (1 - t)}) ${s}px`);
            }
        }
        if (c > 0) {
            let t = f - r,
                l = a > 0 ? 1 - Math.min(a, c) / a : 1;
            for (let i = Q.length - 1; i >= 0; i--) {
                let { position: n, alpha: s } = Q[i],
                    a = (t + (1 - n) * r).toFixed(2);
                e.push(`hsla(0, 0%, 0%, ${l + s * (1 - l)}) ${a}px`);
            }
        }
        return { maskImage: `linear-gradient(${e.join(",")})` };
    }, [c, u, a, r, f]);
    return (0, n.jsx)(W.zC, { ref: o, style: g, className: t, onScroll: h, children: l });
}
var J = l(652215);
function ee(e) {
    let { guildId: t } = e;
    return (0, g.bG)([x.A, C.A], () => {
        let e = x.A.get(t),
            l = e?.guild,
            i = C.A.getGuild(t),
            n = i?.verificationLevel,
            s = l?.verification_level;
        return n ?? s ?? J.PvD.NONE;
    }, [t]);
}
var et = l(849516),
    el = l(31457),
    ei = l(397251);
function en() {
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
                await w.A.verifyResend(), i(!0), a(!0);
            } catch (e) {
            } finally {
                t(!1);
            }
        }
    };
    return l
        ? (0, n.jsx)(O.E, {
              className: ei.$6,
              variant: "text-sm/normal",
              color: "text-feedback-positive",
              children: E.intl.string(E.t.H3Q7U8),
          })
        : (0, n.jsx)(P.$, {
              variant: "primary",
              size: "sm",
              text: r ? E.intl.string(E.t.WnX4J2) : E.intl.string(E.t["13ofGu"]),
              loading: e,
              onClick: o,
          });
}
function es() {
    return (0, n.jsx)(el.ZK, {
        className: ei.jm,
        icon: et.u,
        text: E.intl.string(E.t.c6EUJI),
        footnote: E.intl.string(E.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(M.m, {
            asContainer: !0,
            text: E.intl.string(E.t.mGlP30),
            children: (0, n.jsx)(P.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: E.intl.string(E.t["13ofGu"]),
            }),
        }),
    });
}
function er(e) {
    let { isUserVerified: t } = e,
        l = t ? E.intl.string(E.t.qY1jHN) : E.intl.string(E.t.c6EUJI);
    return (0, n.jsx)(el.ZK, {
        className: ei.jm,
        icon: et.u,
        text: l,
        footnote: E.intl.string(E.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(en, {}),
    });
}
var ea = l(414626),
    eo = l(601047),
    eu = l(646270),
    ed = l(557722),
    ec = l(53516);
function em() {
    return (0, n.jsx)(el.ZK, {
        className: ei.jm,
        icon: eu.u,
        text: E.intl.string(E.t.woMjLV),
        footnote: E.intl.string(E.t["jMh+TY"]),
        meetsRequirement: !1,
        children: (0, n.jsx)(M.m, {
            asContainer: !0,
            text: E.intl.string(E.t.mGlP30),
            children: (0, n.jsx)(P.$, {
                variant: "primary",
                size: "sm",
                disabled: !0,
                text: E.intl.string(E.t["13ofGu"]),
            }),
        }),
    });
}
function ef(e) {
    let { isUserVerified: t } = e,
        i = t ? E.intl.string(E.t.WWzQta) : E.intl.string(E.t.woMjLV);
    return (0, n.jsx)(el.ZK, {
        className: ei.jm,
        icon: eu.u,
        text: i,
        footnote: E.intl.string(E.t["jMh+TY"]),
        meetsRequirement: t,
        children: (0, n.jsx)(P.$, {
            variant: "primary",
            size: "sm",
            text: E.intl.string(E.t["13ofGu"]),
            onClick: () => {
                (0, c.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("93816"),
                            l.e("94232"),
                            l.e("54975"),
                            l.e("89545"),
                            l.e("84704"),
                            l.e("86197"),
                        ]).then(l.bind(l, 615715));
                        return (t) => (0, n.jsx)(e, { reason: ed.d.GUILD_PHONE_REQUIRED, ...t });
                    },
                    { modalKey: ec.V },
                );
            },
        }),
    });
}
var ex = l(273926),
    eh = l(453016);
function eg(e) {
    let { guildId: t, formFields: l, updateFormFields: i } = e,
        s = (0, g.bG)([C.A], () => C.A.getGuild(t)?.rulesChannelId),
        r = (e, t) => {
            let n = l[e];
            i([...l.slice(0, e), { ...n, response: t }, ...l.slice(e + 1)]);
        };
    return (0, n.jsx)(n.Fragment, {
        children: l.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case b.rX.TERMS:
                        return (0, n.jsx)(
                            ex.Ot,
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
                    case b.rX.TEXT_INPUT:
                        return (0, n.jsx)(eh.y4, { formField: e, autofocus: 0 === t, onChange: (e) => r(t, e) }, t);
                    case b.rX.PARAGRAPH:
                        return (0, n.jsx)(eo.zD, { formField: e, autofocus: 0 === t, onChange: (e) => r(t, e) }, t);
                    case b.rX.MULTIPLE_CHOICE:
                        return (0, n.jsx)(
                            ea.MZ,
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
function ej(e) {
    let t,
        { guildId: l, formFields: i, updateFormFields: s, disableVerification: r } = e,
        a = (0, g.bG)([q.default], () => q.default.getCurrentUser()),
        o = ee({ guildId: l });
    return ((t = o === J.PvD.NONE ? null : o === J.PvD.VERY_HIGH ? em : es), null == a)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !r && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(eg, { guildId: l, formFields: i, updateFormFields: s }),
              ],
          });
}
function ev(e) {
    let t,
        { guildId: l, formFields: i, updateFormFields: r, disableVerification: a } = e,
        o = (0, g.bG)([q.default], () => q.default.getCurrentUser()),
        u = ee({ guildId: l }),
        d = o?.isPhoneVerified() || o?.isStaff(),
        c = o?.verified || d,
        m = !1;
    u === J.PvD.NONE
        ? ((m = !0), (t = null))
        : u === J.PvD.VERY_HIGH
          ? ((m = d ?? !1), (t = ef))
          : ((m = c ?? !1), (t = er));
    let f = s.useRef(m);
    return null == o
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !a && !f.current && null != t && (0, n.jsx)(t, { isUserVerified: m }),
                  (0, n.jsx)(eg, { guildId: l, formFields: i, updateFormFields: r }),
              ],
          });
}
var ep = l(260197),
    eC = l(944970);
let eN = (e) => {
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
            className: eC.Qs,
            children: [
                (0, n.jsx)("div", {
                    className: eC.DS,
                    children: (0, n.jsx)("img", {
                        alt: E.intl.string(E.t.ewGfjv),
                        src: "/assets/138ad5b31e172be7.svg",
                        className: eC.In,
                    }),
                }),
                (0, n.jsx)(y.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: eC.wx,
                    children: u && !d ? E.intl.string(E.t.qQYF6z) : E.intl.string(E.t.MhcDLz),
                }),
                (0, n.jsx)(O.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: E.intl.string(E.t["SPlaR/"]),
                }),
                (0, n.jsx)("hr", { className: eC.yF }),
                (0, n.jsx)("div", {
                    className: eC.kz,
                    children: (0, n.jsx)(_.k, {
                        label: E.intl.string(E.t.dI4d4S),
                        value: l,
                        error: a,
                        onChange: s,
                        autoFocus: !0,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: eC.kz,
                    children: (0, n.jsx)(_.k, {
                        label: E.intl.string(E.t["CIGa+7"]),
                        type: "password",
                        value: i,
                        error: o,
                        onChange: r,
                    }),
                }),
            ],
        });
    },
    eA = (e) => {
        let { headerId: t, email: l } = e;
        return (0, n.jsxs)("div", {
            className: eC.Qs,
            children: [
                (0, n.jsx)("img", {
                    alt: E.intl.string(E.t.wNAblz),
                    src: "/assets/733e8e16d7ff7288.svg",
                    className: eC.In,
                }),
                (0, n.jsx)(y.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: eC.wx,
                    children: E.intl.format(E.t.v01XgL, { email: l }),
                }),
                (0, n.jsx)(O.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: E.intl.string(E.t["/Hw5ad"]),
                }),
                (0, n.jsx)("div", {
                    className: eC.rb,
                    children: (0, n.jsx)(T.Q, {
                        onClick: () => w.A.verifyResend(),
                        text: E.intl.string(E.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    eb = (e) => {
        let { guildId: t, formState: l, updateFormState: i, isPreview: s = !1, disableVerification: r = !1 } = e,
            a = (0, g.bG)([x.A], () => x.A.get(t));
        if (null == a) return null;
        let o = l ?? a?.formFields ?? [];
        return (0, n.jsx)(s ? ej : ev, { guildId: t, formFields: o, updateFormFields: i, disableVerification: r });
    },
    eI = (e) => {
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
            className: eC.Qs,
            children: [
                (0, n.jsx)(y.D, {
                    id: l,
                    variant: "heading-xxl/normal",
                    className: eC.wx,
                    children: a ? E.intl.format(E.t.cgX47Z, { guildName: r }) : E.intl.string(E.t.DrEEC8),
                }),
                (0, n.jsx)(O.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: a ? E.intl.string(E.t["3smSPP"]) : E.intl.string(E.t["7D3C5p"]),
                }),
                (0, n.jsx)(eb, { guildId: t, formState: i, updateFormState: s, isPreview: u, disableVerification: o }),
            ],
        });
    },
    eE = (e) => {
        var t, l;
        let i,
            r,
            a,
            o,
            { verificationForm: u, headerId: d, guildId: c, onClose: m, onComplete: f, isPreview: v = !1 } = e,
            p =
                ((t = u?.guild),
                (i = (0, g.bG)([C.A], () => C.A.getGuild(c))),
                (r = (0, g.bG)([j.A], () => j.A.getGuild())),
                s.useMemo(
                    () => (v && r?.id === c ? r : null != i ? i : null != t ? (0, N.Yh)(t) : null),
                    [v, r, c, i, t],
                )),
            { guildProfile: A, fetchGuildProfile: y } = (0, V.u)(c),
            _ = (0, g.bG)([X.Ay, z.default], () => X.Ay.isMember(c, z.default.getId())),
            [T, w] = s.useState(!1);
        s.useEffect(() => {
            _ && !T && null == A && y().finally(() => w(!0));
        }, [y, A, T, _]);
        let W = u?.formFields.some((e) => e.field_type !== b.rX.TERMS),
            [Q, ee] = s.useState(u?.formFields ?? []),
            [et, el] = s.useState(!1),
            [ei, en] = s.useState(null),
            [es, er] = s.useState(""),
            [ea, eo] = s.useState(""),
            [eu, ed] = s.useState(null),
            [ec, em] = s.useState(null),
            { storeMemberCount: ef, storeOnlineCount: ex } = (0, g.cf)([$.A], () => ({
                storeMemberCount: $.A.getMemberCount(c),
                storeOnlineCount: $.A.getOnlineCount(c),
            })),
            eh = ex ?? u?.guild?.approximate_presence_count,
            eg = ef ?? u?.guild?.approximate_member_count,
            ej = W ?? !1;
        s.useEffect(() => {
            null != u && ee(u.formFields);
        }, [u]),
            s.useEffect(() => {
                null != c && K.default.track(J.HAw.OPEN_MODAL, { type: ep.mk, guild_id: c });
            }, [c]);
        let ev = (0, g.bG)([q.default], () => q.default.getCurrentUser()),
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
            })(ev);
        (a = (0, h.YN)((e) => e.hasUnsubmittedChanges)),
            s.useEffect(
                () => (
                    (0, h.Yb)(!1),
                    () => {
                        (0, h.Yb)(!1);
                    }
                ),
                [],
            ),
            s.useEffect(() => {
                let e = Q.some((e) => e.field_type !== b.rX.TERMS && (0, I.Ge)(e));
                e && !a ? (0, h.Yb)(!0) : !e && a && (0, h.Yb)(!1);
            }, [Q, a]);
        let eF = ev?.verified,
            eM = ev?.isPhoneVerified(),
            { invalidFormFields: eR, hasInvalidTermsFormField: eS } = s.useMemo(
                () => ({
                    invalidFormFields: Q.some((e) => !(0, I.Ge)(e)),
                    hasInvalidTermsFormField: Q.some((e) => e.field_type === b.rX.TERMS && !(0, I.Ge)(e)),
                }),
                [Q],
            ),
            ey = s.useMemo(() => {
                if (null == f || eR) return !0;
                if (ej || ev?.isStaff()) return !1;
                switch (p?.verificationLevel) {
                    case J.PvD.VERY_HIGH:
                        return !eM;
                    case J.PvD.LOW:
                    case J.PvD.MEDIUM:
                    case J.PvD.HIGH:
                        return !eF && !eM;
                    case J.PvD.NONE:
                    default:
                        return !1;
                }
            }, [f, eR, ej, ev, p?.verificationLevel, eM, eF]),
            eO = (0, g.bG)([U.A], () => U.A.useReducedMotion),
            e_ = s.useRef(null),
            eT = (function (e) {
                let t = null != e ? B.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    l = (0, R.r)(S.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    i = (0, R.r)(S.A.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [n, s, r] = (0, k.rh)(t, l, !1);
                return `linear-gradient(-45deg, ${n}, ${r ?? i})`;
            })(p),
            eG =
                ((l = A?.brandColorPrimary ?? ""),
                (o = (0, R.r)(S.A.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${o}, ${l})`);
        if (null == p) return (0, n.jsx)(G.y, {});
        let eP = async () => {
                el(!0), ed(null), em(null);
                try {
                    await (0, D.KD)({ email: es, password: ea }), el(!1), eE(F.EMAIL_CONFIRMATION);
                } catch (e) {
                    ed(e?.body?.email), em(e?.body?.password);
                } finally {
                    el(!1);
                }
            },
            eL = async () => {
                el(!0), en(null);
                let e = null != ev ? X.Ay.getMember(c, ev.id) : null;
                if (null != e && !e.isPending) return void m?.(!0);
                try {
                    await f?.({ ...(u ?? x.U), formFields: Q }), m?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? en(E.intl.string(E.t.PD09Sl))
                        : en(e?.message);
                } finally {
                    el(!1);
                }
            },
            ew = null != A;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: eC.uC,
                    children: [
                        (0, n.jsx)("div", { style: { background: ew ? eG : eT }, className: eC.nL }),
                        ew
                            ? (0, n.jsx)(H.Ay, {
                                  profile: A,
                                  className: eC.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, n.jsx)(Y.A, { className: eC.P5, guild: p, presenceCount: eh, memberCount: eg }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: eC.yl,
                    children: (0, n.jsxs)("div", {
                        className: eC.Ok,
                        ref: e_,
                        children: [
                            (0, n.jsx)(Z, {
                                className: eC.jE,
                                containerRef: e_,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, n.jsx)(L.Y, {
                                    className: eC.C9,
                                    steps: [F.CLAIM_ACCOUNT, F.EMAIL_CONFIRMATION, F.VERIFICATION_FORM],
                                    step: eb,
                                    children: (() => {
                                        switch (eb) {
                                            case F.CLAIM_ACCOUNT:
                                                return (0, n.jsx)(eN, {
                                                    headerId: d,
                                                    email: es,
                                                    password: ea,
                                                    setEmail: er,
                                                    setPassword: eo,
                                                    emailError: eu,
                                                    passwordError: ec,
                                                    hasManualFormFields: W,
                                                    isMember: _,
                                                });
                                            case F.EMAIL_CONFIRMATION:
                                                return (0, n.jsx)(eA, { headerId: d, email: es });
                                            case F.VERIFICATION_FORM:
                                                return (0, n.jsx)(eI, {
                                                    headerId: d,
                                                    guildId: c,
                                                    guildName: p.name,
                                                    formState: Q,
                                                    updateFormState: ee,
                                                    isPreview: v,
                                                    useReducedMotion: eO,
                                                    hasManualFormFields: W,
                                                    disableVerification: ej,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (eb) {
                                    case F.CLAIM_ACCOUNT:
                                        return (0, n.jsxs)("div", {
                                            className: eC.qr,
                                            children: [
                                                (0, n.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: eC.RC,
                                                    children: (0, n.jsx)(P.$, {
                                                        variant: "primary",
                                                        text: E.intl.string(E.t.PDTjLN),
                                                        type: "submit",
                                                        loading: et,
                                                        onClick: eP,
                                                        disabled: 0 === es.length || 0 === ea.length,
                                                    }),
                                                }),
                                                (0, n.jsx)(O.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: E.intl.string(E.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case F.EMAIL_CONFIRMATION:
                                        return null;
                                    case F.VERIFICATION_FORM:
                                        return (0, n.jsxs)("div", {
                                            className: eC.qr,
                                            children: [
                                                (0, n.jsx)(M.m, {
                                                    asContainer: !0,
                                                    shouldShow: ey && eR && W,
                                                    text: eS ? E.intl.string(E.t.PLNbh3) : E.intl.string(E.t.brWmV2),
                                                    children: (0, n.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: eC.RC,
                                                        children: (0, n.jsx)(P.$, {
                                                            variant: "active",
                                                            text: E.intl.string(E.t.geKm7t),
                                                            type: "submit",
                                                            loading: et,
                                                            onClick: eL,
                                                            disabled: ey,
                                                        }),
                                                    }),
                                                }),
                                                null != ei &&
                                                    (0, n.jsx)(O.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: ei,
                                                    }),
                                                null == ei &&
                                                    W &&
                                                    (0, n.jsxs)("div", {
                                                        className: eC.BU,
                                                        children: [
                                                            (0, n.jsx)(O.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: E.intl.string(E.t["+fPCTZ"]),
                                                            }),
                                                            (0, n.jsx)(O.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: E.intl.string(E.t.VjgH0c),
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
    eF = () =>
        (0, n.jsx)(o.A, {
            submitting: !1,
            message: E.intl.string(E.t["8g514U"]),
            onReset: () => {
                (0, h.C7)(!1);
            },
            onResetText: E.intl.string(E.t["ETE/oC"]),
            onSave: () => {
                (0, h.C7)(!1), (0, c.closeModal)(ep.LC);
            },
            onSaveText: E.intl.string(E.t["Xt+Uab"]),
            onSaveButtonColor: d.XD.RED,
        }),
    eM = (e) => {
        let { transitionState: t, guildId: l, onClose: i, onComplete: o, inviteKey: d, isPreview: c = !1 } = e,
            j = (0, h.YN)((e) => e.shouldShowWarning),
            { verificationForm: C, hasFetched: N } = (function (e, t, l) {
                let [i, n] = s.useState(!1),
                    r = (0, g.bG)([x.A], () => x.A.get(e)),
                    a = (0, g.bG)([v.A], () => v.A.pendingState);
                return (
                    s.useEffect(() => {
                        t || A.Ay.fetchVerificationForm(e, l).finally(() => n(!0));
                    }, [e, l, t]),
                    {
                        hasFetched: i,
                        verificationForm:
                            s.useMemo(() => {
                                let e;
                                if (!t || null == a) return null;
                                if (a.joinType === p.J.APPLY)
                                    e = null != a.pendingVerificationFields ? [...a.pendingVerificationFields] : void 0;
                                else if (null != a.termRules) {
                                    let t = a.termRules.map((e) => e.value.trim()).filter((e) => "" !== e);
                                    e = [
                                        {
                                            field_type: b.rX.TERMS,
                                            label: E.intl.string(E.t["9suSIA"]),
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
            })(l, c, d),
            I = (0, f.GV)();
        return (s.useEffect(() => {
            N && C === x.U && i();
        }, [N, i, C]),
        C === x.U)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)(r.d, {
                          transitionState: t,
                          "aria-labelledby": I,
                          size: "xxl",
                          onClose: i,
                          children: [
                              (0, n.jsx)("div", {
                                  className: eC.b,
                                  children: (0, n.jsx)(u.J, { onClick: () => i(!1) }),
                              }),
                              (0, n.jsx)("div", {
                                  className: eC.kL,
                                  children: (0, n.jsx)(eE, {
                                      verificationForm: C,
                                      headerId: I,
                                      guildId: l,
                                      onClose: i,
                                      onComplete: o,
                                      isPreview: c,
                                  }),
                              }),
                          ],
                      }),
                      (0, n.jsx)(a.F, {
                          children: !0 === j && (0, n.jsx)(m.F, { className: eC.lm, children: (0, n.jsx)(eF, {}) }),
                      }),
                  ],
              });
    };
