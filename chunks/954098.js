e.d(i, { default: () => nt });
var t = e(477900),
    l = e(582128),
    a = e(935462),
    s = e(289873),
    r = e(780964),
    c = e(766075),
    o = e(393033),
    d = e(257110),
    u = e(503698),
    m = e.n(u),
    x = e(731738),
    p = e(661531),
    h = e(297264),
    j = e(834730),
    E = e(28863),
    f = e(231483),
    g = e(320448),
    _ = e(939249),
    A = e(17928),
    N = e(306537),
    v = e(462924),
    L = e(807393),
    k = e(773669),
    I = e(174459),
    T = e(67521),
    C = e(739010),
    U = e(207913),
    y = e(335891),
    D = e(985481),
    G = e(259960),
    O = e(239093),
    w = e(105292),
    S = e(52111);
function b() {
    return (0, t.jsx)(j.E, { variant: "text-md/normal", color: "text-muted", children: w.intl.string(w.t["I2H0/E"]) });
}
function R(n) {
    return (0, t.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-muted",
        children: w.intl.format(w.t.IFxUaT, {
            letUsKnowHook: (i, e) =>
                (0, t.jsx)(
                    E.Anchor,
                    { href: n.isAppealEligible ? void 0 : n.appealLink, onClick: n.letUsKnowClick, children: i },
                    e,
                ),
        }),
    });
}
function F() {
    return (0, t.jsxs)("div", {
        className: S.Jx,
        children: [
            (0, t.jsx)(j.E, { variant: "text-md/medium", color: "text-default", children: w.intl.string(w.t.PHriyz) }),
            (0, t.jsx)(j.E, { variant: "text-sm/normal", color: "text-muted", children: w.intl.string(w.t.YsxY1D) }),
        ],
    });
}
function H(n) {
    return (0, t.jsx)("div", {
        className: S.OW,
        children: n.hasBeenAppealed
            ? (0, t.jsx)(b, {})
            : n.isAppealWindowExpired
              ? (0, t.jsx)(F, {})
              : (0, t.jsx)(R, {
                    appealLink: O.d$.APPEALS_LINK,
                    letUsKnowClick: n.onLetUsKnowClick,
                    isAppealEligible: n.isAppealEligible,
                }),
    });
}
var K = e(26095),
    Y = e(607739),
    M = e(652215),
    V = e(876891);
