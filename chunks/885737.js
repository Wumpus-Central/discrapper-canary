n.d(i, { A: () => u }), n(228524);
var t = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    l = n(397927),
    r = n(235986),
    d = n(739010),
    c = n(393033),
    o = n(261398),
    x = n(808224),
    m = n(246505),
    g = n(239093),
    p = n(985018),
    N = n(299916);
function u(e) {
    var i, n;
    let {
            classification: a,
            isDsaEligible: u = !1,
            isSpam: A = !1,
            isCoppa: h = !1,
            appealIngestionType: j,
            className: _,
            onClose: C,
            onNext: E,
        } = e,
        I = (0, o.e)(),
        v = null != (i = null == a ? void 0 : a.explainer_link) ? i : "",
        S = null != a && null != a.flagged_content && a.flagged_content.length > 0,
        T = (0, c.eu)(null == a ? void 0 : a.description),
        k = !A && !h && (null == j || j === d.Il.IN_APP),
        L = null != a && ((0, c._g)(a) || S);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: r.A.Direction.VERTICAL,
                className: N.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(l.Heading, {
                        className: N.DD,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(l.Text, {
                        className: N.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t.URt7VI),
                    }),
                    null != C &&
                        (0, t.jsx)(l.s_y, {
                            "data-migration-pending": !0,
                            className: N.b,
                            onClick: C,
                        }),
                ],
            }),
            (0, t.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: s()(N.jE, !L && N.bQ, _),
                paddingFix: !1,
                children: [
                    L && (0, t.jsx)(m.U, { flaggedContent: null != (n = a.flagged_content) ? n : [] }),
                    (0, t.jsx)(l.Text, {
                        className: N.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: p.intl.string(p.t.xsdcxh),
                    }),
                    (0, t.jsx)("div", {
                        className: N.kU,
                        children: (0, t.jsx)(l.Text, {
                            variant: "text-md/semibold",
                            children: T,
                        }),
                    }),
                    h &&
                        (0, t.jsx)(x.A, {
                            url: g.d$.AGE_VERIFICATION_LINK,
                            text: p.intl.string(p.t["gJs+kf"]),
                            onClick: () => I(g.ZU.ClickAgeVerificationLink),
                        }),
                    A &&
                        !h &&
                        (0, t.jsx)(x.A, {
                            url: g.d$.SPAM_LINK,
                            text: p.intl.string(p.t["PaNS+I"]),
                            onClick: () => I(g.ZU.ClickSpamWebformLink),
                        }),
                    !h &&
                        (0, t.jsx)(x.A, {
                            text: p.intl.string(p.t["Vtyn/7"]),
                            url: v,
                            onClick: () => I(g.ZU.ClickLearnMoreLink),
                        }),
                    k &&
                        u &&
                        (0, t.jsx)(l.Text, {
                            className: N.C2,
                            variant: "text-xs/normal",
                            children: p.intl.format(p.t.WMUgCX, {}),
                        }),
                ],
            }),
            k &&
                (0, t.jsx)(l.jlY, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)(l.Button, {
                        variant: "primary",
                        text: p.intl.string(p.t.PDTjLN),
                        onClick: E,
                    }),
                }),
        ],
    });
}
