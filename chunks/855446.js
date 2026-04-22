t.d(n, { C: () => j });
var l,
    i = t(627968),
    a = t(64700),
    s = t(503698),
    r = t.n(s),
    o = t(517738),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    h = t(43990),
    p = t(932413),
    m = t(849269),
    g = t(881343),
    f = t(697675),
    C = t(869003),
    E = t(652215),
    v = t(985018),
    I = t(186349);
let x = ["embedded_cover"],
    T = { tension: 800, friction: 24 };
var _ =
    (((l = _ || {})[(l.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (l[(l.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    l);
function j(e) {
    let { context: n, activityItem: t, onClick: l, aspectRatio: s = 0, animatedDivClass: _, commandOrigin: j } = e,
        {
            onActivityItemSelected: N,
            imageBackground: b,
            activityAction: y,
            labelType: S,
        } = (0, m.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: C.A,
            assetNames: x,
            commandOrigin: j,
        }),
        [O, L] = a.useState(!1),
        R = a.useCallback(() => {
            L(!0);
        }, [L]),
        M = a.useCallback(() => {
            L(!1);
        }, [L]),
        D = a.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: I.Gz,
                    children: (0, i.jsx)("div", { className: I.fC, children: (0, i.jsx)(f.A, { labelType: S }) }),
                }),
            [S],
        ),
        P = a.useMemo(() => {
            switch (y) {
                case m.o6.JOIN:
                    return (0, i.jsx)("div", {
                        className: I.m9,
                        children: (0, i.jsx)("div", {
                            className: I.aF,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: v.intl.string(v.t.VJlc0S),
                            }),
                        }),
                    });
                case m.o6.LEAVE:
                    return (0, i.jsx)("div", {
                        className: I.m9,
                        children: (0, i.jsx)("div", {
                            className: r()(I.aF, I.pS),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: v.intl.string(v.t["wH/wDO"]),
                            }),
                        }),
                    });
                case m.o6.START:
                default:
                    return null;
            }
        }, [y]);
    return (0, i.jsx)(d.D, {
        onClick: N,
        onFocus: R,
        onBlur: M,
        onMouseEnter: R,
        onMouseLeave: M,
        className: I.XA,
        children: (0, i.jsx)(A.c, {
            config: T,
            from: { value: 0 },
            to: { value: +!!O },
            children: (e) => {
                let { value: n } = e;
                return (0, i.jsx)(h.N, {
                    theme: E.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(p.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (l) =>
                                (0, i.jsxs)(o.animated.div, {
                                    ref: l,
                                    className: r()(e, I.LM, _, { [I.$g]: 0 === s, [I.J3]: 1 === s }),
                                    style: { transform: n.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, i.jsx)(g.A, {
                                            imageBackground: b,
                                            applicationName: t.application.name,
                                            imageClassName: I.jj,
                                            imageNotFoundClassName: I.v_,
                                        }),
                                        D,
                                        P,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
j.AspectRatio = _;