function $(n) {
    let { classificationTypeText: i, guildMetadata: e } = n,
        a = l.useMemo(() => {
            let n = { classification_type: i, classificationHook: (n, i) => (0, t.jsx)("strong", { children: n }, i) };
            return null == e
                ? w.intl.format(w.t.HpvELh, n)
                : e?.member_type === C.Z9.OWNER
                  ? w.intl.format(w.t.X1ngSd, { ...n, guildName: e?.name })
                  : w.intl.format(w.t.rmpEPD, { ...n, guildName: e?.name });
        }, [i, e]);
    return (0, t.jsx)(h.D, { variant: "heading-xl/normal", children: a });
}
function P(n) {
    let { children: i, plain: e = !1 } = n;
    return e
        ? (0, t.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", children: i })
        : (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: i });
}
function B(n) {
    let { actions: i, classificationExpiration: e, plainHeader: l } = n,
        a = (0, A.bG)([k.default], () => k.default.locale);
    return 0 === i.filter((n) => n.descriptions.length > 0).length && null == e
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(P, { plain: l, children: w.intl.string(w.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: S.nq,
                      children: [
                          i.map((n) => (0, t.jsx)(J, { action: n }, n.id)),
                          null != e
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: S.DJ,
                                        children: (0, t.jsx)(j.E, {
                                            tag: "span",
                                            variant: "heading-md/normal",
                                            color: "text-default",
                                            children: w.intl.format(w.t.TByIjT, {
                                                expirationDate: e.toLocaleDateString(a, { dateStyle: "medium" }),
                                            }),
                                        }),
                                    },
                                    "expiration",
                                )
                              : null,
                      ],
                  }),
              ],
          });
}
function W() {
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(P, { plain: !0, children: w.intl.string(w.t["O2nYk+"]) }),
            (0, t.jsx)("ul", {
                className: S.nq,
                children: (0, t.jsx)("li", {
                    className: S.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: w.intl.string(V.default.rn3Gto),
                    }),
                }),
            }),
        ],
    });
}
function J(n) {
    let { action: i } = n;
    return (0, t.jsx)(t.Fragment, {
        children: i.descriptions.map((n, i) =>
            (0, t.jsx)(
                "li",
                {
                    className: S.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: n,
                    }),
                },
                i,
            ),
        ),
    });
}
function q(n) {
    let { classificationTypeText: i, policyExplainerLink: e } = n;
    return (0, t.jsxs)(E.Anchor, {
        href: e,
        className: S.F8,
        useDefaultUnderlineStyles: !1,
        children: [
            (0, t.jsx)("div", {
                className: S.yi,
                children: (0, t.jsx)(f.ShieldIcon, { size: "md", color: p.A.colors.BORDER_FOCUS }),
            }),
            (0, t.jsx)("div", {
                className: S.wC,
                children: (0, t.jsx)(j.E, {
                    variant: "text-md/normal",
                    children: w.intl.format(w.t.zxUdpj, { classificationDescription: i }),
                }),
            }),
            (0, t.jsx)("div", {
                className: S.g_,
                children: (0, t.jsx)(g._, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function z(n) {
    let { tosLink: i, communityGuidelinesLink: e, onLetUsKnowClick: l } = n;
    return (0, t.jsxs)("div", {
        className: S.vq,
        children: [
            (0, t.jsx)(P, { plain: !0, children: w.intl.string(w.t.RVEiD0) }),
            (0, t.jsxs)(_.D, {
                className: S._m,
                onClick: l,
                children: [
                    (0, t.jsx)(j.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: w.intl.string(w.t.YQPbuc),
                    }),
                    (0, t.jsx)(g._, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
                ],
            }),
            (0, t.jsx)(j.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: S.$L,
                children: w.intl.format(w.t["1Z/+aA"], { tosLink: i, communityGuidelinesLink: e }),
            }),
        ],
    });
}
function Z(n) {
    let { tosLink: i, communityGuidelinesLink: e } = n;
    return (0, t.jsx)(j.E, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: S.yC,
        children: w.intl.format(V.default.vPOpia, { tosLink: i, communityGuidelinesLink: e }),
    });
}
function X() {
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(P, { plain: !0, children: w.intl.string(w.t["977iei"]) }),
            (0, t.jsx)("ul", {
                className: S.nq,
                children: (0, t.jsx)("li", {
                    className: S.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/normal",
                        color: "text-default",
                        children: w.intl.string(V.default["yV/t/V"]),
                    }),
                }),
            }),
        ],
    });
}
function Q(n) {
    let {
        tosLink: i,
        communityGuidelinesLink: e,
        classificationTypeText: l,
        policyExplainerLink: a,
        appealComponent: s,
    } = n;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: w.intl.string(w.t["977iei"]) }),
            (0, t.jsx)(j.E, {
                className: S.t8,
                variant: "text-sm/normal",
                children: w.intl.format(w.t["1Z/+aA"], { tosLink: i, communityGuidelinesLink: e }),
            }),
            (0, t.jsx)(q, { classificationTypeText: l, policyExplainerLink: a }),
            s,
        ],
    });
}
function nn() {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(W, {}),
            (0, t.jsx)(X, {}),
            (0, t.jsx)(Z, { tosLink: O.d$.TOS_LINK, communityGuidelinesLink: O.d$.COMMUNITY_GUIDELINES }),
        ],
    });
}
let ni = (n) => {
    let { classificationId: i, source: e, onError: a, onClose: s } = n,
        {
            classification: r,
            classificationRequestState: c,
            isAppealEligible: d,
            isDsaEligible: u,
            violationType: p,
        } = (0, D.LJ)(i),
        h = (0, A.bG)([U.A], () => U.A.getAppealEligibility()),
        j = (0, y.K)(),
        E = null != r && null != r.flagged_content && r.flagged_content.length > 0,
        f = (0, G.v)(),
        g = !!r?.is_coppa && h.includes(C.RH.AGE_VERIFY_ELIGIBLE),
        _ = !!r?.is_coppa && h.includes(C.RH.AGE_VERIFY_GLOBAL_ELIGIBLE),
        k = (0, v.M)(N.q1.AUTOMATED_UNDERAGE_APPEALS),
        w = _ && k,
        b = (0, A.bG)([U.A], () => U.A.getIsManualReviewDecidedUnderage()),
        R = !!r?.is_coppa && b,
        F = {
            accountStanding: j,
            classificationId: i,
            hasFlaggedContent: E,
            isDsaEligible: u,
            source: e,
            violationType: p,
        },
        V = l.useRef(F);
    function P() {
        (I.default.track(M.HAw.SAFETY_HUB_ACTION, {
            action: O.ZU.ClickLetUsKnow,
            account_standing: j.state,
            classification_ids: [Number(i)],
            source: e,
            is_violative_content_shown: E,
            is_dsa_eligible: u,
            violation_type: p,
        }),
            _
                ? T.A.openV2(i, s)
                : g
                  ? T.A.open(i, s)
                  : d && (L.A.increment({ name: x.K.APPEAL_INGESTION_VIEW }), K.A.open(i)));
    }
    return (l.useEffect(() => {
        V.current = F;
    }),
    l.useEffect(() => {
        let {
            accountStanding: n,
            classificationId: i,
            hasFlaggedContent: e,
            isDsaEligible: t,
            source: l,
            violationType: a,
        } = V.current;
        f &&
            I.default.track(M.HAw.SAFETY_HUB_ACTION, {
                action: O.ZU.ViewViolationDetail,
                account_standing: n.state,
                classification_ids: [Number(i)],
                source: l,
                is_violative_content_shown: e,
                is_dsa_eligible: t,
                violation_type: a,
            });
    }, [f]),
    null == r && c === C.nU.FAILED)
        ? (a(), null)
        : null == r
          ? null
          : (0, t.jsxs)("div", {
                className: S.ch,
                children: [
                    (0, t.jsx)("div", {
                        className: S.uW,
                        children: (0, t.jsx)($, {
                            classificationTypeText: r.description,
                            guildMetadata: r?.guild_metadata,
                        }),
                    }),
                    (0, t.jsxs)("div", {
                        className: m()(S.rf, S.uW),
                        children: [
                            (0, t.jsx)(Y.U, { flaggedContent: r.flagged_content ?? [] }),
                            R
                                ? (0, t.jsx)(nn, {})
                                : (0, t.jsxs)(t.Fragment, {
                                      children: [
                                          (0, t.jsx)(B, {
                                              actions: r.actions,
                                              classificationExpiration: (0, o.$r)(r),
                                              plainHeader: w,
                                          }),
                                          w
                                              ? (0, t.jsx)(z, {
                                                    tosLink: O.d$.TOS_LINK,
                                                    communityGuidelinesLink: O.d$.COMMUNITY_GUIDELINES,
                                                    onLetUsKnowClick: P,
                                                })
                                              : (0, t.jsx)(Q, {
                                                    classificationTypeText: r.description,
                                                    tosLink: O.d$.TOS_LINK,
                                                    communityGuidelinesLink: O.d$.COMMUNITY_GUIDELINES,
                                                    policyExplainerLink: r.explainer_link,
                                                    appealComponent: (0, t.jsx)(H, {
                                                        hasBeenAppealed: null != r.appeal_status,
                                                        isAppealWindowExpired: (0, o.lr)(i) && !g && !_,
                                                        onLetUsKnowClick: P,
                                                        isAppealEligible: d || g,
                                                    }),
                                                }),
                                      ],
                                  }),
                        ],
                    }),
                ],
            });
};
var ne = e(987926);
let nt = function (n) {
    let { transitionState: i, onClose: e, classificationId: l, source: u } = n,
        m = (0, d.A)(),
        x = (0, o.W$)();
    function p() {
        (e(), x || (0, c.openUserSettings)(r.X.ACCOUNT_STANDING_CATEGORY));
    }
    return (0, t.jsxs)(a.EO, {
        className: ne.CR,
        transitionState: i,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: ne.Hc,
                children: (0, t.jsx)(a.s_, { "data-migration-pending": !0, className: ne.g8, onClick: e }),
            }),
            (0, t.jsx)(a.$m, {
                "data-migration-pending": !0,
                className: ne.jE,
                children: m
                    ? (0, t.jsx)(s.y, {})
                    : (0, t.jsx)(ni, { classificationId: l, source: u, onError: p, onClose: p }),
            }),
        ],
    });
};
