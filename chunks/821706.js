n.d(t, {
    PE: () => p,
    l: () => h,
    pM: () => f
});
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(194359),
    o = n(475413),
    l = n(156518),
    u = n(690501),
    c = n(981631),
    d = n(388032);
function f(e) {
    let { userId: t, friendToken: n, analyticsLocation: l, shouldShowTooltip: u } = e,
        c = r.useCallback(() => {
            s.Z.addRelationship({
                userId: t,
                friendToken: n,
                context: { location: l }
            });
        }, [l, n, t]);
    return (0, i.jsx)(o.oY, {
        action: 'SEND_FRIEND_REQUEST',
        icon: a.oLu,
        tooltipText: d.intl.string(d.t.w5uwoK),
        shouldShowTooltip: u,
        onClick: c
    });
}
function _(e) {
    let { user: t, analyticsLocation: n, ...r } = e,
        a = (0, l.Y)({
            user: t,
            analyticsLocation: n
        });
    return 0 === a.length
        ? (0, i.jsx)(o.oY, {
              ...r,
              disabled: !0
          })
        : (0, i.jsx)(l.Z, {
              menuItems: a,
              children: (e) =>
                  (0, i.jsx)('div', {
                      ...e,
                      children: (0, i.jsx)(o.oY, { ...r })
                  })
          });
}
function p(e) {
    let { user: t, relationshipType: n, analyticsLocation: s, shouldShowTooltip: o } = e,
        l = r.useMemo(() => {
            switch (n) {
                case c.OGo.FRIEND:
                    return a._uN;
                case c.OGo.PENDING_OUTGOING:
                case c.OGo.PENDING_INCOMING:
                    return a.iHX;
            }
        }, [n]),
        u = r.useMemo(() => {
            switch (n) {
                case c.OGo.FRIEND:
                    return d.intl.string(d.t.G7jMpa);
                case c.OGo.PENDING_OUTGOING:
                    return d.intl.string(d.t['s/+byM']);
                case c.OGo.PENDING_INCOMING:
                    return d.intl.string(d.t['6QQCQ0']);
            }
        }, [n]);
    return (0, i.jsx)(_, {
        icon: l,
        tooltipText: u,
        shouldShowTooltip: o,
        user: t,
        analyticsLocation: s
    });
}
function h(e) {
    let { user: t, gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: s, analyticsLocation: o, shouldShowTooltip: l } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f
        } = (0, u.N)({
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: s
        });
    return (0, i.jsx)(_, {
        tooltipText: c,
        tooltipPosition: 'left',
        tooltipAlign: 'top',
        ariaLabel: f,
        shouldShowTooltip: l,
        icon: a.KED,
        onMouseEnter: d,
        user: t,
        analyticsLocation: o
    });
}
