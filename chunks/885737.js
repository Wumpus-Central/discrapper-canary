i.d(t, { A: () => A });
var n = i(627968);
i(64700);
var a = i(503698),
    s = i.n(a),
    l = i(397927),
    r = i(235986),
    d = i(739010),
    c = i(393033),
    o = i(39017),
    x = i(808224),
    m = i(246505),
    g = i(239093),
    p = i(985018),
    N = i(491430);
function A(e) {
    let {
            classification: t,
            isDsaEligible: i = !1,
            isSpam: a = !1,
            isCoppa: A = !1,
            appealIngestionType: h,
            className: j,
            onClose: u,
            onNext: _,
        } = e,
        C = (0, o.e)(),
        E = t?.explainer_link ?? "",
        I = null != t && null != t.flagged_content && t.flagged_content.length > 0,
        S = (0, c.eu)(t?.description),
        T = !a && !A && (null == h || h === d.Il.IN_APP),
        v = null != t && ((0, c._g)(t) || I);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: r.A.Direction.VERTICAL,
                className: N.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(l.Heading, {
                        className: N.DD,
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(l.Text, {
                        className: N.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: p.intl.string(p.t.URt7VI),
                    }),
                    null != u && (0, n.jsx)(l.s_y, { "data-migration-pending": !0, className: N.b, onClick: u }),
                ],
            }),
            (0, n.jsxs)(l.$mQ, {
                "data-migration-pending": !0,
                className: s()(N.jE, !v && N.bQ, j),
                paddingFix: !1,
                children: [
                    v && (0, n.jsx)(m.U, { flaggedContent: t.flagged_content ?? [] }),
                    (0, n.jsx)(l.Text, {
                        className: N.l8,
                        color: "text-default",
                        variant: "text-xs/bold",
                        children: p.intl.string(p.t.xsdcxh),
                    }),
                    (0, n.jsx)("div", {
                        className: N.kU,
                        children: (0, n.jsx)(l.Text, { variant: "text-md/semibold", children: S }),
                    }),
                    A &&
                        (0, n.jsx)(x.A, {
                            url: g.d$.AGE_VERIFICATION_LINK,
                            text: p.intl.string(p.t["gJs+kf"]),
                            onClick: () => C(g.ZU.ClickAgeVerificationLink),
                        }),
                    a &&
                        !A &&
                        (0, n.jsx)(x.A, {
                            url: g.d$.SPAM_LINK,
                            text: p.intl.string(p.t["PaNS+I"]),
                            onClick: () => C(g.ZU.ClickSpamWebformLink),
                        }),
                    !A &&
                        (0, n.jsx)(x.A, {
                            text: p.intl.string(p.t["Vtyn/7"]),
                            url: E,
                            onClick: () => C(g.ZU.ClickLearnMoreLink),
                        }),
                    T &&
                        i &&
                        (0, n.jsx)(l.Text, {
                            className: N.C2,
                            variant: "text-xs/normal",
                            children: p.intl.format(p.t.WMUgCX, {}),
                        }),
                ],
            }),
            T &&
                (0, n.jsx)(l.jlY, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(l.Button, { variant: "primary", text: p.intl.string(p.t.PDTjLN), onClick: _ }),
                }),
        ],
    });
}
