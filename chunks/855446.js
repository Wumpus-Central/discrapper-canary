t.d(n, { C: () => N });
var l,
    i = t(477900),
    a = t(582128),
    s = t(503698),
    o = t.n(s),
    r = t(202091),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    h = t(43990),
    m = t(932413),
    C = t(849269),
    p = t(881343),
    x = t(697675),
    g = t(869003),
    f = t(652215),
    E = t(660183),
    I = t(441386);
let v = ["embedded_cover"],
    j = { tension: 800, friction: 24 };
var T =
    (((l = T || {})[(l.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (l[(l.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    l);
function N(e) {
    let { context: n, activityItem: t, onClick: l, aspectRatio: s = 0, animatedDivClass: T, commandOrigin: N } = e,
        {
            onActivityItemSelected: _,
            imageBackground: b,
            activityAction: O,
            labelType: y,
        } = (0, C.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: g.A,
            assetNames: v,
            commandOrigin: N,
        }),
        [S, R] = a.useState(!1),
        D = a.useCallback(() => {
            R(!0);
        }, [R]),
        L = a.useCallback(() => {
            R(!1);
        }, [R]),
        M = a.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: I.Gz,
                    children: (0, i.jsx)("div", { className: I.fC, children: (0, i.jsx)(x.A, { labelType: y }) }),
                }),
            [y],
        ),
        P = a.useMemo(() => {
            switch (O) {
                case C.o6.JOIN:
                    return (0, i.jsx)("div", {
                        className: I.m9,
                        children: (0, i.jsx)("div", {
                            className: I.aF,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: E.intl.string(E.t.VJlc0S),
                            }),
                        }),
                    });
                case C.o6.LEAVE:
                    return (0, i.jsx)("div", {
                        className: I.m9,
                        children: (0, i.jsx)("div", {
                            className: o()(I.aF, I.pS),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-overlay-light",
                                children: E.intl.string(E.t["wH/wDO"]),
                            }),
                        }),
                    });
                case C.o6.START:
                default:
                    return null;
            }
        }, [O]);
    return (0, i.jsx)(d.D, {
        onClick: _,
        onFocus: D,
        onBlur: L,
        onMouseEnter: D,
        onMouseLeave: L,
        className: I.XA,
        children: (0, i.jsx)(A.c, {
            config: j,
            from: { value: 0 },
            to: { value: +!!S },
            children: (e) => {
                let { value: n } = e;
                return (0, i.jsx)(h.N, {
                    theme: f.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(m.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (l) =>
                                (0, i.jsxs)(r.animated.div, {
                                    ref: l,
                                    className: o()(e, I.LM, T, { [I.$g]: 0 === s, [I.J3]: 1 === s }),
                                    style: { transform: n.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            imageBackground: b,
                                            applicationName: t.application.name,
                                            imageClassName: I.jj,
                                            imageNotFoundClassName: I.v_,
                                        }),
                                        M,
                                        P,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
N.AspectRatio = T;
