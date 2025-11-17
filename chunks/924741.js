n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Nevybrat\xe9 polo\u{17E}ky: ${e.item}.`,
    longPressToSelect: `Dlh\u{161}\xedm stla\u{10D}en\xedm prejdite do re\u{17E}imu v\xfdberu.`,
    select: `Vybra\u{165}`,
    selectedAll: `V\u{161}etky vybrat\xe9 polo\u{17E}ky.`,
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `\u{17D}iadne vybrat\xe9 polo\u{17E}ky`,
            one: () => `${t.number(e.count)} vybrat\xe1 polo\u{17E}ka`,
            other: () => `Po\u{10D}et vybrat\xfdch polo\u{17E}iek:${t.number(e.count)}`,
        })}.`,
    selectedItem: (e) => `Vybrat\xe9 polo\u{17E}ky: ${e.item}.`,
};
