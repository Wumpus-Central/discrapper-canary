n.d(t, { A: () => c }), n(896048), n(638769);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(890687),
    a = n(150574),
    s = n(91973),
    o = n(60171);
function c(e) {
    let { onSelectTab: t } = e,
        { claimedQuests: n, isFetchingClaimedQuests: c } = (0, l.Iq)();
    return c && 0 === n.length
        ? (0, r.jsx)(i.y$y, { className: o.u })
        : 0 === n.length
          ? (0, r.jsx)(s.A, { onClick: () => t(l.NC.ALL) })
          : (0, r.jsx)("div", {
                className: o.U,
                children: [...n]
                    .sort((e, t) => {
                        var n, r, i, l;
                        return (null != (n = null == (i = t.userStatus) ? void 0 : i.claimedAt) ? n : "").localeCompare(
                            null != (r = null == (l = e.userStatus) ? void 0 : l.claimedAt) ? r : "",
                        );
                    })
                    .map((e) => (0, r.jsx)(a.A, { quest: e }, e.id)),
            });
}
