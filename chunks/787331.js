n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(49229),
    r = n(688810),
    s = n(38910),
    o = n(657331),
    d = n(513297),
    c = n(414711),
    u = n(723690),
    A = n(652215),
    h = n(985018),
    _ = n(743444);
function m(e) {
    let { user: t, nickname: n, status: m, isFocused: p } = e,
        { analyticsLocations: g } = (0, r.Ay)(),
        E = (e) => {
            e?.stopPropagation(),
                a.A.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        I = (e) => {
            e?.stopPropagation(), s.A.ignore(t.id);
        },
        f = m === A.clD.OFFLINE ? A.clD.UNKNOWN : m;
    return (0, i.jsx)(c.A, {
        isFocused: p,
        user: t,
        onClick: () => (0, o.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: g }),
        children: (e) => {
            let a = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.A, {
                        icon: l.A9s,
                        actionType: d.A.ActionTypes.ACCEPT,
                        tooltip: h.intl.string(h.t.Zcibdf),
                        onClick: E,
                        shouldHighlight: e,
                    }),
                    (0, i.jsx)(d.A, {
                        icon: l.PGe,
                        actionType: d.A.ActionTypes.DENY,
                        tooltip: h.intl.string(h.t.xuio0C),
                        onClick: I,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, i.jsxs)("div", {
                className: _.a,
                children: [
                    (0, i.jsx)(u.A, { user: t, hovered: e, status: f, subText: n, className: _.__invalid_userInfo }),
                    (0, i.jsx)("div", { className: _.o, children: a }),
                ],
            });
        },
    });
}
