s.d(t, { A: () => c });
var n = s(627968);
s(64700);
var l = s(289873),
    a = s(890687),
    r = s(150574),
    i = s(91973),
    o = s(975424);
function c(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: s, isFetchingClaimedQuests: c } = (0, a.Iq)();
    return c && 0 === s.length
        ? (0, n.jsx)(l.y, { className: o.u })
        : 0 === s.length
          ? (0, n.jsx)(i.A, { onClick: () => t(a.NC.ALL) })
          : (0, n.jsx)("div", {
                className: o.U,
                children: [...s]
                    .sort((e, t) => (t.userStatus?.claimedAt ?? "").localeCompare(e.userStatus?.claimedAt ?? ""))
                    .map((e) => (0, n.jsx)(r.A, { quest: e }, e.id)),
            });
}
