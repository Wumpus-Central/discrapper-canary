n.d(t, { m: () => _, A: () => y });
var i = n(477900),
    l = n(582128),
    s = n(62617);
function r(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: a, width: o, height: d, className: c, style: u } = e,
        m = l.useMemo(
            () => (0, s.H)({ width: o, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: u }),
            [o, d, u],
        );
    return (0, i.jsx)("img", {
        style: m,
        src: "https://cdn.discordapp.com/assets/content/2fb67de5cada50399335a03ac11b8e83271559ab2335135f2727d6a40c51e4a6.svg",
        className: (0, s.Z)(c),
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: a ?? "img",
    });
}
var a = n(192308),
    o = n(821609),
    d = n(695366),
    c = n(150934),
    u = n(696986),
    m = n(683071),
    g = n(297264),
    x = n(834730),
    h = n(17928),
    E = n(181658),
    j = n(260509),
    f = n(71393),
    N = n(287809),
    p = n(493540),
    A = n(469993),
    I = n(105292);
function S(e) {
    let t,
        {
            resubmittingEnableRequest: n,
            resubmissionError: l,
            createEnableRequest: s,
            resubmittedRequest: r,
            requestRejectedNoticeText: a,
            reapplyNoticeText: o,
            isApplicationPending: d,
        } = e;
    if (null != l) return (0, i.jsx)(m.w, { type: "critical", message: l.getAnyErrorMessage(), role: "alert" });
    let c = null,
        u = "none";
    return (
        d
            ? ((c = I.intl.string(I.t.OrkTBn)), (u = r ? "status" : "none"))
            : null != a
              ? ((c = a), (u = "none"))
              : null != o && ((c = o), (u = "none"), (t = I.intl.string(I.t["YKw/NQ"]))),
        null != c
            ? (0, i.jsx)(m.w, {
                  type: "warning",
                  message: c,
                  role: u,
                  action: null != t ? { text: t, onClick: s, loading: n } : void 0,
              })
            : null
    );
}
var C = n(98332);
let _ = "role_subscriptions_eligibility_modal";
function v(e) {
    let { guild: t, eligibility: l, eligibilityLoading: s, eligibilityError: r, refreshEligibility: c } = e;
    return (0, i.jsx)(o.$, {
        variant: "primary",
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("129621"), n.e("419631"), n.e("818266")]).then(
                        n.bind(n, 258118),
                    );
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            eligibility: l,
                            eligibilityLoading: s,
                            eligibilityError: r,
                            refreshEligibility: c,
                            guildId: t.id,
                        });
                },
                { modalKey: _ },
            );
        },
        size: "md",
        text: I.intl.string(I.t.NL5ZNS),
        icon: d.E,
    });
}
function T(e) {
    let { guild: t, checkboxText: n } = e,
        {
            canSubmitAcceptance: s,
            error: r,
            loading: a,
            submitAcceptTermsRequest: d,
        } = (function (e) {
            let t = (0, h.bG)([f.A], () => f.A.getGuild(e)),
                [n, i] = l.useState(),
                [s, r] = l.useState(!1),
                a = (0, A.ME)(t);
            return {
                canSubmitAcceptance: (0, h.bG)(
                    [N.default],
                    () => {
                        let e = N.default.getCurrentUser();
                        return null != t && (0, j.bM)(t, e);
                    },
                    [t],
                ),
                error: n,
                loading: s,
                submitAcceptTermsRequest: l.useCallback(async () => {
                    if (null != e && a) {
                        (r(!0), i(void 0));
                        try {
                            await p.Bo(e);
                        } catch (e) {
                            i(new E.A(e));
                        } finally {
                            r(!1);
                        }
                    }
                }, [e, void 0, a]),
            };
        })(t.id),
        [g, x] = l.useState(!1);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(c.S, {
                onChange: function () {
                    x((e) => !e);
                },
                checked: g,
                label: n,
            }),
            (0, i.jsx)(u.h, { size: 24 }),
            (0, i.jsx)(o.$, {
                disabled: !g || !s,
                onClick: d,
                loading: a,
                variant: "primary",
                text: I.intl.string(I.t.NL5ZNS),
            }),
            null != r &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(u.h, { size: 24 }),
                        (0, i.jsx)(m.w, { type: "critical", message: r.getAnyErrorMessage(), role: "alert" }),
                    ],
                }),
        ],
    });
}
function b(e) {
    let { guild: t, monetizationEligibility: n } = e,
        {
            eligibilityLoading: l,
            eligibilityError: s,
            refreshEligibility: r,
            eligibility: a,
            eligibleForMonetization: o,
            acceptTermsCheckboxText: d,
            wasRejectedInV1: c,
        } = n;
    return o
        ? c
            ? (0, i.jsx)(S, { ...n })
            : (0, i.jsx)(T, { guild: t, checkboxText: d })
        : (0, i.jsx)(v, {
              guild: t,
              eligibility: a,
              eligibilityLoading: l,
              eligibilityError: s,
              refreshEligibility: r,
          });
}
function y(e) {
    let { guild: t, monetizationEligibility: n } = e;
    return (0, i.jsxs)("div", {
        className: C.OQ,
        children: [
            (0, i.jsx)("div", {
                className: C.hV,
                children: (0, i.jsx)(r, { alt: I.intl.string(I.t.Af4klP), width: "54%" }),
            }),
            (0, i.jsxs)("div", {
                className: C.mv,
                children: [
                    (0, i.jsx)(g.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: I.intl.string(I.t["PqYfh/"]),
                    }),
                    (0, i.jsx)(u.h, { size: 12 }),
                    (0, i.jsx)(x.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        children: I.intl.string(I.t["41wkMc"]),
                    }),
                    (0, i.jsx)(u.h, { size: 24 }),
                    (0, i.jsx)(b, { guild: t, monetizationEligibility: n }),
                ],
            }),
        ],
    });
}
