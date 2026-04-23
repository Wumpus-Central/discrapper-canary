l.d(e, { A: () => w }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(683071),
    o = l(224640),
    d = l(20742),
    c = l(430993),
    u = l(696208),
    m = l(311907),
    x = l(73939),
    h = l(871682),
    g = l(695366),
    C = l(834730),
    j = l(825484),
    v = l(821609),
    f = l(618167),
    p = l(166403),
    S = l(661191),
    A = l(985018),
    y = l(295521);
function N(t) {
    let { imageClass: e, children: l, error: i } = t;
    return (0, n.jsxs)("div", {
        className: y.Qs,
        children: [
            (0, n.jsx)("div", { className: r()(y.Sl, e) }),
            l,
            (0, n.jsx)(x.F, {
                children:
                    null != i
                        ? (0, n.jsx)(h.F, {
                              className: y.z3,
                              children: (0, n.jsx)(a.w, { type: "critical", children: i.message }),
                          })
                        : null,
            }),
        ],
    });
}
let E = (t) => {
    let { canceledCount: e } = t,
        l = (0, m.bG)([p.A], () => p.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: y.v,
              children: [
                  (0, n.jsx)(g.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: y.kK }),
                  (0, n.jsx)(C.E, {
                      variant: "text-md/normal",
                      className: y.at,
                      children: A.intl.format(A.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
};
function b(t) {
    let { imageClass: e, blurb: l, guild: i, warning: s, error: r, slotCount: a = 1, canceledCount: o = 0 } = t;
    return (0, n.jsxs)(N, {
        imageClass: e,
        error: r,
        children: [
            (0, n.jsx)(C.E, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(f.A, { className: y.w_, guild: i, subscriptionChange: a }),
            (0, n.jsx)(C.E, { variant: "text-md/normal", children: s }),
            o > 0 ? (0, n.jsx)(E, { canceledCount: o }) : null,
        ],
    });
}
function P(t) {
    let { imageClass: e, blurb: l, fromGuilds: s, toGuild: r, error: a, slotCount: o = 1, canceledCount: d = 0 } = t,
        c = i.useRef(s),
        u = c.current?.length,
        m = c.current?.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {});
    return (0, n.jsxs)(N, {
        imageClass: e,
        error: a,
        children: [
            (0, n.jsx)(C.E, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(C.E, {
                variant: "text-xs/bold",
                className: y._N,
                children: A.intl.format(A.t["5zQYEz"], { guildCount: u ?? 0 }),
            }),
            null != m
                ? S.default
                      .keys(m)
                      .map((t) =>
                          (0, n.jsx)(f.A, { className: y.vW, guild: m[t][0], subscriptionChange: -1 * m[t].length }, t),
                      )
                : null,
            (0, n.jsx)(C.E, {
                variant: "text-xs/normal",
                className: y._N,
                children: A.intl.format(A.t.ct6oxD, { slotCount: o }),
            }),
            (0, n.jsx)("div", {
                className: y.Vh,
                children: (0, n.jsx)(f.A, { className: y.uK, guild: r, subscriptionChange: null != s ? s.length : 1 }),
            }),
            d > 0 ? (0, n.jsx)(E, { canceledCount: d }) : null,
        ],
    });
}
let T = (t) => {
    let {
            transitionState: e,
            onClose: l,
            title: i,
            subtitle: s,
            imageClass: r,
            guild: a,
            warning: m,
            slotCount: x = 1,
            canceledCount: h = 0,
            isTransfer: g = !1,
            fromGuilds: C,
            toGuild: j,
            confirmation: v,
            confirmationLabel: f,
            isModifyingSubscription: p,
            onConfirm: S,
            onCancel: y,
            error: N,
        } = t,
        E = [
            { variant: "secondary", text: A.intl.string(A.t["ETE/oC"]), onClick: y, disabled: p },
            { variant: "primary", text: v, onClick: S, loading: p, "aria-label": f },
        ];
    return (0, n.jsxs)(o.d, {
        transitionState: e,
        onClose: l,
        size: "sm",
        children: [
            (0, n.jsx)(d.rQ, { title: i }),
            (0, n.jsx)(c.c, {
                children:
                    g && null != j
                        ? (0, n.jsx)(P, {
                              imageClass: r ?? "",
                              blurb: s,
                              fromGuilds: C,
                              toGuild: j,
                              error: N,
                              slotCount: x,
                              canceledCount: h,
                          })
                        : null != a
                          ? (0, n.jsx)(b, {
                                imageClass: r ?? "",
                                blurb: s,
                                guild: a,
                                warning: m,
                                error: N,
                                slotCount: x,
                                canceledCount: h,
                            })
                          : null,
            }),
            (0, n.jsx)(u.H, { actions: E, actionsFullWidth: !1 }),
        ],
    });
};
(T.ApplyBody = b),
    (T.TransferBody = P),
    (T.Footer = function (t) {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: i, onConfirm: s, onCancel: r } = t;
        return (0, n.jsx)("div", {
            className: y.qr,
            children: (0, n.jsxs)(j.e, {
                direction: "horizontal-reverse",
                children: [
                    (0, n.jsx)(v.$, { variant: "primary", text: e, onClick: s, loading: i, "aria-label": l }),
                    (0, n.jsx)(v.$, {
                        variant: "secondary",
                        text: A.intl.string(A.t["ETE/oC"]),
                        onClick: r,
                        disabled: i,
                    }),
                ],
            }),
        });
    });
let w = T;
