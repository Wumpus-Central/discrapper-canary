n.d(t, {
    EM: function () {
        return g;
    },
    WW: function () {
        return v;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(997638),
    a = n(362658),
    o = n(216306),
    s = n(155409),
    c = n(540126),
    u = n(301342),
    d = n(327530),
    h = n(981631),
    p = n(388032),
    f = n(607686);
function m(e) {
    return e ? 9 : d.QP;
}
function g(e, t, n, i) {
    if (e === c.wZ) return d.$k;
    if (e === c.wd) return t.hasFeature(h.oNc.HUB) ? 0 : d.$k;
    if (e === n.voiceChannelsSectionNumber) {
        var l;
        let t = n.getCategoryFromSection(e);
        if (null == t || t.isEmpty()) return 0;
        if (t.isCollapsed) return d.Pw + m(i);
        let r = null === (l = n.getChannelFromSectionRow(e, 0)) || void 0 === l ? void 0 : l.channel;
        return null == r || r.record.type === h.d4z.GUILD_CATEGORY ? m(i) : 16 + m(i);
    }
    return d.Pw;
}
function v(e, t) {
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
t.ZP = l.memo(function (e) {
    let { sectionIndex: t, guild: n, guildChannels: m, guildChannelsVersion: g, selectedChannelId: v, disableManageChannels: C } = e,
        { isFavoritesPerk: x } = (0, a.z)('ChannelListSection'),
        I = l.useCallback(() => {
            let e = m.getCategoryFromSection(m.recentsSectionNumber);
            if (null == e) return;
            let t = null,
                i = e.getShownChannelAndThreadIds();
            null != v && i.includes(v) && (t = (0, o.KY)(m)), (0, o.Uo)(n.id, i, t);
        }, [n.id, v, m, g]);
    switch (t) {
        case c.wZ:
            return (0, i.jsx)('div', { style: { height: d.$k } });
        case c.wd:
            if (n.hasFeature(h.oNc.HUB)) return null;
            return (0, i.jsx)('div', { style: { height: d.$k } });
        case c.p2:
            return (0, i.jsx)(u.P, { name: x ? p.intl.string(p.t.mlPMCw) : p.intl.string(p.t.k8fFjo) });
        case m.recentsSectionNumber:
            return (0, i.jsx)(u.P, {
                name: p.intl.string(p.t.gKcrqK),
                onDismiss: I
            });
        case m.voiceChannelsSectionNumber: {
            var _;
            let e = m.getCategoryFromSection(m.voiceChannelsSectionNumber);
            if (null == e || e.isEmpty()) return null;
            let n = null === (_ = m.getChannelFromSectionRow(t, 0)) || void 0 === _ ? void 0 : _.channel;
            return (0, i.jsxs)(l.Fragment, {
                children: [
                    (0, i.jsx)('div', { className: f.sectionDivider }),
                    (0, i.jsx)(u.rj, {
                        category: e,
                        channel: n
                    })
                ]
            });
        }
        case c.wF: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: C,
                children: (0, i.jsx)(s.Z, {
                    inlineSpecs: d.MF,
                    arrowAlignment: r.cy.TOP,
                    tutorialId: 'organize-by-topic',
                    position: 'right'
                })
            });
        }
        default: {
            let e = m.getNamedCategoryFromSection(t);
            if (null == e) return null;
            return (0, i.jsx)(u.ZP, {
                channel: e.record,
                position: e.position,
                disableManageChannels: C
            });
        }
    }
});
