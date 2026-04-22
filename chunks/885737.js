n.d(e, { A: () => E });
var t = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(935462),
    r = n(534514),
    c = n(834730),
    d = n(821609),
    o = n(235986),
    x = n(739010),
    m = n(393033),
    g = n(39017),
    p = n(808224),
    N = n(246505),
    A = n(239093),
    h = n(985018),
    j = n(503193);
function E(i) {
    let {
            classification: e,
            isDsaEligible: n = !1,
            isSpam: a = !1,
            isCoppa: E = !1,
            appealIngestionType: u,
            className: _,
            onClose: C,
            onNext: I,
        } = i,
        S = (0, g.e)(),
        v = e?.explainer_link ?? "",
        k = null != e && null != e.flagged_content && e.flagged_content.length > 0,
        L = (0, m.eu)(e?.description),
        T = !a && !E && (null == u || u === x.Il.IN_APP),
        b = null != e && ((0, m._g)(e) || k);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ, {
                "data-migration-pending": !0,
                direction: o.A.Direction.VERTICAL,
                className: j.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(r.D, {
                        className: j.DD,
                        variant: "heading-xl/semibold",
                        children: h.intl.string(h.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(c.E, {
                        className: j.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: h.intl.string(h.t.URt7VI),
                    }),
                    null != C && (0, t.jsx)(l.s_, { "data-migration-pending": !0, className: j.b, onClick: C }),
                ],
            }),
            (0, t.jsxs)(l.$m, {
                "data-migration-pending": !0,
                className: s()(j.jE, !b && j.bQ, _),
                paddingFix: !1,
                children: [
                    b && (0, t.jsx)(N.U, { flaggedContent: e.flagged_content ?? [] }),
                    (0, t.jsx)(c.E, {
                        className: j.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: h.intl.string(h.t.xsdcxh),
                    }),
                    (0, t.jsx)("div", {
                        className: j.kU,
                        children: (0, t.jsx)(c.E, { variant: "text-md/semibold", children: L }),
                    }),
                    E &&
                        (0, t.jsx)(p.A, {
                            url: A.d$.AGE_VERIFICATION_LINK,
                            text: h.intl.string(h.t["gJs+kf"]),
                            onClick: () => S(A.ZU.ClickAgeVerificationLink),
                        }),
                    a &&
                        !E &&
                        (0, t.jsx)(p.A, {
                            url: A.d$.SPAM_LINK,
                            text: h.intl.string(h.t["PaNS+I"]),
                            onClick: () => S(A.ZU.ClickSpamWebformLink),
                        }),
                    !E &&
                        (0, t.jsx)(p.A, {
                            text: h.intl.string(h.t["Vtyn/7"]),
                            url: v,
                            onClick: () => S(A.ZU.ClickLearnMoreLink),
                        }),
                    T &&
                        n &&
                        (0, t.jsx)(c.E, {
                            className: j.C2,
                            variant: "text-xs/normal",
                            children: h.intl.format(h.t.WMUgCX, {}),
                        }),
                ],
            }),
            T &&
                (0, t.jsx)(l.jl, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(d.$, { variant: "primary", text: h.intl.string(h.t.PDTjLN), onClick: I }),
                }),
        ],
    });
}
