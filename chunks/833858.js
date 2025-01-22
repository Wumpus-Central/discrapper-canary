r.d(n, {
    O8: function () {
        return _;
    },
    V: function () {
        return p;
    },
    tV: function () {
        return h;
    }
});
var i = r(981631),
    a = r(388032),
    o = r(337258),
    s = r(705196),
    l = r(190878),
    u = r(991254),
    c = r(485686),
    d = r(400976),
    f = r(443909);
let p = () => ({
        [i.tNA.CHILLING]: {
            title: a.intl.string(a.t['vkpn7+']),
            icon: s,
            color: '#567C7E'
        },
        [i.tNA.GAMING]: {
            title: a.intl.string(a.t.lZslwM),
            icon: l,
            color: '#685F8C'
        },
        [i.tNA.FOCUSING]: {
            title: a.intl.string(a.t.b6AscH),
            icon: c,
            color: '#7F6956'
        },
        [i.tNA.BRB]: {
            title: a.intl.string(a.t['30yqZW']),
            icon: o,
            color: '#76567E'
        },
        [i.tNA.EATING]: {
            title: a.intl.string(a.t.UVSEhY),
            icon: u,
            color: '#717B54'
        },
        [i.tNA.IN_TRANSIT]: {
            title: a.intl.string(a.t['l0q9/f']),
            icon: d,
            color: '#56697F'
        },
        [i.tNA.WATCHING]: {
            title: a.intl.string(a.t.di6IFx),
            icon: f,
            color: '#7C5571'
        }
    }),
    h = (e) => {
        if ((null == e ? void 0 : e.type) !== i.IIU.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
        let n = e.state;
        return n === i.tNA.CUSTOM ? null : p()[n];
    },
    _ = (e) => {
        var n;
        return ((null == e ? void 0 : e.state) != null ? e.state : null) === i.tNA.CUSTOM ? (null == e ? void 0 : e.details) : null === (n = h(e)) || void 0 === n ? void 0 : n.title;
    };
