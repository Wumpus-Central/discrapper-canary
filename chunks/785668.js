n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    l = n(502572),
    a = n(123292),
    r = n(192308),
    o = n(104510),
    d = n(827734),
    u = n(834730),
    c = n(614820),
    g = n(688810),
    m = n(531260),
    _ = n(987144),
    A = n(473145),
    h = n(652215),
    p = n(985018),
    x = n(43985);
let E = function () {
    let e = s.useRef(null),
        { analyticsLocations: t } = (0, g.Ay)(),
        { fractionalState: E } = (0, m.A)();
    function T(n) {
        null != e.current && (0, r.closeModal)(e.current),
            (0, _.g)({
                analyticsLocation: {
                    page: h.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: h.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: h.ZSU.BUTTON_CTA,
                    objectType: h.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function S() {
        e.current = await (0, r.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                return (t) => (0, i.jsx)(e, { ...t, onSelectGuild: T });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, r.closeModal)(e.current);
                },
            },
        );
    }
    let f = (0, A.Nc)({ fractionalState: E });
    return (0, i.jsxs)("div", {
        className: x.iE,
        children: [
            (0, i.jsx)(o._, { color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK, className: x.$J }),
            (0, i.jsx)(u.E, {
                className: x.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: p.intl.format(p.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != f,
                            s = (0, c.O)(e),
                            r = (0, i.jsx)("div", {
                                className: x.lO,
                                children: (0, i.jsx)(
                                    a.Q,
                                    { variant: "primary", onClick: n ? void 0 : S, text: s, disabled: n },
                                    t,
                                ),
                            });
                        return n
                            ? (0, i.jsx)(
                                  l.A,
                                  {
                                      text: f,
                                      "aria-label": f.toString(),
                                      children: (e) => (0, i.jsx)("span", { ...e, children: r }),
                                  },
                                  t,
                              )
                            : r;
                    },
                }),
            }),
        ],
    });
};
