"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    l = n(986268),
    u = n(345942),
    c = n(773669),
    d = n(961350),
    _ = n(696451),
    f = n(860689),
    p = n(661191),
    h = n(107123),
    m = n(985018),
    g = n(101702);
function E(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        l = t.id,
        c = (0, a.bG)([_.Ay, d.default], () => _.Ay.getMember(l, d.default.getId())?.joinedAt != null, [l]),
        f = i.useCallback(
            (e) => {
                c && (e.stopPropagation(), (0, u.u)(t.id));
            },
            [c, t.id],
        );
    return !c || n
        ? (0, r.jsx)(s.m, {
              text: t.name,
              overflowOnly: !0,
              children: (0, r.jsx)(o.Heading, {
                  className: g.J5,
                  variant: "heading-md/semibold",
                  color: "text-strong",
                  children: t.name,
              }),
          })
        : (0, r.jsx)(o.DUT, {
              className: g.YS,
              onClick: f,
              children: (0, r.jsx)(s.m, {
                  text: t.name,
                  overflowOnly: !0,
                  children: (0, r.jsx)(o.Heading, {
                      className: g.J5,
                      variant: "heading-md/semibold",
                      color: "text-strong",
                      children: t.name,
                  }),
              }),
          });
}
function A(e) {
    let { profile: t, disableGuildNameClick: n } = e,
        s = (0, a.bG)([c.default], () => c.default.locale),
        u = (0, h.P)(p.default.extractTimestamp(t.id), s),
        d = i.useMemo(() => {
            let e = (0, f.b9)(t);
            return (0, r.jsx)(l.A, { guild: e, isBannerVisible: !1 });
        }, [t]);
    return (0, r.jsxs)("div", {
        className: g.wx,
        children: [
            (0, r.jsxs)("div", {
                className: g.VW,
                children: [(0, r.jsx)(E, { profile: t, disableGuildNameClick: n }), d],
            }),
            (0, r.jsxs)("div", {
                className: g.ol,
                children: [
                    (0, r.jsxs)("div", {
                        className: g.Kl,
                        children: [
                            (0, r.jsx)("div", { className: g.JX }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.intl.format(m.t["LC+S+m"], { membersOnline: t.onlineCount }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: g.Kl,
                        children: [
                            (0, r.jsx)("div", { className: g.Om }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-subtle",
                                children: m.intl.format(m.t.zRl6XR, { count: t.memberCount }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: g.b5,
                children: (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: m.intl.format(m.t.zb2Q56, { createdAtDate: u }),
                }),
            }),
        ],
    });
}
