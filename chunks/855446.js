t.d(n, { C: () => N });
var l,
    i = t(477900),
    a = t(582128),
    s = t(503698),
    r = t.n(s),
    o = t(221877),
    c = t(696292),
    u = t(834730),
    d = t(939249),
    A = t(805901),
    m = t(43990),
    h = t(932413),
    C = t(849269),
    E = t(881343),
    f = t(697675),
    p = t(869003),
    g = t(652215),
    x = t(375708),
    I = t(441386);
let v = ["embedded_cover"],
    T = { tension: 800, friction: 24 };
var _ =
    (((l = _ || {})[(l.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (l[(l.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    l);
function N(e) {
    let { context: n, activityItem: t, onClick: l, aspectRatio: s = 0, animatedDivClass: _, commandOrigin: N } = e,
        {
            onActivityItemSelected: j,
            imageBackground: b,
            activityAction: S,
            labelType: O,
        } = (0, C.Ay)({
            context: n,
            activityItem: t,
            guildId: n.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: p.A,
            assetNames: v,
            commandOrigin: N,
        }),
        [y, R] = a.useState(!1),
        M = a.useCallback(() => {
            R(!0);
        }, [R]),
        L = a.useCallback(() => {
            R(!1);
        }, [R]),
        D = a.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: I.Gz,
                    children: (0, i.jsx)("div", { className: I.fC, children: (0, i.jsx)(f.A, { labelType: O }) }),
                }),
            [O],
        ),
        P = a.useMemo(() => {
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
        onClick: j,
        onFocus: M,
        onBlur: L,
        onMouseEnter: M,
        onMouseLeave: L,
        className: I.XA,
        children: (0, i.jsx)(A.c, {
            config: T,
            from: { value: 0 },
            to: { value: +!!y },
            children: (e) => {
                let { value: n } = e;
                return (0, i.jsx)(m.N, {
                    theme: g.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(h.A, {
                            applicationId: t.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (l) =>
                                (0, i.jsxs)(o.animated.div, {
                                    ref: l,
                                    className: r()(e, I.LM, _, { [I.$g]: 0 === s, [I.J3]: 1 === s }),
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
N.AspectRatio = _;
