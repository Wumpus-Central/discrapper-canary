n.d(t, { C: () => f });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(123924),
    c = n(696292),
    u = n(834730),
    d = n(939249),
    A = n(805901),
    E = n(43990),
    m = n(932413),
    h = n(849269),
    C = n(881343),
    g = n(697675),
    I = n(869003),
    p = n(652215),
    x = n(985018),
    T = n(186349);
let _ = ["embedded_cover"],
    v = { tension: 800, friction: 24 };
var N =
    (((l = N || {})[(l.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (l[(l.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    l);
function f(e) {
    let { context: t, activityItem: n, onClick: l, aspectRatio: a = 0, animatedDivClass: N, commandOrigin: f } = e,
        {
            onActivityItemSelected: j,
            imageBackground: S,
            activityAction: b,
            labelType: O,
        } = (0, h.Ay)({
            context: t,
            activityItem: n,
            guildId: t.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: I.A,
            assetNames: _,
            commandOrigin: f,
        }),
        [y, L] = s.useState(!1),
        M = s.useCallback(() => {
            L(!0);
        }, [L]),
        R = s.useCallback(() => {
            L(!1);
        }, [L]),
        D = s.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: T.Gz,
                    children: (0, i.jsx)("div", { className: T.fC, children: (0, i.jsx)(g.A, { labelType: O }) }),
                }),
            [O],
        ),
        P = s.useMemo(() => {
            switch (b) {
                case h.o6.JOIN:
                    return (0, i.jsx)("div", {
                        className: T.m9,
                        children: (0, i.jsx)("div", {
                            className: T.aF,
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: x.intl.string(x.t.VJlc0S),
                            }),
                        }),
                    });
                case h.o6.LEAVE:
                    return (0, i.jsx)("div", {
                        className: T.m9,
                        children: (0, i.jsx)("div", {
                            className: r()(T.aF, T.pS),
                            children: (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: x.intl.string(x.t["wH/wDO"]),
                            }),
                        }),
                    });
                case h.o6.START:
                default:
                    return null;
            }
        }, [b]);
    return (0, i.jsx)(d.D, {
        onClick: j,
        onFocus: M,
        onBlur: R,
        onMouseEnter: M,
        onMouseLeave: R,
        className: T.XA,
        children: (0, i.jsx)(A.c, {
            config: v,
            from: { value: 0 },
            to: { value: +!!y },
            children: (e) => {
                let { value: t } = e;
                return (0, i.jsx)(E.N, {
                    theme: p.NJ8.DARK,
                    children: (e) =>
                        (0, i.jsx)(m.A, {
                            applicationId: n.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (l) =>
                                (0, i.jsxs)(o.animated.div, {
                                    ref: l,
                                    className: r()(e, T.LM, N, { [T.$g]: 0 === a, [T.J3]: 1 === a }),
                                    style: { transform: t.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, i.jsx)(C.A, {
                                            imageBackground: S,
                                            applicationName: n.application.name,
                                            imageClassName: T.jj,
                                            imageNotFoundClassName: T.v_,
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
f.AspectRatio = N;
