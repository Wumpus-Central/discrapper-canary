n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(685072),
    a = n(861254),
    s = n(871499);
let o = function (e) {
    let { iconComponent: t, ...n } = e,
        { Component: o, events: l } = (0, r.K)(),
        { groupedButtons: u } = (0, a.ZP)({ location: 'DisconnectButton' });
    return (0, i.jsx)(s.d, {
        fullRegionButton: u,
        color: 'red',
        iconComponent: null != t ? t : o,
        ...l,
        ...n
    });
};
