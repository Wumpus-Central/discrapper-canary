n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(502572),
    r = n(732955),
    a = n(397927),
    o = n(688810),
    d = n(531260),
    c = n(987144),
    u = n(473145),
    m = n(652215),
    g = n(985018),
    _ = n(43985);
let x = function () {
    let e = s.useRef(null),
        { analyticsLocations: t } = (0, o.Ay)(),
        { fractionalState: x } = (0, d.A)();
    function h(n) {
        null != e.current && (0, a.OoC)(e.current),
            (0, c.g)({
                analyticsLocation: {
                    page: m.liQ.GUILD_BOOSTING_USER_SETTINGS,
                    section: m.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: m.ZSU.BUTTON_CTA,
                    objectType: m.AnalyticsObjectTypes.BUY,
                },
                analyticsLocations: t,
                guild: n,
            });
    }
    async function A() {
        e.current = await (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 770101));
                return (t) => (0, i.jsx)(e, { ...t, onSelectGuild: h });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, a.OoC)(e.current);
                },
            },
        );
    }
    let p = (0, u.Nc)({ fractionalState: x });
    return (0, i.jsxs)("div", {
        className: _.iE,
        children: [
            (0, i.jsx)(a._Jp, { color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK, className: _.$J }),
            (0, i.jsx)(a.Text, {
                className: _.C,
                color: "text-default",
                variant: "text-sm/medium",
                children: g.intl.format(g.t.kqC5vq, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != p,
                            s = (0, a.Oer)(e),
                            o = (0, i.jsx)("div", {
                                className: _.lO,
                                children: (0, i.jsx)(
                                    r.QWc,
                                    { variant: "primary", onClick: n ? void 0 : A, text: s, disabled: n },
                                    t,
                                ),
                            });
                        return n
                            ? (0, i.jsx)(
                                  l.A,
                                  {
                                      text: p,
                                      "aria-label": p.toString(),
                                      children: (e) => (0, i.jsx)("span", { ...e, children: o }),
                                  },
                                  t,
                              )
                            : o;
                    },
                }),
            }),
        ],
    });
};
