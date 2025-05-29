n.d(t, { c: () => g }), n(388685), n(290780);
var r = n(255367),
    i = n(73800),
    l = n(468194),
    o = n(442837),
    s = n(481060),
    a = n(686546),
    c = n(430824),
    u = n(914010),
    d = n(836344);
function h(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.ZP, {
        className: d.facepileItemContainer,
        mask: a.ZP.Masks.SQUIRCLE,
        width: 25,
        height: 25,
        children: (0, r.jsx)(a.ZP, {
            className: d.facepileItem,
            mask: a.ZP.Masks.SQUIRCLE,
            width: 20,
            height: 20,
            children: t
        })
    });
}
function p(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([c.Z], () => c.Z.getGuild(t));
    if (null == n) return null;
    let i = n.getIconURL(20, !1, !0),
        a = (0, l.Zg)(n.name);
    return (0, r.jsx)(h, {
        children:
            null != i
                ? (0, r.jsx)('img', {
                      src: i,
                      alt: n.name,
                      height: 20,
                      width: 20
                  })
                : (0, r.jsx)(s.Text, {
                      className: d.textItem,
                      color: 'text-secondary',
                      variant: 'text-md/semibold',
                      children: a
                  })
    });
}
function f(e) {
    let { count: t } = e;
    return (0, r.jsx)(h, {
        children: (0, r.jsxs)(s.Text, {
            className: d.textItem,
            color: 'text-secondary',
            variant: 'text-md/semibold',
            children: ['+', t]
        })
    });
}
function g(e) {
    let { guildIds: t } = e,
        n = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        { visibleGuilds: l, numTruncated: s } = (0, i.useMemo)(() => {
            let e = [...t];
            if (null != n) {
                let r = t.indexOf(n);
                -1 !== r && (e.splice(r, 1), e.unshift(n));
            }
            return 4 === e.length
                ? {
                      visibleGuilds: e,
                      numTruncated: 0
                  }
                : {
                      visibleGuilds: e.slice(0, 3),
                      numTruncated: e.length - 3
                  };
        }, [t, n]);
    return (0, r.jsxs)('div', {
        className: d.facepile,
        children: [l.map((e) => (0, r.jsx)(p, { guildId: e }, e)), s > 0 && (0, r.jsx)(f, { count: s })]
    });
}
