var i = r(200651);
r(192379);
var a = r(685072),
    o = r(861254),
    s = r(871499);
function l(e) {
    let { iconComponent: n, ...r } = e,
        { Component: l, events: u } = (0, a.K)(),
        { groupedButtons: c } = (0, o.ZP)({ location: 'DisconnectButton' });
    return (0, i.jsx)(s.d, {
        fullRegionButton: c,
        color: 'red',
        iconComponent: null != n ? n : l,
        ...u,
        ...r
    });
}
n.Z = l;
