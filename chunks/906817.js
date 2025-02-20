n.d(t, {
    EM: () => m,
    WW: () => b,
    ZP: () => v
});
var r = n(200651),
    i = n(192379),
    l = n(997638),
    o = n(362658),
    a = n(216306),
    s = n(155409),
    c = n(540126),
    u = n(301342),
    d = n(327530),
    p = n(981631),
    h = n(388032),
    f = n(242649);
function g(e) {
    return e ? 9 : d.QP;
}
function m(e, t, n, r) {
    if (e === c.wZ) return d.$k;
    if (e === c.wd) return t.hasFeature(p.oNc.HUB) ? 0 : d.$k;
    if (e === n.voiceChannelsSectionNumber) {
        var i;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return d.Pw + g(r);
        let l = null === (i = n.getChannelFromSectionRow(e, 0)) || void 0 === i ? void 0 : i.channel;
        return null == l || l.record.type === p.d4z.GUILD_CATEGORY ? g(r) : 16 + g(r);
    }
    return d.Pw;
}
function b(e, t) {
    switch (e) {
        case c.wZ:
            return 'hoisted-spacer';
        case c.wd:
            return 'uncategorized-spacer';
        case c.p2:
            return 'favorites';
        case t.recentsSectionNumber:
            return 'recents-header';
        case t.voiceChannelsSectionNumber:
            return 'voice-channels-header';
        default: {
            let n = t.getNamedCategoryFromSection(e);
            if (null != n) return 'category-'.concat(n.id);
            return 'section-'.concat(e);
        }
    }
}
let v = i.memo(function (e) {
    let { sectionIndex: t, guild: n, guildChannels: g, guildChannelsVersion: m, selectedChannelId: b, disableManageChannels: v } = e,
        { isFavoritesPerk: y } = (0, o.z)('ChannelListSection'),
        _ = i.useCallback(() => {
            let e = g.getCategoryFromSection(g.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                r = e.getShownChannelAndThreadIds();
            null != b && r.includes(b) && (t = (0, a.KY)(g)), (0, a.Uo)(n.id, r, t);
        }, [n.id, b, g, m]);
    switch (t) {
        case c.wZ:
            return (0, r.jsx)('div', { style: { height: d.$k } });
        case c.wd:
            if (n.hasFeature(p.oNc.HUB)) return null;
            return (0, r.jsx)('div', { style: { height: d.$k } });
        case c.p2:
            return (0, r.jsx)(u.P, { name: y ? h.NW.string(h.t.mlPMCw) : h.NW.string(h.t.k8fFjo) });
        case g.recentsSectionNumber:
            return (0, r.jsx)(u.P, {
                name: h.NW.string(h.t.gKcrqK),
                onDismiss: _
            });
        case g.voiceChannelsSectionNumber: {
            var O;
            let e = g.getCategoryFromSection(g.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null === (O = g.getChannelFromSectionRow(t, 0)) || void 0 === O ? void 0 : O.channel;
            return (0, r.jsxs)(i.Fragment, {
                children: [
                    (0, r.jsx)('div', { className: f.sectionDivider }),
                    (0, r.jsx)(u.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
        case c.wF: {
            let e = g.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v,
                children: (0, r.jsx)(s.Z, {
                    inlineSpecs: d.MF,
                    arrowAlignment: l.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
        default: {
            let e = g.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, r.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: v
            });
        }
    }
});
