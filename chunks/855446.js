"use strict";
n.d(t, { C: () => I });
var i,
    s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(880013),
    c = n(696292),
    d = n(397927),
    u = n(932413),
    h = n(849269),
    A = n(881343),
    m = n(697675),
    _ = n(869003),
    p = n(652215),
    g = n(985018),
    f = n(867958);
let x = ["embedded_cover"],
    E = { tension: 800, friction: 24 };
var C =
    (((i = C || {})[(i.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (i[(i.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    i);
function I(e) {
    let { context: t, activityItem: n, onClick: i, aspectRatio: r = 0, animatedDivClass: C, commandOrigin: I } = e,
        {
            onActivityItemSelected: N,
            imageBackground: b,
            activityAction: S,
            labelType: T,
        } = (0, h.Ay)({
            context: t,
            activityItem: n,
            guildId: t.channel.getGuildId() ?? void 0,
            locationObject: {},
            onActivityItemSelected: i,
            embeddedActivitiesManager: _.A,
            assetNames: x,
            commandOrigin: I,
        }),
        [v, y] = l.useState(!1),
        j = l.useCallback(() => {
            y(!0);
        }, [y]),
        R = l.useCallback(() => {
            y(!1);
        }, [y]),
        O = l.useMemo(
            () =>
                (0, s.jsx)("div", {
                    className: f.Gz,
                    children: (0, s.jsx)("div", { className: f.fC, children: (0, s.jsx)(m.A, { labelType: T }) }),
                }),
            [T],
        ),
        L = l.useMemo(() => {
            switch (S) {
                case h.o6.JOIN:
                    return (0, s.jsx)("div", {
                        className: f.m9,
                        children: (0, s.jsx)("div", {
                            className: f.aF,
                            children: (0, s.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: g.intl.string(g.t.VJlc0S),
                            }),
                        }),
                    });
                case h.o6.LEAVE:
                    return (0, s.jsx)("div", {
                        className: f.m9,
                        children: (0, s.jsx)("div", {
                            className: a()(f.aF, f.pS),
                            children: (0, s.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: g.intl.string(g.t["wH/wDO"]),
                            }),
                        }),
                    });
                case h.o6.START:
                default:
                    return null;
            }
        }, [S]);
    return (0, s.jsx)(d.DUT, {
        onClick: N,
        onFocus: j,
        onBlur: R,
        onMouseEnter: j,
        onMouseLeave: R,
        className: f.XA,
        children: (0, s.jsx)(d.c7X, {
            config: E,
            from: { value: 0 },
            to: { value: +!!v },
            children: (e) => {
                let { value: t } = e;
                return (0, s.jsx)(d.NPJ, {
                    theme: p.NJ8.DARK,
                    children: (e) =>
                        (0, s.jsx)(u.A, {
                            applicationId: n.application.id,
                            questContent: c.u.ACTIVITY_SUGGESTION,
                            children: (i) =>
                                (0, s.jsxs)(o.animated.div, {
                                    ref: i,
                                    className: a()(e, f.LM, C, { [f.$g]: 0 === r, [f.J3]: 1 === r }),
                                    style: { transform: t.to([0, 1], [1, 1.05]).to((e) => `scale(${e})`) },
                                    children: [
                                        (0, s.jsx)(A.A, {
                                            imageBackground: b,
                                            applicationName: n.application.name,
                                            imageClassName: f.jj,
                                            imageNotFoundClassName: f.v_,
                                        }),
                                        O,
                                        L,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
I.AspectRatio = C;
