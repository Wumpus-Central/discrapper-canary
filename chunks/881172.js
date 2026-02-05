n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(890687),
    l = n(150574),
    s = n(91973),
    o = n(60171);
function d(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: d } = (0, a.Iq)();
    return d && 0 === n.length
        ? (0, i.jsx)(r.y$y, { className: o.u })
        : 0 === n.length
          ? (0, i.jsx)(s.A, { onClick: () => t(a.NC.ALL) })
          : (0, i.jsx)("div", {
                className: o.U,
                children: [...n]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, i.jsx)(l.A, { quest: e }, e.id)),
            });
}
