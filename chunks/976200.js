l.d(e, { A: () => S }), l(321073);
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(158954),
    o = l(311907),
    d = l(73939),
    c = l(397927),
    u = l(618167),
    x = l(166403),
    m = l(661191),
    h = l(985018),
    g = l(94511);
function C(t) {
    let { imageClass: e, children: l, error: i } = t;
    return (0, n.jsxs)("div", {
        className: g.Qs,
        children: [
            (0, n.jsx)("div", { className: r()(g.Sl, e) }),
            l,
            (0, n.jsx)(d.F, {
                children:
                    null != i
                        ? (0, n.jsx)(c.FQk, {
                              className: g.z3,
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
              className: g.v,
              children: [
                  (0, n.jsx)(c.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: g.kK }),
                  (0, n.jsx)(c.Text, {
                      variant: "text-md/normal",
                      className: g.at,
                      children: h.intl.format(h.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
};
function v(t) {
    let { imageClass: e, blurb: l, guild: i, warning: s, error: r, slotCount: a = 1, canceledCount: o = 0 } = t;
    return (0, n.jsxs)(C, {
        imageClass: e,
        error: r,
        children: [
            (0, n.jsx)(c.Text, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(u.A, { className: g.w_, guild: i, subscriptionChange: a }),
            (0, n.jsx)(c.Text, { variant: "text-md/normal", children: s }),
            o > 0 ? (0, n.jsx)(j, { canceledCount: o }) : null,
        ],
    });
}
function p(t) {
    let { imageClass: e, blurb: l, fromGuilds: s, toGuild: r, error: a, slotCount: o = 1, canceledCount: d = 0 } = t,
        x = i.useRef(s),
        v = x.current?.length,
        p = x.current?.reduce((t, e) => (t.hasOwnProperty(e.id) || (t[e.id] = []), t[e.id].push(e), t), {});
    return (0, n.jsxs)(C, {
        imageClass: e,
        error: a,
        children: [
            (0, n.jsx)(c.Text, { variant: "text-md/normal", children: l }),
            (0, n.jsx)(c.Text, {
                variant: "text-xs/bold",
                className: g._N,
                children: h.intl.format(h.t["5zQYEz"], { guildCount: v ?? 0 }),
            }),
            null != p
                ? m.default
                      .keys(p)
                      .map((t) =>
                          (0, n.jsx)(u.A, { className: g.vW, guild: p[t][0], subscriptionChange: -1 * p[t].length }, t),
                      )
                : null,
            (0, n.jsx)(c.Text, {
                variant: "text-xs/normal",
                className: g._N,
                children: h.intl.format(h.t.ct6oxD, { slotCount: o }),
            }),
            (0, n.jsx)("div", {
                className: g.Vh,
                children: (0, n.jsx)(u.A, { className: g.uK, guild: r, subscriptionChange: null != s ? s.length : 1 }),
            }),
            d > 0 ? (0, n.jsx)(j, { canceledCount: d }) : null,
        ],
    });
}
let f = (t) => {
    let {
            transitionState: e,
            onClose: l,
            title: i,
            subtitle: s,
            imageClass: r,
            guild: o,
            warning: d,
            slotCount: c = 1,
            canceledCount: u = 0,
            isTransfer: x = !1,
            fromGuilds: m,
            toGuild: g,
            confirmation: C,
            confirmationLabel: j,
            isModifyingSubscription: f,
            onConfirm: S,
            onCancel: A,
            error: y,
        } = t,
        N = [
            { variant: "secondary", text: h.intl.string(h.t["ETE/oC"]), onClick: A, disabled: f },
            { variant: "primary", text: C, onClick: S, loading: f, "aria-label": j },
        ];
    return (0, n.jsxs)(a.dWK, {
        transitionState: e,
        onClose: l,
        size: "sm",
        children: [
            (0, n.jsx)(a.rQ0, { title: i }),
            (0, n.jsx)(a.cwr, {
                children:
                    x && null != g
                        ? (0, n.jsx)(p, {
                              imageClass: r ?? "",
                              blurb: s,
                              fromGuilds: m,
                              toGuild: g,
                              error: y,
                              slotCount: c,
                              canceledCount: u,
                          })
                        : null != o
                          ? (0, n.jsx)(v, {
                                imageClass: r ?? "",
                                blurb: s,
                                guild: o,
                                warning: d,
                                error: y,
                                slotCount: c,
                                canceledCount: u,
                            })
                          : null,
            }),
            (0, n.jsx)(a.H7u, { actions: N, actionsFullWidth: !1 }),
        ],
    });
};
(f.ApplyBody = v),
    (f.TransferBody = p),
    (f.Footer = function (t) {
        let { confirmation: e, confirmationLabel: l, isModifyingSubscription: i, onConfirm: s, onCancel: r } = t;
        return (0, n.jsx)("div", {
            className: g.qr,
            children: (0, n.jsxs)(c.ButtonGroup, {
                direction: "horizontal-reverse",
                children: [
                    (0, n.jsx)(c.Button, { variant: "primary", text: e, onClick: s, loading: i, "aria-label": l }),
                    (0, n.jsx)(c.Button, {
                        variant: "secondary",
                        text: h.intl.string(h.t["ETE/oC"]),
                        onClick: r,
                        disabled: i,
                    }),
                ],
            }),
        });
    });
let S = f;
