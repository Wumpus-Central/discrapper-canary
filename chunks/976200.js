l.d(e, { A: () => f }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(158954),
    o = l(311907),
    d = l(73939),
    u = l(397927),
    c = l(618167),
    x = l(166403),
    m = l(661191),
    h = l(985018),
    C = l(94511);
function g(t) {
    let { imageClass: e, children: l, error: i } = t;
    return (0, n.jsxs)("div", {
        className: C.Qs,
        children: [
            (0, n.jsx)("div", { className: r()(C.Sl, e) }),
            l,
            (0, n.jsx)(d.F, {
                children:
                    null != i
                        ? (0, n.jsx)(u.FQk, {
                              className: C.z3,
                              children: (0, n.jsx)(a.wx6, { type: "critical", children: i.message }),
                          })
                        : null,
            }),
        ],
    });
}
let j = (t) => {
    let { canceledCount: e } = t,
        l = (0, o.bG)([x.A], () => x.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: C.v,
              children: [
                  (0, n.jsx)(u.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: C.kK }),
                  (0, n.jsx)(u.Text, {
                      variant: "text-md/normal",
                      className: C.at,
                      children: h.intl.format(h.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
};
function p(t) {
    let { imageClass: e, blurb: l, guild: i, warning: s, error: r, slotCount: a = 1, canceledCount: o = 0 } = t;
    return (0, n.jsxs)(g, {
        imageClass: e,
        error: r,
        children: [
            (0, n.jsx)(u.Text, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(c.A, { className: C.w_, guild: i, subscriptionChange: a }),
            (0, n.jsx)(u.Text, { variant: "text-md/normal", children: s }),
            o > 0 ? (0, n.jsx)(j, { canceledCount: o }) : null,
        ],
    });
}
function v(t) {
    let { imageClass: e, blurb: l, fromGuilds: s, toGuild: r, error: a, slotCount: o = 1, canceledCount: d = 0 } = t,
        x = i.useRef(s),
        p = x.current?.length,
        v = x.current?.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {});
    return (0, n.jsxs)(g, {
        imageClass: e,
        error: a,
        children: [
            (0, n.jsx)(u.Text, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(u.Text, {
                variant: "text-xs/bold",
                className: C._N,
                children: h.intl.format(h.t["5zQYEz"], { guildCount: p ?? 0 }),
            }),
            null != v
                ? m.default
                      .keys(v)
                      .map((t) =>
                          (0, n.jsx)(c.A, { className: C.vW, guild: v[t][0], subscriptionChange: -1 * v[t].length }, t),
                      )
                : null,
            (0, n.jsx)(u.Text, {
                variant: "text-xs/normal",
                className: C._N,
                children: h.intl.format(h.t.ct6oxD, { slotCount: o }),
            }),
            (0, n.jsx)("div", {
                className: C.Vh,
                children: (0, n.jsx)(c.A, { className: C.uK, guild: r, subscriptionChange: null != s ? s.length : 1 }),
            }),
            d > 0 ? (0, n.jsx)(j, { canceledCount: d }) : null,
        ],
    });
}
let S = (t) => {
    let {
            transitionState: e,
            onClose: l,
            title: i,
            subtitle: s,
            imageClass: r,
            guild: o,
            warning: d,
            slotCount: u = 1,
            canceledCount: c = 0,
            isTransfer: x = !1,
            fromGuilds: m,
            toGuild: C,
            confirmation: g,
            confirmationLabel: j,
            isModifyingSubscription: S,
            onConfirm: f,
            onCancel: A,
            error: N,
        } = t,
        T = [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: A, disabled: S },
            { variant: "primary", text: g, onClick: f, loading: S, "aria-label": j },
        ];
    return (0, n.jsxs)(a.dWK, {
        transitionState: e,
        onClose: l,
        size: "sm",
        children: [
            (0, n.jsx)(a.rQ0, { title: i }),
            (0, n.jsx)(a.cwr, {
                children:
                    x && null != C
                        ? (0, n.jsx)(v, {
                              imageClass: r ?? "",
                              blurb: s,
                              fromGuilds: m,
                              toGuild: C,
                              error: N,
                              slotCount: u,
                              canceledCount: c,
                          })
                        : null != o
                          ? (0, n.jsx)(p, {
                                imageClass: r ?? "",
                                blurb: s,
                                guild: o,
                                warning: d,
                                error: N,
                                slotCount: u,
                                canceledCount: c,
                            })
                          : null,
            }),
            (0, n.jsx)(a.H7u, { actions: T, actionsFullWidth: !1 }),
        ],
    });
};
(S.ApplyBody = p),
    (S.TransferBody = v),
    (S.Footer = function (t) {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: i, onConfirm: s, onCancel: r } = t;
        return (0, n.jsx)("div", {
            className: C.qr,
            children: (0, n.jsxs)(u.ButtonGroup, {
                direction: "horizontal-reverse",
                children: [
                    (0, n.jsx)(u.Button, { variant: "primary", text: e, onClick: s, loading: i, "aria-label": l }),
                    (0, n.jsx)(u.Button, {
                        variant: "secondary",
                        text: h.intl.string(h.t["ETE/oC"]),
                        onClick: r,
                        disabled: i,
                    }),
                ],
            }),
        });
    });
let f = S;
