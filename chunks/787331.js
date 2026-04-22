n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(933832),
    l = n(789645),
    a = n(49229),
    r = n(688810),
    o = n(38910),
    c = n(657331),
    d = n(513297),
    u = n(414711),
    m = n(723690),
    A = n(652215),
    h = n(985018),
    x = n(648356);
function p(e) {
    let { user: t, nickname: n, status: p, isFocused: g } = e,
        { analyticsLocations: N } = (0, r.Ay)(),
        f = (e) => {
            e?.stopPropagation(),
                a.A.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        _ = (e) => {
            e?.stopPropagation(), o.A.ignore(t.id);
        },
        I = p === A.clD.OFFLINE ? A.clD.UNKNOWN : p;
    return (0, i.jsx)(u.A, {
        isFocused: g,
        user: t,
        analyticsLocations: N,
        onClick: () => (0, c.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: N }),
        children: (e) => {
            let a = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.A, {
                        icon: s.A,
                        actionType: d.A.ActionTypes.ACCEPT,
                        tooltip: h.intl.string(h.t.Zcibdf),
                        onClick: f,
                        shouldHighlight: e,
                    }),
                    (0, i.jsx)(d.A, {
                        icon: l.P,
                        actionType: d.A.ActionTypes.DENY,
                        tooltip: h.intl.string(h.t.xuio0C),
                        onClick: _,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, i.jsxs)("div", {
                className: x.a,
                children: [
                    (0, i.jsx)(m.A, { user: t, hovered: e, status: I, subText: n, className: x.__invalid_userInfo }),
                    (0, i.jsx)("div", { className: x.o, children: a }),
                ],
            });
        },
    });
}
