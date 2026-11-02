e.d(n, { default: () => il });
var t = e(477900),
    l = e(582128),
    s = e(935462),
    a = e(289873),
    r = e(780964),
    c = e(766075),
    o = e(393033),
    d = e(257110),
    u = e(503698),
    m = e.n(u),
    x = e(731738),
    p = e(661531),
    h = e(534514),
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
function R(i) {
    return (0, t.jsx)(j.E, {
        variant: "text-md/normal",
        color: "text-muted",
        children: w.intl.format(w.t.IFxUaT, {
            letUsKnowHook: (n, e) =>
                (0, t.jsx)(
                    E.Anchor,
                    { href: i.isAppealEligible ? void 0 : i.appealLink, onClick: i.letUsKnowClick, children: n },
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
function H(i) {
    return (0, t.jsx)("div", {
        className: S.OW,
        children: i.hasBeenAppealed
            ? (0, t.jsx)(b, {})
            : i.isAppealWindowExpired
              ? (0, t.jsx)(F, {})
              : (0, t.jsx)(R, {
                    appealLink: O.d$.APPEALS_LINK,
                    letUsKnowClick: i.onLetUsKnowClick,
                    isAppealEligible: i.isAppealEligible,
                }),
    });
}
var K = e(26095),
    Y = e(607739),
    M = e(652215),
    V = e(6862);
function $(i) {
    let { classificationTypeText: n, guildMetadata: e } = i,
        s = l.useMemo(() => {
            let i = { classification_type: n, classificationHook: (i, n) => (0, t.jsx)("strong", { children: i }, n) };
            return null == e
                ? w.intl.format(w.t.HpvELh, i)
                : e?.member_type === C.Z9.OWNER
                  ? w.intl.format(w.t.X1ngSd, { ...i, guildName: e?.name })
                  : w.intl.format(w.t.rmpEPD, { ...i, guildName: e?.name });
        }, [n, e]);
    return (0, t.jsx)(h.D, { variant: "heading-xl/medium", children: s });
}
function P(i) {
    let { children: n, plain: e = !1 } = i;
    return e
        ? (0, t.jsx)(j.E, { variant: "text-sm/medium", color: "text-subtle", children: n })
        : (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: n });
}
function B(i) {
    let { actions: n, classificationExpiration: e, plainHeader: l } = i,
        s = (0, A.bG)([k.default], () => k.default.locale);
    return 0 === n.filter((i) => i.descriptions.length > 0).length && null == e
        ? null
        : (0, t.jsxs)("div", {
              children: [
                  (0, t.jsx)(P, { plain: l, children: w.intl.string(w.t["O2nYk+"]) }),
                  (0, t.jsxs)("ul", {
                      className: S.nq,
                      children: [
                          n.map((i) => (0, t.jsx)(J, { action: i }, i.id)),
                          null != e
                              ? (0, t.jsx)(
                                    "li",
                                    {
                                        className: S.DJ,
                                        children: (0, t.jsx)(j.E, {
                                            tag: "span",
                                            variant: "heading-md/medium",
                                            color: "text-default",
                                            children: w.intl.format(w.t.TByIjT, {
                                                expirationDate: e.toLocaleDateString(s, { dateStyle: "medium" }),
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
                        variant: "heading-md/medium",
                        color: "text-default",
                        children: w.intl.string(V.default.rn3Gto),
                    }),
                }),
            }),
        ],
    });
}
function J(i) {
    let { action: n } = i;
    return (0, t.jsx)(t.Fragment, {
        children: n.descriptions.map((i, n) =>
            (0, t.jsx)(
                "li",
                {
                    className: S.DJ,
                    children: (0, t.jsx)(j.E, {
                        tag: "span",
                        variant: "heading-md/medium",
                        color: "text-default",
                        children: i,
                    }),
                },
                n,
            ),
        ),
    });
}
function q(i) {
    let { classificationTypeText: n, policyExplainerLink: e } = i;
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
                    children: w.intl.format(w.t.zxUdpj, { classificationDescription: n }),
                }),
            }),
            (0, t.jsx)("div", {
                className: S.g_,
                children: (0, t.jsx)(g._, { size: "md", color: p.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            }),
        ],
    });
}
function z(i) {
    let { tosLink: n, communityGuidelinesLink: e, onLetUsKnowClick: l } = i;
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
                children: w.intl.format(w.t["1Z/+aA"], { tosLink: n, communityGuidelinesLink: e }),
            }),
        ],
    });
}
function Z(i) {
    let { tosLink: n, communityGuidelinesLink: e } = i;
    return (0, t.jsx)(j.E, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: S.yC,
        children: w.intl.format(V.default.vPOpia, { tosLink: n, communityGuidelinesLink: e }),
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
                        variant: "heading-md/medium",
                        color: "text-default",
                        children: w.intl.string(V.default["yV/t/V"]),
                    }),
                }),
            }),
        ],
    });
}
function Q(i) {
    let {
        tosLink: n,
        communityGuidelinesLink: e,
        classificationTypeText: l,
        policyExplainerLink: s,
        appealComponent: a,
    } = i;
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsx)(j.E, { variant: "eyebrow", color: "text-muted", children: w.intl.string(w.t["977iei"]) }),
            (0, t.jsx)(j.E, {
                className: S.t8,
                variant: "text-sm/normal",
                children: w.intl.format(w.t["1Z/+aA"], { tosLink: n, communityGuidelinesLink: e }),
            }),
            (0, t.jsx)(q, { classificationTypeText: l, policyExplainerLink: s }),
            a,
        ],
    });
}
function ii() {
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(W, {}),
            (0, t.jsx)(X, {}),
            (0, t.jsx)(Z, { tosLink: O.d$.TOS_LINK, communityGuidelinesLink: O.d$.COMMUNITY_GUIDELINES }),
        ],
    });
}
let ie = (i) => {
    let { classificationId: n, source: e, onError: s, onClose: a } = i,
        {
            classification: r,
            classificationRequestState: c,
            isAppealEligible: d,
            isDsaEligible: u,
            violationType: p,
        } = (0, D.LJ)(n),
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
            classificationId: n,
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
            classification_ids: [Number(n)],
            source: e,
            is_violative_content_shown: E,
            is_dsa_eligible: u,
            violation_type: p,
        }),
            _
                ? T.A.openV2(n, a)
                : g
                  ? T.A.open(n, a)
                  : d && (L.A.increment({ name: x.K.APPEAL_INGESTION_VIEW }), K.A.open(n)));
    }
    return (l.useEffect(() => {
        V.current = F;
    }),
    l.useEffect(() => {
        let {
            accountStanding: i,
            classificationId: n,
            hasFlaggedContent: e,
            isDsaEligible: t,
            source: l,
            violationType: s,
        } = V.current;
        f &&
            I.default.track(M.HAw.SAFETY_HUB_ACTION, {
                action: O.ZU.ViewViolationDetail,
                account_standing: i.state,
                classification_ids: [Number(n)],
                source: l,
                is_violative_content_shown: e,
                is_dsa_eligible: t,
                violation_type: s,
            });
    }, [f]),
    null == r && c === C.nU.FAILED)
        ? (s(), null)
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
                                ? (0, t.jsx)(ii, {})
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
                                                        isAppealWindowExpired: (0, o.lr)(n) && !g && !_,
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
var it = e(987926);
let il = function (i) {
    let { transitionState: n, onClose: e, classificationId: l, source: u } = i,
        m = (0, d.A)(),
        x = (0, o.W$)();
    function p() {
        (e(), x || (0, c.openUserSettings)(r.X.ACCOUNT_STANDING_CATEGORY));
    }
    return (0, t.jsxs)(s.EO, {
        className: it.CR,
        transitionState: n,
        parentComponent: "ClassificationDetailModal",
        "data-migration-pending": !0,
        children: [
            (0, t.jsx)("div", {
                className: it.Hc,
                children: (0, t.jsx)(s.s_, { "data-migration-pending": !0, className: it.g8, onClick: e }),
            }),
            (0, t.jsx)(s.$m, {
                "data-migration-pending": !0,
                className: it.jE,
                children: m
                    ? (0, t.jsx)(a.y, {})
                    : (0, t.jsx)(ie, { classificationId: l, source: u, onError: p, onClose: p }),
            }),
        ],
    });
};
