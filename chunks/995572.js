s.d(t, { Ay: () => I }), s(321073);
var i = s(627968),
    r = s(64700),
    a = s(503698),
    l = s.n(a),
    n = s(284009),
    C = s.n(n),
    d = s(172218),
    o = s(573613),
    c = s(821609),
    x = s(311907),
    h = s(389723),
    p = s(289873),
    _ = s(534514),
    f = s(834730),
    u = s(673698),
    j = s(803306),
    m = s(718213),
    g = s(544028),
    L = s(994500),
    y = s(427262),
    v = s(326084),
    A = s(851746),
    S = s(972007),
    w = s(509870),
    N = s(221736),
    E = s(985018),
    b = s(287491),
    F = s(205372),
    U = s(72454),
    M = s(320896),
    R = s(207081);
function k(e) {
    let { numOfSelectedUsers: t, anySelected: s } = e,
        r = (0, w.A)({ numNewSelected: t, anySelected: s });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: b.DD,
                children: [
                    (0, i.jsx)(Z, { className: b.oc }),
                    (0, i.jsx)(_.D, { variant: "heading-xl/bold", children: E.intl.string(E.t.Lm2nFc) }),
                ],
            }),
            (0, i.jsx)(f.E, { className: b.h_, variant: "text-md/medium", color: "text-default", children: r }),
        ],
    });
}
function B() {
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: b.DD,
                children: (0, i.jsx)(_.D, { variant: "heading-xl/bold", children: E.intl.string(E.t["PFp+aJ"]) }),
            }),
            (0, i.jsx)(f.E, {
                className: b.h_,
                variant: "text-md/medium",
                color: "text-default",
                children: E.intl.string(E.t.eBIGB4),
            }),
        ],
    });
}
function O() {
    return (0, i.jsx)("div", { className: b.JM, children: (0, i.jsx)(u._, { src: M, width: 225, height: 160 }) });
}
function D(e) {
    let { onClose: t } = e;
    return (0, i.jsxs)("div", {
        className: b.LK,
        children: [
            (0, i.jsxs)("div", {
                className: l()(b.tU, b.HE),
                children: [
                    (0, i.jsx)("div", {
                        className: b.DD,
                        children: (0, i.jsx)(_.D, { variant: "heading-xl/bold", children: E.intl.string(E.t.a9HOKg) }),
                    }),
                    (0, i.jsx)(f.E, {
                        className: b.h_,
                        variant: "text-md/medium",
                        color: "text-default",
                        children: E.intl.string(E.t.JjjeZb),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: b.JM, children: (0, i.jsx)(u._, { src: U, width: 178, height: 190 }) }),
            (0, i.jsx)("div", {
                className: l()(b.qr, b.h0),
                children: (0, i.jsx)("div", {
                    className: b.tA,
                    children: (0, i.jsx)(c.$, {
                        variant: "primary",
                        fullWidth: !0,
                        text: E.intl.string(E.t.wpSqAW),
                        onClick: () => t(),
                    }),
                }),
            }),
        ],
    });
}
function G(e) {
    let { onShare: t } = e,
        s = (0, x.bG)([A.A], () => A.A.getRecipientStatus()),
        [a, n] = r.useState([]),
        [C, d] = r.useState(new Set()),
        [o, h] = r.useState(!1);
    return (
        r.useEffect(() => {
            (async () => {
                let e = [];
                for (let [t, i] of s)
                    if (!L.A.isBlockedOrIgnored(t) && i === v.aK.PENDING) {
                        let s = await (0, j.wz)(t);
                        e.push(s);
                    }
                n(e);
            })();
        }, [s]),
        (0, i.jsxs)("div", {
            className: b.Dy,
            children: [
                (0, i.jsxs)("div", {
                    className: l()(b.hi, b.HE),
                    children: [
                        (0, i.jsxs)("div", {
                            className: b.DD,
                            children: [
                                (0, i.jsx)(Z, { className: b.oc }),
                                (0, i.jsx)(_.D, { variant: "heading-xl/bold", children: E.intl.string(E.t.SY9tyI) }),
                            ],
                        }),
                        (0, i.jsx)(f.E, {
                            className: b.h_,
                            variant: "text-md/medium",
                            color: "text-default",
                            children: E.intl.string(E.t.mPmPri),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: b.p_,
                    children: a.map((e) =>
                        (0, i.jsx)(
                            N.A,
                            {
                                user: e,
                                checked: C.has(e),
                                onChange: (e, t) => {
                                    d((s) => {
                                        let i = new Set(s);
                                        return t ? i.add(e) : i.delete(e), i;
                                    });
                                },
                            },
                            e.id,
                        ),
                    ),
                }),
                (0, i.jsx)("div", {
                    className: l()(b.qr, b.h0),
                    children: (0, i.jsx)("div", {
                        className: b.tA,
                        children: (0, i.jsx)(c.$, {
                            text: E.intl.string(E.t.ItpQxk),
                            fullWidth: !0,
                            variant: "primary",
                            disabled: o,
                            onClick: async () => {
                                h(!0), await t([...C.values()]), h(!1);
                            },
                        }),
                    }),
                }),
            ],
        })
    );
}
function Z(e) {
    let { className: t } = e;
    return "light" === (0, x.bG)([g.A], () => g.A.theme)
        ? (0, i.jsx)(u._, { className: t, src: F, width: 55, height: 38 })
        : (0, i.jsx)(u._, { className: t, src: R, width: 55, height: 38 });
}
let I = function (e) {
    let { onClose: t, onShare: s } = e,
        a = (0, x.bG)([A.A], () => A.A.getReferralsRemaining()),
        [n, _] = r.useState(""),
        f = (0, m.A)(n, 400),
        [u, j] = r.useState(new Map()),
        [g, L] = r.useState(!1),
        {
            eligibleUsers: v,
            fetchUsers: w,
            hasError: F,
            isFetching: U,
            resendUsers: M,
        } = (0, S.i)({ searchQuery: f, selectedUsers: u }),
        R = r.useMemo(() => [...u.keys()].filter((e) => !M.has(e)), [u, M]);
    C()(null != a, "Referrals remaining should not be null");
    let Z = (0, d.K)((e) => {
        e && !U && w();
    });
    if (F) return (0, i.jsx)(D, { onClose: t });
    if (0 === a) return (0, i.jsx)(G, { onShare: s });
    let I = f.length > 0 && 0 === v.length;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)("div", {
                className: l()(b.wx, b.HE),
                children: [
                    I ? (0, i.jsx)(B, {}) : (0, i.jsx)(k, { numOfSelectedUsers: R.length, anySelected: u.size > 0 }),
                    (0, i.jsx)(h.iS, {
                        selectionMode: "multiple",
                        value: Array.from(u.values()),
                        options: v,
                        formatOption: (e) => ({ id: e.id, value: e, label: y.Ay.getName(e) }),
                        onSelectionChange: (e) => {
                            let t = Array.isArray(e) ? e : [e],
                                s = new Map();
                            t.forEach((e) => {
                                null != e && s.set(e.id, e);
                            }),
                                j(s);
                        },
                        children: (0, i.jsx)("div", {
                            className: b.c,
                            children: (0, i.jsx)(h.a3, {
                                placeholder: 0 === u.size ? E.intl.string(E.t.Kd5RaI) : "",
                                onQueryChange: (e) => {
                                    _(e.target.value);
                                },
                            }),
                        }),
                    }),
                ],
            }),
            I
                ? (0, i.jsx)(O, {})
                : (0, i.jsxs)(o.Ar, {
                      className: b.p_,
                      children: [
                          v.map((e) =>
                              (0, i.jsx)(
                                  N.A,
                                  {
                                      disabled:
                                          [...u.values()].filter((e) => !M.has(e.id)).length >= a &&
                                          !u.has(e.id) &&
                                          !M.has(e.id),
                                      checked: u.has(e.id),
                                      user: e,
                                      onChange: (e, t) => {
                                          j((s) => {
                                              let i = new Map(s);
                                              return t ? i.set(e.id, e) : i.delete(e.id), i;
                                          });
                                      },
                                  },
                                  e.id,
                              ),
                          ),
                          U && (0, i.jsx)(p.y, {}),
                          (0, i.jsx)("div", { ref: Z }),
                      ],
                  }),
            (0, i.jsx)("div", {
                className: l()(b.qr, b.h0),
                children: (0, i.jsx)("div", {
                    className: b.tA,
                    children: (0, i.jsx)(c.$, {
                        variant: "primary",
                        fullWidth: !0,
                        text: I ? E.intl.string(E.t.wpSqAW) : E.intl.string(E.t.ItpQxk),
                        disabled: (0 === u.size && !I) || g,
                        onClick: async () => {
                            I ? t() : (L(!0), await s([...u.values()]), L(!1));
                        },
                    }),
                }),
            }),
        ],
    });
};
