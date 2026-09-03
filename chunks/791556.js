s.d(l, { A: () => j });
var a = s(477900);
s(582128);
var i = s(503698),
    n = s.n(i),
    t = s(342952),
    r = s(692617),
    d = s(939249),
    u = s(834730),
    c = s(548118),
    o = s(913453),
    h = s(837531),
    m = s(186272),
    x = s(518477),
    p = s(778712),
    v = s(88612);
function j(e) {
    let { user: l, className: s, onOpenProfile: i } = e,
        { mutualFriends: j, mutualGuilds: A } = (0, o.A)(l),
        N = null != j && j.length > 0,
        U = null != A && A.length > 0,
        k = N && U ? "text-xs/normal" : "text-sm/normal";
    return N || U
        ? (0, a.jsxs)("div", {
              className: n()(v.I0, s),
              children: [
                  N
                      ? (0, a.jsxs)(d.D, {
                            className: v.uW,
                            onClick: () => i?.(x.RP.MUTUAL_FRIENDS),
                            children: [
                                (0, a.jsx)(t.A, {
                                    maxUsers: 3,
                                    users: j.map((e) => {
                                        let { user: l } = e;
                                        return l;
                                    }),
                                    size: p._3.SIZE_16,
                                    hideOverflowCount: !0,
                                    disableUsernameTooltip: !0,
                                    "aria-hidden": !0,
                                }),
                                (0, a.jsx)(u.E, {
                                    className: v.Qq,
                                    variant: k,
                                    color: "interactive-text-default",
                                    children: (0, h.A)(j.length),
                                }),
                            ],
                        })
                      : null,
                  N && U ? (0, a.jsx)("div", { "aria-hidden": "true", className: v.jH }) : null,
                  U
                      ? (0, a.jsxs)(d.D, {
                            className: v.uW,
                            onClick: () => i?.(x.RP.MUTUAL_GUILDS),
                            children: [
                                !N &&
                                    (0, a.jsx)(r.A, {
                                        maxGuilds: 3,
                                        guilds: A.map((e) => {
                                            let { guild: l } = e;
                                            return l;
                                        }),
                                        size: c.Ay.Sizes.SMOL,
                                        hideOverflowCount: !0,
                                        disableGuildNameTooltip: !0,
                                    }),
                                (0, a.jsx)(u.E, {
                                    className: v.Qq,
                                    variant: k,
                                    color: "interactive-text-default",
                                    children: (0, m.A)(A.length),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
