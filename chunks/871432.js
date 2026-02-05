n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(73153),
    o = n(58736),
    d = n(994500),
    c = n(291445),
    u = n(726079),
    A = n(985018);
function h(e) {
    let { className: t } = e,
        n = (0, a.bG)([d.A], () => d.A.getPendingCount() > 0),
        c = (0, l.rdh)(l.LU0.modules.chat.INPUT_ICON_SIZE);
    return (
        r.useEffect(() => {
            s.h.dispatch({ type: "FRIENDS_LIST_POPOUT_MOUNTED" });
        }, []),
        (0, i.jsx)(u.l, {
            popoutPosition: "bottom",
            popoutAlign: "left",
            children: (e, r, a, s) =>
                (0, i.jsx)(o.In, {
                    ...a,
                    ref: s,
                    className: t,
                    onClick: e,
                    icon: l.$yI,
                    iconSize: c,
                    "aria-label": A.intl.string(A.t.TdEu5X),
                    tooltip: r ? null : A.intl.string(A.t.TdEu5X),
                    selected: r,
                    showBadge: n,
                }),
        })
    );
}
function _(e) {
    let { className: t } = e,
        { hasFriendList: n } = (0, c.K)("friends-button");
    return n ? (0, i.jsx)(h, { className: t }) : null;
}
