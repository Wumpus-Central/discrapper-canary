n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var a = n(397927),
    l = n(890687),
    r = n(150574),
    s = n(91973),
    o = n(200784);
function d(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: d } = (0, l.Iq)();
    return d && 0 === n.length
        ? (0, i.jsx)(a.y$y, { className: o.u })
        : 0 === n.length
          ? (0, i.jsx)(s.A, { onClick: () => t(l.NC.ALL) })
          : (0, i.jsx)("div", {
                className: o.U,
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, i.jsx)(r.A, { quest: e }, e.id)),
            });
}
