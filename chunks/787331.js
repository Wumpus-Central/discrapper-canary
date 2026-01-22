n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(49229),
    a = n(688810),
    s = n(38910),
    o = n(657331),
    c = n(513297),
    u = n(414711),
    d = n(723690),
    p = n(652215),
    f = n(985018),
    h = n(276991);

function A(e) {
    let { user: t, nickname: n, status: A, isFocused: g } = e,
        { analyticsLocations: m } = (0, a.Ay)(),
        b = (e) => {
            null == e || e.stopPropagation(),
                l.A.addRelationship({
                    userId: t.id,
                    context: {
                        location: "Friends",
                    },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        _ = (e) => {
            null == e || e.stopPropagation(), s.A.ignore(t.id);
        },
        E = A === p.clD.OFFLINE ? p.clD.UNKNOWN : A;
    return (0, r.jsx)(u.A, {
        isFocused: g,
        user: t,
        onClick: () =>
            (0, o.openUserProfileModal)({
                userId: t.id,
                sourceAnalyticsLocations: m,
            }),
        children: (e) => {
            let l = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(c.A, {
                        icon: i.A9s,
                        actionType: c.A.ActionTypes.ACCEPT,
                        tooltip: f.intl.string(f.t.Zcibdf),
                        onClick: b,
                        shouldHighlight: e,
                    }),
                    (0, r.jsx)(c.A, {
                        icon: i.PGe,
                        actionType: c.A.ActionTypes.DENY,
                        tooltip: f.intl.string(f.t.xuio0C),
                        onClick: _,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, r.jsxs)("div", {
                className: h.a,
                children: [
                    (0, r.jsx)(d.A, {
                        user: t,
                        hovered: e,
                        status: E,
                        subText: n,
                        className: h.__invalid_userInfo,
                    }),
                    (0, r.jsx)("div", {
                        className: h.o,
                        children: l,
                    }),
                ],
            });
        },
    });
}
