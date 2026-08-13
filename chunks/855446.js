t.d(n, { C: () => j });
var l,
    i = t(477900),
    s = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(53466),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    m = t(43990),
    h = t(932413),
    C = t(849269),
    E = t(881343),
    p = t(697675),
    g = t(869003),
    f = t(652215),
    x = t(375708),
    I = t(38293);
let T = ["embedded_cover"],
    v = { tension: 800, friction: 24 };
var _ =
    (((l = _ || {})[(l.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (l[(l.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    l);
function j(e) {
    let { context: n, activityItem: t, onClick: l, aspectRatio: a = 0, animatedDivClass: _, commandOrigin: j } = e,
        {
            onActivityItemSelected: N,
            imageBackground: b,
            activityAction: S,
            labelType: O,
        } = (0, C.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: g.A,
            assetNames: T,
            commandOrigin: j,
        }),
        [y, R] = s.useState(!1),
        M = s.useCallback(() => {
            R(!0);
        }, [R]),
        L = s.useCallback(() => {
            R(!1);
        }, [R]),
        D = s.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: I.Gz,
                    children: (0, i.jsx)("div", { className: I.fC, children: (0, i.jsx)(p.A, { labelType: O }) }),
                }),
            [O],
        ),
        P = s.useMemo(() => {
            switch (S) {
                case C.o6.JOIN:
                    return (0, i.jsx)("div", {
                        className: I.m9,
                        children: (0, i.jsx)("div", {
                            className: I.aF,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: x.intl.string(x.t.VJlc0S),
                            }),
                        }),
                    });
                case C.o6.LEAVE:
                    return (0, i.jsx)("div", {
                        className: I.m9,
                        children: (0, i.jsx)("div", {
                            className: r()(I.aF, I.pS),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: x.intl.string(x.t["wH/wDO"]),
                            }),
                        }),
                    });
                case C.o6.START:
                default:
                    return null;
            }
        }, [S]);
    return (0, i.jsx)(d.D, {
        onClick: N,
        onFocus: M,
        onBlur: L,
        onMouseEnter: M,
        onMouseLeave: L,
        className: I.XA,
        children: (0, i.jsx)(A.c, {
            config: v,
            from: { value: 0 },
            to: { value: +!!y },
            children: (e) => {
                let { value: n } = e;
                return (0, i.jsx)(m.N, {
                    theme: f.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(h.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (l) =>
                                (0, i.jsxs)(o.animated.div, {
                                    ref: l,
                                    className: r()(e, I.LM, _, { [I.$g]: 0 === a, [I.J3]: 1 === a }),
                                    style: { transform: n.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, i.jsx)(E.A, {
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
