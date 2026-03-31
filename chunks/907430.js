n.d(t, { d: () => g, o: () => u });
var i = n(627968),
    a = n(409626),
    l = n(692969),
    s = n(562153),
    r = n(415043),
    o = n(617086),
    d = n(985018),
    c = n(34519);
function u(e) {
    let { applicationId: t, ...n } = e,
        a = (0, o.A)(t);
    return a.length > 0
        ? (0, i.jsx)(r.A, {
              label: d.intl.formatToPlainString(d.t.ujhJdG, { numFriends: a.length }),
              users: a,
              maxUsers: 4,
              ...n,
          })
        : null;
}
function g(e) {
    var t, n, u;
    let g,
        { userId: m, applicationId: x, guildId: p, channelId: f, className: h } = e,
        _ = (0, o.A)(x),
        A = _.length > 0,
        I =
            ((t = _),
            (n = p),
            (u = f),
            (g = t.slice(0, 3).map((e) => s.Ay.getName(n, u, e))),
            1 === t.length
                ? d.intl.formatToPlainString(d.t.FURqTU, { name: g[0] })
                : 2 === t.length
                  ? d.intl.formatToPlainString(d.t["08Usu/"], { name1: g[0], name2: g[1] })
                  : 3 === t.length
                    ? d.intl.formatToPlainString(d.t.NTYHag, { name1: g[0], name2: g[1], name3: g[2] })
                    : d.intl.formatToPlainString(d.t["i/5oAn"], {
                          name1: g[0],
                          name2: g[1],
                          name3: g[2],
                          numPeople: t.length - 3,
                      })),
        j = (0, l.A)({
            location: "SocialProofButton",
            applicationId: x,
            source: a.Ob.UserProfile,
            sourceUserId: m,
            trackEntryPointImpression: !0,
        });
    return A && null != j
        ? (0, i.jsx)(r.H, {
              users: _,
              label: I,
              className: h,
              onClick: j,
              guildId: p,
              channelId: f,
              "aria-label": I,
              overflowCountColor: "text-strong",
              overflowCountClassName: c.L,
          })
        : null;
}
